import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import message from '@/messages/story-book';
import globalMessage from '@/messages/global';
import Layout from '@/components/Elements/Layout';
import Header from '@/components/Elements/Header';
import Footer from '@/components/Elements/Footer';
import Content from '@/components/Elements/Content';
import Button from '@/components/Elements/Button';
import Input from '@/components/Elements/Input';
import Textarea from '@/components/Elements/TextArea';
import Checkbox from '@/components/Elements/CheckBox';
import Radio from '@/components/Elements/Radio';
import Select from '@/components/Elements/Select';
import Option from '@/components/Elements/Option';
import DatePicker from '@/components/Elements/SampleDatePicker';
import Modal from '@/components/Elements/Modal';
import Tab from '@/components/Elements/SampleTab';
import { useState } from 'react';


export default function StoryBook() {
  const { t } = useTranslation();
  console.log(globalMessage.header);
  console.log(message.title);

  const [ isModalVisible , setIsmModalVisible] = useState(false);

  const ShowModal = () => {
    setIsmModalVisible(true);
  };
  return (
    <>
      
      <Layout>
        <Tab />
        <Header>{t(globalMessage.header)}</Header>
        <Layout>
          <Content heightScreen>
            <Button type="primary" htmlType="submit">
              {t(message.title)}
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
            <div>
              <DatePicker></DatePicker>
            </div>
            <div>
              <Button onClick={ShowModal} type="primary">Show modal</Button>
              <Modal visible={isModalVisible} footer={null} >this is a modal</Modal>
            </div>
          </Content>
        </Layout>
        <Footer>This is the footer</Footer>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['translation']),
  },
});