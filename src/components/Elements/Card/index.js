/**
 *
 * Card
 *
 */

import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Card } from 'antd';

const StyledCard = styled(Card).withConfig({
  shouldForwardProp: (prop) =>
    ![
      'PaddingTop',
      'ProfileCard',
      'ProfileSettings',
      'TermsAndPrivacy',
      'webinarRegistrationCard',
    ].includes(prop),
})`
  .ant-card-head-title {
    padding: 10px 0 0 0;
  }
  .ant-card-body {
    padding: 0 24px 24px 24px;
  }

  @media screen and (max-width: 768px) {
    .ant-card-body {
      padding: 10px;
    }
    margin-top: 20px;
  }

  width: 100%;
  margin-top: 4px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px #00000029;

  ${(props) =>
    props.PaddingTop &&
    css`
      padding-top: 20px;
    `};

  ${(props) =>
    props.webinarRegistrationCard &&
    css`
      min-height: 565px;
    `};

  ${(props) =>
    props.ProfileCard &&
    css`
      margin-right: 1.5rem;
      width: 41.666667%;
      height: 565px;
      border-radius: 10px;
      box-shadow: 0px 2px 4px #00000029;

      .ant-card-body {
        padding: 0;
      }
    `};

  ${(props) =>
    props.TermsAndPrivacy &&
    css`
      margin-left: auto;
      margin-right: auto;
      width: 840px;
      height: auto;
      border-radius: 8px;
      box-shadow: 0px 1px 2px #00000029;

      .ant-card-body {
        padding: 1.5rem 1.5rem 0;
      }
    `};

  ${(props) =>
    props.ProfileSettings &&
    css`
      width: 100%;
      height: 565px;
      border-radius: 10px;
      box-shadow: 0px 2px 4px #00000029;

      .ant-card-body {
        display: flex;
        flex-flow: column;
        height: 100%;
        padding: 0;
      }
    `};
`;

const StyledMeta = styled(Card.Meta)`
  padding: 10px;
`;

StyledCard.propTypes = {
  PaddingTop: PropTypes.any,
};
StyledMeta.propTypes = {};

export default StyledCard;
