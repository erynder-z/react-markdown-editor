import React, { useContext, useRef } from 'react';
import MarkdownContext from '../../contexts/MarkdownContext';
import useAutResizeTextArea from '../../hooks/useAutoResizeTextArea';

export default function MarkdownInput() {
  const { markdownText, setMarkdownText } = useContext(MarkdownContext);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutResizeTextArea(textAreaRef.current, markdownText);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newInputValue = e.currentTarget.value;
    setMarkdownText(newInputValue);
  };

  return (
    <section className="md:w-1/2 text-2xl md:mb-8">
      <h1 className="text-center border-b-4 border-gray-400 font-bold">
        Input
      </h1>

      <textarea
        className="resize-none focus:outline-none focus:border-none flex w-full py-4 md:p-4 bg-gray-100"
        name="markdownInputTextarea"
        ref={textAreaRef}
        rows={1}
        cols={30}
        onChange={handleInputChange}
        placeholder="enter markdown text"
      ></textarea>
    </section>
  );
}
