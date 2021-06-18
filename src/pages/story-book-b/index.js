import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getProfile } from '@/states/profiles/action';
import { getPlans, getPlansCount } from '@/states/plans/action';
import { getPayments, getPaymentsCount } from '@/states/payments/action';

import Layout from '@/components/Layouts/Guest';
import { Row, Col } from 'antd';
import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/Title';
import Button from '@/components/Elements/Button';

export function SampleComponent({
  doCheckProfile,
  doCheckPlans,
  doCheckPlansCount,
  doCheckPayment,
  doCheckPaymentsCount,
}) {
  useEffect(() => {
    // code here
  }, []);

  return (
    <>
      <Layout>
        <Row>
          <Col span={24}>
            <Div widthFull center>
              <Title modalTitle>CHECK USER PROFILE API</Title>
              <Button type="primary" marginTop onClick={() => doCheckProfile()}>
                TEST PROFILE
              </Button>
              <Title modalTitle>CHECK PLANS API</Title>
              <Button type="primary" marginTop onClick={() => doCheckPlans()}>
                TEST PLANS
              </Button>
              <Title modalTitle>CHECK PLANS COUNT API</Title>
              <Button
                type="primary"
                marginTop
                onClick={() => doCheckPlansCount()}
              >
                TEST PLANS COUNT
              </Button>
              <Title modalTitle>CHECK PAYMENTS API</Title>
              <Button type="primary" marginTop onClick={() => doCheckPayment()}>
                TEST PAYMENTS
              </Button>
              <Title modalTitle>CHECK PAYMENTS COUNT API</Title>
              <Button
                type="primary"
                marginTop
                onClick={() => doCheckPaymentsCount()}
              >
                TEST PAYMENTS COUNT
              </Button>
            </Div>
          </Col>
        </Row>
      </Layout>
    </>
  );
}

SampleComponent.propTypes = {
  doCheckProfile: PropTypes.func,
  doCheckPlans: PropTypes.func,
  doCheckPlansCount: PropTypes.func,
  doCheckPayment: PropTypes.func,
  doCheckPaymentsCount: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    doCheckProfile: () => dispatch(getProfile()),
    doCheckPlans: () => dispatch(getPlans()),
    doCheckPlansCount: () => dispatch(getPlansCount()),
    doCheckPayment: () => dispatch(getPayments()),
    doCheckPaymentsCount: () => dispatch(getPaymentsCount()),
  };
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect, memo)(SampleComponent);
