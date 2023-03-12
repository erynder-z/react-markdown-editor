import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import MarkdownContext from '../../contexts/MarkdownContext';

export default function MarkdownDisplay() {
  const { markdownText } = useContext(MarkdownContext);
  return (
    <section className="md:w-1/2 text-2xl mb-8">
      <h1 className="text-center border-b-4 border-gray-400 font-bold">
        Output
      </h1>
      <div>
        <ReactMarkdown className="prose break-words p-4">
          {markdownText}
        </ReactMarkdown>
      </div>
    </section>
  );
}
