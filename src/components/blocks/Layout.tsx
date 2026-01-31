import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-neutral-800">
      <Sidebar />
      <main className="ml-[280px] min-h-screen">{children}</main>
    </div>
  );
}
