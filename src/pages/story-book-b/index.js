import Layout from '@/components/Layouts/Guest';
import { Row, Col } from 'antd';
import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/Title';
import Button from '@/components/Elements/Button';

import { useDispatch } from 'react-redux';
import { getUser } from '../../states/users/action';

export default function SampleComponent(){
  const dispatch = useDispatch();

  const checkAPI = () => {
    dispatch(getUser());
  };
  
  return(
    <>
      <Layout>
        <Row>
          <Col span={24}>
            <Div widthFull center>
              <Title modalTitle>CHECK USER API</Title>
              <Button type="primary" marginTop
                onClick={() => checkAPI()}
              >
                USER API
              </Button>
            </Div>
          </Col>
        </Row>
      </Layout>
    </>
  );
}