export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="p-4 bg-white shadow rounded">
      {children}
    </section>
  );
}
