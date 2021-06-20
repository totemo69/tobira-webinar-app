import { Row, Col } from 'antd';
import { useTranslation } from 'next-i18next';

import { WEBINAR_ROUTE } from '@/utils/constants';
import globalMessage from '@/messages/global';
import localMessage from '@/messages/webinar';

import CustomIcon from '@/components/Elements/Icon';
import Modal from '@/components/Elements/Modal';
import Button from '@/components/Elements/Button';
import Image from '@/components/Elements/Image';
import Title from '@/components/Elements/Title';
import Input from '@/components/Elements/Input';
import Labels from '@/components/Elements/Labels';
import Div from '@/components/Elements/Div';

const SuccessModal = ({ isOpenModal, closeModal, webinarUrl }) => {
  const { t } = useTranslation();
  let hostname = '';
  if (typeof window !== 'undefined') {
    hostname = window.location.origin;
  }
  return (
    <Modal
      isOpen={isOpenModal}
      onRequestClose={closeModal}
      ariaHideApp={false}
      overlayClassName="Overlay"
      marginTop
      noPadding
    >
      <Row>
        <Col span={24}>
          <Div widthFull noMargin>
            <Div modal noMargin center>
              <Image
                src="/images/success-icon.svg"
                alt="success icon"
                modalIcon
              />
              <Title modalTitle>{t(globalMessage.success)}!</Title>
            </Div>
            <Div flexColCenter widthFull paddingTop>
              <Div center widthFull>
                <Labels center bold>
                  {t(localMessage.congrats)}
                </Labels>
                <Labels center>{t(localMessage.createdSuccess)}</Labels>
              </Div>
            </Div>
            <Div flexColCenter widthFull paddingTop>
              <Div center>
                <Labels center>{t(localMessage.copyMessage)}</Labels>
                <Input
                  readOnly
                  addonAfter={<CustomIcon src="/images/copy.svg" />}
                  defaultValue={`${hostname}${WEBINAR_ROUTE.WEBINAR_DETAIL}/${webinarUrl}`}
                />
              </Div>
            </Div>
            <Div flexColCenter widthFull>
              <Div center>
                <Button onClick={closeModal} type="primary">
                  {t(globalMessage.ok)}
                </Button>
              </Div>
            </Div>
          </Div>
        </Col>
      </Row>
    </Modal>
  );
};

export default SuccessModal;
