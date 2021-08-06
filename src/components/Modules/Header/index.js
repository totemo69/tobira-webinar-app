/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { memo, useEffect } from 'react';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useRouter } from 'next/router';
import { Col, Row } from 'antd';
import Link from 'next/link';
import NextImage from 'next/image';
import globalMessage from '@/messages/global';
import message from '@/messages/header';
import { WEBINAR_ROUTE } from '@/utils/constants';
import { makeSelectProfileDetails } from '@/states/profiles/selector';
import { getProfile } from '@/states/profiles/action';
import Hdr from '@/components/Elements/Header';
import Div from '@/components/Elements/Div';
import Image from '@/components/Elements/Image';
import Dropdown from '@/components/Elements/Dropdown';
import Menu from '@/components/Elements/Menu';
import Language from '@/components/Modules/Language';
import { logout } from '@/lib/auth';

import {
  UserOutlined,
  WalletFilled,
  AccountBookFilled,
  // CreditCardFilled,
  LogoutOutlined,
} from '@ant-design/icons';

export function Header({
  fetchProfile,
  userDetails,
  withLogo = false,
  withMenu = true,
}) {
  const { t } = useTranslation();
  const route = useRouter();
  const { locale } = route;
  useEffect(() => {
    fetchProfile();
  }, []);

  const MenuItems = (
    <Menu className="profile-dropdown">
      <Menu.Item key="0">
        <Link href={WEBINAR_ROUTE.PROFILE}>
          <a>
            <UserOutlined /> {t(globalMessage.profile)}
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link href={WEBINAR_ROUTE.ZOOM_ACCOUNT}>
          <a>
            <AccountBookFilled /> {t(message.accounts)}
          </a>
        </Link>
      </Menu.Item>
      {/* <Menu.Item key="2">
        <Link href={WEBINAR_ROUTE.PURCHASE_LICENSE}>
          <a>
            <CreditCardFilled /> {t(message.purchaseLicense)}
          </a>
        </Link>
      </Menu.Item> */}
      <Menu.Item key="3">
        <Link href={WEBINAR_ROUTE.WALLET}>
          <a>
            <WalletFilled /> {t(message.wallet)}
          </a>
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="4">
        <Link href={WEBINAR_ROUTE.LOGIN}>
          <a href="#" role="button" onClick={logout}>
            <LogoutOutlined /> {t(message.logOut)}
          </a>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Hdr noMargin>
        <Div
          widthFull
          noMargin
          flexSpaceBetween={withLogo}
          flexCenterEnd={!withLogo}
          style={{ 'min-height': '65px;' }}
        >
          {withLogo && (
            <NextImage
              src="/images/logo.svg"
              alt="Tobira Webinar Logo"
              width={200}
              height={36}
            />
          )}
          {withMenu && (
            <>
              <Row type="flex" align="middle">
                <Col type="flex" align="middle" style={{ marginBottom: '7px' }}>
                  <Image
                    src={userDetails.profileImage ?? '/images/avatar.svg'}
                    userImg
                  />
                  <Dropdown
                    username={userDetails && userDetails.username}
                    items={MenuItems}
                  />
                </Col>
                <Col type="flex" align="middle">
                  <Language locale={locale} route={route} />
                </Col>
              </Row>
            </>
          )}
        </Div>
      </Hdr>
    </>
  );
}

Header.propTypes = {
  fetchProfile: PropTypes.func,
  userDetails: PropTypes.any,
  withLogo: PropTypes.bool,
  withMenu: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  userDetails: makeSelectProfileDetails(),
});

const mapDispatchProps = (dispatch) => ({
  fetchProfile: () => dispatch(getProfile()),
});

const withConnect = connect(mapStateToProps, mapDispatchProps);

export default compose(withConnect, memo)(Header);
