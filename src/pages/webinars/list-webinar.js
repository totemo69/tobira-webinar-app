import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import {
  CaretDownFilled,
  EyeTwoTone,
  FileImageOutlined,
} from '@ant-design/icons';
// import history from '@/utils/history';
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
import Modal from '@/components/Elements/Modal';
import Button from '@/components/Elements/Button';
import Image from '@/components/Elements/Image';

export function ListOfWebinar({
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
      if (zoomAccountList.length === 0) {
        openModal();
      } else {
        closeModal();
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [zoomAccountList]);

  const columns = [
    {
      title: '',
      dataIndex: 'image',
      render: () => <FileImageOutlined />,
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
      dataIndex: 'schedules[0]',
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
                  defaultValue="10"
                  suffixIcon={<CaretDownFilled />}
                >
                  <Option value="10">10</Option>
                  <Option value="20">20</Option>
                  <Option value="30">30</Option>
                  <Option value="40">40</Option>
                  <Option value="50">50</Option>
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
            <Table dataSource={webinarLists} columns={columns} />
          </Card>
        </Div>
        <Modal
          isOpen={isOpenModal}
          onRequestClose={closeModal}
          ariaHideApp={false}
          overlayClassName="Overlay"
          marginTop
          noPadding
        >
          <Row>
            <Col span={24}>
              <Div widthFull noMargin>
                <Div modal noMargin center>
                  <Image
                    src="/images/warning.svg"
                    alt="success icon"
                    modalIcon
                  />
                  <Title modalTitle>{t(globalMessage.warning)}!</Title>
                </Div>
                <Div flexColCenter widthFull heightFull>
                  <Div center marginYLarge>
                    {t(message.setupMessage)}
                  </Div>
                </Div>
                <Div widthFull marginTopLarge heightFull>
                  <Row>
                    <Col span={12}>
                      <Button onClick={closeModal} defaultButton>
                        {t(message.buttonLater)}
                      </Button>
                    </Col>
                    <Col span={12}>
                      <Button onClick={connectToZoom} type="primary">
                        {t(message.buttonSetup)}
                      </Button>
                    </Col>
                  </Row>
                </Div>
              </Div>
            </Col>
          </Row>
        </Modal>
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
