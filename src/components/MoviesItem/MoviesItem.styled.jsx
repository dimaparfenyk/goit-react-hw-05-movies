import styled from "styled-components"

export const FilmCard = styled.li`
display:flex;
align-items:center;
flex-direction:column;
width:360px;
margin-right:40px;
margin-bottom:40px;
border-radius:8px;
`
export const FilmDescription = styled.div`
display:flex;
flex-direction:row;
align-items: baseline;
justify-content: space-around;
`

export const FilmTitle = styled.p`
display: inline-block;
font-size: 22px;
color:black;
font-weight: 700;
text-transform: uppercase;
margin-bottom:15px;
`

export const FilmRate = styled.p`
font-size: 20px;
font-weight: 600;
`