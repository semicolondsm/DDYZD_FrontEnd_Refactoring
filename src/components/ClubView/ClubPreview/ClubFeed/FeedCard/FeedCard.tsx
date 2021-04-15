import * as S from "./styles";
import { useEffect, useRef, useState } from "react";
import FlagToggle from "./FlagToggle";
import PrevSVG from "@/src/assets/images/prev";
import NextSVG from "@/src/assets/images/next";
import dateFormat from "@/src/libs/function/dateFormat"

const fileURL = "https://api.semicolon.live";
function FeedCard({ props }: { props: any }) {
  const [page, setPage] = useState<number>(0);
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(0);
  const [flags, setFlags] = useState<number>(props.flags);
  const [state, setState1] = useState<boolean>(props.flag);
  const slideRef = useRef<HTMLDivElement>(null);
  const [originState, setOriginState] = useState<boolean>(props.flag);
  function prev() {
    if (page > 0) setPage(page - 1);
  }
  function next() {
    if (page < props.media.length - 1) setPage(page + 1);
  }
  function Swipe(e: React.TouchEvent) {
    setStart(e.touches[0].clientX);
  }
  function TouchEnd() {
    let temp = start - end;
    if (temp > 60 && end != 0) next();
    else if (temp < -60 && end != 0) prev();
    setStart(0);
    setEnd(0);
  }
  function TouchMove(e: React.TouchEvent) {
    setEnd(e.touches[0].clientX);
  }
  useEffect(() => {
    if (props.media.length !== 0)
      slideRef.current!.style.transform = `translateX(${
        (100 / props.media.length) * -page
      }%)`;
  }, [page]);
  
  return (
    <li>
      <S.CardHeader>
        <img src={`${fileURL}/file/${props.profileImage}`}></img>
        <S.CardHeaderContent>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <strong>{props.clubName}</strong>
            </div>
          </div>
          <S.CreatedAt>{dateFormat(props.uploadAt)}</S.CreatedAt>
        </S.CardHeaderContent>
      </S.CardHeader>
      <S.CardSection>
        <S.Content style={{ whiteSpace: "pre-wrap" }}>
          {props.content}
        </S.Content>
        {props.media.length !== 0 ? (
          <S.Slider>
            <S.SliderImages
              onTouchStart={Swipe}
              onTouchMove={TouchMove}
              onTouchEnd={TouchEnd}
              ref={slideRef}
              style={{ width: `${props.media.length * 100}%` }}
            >
              {props.media.map((i: any, index: number) => (
                <img
                  key={index}
                  style={{
                    width: `calc( 100% / ${props.media.length} )`,
                    transform: `translateX(${100 * index}%)`,
                  }}
                  src={`${fileURL}/file/${i}`}
                ></img>
              ))}
            </S.SliderImages>
            <S.Prev onClick={prev}>
              {PrevSVG}
            </S.Prev>
            <S.Next onClick={next}>
              {NextSVG}
            </S.Next>
          </S.Slider>
        ) : null}
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
          <S.SliderState>
            {props.media.map((_i: any, index: any) => (
              <S.StateButton
                key={index}
                style={page == index ? { background: "#713EFF" } : undefined}
              ></S.StateButton>
            ))}
          </S.SliderState>
        </S.CardUtil>
        <S.CardState>
          <div>FLAGS {flags}개</div>
        </S.CardState>
      </S.CardBottom>
    </li>
  );
}
export default FeedCard;
