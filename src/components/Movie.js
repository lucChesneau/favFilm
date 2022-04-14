import React from 'react';
import Gallerie from './Gallerie';

class Movie extends React.Component {

    render() {
        const {title, year, director, synopsis, posterUrl} = this.props;

        return (
            <article className="movie">
                        <h2>{title}</h2>
                                <Gallerie posterUrl={posterUrl} />
                        <div className='infos-film-container'>
                                <span>{year}</span>
                                <strong>{director}</strong>
                        </div>
                        <p className='synopsis'>{synopsis}</p>
            </article>
        );
    }
}

export default Movie;

/* 
                    * Créer un composant "Movie" pour afficher un film
                    * Un film contiendra au moins un titre, une année de sortie, un réalisateur et un synospsis
                    */