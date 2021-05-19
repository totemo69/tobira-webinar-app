import {useTranslation} from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import message from '@/messages/listOfWebinar';
import Card from '@/components/Elements/Card';
import Search from '@/components/Elements/Search';
import Select from '@/components/Elements/Select';
import Table from '@/components/Elements/Table';
import Tittle from '@/components/Elements/Title';
import { Form } from 'antd';



export default function ListOfWebinar(){
  const { t } = useTranslation();
  const column = [
    {
      title: t(message.title),
      dataIndex: 'title',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(message.schedule),
      dataIndex: 'Sched',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(message.attendees),
      dataIndex: 'Atendies',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(message.status),
      dataIndex: 'Status',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(message.action),
      dataIndex: 'Action',
      
    },
  ];
  
  return(
    <>
      <Tittle level={4} style={{color: '#0E71EB'}}>{t(message.listOfWebinar)}</Tittle>
      <Card>
        <Form style={{marginTop: '20px'}}>
          <Form.Item style={{float: 'right'}} label={t(message.search)}>
            <Search
              placeholder={t(message.searchPlaceholder)}
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
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['translation']),
  },
});