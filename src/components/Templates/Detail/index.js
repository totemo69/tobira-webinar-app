import React, { useState } from 'react';
import NextImage from 'next/image';
import { useRouter } from 'next/router';
import { Row, Col, Typography } from 'antd';
import { useTranslation } from 'next-i18next';
import { WEBINAR_ROUTE } from '@/utils/constants';
import localMessage from '@/messages/webinarDetail';

import Button from '@/components/Elements/Button';
import CustomIcon from '@/components/Elements/Icon';
import Information from '@/components/Modules/Detail/Information';
import ShareModal from '@/components/Modules/Detail/ShareModal';
import classNames from './Detail.module.css';

const { Title, Text, Paragraph } = Typography;

export default function Detail({ postDetail }) {
  const { t } = useTranslation();
  const route = useRouter();
  const [isShareVisible, setShareVisible] = useState(false);
  const onRegister = () => {
    route.push(`${WEBINAR_ROUTE.WEBINAR_DETAIL}/${postDetail.slug}/register`);
  };
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
                {t(localMessage.shareButton)}
              </Button>
            </Col>
            <Col span={12} xs={8}>
              <Text className={classNames.authorBy}>
                {t(localMessage.author)}
              </Text>{' '}
              {postDetail.author}
            </Col>
          </Row>

          <Row className={classNames.rowSpacing}>
            {/* <Schedule schedules={postDetail.schedules} /> */}
          </Row>
          <Row>
            <Information postDetail={postDetail} />
          </Row>
          <Row className={classNames.registerBtnRow}>
            <Col span={24}>
              <Button
                onClick={onRegister}
                type="primary"
                noBoxShadow
                fullwidth
                noMargin
              >
                {t(localMessage.registerButton)}
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
            {t(localMessage.descriptionLabel)}
          </Title>
          <Paragraph className={classNames.paragraph}>
            {postDetail.description}
          </Paragraph>
        </Col>
      </Row>

      <ShareModal
        visible={isShareVisible}
        onClose={() => setShareVisible(!isShareVisible)}
        slug={postDetail.slug}
      />
    </>
  );
}
