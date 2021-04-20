import { FC } from "react";
import earthIc from "@/src/assets/images/earth";
import phonoeIc from "@/src/assets/images/phone";
import brainIc from "@/src/assets/images/brain";
import etcIc from "@/src/assets/images/etc";
import shieldIc from "@/src/assets/images/shield";
import embedIc from "@/src/assets/images/embed";
import * as S from "./style"
interface Props{
    clubtag : string[]
}
export const ClubTag : FC<Props> = ({clubtag}) => {
    return(
        <S.FieldIconWrapper>
            {clubtag.map((val,index) => {
                switch (val) {
                    case "인공지능":
                        return <span key={index}>{brainIc}</span>;
                    case "웹":
                        return <span key={index}>{earthIc}</span>;
                    case "앱":
                        return <span key={index}>{phonoeIc}</span>;
                    case "정보보안":
                        return <span key={index}>{shieldIc}</span>;
                    case "임베디드":
                        return <span key={index}>{embedIc}</span>;
                    default:
                        return <span key={index}>{etcIc}</span>;
                }
            })}
        </S.FieldIconWrapper>
    )
}