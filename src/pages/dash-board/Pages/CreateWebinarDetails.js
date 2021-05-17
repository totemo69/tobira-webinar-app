import Div from '@/components/Elements/Div';
import {StyledParagraph} from '@/components/Elements/SampleParagraph';
import Label from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import Select from '@/components/Elements/Select';
import Button from '@/components/Elements/Button';
import Textarea from '@/components/Elements/SampleTextArea';
import DatePicker from '@/components/Elements/SampleDatePicker';
import TimrePicker from '@/components/Elements/TimePicker';
import Radio from '@/components/Elements/Radio';
import {Row, Col} from 'antd';
import { PlusSquareFilled  } from '@ant-design/icons';

import React from 'react';
export default function CreateWebinarPage1(){
  return(
    <>
     
      <StyledParagraph colorBlue  >
          Management Section
      </StyledParagraph>
        
      <Label asterisk>Webinar Title</Label>
      <Input style={{width: "65rem"}} placeholder="Enter Webinar title"></Input>
       
      <Label asterisk>Zoom Account</Label>
      <Div style={{display: "flex", width: "67rem"}}>
        <Select style={{width: "100%"}} placeholder="Select an account"></Select>
        <Button style={{height: "30px",width: "20%", color: "#0E71EB",border: "none",boxShadow: "none"}}><PlusSquareFilled /> Add Account</Button>
      </Div>

      <Div BrakeLine />
         
      <StyledParagraph colorBlue  >
          Basic Details
      </StyledParagraph>

      <Row gutter={[5]}>
        <Col span={10} >
          <Label asterisk>Webinar Image</Label>
          <img style={{width: "20rem"}} src="Images/image.svg"></img>
        </Col>
        <Col span={14}>
          <Label  asterisk>Webinar Image</Label>
          <Input style={{width: "40rem"}} placeholder="Enter webinar tittle"></Input>
          <Label  asterisk>Description</Label>
          <Textarea style={{width: "40rem"}} autoSize={{ minRows: 8, maxRows: 8 }} showCount maxLength={5000} placeholder="Enter Webinar Description"></Textarea>

        </Col>
      </Row>
       
      <Div BrakeLine />
         
      <StyledParagraph colorBlue  >
          Schedule
      </StyledParagraph> 

      <Label asterisk>Webinar Plan</Label>
      <Radio.Group style={{marginBottom: "20px"}}>
        <Radio value={1}>
                One-Time
        </Radio>
        <Radio value={2}>
                Recuring
        </Radio>
      </Radio.Group>

      <Row gutter={[60]}>
        <Col span={12} >
          <Label asterisk>Date</Label>
          <DatePicker></DatePicker>

          <Label  style={{marginTop: "20px"}} asterisk>Timezone</Label>
        </Col>
        <Col span={9}>
          <Label asterisk>Start Time</Label>
          <TimrePicker format="h:mm:ss A" ></TimrePicker>

          <Label style={{marginTop: "20px"}} asterisk>Duration</Label>
          <Div style={{display: "flex", width: "100%"}}>
            <Select></Select>
            <Label asterisk>hr</Label>

            <Select></Select>
            <Label asterisk>mins</Label>
          </Div>
            
        </Col>
      </Row>
    </>
  );
}