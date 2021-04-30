import { FC, useEffect, useState, createRef, RefObject } from "react";
import club from "../../api/club";
import { IClubPromotional } from "../../intefaces/Club";
import useInterval from "../useInterval";

interface Return {
  StopShow: () => void,
  RightShow: () => void,
  LeftShow: () => void,
  ClubProfileClick: (index: number) => void,
  promoData: IClubPromotional[],
  SlideCont: RefObject<HTMLDivElement>,
  transVal: number,
  UnderProfile:RefObject<HTMLDivElement>
  stop: boolean,
}

export const useMainSlider = ():Return => {
  const [transVal, setTransVal] = useState(0);
  const [delay, setDelay] = useState(5000);
  const [promoData, setPromoData] = useState<IClubPromotional[]>([]);
  const [data, setData] = useState<IClubPromotional[]>([]);
  const [stop, setStop] = useState<boolean>(false);
  const UnderProfile = createRef<HTMLDivElement>();
  const SlideCont = createRef<HTMLDivElement>();
  const pos = promoData.length;

  const RightShow = () => {
        if (transVal == -pos + 1) setTransVal(0);
        else setTransVal(transVal - 1);
        setDelay(6000);
        setTimeout(() => {
          setDelay(5000);
        }, 8000);
      };

    const LeftShow = () => {
      if (transVal == 0) setTransVal(-pos + 1);
      else setTransVal(transVal + 1);
      setDelay(6000);
      setTimeout(() => {
        setDelay(5000);
      }, 8000);
    };
    
    const StopShow = () => {
      !stop ? setStop(true) : setStop(false)
      console.log(stop);
    }
  
    const ClubProfileClick = (index: number) => {
      setTransVal(-index);
      setDelay(6000);
      setTimeout(() => {
        setDelay(5000);
      }, 8000);
    };
    useInterval(() => {
      if(!stop){
        if (transVal == -pos + 1) {
          setTransVal(0);
        } else {
          setTransVal(transVal - 1);
        }
      }
    }, delay);

    useEffect(() => {
      club.getClubPromotion().then((e) => {
        setData(e.data);
      });
    }, []);

    useEffect(() => {
      setPromoData(data.filter((e: IClubPromotional) => e.image != null));
    }, [data]);

    useEffect(() => {
      if (data.length > 0) {
        setTimeout(() => {
          if (SlideCont.current !== null && UnderProfile.current !== null) {
            SlideCont.current.style.opacity = "1";
            UnderProfile.current.style.opacity = "1";
          }
        }, 1000);
      }
    });

    return { StopShow,RightShow, LeftShow, promoData, ClubProfileClick, SlideCont, transVal, UnderProfile, stop}
}