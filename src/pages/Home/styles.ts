import { devices } from "../../constants/devices";

import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #FBFBFB;
`;


export const WrapperLogo = styled.header`
    display: flex;
    justify-content: center;
    border-bottom: 1.5px solid transparent;
    border-image: linear-gradient(to right, #A11CF3, #D835C5);
    border-image-slice: 1;
    padding: 2.4rem .8rem;

`

export const LogoImage = styled.img`
    @media ${devices["sm-max"]} {
        width: 91px;
        height: 34px;
    }
`

export const TitleWrapper = styled.div`
    display: flex;
    padding: 2.4rem 0;
    box-shadow: 1px 0 5px #cccccc;

    h1 {
        font-size: 2.8rem;
        font-weight: 700;
        position: relative;
        max-width: 140rem;
        margin: 0 auto;
        width: 100%;
        
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0.2rem;
            width: 3.2rem;
            height: .4rem;
            border-radius: 8px;
            background-color: #D835C5;
        }
    }

`

