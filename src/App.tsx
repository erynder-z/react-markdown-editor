import './App.css';
import MarkdownDisplay from './components/MarkdownDisplay/MarkdownDisplay';
import MarkdownInput from './components/MarkdownInput/MarkdownInput';
import { MarkdownContextProvider } from './contexts/MarkdownContext';

function App() {
  return (
    <MarkdownContextProvider>
      <div className="box-border flex-col h-screen py-4 bg-gray-100">
        <header className="text-4xl font-bold text-center h-1/6 pd-4 md:pd-0">
          Markdown Editor
        </header>
        <div className="flex flex-col md:flex-row md:justify-center md:gap-0 h-5/6">
          <MarkdownInput />
          <div className="md:min-h-full md:w-1 bg-gray-500"></div>
          <MarkdownDisplay />
        </div>
      </div>
    </MarkdownContextProvider>
  );
}

export default App;
