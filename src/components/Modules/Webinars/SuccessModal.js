import { Row, Col, message } from 'antd';
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

const SuccessModal = ({
  isOpenModal,
  closeModal,
  webinarUrl,
  isUpdate = false,
}) => {
  const { t } = useTranslation();
  let hostname = '';
  if (typeof window !== 'undefined') {
    hostname = window.location.origin;
  }
  const url = `${hostname}${WEBINAR_ROUTE.WEBINAR_DETAIL}/${webinarUrl}`;

  const onCopy = () => {
    navigator.clipboard.writeText(url);
    message.success(t(globalMessage.linkCopied));
  };
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
              <Title modalTitle>
                {isUpdate
                  ? t(localMessage.createWebinarUpdate)
                  : t(localMessage.createWebinarSuccess)}
              </Title>
            </Div>
            <Div flexColCenter widthFull paddingTop>
              <Div center>
                <Labels fullWidth center textCenter bold>
                  {!isUpdate ? t(localMessage.congrats) : ''}
                </Labels>
              </Div>
              <Div center>
                <Labels fullWidth center textCenter>
                  {isUpdate
                    ? t(localMessage.createdSuccess)
                    : t(localMessage.createdSuccess)}
                </Labels>
              </Div>
            </Div>
            <Div flexColCenter widthFull paddingTop>
              <Div center>
                <Labels center style={{ width: '100%' }}>
                  {t(localMessage.copyMessage)}
                </Labels>
                <Input
                  readOnly
                  addonAfter={
                    <CustomIcon onClick={onCopy} src="/images/copy.svg" />
                  }
                  defaultValue={url}
                />
              </Div>
            </Div>
            <Div flexColCenter widthFull>
              <Div center>
                <Button onClick={closeModal} type="primary">
                  {t(globalMessage.close)}
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
