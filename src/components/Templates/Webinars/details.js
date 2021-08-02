import { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import globalMessage from '@/messages/global';
import message from '@/messages/webinar';
import { withAuthSync } from '@/lib/auth';
import { LOADING_PREFIX } from '@/utils/constants';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectLoadingStatus,
} from '@/states/global/selector';
import { makeSelectWebinarDetails } from '@/states/webinar/selector';
import { makeSelecPaymentsDetails } from '@/states/payments/selector';
import { getWebinarDetail } from '@/states/webinar/actions';
import { getAttendeeList, getAttendeeDetails } from '@/states/attendees/action';
import { getPayments } from '@/states/payments/action';
import {
  makeSelectAttendees,
  makeSelectAttendeesDetails,
} from '@/states/attendees/selector';
import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/Title';
import Card from '@/components/Elements/Card';
import Tabs from '@/components/Elements/Tabs';
import Span from '@/components/Elements/Span';
import WebinarDetail from '@/components/Modules/Webinars/WebinarDetails';
import Participants from '@/components/Modules/Webinars/ParticipantList';
import ParticipantDetails from '@/components/Modules/Webinars/ParticipantDetails';

const { TabPane } = Tabs;

export function Details({
  getDetails,
  webinarDetails,
  paymentInfo,
  getAttendee,
  attendeesList,
  attendeesDetails,
  getAttendeeDetail,
  getPaymentInfo,
}) {
  const { t } = useTranslation();
  const route = useRouter();
  const { id } = route.query;

  const [isShow, setShow] = useState(false);

  const [tabKey, setTabKey] = useState('1');

  const [displayCount, setDisplayCount] = useState(10);

  const closeModal = () => {
    setShow(false);
  };

  useEffect(() => {
    if (id) {
      getDetails({ id });
      getAttendee({ webinarId: id });
    }
  }, [id]);

  const StyledCard = styled(Card)`
    padding: 20px 25px 5px;

    @media screen and (max-width: 480px) {
      padding: 0;
    }
  `;

  const onClickDetails = (attendeeId) => {
    getAttendeeDetail({ id: attendeeId });
    getPaymentInfo({ attendeeId, webinarId: id });
    setShow(true);
  };

  return (
    <>
      <Div marginBottomLarge flexTop>
        <Title secondary marginRight>
          {t(globalMessage.listWebinar)} {'>'}
        </Title>
        <Span breadCrumbs>{t(message.details)}</Span>
        <Span breadCrumbs>{' > '}</Span>
        <Span breadCrumbs>{webinarDetails.title}</Span>
      </Div>
      <Div widthFull>
        <StyledCard>
          <Div widthFull>
            <Tabs
              onChange={(activeKey) => setTabKey(activeKey)}
              defaultActiveKey={tabKey}
            >
              <TabPane forceRender tab={t(message.details)} key="1">
                <WebinarDetail webinarDetails={webinarDetails} />
              </TabPane>
              <TabPane
                forceRender
                tab={t(message.registeredParticipants)}
                key="2"
              >
                <Participants
                  attendeesList={attendeesList}
                  onClickDetails={onClickDetails}
                  displayCount={displayCount}
                  setDisplayCount={setDisplayCount}
                />
              </TabPane>
            </Tabs>
          </Div>
        </StyledCard>
      </Div>
      <ParticipantDetails
        participantDetails={attendeesDetails}
        paymentInfo={paymentInfo}
        isVisible={isShow}
        closeModal={closeModal}
      />
    </>
  );
}

Details.propTypes = {
  // isWebinarLoading: PropTypes.bool,
  // isAttendeesLoading: PropTypes.bool,
  // webinarLoadingStatus: PropTypes.bool,
  // attendeeLoadingStatus: PropTypes.bool,
  attendeesList: PropTypes.any,
  webinarDetails: PropTypes.any,
  attendeesDetails: PropTypes.any,
  paymentInfo: PropTypes.any,
  getDetails: PropTypes.func,
  getAttendee: PropTypes.func,
  getAttendeeDetail: PropTypes.func,
  // error: PropTypes.any,
  getPaymentInfo: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isWebinarLoading: makeSelectLoading(LOADING_PREFIX.WEBINAR),
  isAttendeesLoading: makeSelectLoading(LOADING_PREFIX.ATTENDEES),
  webinarLoadingStatus: makeSelectLoadingStatus(LOADING_PREFIX.WEBINAR),
  attendeeLoadingStatus: makeSelectLoadingStatus(LOADING_PREFIX.ATTENDEES),
  webinarDetails: makeSelectWebinarDetails(),
  attendeesList: makeSelectAttendees(),
  attendeesDetails: makeSelectAttendeesDetails(),
  paymentInfo: makeSelecPaymentsDetails(),
  error: makeSelectError(),
});

const mapDispatchProps = (dispatch) => ({
  getDetails: (payload) => dispatch(getWebinarDetail(payload)),
  getAttendee: (payload) => dispatch(getAttendeeList(payload)),
  getAttendeeDetail: (payload) => dispatch(getAttendeeDetails(payload)),
  getPaymentInfo: (payload) => dispatch(getPayments(payload)),
});

const withConnect = connect(mapStateToProps, mapDispatchProps);

export default compose(withConnect, memo)(withAuthSync(Details));
