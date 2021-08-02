import React, { useEffect } from 'react';
import Title from '@/components/Elements/Title';
import { Field, Form, Formik } from 'formik';
import { Col, Row } from 'antd';
import Label from '@/components/Elements/Labels';
import globalMessage from '@/messages/global';
import Input from '@/components/Elements/Input';
import Button from '@/components/Elements/Button';
import { StyledModal } from '@/components/Elements/Modal/SimpleModal';
import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { makeSelectLoading } from '@/states/global/selector';
import { LOADING_PREFIX } from '@/utils/constants';
import { updateBank } from '@/states/wallet/actions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addBankValidationSchema } from '@/validations/wallet';
import ErrorMessage from '@/components/Elements/ErrorMessage';

export function UpdateBankModal({
  bankId,
  isLoading,
  doUpdateBank,
  visible,
  title,
  onClose,
  onOk,
  okText,
  bank,
}) {
  const { t } = useTranslation();

  useEffect(() => {}, []);

  const onSubmit = (values) => {
    doUpdateBank(bankId, values);
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
          bankName: bank && bank.bankName,
          accountName: bank && bank.accountName,
          accountNumber: bank && bank.accountNumber,
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
                  type="text"
                  name="bankName"
                  placeholder={t(globalMessage.bankName)}
                  component={Input}
                />
                <ErrorMessage name="bankName" />
                <Label marginTop asterisk>
                  {t(globalMessage.accountName)}
                </Label>
                <Field
                  type="text"
                  name="accountName"
                  placeholder={t(globalMessage.accountName)}
                  component={Input}
                />
                <ErrorMessage name="accountName" />
                <Label marginTop asterisk>
                  {t(globalMessage.accountNumber)}
                </Label>
                <Field
                  type="text"
                  name="accountNumber"
                  placeholder={t(globalMessage.accountNumber)}
                  component={Input}
                />
                <ErrorMessage name="accountNumber" />
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

UpdateBankModal.propTypes = {
  bankId: PropTypes.any,
  bank: PropTypes.any,
  isLoading: PropTypes.bool,
  doUpdateBank: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectLoading(LOADING_PREFIX.BANK),
});

function mapDispatchProps(dispatch) {
  return {
    doUpdateBank: (id, payload) => dispatch(updateBank(id, payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchProps);

export default compose(withConnect)(UpdateBankModal);
