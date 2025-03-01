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
        <div >
            <div key={movie.imdbID} className="card">
<img src={movie.Poster} className='card-image' alt={movie.Title} />
<div className="title">{movie.Title}</div>
            </div>

        </div >
    )
}

export default Movie