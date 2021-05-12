import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import globalMessage from '@/messages/global';

import Layout from '@/components/Elements/Layout';
import Sidebar from '@/components/Elements/Sidebar';
import Header from '@/components/Elements/Header';
import Content from '@/components/Elements/Content';
import Footer from '@/components/Elements/Footer';
import Div from '@/components/Elements/Div';
import Image from '@/components/Elements/Image';
import Dropdown from '@/components/Elements/Dropdown'
import Title from '@/components/Elements/Title';
import Card from '@/components/Elements/Card';
import Labels from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import PhoneInput from '@/components/Elements/PhoneInput';
import Link from '@/components/Elements/Link';
import Tabs from '@/components/Elements/Tabs';
import TabPane from '@/components/Elements/TabPane';
import Button from '@/components/Elements/Button';

export default function ProfileSample() {
  const { t } = useTranslation();
  
  return (
    <>
      <Layout bgGray>
        <Sidebar width={250}>
            <Div paddingSmall noMargin widthFull yellowBg>
                <Image src={"Images/logo.svg"} alt="Tobira Logo" logoSmall />
            </Div>
        </Sidebar>
        <Layout>
          <Header noMargin>
            <Div widthFull noMargin right>
                <Image src={"Images/avatar.svg"} alt="Tobira Logo" userImg />
                <Dropdown username="tobirauser" items />
            </Div>
          </Header>
          <Div widthXLong paddingSmall marginBottom2x>
            <Content>
                <Div marginBottom2x>
                    <Title secondary>{"Profile >"}</Title>
                </Div>
                <Div widthFull noMargin cardContainer>
                    <Card ProfileCard>
                        <Div widthFull noMargin paddingCard center borderBreak>
                            <Image src={"Images/avatar.svg"} alt="Tobira Logo" profileImg/>
                            <Title profileName>tobirauser</Title>
                        </Div>
                        <Div widthFull paddingCard noMargin>
                            <Div widthFull>
                                <Labels light>Email Address</Labels>
                                sample@tobira.com
                            </Div>
                            <Div widthFull cardInfo>
                                <Labels light>Full Name</Labels>
                                Yamazaki Kento
                            </Div>
                            <Div widthFull cardInfo>
                                <Labels light>Contact Number</Labels>
                                090-9725-3264
                            </Div>
                        </Div>
                    </Card>
                    <Card ProfileSettings>
                        <Div widthFull paddingCard2 noMargin>
                          <Tabs defaultActiveKey="1">
                            <TabPane tab="Edit Profile" key="1">
                              <Div widthFull>
                                <Labels asterisk>Username</Labels>
                                <Input type="text" disabled value="tobirauser"></Input>
                              </Div>
                              <Div widthFull marginTop>
                                <Labels asterisk>Email Address</Labels>
                                <Input type="text" disabled value="sample@tobira.com"></Input>
                              </Div>
                              <Div widthFull marginTop>
                                <Labels asterisk>Full Name</Labels>
                                <Input type="text" value="Yamazaki Kento"></Input>
                              </Div>
                              <Div widthFull marginY>
                                <Labels asterisk>Contact Number</Labels>
                                <PhoneInput country={'jp'} />
                              </Div>
                            </TabPane>
                            <TabPane tab="Change Password" key="2">
                              <Div widthFull>
                                <Labels asterisk>New Password</Labels>
                                <Input type="email" placeholder="Enter new password"></Input>
                              </Div>
                              <Div widthFull marginY>
                                <Labels asterisk>Confirm Password</Labels>
                                <Input type="email" placeholder="Confirm new password"></Input>
                              </Div>
                            </TabPane>
                          </Tabs>
                        </Div>
                        <Div widthFull paddingCard2 flexHeight noMargin bottomRight>
                          <Button type="primary" smallBtn marginLeftAuto marginBottom2x>Save Changes</Button>
                        </Div>
                    </Card>
                </Div>
            </Content>
          </Div>
          <Footer>
              Copyright &#169; 2021 Tobira Webinar Video Communications, Inc. All rights reserved. <Link href="#" name="Terms of Service" /> and <Link href="#" name="Privacy Policy" />
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['translation']),
  },
});