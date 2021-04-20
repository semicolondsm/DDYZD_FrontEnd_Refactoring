// import { IFeedData } from "@/src/libs/intefaces/Feed";
// import { FC, useState } from "react";
// import Header from "../Header/Header";
// import ClubPreview from "./ClubPreview";

// interface Props{
//     club_id: number,
//     data: IFeedData,
// }
// function ClubManagement(props: Props){
    
//     console.log("asd",props.data);
//     return(
//         <>
//             <Header color="white"></Header>
//             <ClubPreview club_id={props.club_id} data={props.data}></ClubPreview>
//         </>
//     )
// }
// export default ClubManagement;

export { ClubHeader } from './ClubHeader';
export { ClubRecruitment } from './ClubRecruitment';
export { ClubUtil } from './ClubUtil';