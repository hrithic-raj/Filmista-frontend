import IGenre from "./GenreInterface";
import ILanguage from "./LanguageInterface";

interface IUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    googleId?: string;
    otp?: string;
    refreshToken: string;
    role: string;
    profilePicture?: string;
    isBlocked: boolean;
    genres?: (string | IGenre)[];
    languages?: (string | ILanguage)[];
    createdAt?: string;
    bio?: string;
    banner?: string;
}

export default IUser;