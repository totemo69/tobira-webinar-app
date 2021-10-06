import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { memo, useEffect, useCallback, useState } from 'react';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Formik, Field } from 'formik';
import { Col, message, Row } from 'antd';

import globalMessage from '@/messages/global';
import localMessage from '@/messages/profile';
import { LOADING_PREFIX } from '@/utils/constants';
import {
  makeSelectLoading,
  makeSelectLoadingStatus,
  makeSelectError,
} from '@/states/global/selector';
import { clearErrors } from '@/states/global/actions';
import { makeSelectProfileDetails } from '@/states/profiles/selector';
import {
  getProfile,
  updateProfile,
  updateCredentials,
} from '@/states/profiles/action';
import { withAuthSync } from '@/lib/auth';
import Layout from '@/components/Layouts/Home';
import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/Title';
import Card from '@/components/Elements/Card';
import Labels from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import InputPassword from '@/components/Elements/Input/password';
import PhoneInput from '@/components/Elements/PhoneInput';
import Tabs from '@/components/Elements/Tabs';
import TabPane from '@/components/Elements/TabPane';
import Button from '@/components/Elements/Button';
import Span from '@/components/Elements/Span';
import ProfileUpload from '@/components/Modules/Profile/profileUploader';
import ErrorMessage from '@/components/Elements/ErrorMessage';
import validationMessage from '@/messages/validation';
import validationSchema, { credentialsValidation } from '@/validations/profile';

export function Profile({
  fetchProfile,
  userDetails,
  doUpdateProfile,
  doUpdateCredentials,
  isLoading,
  profileUpdateStatus,
  errorMessage,
  clearErrorMessage,
}) {
  const { t } = useTranslation();
  const [onAction, setOnAction] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const onSubmit = useCallback((values) => {
    setOnAction(true);
    doUpdateProfile(values);
  });

  const onSubmitCredentials = (values, { resetForm }) => {
    setOnAction(true);
    doUpdateCredentials(values);
    resetForm();
  };

  useEffect(() => {
    if (!isLoading) {
      if (onAction) {
        if (profileUpdateStatus && !errorMessage) {
          message.success(t(globalMessage.success));
        } else if (!profileUpdateStatus && errorMessage) {
          const { message: msg } = errorMessage.error;
          message.error(t(validationMessage[msg]));
          clearErrorMessage();
        }
        setOnAction(false);
      }
    }
  }, [isLoading, onAction]);

  return (
    <>
      <Layout>
        <Div marginBottomLarge flexTop>
          <Title secondary marginRight>
            {t(globalMessage.profile)} {'>'}{' '}
          </Title>
          <Span breadCrumbs>{t(localMessage.editProfile)}</Span>
        </Div>
        <Row type="flex" gutter={[15, 0]} style={{ width: '100%' }}>
          <Col xs={24} lg={6}>
            <Card>
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
                  <Labels>{userDetails && userDetails.email}</Labels>
                </Div>
                <Div widthFull cardInfo>
                  <Labels light>{t(globalMessage.fullName)}</Labels>
                  <Labels>{userDetails && userDetails.fullName}</Labels>
                </Div>
                <Div widthFull cardInfo>
                  <Labels light>{t(globalMessage.contactNo)}</Labels>
                  <Labels>{userDetails && userDetails.contact}</Labels>
                </Div>
              </Div>
            </Card>
          </Col>
          <Col xs={24} lg={18}>
            <Card>
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
                      {({ setFieldValue, handleSubmit }) => (
                        <>
                          <Div widthFull>
                            <Labels asterisk>
                              {t(globalMessage.username)}
                            </Labels>
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
                            <Labels asterisk>
                              {t(globalMessage.fullName)}
                            </Labels>
                            <Field
                              type="text"
                              name="fullName"
                              component={Input}
                            />
                            <ErrorMessage name="fullName" />
                          </Div>
                          <Div widthFull marginY>
                            <Labels asterisk>
                              {t(globalMessage.contactNo)}
                            </Labels>
                            <Field
                              name="contact"
                              country="jp"
                              component={PhoneInput}
                              onChange={(val) => setFieldValue('contact', val)}
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
                            >
                              {t(globalMessage.saveChanges)}
                            </Button>
                          </Div>
                        </>
                      )}
                    </Formik>
                  </TabPane>
                  <TabPane tab={t(localMessage.changePassword)} key="2">
                    <Formik
                      initialValues={{
                        currentPassword: '',
                        password: '',
                        confirmPassword: '',
                      }}
                      validationSchema={credentialsValidation}
                      onSubmit={onSubmitCredentials}
                      enableReinitialize
                    >
                      {({ handleSubmit }) => (
                        <>
                          <Div widthFull marginY>
                            <Labels asterisk>
                              {t(globalMessage.currentPassword)}
                            </Labels>
                            <Field
                              name="currentPassword"
                              component={InputPassword}
                              placeholder={t(
                                globalMessage.enterCurrentPassword,
                              )}
                            />
                            <ErrorMessage name="currentPassword" />
                          </Div>
                          <Div widthFull marginY>
                            <Labels asterisk>
                              {t(globalMessage.newPassword)}
                            </Labels>
                            <Field
                              name="password"
                              component={InputPassword}
                              placeholder={t(globalMessage.newPassword)}
                            />
                            <ErrorMessage name="password" />
                          </Div>
                          <Div widthFull marginY>
                            <Labels asterisk>
                              {t(globalMessage.confirmPassword)}
                            </Labels>
                            <Field
                              name="confirmPassword"
                              component={InputPassword}
                              placeholder={t(globalMessage.confirmPassword)}
                            />
                            <ErrorMessage name="confirmPassword" />
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
                              loading={isLoading}
                            >
                              {t(globalMessage.saveChanges)}
                            </Button>
                          </Div>
                        </>
                      )}
                    </Formik>
                  </TabPane>
                </Tabs>
              </Div>
            </Card>
          </Col>
        </Row>
      </Layout>
    </>
  );
}

Profile.propTypes = {
  fetchProfile: PropTypes.func,
  userDetails: PropTypes.any,
  doUpdateProfile: PropTypes.func,
  doUpdateCredentials: PropTypes.func,
  isLoading: PropTypes.bool,
  profileUpdateStatus: PropTypes.bool,
  errorMessage: PropTypes.any,
  clearErrorMessage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  userDetails: makeSelectProfileDetails(),
  isLoading: makeSelectLoading(LOADING_PREFIX.UPDATE_PROFILE),
  profileUpdateStatus: makeSelectLoadingStatus(LOADING_PREFIX.UPDATE_PROFILE),
  errorMessage: makeSelectError(),
});

const mapDispatchProps = (dispatch) => ({
  fetchProfile: () => dispatch(getProfile()),
  doUpdateCredentials: (payload) => dispatch(updateCredentials(payload)),
  doUpdateProfile: (payload) => dispatch(updateProfile(payload)),
  clearErrorMessage: () => dispatch(clearErrors()),
});

const withConnect = connect(mapStateToProps, mapDispatchProps);

export default compose(withConnect, memo)(withAuthSync(Profile));

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['translation'])),
  },
});
