import Layout from '@/components/Elements/Layout';
import Content from '@/components/Elements/Content';
import Footer from '@/components/Modules/Footer';

export default function TermsAndPolicy({ children }) {
  return (
    <>
      <Layout bgGray>
        <Content TermsAndPolicy>{children}</Content>
        <Footer />
      </Layout>
    </>
  );
}
