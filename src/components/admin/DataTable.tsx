import { ReactNode } from 'react'

interface Column<T> {
  header: string
  accessorKey?: keyof T
  cell?: (item: T) => ReactNode
}

interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  keyExtractor: (item: T) => string | number
}

export function DataTable<T>({ data, columns, keyExtractor }: DataTableProps<T>) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden font-inter">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100 text-sm font-medium text-gray-500">
              {columns.map((col, index) => (
                <th key={index} className="px-6 py-3 whitespace-nowrap">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-100">
            {data.length > 0 ? (
              data.map((item) => (
                <tr key={keyExtractor(item)} className="hover:bg-gray-50/50 transition-colors group">
                  {columns.map((col, index) => (
                    <td key={index} className="px-6 py-4 whitespace-nowrap">
                      {col.cell ? col.cell(item) : (col.accessorKey ? String(item[col.accessorKey]) : null)}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="px-6 py-8 text-center text-gray-500">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}