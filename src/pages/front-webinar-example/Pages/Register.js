import Input from '@/components/Elements/Input';
import Div from '@/components/Elements/Div';
import Label from '@/components/Elements/Labels';
import Radio from '@/components/Elements/Radio';
import Select from '@/components/Elements/Select';
import Option from '@/components/Elements/Option';
import Textarea from '@/components/Elements/TextArea';
import { Paragraph } from '@/components/Elements/SampleParagraph';


export default function FronRegistration(){
  return(
    <>
      
      <Div style={{margin: '0 auto', textAlign: 'center', color: '#4E4E4E',font: "normal normal medium 20px/30px Poppins",marginTop: '58px'}}>
        <Paragraph content={'Register'}></Paragraph>
      </Div>
      <Div style={{alignSelf: 'center', width: '628px', margin: '0 auto', marginTop: '74px'}}>
        <Label asterisk>Email Address</Label>
        <Input placeholder="Email Address"></Input>

        <Label asterisk>First Name</Label>
        <Input placeholder="First Name"></Input>

        <Label asterisk>Last Name</Label>
        <Input placeholder="Last Name"></Input>

        <Label asterisk>Gender</Label>
        <Radio.Group>
          <Radio value={1}>Male</Radio>
          <Radio value={2}>Female</Radio>
          <Radio value={3}>Rather not tell</Radio>
        </Radio.Group>

        <Label asterisk>Industry Type</Label>
        <Select placeholder="Industry Type"> 
          <Option value="A">Option A</Option>
          <Option value="B">Option B</Option>
        </Select>

        <Label asterisk>Question & Comments</Label>
        <Textarea autoSize={{ minRows: 8, maxRows: 8 }} showCount maxLength={5000} placeholder="Question & Comments"></Textarea>
            
      </Div>
    </>
  );
}