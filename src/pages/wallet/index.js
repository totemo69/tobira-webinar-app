import { useState } from 'react';
import {
  EllipsisOutlined,
  PlusSquareFilled,
  CaretDownFilled,
  BankOutlined,
} from '@ant-design/icons';
import Modal from 'react-modal';

import Layout from '@/components/Layouts/Home';
import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/Title';
import Card from '@/components/Elements/Card';
import Span from '@/components/Elements/Span';
import Button from '@/components/Elements/Button';
import { Row, Col } from 'antd';
import Image from '@/components/Elements/Image';
import Table from '@/components/Elements/Table';
import Select from '@/components/Elements/Select';
import Option from '@/components/Elements/Option';
import { StyledParagraph } from '@/components/Elements/SampleParagraph';
import Label from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import Checkbox from '@/components/Elements/Checkbox';
import { AddBankAccount, StyledDiv } from '@/components/Modules/Modals';

const dataSource = [
  {
    dateTime: 'April 05,2021 10:20',
    Transaction: 'Payment for Webinar',
    amount: '+100JPY',
    status: 'Pending',
    action: '',
  },
  {
    dateTime: 'April 05,2021 10:20',
    Transaction: 'Payment for Webinar',
    amount: '+100JPY',
    status: 'Complete',
    action: '',
  },
];

const dataTable = [
  {
    title: 'Date and Time',
    dataIndex: 'dateTime',
    sorter: {
      multiple: 3,
    },
  },
  {
    title: 'Transaction',
    dataIndex: 'Transaction',
    sorter: {
      multiple: 3,
    },
    render: (text) => <p style={{ color: 'blue' }}>{text}</p>,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    sorter: {
      multiple: 3,
    },
  },
  {
    title: 'Status',
    dataIndex: 'status',
    sorter: {
      multiple: 3,
    },
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },
];

export default function Wallet() {
  const [visible, setVisible] = useState(false);
  const [visibleAddBank, setVisbleAddBank] = useState(false);
  const [isInputVisible, setIsInputVisible] = useState(false);

  const viewVisible = () => {
    setVisible(true);
  };
  const viewVisibleAddBank = () => {
    setVisbleAddBank(true);
  };

  return (
    <>
      <Layout>
        <AddBankAccount
          close={() => setVisbleAddBank(false)}
          isVisible={visibleAddBank}
        />
        <Div marginBottomLarge flexTop>
          <Title secondary marginRight>
            WALLET
          </Title>
        </Div>

        <Card style={{ padding: '20px' }}>
          <Div walletBalance>
            <Div>
              <Span>Current Wallet Balance</Span>
              <Title level={1}>¥ 90,000</Title>
              <Row gutter={20}>
                <Col>+ 110,000 JPY</Col>

                <Col>- 20,000 JPY</Col>
              </Row>
            </Div>
            <Div style={{ margin: 'auto 0' }}>
              <Button
                style={{ height: '50px', width: '50%' }}
                type="primary"
                onClick={() => viewVisible()}
              >
                <Image transferFunds src="Images/transfer-funds.svg" /> Transfer
                Funds
              </Button>
            </Div>
          </Div>
          <Div marginY>
            <StyledParagraph colorBlue>Bank List</StyledParagraph>
          </Div>

          <Div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Div bankList>
              <Image
                moreButton
                style={{ float: 'right', width: '10px' }}
                src="Images/more.svg"
              />
              <Title level={5}>Metrobank</Title>
              <StyledParagraph>Yamazaki Kento</StyledParagraph>
              <EllipsisOutlined /> 456
            </Div>
            <Div bankList>
              <Image
                moreButton
                style={{ float: 'right', width: '10px' }}
                src="Images/more.svg"
              />
              <Title level={5}>Japan Post Bank</Title>
              <StyledParagraph>Yamazaki Kento</StyledParagraph>
              <EllipsisOutlined /> 123
            </Div>
            <Div bankList>
              <Image
                moreButton
                style={{ float: 'right', width: '10px' }}
                src="Images/more.svg"
              />
              <Title level={5}>Mizuho Financial Group</Title>
              <StyledParagraph>Yamazaki Kento</StyledParagraph>
              <EllipsisOutlined /> 333
            </Div>
          </Div>

          <Div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '66.5%',
              marginTop: '10px',
            }}
          >
            <Div bankList>
              <Image
                moreButton
                style={{ float: 'right', width: '10px' }}
                src="Images/more.svg"
              />
              <Title level={5}>Sumitomo Mitsui Financial Group</Title>
              <StyledParagraph>Yamazaki Kento</StyledParagraph>
              <EllipsisOutlined /> 333
            </Div>
            <Div bankList>
              <Div addBankList>
                <Button
                  onClick={() => viewVisibleAddBank()}
                  style={{ width: '50px', textAlign: 'center' }}
                  type="primary"
                >
                  <PlusSquareFilled style={{ fontSize: '20px' }} />
                </Button>
                <StyledParagraph colorBlue>Add bank account</StyledParagraph>
              </Div>
            </Div>
          </Div>

          <Div marginY>
            <StyledParagraph colorBlue>All Transaction History</StyledParagraph>
          </Div>
          <Div marginY widthFull>
            <Div noMargin>
              Show
              <Select
                showPages
                defaultValue="10"
                suffixIcon={<CaretDownFilled />}
              >
                <Option value="10">10</Option>
                <Option value="20">20</Option>
                <Option value="30">30</Option>
                <Option value="40">40</Option>
                <Option value="50">50</Option>
              </Select>
            </Div>
          </Div>
          <Table columns={dataTable} dataSource={dataSource} />
        </Card>
      </Layout>

      {/* Transfer fund request modal */}
      <Modal
        isOpen={visible}
        style={{
          content: {
            height: '500px',
            width: '600px',
            margin: '0 auto',
            padding: '0',
          },
        }}
      >
        <StyledDiv header>Transfer Fund Request</StyledDiv>
        <StyledDiv style={{ padding: '20px' }}>
          <Label asterisk>
            Enter Amount to Transfer{' '}
            <span style={{ float: 'right' }}>
              (Minimum required amount : 100 JPY)
            </span>
          </Label>
          <Input type="number" placeholder="0" prefix="￥" suffix="JPY" />
        </StyledDiv>
        <StyledDiv style={{ padding: '20px' }}>
          <Label>Select Payment Gateway</Label>
        </StyledDiv>
        <Row>
          <Col span={12} style={{ paddingLeft: 40 }}>
            <Button
              style={{ height: 55, width: 190, borderColor: 'transparent' }}
              onClick={() => setIsInputVisible(false)}
            >
              <img src="Images/paypal.svg" alt="paypal" />
            </Button>
          </Col>
          <Col span={12}>
            <Button
              chooseStandard
              style={{ height: 55, borderColor: 'transparent', marginTop: 0 }}
              icon={<BankOutlined style={{ fontSize: '1.5rem' }} />}
              onClick={() => setIsInputVisible(true)}
            >
              Bank
            </Button>
          </Col>
        </Row>
        {isInputVisible ? (
          <Row style={{ paddingLeft: 50 }}>
            <Col span={20}>
              <Label marginTop asterisk>
                Bank Name
              </Label>
              <Input placeholder="Bank Name" />
              <Label marginTop asterisk>
                Account Name
              </Label>
              <Input placeholder="Account Name" />
              <Label marginTop asterisk>
                Account Number
              </Label>
              <Input placeholder="Account Number" />
              <Row style={{ marginTop: 20 }}>
                <Checkbox />
                <Label>Save this account for future use</Label>
              </Row>
            </Col>
          </Row>
        ) : null}

        <StyledDiv
          style={{ display: 'flex', margin: '0 auto', width: '300px' }}
        >
          <Button BackButton onClick={() => setVisible(false)}>
            Cancel
          </Button>{' '}
          <Button NextButton type="primary">
            Proceed
          </Button>
        </StyledDiv>
      </Modal>
    </>
  );
}
