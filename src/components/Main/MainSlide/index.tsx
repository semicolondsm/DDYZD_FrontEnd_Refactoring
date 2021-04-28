import * as S from "./styles";
import Menu from "../Menu";
import { useMainSlider } from "@/src/libs/hook/useMainSlider";
import { useSlider } from "@/src/libs/hook/useSlider";
import stopSlide from '@/src/assets/images/stopslide'
import startSlide from '@/src/assets/images/startSlide'

export const MainSlide = () => {
  const { StopShow, RightShow, LeftShow, promoData, ClubProfileClick, SlideCont, transVal, UnderProfile, stop } = useMainSlider()
  //const {sliderRef ,page, Prev, Next ,Swipe, TouchEnd, TouchMove} = useSlider(media)
  const CurBorder = {
    backgroundImage:
      "linear-gradient(white,white), linear-gradient(90deg, #FFE874 0%, #A45EE1 52%, #713EFF 100%)",
  };
  const none = {
    display: "flex",
  };
  
  return (
    <>
      <S.SlideContainer>
        <S.SlideBox ref={SlideCont}>
          {" "}
          {/* 슬라이드 이미지 */}
          {promoData.map((e: any, index: any) => {
            return (
              e.image != null && (
                <img
                  src={"https://api.eungyeol.live/file/" + e.image}
                  key={index}
                  style={
                    transVal === -index
                      ? {
                          height: "100%",
                          objectFit: "contain",
                          position: "absolute",
                          opacity: 1,
                          transition: "1s",
                        }
                      : {
                          height: "100%",
                          objectFit: "contain",
                          position: "absolute",
                          opacity: 0,
                          transition: "1s",
                        }
                  }
                ></img>
              )
            );
          })}
        </S.SlideBox>
        <S.AllowContainer>
          <S.Allow onClick={LeftShow}>〈</S.Allow>
          <S.StopButton onClick={StopShow} style={{}}>
            {
              !stop ? stopSlide : startSlide
            }
          </S.StopButton>
          <S.Allow onClick={RightShow}>〉</S.Allow>
        </S.AllowContainer>
        <Menu></Menu>
      </S.SlideContainer>
      <S.UnderBar>
        <S.SlideUnderBar ref={UnderProfile}>
          {promoData.map((e: any, index: any) => {
            return (
              e.image != null && (
                <S.ClubProfileBox key={index}>
                  <S.ClubProfile style={index === -transVal ? CurBorder : none}>
                    <img
                      onClick={() => ClubProfileClick(index)}
                      src={"https://api.eungyeol.live/file/" + e.profile}
                    ></img>
                  </S.ClubProfile>
                  <a style={{ whiteSpace: "nowrap" }}>{e.name}</a>
                  <S.ProfileLine>
                    <S.AnimLine style={index === -transVal ? {width : "100%"} : {width:"0%", transition:"0s"}}/>
                  </S.ProfileLine>
                </S.ClubProfileBox>
              )
            );
          })}
        </S.SlideUnderBar>
      </S.UnderBar>
    </>
  );
};

