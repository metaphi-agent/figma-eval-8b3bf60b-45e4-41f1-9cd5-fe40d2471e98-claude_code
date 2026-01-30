import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Users } from './pages/Users';
import { Messages } from './pages/Messages';
import { Kanban } from './pages/Kanban';
import { Calendar } from './pages/Calendar';
import { Products } from './pages/Products';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard-2" element={<Dashboard />} />
      <Route path="/dashboard-3" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/kanban" element={<Kanban />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}
