import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useTranslation } from 'next-i18next';
import { Formik, Field, Form } from 'formik';

import { StyledModal } from '@/components/Elements/Modal/SimpleModal';
import { Col, Radio, Row } from "antd";
import Title from '@/components/Elements/Title';
import Label from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import ErrorMessage from '@/components/Elements/ErrorMessage';
import { addBank } from '@/states/wallet/actions';

import globalMessage from '@/messages/global';
import Button from '@/components/Elements/Button';
import { makeSelectLoading } from '@/states/global/selector';
import { BANK_ACCOUNT_TYPE, LOADING_PREFIX } from "@/utils/constants";
import { addBankValidationSchema } from '@/validations/wallet';

export function BankModal({
  isLoading,
  doAddBank,
  visible,
  title,
  onOk,
  onClose,
  okText,
}) {
  const { t } = useTranslation();

  const onSubmit = (values) => {
    doAddBank(values);
    onOk();
  };

  return (
    <StyledModal width={500} visible={visible} footer={null} closable={false}>
      <div style={{ backgroundColor: '#abc9ee', padding: '30px 0px 20px' }}>
        <Title level={5} align="center">
          {title}
        </Title>
      </div>
      <Formik
        initialValues={{
          bankName: '',
          accountName: '',
          accountNumber: '',
        }}
        onSubmit={onSubmit}
        enableReinitialize
        validationSchema={addBankValidationSchema}
      >
        {({ handleSubmit }) => (
          <Form>
            <Row style={{ paddingLeft: 70 }}>
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
                <Row gutter={20}>
                  <Col span={11}>
                    <Label marginTop asterisk>
                      {t(globalMessage.branchCode)}
                    </Label>
                    <Field
                      type="text"
                      name="branchCode"
                      placeholder={t(globalMessage.branchCode)}
                      component={Input}
                    />
                    <ErrorMessage name="branchCode" />
                  </Col>
                  <Col span={13}>
                    <Label marginTop asterisk>
                      {t(globalMessage.branchName)}
                    </Label>
                    <Field
                      type="text"
                      name="branchName"
                      placeholder={t(globalMessage.branchName)}
                      component={Input}
                    />
                    <ErrorMessage name="branchName" />
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
                    setFieldValue('accountType', e.target.value)
                  }
                >
                  <Radio value={BANK_ACCOUNT_TYPE.SAVINGS}>
                    {t(globalMessage.usually)}
                  </Radio>
                  <Radio value={BANK_ACCOUNT_TYPE.CHECKING}>
                    {t(globalMessage.current)}
                  </Radio>
                </Radio.Group>
                <ErrorMessage name="accountType" />
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
                  name="requestorName"
                  placeholder={t(globalMessage.transferRequestName)}
                  component={Input}
                />
                <ErrorMessage name="requestorName" />
              </Col>
            </Row>
            <Row
              align="middle"
              justify="center"
              gutter={20}
              style={{ padding: 30 }}
            >
              <Col>
                <Button BackButton noMargin onClick={onClose}>
                  {t(globalMessage.cancel)}
                </Button>
              </Col>
              <Col>
                <Button
                  NextButton
                  noMargin
                  type="primary"
                  onClick={handleSubmit}
                  loading={isLoading}
                >
                  {okText}
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </StyledModal>
  );
}

BankModal.propTypes = {
  isLoading: PropTypes.bool,
  doAddBank: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectLoading(LOADING_PREFIX.BANK),
});

function mapDispatchProps(dispatch) {
  return {
    doAddBank: (payload) => dispatch(addBank(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchProps);

export default compose(withConnect)(BankModal);
