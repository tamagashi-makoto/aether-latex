import { useState, useEffect } from 'react';
import { useTauri } from './hooks/useTauri';

function App() {
  const [latexContent, setLatexContent] = useState('');
  const [isLatexInstalled, setIsLatexInstalled] = useState(false);
  const [compilationResult, setCompilationResult] = useState('');
  
  const { compileLaTeX, openFile, saveFile, checkLaTeXInstalled } = useTauri();

  useEffect(() => {
    // アプリ起動時にLaTeXのインストール状況をチェック
    const checkInstallation = async () => {
      const installed = await checkLaTeXInstalled();
      setIsLatexInstalled(installed);
      if (!installed) {
        console.warn('LaTeX is not installed on this system');
      }
    };
    checkInstallation();
  }, []);

  const handleOpenFile = async () => {
    try {
      const content = await openFile();
      if (content) {
        setLatexContent(content);
      }
    } catch (error) {
      console.error('Error opening file:', error);
    }
  };

  const handleSaveFile = async () => {
    try {
      await saveFile(latexContent);
    } catch (error) {
      console.error('Error saving file:', error);
    }
  };

  const handleCompile = async () => {
    try {
      const result = await compileLaTeX(latexContent);
      setCompilationResult(result);
    } catch (error) {
      console.error('Error compiling LaTeX:', error);
      setCompilationResult(`Error: ${error}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Texora
          </h1>
          <p className="text-gray-600">Professional LaTeX Editor</p>
          {!isLatexInstalled && (
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4 mt-4">
              <p className="font-bold">Warning</p>
              <p>LaTeX is not installed on your system. Compilation features will not work.</p>
            </div>
          )}
        </header>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex gap-4 mb-4">
            <button
              onClick={handleOpenFile}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Open File
            </button>
            <button
              onClick={handleSaveFile}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Save File
            </button>
            <button
              onClick={handleCompile}
              disabled={!isLatexInstalled}
              className={`font-bold py-2 px-4 rounded ${
                isLatexInstalled
                  ? 'bg-purple-500 hover:bg-purple-700 text-white'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Compile LaTeX
            </button>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              LaTeX Content
            </label>
            <textarea
              value={latexContent}
              onChange={(e) => setLatexContent(e.target.value)}
              className="w-full h-96 p-4 border rounded font-mono text-sm"
              placeholder="Enter your LaTeX content here..."
            />
          </div>

          {compilationResult && (
            <div className="mt-4 p-4 bg-gray-50 rounded border">
              <h3 className="font-bold mb-2">Compilation Result:</h3>
              <pre className="text-sm">{compilationResult}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;