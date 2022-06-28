import React from 'react'
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import TranslatedText from '../TranslatedText'

const Nav: React.FC = () => {
  return (
    <StyledNav>
     
      <StyledAbsoluteLink href="/exchange#/farm">
        <TranslatedText translationId={198}>Farm</TranslatedText>
      </StyledAbsoluteLink>
     
     
     <StyledAbsoluteLink href="/exchange#/staking">
        <TranslatedText translationId={200}>Staking</TranslatedText>
      </StyledAbsoluteLink>
    
     
      <StyledAbsoluteLink href="/exchange#/lockvault">
        <TranslatedText translationId="nav-pud-vault">LockVault</TranslatedText>
      </StyledAbsoluteLink>
     
      {/* <StyledAbsoluteLink href="https://puddingswap.finance/ePud">
        <TranslatedText translationId={218}>ePUD Pools</TranslatedText>
      </StyledAbsoluteLink> */}
      {/* <StyledAbsoluteLink href="https://puddingswap.finance/chefnft">NFT</StyledAbsoluteLink> */}
      <StyledAbsoluteLink href="/exchange"  style={{textDecoration:"none"}}>
        <TranslatedText translationId={202}>Exchange</TranslatedText>
      </StyledAbsoluteLink>
      
      <StyledAbsoluteLink href="/exchange#/ido">
        IDO
      </StyledAbsoluteLink>
      
      {/* <StyledAbsoluteLink href="https://info.puddingswap.finance">
        <TranslatedText translationId={348}>Analytics</TranslatedText>
      </StyledAbsoluteLink>
      <StyledAbsoluteLink href="https://voting.puddingswap.finance">
        <TranslatedText translationId={370}>Voting</TranslatedText>
      </StyledAbsoluteLink> */}
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  font-size: 14px;
  font-weight: 700;
  @media (max-width: 500px) {
    display none;
  }
`

const StyledAbsoluteLink = styled.a`
  position: relative;
  color: rgb(127, 134, 143);
  margin-right: 24px;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  @media (max-width: 400px) {
    margin-right: 24px;
  }
`


export default Nav
