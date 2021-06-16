import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import DefaultLayout from '@/components/Layouts/Home';
import Templates from '@/components/Templates/Webinars';

export default function CreateWebinar(){
  return(
    <DefaultLayout>
      <Templates />
    </DefaultLayout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['translation']),
  },
});