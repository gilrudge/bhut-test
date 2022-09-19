import styled from "styled-components";

export const CarCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 160px;
  width: 18%;
  box-shadow: #777 0px 3px 15px 0px;
  padding: 20px;
  margin-bottom: 30px;
  border-radius: 10px;
  background-color: #089eae;  
`

export const InfoList = styled.ul`
  
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: small;
  margin-bottom: 5px;
`

export const CardTitle = styled.h3`
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: 20px;
`

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 5px;
  margin-top: 8px;
`

export const Button = styled.button`
  width: 50%;
  border-radius: 10px;
  border: none;
  background-color: #fff;
  color:#343a40;
  font-weight: 700;
  cursor: pointer;
  :hover{
    background-color: #ddd;
    transition: 80ms ;   
  }
  &.show-button{
    width: 100%;
  }
  &.form-button{
    padding: 5px;
    width: 40%;
    font-size: 15px;
  }
`

export const ListItem = styled.li`
  line-height: 16px;
  
`