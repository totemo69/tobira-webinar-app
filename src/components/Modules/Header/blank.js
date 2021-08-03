import { Col, Row } from 'antd';
import { useRouter } from 'next/router';
import Hdr from '@/components/Elements/Header';
import Div from '@/components/Elements/Div';
import Language from '@/components/Modules/Language';

export default function BlankHeader() {
  const route = useRouter();
  const { locale } = route;
  console.log(route);
  return (
    <Hdr noMargin>
      <Div widthFull flexCenterEnd noMargin style={{ 'min-height': '65px;' }}>
        <Row type="flex">
          <Col type="flex" xs={24}>
            <Language locale={locale} route={route} />
          </Col>
        </Row>
      </Div>
    </Hdr>
  );
}
