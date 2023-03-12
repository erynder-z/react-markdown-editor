import { createContext, useState } from 'react';

interface MarkdownContextProviderProps {
  children: React.ReactElement;
}

interface MarkdownContextProps {
  markdownText: string;
  setMarkdownText: (markdownText: string) => void;
}

const MarkdownContext = createContext<MarkdownContextProps>({
  markdownText: 'Hello!',
  setMarkdownText: () => {},
});

export function MarkdownContextProvider({
  children,
}: MarkdownContextProviderProps) {
  const [markdownText, setMarkdownText] = useState<string>(
    'This text will rendered as markdown!'
  );

  return (
    <MarkdownContext.Provider value={{ markdownText, setMarkdownText }}>
      {children}
    </MarkdownContext.Provider>
  );
}

export default MarkdownContext;
