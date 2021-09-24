import { memo, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import NextImage from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Typography, Row, Col, Spin } from 'antd';
import PropTypes from 'prop-types';
import { LOADING_PREFIX } from '@/utils/constants';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectLoadingStatus,
} from '@/states/global/selector';
import { capturePayment } from '@/states/webinar/actions';
import Button from '@/components/Elements/Button';
import Div from '@/components/Elements/Div';
import localMessage from '@/messages/webinarDetail';
import classNames from './index.module.css';

const { Text, Title } = Typography;
export function Complete({
  gotoDetails,
  doCapturePayment,
  isCaptureLoading,
  verificationStatus,
  // errorMessage,
}) {
  const route = useRouter();
  const { t } = useTranslation();
  const { locale } = route;
  // Loading on render while waiting for status
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      onCallback();
    }, 1000);
    return () => clearTimeout(timer);
  }, [route]);

  const onCallback = async () => {
    if (route.query.token && route.query.PayerID) {
      const { token, PayerID } = route.query;
      doCapturePayment({ token, PayerID, lang: locale });
    }
  };

  useEffect(() => {
    if (verificationStatus) {
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [isCaptureLoading, verificationStatus]);

  return (
    <>
      {!isLoading && (
        <>
          <Row justify="center">
            <Col span={12} lg={12} xs={22} className={classNames.completeCol}>
              <NextImage
                src="/images/success.svg"
                alt="Tobira Creators"
                layout="fill"
                loading="lazy"
              />
            </Col>
          </Row>
          <Row justify="center" className={classNames.spacer}>
            <Col span={18} className={classNames.completeBtn}>
              <Title level={1} className={classNames.completeTitle}>
                {t(localMessage.ticketCompleteMessage)}
              </Title>
              <Text>{t(localMessage.ticketCompleteDetails)}</Text>
            </Col>
          </Row>
          <Row justify="center" className={classNames.spacer}>
            <Col lg={18} xs={22} className={classNames.completeBtn}>
              <Button
                type="primary"
                size="large"
                noMargin
                onClick={gotoDetails}
              >
                {t(localMessage.gotoDetailsButton)}
              </Button>
            </Col>
          </Row>
        </>
      )}
      {isLoading && (
        <Div marginTop widthFull center>
          <Spin size="large" />
        </Div>
      )}
    </>
  );
}

Complete.propTypes = {
  gotoDetails: PropTypes.func,
  isCaptureLoading: PropTypes.bool,
  // errorMessage: PropTypes.any,
  doCapturePayment: PropTypes.any,
  verificationStatus: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isCaptureLoading: makeSelectLoading(LOADING_PREFIX.PAYMENT),
  verificationStatus: makeSelectLoadingStatus(LOADING_PREFIX.PAYMENT),
  errorMessage: makeSelectError(),
});

const mapDispatchProps = (dispatch) => ({
  doCapturePayment: (payload) => dispatch(capturePayment(payload)),
});

const withConnect = connect(mapStateToProps, mapDispatchProps);

export default compose(withConnect, memo)(Complete);
