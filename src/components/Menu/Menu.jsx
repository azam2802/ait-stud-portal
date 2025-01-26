import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const { t } = useTranslation();
  
  const menuItems = [
    { title: t('menu.schedule'), path: '/schedule' },
    { title: t('menu.materials'), path: '/materials' },
    { title: t('menu.gpa'), path: '/gpa' }
  ];

  return (
    <div className="menu-container flex flex-col items-center justify-center gap-4 mt-8">
      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className="w-64 px-6 py-3 text-lg font-semibold text-white 
                     bg-blue-900 hover:bg-blue-800 rounded-lg 
                     transition-all duration-300 ease-in-out 
                     transform hover:scale-105 
                     animate__animated animate__fadeIn
                     text-center"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export { Menu };
