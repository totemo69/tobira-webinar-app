import Layout from '@/components/Elements/Layout';
import Header from '@/components/Modules/Header';
import Content from '@/components/Elements/Content';
import Footer from '@/components/Modules/Footer';

export default function WebinarDetail({ children }) {
  return (
    <Layout bgPrimary>
      <Header withLogo withMenu={false} />
      <Content bgNone narrowPadding>
        {children}
      </Content>
      <Footer />
    </Layout>
  );
}
