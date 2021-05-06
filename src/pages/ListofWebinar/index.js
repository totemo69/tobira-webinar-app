import Sidebar from '@/components/Elements/Sidebar';
import Layout from '@/components/Elements/Layout';
import Content from '@/components/Elements/Content';
import Header from '@/components/Elements/Header';
import Div from '@/components/Elements/Div';
import Logo from '@/components/Elements/Logo';
import Dropdown from '@/components/Elements/Dropdown'
import Footer from '@/components/Elements/Footer'

export default function ListOfWebinar(){
  return(
    <>
      <Layout>
        <Sidebar>
            <Logo sideBarLogo src={'Images/logo.svg'}/>
        </Sidebar>
       <Layout>
        <Header>
          <Dropdown />
        </Header>
        <Content> 
          Content
        </Content>
        <Footer>This is a Footer</Footer>
       </Layout>
          
      </Layout>
      
    </>
  )
}