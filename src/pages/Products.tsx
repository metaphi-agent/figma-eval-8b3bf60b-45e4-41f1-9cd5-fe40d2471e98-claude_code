import { useState } from 'react';
import { Plus, Pencil, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { SearchInput } from '../components/ui/Input';
import { Pagination } from '../components/ui/Table';

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  piece: number;
  colors: string[];
  status: 'Active' | 'Inactive';
}

const products: Product[] = [
  { id: '#1', name: 'Velvet Dress', category: 'Electronics', price: '$40.68', piece: 352, colors: ['green', 'orange', 'cyan'], status: 'Active' },
  { id: '#2', name: 'White T-Shirt', category: 'Electronics', price: '$43.08', piece: 584, colors: ['blue', 'cyan', 'purple'], status: 'Active' },
  { id: '#3', name: 'Hoodie', category: 'Electronic', price: '$40.68', piece: 352, colors: ['orange', 'blue', 'purple'], status: 'Active' },
  { id: '#4', name: 'Maxi Dress', category: 'Electronic', price: '$40.68', piece: 352, colors: ['green', 'blue', 'cyan'], status: 'Active' },
  { id: '#5', name: 'Off Shoulder', category: 'Electronic', price: '$40.68', piece: 352, colors: ['orange', 'blue', 'cyan'], status: 'Inactive' },
  { id: '#6', name: 'Velvet Dress', category: 'Electronic', price: '$40.68', piece: 352, colors: ['green', 'orange', 'cyan'], status: 'Active' },
  { id: '#7', name: 'T-Shirt Polo', category: 'Electronic', price: '$40.68', piece: 352, colors: ['cyan', 'blue', 'orange'], status: 'Inactive' },
  { id: '#8', name: 'Leather jacket', category: 'Electronic', price: '$40.68', piece: 352, colors: ['green', 'orange', 'purple'], status: 'Active' },
  { id: '#9', name: 'Army Dress', category: 'Electronic', price: '$40.68', piece: 352, colors: ['purple', 'blue', 'cyan'], status: 'Active' },
  { id: '#10', name: 'Oversize T-Shirt', category: 'Electronic', price: '$40.68', piece: 352, colors: ['green', 'orange', 'cyan'], status: 'Inactive' },
];

const colorMap: Record<string, string> = {
  green: 'bg-green-500',
  orange: 'bg-orange-500',
  cyan: 'bg-cyan-500',
  blue: 'bg-blue-500',
  purple: 'bg-purple-500',
};

export default function ProductsPage() {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);

  const toggleRowSelection = (id: string) => {
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
            <SearchInput placeholder="Search for products..." />
          </div>
        </div>
        <Button>
          <Plus className="w-4 h-4" />
          Add product
        </Button>
      </div>

      {/* Filters */}
      <div className="flex gap-3">
        <Badge variant="purple" className="cursor-pointer">All Products</Badge>
        <Badge variant="default" className="cursor-pointer">Active</Badge>
        <Badge variant="default" className="cursor-pointer">Inactive</Badge>
      </div>

      {/* Products Table */}
      <Card className="p-0 overflow-hidden">
        <div className="p-6 pb-4 flex items-center justify-between border-b border-neutral-600/50">
          <h3 className="text-lg font-semibold text-white">All Products</h3>
          <span className="text-sm text-primary">1 - 10 of 652</span>
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
                    className="w-4 h-4 rounded border-neutral-500 bg-neutral-700 text-primary"
                  />
                </th>
                <th className="px-4 py-4 text-left font-medium">Product Name</th>
                <th className="px-4 py-4 text-left font-medium">Category</th>
                <th className="px-4 py-4 text-left font-medium">Price</th>
                <th className="px-4 py-4 text-left font-medium">Piece</th>
                <th className="px-4 py-4 text-left font-medium">Available Color</th>
                <th className="px-4 py-4 text-left font-medium">Status</th>
                <th className="px-4 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-600/30">
              {products.map((product) => (
                <tr
                  key={product.id}
                  className={`hover:bg-neutral-600/20 transition-colors ${
                    selectedRows.has(product.id) ? 'bg-primary/10' : ''
                  }`}
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedRows.has(product.id)}
                      onChange={() => toggleRowSelection(product.id)}
                      className="w-4 h-4 rounded border-neutral-500 bg-neutral-700 text-primary"
                    />
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-neutral-600 rounded-lg flex items-center justify-center">
                        <span className="text-lg">👕</span>
                      </div>
                      <span className="font-medium text-white">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-neutral-300">{product.category}</td>
                  <td className="px-4 py-4 text-white">{product.price}</td>
                  <td className="px-4 py-4 text-neutral-300">{product.piece}</td>
                  <td className="px-4 py-4">
                    <div className="flex gap-1">
                      {product.colors.map((color, index) => (
                        <span
                          key={index}
                          className={`w-4 h-4 rounded-full ${colorMap[color]}`}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <Badge variant={product.status === 'Active' ? 'success' : 'default'}>
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
          totalPages={66}
          totalItems={652}
          itemsPerPage={10}
          onPageChange={setCurrentPage}
        />
      </Card>
    </div>
  );
}
