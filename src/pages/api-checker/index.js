import React, {memo} from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getAttendee } from '@/states/attendees/action';

export function CheckApi({checkAttendee}){

  return(
    <div>
      <button onClick={() => checkAttendee()}>Check</button>
    </div>
  );
}

CheckApi.propTypes = {
  checkAttendee: PropTypes.func,
  getSuccess: PropTypes.func,
  getFailed: PropTypes.func,
};


const mapDispatchProps = (dispatch) => {
  return {
    checkAttendee: () => dispatch(getAttendee()),
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