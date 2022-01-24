import MoviePoster from './MoviePoster';

const PosterList = ({ list, isPlaylist }) => {
  return list ? (
    list.map(movie => {
      return (
        <MoviePoster
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