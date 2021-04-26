import Layout from '@/components/Elements/Layout';
import Header from '@/components/Elements/Header';
import Footer from '@/components/Elements/Footer';
import Sidebar from '@/components/Elements/Sidebar';
import Content from '@/components/Elements/Content';
import Button from '@/components/Elements/Button';
import Input from '@/components/Elements/Input';
import Textarea from '@/components/Elements/Textarea';
import Checkbox from '@/components/Elements/Checkbox';
import Radio from '@/components/Elements/Radio';
import Select from '@/components/Elements/Select';
import Option from '@/components/Elements/Option';

export default function StoryBook() {
  return (
    <>
      <Layout>
        <Header>This is the Header.</Header>
        <Layout>
          <Sidebar>This is the Sidebar.</Sidebar>
          <Content>
            <Button type="primary" htmlType="submit">
              Default
            </Button>
            <Button type="disabled" disabled htmlType="submit">
              Disabled
            </Button>
            <Input placeholder="Placeholder"></Input>
            <Input placeholder="tobirauser" disabled></Input>
            <Input placeholder="tobira^&*" error></Input>
            <Textarea placeholder="Placeholder"></Textarea>
            <Textarea placeholder="Placeholder" disabled></Textarea>
            <Textarea placeholder="Placeholder" error></Textarea>
            <Checkbox>Checkbox A</Checkbox>
            <Checkbox checked>Checkbox B</Checkbox>
            <Checkbox disabled>Checkbox Disabled</Checkbox>
            <div style={{ marginTop: '1rem', }}>
              <Radio.Group>
                <Radio value={1}>Option A</Radio>
                <Radio value={2}>Option B</Radio>
              </Radio.Group>
              <Radio.Group>
                <Radio disabled value={3}>Option Disabled 1</Radio>
                <Radio disabled checked>Option Disabled 2</Radio>
              </Radio.Group>
            </div>
            <div style={{marginTop: '1rem',}}>
              <Select defaultValue="initial">
                <Option value="initial" disabled hidden>Select option</Option>
                <Option value="A">Option A</Option>
                <Option value="B">Option B</Option>
              </Select>
            </div>
            <div>
              <Select defaultValue="initial" disabled>
                <Option value="initial" disabled hidden>Select option</Option>
                <Option value="A">Option A</Option>
                <Option value="B">Option B</Option>
              </Select>
              <Select defaultValue="initial" error>
                <Option value="initial" disabled hidden>Select option</Option>
                <Option value="A">Option A</Option>
                <Option value="B">Option B</Option>
              </Select>
            </div>
          </Content>
        </Layout>
        <Footer>This is the Footer.</Footer>
      </Layout>
    </>
  )
}