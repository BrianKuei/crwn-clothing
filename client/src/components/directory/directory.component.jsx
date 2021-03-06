import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import { DirectoryMenuContainer } from './directory.styles';

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({
      title, imageUrl, id, size, linkUrl,
    }) => (
      <MenuItem
        key={id}
        title={title}
        imageUrl={imageUrl}
        size={size}
        linkUrl={linkUrl}
      />
    ))}
    {/* We can do this more concise but is not readable */}
    {/* {sections.map(({
        id, ...otherSectionProps
      }) => <MenuItem key={id} {...otherSectionProps} />)} */}
  </DirectoryMenuContainer>
);

Directory.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
