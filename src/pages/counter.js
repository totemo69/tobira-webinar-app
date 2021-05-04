import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCount } from '@/states/counter/selector';
import { incrementCount, decrementCount, resetCount } from '@/states/counter/action';

export function Counter({ count, doIncrement, doDecrement, doReset }) {

  useEffect(() => {
    //getCount();
  }, []);

  return(
    <div>
      <style jsx>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={() => doIncrement()}>+1</button>
      <button onClick={() => doDecrement()}>-1</button>
      <button onClick={() => doReset()}>Reset</button>
    </div>
  );
}

Counter.propTypes = {
  count: PropTypes.any,
  doIncrement: PropTypes.func,
  doDecrement: PropTypes.func,
  doReset: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  count: makeSelectCount(),
});

export function mapDispatchToProps(dispatch) {
  return {
    doIncrement: () => dispatch(incrementCount()),
    doDecrement: () => dispatch(decrementCount()),
    doReset: () => dispatch(resetCount()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Counter);