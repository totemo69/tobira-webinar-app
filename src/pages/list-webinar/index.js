import Layout from '@/components/Layouts/Home';
import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/Title';
import Card from '@/components/Elements/Card';
import Table from '@/components/Elements/Table';
import Select from '@/components/Elements/Select';
import Option from '@/components/Elements/Option';
import Search from '@/components/Elements/Search';

import { CaretDownFilled } from '@ant-design/icons';

export default function ListOfWebinar() {
  const columns = [
    {
      title: '',
      dataIndex: '',
    },
    {
      title: 'Title',
      dataIndex: 'title',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: 'Schedule',
      dataIndex: 'schedule',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: 'No. of Attendees',
      dataIndex: 'Attendees',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
  ];
  
  return (
    <>
      <Layout>
        <Div marginBottomLarge>
          <Title secondary>List of Webinar</Title>
        </Div>
        <Div widthFull>
          <Card>
            <Div marginY betweenCenter widthFull>
              <Div noMargin>
                Show
                <Select showPages defaultValue="10" suffixIcon={<CaretDownFilled />} >
                  <Option value="10">10</Option>
                  <Option value="20">20</Option>
                  <Option value="30">30</Option>
                  <Option value="40">40</Option>
                  <Option value="50">50</Option>
                </Select>
                entries
              </Div>
              <Div noMargin flexCenterEnd>
                Search <Search placeholder="Search webinar title" allowClear marginLeft widthMedium />
              </Div>
            </Div>
            <Table columns={columns} />
          </Card>
        </Div>
      </Layout>
    </>
  );
}