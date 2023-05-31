import { Button, PremiumBarContainer } from "./styles";
import { ArrowRight } from "@phosphor-icons/react";
import React from "react";

export const PremiumHeaderBanner: React.FC = () => {
  return (
    <>
      <PremiumBarContainer>
        <p>Não limite sua criatividade, junte-se a familia Blocks por apenas <strong>BRL 19,99</strong></p>
        <Button>Quero ser premium <ArrowRight size={16} /> </Button>
      </PremiumBarContainer>
    </>
  )
}