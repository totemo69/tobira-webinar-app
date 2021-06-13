import NextImage from 'next/image';
import { Row, Col, Typography } from 'antd';
import Button from '@/components/Elements/Button';
import classNames from './Detail.module.css';
const {Title} = Typography;
export default function Detail() {
    
  return (
    <>
      <Row className={classNames.detailRow} >
        <Col span={11} className={classNames.detailCol}>
          <NextImage 
            src="/Images/dummy.jpeg"
            alt="Course Detail"
            layout="fill"
            loading="lazy"
            className={classNames.heroImage}
          />

        </Col>
        <Col span={12} offset={1}>
          <Title level={1} className={classNames.title}>Wealth & Asset Management in Tough Times</Title>
          <Row>
            <Col span={12}>
              <Button type="primary" ghost smallBtn> Share</Button>
            </Col>
            <Col span={12}>by Yamazaki Kento</Col>
          </Row>
        </Col>
      </Row>   
    </>
  );
}