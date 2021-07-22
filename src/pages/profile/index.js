import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { memo, useEffect, useCallback } from 'react';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Formik, Field } from 'formik';
import { message } from 'antd';

import globalMessage from '@/messages/global';
import localMessage from '@/messages/profile';
import { LOADING_PREFIX } from '@/utils/constants';
import {
  makeSelectLoading,
  makeSelectLoadingStatus,
  makeSelectError,
} from '@/states/global/selector';
import { makeSelectProfileDetails } from '@/states/profiles/selector';
import { getProfile, updateProfile } from '@/states/profiles/action';
import { withAuthSync } from '@/lib/auth';
import Layout from '@/components/Layouts/Home';
import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/Title';
import Card from '@/components/Elements/Card';
import Labels from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import PhoneInput from '@/components/Elements/PhoneInput';
import Tabs from '@/components/Elements/Tabs';
import TabPane from '@/components/Elements/TabPane';
import Button from '@/components/Elements/Button';
import Span from '@/components/Elements/Span';
import ProfileUpload from '@/components/Modules/Profile/profileUploader';
import ErrorMessage from '@/components/Elements/ErrorMessage';

import validationSchema from '@/validations/profile';

export function Profile({
  fetchProfile,
  userDetails,
  doUpdateProfile,
  isLoading,
  profileUpdateStatus,
  errorMessage,
}) {
  const { t } = useTranslation();

  useEffect(() => {
    fetchProfile();
  }, []);

  const onSubmit = useCallback((values) => {
    doUpdateProfile(values);
  });

  useEffect(() => {
    if (!isLoading) {
      if (profileUpdateStatus) {
        // Temporary only
        message.success('Success!');
      } else if (errorMessage) {
        message.error(errorMessage);
      }
    }
  }, [isLoading, profileUpdateStatus, errorMessage]);

  return (
    <>
      <Layout>
        <Div marginBottomLarge flexTop>
          <Title secondary marginRight>
            {t(globalMessage.profile)} {'>'}{' '}
          </Title>
          <Span breadCrumbs>{t(localMessage.editProfile)}</Span>
        </Div>
        <Div widthFull noMargin flexCenter>
          <Card ProfileCard>
            <Div widthFull noMargin paddingCard center borderBreak>
              <ProfileUpload
                src={userDetails.profileImage}
                alt="Profile Pic"
                onUploadComplete={(image) =>
                  doUpdateProfile({ profileImage: image })
                }
              />
            </Div>
            <Div widthFull center noMargin>
              <Title profileName>{userDetails && userDetails.username}</Title>
            </Div>
            <Div widthFull paddingCard noMargin>
              <Div widthFull>
                <Labels light>{t(globalMessage.email)}</Labels>
                {userDetails && userDetails.email}
              </Div>
              <Div widthFull cardInfo>
                <Labels light>{t(globalMessage.fullName)}</Labels>
                {userDetails && userDetails.fullName}
              </Div>
              <Div widthFull cardInfo>
                <Labels light>{t(globalMessage.contactNo)}</Labels>
                {userDetails && userDetails.contact}
              </Div>
            </Div>
          </Card>
          <Card ProfileSettings>
            <Div widthFull paddingCard2 noMargin>
              <Tabs defaultActiveKey="1">
                <TabPane tab={t(localMessage.editProfile)} key="1">
                  <Formik
                    initialValues={{
                      fullName: userDetails && userDetails.fullName,
                      contact: userDetails && userDetails.contact,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    enableReinitialize
                  >
                    {({ handleSubmit }) => (
                      <>
                        <Div widthFull>
                          <Labels asterisk>{t(globalMessage.username)}</Labels>
                          <Input
                            type="text"
                            disabled
                            value={userDetails && userDetails.username}
                          />
                        </Div>
                        <Div widthFull marginTop>
                          <Labels asterisk>{t(globalMessage.email)}</Labels>
                          <Input
                            type="text"
                            disabled
                            value={userDetails && userDetails.email}
                          />
                        </Div>
                        <Div widthFull marginTop>
                          <Labels asterisk>{t(globalMessage.fullName)}</Labels>
                          <Field
                            type="text"
                            name="fullName"
                            component={Input}
                          />
                          <ErrorMessage name="fullName" />
                        </Div>
                        <Div widthFull marginY>
                          <Labels asterisk>{t(globalMessage.contactNo)}</Labels>
                          <Field
                            name="contact"
                            country="jp"
                            component={PhoneInput}
                          />
                          <ErrorMessage name="contact" />
                        </Div>
                        <Div
                          widthFull
                          paddingCard2
                          flexHeight
                          noMargin
                          bottomRight
                        >
                          <Button
                            type="primary"
                            onClick={handleSubmit}
                            smallBtn
                            marginLeftAuto
                            marginBottomLarge
                          >
                            {t(globalMessage.saveChanges)}
                          </Button>
                        </Div>
                      </>
                    )}
                  </Formik>
                </TabPane>
                <TabPane tab={t(localMessage.changePassword)} key="2">
                  <Div widthFull>
                    <Labels asterisk>{t(globalMessage.newPassword)}</Labels>
                    <Input
                      type="email"
                      placeholder={t(globalMessage.newPassword)}
                    />
                  </Div>
                  <Div widthFull marginY>
                    <Labels asterisk>{t(globalMessage.confirmPassword)}</Labels>
                    <Input
                      type="email"
                      placeholder={t(globalMessage.confirmPassword)}
                    />
                  </Div>
                </TabPane>
              </Tabs>
            </Div>
          </Card>
        </Div>
      </Layout>
    </>
  );
}

Profile.propTypes = {
  fetchProfile: PropTypes.func,
  userDetails: PropTypes.any,
  doUpdateProfile: PropTypes.func,
  isLoading: PropTypes.bool,
  profileUpdateStatus: PropTypes.bool,
  errorMessage: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  userDetails: makeSelectProfileDetails(),
  isLoading: makeSelectLoading(LOADING_PREFIX.UPDATE_PROFILE),
  profileUpdateStatus: makeSelectLoadingStatus(LOADING_PREFIX.UPDATE_PROFILE),
  errorMessage: makeSelectError(),
});

const mapDispatchProps = (dispatch) => ({
  fetchProfile: () => dispatch(getProfile()),
  doUpdateProfile: (payload) => dispatch(updateProfile(payload)),
});

const withConnect = connect(mapStateToProps, mapDispatchProps);

export default compose(withConnect, memo)(withAuthSync(Profile));

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['translation'])),
  },
});
