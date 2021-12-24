import {Card, CardMedia, CardContent, Typography} from '@mui/material';

export const Figure = (props) => {
    return (
        <>
        <Card>
        <CardMedia
        style={{
            height:400
        }}
        image={props.url}
        title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
              {props.facts}
          </Typography>
        </CardContent>
    </Card>
        </>
    );
}
    
    