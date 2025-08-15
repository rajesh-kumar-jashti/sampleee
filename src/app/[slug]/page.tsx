import tools from '../../data/tools.json';


interface ToolPageProps {
  params: {
    slug: string;
  };
}

export default function ToolPage({ params }: ToolPageProps) {
  const tool = tools.find(t => t.slug === params.slug);

  if (!tool) return <div>Tool not found</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{tool.name}</h1>
      <p className="mb-4">{tool.description}</p>
    </div>
  );
}