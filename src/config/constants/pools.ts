import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  // {
  //   sousId: 0,
  //   tokenName: 'KNIGHT',
  //   stakingTokenName: QuoteToken.KNIGHT,
  //   stakingTokenAddress: '0x4E8733621cC3Ee2Da614485381C3b4A374921395',
  //   contractAddress: {
  //     97: '0x84fd17d24C97E7170dCE4fdB1ce64613b9935014',
  //     56: '0x73feaa1eE314F8c655E354234017bE2193C9E24E',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://pancakeswap.finance/',
  //   harvest: true,
  //   tokenPerBlock: '0.5',
  //   sortOrder: 1,
  //   isFinished: false,
  //   tokenDecimals: 18,
  // },
  { 
    sousId: 1,
    tokenName: 'TAX',
    stakingTokenName: QuoteToken.KNIGHT,
    stakingTokenAddress: '0x90847BeED6d44A70dc2eEf8b6aD83E92217f1267', // 0x4dB8034c21aE48bc6713938E43378A93Ad74C48A
    contractAddress: {
      97: '0xBd570671A6b9866ee7e4CB3403FA8aa5DA8Aa55f',
      56: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://trustwallet.com/',
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  { 
    sousId: 2, 
    tokenName: 'BUSD',
    stakingTokenName: QuoteToken.KNIGHT,
    stakingTokenAddress: '0x4E8733621cC3Ee2Da614485381C3b4A374921395',
    contractAddress: {
      97: '0xeb8A345ab74Ba098387a4ef18191C6D8793D9ae7',
      56: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://trustwallet.com/',
    harvest: true,
    tokenPerBlock: '0.5',
    sortOrder: 999,
    isFinished: false,
    tokenDecimals: 18,
  },
  // { 
  //   sousId: 1,
  //   tokenName: 'KNIGHT',
  //   stakingTokenName: QuoteToken.CAKE,
  //   stakingTokenAddress: '0x95b907a589F420955979C11271D5BA0da93cC5dC',
  //   contractAddress: {
  //     97: '0xc134bBA9e360E9bA463FCf72C3799C8Fa757954c',
  //     56: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://trustwallet.com/',
  //   harvest: true,
  //   tokenPerBlock: '0.2',
  //   sortOrder: 999,
  //   isFinished: false,
  //   tokenDecimals: 18,
  // },
]

export default pools
