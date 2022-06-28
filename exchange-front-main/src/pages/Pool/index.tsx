import React, { useContext, useMemo, useState, useEffect } from 'react'
import { ThemeContext } from 'styled-components'
import { Pair } from '@pancakeswap-libs/sdk'
import { Link } from 'react-router-dom'
import { SwapPoolTabs } from '../../components/NavigationTabs'

import Question from '../../components/QuestionHelper'
import FullPositionCard from '../../components/PositionCard'
import { useUserHasLiquidityInAllTokens } from '../../data/V1'
import { useTokenBalancesWithLoadingIndicator } from '../../state/wallet/hooks'
import { StyledInternalLink, TYPE } from '../../components/Shared'
import { Text } from 'rebass'
import { LightCard } from '../../components/Card'
import { RowBetween } from '../../components/Row'
import { ButtonPrimary } from '../../components/Button'
import { AutoColumn } from '../../components/Column'

import { useActiveWeb3React } from '../../hooks'
import { usePairs } from '../../data/Reserves'
import { toV2LiquidityToken, useTrackedTokenPairs } from '../../state/user/hooks'
import AppBody from '../AppBody'
import { Dots } from '../../components/swap/styleds'
import TranslatedText from '../../components/TranslatedText'
import { useI18n } from 'i18n/i18n-react'
import CandleGraph from '../../mypages/CandleGraph'

export default function Pool() {
  const i18n = useI18n()
  const theme = useContext(ThemeContext)
  const { account } = useActiveWeb3React()
  const [loader, setLoader] = useState(true)

  // fetch the user's balances of all tracked V2 LP tokens
  const trackedTokenPairs = useTrackedTokenPairs()
  const tokenPairsWithLiquidityTokens = useMemo(
    () => trackedTokenPairs.map(tokens => ({ liquidityToken: toV2LiquidityToken(tokens), tokens })),
    [trackedTokenPairs]
  )
  const liquidityTokens = useMemo(() => tokenPairsWithLiquidityTokens.map(tpwlt => tpwlt.liquidityToken), [
    tokenPairsWithLiquidityTokens
  ])
  const [v2PairsBalances, fetchingV2PairBalances] = useTokenBalancesWithLoadingIndicator(
    account ?? undefined,
    liquidityTokens
  )

  // fetch the reserves for all V2 pools in which the user has a balance
  const liquidityTokensWithBalances = useMemo(
    () =>
      tokenPairsWithLiquidityTokens.filter(({ liquidityToken }) =>
        v2PairsBalances[liquidityToken.address]?.greaterThan('0')
      ),
    [tokenPairsWithLiquidityTokens, v2PairsBalances]
  )

  const v2Pairs = usePairs(liquidityTokensWithBalances.map(({ tokens }) => tokens))
  const v2IsLoading =
    fetchingV2PairBalances || v2Pairs?.length < liquidityTokensWithBalances.length || v2Pairs?.some(V2Pair => !V2Pair)

  const allV2PairsWithLiquidity = v2Pairs.map(([, pair]) => pair).filter((v2Pair): v2Pair is Pair => Boolean(v2Pair))

  const hasV1Liquidity = useUserHasLiquidityInAllTokens()
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 1000)
  }, [])

  return (
    <>
      <div className="container mx-auto">
        <div className="row">
          <div className=" tradeC col-lg-8 col-md-6 col-12 order-1 py-2">
            <div className="d-flex justify-content-center align-item-center">
              {loader && (
                <button className="btn btn-primary" style={{ marginTop: '200px' }} type="button" disabled>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  Loading Chart...
                </button>
              )}
            </div>
            {!loader && (
              <div className="tradeViewChart" style={{ background: 'transparent', height: '100%', width: '100%' }}>
                <CandleGraph />
              </div>
            )}
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center order-md-1 py-2">
            {' '}
            <AppBody>
              <SwapPoolTabs active={'pool'} />
              <AutoColumn gap="lg" justify="center">
                <ButtonPrimary id="join-pool-button" as={Link} style={{ padding: 16 , margin: "10px 0px"}} to="/add/ETH">
                  <Text fontWeight={500} fontSize={20}>
                    <TranslatedText translationId={288}>Add Liquidity</TranslatedText>
                  </Text>
                </ButtonPrimary>

                <AutoColumn gap="12px" style={{ width: '100%' }}>
                  <RowBetween padding={'0 8px'}>
                    <Text color={theme.colors.text1} fontWeight={500}>
                      <TranslatedText translationId={204}>Your Liquidity</TranslatedText>
                    </Text>
                    <Question
                      text={i18n(
                        302,
                        'When you add liquidity, you are given pool tokens that represent your share. If you don’t see a pool you joined in this list, try importing a pool below.'
                      )}
                    />
                  </RowBetween>

                  {!account ? (
                    <LightCard padding="40px">
                      <TYPE.body color={theme.colors.text3} textAlign="center">
                        {i18n(768, 'Connect to a wallet to view your liquidity.')}
                      </TYPE.body>
                    </LightCard>
                  ) : v2IsLoading ? (
                    <LightCard padding="40px">
                      <TYPE.body color={theme.colors.text3} textAlign="center">
                        <Dots>Loading</Dots>
                      </TYPE.body>
                    </LightCard>
                  ) : allV2PairsWithLiquidity?.length > 0 ? (
                    <>
                      {allV2PairsWithLiquidity.map(v2Pair => (
                        <FullPositionCard key={v2Pair.liquidityToken.address} pair={v2Pair} />
                      ))}
                    </>
                  ) : (
                    <LightCard padding="40px">
                      <TYPE.body color={theme.colors.text3} textAlign="center">
                        <TranslatedText translationId={292}>No liquidity found.</TranslatedText>
                      </TYPE.body>
                    </LightCard>
                  )}

                  <div>
                    <Text textAlign="center" fontSize={14}  style={{ padding: '.5rem 0 .5rem 0', }}>
                      {hasV1Liquidity ? 'Uniswap V1 liquidity found!' : i18n(304, "Don't see a pool you joined?")}{' '}
                      <StyledInternalLink id="import-pool-link" to={hasV1Liquidity ? '/migrate/v1' : '/find'}>
                        {hasV1Liquidity ? 'Migrate now.' : i18n(306, 'Import it.')}
                      </StyledInternalLink>
                    </Text>
                  </div>
                </AutoColumn>
              </AutoColumn>
            </AppBody>
          </div>
        </div>
      </div>
    </>
  )
}
