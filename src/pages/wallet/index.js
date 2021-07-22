import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getBankList } from '@/states/wallet/actions';
import { createStructuredSelector } from 'reselect';
import {
  EllipsisOutlined,
  PlusSquareFilled,
  CaretDownFilled,
  BankOutlined,
  MoreOutlined,
  EditFilled,
  CloseCircleFilled,
  EyeFilled,
  ArrowDownOutlined,
  ArrowUpOutlined,
} from '@ant-design/icons';
import Modal from 'react-modal';
import { useTranslation } from 'next-i18next';
import { Row, Col, Dropdown, Menu, Tag } from 'antd';

import Layout from '@/components/Layouts/Home';
import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/Title';
import Card from '@/components/Elements/Card';
import Span from '@/components/Elements/Span';
import Button from '@/components/Elements/Button';
import Image from '@/components/Elements/Image';
import Table from '@/components/Elements/Table';
import Select from '@/components/Elements/Select';
import Option from '@/components/Elements/Option';
import { StyledParagraph } from '@/components/Elements/SampleParagraph';
import Label from '@/components/Elements/Labels';
import { StyledDiv } from '@/components/Modules/Modals';
import Input from '@/components/Elements/Input';
import Text from '@/components/Elements/Text';
import Checkbox from '@/components/Elements/Checkbox';
import SuccessModal from '@/components/Modules/Wallet/SuccessModal';
import BankModal from '@/components/Modules/Wallet/BankModal';
import DeleteModal from '@/components/Modules/Wallet/DeleteModal';
import TransactionModal from '@/components/Modules/Wallet/TransactionModal';

import globalMessage from '@/messages/global';
import message from '@/messages/wallet';
import { makeSelectBankList } from '@/states/wallet/selector';

export function Wallet({ doGetBankList, bankList }) {
  const { t } = useTranslation();

  useEffect(() => {
    doGetBankList();
  }, []);

  const [visible, setVisible] = useState(false);
  const [isBankDeleteModalVisible, setIsBankDeleteModalVisible] =
    useState(false);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [isBankAddModalVisible, setIsBankAddModalVisible] = useState(false);
  const [isTransferSuccessModalVisible, setIsTransferSuccessModalVisible] =
    useState(false);
  const [isBankAddedSuccessModalVisible, setIsBankAddedSuccessModalVisible] =
    useState(false);
  const [
    isBankUpdatedSuccessModalVisible,
    setIsBankUpdatedSuccessModalVisible,
  ] = useState(false);
  const [
    isBankDeletedSuccessModalVisible,
    setIsBankDeletedSuccessModalVisible,
  ] = useState(false);
  const [isBankEditModalVisible, setIsBankEditModalVisible] = useState(false);
  const [isPaymentWebinarModalVisible, setIsPaymentWebinarModalVisible] =
    useState(false);
  const [isWithdrawalModalVisible, setIsWithdrawalModalVisible] =
    useState(false);

  const viewVisible = () => {
    setVisible(true);
  };

  const onAddBankAccount = () => {
    setIsBankAddModalVisible(false);
    setIsBankAddedSuccessModalVisible(true);
  };

  const onUpdateBankAccount = () => {
    setIsBankEditModalVisible(false);
    setIsBankUpdatedSuccessModalVisible(true);
  };

  const onDeleteBankAccount = () => {
    setIsBankDeleteModalVisible(false);
    setIsBankDeletedSuccessModalVisible(true);
  };

  const onViewTransactionDetails = () => {
    setIsWithdrawalModalVisible(true);
  };

  const dataSource = [
    {
      dateTime: 'April 05,2021 10:20',
      transaction: ['Payment for Webinar'],
      amount: '+100JPY',
      status: ['Pending'],
      action: '',
    },
    {
      dateTime: 'April 05,2021 10:20',
      transaction: ['Withdrawal'],
      amount: '-100JPY',
      status: ['Completed'],
      action: '',
    },
    {
      dateTime: 'April 05,2021 10:20',
      transaction: ['Payment for Webinar'],
      amount: '+100JPY',
      status: ['Credited'],
      action: '',
    },
  ];

  const dataTable = [
    {
      title: 'Date and Time',
      dataIndex: 'dateTime',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: 'Transaction',
      dataIndex: 'transaction',
      sorter: {
        multiple: 3,
      },
      render: (titles) => (
        <>
          {titles.map((title) => {
            const transaction =
              title.length > 10 ? (
                <>
                  <ArrowDownOutlined style={{ color: '#4CAF50' }} />
                  <Text black content="Payment for webinar" />
                </>
              ) : (
                <>
                  <ArrowUpOutlined style={{ color: '#FF0033' }} />
                  <Text black content="Withdrawal" />
                </>
              );
            return (
              <>
                <Text black content={transaction} />
              </>
            );
          })}
        </>
      ),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      sorter: {
        multiple: 3,
      },
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
      render: () => (
        <Button
          noBoxShadow
          type="text"
          icon={<EyeFilled style={{ color: '#0E71EB' }} />}
          onClick={onViewTransactionDetails}
        >
          <Text blue strong content="View" />
        </Button>
      ),
    },
  ];

  const menu = (
    <Menu>
      <Menu.Item
        key="1"
        icon={<EditFilled />}
        onClick={() => setIsBankEditModalVisible(true)}
      >
        {t(globalMessage.edit)}
      </Menu.Item>
      <Menu.Item
        key="2"
        icon={<CloseCircleFilled />}
        style={{ color: '#FF0033' }}
        onClick={() => setIsBankDeleteModalVisible(true)}
      >
        <Text red content={t(globalMessage.delete)} />
      </Menu.Item>
    </Menu>
  );

  const bankItems = bankList.map((bank) => (
    <Col span={8} key={bank.id}>
      <Div bankList>
        <Dropdown.Button
          style={{ float: 'right' }}
          overlay={menu}
          icon={<MoreOutlined />}
          type="text"
        />
        <Title level={5}>{bank.bankName}</Title>
        <StyledParagraph>{bank.accountName}</StyledParagraph>
        <EllipsisOutlined /> {bank.accountNumber}
      </Div>
    </Col>
  ));

  return (
    <>
      <Layout>
        {/* Transfer fund success modal */}
        <SuccessModal
          visible={isTransferSuccessModalVisible}
          onClose={() => setIsTransferSuccessModalVisible(false)}
          title={t(message.transferFundRequestSuccess)}
          subTitle={t(message.successfullySentTransferFundRequest)}
        />
        {/* Bank account added success modal */}
        <SuccessModal
          visible={isBankAddedSuccessModalVisible}
          onClose={() => setIsBankAddedSuccessModalVisible(false)}
          title={t(message.bankAccountAdded)}
          subTitle={t(message.successfullyAddedBankAccount)}
        />
        {/* Bank account updated success modal */}
        <SuccessModal
          visible={isBankUpdatedSuccessModalVisible}
          onClose={() => setIsBankUpdatedSuccessModalVisible(false)}
          title={t(message.bankAccountUpdated)}
          subTitle={t(message.successfullyUpdatedBankAccount)}
        />
        {/* Bank account delete success modal */}
        <SuccessModal
          visible={isBankDeletedSuccessModalVisible}
          onClose={() => setIsBankDeletedSuccessModalVisible(false)}
          title={t(message.bankAccountDeleted)}
          subTitle={t(message.successfullyDeletedBankAccount)}
        />
        {/* Bank account add modal */}
        <BankModal
          visible={isBankAddModalVisible}
          onClose={() => setIsBankAddModalVisible(false)}
          title={t(message.addBankAccount)}
          onOk={onAddBankAccount}
          okText={t(globalMessage.add)}
        />
        {/* Bank account edit modal */}
        <BankModal
          visible={isBankEditModalVisible}
          onClose={() => setIsBankEditModalVisible(false)}
          title={t(message.editBankAccount)}
          onOk={onUpdateBankAccount}
          okText={t(message.saveChanges)}
        />
        {/* Bank account delete modal */}
        <DeleteModal
          visible={isBankDeleteModalVisible}
          onClose={() => setIsBankDeleteModalVisible(false)}
          onOk={onDeleteBankAccount}
          title={t(message.deleteBankAccount)}
          subTitle={t(message.deleteBankAccountSubTitle)}
        />
        {/* Transaction Details Payment for Webinar */}
        <TransactionModal
          visible={isPaymentWebinarModalVisible}
          title={t(message.transactionDetails)}
          subTitle={<Text blue strong content={t(message.paymentForWebinar)} />}
          onClose={() => setIsPaymentWebinarModalVisible(false)}
        />
        {/* Transaction Details Withdrawal */}
        <TransactionModal
          visible={isWithdrawalModalVisible}
          title={t(message.transactionDetails)}
          subTitle={<Text blue strong content={t(message.withdrawal)} />}
          onClose={() => setIsWithdrawalModalVisible(false)}
        />

        <Div marginBottomLarge flexTop>
          <Title secondary marginRight>
            {t(message.wallet)}
          </Title>
        </Div>

        <Card style={{ padding: '20px' }}>
          <Div walletBalance>
            <Div>
              <Span>{t(message.currentWalletBalance)}</Span>
              <Title level={1}>¥ 90,000</Title>
              <Row gutter={20}>
                <Col>+ 110,000 JPY</Col>

                <Col>- 20,000 JPY</Col>
              </Row>
            </Div>
            <Div style={{ margin: 'auto 0' }}>
              <Button
                style={{ height: '50px', width: '50%' }}
                type="primary"
                onClick={() => viewVisible()}
              >
                <Image transferFunds src="Images/transfer-funds.svg" />{' '}
                {t(message.transferFunds)}
              </Button>
            </Div>
          </Div>
          <Div marginY>
            <StyledParagraph colorBlue>{t(message.bankList)}</StyledParagraph>
          </Div>

          <Div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          />
          <Row gutter={[24, 24]}>
            {bankItems}
            <Col span={8}>
              <Div bankList>
                <Div addBankList>
                  <Button
                    onClick={() => setIsBankAddModalVisible(true)}
                    style={{ width: '50px', textAlign: 'center' }}
                    type="primary"
                  >
                    <PlusSquareFilled style={{ fontSize: '20px' }} />
                  </Button>
                  <StyledParagraph colorBlue>
                    {t(message.addBankAccount)}
                  </StyledParagraph>
                </Div>
              </Div>
            </Col>
          </Row>

          <Div marginY>
            <StyledParagraph colorBlue>
              {t(message.allTransactionHistory)}
            </StyledParagraph>
          </Div>
          <Div marginY widthFull>
            <Div noMargin>
              {t(globalMessage.show)}
              <Select
                showPages
                defaultValue="10"
                suffixIcon={<CaretDownFilled />}
              >
                <Option value="10">10</Option>
                <Option value="20">20</Option>
                <Option value="30">30</Option>
                <Option value="40">40</Option>
                <Option value="50">50</Option>
              </Select>
            </Div>
          </Div>
          <Table
            columns={dataTable}
            dataSource={dataSource}
            pagination={{ position: ['bottomCenter'] }}
          />
        </Card>
      </Layout>

      {/* Transfer fund request modal */}
      <Modal
        isOpen={visible}
        style={{
          content: {
            height: '500px',
            width: '600px',
            margin: '0 auto',
            padding: '0',
          },
        }}
      >
        <StyledDiv header>{t(message.transferFundRequest)}</StyledDiv>
        <StyledDiv style={{ padding: '20px' }}>
          <Label asterisk>
            {t(message.enterAmountToTransfer)}{' '}
            <span style={{ float: 'right' }}>
              ({t(message.miniMumRequiredAmount)} 100 {t(globalMessage.jpy)})
            </span>
          </Label>
          <Input type="number" placeholder="0" prefix="￥" suffix="JPY" />
        </StyledDiv>
        <StyledDiv style={{ padding: '20px' }}>
          <Label>{t(message.selectPaymentGateway)}</Label>
        </StyledDiv>
        <Row>
          <Col span={12} style={{ paddingLeft: 40 }}>
            <Button
              style={{ height: 55, width: 190, borderColor: 'transparent' }}
              onClick={() => setIsInputVisible(false)}
            >
              <img src="Images/paypal.svg" alt="paypal" />
            </Button>
          </Col>
          <Col span={12}>
            <Button
              chooseStandard
              style={{ height: 55, borderColor: 'transparent', marginTop: 0 }}
              icon={<BankOutlined style={{ fontSize: '1.5rem' }} />}
              onClick={() => setIsInputVisible(true)}
            >
              {t(globalMessage.bank)}
            </Button>
          </Col>
        </Row>
        {isInputVisible ? (
          <Row style={{ paddingLeft: 50 }}>
            <Col span={20}>
              <Label marginTop asterisk>
                {t(globalMessage.bankName)}
              </Label>
              <Input placeholder="Bank Name" />
              <Label marginTop asterisk>
                {t(globalMessage.accountName)}
              </Label>
              <Input placeholder="Account Name" />
              <Label marginTop asterisk>
                {t(globalMessage.accountNumber)}
              </Label>
              <Input placeholder="Account Number" />
              <Row style={{ marginTop: 20 }}>
                <Checkbox />
                <Label>{t(message.saveThisAccountFutureUse)}</Label>
              </Row>
            </Col>
          </Row>
        ) : null}

        <StyledDiv
          style={{ display: 'flex', margin: '0 auto', width: '300px' }}
        >
          <Button BackButton onClick={() => setVisible(false)}>
            {t(globalMessage.cancel)}
          </Button>{' '}
          <Button NextButton type="primary">
            {t(globalMessage.proceed)}
          </Button>
        </StyledDiv>
      </Modal>
    </>
  );
}

Wallet.propTypes = {
  bankList: PropTypes.any,
  doGetBankList: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  bankList: makeSelectBankList(),
});

const mapPropsToDispatch = (dispatch) => ({
  doGetBankList: () => dispatch(getBankList()),
});

const withConnect = connect(mapStateToProps, mapPropsToDispatch);

export default compose(withConnect)(Wallet);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['translation'])),
  },
});
