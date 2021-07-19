import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { Row, Col } from 'antd';
import { CaretDownFilled, EyeTwoTone } from '@ant-design/icons';
import globalMessage from '@/messages/global';
import message from '@/messages/webinar';
import Div from '@/components/Elements/Div';
import Button from '@/components/Elements/Button';
import Option from '@/components/Elements/Option';
import Select from '@/components/Elements/Select';
import Search from '@/components/Elements/Search';
import Table from '@/components/Elements/Table';

export default function ParticipantList({ registerParticipantsList }) {
  const { t } = useTranslation();

  const StyledDiv = styled.div`
    padding-top: 30px;
  `;

  const columns = [
    {
      title: t(message.number),
      dataIndex: 'id',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(globalMessage.fullName),
      dataIndex: 'fullName',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(message.emailAddress),
      dataIndex: 'emailAddress',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(globalMessage.contactNo),
      dataIndex: 'status',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(message.paymentStatus),
      dataIndex: 'status',
      sorter: {
        multiple: 3,
      },
    },
    {
      title: t(message.action),
      dataIndex: 'action',
      align: 'center',
      render: () => (
        <Button noMargin noBoxShadow type="link">
          <EyeTwoTone />
          {t(message.viewDetails)}
        </Button>
      ),
    },
  ];
  return (
    <StyledDiv>
      <Row>
        <Col span={12}>
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
        </Col>
        <Col span={12}>
          <Div noMargin flexCenterEnd style={{ width: '100%' }}>
            {t(globalMessage.search)}{' '}
            <Search
              placeholder={t(globalMessage.searchPlaceholder)}
              allowClear
              marginLeft
              widthMedium
            />
          </Div>
        </Col>
      </Row>
      <Table
        dataSource={registerParticipantsList}
        columns={columns}
        style={{ paddingTop: 20 }}
      />
    </StyledDiv>
  );
}

ParticipantList.propTypes = {
  registerParticipantsList: PropTypes.any,
};
