import Card from '@/components/Elements/Card';
import Search from '@/components/Elements/Search';
import Select from '@/components/Elements/Select';
import Table from '@/components/Elements/Table'
import Tittle from '@/components/Elements/Title'
import { Form } from 'antd';

const column = [
  {
    title: 'Tittle',
    dataIndex: 'tittle',
    sorter: {
      multiple: 3,
    },
  },
  {
    title: 'Schedule',
    dataIndex: 'Sched',
    sorter: {
      multiple: 3,
    },
  },
  {
    title: 'No. of Attendees',
    dataIndex: 'Atendies',
    sorter: {
      multiple: 3,
    },
  },
  {
    title: 'Status',
    dataIndex: 'Status',
    sorter: {
      multiple: 3,
    },
  },
  {
    title: 'Action',
    dataIndex: 'Action',
    
  },
]

export default function ListOfWebinar(){
  return(
    <>
      <Tittle level={4} style={{color: '#0E71EB'}}>LIST OF WEBINAR</Tittle>
      <Card>
        <Form style={{marginTop: '20px'}}>
          <Form.Item style={{float: 'right'}} label="Search">
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
          />
          </Form.Item>
          <Form.Item label="Show">
            <Select style={{width: '100px', borderRadius: '8px'}} defaultValue="10">

            </Select>
          </Form.Item>
        </Form>
        <Table columns={column}>

        </Table>
      </Card>
    </>
  )
}