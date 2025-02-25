import React from 'react'
import '../../style/Movie.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
function Movie({ movie }) {
    const { Poster, Title, Year, Type, imdbID } = { movie }
    return (
        <div className='movie-home'>

            <ImageList sx={{ width: 500, height: 450 }} cols={6} rowHeight={164}>
                <ImageListItem key={movie.imdbID}>
                    <img src={movie.Poster} alt={movie.Title} />
                </ImageListItem>

            </ImageList>


            {/* <Card sx={{ maxWidth: 345, margin: '5px', width: '300px' }}>
                <CardMedia sx={{ height: 460 }} image={movie.Poster}
                    title={movie.Title} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {movie.Title}{movie.Year}
                    </Typography>
                </CardContent>
            </Card> */}

        </div >
    )
}

export default Movie