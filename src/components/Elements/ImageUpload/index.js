/* istanbul ignore file */
/**
 *
 * Image Upload
 *
 */

import React, { useState } from 'react';
import { Image, Upload } from 'antd';
import { CameraOutlined, LoadingOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cookie from '@/lib/cookie';
import { API } from '@/utils/constants';

const StyledUpload = styled(Upload)`
  .ant-upload.ant-upload-select-picture-card {
    width: 100%;
    height: 18rem;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 8px;
`;

const StyledOverlay = styled.div`
  position: absolute;
  text-align: center;
  width: 105px;
  height: 105px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
`;

// eslint-disable-next-line react/prop-types
const OverLay = ({ loading }) => (
  <StyledOverlay>
    {loading ? (
      <LoadingOutlined style={{ fontSize: '2em', color: '#fffc1c' }} />
    ) : (
      <CameraOutlined style={{ fontSize: '2em', color: '#fffc1c' }} />
    )}
  </StyledOverlay>
);

function ImageUpload({ alt, src, onUploadComplete, ...props }) {
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState(src);
  const [accessToken] = Cookie.getAccessToken();

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setUploading(true);
    }
    if (info.file.status === 'done') {
      if (onUploadComplete) {
        const { response } = info.file;
        const { Location } = response;
        onUploadComplete(Location);
        setImage(Location);
      }
      setUploading(false);
    }
  };
  return (
    <StyledUpload
      name="image"
      listType="picture-card"
      headers={{
        Authorization: `Bearer ${accessToken}`,
      }}
      data={{
        type: 'profile',
      }}
      showUploadList={false}
      action={API.UPLOAD}
      onChange={handleChange}
    >
      <StyledImage
        alt={alt}
        src={image}
        preview={false}
        iconLg
        {...props}
        height={310}
      />
      <OverLay loading={uploading} />
    </StyledUpload>
  );
}

ImageUpload.propTypes = {
  src: PropTypes.any,
  alt: PropTypes.string,
  onUploadComplete: PropTypes.func,
};

export default ImageUpload;
