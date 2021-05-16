import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import message from '@/messages/edit-profile';
import Tittle from '@/components/Elements/Title';
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
      Profile {">"} {t(message.Editprofile)}
      <Div style={{margin: '0 auto', width: '100%'}}>
        <Row gutter={16} >
          <Col >
            <Card>
             
              <Logo style={{marginLeft: 'auto', marginRight: 'auto',width: '250px'}}  src={'Images/avatar.svg'}></Logo>
              <Tittle style={{textAlign: 'center'}} level={5}>Tobirauser</Tittle>
              <Div style={{marginTop: '50%', marginBottom: '100%'}}>
                <Label style={{color: '#B0B0B0'}}>{t(message.Emailaddress)}</Label>
                <Label>sample@tobira.com</Label>

                <Label style={{color: '#B0B0B0'}}>{t(message.Fullname)}</Label>
                <Label>Yamazaki Kento</Label>

                <Label style={{color: '#B0B0B0'}}>{t(message.Contactnumber)}</Label>
                <Label>090-9725-3264</Label>
              </Div> 
            </Card>
          </Col>
          <Col style={{width:'60%'}}>
            <Card style={{height: '100%'}}>
              <Tabs>
                <TabPane key="1" tab={t(message.Editprofile)}>
                  <Label asterisk>{t(message.Username)}</Label>
                  <Input disabled placeholder={t(message.Username)} value="Tobirauser"></Input>

                  <Label asterisk>{t(message.Emailaddress)}</Label>
                  <Input type="email" disabled placeholder={t(message.Emailaddress)} value="sample@tobira.com"></Input>

                  <Label >{t(message.Fullname)}</Label>
                  <Input type="text" placeholder="User Name" value="Yamazaki Kento"></Input>

                  <Label >{t(message.Contactnumber)}</Label>
                  <PhoneInput />
                
                  <Div style={{float: "right", marginTop: "28%"}}>
                    <Button style={{float: "right", width: "50%"}} type="primary">{t(message.Savechanges)}</Button>
                  </Div>
                </TabPane>

                <TabPane key="2" tab={t(message.ChangePassword)}>
                  <Label asterisk>{t(message.Newpassword)}</Label>
                  <Input type="email"  placeholder={t(message.Newpassword)} ></Input>

                  <Label asterisk>{t(message.Confirmpassword)}</Label>
                  <Input type="email"  placeholder={t(message.Confirmpassword)} ></Input>

                  <Div style={{float: "right", marginTop: "55%"}}>
                    <Button style={{float: "right", width: "50%"}} type="primary">{t(message.Savechanges)}</Button>
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