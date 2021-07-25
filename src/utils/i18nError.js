import { useTranslation } from 'next-i18next';
import validationMessage from '@/messages/validation';

export default function LocalizeError({
  errorCode,
  joinChar = ' ',
  stringMode = false,
}) {
  const { t } = useTranslation();
  if (!errorCode) {
    return null;
  }

  const additionalMsg = {};
  const getLiterals = errorCode.includes('[')
    ? errorCode.match(/\[(.*?)]/gim)
    : [];

  if (getLiterals.length > 0) {
    getLiterals.forEach((literals) => {
      // eslint-disable-next-line no-useless-escape
      const sanitize = literals.replace(/[\[\]&]+/g, '');
      const [key, value = null] = sanitize.split('=');
      const pathIndex = value && value.match(/\d+$/)[0];
      if (pathIndex !== null && pathIndex !== undefined) {
        additionalMsg[key] = parseInt(pathIndex, 10);
      } else {
        additionalMsg[key] = value;
      }
    });
  }

  const errCodes = errorCode
    .split('.')
    .filter(
      (item) =>
        !getLiterals.includes(item) &&
        !item.startsWith('[') &&
        !item.endsWith(']'),
    );

  const messages = errCodes.map((code) =>
    validationMessage[code]
      ? t(validationMessage[code], additionalMsg)
      : errorCode,
  );
  return !stringMode ? <>{messages.join(joinChar)}</> : messages.join(joinChar);
}
