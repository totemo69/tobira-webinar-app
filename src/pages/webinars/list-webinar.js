import { useTranslation } from 'next-i18next';
import NextImage from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { useEffect, useState } from 'react';
import { Row, Col, Typography } from 'antd';
import { CaretDownFilled, EyeTwoTone } from '@ant-design/icons';
// import history from '@/utils/history';
import { FormatDate, DateIsBefore, DateIsSame } from '@/utils/dateUtils';
import { getZoomAccount } from '@/states/accounts/actions';
import { getWebinarList } from '@/states/webinar/actions';
import { makeSelectLoading } from '@/states/global/selector';
import { makeSelectAccountList } from '@/states/accounts/selector';
import { makeSelectWebinars } from '@/states/webinar/selector';
import { authRequest } from '@/lib/zoom';
import { LOADING_PREFIX, WEBINAR_ROUTE } from '@/utils/constants';
import globalMessage from '@/messages/global';
import message from '@/messages/webinar';

import Layout from '@/components/Layouts/Home';
import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/Title';
import Card from '@/components/Elements/Card';
import Table from '@/components/Elements/Table';
import Select from '@/components/Elements/Select';
import Option from '@/components/Elements/Option';
import Search from '@/components/Elements/Search';
import { StyledModal } from '@/components/Elements/Modal/SimpleModal';
import Button from '@/components/Elements/Button';
import Image from '@/components/Elements/Image';

const { Text } = Typography;

export function ListOfWebinar({
  isListLoading,
  getZoomAccounts,
  zoomAccountList,
  getWebinarLists,
  webinarLists,
}) {
  const { t } = useTranslation();
  const route = useRouter();
  useEffect(() => {
    getZoomAccounts();
    getWebinarLists();
  }, []);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [displayCount, setDisplayCount] = useState(10);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const connectToZoom = () => {
    window.location = authRequest();
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const viewDetails = (id) => {
    route.push(`${WEBINAR_ROUTE.DETAILS_WEBINAR}/?id=${id}`);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isListLoading) {
        if (zoomAccountList.length === 0) {
          openModal();
        } else {
          closeModal();
        }
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [isListLoading, zoomAccountList]);

  const columns = [
    {
      title: '',
      dataIndex: 'image',
      render: (img) => (
        <NextImage
          src={img || '/images/fallback.png'}
          alt="Webinar Images"
          width={150}
          height={150}
          loading="lazy"
        />
      ),
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
      dataIndex: ['schedules', '0', 'dateTime'],
      render: (date) => FormatDate(date, 'YYYY-MM-DD HH:mm'),
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(message.attendees),
      dataIndex: 'attendees',
      render: (text, record) =>
        record.attendees ? record.attendees.length : 0,
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(message.status),
      render: (text, record) => {
        let returnText = null;
        if (!DateIsBefore(record.schedules[0].dateTime)) {
          returnText = <Text type="success">{t(message.doneStatusLabel)}</Text>;
        } else if (DateIsSame(record.schedules[0].dateTime)) {
          returnText = (
            <Text type="danger">{t(message.notYetStatusLabel)}</Text>
          );
        } else {
          returnText = (
            <Text type="warning">{t(message.upcomingStatusLabel)}</Text>
          );
        }
        return returnText;
      },
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(message.action),
      dataIndex: 'id',
      align: 'center',
      render: (id) => (
        <Button
          noMargin
          noBoxShadow
          type="link"
          onClick={() => viewDetails(id)}
        >
          <EyeTwoTone />
          {t(message.viewDetails)}
        </Button>
      ),
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
                <Select
                  showPages
                  paddingLeft
                  defaultValue={displayCount}
                  suffixIcon={<CaretDownFilled />}
                  onChange={setDisplayCount}
                >
                  <Option value={10}>10</Option>
                  <Option value={20}>20</Option>
                  <Option value={30}>30</Option>
                  <Option value={40}>40</Option>
                  <Option value={50}>50</Option>
                </Select>
                {t(globalMessage.entries)}
              </Div>
              <Div noMargin flexCenterEnd>
                {t(globalMessage.search)}{' '}
                <Search
                  placeholder={t(globalMessage.searchPlaceholder)}
                  allowClear
                  marginLeft
                  widthMedium
                />
              </Div>
            </Div>
            <Table
              loading={isListLoading}
              pagination={{ pageSize: displayCount }}
              dataSource={webinarLists}
              columns={columns}
            />
          </Card>
        </Div>
        <StyledModal
          visible={isOpenModal}
          onRequestClose={closeModal}
          ariaHideApp={false}
          marginTop
          noPadding
          width={450}
          footer={null}
          closable={false}
        >
          <Row>
            <Col span={24}>
              <Div widthFull noMargin style={{ zIndex: '9999' }}>
                <Div modal noMargin center>
                  <Image
                    src="/images/warning.svg"
                    alt="success icon"
                    modalIcon
                  />
                  <Title modalTitle>{t(globalMessage.warning)}</Title>
                </Div>
                <Div flexColCenter widthFull heightFull>
                  <Div center marginYLarge>
                    {t(message.setupMessage)}
                  </Div>
                </Div>
                <Row align="middle" justify="center" style={{ padding: 40 }}>
                  <Col align="middle" justify="center" span={12}>
                    <Button onClick={closeModal} defaultButton>
                      {t(message.buttonLater)}
                    </Button>
                  </Col>
                  <Col align="middle" justify="center" span={12}>
                    <Button
                      default
                      type="primary"
                      onClick={connectToZoom}
                      style={{ width: 140 }}
                    >
                      {t(message.buttonSetup)}
                    </Button>
                  </Col>
                </Row>
              </Div>
            </Col>
          </Row>
        </StyledModal>
      </Layout>
    </>
  );
}

ListOfWebinar.proptTypes = {
  zoomAccountList: PropTypes.any,
  getZoomAccounts: PropTypes.func,
  getWebinarLists: PropTypes.func,
  isAccountLoading: PropTypes.bool,
  isListLoading: PropTypes.bool,
  webinarLists: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  isAccountLoading: makeSelectLoading(LOADING_PREFIX.ACCOUNT),
  isListLoading: makeSelectLoading(LOADING_PREFIX.WEBINAR_LIST),
  zoomAccountList: makeSelectAccountList(),
  webinarLists: makeSelectWebinars(),
});

const mapPropsToDispatch = (dispatch) => ({
  getZoomAccounts: () => dispatch(getZoomAccount()),
  getWebinarLists: () => dispatch(getWebinarList()),
});

const withConnect = connect(mapStateToProps, mapPropsToDispatch);

export default compose(withConnect)(ListOfWebinar);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['translation'])),
  },
});
