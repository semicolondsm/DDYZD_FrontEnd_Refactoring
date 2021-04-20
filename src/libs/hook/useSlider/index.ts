import { useEffect, useState, useRef, MutableRefObject } from 'react';
import feedId from '@/src/libs/api/feed';

interface Return{
    sliderRef : MutableRefObject<HTMLDivElement>,
    page :number,
    Prev : () => void,
    Next : () => void,
    Swipe : (e : React.TouchEvent) => void,
    TouchEnd : () => void,
    TouchMove : (e: React.TouchEvent) => void
}
export function useSlider() : Return {
    const [page, setPage] = useState<number>(0);
    const [start,setStart] = useState<number>(0);
    const [end, setEnd] = useState<number>(0);
    const [media, setMedia] = useState<string[]>([]);
    const sliderRef = useRef<HTMLDivElement>(null);
    function Prev(){
        if(page>0) setPage(page-1);
        
    }
    function Next(){
       if(page<media.length-1) setPage(page+1);
    }
    function Swipe(e : React.TouchEvent){
        setStart(e.touches[0].clientX);
    }
    function TouchEnd(){
        let temp = start-end;
        console.log(temp);
        if(temp>60 && end!=0) Next();
        else if(temp<-60 && end!=0) Prev();
        setStart(0);
        setEnd(0);
    }
    function TouchMove(e: React.TouchEvent){
        setEnd(e.touches[0].clientX);
    }
    useEffect(()=>{
        if(media.length!==0) sliderRef.current!.style.transform=`translateX(${100/media.length*-page}%)`;
    },[page])
    useEffect(()=>{
    },[])
    return { sliderRef, page, Prev, Next, Swipe, TouchEnd, TouchMove }
}