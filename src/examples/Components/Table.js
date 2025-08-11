import React, { useEffect } from 'react';
import { useState } from 'react';

export default function Table ({ columns, data, className = '', colgroup }) {
  return (
    <>
      <table className={className}>
        <colgroup>
          {colgroup
            ? columns?.map((col, i) => {
                return <col style={{ width: colgroup[i] }} />;
              })
            : columns?.map((col) => {
                return (
                  <col
                    style={{ width: `${(100 / columns.length).toFixed(1)}%` }}
                  />
                );
              })}
        </colgroup>
        <thead>
          <tr>
            {columns?.map((col) => {
              return (
                <th
                  scope='col'
                  id={col.id}
                  className={`${col.isHeader ? 'bd_r' : ''}`}
                >
                  {col.header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data?.map((v) => {
            return (
              <tr>
                {columns.map((col) => {
                  return (
                    <>
                      {col.isHeader ? (
                        <>
                          <th scope='row' className='bd_r'>
                            {v[col.id]}
                          </th>
                        </>
                      ) : (
                        <>
                          <td>{v[col.id]}</td>
                        </>
                      )}
                    </>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
