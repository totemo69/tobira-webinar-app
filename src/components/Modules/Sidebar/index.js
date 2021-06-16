import { useTranslation } from 'next-i18next';
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

  return (
    <>
      <Sidebar width={250}>
        <Div paddingSmall noMargin widthFull yellowBg>
          <Image src={"/images/logo.svg"} alt="Tobira Logo" logoSmall />
        </Div>
        <Menu
          defaultSelectedKeys={['webinars']}
          defaultOpenKeys={['listWebinar']}
          mode="inline"
          marginTop
        >
          <Submenu key="webinars" icon={<ShopFilled style={{ fontSize: "18px"}} />} title={t(message.webinars)}>
            <Menu.Item icon={<PlusSquareFilled style={{ fontSize: "18px"}} />} key="createWebinar">
              <Link href={WEBINAR_ROUTE.CREATE_WEBINAR}>
                <a>{t(message.createWebinar)}</a>
              </Link>
            </Menu.Item>
            <Menu.Item icon={<ProfileFilled style={{ fontSize: "18px"}} />} key="listWebinar">
              <Link href={WEBINAR_ROUTE.LIST_WEBINAR}>
                <a>{t(globalMessage.listWebinar)}</a>
              </Link>
            </Menu.Item>
          </Submenu>
        </Menu>
      </Sidebar>
    </>
  );
}