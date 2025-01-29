import IGenre from "./GenreInterface";

export interface CastMember {
  _id?: string;
  name?: string;
  role: string;
  celebrityId?: string;
  profilePicture?: string;
}

export interface IMovie {
  _id: string;
  title: string;
  description: string;
  releaseDate: string;
  duration: string;
  genres: IGenre[];
  languages: [];
  cast: CastMember[];
  images: {
    poster: string;
    horizontalPoster: string;
    other: string[];
  };
  videos: {
    trailer: string;
    others: string[];
  };
  totalRatings: number;
  rating: number;
  reviews: string[];
}
