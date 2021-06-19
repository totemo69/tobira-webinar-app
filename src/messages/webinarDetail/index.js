export const scope = 'webinarDetail';

const message = {
  register: Object.values({
    key: `${scope}.register`,
    default: 'Register',
  }),
  ticketSummary: Object.values({
    key: `${scope}.ticketSummary`,
    default: 'Ticket Summary',
  }),
  complete: Object.values({
    key: `${scope}.complete`,
    default: 'Complete',
  }),
};

export default message;
