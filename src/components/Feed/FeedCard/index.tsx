import * as S from "../styles";
import { IFeedData } from "@/src/libs/intefaces/Feed";
import { FC, useState } from "react";
import FlagToggle from "../FlagToggle";
import Link from "next/link";
import dateFormat from "@/src/libs/function/dateFormat";
import more from "@/src/assets/images/more";
import pin from "@/src/assets/images/pin";
import FeedSlider from "../FeedSlider";
import { URLFormat } from "../../URLFormat";

interface Props extends IFeedData{};

const FeedCard : FC<Props> = ({ flags, feedId, flag, profileImage, clubId, clubName, uploadAt, content, media }) => {
    const [thisFlags, setFlags] = useState<number>(flags);
    const [state, setState1] = useState<boolean>(flag);
    const [originState, setOriginState] = useState<boolean>(flag);
    return (
        <li>
            <S.CardHeader>
                <Link href={`club/${clubId}`}>
                    <a>
                        <img
                            src={`${process.env.NEXT_PUBLIC_BASEURL}/file/${profileImage}`}
                        ></img>
                    </a>
                </Link>
                <S.CardHeaderContent>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div>
                            <strong>{clubName}</strong>
                        </div>
                        {pin}
                    </div>
                    <S.CreatedAt>{dateFormat(uploadAt)}</S.CreatedAt>
                </S.CardHeaderContent>
                {more}
            </S.CardHeader>
            <S.CardSection>
                {/* 바꿀 곳 */}
                <S.Content style={{ whiteSpace: "pre-wrap" }}>
                    <URLFormat content={content}/>
                </S.Content>
                {
                    media.length!==0 ?
                        <FeedSlider media={media}/>
                    : null
                }
            </S.CardSection>
            <S.CardBottom>
                <S.CardUtil>
                    <FlagToggle
                        setFlags={setFlags}
                        flags={flags}
                        feed_id={feedId}
                        state={state}
                        setState={setState1}
                        originState={originState}
                        setOriginState={setOriginState}
                    ></FlagToggle>
                </S.CardUtil>
                <S.CardState>
                    <div>FLAGS {thisFlags}개</div>
                </S.CardState>
            </S.CardBottom>
        </li>
    );
}
export default FeedCard;
