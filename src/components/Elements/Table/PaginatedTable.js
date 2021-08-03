import React from 'react';
import Table from './index';

function PaginatedTable({
  columns,
  datasource,
  pagination,
  scroll,
  size,
  loading,
}) {
  return (
    <Table
      columns={columns}
      dataSource={datasource}
      pagination={{ pageSize: pagination, position: ['bottomCenter'] }}
      scroll={{ y: scroll, x: scroll }}
      size={size}
      loading={loading}
    />
  );
}

export default PaginatedTable;
