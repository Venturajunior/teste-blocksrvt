import styled from "styled-components";
import { devices } from "../../constants/devices";

export const PremiumBarContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2.4rem 0.8rem;
  gap: 1.8rem;
  background: #242424;
  color: #FFFFFF;
  font-size: 1.8rem;
  order: 1;

  a {
    text-decoration: none;
    color: #FFFFFF;
  }

  @media ${devices["sm-max"]} {
    display: none;
  }
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.6rem;
  gap: .8rem;
  padding: 1.2rem 2.4rem;
      border: 1px solid transparent;
  cursor: pointer;
  transition: all .9s ease;

  background:
    linear-gradient(to right, #A11CF3, #D835C5) padding-box,
    linear-gradient(to right, #A11CF3, #D835C5) border-box ;
  color: #FFFFFF;

  &:hover {
    background:
      linear-gradient(to right, #2b2a2a, #2b2a2a) padding-box,
      linear-gradient(to right, #A11CF3, #D835C5) border-box ;
      border: 1px solid #D835C5;
  }

`