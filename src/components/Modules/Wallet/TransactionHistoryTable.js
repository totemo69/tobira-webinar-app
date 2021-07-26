import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import Table from '@/components/Elements/Table/PaginatedTable';
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  EyeFilled,
} from '@ant-design/icons';
import StyledText from '@/components/Elements/Text';
import { Tag } from 'antd';
import Button from '@/components/Elements/Button';

import message from '@/messages/wallet';
import globalMessage from '@/messages/global';
import TransactionModal from '@/components/Modules/Wallet/TransactionModal';
import { getTransactionDetails } from '@/states/transaction/actions';

function TransactionHistoryTable({ displayCount, dataSource, loading }) {
  const { t } = useTranslation();
  const [isPaymentWebinarModalVisible, setIsPaymentWebinarModalVisible] =
    useState(false);

  const viewTransactionHistory = (id) => {
    getTransactionDetails(id);
    setIsPaymentWebinarModalVisible(true);
  };

  const columns = [
    {
      title: t(message.dateAndTime),
      dataIndex: ['fields', 'transactionDate'],
      sorter: {
        multiple: 3,
      },
      align: 'center',
    },
    {
      title: t(message.transaction),
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
      title: t(message.amountInput),
      dataIndex: ['fields', 'amount'],
      sorter: {
        multiple: 3,
      },
      align: 'center',
    },
    {
      title: t(message.status),
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
      title: t(message.action),
      dataIndex: 'action',
      sorter: {
        multiple: 3,
      },
      align: 'center',
      render: (id) => (
        <Button
          noBoxShadow
          type="text"
          icon={<EyeFilled style={{ color: '#0E71EB' }} />}
          onClick={() => viewTransactionHistory(id)}
        >
          <StyledText blue strong content={t(globalMessage.view)} />
        </Button>
      ),
    },
  ];

  return (
    <>
      <TransactionModal
        visible={isPaymentWebinarModalVisible}
        title={t(message.transactionDetails)}
        subTitle={
          <StyledText blue strong content={t(message.paymentForWebinar)} />
        }
        onClose={() => setIsPaymentWebinarModalVisible(false)}
      />
      <Table
        columns={columns}
        datasource={dataSource}
        pagination={displayCount}
        scroll={500}
        size="small"
        loading={loading}
      />
    </>
  );
}

export default TransactionHistoryTable;
