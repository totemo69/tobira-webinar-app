
import React from 'react';
import Head from 'next/head';
import DetailLayout from '@/components/Layouts/WebinarDetail';
import Detail from '@/components/Templates/Detail';

const WebinarDetail = () =>{
  return(
    <DetailLayout>
      <Head>
        <title>My page title</title>
        <meta name="description"  content="My page title"/>
        <meta property="og:title" content="My page title" key="title" />
        <meta property="og:description" content="My page title" key="description" />
      </Head>
      <Detail />
    </DetailLayout>
  );
};


export default WebinarDetail;