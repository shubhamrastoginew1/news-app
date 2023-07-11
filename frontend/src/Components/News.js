import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function News({ title, url , description, urlToImage, content}) {
    return (
        <Card className='card' sx={{ maxWidth: 345, minHeight: 380 }}>
            <CardActionArea >
                <CardMedia
                    component="img"
                    height="140"

                    image= {urlToImage}
                    alt="Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" href={url} target='_blank'>
                    Read Full Article
                </Button>
            </CardActions>
        </Card>
    );
}