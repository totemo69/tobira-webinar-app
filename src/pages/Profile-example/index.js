import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import globalMessage from '@/messages/global';
import message from '@/messages/profilesample';

import Layout from '@/components/Layouts/Home';
import Div from '@/components/Elements/Div';
import Image from '@/components/Elements/Image';
import Title from '@/components/Elements/Title';
import Card from '@/components/Elements/Card';
import Labels from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import PhoneInput from '@/components/Elements/PhoneInput';
import Tabs from '@/components/Elements/Tabs';
import TabPane from '@/components/Elements/TabPane';
import Button from '@/components/Elements/Button';
import Span from '@/components/Elements/Span';

export default function ProfileSample() {
  const { t } = useTranslation();
  
  return (
    <>
      <Layout>
        <Div marginBottom2x flexTop>
          <Title secondary marginRight>{t(globalMessage.profile)} {">"} </Title>
          <Span breadCrumbs>{t(message.editProfile)}</Span>
        </Div>
        <Div widthFull noMargin flexCenter>
          <Card ProfileCard>
            <Div widthFull noMargin paddingCard center borderBreak>
              <Image src={"Images/avatar.svg"} alt="Tobira Logo" profileImg/>
              <Title profileName>tobirauser</Title>
            </Div>
            <Div widthFull paddingCard noMargin>
              <Div widthFull>
                <Labels light>{t(globalMessage.email)}</Labels>
                        sample@tobira.com
              </Div>
              <Div widthFull cardInfo>
                <Labels light>{t(globalMessage.fullName)}</Labels>
                        Yamazaki Kento
              </Div>
              <Div widthFull cardInfo>
                <Labels light>{t(globalMessage.contactNo)}</Labels>
                        090-9725-3264
              </Div>
            </Div>
          </Card>
          <Card ProfileSettings>
            <Div widthFull paddingCard2 noMargin>
              <Tabs defaultActiveKey="1">
                <TabPane tab={t(message.editProfile)} key="1">
                  <Div widthFull>
                    <Labels asterisk>{t(globalMessage.username)}</Labels>
                    <Input type="text" disabled value="tobirauser"></Input>
                  </Div>
                  <Div widthFull marginTop>
                    <Labels asterisk>{t(globalMessage.email)}</Labels>
                    <Input type="text" disabled value="sample@tobira.com"></Input>
                  </Div>
                  <Div widthFull marginTop>
                    <Labels asterisk>{t(globalMessage.fullName)}</Labels>
                    <Input type="text" value="Yamazaki Kento"></Input>
                  </Div>
                  <Div widthFull marginY>
                    <Labels asterisk>{t(globalMessage.contactNo)}</Labels>
                    <PhoneInput country={'jp'} />
                  </Div>
                </TabPane>
                <TabPane tab={t(message.changePassword)} key="2">
                  <Div widthFull>
                    <Labels asterisk>{t(globalMessage.newPassword)}</Labels>
                    <Input type="email" placeholder={t(globalMessage.newPassword)}></Input>
                  </Div>
                  <Div widthFull marginY>
                    <Labels asterisk>{t(globalMessage.confirmPassword)}</Labels>
                    <Input type="email" placeholder={t(globalMessage.confirmPassword)}></Input>
                  </Div>
                </TabPane>
              </Tabs>
            </Div>
            <Div widthFull paddingCard2 flexHeight noMargin bottomRight>
              <Button type="primary" smallBtn marginLeftAuto marginBottom2x>{t(globalMessage.saveChanges)}</Button>
            </Div>
          </Card>
        </Div>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['translation']),
  },
});