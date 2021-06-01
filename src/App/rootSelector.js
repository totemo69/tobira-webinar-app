import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobalDomain = state => state.global || initialState;
const selectChatDomain = state => state.chat || null;

const selectRouter = state => state.router;

const makeSelectError = () =>
  createSelector(
    selectGlobalDomain,
    globalState => (globalState != null ? globalState.get('error') : false),
  );

const makeSelectGlobal = () =>
  createSelector(
    selectGlobalDomain,
    substate => substate,
  );

const makeSelectPageDrawer = () =>
  createSelector(
    selectGlobalDomain,
    substate => substate.get('pageheaderDrawer'),
  );

const makeSelectMyProfile = () =>
  createSelector(
    selectGlobalDomain,
    substate => substate.get('user'),
  );

const makeSelectLoggedInState = () =>
  createSelector(
    selectGlobalDomain,
    substate => substate.get('isLoggedIn'),
  );
const makeSelectSubscriptionState = () =>
  createSelector(
    selectGlobalDomain,
    substate => substate.get('user').isSubscriber || false,
  );

const makeSelectChatList = () =>
  createSelector(
    selectGlobalDomain,
    substate => substate.get('chatList'),
  );

const makeSelectWebSocketInitialized = () =>
  createSelector(
    selectGlobalDomain,
    substate => substate.get('isSocketInitialized'),
  );

const makeSelectChatMateProfle = chatId =>
  createSelector(
    selectChatDomain,
    substate => {
      const chatMate = substate != null ? substate.chatMates[chatId] : false;
      return chatMate;
    },
  );

const makeSelectCurrentChatMateProfle = () =>
  createSelector(
    selectChatDomain,
    substate => (substate != null ? substate.currentChatProfile : false),
  );

const makeSelectChatMessage = chatId =>
  createSelector(
    selectGlobalDomain,
    globalState =>
      globalState != null ? globalState.getIn(['messages', chatId]) : false,
  );

const makeSelectLoading = loadingKey =>
  createSelector(
    selectGlobalDomain,
    globalState =>
      globalState != null ? globalState.getIn(['loading', loadingKey]) : false,
  );

const makeSelectUserProfile = userId =>
  createSelector(
    selectGlobalDomain,
    globalState =>
      globalState != null ? globalState.getIn(['users', userId]) : false,
  );

const makeSelectIsLoggedInUserSame = userId =>
  createSelector(
    selectGlobalDomain,
    globalState => {
      if (globalState != null) {
        const user = globalState.getIn(['users', userId]);
        const loggedInUser = globalState.get('user');
        if (user && loggedInUser) {
          return user.id === loggedInUser.id;
        }
        return false;
      }
      return false;
    },
  );

const makeSelectCommon = key =>
  createSelector(
    selectGlobalDomain,
    globalState =>
      globalState != null ? globalState.getIn(['common', key]) : null,
  );

const makeSelectPageTitle = () =>
  createSelector(
    selectGlobalDomain,
    globalState => globalState.get('pageHeaderTitle'),
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

const makeSelectSelectedTab = tabKey =>
  createSelector(
    selectGlobalDomain,
    globalState =>
      globalState != null ? globalState.getIn(['tabs', tabKey]) : 0,
  );

export default makeSelectGlobal;
export {
  makeSelectCommon,
  makeSelectPageDrawer,
  makeSelectLocation,
  makeSelectLoggedInState,
  makeSelectError,
  makeSelectLoading,
  makeSelectMyProfile,
  makeSelectChatList,
  makeSelectChatMateProfle,
  makeSelectChatMessage,
  makeSelectWebSocketInitialized,
  makeSelectCurrentChatMateProfle,
  makeSelectUserProfile,
  makeSelectPageTitle,
  makeSelectSubscriptionState,
  makeSelectIsLoggedInUserSame,
  makeSelectSelectedTab,
};