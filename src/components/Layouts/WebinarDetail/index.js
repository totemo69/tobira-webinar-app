import Layout from '@/components/Elements/Layout';
import BlankHeader from '@/components/Modules/Header/blank';
import Content from '@/components/Elements/Content';
import BlankFooter from '@/components/Modules/Footer/blank';

export default function WebinarDetail({ children }) {
  return (
    <Layout bgPrimary>
      <BlankHeader />
      <Content bgNone narrowPadding>
        {children}
      </Content>
      <BlankFooter />
    </Layout>
  );
}
