import { Layout } from '../components/Layout';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Pencil, Trash2 } from 'lucide-react';
import { products } from '../data/mockData';

export function Products() {
  return (
    <Layout title="Product List">
      <Card padding="none">
        <div className="p-6 border-b border-dark-border">
          <h2 className="text-lg font-semibold text-white">All Products</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark-border">
                <th className="px-6 py-4 text-left">
                  <input type="checkbox" className="w-4 h-4 rounded border-dark-border bg-dark-surface" />
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-neutral-400">Product</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-neutral-400">SKU</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-neutral-400">Category</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-neutral-400">Stock</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-neutral-400">Price</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-dark-border hover:bg-dark-surface/50 transition-colors">
                  <td className="px-6 py-4">
                    <input type="checkbox" className="w-4 h-4 rounded border-dark-border bg-dark-surface" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-dark-bg rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📱</span>
                      </div>
                      <span className="text-sm font-medium text-white">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-300">{product.sku}</td>
                  <td className="px-6 py-4">
                    <Badge variant="gray">{product.category}</Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-neutral-300">{product.stock}</td>
                  <td className="px-6 py-4 text-sm font-medium text-white">{product.price}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 text-neutral-400 hover:text-white transition-colors">
                        <Pencil size={16} />
                      </button>
                      <button className="p-1.5 text-neutral-400 hover:text-red-300 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </Layout>
  );
}
