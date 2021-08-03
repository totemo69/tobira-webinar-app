import PropTypes from 'prop-types';
import { useCallback } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { Row, Col, Typography } from 'antd';
import { CaretDownFilled, EyeTwoTone } from '@ant-design/icons';
import globalMessage from '@/messages/global';
import message from '@/messages/webinar';
import Div from '@/components/Elements/Div';
import Button from '@/components/Elements/Button';
import Option from '@/components/Elements/Option';
import Select from '@/components/Elements/Select';
import Search from '@/components/Elements/Search';
import Table from '@/components/Elements/Table';

const { Text } = Typography;

export default function ParticipantList({
  attendeesList,
  onClickDetails,
  displayCount = 10,
  setDisplayCount,
}) {
  const { t } = useTranslation();

  const onClick = useCallback((e, id) => {
    // Prevent trigger on Card onclick
    e.stopPropagation();
    onClickDetails(id);
  }, []);

  const StyledDiv = styled.div`
    padding-top: 30px;
  `;

  const columns = [
    {
      title: t(message.number),
      dataIndex: 'index',
      render: (text, record, index) => `${index + 1}`,
      sorter: {
        multiple: 3,
      },
    },
    // {
    //   title: t(globalMessage.fullName),
    //   dataIndex: 'fullName',
    //   sorter: {
    //     multiple: 3,
    //   },
    // },
    {
      title: t(message.emailAddress),
      dataIndex: ['formValues', '0', 'fieldValue'],
      sorter: {
        multiple: 3,
      },
    },
    // {
    //   title: t(globalMessage.contactNo),
    //   dataIndex: 'status',
    //   sorter: {
    //     multiple: 3,
    //   },
    // },
    {
      title: t(message.paymentStatus),
      dataIndex: 'status',
      render: (status) => {
        let returnText = '';
        if (status === '1') {
          returnText = (
            <Text type="success">{t(message.completedPaymentLabel)}</Text>
          );
        } else if (status === '0') {
          returnText = (
            <Text type="warning">{t(message.pendingPaymentLabel)}</Text>
          );
        } else {
          returnText = (
            <Text type="danger">{t(message.failedPaymentLabel)}</Text>
          );
        }
        return returnText;
      },
    },
    {
      title: '',
      dataIndex: 'id',
      align: 'center',
      render: (id) => (
        <Button
          onClick={(e) => onClick(e, id)}
          noMargin
          noBoxShadow
          type="link"
        >
          <EyeTwoTone />
          {t(message.viewDetails)}
        </Button>
      ),
    },
  ];
  return (
    <StyledDiv>
      <Row>
        <Col xs={24} lg={12}>
          <Div noMargin>
            {t(globalMessage.show)}
            <Select
              showPages
              paddingLeft
              defaultValue={displayCount}
              onChange={setDisplayCount}
              suffixIcon={<CaretDownFilled />}
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
            {t(globalMessage.search)}{' '}
            <Search
              placeholder={t(globalMessage.searchEmailPlaceholder)}
              allowClear
              marginLeft
              widthMedium
            />
          </Div>
        </Col>
      </Row>
      <Table
        dataSource={attendeesList}
        columns={columns}
        pagination={{ pageSize: displayCount }}
        style={{ paddingTop: 20 }}
        scroll={{ x: 600 }}
      />
    </StyledDiv>
  );
}

ParticipantList.propTypes = {
  attendeesList: PropTypes.any,
  onClickDetails: PropTypes.func,
  displayCount: PropTypes.any,
  setDisplayCount: PropTypes.func,
};
