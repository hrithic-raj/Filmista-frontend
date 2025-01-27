// interface IMovie {
//     id: string;
//     name: string;
//     description: string;
//     poster: string;
//     horizontalPoster: string;
//   }
// export default IMovie

import IGenre from "./GenreInterface";


// movieTypes.ts
export interface Genre {
  _id: string;
  name: string;
}

export interface Language {
  _id: string;
  name: string;
}

export interface Celebrity {
  _id: string;
  name: string;
  profilePicture: string;
}

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
  language: [];
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
