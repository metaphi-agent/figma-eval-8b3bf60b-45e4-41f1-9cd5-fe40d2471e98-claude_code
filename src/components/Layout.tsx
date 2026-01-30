import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
  title: string;
}

export function Layout({ children, title }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#081028]">
      <Sidebar />
      <div className="flex-1 ml-[300px]">
        <Header title={title} />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
