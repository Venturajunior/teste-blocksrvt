import { Button, PremiumBarContainer } from "./styles";
import { ArrowRight } from "@phosphor-icons/react";
import React from "react";

export const PremiumHeaderBanner: React.FC = () => {
  const premLink = 'https://www.blocksrvt.com/en/home#plan'
  return (
    <>
      <PremiumBarContainer>
        <p>Não limite sua criatividade, junte-se a familia Blocks por apenas <strong>BRL 19,99</strong></p>
        <Button><a href={premLink}>Quero ser premium</a> <ArrowRight size={16} /> </Button>
      </PremiumBarContainer>
    </>
  )
}