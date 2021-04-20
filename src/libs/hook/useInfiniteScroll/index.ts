import { AxiosPromise } from 'axios';
import { useState, useEffect, useCallback, SetStateAction, Dispatch } from 'react';

interface useInfiniteScrollType {
  page: number,
  last: boolean,
  loading: boolean,
  setLoading: () => Dispatch<SetStateAction<boolean>>,
  setPage: () => Dispatch<SetStateAction<boolean>>,
  setLast: () => Dispatch<SetStateAction<boolean>>,
}

export function useInfiniteScroll<T>(){
  const [page, setPage] = useState<number>(-1);
  const [last, setLast] = useState<boolean>(false);
  const [loading,setLoading] = useState<boolean>(true);

  const scrollEvent = useCallback(()=>{
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight  
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight-200) { 
      setLoading(true);
    }
  },[])
  useEffect(()=>{
    window.addEventListener("scroll",scrollEvent)
    return () => window.removeEventListener("scroll",scrollEvent);
  },[])

  return [ page, last, loading];
}
