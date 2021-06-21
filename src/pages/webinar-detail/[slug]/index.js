import React from 'react';
import Head from 'next/head';
import DetailLayout from '@/components/Layouts/WebinarDetail';
import Detail from '@/components/Templates/Detail';
import WebinarDetailService from '../../../service/WebinarDetailService';

const WebinarDetail = ({ postDetail }) => (
  <DetailLayout>
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
    <Detail postDetail={postDetail} />
  </DetailLayout>
);

WebinarDetail.getInitialProps = async ({ query }) => {
  const page = await WebinarDetailService.getWebinarDetail(query.slug);
  console.log('Page', page);
  return {
    postDetail: {
      ...page,
      coverImage: '/images/dummy.jpeg',
      schedules: [
        'April 26 　Mon 　09:00 AM (GMT +9:00)',
        'April 26 　Mon 　10:00 AM (GMT +9:00)',
        'April 26 　Mon 　11:00 AM (GMT +9:00)',
        'April 26 　Mon 　12:00 PM (GMT +9:00)',
      ],
    },
  };
};
export default WebinarDetail;
