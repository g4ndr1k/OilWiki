import { ImageList, ImageListItem, Card, CardMedia } from '@mui/material';

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
    <Card>
      <CardMedia
        component="img"
        image="https://source.unsplash.com/R10kxddJNWk"
      />
    </Card>
  );
};

export default Home;
/* 



const itemData = [
  {
    img: 'https://source.unsplash.com/R10kxddJNWk',
    rows: 5,
    cols: 4,
  },
];


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
      </ImageList> */
