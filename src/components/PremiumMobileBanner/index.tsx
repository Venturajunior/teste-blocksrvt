import { Button, CloseButton, PremiumMobileContainer } from "./styles";
import { ArrowRight } from "@phosphor-icons/react";
import React, { useState } from "react";

export const PremiumMobileBanner: React.FC = () => {
  const premLink = 'https://www.blocksrvt.com/en/home#plan'

  const [isDivVisible, setIsDivVisible] = useState(true);

  const handleCloseDiv = () => {
    setIsDivVisible(false);
  };

  return (
    <>
      {isDivVisible &&
        <PremiumMobileContainer>
          <CloseButton onClick={handleCloseDiv}>Fechar x</CloseButton>
          <p>Não limite sua criatividade, junte-se a familia Blocks por apenas <strong>BRL 19,99</strong></p>
          <Button><a href={premLink}>Quero ser premium</a> <ArrowRight size={16} /> </Button>
        </PremiumMobileContainer>}
    </>
  )
}