import React, { useCallback } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import { createStructuredSelector } from 'reselect';
import { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { useRouter } from 'next/router';
import { WEBINAR_ROUTE } from '@/utils/constants';
import message from '@/messages/account';

import Layout from '@/components/Layouts/Guest';
import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/Title';
import Label from '@/components/Elements/Labels';
import Button from '@/components/Elements/Button';
import Image from '@/components/Elements/Image';


export function Complete() {
  const { t } = useTranslation();
  const route = useRouter();
  
  useEffect(() => {

  }, []);

  const gotoAccount = useCallback(
    () => {
      route.push(WEBINAR_ROUTE.ZOOM_ACCOUNT);
    },[],
  );

  const createAccount = useCallback(
    () => {
      route.push(WEBINAR_ROUTE.CREATE_WEBINAR);
    },[],
  );

  return (
    <>
      <Layout>
        <Row>
          <Col span={24}>
            <Div widthFull marginBottom center>
              <Image src={"/images/logo.svg"} alt="Tobira Logo" logo />
            </Div>
            <Div widthFull marginBottom center>
              <Image src={"/images/success.svg"} alt="Tobira Logo" logo />
            </Div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Div widthFull center>
              <Title level={3}>{t(message.completedTitle)}</Title>
            </Div>
            <Div widthFull paddingYLg center>
              <Label center>{t(message.completedMessage)}</Label>
            </Div>
            <Div widthFull center>
              <Button style={{ width: '50%'}} onClick={createAccount} type="primary">{t(message.createNewWebinar)}</Button>
            </Div>
            <Div widthFull center>
              <Button
                style={{ width: '50%', color: '#4678B5', border: '1px solid #4678B5' }}
                onClick={gotoAccount}
              >
                {t(message.gotoAccounts)}
              </Button>
            </Div>
          </Col>
        </Row>
      </Layout>
    </>
  );
}

// Complete.propTypes = {

// };

// const mapStateToProps = createStructuredSelector({
//   // isLoggedIn: makeSelectIsLogin(),
// });

// export function mapDispatchToProps(dispatch) {
//   return {
//     // doLogin: (payload, errCallback) => dispatch(authenticateUser(payload, errCallback))
//   };
// }


const withConnect = connect(
  null,
  null
);

export default compose(
  withConnect,
)(Complete);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['translation']),
  },
});