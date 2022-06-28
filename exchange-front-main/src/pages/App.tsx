import React, { Suspense } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import GoogleAnalyticsReporter from '../components/analytics/GoogleAnalyticsReporter'
import Header from '../components/Header'
import Popups from '../components/Popups'
import Web3ReactManager from '../components/Web3ReactManager'
import AddLiquidity from './AddLiquidity'
import {
  RedirectDuplicateTokenIds,
  RedirectOldAddLiquidityPathStructure,
  RedirectToAddLiquidity
} from './AddLiquidity/redirects'
import MigrateV1 from './MigrateV1'
import MigrateV1Exchange from './MigrateV1/MigrateV1Exchange'
import RemoveV1Exchange from './MigrateV1/RemoveV1Exchange'
import Pool from './Pool'
import PoolFinder from './PoolFinder'
import RemoveLiquidity from './RemoveLiquidity'
import { RedirectOldRemoveLiquidityPathStructure } from './RemoveLiquidity/redirects'
import Swap from './Swap'
import { RedirectPathToSwapOnly, RedirectToSwap } from './Swap/redirects'

import Farm from '../mypages/Farm';
import Staking from "../mypages/Staking";
import LockVault from '../mypages/LockVault';
import Ido from "../mypages/Ido";

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  overflow-x: hidden;
`

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-top: 160px;
  align-items: center;
 
  justify-content:end;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;


  ${({ theme }) => theme.mediaWidth.upToSmall`
  padding-left:40px;
  padding-right:40px;
`};
${({ theme }) => theme.mediaWidth.upToExtraSmall`
padding: 20px;
`};

  z-index: 1;
`

const Marginer = styled.div`
  margin-top: 5rem;
`

// const LogoTitle = styled.img`
//   width: 350px;
//   margin-top: 20px;
// `

// const BackImage = styled.img`
//   position: fixed;
//   top: 5%;
//   width: 100%;
// `

export default function App() {
  return (
    <Suspense fallback={null}>
      <HashRouter>
        <Route component={GoogleAnalyticsReporter} />
        <AppWrapper>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <BodyWrapper>
            <Popups />
            <Web3ReactManager>
              <Switch>
              <Route exact strict path="/" component={Swap} />
              <Route exact path="/swap" component={Swap} />
                <Route exact path="/farm" component={Farm} />
                <Route exact strict path="/staking" component={Staking} />
                <Route exact  path="/LockVault" component={LockVault} />
                <Route exact  path="/ido" component={Ido} />
              
                {/* {<Route exact  path="/farm" component={Farm} />} */}
                <Route exact  path="/swap/:outputCurrency" component={RedirectToSwap} />
                <Route exact  path="/send" component={RedirectPathToSwapOnly} />
                <Route exact  path="/find" component={PoolFinder} />
                <Route exact  path="/pool" component={Pool} />

                <Route exact  path="/create" component={RedirectToAddLiquidity} />
                <Route exact path="/add" component={AddLiquidity} />
                <Route exact path="/add/:currencyIdA" component={RedirectOldAddLiquidityPathStructure} />
                <Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
                <Route exact  path="/remove/v1/:address" component={RemoveV1Exchange} />
                <Route exact  path="/remove/:tokens" component={RedirectOldRemoveLiquidityPathStructure} />
                <Route exact  path="/remove/:currencyIdA/:currencyIdB" component={RemoveLiquidity} />
                <Route exact  path="/migrate/v1" component={MigrateV1} />
                <Route exact  path="/migrate/v1/:address" component={MigrateV1Exchange} />
                {/* <Route component={RedirectPathToSwapOnly} /> */}
              </Switch>
            </Web3ReactManager>
            {/* <LogoTitle src={LogoH} alt="bg" /> */}
            <Marginer />
          </BodyWrapper>
        </AppWrapper>
      </HashRouter>
    </Suspense>
  )
}
