import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/Elements/Layout';
import Sidebar from '@/components/Elements/Sidebar';
import Header from '@/components/Elements/Header';
import Content from '@/components/Elements/Content';
import Footer from '@/components/Elements/Footer';
import Div from '@/components/Elements/Div';
import Image from '@/components/Elements/Image';
import Menu from '@/components/Elements/Menu';
import Submenu from '@/components/Elements/Submenu';
import Dropdown from '@/components/Elements/Dropdown';
import Link from '@/components/Elements/Link';

import { ShopFilled, PlusSquareFilled, ProfileFilled } from '@ant-design/icons';

export default function DashboardSample() {
  return (
    <>
      <Layout bgGray>
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
              <Menu.Item icon={<PlusSquareFilled style={{ fontSize: "18px"}} />} key="createWebinar">Create Webinar</Menu.Item>
              <Menu.Item icon={<ProfileFilled style={{ fontSize: "18px"}} />} key="listWebinar">List Webinar</Menu.Item>
            </Submenu>
          </Menu>
        </Sidebar>
        <Layout>
          <Header noMargin>
            <Div widthFull noMargin right>
              <Image src={"Images/avatar.svg"} alt="Tobira Logo" userImg />
              <Dropdown username="tobirauser" items />
            </Div>
          </Header>
          <Div widthXLong paddingSmall marginBottom2x>
            <Content>
              {/* <Profle /> */}
              Test
            </Content>
          </Div>
          <Footer>
            Copyright &#169; 2021 Tobira Webinar Video Communications, Inc. All rights reserved. <Link href="#" name="Terms of Service" /> and <Link href="#" name="Privacy Policy" />
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['translation']),
  },
});