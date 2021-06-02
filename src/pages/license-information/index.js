import Layout from '@/components/Layouts/Home';
import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/Title';
import Card from '@/components/Elements/Card';
import Button from '@/components/Elements/Button';
import Table from '@/components/Elements/Table';
import { useState } from 'react';


const column = [
  {
    title: "No.",
    dataIndex: 'No',
    sorter: {
      multiple: 3,
    },
  },
  {
    title: "Period",
    dataIndex: 'Period',
    sorter: {
      multiple: 3,
    },
  },
  {
    title: "License Plan",
    dataIndex: 'LicensePlan',
    sorter: {
      multiple: 3,
    },
  },
  {
    title: "Price",
    dataIndex: 'Price',
    sorter: {
      multiple: 3,
    },
  },
  {
    title: "Used",
    dataIndex: 'Used',
    sorter: {
      multiple: 3,
    },
  },
  {
    title: "Remaining",
    dataIndex: 'Remaining',
    sorter: {
      multiple: 3,
    },
  },
  {
    title: "Status",
    dataIndex: 'Status',
    sorter: {
      multiple: 3,
    },
  },
  {
    title: "Action",
    dataIndex: 'Action',
    render: () => <a style={{color: "blue"}}>Viewed</a>
  },
];

const dataSource = [
  {
    No: 1,
    Period: "02/05/2021 - 03/04/2021",
    LicensePlan: "Professional",
    Price: "¥ 100",
    Used: "7",
    Remaining: "2",
    Status: "Active",
    Action: ""
  },
  {
    No: 2,
    Period: "02/05/2021 - 03/04/2021",
    LicensePlan: "Professional",
    Price: "¥ 100",
    Used: "7",
    Remaining: "2",
    Status: "Active",
    Action: ""
  },
  {
    No: 3,
    Period: "02/05/2021 - 03/04/2021",
    LicensePlan: "Professional",
    Price: "¥ 100",
    Used: "7",
    Remaining: "2",
    Status: "Active",
    Action: ""
  },
  {
    No: 4,
    Period: "02/05/2021 - 03/04/2021",
    LicensePlan: "Professional",
    Price: "¥ 100",
    Used: "7",
    Remaining: "2",
    Status: "Active",
    Action: ""
  },
  {
    No: 5,
    Period: "02/05/2021 - 03/04/2021",
    LicensePlan: "Professional",
    Price: "¥ 100",
    Used: "7",
    Remaining: "2",
    Status: "Active",
    Action: ""
  },
  {
    No: 6,
    Period: "02/05/2021 - 03/04/2021",
    LicensePlan: "Professional",
    Price: "¥ 100",
    Used: "7",
    Remaining: "2",
    Status: "Active",
    Action: ""
  },
  {
    No: 7,
    Period: "02/05/2021 - 03/04/2021",
    LicensePlan: "Professional",
    Price: "¥ 100",
    Used: "7",
    Remaining: "2",
    Status: "Active",
    Action: ""
  },
  {
    No: 8,
    Period: "02/05/2021 - 03/04/2021",
    LicensePlan: "Professional",
    Price: "¥ 100",
    Used: "7",
    Remaining: "2",
    Status: "Active",
    Action: ""
  },
  {
    No: 9,
    Period: "02/05/2021 - 03/04/2021",
    LicensePlan: "Professional",
    Price: "¥ 100",
    Used: "7",
    Remaining: "2",
    Status: "Active",
    Action: ""
  },
  {
    No: 10,
    Period: "02/05/2021 - 03/04/2021",
    LicensePlan: "Professional",
    Price: "¥ 100",
    Used: "7",
    Remaining: "2",
    Status: "Active",
    Action: ""
  },
  {
    No: 11,
    Period: "02/05/2021 - 03/04/2021",
    LicensePlan: "Professional",
    Price: "¥ 100",
    Used: "7",
    Remaining: "2",
    Status: "Active",
    Action: ""
  },
];

export default function LicenseInformation(){

  const [paginationLength] = useState(5);
  return(
    <>
      <Layout>
        <Div marginBottomLarge flexTop>
          <Title secondary marginRight>LICENSE INFORMATION</Title>
        </Div>

        <Card  style={{padding: "20px"}}>
          <Button smallBtn type="primary">Purchase Add Ons</Button>

          <Div style={{width: "100%", marginTop: "20px"}}>
            <Table pagination={{pageSize: paginationLength}} columns={column} dataSource={dataSource}/>
          </Div>
        </Card>

        
      </Layout>
    </>
  );
}