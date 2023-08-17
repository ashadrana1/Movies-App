import React,{useEffect,useState} from "react";
import Card from "../card/card";
import "./movieList.css";
import { useParams } from "react-router-dom";

const MovieList = () => {
    const [movieList, setMovieList] = useState([])

    const {type} = useParams()

    useEffect(()=>{
        getData()
    },[])

    useEffect(() => {
        console.log("Type:", type);
        getData()
    },[type])

    const getData = () =>{
        const movieType = type ? type : "popular";
        // making api call dynamic by replacing "" with ``
        console.log("Fetching data for:", type);
        fetch(`https://api.themoviedb.org/3/movie/${movieType}?api_key=ac80d1aaeabce8204d480a69e415362d&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Card key ={movie.id } movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList
