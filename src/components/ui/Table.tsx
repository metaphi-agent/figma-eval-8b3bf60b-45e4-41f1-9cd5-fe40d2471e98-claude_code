import clsx from 'clsx';

interface Column<T> {
  key: string;
  label: string;
  render?: (item: T) => React.ReactNode;
  className?: string;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (item: T) => void;
  selectedRows?: Set<string | number>;
  onSelectRow?: (id: string | number) => void;
  selectable?: boolean;
  idKey?: keyof T;
}

export function Table<T extends Record<string, unknown>>({
  columns,
  data,
  onRowClick,
  selectedRows,
  onSelectRow,
  selectable = false,
  idKey = 'id' as keyof T,
}: TableProps<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-neutral-600/50">
            {selectable && (
              <th className="px-4 py-3 text-left">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-neutral-500 bg-neutral-700 text-primary focus:ring-primary/50"
                />
              </th>
            )}
            {columns.map((column) => (
              <th
                key={column.key}
                className={clsx(
                  'px-4 py-3 text-left text-xs font-medium text-neutral-300 uppercase tracking-wider',
                  column.className
                )}
              >
                <div className="flex items-center gap-1">
                  {column.label}
                  <svg
                    className="w-3 h-3 text-neutral-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                    />
                  </svg>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-600/30">
          {data.map((item, index) => {
            const id = item[idKey] as string | number;
            const isSelected = selectedRows?.has(id);

            return (
              <tr
                key={id || index}
                onClick={() => onRowClick?.(item)}
                className={clsx(
                  'transition-colors',
                  onRowClick && 'cursor-pointer',
                  isSelected
                    ? 'bg-primary/10'
                    : 'hover:bg-neutral-600/30'
                )}
              >
                {selectable && (
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => onSelectRow?.(id)}
                      onClick={(e) => e.stopPropagation()}
                      className="w-4 h-4 rounded border-neutral-500 bg-neutral-700 text-primary focus:ring-primary/50"
                    />
                  </td>
                )}
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={clsx('px-4 py-4 text-sm text-white', column.className)}
                  >
                    {column.render
                      ? column.render(item)
                      : (item[column.key] as React.ReactNode)}
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

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex items-center justify-between px-4 py-4 border-t border-neutral-600/50">
      <p className="text-sm text-neutral-300">
        {startItem} - {endItem} of {totalItems}
      </p>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-neutral-300">
          <span>Rows per page:</span>
          <select className="bg-neutral-700 border border-neutral-600 rounded px-2 py-1 text-white">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-1.5 rounded-lg hover:bg-neutral-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              className="w-4 h-4 text-neutral-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-1.5 rounded-lg hover:bg-neutral-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              className="w-4 h-4 text-neutral-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
