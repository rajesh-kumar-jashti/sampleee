import tools from '../../data/tools.json';

// Define the props interface for App Router dynamic pages
interface ToolPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ToolPage({ params }: ToolPageProps) {
  // Await params in App Router (Next.js 15+)
  const { slug } = await params;
  const tool = tools.find(t => t.slug === slug);

  if (!tool) return <div>Tool not found</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{tool.name}</h1>
      <p className="mb-4">{tool.description}</p>
    </div>
  );
}

// Pre-generate all slugs at build time (SSG)
export async function generateStaticParams() {
  return tools.map(tool => ({
    slug: tool.slug,
  }));
}