import PropTypes from 'prop-types';
import TimezoneSelect from 'react-timezone-select';
import { Formik, Field, Form } from 'formik';
import { CaretDownFilled, PlusSquareFilled } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { useDispatch } from 'react-redux';

import { SCHEDULE_TYPE } from '@/utils/constants';
import Div from '@/components/Elements/Div';
import Labels from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import Select from '@/components/Elements/Select';
import Option from '@/components/Elements/Option';
import Button from '@/components/Elements/Button';
import Image from '@/components/Elements/Image';
import Textarea from '@/components/Elements/Textarea';
import Radio from '@/components/Elements/Radio';
import DatePicker from '@/components/Elements/DatePicker';
import TimePicker from '@/components/Elements/TimePicker';
import ErrorMessage from '@/components/Elements/ErrorMessage';
import { setWebinar } from '@/states/webinar/actions';

import { createWebinar } from '@/validations/webinar';
import { DisableDates } from '@/utils/dateUtils';

export default function CreateWebinarDetails({
  zoomAccounts = [],
  webinarForm,
  setSubmitForm,
  submitStatus,
}) {
  const dispatch = useDispatch();
  const onSubmit = (payload) => {
    dispatch(setWebinar(payload));
    submitStatus(true);
  };
  return (
    <>
      <Formik
        initialValues={{
          managementTitle: webinarForm.managementTitle,
          webinarAccount: webinarForm.webinarAccount,
          title: webinarForm.title,
          description: webinarForm.description,
          frequency: webinarForm.frequency,
          timezone: webinarForm.timezone,
          durationHour: webinarForm.durationHour,
          durationMinute: webinarForm.durationMinute,
          duration: webinarForm.duration,
          image: webinarForm.image,
          schedules: [
            {
              scheduleDate: webinarForm.schedules[0].scheduleDate,
              scheduleTime: webinarForm.schedules[0].scheduleTime,
            },
          ],
        }}
        onSubmit={onSubmit}
        validationSchema={createWebinar}
        enableReinitialize
      >
        {({ setFieldValue, submitForm, values, errors }) => {
          setSubmitForm(submitForm);
          return (
            <Form id="webinar">
              <Div marginTop>
                <Labels textBlue bold>
                  Management Secion
                </Labels>
              </Div>
              <Div marginY widthFull>
                <Labels asterisk>Webinar Title</Labels>
                <Field
                  defaultValue={values.managementTitle}
                  type="text"
                  name="managementTitle"
                  placeholder="Enter webinar title"
                  component={Input}
                />
                <ErrorMessage name="managementTitle" />
              </Div>
              <Div
                widthFull
                marginY
                paddingBottomXL
                betweenBottom
                doubleDividerBlue
              >
                <Div>
                  <Labels asterisk>Zoom Account</Labels>
                  <Field
                    name="webinarAccount"
                    component={Select}
                    suffixIcon={<CaretDownFilled />}
                    defaultValue={values.webinarAccount}
                    onChange={(val) => setFieldValue('webinarAccount', val)}
                  >
                    <Option value="" disabled>
                      Select an account
                    </Option>
                    {zoomAccounts.map((option) => (
                      <Option key={option.id} value={option.id}>
                        {option.zoomEmail}
                      </Option>
                    ))}
                  </Field>
                  <ErrorMessage name="webinarAccount" />
                </Div>
                <Button addBtn>
                  <PlusSquareFilled /> <a href="/account">Add Account</a>
                </Button>
              </Div>
              <Div marginTop marginBottomLarge>
                <Labels textBlue bold>
                  Basic Details
                </Labels>
              </Div>
              <Div
                marginY
                widthFull
                paddingBottomXL
                betweenBottom
                doubleDividerBlue
                flexTop
              >
                <Div widthFull>
                  <Labels asterisk>Webinar Image</Labels>
                  <Div imageContainer flexColCenter>
                    <p>
                      <Image
                        src="/images/image.svg"
                        alt="Webinar image container"
                        iconLg
                      />
                    </p>
                    <Labels textBlue textCenter bold textLg>
                      Upload a photo
                    </Labels>
                  </Div>
                </Div>
                <Div widthFull paddingX>
                  <Div widthFull marginBottomLarge>
                    <Labels asterisk>Webinar Title</Labels>
                    <Field
                      type="text"
                      name="title"
                      placeholder="Enter webinar title"
                      component={Input}
                    />
                    <ErrorMessage name="title" />
                  </Div>
                  <Div widthFull marginY>
                    <Labels asterisk>Description</Labels>
                    <Field
                      name="description"
                      placeholder="Enter webinar description"
                      component={Textarea}
                      rows={7}
                      showCount
                      maxLength={100}
                    />
                    <ErrorMessage name="description" />
                  </Div>
                </Div>
              </Div>
              <Div marginTop>
                <Labels textBlue bold>
                  Schedule
                </Labels>
              </Div>
              <Div marginTop widthFull>
                <Labels asterisk>Webinar Plan</Labels>
                <Radio.Group
                  buttonStyle="solid"
                  name="frequency"
                  defaultValue={values.frequency}
                  onChange={(e) => {
                    setFieldValue('frequency', e.target.value);
                  }}
                >
                  <Radio
                    key={SCHEDULE_TYPE.ONETIME}
                    value={SCHEDULE_TYPE.ONETIME}
                  >
                    One-Time
                  </Radio>
                  <Radio
                    key={SCHEDULE_TYPE.RECURRING}
                    value={SCHEDULE_TYPE.RECURRING}
                  >
                    Recurring
                  </Radio>
                </Radio.Group>
              </Div>
              <Div marginY flexTop widthFull>
                <Div marginRight>
                  <Labels asterisk>Date</Labels>
                  <DatePicker
                    name="schedules[0].scheduleDate"
                    defaultValue={values.schedules[0].scheduleDate}
                    format="MM/DD/YYYY"
                    disabledDate={DisableDates}
                    onChange={(date) => {
                      setFieldValue('schedules[0].scheduleDate', date);
                    }}
                  />
                  <ErrorMessage name="schedules[0].scheduleDate" />
                </Div>
                <Div marginLeft>
                  <Labels asterisk>Start Time</Labels>
                  <TimePicker
                    name="schedules[0].scheduleTime"
                    defaultValue={values.schedules[0].scheduleTime}
                    use12Hours
                    minuteStep={15}
                    format="h:mm a"
                    onChange={(time) => {
                      setFieldValue('schedules[0].scheduleTime', time);
                    }}
                  />
                  <ErrorMessage name="schedules[0].scheduleTime" />
                </Div>
              </Div>
              <Div marginY flexTop widthFull>
                <Div marginRight>
                  <Labels asterisk>Timezone</Labels>
                  <TimezoneSelect
                    instanceId="timezone"
                    name="timezone"
                    value={values.timezone}
                    onChange={(zone) => {
                      setFieldValue('timezone', zone);
                    }}
                  />
                  {
                    // ErrorMessage on timezone.label not working.
                  }
                  <ErrorMessage name="timezone.label" />
                  {errors.timezone ? <div>{errors.timezone.label}</div> : null}
                </Div>
                <Div marginLeft>
                  <Labels asterisk>Duration</Labels>
                  <Row gutter={50}>
                    <Col span={12}>
                      <Field
                        name="durationHour"
                        component={Select}
                        suffixIcon={<CaretDownFilled />}
                        defaultValue={values.durationHour}
                        onChange={(val) => {
                          setFieldValue('durationHour', val);
                        }}
                      >
                        <Option key="" value="" disabled>
                          Hour
                        </Option>
                        {Array.from(Array(11), (_, i) => (
                          <Option key={i} value={i}>
                            {i}
                          </Option>
                        ))}
                      </Field>{' '}
                      hr <ErrorMessage name="durationHour" />
                    </Col>
                    <Col span={12}>
                      <Field
                        name="durationMinute"
                        component={Select}
                        suffixIcon={<CaretDownFilled />}
                        defaultValue={values.durationMinute}
                        onChange={(val) => {
                          setFieldValue('durationMinute', val);
                        }}
                      >
                        <Option key="" value="" disabled>
                          Minutes
                        </Option>
                        <Option key="00" value="00">
                          00
                        </Option>
                        <Option key="15" value="15">
                          15
                        </Option>
                        <Option key="30" value="30">
                          30
                        </Option>
                        <Option key="45" value="45">
                          45
                        </Option>
                      </Field>{' '}
                      mins <ErrorMessage name="durationMinute" />
                    </Col>
                  </Row>
                </Div>
              </Div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

CreateWebinarDetails.propTypes = {
  zoomAccounts: PropTypes.any,
  webinarForm: PropTypes.any,
  setSubmitForm: PropTypes.any,
  submitStatus: PropTypes.any,
};
