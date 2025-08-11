import React, { useEffect, memo } from 'react';
import { useReducer, useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

export default function ReactTable ({
  columns,
  data,
  className = '',
  useFooter = false,
}) {
  const rerender = useReducer(() => ({}), {})[1];

  const columnHelper = createColumnHelper();
  const getColumns = () => {
    let result = [];
    columns?.forEach((v, i) => {
      result.push(
        columnHelper.accessor(v.id, {
          //리턴값에 html 작성가능.
          cell: (info) => {
            if (v.cellRender && typeof v.cellRender == 'function') {
              return <>{v.cellRender(info.row.original)}</>;
            } else {
              return info.renderValue();
            }
          },
          header: () => v.header,
          size: v.size,
        }),
      );
    });
    return result;
  };

  const table = useReactTable({
    data,
    columns: getColumns(),
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <table className={className}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} style={{ width: header.getSize() }}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {useFooter && (
          <tfoot>
            {table.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.footer,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        )}
      </table>
    </>
  );
}
