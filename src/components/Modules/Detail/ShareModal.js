/* eslint-disable jsx-a11y/anchor-is-valid */
import { Typography } from 'antd';
import Input from '@/components/Elements/Input';
import Modal from '@/components/Elements/v2/Modal';
import CustomIcon from '@/components/Elements/Icon';
import { WEBINAR_ROUTE } from '@/utils/constants';
import classnames from './index.module.css';

const { Text } = Typography;

const ShareModal = ({ visible, onClose, slug }) => {
  let hostname = '';
  if (typeof window !== 'undefined') {
    hostname = window.location.origin;
  }

  const onCopy = () => {
    navigator.clipboard.writeText(
      `${hostname}${WEBINAR_ROUTE.WEBINAR_DETAIL}/${slug}`,
    );
  };

  return (
    <Modal
      title="Share"
      visible={visible}
      centered
      footer={null}
      width={440}
      onCancel={onClose}
    >
      <div className={classnames.shareIconWrapper}>
        <a href="#">
          <CustomIcon src="/images/facebook.svg" alt="Facebook Share" />
        </a>
        <a href="#">
          <CustomIcon src="/images/twitter.svg" alt="Twitter Share" />
        </a>
        <a href="#">
          <CustomIcon src="/images/line.svg" alt="Line Share" />
        </a>
        <a href="#">
          <CustomIcon src="/images/google-plus.svg" alt="Gmail Share" />
        </a>
      </div>
      <div className={classnames.shareInputWrapper}>
        <Text className={classnames.infoLabel}>Share event link</Text>
        <Input
          readOnly
          addonAfter={<CustomIcon onClick={onCopy} src="/images/copy.svg" />}
          defaultValue={`${hostname}${WEBINAR_ROUTE.WEBINAR_DETAIL}/${slug}`}
        />
      </div>
    </Modal>
  );
};
export default ShareModal;
