import Layout from '@/components/Elements/Layout';
import Header from '@/components/Modules/Header';
import Content from '@/components/Elements/Content';
import Footer from '@/components/Modules/Footer';

export default function RegisterLayout({ children }) {
  return (
    <Layout bgPrimary>
      <Header withLogo />
      <Content bgNone narrowScreen>
        {children}
      </Content>
      <Footer />
    </Layout>
  );
}
