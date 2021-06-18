import message from '@/messages/createProfile';
import { useTranslation } from 'next-i18next';

import { StyledParagraph } from '@/components/Elements/SampleParagraph';
import Label from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import Button from '@/components/Elements/Button';
import Div from '@/components/Elements/Div';
import Switch from '@/components/Elements/Switch';

import { Row, Col } from 'antd';
import { DownOutlined, UpOutlined, PlusSquareFilled } from '@ant-design/icons';

export default function CreateWebinarRegistration() {
  const { t } = useTranslation();
  return (
    <>
      <StyledParagraph colorBlue>{t(message.registrationForm)}</StyledParagraph>

      <Label asterisk>{t(message.formName)}</Label>
      <Input placeholder={t(message.enterRegistrationFomrName)} />

      <Div BrakeLine />

      <StyledParagraph colorBlue>
        {t(message.registrationFormFields)}
      </StyledParagraph>

      {t(message.setupRegistrationFormFields)}
      <Row className="paymentRow" gutter={[10]}>
        <Col style={{ display: 'flex' }}>
          <Button UpDownButton>
            <DownOutlined />
          </Button>
          <Button UpDownButton>
            <UpOutlined />
          </Button>
        </Col>
        <Col span={7}>
          <Label center asterisk>
            {t(message.fieldNameOrPlaceholder)}
          </Label>
          <Input placeholder={t * message.emailAddress} />
        </Col>
        <Col span={10}>
          <Label center asterisk>
            {t(message.fieldType)}
          </Label>
          <Input placeholder={t(message.email)} />
        </Col>
        <Col span={2}>
          <Label center>{t(message.required)}</Label>
          <Switch size="default" />
        </Col>
      </Row>

      <Button addField>
        <PlusSquareFilled size="large" />
        {t(message.addAccount)}
      </Button>
    </>
  );
}
