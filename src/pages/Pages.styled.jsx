import styled from "styled-components";

export const Form=styled.form `
display: flex;
align-items: center;
margin: 40px auto;
max-width: 400px;
 ${'' /* background-color: #fff; */}
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

// export const DetailedInfoBox = styled.div`

// `

