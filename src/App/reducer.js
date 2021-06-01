  
/* istanbul ignore file */
import { fromJS } from 'immutable';
import { sameDay, formatAMPM } from '@/utils/dateUtils';
import {
  LOCATION_CHANGE,
  LOAD_ERRORS,
  CLEAR_ERRORS,
  LOADING,
  SAVE_MYPROFILE,
  CLEAR_MY_PROFILE,
  WEBSOCKET_INITIALIZED,
  SET_INITIAL_CHATLIST,
  WEBSOCKET_MESSAGE,
  SET_CHAT_MESSAGES,
  APPEND_MESSAGE,
  SET_PAGEHEADER_DRAWER,
  SET_PUBLIC_PROFILE,
  SET_COMMON,
  SET_PAGEHEADER_TITLE,
  WEBSOCKET_REQUEST,
  SELECTED_TAB,
  TOGGLE_MENTOR_CHANGE,
  TOGGLE_FOLLOW_CHANGE,
  TOGGLE_SUBSCRIPTION,
} from '@/states/rootTypes';

export const initialState = fromJS({
  error: false,
  user: {},
  users: {},
  chatList: [],
  isLoggedIn: false,
  isInitialAppLoaded: false,
  isSocketInitialized: false,
  messages: {}, // a global storage
  loading: {
    chatmate_profile: true,
    registration_verification: false,
    chat_list: true,
    chat_message: true,
    suggest_tags: true,
  },
  pageheaderDrawer: false,
  common: {},
  pageHeaderTitle: '',
  tabs: {},
});

function appReducer(state = initialState, action) {
  switch (action.type) {
  case LOCATION_CHANGE:
    return state.set('pageHeaderTitle', '');
  case LOAD_ERRORS:
    return state.set('error', action.error);
  case CLEAR_ERRORS:
    return state.set('error', false);
  case SET_PAGEHEADER_TITLE:
    return state.set('pageHeaderTitle', action.title);
  case LOADING:
    return state.setIn(['loading', action.key], action.isLoading);
  case SELECTED_TAB:
    return state.setIn(['tabs', action.key], action.tabSelected);
  case SET_COMMON:
    return state.setIn(['common', action.key], action.payload);
  case SET_PAGEHEADER_DRAWER:
    return state.set('pageheaderDrawer', action.openStatus);
  case SAVE_MYPROFILE:
    return state.set('user', action.userPayload).set('isLoggedIn', true);
  case CLEAR_MY_PROFILE:
    return state.set('user', {}).set('isLoggedIn', false);
  case SET_PUBLIC_PROFILE:
    return state.setIn(['users', action.userId], action.userDetail);
  case WEBSOCKET_INITIALIZED:
    return state.set('isSocketInitialized', action.isInitialized);
  case SET_INITIAL_CHATLIST: {
    const todayDate = new Date();
    const chatList = action.chatList.map(item => {
      const itemDate = new Date(item.updatedAt);
      const isSameDate = sameDay(todayDate, itemDate);
      return {
        ...item,
        lastUpdate: isSameDate
          ? formatAMPM(itemDate)
          : itemDate.toDateString(),
      };
    });
    return state
      .set('chatList', chatList)
      .setIn(['loading', 'chat_list'], false);
  }
  case WEBSOCKET_MESSAGE: {
    const { chatId } = action.message;
    const chatList = state.get('chatList');

    // eslint-disable-next-line no-underscore-dangle
    const chatIdIdx = chatList.findIndex(item => item._id === chatId);
    if (chatIdIdx !== null && chatIdIdx !== undefined) {
      if (chatList[chatIdIdx]) {
        const newChatList = [...chatList];
        const change = newChatList[chatIdIdx];
        change.unreadCount = change.unreadCount ? change.unreadCount + 1 : 1;
        change.updatedAt = action.message.timestampSent;
        change.latestMessage.message = action.message.message;
        // eslint-disable-next-line no-param-reassign
        state = state.updateIn(['chatList'], () => newChatList);
      }
    }
    const todayDate = new Date();
    const itemDate = new Date(action.message.timestampSent);
    const isSameDate = sameDay(todayDate, itemDate);
    const messageItem = action.message;
    messageItem.timestampSent = isSameDate
      ? formatAMPM(itemDate)
      : itemDate.toDateString();
    return state.updateIn(['messages', chatId], arr =>
      arr ? arr.concat(action.message) : [messageItem],
    );
  }
  case SET_CHAT_MESSAGES: {
    const todayDate = new Date();
    const { chatMessages } = action.message;
    const sortMessage = chatMessages.reverse().map(item => {
      const itemDate = new Date(item.timestampSent);
      const isSameDate = sameDay(todayDate, itemDate);
      return {
        ...item,
        timestampSent: isSameDate
          ? formatAMPM(itemDate)
          : itemDate.toDateString(),
      };
    });
    const { chatId } = action;
    if (chatId) {
      return state
        .setIn(['messages', chatId], sortMessage)
        .setIn(['loading', 'chat_messages'], false);
    }
    return state;
  }
  case APPEND_MESSAGE:
    return state.updateIn(['messages', action.chatId], arr => {
      const appendMessage = {
        ...action.message,
        timestampSent: formatAMPM(new Date()),
        id: null,
      };
      return arr && action.chatId
        ? arr.concat([appendMessage])
        : [appendMessage];
    });
  case WEBSOCKET_REQUEST: {
    if (action.mode === 'chat-messages') {
      return state.setIn(['loading', 'chat_messages'], true);
    }
    return state;
  }
  case TOGGLE_MENTOR_CHANGE: {
    const user = state.getIn(['users', action.id]);
    return state.setIn(['users', action.id], {
      ...user,
      mentorRequestStatus: action.mentorRequestStatus,
    });
  }
  case TOGGLE_FOLLOW_CHANGE: {
    const user = state.getIn(['users', action.id]);
    return state.setIn(['users', action.id], {
      ...user,
      isFollowing: action.isFollowing,
    });
  }
  case TOGGLE_SUBSCRIPTION: {
    const user = state.get('user');
    return state.set('user', {
      ...user,
      isSubscriber: action.status,
    });
  }
  default:
    return state;
  }
}

export default appReducer;