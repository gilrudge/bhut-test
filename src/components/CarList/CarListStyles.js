import styled from "styled-components";

export const CardsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;  
`

export const CarListTitle = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 50px;
  &.form-title{
    padding: 30px;
  }
  &.car-list-title{
    padding: 30px;
  }
`

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 400px;
  gap: 15px;
  margin-bottom: 30px;

`

export const InputStyle = styled.input`
  width: 300px;
  border-radius: 10px;
  border: none;
  padding: 7px 10px;
`