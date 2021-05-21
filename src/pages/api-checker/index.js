import React, {memo} from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getAttendee } from '@/states/attendees/action';
import { getWebinar } from '@/states/webinar/action';
import Button from '@/components/Elements/Button';
export function CheckApi({checkAttendee, checkWebinar}){

  return(
    <div style={{textAlign: "center"}}>
      <h1>Checking API</h1>
      <Button type="primary" onClick={() => checkAttendee()}>Get Attendee</Button>
      <Button type="primary"  onClick={() => checkWebinar()}>Get Webinar</Button>
    </div>
  );
}

CheckApi.propTypes = {
  checkAttendee: PropTypes.func,
  checkWebinar: PropTypes.func,
};


const mapDispatchProps = (dispatch) => {
  return {
    checkAttendee: () => dispatch(getAttendee()),
    checkWebinar: () => dispatch(getWebinar()),
  };
};



const withConnect = connect(
  null,
  mapDispatchProps,
);

export default compose(
  withConnect,
  memo,
)(CheckApi);