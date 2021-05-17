import {StyledParagraph} from '@/components/Elements/SampleParagraph';
import Label from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import Div from '@/components/Elements/Div';
import Image from '@/components/Elements/Image';
import {Row, Col} from 'antd';
export default function PaymentOption(){
  return(
    <>
      <StyledParagraph colorBlue  >
          Webinar Price
      </StyledParagraph>

      <Label asterisk>
        Webinar price for each attendee
      </Label>

      <Input type="number" placeholder="0" prefix="￥" suffix="JPY"></Input>

      <Div BrakeLine></Div>

      <StyledParagraph colorBlue  >
         Payment Options
      </StyledParagraph>

      <Div>
        Select payment gateway for the payments
      </Div>

      <Row className="paymentRow" gutter={[50]}>
        <Col span={10} >
          <Div paymentOption>
            <Image style={{width: "100%",}} src="Images/paypal.svg" alt="paypal image"/>
            <StyledParagraph style={{textAlign: "center"}}>
                Pay with Paypal
            </StyledParagraph>
          </Div>
          
        </Col>
        <Col span={10}>
          <Div paymentOption>
            <Image style={{width: "30%", marginLeft: "auto", marginRight: "auto"}} src="Images/other-payment.svg" alt="paypal image"/>
            <StyledParagraph>
                  Other payment options coming soon!
            </StyledParagraph>
          </Div>
        </Col>
      </Row>
     
    </>
  );
}