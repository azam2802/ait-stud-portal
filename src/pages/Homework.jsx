import { Link } from 'react-router-dom';

const Homework = () => {
  return (
    <div className="page-container animate__animated animate__fadeIn p-4">
      <h2 className="text-2xl font-bold text-center my-4 glow-text">Homework</h2>
      <div className="bg-blue-900/30 rounded-lg p-6 max-w-2xl mx-auto backdrop-blur-sm">
        <div className="space-y-4">
          <div className="bg-blue-900/50 p-4 rounded-lg">
            <h3 className="font-semibold">Mathematics</h3>
            <p className="text-sm opacity-75">Due: Tomorrow</p>
            <p className="mt-2">Complete exercises 1-5 from Chapter 3</p>
          </div>
          <div className="bg-blue-900/50 p-4 rounded-lg">
            <h3 className="font-semibold">Programming</h3>
            <p className="text-sm opacity-75">Due: Next Week</p>
            <p className="mt-2">Create a simple calculator application</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-6">
        <Link to="/" className="bg-blue-900 px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
          Back to Menu
        </Link>
      </div>
    </div>
  );
};

export {Homework};
