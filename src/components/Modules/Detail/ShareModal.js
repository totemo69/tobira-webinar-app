import { Typography } from 'antd';
import Input from '@/components/Elements/Input';
import Modal from '@/components/Elements/v2/Modal';
import CustomIcon from '@/components/Elements/Icon';
import classnames from './index.module.css';
const {Text} = Typography;

const ShareModal  = ({visible, onClose}) =>(
  <Modal title="Share" visible={visible} centered footer={null} width={440} onCancel={onClose}>
    <div className={classnames.shareIconWrapper}>
      <a href="#"><CustomIcon src="/Images/facebook.svg" alt="Facebook Share"/></a>
      <a href="#"><CustomIcon src="/Images/twitter.svg" alt="Twitter Share"/></a>
      <a href="#"><CustomIcon src="/Images/line.svg" alt="Line Share"/></a>
      <a href="#"><CustomIcon src="/Images/google-plus.svg" alt="Gmail Share"/></a>
    </div>
    <div className={classnames.shareInputWrapper}>
      <Text className={classnames.infoLabel}>Share event link</Text>
      <Input addonAfter={<CustomIcon src="/Images/copy.svg" />} defaultValue="https://www.tobirawebinar.jp/sharer/sharer.php?u= palettes/trending" />
    </div>
  </Modal>    
);

export default ShareModal;