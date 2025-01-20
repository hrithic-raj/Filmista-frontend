import {IMovie} from "./MovieInterface";

interface ILanguage {
    _id: string;
    language: string;
    poster: string;
    isArchive: boolean;
    movies: string | IMovie[];
}
export default ILanguage