import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import materialsData from '../data/materials.json';

const Materials = () => {
  const { t } = useTranslation();

  const renderMaterialsList = (materials) => {
    return materials.length > 0 ? (
      <div className="space-y-2">
        {materials.map((material) => (
          <a
            key={material.id}
            href={material.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-900/50 p-3 rounded-lg flex justify-between items-center hover:bg-blue-800/50 transition-colors"
          >
            <div className="flex flex-col">
              <span className="text-sm font-medium">{material.title}</span>
              <span className="text-xs opacity-75">{t(`materials.types.${material.type}`)}</span>
            </div>
          </a>
        ))}
      </div>
    ) : (
      <div className="text-center py-8 text-sm opacity-75">
        {t('materials.noMaterials')}
      </div>
    );
  };

  return (
    <div className="page-container animate__animated animate__fadeIn p-2 md:p-4">
      <h2 className="text-xl md:text-2xl font-bold text-center my-4 glow-text">
        {t('materials.title')}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {Object.entries(materialsData).map(([key, subject]) => (
          <div key={key} className="bg-blue-900/30 rounded-lg p-4 backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-4">
              {t(`materials.subjects.${key}`)}
            </h3>
            {renderMaterialsList(subject.materials)}
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <Link to="/" className="bg-blue-900 px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
          {t('common.backToMenu')}
        </Link>
      </div>
    </div>
  );
};

export { Materials };
