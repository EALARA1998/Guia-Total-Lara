// Code.tsx
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  children: string;
  language?: string; // puedes pasar 'js', 'ts', 'html', etc.
};

// Elimina indentación innecesaria
function dedent(text: string) {
  const lines = text.split('\n');

  // Eliminar la primera línea si está vacía
  if (lines[0].trim() === '') {
    lines.shift();
  }

  const indent = lines
    .filter(line => line.trim())
    .reduce((min, line) => {
      const match = line.match(/^(\s+)/);
      if (!match) return min;
      return Math.min(min, match[1].length);
    }, Infinity);

  return lines.map(line => line.slice(indent)).join('\n');
}

function Code({ children, language = 'javascript' }: Props) {
  const formatted = dedent(children);

  return (
    <SyntaxHighlighter language={language} style={dracula} customStyle={{ borderRadius: '6px', fontSize: '14px' }}>
      {formatted}
    </SyntaxHighlighter>
  );
}

export default Code;