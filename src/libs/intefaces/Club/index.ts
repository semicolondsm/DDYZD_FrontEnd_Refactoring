export interface IClub{
	club_id : number,
	club_name : string,
	club_image : string
}
export interface IClubInfo{
	clubid : number;
	clubname : string;
	clubtag :  string[];
	clubimage :  string;
	backimage :  string;
	description :  string;
	follow : boolean;
}

export interface IClubItemTableData {
	user_name: string;
	data: IClubItemData[];
}

export interface IClubItemData {
	item_state: string;
	item_name: string;
	option: string;
	amount: string;
	price: number;
	delivery_status: string;
}
export interface IClubData {
    clubid: number;
    clubname: string;
    clubtag: string[];
    clubimage: string;
    clubdescription: string;
    clubbanner: string;
    clubrecruitment: boolean;
}

export interface IMemberData {
	user_name: string[];
	profile_image: null;
	gcn: number[];
	git: string;
	loading: boolean;
  }

export interface IRecruitmentData {
    major : string[],
    closeat : Date,
    startat : Date,
}

export interface IClubPromotional {
	name: string,
	image: string,
	profile: string,
}