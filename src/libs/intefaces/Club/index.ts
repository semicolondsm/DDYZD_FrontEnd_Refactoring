export interface IClubInfo{
	clubid : number,
	clubname : String,
	clubtag :  String[] ,
	clubimage :  String ,
	backimage :  String ,
	description :  String,
	follow : boolean,
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