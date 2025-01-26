import { useTranslation } from 'react-i18next';
import Ait_logo from "../../assets/AIT.webp";
import { Link } from 'react-router-dom';

const Header = () => {
  const { t } = useTranslation();
  
  return (
    <div className="header text-center text-white font-bold flex flex-col justify-center items-center py-2 pt-3 md:py-4 gap-2 md:gap-4">
     <Link to="/">
      <h1 className="text-xl md:text-3xl glow-text animate__animated animate__fadeIn animate__slower px-4">
        {t('header.title')}
      </h1>
     </Link>
     <Link to="/">
      <img 
        src={Ait_logo} 
        alt="AIT" 
        className="w-32 md:w-50 mx-auto animate__animated animate__fadeIn animate__slower" 
        />
    </Link>
    </div>
  );
};

export { Header };
