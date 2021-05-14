// import { useTranslation } from 'next-i18next';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// import globalMessage from '@/messages/global';

import Link from 'next/link';

import Hdr from '@/components/Elements/Header';
import Div from '@/components/Elements/Div';
import Image from '@/components/Elements/Image';
import DropDown from '@/components/Elements/DropDown';
import Menu from '@/components/Elements/Menu';

import {
  UserOutlined, WalletFilled, AccountBookFilled,
  CreditCardFilled, LogoutOutlined
} from '@ant-design/icons';

export default function Header() {
  // const { t } = useTranslation();

  const MenuItems = (
    <Menu>
      <Menu.Item key="0">
        <Link href="/Profile-example">
          <a><UserOutlined /> Profile</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link href="#">
          <a><AccountBookFilled /> Account</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href="#">
          <a><CreditCardFilled /> Purchase License</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link href="#">
          <a><WalletFilled /> Wallet</a>
        </Link>
      </Menu.Item>
      <Menu.Divider></Menu.Divider>
      <Menu.Item key="4">
        <Link href="/Login-example">
          <a><LogoutOutlined /> Log out</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
    
  return (
    <>
      <Hdr noMargin>
        <Div widthFull noMargin right>
          <Image src={"Images/avatar.svg"} alt="Tobira Logo" userImg />
          <DropDown username="tobirauser" items={MenuItems} />
        </Div>
      </Hdr>
    </>
  );
}

// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...await serverSideTranslations(locale, ['translation']),
//   },
// });