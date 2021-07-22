import { useState, useEffect, memo } from 'react';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Row, Col } from 'antd';
import { withAuthSync } from '@/lib/auth';
// import { LOADING_PREFIX } from '@/utils/constants';
import localMessage from '@/messages/plan';
// import { makeSelectLoading, makeSelectError } from '@/states/global/selector';
import { makeSelectPlanList } from '@/states/plans/selector';
import { getPlans } from '@/states/plans/action';
import Layout from '@/components/Layouts/Home';
import Title from '@/components/Elements/Title';
import Span from '@/components/Elements/Span';
import Div from '@/components/Elements/Div';
import Button from '@/components/Elements/Button';
import { ProfessionalConfirm } from '@/components/Modules/Modals';

export function PurchaseLicense({ fetchPlans, planList }) {
  const { t } = useTranslation();

  useEffect(() => {
    fetchPlans();
  }, []);

  const [isModalVisibleConfirm, setIsmModalVisibleConfirm] = useState(false);

  return (
    <>
      <Layout>
        <Div marginBottomLarge flexTop>
          <Title secondary marginRight>
            {t(localMessage.title)} {'>'}{' '}
          </Title>
          <Span breadCrumbs> {t(localMessage.subTitle)}</Span>
        </Div>

        <Div widthFull center>
          <Title level={5} textColorBlue marginRight>
            {t(localMessage.header)}
          </Title>
        </Div>
        {planList && (
          <Div style={{ textAlign: 'center', width: '100%' }}>
            <Row className="selectPlan" gutter={20}>
              <Col offset={6}>
                <Div standardLayout>
                  <Div bannerPlain>
                    <Title level={5} textColorBlue marginRight>
                      STANDARD
                    </Title>
                  </Div>
                  <Div bannerCenter>
                    <Title level={3} textColorBlue marginRight>
                      100 <Span breadCrumbs>/month</Span>{' '}
                    </Title>
                  </Div>

                  <Div
                    style={{
                      textAlign: 'left',
                      width: '100%',
                      marginTop: '20px',
                    }}
                  >
                    <ul>
                      <li>
                        <Span>Up to 5 webinars</Span>
                      </li>
                      <li>
                        <Span>Monthly schedule</Span>
                      </li>
                    </ul>
                  </Div>

                  <Div bannerPlain>
                    <Button chooseStandard>
                      {t(localMessage.chooseButton)}
                    </Button>
                  </Div>
                </Div>
              </Col>

              <Col>
                <Div professionalLayout>
                  <Div banner>
                    <Title level={5} textColorBlue marginRight>
                      Professional
                    </Title>
                  </Div>

                  <Div bannerCenterPlain>
                    <Title level={3} textColorBlue marginRight>
                      150 <Span breadCrumbs>/annual</Span>{' '}
                    </Title>
                  </Div>

                  <Div bannerBottom>
                    <ul>
                      <li>
                        <Span>Up to 30 webinars</Span>
                      </li>
                      <li>
                        <Span>Advance scheduling up to coming months</Span>
                      </li>
                    </ul>

                    <Div bannerPlain>
                      <Button
                        chooseProfessional
                        onClick={() => setIsmModalVisibleConfirm(true)}
                      >
                        {t(localMessage.chooseButton)}
                      </Button>
                    </Div>
                  </Div>
                </Div>
              </Col>

              <Col>
                <Div standardLayout>
                  <Div bannerPlain>
                    <Title level={5} textColorBlue marginRight>
                      ADVANCE
                    </Title>
                  </Div>

                  <Div bannerCenter>
                    <Title level={3} textColorBlue marginRight>
                      1000 <Span breadCrumbs>/annual</Span>{' '}
                    </Title>
                  </Div>

                  <Div
                    style={{
                      textAlign: 'left',
                      width: '100%',
                      marginTop: '20px',
                    }}
                  >
                    <ul>
                      <li>
                        <Span>Up to 30 webinars</Span>
                      </li>
                      <li>
                        <Span>Advance scheduling up to coming months</Span>
                      </li>
                    </ul>
                  </Div>

                  <Div bannerPlain>
                    <Button chooseAdvance>
                      {t(localMessage.chooseButton)}
                    </Button>
                  </Div>
                </Div>
              </Col>
            </Row>
          </Div>
        )}
      </Layout>
      <ProfessionalConfirm
        isVisible={isModalVisibleConfirm}
        close={() => setIsmModalVisibleConfirm(false)}
      />
    </>
  );
}

PurchaseLicense.propTypes = {
  fetchPlans: PropTypes.func,
  planList: PropTypes.any,
  // isLoding: PropTypes.bool,
  // errorMessage: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  planList: makeSelectPlanList(),
  // isLoading: makeSelectLoading(LOADING_PREFIX.PLAN),
  // errorMessage: makeSelectError(),
});

const mapDispatchProps = (dispatch) => ({
  fetchPlans: () => dispatch(getPlans()),
});

const withConnect = connect(mapStateToProps, mapDispatchProps);

export default compose(withConnect, memo)(withAuthSync(PurchaseLicense));

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['translation'])),
  },
});
