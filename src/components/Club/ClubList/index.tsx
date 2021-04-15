import * as S from "./style";
import { ClubItem } from "../ClubItem";
import { FC } from "react";
import { IClubData } from "@/src/libs/intefaces/Club";

interface Props { clubList : IClubData[]}
export const ClubList : FC<Props> = ({ clubList }) => {
    return (
        <S.BodyWrapper>
            <S.Wrapper>
                {clubList.map((value, i) => {
                    const {
                        clubname,
                        clubtag,
                        clubimage,
                        clubdescription,
                        clubbanner,
                        clubid,
                        clubrecruitment,
                    } = value;
                    return (
                        <ClubItem 
                            key={clubid}
                            max={clubList.length}
                            now={i}
                            header={clubname}
                            tag={clubtag}
                            description={clubdescription}
                            imgSrc={clubimage}
                            banner={clubbanner}
                            id={clubid}
                            clubrecruitment={clubrecruitment}
                        />
                    );
                })}
            </S.Wrapper>
        </S.BodyWrapper>
    );
};


/*useEffect(() => {
        const items: any = document.querySelectorAll(".clubitem");
        for (let i = 0; i < items.length; i++) {
            if ((i + 1) % 4 === 0) {
                items[i].addEventListener("mouseover", () => {
                    clearTimeout(time.current[i]);
                    items[i - 1].parentNode.style.boxShadow = "none";
                    items[i - 1].parentNode.style.zIndex =
                        items.length - i - 1;
                });
                items[i].addEventListener("mouseout", () => {
                    items[i - 1].parentNode.style.boxShadow =
                        "0 5px 5px rgba(0, 0, 0, 0.29)";
                    time.current[i] = setTimeout(() => {
                        items[i - 1].parentNode.style.zIndex =
                            items.length - i + 1;
                    }, 150);
                });
            }
        }
    }, []);*/   