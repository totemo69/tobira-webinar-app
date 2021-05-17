import Layout from '@/components/Layouts/Guest';
import Div from '@/components/Elements/Div';
import Image from '@/components/Elements/Image';
import Title from '@/components/Elements/Title';
import ButtonLink from '@/components/Elements/ButtonLink';
import Button from '@/components/Elements/Button';

export default function RegisterVerified() {
  return (
    <>
      <Layout>
        <Div widthFull marginTopXLarge center>
          <Image src={"Images/logo.svg"} alt="Tobira Logo" logo />
        </Div>
        <Div marginTop widthFull center>
          <Image src={"Images/success.svg"} alt="Tobira Logo" successImg />
          <Title secondary2 marginBottom>Thank You!</Title>
          <p>Your account has been successfully activated.</p>
          <ButtonLink href="/login" element={<Button type="primary" mediumBtn marginTopMedium>Log in</Button>} />
        </Div>
      </Layout>
    </>
  );
}