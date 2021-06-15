import Div from '@/components/Elements/Div';
import Labels from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import Select from '@/components/Elements/Select';
import Option from '@/components/Elements/Option';
import Button from '@/components/Elements/Button';
import Image from '@/components/Elements/Image';
import Textarea from '@/components/Elements/Textarea';
import Radio from '@/components/Elements/Radio';
import DatePicker from '@/components/Elements/DatePicker';
import TimePicker from '@/components/Elements/TimePicker';

import { CaretDownFilled, PlusSquareFilled } from '@ant-design/icons';

export default function CreateWebinarPage1() {
  // const { t } = useTranslation();
  return(
    <>
      <Div marginTop>
        <Labels textBlue bold>Management Secion</Labels>
      </Div>
      <Div marginY widthFull>
        <Labels asterisk>Webinar Title</Labels>
        <Input type="text" placeholder="Enter webinar title" />
      </Div>
      <Div widthFull marginY paddingBottomXL betweenBottom doubleDividerBlue>
        <Div>
          <Labels asterisk>Zoom Account</Labels>
          <Select defaultValue="0" suffixIcon={<CaretDownFilled />} >
            <Option value="0" disabled>Select an account</Option>
            <Option value="1">User 1</Option>
            <Option value="2">User 2</Option>
            <Option value="3">User 3</Option>
            <Option value="4">User 4</Option>
          </Select>
        </Div>
        <Button addBtn><PlusSquareFilled /> <a href="/account">Add Account</a></Button>
      </Div>
      <Div marginTop marginBottomLarge>
        <Labels textBlue bold>Basic Details</Labels>
      </Div>
      <Div marginY widthFull paddingBottomXL betweenBottom doubleDividerBlue flexTop>
        <Div widthFull>
          <Labels asterisk>Webinar Image</Labels>
          <Div imageContainer flexColCenter>
            <p><Image src={"Images/image.svg"} alt="Webinar image container" iconLg /></p>
            <Labels textBlue textCenter bold textLg>Upload a photo</Labels>
          </Div>
        </Div>
        <Div widthFull paddingX>
          <Div widthFull marginBottomLarge>
            <Labels asterisk>Webinar Title</Labels>
            <Input type="text" placeholder="Enter webinar title" />
          </Div>
          <Div widthFull marginY>
            <Labels asterisk>Description</Labels>
            <Textarea rows={7} showCount maxLength={100} />
          </Div>
        </Div>
      </Div>
      <Div marginTop>
        <Labels textBlue bold>Schedule</Labels>
      </Div>
      <Div marginTop widthFull>
        <Labels asterisk>Webinar Plan</Labels>
        <Radio.Group buttonStyle="solid">
          <Radio value={1}>One-Time</Radio>
          <Radio value={2}>Recurring</Radio>
        </Radio.Group>
      </Div>
      <Div marginY flexTop widthFull>
        <Div marginRight>
          <Labels asterisk>Date</Labels>
          <DatePicker format={'MM/DD/YYYY'} />
        </Div>
        <Div marginLeft>
          <Labels asterisk>Start Time</Labels>
          <TimePicker use12Hours format="h:mm a" />
        </Div>
      </Div>
      <Div marginY flexTop widthFull>
        <Div marginRight>
          <Labels asterisk>Timezone</Labels>
          <Select defaultValue="0" suffixIcon={<CaretDownFilled />} >
            <Option value="0" disabled>Select a timezone</Option>
            <Option value="1">Timezone 1</Option>
            <Option value="2">Timezone 2</Option>
            <Option value="3">Timezone 3</Option>
            <Option value="4">Timezone 4</Option>
          </Select>
        </Div>
        <Div marginLeft>
          <Labels asterisk>Duration</Labels>
          <TimePicker.RangePicker use12Hours format="h:mm a" />
        </Div>
      </Div>
    </>
  );
}