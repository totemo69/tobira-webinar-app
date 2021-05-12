import {useTranslation} from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import message from '@/messages/Listofwebinar'
import Card from '@/components/Elements/Card';
import Search from '@/components/Elements/Search';
import Select from '@/components/Elements/Select';
import Table from '@/components/Elements/Table'
import Tittle from '@/components/Elements/Title'
import { Form } from 'antd';



export default function ListOfWebinar(){
  const { t } = useTranslation();
  const column = [
    {
      title: t(message.Tittle),
      dataIndex: 'tittle',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(message.Schedule),
      dataIndex: 'Sched',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(message.Attendees),
      dataIndex: 'Atendies',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(message.Status),
      dataIndex: 'Status',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(message.Action),
      dataIndex: 'Action',
      
    },
  ]
  
  return(
    <>
      <Tittle level={4} style={{color: '#0E71EB'}}>{t(message.Listofwebinar)}</Tittle>
      <Card>
        <Form style={{marginTop: '20px'}}>
          <Form.Item style={{float: 'right'}} label={t(message.Search)}>
          <Search
            placeholder={t(message.SearchPlaceholder)}
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

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['translation']),
  },
});