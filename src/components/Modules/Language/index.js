import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import { StyledSelect } from '@/components/Elements/Select/SimpleSelect';
import globalMessage from '@/messages/global';

const { Option } = StyledSelect;

const Language = ({ locale, route }) => {
  const { t } = useTranslation();
  const { slug } = route.query;
  const onChange = (val) => {
    if (slug) {
      route.push(
        route.pathname.replace('[slug]', slug),
        route.pathname.replace('[slug]', slug),
        { locale: val },
      );
    } else {
      route.push(route.pathname, route.pathname, { locale: val });
    }
  };
  return (
    <StyledSelect onChange={onChange} defaultValue={locale} bordered={false}>
      <Option value="en">
        <img src="/images/united-states-flag-icon.png" alt="english" />{' '}
        {t(globalMessage.english)}
      </Option>
      <Option value="ja">
        <img src="/images/japan-flag-icon.png" alt="japanese" />{' '}
        {t(globalMessage.japanese)}
      </Option>
    </StyledSelect>
  );
};
Language.propTypes = {
  locale: PropTypes.any,
  route: PropTypes.any,
};
export default Language;
