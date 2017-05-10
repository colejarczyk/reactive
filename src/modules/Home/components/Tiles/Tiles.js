import React from 'react';
import './Tiles.css';

const tilesData = [
  {
    img: 'https://img.ans-media.com/files/sc_staging_images/product/full_img_993368.jpg',
    title: 'Breakfast',
    author: 'jill111',
    height: '300px',
  },
  {
    img: 'https://img.ans-media.com/files/sc_staging_images/product/full_img_972474.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
    height: '600px',
  },
  {
    img: 'https://img.ans-media.com/files/sc_staging_images/product/full_img_945651.jpg',
    title: 'Camera',
    author: 'Danson67',
    height: '300px',
  },
  {
    img: 'https://img.ans-media.com/files/sc_staging_images/product/full_img_990002.jpg',
    title: 'Morning',
    author: 'fancycrave1',
    height: '300px',
  },
  {
    img: 'https://img.ans-media.com/files/sc_staging_images/product/full_img_973660.jpg',
    title: 'Hats',
    author: 'Hans',
    height: '600px',
  },
  {
    img: 'https://img.ans-media.com/files/sc_staging_images/product/full_img_990016.jpg',
    title: 'Honey',
    author: 'fancycravel',
    height: '300px',
  },
  {
    img: 'https://img.ans-media.com/files/sc_staging_images/product/full_img_860634.jpg',
    title: 'Vegetables',
    author: 'jill111',
    height: '300px',
  },
  {
    img: 'https://img.ans-media.com/files/sc_staging_images/product/full_img_938253.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
    height: '600px',
  },
  {
    img: 'https://img.ans-media.com/files/sc_staging_images/product/full_img_938249.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
    height: '300px',
  },
  {
    img: 'https://img.ans-media.com/files/sc_staging_images/product/full_img_839485.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
    height: '300px',
  },
  {
    img: 'https://img.ans-media.com/files/sc_staging_images/product/full_img_828320.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
    height: '600px',
  },
  {
    img: 'https://img.ans-media.com/files/sc_staging_images/product/full_img_986259.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
    height: '300px',
  },
  {
    img: 'https://img.ans-media.com/files/sc_staging_images/product/full_img_981305.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
    height: '600px',
  },
  {
    img: 'https://img.ans-media.com/files/sc_staging_images/product/full_img_943934.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
    height: '600px',
  },
  {
    img: 'https://img.ans-media.com/files/sc_staging_images/product/full_img_944946.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
    height: '300px',
  },
  {
    img: 'https://img.ans-media.com/files/sc_staging_images/product/full_img_950905.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
    height: '600px',
  },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const Tiles = () => (
    <div>
      <div className="grid-list">
        {tilesData.map((tile,index) => (
            <div
                key={index}
                className="grid-tile"
            >
              <div className="grid-tile-wrapper" >
                <img className="grid-tile-image" src={tile.img}
                     alt={tile.title}/>
              </div>
            </div>
        ))}
      </div>
    </div>
);

export default Tiles;
