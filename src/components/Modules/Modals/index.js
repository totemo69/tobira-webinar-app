import style, { css } from 'styled-components';
import Modal from 'react-modal';
import { Row, Col } from 'antd';
import Button from '@/components/Elements/Button';
import { CloseOutlined, FileOutlined } from '@ant-design/icons';
import Search from '@/components/Elements/Search';
import Label from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';

export const StyledDiv = style.div`

  ${(props) =>
    props.header &&
    css`
      width: 100%;
      height: 61px;
      background: #abc9ee 0% 0% no-repeat padding-box;
      text-align: center;
      padding: 21px;
      font: normal normal 600 14px/21px Poppins;
    `}

  ${(props) =>
    props.textCenter &&
    css`
      text-align: center;
    `}

  ${(props) =>
    props.marginTop &&
    css`
      margin-top: 25px;
    `}

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 10px;
    `}

  ${(props) =>
    props.fontNormalBlue &&
    css`
      font: normal normal 600 12px/18px Poppins;
      letter-spacing: 0.24px;
      color: #4678b5;
    `}
  ${(props) =>
    props.fontBoldBlue &&
    css`
      font: normal normal 600 14px/21px Poppins;
      color: #4678b5;
      letter-spacing: 0.28px;
    `}

  ${(props) =>
    props.divider &&
    css`
      border: 1px solid #abc9ee;
      width: 513px;
      margin: 0 auto;
      margin-top: 21.5px;
    `}

  ${(props) =>
    props.centerPosition &&
    css`
      margin: 0 auto;
    `}

  ${(props) =>
    props.totalStyle &&
    css`
      font: normal normal 600 20px/30px Poppins;
      color: #4678b5;
    `}

  ${(props) =>
    props.payPal &&
    css`
      background: #f4f8fe;
    `}
`;

const buttonStyleProceed = {
  width: '150px',
  marginLeft: '20px',
};

const buttonStyleCancel = {
  width: '150px',
  color: '#0E71EB',
};

const closeModalButton = {
  background: 'none',
  color: '#B0B0B0',
  boxShadow: 'none',
  width: '50px',
  border: 'none',
  textAlign: 'left',
};

const circleButton = {
  borderRadius: '100px',
  width: '40px',
  textAlign: 'center',
};

const ShareModalStyle = style(Modal).withConfig({
  shouldForwardProp: (prop) => ![].includes(prop),
})`

&.ReactModal__Content {
  width: 440px;
  height: 308px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 8px;
  opacity: 1;
  margin: 0 auto;
  margin-top: 211px;
}

`;

const ProfessionalConfirm = ({ isVisible, close }) => (
  <>
    <Modal
      isOpen={isVisible}
      onRequestClose={close}
      style={{
        content: {
          width: '600px',
          height: '550px',
          margin: '0 auto',
          padding: '0',
        },
      }}
    >
      <StyledDiv header>Order Summary</StyledDiv>

      <StyledDiv textCenter marginTop>
        Plan type
      </StyledDiv>

      <StyledDiv textCenter fontBoldBlue>
        Professional
      </StyledDiv>

      <StyledDiv divider />

      <StyledDiv centerPosition>
        <Row>
          <Col style={{ margin: '0 auto', marginLeft: '104px' }}>
            <StyledDiv marginTop marginBottom>
              Total amount:
            </StyledDiv>
            <StyledDiv marginBottom>Billing type:</StyledDiv>
            <StyledDiv marginBottom>Paymen start date:</StyledDiv>
            <StyledDiv marginBottom>Next payment date:</StyledDiv>
          </Col>

          <Col span={10} style={{ margin: '0 auto' }}>
            <StyledDiv marginTop totalStyle>
              150 JPY
            </StyledDiv>

            <StyledDiv fontNormalBlue marginBottom>
              Monthly
            </StyledDiv>

            <StyledDiv fontNormalBlue marginBottom>
              04/26/2021
            </StyledDiv>

            <StyledDiv fontNormalBlue marginBottom>
              05/26/2021
            </StyledDiv>
          </Col>
        </Row>
      </StyledDiv>

      <StyledDiv divider />
      <Row>
        <Col style={{ margin: '0 auto', marginLeft: '104px' }}>
          <StyledDiv marginTop marginBottom>
            Payment method
          </StyledDiv>
        </Col>
      </Row>
      <Row>
        <Col style={{ margin: '0 auto', marginLeft: '104px' }}>
          <StyledDiv payPal>
            <img src="Images/paypal.svg" alt="paypal" />
          </StyledDiv>
        </Col>
      </Row>

      <StyledDiv
        style={{ margin: '0 auto', textAlign: 'center', marginTop: '61px' }}
      >
        <Button style={buttonStyleCancel}>Cancel</Button>
        <Button style={buttonStyleProceed} type="primary">
          Proceed to Payment
        </Button>
      </StyledDiv>
    </Modal>
  </>
);

const AddOnsConfirm = ({ isVisible, close }) => (
  <>
    <Modal
      isOpen={isVisible}
      onRequestClose={close}
      style={{
        content: {
          width: '600px',
          height: '550px',
          margin: '0 auto',
          padding: '0',
        },
      }}
    >
      <StyledDiv header>Order Summary</StyledDiv>

      <StyledDiv textCenter marginTop>
        Plan type
      </StyledDiv>

      <StyledDiv textCenter fontBoldBlue>
        Add-ons
      </StyledDiv>

      <StyledDiv divider />

      <StyledDiv centerPosition>
        <Row>
          <Col style={{ margin: '0 auto', marginLeft: '104px' }}>
            <StyledDiv marginTop marginBottom>
              Current plan amount:
            </StyledDiv>
            <StyledDiv marginBottom>Add-on amount:</StyledDiv>
            <StyledDiv marginBottom>Total amount:</StyledDiv>
            <StyledDiv marginBottom marginTop>
              Billing type:
            </StyledDiv>
            <StyledDiv marginBottom>Payment start date:</StyledDiv>
            <StyledDiv marginBottom>Next payment date:</StyledDiv>
          </Col>

          <Col span={10} style={{ margin: '0 auto' }}>
            <StyledDiv marginTop fontNormalBlue marginBottom>
              150 JPY (Professional)
            </StyledDiv>

            <StyledDiv fontNormalBlue marginBottom>
              50 JPY
            </StyledDiv>

            <StyledDiv totalStyle marginBottom>
              200 JPY
            </StyledDiv>

            <StyledDiv fontNormalBlue marginBottom marginTop>
              Monthly
            </StyledDiv>
            <StyledDiv fontNormalBlue marginBottom>
              05/01/2021
            </StyledDiv>
            <StyledDiv fontNormalBlue marginBottom>
              06/01/2021
            </StyledDiv>
          </Col>
        </Row>
      </StyledDiv>

      <StyledDiv divider />
      <Row>
        <Col style={{ margin: '0 auto', marginLeft: '104px' }}>
          <StyledDiv marginTop marginBottom>
            Payment method
          </StyledDiv>
        </Col>
      </Row>
      <Row>
        <Col style={{ margin: '0 auto', marginLeft: '104px' }}>
          <StyledDiv payPal>
            <img src="Images/paypal.svg" alt="paypal" />
          </StyledDiv>
        </Col>
      </Row>

      <StyledDiv
        style={{ margin: '0 auto', textAlign: 'center', marginTop: '61px' }}
      >
        <Button style={buttonStyleCancel}>Cancel</Button>
        <Button style={buttonStyleProceed} type="primary">
          Proceed to Payment
        </Button>
      </StyledDiv>
    </Modal>
  </>
);

const UpgradePlanConfirm = ({ isVisible }) => (
  <>
    <Modal
      isOpen={isVisible}
      style={{
        content: {
          width: '600px',
          height: '550px',
          margin: '0 auto',
          padding: '0',
        },
      }}
    >
      <StyledDiv header>Unlimited</StyledDiv>

      <StyledDiv textCenter marginTop>
        Plan type
      </StyledDiv>

      <StyledDiv textCenter fontBoldBlue>
        Add-ons
      </StyledDiv>

      <StyledDiv divider />

      <StyledDiv centerPosition>
        <Row>
          <Col style={{ margin: '0 auto', marginLeft: '104px' }}>
            <StyledDiv marginTop marginBottom>
              Current plan amount:
            </StyledDiv>
            <StyledDiv marginBottom>Add-on amount:</StyledDiv>
            <StyledDiv marginBottom>Total amount:</StyledDiv>
            <StyledDiv marginBottom marginTop>
              Billing type:
            </StyledDiv>
            <StyledDiv marginBottom>Payment start date:</StyledDiv>
            <StyledDiv marginBottom>Next payment date:</StyledDiv>
          </Col>

          <Col span={10} style={{ margin: '0 auto' }}>
            <StyledDiv marginTop fontNormalBlue marginBottom>
              150 JPY (Professional)
            </StyledDiv>

            <StyledDiv fontNormalBlue marginBottom>
              50 JPY
            </StyledDiv>

            <StyledDiv totalStyle marginBottom>
              200 JPY
            </StyledDiv>

            <StyledDiv fontNormalBlue marginBottom marginTop>
              Monthly
            </StyledDiv>
            <StyledDiv fontNormalBlue marginBottom>
              05/01/2021
            </StyledDiv>
            <StyledDiv fontNormalBlue marginBottom>
              06/01/2021
            </StyledDiv>
          </Col>
        </Row>
      </StyledDiv>

      <StyledDiv divider />
      <Row>
        <Col style={{ margin: '0 auto', marginLeft: '104px' }}>
          <StyledDiv marginTop marginBottom>
            Payment method
          </StyledDiv>
        </Col>
      </Row>
      <Row>
        <Col style={{ margin: '0 auto', marginLeft: '104px' }}>
          <StyledDiv payPal>
            <img src="Images/paypal.svg" alt="paypal" />
          </StyledDiv>
        </Col>
      </Row>

      <StyledDiv
        style={{ margin: '0 auto', textAlign: 'center', marginTop: '61px' }}
      >
        <Button style={buttonStyleCancel}>Cancel</Button>
        <Button style={buttonStyleProceed} type="primary">
          Proceed to Payment
        </Button>
      </StyledDiv>
    </Modal>
  </>
);

const ShareModal = ({ isVisible, close }) => (
  <ShareModalStyle isOpen={isVisible} onRequestClose={close}>
    <StyledDiv>
      <Button style={closeModalButton}>
        <CloseOutlined />
      </Button>
    </StyledDiv>
    <StyledDiv textCenter marginTop>
      Share
    </StyledDiv>
    <StyledDiv
      style={{ display: 'inline-flex', flexWrap: 'wrap', width: '100%' }}
      marginTop
    >
      <Button style={circleButton} type="primary">
        fb
      </Button>
      <Button style={circleButton} type="primary">
        t
      </Button>
      <Button style={circleButton} type="primary">
        G
      </Button>
      <Button style={circleButton} type="primary">
        L
      </Button>
    </StyledDiv>
    <StyledDiv textCenter marginTop>
      Share event link
    </StyledDiv>
    <StyledDiv>
      <Search
        bGray
        enterButton={<FileOutlined />}
        value="https://www.tobirawebinar.jp/sharer/sharer.php?u= palettes/trending"
      />
    </StyledDiv>
  </ShareModalStyle>
);

const AddBankAccount = ({ isVisible, close }) => (
  <Modal
    onRequestClose={close}
    isOpen={isVisible}
    style={{
      overlay: {
        background: '##4E4E4E 0% 0% no-repeat padding-box;',
      },
      content: {
        height: '500px',
        width: '600px',
        margin: '0 auto',
        padding: '0',
      },
    }}
  >
    <StyledDiv header>Add Bank Account</StyledDiv>

    <StyledDiv style={{ padding: '20px' }}>
      <Label asterisk>Bank Name</Label>
      <Input placeholder="Bank Name" />

      <Label asterisk>Account Name</Label>
      <Input placeholder="Account Name" />

      <Label asterisk>Account Number</Label>
      <Input placeholder="Account Number" />
    </StyledDiv>

    <StyledDiv style={{ display: 'flex', margin: '0 auto', width: '300px' }}>
      <Button BackButton onClick={close}>
        Cancel
      </Button>{' '}
      <Button NextButton type="primary">
        Add
      </Button>
    </StyledDiv>
  </Modal>
);

export {
  ProfessionalConfirm,
  AddOnsConfirm,
  UpgradePlanConfirm,
  ShareModal,
  AddBankAccount,
};
