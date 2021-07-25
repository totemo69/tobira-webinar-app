import React from 'react';
import Table from '@/components/Elements/Table/PaginatedTable';
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  EyeFilled,
} from '@ant-design/icons';
import StyledText from '@/components/Elements/Text';
import { Tag } from 'antd';
import Button from '@/components/Elements/Button';

function TransactionHistoryTable({ displayCount, dataSource, loading }) {
  const columns = [
    {
      title: 'Date and Time',
      dataIndex: ['fields', 'transactionDate'],
      sorter: {
        multiple: 3,
      },
      align: 'center',
    },
    {
      title: 'Transaction',
      dataIndex: ['fields', 'transactionType'],
      sorter: {
        multiple: 3,
      },
      align: 'center',
      render: (titles) => (
        <>
          {titles.map((title) => {
            const transaction =
              title.length > 10 ? (
                <>
                  <ArrowDownOutlined style={{ color: '#4CAF50' }} />
                  <StyledText black content="Payment for webinar" />
                </>
              ) : (
                <>
                  <ArrowUpOutlined style={{ color: '#FF0033' }} />
                  <StyledText black content="Withdrawal" />
                </>
              );
            return (
              <>
                <StyledText black content={transaction} />
              </>
            );
          })}
        </>
      ),
    },
    {
      title: 'Amount',
      dataIndex: ['fields', 'amount'],
      sorter: {
        multiple: 3,
      },
      align: 'center',
    },
    {
      title: 'Status',
      dataIndex: ['fields', 'status'],
      sorter: {
        multiple: 3,
      },
      align: 'center',
      render: (status) => (
        <>
          {status.map((stat) => {
            let color = stat.length > 7 ? '#4CAF50' : '#FFA000';
            if (stat === 'pending') {
              color = '#FFA000';
            }
            return (
              <Tag color={color} key={stat}>
                {stat}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      dataIndex: 'action',
      sorter: {
        multiple: 3,
      },
      align: 'center',
      render: () => (
        <Button
          noBoxShadow
          type="text"
          icon={<EyeFilled style={{ color: '#0E71EB' }} />}
        >
          <StyledText blue strong content="View" />
        </Button>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      datasource={dataSource}
      pagination={displayCount}
      scroll={500}
      size="small"
      loading={loading}
    />
  );
}

export default TransactionHistoryTable;
