import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Form=styled.form `
display: flex;
align-items: center;
margin: 40px auto;
max-width: 400px;
border-radius: 3px;
overflow: hidden;
`

export const FormInput =styled.input`
display: inline-block;
font: inherit;
font-size: 20px;
border:2px solid #ffb539;
margin-right:10px;
padding: 5px;
border-radius:8px;
`
export const FormButton = styled.button`
display: inline-block;
width: 48px;
height: 48px;
border: 1px;
background-color:#f59f0f ;
border-radius: 50%;
opacity: 0.6;
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
cursor: pointer;
  :hover{
    background-color:#ffb539;
    scale:1.02;
    }
`
export const Container = styled.div`
margin-bottom:30px;
`

export const StyledNavLink = styled(NavLink)`
    text-transform: uppercase;
    background-color: #ffb539;
    width: 180px;
    text-decoration: none;
    color:black;
    margin-bottom: 28px;
    display: inline-block;
    padding: 10px;
    border-radius: 8px;
    font-weight:600;
    cursor: pointer;
    text-align:center;
`

export const GoBackButton = styled.button`
    text-transform: uppercase;
    background-color: #ffb539;
    border:none;
    width: 180px;
    text-decoration: none;
    color:black;
    margin-bottom: 28px;
    display: inline-block;
    padding: 10px;
    border-radius: 8px;
    font-weight:600;
    cursor: pointer;
    text-align:center;
`

export const SubTitle = styled.h2`
margin-bottom:30px;
`
export const CastList = styled.ul`
display:flex;
flex-direction:row;
flex-wrap: wrap;
margin-bottom: -20px;
margin-right: -20px;
`

export const CastItem = styled.li`
width:160px;
height:305px;
overflow: hidden;
margin-bottom: 20px;
margin-right: 20px;
`

export const CastText = styled.p`
text-align: center;
`

