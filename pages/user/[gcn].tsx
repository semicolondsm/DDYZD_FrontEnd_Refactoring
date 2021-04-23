import { GetServerSidePropsContext } from "next";
import SEO from "@/src/components/SEO";
import { FC } from "react";
import user from "@/src/libs/api/user";
import { IUser } from "@/src/libs/intefaces/User";
import { UserProfile } from "@/src/components/User/Profile";
import Header from "@/src/components/Header";


export const getServerSideProps = async (context : GetServerSidePropsContext)  => {
    const { data } = await user.getUserInfo(context.query.gcn.toString())
    console.log(data);
    return {
        props: {
            data : data
        }
    };
}

interface Props{
    data : IUser
}
const User:FC<Props> = ({data}) => {
    return(
        <>
            <SEO title={data.name} image={data.image_path} description={data.bio}></SEO>
            <Header color="white"></Header>
            <UserProfile {...data}></UserProfile>
        </>
    )
}
export default User;