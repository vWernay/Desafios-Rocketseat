import { useState } from 'react';

import shuffleImg from './../assets/shuffle.svg';
import posterImg from './../assets/poster.png';

import { api } from "./../services/axios";

import './../styles/home.scss';

type DataMovieProps = {
    title?: string;
    overview: string;
    image: string;
}

export function Home() {
    const [dataMovie, setDataMovie] = useState<DataMovieProps>();

    async function handleClickFindMovie() {
        const movieid = Math.floor(Math.random() * 1000 + 1);
        console.log(`${import.meta.env.VITE_APP_BASE_URL}${movieid}?api_key=${import.meta.env.VITE_APP_API_KEY}&${import.meta.env.VITE_APP_LANGUAGE}`)
        api
            .get(`${import.meta.env.VITE_APP_BASE_URL}${movieid}?api_key=${import.meta.env.VITE_APP_API_KEY}&${import.meta.env.VITE_APP_LANGUAGE}`)
            .then(function(response) {
                setDataMovie({
                    title: response.data.title,
                    overview: response.data.overview,
                    image: `${import.meta.env.VITE_APP_IMG_URL}/${response.data.poster_path}`,
                });
            })
            .catch(function(err) {
                setDataMovie({
                    overview: 'Ops, hoje não é dia de assistir filme. Bora codar! 🚀',
                    image: posterImg
                });
                /* movieContent.innerHTML = `
                <img src="./assets/coding.jpg" alt="" />
                <div class="description-movie coding">
                <p class="movie-description-coding">Ops, hoje não é dia de assistir filme.
                Bora codar! 🚀</p>
                </div>
            `; */
        });
    }

    return (
        <div>
            <header>
                <div className="title">
                <img src={shuffleImg} alt="Logo" />
                <h1>Não sabe o que assistir?</h1>
                </div>
            </header>
            <main>
                {dataMovie?.image && (
                    <div className="movie-details">
                        <img src={dataMovie.image} alt={dataMovie.title || 'Poster'} />
                        <div className="movie-text">
                            <h1>{dataMovie?.title}</h1>
                            <span>{dataMovie.overview}</span>
                        </div>
                    </div>
                )}
                <div className="search-movie">
                    <button 
                        className="button-primary" 
                        type="button"
                        onClick={handleClickFindMovie}
                    >
                        <span className="button-icon"></span>
                        <p>Encontrar filme</p>
                    </button>
                    <span>
                        Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.
                    </span>
                </div>
            </main>
        </div>
    )
}