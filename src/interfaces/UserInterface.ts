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
    genres?: string[];
    languages?: string[];
}

export default IUser;