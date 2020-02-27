import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      section: [{
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        size: '',
        id: 1,
        linkUrl: 'shop/hats',
      },
      {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        size: '',
        id: 2,
        linkUrl: 'shop/jackets',
      },
      {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        size: '',
        id: 3,
        linkUrl: 'shop/sneakers',
      },
      {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens',
      },
      {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens',
      }],
    };
  }

  render() {
    const { section } = this.state;
    return (
      <div className="directory-menu">
        {section.map(({
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
        {/* {section.map(({
          id, ...otherSectionProps
        }) => <MenuItem key={id} {...otherSectionProps} />)} */}
      </div>
    );
  }
}

export default Directory;