import { IClub } from "../Club";


export interface IUser{
    bio: string | null,
    clubs: IClub[],
    email: string,
    gcn: string,
    github_url: string | null,
    id: number,
    image_path: string | null,
    name: string
};
