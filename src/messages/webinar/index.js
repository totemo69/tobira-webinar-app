export const scope = 'webinar';

const message = {
  title: Object.values({
    key: `${scope}.title`,
    default: 'Title',
  }),
  schedule: Object.values({
    key: `${scope}.schedule`,
    default: 'Schedule',
  }),
  attendees: Object.values({
    key: `${scope}.attendees`,
    default: 'No. of Attendees',
  }),
  status: Object.values({
    key: `${scope}.status`,
    default: 'Status',
  }),
  action: Object.values({
    key: `${scope}.action`,
    default: 'Action',
  }),
  setupMessage: Object.values({
    key: `${scope}.setupMessage`,
    default: 'You need to setup your zoom account first.',
  }),
  buttonLater: Object.values({
    key: `${scope}.buttonLater`,
    default: 'Later',
  }),
  buttonSetup: Object.values({
    key: `${scope}.buttonSetup`,
    default: 'Setup',
  }),
  viewDetails: Object.values({
    key: `${scope}.viewDetails`,
    default: 'View Details',
  }),
  congrats: Object.values({
    key: `${scope}.congrats`,
    default: 'Congratulations!',
  }),
  createdSuccess: Object.values({
    key: `${scope}.createdSuccess`,
    default: 'Your webinar has been successfully created.',
  }),
  updatedSuccess: Object.values({
    key: `${scope}.updatedSuccess`,
    default: 'Your webinar has been succesfully updated.',
  }),
  copyMessage: Object.values({
    key: `${scope}.copyMessage`,
    default: 'Please copy the generated ticket link.',
  }),
  number: Object.values({
    key: `${scope}.number`,
    default: 'No.',
  }),
  paymentStatus: Object.values({
    key: `${scope}.paymentStatus`,
    default: 'Payment Status',
  }),
  paymentAmount: Object.values({
    key: `${scope}.paymentAmount`,
    default: 'Amount',
  }),
  details: Object.values({
    key: `${scope}.details`,
    default: 'Details',
  }),
  registeredParticipants: Object.values({
    key: `${scope}.registeredParticipants`,
    default: 'Registered Participants',
  }),
  editDetails: Object.values({
    key: `${scope}.editDetails`,
    default: 'Edit Details',
  }),
  updateWebinar: Object.values({
    key: `${scope}.updateWebinar`,
    default: 'UPDATE WEBINAR',
  }),
  addAccount: Object.values({
    key: `${scope}.addAccount`,
    default: 'Add Account',
  }),
  basicDetails: Object.values({
    key: `${scope}.basicDetails`,
    default: 'Basic Details',
  }),
  back: Object.values({
    key: `${scope}.back`,
    default: 'Back',
  }),
  create: Object.values({
    key: `${scope}.create`,
    default: 'Create',
  }),
  createWebinar: Object.values({
    key: `${scope}.createWebinar`,
    default: 'Create Webinar',
  }),
  description: Object.values({
    key: `${scope}.description`,
    default: 'Description',
  }),
  date: Object.values({
    key: `${scope}.date`,
    default: 'Date',
  }),
  time: Object.values({
    key: `${scope}.time`,
    default: 'Time',
  }),
  duration: Object.values({
    key: `${scope}.duration`,
    default: 'Duration',
  }),
  enterWebinarTitle: Object.values({
    key: `${scope}.enterWebinarTitle`,
    default: 'Enter Webinar title',
  }),
  emailAddress: Object.values({
    key: `${scope}.emailAddress`,
    default: 'Email Address',
  }),
  email: Object.values({
    key: `${scope}.email`,
    default: 'Email',
  }),
  enterRegistrationFomrName: Object.values({
    key: `${scope}.enterRegistrationFomrName`,
    default: 'Enter registration form name',
  }),
  enterWebinarDescription: Object.values({
    key: `${scope}.enterWebinarDescription`,
    default: 'Enter Webinar Description',
  }),
  formNamePlaceHolder: Object.values({
    key: `${scope}.formNamePlaceHolder`,
    default: 'Enter registration form name',
  }),
  formName: Object.values({
    key: `${scope}.formName`,
    default: 'Form Name',
  }),
  fieldType: Object.values({
    key: `${scope}.fieldType`,
    default: 'Field Type',
  }),
  fieldNameOrPlaceholder: Object.values({
    key: `${scope}.fieldNameOrPlaceholder`,
    default: 'Field Name or Placeholder',
  }),
  hour: Object.values({
    key: `${scope}.hour`,
    default: 'hr',
  }),
  hourSelect: Object.values({
    key: `${scope}.hourSelect`,
    default: 'Hour',
  }),
  registration: Object.values({
    key: `${scope}.registration`,
    default: 'Registration',
  }),
  recuring: Object.values({
    key: `${scope}.recuring`,
    default: 'Recurring',
  }),
  required: Object.values({
    key: `${scope}.required`,
    default: 'Required?',
  }),
  registrationFormFields: Object.values({
    key: `${scope}.registrationFormFields`,
    default: 'Registration Form Fields',
  }),
  registrationForm: Object.values({
    key: `${scope}.registrationForm`,
    default: 'Registration Form',
  }),
  setupRegistrationFormFields: Object.values({
    key: `${scope}.setupRegistrationFormFields`,
    default: 'Please set up your registration form fields.',
  }),
  selectDate: Object.values({
    key: `${scope}.selectDate`,
    default: 'Select date',
  }),
  startTime: Object.values({
    key: `${scope}.startTime`,
    default: 'Select time',
  }),
  selectPayment: Object.values({
    key: `${scope}.selectPayment`,
    default: 'Select payment gateway for the payments',
  }),
  selectZoomAccount: Object.values({
    key: `${scope}.selectZoomAccount`,
    default: 'Select an account',
  }),
  timeZone: Object.values({
    key: `${scope}.timeZone`,
    default: 'Timezone',
  }),
  selectTimeZone: Object.values({
    key: `${scope}.selectTimeZone`,
    default: 'Select Timezone',
  }),
  managementSection: Object.values({
    key: `${scope}.managementSection`,
    default: 'Management Section',
  }),
  minutes: Object.values({
    key: `${scope}.minutes`,
    default: 'min',
  }),
  minutesSelect: Object.values({
    key: `${scope}.minutesSelect`,
    default: 'Minutes',
  }),
  next: Object.values({
    key: `${scope}.next`,
    default: 'Next',
  }),
  oneTime: Object.values({
    key: `${scope}.oneTime`,
    default: 'One-Time',
  }),
  otherPaymentOptions: Object.values({
    key: `${scope}.otherPaymentOptions`,
    default: 'Other payment options coming soon!',
  }),
  paymentOptions: Object.values({
    key: `${scope}.paymentOptions`,
    default: 'Payment Options',
  }),
  payWithPaypal: Object.values({
    key: `${scope}.payWithPaypal`,
    default: 'Pay with Paypal',
  }),
  webinarImage: Object.values({
    key: `${scope}.webinarImage`,
    default: 'Webinar Image',
  }),
  webinarTitleAdmin: Object.values({
    key: `${scope}.webinarTitleAdmin`,
    default: 'Webinar Title (Admin)',
  }),
  webinarTitlePublic: Object.values({
    key: `${scope}.webinarTitlePublic`,
    default: 'Webinar Title (Public)',
  }),
  webinarPrice: Object.values({
    key: `${scope}.webinarPrice`,
    default: 'Webinar Price',
  }),
  webinarPlan: Object.values({
    key: `${scope}.webinarPlan`,
    default: 'Webinar Plan',
  }),
  webinarPriceAttendee: Object.values({
    key: `${scope}.webinarPriceAttendee`,
    default: 'Webinar price for each attendee',
  }),
  zoomAccount: Object.values({
    key: `${scope}.zoomAccount`,
    default: 'Zoom Account',
  }),
  ticketLink: Object.values({
    key: `${scope}.ticketLink`,
    default: 'Ticket Link',
  }),
  participantId: Object.values({
    key: `${scope}.participantId`,
    default: 'Participant ID',
  }),
  registeredDate: Object.values({
    key: `${scope}.registeredDate`,
    default: 'Date of Registration',
  }),
  registrationLabel: Object.values({
    key: `${scope}.registrationLabel`,
    default: 'Registration Details',
  }),
  registrationTitle: Object.values({
    key: `${scope}.registrationTitle`,
    default: 'Registered Participants Details',
  }),
  paymentLabel: Object.values({
    key: `${scope}.paymentLabel`,
    default: 'Payment Details',
  }),
  paymentMethodLabel: Object.values({
    key: `${scope}.paymentMethodLabel`,
    default: 'Payment Method',
  }),
  paymentIdLabel: Object.values({
    key: `${scope}.paymentIdLabel`,
    default: 'Transaction ID',
  }),
  paymentDateLabel: Object.values({
    key: `${scope}.paymentDateLabel`,
    default: 'Transaction Date and Time',
  }),
  doneStatusLabel: Object.values({
    key: `${scope}.doneStatusLabel`,
    default: 'Done',
  }),
  notYetStatusLabel: Object.values({
    key: `${scope}.notYetStatusLabel`,
    default: 'Not yet started',
  }),
  upcomingStatusLabel: Object.values({
    key: `${scope}.upcomingStatusLabel`,
    default: 'Upcoming',
  }),
  publishStatusLabel: Object.values({
    key: `${scope}.publishStatusLabel`,
    default: 'Published',
  }),
  hiddenStatusLabel: Object.values({
    key: `${scope}.hiddenStatusLabel`,
    default: 'Hidden',
  }),
  oneTimePlan: Object.values({
    key: `${scope}.oneTimePlan`,
    default: 'One-time',
  }),
  pendingPaymentLabel: Object.values({
    key: `${scope}.pendingPaymentLabel`,
    default: 'Pending',
  }),
  failedPaymentLabel: Object.values({
    key: `${scope}.failedPaymentLabel`,
    default: 'Failed',
  }),
  completedPaymentLabel: Object.values({
    key: `${scope}.completedPaymentLabel`,
    default: 'Completed',
  }),
  createWebinarTitle: Object.values({
    key: `${scope}.createWebinarTitle`,
    default: 'Management Secion',
  }),
  createWebinarSuccess: Object.values({
    key: `${scope}.createWebinarSuccess`,
    default: 'Webinar creation completed!',
  }),
  createWebinarUpdate: Object.values({
    key: `${scope}.createWebinarUpdate`,
    default: 'Success!',
  }),
  registrationFieldNotes1: Object.values({
    key: `${scope}.registrationFieldNotes1`,
    default: 'Email address is required for registration.',
  }),
  registrationFieldNotes2: Object.values({
    key: `${scope}.registrationFieldNotes2`,
    default: 'Click NEXT button to continue',
  }),
};

export default message;
