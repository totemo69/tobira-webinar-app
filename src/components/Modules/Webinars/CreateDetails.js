// import { useState } from 'react';
import PropTypes from 'prop-types';
import TimezoneSelect from 'react-timezone-select';
import { useTranslation } from 'next-i18next';
import { Formik, Field, Form } from 'formik';
import {
  CaretDownFilled,
  CloseSquareOutlined,
  PlusSquareFilled,
} from '@ant-design/icons';
import { Row, Col } from 'antd';
import { useDispatch } from 'react-redux';

import { ZOOM_ACCOUNT_STATUS, ZOOM_ACCOUNT_TYPE } from '@/utils/constants';
import Div from '@/components/Elements/Div';
import Labels from '@/components/Elements/Labels';
import Input from '@/components/Elements/Input';
import Select from '@/components/Elements/Select';
import Option from '@/components/Elements/Option';
import Button from '@/components/Elements/Button';
import Textarea from '@/components/Elements/Textarea';
// import Radio from '@/components/Elements/Radio';
import DatePicker from '@/components/Elements/DatePicker';
import TimePicker from '@/components/Elements/TimePicker';
import ErrorMessage, { DisplayError } from '@/components/Elements/ErrorMessage';
import ImageUpload from '@/components/Elements/ImageUpload';
import { setWebinar } from '@/states/webinar/actions';
import localMessage from '@/messages/webinar';

import { createWebinar } from '@/validations/webinar';
import { DisableDates } from '@/utils/dateUtils';
import { useState } from 'react';

export default function CreateWebinarDetails({
  zoomAccounts = [],
  webinarForm,
  setSubmitForm,
  submitStatus,
  isUpdate = false,
}) {
  const { t } = useTranslation();

  const [zoomAccountType, setZoomAccountType] = useState(
    ZOOM_ACCOUNT_TYPE.BASIC,
  );
  const dispatch = useDispatch();
  const onSubmit = (payload) => {
    dispatch(setWebinar(payload));
    submitStatus(true);
  };

  // const [isVisible, setIsVisible] = useState(true);

  const isVisible = true;

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
              <Div paddingTop marginTopLarge marginBottom widthFull>
                <Labels asterisk>{t(localMessage.webinarTitleAdmin)}</Labels>
                <Field
                  defaultValue={values.managementTitle}
                  type="text"
                  name="managementTitle"
                  placeholder={t(localMessage.enterWebinarTitle)}
                  component={Input}
                />
                <ErrorMessage name="managementTitle" />
              </Div>
              <Row
                type="flex"
                align="middle"
                justify="start"
                style={{ width: '100%' }}
              >
                <Col type="flex" align="left" justify="start" xs={24} lg={24}>
                  <Labels asterisk>{t(localMessage.zoomAccount)}</Labels>
                  <Field
                    name="webinarAccount"
                    component={Select}
                    suffixIcon={<CaretDownFilled />}
                    defaultValue={values.webinarAccount}
                    onChange={(val) => {
                      setFieldValue('webinarAccount', val);
                      const zoom = zoomAccounts.find((data) => data.id === val);
                      setZoomAccountType(zoom.zoomType);
                    }}
                    disabled={isUpdate}
                  >
                    <Option value="" disabled>
                      {t(localMessage.selectZoomAccount)}
                    </Option>
                    {zoomAccounts.map((option) => (
                      <Option
                        key={option.id}
                        value={option.id}
                        disabled={
                          option.status !== ZOOM_ACCOUNT_STATUS.ACTIVATED
                        }
                      >
                        {option.zoomEmail}
                      </Option>
                    ))}
                  </Field>
                  <ErrorMessage name="webinarAccount" />
                </Col>
                {/* <Col type="flex" align="middle" justify="start" xs={24} lg={6}>
                  <Button addBtn style={{ width: '90%' }}>
                    <PlusSquareFilled />{' '}
                    <a href="/account">{t(localMessage.addAccount)}</a>
                  </Button>
                </Col> */}
              </Row>
              <Div marginTop marginBottomLarge>
                <Labels textBlue bold></Labels>
              </Div>
              <Div
                marginY
                widthFull
                paddingBottomXL
                betweenBottom
                doubleDividerBlue
                flexTop
              >
                <Row
                  type="flex"
                  align="middle"
                  justify="center"
                  style={{ width: '100%' }}
                >
                  <Col
                    type="flex"
                    align="left"
                    justify="center"
                    xs={24}
                    lg={12}
                  >
                    <Div widthFull>
                      <Labels asterisk>{t(localMessage.webinarImage)}</Labels>
                      <Div imageContainer flexColCenter>
                        <ImageUpload
                          src={values.image}
                          onUploadComplete={(image) =>
                            setFieldValue('image', image, true)
                          }
                        />
                      </Div>
                    </Div>
                  </Col>
                  <Col
                    type="flex"
                    align="left"
                    justify="center"
                    xs={24}
                    lg={12}
                  >
                    <Div widthFull paddingLeft>
                      <Div widthFull marginBottomLarge>
                        <Labels asterisk>
                          {t(localMessage.webinarTitlePublic)}
                        </Labels>
                        <Field
                          type="text"
                          name="title"
                          placeholder={t(localMessage.enterWebinarTitle)}
                          component={Input}
                        />
                        <ErrorMessage name="title" />
                      </Div>
                      <Div widthFull marginY>
                        <Labels asterisk>{t(localMessage.description)}</Labels>
                        <Field
                          name="description"
                          placeholder={t(localMessage.enterWebinarDescription)}
                          component={Textarea}
                          rows={7}
                          showCount
                          maxLength={1000}
                        />
                        <ErrorMessage name="description" />
                      </Div>
                    </Div>
                  </Col>
                </Row>
              </Div>
              {/* <Div marginTop>
                <Labels textBlue bold>
                  {t(localMessage.schedule)}
                </Labels>
              </Div>
              <Div marginTop widthFull>
                <Labels asterisk>{t(localMessage.webinarPlan)}</Labels>
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
                    onClick={() => {
                      setIsVisible(true);
                    }}
                  >
                    {t(localMessage.oneTime)}
                  </Radio>
                  <Radio
                    key={SCHEDULE_TYPE.RECURRING}
                    value={SCHEDULE_TYPE.RECURRING}
                    onClick={() => {
                      setIsVisible(false);
                    }}
                    disabled
                  >
                    {t(localMessage.recuring)}
                  </Radio>
                </Radio.Group>
              </Div> */}
              {isVisible ? (
                <>
                  <Div marginY flexTop widthFull>
                    <Row
                      type="flex"
                      align="middle"
                      justify="start"
                      style={{ width: '100%' }}
                    >
                      <Col
                        type="flex"
                        align="left"
                        justify="start"
                        xs={24}
                        lg={12}
                      >
                        <Div widthFull>
                          <Labels asterisk>{t(localMessage.date)}</Labels>
                          <DatePicker
                            name="schedules[0].scheduleDate"
                            value={values.schedules[0].scheduleDate}
                            placeholder={t(localMessage.selectDate)}
                            format="MM/DD/YYYY"
                            disabledDate={DisableDates}
                            disabled={isUpdate}
                            onChange={(date) => {
                              setFieldValue('schedules[0].scheduleDate', date);
                            }}
                          />
                          <ErrorMessage name="schedules[0].scheduleDate" />
                        </Div>
                      </Col>
                      <Col
                        type="flex"
                        align="left"
                        justify="start"
                        xs={24}
                        lg={12}
                      >
                        <Div paddingLeft widthFull>
                          <Labels asterisk>{t(localMessage.startTime)}</Labels>
                          <TimePicker
                            name="schedules[0].scheduleTime"
                            value={values.schedules[0].scheduleTime}
                            placeholder={t(localMessage.startTime)}
                            use12Hours
                            minuteStep={15}
                            disabled={isUpdate}
                            format="h:mm a"
                            onChange={(time) => {
                              setFieldValue('schedules[0].scheduleTime', time);
                            }}
                          />
                          <ErrorMessage name="schedules[0].scheduleTime" />
                        </Div>
                      </Col>
                    </Row>
                  </Div>
                  <Div marginY flexTop widthFull>
                    <Row
                      type="flex"
                      align="middle"
                      justify="start"
                      style={{ width: '100%' }}
                    >
                      <Col
                        type="flex"
                        align="left"
                        justify="start"
                        xs={24}
                        lg={12}
                      >
                        <Labels asterisk>{t(localMessage.timeZone)}</Labels>
                        <TimezoneSelect
                          instanceId="timezone"
                          placeholder={t(localMessage.selectTimeZone)}
                          name="timezone"
                          value={values.timezone}
                          isDisabled={isUpdate}
                          onChange={(zone) => {
                            setFieldValue('timezone', zone);
                          }}
                          style={{ height: 50 }}
                        />
                        {errors.timezone ? (
                          <DisplayError error={errors.timezone.label} />
                        ) : null}
                      </Col>
                      <Col
                        type="flex"
                        align="left"
                        justify="start"
                        xs={24}
                        lg={12}
                        style={{ paddingTop: 10 }}
                      >
                        <Div widthFull paddingLeft>
                          <Labels asterisk>{t(localMessage.duration)}</Labels>
                          <Row gutter={30}>
                            <Col span={12}>
                              <Field
                                name="durationHour"
                                component={Select}
                                suffixIcon={<CaretDownFilled />}
                                defaultValue={values.durationHour}
                                disabled={isUpdate}
                                onChange={(val) => {
                                  setFieldValue('durationHour', val);
                                }}
                              >
                                <Option key="" value="" disabled>
                                  {t(localMessage.hourSelect)}
                                </Option>
                                {Array.from(Array(11), (_, i) => (
                                  <Option
                                    key={i}
                                    value={i}
                                    disabled={
                                      zoomAccountType ===
                                      ZOOM_ACCOUNT_TYPE.BASIC
                                    }
                                  >
                                    {i}
                                  </Option>
                                ))}
                              </Field>{' '}
                              {/* {t(localMessage.hour)}{' '} */}
                              <ErrorMessage name="durationHour" />
                            </Col>
                            <Col span={12}>
                              <Field
                                name="durationMinute"
                                component={Select}
                                suffixIcon={<CaretDownFilled />}
                                defaultValue={values.durationMinute}
                                disabled={isUpdate}
                                onChange={(val) => {
                                  setFieldValue('durationMinute', val);
                                }}
                              >
                                <Option key="" value="" disabled>
                                  {t(localMessage.minutesSelect)}
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
                              {/* {t(localMessage.minutes)}{' '} */}
                              <ErrorMessage name="durationMinute" />
                            </Col>
                          </Row>
                        </Div>
                      </Col>
                    </Row>
                  </Div>
                </>
              ) : (
                <>
                  <Div marginY widthFull style={{ margin: '30px 0 20px 20px' }}>
                    <Row justify="end" style={{ marginRight: 25 }}>
                      <Button
                        ghost
                        shape="circle"
                        style={{ width: 28, height: 25, padding: 0, margin: 0 }}
                        icon={
                          <CloseSquareOutlined
                            style={{ fontSize: '24px', color: '#FF0033' }}
                          />
                        }
                      ></Button>
                    </Row>
                    <Labels marginBottom with>
                      Session 1
                    </Labels>
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
                        style={{ height: 50 }}
                      />
                      {
                        // ErrorMessage on timezone.label not working.
                      }
                      <ErrorMessage name="timezone.label" />
                      {errors.timezone ? (
                        <div>{errors.timezone.label}</div>
                      ) : null}
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
                  <Div marginY widthFull style={{ margin: '30px 0 20px 20px' }}>
                    <Row justify="end" style={{ marginRight: 25 }}>
                      <Button
                        ghost
                        shape="circle"
                        style={{ width: 28, height: 25, padding: 0, margin: 0 }}
                        icon={
                          <CloseSquareOutlined
                            style={{ fontSize: '24px', color: '#FF0033' }}
                          />
                        }
                      ></Button>
                    </Row>
                    <Labels marginBottom with>
                      Session 2
                    </Labels>
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
                      {errors.timezone ? (
                        <div>{errors.timezone.label}</div>
                      ) : null}
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
                  <Row align="middle" justify="start">
                    <Labels textBlue bold>
                      <Button addBtn>
                        <PlusSquareFilled />
                        Add another session
                      </Button>
                    </Labels>
                  </Row>
                </>
              )}
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
  isUpdate: PropTypes.bool,
};
