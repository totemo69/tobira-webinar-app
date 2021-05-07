import Registration from './Pages/Register';
import TicketSummary from './Pages/TicketSummary';
import CompletePage from './Pages/CompletePage'
import Header from '@/components/Elements/Header';
import Logo from '@/components/Elements/Logo';
import Footer from '@/components/Elements/Footer';
import Layout from '@/components/Elements/Layout';
import Content from '@/components/Elements/Content';
import Button from '@/components/Elements/Button';
import { Steps } from 'antd';

import { useState } from 'react';

const {Step} = Steps;

const steps = [
  {
    title: 'Register',
    content: <Registration />,
  },
  {
    title: 'Ticket Summary',
    content: <TicketSummary />,
  },
  {
    title: 'Complete',
    content: <CompletePage />,
  },
];

export default function FrontWebinar(){

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  
  return(
    <>
      <Header>
        <Logo frontRegistrationLogo src={"Images/logo.svg"} />
      </Header>
      <Layout>
        <Steps style={{backgroundColor: 'transparent', marginTop: '20px', width: '50%', 
          margin: '0 auto', }}  current={current}>
          {steps.map(item => (
              <Step style={{marginTop: '90px'}}  key={item.title} title={item.title} />
            ))}
        </Steps>
        <Layout>
          <Content>
            {steps[current].content}
            <Button NextButton type="primary" onClick={() => next()}>Next {">"}  </Button>
            <Button BackButton onClick={() => prev()}>{"<"} Back</Button>
          </Content>
        </Layout>
      </Layout>
      <Footer>Footer</Footer>
    </>
  )
}