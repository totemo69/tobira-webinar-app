/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import globalMessage from '@/messages/global';
import message from '@/messages/sidebar';
import { WEBINAR_ROUTE } from '@/utils/constants';
import Sidebar from '@/components/Elements/Sidebar';
import Div from '@/components/Elements/Div';
import Image from '@/components/Elements/Image';
import Menu from '@/components/Elements/Menu';
import Submenu from '@/components/Elements/Submenu';

import { ShopFilled, PlusSquareFilled, ProfileFilled } from '@ant-design/icons';

export default function Sider() {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <Sidebar width={250} breakpoint="lg" collapsedWidth="0">
      <Div paddingSmall noMargin widthFull yellowBg>
        <Image src="/images/logo.svg" alt="Tobira Logo" logoSmall />
      </Div>
      <Menu
        defaultSelectedKeys={['/webinars/create-webinar']}
        defaultOpenKeys={['webinars']}
        mode="inline"
        marginTop
        selectedKeys={[router.pathname]}
      >
        <Submenu
          key="webinars"
          icon={<ShopFilled style={{ fontSize: '18px' }} />}
          title={t(message.webinars)}
        >
          <Menu.Item
            icon={<PlusSquareFilled style={{ fontSize: '18px' }} />}
            key="/webinars/create-webinar"
          >
            <Link href={WEBINAR_ROUTE.CREATE_WEBINAR}>
              <a href="#">{t(message.createWebinar)}</a>
            </Link>
          </Menu.Item>
          <Menu.Item
            icon={<ProfileFilled style={{ fontSize: '18px' }} />}
            key="/webinars/list-webinar"
          >
            <Link href={WEBINAR_ROUTE.LIST_WEBINAR}>
              <a href="#">{t(globalMessage.listWebinar)}</a>
            </Link>
          </Menu.Item>
        </Submenu>
      </Menu>
    </Sidebar>
  );
}
