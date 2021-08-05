import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import Table from '@/components/Elements/Table/PaginatedTable';
import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  EyeFilled,
} from '@ant-design/icons';
import { FormatDate } from '@/utils/dateUtils';
import StyledText from '@/components/Elements/Text';
import { Tag } from 'antd';
import Button from '@/components/Elements/Button';

import message from '@/messages/wallet';
import globalMessage from '@/messages/global';
import TransactionModal from '@/components/Modules/Wallet/TransactionModal';

function TransactionHistoryTable({
  displayCount,
  dataSource,
  loading,
  onClickDetails,
  transactionDetails,
}) {
  const { t } = useTranslation();
  const [isPaymentWebinarModalVisible, setIsPaymentWebinarModalVisible] =
    useState(false);

  const viewTransactionHistory = (id) => {
    onClickDetails(id);
    setIsPaymentWebinarModalVisible(true);
  };

  const colorStatus = (status) => {
    let color = '';
    if (status === 'pending') {
      color = '#FFA000';
    } else {
      color = '#4CAF50';
    }
    return color;
  };

  const transactionTypes = (types) => {
    let returnValue = '';
    if (types === 'credit') {
      returnValue = (
        <>
          <ArrowDownOutlined style={{ color: '#4CAF50' }} />
          <StyledText black content={t(message.paymentWebinar)} />
        </>
      );
    } else {
      returnValue = (
        <>
          <ArrowUpOutlined style={{ color: '#FF0033' }} />
          <StyledText black content={t(message.withdrawWebinar)} />
        </>
      );
    }
    return returnValue;
  };

  const columns = [
    {
      title: t(message.dateAndTime),
      dataIndex: 'transactionDate',
      align: 'center',
      render: (transactionDate) =>
        FormatDate(transactionDate, 'YYYY-MM-DD HH:mm'),
    },
    {
      title: t(message.transaction),
      dataIndex: 'transactionType',
      align: 'center',
      render: (transactionType) => (
        <>
          <StyledText black content={transactionTypes(transactionType)} />
        </>
      ),
    },
    {
      title: t(message.amountInput),
      dataIndex: 'amount',
      align: 'center',
      render: (amount) => <>{amount} JPY</>,
    },
    {
      title: t(message.status),
      dataIndex: 'status',
      align: 'center',
      render: (status) => (
        <Tag color={colorStatus(status)} key={status}>
          {t(message[status])}
        </Tag>
      ),
    },
    {
      title: t(message.action),
      dataIndex: 'id',
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
        transactionDetails={transactionDetails}
        onClose={() => setIsPaymentWebinarModalVisible(false)}
      />
      <Table
        columns={columns}
        datasource={dataSource}
        pagination={displayCount}
        scroll={600}
        size="small"
        loading={loading}
      />
    </>
  );
}

export default TransactionHistoryTable;
