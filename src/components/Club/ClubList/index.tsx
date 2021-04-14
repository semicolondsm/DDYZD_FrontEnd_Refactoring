import * as S from "./style";
import { ClubItem } from "../ClubItem";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import club from "@/src/libs/api/club";
import { IMajorData } from "@/src/libs/intefaces/Major";

export const ClubList = () => {
    const time: MutableRefObject<any> = useRef({});
    const [clubList, setClubList] = useState<IMajorData[]>([]);

    useEffect(() => {
        club.getClubList()
            .then((res) => {
                setClubList(res.data);
                const items: any = document.querySelectorAll(".majoritem");
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
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

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
                            className="majoritem"
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