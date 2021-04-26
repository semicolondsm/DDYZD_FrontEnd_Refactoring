import { color } from "@/src/styles"
import styled from "@emotion/styled"

export const Wrapper=styled.aside`
    background-color: #ffffff;
    top: 77px;
    margin: 16px 0;
    flex-direction: column;
    width: 300px;
    min-height: 330px;
    height: 100%;
    box-shadow: 0px 5px 5px #00000029;
    border-radius: 2px;
    margin: 16px;
    border-radius: 10px;
    position: sticky;
    order: 2;

    @media screen and (max-width: 1405px){
        position: unset !important ;
        max-width: 630px;
        width: 100%;
        min-height: 200px;
        height: 100%;
        display: flex;
    }
`

export const HeaderWrapper=styled.div`
    margin: 15px 20px;
    font-size: 16px;
`

export const MajorWrapper=styled.div`
    font-size: 15px;
    margin-left: 20px;
`

export const TagList=styled.div`
    display:flex;
    align-items: center;
    margin: 10px 0;
    flex-wrap: wrap;
    & span{
        padding: 4px 15px;
        border-radius: 30px;
        font-size: 12px;
        background: #eee;
        color: #767676;
        margin-right: 5px;
        margin-bottom: 10px;
        cursor: pointer;
        &:hover{
            background-color: ${color.purple200};
            color: white;
        }
    }
`

export const DdayWapper=styled.div`
    margin-left: 20px;
`

export const Dday = styled.div`
    display: flex;
    height: 25px;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 10px;
`

export const Ddate = styled.div`
    flex-direction: column;
`

export const NoRecruiment = styled.div`
    font-size: 14px;
    margin-left: 20px;
`

export const ButtonWapper = styled.div`
    position: relative;
    width: 100%;
    height: 60px;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 1405px){
        height: 70px;
        display: flex;
        justify-content: center;
    }
`

export const Button = styled.button`
    width: 130px;
    height: 40px;
    border-radius: 15px;
    outline: none;
    background-color: ${color.purple300};
    color: white;
    cursor: pointer;
    &:disabled{
        background-color: ${color.grey400}
    }
`