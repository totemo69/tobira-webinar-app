import { useTranslation } from 'next-i18next';
import NextImage from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { useEffect, useState } from 'react';
import { Row, Col, Typography, message } from 'antd';
import { CaretDownFilled, EyeTwoTone } from '@ant-design/icons';
import { FormatDate, DateIsBefore } from '@/utils/dateUtils';
import { getZoomAccount, createZoomUser } from '@/states/accounts/actions';
import { getWebinarList } from '@/states/webinar/actions';
import { makeSelectLoading, makeSelectError } from '@/states/global/selector';
import { clearErrors } from '@/states/global/actions';
import { makeSelectAccountList } from '@/states/accounts/selector';
import { makeSelectWebinars } from '@/states/webinar/selector';
import { LOADING_PREFIX, WEBINAR_ROUTE } from '@/utils/constants';
import globalMessage from '@/messages/global';
import localMessage from '@/messages/webinar';
import validationMessage from '@/messages/validation';
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
  isAccountLoading,
  isListLoading,
  getZoomAccounts,
  zoomAccountList,
  getWebinarLists,
  webinarLists,
  setupZoomAccount,
  errorMessage,
  clearErrorMessage,
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
    setupZoomAccount(
      () => {
        route.push(`${WEBINAR_ROUTE.ZOOM_ACCOUNT}/complete`);
      },
      () => {
        const { message: msg } = errorMessage.error;
        message.error(t(validationMessage[msg]));
        clearErrorMessage();
      },
    );
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

  const onSearch = (value) => {
    getWebinarLists({ managementTitle: value });
  };

  const columns = [
    {
      key: 'image',
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
      title: t(localMessage.webinarTitleAdmin),
      key: 'managementTitle',
      dataIndex: 'managementTitle',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(localMessage.schedule),
      key: 'schedules',
      dataIndex: ['schedules', '0', 'dateTime'],
      render: (date) => FormatDate(date, 'YYYY-MM-DD HH:mm'),
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(localMessage.attendees),
      key: 'attendees',
      dataIndex: 'attendees',
      render: (text, record) =>
        record.attendees ? record.attendees.length : 0,
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(localMessage.status),
      key: 'status',
      render: (text, record) => {
        let returnText = (
          <Text type="warning">{t(localMessage.hiddenStatusLabel)}</Text>
        );
        if (record.schedules) {
          if (!DateIsBefore(record.schedules[0].dateTime)) {
            returnText = (
              <Text type="danger">{t(localMessage.doneStatusLabel)}</Text>
            );
          } else if (record.status === 0) {
            returnText = (
              <Text type="success">{t(localMessage.publishStatusLabel)}</Text>
            );
          }
        }
        return returnText;
      },
    },
    {
      title: '',
      key: 'action',
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
          {t(localMessage.viewDetails)}
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
              <Row
                align="middle"
                justify="space-between"
                style={{ width: '100%' }}
              >
                <Col xs={24} lg={12}>
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
                </Col>
                <Col xs={24} lg={12}>
                  <Div noMargin flexCenterEnd style={{ width: '100%' }}>
                    {/* {t(globalMessage.search)}{' '} */}
                    <Search
                      onSearch={onSearch}
                      placeholder={t(globalMessage.searchPlaceholder)}
                      allowClear
                      marginLeft
                      widthMedium
                    />
                  </Div>
                </Col>
              </Row>
            </Div>
            <Table
              loading={isListLoading}
              pagination={{ pageSize: displayCount }}
              dataSource={webinarLists}
              columns={columns}
              scroll={{ x: 990 }}
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
                    {t(localMessage.setupMessage)}
                  </Div>
                </Div>
                <Row align="middle" justify="center" style={{ padding: 40 }}>
                  <Col align="middle" justify="center" span={12}>
                    <Button onClick={closeModal} defaultButton>
                      {t(localMessage.buttonLater)}
                    </Button>
                  </Col>
                  <Col align="middle" justify="center" span={12}>
                    <Button
                      default
                      type="primary"
                      onClick={connectToZoom}
                      loading={isAccountLoading}
                      style={{ width: 140 }}
                    >
                      {t(localMessage.buttonSetup)}
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
  setupZoomAccount: PropTypes.func,
  errorMessage: PropTypes.any,
  clearErrorMessage: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isAccountLoading: makeSelectLoading(LOADING_PREFIX.ACCOUNT),
  isListLoading: makeSelectLoading(LOADING_PREFIX.WEBINAR_LIST),
  zoomAccountList: makeSelectAccountList(),
  webinarLists: makeSelectWebinars(),
  errorMessage: makeSelectError(),
});

const mapPropsToDispatch = (dispatch) => ({
  getZoomAccounts: () => dispatch(getZoomAccount()),
  getWebinarLists: (payload) => dispatch(getWebinarList(payload)),
  setupZoomAccount: (success, error) =>
    dispatch(createZoomUser(success, error)),
  clearErrorMessage: () => dispatch(clearErrors()),
});

const withConnect = connect(mapStateToProps, mapPropsToDispatch);

export default compose(withConnect)(ListOfWebinar);

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['translation'])),
  },
});
