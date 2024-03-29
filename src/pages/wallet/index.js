import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { compose } from 'redux';
import { Formik, Field, Form } from 'formik';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { subtract } from 'lodash';
import { createStructuredSelector } from 'reselect';
import { CaretDownFilled, InfoCircleFilled } from '@ant-design/icons';
import { useTranslation } from 'next-i18next';
import { Row, Col, message, Spin, Radio } from 'antd';
import moment from 'moment';
import { disableWeekends } from '@/utils/dateUtils';
import { withAuthSync } from '@/lib/auth';
import Layout from '@/components/Layouts/Home';
import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/Title';
import Card from '@/components/Elements/Card';
import Span from '@/components/Elements/Span';
import Button from '@/components/Elements/Button';
import Image from '@/components/Elements/Image';
import { StyledModal } from '@/components/Elements/Modal/SimpleModal';
import DatePicker from '@/components/Elements/DatePicker/SimpleDatePicker';
import Select from '@/components/Elements/Select';
import Option from '@/components/Elements/Option';
import { StyledParagraph } from '@/components/Elements/Paragraph';
import Label from '@/components/Elements/Labels';
import { StyledDiv } from '@/components/Modules/Modals';
import Input from '@/components/Elements/Input';
import StyledText from '@/components/Elements/Text';
import Checkbox from '@/components/Elements/Checkbox';
import SuccessModal from '@/components/Modules/Wallet/SuccessModal';
// import BankModal from '@/components/Modules/Wallet/BankModal';
// import DeleteModal from '@/components/Modules/Wallet/DeleteModal';
// import UpdateBankModal from '@/components/Modules/Wallet/UpdateBankModal';
import ErrorMessage from '@/components/Elements/ErrorMessage';
import validationMessage from '@/messages/validation';
import globalMessage from '@/messages/global';
import localMessage from '@/messages/wallet';
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
import { BANK_ACCOUNT_TYPE, LOADING_PREFIX } from '@/utils/constants';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectLoadingStatus,
} from '@/states/global/selector';
import { clearErrors } from '@/states/global/actions';
import {
  calculateTax,
  calculateTotal,
  calculateRemainingBalance,
} from '@/utils/math';

const RadioGroup = Radio.Group;
const PaymentButton = Radio.Button;

export function Wallet({
  doGetBankList,
  getTransactionHistory,
  getMyWallet,
  myWallet,
  // bankList,
  transactionHistoryList,
  // doRemoveBank,
  doWithdraw,
  withdraw,
  isLoading,
  isWalletLoading,
  // isBankLoading,
  // isBankStatus,
  getDetails,
  transactionDetails,
  isWithdrawLoading,
  isWithdrawStatus,
  errorMessage,
  clearErrorMessage,
}) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [onWithdraw, setOnWithdraw] = useState(false);
  // const [onBank, setOnBank] = useState(false);
  // const [onBankEdit, setOnBankEdit] = useState(false);
  // const [bankId, setBankId] = useState(null);
  // const [bankDetails, setDankDetails] = useState({});

  useEffect(() => {
    doGetBankList();
    getTransactionHistory();
    getMyWallet();
  }, []);

  useEffect(() => {
    if (!isWithdrawLoading) {
      if (onWithdraw) {
        if (isWithdrawStatus && !errorMessage) {
          setIsConfirmTransferFundVisible(!setIsConfirmTransferFundVisible);
          setIsTransferSuccessModalVisible(true);
          getTransactionHistory();
        } else {
          const { message: msg } = errorMessage.error;
          message.error(t(validationMessage[msg]));
          clearErrorMessage();
        }
      }
    }
  }, [isWithdrawLoading, onWithdraw]);

  // useEffect(() => {
  //   if (!isBankLoading) {
  //     if (onBank) {
  //       if (isBankStatus && !errorMessage) {
  //         // if (onBankEdit) {
  //         //   setIsBankEditModalVisible(false);
  //         //   setIsBankUpdatedSuccessModalVisible(true);
  //         // } else {
  //         //   setIsBankAddModalVisible(false);
  //         //   setIsBankAddedSuccessModalVisible(true);
  //         // }
  //         doGetBankList();
  //       } else {
  //         const { message: msg } = errorMessage.error;
  //         message.error(t(validationMessage[msg]));
  //         clearErrorMessage();
  //       }
  //       // setOnBank(false);
  //     }
  //   }
  // }, [isBankLoading, onBank]);

  const [displayCount, setDisplayCount] = useState(10);

  const [isTransferFundVisible, setIsTransferFundVisible] = useState(false);
  const [isConfirmTransferFundVisible, setIsConfirmTransferFundVisible] =
    useState(false);
  // const [isBankDeleteModalVisible, setIsBankDeleteModalVisible] =
  //   useState(false);
  // const [isBankAddModalVisible, setIsBankAddModalVisible] = useState(false);
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
  // const [isBankEditModalVisible, setIsBankEditModalVisible] = useState(false);

  const showTransferFundsModal = () => {
    setIsTransferFundVisible(true);
  };

  // const onAddBankAccount = () => {
  //   setOnBank(true);
  //   setOnBankEdit(false);
  // };

  // const showRemoveBankModal = (id) => {
  //   setBankId(id);
  //   setIsBankDeleteModalVisible(true);
  // };

  // const onRemoveBankAccount = useCallback((id) => {
  //   doRemoveBank(id, (success) => {
  //     setIsBankDeleteModalVisible(false);
  //     if (success) {
  //       setIsBankDeletedSuccessModalVisible(true);
  //     }
  //   });
  // });

  // const showUpdateModal = (id) => {
  //   const details = bankList.find((item) => item.id === id);
  //   setDankDetails(details);
  //   setBankId(id);
  //   setIsBankEditModalVisible(true);
  // };

  // const onUpdateBankAccount = () => {
  //   setOnBank(true);
  //   setOnBankEdit(true);
  // };

  const onProceed = (payload, { resetForm }) => {
    dispatch(setWithdraw(payload));
    setIsTransferFundVisible(!setIsTransferFundVisible);
    setIsConfirmTransferFundVisible(true);
    resetForm();
  };

  const onConfirm = () => {
    doWithdraw();
    setOnWithdraw(true);
  };

  const onViewDetails = (id) => {
    getDetails(id);
  };

  const isCanWithdraw = (val1, val2) => val1 > val2;

  // const bankItems = bankList.map((bank) => (
  //   <Col xs={24} lg={8} key={bank.id}>
  //     <Div bankList>
  //       <Dropdown.Button
  //         style={{ float: 'right' }}
  //         overlay={
  //           <Menu>
  //             <Menu.Item
  //               key="1"
  //               icon={<EditFilled />}
  //               onClick={() => showUpdateModal(bank.id)}
  //             >
  //               {t(globalMessage.edit)}
  //             </Menu.Item>
  //             <Menu.Item
  //               key="2"
  //               icon={<CloseCircleFilled />}
  //               style={{ color: '#FF0033' }}
  //               onClick={() => showRemoveBankModal(bank.id)}
  //             >
  //               <StyledText red content={t(globalMessage.delete)} />
  //             </Menu.Item>
  //           </Menu>
  //         }
  //         icon={<MoreOutlined />}
  //         type="text"
  //       />
  //       <Title level={5}>{bank.bankName}</Title>
  //       <StyledParagraph>{bank.accountName}</StyledParagraph>
  //       <Row align="middle">
  //         <EllipsisOutlined style={{ fontSize: 35 }} /> {bank.accountNumber}
  //       </Row>
  //     </Div>
  //   </Col>
  // ));

  return (
    <>
      <Layout>
        {/* Transfer fund success modal */}
        <SuccessModal
          visible={isTransferSuccessModalVisible}
          onClose={() => setIsTransferSuccessModalVisible(false)}
          title={t(localMessage.transferFundRequestSuccess)}
          subTitle={t(localMessage.successfullySentTransferFundRequest)}
        />
        {/* Bank account added success modal */}
        <SuccessModal
          visible={isBankAddedSuccessModalVisible}
          onClose={() => setIsBankAddedSuccessModalVisible(false)}
          title={t(localMessage.bankAccountAdded)}
          subTitle={t(localMessage.successfullyAddedBankAccount)}
        />
        {/* Bank account updated success modal */}
        <SuccessModal
          visible={isBankUpdatedSuccessModalVisible}
          onClose={() => setIsBankUpdatedSuccessModalVisible(false)}
          title={t(localMessage.bankAccountUpdated)}
          subTitle={t(localMessage.successfullyUpdatedBankAccount)}
        />
        {/* Bank account delete success modal */}
        <SuccessModal
          visible={isBankDeletedSuccessModalVisible}
          onClose={() => setIsBankDeletedSuccessModalVisible(false)}
          title={t(localMessage.bankAccountDeleted)}
          subTitle={t(localMessage.successfullyDeletedBankAccount)}
        />
        {/* Bank account add modal */}
        {/* <BankModal
          visible={isBankAddModalVisible}
          onClose={() => setIsBankAddModalVisible(false)}
          title={t(localMessage.addBankAccount)}
          onOk={onAddBankAccount}
          okText={t(globalMessage.add)}
        /> */}
        {/* Bank account update modal */}
        {/* <UpdateBankModal
          visible={isBankEditModalVisible}
          onClose={() => setIsBankEditModalVisible(false)}
          title={t(localMessage.editBankAccount)}
          onOk={onUpdateBankAccount}
          bankId={bankId}
          bank={bankDetails}
          okText={t(localMessage.saveChanges)}
        /> */}
        {/* Bank account delete modal */}
        {/* <DeleteModal
          visible={isBankDeleteModalVisible}
          onClose={() => setIsBankDeleteModalVisible(false)}
          onOk={() => onRemoveBankAccount(bankId)}
          title={t(localMessage.deleteBankAccount)}
          subTitle={t(localMessage.deleteBankAccountSubTitle)}
        /> */}
        <Div marginBottomLarge flexTop>
          <Title secondary marginRight>
            {t(localMessage.wallet)}
          </Title>
        </Div>

        <Card Padding>
          <Div walletBalance>
            <Div walletBalancePadding>
              <Span>{t(localMessage.currentWalletBalance)}</Span>
              <Title level={1}>
                {isWalletLoading && <Spin />}
                {!isWalletLoading && myWallet.currentBalance}
              </Title>
              {/* <Row gutter={20}>
                <Col>+ {myWallet.currentBalance}</Col>

                <Col>- {myWallet.currentBalance}</Col>
              </Row> */}
            </Div>
            <Div style={{ margin: 'auto 0', float: 'right' }}>
              <Button
                btnTransferFund
                type="primary"
                onClick={showTransferFundsModal}
              >
                <Image transferFunds src="/images/transfer-funds.svg" />{' '}
                {t(localMessage.transferFunds)}
              </Button>
            </Div>
          </Div>
          {/* <Div marginY>
            <StyledParagraph colorBlue>
              {t(localMessage.bankList)}
            </StyledParagraph>
          </Div> */}

          {/* <Div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          />
          <Row gutter={[24, 24]}>
            {bankItems}
            <Col xs={24} lg={8}>
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
                    {t(localMessage.addBankAccount)}
                  </StyledParagraph>
                </Div>
              </Div>
            </Col>
          </Row> */}

          <Div marginY>
            <StyledParagraph colorBlue>
              {t(localMessage.allTransactionHistory)}
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
      <StyledModal
        visible={isTransferFundVisible}
        footer={null}
        closable={false}
      >
        <Formik
          initialValues={{
            amount: 100,
            gatewayType: 'paypal',
            gatewayDetails: {
              gatewayType: 'paypal',
              paypal: '',
              bankName: '',
              branchCode: '',
              branchName: '',
              accountName: '',
              accountNumber: '',
              accountType: '',
              requestorName: '',
            },
            requestDate: moment(),
            includeTax: 'false',
            taxAmount: 0,
            totalAmount: 100,
            remainingBalance: myWallet.currentBalance - 100,
          }}
          onSubmit={onProceed}
          enableReinitialize
          validationSchema={withdrawalValidationSchema}
        >
          {({ handleSubmit, setFieldValue, values }) => (
            <Form>
              <StyledDiv header>
                {t(localMessage.transferFundRequest)}
              </StyledDiv>
              <StyledDiv style={{ padding: '20px' }}>
                <Label asterisk>
                  {t(localMessage.enterAmountToTransfer)}{' '}
                  <span style={{ float: 'right' }}>
                    ({t(localMessage.miniMumRequiredAmount)} 100{' '}
                    {t(globalMessage.jpy)})
                  </span>
                </Label>
                <Field
                  type="number"
                  name="amount"
                  component={Input}
                  autoComplete="off"
                  prefix="￥"
                  suffix="JPY"
                  onChange={(e) => {
                    const amount = parseInt(e.target.value || 0, 10);
                    setFieldValue('amount', amount);

                    const tax = calculateTax(amount, values.includeTax);
                    setFieldValue('taxAmount', tax);

                    const totalAmount = calculateTotal(amount, tax || 0);
                    setFieldValue('totalAmount', totalAmount);

                    const remainingBalance = calculateRemainingBalance(
                      myWallet.currentBalance,
                      totalAmount,
                    );
                    setFieldValue('remainingBalance', remainingBalance);
                  }}
                />
                <ErrorMessage name="amount" />
                <ErrorMessage name="remainingBalance" />
              </StyledDiv>
              <StyledDiv style={{ padding: '20px' }}>
                <StyledText
                  black
                  content={t(localMessage.selectPaymentGateway)}
                />
              </StyledDiv>
              <Row style={{ padding: '0 35px' }}>
                <Col align="left" justify="left" span={24}>
                  <RadioGroup defaultValue="Paypal" name="payment-method">
                    <PaymentButton value="Paypal">
                      <Image
                        style={{ marginLeft: '5em' }}
                        src="/images/paypal.svg"
                        alt="paypal image"
                      />
                    </PaymentButton>
                    {/* <PaymentButton value="Other">
                      <Image src="/images/other-payment.svg" />
                    </PaymentButton> */}
                  </RadioGroup>
                  {/* <Button
                    style={{
                      height: 55,
                      width: 190,
                      borderColor: 'transparent',
                    }}
                    onClick={() => {
                      setFieldValue('gatewayType', 'paypal');
                      setFieldValue('gatewayDetails.gatewayType', 'paypal');
                    }}
                  >
                    <img
                      src="/images/paypal.svg"
                      alt="paypal"
                      width="100"
                      height="50"
                    />
                  </Button> */}
                </Col>
                {/* <Col align="middle" justify="center" span={12}>
                  <Button
                    chooseStandard
                    style={{
                      height: 55,
                      borderColor: 'transparent',
                      marginTop: 0,
                    }}
                    icon={<BankOutlined style={{ fontSize: '1.5rem' }} />}
                    onClick={() => {
                      setFieldValue('gatewayType', 'bank');
                      setFieldValue('gatewayDetails.gatewayType', 'bank');
                    }}
                  >
                    <StyledText strong blue content={t(globalMessage.bank)} />
                  </Button>
                </Col> */}
              </Row>
              {values.gatewayType === 'bank' ? (
                <Row style={{ padding: '0 35px' }}>
                  <Col span={24}>
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
                    <Row gutter={20}>
                      <Col span={11}>
                        <Label marginTop asterisk>
                          {t(globalMessage.branchCode)}
                        </Label>
                        <Field
                          type="text"
                          name="gatewayDetails.branchCode"
                          placeholder={t(globalMessage.branchCode)}
                          component={Input}
                        />
                        <ErrorMessage name="gatewayDetails.branchCode" />
                      </Col>
                      <Col span={13}>
                        <Label marginTop asterisk>
                          {t(globalMessage.branchName)}
                        </Label>
                        <Field
                          type="text"
                          name="gatewayDetails.branchName"
                          placeholder={t(globalMessage.branchName)}
                          component={Input}
                        />
                        <ErrorMessage name="gatewayDetails.branchName" />
                      </Col>
                    </Row>
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
                    <Field type="hidden" name="accountType" />
                    <Label marginTop asterisk>
                      {t(globalMessage.accountType)}
                    </Label>
                    <Radio.Group
                      onChange={(e) =>
                        setFieldValue(
                          'gatewayDetails.accountType',
                          e.target.value,
                        )
                      }
                      value={values.gatewayDetails.accountType}
                    >
                      <Radio value={BANK_ACCOUNT_TYPE.SAVINGS}>
                        {t(globalMessage.usually)}
                      </Radio>
                      <Radio value={BANK_ACCOUNT_TYPE.CHECKING}>
                        {t(globalMessage.current)}
                      </Radio>
                    </Radio.Group>
                    <ErrorMessage name="gatewayDetails.accountType" />
                    <Label marginTop asterisk>
                      {t(globalMessage.accountName)}
                    </Label>
                    <Field
                      type="text"
                      name="gatewayDetails.accountName"
                      placeholder={t(globalMessage.accountName)}
                      component={Input}
                    />
                    <ErrorMessage name="gatewayDetails.accountName" />
                    <Label marginTop asterisk>
                      {t(globalMessage.transferRequestName)}
                    </Label>
                    <Field
                      type="text"
                      name="gatewayDetails.requestorName"
                      placeholder={t(globalMessage.transferRequestName)}
                      component={Input}
                    />
                    <ErrorMessage name="gatewayDetails.requestorName" />
                  </Col>
                </Row>
              ) : (
                <Row style={{ padding: '0 35px' }}>
                  <Col span={24}>
                    <Label marginTop asterisk>
                      {t(localMessage.enterPaypalAccount)}
                    </Label>
                    <Field
                      type="Text"
                      name="gatewayDetails.paypal"
                      placeholder={t(localMessage.enterPaypalAccount)}
                      component={Input}
                    />
                    <ErrorMessage name="gatewayDetails.paypal" />
                  </Col>
                </Row>
              )}
              <Row style={{ padding: '0 35px' }}>
                <Col span={24}>
                  <Label marginTop asterisk>
                    {t(globalMessage.specifiedTransferDate)}
                  </Label>
                  <Field
                    type="text"
                    name="requestDate"
                    size="large"
                    placeholder={t(globalMessage.specifiedTransferDate)}
                    fullWidth
                    component={DatePicker}
                    onChange={(e) => setFieldValue('requestDate', e)}
                    style={{ fontSize: 12 }}
                    disabledDate={disableWeekends}
                  />
                  <ErrorMessage name="requestDate" />
                  {/* <Row>
                    <Label marginTop style={{ marginBottom: 7 }}>
                      {t(globalMessage.withholdingSection)}{' '}
                      <InfoCircleFilled
                        style={{
                          fontSize: '1.1em',
                          marginLeft: 11,
                          opacity: 0.65,
                        }}
                      />
                    </Label>
                  </Row> */}
                  {/* <Row gutter={16}>
                    <Col span={12}>
                      <Radio.Group
                        onChange={(e) => {
                          setFieldValue('includeTax', e.target.value);
                          const amount = parseInt(values.amount, 10);
                          setFieldValue('amount', amount);

                          const tax = calculateTax(amount, e.target.value);
                          setFieldValue('taxAmount', tax);

                          const totalAmount = calculateTotal(amount, tax || 0);
                          setFieldValue('totalAmount', totalAmount);

                          const remainingBalance = calculateRemainingBalance(
                            myWallet.currentBalance,
                            totalAmount,
                          );
                          setFieldValue('remainingBalance', remainingBalance);
                        }}
                        value={values.includeTax}
                        buttonStyle="solid"
                        style={{ width: '100%' }}
                      >
                        <Radio.Button disabled value="true">
                          {t(globalMessage.ok)}
                        </Radio.Button>
                        <Radio.Button value="false">
                          {t(globalMessage.no)}
                        </Radio.Button>
                      </Radio.Group>
                      <ErrorMessage name="includeTax" />
                    </Col>
                  </Row> */}
                  <Row justify="end" style={{ marginTop: 30 }}>
                    <Col span={15} align="end">
                      <StyledText
                        gray
                        strong
                        content={t(globalMessage.transferAmountMoney)}
                      />
                      <InfoCircleFilled
                        style={{
                          fontSize: '1.1em',
                          marginLeft: 11,
                          opacity: 0.65,
                        }}
                      />
                    </Col>
                    <Col span={9} align="end">
                      <StyledText gray strong content={values.amount} />
                      <StyledText
                        gray
                        strong
                        content={t(globalMessage.currency)}
                      />
                    </Col>
                  </Row>
                  {/* <Row justify="end">
                    <Col span={15} align="end">
                      <StyledText
                        gray
                        strong
                        content={t(globalMessage.withholdingAmount)}
                      />
                      <InfoCircleFilled
                        style={{
                          fontSize: '1.1em',
                          marginLeft: 11,
                          opacity: 0.65,
                        }}
                      />
                    </Col>
                    <Col span={9} align="end">
                      <StyledText gray strong content={values.taxAmount} />
                      <StyledText
                        gray
                        strong
                        content={t(globalMessage.currency)}
                      />
                    </Col>
                  </Row> */}
                  <Row justify="end">
                    <Col span={13} align="end">
                      <StyledText
                        gray
                        strong
                        content={t(globalMessage.totalWithdrawalAmount)}
                      />
                    </Col>
                    <Col span={11} align="end">
                      <StyledText gray strong content={values.totalAmount} />
                      <StyledText
                        gray
                        strong
                        content={t(globalMessage.currency)}
                      />
                    </Col>
                  </Row>
                  <hr />
                  <Row>
                    <Col span={13} align="end">
                      <StyledText
                        gray
                        strong
                        content={t(globalMessage.accountBalanceAfterWithdrawal)}
                      />
                    </Col>
                    <Col span={11} align="end">
                      <StyledText
                        gray
                        strong
                        content={values.remainingBalance}
                      />
                      <StyledText
                        gray
                        strong
                        content={t(globalMessage.currency)}
                      />
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 20 }}>
                    <Col align="left">
                      <InfoCircleFilled
                        style={{
                          fontSize: '1.1em',
                          marginLeft: 5,
                          opacity: 0.65,
                        }}
                      />
                      <Button
                        noBoxShadow
                        type="text"
                        onClick={() => {
                          window.open(
                            'https://www.paypal.com/jp/webapps/mpp/merchant-fees',
                            '_blank',
                          );
                        }}
                      >
                        <StyledText
                          blue
                          strong
                          content={t(globalMessage.paypalFees)}
                        />
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={24} align="left">
                      <Checkbox />
                      <Label>{t(localMessage.saveThisAccountFutureUse)}</Label>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <StyledDiv
                style={{ display: 'flex', margin: '0 auto', width: '300px' }}
              >
                <Button
                  btnTFR
                  onClick={() =>
                    setIsTransferFundVisible(!setIsTransferFundVisible)
                  }
                >
                  {t(globalMessage.cancel)}
                </Button>{' '}
                <Button btnNextTFR type="primary" onClick={handleSubmit}>
                  {t(globalMessage.proceed)}
                </Button>
              </StyledDiv>
            </Form>
          )}
        </Formik>
      </StyledModal>

      {/* Transfer fund request confirm modal */}
      <StyledModal
        visible={isConfirmTransferFundVisible}
        footer={null}
        closable={false}
      >
        <StyledDiv header>
          {t(localMessage.confirmTransferFundRequest)}
        </StyledDiv>
        <Row
          align="middle"
          justify="center"
          style={{ padding: 30 }}
          gutter={[0, 10]}
        >
          <Col align="middle" justify="center" span={12}>
            <StyledText gray content={t(localMessage.currentBalance)} />
          </Col>
          <Col align="middle" justify="center" span={12}>
            <StyledText content={`${myWallet.currentBalance} ¥`} />
          </Col>
          <Col align="middle" justify="center" span={12}>
            <StyledText gray content={t(localMessage.withdrawAmount)} />
          </Col>
          <Col align="middle" justify="center" span={12}>
            <StyledText content={`${withdraw.totalAmount} ¥`} />
          </Col>
          <Col align="middle" justify="center" span={12}>
            <StyledText
              gray
              content={t(globalMessage.accountBalanceAfterWithdrawal)}
            />
          </Col>
          <Col align="middle" justify="center" span={12}>
            <StyledText
              content={`${subtract(
                myWallet.currentBalance,
                withdraw.totalAmount,
              )} ¥
              `}
            />
          </Col>
          <Col
            align="middle"
            justify="center"
            span={12}
            style={{ marginTop: 30 }}
          >
            <StyledText gray content={t(localMessage.paymentGateway)} />
          </Col>
          <Col
            align="middle"
            justify="center"
            span={12}
            style={{ marginTop: 30 }}
          >
            <StyledText content={t(localMessage[withdraw.gatewayType])} />
          </Col>
        </Row>
        <Row
          align="middle"
          justify="center"
          gutter={20}
          style={{ paddingBottom: 25 }}
        >
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
            <Button
              btnNextTFR
              noMargin
              type="primary"
              onClick={onConfirm}
              loading={isWithdrawLoading}
              disabled={isCanWithdraw(withdraw.amount, myWallet.currentBalance)}
            >
              {t(globalMessage.confirmButton)}
            </Button>
          </Col>
        </Row>
      </StyledModal>
    </>
  );
}

Wallet.propTypes = {
  // bankList: PropTypes.any,
  transactionHistoryList: PropTypes.any,
  withdraw: PropTypes.any,
  getMyWallet: PropTypes.any,
  myWallet: PropTypes.any,
  doGetBankList: PropTypes.func,
  getTransactionHistory: PropTypes.func,
  // doRemoveBank: PropTypes.func,
  doWithdraw: PropTypes.func,
  isLoading: PropTypes.bool,
  isWalletLoading: PropTypes.bool,
  // isBankLoading: PropTypes.bool,
  // isBankStatus: PropTypes.bool,
  getDetails: PropTypes.func,
  transactionDetails: PropTypes.any,
  isWithdrawLoading: PropTypes.bool,
  isWithdrawStatus: PropTypes.bool,
  errorMessage: PropTypes.any,
  clearErrorMessage: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  bankList: makeSelectBankList(),
  transactionHistoryList: makeSelectTransactionList(),
  transactionDetails: makeSelectTransactionDetails(),
  withdraw: makeSelectWithdraw(),
  isLoading: makeSelectLoading(LOADING_PREFIX.TRANSACTION),
  isWalletLoading: makeSelectLoading(LOADING_PREFIX.WALLET),
  isBankLoading: makeSelectLoading(LOADING_PREFIX.BANK),
  isBankStatus: makeSelectLoadingStatus(LOADING_PREFIX.BANK),
  isWithdrawLoading: makeSelectLoading(LOADING_PREFIX.WITHDRAWS),
  isWithdrawStatus: makeSelectLoadingStatus(LOADING_PREFIX.WITHDRAWS),
  myWallet: makeSelectMyWallet(),
  errorMessage: makeSelectError(),
});

const mapPropsToDispatch = (dispatch) => ({
  doGetBankList: () => dispatch(getBankList()),
  getTransactionHistory: () => dispatch(getTransaction()),
  getDetails: (payload) => dispatch(getTransactionDetails(payload)),
  doRemoveBank: (id, callback) => dispatch(removeBank(id, callback)),
  doWithdraw: (payload) => dispatch(withdraws(payload)),
  getMyWallet: () => dispatch(getWallet()),
  clearErrorMessage: () => dispatch(clearErrors()),
});

const withConnect = connect(mapStateToProps, mapPropsToDispatch);

export default compose(withConnect)(withAuthSync(Wallet));

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['translation'])),
  },
});
