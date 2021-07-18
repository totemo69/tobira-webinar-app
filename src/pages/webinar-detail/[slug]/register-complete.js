import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { WEBINAR_ROUTE } from '@/utils/constants';
import WebinarDetailService from '../../../service/WebinarDetailService';
import RegisterLayout from '@/components/Layouts/WebinarDetail/register';
import Complete from '@/components/Modules/Detail/Complete';

const RegisterComplete = () => {
  const route = useRouter();
  const { slug } = route.query;
  const onClick = () => {
    route.push(`${WEBINAR_ROUTE.WEBINAR_DETAIL}/${slug}`);
  };

  return (
    <RegisterLayout>
      <Complete gotoDetails={onClick} />
    </RegisterLayout>
  );
};

export default RegisterComplete;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['translation'])),
  },
});

export async function getStaticPaths({ locales }) {
  const webinars = await WebinarDetailService.getWebinarList();
  const paths = locales.map(
    (locale) =>
      webinars?.map((page) => ({
        params: { slug: page.slug, locale },
      })) || [],
  );
  return {
    paths: paths.flat(),
    fallback: 'blocking',
  };
}
