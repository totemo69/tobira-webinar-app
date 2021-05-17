// import { useTranslation } from 'next-i18next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import globalMessage from '@/messages/global';

import Link from 'next/link';

<<<<<<< HEAD
import SideBar from '@/components/Elements/Sidebar';
import Div from '@/components/Elements/Div';
import Image from '@/components/Elements/Image';
import Menu from '@/components/Elements/Menu';
import SubMenu from '@/components/Elements/Submenu';
=======
import Sidebar from '@/components/Elements/Sidebar';
import Div from '@/components/Elements/Div';
import Image from '@/components/Elements/Image';
import Menu from '@/components/Elements/Menu';
import Submenu from '@/components/Elements/Submenu';
>>>>>>> 1c72e242d1ff569cfb86f2bc75f6176020db919e

import { ShopFilled, PlusSquareFilled, ProfileFilled } from '@ant-design/icons';

export default function Sider() {
  // const { t } = useTranslation();

  return (
    <>
      <Sidebar width={250}>
        <Div paddingSmall noMargin widthFull yellowBg>
          <Image src={"Images/logo.svg"} alt="Tobira Logo" logoSmall />
        </Div>
        <Menu
          defaultSelectedKeys={['webinars']}
          defaultOpenKeys={['listWebinar']}
          mode="inline"
          marginTop
        >
          <Submenu key="webinars" icon={<ShopFilled style={{ fontSize: "18px"}} />} title="Webinars">
            <Menu.Item icon={<PlusSquareFilled style={{ fontSize: "18px"}} />} key="createWebinar">
              <Link href="#">
                <a>Create Webinar</a>
              </Link>
            </Menu.Item>
            <Menu.Item icon={<ProfileFilled style={{ fontSize: "18px"}} />} key="listWebinar">
              <Link href="/dashboard-example">
                <a>List of Webinar</a>
              </Link>
            </Menu.Item>
          </Submenu>
        </Menu>
      </Sidebar>
    </>
  );
}

// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...await serverSideTranslations(locale, ['translation']),
//   },
// });