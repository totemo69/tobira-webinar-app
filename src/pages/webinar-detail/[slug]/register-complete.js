import Head from 'next/head';
import { useRouter } from 'next/router';
import { WEBINAR_ROUTE } from '@/utils/constants';
import RegisterLayout from '@/components/Layouts/WebinarDetail/register';
import Complete from '@/components/Modules/Detail/Complete';

const RegisterComplete = ({ postDetail }) => {
  const route = useRouter();
  const { slug } = route.query;
  const onClick = () => {
    route.push(`${WEBINAR_ROUTE.WEBINAR_DETAIL}/${slug}`);
  };

  return (
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
      <Complete gotoDetails={onClick} />
    </RegisterLayout>
  );
};

RegisterComplete.getInitialProps = () => ({
  postDetail: {
    title: 'Wealth & Asset Management in Tough Times',
    coverImage: '/images/dummy.jpeg',
    author: 'Yamazaki Kento',
    schedules: [
      'April 26 　Mon 　09:00 AM (GMT +9:00)',
      'April 26 　Mon 　10:00 AM (GMT +9:00)',
      'April 26 　Mon 　11:00 AM (GMT +9:00)',
      'April 26 　Mon 　12:00 PM (GMT +9:00)',
    ],
  },
});
export default RegisterComplete;
