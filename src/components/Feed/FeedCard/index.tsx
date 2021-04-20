import * as S from "../styles";
import { IFeedData } from "@/src/libs/intefaces/Feed";
import { useState } from "react";
import FlagToggle from "../FlagToggle";
import Link from "next/link";
import dateFormat from "@/src/libs/function/dateFormat";
import more from "@/src/assets/images/more";
import pin from "@/src/assets/images/pin";
import { useSlider } from "@/src/libs/hook/useSlider";
import FeedSlider from "../FeedSlider";

function FeedCard({ props }: { props: IFeedData }) {
    const [flags, setFlags] = useState<number>(props.flags);
    const [state, setState1] = useState<boolean>(props.flag);
    const [originState, setOriginState] = useState<boolean>(props.flag);

    console.log(props);
    return (
        <li>
            <S.CardHeader>
                <Link href={`club/${props.clubId}`}>
                    <a>
                        <img
                            src={`${process.env.NEXT_PUBLIC_BASEURL}/file/${props.profileImage}`}
                        ></img>
                    </a>
                </Link>
                <S.CardHeaderContent>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div>
                            <strong>{props.clubName}</strong>
                        </div>
                        {pin}
                    </div>
                    <S.CreatedAt>{dateFormat(props.uploadAt)}</S.CreatedAt>
                </S.CardHeaderContent>
                {more}
            </S.CardHeader>
            <S.CardSection>
                {/* 바꿀 곳 */}
                <S.Content style={{ whiteSpace: "pre-wrap" }}>
                    {props.content.split(/( |\n)/).map((val: string) => {
                        const regex = /^(http(s)?:\/\/|www.)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}([\/a-z0-9-%#?&=\w])+(\.[a-z0-9]{2,4}(\?[\/a-z0-9-%#?&=\w]+)*)*/gi;
                        if (regex.exec(val) !== null)
                            return (
                                <a target="blank" href={val}>
                                    {val}
                                </a>
                            );
                        else return `${val}`;
                    })}
                </S.Content>
                <FeedSlider media={props.media}/>
            </S.CardSection>
            <S.CardBottom>
                <S.CardUtil>
                    <FlagToggle
                        setFlags={setFlags}
                        flags={flags}
                        feed_id={props.feedId}
                        state={state}
                        setState={setState1}
                        originState={originState}
                        setOriginState={setOriginState}
                    ></FlagToggle>
                </S.CardUtil>
                <S.CardState>
                    <div>FLAGS {flags}개</div>
                </S.CardState>
            </S.CardBottom>
        </li>
    );
}
export default FeedCard;
