// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';
import { Row, Col, Typography, Space } from 'antd';
// import { DownOutlined, UpOutlined, PlusSquareFilled } from '@ant-design/icons';
import { useTranslation } from 'next-i18next';

import message from '@/messages/webinar';
import globalMessage from '@/messages/global';
import Label from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
// import Button from '@/components/Elements/Button';
// import Div from '@/components/Elements/Div';
import Switch from '@/components/Elements/Switch';
import ErrorMessage from '@/components/Elements/ErrorMessage';

// import { setWebinar } from '@/states/webinar/actions';
import { registrationForm } from '@/validations/webinar';

const { Text } = Typography;
export default function CreateWebinarRegistration({
  webinarForm,
  setSubmitForm,
  submitStatus,
}) {
  const { t } = useTranslation();

  // const dispatch = useDispatch();
  const onSubmit = () => {
    // dispatch(setWebinar(payload));
    submitStatus(true);
  };

  return (
    <Formik
      initialValues={{
        formName: 'Register',
        formFields: [
          {
            fieldName: t(globalMessage.email), // webinarForm.formFields[0].fieldName,
            fieldType: t(globalMessage.email), // webinarForm.formFields[0].fieldType,
            isRequired: webinarForm.formFields[0].isRequired,
            options: webinarForm.formFields[0].options,
          },
        ],
      }}
      onSubmit={onSubmit}
      validationSchema={registrationForm}
      enableReinitialize
    >
      {({ setFieldValue, submitForm, values }) => {
        setSubmitForm(submitForm);
        return (
          <Form>
            {/* <StyledParagraph colorBlue>
              {t(message.registrationForm)}
            </StyledParagraph>

            <Label asterisk>{t(message.formName)}</Label>
            <Field
              defaultValue={values.formName}
              type="text"
              name="formName"
              placeholder={t(message.enterRegistrationFomrName)}
              component={Input}
            />
            <ErrorMessage name="formName" />
            <Div BrakeLine />
            <StyledParagraph colorBlue>
              {t(message.registrationFormFields)}
            </StyledParagraph>
            {t(message.setupRegistrationFormFields)} */}
            <Row gutter={20} style={{ marginTop: 30 }}>
              <Col xs={24} lg={12}>
                <Label center asterisk>
                  {t(message.fieldNameOrPlaceholder)}
                </Label>
                <Field
                  defaultValue={values.formFields[0].fieldName}
                  type="text"
                  name="formFields[0].fieldName"
                  placeholder={t(globalMessage.email)}
                  readOnly
                  component={Input}
                />
                <ErrorMessage name="formFields[0].fieldName" />
              </Col>
              <Col xs={24} lg={10}>
                <Label center asterisk>
                  {t(message.fieldType)}
                </Label>
                <Field
                  defaultValue={values.formFields[0].fieldType}
                  type="text"
                  name="formFields[0].fieldType"
                  placeholder={t(globalMessage.email)}
                  readOnly
                  component={Input}
                />
                <ErrorMessage name="formFields[0].fieldType" />
              </Col>
              <Col span={2}>
                <Label center>{t(message.required)}</Label>
                <Switch
                  disabled
                  defaultChecked={values.formFields[0].isRequired}
                  size="default"
                  onChange={(val) =>
                    setFieldValue('formFields[0].isRequired', val)
                  }
                />
              </Col>
            </Row>
            <Row gutter={20} style={{ marginTop: 30 }}>
              <Col span={24}>
                <Space direction="vertical">
                  <Text type="secondary">
                    {t(message.registrationFieldNotes1)}
                  </Text>
                  <Text type="secondary">
                    {t(message.registrationFieldNotes2)}
                  </Text>
                </Space>
              </Col>
            </Row>
          </Form>
        );
      }}
    </Formik>
  );
}

CreateWebinarRegistration.propTypes = {
  webinarForm: PropTypes.any,
  setSubmitForm: PropTypes.any,
  submitStatus: PropTypes.any,
};
