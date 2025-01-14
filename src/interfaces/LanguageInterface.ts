import IMovie from "./MovieInterface";

interface ILanguage {
    _id: string;
    language: string;
    poster: string;
    isArchive: boolean;
    movies: IMovie[];
}
export default ILanguage