import Layout from '@/components/Elements/Layout';
import SideBar from '@/components/Modules/Sidebar';
import Header from '@/components/Modules/Header';
import Div from '@/components/Elements/Div';
import Content from '@/components/Elements/Content';
import Footer from '@/components/Modules/Footer';


export default function Home({ children }) {
  return (
    <>
      <Layout bgGray>
        <SideBar />
        <Layout>
          <Header />
          <Div widthXLong paddingSmall marginBottom2x>
            <Content>
              {children}
            </Content>
          </Div>
          <Footer />
        </Layout>
      </Layout>
    </>
  );
}