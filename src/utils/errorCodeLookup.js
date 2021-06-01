const ErrorCodeLookUp = ['Please set mentors limit', 'AUTH0012'];


const APIErrorMsgLookup = {
  emailUnique: 'emailAlreadyExist',
  'Incorrect email or password': 'incorrrectEmailPassword',
  'User is not activated': 'userNotActivated',
  '"username" already exists': 'userNameAlreadyExist',
  usernameUnique: 'userNameAlreadyExist',
  AUTH0004: 'notValidUser',
  AUTH0012: 'incorrectEmailPassword',
  AUTH0013: 'userNotActivated',
};

export {APIErrorMsgLookup};
export default ErrorCodeLookUp;