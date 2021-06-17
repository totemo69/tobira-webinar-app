import { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useTranslation } from 'next-i18next';
import { message } from 'antd';

import { LOADING_PREFIX } from '@/utils/constants';
import { makeSelectLoading, makeSelectError } from '@/states/global/selector';
import { getZoomAccount } from '@/states/accounts/actions';
import { makeSelectAccountList } from '@/states/accounts/selector';
import { makeSelectWebinarForm } from '@/states/webinar/selector';
import { withAuthSync } from '@/lib/auth';

import localMessage from '@/messages/createProfile';

import RegistrationDetails from '@/components/Modules/Webinars/RegistrationDetails';
import PaymentOptions from '@/components/Modules/Webinars/PaymentOptions';
import CreateWebinarPage from '@/components/Modules/Webinars/CreateDetails';

import Div from '@/components/Elements/Div';
import Title from '@/components/Elements/Title';
import Span from '@/components/Elements/Span';
import Card from '@/components/Elements/Card';
import {StyledSteps, StyledStep} from '@/components/Elements/Steps';  
import Button from '@/components/Elements/Button';

export function CreateWebinar({
  getZoomAccounts,
  zoomAccountList,
  webinarFormDetails,
}){
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation();
  const [submitAction, setSubmitAction] = useState();
  const [stats, setStats] = useState(false);
  
  const stat = (e) => {
    console.log(e);
    setStats(e);
  };
  useEffect(() => {
    getZoomAccounts();
  },[]);

  const setSubmitActionWrapper = action => {
    if (!submitAction) {
      // Weird - read this:
      // https://stackoverflow.com/questions/55621212/is-it-possible-to-react-usestate-in-react
      setSubmitAction(() => () => action());
    }
  };
  
  const step = [
    {
      title: t(localMessage.details),
      Content: <CreateWebinarPage
        submitStatus={stat}
        setSubmitForm={setSubmitActionWrapper}
        webinarForm={webinarFormDetails}
        zoomAccounts={zoomAccountList}
      />
    },
    {
      title: t(localMessage.registration),
      Content: <RegistrationDetails webinarForm={webinarFormDetails} />
    },
    {
      title: t(localMessage.paymentOptions),
      Content: <PaymentOptions webinarForm={webinarFormDetails} />
    }
  ];

  const next = async () => {
    console.log(stats);
    submitAction();
    //partial
    if (stats) {
      setCurrent(current +1);
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return(
    <>
      <Div marginBottomLarge flexTop>
        <Title secondary marginRight>Create Webinar {'>'}</Title>
        <Span breadCrumbs>Details</Span>
      </Div>
      <Div widthFull>
        <Card webinarRegistrationCard>
          <StyledSteps current={current}>
            {step.map(item => (
              <StyledStep key={item.title} title={item.title} />
            ))}
          </StyledSteps>

          {step[current].Content}

          {current < step.length - 1 && (
            <Button onClick={() => next()} NextButton type="primary">Next {">"}</Button>
          )}
          {current === step.length - 1 && (
            <Button onClick={() => message.success("Process completed")} NextButton type="primary">Next</Button>
          )}
          {current > 0 && (
            <Button onClick={() => prev()} BackButton>{"<"} Back</Button>
          )}
        </Card>
      </Div>
    </>
  );
}

CreateWebinar.propTypes = {
  getZoomAccounts: PropTypes.func,
  webinarFormDetails: PropTypes.any,
  zoomAccountList:  PropTypes.array,
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  isLoading: makeSelectLoading(LOADING_PREFIX.CREATE_WEBINAR),
  isAccountLoading: makeSelectLoading(LOADING_PREFIX.ACCOUNT),
  zoomAccountList: makeSelectAccountList(),
  errorMessage: makeSelectError(),
  webinarFormDetails: makeSelectWebinarForm(),
});

const mapDispatchProps = (dispatch) => {
  return{
    getZoomAccounts: () => dispatch(getZoomAccount()),
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchProps
);

export default compose(
  withConnect,
  memo,
)(withAuthSync(CreateWebinar));