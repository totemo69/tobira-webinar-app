import Layout from '@/components/Layouts/SampleLayout';
import Content from '@/components/Templates/SampleContent';
import Select from '@/components/Templates/SampleSelectContent'
import Header from '@/components/Modules/SampleHeader';
import Footer from '@/components/Modules/SampleFooter';
import Sidebar from '@/components/Modules/SampleSidebar';
import Button from '@/components/Elements/SampleButton';
import Card from '@/components/Elements/SampleCard';
import Input from '@/components/Elements/SampleInput';
import TextArea from '@/components/Elements/SampleTextArea'
import Checkbox from '@/components/Elements/SampleCheckBox'
import Option from '@/components/Elements/SampleDropDown'
import Radio from '@/components/Elements/SampleRadioButton'


export default function StoryBook() {
  return (
    <>
      
      <Layout>
       
        <Header>This is the header</Header>
        <Layout>
       
        <Sidebar>Side Bar</Sidebar>
          <Content>
              <Card>
                <br />
                <Input placeholder="Sample Input" disabled={true}></Input>
                <Input placeholder="Sample Input"></Input>
                <br />
                <label>Text Area</label>
                <br />
                <TextArea placeholder="Placeholder"></TextArea>
                <br />
                <label>Drop Down</label>
                <br />
                <Select placeholder="Placeholder">
                  <Option value="jack">1st item</Option>
                  <Option value="lucy">2nd item</Option>
                  <Option value="tom">3rd item</Option>
                </Select>

                <br />
                <label>Radio Button</label>
                <br />
                <Radio.Group>
                  <Radio value={1}>A</Radio>
                  <Radio value={2}>B</Radio>
                </Radio.Group>

                <br />
                <label>Checkbox</label>
                <br />
                <Checkbox defaultChecked={false}>Unchecked</Checkbox>
                <Checkbox defaultChecked>Checked</Checkbox>

                <br />
                <Button disabled Isdisabled  htmlType="submit">
                Test Button
              </Button>
              <Button primary htmlType="submit">
                Test Button
              </Button>
              </Card>

            
          </Content>
          
          
        </Layout>
        <Footer>This is the footer</Footer>
      </Layout>
    </>
  )
}