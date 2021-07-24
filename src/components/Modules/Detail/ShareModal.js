/* eslint-disable jsx-a11y/anchor-is-valid */
import { Typography, message } from 'antd';
import { useTranslation } from 'next-i18next';
import globalMessage from '@/messages/global';
import Input from '@/components/Elements/Input';
import Modal from '@/components/Elements/v2/Modal';
import CustomIcon from '@/components/Elements/Icon';
import { WEBINAR_ROUTE } from '@/utils/constants';
import classnames from './index.module.css';

const { Text } = Typography;

const ShareModal = ({ visible, onClose, slug }) => {
  const { t } = useTranslation();
  let hostname = '';
  if (typeof window !== 'undefined') {
    hostname = window.location.origin;
  }

  const webinarUrl = `${hostname}${WEBINAR_ROUTE.WEBINAR_DETAIL}/${slug}`;

  const onCopy = () => {
    navigator.clipboard.writeText(webinarUrl);
    message.success(t(globalMessage.linkCopied));
  };

  return (
    <Modal
      title={t(globalMessage.shareTitle)}
      visible={visible}
      centered
      footer={null}
      width={440}
      onCancel={onClose}
    >
      <div className={classnames.shareIconWrapper}>
        <a
          target="_blank"
          href={`https://www.facebook.com/sharer/sharer.php?u=${webinarUrl}`}
        >
          <CustomIcon src="/images/facebook.svg" alt="Facebook Share" />
        </a>
        <a
          target="_blank"
          href={`https://twitter.com/intent/tweet?text=${webinarUrl}`}
        >
          <CustomIcon src="/images/twitter.svg" alt="Twitter Share" />
        </a>
        <a
          target="_blank"
          href={`https://social-plugins.line.me/lineit/share?url=${webinarUrl}`}
        >
          <CustomIcon src="/images/line.svg" alt="Line Share" />
        </a>
        {/* <a href="#">
          <CustomIcon src="/images/google-plus.svg" alt="Gmail Share" />
        </a> */}
      </div>
      <div className={classnames.shareInputWrapper}>
        <Text className={classnames.infoLabel}>
          {t(globalMessage.shareWebinarLink)}
        </Text>
        <Input
          readOnly
          addonAfter={<CustomIcon onClick={onCopy} src="/images/copy.svg" />}
          defaultValue={webinarUrl}
        />
      </div>
    </Modal>
  );
};
export default ShareModal;
