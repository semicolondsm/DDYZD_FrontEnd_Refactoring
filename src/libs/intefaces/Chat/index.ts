export interface IChatData {
  created_at: Date;
  date?: Date;
  msg: string;
  title: string | null;
  user_type: "U" | "C" | "H1" | "H2" | "H3" | "H4";
}

export interface IRoomType {
  roomid: number;
  id: string;
  name: string;
  image: string;
  lastdate: Date | null;
  lastmessage: string | null;
  isread: boolean;
  status: "U" | "C" | "H1" | "H2" | "H3" | "H4";
  index: number;
}

export interface IRoomList {
  club_section: string[] | string;
  rooms: IRoomType[];
}

interface IUserInfo {
  id: number;
  name: string;
  image: string;
  status: "U" | "C" | "H1" | "H2" | "H3" | "H4";
}

export interface IChattings {
  room_id: number;
  Chattings: IChatData[];
  user_info: IUserInfo;
}

export interface IApplicantType {
  roomid: number;
  name: string;
  image: string;
  lastdate: Date;
  lastmessage: string;
  isread: boolean;
  status: "U" | "C" | "H1" | "H2" | "H3" | "H4";
  index: number;
}

export interface IStateRoom {
  error: boolean;
  data: IRoomList[] | null;
  loading: boolean;
}

export interface IStateChat {
  error: boolean;
  data: IChattings[] | null;
  loading: boolean;
}

export interface IStateApplicant {
  error: boolean;
  data: IApplicantType[] | null;
  loading: boolean;
}

export interface IChatAllType {
  RoomList: IStateRoom;
  ChatList: IStateChat;
  ApplicantList: IStateApplicant;
}
