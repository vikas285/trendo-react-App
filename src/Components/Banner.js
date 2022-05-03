// import { movies } from "./getMovies";
import React, { Component } from "react";
// import { props } from "./Movies";

export default class Banner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // let movie = movies.results[0];
    let movie = this.props.pic[0];
    // console.log(movie, "AAAAAAAAA", this.props);
    return (
      <>
        {movie == "" ? (
          <div className="spinner-border text-info " role="status">
            <span className="visually-hidden ">Loading...</span>
          </div>
        ) : (
          <div className="card banner-card ">
            <img
              src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
              alt={movie?.title}
              className="card-img-top banner-img banner-img"
            />
            {/* <div className="card-body"> */}
            <h1 className="card-title banner-title">{movie?.original_title}</h1>
            <p className="card-text banner-text">{movie?.overview}</p>
            {/* <a href="#" className="btn btn-info">
              Go somewhere
            </a> */}
            {/* </div> */}
          </div>
        )}
      </>
    );
  }
}
