import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import message from '@/messages/createProfile';

// import Button from '@/components/Elements/Button';
import { useState } from 'react';
import CreateWebinarPage1 from './pages/CreateWebinarDetails';
import Registration from './pages/CreateWebinarRegistration';
import PaymentOption from './pages/PaymentOption';

import Layout from '@/components/Layouts/Home';
import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/Title';
import Span from '@/components/Elements/Span';
import Card from '@/components/Elements/Card';
import {StyledSteps, StyledStep} from '@/components/Elements/Steps';

export default function CreateWebinar(){
  // const [current, setCurrent] = useState(0);
  const [current] = useState(0);
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

  // const next = () => {
  //   setCurrent(current + 1);
  // };

  // const prev = () => {
  //   setCurrent(current - 1);
  // };

  return(
    <>

      <Layout>
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

            {/* {current < step.length - 1 && (
              <Button onClick={() => next()} NextButton type="primary">{t(message.next)} {">"}</Button>
            )}
            {current === step.length - 1 && (
              <Button onClick={() => message.success("Process completed")} NextButton type="primary">{t(message.create)}</Button>
            )}
            {current > 0 && (
              <Button onClick={() => prev()} BackButton>{"<"} {t(message.back)}</Button>
            )} */}
          </Card>
        </Div>
        {/* <Card style={{padding: "20px", margin: "0 auto", width: "100%", background: "#FFFFFF"}}>
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
        </Card> */}
      </Layout>
      
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['translation']),
  },
});