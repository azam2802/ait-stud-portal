import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import scheduleData from '../data/schedule.json';

const Schedule = () => {
  const { t } = useTranslation();

  const isCurrentClass = (timeRange) => {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes(); // Convert current time to minutes

    const [start, end] = timeRange.split(' - ').map(time => {
      const [hours, minutes] = time.split(':').map(Number);
      return hours * 60 + minutes; // Convert class time to minutes
    });

    return currentTime >= start && currentTime <= end;
  };

  const getClassStyle = (class_) => {
    const isCurrent = isCurrentClass(class_.time);
    const isLunch = class_.subject.toLowerCase().includes('lunch');

    if (isLunch) {
      return 'bg-orange-900/30 border border-orange-500/50';
    }
    return isCurrent 
      ? 'bg-green-800/50 border border-green-500/50' 
      : 'bg-blue-900/30';
  };

  const renderDaySchedule = (day, schedule) => (
    <div key={day} className="bg-blue-900/50 p-4 rounded-lg">
      <h3 className="font-semibold mb-2">{schedule.name}</h3>
      <ul className="space-y-2">
        {schedule.classes.map((class_) => {
          const isCurrent = isCurrentClass(class_.time);
          const isLunch = class_.subject.toLowerCase().includes('lunch');
          
          return (
            <li 
              key={class_.id} 
              className={`relative flex justify-between items-center p-2 rounded transition-colors
                ${getClassStyle(class_)}`}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{class_.time}</span>
                <span className="text-sm">-</span>
                <span className={`text-sm ${isLunch ? 'font-medium text-orange-200' : ''}`}>
                  {class_.subject}
                </span>
              </div>
              <div className="flex flex-col items-end gap-1">
                {isCurrent && !isLunch && (
                  <span className="text-xs font-bold text-green-400 animate-pulse">
                    Current Class
                  </span>
                )}
                {isCurrent && isLunch && (
                  <span className="text-xs font-bold text-orange-400 animate-pulse">
                    Lunch Time
                  </span>
                )}
                <span className="text-xs opacity-75">{class_.teacher}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <div className="page-container animate__animated animate__fadeIn p-2 md:p-4">
      <h2 className="text-xl md:text-2xl font-bold text-center my-4 glow-text">{t('schedule.title')}</h2>
      <div className="bg-blue-900/30 rounded-lg p-4 md:p-6 max-w-4xl mx-auto backdrop-blur-sm">
        <div className="grid gap-4">
          {Object.entries(scheduleData).map(([day, schedule]) => renderDaySchedule(day, schedule))}
        </div>
      </div>
      <div className="text-center mt-6">
        <Link to="/" className="bg-blue-900 px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
          {t('common.backToMenu')}
        </Link>
      </div>
    </div>
  );
};

export { Schedule };
