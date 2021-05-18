import message from '@/messages/create-webinar';
import { useTranslation } from 'next-i18next';

import Card from '@/components/Elements/Card';
import {StyledSteps, StyledStep} from '@/components/Elements/Steps';
import CreateWebinarPage1 from './CreateWebinarDetails';
import Registration from './CreateWebinarRegistration';
import PaymentOption from './PaymentOption';
import Div from '@/components/Elements/Div';
import Button from '@/components/Elements/Button';
import Title from '@/components/Elements/Title';
import Span from '@/components/Elements/Span';
import { useState } from 'react';



export default function CreateWebinar(){
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation();
  
  const step = [
    {
      title: t(message.details),
      Content: <CreateWebinarPage1 />
    },
    {
      title: t(message.registration),
      Content: <Registration />
    },
    {
      title: t(message.paymentOptions),
      Content: <PaymentOption />
    }
  ];

  

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return(
    <>
      <Div marginBottom2x flexTop>
        <Title secondary marginRight>{t(message.createWebinar)} {">"} </Title>
        <Span breadCrumbs>{step[current].title}</Span>
      </Div>
        
      <Card style={{padding: "20px", margin: "0 auto", width: "95%"}}>
        <StyledSteps current={current}>
          {step.map(item => 
            (<StyledStep key={item.title} title={item.title} />)
          )}
        </StyledSteps>
        <Div>
          {step[current].Content}
        </Div>
        {current < step.length - 1 && (
          <Button onClick={() => next()} NextButton type="primary">{t(message.next)} {">"}</Button>
        )}
        {current === step.length - 1 && (
          <Button onClick={() => message.success("Process completed")} NextButton type="primary">{t(message.create)}</Button>
        )}
        {current > 0 && (
          <Button onClick={() => prev()} BackButton>{"<"} {t(message.back)}</Button>
        )}
      </Card>
    </>
  );
}