import message from '@/messages/createProfile';
import { useTranslation } from 'next-i18next';

import {StyledParagraph} from '@/components/Elements/SampleParagraph';
import Label from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import Div from '@/components/Elements/Div';
import Image from '@/components/Elements/Image';
import {Row, Col} from 'antd';


export default function PaymentOption(){

  const { t } = useTranslation();
  return(
    <>
      <StyledParagraph colorBlue  >
        {t(message.webinarPrice)}
      </StyledParagraph>

      <Label asterisk>
        {t(message.webinarPriceAttendee)}
      </Label>

      <Input type="number" placeholder="0" prefix="￥" suffix="JPY"></Input>

      <Div BrakeLine></Div>

      <StyledParagraph colorBlue  >
        {t(message.paymentOptions)}
      </StyledParagraph>

      <Div>
        {t(message.selectPayment)}
      </Div>

      <Row className="paymentRow" gutter={[50]}>
        <Col span={10} >
          <Div paymentOption>
            <Image style={{width: "100%",}} src="Images/paypal.svg" alt="paypal image"/>
            <StyledParagraph style={{textAlign: "center"}}>
              {t(message.payWithPaypal)}
            </StyledParagraph>
          </Div>
          
        </Col>
        <Col span={10}>
          <Div paymentOption>
            <Image style={{width: "30%", marginLeft: "auto", marginRight: "auto"}} src="Images/other-payment.svg" alt="paypal image"/>
            <StyledParagraph>
              {t(message.otherPaymentOptions)}
            </StyledParagraph>
          </Div>
        </Col>
      </Row>
     
    </>
  );
}