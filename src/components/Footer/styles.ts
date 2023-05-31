import styled from "styled-components";
import { devices } from '../../constants/devices'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.8rem;
  padding: 2.4rem;

  /* position: fixed;
  bottom: 0;
  width: 100%; */

  background: #E9E9E9;

  @media ${devices["sm-max"]} {
    flex-direction: column;
    align-items: start;
  }

  a {
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.2rem;
    text-align: center;

    text-decoration: none;

    color: #322E2E;
  }

`