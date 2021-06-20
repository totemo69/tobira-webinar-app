import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { Formik, Field, Form } from 'formik';
import { CaretDownFilled } from '@ant-design/icons';
import Input, { LabelGroup } from '@/components/Elements/Input';
import Labels from '@/components/Elements/Labels';
import Radio from '@/components/Elements/Radio';
import Select from '@/components/Elements/Select';
import Textarea from '@/components/Elements/Textarea';
import Button from '@/components/Elements/Button';
import classNames from './index.module.css';

const WebinarRegistrationForm = ({ nextStep }) => (
  <Formik initialValues={{}} enableReinitialize>
    {() => (
      <Form>
        <LabelGroup spacing="large">
          <Labels asterisk bold>
            Email Address
          </Labels>
          <Field
            type="text"
            name="emailAddress"
            placeholder="Email Address"
            component={Input}
            size="large"
          />
        </LabelGroup>
        <LabelGroup spacing="large">
          <Labels asterisk bold>
            First Name
          </Labels>
          <Field
            type="text"
            name="firstName"
            placeholder="First Name"
            component={Input}
            size="large"
          />
        </LabelGroup>
        <LabelGroup spacing="large">
          <Labels asterisk bold>
            Last Name
          </Labels>
          <Field
            type="text"
            name="lastName"
            placeholder="Last Name"
            component={Input}
            size="large"
          />
        </LabelGroup>
        <LabelGroup spacing="large">
          <Labels asterisk bold>
            Gender
          </Labels>
          <Radio.Group name="gender" size="large">
            <Radio key="male" value="male">
              Male
            </Radio>
            <Radio key="female" value="female">
              Female
            </Radio>
            <Radio key="rather_not_tell" value="rather_not_tell">
              Rather not tell
            </Radio>
          </Radio.Group>
        </LabelGroup>
        <LabelGroup spacing="large">
          <Labels asterisk bold>
            Industry Type
          </Labels>
          <Field
            name="webinarAccount"
            component={Select}
            suffixIcon={<CaretDownFilled />}
            placeholder="Industry Type"
            size="large"
            aria-label="Industry Type"
            role="complementary"
          >
            <Select.Option value="">Select an industry</Select.Option>
          </Field>
        </LabelGroup>
        <LabelGroup spacing="large">
          <Labels asterisk bold>
            Question & Comments
          </Labels>
          <Field
            name="webinarAccount"
            component={Textarea}
            autoSize={{ minRows: 8, maxRows: 8 }}
            showCount
            maxLength={5000}
            placeholder="Question & Comments"
          ></Field>
        </LabelGroup>
        <Row justify="end" className={classNames.spacer}>
          <Col lg={12} xs={24}>
            <Row>
              <Col span={12} className={classNames.registerNext}>
                <Button type="primary" size="large" ghost>
                  {'<'} Back
                </Button>
              </Col>
              <Col span={12} className={classNames.registerNext}>
                <Button type="primary" size="large" onClick={nextStep}>
                  Next {'>'}
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    )}
  </Formik>
);
WebinarRegistrationForm.propTypes = {
  nextStep: PropTypes.func,
};

export default WebinarRegistrationForm;
