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

export default function Account() {
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
                <Div style={{display: "flex",width: "100%"}}>
                  <Input style={{width: "60%", marginLeft: "50px", marginRight: "10px"}}  disabled placeholder="zoomaccount1@gmail.com"></Input>
                    
                  <Button connectedButton>Connected</Button>
                  <Button defaultButton>Default</Button>
                    
                </Div>
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