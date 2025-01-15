// interface ICelebrity {
//     id: string;
//     name: string;
//     email: string;
// }

interface ICelebrity{
    _id:  string,
    name: string,
    email: string,
    password: string,
    googleId?: string,
    otp?: string,
    refreshToken?: string,
    bio?: string;
    role: string,
    profilePicture?: string,
    isBlocked:boolean,
  }

export default ICelebrity;