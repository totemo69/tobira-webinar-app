import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import message from '@/messages/edit-profile';
import globalMessage from '@/messages/global';

import Span from '@/components/Elements/Span';
import Title from '@/components/Elements/Title';
import Card from '@/components/Elements/Card';
import Div from '@/components/Elements/Div';
import Logo from '@/components/Elements/Logo';
import Label from '@/components/Elements/Labels';
import TabPane from '@/components/Elements/SampleTab';
import Input from '@/components/Elements/Input';
import Button from '@/components/Elements/Button';
import PhoneInput from '@/components/Elements/PhoneInput';
import {Row, Col, Tabs} from 'antd';



export default function EditProfile(){
  const { t } = useTranslation();
  return(
    <>
      
      <Div marginBottomLarge flexTop>
        <Title secondary marginRight>{t(globalMessage.profile)} {">"} </Title>
        <Span breadCrumbs>{t(message.editProfile)}</Span>
      </Div>
      <Div style={{margin: '0 auto', width: '100%'}}>
        <Row gutter={16} >
          <Col >
            <Card>
             
              <Logo style={{marginLeft: 'auto', marginRight: 'auto',width: '250px'}}  src={'Images/avatar.svg'}></Logo>
              <Title style={{textAlign: 'center'}} level={5}>Tobirauser</Title>
              <Div style={{marginTop: '50%', marginBottom: '100%'}}>
                <Label style={{color: '#B0B0B0'}}>{t(message.emailAddress)}</Label>
                <Label>sample@tobira.com</Label>

                <Label style={{color: '#B0B0B0'}}>{t(message.fullName)}</Label>
                <Label>Yamazaki Kento</Label>

                <Label style={{color: '#B0B0B0'}}>{t(message.contactNumber)}</Label>
                <Label>090-9725-3264</Label>
              </Div> 
            </Card>
          </Col>
          <Col style={{width:'60%'}}>
            <Card style={{height: '100%'}}>
              <Tabs>
                <TabPane key="1" tab={t(message.editProfile)}>
                  <Label asterisk>{t(message.username)}</Label>
                  <Input disabled placeholder={t(message.username)} value="Tobirauser"></Input>

                  <Label asterisk>{t(message.emailAddress)}</Label>
                  <Input type="email" disabled placeholder={t(message.emailAddress)} value="sample@tobira.com"></Input>

                  <Label >{t(message.fullName)}</Label>
                  <Input type="text" placeholder="User Name" value="Yamazaki Kento"></Input>

                  <Label >{t(message.contactNumber)}</Label>
                  <PhoneInput />
                
                  <Div style={{float: "right", marginTop: "28%"}}>
                    <Button style={{float: "right", width: "50%"}} type="primary">{t(message.saveChanges)}</Button>
                  </Div>
                </TabPane>

                <TabPane key="2" tab={t(message.changePassword)}>
                  <Label asterisk>{t(message.newPassword)}</Label>
                  <Input type="email"  placeholder={t(message.newPassword)} ></Input>

                  <Label asterisk>{t(message.confirmPassword)}</Label>
                  <Input type="email"  placeholder={t(message.confirmPassword)} ></Input>

                  <Div style={{float: "right", marginTop: "55%"}}>
                    <Button style={{float: "right", width: "50%"}} type="primary">{t(message.saveChanges)}</Button>
                  </Div>
                </TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
      </Div>
      
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['translation']),
  },
});