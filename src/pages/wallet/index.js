import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { compose } from 'redux';
import { Formik, Field, Form } from 'formik';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { createStructuredSelector } from 'reselect';
import {
  EllipsisOutlined,
  PlusSquareFilled,
  CaretDownFilled,
  BankOutlined,
  MoreOutlined,
  EditFilled,
  CloseCircleFilled,
} from '@ant-design/icons';
import Modal from 'react-modal';
import { useTranslation } from 'next-i18next';
import { Row, Col, Dropdown, Menu } from 'antd';

import Layout from '@/components/Layouts/Home';
import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/Title';
import Card from '@/components/Elements/Card';
import Span from '@/components/Elements/Span';
import Button from '@/components/Elements/Button';
import Image from '@/components/Elements/Image';
// import Table from '@/components/Elements/Table';
import Select from '@/components/Elements/Select';
import Option from '@/components/Elements/Option';
import { StyledParagraph } from '@/components/Elements/SampleParagraph';
import Label from '@/components/Elements/Labels';
import { StyledDiv } from '@/components/Modules/Modals';
import Input from '@/components/Elements/Input';
import StyledText from '@/components/Elements/Text';
import Checkbox from '@/components/Elements/Checkbox';
import SuccessModal from '@/components/Modules/Wallet/SuccessModal';
import BankModal from '@/components/Modules/Wallet/BankModal';
import DeleteModal from '@/components/Modules/Wallet/DeleteModal';
import UpdateBankModal from '@/components/Modules/Wallet/UpdateBankModal';
import ErrorMessage from '@/components/Elements/ErrorMessage';

import globalMessage from '@/messages/global';
import message from '@/messages/wallet';
import {
  makeSelectBankList,
  makeSelectWithdraw,
  makeSelectMyWallet,
} from '@/states/wallet/selector';
import {
  getBankList,
  removeBank,
  setWithdraw,
  withdraws,
  getWallet,
} from '@/states/wallet/actions';
import {
  makeSelectTransactionList,
  makeSelectTransactionDetails,
} from '@/states/transaction/selector';
import { withdrawalValidationSchema } from '@/validations/wallet';
import {
  getTransaction,
  getTransactionDetails,
} from '@/states/transaction/actions';
import TransactionHistoryTable from '@/components/Modules/Wallet/TransactionHistoryTable';
import { LOADING_PREFIX } from '@/utils/constants';
import { makeSelectLoading } from '@/states/global/selector';

export function Wallet({
  doGetBankList,
  getTransactionHistory,
  getMyWallet,
  myWallet,
  bankList,
  transactionHistoryList,
  doRemoveBank,
  doWithdraw,
  withdraw,
  isLoading,
  getDetails,
  transactionDetails,
}) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    doGetBankList();
    getTransactionHistory();
    getMyWallet();
  }, []);

  const [bankId, setBankId] = useState(null);

  const [displayCount, setDisplayCount] = useState(10);

  const [isTransferFundVisible, setIsTransferFundVisible] = useState(false);
  const [isConfirmTransferFundVisible, setIsConfirmTransferFundVisible] =
    useState(false);
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

  const showTransferFundsModal = () => {
    setIsTransferFundVisible(true);
  };

  const onAddBankAccount = () => {
    setIsBankAddModalVisible(false);
    setIsBankAddedSuccessModalVisible(true);
  };

  const showRemoveBankModal = (id) => {
    setBankId(id);
    setIsBankDeleteModalVisible(true);
  };

  const onRemoveBankAccount = useCallback((id) => {
    doRemoveBank(id, (success) => {
      setIsBankDeleteModalVisible(false);
      if (success) {
        setIsBankDeletedSuccessModalVisible(true);
      }
    });
  });

  const showUpdateModal = (id) => {
    setBankId(id);
    setIsBankEditModalVisible(true);
  };

  const onUpdateBankAccount = () => {
    setIsBankEditModalVisible(false);
    setIsBankUpdatedSuccessModalVisible(true);
  };

  const onProceed = (payload) => {
    dispatch(setWithdraw(payload));
    setIsTransferFundVisible(!setIsTransferFundVisible);
    setIsConfirmTransferFundVisible(true);
  };

  const onConfirm = () => {
    doWithdraw();
    setIsConfirmTransferFundVisible(!setIsConfirmTransferFundVisible);
    setIsTransferSuccessModalVisible(true);
  };

  const onViewDetails = (id) => {
    console.log(id);
    getDetails(id);
  };

  const bankItems = bankList.map((bank) => (
    <Col span={8} key={bank.id}>
      <Div bankList>
        <Dropdown.Button
          style={{ float: 'right' }}
          overlay={
            <Menu>
              <Menu.Item
                key="1"
                icon={<EditFilled />}
                onClick={() => showUpdateModal(bank.id)}
              >
                {t(globalMessage.edit)}
              </Menu.Item>
              <Menu.Item
                key="2"
                icon={<CloseCircleFilled />}
                style={{ color: '#FF0033' }}
                onClick={() => showRemoveBankModal(bank.id)}
              >
                <StyledText red content={t(globalMessage.delete)} />
              </Menu.Item>
            </Menu>
          }
          icon={<MoreOutlined />}
          type="text"
        />
        <Title level={5}>{bank.bankName}</Title>
        <StyledParagraph>{bank.accountName}</StyledParagraph>
        <Row align="middle">
          <EllipsisOutlined style={{ fontSize: 35 }} /> {bank.accountNumber}
        </Row>
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
        {/* Bank account update modal */}
        <UpdateBankModal
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
          onOk={() => onRemoveBankAccount(bankId)}
          title={t(message.deleteBankAccount)}
          subTitle={t(message.deleteBankAccountSubTitle)}
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
              <Title level={1}>{myWallet.currentBalance}</Title>
              {/* <Row gutter={20}>
                <Col>+ {myWallet.currentBalance}</Col>

                <Col>- {myWallet.currentBalance}</Col>
              </Row> */}
            </Div>
            <Div style={{ margin: 'auto 0', float: 'right' }}>
              <Button
                style={{ height: '50px', width: '50%' }}
                type="primary"
                onClick={showTransferFundsModal}
              >
                <Image transferFunds src="/images/transfer-funds.svg" />{' '}
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
                    style={{ width: '50px', StyledtextAlign: 'center' }}
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
                defaultValue={displayCount}
                suffixIcon={<CaretDownFilled />}
                onChange={setDisplayCount}
              >
                <Option value={10}>10</Option>
                <Option value={20}>20</Option>
                <Option value={30}>30</Option>
                <Option value={40}>40</Option>
                <Option value={50}>50</Option>
              </Select>
            </Div>
          </Div>
          <TransactionHistoryTable
            displayCount={displayCount}
            dataSource={transactionHistoryList}
            loading={isLoading}
            onClickDetails={(id) => onViewDetails(id)}
            transactionDetails={transactionDetails}
          />
        </Card>
      </Layout>

      {/* Transfer fund request modal */}
      <Modal
        isOpen={isTransferFundVisible}
        style={{
          content: {
            height: '500px',
            width: '600px',
            margin: '0 auto',
            padding: '0',
          },
        }}
      >
        <Formik
          initialValues={{
            amount: '',
            gatewayType: 'bank',
            gatewayDetails: {
              paypal: '',
              bankName: '',
              accountName: '',
              accountNumber: '',
            },
          }}
          onSubmit={onProceed}
          enableReinitialize
          validationSchema={withdrawalValidationSchema}
        >
          {({ handleSubmit }) => (
            <Form>
              <StyledDiv header>{t(message.transferFundRequest)}</StyledDiv>
              <StyledDiv style={{ padding: '20px' }}>
                <Label asterisk>
                  {t(message.enterAmountToTransfer)}{' '}
                  <span style={{ float: 'right' }}>
                    ({t(message.miniMumRequiredAmount)} 100{' '}
                    {t(globalMessage.jpy)})
                  </span>
                </Label>
                <Field
                  type="number"
                  name="amount"
                  component={Input}
                  prefix="￥"
                  suffix="JPY"
                />
                <ErrorMessage name="amount" />
              </StyledDiv>
              <StyledDiv style={{ padding: '20px' }}>
                <StyledText black content={t(message.selectPaymentGateway)} />
              </StyledDiv>
              <Row type="flex" align="middle" justify="center">
                <Col align="middle" justify="center" span={12}>
                  <Button
                    style={{
                      height: 55,
                      width: 190,
                      borderColor: 'transparent',
                    }}
                    onClick={() => setIsInputVisible(false)}
                  >
                    <img
                      src="Images/paypal.svg"
                      alt="paypal"
                      width="100"
                      height="50"
                    />
                  </Button>
                </Col>
                <Col align="middle" justify="center" span={12}>
                  <Button
                    chooseStandard
                    style={{
                      height: 55,
                      borderColor: 'transparent',
                      marginTop: 0,
                    }}
                    icon={<BankOutlined style={{ fontSize: '1.5rem' }} />}
                    onClick={() => setIsInputVisible(true)}
                  >
                    <StyledText strong blue content={t(globalMessage.bank)} />
                  </Button>
                </Col>
              </Row>
              {isInputVisible ? (
                <Row style={{ paddingLeft: 50 }}>
                  <Col span={20}>
                    <Label marginTop asterisk>
                      {t(globalMessage.bankName)}
                    </Label>
                    <Field
                      type="Text"
                      name="gatewayDetails.bankName"
                      placeholder={t(globalMessage.bankName)}
                      component={Input}
                    />
                    <ErrorMessage name="gatewayDetails.bankName" />
                    <Label marginTop asterisk>
                      {t(globalMessage.accountName)}
                    </Label>
                    <Field
                      type="Text"
                      name="gatewayDetails.accountName"
                      placeholder={t(globalMessage.accountName)}
                      component={Input}
                    />
                    <ErrorMessage name="gatewayDetails.accountName" />
                    <Label marginTop asterisk>
                      {t(globalMessage.accountNumber)}
                    </Label>
                    <Field
                      type="Text"
                      name="gatewayDetails.accountNumber"
                      placeholder={t(globalMessage.accountNumber)}
                      component={Input}
                    />
                    <ErrorMessage name="gatewayDetails.accountNumber" />
                    <Row style={{ marginTop: 20 }}>
                      <Checkbox />
                      <Label>{t(message.saveThisAccountFutureUse)}</Label>
                    </Row>
                  </Col>
                </Row>
              ) : (
                <Row style={{ paddingLeft: 50 }}>
                  <Col span={20}>
                    <Label marginTop asterisk>
                      {t(message.enterPaypalAccount)}
                    </Label>
                    <Field
                      type="Text"
                      name="gatewayDetails.paypal"
                      placeholder={t(message.enterPaypalAccount)}
                      component={Input}
                    />
                  </Col>
                </Row>
              )}

              <StyledDiv
                style={{ display: 'flex', margin: '0 auto', width: '300px' }}
              >
                <Button
                  BackButton
                  onClick={() =>
                    setIsTransferFundVisible(!setIsTransferFundVisible)
                  }
                >
                  {t(globalMessage.cancel)}
                </Button>{' '}
                <Button NextButton type="primary" onClick={handleSubmit}>
                  {t(globalMessage.proceed)}
                </Button>
              </StyledDiv>
            </Form>
          )}
        </Formik>
      </Modal>

      {/* Transfer fund request confirm modal */}
      <Modal
        isOpen={isConfirmTransferFundVisible}
        style={{
          content: {
            height: '350px',
            width: '560px',
            margin: '0 auto',
            padding: '0',
            overflow: 'hidden',
          },
        }}
      >
        <StyledDiv header>{t(message.confirmTransferFundRequest)}</StyledDiv>
        <Row
          align="middle"
          justify="center"
          style={{ padding: 30 }}
          gutter={[0, 10]}
        >
          <Col align="middle" justify="center" span={12}>
            <StyledText gray content={t(message.currentBalance)} />
          </Col>
          <Col align="middle" justify="center" span={12}>
            <StyledText content="" />
          </Col>
          <Col align="middle" justify="center" span={12}>
            <StyledText gray content={t(message.withdrawAmount)} />
          </Col>
          <Col align="middle" justify="center" span={12}>
            <StyledText content={withdraw.amount} />
          </Col>
          <Col align="middle" justify="center" span={12}>
            <StyledText gray content={t(message.remainingBalance)} />
          </Col>
          <Col align="middle" justify="center" span={12}>
            <StyledText content="" />
          </Col>
          <Col
            align="middle"
            justify="center"
            span={12}
            style={{ marginTop: 30 }}
          >
            <StyledText gray content={t(message.paymentGateway)} />
          </Col>
          <Col
            align="middle"
            justify="center"
            span={12}
            style={{ marginTop: 30 }}
          >
            <StyledText content={withdraw.gatewayType} />
          </Col>
        </Row>
        <Row align="middle" justify="center" gutter={20}>
          <Col>
            <Button
              BackButton
              noMargin
              onClick={() =>
                setIsConfirmTransferFundVisible(
                  !setIsConfirmTransferFundVisible,
                )
              }
            >
              <StyledText strong content={t(globalMessage.back)} />
            </Button>
          </Col>
          <Col>
            <Button NextButton noMargin type="primary" onClick={onConfirm}>
              {t(globalMessage.confirm)}
            </Button>
          </Col>
        </Row>
      </Modal>
    </>
  );
}

Wallet.propTypes = {
  bankList: PropTypes.any,
  transactionHistoryList: PropTypes.any,
  withdraw: PropTypes.any,
  getMyWallet: PropTypes.any,
  myWallet: PropTypes.any,
  doGetBankList: PropTypes.func,
  getTransactionHistory: PropTypes.func,
  doRemoveBank: PropTypes.func,
  doWithdraw: PropTypes.func,
  isLoading: PropTypes.bool,
  getDetails: PropTypes.func,
  transactionDetails: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  bankList: makeSelectBankList(),
  transactionHistoryList: makeSelectTransactionList(),
  transactionDetails: makeSelectTransactionDetails(),
  withdraw: makeSelectWithdraw(),
  isLoading: makeSelectLoading(LOADING_PREFIX.TRANSACTION),
  isWalletLoading: makeSelectLoading(LOADING_PREFIX.WALLET),
  isBankLoading: makeSelectLoading(LOADING_PREFIX.BANK),
  isWithdrawLoading: makeSelectLoading(LOADING_PREFIX.WITHDRAWS),
  myWallet: makeSelectMyWallet(),
});

const mapPropsToDispatch = (dispatch) => ({
  doGetBankList: () => dispatch(getBankList()),
  getTransactionHistory: () => dispatch(getTransaction()),
  getDetails: (payload) => dispatch(getTransactionDetails(payload)),
  doRemoveBank: (id, callback) => dispatch(removeBank(id, callback)),
  doWithdraw: (payload) => dispatch(withdraws(payload)),
  getMyWallet: () => dispatch(getWallet()),
});

const withConnect = connect(mapStateToProps, mapPropsToDispatch);

export default compose(withConnect)(Wallet);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['translation'])),
  },
});
