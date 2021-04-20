import { AxiosPromise } from 'axios';
import { useState, useEffect, useCallback } from 'react';

export function useInfiniteScroll<T>(getData : (page : number) => AxiosPromise<any>): [T[], boolean]{
  const [data, setData] = useState<T[]>([]);
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
  useEffect(()=>{
    if(loading && !last){
      setPage(page+1);
      getData(page+1).then((res)=>{
        if(res.data.length===0) {
          setLoading(false);
          setLast(true);
        }
        setData([...data, ...res.data])
        setLoading(false);
      })
      .catch((e)=>console.log(e))
    }
    console.log(data)
  },[loading])
  return [data, loading];
}
