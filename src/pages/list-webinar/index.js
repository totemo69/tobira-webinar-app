import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import globalMessage from '@/messages/global';
import message from '@/messages/listOfWebinar';

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
  const { t } = useTranslation();
  
  const columns = [
    {
      title: '',
      dataIndex: '',
    },
    {
      title: t(message.title),
      dataIndex: 'title',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(message.schedule),
      dataIndex: 'schedule',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(message.attendees),
      dataIndex: 'attendees',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(message.status),
      dataIndex: 'status',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(message.action),
      dataIndex: 'action',
    },
  ];
  
  return (
    <>
      <Layout>
        <Div marginBottomLarge>
          <Title secondary>{t(globalMessage.listWebinar)}</Title>
        </Div>
        <Div widthFull>
          <Card>
            <Div marginY betweenCenter widthFull>
              <Div noMargin>
                {t(globalMessage.show)}
                <Select showPages defaultValue="10" suffixIcon={<CaretDownFilled />} >
                  <Option value="10">10</Option>
                  <Option value="20">20</Option>
                  <Option value="30">30</Option>
                  <Option value="40">40</Option>
                  <Option value="50">50</Option>
                </Select>
                {t(globalMessage.entries)}
              </Div>
              <Div noMargin flexCenterEnd>
                {t(globalMessage.search)} <Search placeholder={t(globalMessage.searchPlaceholder)} allowClear marginLeft widthMedium />
              </Div>
            </Div>
            <Table columns={columns} />
          </Card>
        </Div>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['translation']),
  },
});