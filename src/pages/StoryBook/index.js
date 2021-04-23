import Layout from '@/components/Layouts/SampleLayout';
import Content from '@/components/Templates/SampleContent';
import Header from '@/components/Modules/SampleHeader';
import Footer from '@/components/Modules/SampleFooter';
import Sidebar from '@/components/Modules/SampleSidebar';
import Button from '@/components/Elements/SampleButton';

export default function StoryBook() {
  return (
    <>
      <Layout>
        <Sidebar>This is the sidebar</Sidebar>
        <Layout>
          <Header>This is the header</Header>
          <Content>
            <Button type="primary round autoWidth" htmlType="submit">
              Test Button
            </Button>
          </Content>
          <Footer>This is the footer</Footer>
        </Layout>
      </Layout>
    </>
  )
}