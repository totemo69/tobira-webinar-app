import Paragraph from '@/components/Elements/SampleParagraph';
import Tittle from '@/components/Elements/Title'
import Card from '@/components/Elements/Card';
import Div from '@/components/Elements/Div';
import Logo from '@/components/Elements/Logo';
import Label from '@/components/Elements/Labels';
import TabPane from '@/components/Elements/SampleTab';
import Input from '@/components/Elements/Input';
import Button from '@/components/Elements/Button'
import PhoneInput from '@/components/Elements/PhoneInput'
import { useState } from 'react';
import {Row, Col, Tabs} from 'antd'



export default function EditProfile(){
 const [value, setValue] = useState();
  return(
    <>
      Profile {">"} Edit Profile
      <Div style={{margin: '0 auto', width: '100%'}}>
        <Row gutter={16} >
          <Col >
            <Card>
             
                <Logo style={{marginLeft: 'auto', marginRight: 'auto',width: '250px'}}  src={'Images/avatar.svg'}></Logo>
                <Tittle style={{textAlign: 'center'}} level={5}>Tobirauser</Tittle>
                  <Div style={{marginTop: '50%', marginBottom: '100%'}}>
                    <Label style={{color: '#B0B0B0'}}>Email Address</Label>
                    <Label>sample@tobira.com</Label>

                    <Label style={{color: '#B0B0B0'}}>Full Name</Label>
                    <Label>Yamazaki Kento</Label>

                    <Label style={{color: '#B0B0B0'}}>Contact Number</Label>
                    <Label>090-9725-3264</Label>
                  </Div> 
            </Card>
          </Col>
          <Col style={{width:'60%'}}>
          <Card style={{height: '100%'}}>
            <Tabs>
              <TabPane key="1" tab="Edit Profile">
                <Label asterisk>Username</Label>
                <Input disabled placeholder="User Name" value="Tobirauser"></Input>

                <Label asterisk>Email Address</Label>
                <Input type="email" disabled placeholder="User Name" value="sample@tobira.com"></Input>

                <Label >Full Name</Label>
                <Input type="text" placeholder="User Name" value="Yamazaki Kento"></Input>

                <Label >Contact Number</Label>
                <PhoneInput country={'jp'} />
                
                <Div style={{float: "right", marginTop: "28%"}}>
                  <Button style={{float: "right", width: "50%"}} type="primary">Save Changes</Button>
                </Div>
              </TabPane>

              <TabPane key="2" tab="Change Password">
                <Label asterisk>New Password</Label>
                <Input type="email"  placeholder="Enter new password" ></Input>

                <Label asterisk>Confirm Password</Label>
                <Input type="email"  placeholder="Confirm new password" ></Input>

                <Div style={{float: "right", marginTop: "55%"}}>
                  <Button style={{float: "right", width: "50%"}} type="primary">Save Changes</Button>
              </Div>
              </TabPane>
            </Tabs>
          </Card>
          </Col>
        </Row>
      </Div>
      
    </>
  )
}