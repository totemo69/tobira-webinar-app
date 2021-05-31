import { useTranslation } from 'next-i18next';
import globalMessage from '@/messages/global';
import message from '@/messages/header';

import Link from 'next/link';

import Hdr from '@/components/Elements/Header';
import Div from '@/components/Elements/Div';
import Image from '@/components/Elements/Image';
import Dropdown from '@/components/Elements/Dropdown';
import Menu from '@/components/Elements/Menu';

import {
  UserOutlined, WalletFilled, AccountBookFilled,
  CreditCardFilled, LogoutOutlined
} from '@ant-design/icons';

export default function Header() {
  const { t } = useTranslation();

  const MenuItems = (
    <Menu>
      <Menu.Item key="0">
        <Link href="/profile">
          <a><UserOutlined /> {t(globalMessage.profile)}</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link href="/account">
          <a><AccountBookFilled /> {t(message.accounts)}</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href="#">
          <a><CreditCardFilled /> {t(message.purchaseLicense)}</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link href="#">
          <a><WalletFilled /> {t(message.wallet)}</a>
        </Link>
      </Menu.Item>
      <Menu.Divider></Menu.Divider>
      <Menu.Item key="4">
        <Link href="/login">
          <a><LogoutOutlined /> {t(message.logOut)}</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
    
  return (
    <>
      <Hdr noMargin>
        <Div widthFull noMargin right>
          <Image src={"Images/avatar.svg"} alt="Tobira Logo" userImg />
          <Dropdown username="tobirauser" items={MenuItems} />
        </Div>
      </Hdr>
    </>
  );
}