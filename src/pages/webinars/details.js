import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Layout from '@/components/Layouts/Home';
import Details from '@/components/Templates/Webinars/details';

export default function WebinarPageDetails() {
  return (
    <Layout>
      <Details />
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['translation'])),
  },
});
