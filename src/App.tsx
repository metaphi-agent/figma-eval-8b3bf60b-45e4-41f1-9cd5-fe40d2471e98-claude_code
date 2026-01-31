import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PageLayout from './components/layout/PageLayout'
import { Dashboard } from './pages/Dashboard'
import { Users } from './pages/Users'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="dashboard-2" element={<Dashboard />} />
          <Route path="dashboard-3" element={<Dashboard />} />
          <Route path="reports" element={<Dashboard />} />
          <Route path="products" element={<Dashboard />} />
          <Route path="task" element={<Dashboard />} />
          <Route path="features" element={<Dashboard />} />
          <Route path="pricing" element={<Dashboard />} />
          <Route path="integrations" element={<Dashboard />} />
          <Route path="settings" element={<Dashboard />} />
          <Route path="template-pages" element={<Dashboard />} />
          <Route path="messages" element={<Dashboard />} />
          <Route path="kanban" element={<Dashboard />} />
          <Route path="calendar" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  )
}
