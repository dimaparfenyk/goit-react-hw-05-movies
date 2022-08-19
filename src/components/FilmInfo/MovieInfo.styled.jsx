import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MovieDetailsNavLink = styled(NavLink)`
text-decoration:none;
text-transform: uppercase;
background-color: #ffb539;
width:360px;
color:black;
display: block;
padding: 10px;
border-radius: 8px;
font-weight:600;
cursor: pointer;
text-align:center;
`
export const NavBox = styled.div`
display:flex;
flex-direction: column;
`

export const Container = styled.div`
display:flex;
margin-bottom: 40px;
`
export const MovieBox = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-right:20px;
margin-bottom:20px;
`

export const SubTitle = styled.p`
font-size: 32px;
font-weight:700;
margin:0 auto 30px auto;
`

export const OverviewText = styled.p`
font-size: 24px;
line-height: 40px;
margin:0 auto 40px auto;
`

export const GenresList = styled.ul`
list-style:none;
display:flex;
flex-direction:row;
padding:0;
`

export const GenreItem = styled.li`
margin-right:10px;
font-style:italic;
font-size:20px;
margin-right: 10px;
`