import Card from '@/components/Elements/Card';
import {StyledSteps, StyledStep} from '@/components/Elements/Steps';
import CreateWebinarPage1 from './CreateWebinarDetails';
import Div from '@/components/Elements/Div';
import { useState } from 'react';


const step = [
  {
    title: 'Details',
    Content: <CreateWebinarPage1 />
  },
  {
    title: 'Registration',
    Content: 'content2'
  },
  {
    title: 'Payment Options',
    Content: 'content3'
  }
];

export default function CreateWebinar(){

  const [current] = useState(0);
  return(
    <>
      Create Webinar
      <Card style={{padding: "20px", margin: "0 auto", width: "95%"}}>
        <StyledSteps current={current}>
          {step.map(item => 
            (<StyledStep curr key={item.title} title={item.title} />)
          )}
        </StyledSteps>
        <Div>
          {step[current].Content}
        </Div>
      </Card>
    </>
  );
}