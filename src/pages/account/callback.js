import React, { useCallback, useEffect } from 'react';
// import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Spin } from 'antd';
import { useRouter } from 'next/router';
import { WEBINAR_ROUTE, LOADING_PREFIX } from '@/utils/constants';

import Layout from '@/components/Layouts/Guest';
import Div from '@/components/Elements/Div';
import Image from '@/components/Elements/Image';

import { submitZoomCode } from '@/states/accounts/actions';
import { makeSelectLoading } from '@/states/global/selector';
import { makeSelectAccount } from '@/states/accounts/selector';


export function Callback({ doSubmitCode, isLoading, zoomAccount }) {
  // const { t } = useTranslation();
  const route = useRouter();
  const { code } = route.query;

  useEffect(() => {
    if (code) {
      submitCode(code);
    }
  }, [code]);

  useEffect(() => {
    if (!isLoading && zoomAccount) {
      goToComplete();
    }
  }, [isLoading, zoomAccount]);

  const goToComplete = useCallback(
    () => {
      route.push(WEBINAR_ROUTE.ZOOM_ACCOUNT_COMPLETE);
    },[],
  );

  const submitCode = useCallback(
    async (code) => {
      doSubmitCode({ zoomCode: code });
    },[],
  );

  return (
    <>
      <Layout>
        <Row>
          <Col span={24}>
            <Div widthFull marginBottom center>
              <Image src={"../Images/logo.svg"} alt="Tobira Logo" logo />
            </Div>
            <Div widthFull marginBottom center>
              <Image src={"../Images/illustration1.svg"} alt="Tobira Logo" logo />
            </Div>
            <Div widthFull marginBottom center>
              <Spin size="large" />
            </Div>
          </Col>
        </Row>
      </Layout>
    </>
  );
}

Callback.propTypes = {
  doSubmitCode: PropTypes.func,
  isLoading: PropTypes.any,
  zoomAccount: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectLoading(LOADING_PREFIX.ACCOUNT),
  zoomAccount: makeSelectAccount(),
});

export function mapDispatchToProps(dispatch) {
  return {
    doSubmitCode: (payload) => dispatch(submitZoomCode(payload)),
  };
}


const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
)(Callback);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['translation']),
  },
});