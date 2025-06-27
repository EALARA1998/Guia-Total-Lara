type Props = {
  children: string;
};

function dedent(text: string) {
  const lines = text.split('\n');
  const indent = lines
    .filter(line => line.trim()) // ignorar líneas vacías
    .reduce((min, line) => {
      const match = line.match(/^(\s+)/);
      if (!match) return min;
      return Math.min(min, match[1].length);
    }, Infinity);

  return lines.map(line => line.slice(indent)).join('\n');
}

// Escapa caracteres HTML para mostrar <, >, etc. correctamente
function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function Code({ children }: Props) {
  const formatted = escapeHtml(dedent(children));

  return (
    <pre>
      <code dangerouslySetInnerHTML={{ __html: formatted }} />
    </pre>
  );
}

export default Code;