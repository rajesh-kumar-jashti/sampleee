import tools from '../../data/tools.json';

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = tools.find(t => t.slug === params.slug);

  if (!tool) return <div>Tool not found</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{tool.name}</h1>
      <p className="mb-4">{tool.description}</p>
    </div>
  );
}
