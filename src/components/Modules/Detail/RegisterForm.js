import { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Row, Col } from 'antd';
import { Formik, Field, Form } from 'formik';
import { useTranslation } from 'next-i18next';
import localMessage from '@/messages/webinarDetail';
import { setWebinarRegistration } from '@/states/webinar/actions';
import { makeSelectWebinarRegistration } from '@/states/webinar/selector';
import Input, { LabelGroup } from '@/components/Elements/Input';
import Labels from '@/components/Elements/Labels';
import Button from '@/components/Elements/Button';
import classNames from './index.module.css';

const WebinarRegistrationForm = ({
  prevStep,
  nextStep,
  formDetails,
  setWebinarForm,
  registerForm,
}) => {
  const { t } = useTranslation();
  const onSubmit = (values) => {
    setWebinarForm({
      webinarId: formDetails.id,
      ...values,
    });
    nextStep();
  };
  return (
    <Formik
      initialValues={{ formFields: registerForm.formFields }}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ values, handleSubmit }) => (
        <Form>
          {formDetails.formFields.map((field, index) => (
            <LabelGroup key={`label.${field.fieldName}`} spacing="large">
              <Labels asterisk bold>
                {field.fieldName}
              </Labels>
              <Field
                type="email"
                name={`formFields.${index}.${field.fieldName}`}
                placeholder={field.fieldName}
                component={Input}
                size="large"
                initialValues={`values.formFields.${index}.${field.fieldName}`}
              />
            </LabelGroup>
          ))}
          {console.log(values)}
          <Row justify="end" className={classNames.spacer}>
            <Col lg={12} xs={24}>
              <Row>
                <Col span={12} className={classNames.registerNext}>
                  <Button type="primary" size="large" ghost onClick={prevStep}>
                    {'<'} {t(localMessage.backButton)}
                  </Button>
                </Col>
                <Col span={12} className={classNames.registerNext}>
                  <Button type="primary" size="large" onClick={handleSubmit}>
                    {t(localMessage.nextButton)} {'>'}
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

WebinarRegistrationForm.propTypes = {
  prevStep: PropTypes.func,
  nextStep: PropTypes.func,
  formDetails: PropTypes.any,
  setWebinarForm: PropTypes.func,
  registerForm: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  registerForm: makeSelectWebinarRegistration(),
});

const mapDispatchProps = (dispatch) => ({
  setWebinarForm: (payload) => dispatch(setWebinarRegistration(payload)),
});

const withConnect = connect(mapStateToProps, mapDispatchProps);

export default compose(withConnect, memo)(WebinarRegistrationForm);
