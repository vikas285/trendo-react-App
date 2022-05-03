// import React, { Component } from "react";
// import { movies } from "./getMovies";

// export default class Favourite extends Component {
//   constructor() {
//     super();
//     this.State = {
//       genres: [],
//       currgen: "All Genres",
//       movies: [],
//     };
//   }

//   async componentDidMount() {
//     let genreids = {
//       28: "Action",
//       12: "Adventure",
//       16: "Animation",
//       35: "Comedy",
//       80: "Crime",
//       99: "Documentary",
//       18: "Drama",
//       10751: "Family",
//       14: "Fantasy",
//       36: "History",
//       27: "Horror",
//       10402: "Music",
//       9648: "Mystery",
//       10749: "Romance",
//       878: "Sci-Fi",
//       10770: "TV",
//       53: "Thriller",
//       10752: "War",
//       37: "Western",
//     };
//     let data = JSON.parse(localStorage.getItem("movies-app") || "[]");
//     let temp = [];
//     data.forEach((movieObj) => {
//       if (!temp.includes(genreids[movieObj.genre_ids[0]])) {
//         temp.push(genreids[movieObj.genre_ids[0]]);
//       }
//     });
//     temp.unshift("All Genres");
//     this.setState({
//       genres: [...temp],
//       movies: [...data],
//     });
//     console.log(this.state.genres);
//     console.log(this.state.movies);
//   }

//   render() {
//     // const movie = movies.results;
//     // console.log(movie);
//     //GENRE_IDS IS OF TYPE ARRAY IN API....SO THEIR CORRESPODING VALUES ARE THIS.
//     let genreids = {
//       28: "Action",
//       12: "Adventure",
//       16: "Animation",
//       35: "Comedy",
//       80: "Crime",
//       99: "Documentary",
//       18: "Drama",
//       10751: "Family",
//       14: "Fantasy",
//       36: "History",
//       27: "Horror",
//       10402: "Music",
//       9648: "Mystery",
//       10749: "Romance",
//       878: "Sci-Fi",
//       10770: "TV",
//       53: "Thriller",
//       10752: "War",
//       37: "Western",
//     };
//     //DISPLAYING THE LEFT SIDE TABLE OF ALL GENRE'S AND ALL.

//     // console.log(this.state.currgen);

//     return (
//       <div>
//         <>
//           <div className="main">
//             <div className="row">
//               {/* /////////////////////////DISPLAYING GENRE HERE////////////////////////////// */}
//               <div className="col-3">
//                 <ul class="list-group fav-genere">
//                   {
//                     this.state.genres.map((gen) => (
//                       <li
//                         class="list-group-item common"
//                         // style={{
//                         //   background: "#3f51b5",
//                         //   color: "white",
//                         //   fontWeight: "bold",
//                         // }}
//                       >
//                         {gen}
//                       </li>
//                     ))
//                     // this.state.genres.map((genre) =>
//                     //   this.state.currgen == genre ? (
//                     //     <li
//                     //       class="list-group-item"
//                     //       style={{
//                     //         background: "#3f51b5",
//                     //         color: "white",
//                     //         fontWeight: "bold",
//                     //       }}
//                     //     >
//                     //       {genre}
//                     //     </li>
//                     //   ) : (
//                     //     <li
//                     //       class="list-group-item"
//                     //       style={{ background: "white", color: "#3f51b5" }}
//                     //       onClick={() => this.handleGenreChange(genre)}
//                     //     >
//                     //       {genre}
//                     //     </li>
//                     //   )
//                     // )
//                   }
//                 </ul>
//               </div>
//               {/* //////////////////////IN COL9 SPACE WE NEED 2 INPUT AND A TABLE AFTER THAT////////////// */}
//               <div className="col-9">
//                 <div className="row fav-side ">
//                   <input
//                     type="text"
//                     className="input-group-text col common"
//                     placeholder="Search"
//                   ></input>
//                   <input
//                     type="number"
//                     className="input-group-text col common"
//                     placeholder="Row Count"
//                   ></input>
//                 </div>
//                 {/* ///////////////////////ACQUIRING TABLE FROM BOOTSTRAP//////////////////////////////// */}
//                 <div className="row">
//                   <table class="table">
//                     <thead>
//                       <tr>
//                         <th className="common" scope="col">
//                           Title
//                         </th>
//                         <th className="common" scope="col ">
//                           Genre
//                         </th>
//                         <th className="common" scope="col">
//                           Popularity
//                         </th>
//                         <th className="common" scope="col">
//                           Rating
//                         </th>
//                         <th className="common" scope="col"></th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {this.state.movies.map((movieObj) => (
//                         <tr>
//                           <td>
//                             {" "}
//                             <img
//                               src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
//                               alt={movieObj.title}
//                               style={{ width: "5rem", marginRight: "1rem" }}
//                             ></img>{" "}
//                             {movieObj.original_title}
//                           </td>
//                           <td>{genreids[movieObj.genre_ids[0]]}</td>
//                           <td>{movieObj.popularity}</td>
//                           <td>{movieObj.vote_average}</td>
//                           <td>
//                             <button type="button" class="btn btn-danger">
//                               Delete
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//                 {/* ////////////////////////APPLYING PAGINATION/////////////////////////////////////////////                 */}
//                 <nav aria-label="Page navigation example ">
//                   <ul class="pagination">
//                     <li class="page-item ">
//                       <a class="page-link common" href="#">
//                         Previous
//                       </a>
//                     </li>
//                     <li class="page-item">
//                       <a class="page-link" href="#">
//                         1
//                       </a>
//                     </li>
//                     <li class="page-item">
//                       <a class="page-link" href="#">
//                         2
//                       </a>
//                     </li>
//                     <li class="page-item">
//                       <a class="page-link" href="#">
//                         3
//                       </a>
//                     </li>
//                     <li class="page-item">
//                       <a class="page-link common" href="#">
//                         Next
//                       </a>
//                     </li>
//                   </ul>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import { movies } from "./getMovies";

export default class Favourite extends Component {
  constructor() {
    super();
    this.state = {
      genres: [],
      currgen: "All Genres",
      movies: [],
      currText: "",
      limit: 5,
      currPage: 1,
    };
  }
  componentDidMount() {
    let genreids = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };
    let data = JSON.parse(localStorage.getItem("movies") || "[]");
    let temp = [];
    data.forEach((movieObj) => {
      if (!temp.includes(genreids[movieObj.genre_ids[0]])) {
        temp.push(genreids[movieObj.genre_ids[0]]);
      }
    });
    temp.unshift("All Genres");
    this.setState({
      genres: [...temp],
      movies: [...data],
    });
  }
  handleGenreChange = (genre) => {
    this.setState({
      currgen: genre,
    });
  };
  sortPopularityDesc = () => {
    let temp = this.state.movies;
    temp.sort(function (objA, objB) {
      return objB.popularity - objA.popularity;
    });
    this.setState({
      movies: [...temp],
    });
  };
  sortPopularityAsc = () => {
    let temp = this.state.movies;
    temp.sort(function (objA, objB) {
      return objA.popularity - objB.popularity;
    });
    this.setState({
      movies: [...temp],
    });
  };

  sortRatingDesc = () => {
    let temp = this.state.movies;
    temp.sort(function (objA, objB) {
      return objB.vote_average - objA.vote_average;
    });
    this.setState({
      movies: [...temp],
    });
  };
  sortRatingAsc = () => {
    let temp = this.state.movies;
    temp.sort(function (objA, objB) {
      return objA.vote_average - objB.vote_average;
    });
    this.setState({
      movies: [...temp],
    });
  };
  handlePageChange = (page) => {
    this.setState({
      currPage: page,
    });
  };
  handleDelete = (id) => {
    let newarr = [];
    newarr = this.state.movies.filter((movieObj) => movieObj.id != id);
    this.setState({
      movies: [...newarr],
    });
    localStorage.setItem("movies", JSON.stringify(newarr));
  };
  render() {
    let genreids = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };

    let filterarr = [];

    if (this.state.currText === "") {
      filterarr = this.state.movies;
    } else {
      filterarr = this.state.movies.filter((movieObj) => {
        let title = movieObj.original_title.toLowerCase();
        return title.includes(this.state.currText.toLowerCase());
      });
    }

    // if(this.state.currgen=="All Genres"){
    //     filterarr = this.state.movies
    // }
    if (this.state.currgen != "All Genres") {
      filterarr = this.state.movies.filter(
        (movieObj) => genreids[movieObj.genre_ids[0]] == this.state.currgen
      );
    }
    let pages = Math.ceil(filterarr.length / this.state.limit);
    let pagesarr = [];
    for (let i = 1; i <= pages; i++) {
      pagesarr.push(i);
    }
    let si = (this.state.currPage - 1) * this.state.limit;
    let ei = si + this.state.limit;
    filterarr = filterarr.slice(si, ei);
    return (
      <div>
        <>
          <div className="main">
            <div className="row">
              <div className="col-lg-3 col-sm-12">
                <ul class="list-group fav-genere common cur">
                  {this.state.genres.map((genre) =>
                    this.state.currgen == genre ? (
                      <li
                        class="list-group-item common "
                        // style={{
                        //   background: "#3f51b5",
                        //   color: "white",
                        //   fontWeight: "bold",
                        // }}
                      >
                        {genre}
                      </li>
                    ) : (
                      <li
                        class="list-group-item"
                        style={{ background: "white", color: "black" }}
                        onClick={() => this.handleGenreChange(genre)}
                      >
                        {genre}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className="col-lg-9 fav-side col-sm-12 ">
                <div className="row">
                  <input
                    type="text"
                    className="input-group-text col common"
                    placeholder="Search"
                    value={this.state.currText}
                    onChange={(e) =>
                      this.setState({ currText: e.target.value })
                    }
                  />
                  <input
                    type="number"
                    className="input-group-text col common"
                    placeholder="Rows Count"
                    value={this.state.limit}
                    onChange={(e) => this.setState({ limit: e.target.value })}
                  />
                </div>
                <div className="row tab">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col" style={{ textAlign: "center" }}>
                          <i
                            class="fas fa-sort-up cur"
                            onClick={this.sortPopularityDesc}
                          />
                          Popularity
                          <i
                            class="fas fa-sort-down cur"
                            onClick={this.sortPopularityAsc}
                          ></i>
                        </th>
                        <th scope="col" style={{ textAlign: "center" }}>
                          <i
                            class="fas fa-sort-up cur"
                            onClick={this.sortRatingDesc}
                          ></i>
                          Rating
                          <i
                            class="fas fa-sort-down cur"
                            onClick={this.sortRatingAsc}
                          ></i>
                        </th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {filterarr.map((movieObj) => (
                        <tr>
                          <td>
                            <img
                              src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                              alt={movieObj.title}
                              style={{ width: "5rem" }}
                            />{" "}
                            {movieObj.original_title}
                          </td>
                          <td>{genreids[movieObj.genre_ids[0]]}</td>
                          <td style={{ textAlign: "center" }}>
                            {movieObj.popularity}
                          </td>
                          <td style={{ textAlign: "center" }}>
                            {movieObj.vote_average}
                          </td>
                          <td>
                            <button
                              type="button"
                              class="btn btn-danger"
                              onClick={() => this.handleDelete(movieObj.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    {pagesarr.map((page) => (
                      <li class="page-item">
                        <a
                          class="page-link common"
                          onClick={() => this.handlePageChange(page)}
                        >
                          {page}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </>
      </div>
    );
  }
}
