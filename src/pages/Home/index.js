import React from 'react'
import AllianceSection from './components/AllianceSection';
import MediaPartnerSection from './components/MediaPartnerSection';
import SponsorsSection from './components/PartnersSection';
import TeamSection from './components/TeamSection';
import WelcomeSection from './components/WelcomeSection';

import { HomeContainer } from './styles';

const Home = () => {
  return (
    <HomeContainer>

      <WelcomeSection />
      <SponsorsSection />
      <AllianceSection />
      <TeamSection />
      <MediaPartnerSection />

    </HomeContainer>
  )
}

export default Home
