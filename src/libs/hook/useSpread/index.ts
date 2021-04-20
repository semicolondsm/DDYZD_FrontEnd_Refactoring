import { MutableRefObject, useEffect, useRef } from "react";

function useSpread<T>(position : number) : MutableRefObject<T>{
    const thisElement = useRef<T>()
    useEffect(()=>{
        if((position+1)%4===0){
            const current = thisElement.current as unknown as HTMLElement;
            const prevElement=current.previousElementSibling as HTMLElement;
            current.addEventListener("mouseover", () => {
                current.style.zIndex = `40`;
                prevElement.style.boxShadow = "none";
                prevElement.ontransitionend = null
          
            })
            current.addEventListener("mouseout", () => {
                prevElement.style.boxShadow = "0 5px 5px rgba(0, 0, 0, 0.29)";
                prevElement.ontransitionend = () => current.style.zIndex = `0`;
            })
        }
    },[])
    return thisElement;
}
export default useSpread;