import React, { useState } from 'react';
import NextImage from 'next/image';
import { Row, Col, Typography } from 'antd';
import Button from '@/components/Elements/Button';
import CustomIcon from '@/components/Elements/Icon';
import Schedule from '@/components/Modules/Detail/Schedule';
import Information from '@/components/Modules/Detail/Information';
import ShareModal from '@/components/Modules/Detail/ShareModal';
import classNames from './Detail.module.css';

const { Title, Text, Paragraph } = Typography;

export default function Detail({ postDetail }) {
  const [isShareVisible, setShareVisible] = useState(false);
  console.log('postDetail', postDetail);
  return (
    <>
      <Row className={classNames.detailRow}>
        <Col lg={11} className={classNames.detailCol} xs={24}>
          <NextImage
            src={postDetail.coverImage}
            alt="Course Detail"
            layout="fill"
            loading="lazy"
            className={classNames.heroImage}
          />
        </Col>
        <Col lg={12} offset={1} xs={22}>
          <Title level={1} className={classNames.title}>
            {postDetail.title}
          </Title>

          <Row align="middle">
            <Col span={12} xs={16}>
              <Button
                type="default"
                icon={<CustomIcon src="/images/share.svg" />}
                smallBtn
                noBoxShadow
                onClick={() => setShareVisible(!isShareVisible)}
              >
                {' '}
                Share
              </Button>
            </Col>
            <Col span={12} xs={8}>
              <Text className={classNames.authorBy}>by</Text>{' '}
              {postDetail.author}
            </Col>
          </Row>

          <Row className={classNames.rowSpacing}>
            <Schedule schedules={postDetail.schedules} />
          </Row>
          <Row>
            <Information />
          </Row>
          <Row className={classNames.registerBtnRow}>
            <Col span={24}>
              <Button type="primary" noBoxShadow fullwidth noMargin>
                Register Now
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className={classNames.rowSpacing}>
        <Col
          lg={{
            span: 24,
            offset: 0,
          }}
          xs={{
            span: 22,
            offset: 1,
          }}
        >
          <Title level={2} className={classNames.descriptionHeader}>
            Description
          </Title>
          <Paragraph className={classNames.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus
            urna duis convallis convallis. Urna molestie at elementum eu.
            Blandit libero volutpat sed cras ornare arcu dui vivamus. Nunc id
            cursus metus aliquam. Quam vulputate dignissim suspendisse in est.
            Lectus proin nibh nisl condimentum id venenatis a condimentum vitae.
            Vulputate enim nulla aliquet porttitor lacus luctus. Id interdum
            velit laoreet id donec ultrices tincidunt. Libero nunc consequat
            interdum varius sit amet. In egestas erat imperdiet sed euismod.
            Elementum integer enim neque volutpat ac tincidunt vitae. Mauris
            ultrices eros in cursus turpis. Augue lacus viverra vitae congue eu
            consequat ac felis donec. Consequat ac felis donec et odio. Turpis
            cursus in hac habitasse platea dictumst quisque. Lectus magna
            fringilla urna porttitor rhoncus dolor purus non. At tempor commodo
            ullamcorper a lacus vestibulum sed. Pellentesque massa placerat duis
            ultricies lacus sed turpis. Eget egestas purus viverra accumsan in.
            Lectus urna duis convallis convallis tellus id interdum velit.
            Sollicitudin ac orci phasellus egestas tellus rutrum. Urna duis
            convallis convallis tellus id interdum velit laoreet. Interdum
            varius sit amet mattis vulputate enim. A iaculis at erat
            pellentesque. Enim nulla aliquet porttitor lacus luctus accumsan
            tortor. Cras sed felis eget velit aliquet sagittis. Enim blandit
            volutpat maecenas volutpat blandit aliquam etiam. Fusce id velit ut
            tortor pretium viverra suspendisse. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Lectus urna duis convallis convallis.
            Urna molestie at elementum eu. Blandit libero volutpat sed cras
            ornare arcu dui vivamus. Nunc id cursus metus aliquam. Quam
            vulputate dignissim suspendisse in est. Lectus proin nibh nisl
            condimentum id venenatis a condimentum vitae. Vulputate enim nulla
            aliquet porttitor lacus luctus. Id interdum velit laoreet id donec
            ultrices tincidunt. Libero nunc consequat interdum varius sit amet.
            In egestas erat imperdiet sed euismod. Elementum integer enim neque
            volutpat ac tincidunt vitae. Mauris ultrices eros in cursus turpis.
            Augue lacus viverra vitae congue eu consequat ac felis donec.
            Consequat ac felis donec et odio. Turpis cursus in hac habitasse
            platea dictumst quisque. Lectus magna fringilla urna porttitor
            rhoncus dolor purus non. At tempor commodo ullamcorper a lacus
            vestibulum sed. Pellentesque massa placerat duis ultricies lacus sed
            turpis. Eget egestas purus viverra accumsan in. Lectus urna duis
            convallis convallis tellus id interdum velit. Sollicitudin ac orci
            phasellus egestas tellus rutrum. Urna duis convallis convallis
            tellus id interdum velit laoreet. Interdum varius sit amet mattis
            vulputate enim. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Lectus urna duis convallis convallis. Urna molestie at
            elementum eu. Blandit libero volutpat sed cras ornare arcu dui
            vivamus. Nunc id cursus metus aliquam. Quam vulputate dignissim
            suspendisse in est. Lectus proin nibh nisl condimentum id venenatis
            a condimentum vitae. Vulputate enim nulla aliquet porttitor lacus
            luctus. Id interdum velit laoreet id donec ultrices tincidunt.
            Libero nunc consequat interdum varius sit amet. In egestas erat
            imperdiet sed euismod. Elementum integer enim neque volutpat ac
            tincidunt vitae. Mauris ultrices eros in cursus turpis. Augue lacus
            viverra vitae congue eu consequat ac felis donec. Consequat ac felis
            donec et odio. Turpis cursus in hac habitasse platea dictumst
            quisque. Lectus magna fringilla urna porttitor rhoncus dolor purus
            non. At tempor commodo ullamcorper a lacus vestibulum sed.
            Pellentesque massa placerat duis ultricies lacus sed turpis. Eget
            egestas purus viverra accumsan in. Lectus urna duis convallis
            convallis tellus id interdum velit. Sollicitudin ac orci phasellus
            egestas tellus rutrum. Urna duis convallis convallis tellus id
            interdum velit laoreet. Interdum varius sit amet mattis vulputate
            enim. A iaculis at erat pellentesque. Enim nulla aliquet porttitor
            lacus luctus accumsan tortor. Cras sed felis eget velit aliquet
            sagittis. Enim blandit volutpat maecenas volutpat blandit aliquam
            etiam. Fusce id velit ut tortor pretium viverra suspendisse. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lectus urna duis
            convallis convallis. Urna molestie at elementum eu. Blandit libero
            volutpat sed cras ornare arcu dui vivamus. Nunc id cursus metus
            aliquam. Quam vulputate dignissim suspendisse in est. Lectus proin
            nibh nisl condimentum id venenatis a condimentum vitae. Vulputate
            enim nulla aliquet porttitor lacus luctus. Id interdum velit laoreet
            id donec ultrices tincidunt. Libero nunc consequat interdum varius
            sit amet.
          </Paragraph>
          <Paragraph className={classNames.paragraph}>
            At tempor commodo ullamcorper a lacus vestibulum sed. Pellentesque
            massa placerat duis ultricies lacus sed turpis. Eget egestas purus
            viverra accumsan in. Lectus urna duis convallis convallis tellus id
            interdum velit. Sollicitudin ac orci phasellus egestas tellus
            rutrum. Urna duis convallis convallis tellus id interdum velit
            laoreet. Interdum varius sit amet mattis vulputate enim. A iaculis
            at erat pellentesque. Enim nulla aliquet porttitor lacus luctus
            accumsan tortor. Cras sed felis eget velit aliquet sagittis. Enim
            blandit volutpat maecenas volutpat blandit aliquam etiam. Fusce id
            velit ut tortor pretium viverra suspendisse.
          </Paragraph>
          <Paragraph className={classNames.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus
            urna duis convallis convallis. Urna molestie at elementum eu.
            Blandit libero volutpat sed cras ornare arcu dui vivamus. Nunc id
            cursus metus aliquam. Quam vulputate dignissim suspendisse in est.
            Lectus proin nibh nisl condimentum id venenatis a condimentum vitae.
            Vulputate enim nulla aliquet porttitor lacus luctus. Id interdum
            velit laoreet id donec ultrices tincidunt. Libero nunc consequat
            interdum varius sit amet. In egestas erat imperdiet sed euismod.
            Elementum integer enim neque volutpat ac tincidunt vitae. Mauris
            ultrices eros in cursus turpis. Augue lacus viverra vitae congue eu
            consequat ac felis donec. Consequat ac felis donec et odio. Turpis
            cursus in hac habitasse platea dictumst quisque. Lectus magna
            fringilla urna porttitor rhoncus dolor purus non.
          </Paragraph>
          <Paragraph className={classNames.paragraph}>
            At tempor commodo ullamcorper a lacus vestibulum sed. Pellentesque
            massa placerat duis ultricies lacus sed turpis. Eget egestas purus
            viverra accumsan in. Lectus urna duis convallis convallis tellus id
            interdum velit. Sollicitudin ac orci phasellus egestas tellus
            rutrum. Urna duis convallis convallis tellus id interdum velit
            laoreet. Interdum varius sit amet mattis vulputate enim. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lectus urna duis
            convallis convallis. Urna molestie at elementum eu. Blandit libero
            volutpat sed cras ornare arcu dui vivamus. Nunc id cursus metus
            aliquam. Quam vulputate dignissim suspendisse in est. Lectus proin
            nibh nisl condimentum id venenatis a condimentum vitae. Vulputate
            enim nulla aliquet porttitor lacus luctus. Id interdum velit laoreet
            id donec ultrices tincidunt. Libero nunc consequat interdum varius
            sit amet. In egestas erat imperdiet sed euismod. Elementum integer
            enim neque volutpat ac tincidunt vitae. Mauris ultrices eros in
            cursus turpis. Augue lacus viverra vitae congue eu consequat ac
            felis donec. Consequat ac felis donec et odio. Turpis cursus in hac
            habitasse platea dictumst quisque. Lectus magna fringilla urna
            porttitor rhoncus dolor purus non. At tempor commodo ullamcorper a
            lacus vestibulum sed. Pellentesque massa placerat duis ultricies
            lacus sed turpis. Eget egestas purus viverra accumsan in. Lectus
            urna duis convallis convallis tellus id interdum velit. Sollicitudin
            ac orci phasellus egestas tellus rutrum. Urna duis convallis
            convallis tellus id interdum velit laoreet. Interdum varius sit amet
            mattis vulputate enim. A iaculis at erat pellentesque. Enim nulla
            aliquet porttitor lacus luctus accumsan tortor. Cras sed felis eget
            velit aliquet sagittis. Enim blandit volutpat maecenas volutpat
            blandit aliquam etiam. Fusce id velit ut tortor pretium viverra
            suspendisse. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Lectus urna duis convallis convallis. Urna molestie at
            elementum eu. Blandit libero volutpat sed cras ornare arcu dui
            vivamus. Nunc id cursus metus aliquam. Quam vulputate dignissim
            suspendisse in est. Lectus proin nibh nisl condimentum id venenatis
            a condimentum vitae. Vulputate enim nulla aliquet porttitor lacus
            luctus. Id interdum velit laoreet id donec ultrices tincidunt.
            Libero nunc consequat interdum varius sit amet.
          </Paragraph>
        </Col>
      </Row>

      <ShareModal
        visible={isShareVisible}
        onClose={() => setShareVisible(!isShareVisible)}
      />
    </>
  );
}
