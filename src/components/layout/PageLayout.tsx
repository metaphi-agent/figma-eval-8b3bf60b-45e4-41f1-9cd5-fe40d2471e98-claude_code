import { Outlet } from 'react-router-dom';
import { Sidebar } from '../Sidebar';

export default function PageLayout() {
  return (
    <div className="flex h-screen bg-[var(--color-neutral-800)]">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-[280px] overflow-hidden">
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
