/* eslint-disable no-irregular-whitespace */
import { Menu, Dropdown, Typography } from 'antd';
import classNames from './index.module.css';
const {Link} = Typography;

const menu = (
  <Menu>
    <Menu.Item>
      <ul className={classNames.scheduleList}>
        <li>
          <time>April 26 　Mon 　09:00 AM (GMT +9:00)</time>
        </li>
        <li className={classNames.activeSchedule}>
          <time>April 26 　Mon 　10:00 AM (GMT +9:00)</time>
        </li>
        <li>
          <time>April 26 　Mon 　11:00 AM (GMT +9:00)</time>
        </li>
        <li>
          <time>April 26 　Mon 　12:00 PM (GMT +9:00)</time>
        </li>                                    
      </ul>
    </Menu.Item>
  </Menu>
);

const Schedule = () => (
  <Dropdown overlay={menu} placement="bottomLeft">
    <Link href="#" underline>Recurring Event</Link>
  </Dropdown>
);

export default Schedule;

