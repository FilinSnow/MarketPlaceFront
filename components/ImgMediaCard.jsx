import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Image from 'next/image'

const useStyles = makeStyles({
  root: {
    color: 'white',
    backgroundColor: 'black',
    verticalAlign: 'baseline',
    '&:hover': {
      background: 'none',
    },
  },
});

export default function ImgMediaCard({ img, title, description }) {
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 345, margin: '0 10px' }}>
      <CardContent sx={{'text-align':'center'}}>
        <Image src={img} width={200} height={200} />
      </CardContent>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        <Button className={classes.root} size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}