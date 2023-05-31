import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;

    border: 1px solid #CCCCCC;
    border-radius: 8px;
    overflow: hidden;
    background-color: #FFFFFF;
    width: 18rem;
    height: 24rem;

    img {
      flex: 1;
      max-height: 20rem;
    }
`
export const CardContainerFooter = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #CCCCCC;
  padding: 0.8rem;
  height: 8rem;

  p {
    flex: 1;
    height: 100%;
    font-size: 1rem;
    line-height: 1.4rem;
    font-weight: 600;
    position: relative;
    margin-right: 0.8rem;
  }

  .border {
    border-left: 1px solid #cccccc;
    padding-left: 0.4rem;
  }
`