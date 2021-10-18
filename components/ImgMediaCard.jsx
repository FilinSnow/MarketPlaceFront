import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

const useStyles = makeStyles({
  root: {
    color: 'white',
    backgroundColor: 'black',
    verticalAlign: 'baseline',
    '&:hover': {
      background: 'black',
    },
  },
});

export default function ImgMediaCard({ id, img, title, description, price, brand }) {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Card sx={{ maxWidth: 345, margin: '0 10px' }}>
      <CardContent sx={{ 'text-align': 'center' }}>
        <Image src={img} width={200} height={200} />
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        {price && <Typography variant="body2" color="text.secondary">
          Price: {price}
        </Typography>}
        {brand && <Typography variant="body2" color="text.secondary">
          Brand: {brand}
        </Typography>}
      </CardContent>
      <CardActions>
        <Link href={`${router.asPath}/${id}`}>
          <a >
            <Button className={classes.root} size="small">Learn More</Button>
          </a>
        </Link>

      </CardActions>
    </Card>
  );
}