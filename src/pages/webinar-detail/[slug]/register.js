
import React from 'react';
import Head from 'next/head';
import DetailLayout from '@/components/Layouts/WebinarDetail';
import Register from '@/components/Templates/Detail/register';

const WebinarDetail = ({postDetail}) =>{
  return(
    <DetailLayout>
      <Head>
        <title>{postDetail.title}</title>
        <meta name="description"  content={postDetail.title}/>
        <meta property="og:title" content={postDetail.title} key="title" />
        <meta property="og:description" content="My page title" key="description" />
      </Head>
      <Register>REGISTER</Register>
    </DetailLayout>
  );
};

WebinarDetail.getInitialProps = () => {
  return { 
    postDetail: {
      title: "Wealth & Asset Management in Tough Times",
      coverImage: "/images/dummy.jpeg",
      author: "Yamazaki Kento",
      schedules:[
        "April 26 　Mon 　09:00 AM (GMT +9:00)",
        "April 26 　Mon 　10:00 AM (GMT +9:00)",
        "April 26 　Mon 　11:00 AM (GMT +9:00)",
        "April 26 　Mon 　12:00 PM (GMT +9:00)"
      ]
    } 
  };
};
export default WebinarDetail;