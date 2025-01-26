import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const GpaCalculator = () => {
  const { t } = useTranslation();
  const [courses, setCourses] = useState([{ name: '', grade: '', credits: '' }]);
  const [gpa, setGpa] = useState(null);

  const addCourse = () => {
    setCourses([...courses, { name: '', grade: '', credits: '' }]);
  };

  const handleInputChange = (index, field, value) => {
    const newCourses = [...courses];
    newCourses[index][field] = value;
    setCourses(newCourses);
  };

  const getGradePoints = (score) => {
    const numScore = Number(score);
    if (numScore >= 92) return 4.0;     // AA
    if (numScore >= 86) return 3.5;     // BA
    if (numScore >= 80) return 3.0;     // BB
    if (numScore >= 73) return 2.5;     // CB
    if (numScore >= 67) return 2.0;     // CC
    if (numScore >= 60) return 1.5;     // DC
    if (numScore >= 55) return 1.0;     // DD
    if (numScore >= 50) return 0.5;     // FD
    return 0.0;                         // FF
  };

  const getLetterGrade = (score) => {
    const numScore = Number(score);
    if (numScore >= 92) return 'AA';
    if (numScore >= 86) return 'BA';
    if (numScore >= 80) return 'BB';
    if (numScore >= 73) return 'CB';
    if (numScore >= 67) return 'CC';
    if (numScore >= 60) return 'DC';
    if (numScore >= 55) return 'DD';
    if (numScore >= 50) return 'FD';
    return 'FF';
  };

  const calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;

    courses.forEach(course => {
      if (course.grade && course.credits) {
        const gradePoints = getGradePoints(course.grade);
        totalPoints += gradePoints * Number(course.credits);
        totalCredits += Number(course.credits);
      }
    });

    setGpa(totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0);
  };

  return (
    <div className="page-container animate__animated animate__fadeIn p-2 md:p-4">
      <h2 className="text-xl md:text-2xl font-bold text-center my-2 md:my-4 glow-text">{t('gpa.title')}</h2>
      
      <div className="bg-yellow-600/30 border border-yellow-500/50 rounded-lg p-2 md:p-4 mb-4 md:mb-6 max-w-2xl mx-auto">
        <p className="text-yellow-200 text-center text-xs md:text-sm">
          {t('gpa.warning')}
        </p>
      </div>

      <div className="bg-blue-900/30 rounded-lg p-3 md:p-6 max-w-2xl mx-auto backdrop-blur-sm">
        <div className="text-center mb-4 text-xs md:text-sm opacity-75">
          {t('gpa.gradeScale')}: 
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 mt-1 text-xs">
            <span>AA (92-100)</span>
            <span>BA (86-91)</span>
            <span>BB (80-85)</span>
            <span>CB (73-79)</span>
            <span>CC (67-72)</span>
            <span>DC (60-66)</span>
            <span>DD (55-59)</span>
            <span>FD (50-54)</span>
            <span>FF (&lt;50)</span>
          </div>
        </div>

        <div className="space-y-2 md:space-y-4">
          {courses.map((course, index) => (
            <div key={index} className="bg-blue-900/50 p-2 md:p-4 rounded-lg grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4">
              <input
                type="text"
                placeholder={t('gpa.courseName')}
                value={course.name}
                onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                className="bg-blue-800/50 rounded px-2 py-1 md:px-3 md:py-2 md:col-span-5"
              />
              <div className="grid grid-cols-3 gap-2 md:col-span-7">
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder={t('gpa.grade')}
                  value={course.grade}
                  onChange={(e) => handleInputChange(index, 'grade', e.target.value)}
                  className="bg-blue-800/50 rounded px-2 py-1 md:px-3 md:py-2"
                />
                <div className="text-center py-1 md:py-2 font-bold bg-blue-800/30 rounded">
                  {course.grade ? getLetterGrade(course.grade) : '--'}
                </div>
                <input
                  type="number"
                  placeholder={t('gpa.credits')}
                  value={course.credits}
                  onChange={(e) => handleInputChange(index, 'credits', e.target.value)}
                  className="bg-blue-800/50 rounded px-2 py-1 md:px-3 md:py-2"
                />
              </div>
            </div>
          ))}
          <div className="flex gap-2 md:gap-4 mt-4">
            <button
              onClick={addCourse}
              className="flex-1 bg-blue-800 py-1 md:py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base"
            >
              {t('gpa.addCourse')}
            </button>
            <button
              onClick={calculateGPA}
              className="flex-1 bg-green-700 py-1 md:py-2 rounded-lg hover:bg-green-600 transition-colors text-sm md:text-base"
            >
              {t('gpa.calculate')}
            </button>
          </div>
          {gpa !== null && (
            <div className="text-center text-xl md:text-2xl font-bold mt-4 glow-text">
              {t('gpa.result', { gpa })}
            </div>
          )}
        </div>
      </div>
      <div className="text-center mt-4 md:mt-6">
        <Link to="/" className="bg-blue-900 px-4 md:px-6 py-1 md:py-2 rounded-lg hover:bg-blue-800 transition-colors text-sm md:text-base">
          {t('common.backToMenu')}
        </Link>
      </div>
    </div>
  );
};

export { GpaCalculator };
