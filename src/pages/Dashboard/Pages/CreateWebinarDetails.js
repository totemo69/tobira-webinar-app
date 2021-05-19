import message from '@/messages/createProfile';
import { useTranslation } from 'next-i18next';

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

  const { t } = useTranslation();
  return(
    <>
     
      <StyledParagraph colorBlue  >
        {t(message.managementSection)}
      </StyledParagraph>
        
      <Label asterisk>{t(message.webinarTitle)}</Label>
      <Input style={{width: "65rem"}} placeholder={t(message.enterWebinarTitle)}></Input>
       
      <Label asterisk>{t(message.zoomAccount)}</Label>
      <Div style={{display: "flex", width: "67rem"}}>
        <Select style={{width: "100%"}} placeholder={t(message.selectZoomAccount)}></Select>
        <Button style={{height: "30px",width: "20%", color: "#0E71EB",border: "none",boxShadow: "none"}}><PlusSquareFilled /> {t(message.addAccount)}</Button>
      </Div>

      <Div BrakeLine />
         
      <StyledParagraph colorBlue  >
        {t(message.basicDetails)}
      </StyledParagraph>

      <Row gutter={[5]}>
        <Col span={10} >
          <Label asterisk>{t(message.webinarImage)}</Label>
          <img style={{width: "20rem", border: '1px dotted #B0B0B0'}} src="Images/image.svg"></img>
        </Col>
        <Col span={14}>
          <Label  asterisk>{t(message.webinarTitle)}</Label>
          <Input style={{width: "40rem"}} placeholder={t(message.enterWebinarTitle)}></Input>
          <Label  asterisk>{t(message.description)}</Label>
          <Textarea style={{width: "40rem"}} autoSize={{ minRows: 8, maxRows: 8 }} showCount maxLength={5000} placeholder={t(message.enterWebinarDescription)}></Textarea>

        </Col>
      </Row>
       
      <Div BrakeLine />
         
      <StyledParagraph colorBlue  >
        {t(message.schedule)}
      </StyledParagraph> 

      <Label asterisk>{t(message.webinarPlan)}</Label>
      <Radio.Group style={{marginBottom: "20px"}}>
        <Radio value={1}>
          {t(message.oneTime)}
        </Radio>
        <Radio value={2}>
          {t(message.recuring)}
        </Radio>
      </Radio.Group>

      <Row gutter={[60]}>
        <Col span={12} >
          <Label asterisk>{t(message.date)}</Label>
          <DatePicker></DatePicker>

          <Label  style={{marginTop: "20px"}} asterisk>{t(message.timeZone)}</Label>
        </Col>
        <Col span={9}>
          <Label asterisk>{t(message.startTime)}</Label>
          <TimrePicker format="h:mm:ss A" ></TimrePicker>

          <Label style={{marginTop: "20px"}} asterisk>{t(message.duration)}</Label>
          <Div style={{display: "flex", width: "100%"}}>
            <Select></Select>
            <Label asterisk>{t(message.hour)}</Label>

            <Select></Select>
            <Label asterisk>{t(message.minutes)}</Label>
          </Div> 
        </Col>
      </Row>
    </>
  );
}