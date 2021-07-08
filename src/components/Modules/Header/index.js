/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import NextImage from 'next/image';
import globalMessage from '@/messages/global';
import message from '@/messages/header';
import { WEBINAR_ROUTE } from '@/utils/constants';
import Hdr from '@/components/Elements/Header';
import Div from '@/components/Elements/Div';
import Image from '@/components/Elements/Image';
import Dropdown from '@/components/Elements/Dropdown';
import Menu from '@/components/Elements/Menu';
import { logout } from '@/lib/auth';

import {
  UserOutlined,
  WalletFilled,
  AccountBookFilled,
  CreditCardFilled,
  LogoutOutlined,
} from '@ant-design/icons';

export default function Header({ withLogo = false, withMenu = true }) {
  const { t } = useTranslation();

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
      <Menu.Item key="2">
        <Link href={WEBINAR_ROUTE.PURCHASE_LICENSE}>
          <a>
            <CreditCardFilled /> {t(message.purchaseLicense)}
          </a>
        </Link>
      </Menu.Item>
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
              <Image
                src="/images/avatar.svg"
                alt="Picture of the user"
                userImg
              />
              <Dropdown username="tobirauser" items={MenuItems} />
            </>
          )}
        </Div>
      </Hdr>
    </>
  );
}
