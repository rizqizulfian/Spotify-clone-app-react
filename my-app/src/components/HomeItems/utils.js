import { Link } from 'react-router-dom';

export const renderListCategoryItems = ({ itemType, itemDataCategories }) => {
  return itemDataCategories !== undefined &&
    itemType === 'category' &&
    itemDataCategories.map((data) => (
      <div key={data.name} className="item-info">
        <Link to={`/genre/id=${data.id}`}>
          <div
            className="item-cover cover"
            style={{
              backgroundImage: `url(${data.icons[0].url})`,
            }}
          />
        </Link>
        <Link to={`/artist/id=${data.id}`}>
          <span className="item-name">{data.name}</span>
        </Link>
      </div>
    ))
};

export const renderListAlbumItems = ({ itemType, itemData }) => {
  return itemData !== undefined &&
    itemType === 'album' &&
    itemData.map((data) => (
      <div key={data.name} className="item-info">
        <Link to={`/album/id=${data.id}`}>
          <div
            className="item-cover cover"
            style={{
              backgroundImage: `url(${data.images[0].url})`,
            }}
          />
          <span className="item-name">{data.name}</span>
        </Link>
        {data.artists !== undefined && (
          <div className="artists-name">
            {data.artists.map((artist) => (
              <Link
                to={`/artist/id=${artist.id}`}
                key={artist.id}
              >
                <span>{artist.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    ))
};

export const renderPlaylistItems = ({ itemType, itemData }) => {
  return itemData !== undefined &&
    itemType === 'playlist' &&
    itemData.map((data) => (
      <div key={data.name} className="item-info">
        <Link to={`/playlist/id=${data.id}`}>
          <div
            className="item-cover cover"
            style={{
              backgroundImage: `url(${data.images[0].url})`,
            }}
          />
          <span className="item-name">{data.name}</span>
        </Link>
        {data.artists !== undefined && (
          <div className="artists-name">
            {data.artists.map((artist) => (
              <Link
                to={`/artist/id=${data.id}`}
                key={artist.id}
              >
                <span>{artist.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    ))
}