import tools from '../../data/tools.json';

import { PageProps } from 'next';

// Extend PageProps so it satisfies the Next.js constraint
interface ToolPageProps extends PageProps {
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

// Pre-generate all slugs at build time (SSG)
export async function generateStaticParams() {
  return tools.map(tool => ({
    slug: tool.slug,
  }));
}
