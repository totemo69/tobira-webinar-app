import React, { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { Col, List, Row } from 'antd';
import { LOADING_PREFIX } from '@/utils/constants';
import { authRequest } from '@/lib/zoom';
import { getZoomAccount } from '@/states/accounts/actions';
import { makeSelectAccountList } from '@/states/accounts/selector';
import { makeSelectLoading } from '@/states/global/selector';

import globalMessage from '@/messages/global';
import localMessage from '@/messages/account';
import Layout from '@/components/Layouts/Home';
import Card from '@/components/Elements/Card';
import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/Title';
import Span from '@/components/Elements/Span';
import Tabs from '@/components/Elements/Tabs';
import TabPane from '@/components/Elements/TabPane';
import Label from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import Button from '@/components/Elements/Button';
import Image from '@/components/Elements/Image';

export function Account({ getZoomAccounts, zoomAccountList }) {
  const { t } = useTranslation();

  useEffect(() => {
    getZoomAccounts();
  }, []);

  const connectToZoom = () => {
    window.location = authRequest();
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
                            <Button connectedButton>
                              {t(localMessage.connectedButton)}
                            </Button>
                            <Button defaultButton>
                              {t(localMessage.defaultButton)}
                            </Button>
                          </Col>
                        </Row>
                      </Div>
                    </List.Item>
                  )}
                />

                <Div>
                  <Button onClick={connectToZoom} addField>
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
          <Button type="primary" NextButton>
            {t(globalMessage.saveChanges)}
          </Button>
        </Card>
      </Layout>
    </>
  );
}

Account.propTypes = {
  getZoomAccounts: PropTypes.func,
  zoomAccountList: PropTypes.any,
  // isAccountLoading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isAccountLoading: makeSelectLoading(LOADING_PREFIX.ACCOUNT),
  zoomAccountList: makeSelectAccountList(),
});

const mapToDispatchToProps = (dispatch) => ({
  getZoomAccounts: () => dispatch(getZoomAccount()),
});

const withConnect = connect(mapStateToProps, mapToDispatchToProps);

export default compose(withConnect)(Account);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['translation'])),
  },
});
