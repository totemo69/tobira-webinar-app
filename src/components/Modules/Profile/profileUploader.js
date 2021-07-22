/* istanbul ignore file */
/**
 *
 * ProfileUploader
 *
 */

import React, { useState } from 'react';
import { Avatar, Upload } from 'antd';
import {
  UserOutlined,
  CameraOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cookie from '@/lib/cookie';
import { API } from '@/utils/constants';

const StyledAvatar = styled(Avatar)`
  margin: auto;
  width: 100px;
  height: 100px;
`;

const StyledUpload = styled(Upload)`
  .ant-upload.ant-upload-select-picture-card {
    border: none;
    margin: 0;
  }
  position: relative;
`;

const StyledOverlay = styled.div`
  position: absolute;
  text-align: center;
  width: 100px;
  height: 100px;
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

function ProfileUploader({
  alt,
  src = 'images/avatar.svg',
  onUploadComplete,
  ...props
}) {
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState(src);
  const [accessToken] = Cookie.getAccessToken();

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setUploading(true);
    }
    if (info.file.status === 'done') {
      const { response } = info.file;
      const { Location } = response;
      if (onUploadComplete) {
        onUploadComplete(Location);
      }
      setImage(Location);
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
      <StyledAvatar
        size={100}
        icon={<UserOutlined />}
        alt={alt}
        src={image}
        {...props}
      />
      <OverLay loading={uploading} />
    </StyledUpload>
  );
}

ProfileUploader.propTypes = {
  src: PropTypes.any,
  alt: PropTypes.string,
  onUploadComplete: PropTypes.func,
};

export default ProfileUploader;
