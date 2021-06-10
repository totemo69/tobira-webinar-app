import React, { useEffect } from 'react';
// import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { List } from 'antd';
import { LOADING_PREFIX } from '@/utils/constants';
import { getZoomAccount } from '@/states/accounts/actions';
import { makeSelectAccountList } from '@/states/accounts/selector';
import { makeSelectLoading } from '@/states/global/selector';

// import globalMessage from '@/messages/global';
// import message from '@/messages/profile';
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
  // const { t } = useTranslation();

  useEffect(() => {
    getZoomAccounts();
  }, []);

  return(
    <>
      
      <Layout>
        <Div marginBottomLarge flexTop>
          <Title secondary marginRight>ACCOUNTS {">"} </Title>
          <Span breadCrumbs>Zoom Accounts</Span>
        </Div>
        <Card>
          <Div>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Zoom Account" key="1">
                <Div style={{display: "flex", textAlign: "center", width: "100%", padding: "20px", justifyContent: "space-between"}}>
                  <Label asterisk>
                    Email Address or Contact Number
                  </Label>
                  <Label>Status</Label>
                </Div>
                <List
                  itemLayout="horizontal"
                  dataSource={zoomAccountList}
                  renderItem={item => (
                    <List.Item>
                      <Div style={{display: "flex",width: "100%"}}>
                        <Input style={{width: "60%", marginLeft: "50px", marginRight: "10px"}}  disabled placeholder={item.zoomEmail}></Input>
                        <Button connectedButton>Connected</Button>
                        <Button defaultButton>Default</Button>
                      </Div>
                    </List.Item>
                  )}
                />

                <Div>
                  <Button addField><Image style={{width: "20px", borderRadius: "5px"}} src={"Images/material-add-box.svg"} />Add account</Button>
                </Div>
              </TabPane>
            </Tabs>
          </Div>
          <Button type="primary" NextButton>Save Changes</Button>
        </Card>
      </Layout>
    </>
  );
}

Account.propTypes = {
  getZoomAccounts: PropTypes.func,
  zoomAccountList: PropTypes.any,
  isAccountLoading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  isAccountLoading: makeSelectLoading(LOADING_PREFIX.ACCOUNT),
  zoomAccountList: makeSelectAccountList(),
});

const mapToDispatchToProps = (dispatch) => {
  return {
    getZoomAccounts: () => dispatch(getZoomAccount()),
  };
};

const withConnect = connect(
  mapStateToProps,
  mapToDispatchToProps
);

export default compose(
  withConnect,
)(Account);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['translation']),
  },
});