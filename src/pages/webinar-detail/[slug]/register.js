import React from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import RegisterLayout from '@/components/Layouts/WebinarDetail/register';
import Register from '@/components/Templates/Detail/register';
import WebinarDetailService from '../../../service/WebinarDetailService';

const WebinarDetail = ({ postDetail }) => (
  <RegisterLayout>
    <Head>
      <title>{postDetail.title}</title>
      <meta name="description" content={postDetail.title} />
      <meta property="og:title" content={postDetail.title} key="title" />
      <meta
        property="og:description"
        content="My page title"
        key="description"
      />
    </Head>
    <Register />
  </RegisterLayout>
);

export default WebinarDetail;

export async function getStaticProps({ params, locale }) {
  const page = await WebinarDetailService.getWebinarDetail(params.slug);
  console.log('Page', page);
  return {
    props: {
      postDetail: {
        ...page,
        coverImage: '/images/dummy.jpeg',
      },
      ...(await serverSideTranslations(locale, ['translation'])),
    },
    revalidate: 60 * 60, // In seconds
  };
}

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
