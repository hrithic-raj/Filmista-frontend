import IMovie from "./MovieInterface";

interface IGenre {
    _id: string;
    genre: string;
    poster: string;
    isArchive: boolean;
    movies: IMovie[];
  }
export default IGenre