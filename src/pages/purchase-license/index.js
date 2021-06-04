import Layout from '@/components/Layouts/Home';
import Title from '@/components/Elements/Title';
import Span from '@/components/Elements/Span';
import Div from '@/components/Elements/Div';
import Button from '@/components/Elements/Button';
import { useState } from 'react';
import {ProfessionalConfirm} from '@/components/Modules/Modals';
import {Row, Col} from 'antd';

export default function PurchaseLicense(){
  const [ isModalVisibleConfirm , setIsmModalVisibleConfirm] = useState(false);

  return(
    <>
      <Layout>
        <Div marginBottomLarge flexTop>
          <Title secondary marginRight>PURCHASE LICENSE {">"} </Title>
          <Span breadCrumbs>Webinar Plan</Span>
        </Div>

        <Div widthFull center>
          <Title level={5} textColorBlue  marginRight>Select your plan</Title>
        </Div>

        <Div style={{textAlign: "center", width: "100%"}}>
          <Row className="selectPlan" gutter={20}>
            <Col  offset={6}>
              <Div standardLayout>
                <Div bannerPlain>
                  <Title level={5} textColorBlue  marginRight>STANDARD</Title>
                </Div>
                <Div bannerCenter>
                  <Title level={3} textColorBlue  marginRight>100 <Span breadCrumbs>/month</Span> </Title>
                </Div>

                <Div style={{textAlign: "left", width: "100%", marginTop: "20px"}}>
                  <ul>
                    <li>
                      <Span  >Up to 5 webinars</Span>
                    </li>
                    <li>
                      <Span >Monthly schedule</Span>
                    </li>
                  </ul>
                </Div>
                
                <Div bannerPlain >
                  <Button chooseStandard>Choose this plan</Button>
                </Div>

              </Div>
            </Col>

            <Col>
              <Div professionalLayout >
                <Div banner>
                  <Title level={5} textColorBlue  marginRight>Professional</Title>
                </Div>

                <Div bannerCenterPlain>
                  <Title level={3} textColorBlue  marginRight>150 <Span breadCrumbs>/annual</Span> </Title>
                </Div>

                <Div bannerBottom>
                 
                  <ul>
                    <li>
                      <Span  >Up to 30 webinars</Span>
                    </li>
                    <li>
                      <Span >Advance scheduling up to coming months</Span>
                    </li>
                  </ul>

                  <Div bannerPlain >
                    <Button chooseProfessional onClick={() => setIsmModalVisibleConfirm(true)}>Choose this plan</Button>
                  </Div>
                  
                </Div>
              </Div>
            </Col>

            <Col>
              <Div standardLayout>
                <Div bannerPlain>
                  <Title level={5} textColorBlue  marginRight>ADVANCE</Title>
                </Div>

                <Div bannerCenter>
                  <Title level={3} textColorBlue  marginRight>1000 <Span breadCrumbs>/annual</Span> </Title>
                </Div>

                <Div style={{textAlign: "left", width: "100%", marginTop: "20px"}}>
                  <ul>
                    <li>
                      <Span  >Up to 30 webinars</Span>
                    </li>
                    <li>
                      <Span >Advance scheduling up to coming months</Span>
                    </li>
                  </ul>
                </Div>

                <Div bannerPlain >
                  <Button chooseAdvance>Choose this plan</Button>
                </Div>
              </Div>
            </Col>
          </Row>
        </Div>
      </Layout>
      <ProfessionalConfirm isVisible={isModalVisibleConfirm} close={() => setIsmModalVisibleConfirm(false)}/>
    </>
  );
}