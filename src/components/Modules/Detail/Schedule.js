/* eslint-disable jsx-a11y/anchor-is-valid */
import { Menu, Dropdown, Typography } from 'antd';
import classNames from './index.module.css';

const { Link } = Typography;

const menu = (schedules) => (
  <Menu>
    <Menu.Item>
      <ul className={classNames.scheduleList}>
        {schedules.map((item, i) => (
          <li
            key={item}
            // For now
            className={i === 2 ? classNames.activeSchedule : ''}
          >
            <time>{item}</time>
          </li>
        ))}
      </ul>
    </Menu.Item>
  </Menu>
);

const Schedule = ({ schedules }) => (
  <Dropdown overlay={menu(schedules)} placement="bottomLeft">
    <Link href="#" underline onClick={(e) => e.preventDefault()}>
      Recurring Event
    </Link>
  </Dropdown>
);

export default Schedule;
