import { ClubList } from "@/src/components/Club";
import club from "@/src/libs/api/club";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
//const fetcher = async () => (await todoList.getTodoList()).data;

function Home({data} : InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <ClubList clubList={data}></ClubList> 
    </>
  )
}
export const getServerSideProps : GetServerSideProps = async ctx=>{
  const { data } = await club.getClubList();
  return { 
    props : {
      data 
    }
  }
}
export default Home;

