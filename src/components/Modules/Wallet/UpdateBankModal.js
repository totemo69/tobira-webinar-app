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

export function UpdateBankModal({
  isLoading,
  doUpdateBank,
  visible,
  title,
  onClose,
  okText,
}) {
  const { t } = useTranslation();

  useEffect(() => {}, []);

  const onSubmit = (values) => {
    doUpdateBank(values);
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
          bankName: 'mayBank',
          accountName: '123',
          accountNumber: '13222',
        }}
        onSubmit={onSubmit}
        enableReinitialize
      >
        {({ handleSubmit }) => (
          <Form>
            <Row style={{ paddingLeft: 70 }}>
              <Col span={20}>
                <Label marginTop asterisk>
                  {t(globalMessage.bankName)}
                </Label>
                <Field type="text" name="bankName" component={Input} />
                <Label marginTop asterisk>
                  {t(globalMessage.accountName)}
                </Label>
                <Field
                  type="text"
                  name="accountName"
                  placeholder={t(globalMessage.accountName)}
                  component={Input}
                />
                <Label marginTop asterisk>
                  {t(globalMessage.accountNumber)}
                </Label>
                <Field
                  type="text"
                  name="accountNumber"
                  placeholder={t(globalMessage.accountNumber)}
                  component={Input}
                />
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
  isLoading: PropTypes.bool,
  doUpdateBank: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectLoading(LOADING_PREFIX.WALLET),
});

function mapDispatchProps(dispatch) {
  return {
    doUpdateBank: (payload) => dispatch(updateBank(payload)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchProps);

export default compose(withConnect)(UpdateBankModal);
