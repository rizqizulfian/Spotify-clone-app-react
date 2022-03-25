import React from 'react';

import { renderListCategoryItems, renderListAlbumItems, renderPlaylistItems } from './utils';
import './styles.css';

const homeItems = ({ itemType, itemTitle, itemData, itemDataCategories }) => {
  return (
    <>
      <h2>{itemTitle}</h2>
      <div className="items grid-template">
        {renderListCategoryItems({ itemType, itemDataCategories })}
        {renderListAlbumItems({ itemType, itemData })}
        {renderPlaylistItems({ itemType, itemData })}
      </div>
    </>
  );
}

export default homeItems;
