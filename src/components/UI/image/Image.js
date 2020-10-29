import React from 'react';
import PropTypes from 'prop-types';
import createImageUrl from '../../../lib/images/createImageUrl.ts';

function Image({ imagePath, alt }) {
  const fullUrl = createImageUrl(imagePath);
  return <img src={fullUrl} alt={alt} />;
}

Image.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
};
Image.defaultProps = {
  url: '',
  desc: 'Movie Image',
};
export default Image;
