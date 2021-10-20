import { useEffect } from 'react';
import Router from 'next/router';
import { Row, Col, Spin } from 'antd';
import { withAuthSync } from '@/lib/auth';
import { WEBINAR_ROUTE } from '@/utils/constants';
import Layout from '@/components/Layouts/Guest';
import Image from '@/components/Elements/Image';

const Index = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      Router.push(WEBINAR_ROUTE.LIST_WEBINAR);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <Row justify="center">
        <Col>
          <Image
            src="/images/tobiracreators_transparent.png"
            alt="Tobira Logo"
            logoSmall
          />
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Spin size="large" />
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <Image
            src="/images/illustration1.svg"
            alt="Webinar Illustration"
            logoSmall
          />
        </Col>
      </Row>
    </Layout>
  );
};

export default withAuthSync(Index);
