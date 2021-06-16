import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { message } from 'antd';
import localMessage from '@/messages/createProfile';

import RegistrationDetails from '@/components/Modules/Webinars/RegistrationDetails';
import PaymentOptions from '@/components/Modules/Webinars/PaymentOptions';
import CreateWebinarPage from '@/components/Modules/Webinars/CreateDetails';

import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/Title';
import Span from '@/components/Elements/Span';
import Card from '@/components/Elements/Card';
import {StyledSteps, StyledStep} from '@/components/Elements/Steps';  
import Button from '@/components/Elements/Button';

export default function CreateWebinar(){
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation();
  
  const step = [
    {
      title: t(localMessage.details),
      Content: <CreateWebinarPage />
    },
    {
      title: t(localMessage.registration),
      Content: <RegistrationDetails />
    },
    {
      title: t(localMessage.paymentOptions),
      Content: <PaymentOptions />
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
      <Div marginBottomLarge flexTop>
        <Title secondary marginRight>Create Webinar {'>'}</Title>
        <Span breadCrumbs>Details</Span>
      </Div>
      <Div widthFull>
        <Card webinarRegistrationCard>
          <StyledSteps current={current}>
            {step.map(item => (
              <StyledStep key={item.title} title={item.title} />
            ))}
          </StyledSteps>

          {step[current].Content}

          {current < step.length - 1 && (
            <Button onClick={() => next()} NextButton type="primary">Next {">"}</Button>
          )}
          {current === step.length - 1 && (
            <Button onClick={() => message.success("Process completed")} NextButton type="primary">Next</Button>
          )}
          {current > 0 && (
            <Button onClick={() => prev()} BackButton>{"<"} Back</Button>
          )}
        </Card>
      </Div>
    </>
  );
}