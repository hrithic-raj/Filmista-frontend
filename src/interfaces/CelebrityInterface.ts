import IUser from "./UserInterface";

interface ICelebrity{
  _id: string,
  userId: IUser;
  proofDocument: string;
}

// interface ICelebrity{
//     _id:  string,
//     name: string,
//     email: string,
//     password: string,
//     googleId?: string,
//     otp?: string,
//     refreshToken?: string,
//     bio?: string;
//     role: string,
//     profilePicture?: string,
//     isBlocked:boolean,
//   }
export default ICelebrity;