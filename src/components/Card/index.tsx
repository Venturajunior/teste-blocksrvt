import React from "react";
import { CardContainer, CardContainerFooter } from "./styles";
import { ArrowUpRight } from "@phosphor-icons/react";

interface CardProps {
  imgUrl?: string;
  name?: string;
}

export const Card: React.FC<CardProps> = ({ name = "", imgUrl = "" }) => {
   return (
    <CardContainer>
      <img src={imgUrl} alt="Imagem do produto no card" />
      <CardContainerFooter>
        <p>{name}</p>
        <div className="border">
          <ArrowUpRight size={20} />
        </div>
      </CardContainerFooter>
    </CardContainer>
  )
}