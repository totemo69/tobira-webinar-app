import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getProfile } from '@/states/profiles/action';

import Layout from '@/components/Layouts/Guest';
import { Row, Col } from 'antd';
import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/Title';
import Button from '@/components/Elements/Button';

export function SampleComponent({ doCheck }){
  useEffect(() => {
    // code here
  }, []);
  
  return(
    <>
      <Layout>
        <Row>
          <Col span={24}>
            <Div widthFull center>
              <Title modalTitle>CHECK USER API</Title>
              <Button type="primary" marginTop
                onClick={() => doCheck()}
              >
                CHECK PROFILE API
              </Button>
            </Div>
          </Col>
        </Row>
      </Layout>
    </>
  );
}

SampleComponent.propTypes = {
  doCheck: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    doCheck: () => dispatch(getProfile()),
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