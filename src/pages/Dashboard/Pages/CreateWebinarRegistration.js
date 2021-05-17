import {StyledParagraph} from '@/components/Elements/SampleParagraph';
import Label from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import Button from '@/components/Elements/Button';
import Div from '@/components/Elements/Div';
import Switch from '@/components/Elements/Switch';

import {Row, Col} from 'antd';
import { 
  DownOutlined,
  UpOutlined,
  PlusSquareFilled
} from '@ant-design/icons';


export default function CreateWebinarRegistration(){
  return(
    <>
      <StyledParagraph colorBlue  >
          Registration Form
      </StyledParagraph>

      <Label asterisk>Form Name</Label>
      <Input placeholder="Enter registration form name"></Input>
        
      <Div BrakeLine></Div>

      <StyledParagraph colorBlue  >
          Registration Form Fields
      </StyledParagraph>

        Please set up your registration form fields.

      <Row className="paymentRow" gutter={[10]}>
        <Col style={{display: "flex"}}>
          <Button UpDownButton ><DownOutlined /></Button>
          <Button UpDownButton ><UpOutlined /></Button>
        </Col>
        <Col span={7}>
          <Label textCenter asterisk>Field Name or Placeholder</Label>
          <Input placeholder="Email Address"></Input>
        </Col>
        <Col span={10}>
          <Label textCenter asterisk>Field Type</Label>
          <Input placeholder="Email"></Input>
        </Col>
        <Col span={2}>
          <Label textCenter>Required?</Label>
          <Switch size="default" placeholder="Email" />
        </Col>
      </Row>

      <Button addField><PlusSquareFilled size="large"/> Add Account</Button>
    </>
  );
}