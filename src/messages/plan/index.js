export const scope = 'plan';

const message = {
  title: Object.values({
    key: `${scope}.title`,
    default: 'PURCHASE LICENSE',
  }),
  subTitle: Object.values({
    key: `${scope}.subTitle`,
    default: 'Webinar Plan',
  }),
  header: Object.values({
    key: `${scope}.header`,
    default: 'Select your plan',
  }),
  chooseButton: Object.values({
    key: `${scope}.chooseButton`,
    default: 'Choose this plan',
  }),
};

export default message;
