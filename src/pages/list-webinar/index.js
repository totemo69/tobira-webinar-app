import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import globalMessage from '@/messages/global';
import message from '@/messages/listOfWebinar';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
// import { createStructuredSelector } from 'reselect';
import { getAttendee } from '@/states/attendees/action';

import Layout from '@/components/Layouts/Home';
import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/Title';
import Card from '@/components/Elements/Card';
import Table from '@/components/Elements/Table';
import Select from '@/components/Elements/Select';
import Option from '@/components/Elements/Option';
import Search from '@/components/Elements/Search';

import { CaretDownFilled } from '@ant-design/icons';

export function ListOfWebinar({listWebinar}) {
  const { t } = useTranslation();
  console.log(listWebinar());
  
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
                <Select showPages paddingLeft defaultValue="10" suffixIcon={<CaretDownFilled />} >
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


ListOfWebinar.proptTypes = {
  listWebinar: PropTypes.func
};

const mapPropsToDispatch = (dispatch) => {
  return{
    listWebinar: () => dispatch(getAttendee()),
  };
};

const withConnect = connect(
  null,
  mapPropsToDispatch,
);

export default compose(
  withConnect,
)(ListOfWebinar);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['translation']),
  },
});