import { ReactNode } from 'react';
import { cn } from '../../utils/cn';
import { ChevronUp, ChevronDown } from 'lucide-react';

export interface Column<T> {
  key: string;
  header: string;
  render: (item: T) => ReactNode;
  sortable?: boolean;
  width?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  onSort?: (key: string) => void;
  sortKey?: string;
  sortDirection?: 'asc' | 'desc';
  onRowClick?: (item: T) => void;
  className?: string;
  selectable?: boolean;
  onSelectionChange?: (selectedIds: string[]) => void;
  selectedIds?: string[];
  getRowId?: (item: T) => string;
}

export function DataTable<T>({
  columns,
  data,
  onSort,
  sortKey,
  sortDirection,
  onRowClick,
  className,
  selectable = false,
  onSelectionChange,
  selectedIds = [],
  getRowId,
}: DataTableProps<T>) {
  const handleSelectAll = (checked: boolean) => {
    if (onSelectionChange && getRowId) {
      if (checked) {
        onSelectionChange(data.map(getRowId));
      } else {
        onSelectionChange([]);
      }
    }
  };

  const handleSelectRow = (id: string, checked: boolean) => {
    if (onSelectionChange) {
      if (checked) {
        onSelectionChange([...selectedIds, id]);
      } else {
        onSelectionChange(selectedIds.filter((selectedId) => selectedId !== id));
      }
    }
  };

  const isAllSelected = selectable && getRowId && data.length > 0 && data.every((item) => selectedIds.includes(getRowId(item)));

  return (
    <div className={cn('overflow-x-auto', className)}>
      <table className="w-full">
        <thead>
          <tr className="border-b border-[var(--color-neutral-600)]">
            {selectable && (
              <th className="px-6 py-4 text-left">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="w-4 h-4 rounded border-[var(--color-neutral-600)] bg-[var(--color-neutral-700)] accent-[var(--color-primary)]"
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.key}
                className={cn(
                  'px-6 py-4 text-left text-sm font-medium text-[var(--color-neutral-400)]',
                  column.sortable && 'cursor-pointer hover:text-white transition-colors',
                  column.width && `w-${column.width}`
                )}
                onClick={() => column.sortable && onSort && onSort(column.key)}
              >
                <div className="flex items-center gap-2">
                  {column.header}
                  {column.sortable && sortKey === column.key && (
                    <span>
                      {sortDirection === 'asc' ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            const rowId = getRowId ? getRowId(item) : String(index);
            const isSelected = selectedIds.includes(rowId);

            return (
              <tr
                key={rowId}
                className={cn(
                  'border-b border-[var(--color-neutral-600)] transition-colors',
                  onRowClick && 'cursor-pointer',
                  'hover:bg-[var(--color-neutral-700)]/50'
                )}
                onClick={() => onRowClick && onRowClick(item)}
              >
                {selectable && (
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={(e) => {
                        e.stopPropagation();
                        handleSelectRow(rowId, e.target.checked);
                      }}
                      onClick={(e) => e.stopPropagation()}
                      className="w-4 h-4 rounded border-[var(--color-neutral-600)] bg-[var(--color-neutral-700)] accent-[var(--color-primary)]"
                    />
                  </td>
                )}
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4">
                    {column.render(item)}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
