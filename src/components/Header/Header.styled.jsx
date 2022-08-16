import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SiteNav = styled.header`
display:flex;
justify-content: center;
padding: 100px 15px;
background:#0B221C;
`

export const StyledNavLink = styled(NavLink)`
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 15px 60px;
    border-radius: 8px;
    text-decoration:none;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 18px;
    line-height: 16px;
    min-width: 150px;
    height: 40px;
    color:black;
    background-color:#ffb539;
    margin-right:40px;
`