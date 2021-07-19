import { memo, useEffect } from 'react';
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
import { getWebinarDetail } from '@/states/webinar/actions';
import { getAttendeeList, getAttendeeDetails } from '@/states/attendees/action';
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
// import ParticipantDetails from '@/components/Modules/Webinars/ParticipantDetails';

const { TabPane } = Tabs;

export function Details({ getDetails, webinarDetails }) {
  const { t } = useTranslation();
  const route = useRouter();
  const { id } = route.query;
  useEffect(() => {
    if (id) {
      getDetails({ id });
    }
  }, [id]);

  const StyledCard = styled(Card)`
    padding: 20px 25px 5px;
  `;

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
            <Tabs>
              <TabPane tab={t(message.details)} key="1">
                <WebinarDetail webinarDetails={webinarDetails} />
              </TabPane>
              <TabPane tab={t(message.registeredParticipants)} key="2">
                <Participants />
              </TabPane>
            </Tabs>
          </Div>
        </StyledCard>
      </Div>
    </>
  );
}

Details.propTypes = {
  // isWebinarLoading: PropTypes.bool,
  // isAttendeesLoading: PropTypes.bool,
  // webinarLoadingStatus: PropTypes.bool,
  // attendeeLoadingStatus: PropTypes.bool,
  // attendeesList: PropTypes.any,
  webinarDetails: PropTypes.any,
  // attendeesDetails: PropTypes.any,
  getDetails: PropTypes.func,
  // error: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  isWebinarLoading: makeSelectLoading(LOADING_PREFIX.WEBINAR),
  isAttendeesLoading: makeSelectLoading(LOADING_PREFIX.ATTENDEES),
  webinarLoadingStatus: makeSelectLoadingStatus(LOADING_PREFIX.WEBINAR),
  attendeeLoadingStatus: makeSelectLoadingStatus(LOADING_PREFIX.ATTENDEES),
  webinarDetails: makeSelectWebinarDetails(),
  attendeesList: makeSelectAttendees(),
  attendeesDetails: makeSelectAttendeesDetails(),
  error: makeSelectError(),
});

const mapDispatchProps = (dispatch) => ({
  getDetails: (payload) => dispatch(getWebinarDetail(payload)),
  getAttendeeList: (payload) => dispatch(getAttendeeList(payload)),
  getAttendeeDetails: (payload) => dispatch(getAttendeeDetails(payload)),
});

const withConnect = connect(mapStateToProps, mapDispatchProps);

export default compose(withConnect, memo)(withAuthSync(Details));
