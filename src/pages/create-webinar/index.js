import message from '@/messages/createProfile';
import { useTranslation } from 'next-i18next';

import {StyledSteps, StyledStep} from '@/components/Elements/Steps';
import CreateWebinarPage1 from './pages/CreateWebinarDetails';
import Registration from './pages/CreateWebinarRegistration';
import PaymentOption from './pages/PaymentOption';
import Div from '@/components/Elements/Div';
import Button from '@/components/Elements/Button';
import Title from '@/components/Elements/Title';
import Span from '@/components/Elements/Span';
import Layout from '@/components/Layouts/Home';
import Content from '@/components/Elements/Content';
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

      <Layout>
      
        <Div marginBottom2x flexTop>
          <Title secondary marginRight>{t(message.createWebinar)} {">"} </Title>
          <Span breadCrumbs>{step[current].title}</Span>
        </Div>
        
        <Content style={{padding: "20px", margin: "0 auto", width: "100%", background: "#FFFFFF"}}>
          <StyledSteps current={current}>
            {step.map(item => 
              (<StyledStep key={item.title} title={item.title} />)
            )}
          </StyledSteps>
          {step[current].Content}
         
          {current < step.length - 1 && (
            <Button onClick={() => next()} NextButton type="primary">{t(message.next)} {">"}</Button>
          )}
          {current === step.length - 1 && (
            <Button onClick={() => message.success("Process completed")} NextButton type="primary">{t(message.create)}</Button>
          )}
          {current > 0 && (
            <Button onClick={() => prev()} BackButton>{"<"} {t(message.back)}</Button>
          )}
        </Content>
      
      </Layout>
      
    </>
  );
}