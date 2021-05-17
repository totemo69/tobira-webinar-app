import Card from '@/components/Elements/Card';
import {StyledSteps, StyledStep} from '@/components/Elements/Steps';
import CreateWebinarPage1 from './CreateWebinarDetails';
import Registration from './CreateWebinarRegistration';
import PaymentOption from './PaymenOption';
import Div from '@/components/Elements/Div';
import Button from '@/components/Elements/Button';
import Title from '@/components/Elements/Title';
import Span from '@/components/Elements/Span';
import { useState } from 'react';
import { message } from 'antd';


const step = [
  {
    title: 'Details',
    Content: <CreateWebinarPage1 />
  },
  {
    title: 'Registration',
    Content: <Registration />
  },
  {
    title: 'Payment Options',
    Content: <PaymentOption />
  }
];

export default function CreateWebinar(){

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return(
    <>
      <Div marginBottom2x flexTop>
        <Title secondary marginRight>Create Webinar {">"} </Title>
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
          <Button onClick={() => next()} NextButton type="primary">Next {">"}</Button>
        )}
        {current === step.length - 1 && (
          <Button onClick={() => message.success("Process completed")} NextButton type="primary">Create</Button>
        )}
        {current > 0 && (
          <Button onClick={() => prev()} BackButton>{"<"} Back</Button>
        )}
      </Card>
    </>
  );
}