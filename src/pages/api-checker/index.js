import React, {memo, useState, } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect,useDispatch } from 'react-redux';
import { getAttendee, getAttendeeCount, addAtendee } from '@/states/attendees/action';
import { getProfile } from '@/states/profiles/action';
import { getWebinar } from '@/states/webinar/action';
import Button from '@/components/Elements/Button';
import Input from '@/components/Elements/Input';
import { createStructuredSelector } from 'reselect';
import { makeSelectAttendeeCount } from '@/states/attendees/selector';





export function CheckApi({data, checkAttendee, checkWebinar, checkAttendeeCount, profileCheck}){

  const dsptch = useDispatch(); 
  const [webinarId, setWebinarId] = useState('');
  const [attendeeId, setAttendeeId] = useState('');
  const [payment, setPayment] = useState(0);
  return(
    <div style={{textAlign: "center"}}>
      <h1>Checking API</h1>
      <Button type="primary" onClick={() => checkAttendee()}>Get Attendee</Button>
      <h2>Data: {data}</h2>
      <Button type="primary"  onClick={() => checkWebinar()}>Get Webinar</Button>

      <Button type="primary"  onClick={() => checkAttendeeCount()}>Check Attendee Count</Button>
      <Button type="primary"  onClick={() => profileCheck()}>Check profile</Button>

      <Input placeholder="WebinarId"
        value={webinarId}
        onChange={(e) => setWebinarId(e.target.value)}
      ></Input>
      <Input placeholder="attendeeId"
        value={attendeeId}
        onChange={(e) => setAttendeeId(e.target.value)}
      ></Input>
      <Input placeholder="Payment"
        type="number"
        value={payment}
        onChange={(e) => setPayment(e.target.value)}
      ></Input>
      <Button type="primary"  onClick={() => dsptch(addAtendee({webinarId, attendeeId, payment}))}>Add Attendee</Button>
    </div>
  );
}

CheckApi.propTypes = {
  data: PropTypes.any,
  checkAttendee: PropTypes.func,
  checkAttendeeCount: PropTypes.func,
  checkWebinar: PropTypes.func,
  attendeeAdd: PropTypes.func,
  profileCheck: PropTypes.func,
};


const mapDispatchProps = (dispatch) => {
  
  return {
    checkAttendee: () => dispatch(getAttendee()),
    checkWebinar: () => dispatch(getWebinar()),
    checkAttendeeCount: () => dispatch(getAttendeeCount()),
    attendeeAdd: () => dispatch(addAtendee()),
    profileCheck: () => dispatch(getProfile()),

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