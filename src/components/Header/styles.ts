import styled from '@emotion/styled';
import {color} from '@/src/styles'

interface HeadProps{
    state: number,
    color: string,
}
export const Header = styled.header<HeadProps>`
    width:100%; 
    background-color:white; 
    top: 0;
    z-index: 99;  
    backdrop-filter: saturate(180%) blur(20px);
    position : ${(props)=>props.state>=60 ? "fixed" : null};
    width : ${(props)=>props.state>=60 ? "100%" : null};
    background-color: ${props => props.color==="white" ? "hsla(0,0%,100%,.75)" : color.purple300};
    color:${(props)=>props.color=="white"?"black":props.color=="purple"?"white":"white"};
`
export const TopHeader = styled.div`
    height: 55px;
    display:flex;
    align-items:center;
    max-width: 1250px;
    margin: 0 auto;
    padding: 0px 15px;
    justify-content: space-between;
    border-bottom:1px solid ${color.grey300};
    a{
        text-decoration:none;
        font-size:16px;
        display: flex;
        align-items: center;
    }
    svg{
        width: 25px;
        height: 25px;
    }
    `

export const BottomHeader = styled.div<{state : number}>`
    max-width: 1250px;
    margin: 0 auto;
    padding: 0px 15px;
    height: 60px;
    display: ${(props)=>props.state>=60 ? "none" : "flex"};
    align-items:center;
    justify-content:space-between;
    ul{
        align-items:center;
        padding: 0;
        margin: 0;
        display:flex;  
        list-style: none; 
        h3{
            font-size: 16px;  
            font-weight:500;
            margin: 0;
            margin-left: 15px;
            margin-right: 10px;
        }
        li{
            text-decoration:none;
            & a{
                color: black;
            }
            font-size: 14px;
            margin-left: 20px;
            cursor: pointer;
            :hover{
                color:tomato !important;
        }
    }
        
}
`
