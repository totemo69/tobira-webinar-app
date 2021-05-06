import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import globalMessage from '@/messages/global';

import Layout from '@/components/Elements/Layout';
import Sidebar from '@/components/Elements/Sidebar';
import Header from '@/components/Elements/Header';
import Content from '@/components/Elements/Content';
import Footer from '@/components/Elements/Footer';
import Div from '@/components/Elements/Div';
import Image from '@/components/Elements/Image';
import { Row, Col } from 'antd';

export default function DashboardSample() {
  const { t } = useTranslation();
  
  return (
    <>
      <Layout bgGray>
        <Sidebar>
            <Div paddingSmall noMargin widthFull yellowBg>
                <Image src={"Images/logo.svg"} alt="Tobira Logo" logoSmall />
            </Div>
        </Sidebar>
        <Layout>
            <Header noMargin>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
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