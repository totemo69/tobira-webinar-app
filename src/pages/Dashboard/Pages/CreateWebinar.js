import Card from '@/components/Elements/Card';
import {StyledSteps, StyledStep} from '@/components/Elements/Steps';
import CreateWebinarPage1 from './CreateWebinarDetails';
import Registration from './CreateWebinarRegistration';
import Div from '@/components/Elements/Div';
import Button from '@/components/Elements/Button';
import { useState } from 'react';


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
    Content: 'content3'
  }
];

export default function CreateWebinar(){

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };
  return(
    <>
      Create Webinar
      <Card style={{padding: "20px", margin: "0 auto", width: "95%"}}>
        <StyledSteps current={current}>
          {step.map(item => 
            (<StyledStep key={item.title} title={item.title} />)
          )}
        </StyledSteps>
        <Div>
          {step[current].Content}
        </Div>

        <Button onClick={() => next()} NextButton type="primary">Next {">"}</Button>
      </Card>
    </>
  );
}