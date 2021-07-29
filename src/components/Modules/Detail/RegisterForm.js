import { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Row, Col } from 'antd';
import { Formik, Field, Form } from 'formik';
import { useTranslation } from 'next-i18next';
import { DateIsBefore } from '@/utils/dateUtils';
import localMessage from '@/messages/webinarDetail';
import { setWebinarRegistration } from '@/states/webinar/actions';
import { makeSelectWebinarRegistration } from '@/states/webinar/selector';
import Input, { LabelGroup } from '@/components/Elements/Input';
import Labels from '@/components/Elements/Labels';
import Button from '@/components/Elements/Button';
import { webinarRegistration } from '@/validations/webinar';
import ErrorMessage, { DisplayError } from '@/components/Elements/ErrorMessage';
import classNames from './index.module.css';

const WebinarRegistrationForm = ({
  prevStep,
  nextStep,
  formDetails,
  setWebinarForm,
  registerForm,
}) => {
  const { t } = useTranslation();

  const { formFields } = formDetails;
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
      validateOnChange={false}
      validateOnBlur={false}
      validationSchema={webinarRegistration}
    >
      {({ handleSubmit, errors, touched }) => (
        <Form>
          <LabelGroup key={`label.${formFields[0].fieldName}`} spacing="large">
            <Labels asterisk bold>
              {formFields[0].fieldName}
            </Labels>
            <Field
              type="email"
              name={`formFields.0.Email`}
              placeholder={formFields[0].fieldName}
              component={Input}
              size="large"
              initialValues={`values.formFields.0.Email`}
              disabled={
                !DateIsBefore(
                  formDetails.schedules && formDetails.schedules[0].dateTime,
                )
              }
            />
            {errors.formFields && touched.formFields ? (
              <DisplayError error={errors.formFields[0].Email} />
            ) : null}
          </LabelGroup>
          <Row justify="end" className={classNames.spacer}>
            <Col lg={12} xs={24}>
              <Row>
                <Col span={12} className={classNames.registerNext}>
                  <Button type="primary" size="large" ghost onClick={prevStep}>
                    {'<'} {t(localMessage.backButton)}
                  </Button>
                </Col>
                <Col span={12} className={classNames.registerNext}>
                  <Button
                    type="primary"
                    size="large"
                    disabled={
                      !DateIsBefore(
                        formDetails.schedules &&
                          formDetails.schedules[0].dateTime,
                      )
                    }
                    onClick={handleSubmit}
                  >
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
