export interface IFeedData {
    feedId: number;
    clubId: number;
    clubName: string;
    profileImage: string;
    isFollow: boolean;
    uploadAt: Date;
    pin: boolean;
    content: string;
    media: string[];
    flag: boolean;
    flags: number;
  }