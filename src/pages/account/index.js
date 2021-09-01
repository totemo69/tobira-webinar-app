import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Col, List, Row, message, Space } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';
import { useRouter } from 'next/router';
import moment from 'moment';
import {
  LOADING_PREFIX,
  WEBINAR_ROUTE,
  ZOOM_ACCOUNT_STATUS,
  ZOOM_ACCOUNT_TYPE,
  ZOOM_SUBSCRIPTION_TYPE,
} from '@/utils/constants';
// import { authRequest } from '@/lib/zoom';
import {
  getZoomAccount,
  createZoomUser,
  zoomSubscription,
  captureLicensePurchase,
} from '@/states/accounts/actions';
import { clearErrors } from '@/states/global/actions';
import { makeSelectAccountList } from '@/states/accounts/selector';
import { makeSelectLoading, makeSelectError } from '@/states/global/selector';
import validationMessage from '@/messages/validation';
import globalMessage from '@/messages/global';
import localMessage from '@/messages/account';
import Layout from '@/components/Layouts/Home';
import Card from '@/components/Elements/Card';
import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/Title';
import StyledText from '@/components/Elements/Text';
import Span from '@/components/Elements/Span';
import Tabs from '@/components/Elements/Tabs';
import TabPane from '@/components/Elements/TabPane';
import Label from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import Button from '@/components/Elements/Button';
import Image from '@/components/Elements/Image';
import { StyledModal } from '@/components/Elements/Modal/SimpleModal';

export function Account({
  getZoomAccounts,
  zoomAccountList,
  createAccount,
  purchaseLicense,
  capturePurchase,
  isAccountLoading,
  // errorMessage,
  clearErrorMessage,
}) {
  const { t } = useTranslation();
  const route = useRouter();
  const { locale } = route;

  const [successModal, setSuccessModal] = useState(false);

  useEffect(() => {
    getZoomAccounts();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onCallback();
    }, 1000);
    return () => clearTimeout(timer);
  }, [route]);

  const onCallback = async () => {
    if (route.query.token && route.query.PayerID) {
      const { token, PayerID } = route.query;
      capturePurchase(
        { token, PayerID, lang: locale },
        () => {
          setSuccessModal(true);
        },
        (error) => {
          if (error) {
            const { message: msg, statusCode } = error.error;
            if (statusCode === 500) {
              message.error(t(validationMessage.internalServerError));
            } else {
              message.error(t(validationMessage[msg]));
            }
            clearErrorMessage();
          }
        },
      );
    }
  };

  const connectToZoom = () => {
    createAccount(
      () => {
        route.push(`${WEBINAR_ROUTE.ZOOM_ACCOUNT}/complete`);
      },
      (error) => {
        if (error) {
          const { message: msg, statusCode } = error.error;
          if (statusCode === 500) {
            message.error(t(validationMessage.internalServerError));
          } else {
            message.error(t(validationMessage[msg]));
          }
          clearErrorMessage();
        }
      },
    );
  };

  const purchaseSubscription = (item) => {
    const zoomId = item.id;
    purchaseLicense(
      { zoomId, subscriptionEnd: moment().add(1, 'months') },
      (data) => {
        const approvalLink = data.links.find((link) => link.rel === 'approve');
        window.location = `${approvalLink.href}`;
      },
      (error) => {
        if (error) {
          const { message: msg, statusCode } = error.error;
          if (statusCode === 500) {
            message.error(t(validationMessage.internalServerError));
          } else {
            message.error(t(validationMessage[msg]));
          }
          clearErrorMessage();
        }
      },
    );
  };

  const buttonLabel = (item) => {
    let label = (
      <Button
        defaultButton
        onClick={() => purchaseSubscription(item)}
        loading={isAccountLoading}
      >
        {t(localMessage.purchaseButton)}
      </Button>
    );
    if (item.subscriptionStatus === ZOOM_SUBSCRIPTION_TYPE.REQUESTED) {
      label = <Button defaultButton>{t(localMessage.requestedButton)}</Button>;
    }
    return label;
  };

  return (
    <>
      <Layout>
        <Div marginBottomLarge flexTop>
          <Title secondary marginRight>
            {t(localMessage.accountTitle)} {'>'}{' '}
          </Title>
          <Span breadCrumbs>{t(localMessage.accountSubTitle)}</Span>
        </Div>
        <Card>
          <Div>
            <Tabs defaultActiveKey="1">
              <TabPane tab={t(localMessage.accountTabTitle)} key="1">
                <List
                  itemLayout="horizontal"
                  dataSource={zoomAccountList}
                  renderItem={(item) => (
                    <List.Item>
                      <Div style={{ display: 'flex', width: '100%' }}>
                        <Row type="flex" style={{ width: '100%' }}>
                          <Col xs={24} lg={12} style={{ paddingTop: 15 }}>
                            <Label asterisk>
                              {t(localMessage.accountLabel)}
                            </Label>
                            <Input disabled placeholder={item.zoomEmail} />
                          </Col>
                          <Col
                            align="middle"
                            justify="center"
                            xs={24}
                            lg={12}
                            style={{ paddingTop: 15 }}
                          >
                            <Label>{t(localMessage.accountStatus)}</Label>
                            {item.status === ZOOM_ACCOUNT_STATUS.ACTIVATED && (
                              <Button connectedButton>
                                {t(localMessage.connectedButton)}
                              </Button>
                            )}
                            {item.status === ZOOM_ACCOUNT_STATUS.PENDING && (
                              <Button defaultButton>
                                {t(localMessage.defaultButton)}
                              </Button>
                            )}
                            {item.zoomDetails.type ===
                              ZOOM_ACCOUNT_TYPE.BASIC && buttonLabel(item)}
                            {item.zoomDetails.type !==
                              ZOOM_ACCOUNT_TYPE.BASIC && (
                              <Button defaultButton>
                                {t(localMessage.licenseButton)}
                              </Button>
                            )}
                          </Col>
                        </Row>
                      </Div>
                    </List.Item>
                  )}
                />

                <Div>
                  <Button
                    loading={isAccountLoading}
                    hidden={zoomAccountList.length > 0}
                    onClick={connectToZoom}
                    addField
                  >
                    <Image
                      style={{
                        width: '20px',
                        borderRadius: '5px',
                        marginRight: '5px',
                      }}
                      src="/images/material-add-box.svg"
                    />
                    {t(localMessage.addAccountButton)}
                  </Button>
                </Div>
              </TabPane>
            </Tabs>
          </Div>
          {/* <Button type="primary" NextButton>
            {t(globalMessage.saveChanges)}
          </Button> */}
        </Card>
      </Layout>
      <StyledModal
        visible={successModal}
        footer={null}
        closable={false}
        width={450}
      >
        <Row align="middle" justify="center">
          <Col align="middle" justify="center" span={24}>
            <div
              style={{ backgroundColor: '#abc9ee', padding: '30px 0px 20px' }}
            >
              <CheckCircleTwoTone
                style={{ fontSize: '5rem', paddingBottom: 15 }}
              />
              <Title level={5}>{t(localMessage.purchasedTitle)}</Title>
            </div>
            <div style={{ height: '10rem', paddingTop: '3rem' }}>
              <Space direction="vertical">
                <StyledText gray content={t(localMessage.purchasedMessage)} />
                <StyledText
                  gray
                  content={t(localMessage.purchasedInstruction)}
                />
              </Space>
            </div>
            <Button
              marginBottom
              type="primary"
              onClick={() => setSuccessModal(false)}
            >
              {t(globalMessage.close)}
            </Button>
          </Col>
        </Row>
      </StyledModal>
    </>
  );
}

Account.propTypes = {
  getZoomAccounts: PropTypes.func,
  zoomAccountList: PropTypes.any,
  createAccount: PropTypes.func,
  purchaseLicense: PropTypes.func,
  capturePurchase: PropTypes.func,
  isAccountLoading: PropTypes.bool,
  // errorMessage: PropTypes.any,
  clearErrorMessage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isAccountLoading: makeSelectLoading(LOADING_PREFIX.ACCOUNT),
  zoomAccountList: makeSelectAccountList(),
  errorMessage: makeSelectError(),
});

const mapToDispatchToProps = (dispatch) => ({
  getZoomAccounts: () => dispatch(getZoomAccount()),
  createAccount: (success, error) => dispatch(createZoomUser(success, error)),
  purchaseLicense: (payload, success, error) =>
    dispatch(zoomSubscription(payload, success, error)),
  capturePurchase: (payload, success, error) =>
    dispatch(captureLicensePurchase(payload, success, error)),
  clearErrorMessage: () => dispatch(clearErrors()),
});

const withConnect = connect(mapStateToProps, mapToDispatchToProps);

export default compose(withConnect)(Account);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['translation'])),
  },
});
