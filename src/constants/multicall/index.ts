import { ChainId } from '@uniswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.ROPSTEN]: '0x53C43764255c17BD724F74c4eF150724AC50a3ed',
  [ChainId.KOVAN]: '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
  [ChainId.RINKEBY]: '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821',
  [ChainId.GÖRLI]: '0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e',
  [ChainId.TBNB]: "0x7D3558f8b27A98a16Ea370581216A351784DDeDA",// "0x7D3558f8b27A98a16Ea370581216A351784DDeDA",         
  [ChainId.KCB]: "0x07de2269513e79ED0152D6c26d33891ef3Dd6279",           
  [ChainId.ETPOSCHAINTESTNET]:'0xB01d1f2e3d599E3dECe22d0348B076903ca60a9f'  

}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
