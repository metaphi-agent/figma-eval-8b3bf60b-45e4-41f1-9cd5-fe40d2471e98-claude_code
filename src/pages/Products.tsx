import { useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { SearchInput } from '../components/ui/Input';
import { Pagination } from '../components/ui/Table';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  company: string;
  companyColor: string;
  status: 'In Stock' | 'Out of stock';
  icon: string;
  iconBg: string;
}

const products: Product[] = [
  { id: 1, name: 'Watch', category: 'Accessories', price: '$ 20', company: 'Google', companyColor: 'bg-green-500', status: 'In Stock', icon: '⌚', iconBg: 'bg-gradient-to-br from-pink-500 to-purple-600' },
  { id: 2, name: 'Mobile', category: 'Telecommunication', price: '$ 500', company: 'Webflow', companyColor: 'bg-blue-500', status: 'Out of stock', icon: '📱', iconBg: 'bg-gradient-to-br from-purple-600 to-indigo-700' },
  { id: 3, name: 'Laptop', category: 'Note Book', price: '$ 800', company: 'Facebook', companyColor: 'bg-blue-600', status: 'Out of stock', icon: '💻', iconBg: 'bg-gradient-to-br from-pink-500 to-purple-600' },
  { id: 4, name: 'TV', category: 'Digital', price: '$ 250', company: 'Twitter', companyColor: 'bg-sky-500', status: 'In Stock', icon: '📺', iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500' },
  { id: 5, name: 'Camera', category: 'Digital', price: '$ 100', company: 'YouTube', companyColor: 'bg-red-500', status: 'Out of stock', icon: '📷', iconBg: 'bg-gradient-to-br from-pink-500 to-purple-600' },
  { id: 6, name: 'Perfume', category: 'Cosmetics', price: '$ 25', company: 'Reddit', companyColor: 'bg-orange-500', status: 'In Stock', icon: '🧴', iconBg: 'bg-gradient-to-br from-pink-400 to-purple-500' },
  { id: 7, name: 'Ear pods', category: 'Digital', price: '$45', company: 'Spotify', companyColor: 'bg-green-500', status: 'Out of stock', icon: '🎧', iconBg: 'bg-gradient-to-br from-pink-500 to-purple-600' },
  { id: 8, name: 'Wireless Charger', category: 'Digital', price: '$ 10', company: 'Pinterest', companyColor: 'bg-red-600', status: 'In Stock', icon: '🔋', iconBg: 'bg-gradient-to-br from-pink-400 to-purple-500' },
  { id: 9, name: 'Torch', category: 'Light', price: '$ 20', company: 'Twitch', companyColor: 'bg-purple-500', status: 'Out of stock', icon: '🔦', iconBg: 'bg-gradient-to-br from-pink-500 to-purple-600' },
  { id: 10, name: 'Access Point', category: 'Network', price: '$ 15', company: 'LinkedIn', companyColor: 'bg-blue-700', status: 'Out of stock', icon: '📡', iconBg: 'bg-gradient-to-br from-teal-500 to-blue-500' },
];

const companyLogos: Record<string, { bg: string; text: string; icon: string }> = {
  Google: { bg: 'bg-gradient-to-br from-green-400 to-green-600', text: 'text-white', icon: 'G' },
  Webflow: { bg: 'bg-blue-500', text: 'text-white', icon: 'W' },
  Facebook: { bg: 'bg-blue-600', text: 'text-white', icon: 'f' },
  Twitter: { bg: 'bg-sky-500', text: 'text-white', icon: '𝕏' },
  YouTube: { bg: 'bg-red-500', text: 'text-white', icon: '▶' },
  Reddit: { bg: 'bg-orange-500', text: 'text-white', icon: '●' },
  Spotify: { bg: 'bg-green-500', text: 'text-white', icon: '●' },
  Pinterest: { bg: 'bg-red-600', text: 'text-white', icon: 'P' },
  Twitch: { bg: 'bg-purple-500', text: 'text-white', icon: '◀' },
  LinkedIn: { bg: 'bg-blue-700', text: 'text-white', icon: 'in' },
};

export default function ProductsPage() {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set([1, 4, 6, 8]));
  const [currentPage, setCurrentPage] = useState(1);

  const toggleRowSelection = (id: number) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const toggleAllRows = () => {
    if (selectedRows.size === products.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(products.map((p) => p.id)));
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-semibold text-white">Product List</h1>
          <div className="w-80">
            <SearchInput placeholder="Search for product..." />
          </div>
        </div>
        <Button>Add New Product</Button>
      </div>

      {/* Products Table */}
      <Card className="p-0 overflow-hidden">
        <div className="p-6 pb-4 flex items-center justify-between border-b border-neutral-600/50">
          <h3 className="text-lg font-semibold text-white">All Products</h3>
          <span className="text-sm">
            <span className="text-primary">1 - 10</span>
            <span className="text-neutral-400"> of 256</span>
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-neutral-400 border-b border-neutral-600/50">
                <th className="px-6 py-4 text-left">
                  <input
                    type="checkbox"
                    checked={selectedRows.size === products.length}
                    onChange={toggleAllRows}
                    className="w-4 h-4 rounded border-neutral-500 bg-neutral-700 text-primary accent-primary"
                  />
                </th>
                <th className="px-4 py-4 text-left font-medium">
                  <div className="flex items-center gap-1">
                    <span>👤</span> Product Name
                    <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                </th>
                <th className="px-4 py-4 text-left font-medium">
                  <div className="flex items-center gap-1">
                    <span>📋</span> Category
                    <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                </th>
                <th className="px-4 py-4 text-left font-medium">
                  <div className="flex items-center gap-1">
                    <span>💰</span> Price
                    <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                </th>
                <th className="px-4 py-4 text-left font-medium">
                  <div className="flex items-center gap-1">
                    <span>🏢</span> Company
                    <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                </th>
                <th className="px-4 py-4 text-left font-medium">
                  <div className="flex items-center gap-1">
                    <span>✅</span> Status
                    <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                </th>
                <th className="px-4 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-600/30">
              {products.map((product) => (
                <tr
                  key={product.id}
                  className={`hover:bg-neutral-600/20 transition-colors ${
                    selectedRows.has(product.id) ? 'bg-primary/5' : ''
                  }`}
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedRows.has(product.id)}
                      onChange={() => toggleRowSelection(product.id)}
                      className="w-4 h-4 rounded border-neutral-500 bg-neutral-700 text-primary accent-primary"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${product.iconBg} rounded-full flex items-center justify-center text-white text-lg`}>
                        {product.icon}
                      </div>
                      <span className="font-medium text-white">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-neutral-300">{product.category}</td>
                  <td className="px-4 py-4 text-white">{product.price}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 ${companyLogos[product.company].bg} rounded-full flex items-center justify-center text-xs ${companyLogos[product.company].text} font-medium`}>
                        {companyLogos[product.company].icon}
                      </div>
                      <span className="text-neutral-300">{product.company}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <Badge variant={product.status === 'In Stock' ? 'success' : 'default'}>
                      {product.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 hover:bg-neutral-600 rounded-lg transition-colors">
                        <Pencil className="w-4 h-4 text-neutral-400" />
                      </button>
                      <button className="p-1.5 hover:bg-neutral-600 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4 text-neutral-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={46}
          totalItems={460}
          itemsPerPage={10}
          onPageChange={setCurrentPage}
        />
      </Card>
    </div>
  );
}
