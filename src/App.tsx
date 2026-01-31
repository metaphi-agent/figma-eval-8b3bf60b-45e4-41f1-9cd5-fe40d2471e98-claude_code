import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/blocks/Layout';

// Lazy load pages
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Analytics = lazy(() => import('./pages/Analytics'));
const Users = lazy(() => import('./pages/Users'));
const AddUser = lazy(() => import('./pages/AddUser'));
const Messages = lazy(() => import('./pages/Messages'));
const Kanban = lazy(() => import('./pages/Kanban'));
const Calendar = lazy(() => import('./pages/Calendar'));
const Products = lazy(() => import('./pages/Products'));

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/analytics-alt" element={<Analytics />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/add" element={<AddUser />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}
