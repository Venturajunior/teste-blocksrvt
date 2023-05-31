import React from "react"
import { CardList } from "../../components/CardList"
import { Footer } from "../../components/Footer"
import { PremiumHeaderBanner } from "../../components/PremiumHeaderBanner"
import { PremiumMobileBanner } from "../../components/PremiumMobileBanner"
import { WrapperLogo, Container, TitleWrapper, LogoImage } from "./styles"

import logoweb from "../../assets/logoweb.png";

export const Home: React.FC = () => {
  return (
    <Container>
      <PremiumHeaderBanner />

      <WrapperLogo>
        <LogoImage src={logoweb} alt="logo" />
      </WrapperLogo>

      <TitleWrapper>
        <h1>Catálogo</h1>
      </TitleWrapper>

      <CardList />

      <Footer />
      <PremiumMobileBanner />
    </Container>
  )
}
