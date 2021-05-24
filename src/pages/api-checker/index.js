import React, {memo} from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getAttendee } from '@/states/attendees/action';
import { getWebinar } from '@/states/webinar/action';
import Button from '@/components/Elements/Button';
import { createStructuredSelector } from 'reselect';
import { makeSelectAttendeeCount } from '@/states/attendees/selector';
export function CheckApi({data, checkAttendee, checkWebinar}){

  return(
    <div style={{textAlign: "center"}}>
      <h1>Checking API</h1>
      <Button type="primary" onClick={() => checkAttendee()}>Get Attendee</Button>
      <h2>Data: {data}</h2>
      <Button type="primary"  onClick={() => checkWebinar()}>Get Webinar</Button>
    </div>
  );
}

CheckApi.propTypes = {
  data: PropTypes.any,
  checkAttendee: PropTypes.func,
  checkWebinar: PropTypes.func,
};


const mapDispatchProps = (dispatch) => {
  return {
    checkAttendee: () => dispatch(getAttendee()),
    checkWebinar: () => dispatch(getWebinar()),
  };
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectAttendeeCount(),
});



const withConnect = connect(
  mapStateToProps,
  mapDispatchProps,
);

export default compose(
  withConnect,
  memo,
)(CheckApi);