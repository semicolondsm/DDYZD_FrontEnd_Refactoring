import styled from "@emotion/styled";
import { color } from "@/src/styles";

export const ClubMemberContainer = styled.nav`
    background-color: #ffffff;
    position: sticky;
    top: 77px;
    margin: 16px 0;
    flex-direction: column;
    width: 300px;
    height: 400px;
    box-shadow: 0px 5px 5px #00000029;
    border-radius: 2px;
    margin: 16px;  
    border-radius: 10px;
    @media screen and (max-width: 1405px){
        position: unset !important;
        order: 1;
        width: 630px;
        height: 200px;
    }
`;

export const MemberHeader = styled.div`
    display: flex;
    width: 100%;
    padding: 0;
    color: ${color.grey500};
    margin-top: 14px;
    margin-bottom: 8px;
    justify-content: space-around;
    overflow: hidden;
`;

export const Member = styled.div`
    display: flex;
    align-items: center;
    padding: 14px 36px;
    /* margin-left: 12px; */
    &:hover {
      background-color: ${color.grey200};
      cursor: pointer;
  }
`;

export const MemberContainer = styled.div`
    height: 350px;
    overflow: auto;
    @media screen and (max-width: 1405px){
        height: 150px;
        overflow: auto;
    }
`;

export const Img = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
    padding: 0;
`;

export const MemberName = styled.div`
    font-size: 16px;
    margin: 0;
`;

export const MemberRole = styled.div`
    font-size: 14px;
    color: ${color.grey400};
    margin: 0;
`;

export const Dummy = styled.div`
    height: 20px;
    width: 100%;
    bottom: 0;
    background: white;
    position: absolute;
    filter: blur(10px);
`;