import { ImageList, ImageListItem } from '@mui/material';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Home = () => {
  return (
    <ImageList
      sx={{ width: 400, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default Home;

const itemData = [
  {
    img: 'https://source.unsplash.com/jU40gA2UDmA',
    rows: 1,
    cols: 2,
  },
  {
    img: 'https://source.unsplash.com/MOYdThlkIRI',
  },
  {
    img: 'https://source.unsplash.com/g9CBf_ALoSg',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://source.unsplash.com/FBpBzKtf3-4',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://source.unsplash.com/R8lltPCKew4',
  },
  {
    img: 'https://source.unsplash.com/KajBZdnjafQ',
  },
  {
    img: 'https://source.unsplash.com/_kYLqaw9ND8',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://source.unsplash.com/Zf4mRIDWASo',
    cols: 2,
  },
];
