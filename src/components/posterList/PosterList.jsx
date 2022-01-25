import MoviePoster from '../moviePoster/MoviePoster';

const PosterList = ({ list, isPlaylist }) => {
  return list ? (
    list.map(movie => {
      return (
        <MoviePoster
          key={movie.imdbID}
          isPlaylist={isPlaylist}
          movie={movie}
          title={movie.Title}
          imgLink={movie.Poster}
          imgAlt={`Image not found for: ${movie.Title}`}
          />
      )
    })) : null;
}

export default PosterList;