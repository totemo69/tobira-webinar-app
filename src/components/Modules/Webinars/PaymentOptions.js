import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';

import message from '@/messages/webinar';
import { StyledParagraph } from '@/components/Elements/SampleParagraph';
import Label from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import Div from '@/components/Elements/Div';
import Image from '@/components/Elements/Image';
import ErrorMessage from '@/components/Elements/ErrorMessage';

import { setWebinar } from '@/states/webinar/actions';
import { paymentOptions } from '@/validations/webinar';

export default function PaymentOption({
  webinarForm,
  setSubmitForm,
  submitStatus,
}) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const onSubmit = (payload) => {
    dispatch(setWebinar(payload));
    submitStatus(true);
  };
  return (
    <Formik
      initialValues={{
        price: webinarForm.price,
      }}
      onSubmit={onSubmit}
      validationSchema={paymentOptions}
      enableReinitialize
    >
      {({ submitForm, values }) => {
        setSubmitForm(submitForm);
        return (
          <Form>
            <StyledParagraph colorBlue>
              {t(message.webinarPrice)}
            </StyledParagraph>
            <Label asterisk>{t(message.webinarPriceAttendee)}</Label>
            <Field
              defaultValue={values.price}
              type="number"
              name="price"
              min="0"
              component={Input}
              prefix="￥"
              suffix="JPY"
            />
            <ErrorMessage name="price" />
            <Div BrakeLine />
            <StyledParagraph colorBlue>
              {t(message.paymentOptions)}
            </StyledParagraph>
            <Div>{t(message.selectPayment)}</Div>
            <Row className="paymentRow" gutter={[50]}>
              <Col span={10}>
                <Div paymentOption>
                  <Image
                    style={{ width: '100%' }}
                    src="/images/paypal.svg"
                    alt="paypal image"
                  />
                  <StyledParagraph style={{ textAlign: 'center' }}>
                    {t(message.payWithPaypal)}
                  </StyledParagraph>
                </Div>
              </Col>
              <Col span={10}>
                <Div paymentOption>
                  <Image
                    style={{
                      width: '30%',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                    }}
                    src="/images/other-payment.svg"
                    alt="paypal image"
                  />
                  <StyledParagraph>
                    {t(message.otherPaymentOptions)}
                  </StyledParagraph>
                </Div>
              </Col>
            </Row>
          </Form>
        );
      }}
    </Formik>
  );
}

PaymentOption.propTypes = {
  webinarForm: PropTypes.any,
  setSubmitForm: PropTypes.any,
  submitStatus: PropTypes.any,
};
