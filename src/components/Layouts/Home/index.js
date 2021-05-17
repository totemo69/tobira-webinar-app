import Layout from '@/components/Elements/Layout';
<<<<<<< HEAD
import SideBar from '@/components/Modules/Sidebar';
=======
import Sidebar from '@/components/Modules/Sidebar';
>>>>>>> 1c72e242d1ff569cfb86f2bc75f6176020db919e
import Header from '@/components/Modules/Header';
import Div from '@/components/Elements/Div';
import Content from '@/components/Elements/Content';
import Footer from '@/components/Modules/Footer';


export default function Home({ children }) {
  return (
    <>
      <Layout bgGray>
        <Sidebar />
        <Layout>
          <Header />
          <Div widthXLong paddingSmall marginBottomLarge>
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