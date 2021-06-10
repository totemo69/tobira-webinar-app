import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobalDomain = state => state.global || initialState;

const makeSelectGlobal = () =>
  createSelector(
    selectGlobalDomain,
    substate => substate,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobalDomain,
    globalState => (globalState != null ? globalState.get('error') : false),
  );

const makeSelectLoading = loadingKey =>
  createSelector(
    selectGlobalDomain,
    globalState =>
      globalState != null ? globalState['loading'][loadingKey] : false,
  );

export default makeSelectGlobal;
export {
  makeSelectError,
  makeSelectLoading,
};