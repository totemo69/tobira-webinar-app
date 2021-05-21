import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getProfile } from '@/states/profiles/action';
import { getPlans } from '@/states/plans/action';

import Layout from '@/components/Layouts/Guest';
import { Row, Col } from 'antd';
import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/Title';
import Button from '@/components/Elements/Button';

export function SampleComponent({ doCheckProfile, doCheckPlansCount }){
  useEffect(() => {
    // code here
  }, []);
  
  return(
    <>
      <Layout>
        <Row>
          <Col span={24}>
            <Div widthFull center>
              <Title modalTitle>CHECK USER PROFILE API</Title>
              <Button type="primary" marginTop
                onClick={() => doCheckProfile()}
              >
                TEST PROFILE
              </Button>
              <Title modalTitle>CHECK PLANS COUNT API</Title>
              <Button type="primary" marginTop
                onClick={() => doCheckPlansCount()}
              >
                TEST PLANS COUNT
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
  doCheckPlansCount: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    doCheckProfile: () => dispatch(getProfile()),
    doCheckPlansCount: () => dispatch(getPlans()),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo,
)(SampleComponent);