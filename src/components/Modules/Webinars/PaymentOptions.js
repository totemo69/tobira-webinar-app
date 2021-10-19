import { useTranslation } from 'next-i18next';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';
import RadioImage from '@/components/Elements/RadioImage';
import message from '@/messages/webinar';
import { StyledParagraph } from '@/components/Elements/Paragraph';
// import Label from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import Div from '@/components/Elements/Div';
import Image from '@/components/Elements/Image';
import ErrorMessage from '@/components/Elements/ErrorMessage';

import { setWebinar } from '@/states/webinar/actions';
import { paymentOptions } from '@/validations/webinar';

const RadioGroup = RadioImage.Group;
const PaymentButton = RadioImage.Button;

export default function PaymentOption({
  webinarForm,
  setSubmitForm,
  submitStatus,
  isUpdate = false,
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
            <Div BrakeLine />
            <StyledParagraph colorBlue marginTop>
              {t(message.webinarPrice)}
            </StyledParagraph>
            <Field
              defaultValue={values.price}
              type="number"
              name="price"
              min="0"
              component={Input}
              prefix="￥"
              suffix="JPY"
              disabled={isUpdate}
            />
            <ErrorMessage name="price" />
            <Div BrakeLine />
            <StyledParagraph colorBlue marginTop>
              {t(message.paymentOptions)}
            </StyledParagraph>
            <Row>
              <Col xs={24} lg={10}>
                <Div>
                  <RadioGroup defaultValue="Paypal" name="payment-method">
                    <PaymentButton value="Paypal">
                      <Image src="/images/paypal.svg" alt="paypal image" />
                      <StyledParagraph style={{ textAlign: 'center' }}>
                        {t(message.payWithPaypal)}
                      </StyledParagraph>
                    </PaymentButton>
                  </RadioGroup>
                </Div>
              </Col>
              <Col span={10}>
                {/* <Div paymentOption>
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
                </Div> */}
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
  isUpdate: PropTypes.bool,
};
