;(this['webpackJsonp@uniswap/interface'] = this['webpackJsonp@uniswap/interface'] || []).push([
  [2],
  {
    132: function(e) {
      e.exports = JSON.parse(
        '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]'
      )
    },
    133: function(e, t, n) {
      e.exports = n.p + 'static/media/kcb.4210de86.jpeg'
    },
    134: function(e, t, n) {
      e.exports = n.p + 'static/media/coinbaseWalletIcon.62578f59.svg'
    },
    135: function(e, t) {
      e.exports =
        'data:image/png;base64,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'
    },
    136: function(e, t, n) {
      e.exports = n.p + 'static/media/portisIcon.b234b2bf.png'
    },
    137: function(e, t, n) {
      e.exports = n.p + 'static/media/walletConnectIcon.8215855c.svg'
    },
    180: function(e, t, n) {
      var a = {
        './arrow-down-blue.svg': 465,
        './arrow-down-grey.svg': 466,
        './arrow-right-white.png': 467,
        './arrow-right.svg': 468,
        './big_unicorn.png': 209,
        './blue-loader.svg': 75,
        './circle-grey.svg': 469,
        './circle.svg': 470,
        './coinbaseWalletIcon.svg': 134,
        './dropdown-blue.svg': 471,
        './dropdown.svg': 472,
        './dropup-blue.svg': 473,
        './ethereum-logo.png': 216,
        './fortmaticIcon.png': 135,
        './kcb.jpeg': 133,
        './link.svg': 474,
        './magnifying-glass.svg': 475,
        './menu.svg': 476,
        './metamask.png': 215,
        './noise.png': 211,
        './plus-blue.svg': 477,
        './plus-grey.svg': 478,
        './portisIcon.png': 136,
        './question-mark.svg': 479,
        './question.svg': 480,
        './spinner.svg': 481,
        './token-list-logo.png': 482,
        './token-list/lists-dark.png': 483,
        './token-list/lists-light.png': 484,
        './token-logo.png': 87,
        './trustWallet.png': 485,
        './walletConnectIcon.svg': 137,
        './whoosh-icon.jpg': 486,
        './whoosh.png': 487,
        './x.svg': 488,
        './xl_uni.png': 210
      }
      function r(e) {
        var t = o(e)
        return n(t)
      }
      function o(e) {
        if (!n.o(a, e)) {
          var t = new Error("Cannot find module '" + e + "'")
          throw ((t.code = 'MODULE_NOT_FOUND'), t)
        }
        return a[e]
      }
      ;(r.keys = function() {
        return Object.keys(a)
      }),
        (r.resolve = o),
        (e.exports = r),
        (r.id = 180)
    },
    209: function(e, t, n) {
      e.exports = n.p + 'static/media/big_unicorn.3de55567.png'
    },
    210: function(e, t, n) {
      e.exports = n.p + 'static/media/xl_uni.ed12c533.png'
    },
    211: function(e, t, n) {
      e.exports = n.p + 'static/media/noise.17ab2292.png'
    },
    212: function(e) {
      e.exports = JSON.parse(
        '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]'
      )
    },
    213: function(e) {
      e.exports = JSON.parse(
        '[{"name":"TokenPurchase","inputs":[{"type":"address","name":"buyer","indexed":true},{"type":"uint256","name":"eth_sold","indexed":true},{"type":"uint256","name":"tokens_bought","indexed":true}],"anonymous":false,"type":"event"},{"name":"EthPurchase","inputs":[{"type":"address","name":"buyer","indexed":true},{"type":"uint256","name":"tokens_sold","indexed":true},{"type":"uint256","name":"eth_bought","indexed":true}],"anonymous":false,"type":"event"},{"name":"AddLiquidity","inputs":[{"type":"address","name":"provider","indexed":true},{"type":"uint256","name":"eth_amount","indexed":true},{"type":"uint256","name":"token_amount","indexed":true}],"anonymous":false,"type":"event"},{"name":"RemoveLiquidity","inputs":[{"type":"address","name":"provider","indexed":true},{"type":"uint256","name":"eth_amount","indexed":true},{"type":"uint256","name":"token_amount","indexed":true}],"anonymous":false,"type":"event"},{"name":"Transfer","inputs":[{"type":"address","name":"_from","indexed":true},{"type":"address","name":"_to","indexed":true},{"type":"uint256","name":"_value","indexed":false}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_spender","indexed":true},{"type":"uint256","name":"_value","indexed":false}],"anonymous":false,"type":"event"},{"name":"setup","outputs":[],"inputs":[{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"addLiquidity","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_liquidity"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function"},{"name":"removeLiquidity","outputs":[{"type":"uint256","name":"outA"},{"type":"uint256","name":"outB"}],"inputs":[{"type":"uint256","name":"amount"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function"},{"name":"__default__","outputs":[],"inputs":[],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"min_tokens"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":true,"type":"function"},{"name":"ethToTokenTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":true,"type":"function"},{"name":"tokenToEthSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToEthTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_eth"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToEthSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToEthTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"},{"type":"uint256","name":"max_tokens"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToTokenTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"token_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeSwapInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeTransferInput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"},{"type":"uint256","name":"min_tokens_bought"},{"type":"uint256","name":"min_eth_bought"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeSwapOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"tokenToExchangeTransferOutput","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"},{"type":"uint256","name":"max_tokens_sold"},{"type":"uint256","name":"max_eth_sold"},{"type":"uint256","name":"deadline"},{"type":"address","name":"recipient"},{"type":"address","name":"exchange_addr"}],"constant":false,"payable":false,"type":"function"},{"name":"getEthToTokenInputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_sold"}],"constant":true,"payable":false,"type":"function"},{"name":"getEthToTokenOutputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_bought"}],"constant":true,"payable":false,"type":"function"},{"name":"getTokenToEthInputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"tokens_sold"}],"constant":true,"payable":false,"type":"function"},{"name":"getTokenToEthOutputPrice","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"eth_bought"}],"constant":true,"payable":false,"type":"function"},{"name":"tokenAddress","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"factoryAddress","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"balanceOf","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"}],"constant":true,"payable":false,"type":"function"},{"name":"transfer","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_to"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function"},{"name":"transferFrom","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function"},{"name":"approve","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_spender"},{"type":"uint256","name":"_value"}],"constant":false,"payable":false,"type":"function"},{"name":"allowance","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"},{"type":"address","name":"_spender"}],"constant":true,"payable":false,"type":"function"},{"name":"name","outputs":[{"type":"bytes32","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"symbol","outputs":[{"type":"bytes32","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"decimals","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"totalSupply","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"}]'
      )
    },
    214: function(e) {
      e.exports = JSON.parse(
        '[{"name":"NewExchange","inputs":[{"type":"address","name":"token","indexed":true},{"type":"address","name":"exchange","indexed":true}],"anonymous":false,"type":"event"},{"name":"initializeFactory","outputs":[],"inputs":[{"type":"address","name":"template"}],"constant":false,"payable":false,"type":"function"},{"name":"createExchange","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"token"}],"constant":false,"payable":false,"type":"function"},{"name":"getExchange","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"token"}],"constant":true,"payable":false,"type":"function"},{"name":"getToken","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"address","name":"exchange"}],"constant":true,"payable":false,"type":"function"},{"name":"getTokenWithId","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"token_id"}],"constant":true,"payable":false,"type":"function"},{"name":"exchangeTemplate","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"},{"name":"tokenCount","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function"}]'
      )
    },
    215: function(e, t, n) {
      e.exports = n.p + 'static/media/metamask.023762b6.png'
    },
    216: function(e, t) {
      e.exports =
        'data:image/png;base64,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'
    },
    264: function(e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"bytes32[]","name":"_codes","type":"bytes32[]"},{"internalType":"address[]","name":"_implementations","type":"address[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"code","type":"bytes32"}],"name":"CodeAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"ImplementationAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_newOwner","type":"address"}],"name":"OwnerChanged","type":"event"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"acceptedCodes","outputs":[{"internalType":"bool","name":"exists","type":"bool"},{"internalType":"uint128","name":"index","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"acceptedImplementations","outputs":[{"internalType":"bool","name":"exists","type":"bool"},{"internalType":"uint128","name":"index","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_code","type":"bytes32"}],"name":"addCode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_argentWallet","type":"address"}],"name":"addCodeAndImplementationFromWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_impl","type":"address"}],"name":"addImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCodes","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getImplementations","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"}],"name":"isArgentWallet","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]'
      )
    },
    265: function(e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"address","name":"_factoryV1","type":"address"},{"internalType":"address","name":"_router","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'
      )
    },
    266: function(e) {
      e.exports = JSON.parse(
        '[{"constant":true,"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"name":"timestamp","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"components":[{"name":"target","type":"address"},{"name":"callData","type":"bytes"}],"name":"calls","type":"tuple[]"}],"name":"aggregate","outputs":[{"name":"blockNumber","type":"uint256"},{"name":"returnData","type":"bytes[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getLastBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockDifficulty","outputs":[{"name":"difficulty","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockGasLimit","outputs":[{"name":"gaslimit","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentBlockCoinbase","outputs":[{"name":"coinbase","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"blockNumber","type":"uint256"}],"name":"getBlockHash","outputs":[{"name":"blockHash","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]'
      )
    },
    332: function(e) {
      e.exports = JSON.parse(
        '{"name":"WhooshSwap LP Unsupported List","timestamp":"2021-01-05T20:47:02.923Z","version":{"major":1,"minor":0,"patch":0},"tags":{},"logoURI":"ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir","keywords":["uniswap","unsupported"],"tokens":[{"name":"Gold Tether","address":"0x4922a015c4407F87432B179bb209e125432E4a2A","symbol":"XAUt","decimals":6,"chainId":1,"logoURI":"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4922a015c4407F87432B179bb209e125432E4a2A/logo.png"}]}'
      )
    },
    336: function(e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract ENS","name":"_ens","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"contentType","type":"uint256"}],"name":"ABIChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"a","type":"address"}],"name":"AddrChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"coinType","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"newAddress","type":"bytes"}],"name":"AddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":false,"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"AuthorisationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"hash","type":"bytes"}],"name":"ContenthashChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"record","type":"bytes"}],"name":"DNSRecordChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"}],"name":"DNSRecordDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"DNSZoneCleared","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"indexed":false,"internalType":"address","name":"implementer","type":"address"}],"name":"InterfaceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"NameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"x","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"PubkeyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"string","name":"indexedKey","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"TextChanged","type":"event"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentTypes","type":"uint256"}],"name":"ABI","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"addr","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"authorisations","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"clearDNSZone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"contenthash","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"uint16","name":"resource","type":"uint16"}],"name":"dnsRecord","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"}],"name":"hasDNSRecords","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"interfaceImplementer","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"pubkey","outputs":[{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentType","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setABI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"coinType","type":"uint256"},{"internalType":"bytes","name":"a","type":"bytes"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"a","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"setAuthorisation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"hash","type":"bytes"}],"name":"setContenthash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setDNSRecords","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"internalType":"address","name":"implementer","type":"address"}],"name":"setInterface","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"setPubkey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"setText","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"}],"name":"text","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]'
      )
    },
    337: function(e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract ENS","name":"_old","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"label","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"old","outputs":[{"internalType":"contract ENS","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"recordExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setSubnodeRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"}]'
      )
    },
    338: function(e) {
      e.exports = JSON.parse(
        '[{"name":"Transfer","inputs":[{"type":"address","name":"_from","indexed":true},{"type":"address","name":"_to","indexed":true},{"type":"uint256","name":"_tokenId","indexed":true}],"anonymous":false,"type":"event"},{"name":"Approval","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_approved","indexed":true},{"type":"uint256","name":"_tokenId","indexed":true}],"anonymous":false,"type":"event"},{"name":"ApprovalForAll","inputs":[{"type":"address","name":"_owner","indexed":true},{"type":"address","name":"_operator","indexed":true},{"type":"bool","name":"_approved","indexed":false}],"anonymous":false,"type":"event"},{"outputs":[],"inputs":[],"constant":false,"payable":false,"type":"constructor"},{"name":"tokenURI","outputs":[{"type":"string","name":"out"}],"inputs":[{"type":"uint256","name":"_tokenId"}],"constant":true,"payable":false,"type":"function","gas":22405},{"name":"tokenByIndex","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"uint256","name":"_index"}],"constant":true,"payable":false,"type":"function","gas":631},{"name":"tokenOfOwnerByIndex","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"_owner"},{"type":"uint256","name":"_index"}],"constant":true,"payable":false,"type":"function","gas":1248},{"name":"transferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function","gas":259486},{"name":"safeTransferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function"},{"name":"safeTransferFrom","outputs":[],"inputs":[{"type":"address","name":"_from"},{"type":"address","name":"_to"},{"type":"uint256","name":"_tokenId"},{"type":"bytes","name":"_data"}],"constant":false,"payable":false,"type":"function"},{"name":"approve","outputs":[],"inputs":[{"type":"address","name":"_approved"},{"type":"uint256","name":"_tokenId"}],"constant":false,"payable":false,"type":"function","gas":38422},{"name":"setApprovalForAll","outputs":[],"inputs":[{"type":"address","name":"_operator"},{"type":"bool","name":"_approved"}],"constant":false,"payable":false,"type":"function","gas":38016},{"name":"mint","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"_to"}],"constant":false,"payable":false,"type":"function","gas":182636},{"name":"changeMinter","outputs":[],"inputs":[{"type":"address","name":"_minter"}],"constant":false,"payable":false,"type":"function","gas":35897},{"name":"changeURI","outputs":[],"inputs":[{"type":"address","name":"_newURI"}],"constant":false,"payable":false,"type":"function","gas":35927},{"name":"name","outputs":[{"type":"string","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":6612},{"name":"symbol","outputs":[{"type":"string","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":6642},{"name":"totalSupply","outputs":[{"type":"uint256","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":873},{"name":"minter","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":903},{"name":"socks","outputs":[{"type":"address","name":"out","unit":"Socks"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":933},{"name":"newURI","outputs":[{"type":"address","name":"out"}],"inputs":[],"constant":true,"payable":false,"type":"function","gas":963},{"name":"ownerOf","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1126},{"name":"balanceOf","outputs":[{"type":"uint256","name":"out"}],"inputs":[{"type":"address","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1195},{"name":"getApproved","outputs":[{"type":"address","name":"out"}],"inputs":[{"type":"uint256","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1186},{"name":"isApprovedForAll","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"address","name":"arg0"},{"type":"address","name":"arg1"}],"constant":true,"payable":false,"type":"function","gas":1415},{"name":"supportsInterface","outputs":[{"type":"bool","name":"out"}],"inputs":[{"type":"bytes32","name":"arg0"}],"constant":true,"payable":false,"type":"function","gas":1246}]'
      )
    },
    339: function(e) {
      e.exports = JSON.parse(
        '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]'
      )
    },
    365: function(e, t, n) {
      e.exports = n(741)
    },
    376: function(e, t) {},
    389: function(e, t) {},
    391: function(e, t) {},
    402: function(e, t) {},
    465: function(e, t, n) {
      e.exports = n.p + 'static/media/arrow-down-blue.cd061363.svg'
    },
    466: function(e, t, n) {
      e.exports = n.p + 'static/media/arrow-down-grey.c0dedd2f.svg'
    },
    467: function(e, t, n) {
      e.exports = n.p + 'static/media/arrow-right-white.337ad716.png'
    },
    468: function(e, t, n) {
      e.exports = n.p + 'static/media/arrow-right.d285b6cf.svg'
    },
    469: function(e, t, n) {
      e.exports = n.p + 'static/media/circle-grey.ed2a1dad.svg'
    },
    470: function(e, t, n) {
      e.exports = n.p + 'static/media/circle.2d975615.svg'
    },
    471: function(e, t, n) {
      e.exports = n.p + 'static/media/dropdown-blue.b20914ec.svg'
    },
    472: function(e, t, n) {
      e.exports = n.p + 'static/media/dropdown.7d32d2fa.svg'
    },
    473: function(e, t, n) {
      e.exports = n.p + 'static/media/dropup-blue.b96d70e1.svg'
    },
    474: function(e, t, n) {
      e.exports = n.p + 'static/media/link.50c67f3c.svg'
    },
    475: function(e, t, n) {
      e.exports = n.p + 'static/media/magnifying-glass.67440097.svg'
    },
    476: function(e, t, n) {
      e.exports = n.p + 'static/media/menu.4f2c4440.svg'
    },
    477: function(e, t, n) {
      e.exports = n.p + 'static/media/plus-blue.e8021e51.svg'
    },
    478: function(e, t, n) {
      e.exports = n.p + 'static/media/plus-grey.d8e0be7d.svg'
    },
    479: function(e, t, n) {
      e.exports = n.p + 'static/media/question-mark.1ae4d9f4.svg'
    },
    480: function(e, t, n) {
      e.exports = n.p + 'static/media/question.a46e8bc1.svg'
    },
    481: function(e, t, n) {
      e.exports = n.p + 'static/media/spinner.be00fc4a.svg'
    },
    482: function(e, t) {
      e.exports =
        'data:image/png;base64,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'
    },
    483: function(e, t) {
      e.exports =
        'data:image/png;base64,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'
    },
    484: function(e, t) {
      e.exports =
        'data:image/png;base64,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'
    },
    485: function(e, t, n) {
      e.exports = n.p + 'static/media/trustWallet.edcc1ab5.png'
    },
    486: function(e, t, n) {
      e.exports = n.p + 'static/media/whoosh-icon.85cca95d.jpg'
    },
    487: function(e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAAC+jCIaAAAACXBIWXMAABcSAAAXEgFnn9JSAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI0LTAxLTEwVDE0OjQ5OjU5KzA3OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTAxLTEwVDE0OjQ5OjU5KzA3OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNC0wMS0xMFQxNDo0OTo1OSswNzowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozMWM3MzE3Zi1iN2EzLWNiNDYtODE2Ni1hMjI0YmVkMTVlZTkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5OWQyZWViYy01NWIzLTM5NDktOWViNy0xN2I2NjFjNGUzMTAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiYmVhMjY1OC0wOGU2LTNjNDAtYWJhMi0wNGFiYWQ2YjU2NTMiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmJiZWEyNjU4LTA4ZTYtM2M0MC1hYmEyLTA0YWJhZDZiNTY1MyIgc3RFdnQ6d2hlbj0iMjAyNC0wMS0xMFQxNDo0OTo1OSswNzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDozMWM3MzE3Zi1iN2EzLWNiNDYtODE2Ni1hMjI0YmVkMTVlZTkiIHN0RXZ0OndoZW49IjIwMjQtMDEtMTBUMTQ6NDk6NTkrMDc6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4oG5qQAAAGiklEQVR4nO2ce4gVVRzHP3d3bbVtXKHSkl4mVrS9iEqUCNs/KnrYA6cphdTIKHph2z8VFEgIhYZFT8ievqapyMLIolqj0jAtKQvSWjBDKSptzHztbn+cue6Z3525d+beOVpxPiA7v9+c+zvnznw95/zOObul/v5+LJaiaTrYDbD8P7HCshjBCstiBCssixGssCxGsMKyGMEKy2IEKyyLEaywLEawwrIYwQrLYgQrLIsRrLAsRrDCshjBCstihBYAJ/AfAFo1/7zQ9X7NEsAJ/Gq3RwK3A+VDX38CDwMdwBSgD2gG1gFL8jQcuAi4EOiNYqwG3kgo1wRcCpwOHBb5ah1CK0U/Q2At8F6N8oOiOjqAthx19AM7UG3/oEb584FOYERk99Uon1RfC7AYWKH57wCOjuI1AfOBH7IGDV0PJ/C7gMNR32d36HqzWqL7t0TBy/wFzM7Z8CTuAWZq9kaUsDqBezX/KvIL63pgmma/T6WwrgfmEv9u9bAJmEGywKYBjwBHNlhHD3AT8KHwtwIfAeMajF9mK3FhzQEO0ezPySEsLYbOrPJQ+IK4cUXOwGl0CvvF6Odfwr+pjthbhb1Z2GOBRTQuKoDjgOXAGOHvRD27RkUFMArVa50k/M9RnKgAfhf298LeUUfMHu06hIE51uuiYEcdwSVDgFOEr+q4WTBdBmLeJ+x7DNQxQ7tuAiYWHH9YwfESaQEIXW+tE/i/AMMjv+ME/sTQ9d5qILZLfN72E2ooPBCUgAuEL4ja0JwxRi9wDHCt5jtRlJE92ALglxx17EP1UPoIofdO7cSHqe3AXcBeBuaBWSmh3scnOT9XFy3a9UrgSs2+BGhEWBOE3d1ArLy0AY7wdaGElYejiAtLf17NwFBR/mbg75x1nE1cWMO060HEM/cdwEs54x8U9Ae1iLiwzkn6gBP4zcDFDGQR76TEHivsxVXasb16MxOplrU2UZk1nUB+YY0Sdq+w9wp7NPBNzjqOrVHHgaandpEK9kiHLqzPxL1zncAfE7reBuFfClym2T5wnSgzEjhV+NZUadh4VJZ4SJUyOruAy6vc76d2uv9vRW/3buL/QYaiet684tsGrEcta9TiQeA74tOYNHqjjmaEvLFfWKHrbXYCfwPxecN4YL+wnMB3iYsKwENle+9qvvNEmdWouUcaHRSzvPF/409UbzA4sh0qU/s8PI6ao1Xjhgbi70euvC8Q9oTyhRP47aRndW8y8OUBpov7QR1ts6jea36B8e4kPmc0hhTWl8J2ncAvl3mV9EykFXg5uh5MZa9WbRi0VOduBp5tEVxTYKxUWoTdjVrgKmdUbaHr9TmBfyZqC0XHRw2DZVxUOt5DPN2WK71JfAE8Q/a9yz5gEipz/a+T5TtPRa3unwwcmvEzoOZi44DbNN/xNT7zKPBtxjr6UZ3NbOAI/UZMWKHrhU7gd6Olv07gz6FSVItD15vsBP5hxHunJagtAZ0V1J5sfkn+Lr+ddGGVyL/Oc7DI2s710b+89BAXVq138STwY9bg2l5hTFhJqpSZQxdqA7fMTuDW6Hq6aOi5qE1nnVUZ2teeoYyk1jaKfGFyyycL8jPyecmF0Hq2prbUiNkoQ4RdK1uWSyxZqMjm5VAIar1pVpUgk0PX2w4Qut6vTuBPpXLSX6YPWJi3lQWwE5VNtWm+q1EnFbIuaewFzhA+PfXvpXId6zpUFj0oYx17UCc0dHYJezRqarIvY0zJWcJOeueFU1FJ6HobncDfjNrOkLwdut5S4VsI3EjlhjOoXfJMx28KZh/wFfGXNreAuL8JexPxBc5nC6hjnbDfBE4rIG6ZnwuMlUraBO3TBN9u1DGUJCaR3MXKIyAHkqcMxHxa2PJUSBHIDFD2YI2yrOB4iaQJK2n7ZUroevK4S5k/UL2W5NWU8sOEndQ71mK4sEcK+zVgXh1x03iIyvNY8yl2nel+4GPhq+fZpLGMyr3G0cJuIz/6vMyB9PF2BfAKSnglYH3oevJojeRF1H7cGFTv1Uv6FsIa1N5keb9xZc2mV7IctWZWjtGdUGYmKlO9CiXEVrJv9ZRQvcVW1NLK1ynlbgKeR2XSI1BzuLx1bInqSNpnfIKBZ5qXEuo9bEONQkknbB9DDeflpYO8h/xALVGUt3V2ApTsn4q0mMD+MoXFCFZYFiNYYVmMYIVlMYIVlsUIVlgWI1hhWYxghWUxghWWxQhWWBYjWGFZjGCFZTGCFZbFCFZYFiP8A76MTQ+mVxSkAAAAAElFTkSuQmCC'
    },
    488: function(e, t, n) {
      e.exports = n.p + 'static/media/x.5b8e2186.svg'
    },
    741: function(e, t, n) {
      'use strict'
      n.r(t)
      var a,
        r = n(39),
        o = (n(367), n(0)),
        i = n.n(o),
        c = n(63),
        u = n(114),
        l = n.n(u),
        s = n(26),
        d = n(21),
        m = n(32),
        p = n(27),
        f = n(15),
        b = n(10),
        v = n(1),
        h = n(108),
        g = n(321),
        y = n(164),
        E = n(322),
        x = n(323),
        O = n(5),
        j = n.n(O),
        A = n(6),
        w = n(25),
        k = n(12),
        T = n(13),
        C = n(16),
        I = n(17),
        S = n(324),
        N =
          ((a = {}),
          Object(b.a)(a, v.a.MAINNET, ''),
          Object(b.a)(a, v.a.ROPSTEN, 'ropsten'),
          Object(b.a)(a, v.a.RINKEBY, 'rinkeby'),
          Object(b.a)(a, v.a.KOVAN, 'kovan'),
          Object(b.a)(a, v.a.TBNB, 'TBNB'),
          Object(b.a)(a, v.a.KCB, 'KCB'),
          Object(b.a)(a, v.a.ETPOSCHAINTESTNET, 'ETPOSCHAINTESTNET'),
          a),
        R = (function(e) {
          Object(C.a)(a, e)
          var t = Object(I.a)(a)
          function a() {
            return Object(k.a)(this, a), t.apply(this, arguments)
          }
          return (
            Object(T.a)(a, [
              {
                key: 'activate',
                value: (function() {
                  var e = Object(w.a)(
                    j.a.mark(function e() {
                      var t,
                        a,
                        r,
                        o,
                        i,
                        c,
                        u,
                        l,
                        s,
                        d,
                        m = this
                      return j.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.fortmatic) {
                                  e.next = 11
                                  break
                                }
                                return (e.next = 3), n.e(1).then(n.t.bind(null, 747, 7))
                              case 3:
                                if (((t = e.sent), (a = t.default), (o = (r = this).apiKey), !((i = r.chainId) in N))) {
                                  e.next = 10
                                  break
                                }
                                ;(this.fortmatic = new a(o, N[i])), (e.next = 11)
                                break
                              case 10:
                                throw new Error('Unsupported network ID: '.concat(i))
                              case 11:
                                return (
                                  (c = this.fortmatic.getProvider()),
                                  (u = new Promise(function(e) {
                                    var t = setInterval(function() {
                                      c.overlayReady && (clearInterval(t), m.emit('OVERLAY_READY'), e())
                                    }, 200)
                                  })),
                                  (e.next = 15),
                                  Promise.all([
                                    c.enable().then(function(e) {
                                      return e[0]
                                    }),
                                    u
                                  ])
                                )
                              case 15:
                                return (
                                  (l = e.sent),
                                  (s = Object(A.a)(l, 1)),
                                  (d = s[0]),
                                  e.abrupt('return', {
                                    provider: this.fortmatic.getProvider(),
                                    chainId: this.chainId,
                                    account: d
                                  })
                                )
                              case 19:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function() {
                    return e.apply(this, arguments)
                  }
                })()
              }
            ]),
            a
          )
        })(S.a),
        U = n(140),
        B = n(143),
        L = n(68),
        W = n(19),
        z = (function(e) {
          Object(C.a)(n, e)
          var t = Object(I.a)(n)
          function n(e, a, r) {
            var o
            return Object(k.a)(this, n), ((o = t.call(this, e)).code = a), (o.data = r), o
          }
          return n
        })(Object(B.a)(Error)),
        M = function e(t, n, a) {
          var r = this
          Object(k.a)(this, e),
            (this.isMetaMask = !1),
            (this.chainId = void 0),
            (this.url = void 0),
            (this.host = void 0),
            (this.path = void 0),
            (this.batchWaitTimeMs = void 0),
            (this.nextId = 1),
            (this.batchTimeoutId = null),
            (this.batch = []),
            (this.clearBatch = Object(w.a)(
              j.a.mark(function e() {
                var t, n, a, o, i, c, u, l, s, d, m, p, f, b
                return j.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            console.debug('Clearing batch', r.batch),
                            (t = r.batch),
                            (r.batch = []),
                            (r.batchTimeoutId = null),
                            (e.prev = 4),
                            (e.next = 7),
                            fetch(r.url, {
                              method: 'POST',
                              headers: { 'content-type': 'application/json', accept: 'application/json' },
                              body: JSON.stringify(
                                t.map(function(e) {
                                  return e.request
                                })
                              )
                            })
                          )
                        case 7:
                          ;(n = e.sent), (e.next = 14)
                          break
                        case 10:
                          return (
                            (e.prev = 10),
                            (e.t0 = e.catch(4)),
                            t.forEach(function(e) {
                              return (0, e.reject)(new Error('Failed to send batch call'))
                            }),
                            e.abrupt('return')
                          )
                        case 14:
                          if (n.ok) {
                            e.next = 17
                            break
                          }
                          return (
                            t.forEach(function(e) {
                              return (0, e.reject)(new z(''.concat(n.status, ': ').concat(n.statusText), -32e3))
                            }),
                            e.abrupt('return')
                          )
                        case 17:
                          return (e.prev = 17), (e.next = 20), n.json()
                        case 20:
                          ;(a = e.sent), (e.next = 27)
                          break
                        case 23:
                          return (
                            (e.prev = 23),
                            (e.t1 = e.catch(17)),
                            t.forEach(function(e) {
                              return (0, e.reject)(new Error('Failed to parse JSON response'))
                            }),
                            e.abrupt('return')
                          )
                        case 27:
                          ;(o = t.reduce(function(e, t) {
                            return (e[t.request.id] = t), e
                          }, {})),
                            (i = Object(U.a)(a))
                          try {
                            for (i.s(); !(c = i.n()).done; )
                              (u = c.value),
                                (l = o[u.id]),
                                (s = l.resolve),
                                (d = l.reject),
                                (m = l.request.method),
                                s &&
                                  d &&
                                  ('error' in u
                                    ? d(
                                        new z(
                                          null === u || void 0 === u || null === (p = u.error) || void 0 === p
                                            ? void 0
                                            : p.message,
                                          null === u || void 0 === u || null === (f = u.error) || void 0 === f
                                            ? void 0
                                            : f.code,
                                          null === u || void 0 === u || null === (b = u.error) || void 0 === b
                                            ? void 0
                                            : b.data
                                        )
                                      )
                                    : 'result' in u
                                    ? s(u.result)
                                    : d(
                                        new z(
                                          'Received unexpected JSON-RPC response to '.concat(m, ' request.'),
                                          -32e3,
                                          u
                                        )
                                      ))
                          } catch (v) {
                            i.e(v)
                          } finally {
                            i.f()
                          }
                        case 30:
                        case 'end':
                          return e.stop()
                      }
                  },
                  e,
                  null,
                  [
                    [4, 10],
                    [17, 23]
                  ]
                )
              })
            )),
            (this.sendAsync = function(e, t) {
              r.request(e.method, e.params)
                .then(function(n) {
                  return t(null, { jsonrpc: '2.0', id: e.id, result: n })
                })
                .catch(function(e) {
                  return t(e, null)
                })
            }),
            (this.request = (function() {
              var e = Object(w.a)(
                j.a.mark(function e(t, n) {
                  var a, o
                  return j.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if ('string' === typeof t) {
                            e.next = 2
                            break
                          }
                          return e.abrupt('return', r.request(t.method, t.params))
                        case 2:
                          if ('eth_chainId' !== t) {
                            e.next = 4
                            break
                          }
                          return e.abrupt('return', '0x'.concat(r.chainId.toString(16)))
                        case 4:
                          return (
                            (o = new Promise(function(e, a) {
                              r.batch.push({
                                request: { jsonrpc: '2.0', id: r.nextId++, method: t, params: n },
                                resolve: e,
                                reject: a
                              })
                            })),
                            (r.batchTimeoutId =
                              null !== (a = r.batchTimeoutId) && void 0 !== a
                                ? a
                                : setTimeout(r.clearBatch, r.batchWaitTimeMs)),
                            e.abrupt('return', o)
                          )
                        case 7:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )
              return function(t, n) {
                return e.apply(this, arguments)
              }
            })()),
            (this.chainId = t),
            (this.url = n)
          var o = new URL(n)
          ;(this.host = o.host), (this.path = o.pathname), (this.batchWaitTimeMs = null !== a && void 0 !== a ? a : 50)
        },
        P = (function(e) {
          Object(C.a)(n, e)
          var t = Object(I.a)(n)
          function n(e) {
            var a,
              r = e.urls,
              o = e.defaultChainId
            return (
              Object(k.a)(this, n),
              Object(W.a)(o || 1 === Object.keys(r).length, 'defaultChainId is a required argument with >1 url'),
              ((a = t.call(this, {
                supportedChainIds: Object.keys(r).map(function(e) {
                  return Number(e)
                })
              })).providers = void 0),
              (a.currentChainId = void 0),
              (a.currentChainId = o || Number(Object.keys(r)[0])),
              (a.providers = Object.keys(r).reduce(function(e, t) {
                return (e[Number(t)] = new M(Number(t), r[Number(t)])), e
              }, {})),
              a
            )
          }
          return (
            Object(T.a)(n, [
              {
                key: 'activate',
                value: (function() {
                  var e = Object(w.a)(
                    j.a.mark(function e() {
                      return j.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt('return', {
                                  provider: this.providers[this.currentChainId],
                                  chainId: this.currentChainId,
                                  account: null
                                })
                              case 1:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function() {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'getProvider',
                value: (function() {
                  var e = Object(w.a)(
                    j.a.mark(function e() {
                      return j.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt('return', this.providers[this.currentChainId])
                              case 1:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function() {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'getChainId',
                value: (function() {
                  var e = Object(w.a)(
                    j.a.mark(function e() {
                      return j.a.wrap(
                        function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt('return', this.currentChainId)
                              case 1:
                              case 'end':
                                return e.stop()
                            }
                        },
                        e,
                        this
                      )
                    })
                  )
                  return function() {
                    return e.apply(this, arguments)
                  }
                })()
              },
              {
                key: 'getAccount',
                value: (function() {
                  var e = Object(w.a)(
                    j.a.mark(function e() {
                      return j.a.wrap(function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt('return', null)
                            case 1:
                            case 'end':
                              return e.stop()
                          }
                      }, e)
                    })
                  )
                  return function() {
                    return e.apply(this, arguments)
                  }
                })()
              },
              { key: 'deactivate', value: function() {} },
              {
                key: 'provider',
                get: function() {
                  return this.providers[this.currentChainId]
                }
              }
            ]),
            n
          )
        })(L.a),
        D = '"https://go.getblock.io/723b9e067f2947d1b94a0681049af69c"',
        F = 'pk_live_F937DF033A1666BF',
        q = 'c0e2bf01-4b08-4fd5-ac7b-8e26b58cd236',
        V = parseInt(null !== '11000 ' ? '11000 ' : '1')
      var Y,
        H = new P({ urls: Object(b.a)({}, V, D) })
      var Q,
        X,
        J,
        G = new g.a({ supportedChainIds: [1, 3, 4, 5, 42, 97, 11e3, 6660] }),
        K = new y.a({ rpc: { 1: D }, bridge: 'https://bridge.walletconnect.org', qrcode: !0, pollingInterval: 15e3 }),
        Z = new R({ apiKey: F, chainId: 1 }),
        _ = new x.a({ dAppId: q, networks: [1] }),
        $ = new E.a({
          url: D,
          appName: 'Uniswap',
          appLogoUrl:
            'https://mpng.pngfly.com/20181202/bex/kisspng-emoji-domain-unicorn-pin-badges-sticker-unicorn-tumblr-emoji-unicorn-iphoneemoji-5c046729264a77.5671679315437924251569.jpg'
        }),
        ee = new Map([
          [
            2,
            '# Uniswap Grants Program v0.1\n\n*co-authored with [Ken Ng](https://twitter.com/nkennethk?lang=en)*\n\n## Summary:\n\n**This post outlines a framework for funding Uniswap ecosystem development with grants from the[ UNI Community Treasury](https://uniswap.org/blog/uni/).** The program starts small\u2014sponsoring hackathons, [for example](https://gov.uniswap.org/c/proposal-discussion/5)\u2014but could grow in significance over time (with renewals approved by governance) to fund core protocol development. Grants administration is a subjective process that cannot be easily automated, and thus we propose a nimble committee of 6 members \u20141 lead and 5 reviewers\u2014to deliver an efficient, predictable process to applicants, such that funding can be administered without having to put each application to a vote. We propose the program start with an initial cap of $750K per quarter and a limit of 2 quarters before renewal\u2014a sum that we feel is appropriate for an MVP relative to the size of the treasury that UNI token holders are entrusted with allocating.\n\n**Purpose:**\n\n**The mission of the UGP is to provide valuable resources to help grow the Uniswap ecosystem.** Through public discourse and inbound applications, the community will get first-hand exposure to identify and respond to the most pressing needs of the ecosystem, as well as the ability to support innovative projects expanding the capabilities of Uniswap. By rewarding talent early with developer incentives, bounties, and infrastructure support, UGP acts as a catalyst for growth and helps to maintain Uniswap as a nexus for DeFi on Ethereum.\n\n**Quarterly Budget:**\n\n* Max quarterly budget of up to $750k\n* Budget and caps to be assessed every six months\n\n**Grant Allocation Committee:**\n\n* Of 6 committee members: 1 lead and 5 reviewers\n* Each committee has a term of 2 quarters (6 months) after which the program needs to be renewed by UNI governance\n* Committee functions as a 4 of 5 multi-sig\n\n**Committee Members**\n\nWhile the goals and priorities of the grant program will be thoroughly discussed and reviewed by the community through public discourse, **the decision to start UGP by operating as a small committee is to ensure that the application and decision process will be efficient and predictable, so applicants have clear objectives and timely decisions.**\n\nStarting with just six members enables the committee to efficiently fund projects with tight feedback loops and rapid iterations. The purpose of this committee would be to test the hypothesis that the Grants Program can successfully provide value for the UNI ecosystem before scaling the program.\n\n**We suggest the grants program is administered by a single lead. Here we propose Kenneth Ng, a co-author of this post**. Ken has helped grow the Ethereum Foundation Grants Program over the last two years in establishing high level priorities and adapting for the ecosystems needs.\n\n**The other 5 committee members should be thought of as \u201creviewers\u201d \u2014 UNI community members who will keep the grants program functional by ensuring Ken is leading effectively and, of course, not absconding with funds.** Part of the reviewers job is to hold the program accountable for success (defined below) and/or return any excess funds to the UNI treasury. Reviewers are not compensated as part of this proposal as we expect their time commitment to be minimal. Compensation for the lead role is discussed below, as we expect this to be a labor intensive role.\n\n**Program Lead:** [Ken Ng](https://twitter.com/nkennethk?lang=en) (HL Creative Corp)\n*Ecosystem Support Program at the Ethereum Foundation*\n\n1. Reviewer: [Jesse Walden](https://twitter.com/jessewldn) (o/b/o Unofficial LLC dba [Variant Fund](http://twitter.com/variantfund))\n*Founder and Investor at Variant Fund (holds UNI)*\n\n2. Reviewer: [Monet Supply](https://twitter.com/MonetSupply)\n*Risk Analyst at MakerDAO*\n\n3. Reviewer: [Robert Leshner](https://twitter.com/rleshner)\n*Founder and CEO of Compound Finance*\n\n4. Reviewer: [Kain Warwick](https://twitter.com/kaiynne)\n*Founder of Synthetix*\n\n5. Reviewer: [Ashleigh Schap](https://twitter.com/ashleighschap)\n*Growth Lead, Uniswap (Company)*\n\n## Methodology\n\n**1.1 Budget**\n\nThis proposal recommends a max cap of $750K per quarter, with the ability to reevaluate biannually at each epoch (two fiscal quarters). While the UGP Grants Committee will be the decision makers around individual grants, respective budgets, roadmaps, and milestones, any top-level changes to UGP including epochs and max cap, will require full community quorum (4% approval).\n\nThe UGP will be funded by the UNI treasury according to the[ release schedule](https://uniswap.org/blog/uni/) set out by the Uniswap team, whereby 43% of the UNI treasury is released over a four-year timeline. In Year 1 this will total to 172,000,000 UNI (~$344M as of writing).\n\nTaking into consideration the current landscape of ecosystem funding across Ethereum, the community would be hard-pressed to allocate even 5% of Year 1\u2019s treasury. For context Gitcoin CLR Round 7 distributed $725k ($450k in matched) across 857 projects and YTD, Moloch has granted just under $200k but in contrast, the EF has committed to somewhere in the 8 figure range.\n\n**1.2 Committee Compensation**\n\nOperating a successful grants program takes considerable time and effort. Take, for instance, the EF Ecosystem Support Program, which has awarded grants since 2018, consists of an internal team at the Foundation as well as an ever increasing roster of community advisors in order to keep expanding and adapting to best serve the needs of the Ethereum ecosystem. While the structure of the allocation committee has six members, we propose that only the lead will be remunerated for their work in establishing the initial processes, vetting applications, and managing the program overall as this role is expected to be time consuming if the program is to be succesful. We propose that the other committee members be unpaid UNI ecosystem stakeholders who have an interest in seeing the protocol ecosystem continue to operate and grow.\n\n**We propose the lead be compensated 25 UNI/hr (approximately $100 USD at time of this writing) capped at 30 hours/week. This compensation, along with the quarterly budget, will be allocated to the UGP multisig from the UNI treasury**. In keeping with the committee\u2019s commitment to the community, hours and duties will be logged publicly and transparently .\n\n**2.1 Priorities**\n\nInitially, the program aims to start narrow in scope, funding peripheral ecosystem initiatives, such as targeted bounties, hackathon sponsorships, and other low-stakes means of building out the Uniswap developer ecosystem. Over time, if the program proves effective, the grant allocations can grow in scope to include, for example, improved frontends, trading interfaces, and eventually, core protocol development.\n\n![|624x199](upload://vNP0APCOjiwQMurCmYI47cTLklc.png)\n\nWith the initial priorities in mind, some effective measures for quick successes might look like:\n\n* Total number of projects funded\n* Quarterly increase in applications\n* Project engagement post-event/funding\n* Overall community engagement/sentiment\n\n**2.2 Timeline**\n\nIn keeping with the fast pace of the UNI ecosystem, we organize time in epochs, or two calendar quarters. Each epoch will see two funding rounds, one per quarter, after which the community can review and create proposals to improve or revamp the program as they deem fit.\n\n**![|624x245](upload://n56TSh5X3mt4TSqVVMFhbnZM0eM.png)**\n\n**Rolling Wave 1 & 2 Applications**\n\n* Starting in Q1 2021, UGP will start accepting applications for events looking for support in the form of bounties or prizes that in parallel can be proactively sourced. During these first two waves of funding projects, the allocation committee lead can begin laying out guardrails for continued funding\n\n* Considering the immediate feedback loops for the first epoch, we expect these allocation decisions to be discussed and reviewed by the larger community. Should this not be of value, the community can submit a formal governance proposal to change any piece of UGP that was not effective\n\n**Wave 3 & Beyond**\n\n* Beginning with Wave 3, there should have been enough time with impactful projects funded to be considered for follow-on funding, should it make sense. In the same vein, projects within scope will be expanded to also include those working on integrations and and other key components.\n\n* Beyond the second epoch, as the community helps to review and help adapt UGP to be most effective, the scope will continue to grow in order to accommodate the state of the ecosystem including that of core protocol improvements\n\n## Conclusion:\n\n**If this proposal is successfully approved, UGP will start accepting applications on a rolling basis beginning at the start of 2021.** With the phases and priorities laid out above, UGP will aim to make a significant impact by catalyzing growth and innovation in the UNI ecosystem.\n\n**This program is meant to be the simplest possible MVP of a Uniswap Ecosystem Grants initiative.** While the multi-sig committee comes with trust assumptions about the members, our hope is the community will approve this limited engagement to get the ball rolling in an efficient structure. **After the first epoch (2 fiscal quarters) the burden of proof will be on UGP to show empirical evidence that the program is worth continuing in its existing form and will submit to governance to renew treasury funding.**\n\nIf this program proves successful, we hope it will inspire others to follow suit and create their own funding committees for allocating treasury capital\u2014ideally with different specializations.\n'
          ]
        ]),
        te = '0x5a679D6b3FB946b15Ed933372c94e1b7Ed39397F',
        ne = '0x0000000000000000000000000000000000000000',
        ae = new v.l(v.a.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, 'DAI', 'Dai Stablecoin'),
        re = new v.l(v.a.MAINNET, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD//C'),
        oe = new v.l(v.a.MAINNET, '0xdAC17F958D2ee523a2206206994597C13D831ec7', 6, 'USDT', 'Tether USD'),
        ie = new v.l(v.a.MAINNET, '0xc00e94Cb662C3520282E6f5717214004A7f26888', 18, 'COMP', 'Compound'),
        ce = new v.l(v.a.MAINNET, '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2', 18, 'MKR', 'Maker'),
        ue = new v.l(v.a.MAINNET, '0xD46bA6D942050d489DBd938a2C909A5d5039A161', 9, 'AMPL', 'Ampleforth'),
        le = new v.l(v.a.MAINNET, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 8, 'WBTC', 'Wrapped BTC'),
        se = '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
        de =
          ((Q = {}),
          Object(b.a)(Q, v.a.MAINNET, new v.l(v.a.MAINNET, se, 18, 'UNI', 'Uniswap')),
          Object(b.a)(Q, v.a.RINKEBY, new v.l(v.a.RINKEBY, se, 18, 'UNI', 'Uniswap')),
          Object(b.a)(Q, v.a.ROPSTEN, new v.l(v.a.ROPSTEN, se, 18, 'UNI', 'Uniswap')),
          Object(b.a)(Q, v.a.GÖRLI, new v.l(v.a.GÖRLI, se, 18, 'UNI', 'Uniswap')),
          Object(b.a)(Q, v.a.KOVAN, new v.l(v.a.KOVAN, se, 18, 'UNI', 'Uniswap')),
          Object(b.a)(Q, v.a.KCB, new v.l(v.a.KCB, '0x69c1ee7D886BD431Bfb7B26792f3cF387E6979E8', 18, 'UNI', 'Uniswap')),
          Object(b.a)(Q, v.a.TBNB, new v.l(v.a.TBNB, se, 18, 'UNI', 'Uniswap')),
          Object(b.a)(Q, v.a.ETPOSCHAINTESTNET, new v.l(v.a.ETPOSCHAINTESTNET, se, 18, 'UNI', 'Uniswap')),
          Q),
        me =
          ((X = {}),
          Object(b.a)(X, se, 'UNI'),
          Object(b.a)(X, '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F', 'Governance'),
          Object(b.a)(X, '0x1a9C8182C09F50C8318d769245beA52c32BE35BC', 'Timelock'),
          X),
        pe = Object(b.a)({}, v.a.MAINNET, '0x090D4613473dEE047c3f2706764f49E0821D256e'),
        fe =
          ((J = {}),
          Object(b.a)(J, v.a.MAINNET, [v.p[v.a.MAINNET]]),
          Object(b.a)(J, v.a.ROPSTEN, [v.p[v.a.ROPSTEN]]),
          Object(b.a)(J, v.a.RINKEBY, [v.p[v.a.RINKEBY]]),
          Object(b.a)(J, v.a.GÖRLI, [v.p[v.a.GÖRLI]]),
          Object(b.a)(J, v.a.KOVAN, [v.p[v.a.KOVAN]]),
          Object(b.a)(J, v.a.TBNB, [v.p[v.a.TBNB]]),
          Object(b.a)(J, v.a.KCB, [v.p[v.a.KCB]]),
          Object(b.a)(J, v.a.ETPOSCHAINTESTNET, [v.p[v.a.ETPOSCHAINTESTNET]]),
          J),
        be = Object(f.a)(
          Object(f.a)({}, fe),
          {},
          Object(b.a)({}, v.a.MAINNET, [].concat(Object(p.a)(fe[v.a.MAINNET]), [ae, re, oe, ie, ce, le]))
        ),
        ve = Object(b.a)({}, v.a.MAINNET, Object(b.a)({}, ue.address, [ae, v.p[v.a.MAINNET]])),
        he = Object(f.a)(
          Object(f.a)({}, fe),
          {},
          Object(b.a)({}, v.a.MAINNET, [].concat(Object(p.a)(fe[v.a.MAINNET]), [ae, re, oe, le]))
        ),
        ge = Object(f.a)(
          Object(f.a)({}, fe),
          {},
          Object(b.a)({}, v.a.MAINNET, [].concat(Object(p.a)(fe[v.a.MAINNET]), [ae, re, oe, le]))
        ),
        ye = Object(b.a)({}, v.a.MAINNET, [
          [
            new v.l(v.a.MAINNET, '0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643', 8, 'cDAI', 'Compound Dai'),
            new v.l(v.a.MAINNET, '0x39AA39c021dfbaE8faC545936693aC917d5E7563', 8, 'cUSDC', 'Compound USD Coin')
          ],
          [re, oe],
          [ae, oe]
        ]),
        Ee = {
          INJECTED: {
            connector: G,
            name: 'Injected',
            iconName: 'arrow-right.svg',
            description: 'Injected web3 provider.',
            href: null,
            color: '#010101',
            primary: !0
          },
          METAMASK: {
            connector: G,
            name: 'MetaMask',
            iconName: 'metamask.png',
            description: 'Easy-to-use browser extension.',
            href: null,
            color: '#E8831D'
          },
          WALLET_CONNECT: {
            connector: K,
            name: 'WalletConnect',
            iconName: 'walletConnectIcon.svg',
            description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
            href: null,
            color: '#4196FC',
            mobile: !0
          },
          WALLET_LINK: {
            connector: $,
            name: 'Coinbase Wallet',
            iconName: 'coinbaseWalletIcon.svg',
            description: 'Use Coinbase Wallet app on mobile device',
            href: null,
            color: '#315CF5'
          },
          COINBASE_LINK: {
            name: 'Open in Coinbase Wallet',
            iconName: 'coinbaseWalletIcon.svg',
            description: 'Open in Coinbase Wallet app.',
            href: 'https://go.cb-w.com/mtUDhEZPy1',
            color: '#315CF5',
            mobile: !0,
            mobileOnly: !0
          },
          FORTMATIC: {
            connector: Z,
            name: 'Fortmatic',
            iconName: 'fortmaticIcon.png',
            description: 'Login using Fortmatic hosted wallet',
            href: null,
            color: '#6748FF',
            mobile: !0
          },
          Portis: {
            connector: _,
            name: 'Portis',
            iconName: 'portisIcon.png',
            description: 'Login using Portis hosted wallet',
            href: null,
            color: '#4A6C9B',
            mobile: !0
          }
        },
        xe = v.f.BigInt(604800),
        Oe = v.f.BigInt(0),
        je = new v.h(v.f.BigInt(1), v.f.BigInt(1e4)),
        Ae = v.f.BigInt(1e4),
        we = new v.h(v.f.BigInt(100), Ae),
        ke = new v.h(v.f.BigInt(300), Ae),
        Te = new v.h(v.f.BigInt(500), Ae),
        Ce = new v.h(v.f.BigInt(1e3), Ae),
        Ie = new v.h(v.f.BigInt(1500), Ae),
        Se = v.f.exponentiate(v.f.BigInt(10), v.f.BigInt(16)),
        Ne = new v.h(v.f.BigInt(50), v.f.BigInt(1e4)),
        Re = new v.h('0'),
        Ue = new v.h('1'),
        Be = [
          '0x7F367cC41522cE07553e823bf3be79A889DEbe1B',
          '0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b',
          '0x901bb9583b24D97e995513C6778dc6888AB6870e',
          '0xA7e5d5A720f06526557c513402f2e6B5fA20b008'
        ]
      function Le() {
        var e = Object(r.d)(),
          t = Object(r.d)('NETWORK')
        return e.active ? e : t
      }
      function We(e) {
        var t = e.children,
          n = Le().account
        return Object(o.useMemo)(
          function() {
            return Boolean(n && -1 !== Be.indexOf(n))
          },
          [n]
        )
          ? i.a.createElement('div', null, 'Blocked address')
          : i.a.createElement(i.a.Fragment, null, t)
      }
      var ze = n(232),
        Me = n(54),
        Pe = n(328),
        De = n.n(Pe),
        Fe = n(329),
        qe = n.n(Fe)
      ze.a
        .use(De.a)
        .use(qe.a)
        .use(Me.a)
        .init({
          backend: { loadPath: './locales/{{lng}}.json' },
          react: { useSuspense: !0 },
          fallbackLng: 'en',
          preload: ['en'],
          keySeparator: !1,
          interpolation: { escapeValue: !1 }
        })
      ze.a
      var Ve = n(2),
        Ye = n(35),
        He = n(3)
      function Qe(e) {
        var t = e.location,
          n = t.pathname,
          a = t.search
        return (
          Object(o.useEffect)(
            function() {
              s.a.pageview(''.concat(n).concat(a))
            },
            [n, a]
          ),
          null
        )
      }
      var Xe = n(33),
        Je = n(90),
        Ge = n(231),
        Ke = (n(446), n(20)),
        Ze = n(330)
      function _e() {
        var e = Object(Ve.a)([
          '\n          width: 100vw;\n          border-radius: 20px;\n          border-bottom-left-radius: 0;\n          border-bottom-right-radius: 0;\n        '
        ])
        return (
          (_e = function() {
            return e
          }),
          e
        )
      }
      function $e() {
        var e = Object(Ve.a)(['\n      width:  85vw;\n      ', '\n    '])
        return (
          ($e = function() {
            return e
          }),
          e
        )
      }
      function et() {
        var e = Object(Ve.a)(['\n      width: 65vw;\n      margin: 0;\n    '])
        return (
          (et = function() {
            return e
          }),
          e
        )
      }
      function tt() {
        var e = Object(Ve.a)(['\n        min-height: ', 'vh;\n      '])
        return (
          (tt = function() {
            return e
          }),
          e
        )
      }
      function nt() {
        var e = Object(Ve.a)(['\n        max-height: ', 'vh;\n      '])
        return (
          (nt = function() {
            return e
          }),
          e
        )
      }
      function at() {
        var e = Object(Ve.a)([
          '\n  overflow-y: ',
          ';\n\n  &[data-reach-dialog-content] {\n    margin: 0 0 2rem 0;\n    background-color: ',
          ';\n    box-shadow: 0 4px 8px 0 ',
          ';\n    padding: 0px;\n    width: 50vw;\n    overflow-y: ',
          ';\n    overflow-x: hidden;\n\n    align-self: ',
          ';\n\n    max-width: 420px;\n    ',
          '\n    ',
          '\n    display: flex;\n    border-radius: 20px;\n    ',
          '\n    ',
          '\n  }\n'
        ])
        return (
          (at = function() {
            return e
          }),
          e
        )
      }
      function rt() {
        var e = Object(Ve.a)([
          '\n  &[data-reach-dialog-overlay] {\n    z-index: 2;\n    background-color: transparent;\n    overflow: hidden;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: ',
          ';\n  }\n'
        ])
        return (
          (rt = function() {
            return e
          }),
          e
        )
      }
      var ot = Object(Je.a)(Ge.b),
        it = Object(He.default)(ot)(rt(), function(e) {
          return e.theme.modalBG
        }),
        ct = Object(Je.a)(Ge.a),
        ut = Object(He.default)(function(e) {
          e.minHeight, e.maxHeight, e.mobile, e.isOpen
          var t = Object(Xe.a)(e, ['minHeight', 'maxHeight', 'mobile', 'isOpen'])
          return i.a.createElement(ct, t)
        }).attrs({ 'aria-label': 'dialog' })(
          at(),
          function(e) {
            return e.mobile ? 'scroll' : 'hidden'
          },
          function(e) {
            return e.theme.bg1
          },
          function(e) {
            var t = e.theme
            return Object(Ke.d)(0.95, t.shadow1)
          },
          function(e) {
            return e.mobile ? 'scroll' : 'hidden'
          },
          function(e) {
            return e.mobile ? 'flex-end' : 'center'
          },
          function(e) {
            var t = e.maxHeight
            return t && Object(He.css)(nt(), t)
          },
          function(e) {
            var t = e.minHeight
            return t && Object(He.css)(tt(), t)
          },
          function(e) {
            return e.theme.mediaWidth.upToMedium(et())
          },
          function(e) {
            var t = e.theme,
              n = e.mobile
            return t.mediaWidth.upToSmall($e(), n && Object(He.css)(_e()))
          }
        )
      function lt(e) {
        var t = e.isOpen,
          n = e.onDismiss,
          a = e.minHeight,
          r = void 0 !== a && a,
          o = e.maxHeight,
          u = void 0 === o ? 90 : o,
          l = e.initialFocusRef,
          s = e.children,
          d = Object(Je.c)(t, null, {
            config: { duration: 200 },
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 }
          }),
          m = Object(Je.b)(function() {
            return { y: 0, config: { mass: 1, tension: 210, friction: 20 } }
          }),
          p = Object(A.a)(m, 2),
          b = p[0].y,
          v = p[1],
          h = Object(Ze.a)({
            onDrag: function(e) {
              v({ y: e.down ? e.movement[1] : 0 }),
                (e.movement[1] > 300 || (e.velocity > 3 && e.direction[1] > 0)) && n()
            }
          })
        return i.a.createElement(
          i.a.Fragment,
          null,
          d.map(function(e) {
            var t = e.item,
              a = e.key,
              o = e.props
            return (
              t &&
              i.a.createElement(
                it,
                { key: a, style: o, onDismiss: n, initialFocusRef: l },
                i.a.createElement(
                  ut,
                  Object.assign(
                    {},
                    c.isMobile
                      ? Object(f.a)(
                          Object(f.a)({}, h()),
                          {},
                          {
                            style: {
                              transform: b.interpolate(function(e) {
                                return 'translateY('.concat(e > 0 ? e : 0, 'px)')
                              })
                            }
                          }
                        )
                      : {},
                    { 'aria-label': 'dialog content', minHeight: r, maxHeight: u, mobile: c.isMobile }
                  ),
                  !l && c.isMobile ? i.a.createElement('div', { tabIndex: 1 }) : null,
                  s
                )
              )
            )
          })
        )
      }
      function st() {
        var e = Object(Ve.a)([
          '\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ',
          ';\n  justify-items: ',
          ';\n'
        ])
        return (
          (st = function() {
            return e
          }),
          e
        )
      }
      function dt() {
        var e = Object(Ve.a)(['\n  width: 100%;\n  align-items: center;\n'])
        return (
          (dt = function() {
            return e
          }),
          e
        )
      }
      function mt() {
        var e = Object(Ve.a)(['\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n'])
        return (
          (mt = function() {
            return e
          }),
          e
        )
      }
      var pt = He.default.div(mt()),
        ft = Object(He.default)(pt)(dt()),
        bt = He.default.div(
          st(),
          function(e) {
            var t = e.gap
            return ('sm' === t ? '8px' : 'md' === t && '12px') || ('lg' === t && '24px') || t
          },
          function(e) {
            var t = e.justify
            return t && t
          }
        ),
        vt = pt,
        ht = n(209),
        gt = n.n(ht),
        yt = n(210),
        Et = n.n(yt),
        xt = n(211),
        Ot = n.n(xt)
      function jt() {
        var e = Object(Ve.a)(['\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.2);\n  height: 1px;\n'])
        return (
          (jt = function() {
            return e
          }),
          e
        )
      }
      function At() {
        var e = Object(Ve.a)(['\n  padding: 1rem;\n  z-index: 1;\n  opacity: ', ';\n'])
        return (
          (At = function() {
            return e
          }),
          e
        )
      }
      function wt() {
        var e = Object(Ve.a)([
          '\n  background: url(',
          ');\n  background-size: cover;\n  mix-blend-mode: overlay;\n  border-radius: 12px;\n  width: 100%;\n  height: 100%;\n  opacity: 0.15;\n  position: absolute;\n  top: 0;\n  left: 0;\n  user-select: none;\n'
        ])
        return (
          (wt = function() {
            return e
          }),
          e
        )
      }
      function kt() {
        var e = Object(Ve.a)([
          '\n  background: url(',
          ');\n  width: 1200px;\n  height: 1200px;\n  position: absolute;\n  border-radius: 12px;\n  top: -300px;\n  left: -300px;\n  opacity: 0.4;\n  user-select: none;\n\n  ',
          '\n'
        ])
        return (
          (kt = function() {
            return e
          }),
          e
        )
      }
      function Tt() {
        var e = Object(Ve.a)([
          '\n  background: url(',
          ');\n  width: 1000px;\n  height: 600px;\n  position: absolute;\n  border-radius: 12px;\n  opacity: 0.4;\n  top: -100px;\n  left: -100px;\n  transform: rotate(-15deg);\n  user-select: none;\n\n  ',
          '\n'
        ])
        return (
          (Tt = function() {
            return e
          }),
          e
        )
      }
      function Ct() {
        var e = Object(Ve.a)([
          '\n  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #008b8a 0%, #008b8a 100%);\n  border-radius: 12px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n'
        ])
        return (
          (Ct = function() {
            return e
          }),
          e
        )
      }
      function It() {
        var e = Object(Ve.a)([
          '\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px 12px;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-radius: 20px;\n  width: fit-content;\n  justify-self: flex-end;\n'
        ])
        return (
          (It = function() {
            return e
          }),
          e
        )
      }
      He.default.div(It())
      var St = Object(He.default)(bt)(Ct()),
        Nt = He.default.span(Tt(), gt.a, function(e) {
          return e.desaturate && 'filter: saturate(0)'
        }),
        Rt = He.default.span(kt(), Et.a, function(e) {
          return e.desaturate && 'filter: saturate(0)'
        }),
        Ut = He.default.span(wt(), Ot.a),
        Bt = Object(He.default)(bt)(At(), function(e) {
          return e.disabled && '0.4'
        }),
        Lt = He.default.div(jt()),
        Wt = n(98)
      function zt() {
        var e = Object(Ve.a)(['\n  width: fit-content;\n  margin: ', ';\n'])
        return (
          (zt = function() {
            return e
          }),
          e
        )
      }
      function Mt() {
        var e = Object(Ve.a)([
          '\n  flex-wrap: wrap;\n  margin: ',
          ';\n  justify-content: ',
          ';\n\n  & > * {\n    margin: ',
          ' !important;\n  }\n'
        ])
        return (
          (Mt = function() {
            return e
          }),
          e
        )
      }
      function Pt() {
        var e = Object(Ve.a)(['\n  display: flex;\n  align-items: flex-end;\n'])
        return (
          (Pt = function() {
            return e
          }),
          e
        )
      }
      function Dt() {
        var e = Object(Ve.a)(['\n  justify-content: space-between;\n'])
        return (
          (Dt = function() {
            return e
          }),
          e
        )
      }
      function Ft() {
        var e = Object(Ve.a)([
          '\n  width: ',
          ';\n  display: flex;\n  padding: 0;\n  align-items: ',
          ';\n  justify-content: ',
          ';\n  padding: ',
          ';\n  border: ',
          ';\n  border-radius: ',
          ';\n'
        ])
        return (
          (Ft = function() {
            return e
          }),
          e
        )
      }
      var qt = Object(He.default)(Wt.Box)(
          Ft(),
          function(e) {
            var t = e.width
            return null !== t && void 0 !== t ? t : '100%'
          },
          function(e) {
            var t = e.align
            return null !== t && void 0 !== t ? t : 'center'
          },
          function(e) {
            var t = e.justify
            return null !== t && void 0 !== t ? t : 'flex-start'
          },
          function(e) {
            return e.padding
          },
          function(e) {
            return e.border
          },
          function(e) {
            return e.borderRadius
          }
        ),
        Vt = Object(He.default)(qt)(Dt()),
        Yt = He.default.div(Pt()),
        Ht = Object(He.default)(qt)(
          Mt(),
          function(e) {
            var t = e.gap
            return t && '-'.concat(t)
          },
          function(e) {
            var t = e.justify
            return t && t
          },
          function(e) {
            return e.gap
          }
        ),
        Qt = Object(He.default)(qt)(zt(), function(e) {
          var t = e.gap
          return t && '-'.concat(t)
        }),
        Xt = qt,
        Jt = n(161),
        Gt = n.n(Jt),
        Kt = [],
        Zt = 'https://www.gemini.com/uniswap/manifest.json',
        _t = [
          'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json',
          'tokenlist.aave.eth',
          'synths.snx.eth',
          'https://umaproject.org/uma.tokenlist.json',
          'wrapped.tokensoft.eth',
          'https://raw.githubusercontent.com/SetProtocol/uniswap-tokenlist/main/set.tokenlist.json',
          'https://raw.githubusercontent.com/opynfinance/opyn-tokenlist/master/opyn-v1.tokenlist.json',
          'https://app.tryroll.com/tokens.json',
          'https://tokens.coingecko.com/uniswap/all.json',
          'defi.cmc.eth',
          'stablecoin.cmc.eth',
          't2crtokens.eth',
          Zt
        ].concat(Kt),
        $t = [Zt],
        en = n(222)
      function tn(e, t) {
        var n = _t.includes(e) ? _t.indexOf(e) : Number.MAX_SAFE_INTEGER,
          a = _t.includes(t) ? _t.indexOf(t) : Number.MAX_SAFE_INTEGER
        return n < a ? 1 : n > a ? -1 : 0
      }
      var nn,
        an = n(332),
        rn = (function(e) {
          Object(C.a)(n, e)
          var t = Object(I.a)(n)
          function n(e, a) {
            var r
            return (
              Object(k.a)(this, n),
              ((r = t.call(this, e.chainId, e.address, e.decimals, e.symbol, e.name)).tokenInfo = void 0),
              (r.tags = void 0),
              (r.tokenInfo = e),
              (r.tags = a),
              r
            )
          }
          return (
            Object(T.a)(n, [
              {
                key: 'logoURI',
                get: function() {
                  return this.tokenInfo.logoURI
                }
              }
            ]),
            n
          )
        })(v.l),
        on =
          ((nn = {}),
          Object(b.a)(nn, v.a.KOVAN, {}),
          Object(b.a)(nn, v.a.RINKEBY, {}),
          Object(b.a)(nn, v.a.ROPSTEN, {}),
          Object(b.a)(nn, v.a.GÖRLI, {}),
          Object(b.a)(nn, v.a.MAINNET, {}),
          Object(b.a)(nn, v.a.TBNB, {}),
          Object(b.a)(nn, v.a.KCB, {}),
          Object(b.a)(nn, v.a.ETPOSCHAINTESTNET, {}),
          nn),
        cn = 'undefined' !== typeof WeakMap ? new WeakMap() : null
      function un(e) {
        var t = null === cn || void 0 === cn ? void 0 : cn.get(e)
        if (t) return t
        var n = e.tokens.reduce(function(t, n) {
          var a,
            r,
            o,
            i =
              null !==
                (a =
                  null === (r = n.tags) ||
                  void 0 === r ||
                  null ===
                    (o = r.map(function(t) {
                      var n
                      if (null === (n = e.tags) || void 0 === n ? void 0 : n[t])
                        return Object(f.a)(Object(f.a)({}, e.tags[t]), {}, { id: t })
                    })) ||
                  void 0 === o
                    ? void 0
                    : o.filter(function(e) {
                        return Boolean(e)
                      })) && void 0 !== a
                ? a
                : [],
            c = new rn(n, i)
          if (void 0 !== t[c.chainId][c.address]) throw Error('Duplicate tokens.')
          return Object(f.a)(
            Object(f.a)({}, t),
            {},
            Object(b.a)(
              {},
              c.chainId,
              Object(f.a)(Object(f.a)({}, t[c.chainId]), {}, Object(b.a)({}, c.address, { token: c, list: e }))
            )
          )
        }, Object(f.a)({}, on))
        return null === cn || void 0 === cn || cn.set(e, n), n
      }
      function ln() {
        return Object(d.d)(function(e) {
          return e.lists.byUrl
        })
      }
      function sn(e, t) {
        return {
          1: Object(f.a)(Object(f.a)({}, e[1]), t[1]),
          3: Object(f.a)(Object(f.a)({}, e[3]), t[3]),
          4: Object(f.a)(Object(f.a)({}, e[4]), t[4]),
          5: Object(f.a)(Object(f.a)({}, e[5]), t[5]),
          42: Object(f.a)(Object(f.a)({}, e[42]), t[42]),
          97: Object(f.a)(Object(f.a)({}, e[97]), t[97]),
          11e3: Object(f.a)(Object(f.a)({}, e[11e3]), t[11e3]),
          6660: Object(f.a)(Object(f.a)({}, e[6660]), t[6660])
        }
      }
      function dn(e) {
        var t = ln()
        return Object(o.useMemo)(
          function() {
            return e
              ? e
                  .slice()
                  .sort(tn)
                  .reduce(function(e, n) {
                    var a,
                      r = null === (a = t[n]) || void 0 === a ? void 0 : a.current
                    if (!r) return e
                    try {
                      return sn(e, Object.assign(un(r)))
                    } catch (o) {
                      return console.error('Could not show token list due to error', o), e
                    }
                  }, on)
              : on
          },
          [t, e]
        )
      }
      function mn() {
        var e
        return null ===
          (e = Object(d.d)(function(e) {
            return e.lists.activeListUrls
          })) || void 0 === e
          ? void 0
          : e.filter(function(e) {
              return !Kt.includes(e)
            })
      }
      function pn() {
        return sn(dn(mn()), un(en))
      }
      function fn() {
        return dn(
          (function() {
            var e = ln(),
              t = mn()
            return Object.keys(e).filter(function(e) {
              return !(null === t || void 0 === t ? void 0 : t.includes(e)) && !Kt.includes(e)
            })
          })()
        )
      }
      var bn,
        vn = n(30),
        hn = n(22)
      !(function(e) {
        ;(e[(e.WALLET = 0)] = 'WALLET'),
          (e[(e.SETTINGS = 1)] = 'SETTINGS'),
          (e[(e.SELF_CLAIM = 2)] = 'SELF_CLAIM'),
          (e[(e.ADDRESS_CLAIM = 3)] = 'ADDRESS_CLAIM'),
          (e[(e.CLAIM_POPUP = 4)] = 'CLAIM_POPUP'),
          (e[(e.MENU = 5)] = 'MENU'),
          (e[(e.DELEGATE = 6)] = 'DELEGATE'),
          (e[(e.VOTE = 7)] = 'VOTE')
      })(bn || (bn = {}))
      var gn = Object(hn.b)('application/updateBlockNumber'),
        yn = Object(hn.b)('application/setOpenModal'),
        En = Object(hn.b)('application/addPopup'),
        xn = Object(hn.b)('application/removePopup')
      function On() {
        var e = Le().chainId
        return Object(d.d)(function(t) {
          return t.application.blockNumber[null !== e && void 0 !== e ? e : -1]
        })
      }
      function jn(e) {
        return (
          Object(d.d)(function(e) {
            return e.application.openModal
          }) === e
        )
      }
      function An(e) {
        var t = jn(e),
          n = Object(d.c)()
        return Object(o.useCallback)(
          function() {
            return n(yn(t ? null : e))
          },
          [n, e, t]
        )
      }
      function wn() {
        return An(bn.WALLET)
      }
      function kn() {
        return An(bn.SETTINGS)
      }
      function Tn() {
        return jn(bn.CLAIM_POPUP)
      }
      function Cn() {
        return An(bn.SELF_CLAIM)
      }
      function In() {
        return An(bn.DELEGATE)
      }
      function Sn() {
        var e = Object(d.c)()
        return Object(o.useCallback)(
          function(t) {
            e(xn({ key: t }))
          },
          [e]
        )
      }
      var Nn = /^0x[a-fA-F0-9]{40}$/,
        Rn = /^0x[a-f0-9]*$/
      function Un(e) {
        if (!Nn.test(e.address)) throw new Error('Invalid address: '.concat(e.address))
        if (!Rn.test(e.callData)) throw new Error('Invalid hex: '.concat(e.callData))
        return ''.concat(e.address, '-').concat(e.callData)
      }
      function Bn(e) {
        var t = e.split('-')
        if (2 !== t.length) throw new Error('Invalid call key: '.concat(e))
        return { address: t[0], callData: t[1] }
      }
      var Ln = Object(hn.b)('multicall/addMulticallListeners'),
        Wn = Object(hn.b)('multicall/removeMulticallListeners'),
        zn = Object(hn.b)('multicall/fetchingMulticallResults'),
        Mn = Object(hn.b)('multicall/errorFetchingMulticallResults'),
        Pn = Object(hn.b)('multicall/updateMulticallResults')
      function Dn(e) {
        return -1 !== ['string', 'number'].indexOf(typeof e)
      }
      function Fn(e) {
        return (
          void 0 === e ||
          (Array.isArray(e) &&
            e.every(function(e) {
              return Dn(e) || (Array.isArray(e) && e.every(Dn))
            }))
        )
      }
      var qn = { valid: !1, blockNumber: void 0, data: void 0 },
        Vn = { blocksPerFetch: 1 / 0 }
      function Yn(e, t) {
        var n = Le().chainId,
          a = Object(d.d)(function(e) {
            return e.multicall.callResults
          }),
          r = Object(d.c)(),
          i = Object(o.useMemo)(
            function() {
              var t, n, a
              return JSON.stringify(
                null !==
                  (t =
                    null === e ||
                    void 0 === e ||
                    null ===
                      (n = e.filter(function(e) {
                        return Boolean(e)
                      })) ||
                    void 0 === n ||
                    null === (a = n.map(Un)) ||
                    void 0 === a
                      ? void 0
                      : a.sort()) && void 0 !== t
                  ? t
                  : []
              )
            },
            [e]
          )
        return (
          Object(o.useEffect)(
            function() {
              var e = JSON.parse(i)
              if (n && 0 !== e.length) {
                var a = e.map(function(e) {
                  return Bn(e)
                })
                return (
                  r(Ln({ chainId: n, calls: a, options: t })),
                  function() {
                    r(Wn({ chainId: n, calls: a, options: t }))
                  }
                )
              }
            },
            [n, r, t, i]
          ),
          Object(o.useMemo)(
            function() {
              return e.map(function(e) {
                var t
                if (!n || !e) return qn
                var r,
                  o = null === (t = a[n]) || void 0 === t ? void 0 : t[Un(e)]
                return (
                  (null === o || void 0 === o ? void 0 : o.data) &&
                    '0x' !== (null === o || void 0 === o ? void 0 : o.data) &&
                    (r = o.data),
                  { valid: !0, data: r, blockNumber: null === o || void 0 === o ? void 0 : o.blockNumber }
                )
              })
            },
            [a, e, n]
          )
        )
      }
      var Hn = { valid: !1, result: void 0, loading: !1, syncing: !1, error: !1 },
        Qn = { valid: !0, result: void 0, loading: !0, syncing: !0, error: !1 }
      function Xn(e, t, n, a) {
        if (!e) return Hn
        var r = e.valid,
          o = e.data,
          i = e.blockNumber
        if (!r) return Hn
        if (r && !i) return Qn
        if (!t || !n || !a) return Qn
        var c = o && o.length > 2,
          u = (null !== i && void 0 !== i ? i : 0) < a,
          l = void 0
        if (c && o)
          try {
            l = t.decodeFunctionResult(n, o)
          } catch (s) {
            return (
              console.debug('Result data parsing failed', n, o),
              { valid: !0, loading: !1, error: !0, syncing: u, result: l }
            )
          }
        return { valid: !0, loading: !1, syncing: u, result: l, error: !c }
      }
      function Jn(e, t, n, a) {
        var r = Object(o.useMemo)(
            function() {
              var n
              return null === e || void 0 === e || null === (n = e.interface) || void 0 === n
                ? void 0
                : n.getFunction(t)
            },
            [e, t]
          ),
          i = Yn(
            Object(o.useMemo)(
              function() {
                return e && r && n && n.length > 0
                  ? n.map(function(t) {
                      return { address: e.address, callData: e.interface.encodeFunctionData(r, t) }
                    })
                  : []
              },
              [n, e, r]
            ),
            a
          ),
          c = On()
        return Object(o.useMemo)(
          function() {
            return i.map(function(t) {
              return Xn(t, null === e || void 0 === e ? void 0 : e.interface, r, c)
            })
          },
          [r, e, i, c]
        )
      }
      function Gn(e, t, n, a, r) {
        var i = Object(o.useMemo)(
            function() {
              return t.getFunction(n)
            },
            [t, n]
          ),
          c = Object(o.useMemo)(
            function() {
              return i && Fn(a) ? t.encodeFunctionData(i, a) : void 0
            },
            [a, t, i]
          ),
          u = Yn(
            Object(o.useMemo)(
              function() {
                return i && e && e.length > 0 && c
                  ? e.map(function(e) {
                      return e && c ? { address: e, callData: c } : void 0
                    })
                  : []
              },
              [e, c, i]
            ),
            r
          ),
          l = On()
        return Object(o.useMemo)(
          function() {
            return u.map(function(e) {
              return Xn(e, t, i, l)
            })
          },
          [i, u, t, l]
        )
      }
      function Kn(e, t, n, a) {
        var r = Object(o.useMemo)(
            function() {
              var n
              return null === e || void 0 === e || null === (n = e.interface) || void 0 === n
                ? void 0
                : n.getFunction(t)
            },
            [e, t]
          ),
          i = Yn(
            Object(o.useMemo)(
              function() {
                return e && r && Fn(n) ? [{ address: e.address, callData: e.interface.encodeFunctionData(r, n) }] : []
              },
              [e, r, n]
            ),
            a
          )[0],
          c = On()
        return Object(o.useMemo)(
          function() {
            return Xn(i, null === e || void 0 === e ? void 0 : e.interface, r, c)
          },
          [i, e, r, c]
        )
      }
      var Zn = n(100),
        _n = n(29),
        $n = n(37),
        ea = n(23),
        ta = n(333)
      function na(e) {
        try {
          return Object(_n.getAddress)(e)
        } catch (t) {
          return !1
        }
      }
      var aa = {
        1: '',
        3: 'ropsten.',
        4: 'rinkeby.',
        5: 'goerli.',
        42: 'kovan.',
        97: 'tbsc',
        11e3: 'scan.kbcfoundation',
        6660: 'testnet.etposchain'
      }
      function ra(e, t, n) {
        var a = 'https://'.concat(aa[e] || aa[1], '.com')
        switch (n) {
          case 'transaction':
            return ''.concat(a, '/tx/').concat(t)
          case 'token':
            return ''.concat(a, '/token/').concat(t)
          case 'block':
            return ''.concat(a, '/block/').concat(t)
          case 'address':
          default:
            return ''.concat(a, '/address/').concat(t)
        }
      }
      function oa(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
          n = na(e)
        if (!n) throw Error("Invalid 'address' parameter '".concat(e, "'."))
        return ''.concat(n.substring(0, t + 2), '...').concat(n.substring(42 - t))
      }
      function ia(e) {
        return e.mul(ea.a.from(1e4).add(ea.a.from(1e3))).div(ea.a.from(1e4))
      }
      function ca(e, t) {
        if (t < 0 || t > 1e4) throw Error('Unexpected slippage value: '.concat(t))
        return [
          v.f.divide(v.f.multiply(e.raw, v.f.BigInt(1e4 - t)), v.f.BigInt(1e4)),
          v.f.divide(v.f.multiply(e.raw, v.f.BigInt(1e4 + t)), v.f.BigInt(1e4))
        ]
      }
      function ua(e, t, n, a) {
        if (!na(e) || e === $n.a) throw Error("Invalid 'address' parameter '".concat(e, "'."))
        return new Zn.a(
          e,
          t,
          (function(e, t) {
            return t
              ? (function(e, t) {
                  return e.getSigner(t).connectUnchecked()
                })(e, t)
              : e
          })(n, a)
        )
      }
      function la(e, t, n) {
        return ua(te, ta.a, t, n)
      }
      function sa(e, t) {
        var n
        return (
          t === v.d ||
          Boolean(t instanceof v.l && (null === (n = e[t.chainId]) || void 0 === n ? void 0 : n[t.address]))
        )
      }
      var da,
        ma,
        pa = n(167),
        fa = n(334),
        ba = n(168),
        va = n(335),
        ha = n(169),
        ga = n(264),
        ya = n(336),
        Ea = n(337),
        xa = n(47),
        Oa = n(132),
        ja = n(212),
        Aa = new xa.Interface(Oa),
        wa = (new xa.Interface(ja), Aa),
        ka = n(265),
        Ta = '0x16D4F26C15f3658ec65B1126ff27DD3dF2a2996b',
        Ca = n(338),
        Ia = n(339),
        Sa = n(266),
        Na =
          ((da = {}),
          Object(b.a)(da, v.a.MAINNET, '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441'),
          Object(b.a)(da, v.a.ROPSTEN, '0x53C43764255c17BD724F74c4eF150724AC50a3ed'),
          Object(b.a)(da, v.a.KOVAN, '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A'),
          Object(b.a)(da, v.a.RINKEBY, '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821'),
          Object(b.a)(da, v.a.GÖRLI, '0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e'),
          Object(b.a)(da, v.a.TBNB, '0x7D3558f8b27A98a16Ea370581216A351784DDeDA'),
          Object(b.a)(da, v.a.KCB, '0x07de2269513e79ED0152D6c26d33891ef3Dd6279'),
          Object(b.a)(da, v.a.ETPOSCHAINTESTNET, '0xB01d1f2e3d599E3dECe22d0348B076903ca60a9f'),
          da),
        Ra = n(213),
        Ua = n(214),
        Ba =
          ((ma = {}),
          Object(b.a)(ma, v.a.MAINNET, '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95'),
          Object(b.a)(ma, v.a.ROPSTEN, '0x9c83dCE8CA20E9aAF9D3efc003b2ea62aBC08351'),
          Object(b.a)(ma, v.a.RINKEBY, '0xf5D915570BC477f9B8D6C0E980aA81757A3AaC36'),
          Object(b.a)(ma, v.a.GÖRLI, '0xb4525f7e08B205C8D578abf0CBf9E2f5fF97e3da'),
          Object(b.a)(ma, v.a.KOVAN, '0xD3E51Ef092B2845f10401a0159B2B96e8B6c3D30'),
          Object(b.a)(ma, v.a.TBNB, '0x5a679D6b3FB946b15Ed933372c94e1b7Ed39397F'),
          Object(b.a)(ma, v.a.KCB, '0x01BebEAa5277448FA510629A0eC2eb0F99793718'),
          Object(b.a)(ma, v.a.ETPOSCHAINTESTNET, '0xb4525f7e08B205C8D578abf0CBf9E2f5fF97e3da'),
          ma)
      new xa.Interface(Ua), new xa.Interface(Ra)
      function La(e, t) {
        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          a = Le(),
          r = a.library,
          i = a.account
        return Object(o.useMemo)(
          function() {
            if (!e || !t || !r) return null
            try {
              return ua(e, t, r, n && i ? i : void 0)
            } catch (a) {
              return console.error('Failed to get contract', a), null
            }
          },
          [e, t, r, n, i]
        )
      }
      function Wa() {
        var e = Le().chainId
        return La(e && Ba[e], Ua, !1)
      }
      function za(e, t) {
        return La(e, Ra, t)
      }
      function Ma(e, t) {
        return La(e, Oa, t)
      }
      function Pa(e) {
        var t,
          n = Le().chainId
        if (n)
          switch (n) {
            case v.a.MAINNET:
            case v.a.GÖRLI:
            case v.a.ROPSTEN:
            case v.a.TBNB:
            case v.a.KCB:
            case v.a.ETPOSCHAINTESTNET:
            case v.a.RINKEBY:
              t = '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
          }
        return La(t, Ea, e)
      }
      function Da(e, t) {
        return La(e, ya, t)
      }
      function Fa(e, t) {
        return La(e, ha.a, t)
      }
      function qa() {
        var e = Le().chainId
        return La(e && Na[e], Sa, !1)
      }
      function Va() {
        var e = Le().chainId
        return La(e ? pe[e] : void 0, va.a, !0)
      }
      function Ya() {
        return La('0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F', pa.a, !0)
      }
      function Ha() {
        var e = Le().chainId
        return La(e ? de[e].address : void 0, fa.a, !0)
      }
      function Qa(e, t) {
        return La(e, ba.a, t)
      }
      function Xa(e, t) {
        if (0 === t.length) return e
        var n = na(t)
        if (n)
          return e.filter(function(e) {
            return e.address === n
          })
        var a = t
          .toLowerCase()
          .split(/\s+/)
          .filter(function(e) {
            return e.length > 0
          })
        if (0 === a.length) return e
        var r = function(e) {
          var t = e
            .toLowerCase()
            .split(/\s+/)
            .filter(function(e) {
              return e.length > 0
            })
          return a.every(function(e) {
            return (
              0 === e.length ||
              t.some(function(t) {
                return t.startsWith(e) || t.endsWith(e)
              })
            )
          })
        }
        return e.filter(function(e) {
          var t = e.symbol,
            n = e.name
          return (t && r(t)) || (n && r(n))
        })
      }
      var Ja = n(42)
      function Ga(e, t) {
        var n = Le().chainId,
          a = jr()
        return Object(o.useMemo)(
          function() {
            if (!n || !e[n]) return {}
            var r = Object.keys(e[n]).reduce(function(t, a) {
              return (t[a] = e[n][a].token), t
            }, {})
            return t
              ? a.reduce(function(e, t) {
                  return (e[t.address] = t), e
                }, Object(f.a)({}, r))
              : r
          },
          [n, a, e, t]
        )
      }
      function Ka() {
        return Ga(pn(), !0)
      }
      function Za() {
        var e = Ga(fn(), !1),
          t = Object.keys(Ka())
        return t
          ? Object.keys(e).reduce(function(n, a) {
              return t.includes(a) || (n[a] = e[a]), n
            }, {})
          : e
      }
      function _a() {
        return Ga(sn(un(an), dn(Kt)), !1)
      }
      function $a(e) {
        var t = jr()
        return (
          !!e &&
          !!t.find(function(t) {
            return Object(v.q)(e, t)
          })
        )
      }
      var er = /^0x[a-fA-F0-9]{64}$/
      function tr(e, t, n) {
        return e && e.length > 0
          ? e
          : t && er.test(t) && 0 === Object(Ja.arrayify)(t)[31]
          ? Object(vn.parseBytes32String)(t)
          : n
      }
      function nr(e) {
        var t = Le().chainId,
          n = Ka(),
          a = na(e),
          r = Ma(a || void 0, !1),
          i = (function(e, t) {
            return La(e, ja, t)
          })(a || void 0, !1),
          c = a ? n[a] : void 0,
          u = Kn(c ? void 0 : r, 'name', void 0, Vn),
          l = Kn(c ? void 0 : i, 'name', void 0, Vn),
          s = Kn(c ? void 0 : r, 'symbol', void 0, Vn),
          d = Kn(c ? void 0 : i, 'symbol', void 0, Vn),
          m = Kn(c ? void 0 : r, 'decimals', void 0, Vn)
        return Object(o.useMemo)(
          function() {
            if (c) return c
            if (t && a) {
              if (m.loading || s.loading || u.loading) return null
              var e, n, r, o
              if (m.result)
                return new v.l(
                  t,
                  a,
                  m.result[0],
                  tr(
                    null === (e = s.result) || void 0 === e ? void 0 : e[0],
                    null === (n = d.result) || void 0 === n ? void 0 : n[0],
                    'UNKNOWN'
                  ),
                  tr(
                    null === (r = u.result) || void 0 === r ? void 0 : r[0],
                    null === (o = l.result) || void 0 === o ? void 0 : o[0],
                    'Unknown Token'
                  )
                )
            }
          },
          [a, t, m.loading, m.result, s.loading, s.result, d.result, c, u.loading, u.result, l.result]
        )
      }
      function ar(e) {
        var t = 'ETH' === (null === e || void 0 === e ? void 0 : e.toUpperCase()),
          n = nr(t ? void 0 : e)
        return t ? v.d : n
      }
      var rr = Object(hn.b)('user/updateMatchesDarkMode'),
        or = Object(hn.b)('user/updateUserDarkMode'),
        ir = Object(hn.b)('user/updateUserExpertMode'),
        cr = Object(hn.b)('user/updateUserSingleHopOnly'),
        ur = Object(hn.b)('user/updateUserSlippageTolerance'),
        lr = Object(hn.b)('user/updateUserDeadline'),
        sr = Object(hn.b)('user/addSerializedToken'),
        dr = Object(hn.b)('user/removeSerializedToken'),
        mr = Object(hn.b)('user/addSerializedPair'),
        pr = Object(hn.b)('user/removeSerializedPair'),
        fr = Object(hn.b)('app/toggleURLWarning')
      function br(e) {
        return { chainId: e.chainId, address: e.address, decimals: e.decimals, symbol: e.symbol, name: e.name }
      }
      function vr(e) {
        return new v.l(e.chainId, e.address, e.decimals, e.symbol, e.name)
      }
      function hr() {
        var e = Object(d.d)(function(e) {
            var t = e.user,
              n = t.matchesDarkMode
            return { userDarkMode: t.userDarkMode, matchesDarkMode: n }
          }, d.b),
          t = e.userDarkMode,
          n = e.matchesDarkMode
        return null === t ? n : t
      }
      function gr() {
        return Object(d.d)(function(e) {
          return e.user.userExpertMode
        })
      }
      function yr() {
        var e = Object(d.c)(),
          t = gr(),
          n = Object(o.useCallback)(
            function() {
              e(ir({ userExpertMode: !t }))
            },
            [t, e]
          )
        return [t, n]
      }
      function Er() {
        var e = Object(d.c)()
        return [
          Object(d.d)(function(e) {
            return e.user.userSingleHopOnly
          }),
          Object(o.useCallback)(
            function(t) {
              s.a.event({ category: 'Routing', action: t ? 'enable single hop' : 'disable single hop' }),
                e(cr({ userSingleHopOnly: t }))
            },
            [e]
          )
        ]
      }
      function xr() {
        var e = Object(d.c)()
        return [
          Object(d.d)(function(e) {
            return e.user.userSlippageTolerance
          }),
          Object(o.useCallback)(
            function(t) {
              e(ur({ userSlippageTolerance: t }))
            },
            [e]
          )
        ]
      }
      function Or() {
        var e = Object(d.c)()
        return Object(o.useCallback)(
          function(t) {
            e(sr({ serializedToken: br(t) }))
          },
          [e]
        )
      }
      function jr() {
        var e = Le().chainId,
          t = Object(d.d)(function(e) {
            return e.user.tokens
          })
        return Object(o.useMemo)(
          function() {
            var n
            return e ? Object.values(null !== (n = t[e]) && void 0 !== n ? n : {}).map(vr) : []
          },
          [t, e]
        )
      }
      function Ar(e) {
        return { token0: br(e.token0), token1: br(e.token1) }
      }
      function wr() {
        return Object(d.d)(function(e) {
          return e.user.URLWarningVisible
        })
      }
      function kr(e) {
        var t = Object(A.a)(e, 2),
          n = t[0],
          a = t[1]
        return new v.l(n.chainId, v.g.getAddress(n, a), 18, 'WHOOSH-LP', 'WhooshSwap LP')
      }
      var Tr = n(11),
        Cr = n(751),
        Ir = n(752),
        Sr = n(753),
        Nr = n(754)
      function Rr() {
        var e = Object(Ve.a)(['\n    display: block;\n  '])
        return (
          (Rr = function() {
            return e
          }),
          e
        )
      }
      function Ur() {
        var e = Object(Ve.a)(['\n  display: none;\n  ', ';\n'])
        return (
          (Ur = function() {
            return e
          }),
          e
        )
      }
      function Br() {
        var e = Object(Ve.a)(['\n    display: none;\n  '])
        return (
          (Br = function() {
            return e
          }),
          e
        )
      }
      function Lr() {
        var e = Object(Ve.a)(['\n  ', ';\n'])
        return (
          (Lr = function() {
            return e
          }),
          e
        )
      }
      function Wr() {
        var e = Object(Ve.a)(['\n    display: none;\n  '])
        return (
          (Wr = function() {
            return e
          }),
          e
        )
      }
      function zr() {
        var e = Object(Ve.a)(['\n  ', ';\n'])
        return (
          (zr = function() {
            return e
          }),
          e
        )
      }
      function Mr() {
        var e = Object(Ve.a)(['\n  height: ', ';\n  width: ', ';\n'])
        return (
          (Mr = function() {
            return e
          }),
          e
        )
      }
      function Pr() {
        var e = Object(Ve.a)(['\n  color: ', ';\n'])
        return (
          (Pr = function() {
            return e
          }),
          e
        )
      }
      function Dr() {
        var e = Object(Ve.a)(['\n  animation: 2s ', ' linear infinite;\n  width: 16px;\n  height: 16px;\n'])
        return (
          (Dr = function() {
            return e
          }),
          e
        )
      }
      function Fr() {
        var e = Object(Ve.a)([
          '\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n'
        ])
        return (
          (Fr = function() {
            return e
          }),
          e
        )
      }
      function qr() {
        var e = Object(Ve.a)([
          '\n  animation: ',
          ' 5s cubic-bezier(0.83, 0, 0.17, 1) infinite;\n  padding: 2rem 0 0 0;\n  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));\n'
        ])
        return (
          (qr = function() {
            return e
          }),
          e
        )
      }
      function Vr() {
        var e = Object(Ve.a)([
          '\n  0% {\n    transform: perspective(1000px) rotateY(0deg);\n  }\n\n  100% {\n    transform: perspective(1000px) rotateY(360deg);\n  }\n'
        ])
        return (
          (Vr = function() {
            return e
          }),
          e
        )
      }
      function Yr() {
        var e = Object(Ve.a)([
          '\n  height: 16px;\n  width: 18px;\n  margin-left: 10px;\n  stroke: ',
          ';\n\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n\n  :hover {\n    opacity: 0.7;\n  }\n'
        ])
        return (
          (Yr = function() {
            return e
          }),
          e
        )
      }
      function Hr() {
        var e = Object(Ve.a)(['\n  height: 16px;\n  width: 18px;\n  margin-left: 10px;\n  stroke: ', ';\n'])
        return (
          (Hr = function() {
            return e
          }),
          e
        )
      }
      function Qr() {
        var e = Object(Ve.a)([
          '\n  text-decoration: none;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n\n  :hover {\n    text-decoration: none;\n    opacity: 0.7;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: none;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n'
        ])
        return (
          (Qr = function() {
            return e
          }),
          e
        )
      }
      function Xr() {
        var e = Object(Ve.a)([
          '\n  text-decoration: none;\n  cursor: pointer;\n  color: ',
          ';\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n'
        ])
        return (
          (Xr = function() {
            return e
          }),
          e
        )
      }
      function Jr() {
        var e = Object(Ve.a)([
          '\n  text-decoration: none;\n  cursor: pointer;\n  color: ',
          ';\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n'
        ])
        return (
          (Jr = function() {
            return e
          }),
          e
        )
      }
      function Gr() {
        var e = Object(Ve.a)([
          '\n  border: none;\n  text-decoration: none;\n  background: none;\n\n  cursor: ',
          ';\n  color: ',
          ';\n  font-weight: 500;\n\n  :hover {\n    text-decoration: ',
          ';\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: ',
          ';\n  }\n\n  :active {\n    text-decoration: none;\n  }\n'
        ])
        return (
          (Gr = function() {
            return e
          }),
          e
        )
      }
      function Kr() {
        var e = Object(Ve.a)([
          '\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ',
          ';\n  height: ',
          ';\n  margin-right: ',
          ';\n  margin-left: ',
          ';\n  & > * {\n    stroke: ',
          ';\n  }\n'
        ])
        return (
          (Kr = function() {
            return e
          }),
          e
        )
      }
      function Zr() {
        var e = Object(Ve.a)(['\n  cursor: pointer;\n'])
        return (
          (Zr = function() {
            return e
          }),
          e
        )
      }
      function _r() {
        var e = Object(Ve.a)([
          '\n  padding: 1rem 2rem 1rem 2rem;\n  border-radius: 3rem;\n  cursor: pointer;\n  user-select: none;\n  font-size: 1rem;\n  border: none;\n  outline: none;\n  background-color: ',
          ';\n  color: ',
          ';\n  width: 100%;\n\n  :hover,\n  :focus {\n    background-color: ',
          ';\n  }\n\n  :active {\n    background-color: ',
          ';\n  }\n\n  :disabled {\n    background-color: ',
          ';\n    color: ',
          ';\n    cursor: auto;\n  }\n'
        ])
        return (
          (_r = function() {
            return e
          }),
          e
        )
      }
      function $r() {
        var e = Object(Ve.a)([
          '\n  outline: none;\n  border: none;\n  font-size: inherit;\n  padding: 0;\n  margin: 0;\n  background: none;\n  cursor: pointer;\n\n  :hover {\n    opacity: 0.7;\n  }\n\n  :focus {\n    text-decoration: underline;\n  }\n'
        ])
        return (
          ($r = function() {
            return e
          }),
          e
        )
      }
      var eo = He.default.button($r()),
        to =
          (He.default.button.attrs(function(e) {
            var t = e.warning,
              n = e.theme
            return { backgroundColor: t ? n.red1 : n.primary1 }
          })(
            _r(),
            function(e) {
              return e.backgroundColor
            },
            function(e) {
              return e.theme.white
            },
            function(e) {
              var t = e.backgroundColor
              return Object(Ke.a)(0.05, t)
            },
            function(e) {
              var t = e.backgroundColor
              return Object(Ke.a)(0.1, t)
            },
            function(e) {
              return e.theme.bg1
            },
            function(e) {
              return e.theme.text4
            }
          ),
          Object(He.default)(Cr.a)(Zr())),
        no = He.default.div(
          Kr(),
          function(e) {
            var t = e.size
            return null !== t && void 0 !== t ? t : '20px'
          },
          function(e) {
            var t = e.size
            return null !== t && void 0 !== t ? t : '20px'
          },
          function(e) {
            var t = e.marginRight
            return null !== t && void 0 !== t ? t : 0
          },
          function(e) {
            var t = e.marginLeft
            return null !== t && void 0 !== t ? t : 0
          },
          function(e) {
            var t = e.theme,
              n = e.stroke
            return null !== n && void 0 !== n ? n : t.blue1
          }
        ),
        ao = He.default.button(
          Gr(),
          function(e) {
            return e.disabled ? 'default' : 'pointer'
          },
          function(e) {
            var t = e.theme
            return e.disabled ? t.text2 : t.primary1
          },
          function(e) {
            return e.disabled ? null : 'underline'
          },
          function(e) {
            return e.disabled ? null : 'underline'
          }
        ),
        ro = Object(He.default)(m.b)(Jr(), function(e) {
          return e.theme.primary1
        }),
        oo = He.default.a(Xr(), function(e) {
          return e.theme.primary1
        }),
        io = He.default.a(Qr()),
        co = Object(He.default)(Ir.a)(Hr(), function(e) {
          return e.theme.blue1
        }),
        uo = Object(He.default)(Sr.a)(Yr(), function(e) {
          return e.theme.text3
        }),
        lo = Object(He.keyframes)(Vr()),
        so = He.default.img(qr(), lo)
      function mo(e) {
        var t = e.target,
          n = void 0 === t ? '_blank' : t,
          a = e.href,
          r = e.rel,
          c = void 0 === r ? 'noopener noreferrer' : r,
          u = Object(Xe.a)(e, ['target', 'href', 'rel']),
          l = Object(o.useCallback)(
            function(e) {
              '_blank' === n || e.ctrlKey || e.metaKey
                ? s.a.outboundLink({ label: a }, function() {
                    console.debug('Fired outbound link event', a)
                  })
                : (e.preventDefault(),
                  s.a.outboundLink({ label: a }, function() {
                    window.location.href = a
                  }))
            },
            [a, n]
          )
        return i.a.createElement(oo, Object.assign({ target: n, rel: c, href: a, onClick: l }, u))
      }
      function po(e) {
        var t = e.target,
          n = void 0 === t ? '_blank' : t,
          a = e.href,
          r = e.rel,
          c = void 0 === r ? 'noopener noreferrer' : r,
          u = Object(Xe.a)(e, ['target', 'href', 'rel']),
          l = Object(o.useCallback)(
            function(e) {
              '_blank' === n || e.ctrlKey || e.metaKey
                ? s.a.outboundLink({ label: a }, function() {
                    console.debug('Fired outbound link event', a)
                  })
                : (e.preventDefault(),
                  s.a.outboundLink({ label: a }, function() {
                    window.location.href = a
                  }))
            },
            [a, n]
          )
        return i.a.createElement(
          io,
          Object.assign({ target: n, rel: c, href: a, onClick: l }, u),
          i.a.createElement(co, null)
        )
      }
      var fo = Object(He.keyframes)(Fr()),
        bo = He.default.img(Dr(), fo),
        vo = Object(He.default)(ro)(Pr(), function(e) {
          return e.theme.text1
        })
      function ho(e) {
        var t = e.to
        return i.a.createElement(vo, { to: t }, i.a.createElement(Nr.a, null))
      }
      var go = Object(He.default)(bo)(
          Mr(),
          function(e) {
            return e.size
          },
          function(e) {
            return e.size
          }
        ),
        yo = He.default.span(zr(), function(e) {
          return e.theme.mediaWidth.upToSmall(Wr())
        })
      He.default.span(Lr(), function(e) {
        return e.theme.mediaWidth.upToExtraSmall(Br())
      }),
        He.default.span(Ur(), function(e) {
          return e.theme.mediaWidth.upToExtraSmall(Rr())
        })
      function Eo() {
        var e = Object(Ve.a)([
          '\nhtml {\n  color: ',
          ';\n  background-color: ',
          ';\n}\n\nbody {\n  min-height: 100vh;\n  background-position: 0 -30vh;\n  background-repeat: no-repeat;\n  background-image: ',
          ';\n}\n'
        ])
        return (
          (Eo = function() {
            return e
          }),
          e
        )
      }
      function xo() {
        var e = Object(Ve.a)([
          "\nhtml, input, textarea, button {\n  font-family: 'Inter', sans-serif;\n  font-display: fallback;\n}\n@supports (font-variation-settings: normal) {\n  html, input, textarea, button {\n    font-family: 'Inter var', sans-serif;\n  }\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n a {\n   color: ",
          "; \n }\n\n* {\n  box-sizing: border-box;\n}\n\nbutton {\n  user-select: none;\n}\n\nhtml {\n  font-size: 16px;\n  font-variant: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;\n  \n}\n"
        ])
        return (
          (xo = function() {
            return e
          }),
          e
        )
      }
      function Oo() {
        var e = Object(Ve.a)(['\n  color: ', ';\n'])
        return (
          (Oo = function() {
            return e
          }),
          e
        )
      }
      function jo() {
        var e = Object(Ve.a)(['\n      display: flex;\n      flex-flow: row nowrap;\n    '])
        return (
          (jo = function() {
            return e
          }),
          e
        )
      }
      function Ao() {
        var e = Object(Ve.a)(['\n      display: flex;\n      flex-flow: column nowrap;\n    '])
        return (
          (Ao = function() {
            return e
          }),
          e
        )
      }
      function wo() {
        var e = Object(Ve.a)(['\n      @media (max-width: ', 'px) {\n        ', '\n      }\n    '])
        return (
          (wo = function() {
            return e
          }),
          e
        )
      }
      var ko = { upToExtraSmall: 500, upToSmall: 720, upToMedium: 960, upToLarge: 1280 },
        To = Object.keys(ko).reduce(function(e, t) {
          return (
            (e[t] = function(e, n, a) {
              return Object(He.css)(wo(), ko[t], Object(He.css)(e, n, a))
            }),
            e
          )
        }, {})
      function Co(e) {
        return {
          white: '#FFFFFF',
          black: '#000000',
          text1: e ? '#FFFFFF' : '#000000',
          text2: e ? '#C3C5CB' : '#565A69',
          text3: e ? '#6C7284' : '#888D9B',
          text4: e ? '#565A69' : '#C3C5CB',
          text5: e ? '#2C2F36' : '#EDEEF2',
          bg1: e ? '#212429' : '#FFFFFF',
          bg2: e ? '#2C2F36' : '#F7F8FA',
          bg3: e ? '#40444F' : '#EDEEF2',
          bg4: e ? '#565A69' : '#CED0D9',
          bg5: e ? '#6C7284' : '#888D9B',
          modalBG: e ? 'rgba(0,0,0,.425)' : 'rgba(0,0,0,0.3)',
          advancedBG: e ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.6)',
          primary1: '#008b8a',
          primary2: e ? '#3680E7' : '#FF8CC3',
          primary3: e ? '#4D8FEA' : '#FF99C9',
          primary4: e ? '#376bad70' : '#F6DDE8',
          primary5: e ? '#153d6f70' : '#FDEAF1',
          primaryText1: e ? '#6da8ff' : '#008b8a',
          secondary1: '#008b8a',
          secondary2: e ? '#17000b26' : '#F6DDE8',
          secondary3: e ? '#17000b26' : '#FDEAF1',
          red1: '#FD4040',
          red2: '#F82D3A',
          red3: '#D60000',
          green1: '#27AE60',
          yellow1: '#FFE270',
          yellow2: '#F3841E',
          blue1: '#008b8a'
        }
      }
      function Io(e) {
        var t = e.children,
          n = hr(),
          a = Object(o.useMemo)(
            function() {
              return (function(e) {
                return Object(f.a)(
                  Object(f.a)({}, Co(e)),
                  {},
                  {
                    grids: { sm: 8, md: 12, lg: 24 },
                    shadow1: e ? '#000' : '#2F80ED',
                    mediaWidth: To,
                    flexColumnNoWrap: Object(He.css)(Ao()),
                    flexRowNoWrap: Object(He.css)(jo())
                  }
                )
              })(n)
            },
            [n]
          )
        return i.a.createElement(He.ThemeProvider, { theme: a }, t)
      }
      var So = Object(He.default)(Tr.b)(Oo(), function(e) {
          var t = e.color
          return e.theme[t]
        }),
        No = function(e) {
          return i.a.createElement(So, Object.assign({ fontWeight: 500, color: 'text2' }, e))
        },
        Ro = function(e) {
          return i.a.createElement(So, Object.assign({ fontWeight: 500, color: 'primary1' }, e))
        },
        Uo = function(e) {
          return i.a.createElement(So, Object.assign({ fontWeight: 500, color: 'text1' }, e))
        },
        Bo = function(e) {
          return i.a.createElement(So, Object.assign({ fontWeight: 500, color: 'white' }, e))
        },
        Lo = function(e) {
          return i.a.createElement(So, Object.assign({ fontWeight: 400, fontSize: 16, color: 'text1' }, e))
        },
        Wo = function(e) {
          return i.a.createElement(So, Object.assign({ fontWeight: 600, fontSize: 24 }, e))
        },
        zo = function(e) {
          return i.a.createElement(So, Object.assign({ fontWeight: 500, fontSize: 20 }, e))
        },
        Mo = function(e) {
          return i.a.createElement(So, Object.assign({ fontWeight: 400, fontSize: 14 }, e))
        },
        Po = function(e) {
          return i.a.createElement(So, Object.assign({ fontWeight: 500, fontSize: 11 }, e))
        },
        Do = function(e) {
          return i.a.createElement(So, Object.assign({ fontWeight: 500, color: 'blue1' }, e))
        },
        Fo = function(e) {
          return i.a.createElement(So, Object.assign({ fontWeight: 500, color: 'text3' }, e))
        },
        qo = function(e) {
          return i.a.createElement(
            So,
            Object.assign({ fontWeight: 500, fontSize: 12, fontStyle: 'italic', color: 'text2' }, e)
          )
        },
        Vo = function(e) {
          var t = e.error,
            n = Object(Xe.a)(e, ['error'])
          return i.a.createElement(So, Object.assign({ fontWeight: 500, color: t ? 'red1' : 'text2' }, n))
        },
        Yo = Object(He.createGlobalStyle)(xo(), Co(!1).blue1),
        Ho = Object(He.createGlobalStyle)(
          Eo(),
          function(e) {
            return e.theme.text1
          },
          function(e) {
            return e.theme.bg2
          },
          function(e) {
            var t = e.theme
            return 'radial-gradient(50% 50% at 50% 50%, '
              .concat(Object(Ke.d)(0.9, t.primary1), ' 0%, ')
              .concat(Object(Ke.d)(1, t.bg1), ' 100%)')
          }
        ),
        Qo = n(755)
      function Xo() {
        var e = Object(Ve.a)([
          '\n  background-color: ',
          ';\n  border: 1px solid ',
          ';\n\n  &:focus {\n    box-shadow: 0 0 0 1pt ',
          ';\n    background-color: ',
          ';\n  }\n  &:hover {\n    background-color: ',
          ';\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ',
          ';\n    background-color: ',
          ';\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n    box-shadow: none;\n    background-color: ',
          ';\n    border: 1px solid ',
          ';\n  }\n'
        ])
        return (
          (Xo = function() {
            return e
          }),
          e
        )
      }
      function Jo() {
        var e = Object(Ve.a)([
          '\n  background-color: ',
          ';\n  color: ',
          ';\n  border: 1px solid ',
          ';\n\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n'
        ])
        return (
          (Jo = function() {
            return e
          }),
          e
        )
      }
      function Go() {
        var e = Object(Ve.a)([
          '\n  border: 1px solid #edeef2;\n  background-color: ',
          ';\n  color: black;\n\n  &:focus {\n    // eslint-disable-next-line @typescript-eslint/no-unused-vars\n    box-shadow: 0 0 0 1pt ',
          ';\n  }\n  &:hover {\n    box-shadow: 0 0 0 1pt ',
          ';\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ',
          ';\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n'
        ])
        return (
          (Go = function() {
            return e
          }),
          e
        )
      }
      function Ko() {
        var e = Object(Ve.a)([
          '\n  background-color: transparent;\n  color: ',
          ';\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &:focus {\n    text-decoration: underline;\n  }\n  &:hover {\n    text-decoration: none;\n  }\n  &:active {\n    text-decoration: none;\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n'
        ])
        return (
          (Ko = function() {
            return e
          }),
          e
        )
      }
      function Zo() {
        var e = Object(Ve.a)([
          '\n  border: 1px solid ',
          ';\n  background-color: transparent;\n  color: ',
          ';\n\n  &:focus {\n    box-shadow: 0 0 0 1px ',
          ';\n  }\n  &:hover {\n    box-shadow: 0 0 0 1px ',
          ';\n  }\n  &:active {\n    box-shadow: 0 0 0 1px ',
          ';\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n'
        ])
        return (
          (Zo = function() {
            return e
          }),
          e
        )
      }
      function _o() {
        var e = Object(Ve.a)([
          '\n  color: white;\n  padding: 4px 8px;\n  height: 36px;\n  font-weight: 500;\n  background-color: ',
          ';\n  background: radial-gradient(174.47% 188.91% at 1.84% 0%, #008b8a 0%, #008b8a 100%), #edeef2;\n  width: fit-content;\n  position: relative;\n  cursor: pointer;\n  border: none;\n  white-space: no-wrap;\n  :hover {\n    opacity: 0.8;\n  }\n  :active {\n    opacity: 0.9;\n  }\n'
        ])
        return (
          (_o = function() {
            return e
          }),
          e
        )
      }
      function $o() {
        var e = Object(Ve.a)([
          '\n  background-color: ',
          ';\n  color: white;\n\n  &:focus {\n    box-shadow: 0 0 0 1pt ',
          ';\n    background-color: ',
          ';\n  }\n  &:hover {\n    background-color: ',
          ';\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ',
          ';\n    background-color: ',
          ';\n  }\n  &:disabled {\n    background-color: ',
          ';\n    opacity: 50%;\n    cursor: auto;\n  }\n'
        ])
        return (
          ($o = function() {
            return e
          }),
          e
        )
      }
      function ei() {
        var e = Object(Ve.a)([
          '\n  border: 1px solid ',
          ';\n  color: ',
          ';\n  background-color: transparent;\n  font-size: 16px;\n  border-radius: 12px;\n  padding: ',
          ';\n\n  &:focus {\n    box-shadow: 0 0 0 1pt ',
          ';\n    border: 1px solid ',
          ';\n  }\n  &:hover {\n    border: 1px solid ',
          ';\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ',
          ';\n    border: 1px solid ',
          ';\n  }\n  &:disabled {\n    opacity: 50%;\n    cursor: auto;\n  }\n  a:hover {\n    text-decoration: none;\n  }\n'
        ])
        return (
          (ei = function() {
            return e
          }),
          e
        )
      }
      function ti() {
        var e = Object(Ve.a)([
          '\n  background-color: ',
          ';\n  color: ',
          ';\n  font-size: 16px;\n  font-weight: 500;\n  &:focus {\n    background-color: ',
          ';\n  }\n  &:hover {\n    background-color: ',
          ';\n  }\n  &:active {\n    background-color: ',
          ';\n  }\n'
        ])
        return (
          (ti = function() {
            return e
          }),
          e
        )
      }
      function ni() {
        var e = Object(Ve.a)([
          '\n  background-color: ',
          ';\n  color: ',
          ';\n  font-size: 16px;\n  font-weight: 500;\n  &:focus {\n    box-shadow: 0 0 0 1pt ',
          ';\n    background-color: ',
          ';\n  }\n  &:hover {\n    background-color: ',
          ';\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ',
          ';\n    background-color: ',
          ';\n  }\n  :disabled {\n    opacity: 0.4;\n    :hover {\n      cursor: auto;\n      background-color: ',
          ';\n      box-shadow: none;\n      border: 1px solid transparent;\n      outline: none;\n    }\n  }\n'
        ])
        return (
          (ni = function() {
            return e
          }),
          e
        )
      }
      function ai() {
        var e = Object(Ve.a)([
          '\n  background-color: ',
          ';\n  color: white;\n  &:focus {\n    box-shadow: 0 0 0 1pt ',
          ';\n    background-color: ',
          ';\n  }\n  &:hover {\n    background-color: ',
          ';\n  }\n  &:active {\n    box-shadow: 0 0 0 1pt ',
          ';\n    background-color: ',
          ';\n  }\n  &:disabled {\n    background-color: ',
          ';\n    color: ',
          ';\n    cursor: auto;\n    box-shadow: none;\n    border: 1px solid transparent;\n    outline: none;\n    opacity: ',
          ';\n  }\n'
        ])
        return (
          (ai = function() {
            return e
          }),
          e
        )
      }
      function ri() {
        var e = Object(Ve.a)([
          '\n  padding: ',
          ';\n  width: ',
          ';\n  font-weight: 500;\n  text-align: center;\n  border-radius: 20px;\n  border-radius: ',
          ';\n  outline: none;\n  border: 1px solid transparent;\n  color: white;\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  flex-wrap: nowrap;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  &:disabled {\n    cursor: auto;\n  }\n\n  > * {\n    user-select: none;\n  }\n'
        ])
        return (
          (ri = function() {
            return e
          }),
          e
        )
      }
      var oi = Object(He.default)(Wt.Button)(
          ri(),
          function(e) {
            var t = e.padding
            return t || '18px'
          },
          function(e) {
            var t = e.width
            return t || '100%'
          },
          function(e) {
            var t = e.borderRadius
            return t && t
          }
        ),
        ii = Object(He.default)(oi)(
          ai(),
          function(e) {
            return e.theme.primary1
          },
          function(e) {
            var t = e.theme
            return Object(Ke.a)(0.05, t.primary1)
          },
          function(e) {
            var t = e.theme
            return Object(Ke.a)(0.05, t.primary1)
          },
          function(e) {
            var t = e.theme
            return Object(Ke.a)(0.05, t.primary1)
          },
          function(e) {
            var t = e.theme
            return Object(Ke.a)(0.1, t.primary1)
          },
          function(e) {
            var t = e.theme
            return Object(Ke.a)(0.1, t.primary1)
          },
          function(e) {
            var t = e.theme,
              n = e.altDisabledStyle,
              a = e.disabled
            return n ? (a ? t.bg3 : t.primary1) : t.bg3
          },
          function(e) {
            var t = e.theme,
              n = e.altDisabledStyle,
              a = e.disabled
            return n ? (a ? t.text3 : 'white') : t.text3
          },
          function(e) {
            return e.altDisabledStyle ? '0.5' : '1'
          }
        ),
        ci = Object(He.default)(oi)(
          ni(),
          function(e) {
            return e.theme.primary5
          },
          function(e) {
            return e.theme.primaryText1
          },
          function(e) {
            var t = e.theme
            return !e.disabled && Object(Ke.a)(0.03, t.primary5)
          },
          function(e) {
            var t = e.theme
            return !e.disabled && Object(Ke.a)(0.03, t.primary5)
          },
          function(e) {
            var t = e.theme
            return !e.disabled && Object(Ke.a)(0.03, t.primary5)
          },
          function(e) {
            var t = e.theme
            return !e.disabled && Object(Ke.a)(0.05, t.primary5)
          },
          function(e) {
            var t = e.theme
            return !e.disabled && Object(Ke.a)(0.05, t.primary5)
          },
          function(e) {
            return e.theme.primary5
          }
        ),
        ui =
          (Object(He.default)(oi)(
            ti(),
            function(e) {
              return e.theme.bg3
            },
            function(e) {
              return e.theme.text2
            },
            function(e) {
              var t = e.theme
              return !e.disabled && Object(Ke.a)(0.05, t.bg4)
            },
            function(e) {
              var t = e.theme
              return !e.disabled && Object(Ke.a)(0.05, t.bg4)
            },
            function(e) {
              var t = e.theme
              return !e.disabled && Object(Ke.a)(0.1, t.bg4)
            }
          ),
          Object(He.default)(oi)(
            ei(),
            function(e) {
              return e.theme.primary4
            },
            function(e) {
              return e.theme.primary1
            },
            function(e) {
              var t = e.padding
              return t || '10px'
            },
            function(e) {
              return e.theme.primary4
            },
            function(e) {
              return e.theme.primary3
            },
            function(e) {
              return e.theme.primary3
            },
            function(e) {
              return e.theme.primary4
            },
            function(e) {
              return e.theme.primary3
            }
          )),
        li =
          (Object(He.default)(oi)(
            $o(),
            function(e) {
              return e.theme.primary1
            },
            function(e) {
              var t = e.theme
              return Object(Ke.a)(0.05, t.primary1)
            },
            function(e) {
              var t = e.theme
              return Object(Ke.a)(0.05, t.primary1)
            },
            function(e) {
              var t = e.theme
              return Object(Ke.a)(0.05, t.primary1)
            },
            function(e) {
              var t = e.theme
              return Object(Ke.a)(0.1, t.primary1)
            },
            function(e) {
              var t = e.theme
              return Object(Ke.a)(0.1, t.primary1)
            },
            function(e) {
              return e.theme.primary1
            }
          ),
          Object(He.default)(ii)(_o(), function(e) {
            return e.theme.bg3
          }),
          Object(He.default)(oi)(
            Zo(),
            function(e) {
              return e.theme.bg2
            },
            function(e) {
              return e.theme.text1
            },
            function(e) {
              return e.theme.bg4
            },
            function(e) {
              return e.theme.bg4
            },
            function(e) {
              return e.theme.bg4
            }
          )),
        si = Object(He.default)(oi)(Ko(), function(e) {
          return e.theme.primary1
        }),
        di =
          (Object(He.default)(oi)(
            Go(),
            function(e) {
              return e.theme.bg1
            },
            Object(Ke.a)(0.05, '#edeef2'),
            Object(Ke.a)(0.1, '#edeef2'),
            Object(Ke.a)(0.1, '#edeef2')
          ),
          Object(He.default)(oi)(
            Jo(),
            function(e) {
              var t = e.theme
              return Object(Ke.b)(0.5, t.green1)
            },
            function(e) {
              return e.theme.green1
            },
            function(e) {
              return e.theme.green1
            }
          )),
        mi = Object(He.default)(oi)(
          Xo(),
          function(e) {
            return e.theme.red1
          },
          function(e) {
            return e.theme.red1
          },
          function(e) {
            var t = e.theme
            return Object(Ke.a)(0.05, t.red1)
          },
          function(e) {
            var t = e.theme
            return Object(Ke.a)(0.05, t.red1)
          },
          function(e) {
            var t = e.theme
            return Object(Ke.a)(0.05, t.red1)
          },
          function(e) {
            var t = e.theme
            return Object(Ke.a)(0.1, t.red1)
          },
          function(e) {
            var t = e.theme
            return Object(Ke.a)(0.1, t.red1)
          },
          function(e) {
            return e.theme.red1
          },
          function(e) {
            return e.theme.red1
          }
        )
      function pi(e) {
        var t = e.confirmed,
          n = e.altDisabledStyle,
          a = Object(Xe.a)(e, ['confirmed', 'altDisabledStyle'])
        return t ? i.a.createElement(di, a) : i.a.createElement(ii, Object.assign({}, a, { altDisabledStyle: n }))
      }
      function fi(e) {
        var t = e.error,
          n = Object(Xe.a)(e, ['error'])
        return t ? i.a.createElement(mi, n) : i.a.createElement(ii, n)
      }
      function bi(e) {
        var t = e.disabled,
          n = void 0 !== t && t,
          a = e.children,
          r = Object(Xe.a)(e, ['disabled', 'children'])
        return i.a.createElement(
          li,
          Object.assign({}, r, { disabled: n }),
          i.a.createElement(
            Vt,
            null,
            i.a.createElement('div', { style: { display: 'flex', alignItems: 'center' } }, a),
            i.a.createElement(Qo.a, { size: 24 })
          )
        )
      }
      var vi = Object(hn.b)('transactions/addTransaction'),
        hi = Object(hn.b)('transactions/clearAllTransactions'),
        gi = Object(hn.b)('transactions/finalizeTransaction'),
        yi = Object(hn.b)('transactions/checkedTransaction')
      function Ei() {
        var e = Le(),
          t = e.chainId,
          n = e.account,
          a = Object(d.c)()
        return Object(o.useCallback)(
          function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              o = r.summary,
              i = r.approval,
              c = r.claim
            if (n && t) {
              var u = e.hash
              if (!u) throw Error('No transaction hash found.')
              a(vi({ hash: u, from: n, chainId: t, approval: i, summary: o, claim: c }))
            }
          },
          [a, t, n]
        )
      }
      function xi() {
        var e,
          t = Le().chainId,
          n = Object(d.d)(function(e) {
            return e.transactions
          })
        return t && null !== (e = n[t]) && void 0 !== e ? e : {}
      }
      function Oi(e) {
        var t = xi()
        return !(!e || !t[e]) && !t[e].receipt
      }
      function ji(e) {
        return new Date().getTime() - e.addedTime < 864e5
      }
      function Ai(e) {
        var t = xi(),
          n = Object(o.useMemo)(
            function() {
              var n = Object.keys(t).find(function(n) {
                var a = t[n]
                return a.claim && a.claim.recipient === e
              })
              return n && t[n] ? t[n] : void 0
            },
            [e, t]
          )
        return { claimSubmitted: Boolean(n), claimTxn: n }
      }
      var wi = {}
      function ki(e) {
        var t = Le().chainId,
          n = ''.concat(t, ':').concat(e),
          a = Object(o.useState)({}),
          r = Object(A.a)(a, 2),
          i = r[0],
          c = r[1]
        return (
          Object(o.useEffect)(
            function() {
              e &&
                t &&
                (function(e, t) {
                  var n,
                    a = na(e)
                  if (!a) return Promise.reject(new Error('Invalid address'))
                  var r = ''.concat(t, ':').concat(e)
                  return (wi[r] =
                    null !== (n = wi[r]) && void 0 !== n
                      ? n
                      : fetch('https://gentle-frost-9e74.uniswap.workers.dev/'.concat(t, '/').concat(a))
                          .then(function(e) {
                            return 200 === e.status
                              ? e.json()
                              : (console.debug('No claim for account '.concat(a, ' on chain ID ').concat(t)), null)
                          })
                          .catch(function(e) {
                            console.error('Failed to get claim data', e)
                          }))
                })(e, t).then(function(e) {
                  return c(function(t) {
                    return Object(f.a)(Object(f.a)({}, t), {}, Object(b.a)({}, n, e))
                  })
                })
            },
            [e, t, n]
          ),
          e && t ? i[n] : void 0
        )
      }
      function Ti(e) {
        var t,
          n = ki(e),
          a = Kn(Va(), 'isClaimed', [null === n || void 0 === n ? void 0 : n.index])
        return Boolean(n && !a.loading && !1 === (null === (t = a.result) || void 0 === t ? void 0 : t[0]))
      }
      function Ci(e) {
        var t = Le().chainId,
          n = ki(e),
          a = Ti(e),
          r = t ? de[t] : void 0
        if (r) return a && n ? new v.m(r, v.f.BigInt(n.amount)) : new v.m(r, v.f.BigInt(0))
      }
      function Ii(e) {
        var t = Le(),
          n = t.library,
          a = t.chainId,
          r = ki(e),
          o = Ci(e),
          i = Ei(),
          c = Va()
        return {
          claimCallback: (function() {
            var t = Object(w.a)(
              j.a.mark(function t() {
                var u, l
                return j.a.wrap(function(t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (r && e && n && a && c) {
                          t.next = 2
                          break
                        }
                        return t.abrupt('return')
                      case 2:
                        return (
                          (l = [r.index, e, r.amount, r.proof]),
                          t.abrupt(
                            'return',
                            (u = c.estimateGas).claim.apply(u, l.concat([{}])).then(function(t) {
                              return c.claim.apply(c, l.concat([{ value: null, gasLimit: ia(t) }])).then(function(t) {
                                return (
                                  i(t, {
                                    summary: 'Claimed '.concat(
                                      null === o || void 0 === o ? void 0 : o.toSignificant(4),
                                      ' UNI'
                                    ),
                                    claim: { recipient: e }
                                  }),
                                  t.hash
                                )
                              })
                            })
                          )
                        )
                      case 4:
                      case 'end':
                        return t.stop()
                    }
                }, t)
              })
            )
            return function() {
              return t.apply(this, arguments)
            }
          })()
        }
      }
      var Si = n(87),
        Ni = n.n(Si),
        Ri = n(75),
        Ui = n.n(Ri)
      function Bi(e) {
        return /^0x0*$/.test(e)
      }
      function Li(e, t) {
        var n = Object(o.useState)(e),
          a = Object(A.a)(n, 2),
          r = a[0],
          i = a[1]
        return (
          Object(o.useEffect)(
            function() {
              var n = setTimeout(function() {
                i(e)
              }, t)
              return function() {
                clearTimeout(n)
              }
            },
            [e, t]
          ),
          r
        )
      }
      function Wi(e) {
        var t,
          n,
          a,
          r = Li(e, 200),
          i = Object(o.useMemo)(
            function() {
              if (!r) return [void 0]
              try {
                return r ? [Object(Ja.namehash)(r)] : [void 0]
              } catch (e) {
                return [void 0]
              }
            },
            [r]
          ),
          c = Kn(Pa(!1), 'resolver', i),
          u = null === (t = c.result) || void 0 === t ? void 0 : t[0],
          l = Kn(Da(u && !Bi(u) ? u : void 0, !1), 'addr', i),
          s = r !== e
        return {
          address: s
            ? null
            : null !== (n = null === (a = l.result) || void 0 === a ? void 0 : a[0]) && void 0 !== n
            ? n
            : null,
          loading: s || c.loading || l.loading
        }
      }
      function zi(e) {
        var t,
          n,
          a,
          r = Li(e, 200),
          i = Object(o.useMemo)(
            function() {
              if (!r || !na(r)) return [void 0]
              try {
                return r ? [Object(Ja.namehash)(''.concat(r.toLowerCase().substr(2), '.addr.reverse'))] : [void 0]
              } catch (e) {
                return [void 0]
              }
            },
            [r]
          ),
          c = Kn(Pa(!1), 'resolver', i),
          u = null === (t = c.result) || void 0 === t ? void 0 : t[0],
          l = Kn(Da(u && !Bi(u) ? u : void 0, !1), 'name', i),
          s = r !== e
        return {
          ENSName: s
            ? null
            : null !== (n = null === (a = l.result) || void 0 === a ? void 0 : a[0]) && void 0 !== n
            ? n
            : null,
          loading: s || c.loading || l.loading
        }
      }
      function Mi(e) {
        var t = na(e),
          n = zi(t || void 0),
          a = Wi(e)
        return {
          loading: n.loading || a.loading,
          address: t || a.address,
          name: n.ENSName ? n.ENSName : (!t && a.address && e) || null
        }
      }
      function Pi() {
        var e = Object(Ve.a)([
          '\n  font-size: 1.25rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  width: 0;\n  background-color: ',
          ';\n  transition: color 300ms ',
          ';\n  color: ',
          ';\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  width: 100%;\n  ::placeholder {\n    color: ',
          ';\n  }\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ',
          ';\n  }\n'
        ])
        return (
          (Pi = function() {
            return e
          }),
          e
        )
      }
      function Di() {
        var e = Object(Ve.a)(['\n  flex: 1;\n  padding: 1rem;\n'])
        return (
          (Di = function() {
            return e
          }),
          e
        )
      }
      function Fi() {
        var e = Object(Ve.a)([
          '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ',
          ';\n  transition: border-color 300ms ',
          ',\n    color 500ms ',
          ';\n  background-color: ',
          ';\n'
        ])
        return (
          (Fi = function() {
            return e
          }),
          e
        )
      }
      function qi() {
        var e = Object(Ve.a)([
          '\n  ',
          '\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ',
          ';\n  z-index: 1;\n  width: 100%;\n'
        ])
        return (
          (qi = function() {
            return e
          }),
          e
        )
      }
      var Vi = He.default.div(
          qi(),
          function(e) {
            return e.theme.flexColumnNoWrap
          },
          function(e) {
            return e.theme.bg1
          }
        ),
        Yi = He.default.div(
          Fi(),
          function(e) {
            var t = e.error,
              n = e.theme
            return t ? n.red1 : n.bg2
          },
          function(e) {
            return e.error ? 'step-end' : 'step-start'
          },
          function(e) {
            return e.error ? 'step-end' : 'step-start'
          },
          function(e) {
            return e.theme.bg1
          }
        ),
        Hi = He.default.div(Di()),
        Qi = He.default.input(
          Pi(),
          function(e) {
            return e.theme.bg1
          },
          function(e) {
            return e.error ? 'step-end' : 'step-start'
          },
          function(e) {
            var t = e.error,
              n = e.theme
            return t ? n.red1 : n.primary1
          },
          function(e) {
            return e.theme.text4
          },
          function(e) {
            return e.theme.text4
          }
        )
      function Xi(e) {
        var t = e.id,
          n = e.value,
          a = e.onChange,
          r = Le().chainId,
          c = Object(o.useContext)(He.ThemeContext),
          u = Mi(n),
          l = u.address,
          s = u.loading,
          d = u.name,
          m = Object(o.useCallback)(
            function(e) {
              var t = e.target.value.replace(/\s+/g, '')
              a(t)
            },
            [a]
          ),
          p = Boolean(n.length > 0 && !s && !l)
        return i.a.createElement(
          Vi,
          { id: t },
          i.a.createElement(
            Yi,
            { error: p },
            i.a.createElement(
              Hi,
              null,
              i.a.createElement(
                bt,
                { gap: 'md' },
                i.a.createElement(
                  Vt,
                  null,
                  i.a.createElement(Uo, { color: c.text2, fontWeight: 500, fontSize: 14 }, 'Recipient'),
                  l &&
                    r &&
                    i.a.createElement(
                      mo,
                      { href: ra(r, null !== d && void 0 !== d ? d : l, 'address'), style: { fontSize: '14px' } },
                      '(View on scan.kbcfoundation.com)'
                    )
                ),
                i.a.createElement(Qi, {
                  className: 'recipient-address-input',
                  type: 'text',
                  autoComplete: 'off',
                  autoCorrect: 'off',
                  autoCapitalize: 'off',
                  spellCheck: 'false',
                  placeholder: 'Wallet Address or ENS name',
                  error: p,
                  pattern: '^(0x[a-fA-F0-9]{40})$',
                  onChange: m,
                  value: n
                })
              )
            )
          )
        )
      }
      var Ji = n(341),
        Gi = n.n(Ji),
        Ki = 'object' === typeof window
      function Zi() {
        return { width: Ki ? window.innerWidth : void 0, height: Ki ? window.innerHeight : void 0 }
      }
      function _i(e) {
        var t = e.start,
          n = e.variant,
          a = (function() {
            var e = Object(o.useState)(Zi),
              t = Object(A.a)(e, 2),
              n = t[0],
              a = t[1]
            return (
              Object(o.useEffect)(function() {
                function e() {
                  a(Zi())
                }
                if (Ki)
                  return (
                    window.addEventListener('resize', e),
                    function() {
                      window.removeEventListener('resize', e)
                    }
                  )
              }, []),
              n
            )
          })(),
          r = a.width,
          c = a.height,
          u = n || (c && r && c > 1.5 * r ? 'bottom' : n)
        return t && r && c
          ? i.a.createElement(Gi.a, {
              style: { zIndex: 1401 },
              numberOfPieces: 400,
              recycle: !1,
              run: !0,
              width: r,
              height: c,
              confettiSource: { h: c, w: r, x: 0, y: 'top' === u ? 0.25 * c : 'bottom' === u ? 0.75 * c : 0.5 * c },
              initialVelocityX: 15,
              initialVelocityY: 30,
              gravity: 0.45,
              tweenDuration: 100,
              wind: 0.05
            })
          : null
      }
      function $i() {
        var e = Object(Ve.a)(['\n  padding: 60px 0;\n'])
        return (
          ($i = function() {
            return e
          }),
          e
        )
      }
      function ec() {
        var e = Object(Ve.a)(['\n  width: 100%;\n  padding: 24px;\n  position: relative;\n  background: ', ';\n'])
        return (
          (ec = function() {
            return e
          }),
          e
        )
      }
      function tc() {
        var e = Object(Ve.a)([
          '\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #008b8a 0%, #021d43 100%);\n'
        ])
        return (
          (tc = function() {
            return e
          }),
          e
        )
      }
      function nc() {
        var e = Object(Ve.a)(['\n  width: 100%;\n'])
        return (
          (nc = function() {
            return e
          }),
          e
        )
      }
      var ac = Object(He.default)(bt)(nc()),
        rc = Object(He.default)(St)(tc()),
        oc = He.default.div(ec(), function(e) {
          return (
            e.activeBG &&
            'radial-gradient(76.02% 75.41% at 1.84% 0%, rgba(255, 0, 122, 0.2) 0%, rgba(33, 114, 229, 0.2) 100%), #FFFFFF;'
          )
        }),
        ic = Object(He.default)(ft)($i())
      function cc(e) {
        var t,
          n,
          a = e.isOpen,
          r = e.onDismiss,
          c = Le().chainId,
          u = Object(o.useState)(''),
          l = Object(A.a)(u, 2),
          s = l[0],
          d = l[1]
        var m = Mi(s).address,
          p = Object(o.useState)(!1),
          f = Object(A.a)(p, 2),
          b = f[0],
          v = f[1],
          h = Ii(m).claimCallback,
          g = Ci(m),
          y = Ti(m),
          E = Object(o.useState)(),
          x = Object(A.a)(E, 2),
          O = x[0],
          j = x[1],
          w = Oi(null !== O && void 0 !== O ? O : ''),
          k = O && !w
        function T() {
          v(!1), j(void 0), d(''), r()
        }
        return i.a.createElement(
          lt,
          { isOpen: a, onDismiss: T, maxHeight: 90 },
          i.a.createElement(_i, { start: Boolean(a && k && b) }),
          !b &&
            i.a.createElement(
              ac,
              { gap: 'lg' },
              i.a.createElement(
                rc,
                null,
                i.a.createElement(Nt, null),
                i.a.createElement(Ut, null),
                i.a.createElement(
                  Bt,
                  { gap: 'md' },
                  i.a.createElement(
                    Vt,
                    null,
                    i.a.createElement(Bo, { fontWeight: 500 }, 'Claim UNI Token'),
                    i.a.createElement(to, { onClick: T, style: { zIndex: 99 }, stroke: 'white' })
                  ),
                  i.a.createElement(
                    Bo,
                    { fontWeight: 700, fontSize: 36 },
                    null === g || void 0 === g
                      ? void 0
                      : g.toFixed(0, null !== (t = { groupSeparator: ',' }) && void 0 !== t ? t : '-'),
                    ' UNI'
                  )
                ),
                i.a.createElement(Lt, null)
              ),
              i.a.createElement(
                bt,
                { gap: 'md', style: { padding: '1rem', paddingTop: '0' }, justify: 'center' },
                i.a.createElement(
                  Mo,
                  { fontWeight: 500 },
                  'Enter an address to trigger a UNI claim. If the address has any claimable UNI it will be sent to them on submission.'
                ),
                i.a.createElement(Xi, {
                  value: s,
                  onChange: function(e) {
                    d(e)
                  }
                }),
                m && !y && i.a.createElement(Vo, { error: !0 }, 'Address has no available claim'),
                i.a.createElement(
                  ii,
                  {
                    disabled: !Object(Ja.isAddress)(null !== m && void 0 !== m ? m : '') || !y,
                    padding: '16px 16px',
                    width: '100%',
                    borderRadius: '12px',
                    mt: '1rem',
                    onClick: function() {
                      v(!0),
                        h()
                          .then(function(e) {
                            j(e)
                          })
                          .catch(function(e) {
                            v(!1), console.log(e)
                          })
                    }
                  },
                  'Claim UNI'
                )
              )
            ),
          (b || k) &&
            i.a.createElement(
              oc,
              { activeBG: !0 },
              i.a.createElement(Ut, null),
              i.a.createElement(Rt, { desaturate: !0 }),
              i.a.createElement(
                Vt,
                null,
                i.a.createElement('div', null),
                i.a.createElement(to, { onClick: T, style: { zIndex: 99 }, stroke: 'black' })
              ),
              i.a.createElement(
                ic,
                null,
                k
                  ? i.a.createElement(so, { width: '72px', src: Ni.a })
                  : i.a.createElement(go, { src: Ui.a, alt: 'loader', size: '90px' })
              ),
              i.a.createElement(
                bt,
                { gap: '100px', justify: 'center' },
                i.a.createElement(
                  bt,
                  { gap: '12px', justify: 'center' },
                  i.a.createElement(Wo, { fontWeight: 600, color: 'black' }, k ? 'Claimed' : 'Claiming'),
                  !k &&
                    i.a.createElement(
                      Tr.b,
                      { fontSize: 36, color: '#008b8a', fontWeight: 800 },
                      null === g || void 0 === g
                        ? void 0
                        : g.toFixed(0, null !== (n = { groupSeparator: ',' }) && void 0 !== n ? n : '-'),
                      ' UNI'
                    ),
                  m && i.a.createElement(Wo, { fontWeight: 600, color: 'black' }, 'for ', oa(m))
                ),
                k &&
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      Mo,
                      { fontWeight: 500, color: 'black' },
                      i.a.createElement('span', { role: 'img', 'aria-label': 'party-hat' }, '\ud83c\udf89', ' '),
                      'Welcome to team Unicorn :)',
                      ' ',
                      i.a.createElement('span', { role: 'img', 'aria-label': 'party-hat' }, '\ud83c\udf89')
                    )
                  ),
                b && !O && i.a.createElement(Mo, { color: 'black' }, 'Confirm this transaction in your wallet'),
                b &&
                  O &&
                  !k &&
                  c &&
                  O &&
                  i.a.createElement(
                    mo,
                    { href: ra(c, O, 'transaction'), style: { zIndex: 99 } },
                    'View transaction on scan.kbcfoundation.com'
                  )
              )
            )
        )
      }
      var uc,
        lc = n(133),
        sc = n.n(lc),
        dc = n(342),
        mc = new xa.Interface(ba.a),
        pc = (new xa.Interface(dc.a), n(107))
      function fc() {
        var e = Object(Ye.g)().search
        return Object(o.useMemo)(
          function() {
            return e && e.length > 1 ? Object(pc.parse)(e, { parseArrays: !1, ignoreQueryPrefix: !0 }) : {}
          },
          [e]
        )
      }
      !(function(e) {
        ;(e.v1 = 'v1'), (e.v2 = 'v2')
      })(uc || (uc = {}))
      var bc = uc.v2
      function vc() {
        var e = fc().use
        return e && 'string' === typeof e ? ('v1' === e.toLowerCase() ? uc.v1 : bc) : uc.v2
      }
      var hc = n(217)
      function gc(e) {
        var t, n
        return null ===
          (t = Kn(
            Wa(),
            'getExchange',
            Object(o.useMemo)(
              function() {
                return [e]
              },
              [e]
            )
          )) ||
          void 0 === t ||
          null === (n = t.result) ||
          void 0 === n
          ? void 0
          : n[0]
      }
      var yc = (function(e) {
        Object(C.a)(n, e)
        var t = Object(I.a)(n)
        function n(e, a) {
          return Object(k.a)(this, n), t.call(this, a, new v.m(v.p[a.token.chainId], e))
        }
        return n
      })(v.g)
      function Ec(e) {
        var t = e instanceof v.l ? e : void 0,
          n = gc(Boolean(t && t.equals(v.p[t.chainId])) || null === t || void 0 === t ? void 0 : t.address),
          a = uu(n, t),
          r = ou([n])[null !== n && void 0 !== n ? n : '']
        return Object(o.useMemo)(
          function() {
            return t && a && r && e ? new yc(r.raw, a) : void 0
          },
          [r, e, t, a]
        )
      }
      function xc() {
        var e = Ka(),
          t = Wa(),
          n = Object(o.useMemo)(
            function() {
              return Object.keys(e).map(function(e) {
                return [e]
              })
            },
            [e]
          ),
          a = Jn(t, 'getExchange', n, Vn)
        return Object(o.useMemo)(
          function() {
            var t
            return null !==
              (t =
                null === a || void 0 === a
                  ? void 0
                  : a.reduce(function(t, a, r) {
                      var o = a.result
                      return (null === o || void 0 === o ? void 0 : o[0]) && o[0] !== $n.a && (t[o[0]] = e[n[r][0]]), t
                    }, {})) && void 0 !== t
              ? t
              : {}
          },
          [e, n, a]
        )
      }
      function Oc(e) {
        var t,
          n,
          a =
            null === e ||
            void 0 === e ||
            null === (t = e.route) ||
            void 0 === t ||
            null === (n = t.pairs) ||
            void 0 === n
              ? void 0
              : n.some(function(e) {
                  return e instanceof yc
                })
        return a ? uc.v1 : !1 === a ? uc.v2 : void 0
      }
      function jc(e) {
        return gc(
          Object(o.useMemo)(
            function() {
              if (e && Oc(e) === uc.v1)
                return e.inputAmount instanceof v.m
                  ? e.inputAmount.token.address
                  : e.outputAmount instanceof v.m
                  ? e.outputAmount.token.address
                  : void 0
            },
            [e]
          )
        )
      }
      function Ac(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Re
        if (e && !t) return !1
        if (t && !e) return !0
        if (e && t) {
          if (
            e.tradeType !== t.tradeType ||
            !Object(v.q)(e.inputAmount.currency, t.inputAmount.currency) ||
            !Object(v.q)(t.outputAmount.currency, t.outputAmount.currency)
          )
            throw new Error('Trades are not comparable')
          return n.equalTo(Re)
            ? e.executionPrice.lessThan(t.executionPrice)
            : e.executionPrice.raw.multiply(n.add(Ue)).lessThan(t.executionPrice)
        }
      }
      function wc(e, t) {
        return t && e === v.d ? v.p[t] : e instanceof v.l ? e : void 0
      }
      function kc(e, t) {
        var n = e && t ? wc(e.currency, t) : void 0
        return n && e ? new v.m(n, e.raw) : void 0
      }
      function Tc(e) {
        return e.equals(v.p[e.chainId]) ? v.d : e
      }
      var Cc,
        Ic = new xa.Interface(ha.a)
      function Sc(e) {
        var t = Le().chainId,
          n = Object(o.useMemo)(
            function() {
              return e.map(function(e) {
                var n = Object(A.a)(e, 2),
                  a = n[0],
                  r = n[1]
                return [wc(a, t), wc(r, t)]
              })
            },
            [t, e]
          ),
          a = Gn(
            Object(o.useMemo)(
              function() {
                return n.map(function(e) {
                  var t = Object(A.a)(e, 2),
                    n = t[0],
                    a = t[1]
                  return n && a && !n.equals(a) ? v.g.getAddress(n, a) : void 0
                })
              },
              [n]
            ),
            Ic,
            'getReserves'
          )
        return Object(o.useMemo)(
          function() {
            return a.map(function(e, t) {
              var a = e.result,
                r = e.loading,
                o = n[t][0],
                i = n[t][1]
              if (r) return [Cc.LOADING, null]
              if (!o || !i || o.equals(i)) return [Cc.INVALID, null]
              if (!a) return [Cc.NOT_EXISTS, null]
              var c = a.reserve0,
                u = a.reserve1,
                l = o.sortsBefore(i) ? [o, i] : [i, o],
                s = Object(A.a)(l, 2),
                d = s[0],
                m = s[1]
              return [Cc.EXISTS, new v.g(new v.m(d, c.toString()), new v.m(m, u.toString()))]
            })
          },
          [a, n]
        )
      }
      function Nc(e, t) {
        return Sc([[e, t]])[0]
      }
      function Rc(e, t) {
        var n = Le().chainId,
          a = n ? be[n] : [],
          r = n ? [wc(e, n), wc(t, n)] : [void 0, void 0],
          i = Object(A.a)(r, 2),
          c = i[0],
          u = i[1],
          l = Object(o.useMemo)(
            function() {
              return Gt()(a, function(e) {
                return a.map(function(t) {
                  return [e, t]
                })
              }).filter(function(e) {
                var t = Object(A.a)(e, 2),
                  n = t[0],
                  a = t[1]
                return n.address !== a.address
              })
            },
            [a]
          ),
          s = Sc(
            Object(o.useMemo)(
              function() {
                return c && u
                  ? [[c, u]]
                      .concat(
                        Object(p.a)(
                          a.map(function(e) {
                            return [c, e]
                          })
                        ),
                        Object(p.a)(
                          a.map(function(e) {
                            return [u, e]
                          })
                        ),
                        Object(p.a)(l)
                      )
                      .filter(function(e) {
                        return Boolean(e[0] && e[1])
                      })
                      .filter(function(e) {
                        var t = Object(A.a)(e, 2),
                          n = t[0],
                          a = t[1]
                        return n.address !== a.address
                      })
                      .filter(function(e) {
                        var t = Object(A.a)(e, 2),
                          a = t[0],
                          r = t[1]
                        if (!n) return !0
                        var o = ve[n]
                        if (!o) return !0
                        var i = o[a.address],
                          c = o[r.address]
                        return (
                          (!i && !c) ||
                          (!(
                            i &&
                            !i.find(function(e) {
                              return r.equals(e)
                            })
                          ) &&
                            !(
                              c &&
                              !c.find(function(e) {
                                return a.equals(e)
                              })
                            ))
                        )
                      })
                  : []
              },
              [c, u, a, l, n]
            )
          )
        return Object(o.useMemo)(
          function() {
            return Object.values(
              s
                .filter(function(e) {
                  return Boolean(e[0] === Cc.EXISTS && e[1])
                })
                .reduce(function(e, t) {
                  var n,
                    a = Object(A.a)(t, 2)[1]
                  return (
                    (e[a.liquidityToken.address] = null !== (n = e[a.liquidityToken.address]) && void 0 !== n ? n : a),
                    e
                  )
                }, {})
            )
          },
          [s]
        )
      }
      !(function(e) {
        ;(e[(e.LOADING = 0)] = 'LOADING'),
          (e[(e.NOT_EXISTS = 1)] = 'NOT_EXISTS'),
          (e[(e.EXISTS = 2)] = 'EXISTS'),
          (e[(e.INVALID = 3)] = 'INVALID')
      })(Cc || (Cc = {}))
      var Uc
      function Bc(e, t) {
        var n = _a(),
          a = Le().chainId,
          r = wc(e, a),
          o = wc(t, a)
        if (n) {
          if (r && Object.keys(n).includes(r.address)) return !0
          if (o && Object.keys(n).includes(o.address)) return !0
        }
        return !1
      }
      !(function(e) {
        ;(e.INPUT = 'INPUT'), (e.OUTPUT = 'OUTPUT')
      })(Uc || (Uc = {}))
      var Lc = Object(hn.b)('swap/selectCurrency'),
        Wc = Object(hn.b)('swap/switchCurrencies'),
        zc = Object(hn.b)('swap/typeInput'),
        Mc = Object(hn.b)('swap/replaceSwapState'),
        Pc = Object(hn.b)('swap/setRecipient'),
        Dc = new v.h(v.f.BigInt(30), v.f.BigInt(1e4)),
        Fc = new v.h(v.f.BigInt(1e4), v.f.BigInt(1e4)),
        qc = Fc.subtract(Dc)
      function Vc(e) {
        var t = e
            ? Fc.subtract(
                e.route.pairs.reduce(function(e) {
                  return e.multiply(qc)
                }, Fc)
              )
            : void 0,
          n = e && t ? e.priceImpact.subtract(t) : void 0
        return {
          priceImpactWithoutFee: n
            ? new v.h(
                null === n || void 0 === n ? void 0 : n.numerator,
                null === n || void 0 === n ? void 0 : n.denominator
              )
            : void 0,
          realizedLPFee:
            t &&
            e &&
            (e.inputAmount instanceof v.m
              ? new v.m(e.inputAmount.token, t.multiply(e.inputAmount.raw).quotient)
              : v.c.ether(t.multiply(e.inputAmount.raw).quotient))
        }
      }
      function Yc(e, t) {
        var n,
          a,
          r = ((a = t), new v.h(v.f.BigInt(a), v.f.BigInt(1e4)))
        return (
          (n = {}),
          Object(b.a)(n, Uc.INPUT, null === e || void 0 === e ? void 0 : e.maximumAmountIn(r)),
          Object(b.a)(n, Uc.OUTPUT, null === e || void 0 === e ? void 0 : e.minimumAmountOut(r)),
          n
        )
      }
      function Hc(e) {
        return (null === e || void 0 === e
        ? void 0
        : e.lessThan(Ie))
          ? (null === e || void 0 === e
            ? void 0
            : e.lessThan(Te))
            ? (null === e || void 0 === e
              ? void 0
              : e.lessThan(ke))
              ? (null === e || void 0 === e
                ? void 0
                : e.lessThan(we))
                ? 0
                : 1
              : 2
            : 3
          : 4
      }
      function Qc() {
        return Object(d.d)(function(e) {
          return e.swap
        })
      }
      function Xc(e, t) {
        if (e && t)
          try {
            var n = Object(hc.parseUnits)(e, t.decimals).toString()
            if ('0' !== n) return t instanceof v.l ? new v.m(t, v.f.BigInt(n)) : v.c.ether(v.f.BigInt(n))
          } catch (a) {
            console.debug('Failed to parse input amount: "'.concat(e, '"'), a)
          }
      }
      var Jc = [
        '0x01BebEAa5277448FA510629A0eC2eb0F99793718',
        '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
        '0xc59741f368CD80e518e7446164352dEC670D45bb'
      ]
      function Gc(e, t) {
        return (
          e.route.path.some(function(e) {
            return e.address === t
          }) ||
          e.route.pairs.some(function(e) {
            return e.liquidityToken.address === t
          })
        )
      }
      function Kc() {
        var e,
          t,
          n,
          a,
          r,
          i,
          c,
          u = Le().account,
          l = vc(),
          s = Qc(),
          d = s.independentField,
          m = s.typedValue,
          p = s[Uc.INPUT].currencyId,
          f = s[Uc.OUTPUT].currencyId,
          h = s.recipient,
          g = ar(p),
          y = ar(f),
          E = Mi(null !== h && void 0 !== h ? h : void 0),
          x = null !== (e = null === h ? u : E.address) && void 0 !== e ? e : null,
          O = lu(null !== u && void 0 !== u ? u : void 0, [
            null !== g && void 0 !== g ? g : void 0,
            null !== y && void 0 !== y ? y : void 0
          ]),
          j = d === Uc.INPUT,
          w = Xc(m, null !== (t = j ? g : y) && void 0 !== t ? t : void 0),
          k = (function(e, t) {
            var n = Rc(null === e || void 0 === e ? void 0 : e.currency, t),
              a = Er(),
              r = Object(A.a)(a, 1)[0]
            return Object(o.useMemo)(
              function() {
                if (e && t && n.length > 0) {
                  var a
                  if (r)
                    return null !== (a = v.n.bestTradeExactIn(n, e, t, { maxHops: 1, maxNumResults: 1 })[0]) &&
                      void 0 !== a
                      ? a
                      : null
                  for (var o = null, i = 1; i <= 3; i++) {
                    var c,
                      u =
                        null !== (c = v.n.bestTradeExactIn(n, e, t, { maxHops: i, maxNumResults: 1 })[0]) &&
                        void 0 !== c
                          ? c
                          : null
                    Ac(o, u, Ne) && (o = u)
                  }
                  return o
                }
                return null
              },
              [n, e, t, r]
            )
          })(j ? w : void 0, null !== y && void 0 !== y ? y : void 0),
          T = (function(e, t) {
            var n = Rc(e, null === t || void 0 === t ? void 0 : t.currency),
              a = Er(),
              r = Object(A.a)(a, 1)[0]
            return Object(o.useMemo)(
              function() {
                if (e && t && n.length > 0) {
                  var a
                  if (r)
                    return null !== (a = v.n.bestTradeExactOut(n, e, t, { maxHops: 1, maxNumResults: 1 })[0]) &&
                      void 0 !== a
                      ? a
                      : null
                  for (var o = null, i = 1; i <= 3; i++) {
                    var c,
                      u =
                        null !== (c = v.n.bestTradeExactOut(n, e, t, { maxHops: i, maxNumResults: 1 })[0]) &&
                        void 0 !== c
                          ? c
                          : null
                    Ac(o, u, Ne) && (o = u)
                  }
                  return o
                }
                return null
              },
              [e, t, n, r]
            )
          })(null !== g && void 0 !== g ? g : void 0, j ? void 0 : w),
          C = j ? k : T,
          I = ((n = {}), Object(b.a)(n, Uc.INPUT, O[0]), Object(b.a)(n, Uc.OUTPUT, O[1]), n),
          S =
            ((a = {}),
            Object(b.a)(a, Uc.INPUT, null !== g && void 0 !== g ? g : void 0),
            Object(b.a)(a, Uc.OUTPUT, null !== y && void 0 !== y ? y : void 0),
            a),
          N = (function(e, t, n, a) {
            var r = Ec(t),
              o = Ec(n),
              i = t === v.d,
              c = n === v.d,
              u = []
            i && o ? (u = [o]) : c && r ? (u = [r]) : r && o && (u = [r, o])
            var l,
              s = t && u && u.length > 0 && new v.j(u, t, n)
            try {
              l = s && a ? new v.n(s, a, e ? v.o.EXACT_INPUT : v.o.EXACT_OUTPUT) : void 0
            } catch (d) {
              console.debug('Failed to create V1 trade', d)
            }
            return l
          })(j, S[Uc.INPUT], S[Uc.OUTPUT], w)
        ;(u || (r = 'Connect Wallet'), w) || (r = null !== (i = r) && void 0 !== i ? i : 'Enter an amount')
        ;(S[Uc.INPUT] && S[Uc.OUTPUT]) || (r = null !== (c = r) && void 0 !== c ? c : 'Select a token')
        var R,
          U,
          B = na(x)
        x && B
          ? (-1 !== Jc.indexOf(B) || (k && Gc(k, B)) || (T && Gc(T, B))) &&
            (r = null !== (R = r) && void 0 !== R ? R : 'Invalid recipient')
          : (r = null !== (U = r) && void 0 !== U ? U : 'Enter a recipient')
        var L = xr(),
          W = Object(A.a)(L, 1)[0],
          z = C && W && Yc(C, W),
          M = N && W && Yc(N, W),
          P = [I[Uc.INPUT], l === uc.v1 ? (M ? M[Uc.INPUT] : null) : z ? z[Uc.INPUT] : null],
          D = P[0],
          F = P[1]
        return (
          D && F && D.lessThan(F) && (r = 'Insufficient ' + F.currency.symbol + ' balance'),
          {
            currencies: S,
            currencyBalances: I,
            parsedAmount: w,
            v2Trade: null !== C && void 0 !== C ? C : void 0,
            inputError: r,
            v1Trade: N
          }
        )
      }
      function Zc(e) {
        if ('string' === typeof e) {
          var t = na(e)
          if (t) return t
          if ('ETH' === e.toUpperCase()) return 'ETH'
          if (!1 === t) return 'ETH'
        }
        return null !== 'ETH' ? 'ETH' : ''
      }
      var _c = /^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/,
        $c = /^0x[a-fA-F0-9]{40}$/
      function eu(e) {
        var t,
          n = Zc(e.inputCurrency),
          a = Zc(e.outputCurrency)
        n === a && ('string' === typeof e.outputCurrency ? (n = '') : (a = ''))
        var r,
          o = (function(e) {
            if ('string' !== typeof e) return null
            var t = na(e)
            return t || (_c.test(e) || $c.test(e) ? e : null)
          })(e.recipient)
        return (
          (t = {}),
          Object(b.a)(t, Uc.INPUT, { currencyId: n }),
          Object(b.a)(t, Uc.OUTPUT, { currencyId: a }),
          Object(b.a)(t, 'typedValue', 'string' !== typeof (r = e.exactAmount) || isNaN(parseFloat(r)) ? '' : r),
          Object(b.a)(
            t,
            'independentField',
            (function(e) {
              return 'string' === typeof e && 'output' === e.toLowerCase() ? Uc.OUTPUT : Uc.INPUT
            })(e.exactField)
          ),
          Object(b.a)(t, 'recipient', o),
          t
        )
      }
      function tu() {
        var e, t
        return null === (e = Kn(qa(), 'getCurrentBlockTimestamp')) ||
          void 0 === e ||
          null === (t = e.result) ||
          void 0 === t
          ? void 0
          : t[0]
      }
      var nu = Object(b.a)({}, v.a.MAINNET, [
        { tokens: [v.p[v.a.MAINNET], ae], stakingRewardAddress: '0xa1484C3aa22a66C62b77E0AE78E15258bd0cB711' },
        { tokens: [v.p[v.a.MAINNET], re], stakingRewardAddress: '0x7FBa4B8Dc5E7616e59622806932DBea72537A56b' },
        { tokens: [v.p[v.a.MAINNET], oe], stakingRewardAddress: '0x6C3e4cb2E96B01F4b866965A91ed4437839A121a' },
        { tokens: [v.p[v.a.MAINNET], le], stakingRewardAddress: '0xCA35e32e7926b96A9988f61d510E038108d8068e' }
      ])
      function au(e) {
        var t = Le(),
          n = t.chainId,
          a = t.account,
          r = tu(),
          i = Object(o.useMemo)(
            function() {
              var t, a
              return n &&
                null !==
                  (t =
                    null === (a = nu[n]) || void 0 === a
                      ? void 0
                      : a.filter(function(t) {
                          return (
                            void 0 === e || (null !== e && e.involvesToken(t.tokens[0]) && e.involvesToken(t.tokens[1]))
                          )
                        })) &&
                void 0 !== t
                ? t
                : []
            },
            [n, e]
          ),
          c = n ? de[n] : void 0,
          u = Object(o.useMemo)(
            function() {
              return i.map(function(e) {
                return e.stakingRewardAddress
              })
            },
            [i]
          ),
          l = Object(o.useMemo)(
            function() {
              return [null !== a && void 0 !== a ? a : void 0]
            },
            [a]
          ),
          s = Gn(u, mc, 'balanceOf', l),
          d = Gn(u, mc, 'earned', l),
          m = Gn(u, mc, 'totalSupply'),
          p = Gn(u, mc, 'rewardRate', void 0, Vn),
          f = Gn(u, mc, 'periodFinish', void 0, Vn)
        return Object(o.useMemo)(
          function() {
            return n && c
              ? u.reduce(function(e, t, n) {
                  var a = s[n],
                    o = d[n],
                    u = m[n],
                    l = p[n],
                    b = f[n]
                  if (
                    !(null === a || void 0 === a ? void 0 : a.loading) &&
                    !(null === o || void 0 === o ? void 0 : o.loading) &&
                    u &&
                    !u.loading &&
                    l &&
                    !l.loading &&
                    b &&
                    !b.loading
                  ) {
                    var h, g, y, E, x, O, j, A
                    if (
                      (null === a || void 0 === a ? void 0 : a.error) ||
                      (null === o || void 0 === o ? void 0 : o.error) ||
                      u.error ||
                      l.error ||
                      b.error
                    )
                      return console.error('Failed to load staking rewards info'), e
                    var w = i[n].tokens,
                      k = new v.g(new v.m(w[0], '0'), new v.m(w[1], '0')),
                      T = new v.m(
                        k.liquidityToken,
                        v.f.BigInt(
                          null !==
                            (h =
                              null === a || void 0 === a || null === (g = a.result) || void 0 === g ? void 0 : g[0]) &&
                            void 0 !== h
                            ? h
                            : 0
                        )
                      ),
                      C = new v.m(
                        k.liquidityToken,
                        v.f.BigInt(null === (y = u.result) || void 0 === y ? void 0 : y[0])
                      ),
                      I = new v.m(c, v.f.BigInt(null === (E = l.result) || void 0 === E ? void 0 : E[0])),
                      S = function(e, t, n) {
                        return new v.m(
                          c,
                          v.f.greaterThan(t.raw, v.f.BigInt(0))
                            ? v.f.divide(v.f.multiply(n.raw, e.raw), t.raw)
                            : v.f.BigInt(0)
                        )
                      },
                      N = S(T, C, I),
                      R =
                        null === (x = b.result) || void 0 === x || null === (O = x[0]) || void 0 === O
                          ? void 0
                          : O.toNumber(),
                      U = 1e3 * R,
                      B = !R || !r || R > r.toNumber()
                    e.push({
                      stakingRewardAddress: t,
                      tokens: i[n].tokens,
                      periodFinish: U > 0 ? new Date(U) : void 0,
                      earnedAmount: new v.m(
                        c,
                        v.f.BigInt(
                          null !==
                            (j =
                              null === o || void 0 === o || null === (A = o.result) || void 0 === A ? void 0 : A[0]) &&
                            void 0 !== j
                            ? j
                            : 0
                        )
                      ),
                      rewardRate: N,
                      totalRewardRate: I,
                      stakedAmount: T,
                      totalStakedAmount: C,
                      getHypotheticalRewardRate: S,
                      active: B
                    })
                  }
                  return e
                }, [])
              : []
          },
          [s, n, r, d, i, f, p, u, m, c]
        )
      }
      function ru() {
        var e = Le().chainId,
          t = e ? de[e] : void 0,
          n = au()
        return Object(o.useMemo)(
          function() {
            var e
            if (t)
              return null !==
                (e =
                  null === n || void 0 === n
                    ? void 0
                    : n.reduce(function(e, t) {
                        return e.add(t.earnedAmount)
                      }, new v.m(t, '0'))) && void 0 !== e
                ? e
                : new v.m(t, '0')
          },
          [n, t]
        )
      }
      function ou(e) {
        var t = qa(),
          n = Object(o.useMemo)(
            function() {
              return e
                ? e
                    .map(na)
                    .filter(function(e) {
                      return !1 !== e
                    })
                    .sort()
                : []
            },
            [e]
          ),
          a = Jn(
            t,
            'getEthBalance',
            n.map(function(e) {
              return [e]
            })
          )
        return Object(o.useMemo)(
          function() {
            return n.reduce(function(e, t, n) {
              var r,
                o,
                i =
                  null === a ||
                  void 0 === a ||
                  null === (r = a[n]) ||
                  void 0 === r ||
                  null === (o = r.result) ||
                  void 0 === o
                    ? void 0
                    : o[0]
              return i && (e[t] = v.c.ether(v.f.BigInt(i.toString()))), e
            }, {})
          },
          [n, a]
        )
      }
      function iu(e, t) {
        var n = Object(o.useMemo)(
            function() {
              var e
              return null !==
                (e =
                  null === t || void 0 === t
                    ? void 0
                    : t.filter(function(e) {
                        return !1 !== na(null === e || void 0 === e ? void 0 : e.address)
                      })) && void 0 !== e
                ? e
                : []
            },
            [t]
          ),
          a = Gn(
            Object(o.useMemo)(
              function() {
                return n.map(function(e) {
                  return e.address
                })
              },
              [n]
            ),
            wa,
            'balanceOf',
            [e]
          ),
          r = Object(o.useMemo)(
            function() {
              return a.some(function(e) {
                return e.loading
              })
            },
            [a]
          )
        return [
          Object(o.useMemo)(
            function() {
              return e && n.length > 0
                ? n.reduce(function(e, t, n) {
                    var r,
                      o,
                      i =
                        null === a ||
                        void 0 === a ||
                        null === (r = a[n]) ||
                        void 0 === r ||
                        null === (o = r.result) ||
                        void 0 === o
                          ? void 0
                          : o[0],
                      c = i ? v.f.BigInt(i.toString()) : void 0
                    return c && (e[t.address] = new v.m(t, c)), e
                  }, {})
                : {}
            },
            [e, n, a]
          ),
          r
        ]
      }
      function cu(e, t) {
        return iu(e, t)[0]
      }
      function uu(e, t) {
        var n = cu(e, [t])
        if (t) return n[t.address]
      }
      function lu(e, t) {
        var n = Object(o.useMemo)(
            function() {
              var e
              return null !==
                (e =
                  null === t || void 0 === t
                    ? void 0
                    : t.filter(function(e) {
                        return e instanceof v.l
                      })) && void 0 !== e
                ? e
                : []
            },
            [t]
          ),
          a = cu(e, n),
          r = ou(
            Object(o.useMemo)(
              function() {
                var e
                return (
                  null !==
                    (e =
                      null === t || void 0 === t
                        ? void 0
                        : t.some(function(e) {
                            return e === v.d
                          })) &&
                  void 0 !== e &&
                  e
                )
              },
              [t]
            )
              ? [e]
              : []
          )
        return Object(o.useMemo)(
          function() {
            var n
            return null !==
              (n =
                null === t || void 0 === t
                  ? void 0
                  : t.map(function(t) {
                      if (e && t) return t instanceof v.l ? a[t.address] : t === v.d ? r[e] : void 0
                    })) && void 0 !== n
              ? n
              : []
          },
          [e, t, r, a]
        )
      }
      function su(e, t) {
        return lu(e, [t])[0]
      }
      function du() {
        var e,
          t,
          n,
          a = Le(),
          r = a.account,
          o = a.chainId,
          i = o ? de[o] : void 0,
          c = uu(null !== r && void 0 !== r ? r : void 0, i),
          u = Ci(r),
          l = ru()
        if (i)
          return new v.m(
            i,
            v.f.add(
              v.f.add(
                null !== (e = null === c || void 0 === c ? void 0 : c.raw) && void 0 !== e ? e : v.f.BigInt(0),
                null !== (t = null === u || void 0 === u ? void 0 : u.raw) && void 0 !== t ? t : v.f.BigInt(0)
              ),
              null !== (n = null === l || void 0 === l ? void 0 : l.raw) && void 0 !== n ? n : v.f.BigInt(0)
            )
          )
      }
      function mu() {
        var e = Object(Ve.a)([
          '\n  background-color: ',
          ';\n  color: ',
          ';\n  border-radius: 12px;\n  width: fit-content;\n'
        ])
        return (
          (mu = function() {
            return e
          }),
          e
        )
      }
      function pu() {
        var e = Object(Ve.a)(['\n  background-color: rgba(255, 0, 122, 0.03);\n  color: ', ';\n  font-weight: 500;\n'])
        return (
          (pu = function() {
            return e
          }),
          e
        )
      }
      function fu() {
        var e = Object(Ve.a)(['\n  background-color: rgba(243, 132, 30, 0.05);\n  color: ', ';\n  font-weight: 500;\n'])
        return (
          (fu = function() {
            return e
          }),
          e
        )
      }
      function bu() {
        var e = Object(Ve.a)(['\n  border: 1px solid ', ';\n'])
        return (
          (bu = function() {
            return e
          }),
          e
        )
      }
      function vu() {
        var e = Object(Ve.a)(['\n  background-color: ', ';\n'])
        return (
          (vu = function() {
            return e
          }),
          e
        )
      }
      function hu() {
        var e = Object(Ve.a)(['\n  border: 1px solid ', ';\n  background-color: ', ';\n'])
        return (
          (hu = function() {
            return e
          }),
          e
        )
      }
      function gu() {
        var e = Object(Ve.a)([
          '\n  width: ',
          ';\n  border-radius: 16px;\n  padding: 1.25rem;\n  padding: ',
          ';\n  border: ',
          ';\n  border-radius: ',
          ';\n'
        ])
        return (
          (gu = function() {
            return e
          }),
          e
        )
      }
      var yu = Object(He.default)(Wt.Box)(
          gu(),
          function(e) {
            var t = e.width
            return null !== t && void 0 !== t ? t : '100%'
          },
          function(e) {
            return e.padding
          },
          function(e) {
            return e.border
          },
          function(e) {
            return e.borderRadius
          }
        ),
        Eu = yu,
        xu = Object(He.default)(yu)(
          hu(),
          function(e) {
            return e.theme.bg2
          },
          function(e) {
            return e.theme.bg1
          }
        ),
        Ou = Object(He.default)(yu)(vu(), function(e) {
          return e.theme.bg3
        }),
        ju = Object(He.default)(yu)(bu(), function(e) {
          return e.theme.bg3
        }),
        Au = Object(He.default)(yu)(fu(), function(e) {
          return e.theme.yellow2
        }),
        wu = Object(He.default)(yu)(pu(), function(e) {
          return e.theme.primary1
        }),
        ku = Object(He.default)(yu)(
          mu(),
          function(e) {
            return e.theme.primary5
          },
          function(e) {
            return e.theme.primary1
          }
        ),
        Tu = function(e) {
          var t = e.children,
            n = Object(Xe.a)(e, ['children'])
          return i.a.createElement(ku, n, i.a.createElement(Tr.b, { fontWeight: 500, color: '#2172E5' }, t))
        },
        Cu = n(764),
        Iu = n(765),
        Su = n(756),
        Nu = n(757),
        Ru = n(758)
      function Uu() {
        return (Uu =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
          }).apply(this, arguments)
      }
      function Bu(e, t) {
        if (null == e) return {}
        var n,
          a,
          r = (function(e, t) {
            if (null == e) return {}
            var n,
              a,
              r = {},
              o = Object.keys(e)
            for (a = 0; a < o.length; a++) (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n])
            return r
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          for (a = 0; a < o.length; a++)
            (n = o[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]))
        }
        return r
      }
      var Lu = i.a.createElement('path', {
          d:
            'M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z',
          stroke: 'black',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round'
        }),
        Wu = i.a.createElement('path', {
          d:
            'M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z',
          stroke: 'black',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round'
        }),
        zu = i.a.createElement('path', {
          d:
            'M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z',
          stroke: 'black',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round'
        }),
        Mu = function(e) {
          var t = e.svgRef,
            n = e.title,
            a = Bu(e, ['svgRef', 'title'])
          return i.a.createElement(
            'svg',
            Uu({ width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', ref: t }, a),
            n ? i.a.createElement('title', null, n) : null,
            Lu,
            Wu,
            zu
          )
        },
        Pu = i.a.forwardRef(function(e, t) {
          return i.a.createElement(Mu, Uu({ svgRef: t }, e))
        })
      n.p
      function Du(e, t) {
        var n = Object(o.useRef)(t)
        Object(o.useEffect)(
          function() {
            n.current = t
          },
          [t]
        ),
          Object(o.useEffect)(
            function() {
              var t = function(t) {
                var a, r
                ;(null !== (a = null === (r = e.current) || void 0 === r ? void 0 : r.contains(t.target)) &&
                  void 0 !== a &&
                  a) ||
                  (n.current && n.current())
              }
              return (
                document.addEventListener('mousedown', t),
                function() {
                  document.removeEventListener('mousedown', t)
                }
              )
            },
            [e]
          )
      }
      function Fu() {
        var e = Object(Ve.a)([
          '\n  flex: 1;\n  padding: 0.5rem 0.5rem;\n  color: ',
          ';\n  :hover {\n    color: ',
          ';\n    cursor: pointer;\n    text-decoration: none;\n  }\n  > svg {\n    margin-right: 8px;\n  }\n'
        ])
        return (
          (Fu = function() {
            return e
          }),
          e
        )
      }
      function qu() {
        var e = Object(Ve.a)(['\n    top: -17.25rem;\n  '])
        return (
          (qu = function() {
            return e
          }),
          e
        )
      }
      function Vu() {
        var e = Object(Ve.a)([
          '\n  min-width: 8.125rem;\n  background-color: ',
          ';\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  border-radius: 12px;\n  padding: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  font-size: 1rem;\n  position: absolute;\n  top: 4rem;\n  right: 0rem;\n  z-index: 100;\n\n  ',
          ';\n'
        ])
        return (
          (Vu = function() {
            return e
          }),
          e
        )
      }
      function Yu() {
        var e = Object(Ve.a)([
          '\n  margin-left: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n  text-align: left;\n'
        ])
        return (
          (Yu = function() {
            return e
          }),
          e
        )
      }
      function Hu() {
        var e = Object(Ve.a)([
          '\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  margin: 0;\n  padding: 0;\n  height: 35px;\n  background-color: ',
          ';\n\n  padding: 0.15rem 0.5rem;\n  border-radius: 0.5rem;\n\n  :hover,\n  :focus {\n    cursor: pointer;\n    outline: none;\n    background-color: ',
          ';\n  }\n\n  svg {\n    margin-top: 2px;\n  }\n'
        ])
        return (
          (Hu = function() {
            return e
          }),
          e
        )
      }
      function Qu() {
        var e = Object(Ve.a)(['\n  path {\n    stroke: ', ';\n  }\n'])
        return (
          (Qu = function() {
            return e
          }),
          e
        )
      }
      var Xu = Object(He.default)(Pu)(Qu(), function(e) {
          return e.theme.text1
        }),
        Ju = He.default.button(
          Hu(),
          function(e) {
            return e.theme.bg3
          },
          function(e) {
            return e.theme.bg4
          }
        ),
        Gu = He.default.div(Yu()),
        Ku = He.default.span(
          Vu(),
          function(e) {
            return e.theme.bg3
          },
          function(e) {
            return e.theme.mediaWidth.upToMedium(qu())
          }
        ),
        Zu = Object(He.default)(mo)(
          Fu(),
          function(e) {
            return e.theme.text2
          },
          function(e) {
            return e.theme.text1
          }
        )
      function _u() {
        var e = Object(o.useRef)(),
          t = jn(bn.MENU),
          n = An(bn.MENU)
        return (
          Du(e, t ? n : void 0),
          i.a.createElement(
            Gu,
            { ref: e },
            i.a.createElement(Ju, { onClick: n }, i.a.createElement(Xu, null)),
            t &&
              i.a.createElement(
                Ku,
                null,
                i.a.createElement(
                  Zu,
                  { id: 'link', href: 'https://nurascan.app/' },
                  i.a.createElement(Su.a, { size: 14 }),
                  'About'
                ),
                i.a.createElement(
                  Zu,
                  { id: 'link', href: 'https://nurascan.app/' },
                  i.a.createElement(Nu.a, { size: 14 }),
                  'Docs'
                ),
                i.a.createElement(
                  Zu,
                  { id: 'link', href: 'https://nurascan.app/' },
                  i.a.createElement(Ru.a, { size: 14 }),
                  'Discord'
                )
              )
          )
        )
      }
      var $u = n(762),
        el = n(134),
        tl = n.n(el),
        nl = n(135),
        al = n.n(nl),
        rl = n(136),
        ol = n.n(rl),
        il = n(137),
        cl = n.n(il)
      function ul() {
        var e = Le().account,
          t = Kn(
            La(Le().chainId === v.a.MAINNET ? '0x65770b5283117639760beA3F867b69b3697a91dd' : void 0, Ca, !1),
            'balanceOf',
            [null !== e && void 0 !== e ? e : void 0],
            Vn
          ).result,
          n = null === t || void 0 === t ? void 0 : t[0]
        return n ? v.f.BigInt(n.toString()) : void 0
      }
      var ll = n(343),
        sl = n.n(ll)
      function dl() {
        var e = Object(Ve.a)([
          '\n  height: 1rem;\n  width: 1rem;\n  border-radius: 1.125rem;\n  background-color: ',
          ';\n'
        ])
        return (
          (dl = function() {
            return e
          }),
          e
        )
      }
      var ml = He.default.div(dl(), function(e) {
        return e.theme.bg4
      })
      function pl() {
        var e = Object(o.useRef)(),
          t = Le().account
        return (
          Object(o.useEffect)(
            function() {
              t &&
                e.current &&
                ((e.current.innerHTML = ''), e.current.appendChild(sl()(16, parseInt(t.slice(2, 10), 16))))
            },
            [t]
          ),
          i.a.createElement(ml, { ref: e })
        )
      }
      function fl() {
        var e = Object(Ve.a)([
          '\n  animation: 2s ',
          ' linear infinite;\n  height: ',
          ';\n  width: ',
          ';\n  path {\n    stroke: ',
          ';\n  }\n'
        ])
        return (
          (fl = function() {
            return e
          }),
          e
        )
      }
      function bl() {
        var e = Object(Ve.a)([
          '\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n'
        ])
        return (
          (bl = function() {
            return e
          }),
          e
        )
      }
      var vl = Object(He.keyframes)(bl()),
        hl = He.default.svg(
          fl(),
          vl,
          function(e) {
            return e.size
          },
          function(e) {
            return e.size
          },
          function(e) {
            var t = e.stroke,
              n = e.theme
            return null !== t && void 0 !== t ? t : n.primary1
          }
        )
      function gl(e) {
        var t = e.size,
          n = void 0 === t ? '16px' : t,
          a = e.stroke,
          r = Object(Xe.a)(e, ['size', 'stroke'])
        return i.a.createElement(
          hl,
          Object.assign(
            { viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', size: n, stroke: a },
            r
          ),
          i.a.createElement('path', {
            d:
              'M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5',
            strokeWidth: '2.5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round'
          })
        )
      }
      var yl = n(215),
        El = n.n(yl)
      function xl() {
        return (xl =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
          }).apply(this, arguments)
      }
      function Ol(e, t) {
        if (null == e) return {}
        var n,
          a,
          r = (function(e, t) {
            if (null == e) return {}
            var n,
              a,
              r = {},
              o = Object.keys(e)
            for (a = 0; a < o.length; a++) (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n])
            return r
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          for (a = 0; a < o.length; a++)
            (n = o[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]))
        }
        return r
      }
      var jl = i.a.createElement('line', { x1: 18, y1: 6, x2: 6, y2: 18 }),
        Al = i.a.createElement('line', { x1: 6, y1: 6, x2: 18, y2: 18 }),
        wl = function(e) {
          var t = e.svgRef,
            n = e.title,
            a = Ol(e, ['svgRef', 'title'])
          return i.a.createElement(
            'svg',
            xl(
              {
                width: 20,
                height: 20,
                viewBox: '0 0 20 20',
                fill: 'none',
                stroke: 'currentColor',
                strokeWidth: 2,
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                className: 'feather feather-x',
                ref: t
              },
              a
            ),
            n ? i.a.createElement('title', null, n) : null,
            jl,
            Al
          )
        },
        kl = i.a.forwardRef(function(e, t) {
          return i.a.createElement(wl, xl({ svgRef: t }, e))
        })
      n.p
      function Tl(e) {
        var t = Object(o.useRef)()
        return (
          Object(o.useEffect)(
            function() {
              t.current = e
            },
            [e]
          ),
          t.current
        )
      }
      var Cl = n(344),
        Il = n.n(Cl)
      var Sl = n(759),
        Nl = n(760)
      function Rl() {
        var e = Object(Ve.a)(['\n  margin-left: 0.25rem;\n  font-size: 0.825rem;\n  ', ';\n  align-items: center;\n'])
        return (
          (Rl = function() {
            return e
          }),
          e
        )
      }
      function Ul() {
        var e = Object(Ve.a)([
          '\n  color: ',
          ';\n  flex-shrink: 0;\n  display: flex;\n  text-decoration: none;\n  font-size: 0.825rem;\n  :hover,\n  :active,\n  :focus {\n    text-decoration: none;\n    color: ',
          ';\n  }\n'
        ])
        return (
          (Ul = function() {
            return e
          }),
          e
        )
      }
      var Bl = Object(He.default)(ao)(
          Ul(),
          function(e) {
            return e.theme.text3
          },
          function(e) {
            return e.theme.text2
          }
        ),
        Ll = He.default.span(Rl(), function(e) {
          return e.theme.flexRowNoWrap
        })
      function Wl(e) {
        var t = (function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500,
              t = Object(o.useState)(!1),
              n = Object(A.a)(t, 2),
              a = n[0],
              r = n[1],
              i = Object(o.useCallback)(function(e) {
                var t = Il()(e)
                r(t)
              }, [])
            return (
              Object(o.useEffect)(
                function() {
                  if (a) {
                    var t = setTimeout(function() {
                      r(!1)
                    }, e)
                    return function() {
                      clearTimeout(t)
                    }
                  }
                },
                [a, r, e]
              ),
              [a, i]
            )
          })(),
          n = Object(A.a)(t, 2),
          a = n[0],
          r = n[1]
        return i.a.createElement(
          Bl,
          {
            onClick: function() {
              return r(e.toCopy)
            }
          },
          a
            ? i.a.createElement(
                Ll,
                null,
                i.a.createElement(Sl.a, { size: '16' }),
                i.a.createElement(Ll, null, 'Copied')
              )
            : i.a.createElement(Ll, null, i.a.createElement(Nl.a, { size: '16' })),
          a ? '' : e.children
        )
      }
      var zl = n(761)
      function Ml() {
        var e = Object(Ve.a)(['\n  color: ', ';\n'])
        return (
          (Ml = function() {
            return e
          }),
          e
        )
      }
      function Pl() {
        var e = Object(Ve.a)([
          '\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-decoration: none !important;\n  border-radius: 0.5rem;\n  padding: 0.25rem 0rem;\n  font-weight: 500;\n  font-size: 0.825rem;\n  color: ',
          ';\n'
        ])
        return (
          (Pl = function() {
            return e
          }),
          e
        )
      }
      function Dl() {
        var e = Object(Ve.a)([
          '\n  margin-right: 0.5rem;\n  display: flex;\n  align-items: center;\n  :hover {\n    text-decoration: underline;\n  }\n'
        ])
        return (
          (Dl = function() {
            return e
          }),
          e
        )
      }
      function Fl() {
        var e = Object(Ve.a)([''])
        return (
          (Fl = function() {
            return e
          }),
          e
        )
      }
      var ql = He.default.div(Fl()),
        Vl = He.default.div(Dl()),
        Yl = Object(He.default)(mo)(Pl(), function(e) {
          return e.theme.primary1
        }),
        Hl = He.default.div(Ml(), function(e) {
          var t = e.pending,
            n = e.success,
            a = e.theme
          return t ? a.primary1 : n ? a.green1 : a.red1
        })
      function Ql(e) {
        var t,
          n,
          a = e.hash,
          r = Le().chainId,
          o = xi(),
          c = null === o || void 0 === o ? void 0 : o[a],
          u = null === c || void 0 === c ? void 0 : c.summary,
          l = !(null === c || void 0 === c ? void 0 : c.receipt),
          s =
            !l &&
            c &&
            (1 === (null === (t = c.receipt) || void 0 === t ? void 0 : t.status) ||
              'undefined' === typeof (null === (n = c.receipt) || void 0 === n ? void 0 : n.status))
        return r
          ? i.a.createElement(
              ql,
              null,
              i.a.createElement(
                Yl,
                { href: ra(r, a, 'transaction'), pending: l, success: s },
                i.a.createElement(Qt, null, i.a.createElement(Vl, null, null !== u && void 0 !== u ? u : a, ' \u2197')),
                i.a.createElement(
                  Hl,
                  { pending: l, success: s },
                  l
                    ? i.a.createElement(gl, null)
                    : s
                    ? i.a.createElement(Sl.a, { size: '16' })
                    : i.a.createElement(zl.a, { size: '16' })
                )
              )
            )
          : null
      }
      function Xl() {
        var e = Object(Ve.a)(['\n  color: ', ';\n'])
        return (
          (Xl = function() {
            return e
          }),
          e
        )
      }
      function Jl() {
        var e = Object(Ve.a)([
          '\n  width: fit-content;\n  font-weight: 400;\n  margin-left: 8px;\n  font-size: 0.825rem;\n  padding: 4px 6px;\n  :hover {\n    cursor: pointer;\n    text-decoration: underline;\n  }\n'
        ])
        return (
          (Jl = function() {
            return e
          }),
          e
        )
      }
      function Gl() {
        var e = Object(Ve.a)(['\n  ', ';\n'])
        return (
          (Gl = function() {
            return e
          }),
          e
        )
      }
      function Kl() {
        var e = Object(Ve.a)(['\n    align-items: flex-end;\n  '])
        return (
          (Kl = function() {
            return e
          }),
          e
        )
      }
      function Zl() {
        var e = Object(Ve.a)([
          '\n  ',
          ';\n  align-items: center;\n  justify-content: center;\n  margin-right: 8px;\n  & > img,\n  span {\n    height: ',
          ';\n    width: ',
          ';\n  }\n  ',
          ';\n'
        ])
        return (
          (Zl = function() {
            return e
          }),
          e
        )
      }
      function _l() {
        var e = Object(Ve.a)(['\n  width: initial;\n  font-size: 0.825rem;\n  font-weight: 500;\n  color: ', ';\n'])
        return (
          (_l = function() {
            return e
          }),
          e
        )
      }
      function $l() {
        var e = Object(Ve.a)(['\n  path {\n    stroke: ', ';\n  }\n'])
        return (
          ($l = function() {
            return e
          }),
          e
        )
      }
      function es() {
        var e = Object(Ve.a)([
          '\n  position: absolute;\n  right: 1rem;\n  top: 14px;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n'
        ])
        return (
          (es = function() {
            return e
          }),
          e
        )
      }
      function ts() {
        var e = Object(Ve.a)([
          '\n  font-size: 0.825rem;\n  color: ',
          ';\n  margin-left: 1rem;\n  font-size: 0.825rem;\n  display: flex;\n  :hover {\n    color: ',
          ';\n  }\n'
        ])
        return (
          (ts = function() {
            return e
          }),
          e
        )
      }
      function ns() {
        var e = Object(Ve.a)([
          '\n  display: flex;\n  justify-content: space-between;\n  min-width: 0;\n  width: 100%;\n\n  font-weight: 500;\n  font-size: 1.25rem;\n\n  a:hover {\n    text-decoration: underline;\n  }\n\n  p {\n    min-width: 0;\n    margin: 0;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n'
        ])
        return (
          (ns = function() {
            return e
          }),
          e
        )
      }
      function as() {
        var e = Object(Ve.a)([
          '\n  ',
          '\n  padding: 1.5rem;\n  flex-grow: 1;\n  overflow: auto;\n  background-color: ',
          ';\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n\n  h5 {\n    margin: 0;\n    font-weight: 400;\n    color: ',
          ';\n  }\n'
        ])
        return (
          (as = function() {
            return e
          }),
          e
        )
      }
      function rs() {
        var e = Object(Ve.a)([
          '\n  h5 {\n    margin: 0 0 1rem 0;\n    font-weight: 400;\n  }\n\n  h4 {\n    margin: 0;\n    font-weight: 500;\n  }\n'
        ])
        return (
          (rs = function() {
            return e
          }),
          e
        )
      }
      function os() {
        var e = Object(Ve.a)(['padding: 0rem 1rem 1.5rem 1rem;'])
        return (
          (os = function() {
            return e
          }),
          e
        )
      }
      function is() {
        var e = Object(Ve.a)(['\n  background-color: ', ';\n  padding: 0rem 1rem;\n  ', ';\n'])
        return (
          (is = function() {
            return e
          }),
          e
        )
      }
      function cs() {
        var e = Object(Ve.a)([
          '\n  ',
          ';\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 400;\n  color: ',
          ';\n\n  div {\n    ',
          '\n    align-items: center;\n  }\n'
        ])
        return (
          (cs = function() {
            return e
          }),
          e
        )
      }
      function us() {
        var e = Object(Ve.a)([
          '\n  padding: 1rem;\n  border: 1px solid ',
          ';\n  border-radius: 20px;\n  position: relative;\n  display: grid;\n  grid-row-gap: 12px;\n  margin-bottom: 20px;\n'
        ])
        return (
          (us = function() {
            return e
          }),
          e
        )
      }
      function ls() {
        var e = Object(Ve.a)([
          '\n  position: relative;\n\n  h5 {\n    margin: 0;\n    margin-bottom: 0.5rem;\n    font-size: 1rem;\n    font-weight: 400;\n  }\n\n  h5:last-child {\n    margin-bottom: 0px;\n  }\n\n  h4 {\n    margin-top: 0;\n    font-weight: 500;\n  }\n'
        ])
        return (
          (ls = function() {
            return e
          }),
          e
        )
      }
      function ss() {
        var e = Object(Ve.a)(['\n    padding: 1rem;\n  '])
        return (
          (ss = function() {
            return e
          }),
          e
        )
      }
      function ds() {
        var e = Object(Ve.a)(['\n  ', ';\n  padding: 1rem 1rem;\n  font-weight: 500;\n  color: ', ';\n  ', ';\n'])
        return (
          (ds = function() {
            return e
          }),
          e
        )
      }
      var ms = He.default.div(
          ds(),
          function(e) {
            return e.theme.flexRowNoWrap
          },
          function(e) {
            return 'blue' === e.color
              ? function(e) {
                  return e.theme.primary1
                }
              : 'inherit'
          },
          function(e) {
            return e.theme.mediaWidth.upToMedium(ss())
          }
        ),
        ps = He.default.div(ls()),
        fs = He.default.div(us(), function(e) {
          return e.theme.bg3
        }),
        bs = He.default.div(
          cs(),
          function(e) {
            return e.theme.flexRowNoWrap
          },
          function(e) {
            return e.theme.text1
          },
          function(e) {
            return e.theme.flexRowNoWrap
          }
        ),
        vs = He.default.div(
          is(),
          function(e) {
            return e.theme.bg1
          },
          function(e) {
            return e.theme.mediaWidth.upToMedium(os())
          }
        ),
        hs = He.default.div(rs()),
        gs = He.default.div(
          as(),
          function(e) {
            return e.theme.flexColumnNoWrap
          },
          function(e) {
            return e.theme.bg2
          },
          function(e) {
            return e.theme.text3
          }
        ),
        ys = He.default.div(ns()),
        Es = Object(He.default)(mo)(
          ts(),
          function(e) {
            return e.theme.text3
          },
          function(e) {
            return e.theme.text2
          }
        ),
        xs = He.default.div(es()),
        Os = Object(He.default)(kl)($l(), function(e) {
          return e.theme.text4
        }),
        js = He.default.div(_l(), function(e) {
          return e.theme.text3
        }),
        As = He.default.div(
          Zl(),
          function(e) {
            return e.theme.flexColumnNoWrap
          },
          function(e) {
            var t = e.size
            return t ? t + 'px' : '32px'
          },
          function(e) {
            var t = e.size
            return t ? t + 'px' : '32px'
          },
          function(e) {
            return e.theme.mediaWidth.upToMedium(Kl())
          }
        ),
        ws = He.default.div(Gl(), function(e) {
          return e.theme.flexColumnNoWrap
        }),
        ks = Object(He.default)(ui)(Jl()),
        Ts = Object(He.default)(ks)(Xl(), function(e) {
          return e.theme.primary1
        })
      function Cs(e) {
        return i.a.createElement(
          ws,
          null,
          e.map(function(e, t) {
            return i.a.createElement(Ql, { key: t, hash: e })
          })
        )
      }
      function Is(e) {
        var t = e.toggleWalletModal,
          n = e.pendingTransactions,
          a = e.confirmedTransactions,
          r = e.ENSName,
          c = e.openOptions,
          u = Le(),
          l = u.chainId,
          s = u.account,
          m = u.connector,
          p = Object(o.useContext)(He.ThemeContext),
          f = Object(d.c)()
        function b() {
          return m === G
            ? i.a.createElement(As, { size: 16 }, i.a.createElement(pl, null))
            : m === K
            ? i.a.createElement(As, { size: 16 }, i.a.createElement('img', { src: cl.a, alt: 'wallet connect logo' }))
            : m === $
            ? i.a.createElement(As, { size: 16 }, i.a.createElement('img', { src: tl.a, alt: 'coinbase wallet logo' }))
            : m === Z
            ? i.a.createElement(As, { size: 16 }, i.a.createElement('img', { src: al.a, alt: 'fortmatic logo' }))
            : m === _
            ? i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(
                  As,
                  { size: 16 },
                  i.a.createElement('img', { src: ol.a, alt: 'portis logo' }),
                  i.a.createElement(
                    Ts,
                    {
                      onClick: function() {
                        _.portis.showPortis()
                      }
                    },
                    'Show Portis'
                  )
                )
              )
            : null
        }
        var v = Object(o.useCallback)(
          function() {
            l && f(hi({ chainId: l }))
          },
          [f, l]
        )
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            ps,
            null,
            i.a.createElement(xs, { onClick: t }, i.a.createElement(Os, null)),
            i.a.createElement(ms, null, 'Account'),
            i.a.createElement(
              vs,
              null,
              i.a.createElement(
                hs,
                null,
                i.a.createElement(
                  fs,
                  null,
                  i.a.createElement(
                    bs,
                    null,
                    (function() {
                      var e = window.ethereum,
                        t = !(!e || !e.isMetaMask),
                        n = Object.keys(Ee)
                          .filter(function(e) {
                            return Ee[e].connector === m && (m !== G || t === ('METAMASK' === e))
                          })
                          .map(function(e) {
                            return Ee[e].name
                          })[0]
                      return i.a.createElement(js, null, 'Connected with ', n)
                    })(),
                    i.a.createElement(
                      'div',
                      null,
                      m !== G &&
                        m !== $ &&
                        i.a.createElement(
                          ks,
                          {
                            style: { fontSize: '.825rem', fontWeight: 400, marginRight: '8px' },
                            onClick: function() {
                              m.close()
                            }
                          },
                          'Disconnect'
                        ),
                      i.a.createElement(
                        ks,
                        {
                          style: { fontSize: '.825rem', fontWeight: 400 },
                          onClick: function() {
                            c()
                          }
                        },
                        'Change'
                      )
                    )
                  ),
                  i.a.createElement(
                    bs,
                    { id: 'web3-account-identifier-row' },
                    i.a.createElement(
                      ys,
                      null,
                      r
                        ? i.a.createElement(
                            i.a.Fragment,
                            null,
                            i.a.createElement('div', null, b(), i.a.createElement('p', null, ' ', r))
                          )
                        : i.a.createElement(
                            i.a.Fragment,
                            null,
                            i.a.createElement('div', null, b(), i.a.createElement('p', null, ' ', s && oa(s)))
                          )
                    )
                  ),
                  i.a.createElement(
                    bs,
                    null,
                    r
                      ? i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement(
                            ys,
                            null,
                            i.a.createElement(
                              'div',
                              null,
                              s &&
                                i.a.createElement(
                                  Wl,
                                  { toCopy: s },
                                  i.a.createElement('span', { style: { marginLeft: '4px' } }, 'Copy Address')
                                ),
                              l &&
                                s &&
                                i.a.createElement(
                                  Es,
                                  { hasENS: !!r, isENS: !0, href: l && ra(l, r, 'address') },
                                  i.a.createElement(Ir.a, { size: 16 }),
                                  i.a.createElement('span', { style: { marginLeft: '4px' } }, 'View on Etherscan')
                                )
                            )
                          )
                        )
                      : i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement(
                            ys,
                            null,
                            i.a.createElement(
                              'div',
                              null,
                              s &&
                                i.a.createElement(
                                  Wl,
                                  { toCopy: s },
                                  i.a.createElement('span', { style: { marginLeft: '4px' } }, 'Copy Address')
                                ),
                              l &&
                                s &&
                                i.a.createElement(
                                  Es,
                                  { hasENS: !!r, isENS: !1, href: ra(l, s, 'address') },
                                  i.a.createElement(Ir.a, { size: 16 }),
                                  i.a.createElement(
                                    'span',
                                    { style: { marginLeft: '4px' } },
                                    'View on scan.kbcfoundation.com'
                                  )
                                )
                            )
                          )
                        )
                  )
                )
              )
            )
          ),
          n.length || a.length
            ? i.a.createElement(
                gs,
                null,
                i.a.createElement(
                  Ht,
                  { mb: '1rem', style: { justifyContent: 'space-between' } },
                  i.a.createElement(Lo, null, 'Recent Transactions'),
                  i.a.createElement(ao, { onClick: v }, '(clear all)')
                ),
                Cs(n),
                Cs(a)
              )
            : i.a.createElement(
                gs,
                null,
                i.a.createElement(Lo, { color: p.text1 }, 'Your transactions will appear here...')
              )
        )
      }
      function Ss() {
        var e = Object(Ve.a)(['\n    align-items: flex-end;\n  '])
        return (
          (Ss = function() {
            return e
          }),
          e
        )
      }
      function Ns() {
        var e = Object(Ve.a)([
          '\n  ',
          ';\n  align-items: center;\n  justify-content: center;\n  & > img,\n  span {\n    height: ',
          ';\n    width: ',
          ';\n  }\n  ',
          ';\n'
        ])
        return (
          (Ns = function() {
            return e
          }),
          e
        )
      }
      function Rs() {
        var e = Object(Ve.a)(['\n  color: ', ';\n  margin-top: 10px;\n  font-size: 12px;\n'])
        return (
          (Rs = function() {
            return e
          }),
          e
        )
      }
      function Us() {
        var e = Object(Ve.a)(['\n  ', ';\n  color: ', ';\n  font-size: 1rem;\n  font-weight: 500;\n'])
        return (
          (Us = function() {
            return e
          }),
          e
        )
      }
      function Bs() {
        var e = Object(Ve.a)([
          '\n  color: ',
          ';\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'
        ])
        return (
          (Bs = function() {
            return e
          }),
          e
        )
      }
      function Ls() {
        var e = Object(Ve.a)([
          '\n  ',
          '\n  justify-content: center;\n  align-items: center;\n\n  &:first-child {\n    height: 8px;\n    width: 8px;\n    margin-right: 8px;\n    background-color: ',
          ';\n    border-radius: 50%;\n  }\n'
        ])
        return (
          (Ls = function() {
            return e
          }),
          e
        )
      }
      function Ws() {
        var e = Object(Ve.a)([
          '\n  margin-top: 0;\n  &:hover {\n    cursor: ',
          ';\n    border: ',
          ';\n  }\n  opacity: ',
          ';\n'
        ])
        return (
          (Ws = function() {
            return e
          }),
          e
        )
      }
      function zs() {
        var e = Object(Ve.a)(['\n  ', ';\n  justify-content: center;\n  height: 100%;\n'])
        return (
          (zs = function() {
            return e
          }),
          e
        )
      }
      function Ms() {
        var e = Object(Ve.a)([
          '\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 2rem;\n  padding: 1rem;\n'
        ])
        return (
          (Ms = function() {
            return e
          }),
          e
        )
      }
      function Ps() {
        var e = Object(Ve.a)([
          '\n  background-color: ',
          ';\n  padding: 1rem;\n  outline: none;\n  border: 1px solid;\n  border-radius: 12px;\n  width: 100% !important;\n  &:focus {\n    box-shadow: 0 0 0 1px ',
          ';\n  }\n  border-color: ',
          ';\n'
        ])
        return (
          (Ps = function() {
            return e
          }),
          e
        )
      }
      var Ds = He.default.button(
          Ps(),
          function(e) {
            var t = e.theme
            return e.active ? t.bg3 : t.bg2
          },
          function(e) {
            return e.theme.primary1
          },
          function(e) {
            var t = e.theme
            return e.active ? 'transparent' : t.bg3
          }
        ),
        Fs = Object(He.default)(Ds)(Ms()),
        qs = He.default.div(zs(), function(e) {
          return e.theme.flexColumnNoWrap
        }),
        Vs = Object(He.default)(Fs)(
          Ws(),
          function(e) {
            return e.clickable ? 'pointer' : ''
          },
          function(e) {
            var t = e.clickable,
              n = e.theme
            return t ? '1px solid '.concat(n.primary1) : ''
          },
          function(e) {
            return e.disabled ? '0.5' : '1'
          }
        ),
        Ys = He.default.div(
          Ls(),
          function(e) {
            return e.theme.flexRowNoWrap
          },
          function(e) {
            return e.theme.green1
          }
        ),
        Hs = He.default.div(Bs(), function(e) {
          return e.theme.green1
        }),
        Qs = He.default.div(
          Us(),
          function(e) {
            return e.theme.flexRowNoWrap
          },
          function(e) {
            return 'blue' === e.color
              ? function(e) {
                  return e.theme.primary1
                }
              : function(e) {
                  return e.theme.text1
                }
          }
        ),
        Xs = He.default.div(Rs(), function(e) {
          return e.theme.text1
        }),
        Js = He.default.div(
          Ns(),
          function(e) {
            return e.theme.flexColumnNoWrap
          },
          function(e) {
            var t = e.size
            return t ? t + 'px' : '24px'
          },
          function(e) {
            var t = e.size
            return t ? t + 'px' : '24px'
          },
          function(e) {
            return e.theme.mediaWidth.upToMedium(Ss())
          }
        )
      function Gs(e) {
        var t = e.link,
          n = void 0 === t ? null : t,
          a = e.clickable,
          r = void 0 === a || a,
          o = e.size,
          c = e.onClick,
          u = void 0 === c ? null : c,
          l = e.color,
          s = e.header,
          d = e.subheader,
          m = void 0 === d ? null : d,
          p = e.icon,
          f = e.active,
          b = void 0 !== f && f,
          v = e.id,
          h = i.a.createElement(
            Vs,
            { id: v, onClick: u, clickable: r && !b, active: b },
            i.a.createElement(
              qs,
              null,
              i.a.createElement(
                Qs,
                { color: l },
                b ? i.a.createElement(Hs, null, i.a.createElement(Ys, null, i.a.createElement('div', null))) : '',
                s
              ),
              m && i.a.createElement(Xs, null, m)
            ),
            i.a.createElement(Js, { size: o }, i.a.createElement('img', { src: p, alt: 'Icon' }))
          )
        return n ? i.a.createElement(mo, { href: n }, h) : h
      }
      function Ks() {
        var e = Object(Ve.a)(['\n  ', ';\n  align-items: center;\n  justify-content: center;\n'])
        return (
          (Ks = function() {
            return e
          }),
          e
        )
      }
      function Zs() {
        var e = Object(Ve.a)([
          '\n  border-radius: 8px;\n  font-size: 12px;\n  color: ',
          ';\n  background-color: ',
          ';\n  margin-left: 1rem;\n  padding: 0.5rem;\n  font-weight: 600;\n  user-select: none;\n\n  &:hover {\n    cursor: pointer;\n    background-color: ',
          ';\n  }\n'
        ])
        return (
          (Zs = function() {
            return e
          }),
          e
        )
      }
      function _s() {
        var e = Object(Ve.a)(['\n  ', ';\n  align-items: center;\n  justify-content: flex-start;\n'])
        return (
          (_s = function() {
            return e
          }),
          e
        )
      }
      function $s() {
        var e = Object(Ve.a)([
          '\n  ',
          ';\n  align-items: center;\n  justify-content: flex-start;\n  border-radius: 12px;\n  margin-bottom: 20px;\n  color: ',
          ';\n  border: 1px solid ',
          ';\n\n  & > * {\n    padding: 1rem;\n  }\n'
        ])
        return (
          ($s = function() {
            return e
          }),
          e
        )
      }
      function ed() {
        var e = Object(Ve.a)(['\n  margin-right: 1rem;\n'])
        return (
          (ed = function() {
            return e
          }),
          e
        )
      }
      function td() {
        var e = Object(Ve.a)([
          '\n  ',
          ';\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  & > * {\n    width: 100%;\n  }\n'
        ])
        return (
          (td = function() {
            return e
          }),
          e
        )
      }
      var nd = He.default.div(td(), function(e) {
          return e.theme.flexColumnNoWrap
        }),
        ad = Object(He.default)(gl)(ed()),
        rd = He.default.div(
          $s(),
          function(e) {
            return e.theme.flexRowNoWrap
          },
          function(e) {
            var t = e.theme
            return e.error ? t.red1 : 'inherit'
          },
          function(e) {
            var t = e.theme
            return e.error ? t.red1 : t.text4
          }
        ),
        od = He.default.div(_s(), function(e) {
          return e.theme.flexRowNoWrap
        }),
        id = He.default.div(
          Zs(),
          function(e) {
            return e.theme.text1
          },
          function(e) {
            return e.theme.bg4
          },
          function(e) {
            var t = e.theme
            return Object(Ke.a)(0.1, t.text4)
          }
        ),
        cd = He.default.div(Ks(), function(e) {
          return e.theme.flexRowNoWrap
        })
      function ud(e) {
        var t,
          a,
          r = e.connector,
          o = e.error,
          c = void 0 !== o && o,
          u = e.setPendingError,
          l = e.tryActivation,
          s = null === (t = window) || void 0 === t || null === (a = t.ethereum) || void 0 === a ? void 0 : a.isMetaMask
        return i.a.createElement(
          nd,
          null,
          i.a.createElement(
            rd,
            { error: c },
            i.a.createElement(
              cd,
              null,
              c
                ? i.a.createElement(
                    od,
                    null,
                    i.a.createElement('div', null, 'Error connecting.'),
                    i.a.createElement(
                      id,
                      {
                        onClick: function() {
                          u(!1), r && l(r)
                        }
                      },
                      'Try Again'
                    )
                  )
                : i.a.createElement(i.a.Fragment, null, i.a.createElement(ad, null), 'Initializing...')
            )
          ),
          Object.keys(Ee).map(function(e) {
            var t = Ee[e]
            if (t.connector === r) {
              if (t.connector === G) {
                if (s && 'MetaMask' !== t.name) return null
                if (!s && 'MetaMask' === t.name) return null
              }
              return i.a.createElement(Gs, {
                id: 'connect-'.concat(e),
                key: e,
                clickable: !1,
                color: t.color,
                header: t.name,
                subheader: t.description,
                icon: n(180)('./' + t.iconName)
              })
            }
            return null
          })
        )
      }
      function ld() {
        var e = Object(Ve.a)(['\n  :hover {\n    cursor: pointer;\n  }\n'])
        return (
          (ld = function() {
            return e
          }),
          e
        )
      }
      function sd() {
        var e = Object(Ve.a)(['\n    grid-template-columns: 1fr;\n    grid-gap: 10px;\n  '])
        return (
          (sd = function() {
            return e
          }),
          e
        )
      }
      function dd() {
        var e = Object(Ve.a)(['\n  display: grid;\n  grid-gap: 10px;\n  ', ';\n'])
        return (
          (dd = function() {
            return e
          }),
          e
        )
      }
      function md() {
        var e = Object(Ve.a)(['\n    margin: 1rem;\n    font-size: 12px;\n  '])
        return (
          (md = function() {
            return e
          }),
          e
        )
      }
      function pd() {
        var e = Object(Ve.a)([
          '\n  ',
          '\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-top: 2rem;\n  ',
          ';\n'
        ])
        return (
          (pd = function() {
            return e
          }),
          e
        )
      }
      function fd() {
        var e = Object(Ve.a)([
          '\n  position: relative;\n\n  h5 {\n    margin: 0;\n    margin-bottom: 0.5rem;\n    font-size: 1rem;\n    font-weight: 400;\n  }\n\n  h5:last-child {\n    margin-bottom: 0px;\n  }\n\n  h4 {\n    margin-top: 0;\n    font-weight: 500;\n  }\n'
        ])
        return (
          (fd = function() {
            return e
          }),
          e
        )
      }
      function bd() {
        var e = Object(Ve.a)(['padding: 1rem'])
        return (
          (bd = function() {
            return e
          }),
          e
        )
      }
      function vd() {
        var e = Object(Ve.a)([
          '\n  background-color: ',
          ';\n  padding: 2rem;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n\n  ',
          ';\n'
        ])
        return (
          (vd = function() {
            return e
          }),
          e
        )
      }
      function hd() {
        var e = Object(Ve.a)(['\n    padding: 1rem;\n  '])
        return (
          (hd = function() {
            return e
          }),
          e
        )
      }
      function gd() {
        var e = Object(Ve.a)(['\n  ', ';\n  padding: 1rem 1rem;\n  font-weight: 500;\n  color: ', ';\n  ', ';\n'])
        return (
          (gd = function() {
            return e
          }),
          e
        )
      }
      function yd() {
        var e = Object(Ve.a)(['\n  ', '\n  margin: 0;\n  padding: 0;\n  width: 100%;\n'])
        return (
          (yd = function() {
            return e
          }),
          e
        )
      }
      function Ed() {
        var e = Object(Ve.a)(['\n  path {\n    stroke: ', ';\n  }\n'])
        return (
          (Ed = function() {
            return e
          }),
          e
        )
      }
      function xd() {
        var e = Object(Ve.a)([
          '\n  position: absolute;\n  right: 1rem;\n  top: 14px;\n  &:hover {\n    cursor: pointer;\n    opacity: 0.6;\n  }\n'
        ])
        return (
          (xd = function() {
            return e
          }),
          e
        )
      }
      var Od = He.default.div(xd()),
        jd = Object(He.default)(kl)(Ed(), function(e) {
          return e.theme.text4
        }),
        Ad = He.default.div(yd(), function(e) {
          return e.theme.flexColumnNoWrap
        }),
        wd = He.default.div(
          gd(),
          function(e) {
            return e.theme.flexRowNoWrap
          },
          function(e) {
            return 'blue' === e.color
              ? function(e) {
                  return e.theme.primary1
                }
              : 'inherit'
          },
          function(e) {
            return e.theme.mediaWidth.upToMedium(hd())
          }
        ),
        kd = He.default.div(
          vd(),
          function(e) {
            return e.theme.bg2
          },
          function(e) {
            return e.theme.mediaWidth.upToMedium(bd())
          }
        ),
        Td = He.default.div(fd()),
        Cd = He.default.div(
          pd(),
          function(e) {
            return e.theme.flexRowNoWrap
          },
          function(e) {
            return e.theme.mediaWidth.upToMedium(md())
          }
        ),
        Id = He.default.div(dd(), function(e) {
          return e.theme.mediaWidth.upToMedium(sd())
        }),
        Sd = He.default.div(ld()),
        Nd = 'options',
        Rd = 'account',
        Ud = 'pending'
      function Bd(e) {
        var t = e.pendingTransactions,
          a = e.confirmedTransactions,
          u = e.ENSName,
          l = Object(r.d)(),
          d = l.active,
          m = l.account,
          p = l.connector,
          f = l.activate,
          b = l.error,
          v = Object(o.useState)(Rd),
          h = Object(A.a)(v, 2),
          g = h[0],
          E = h[1],
          x = Object(o.useState)(),
          O = Object(A.a)(x, 2),
          k = O[0],
          T = O[1],
          C = Object(o.useState)(),
          I = Object(A.a)(C, 2),
          S = I[0],
          N = I[1],
          R = jn(bn.WALLET),
          U = wn(),
          B = Tl(m)
        Object(o.useEffect)(
          function() {
            m && !B && R && U()
          },
          [m, B, U, R]
        ),
          Object(o.useEffect)(
            function() {
              R && (N(!1), E(Rd))
            },
            [R]
          )
        var L = Tl(d),
          W = Tl(p)
        Object(o.useEffect)(
          function() {
            R && ((d && !L) || (p && p !== W && !b)) && E(Rd)
          },
          [E, d, b, p, R, L, W]
        )
        var z = (function() {
          var e = Object(w.a)(
            j.a.mark(function e(t) {
              var n, a, o
              return j.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      ;(o = ''),
                        Object.keys(Ee).map(function(e) {
                          return t !== Ee[e].connector || (o = Ee[e].name)
                        }),
                        s.a.event({ category: 'Wallet', action: 'Change Wallet', label: o }),
                        T(t),
                        E(Ud),
                        t instanceof y.a &&
                          (null === (n = t.walletConnectProvider) || void 0 === n || null === (a = n.wc) || void 0 === a
                            ? void 0
                            : a.uri) &&
                          (t.walletConnectProvider = void 0),
                        t &&
                          f(t, void 0, !0).catch(function(e) {
                            e instanceof r.a ? f(t) : N(!0)
                          })
                    case 7:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )
          return function(t) {
            return e.apply(this, arguments)
          }
        })()
        return (
          Object(o.useEffect)(
            function() {
              Z.on('OVERLAY_READY', function() {
                U()
              })
            },
            [U]
          ),
          i.a.createElement(
            lt,
            { isOpen: R, onDismiss: U, minHeight: !1, maxHeight: 90 },
            i.a.createElement(
              Ad,
              null,
              b
                ? i.a.createElement(
                    Td,
                    null,
                    i.a.createElement(Od, { onClick: U }, i.a.createElement(jd, null)),
                    i.a.createElement(wd, null, b instanceof r.a ? 'Wrong Network' : 'Error connecting'),
                    i.a.createElement(
                      kd,
                      null,
                      b instanceof r.a
                        ? i.a.createElement('h5', null, 'Please connect to the appropriate Ethereum network.')
                        : 'Error connecting. Try refreshing the page.'
                    )
                  )
                : m && g === Rd
                ? i.a.createElement(Is, {
                    toggleWalletModal: U,
                    pendingTransactions: t,
                    confirmedTransactions: a,
                    ENSName: u,
                    openOptions: function() {
                      return E(Nd)
                    }
                  })
                : i.a.createElement(
                    Td,
                    null,
                    i.a.createElement(Od, { onClick: U }, i.a.createElement(jd, null)),
                    g !== Rd
                      ? i.a.createElement(
                          wd,
                          { color: 'blue' },
                          i.a.createElement(
                            Sd,
                            {
                              onClick: function() {
                                N(!1), E(Rd)
                              }
                            },
                            'Back'
                          )
                        )
                      : i.a.createElement(wd, null, i.a.createElement(Sd, null, 'Connect to a wallet')),
                    i.a.createElement(
                      kd,
                      null,
                      g === Ud
                        ? i.a.createElement(ud, { connector: k, error: S, setPendingError: N, tryActivation: z })
                        : i.a.createElement(
                            Id,
                            null,
                            (function() {
                              var e = window.ethereum && window.ethereum.isMetaMask
                              return Object.keys(Ee).map(function(t) {
                                var a = Ee[t]
                                if (c.isMobile)
                                  return a.connector === _ || window.web3 || window.ethereum || !a.mobile
                                    ? null
                                    : i.a.createElement(Gs, {
                                        onClick: function() {
                                          a.connector !== p && !a.href && z(a.connector)
                                        },
                                        id: 'connect-'.concat(t),
                                        key: t,
                                        active: a.connector && a.connector === p,
                                        color: a.color,
                                        link: a.href,
                                        header: a.name,
                                        subheader: null,
                                        icon: n(180)('./' + a.iconName)
                                      })
                                if (a.connector === G) {
                                  if (!window.web3 && !window.ethereum)
                                    return 'MetaMask' === a.name
                                      ? i.a.createElement(Gs, {
                                          id: 'connect-'.concat(t),
                                          key: t,
                                          color: '#E8831D',
                                          header: 'Install Metamask',
                                          subheader: null,
                                          link: 'https://metamask.io/',
                                          icon: El.a
                                        })
                                      : null
                                  if ('MetaMask' === a.name && !e) return null
                                  if ('Injected' === a.name && e) return null
                                }
                                return (
                                  !c.isMobile &&
                                  !a.mobileOnly &&
                                  i.a.createElement(Gs, {
                                    id: 'connect-'.concat(t),
                                    onClick: function() {
                                      a.connector === p ? E(Rd) : !a.href && z(a.connector)
                                    },
                                    key: t,
                                    active: a.connector === p,
                                    color: a.color,
                                    link: a.href,
                                    header: a.name,
                                    subheader: null,
                                    icon: n(180)('./' + a.iconName)
                                  })
                                )
                              })
                            })()
                          ),
                      g !== Ud &&
                        i.a.createElement(
                          Cd,
                          null,
                          i.a.createElement('span', null, 'New to Ethereum? \xa0'),
                          ' ',
                          i.a.createElement(mo, { href: 'https://ethereum.org/wallets/' }, 'Learn more about wallets')
                        )
                    )
                  )
            )
          )
        )
      }
      function Ld() {
        var e = Object(Ve.a)(['\n  margin-left: 0.25rem;\n  margin-right: 0.5rem;\n  width: 16px;\n  height: 16px;\n'])
        return (
          (Ld = function() {
            return e
          }),
          e
        )
      }
      function Wd() {
        var e = Object(Ve.a)([
          '\n  flex: 1 1 auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin: 0 0.5rem 0 0.25rem;\n  font-size: 1rem;\n  width: fit-content;\n  font-weight: 500;\n'
        ])
        return (
          (Wd = function() {
            return e
          }),
          e
        )
      }
      function zd() {
        var e = Object(Ve.a)([
          '\n  background-color: ',
          ';\n  border: 1px solid ',
          ';\n  color: ',
          ';\n  font-weight: 500;\n  :hover,\n  :focus {\n    background-color: ',
          ';\n\n    :focus {\n      border: 1px solid ',
          ';\n    }\n  }\n'
        ])
        return (
          (zd = function() {
            return e
          }),
          e
        )
      }
      function Md() {
        var e = Object(Ve.a)([
          '\n      background-color: ',
          ';\n      border: 1px solid ',
          ';\n      color: ',
          ';\n\n      :hover,\n      :focus {\n        border: 1px solid ',
          ';\n        color: ',
          ';\n      }\n    '
        ])
        return (
          (Md = function() {
            return e
          }),
          e
        )
      }
      function Pd() {
        var e = Object(Ve.a)([
          '\n  background-color: ',
          ';\n  border: none;\n  color: ',
          ';\n  font-weight: 500;\n\n  :hover,\n  :focus {\n    border: 1px solid ',
          ';\n    color: ',
          ';\n  }\n\n  ',
          '\n'
        ])
        return (
          (Pd = function() {
            return e
          }),
          e
        )
      }
      function Dd() {
        var e = Object(Ve.a)([
          '\n  background-color: ',
          ';\n  border: 1px solid ',
          ';\n  color: ',
          ';\n  font-weight: 500;\n  :hover,\n  :focus {\n    background-color: ',
          ';\n  }\n'
        ])
        return (
          (Dd = function() {
            return e
          }),
          e
        )
      }
      function Fd() {
        var e = Object(Ve.a)([
          '\n  ',
          '\n  width: 100%;\n  align-items: center;\n  padding: 0.5rem;\n  border-radius: 12px;\n  cursor: pointer;\n  user-select: none;\n  :focus {\n    outline: none;\n  }\n'
        ])
        return (
          (Fd = function() {
            return e
          }),
          e
        )
      }
      function qd() {
        var e = Object(Ve.a)([
          '\n  ',
          ';\n  align-items: center;\n  justify-content: center;\n  & > * {\n    height: ',
          ';\n    width: ',
          ';\n  }\n'
        ])
        return (
          (qd = function() {
            return e
          }),
          e
        )
      }
      var Vd = He.default.div(
          qd(),
          function(e) {
            return e.theme.flexColumnNoWrap
          },
          function(e) {
            var t = e.size
            return t ? t + 'px' : '32px'
          },
          function(e) {
            var t = e.size
            return t ? t + 'px' : '32px'
          }
        ),
        Yd = Object(He.default)(ui)(Fd(), function(e) {
          return e.theme.flexRowNoWrap
        }),
        Hd = Object(He.default)(Yd)(
          Dd(),
          function(e) {
            return e.theme.red1
          },
          function(e) {
            return e.theme.red1
          },
          function(e) {
            return e.theme.white
          },
          function(e) {
            var t = e.theme
            return Object(Ke.a)(0.1, t.red1)
          }
        ),
        Qd = Object(He.default)(Yd)(
          Pd(),
          function(e) {
            return e.theme.primary4
          },
          function(e) {
            return e.theme.primaryText1
          },
          function(e) {
            var t = e.theme
            return Object(Ke.a)(0.05, t.primary4)
          },
          function(e) {
            return e.theme.primaryText1
          },
          function(e) {
            return (
              e.faded &&
              Object(He.css)(
                Md(),
                function(e) {
                  return e.theme.primary5
                },
                function(e) {
                  return e.theme.primary5
                },
                function(e) {
                  return e.theme.primaryText1
                },
                function(e) {
                  var t = e.theme
                  return Object(Ke.a)(0.05, t.primary4)
                },
                function(e) {
                  var t = e.theme
                  return Object(Ke.a)(0.05, t.primaryText1)
                }
              )
            )
          }
        ),
        Xd = Object(He.default)(Yd)(
          zd(),
          function(e) {
            var t = e.pending,
              n = e.theme
            return t ? n.primary1 : n.bg2
          },
          function(e) {
            var t = e.pending,
              n = e.theme
            return t ? n.primary1 : n.bg3
          },
          function(e) {
            var t = e.pending,
              n = e.theme
            return t ? n.white : n.text1
          },
          function(e) {
            var t = e.pending,
              n = e.theme
            return t ? Object(Ke.a)(0.05, n.primary1) : Object(Ke.b)(0.05, n.bg2)
          },
          function(e) {
            var t = e.pending,
              n = e.theme
            return t ? Object(Ke.a)(0.1, n.primary1) : Object(Ke.a)(0.1, n.bg3)
          }
        ),
        Jd = He.default.p(Wd()),
        Gd = Object(He.default)($u.a)(Ld())
      function Kd(e, t) {
        return t.addedTime - e.addedTime
      }
      var Zd = i.a.createElement(
        'span',
        { role: 'img', 'aria-label': 'has socks emoji', style: { marginTop: -4, marginBottom: -4 } },
        '\ud83e\udde6'
      )
      function _d(e) {
        var t = e.connector
        return t === G
          ? i.a.createElement(pl, null)
          : t === K
          ? i.a.createElement(Vd, { size: 16 }, i.a.createElement('img', { src: cl.a, alt: '' }))
          : t === $
          ? i.a.createElement(Vd, { size: 16 }, i.a.createElement('img', { src: tl.a, alt: '' }))
          : t === Z
          ? i.a.createElement(Vd, { size: 16 }, i.a.createElement('img', { src: al.a, alt: '' }))
          : t === _
          ? i.a.createElement(Vd, { size: 16 }, i.a.createElement('img', { src: ol.a, alt: '' }))
          : null
      }
      function $d() {
        var e = Object(Me.b)().t,
          t = Object(r.d)(),
          n = t.account,
          a = t.connector,
          c = t.error,
          u = zi(null !== n && void 0 !== n ? n : void 0).ENSName,
          l = xi(),
          s = Object(o.useMemo)(
            function() {
              return Object.values(l)
                .filter(ji)
                .sort(Kd)
            },
            [l]
          )
            .filter(function(e) {
              return !e.receipt
            })
            .map(function(e) {
              return e.hash
            }),
          d = !!s.length,
          m = (function() {
            var e = ul()
            return Object(o.useMemo)(
              function() {
                return e && v.f.greaterThan(e, v.f.BigInt(0))
              },
              [e]
            )
          })(),
          p = wn()
        return n
          ? i.a.createElement(
              Xd,
              { id: 'web3-status-connected', onClick: p, pending: d },
              d
                ? i.a.createElement(
                    Vt,
                    null,
                    i.a.createElement(Jd, null, null === s || void 0 === s ? void 0 : s.length, ' Pending'),
                    ' ',
                    i.a.createElement(gl, { stroke: 'white' })
                  )
                : i.a.createElement(i.a.Fragment, null, m ? Zd : null, i.a.createElement(Jd, null, u || oa(n))),
              !d && a && i.a.createElement(_d, { connector: a })
            )
          : c
          ? i.a.createElement(
              Hd,
              { onClick: p },
              i.a.createElement(Gd, null),
              i.a.createElement(Jd, null, c instanceof r.a ? 'Wrong Network' : 'Error')
            )
          : i.a.createElement(
              Qd,
              { id: 'connect-wallet', onClick: p, faded: !n },
              i.a.createElement(Jd, null, e('Connect to a wallet'))
            )
      }
      function em() {
        var e = Object(r.d)(),
          t = e.active,
          n = e.account,
          a = Object(r.d)('NETWORK'),
          c = zi(null !== n && void 0 !== n ? n : void 0).ENSName,
          u = xi(),
          l = Object(o.useMemo)(
            function() {
              return Object.values(u)
                .filter(ji)
                .sort(Kd)
            },
            [u]
          ),
          s = l
            .filter(function(e) {
              return !e.receipt
            })
            .map(function(e) {
              return e.hash
            }),
          d = l
            .filter(function(e) {
              return e.receipt
            })
            .map(function(e) {
              return e.hash
            })
        return a.active || t
          ? i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement($d, null),
              i.a.createElement(Bd, {
                ENSName: null !== c && void 0 !== c ? c : void 0,
                pendingTransactions: s,
                confirmedTransactions: d
              })
            )
          : null
      }
      function tm() {
        var e = Object(Ve.a)(['\n  padding: 60px 0;\n'])
        return (
          (tm = function() {
            return e
          }),
          e
        )
      }
      function nm() {
        var e = Object(Ve.a)(['\n  width: 100%;\n  padding: 24px;\n  position: relative;\n  background: ', ';\n'])
        return (
          (nm = function() {
            return e
          }),
          e
        )
      }
      function am() {
        var e = Object(Ve.a)([
          '\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #008b8a 0%, #021d43 100%);\n'
        ])
        return (
          (am = function() {
            return e
          }),
          e
        )
      }
      function rm() {
        var e = Object(Ve.a)(['\n  width: 100%;\n'])
        return (
          (rm = function() {
            return e
          }),
          e
        )
      }
      var om = Object(He.default)(bt)(rm()),
        im = Object(He.default)(St)(am()),
        cm = He.default.div(nm(), function(e) {
          return (
            e.activeBG &&
            'radial-gradient(76.02% 75.41% at 1.84% 0%, rgba(255, 0, 122, 0.2) 0%, rgba(33, 114, 229, 0.2) 100%), #FFFFFF;'
          )
        }),
        um = Object(He.default)(ft)(tm())
      function lm() {
        var e,
          t,
          n,
          a,
          r,
          c,
          u,
          l = jn(bn.SELF_CLAIM),
          s = Cn(),
          d = Le(),
          m = d.account,
          p = d.chainId,
          f = Object(o.useState)(!1),
          b = Object(A.a)(f, 2),
          h = b[0],
          g = b[1],
          y = ki(m),
          E = Ii(m).claimCallback,
          x = Ci(m),
          O = Ai(null !== m && void 0 !== m ? m : void 0),
          j = O.claimSubmitted,
          w = O.claimTxn,
          k = Boolean(null === w || void 0 === w ? void 0 : w.receipt)
        Object(o.useEffect)(
          function() {
            k && j && h && (g(!1), l || s())
          },
          [h, k, j, l, s]
        )
        var T = v.f.multiply(
          v.f.BigInt(
            ((null === y || void 0 === y || null === (e = y.flags) || void 0 === e ? void 0 : e.isSOCKS) ? 1e3 : 0) +
              ((null === y || void 0 === y || null === (t = y.flags) || void 0 === t ? void 0 : t.isUser) ? 400 : 0)
          ),
          v.f.exponentiate(v.f.BigInt(10), v.f.BigInt(18))
        )
        return i.a.createElement(
          lt,
          { isOpen: l, onDismiss: s, maxHeight: 90 },
          i.a.createElement(_i, { start: Boolean(l && k) }),
          !h &&
            !k &&
            i.a.createElement(
              om,
              { gap: 'lg' },
              i.a.createElement(
                im,
                null,
                i.a.createElement(Nt, null),
                i.a.createElement(Ut, null),
                i.a.createElement(
                  Bt,
                  { gap: 'md' },
                  i.a.createElement(
                    Vt,
                    null,
                    i.a.createElement(Bo, { fontWeight: 500 }, 'Claim UNI'),
                    i.a.createElement(to, { onClick: s, style: { zIndex: 99 }, color: 'white' })
                  ),
                  i.a.createElement(
                    Bo,
                    { fontWeight: 700, fontSize: 36 },
                    null === x || void 0 === x
                      ? void 0
                      : x.toFixed(0, null !== (n = { groupSeparator: ',' }) && void 0 !== n ? n : '-'),
                    ' UNI'
                  )
                ),
                i.a.createElement(Lt, null),
                i.a.createElement(
                  Bt,
                  { gap: 'sm' },
                  (null === y || void 0 === y || null === (a = y.flags) || void 0 === a ? void 0 : a.isSOCKS) &&
                    i.a.createElement(
                      Vt,
                      null,
                      i.a.createElement(Mo, { color: 'white' }, 'SOCKS'),
                      i.a.createElement(Mo, { color: 'white' }, 1e3, ' UNI')
                    ),
                  (null === y || void 0 === y || null === (r = y.flags) || void 0 === r ? void 0 : r.isLP) &&
                    x &&
                    v.f.greaterThanOrEqual(x.raw, T) &&
                    i.a.createElement(
                      Vt,
                      null,
                      i.a.createElement(Mo, { color: 'white' }, 'Liquidity'),
                      i.a.createElement(
                        Mo,
                        { color: 'white' },
                        x.subtract(new v.m(x.token, T)).toFixed(0, { groupSeparator: ',' }),
                        ' ',
                        'UNI'
                      )
                    ),
                  (null === y || void 0 === y || null === (c = y.flags) || void 0 === c ? void 0 : c.isUser) &&
                    i.a.createElement(
                      Vt,
                      null,
                      i.a.createElement(Mo, { color: 'white' }, 'User'),
                      i.a.createElement(Mo, { color: 'white' }, 400, ' UNI')
                    )
                )
              ),
              i.a.createElement(
                bt,
                { gap: 'md', style: { padding: '1rem', paddingTop: '0' }, justify: 'center' },
                i.a.createElement(
                  Mo,
                  { fontWeight: 500 },
                  'As a member of the Uniswap community you may claim UNI to be used for voting and governance. ',
                  i.a.createElement('br', null),
                  ' ',
                  i.a.createElement('br', null),
                  i.a.createElement(mo, { href: 'https://uniswap.org/blog/uni' }, 'Read more about UNI')
                ),
                i.a.createElement(
                  ii,
                  {
                    disabled: !Object(Ja.isAddress)(null !== m && void 0 !== m ? m : ''),
                    padding: '16px 16px',
                    width: '100%',
                    borderRadius: '12px',
                    mt: '1rem',
                    onClick: function() {
                      g(!0),
                        E().catch(function(e) {
                          g(!1), console.log(e)
                        })
                    }
                  },
                  'Claim UNI'
                )
              )
            ),
          (h || k) &&
            i.a.createElement(
              cm,
              { activeBG: !0 },
              i.a.createElement(Ut, null),
              i.a.createElement(Rt, { desaturate: !0 }),
              i.a.createElement(
                Vt,
                null,
                i.a.createElement('div', null),
                i.a.createElement(to, { onClick: s, style: { zIndex: 99 }, stroke: 'black' })
              ),
              i.a.createElement(
                um,
                null,
                k
                  ? i.a.createElement(so, { width: '72px', src: Ni.a })
                  : i.a.createElement(go, { src: Ui.a, alt: 'loader', size: '90px' })
              ),
              i.a.createElement(
                bt,
                { gap: '100px', justify: 'center' },
                i.a.createElement(
                  bt,
                  { gap: '12px', justify: 'center' },
                  i.a.createElement(Wo, { fontWeight: 600, color: 'black' }, k ? 'Claimed!' : 'Claiming'),
                  !k &&
                    i.a.createElement(
                      Tr.b,
                      { fontSize: 36, color: '#008b8a', fontWeight: 800 },
                      null === x || void 0 === x
                        ? void 0
                        : x.toFixed(0, null !== (u = { groupSeparator: ',' }) && void 0 !== u ? u : '-'),
                      ' UNI'
                    )
                ),
                k &&
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      Mo,
                      { fontWeight: 500, color: 'black' },
                      i.a.createElement('span', { role: 'img', 'aria-label': 'party-hat' }, '\ud83c\udf89', ' '),
                      'Welcome to team Unicorn :)',
                      ' ',
                      i.a.createElement('span', { role: 'img', 'aria-label': 'party-hat' }, '\ud83c\udf89')
                    )
                  ),
                h && !j && i.a.createElement(Mo, { color: 'black' }, 'Confirm this transaction in your wallet'),
                h &&
                  j &&
                  !k &&
                  p &&
                  (null === w || void 0 === w ? void 0 : w.hash) &&
                  i.a.createElement(
                    mo,
                    { href: ra(p, null === w || void 0 === w ? void 0 : w.hash, 'transaction'), style: { zIndex: 99 } },
                    'View transaction on scan.kbcfoundation.com'
                  )
              )
            )
        )
      }
      var sm = n(763)
      function dm() {
        var e = Object(Ve.a)(['\n  width: 100%;\n  height: 1px;\n  background-color: ', ';\n'])
        return (
          (dm = function() {
            return e
          }),
          e
        )
      }
      function mm() {
        var e = Object(Ve.a)([
          '\n  background-color: ',
          ';\n  color: ',
          ';\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n'
        ])
        return (
          (mm = function() {
            return e
          }),
          e
        )
      }
      function pm() {
        var e = Object(Ve.a)([
          '\n  background-color: ',
          ';\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n'
        ])
        return (
          (pm = function() {
            return e
          }),
          e
        )
      }
      function fm() {
        var e = Object(Ve.a)([
          '\n  background-color: ',
          ';\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ',
          ';\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n'
        ])
        return (
          (fm = function() {
            return e
          }),
          e
        )
      }
      function bm() {
        var e = Object(Ve.a)([
          "\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"
        ])
        return (
          (bm = function() {
            return e
          }),
          e
        )
      }
      function vm() {
        var e = Object(Ve.a)(['\n  text-overflow: ellipsis;\n  width: 220px;\n  overflow: hidden;\n'])
        return (
          (vm = function() {
            return e
          }),
          e
        )
      }
      function hm() {
        var e = Object(Ve.a)([
          '\n  height: 22px;\n  width: 22px;\n  background-color: ',
          ';\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ',
          ';\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ',
          ';\n  }\n  :focus {\n    background-color: ',
          ';\n    outline: none;\n  }\n'
        ])
        return (
          (hm = function() {
            return e
          }),
          e
        )
      }
      function gm() {
        var e = Object(Ve.a)(['\n  color: ', ';\n'])
        return (
          (gm = function() {
            return e
          }),
          e
        )
      }
      function ym() {
        var e = Object(Ve.a)(['\n  margin-top: 1rem;\n'])
        return (
          (ym = function() {
            return e
          }),
          e
        )
      }
      function Em() {
        var e = Object(Ve.a)(['\n  height: 1px;\n  width: 100%;\n  background-color: ', ';\n'])
        return (
          (Em = function() {
            return e
          }),
          e
        )
      }
      function xm() {
        var e = Object(Ve.a)([
          '\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        '
        ])
        return (
          (xm = function() {
            return e
          }),
          e
        )
      }
      function Om() {
        var e = Object(Ve.a)(['\n  padding: 2px;\n\n  ', '\n'])
        return (
          (Om = function() {
            return e
          }),
          e
        )
      }
      function jm() {
        var e = Object(Ve.a)(['\n  position: relative;\n  padding: 1rem;\n'])
        return (
          (jm = function() {
            return e
          }),
          e
        )
      }
      var Am = He.default.div(jm()),
        wm = He.default.div(Om(), function(e) {
          return e.clickable ? Object(He.css)(xm()) : null
        }),
        km = He.default.div(Em(), function(e) {
          return e.theme.bg3
        }),
        Tm = He.default.div(ym()),
        Cm = Object(He.default)(Tr.b)(gm(), function(e) {
          var t = e.theme,
            n = e.severity
          return 3 === n || 4 === n ? t.red1 : 2 === n ? t.yellow2 : 1 === n ? t.text1 : t.green1
        }),
        Im = He.default.button(
          hm(),
          function(e) {
            return e.theme.bg2
          },
          function(e) {
            return e.theme.text2
          },
          function(e) {
            return e.theme.bg3
          },
          function(e) {
            return e.theme.bg3
          }
        ),
        Sm = Object(He.default)(Tr.b)(vm()),
        Nm = He.default.span(bm()),
        Rm = He.default.div(
          fm(),
          function(e) {
            var t = e.theme
            return Object(Ke.d)(0.9, t.red1)
          },
          function(e) {
            return e.theme.red1
          }
        ),
        Um = He.default.div(pm(), function(e) {
          var t = e.theme
          return Object(Ke.d)(0.9, t.red1)
        })
      function Bm(e) {
        var t = e.error
        return i.a.createElement(
          Rm,
          null,
          i.a.createElement(Um, null, i.a.createElement(sm.a, { size: 24 })),
          i.a.createElement('p', null, t)
        )
      }
      var Lm = Object(He.default)(bt)(
        mm(),
        function(e) {
          var t = e.theme
          return Object(Ke.d)(0.9, t.primary1)
        },
        function(e) {
          return e.theme.primary1
        }
      )
      He.default.div(dm(), function(e) {
        return e.theme.bg2
      })
      function Wm(e) {
        var t,
          n,
          a =
            null === (t = Kn(Ma(null === e || void 0 === e ? void 0 : e.address, !1), 'totalSupply')) ||
            void 0 === t ||
            null === (n = t.result) ||
            void 0 === n
              ? void 0
              : n[0]
        return e && a ? new v.m(e, a.toString()) : void 0
      }
      function zm(e, t, n, a, r, o) {
        if (t.gt(a)) {
          if (t.gte(r)) return v.f.add(e, v.f.BigInt(n))
          if (('number' === typeof o && t.gte(o)) || 'undefined' === typeof o)
            return v.f.add(
              e,
              v.f.divide(
                v.f.multiply(v.f.BigInt(n), v.f.BigInt(t.sub(a).toString())),
                v.f.subtract(v.f.BigInt(r), v.f.BigInt(a))
              )
            )
        }
        return e
      }
      function Mm(e) {
        var t = Le().chainId,
          n = wc(e, t),
          a = Sc(
            Object(o.useMemo)(
              function() {
                return [
                  [t && n && Object(v.q)(v.p[t], n) ? void 0 : e, t ? v.p[t] : void 0],
                  [(null === n || void 0 === n ? void 0 : n.equals(re)) ? void 0 : n, t === v.a.MAINNET ? re : void 0],
                  [t ? v.p[t] : void 0, t === v.a.MAINNET ? re : void 0]
                ]
              },
              [t, e, n]
            )
          ),
          r = Object(A.a)(a, 3),
          i = Object(A.a)(r[0], 2),
          c = i[0],
          u = i[1],
          l = Object(A.a)(r[1], 2),
          s = l[0],
          d = l[1],
          m = Object(A.a)(r[2], 2),
          p = m[0],
          f = m[1]
        return Object(o.useMemo)(
          function() {
            if (e && n && t)
              if (n.equals(v.p[t])) {
                if (d) {
                  var a = d.priceOf(v.p[t])
                  return new v.i(e, re, a.denominator, a.numerator)
                }
              } else {
                if (n.equals(re)) return new v.i(re, re, '1', '1')
                var r = null === u || void 0 === u ? void 0 : u.reserveOf(v.p[t]),
                  o = r && f ? f.priceOf(v.p[t]).quote(r).raw : v.f.BigInt(0)
                if (s === Cc.EXISTS && d && d.reserveOf(re).greaterThan(o)) {
                  var i = d.priceOf(n)
                  return new v.i(e, re, i.denominator, i.numerator)
                }
                if (
                  c === Cc.EXISTS &&
                  u &&
                  p === Cc.EXISTS &&
                  f &&
                  f.reserveOf(re).greaterThan('0') &&
                  u.reserveOf(v.p[t]).greaterThan('0')
                ) {
                  var l = f.priceOf(re),
                    m = u.priceOf(v.p[t]),
                    b = l.multiply(m).invert()
                  return new v.i(e, re, b.denominator, b.numerator)
                }
              }
          },
          [t, e, u, c, f, p, d, s, n]
        )
      }
      function Pm() {
        var e = Object(Ve.a)([
          '\n  position: absolute;\n  right: 16px;\n  top: 16px;\n\n  :hover {\n    cursor: pointer;\n  }\n'
        ])
        return (
          (Pm = function() {
            return e
          }),
          e
        )
      }
      function Dm() {
        var e = Object(Ve.a)([
          '\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #008b8a 0%, #021d43 100%);\n  padding: 0.5rem;\n'
        ])
        return (
          (Dm = function() {
            return e
          }),
          e
        )
      }
      function Fm() {
        var e = Object(Ve.a)(['\n  width: 100%;\n'])
        return (
          (Fm = function() {
            return e
          }),
          e
        )
      }
      var qm,
        Vm = Object(He.default)(bt)(Fm()),
        Ym = Object(He.default)(St)(Dm()),
        Hm = Object(He.default)(Cr.a)(Pm())
      function Qm(e) {
        var t,
          n,
          a = e.setShowUniBalanceModal,
          r = Le(),
          c = r.account,
          u = r.chainId,
          l = u ? de[u] : void 0,
          s = du(),
          d = uu(null !== c && void 0 !== c ? c : void 0, l),
          m = ru(),
          p = Wm(l),
          f = Mm(l),
          b = tu(),
          h = uu(null === (t = Va()) || void 0 === t ? void 0 : t.address, l),
          g = Object(o.useMemo)(
            function() {
              return b && l && u === v.a.MAINNET
                ? (function(e, t, n) {
                    var a = v.f.BigInt(15e7)
                    ;(a = zm(a, t, 2e7, 1600387200, 1605571200)),
                      (a = zm(a, t, 172e6, 1600387200, 1631923200, 1602979200)),
                      (a = zm(a, t, 129e5, 1631923200, 1663459200)),
                      (a = zm(a, t, 86e5, 1663459200, 1694995200)),
                      (a = zm(a, t, 43e5, 1694995200, 1726531200)),
                      (a = zm(a, t, 16e7, 1600387200, 1631923200, 1602979200)),
                      (a = zm(a, t, 12e6, 1631923200, 1663459200)),
                      (a = zm(a, t, 8e6, 1663459200, 1694995200)),
                      (a = zm(a, t, 4e6, 1694995200, 1726531200))
                    var r = new v.m(e, v.f.multiply(a, v.f.exponentiate(v.f.BigInt(10), v.f.BigInt(18))))
                    return n ? r.subtract(n) : r
                  })(l, b, h)
                : p
            },
            [b, u, p, h, l]
          )
        return i.a.createElement(
          Vm,
          { gap: 'lg' },
          i.a.createElement(
            Ym,
            null,
            i.a.createElement(Nt, null),
            i.a.createElement(Ut, null),
            i.a.createElement(
              Bt,
              { gap: 'md' },
              i.a.createElement(
                Vt,
                null,
                i.a.createElement(Bo, { color: 'white' }, 'Your UNI Breakdown'),
                i.a.createElement(Hm, {
                  stroke: 'white',
                  onClick: function() {
                    return a(!1)
                  }
                })
              )
            ),
            i.a.createElement(Lt, null),
            c &&
              i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(
                  Bt,
                  { gap: 'sm' },
                  i.a.createElement(
                    bt,
                    { gap: 'md', justify: 'center' },
                    i.a.createElement(so, { width: '48px', src: Ni.a }),
                    ' ',
                    i.a.createElement(
                      Bo,
                      { fontSize: 48, fontWeight: 600, color: 'white' },
                      null === s || void 0 === s ? void 0 : s.toFixed(2, { groupSeparator: ',' })
                    )
                  ),
                  i.a.createElement(
                    bt,
                    { gap: 'md' },
                    i.a.createElement(
                      Vt,
                      null,
                      i.a.createElement(Bo, { color: 'white' }, 'Balance:'),
                      i.a.createElement(
                        Bo,
                        { color: 'white' },
                        null === d || void 0 === d ? void 0 : d.toFixed(2, { groupSeparator: ',' })
                      )
                    ),
                    i.a.createElement(
                      Vt,
                      null,
                      i.a.createElement(Bo, { color: 'white' }, 'Unclaimed:'),
                      i.a.createElement(
                        Bo,
                        { color: 'white' },
                        null === m || void 0 === m ? void 0 : m.toFixed(4, { groupSeparator: ',' }),
                        ' ',
                        m &&
                          m.greaterThan('0') &&
                          i.a.createElement(
                            ro,
                            {
                              onClick: function() {
                                return a(!1)
                              },
                              to: '/uni'
                            },
                            '(claim)'
                          )
                      )
                    )
                  )
                ),
                i.a.createElement(Lt, null)
              ),
            i.a.createElement(
              Bt,
              { gap: 'sm' },
              i.a.createElement(
                bt,
                { gap: 'md' },
                i.a.createElement(
                  Vt,
                  null,
                  i.a.createElement(Bo, { color: 'white' }, 'UNI price:'),
                  i.a.createElement(
                    Bo,
                    { color: 'white' },
                    '$',
                    null !== (n = null === f || void 0 === f ? void 0 : f.toFixed(2)) && void 0 !== n ? n : '-'
                  )
                ),
                i.a.createElement(
                  Vt,
                  null,
                  i.a.createElement(Bo, { color: 'white' }, 'UNI in circulation:'),
                  i.a.createElement(
                    Bo,
                    { color: 'white' },
                    null === g || void 0 === g ? void 0 : g.toFixed(0, { groupSeparator: ',' })
                  )
                ),
                i.a.createElement(
                  Vt,
                  null,
                  i.a.createElement(Bo, { color: 'white' }, 'Total Supply'),
                  i.a.createElement(
                    Bo,
                    { color: 'white' },
                    null === p || void 0 === p ? void 0 : p.toFixed(0, { groupSeparator: ',' })
                  )
                ),
                l && l.chainId === v.a.MAINNET
                  ? i.a.createElement(
                      mo,
                      { href: 'https://uniswap.info/token/'.concat(l.address) },
                      'View UNI Analytics'
                    )
                  : null
              )
            )
          )
        )
      }
      function Xm() {
        var e = Object(Ve.a)([
          '\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  margin: 0;\n  padding: 0;\n  height: 35px;\n  background-color: ',
          ';\n  margin-left: 8px;\n  padding: 0.15rem 0.5rem;\n  border-radius: 0.5rem;\n\n  :hover,\n  :focus {\n    cursor: pointer;\n    outline: none;\n    background-color: ',
          ';\n  }\n\n  svg {\n    margin-top: 2px;\n  }\n  > * {\n    stroke: ',
          ';\n  }\n'
        ])
        return (
          (Xm = function() {
            return e
          }),
          e
        )
      }
      function Jm() {
        var e = Object(Ve.a)(['\n      display: none;\n'])
        return (
          (Jm = function() {
            return e
          }),
          e
        )
      }
      function Gm() {
        var e = Object(Ve.a)([
          '\n  ',
          '\n  align-items: left;\n  border-radius: 3rem;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  color: ',
          ';\n  font-size: 1rem;\n  width: fit-content;\n  margin: 0 12px;\n  font-weight: 500;\n\n  &.',
          ' {\n    border-radius: 12px;\n    font-weight: 600;\n    color: ',
          ';\n  }\n\n  :hover,\n  :focus {\n    color: ',
          ';\n  }\n\n  ',
          '\n'
        ])
        return (
          (Gm = function() {
            return e
          }),
          e
        )
      }
      function Km() {
        var e = Object(Ve.a)([
          '\n  ',
          '\n  align-items: left;\n  border-radius: 3rem;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  color: ',
          ';\n  font-size: 1rem;\n  width: fit-content;\n  margin: 0 12px;\n  font-weight: 500;\n\n  &.',
          ' {\n    border-radius: 12px;\n    font-weight: 600;\n    color: ',
          ';\n  }\n\n  :hover,\n  :focus {\n    color: ',
          ';\n  }\n'
        ])
        return (
          (Km = function() {
            return e
          }),
          e
        )
      }
      function Zm() {
        var e = Object(Ve.a)(['\n  transition: transform 0.3s ease;\n  :hover {\n    transform: rotate(-5deg);\n  }\n'])
        return (
          (Zm = function() {
            return e
          }),
          e
        )
      }
      function _m() {
        var e = Object(Ve.a)(['\n    justify-self: center;\n  '])
        return (
          (_m = function() {
            return e
          }),
          e
        )
      }
      function $m() {
        var e = Object(Ve.a)([
          '\n  display: flex;\n  align-items: center;\n  pointer-events: auto;\n  justify-self: flex-start;\n  margin-right: 12px;\n  ',
          ';\n  :hover {\n    cursor: pointer;\n  }\n'
        ])
        return (
          ($m = function() {
            return e
          }),
          e
        )
      }
      function ep() {
        var e = Object(Ve.a)(['\n    display: none;\n  '])
        return (
          (ep = function() {
            return e
          }),
          e
        )
      }
      function tp() {
        var e = Object(Ve.a)(['\n  ', ';\n'])
        return (
          (tp = function() {
            return e
          }),
          e
        )
      }
      function np() {
        var e = Object(Ve.a)([
          '\n    margin: 0;\n    margin-right: 0.5rem;\n    width: initial;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    flex-shrink: 1;\n  '
        ])
        return (
          (np = function() {
            return e
          }),
          e
        )
      }
      function ap() {
        var e = Object(Ve.a)(['\n  border-radius: 12px;\n  padding: 8px 12px;\n  ', ';\n'])
        return (
          (ap = function() {
            return e
          }),
          e
        )
      }
      function rp() {
        var e = Object(Ve.a)(['\n    display: none;\n  '])
        return (
          (rp = function() {
            return e
          }),
          e
        )
      }
      function op() {
        var e = Object(Ve.a)(['\n  ', ';\n'])
        return (
          (op = function() {
            return e
          }),
          e
        )
      }
      function ip() {
        var e = Object(Ve.a)([
          '\n  width: fit-content;\n  position: relative;\n  cursor: pointer;\n\n  :hover {\n    opacity: 0.8;\n  }\n\n  :active {\n    opacity: 0.9;\n  }\n'
        ])
        return (
          (ip = function() {
            return e
          }),
          e
        )
      }
      function cp() {
        var e = Object(Ve.a)([
          '\n  color: white;\n  padding: 4px 8px;\n  height: 36px;\n  font-weight: 500;\n  background-color: ',
          ';\n  background: radial-gradient(174.47% 188.91% at 1.84% 0%, #008b8a 0%, #008b8a 100%), #edeef2;\n'
        ])
        return (
          (cp = function() {
            return e
          }),
          e
        )
      }
      function up() {
        var e = Object(Ve.a)([
          '\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background-color: ',
          ';\n  border-radius: 12px;\n  white-space: nowrap;\n  width: 100%;\n  cursor: pointer;\n\n  :focus {\n    border: 1px solid blue;\n  }\n'
        ])
        return (
          (up = function() {
            return e
          }),
          e
        )
      }
      function lp() {
        var e = Object(Ve.a)(['\n    padding: 1rem 0 1rem 1rem;\n    justify-content: flex-end;\n'])
        return (
          (lp = function() {
            return e
          }),
          e
        )
      }
      function sp() {
        var e = Object(Ve.a)(['\n  justify-content: center;\n  ', ';\n'])
        return (
          (sp = function() {
            return e
          }),
          e
        )
      }
      function dp() {
        var e = Object(Ve.a)(['\n   width: 100%;\n  '])
        return (
          (dp = function() {
            return e
          }),
          e
        )
      }
      function mp() {
        var e = Object(Ve.a)(['\n  ', ';\n'])
        return (
          (mp = function() {
            return e
          }),
          e
        )
      }
      function pp() {
        var e = Object(Ve.a)(['\n  display: flex;\n  align-items: center;\n'])
        return (
          (pp = function() {
            return e
          }),
          e
        )
      }
      function fp() {
        var e = Object(Ve.a)(['\n   flex-direction: row-reverse;\n    align-items: center;\n  '])
        return (
          (fp = function() {
            return e
          }),
          e
        )
      }
      function bp() {
        var e = Object(Ve.a)(['\n  display: flex;\n  align-items: center;\n  gap: 8px;\n\n  ', ';\n'])
        return (
          (bp = function() {
            return e
          }),
          e
        )
      }
      function vp() {
        var e = Object(Ve.a)([
          '\n    flex-direction: row;\n    justify-content: space-between;\n    justify-self: center;\n    width: 100%;\n    max-width: 960px;\n    padding: 1rem;\n    position: fixed;\n    bottom: 0px;\n    left: 0px;\n    width: 100%;\n    z-index: 99;\n    height: 72px;\n    border-radius: 12px 12px 0 0;\n    background-color: ',
          ';\n  '
        ])
        return (
          (vp = function() {
            return e
          }),
          e
        )
      }
      function hp() {
        var e = Object(Ve.a)([
          '\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-self: flex-end;\n\n  ',
          ';\n'
        ])
        return (
          (hp = function() {
            return e
          }),
          e
        )
      }
      function gp() {
        var e = Object(Ve.a)(['\n        padding: 0.5rem 1rem;\n  '])
        return (
          (gp = function() {
            return e
          }),
          e
        )
      }
      function yp() {
        var e = Object(Ve.a)([
          '\n    grid-template-columns: 1fr;\n    padding: 0 1rem;\n    width: calc(100%);\n    position: relative;\n  '
        ])
        return (
          (yp = function() {
            return e
          }),
          e
        )
      }
      function Ep() {
        var e = Object(Ve.a)([
          '\n  display: grid;\n  grid-template-columns: 1fr 120px;\n  align-items: center;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n  width: 100%;\n  top: 0;\n  position: relative;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 1rem;\n  z-index: 2;\n  ',
          ';\n\n  ',
          '\n'
        ])
        return (
          (Ep = function() {
            return e
          }),
          e
        )
      }
      var xp = He.default.div(
          Ep(),
          function(e) {
            return e.theme.mediaWidth.upToMedium(yp())
          },
          function(e) {
            return e.theme.mediaWidth.upToExtraSmall(gp())
          }
        ),
        Op = He.default.div(hp(), function(e) {
          return e.theme.mediaWidth.upToMedium(vp(), function(e) {
            return e.theme.bg1
          })
        }),
        jp = He.default.div(bp(), function(e) {
          return e.theme.mediaWidth.upToMedium(fp())
        }),
        Ap = He.default.div(pp()),
        wp = Object(He.default)(Qt)(mp(), function(e) {
          return e.theme.mediaWidth.upToMedium(dp())
        }),
        kp = Object(He.default)(Xt)(sp(), function(e) {
          return e.theme.mediaWidth.upToMedium(lp())
        }),
        Tp = He.default.div(up(), function(e) {
          var t = e.theme
          return e.active ? t.bg3 : t.bg1
        }),
        Cp = Object(He.default)(Tp)(cp(), function(e) {
          return e.theme.bg3
        }),
        Ip = He.default.span(ip()),
        Sp = He.default.span(op(), function(e) {
          return e.theme.mediaWidth.upToSmall(rp())
        }),
        Np = Object(He.default)(Au)(ap(), function(e) {
          return e.theme.mediaWidth.upToSmall(np())
        }),
        Rp = Object(He.default)(Tr.b)(tp(), function(e) {
          return e.theme.mediaWidth.upToExtraSmall(ep())
        }),
        Up = He.default.a($m(), function(e) {
          return e.theme.mediaWidth.upToSmall(_m())
        }),
        Bp = He.default.div(Zm()),
        Lp = Object(He.default)(m.c).attrs({ activeClassName: 'ACTIVE' })(
          Km(),
          function(e) {
            return e.theme.flexRowNoWrap
          },
          function(e) {
            return e.theme.text2
          },
          'ACTIVE',
          function(e) {
            return e.theme.text1
          },
          function(e) {
            var t = e.theme
            return Object(Ke.a)(0.1, t.text1)
          }
        ),
        Wp = Object(He.default)(mo).attrs({ activeClassName: 'ACTIVE' })(
          Gm(),
          function(e) {
            return e.theme.flexRowNoWrap
          },
          function(e) {
            return e.theme.text2
          },
          'ACTIVE',
          function(e) {
            return e.theme.text1
          },
          function(e) {
            var t = e.theme
            return Object(Ke.a)(0.1, t.text1)
          },
          function(e) {
            return e.theme.mediaWidth.upToExtraSmall(Jm())
          }
        ),
        zp = He.default.button(
          Xm(),
          function(e) {
            return e.theme.bg3
          },
          function(e) {
            return e.theme.bg4
          },
          function(e) {
            return e.theme.text1
          }
        ),
        Mp =
          ((qm = {}),
          Object(b.a)(qm, v.a.RINKEBY, 'Rinkeby'),
          Object(b.a)(qm, v.a.ROPSTEN, 'Ropsten'),
          Object(b.a)(qm, v.a.GÖRLI, 'G\xf6rli'),
          Object(b.a)(qm, v.a.KOVAN, 'Kovan'),
          Object(b.a)(qm, v.a.TBNB, 'TBNB'),
          Object(b.a)(qm, v.a.KCB, 'KCB'),
          Object(b.a)(qm, v.a.ETPOSCHAINTESTNET, 'ETPOSCHAINTESTNET'),
          qm)
      function Pp() {
        var e,
          t = Le(),
          n = t.account,
          a = t.chainId,
          r = Object(Me.b)().t,
          c = null === (e = ou(n ? [n] : [])) || void 0 === e ? void 0 : e[null !== n && void 0 !== n ? n : ''],
          u = (function() {
            var e = Object(d.c)(),
              t = hr(),
              n = Object(o.useCallback)(
                function() {
                  e(or({ userDarkMode: !t }))
                },
                [t, e]
              )
            return [t, n]
          })(),
          l = Object(A.a)(u, 2),
          s = l[0],
          m = l[1],
          p = Cn(),
          f = Ti(n),
          b = Ai(null !== n && void 0 !== n ? n : void 0).claimTxn,
          v = du(),
          h = Object(o.useState)(!1),
          g = Object(A.a)(h, 2),
          y = g[0],
          E = g[1],
          x = Tn()
        return i.a.createElement(
          xp,
          null,
          i.a.createElement(lm, null),
          i.a.createElement(
            lt,
            {
              isOpen: y,
              onDismiss: function() {
                return E(!1)
              }
            },
            i.a.createElement(Qm, { setShowUniBalanceModal: E })
          ),
          i.a.createElement(
            wp,
            null,
            i.a.createElement(
              Up,
              { href: '.' },
              i.a.createElement(Bp, null, i.a.createElement('img', { width: '24px', src: sc.a, alt: 'logo' }))
            ),
            i.a.createElement(
              kp,
              null,
              i.a.createElement(Lp, { id: 'swap-nav-link', to: '/swap' }, r('swap')),
              i.a.createElement(
                Lp,
                {
                  id: 'pool-nav-link',
                  to: '/pool',
                  isActive: function(e, t) {
                    var n = t.pathname
                    return (
                      Boolean(e) ||
                      n.startsWith('/add') ||
                      n.startsWith('/remove') ||
                      n.startsWith('/create') ||
                      n.startsWith('/find')
                    )
                  }
                },
                r('pool')
              ),
              i.a.createElement(Lp, { id: 'stake-nav-link', to: '/uni' }),
              i.a.createElement(Lp, { id: 'stake-nav-link', to: '/vote' }),
              i.a.createElement(
                Wp,
                { id: 'stake-nav-link', href: 'https://uniswap.info' },
                i.a.createElement('span', { style: { fontSize: '11px' } })
              )
            )
          ),
          i.a.createElement(
            Op,
            null,
            i.a.createElement(
              jp,
              null,
              i.a.createElement(Sp, null, a && Mp[a] && i.a.createElement(Np, { title: Mp[a] }, Mp[a])),
              f &&
                !x &&
                i.a.createElement(
                  Ip,
                  { onClick: p },
                  i.a.createElement(
                    Cp,
                    { active: !!n && !f, style: { pointerEvents: 'auto' } },
                    i.a.createElement(
                      Bo,
                      { padding: '0 2px' },
                      b && !(null === b || void 0 === b ? void 0 : b.receipt)
                        ? i.a.createElement(Nm, null, 'Claiming UNI')
                        : 'Claim UNI'
                    )
                  ),
                  i.a.createElement(Ut, null)
                ),
              !f && v && i.a.createElement('h1', { style: { paddingRight: '.4rem' } }, ':'),
              i.a.createElement(
                Tp,
                { active: !!n, style: { pointerEvents: 'auto' } },
                n && c
                  ? i.a.createElement(
                      Rp,
                      { style: { flexShrink: 0 }, pl: '0.75rem', pr: '0.5rem', fontWeight: 500 },
                      null === c || void 0 === c ? void 0 : c.toSignificant(4),
                      ' ETPOS'
                    )
                  : null,
                i.a.createElement(em, null)
              )
            ),
            i.a.createElement(
              Ap,
              null,
              i.a.createElement(
                zp,
                {
                  onClick: function() {
                    return m()
                  }
                },
                s ? i.a.createElement(Cu.a, { size: 20 }) : i.a.createElement(Iu.a, { size: 20 })
              ),
              i.a.createElement(_u, null)
            )
          )
        )
      }
      function Dp() {
        var e = Object(Ve.a)([
          '\n  animation: ',
          ' 1s cubic-bezier(0.83, 0, 0.17, 1) infinite;\n  transform: translateZ(0);\n\n  border-top: 1px solid transparent;\n  border-right: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  border-left: 2px solid ',
          ';\n  background: transparent;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  position: relative;\n\n  left: -3px;\n  top: -3px;\n'
        ])
        return (
          (Dp = function() {
            return e
          }),
          e
        )
      }
      function Fp() {
        var e = Object(Ve.a)([
          '\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n'
        ])
        return (
          (Fp = function() {
            return e
          }),
          e
        )
      }
      function qp() {
        var e = Object(Ve.a)([
          '\n  width: 8px;\n  height: 8px;\n  min-height: 8px;\n  min-width: 8px;\n  margin-left: 0.5rem;\n  margin-top: 3px;\n  border-radius: 50%;\n  position: relative;\n  background-color: ',
          ';\n'
        ])
        return (
          (qp = function() {
            return e
          }),
          e
        )
      }
      function Vp() {
        var e = Object(Ve.a)(['\n    display: none;\n  '])
        return (
          (Vp = function() {
            return e
          }),
          e
        )
      }
      function Yp() {
        var e = Object(Ve.a)([
          '\n  position: fixed;\n  display: flex;\n  right: 0;\n  bottom: 0;\n  padding: 1rem;\n  color: white;\n  transition: opacity 0.25s ease;\n  color: ',
          ';\n  :hover {\n    opacity: 1;\n  }\n\n  ',
          '\n'
        ])
        return (
          (Yp = function() {
            return e
          }),
          e
        )
      }
      var Hp = He.default.div(
          Yp(),
          function(e) {
            return e.theme.green1
          },
          function(e) {
            return e.theme.mediaWidth.upToMedium(Vp())
          }
        ),
        Qp = He.default.div(qp(), function(e) {
          return e.theme.green1
        }),
        Xp = Object(He.keyframes)(Fp()),
        Jp = He.default.div(Dp(), Xp, function(e) {
          return e.theme.green1
        })
      function Gp() {
        var e = Le().chainId,
          t = On(),
          n = Object(o.useState)(!0),
          a = Object(A.a)(n, 2),
          r = a[0],
          c = a[1]
        return (
          Object(o.useEffect)(
            function() {
              var e = setTimeout(function() {
                return c(!0)
              }, 1e3)
              return function() {
                c(!1), clearTimeout(e)
              }
            },
            [t]
          ),
          i.a.createElement(
            mo,
            { href: e && t ? ra(e, t.toString(), 'block') : '' },
            i.a.createElement(
              Hp,
              null,
              i.a.createElement(Po, { style: { opacity: r ? '0.2' : '0.6' } }, t),
              i.a.createElement(Qp, null, !r && i.a.createElement(Jp, null))
            )
          )
        )
      }
      function Kp() {
        var e = Object(Ve.a)(['\n  :hover {\n    cursor: pointer;\n  }\n'])
        return (
          (Kp = function() {
            return e
          }),
          e
        )
      }
      function Zp() {
        var e = Object(Ve.a)([
          '\n  width: 100%;\n  padding: 6px 6px;\n  background-color: ',
          ';\n  color: white;\n  font-size: 11px;\n  justify-content: space-between;\n  align-items: center;\n  display: ',
          ';\n'
        ])
        return (
          (Zp = function() {
            return e
          }),
          e
        )
      }
      var _p = He.default.div(
          Zp(),
          function(e) {
            return e.theme.blue1
          },
          function(e) {
            return e.isActive ? 'flex' : 'none'
          }
        ),
        $p = Object(He.default)(Cr.a)(Kp())
      function ef() {
        var e = (function() {
            var e = Object(d.c)()
            return Object(o.useCallback)(
              function() {
                return e(fr())
              },
              [e]
            )
          })(),
          t = wr()
        return c.isMobile
          ? i.a.createElement(
              _p,
              { isActive: t },
              i.a.createElement(
                'div',
                { style: { display: 'flex' } },
                i.a.createElement(sm.a, { style: { marginRight: 6 }, size: 12 }),
                ' Make sure the URL is',
                i.a.createElement(
                  'code',
                  { style: { padding: '0 4px', display: 'inline', fontWeight: 'bold' } },
                  'app.uniswap.org'
                )
              ),
              i.a.createElement($p, { size: 12, onClick: e })
            )
          : 'app.uniswap.org' === window.location.hostname
          ? i.a.createElement(
              _p,
              { isActive: t },
              i.a.createElement(
                'div',
                { style: { display: 'flex' } },
                i.a.createElement(sm.a, { style: { marginRight: 6 }, size: 12 }),
                ' Always make sure the URL is',
                i.a.createElement(
                  'code',
                  { style: { padding: '0 4px', display: 'inline', fontWeight: 'bold' } },
                  'app.uniswap.org'
                ),
                ' - bookmark it to be safe.'
              ),
              i.a.createElement($p, { size: 12, onClick: e })
            )
          : null
      }
      var tf = n(70),
        nf = {
          pending: Object(hn.b)('lists/fetchTokenList/pending'),
          fulfilled: Object(hn.b)('lists/fetchTokenList/fulfilled'),
          rejected: Object(hn.b)('lists/fetchTokenList/rejected')
        },
        af = Object(hn.b)('lists/addList'),
        rf = Object(hn.b)('lists/removeList'),
        of = Object(hn.b)('lists/enableList'),
        cf = Object(hn.b)('lists/disableList'),
        uf = Object(hn.b)('lists/acceptListUpdate')
      Object(hn.b)('lists/rejectVersionUpdate')
      function lf(e) {
        return 'v'
          .concat(e.major, '.')
          .concat(e.minor, '.')
          .concat(e.patch)
      }
      function sf() {
        var e = Object(Ve.a)(['\n  max-height: 400px;\n  overflow: auto;\n'])
        return (
          (sf = function() {
            return e
          }),
          e
        )
      }
      var df = He.default.ul(sf())
      function mf(e) {
        var t = e.popKey,
          n = e.listUrl,
          a = e.oldList,
          r = e.newList,
          c = e.auto,
          u = Sn(),
          l = Object(o.useCallback)(
            function() {
              return u(t)
            },
            [t, u]
          ),
          m = Object(d.c)(),
          p = Object(o.useCallback)(
            function() {
              c || (s.a.event({ category: 'Lists', action: 'Update List from Popup', label: n }), m(uf(n)), l())
            },
            [c, m, n, l]
          ),
          f = Object(o.useMemo)(
            function() {
              return Object(tf.b)(a.tokens, r.tokens)
            },
            [r.tokens, a.tokens]
          ),
          b = f.added,
          v = f.changed,
          h = f.removed,
          g = Object(o.useMemo)(
            function() {
              return Object.keys(v).reduce(function(e, t) {
                return e + Object.keys(v[t]).length
              }, 0)
            },
            [v]
          )
        return i.a.createElement(
          Ht,
          null,
          i.a.createElement(
            bt,
            { style: { flex: '1' }, gap: '8px' },
            c
              ? i.a.createElement(
                  Lo,
                  { fontWeight: 500 },
                  'The token list "',
                  a.name,
                  '" has been updated to',
                  ' ',
                  i.a.createElement('strong', null, lf(r.version)),
                  '.'
                )
              : i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(
                    'div',
                    null,
                    i.a.createElement(
                      Tr.b,
                      null,
                      'An update is available for the token list "',
                      a.name,
                      '" (',
                      lf(a.version),
                      ' to ',
                      lf(r.version),
                      ').'
                    ),
                    i.a.createElement(
                      df,
                      null,
                      b.length > 0
                        ? i.a.createElement(
                            'li',
                            null,
                            b.map(function(e, t) {
                              return i.a.createElement(
                                i.a.Fragment,
                                { key: ''.concat(e.chainId, '-').concat(e.address) },
                                i.a.createElement('strong', { title: e.address }, e.symbol),
                                t === b.length - 1 ? null : ', '
                              )
                            }),
                            ' ',
                            'added'
                          )
                        : null,
                      h.length > 0
                        ? i.a.createElement(
                            'li',
                            null,
                            h.map(function(e, t) {
                              return i.a.createElement(
                                i.a.Fragment,
                                { key: ''.concat(e.chainId, '-').concat(e.address) },
                                i.a.createElement('strong', { title: e.address }, e.symbol),
                                t === h.length - 1 ? null : ', '
                              )
                            }),
                            ' ',
                            'removed'
                          )
                        : null,
                      g > 0 ? i.a.createElement('li', null, g, ' tokens updated') : null
                    )
                  ),
                  i.a.createElement(
                    Ht,
                    null,
                    i.a.createElement(
                      'div',
                      { style: { flexGrow: 1, marginRight: 12 } },
                      i.a.createElement(ui, { onClick: p }, 'Accept update')
                    ),
                    i.a.createElement(
                      'div',
                      { style: { flexGrow: 1 } },
                      i.a.createElement(ui, { onClick: l }, 'Dismiss')
                    )
                  )
                )
          )
        )
      }
      var pf = n(766)
      function ff() {
        var e = Object(Ve.a)(['\n  flex-wrap: nowrap;\n'])
        return (
          (ff = function() {
            return e
          }),
          e
        )
      }
      var bf = Object(He.default)(Ht)(ff())
      function vf(e) {
        var t = e.hash,
          n = e.success,
          a = e.summary,
          r = Le().chainId,
          c = Object(o.useContext)(He.ThemeContext)
        return i.a.createElement(
          bf,
          null,
          i.a.createElement(
            'div',
            { style: { paddingRight: 16 } },
            n
              ? i.a.createElement(Sl.a, { color: c.green1, size: 24 })
              : i.a.createElement(pf.a, { color: c.red1, size: 24 })
          ),
          i.a.createElement(
            bt,
            { gap: '8px' },
            i.a.createElement(
              Lo,
              { fontWeight: 500 },
              null !== a && void 0 !== a ? a : 'Hash: ' + t.slice(0, 8) + '...' + t.slice(58, 65)
            ),
            r && i.a.createElement(mo, { href: ra(r, t, 'transaction') }, 'View on  scan.kbcfoundation.com')
          )
        )
      }
      function hf() {
        var e = Object(Ve.a)([
          '\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 2px;\n  background-color: ',
          ';\n'
        ])
        return (
          (hf = function() {
            return e
          }),
          e
        )
      }
      function gf() {
        var e = Object(Ve.a)([
          '\n    min-width: 290px;\n    &:not(:last-of-type) {\n      margin-right: 20px;\n    }\n  '
        ])
        return (
          (gf = function() {
            return e
          }),
          e
        )
      }
      function yf() {
        var e = Object(Ve.a)([
          '\n  display: inline-block;\n  width: 100%;\n  padding: 1em;\n  background-color: ',
          ';\n  position: relative;\n  border-radius: 10px;\n  padding: 20px;\n  padding-right: 35px;\n  overflow: hidden;\n\n  ',
          '\n'
        ])
        return (
          (yf = function() {
            return e
          }),
          e
        )
      }
      function Ef() {
        var e = Object(Ve.a)([
          '\n  position: absolute;\n  right: 10px;\n  top: 10px;\n\n  :hover {\n    cursor: pointer;\n  }\n'
        ])
        return (
          (Ef = function() {
            return e
          }),
          e
        )
      }
      var xf = Object(He.default)(Cr.a)(Ef()),
        Of = He.default.div(
          yf(),
          function(e) {
            return e.theme.bg1
          },
          function(e) {
            return e.theme.mediaWidth.upToSmall(gf())
          }
        ),
        jf = He.default.div(hf(), function(e) {
          return e.theme.bg3
        }),
        Af = Object(Je.a)(jf)
      function wf(e) {
        var t = e.removeAfterMs,
          n = e.content,
          a = e.popKey,
          r = Sn(),
          c = Object(o.useCallback)(
            function() {
              return r(a)
            },
            [a, r]
          )
        Object(o.useEffect)(
          function() {
            if (null !== t) {
              var e = setTimeout(function() {
                c()
              }, t)
              return function() {
                clearTimeout(e)
              }
            }
          },
          [t, c]
        )
        var u,
          l = Object(o.useContext)(He.ThemeContext)
        if ('txn' in n) {
          var s = n.txn,
            d = s.hash,
            m = s.success,
            p = s.summary
          u = i.a.createElement(vf, { hash: d, success: m, summary: p })
        } else if ('listUpdate' in n) {
          var f = n.listUpdate,
            b = f.listUrl,
            v = f.oldList,
            h = f.newList,
            g = f.auto
          u = i.a.createElement(mf, { popKey: a, listUrl: b, oldList: v, newList: h, auto: g })
        }
        var y = Object(Je.b)({
          from: { width: '100%' },
          to: { width: '0%' },
          config: { duration: null !== t && void 0 !== t ? t : void 0 }
        })
        return i.a.createElement(
          Of,
          null,
          i.a.createElement(xf, { color: l.text2, onClick: c }),
          u,
          null !== t ? i.a.createElement(Af, { style: y }) : null
        )
      }
      function kf() {
        var e = Object(Ve.a)(['\n  animation: ', ' 5s cubic-bezier(0.83, 0, 0.17, 1) infinite;\n'])
        return (
          (kf = function() {
            return e
          }),
          e
        )
      }
      function Tf() {
        var e = Object(Ve.a)([
          '\n  0% {\n    transform: perspective(1000px) rotateY(0deg);\n  }\n\n  100% {\n    transform: perspective(1000px) rotateY(360deg);\n  }\n'
        ])
        return (
          (Tf = function() {
            return e
          }),
          e
        )
      }
      function Cf() {
        var e = Object(Ve.a)([
          '\n  position: absolute;\n  right: 10px;\n  top: 10px;\n\n  :hover {\n    cursor: pointer;\n  }\n'
        ])
        return (
          (Cf = function() {
            return e
          }),
          e
        )
      }
      function If() {
        var e = Object(Ve.a)([
          '\n  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #021d43 100%);\n  border-radius: 20px;\n  padding: 1.5rem;\n  overflow: hidden;\n  position: relative;\n  max-width: 360px;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n'
        ])
        return (
          (If = function() {
            return e
          }),
          e
        )
      }
      var Sf = Object(He.default)(bt)(If()),
        Nf = Object(He.default)(Cr.a)(Cf()),
        Rf = Object(He.keyframes)(Tf()),
        Uf = He.default.img(kf(), Rf)
      function Bf() {
        var e,
          t = Le().account,
          n = Tn(),
          a = An(bn.CLAIM_POPUP),
          r = jn(bn.SELF_CLAIM),
          c = Cn(),
          u = Ti(t),
          l = Ci(t)
        return (
          Object(o.useEffect)(
            function() {
              u && a()
            },
            [u]
          ),
          i.a.createElement(
            i.a.Fragment,
            null,
            n &&
              !r &&
              i.a.createElement(
                Sf,
                { gap: 'md' },
                i.a.createElement(Nt, null),
                i.a.createElement(Ut, null),
                i.a.createElement(Nf, { stroke: 'white', onClick: a }),
                i.a.createElement(
                  bt,
                  { style: { padding: '2rem 0', zIndex: 10 }, justify: 'center' },
                  i.a.createElement(Uf, { width: '48px', src: Ni.a }),
                  ' ',
                  i.a.createElement(
                    Bo,
                    { style: { marginTop: '1rem' }, fontSize: 36, fontWeight: 600 },
                    null === l || void 0 === l
                      ? void 0
                      : l.toFixed(0, null !== (e = { groupSeparator: ',' }) && void 0 !== e ? e : '-'),
                    ' UNI'
                  ),
                  i.a.createElement(
                    Bo,
                    { style: { paddingTop: '1.25rem', textAlign: 'center' }, fontWeight: 600, color: 'white' },
                    i.a.createElement('span', { role: 'img', 'aria-label': 'party' }, '\ud83c\udf89'),
                    ' ',
                    'UNI has arrived',
                    ' ',
                    i.a.createElement('span', { role: 'img', 'aria-label': 'party' }, '\ud83c\udf89')
                  ),
                  i.a.createElement(
                    Mo,
                    { style: { paddingTop: '0.5rem', textAlign: 'center' }, color: 'white' },
                    'Thanks for being part of the Uniswap community <3'
                  )
                ),
                i.a.createElement(
                  bt,
                  { style: { zIndex: 10 }, justify: 'center' },
                  i.a.createElement(
                    ii,
                    { padding: '8px', borderRadius: '8px', width: 'fit-content', onClick: c },
                    'Claim your UNI tokens'
                  )
                )
              )
          )
        )
      }
      function Lf() {
        var e = Object(Ve.a)(['\n    display: none;\n  '])
        return (
          (Lf = function() {
            return e
          }),
          e
        )
      }
      function Wf() {
        var e = Object(Ve.a)([
          '\n  position: fixed;\n  top: ',
          ';\n  right: 1rem;\n  max-width: 355px !important;\n  width: 100%;\n  z-index: 3;\n\n  ',
          ';\n'
        ])
        return (
          (Wf = function() {
            return e
          }),
          e
        )
      }
      function zf() {
        var e = Object(Ve.a)([
          '\n  height: 99%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: row;\n  -webkit-overflow-scrolling: touch;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n'
        ])
        return (
          (zf = function() {
            return e
          }),
          e
        )
      }
      function Mf() {
        var e = Object(Ve.a)(['\n    display: block;\n  '])
        return (
          (Mf = function() {
            return e
          }),
          e
        )
      }
      function Pf() {
        var e = Object(Ve.a)([
          '\n  position: relative;\n  max-width: 100%;\n  height: ',
          ';\n  margin: ',
          ';\n  margin-bottom: ',
          '};\n\n  display: none;\n  ',
          ';\n'
        ])
        return (
          (Pf = function() {
            return e
          }),
          e
        )
      }
      var Df = He.default.div(
          Pf(),
          function(e) {
            return e.height
          },
          function(e) {
            return e.height ? '0 auto;' : 0
          },
          function(e) {
            return e.height ? '20px' : 0
          },
          function(e) {
            return e.theme.mediaWidth.upToSmall(Mf())
          }
        ),
        Ff = He.default.div(zf()),
        qf = Object(He.default)(bt)(
          Wf(),
          function(e) {
            return e.extraPadding ? '108px' : '88px'
          },
          function(e) {
            return e.theme.mediaWidth.upToSmall(Lf())
          }
        )
      function Vf() {
        var e = (function() {
            var e = Object(d.d)(function(e) {
              return e.application.popupList
            })
            return Object(o.useMemo)(
              function() {
                return e.filter(function(e) {
                  return e.show
                })
              },
              [e]
            )
          })(),
          t = wr()
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            qf,
            { gap: '20px', extraPadding: t },
            i.a.createElement(Bf, null),
            e.map(function(e) {
              return i.a.createElement(wf, {
                key: e.key,
                content: e.content,
                popKey: e.key,
                removeAfterMs: e.removeAfterMs
              })
            })
          ),
          i.a.createElement(
            Df,
            { height: (null === e || void 0 === e ? void 0 : e.length) > 0 ? 'fit-content' : 0 },
            i.a.createElement(
              Ff,
              null,
              e
                .slice(0)
                .reverse()
                .map(function(e) {
                  return i.a.createElement(wf, {
                    key: e.key,
                    content: e.content,
                    popKey: e.key,
                    removeAfterMs: e.removeAfterMs
                  })
                })
            )
          )
        )
      }
      function Yf() {
        var e = Object(Ve.a)(['\n  color: ', ';\n'])
        return (
          (Yf = function() {
            return e
          }),
          e
        )
      }
      function Hf() {
        var e = Object(Ve.a)([
          '\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 20rem;\n'
        ])
        return (
          (Hf = function() {
            return e
          }),
          e
        )
      }
      var Qf = He.default.div(Hf()),
        Xf = He.default.h2(Yf(), function(e) {
          return e.theme.secondary1
        })
      function Jf(e) {
        var t = e.children,
          n = Object(Me.b)().t,
          a = Object(r.d)().active,
          u = Object(r.d)('NETWORK'),
          l = u.active,
          s = u.error,
          d = u.activate,
          m = (function() {
            var e = Object(r.d)(),
              t = e.activate,
              n = e.active,
              a = Object(o.useState)(!1),
              i = Object(A.a)(a, 2),
              u = i[0],
              l = i[1]
            return (
              Object(o.useEffect)(
                function() {
                  G.isAuthorized().then(function(e) {
                    e || (c.isMobile && window.ethereum)
                      ? t(G, void 0, !0).catch(function() {
                          l(!0)
                        })
                      : l(!0)
                  })
                },
                [t]
              ),
              Object(o.useEffect)(
                function() {
                  n && l(!0)
                },
                [n]
              ),
              u
            )
          })()
        Object(o.useEffect)(
          function() {
            !m || l || s || a || d(H)
          },
          [m, l, s, d, a]
        ),
          (function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = Object(r.d)(),
              n = t.active,
              a = t.error,
              i = t.activate
            Object(o.useEffect)(
              function() {
                var t = window.ethereum
                if (t && t.on && !n && !a && !e) {
                  var r = function() {
                      i(G, void 0, !0).catch(function(e) {
                        console.error('Failed to activate after chain changed', e)
                      })
                    },
                    o = function(e) {
                      e.length > 0 &&
                        i(G, void 0, !0).catch(function(e) {
                          console.error('Failed to activate after accounts changed', e)
                        })
                    }
                  return (
                    t.on('chainChanged', r),
                    t.on('accountsChanged', o),
                    function() {
                      t.removeListener && (t.removeListener('chainChanged', r), t.removeListener('accountsChanged', o))
                    }
                  )
                }
              },
              [n, a, e, i]
            )
          })(!m)
        var p = Object(o.useState)(!1),
          f = Object(A.a)(p, 2),
          b = f[0],
          v = f[1]
        return (
          Object(o.useEffect)(function() {
            var e = setTimeout(function() {
              v(!0)
            }, 600)
            return function() {
              clearTimeout(e)
            }
          }, []),
          m
            ? !a && s
              ? i.a.createElement(Qf, null, i.a.createElement(Xf, null, n('unknownError')))
              : a || l
              ? t
              : b
              ? i.a.createElement(Qf, null, i.a.createElement(gl, null))
              : null
            : null
        )
      }
      function Gf(e) {
        var t = e.location.search,
          n = Object(d.c)()
        return (
          Object(o.useEffect)(
            function() {
              if (t && !(t.length < 2)) {
                var e = Object(pc.parse)(t, { parseArrays: !1, ignoreQueryPrefix: !0 }).theme
                'string' === typeof e &&
                  ('light' === e.toLowerCase()
                    ? n(or({ userDarkMode: !1 }))
                    : 'dark' === e.toLowerCase() && n(or({ userDarkMode: !0 })))
              }
            },
            [n, t]
          ),
          null
        )
      }
      var Kf = n(772),
        Zf = n(767)
      function _f() {
        var e = Object(Ve.a)(['\n  padding: 60px 0;\n'])
        return (
          (_f = function() {
            return e
          }),
          e
        )
      }
      function $f() {
        var e = Object(Ve.a)([
          '\n  background-color: ',
          ';\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n'
        ])
        return (
          ($f = function() {
            return e
          }),
          e
        )
      }
      function eb() {
        var e = Object(Ve.a)(['\n  padding: 24px;\n'])
        return (
          (eb = function() {
            return e
          }),
          e
        )
      }
      function tb() {
        var e = Object(Ve.a)(['\n  width: 100%;\n'])
        return (
          (tb = function() {
            return e
          }),
          e
        )
      }
      var nb = He.default.div(tb()),
        ab = Object(He.default)(bt)(eb()),
        rb = Object(He.default)(ab)($f(), function(e) {
          return e.theme.bg2
        }),
        ob = Object(He.default)(ft)(_f())
      function ib(e) {
        var t = e.onDismiss,
          n = e.pendingText
        return i.a.createElement(
          nb,
          null,
          i.a.createElement(
            ab,
            null,
            i.a.createElement(Vt, null, i.a.createElement('div', null), i.a.createElement(to, { onClick: t })),
            i.a.createElement(ob, null, i.a.createElement(go, { src: Ui.a, alt: 'loader', size: '90px' })),
            i.a.createElement(
              bt,
              { gap: '12px', justify: 'center' },
              i.a.createElement(Tr.b, { fontWeight: 500, fontSize: 20 }, 'Waiting For Confirmation'),
              i.a.createElement(
                bt,
                { gap: '12px', justify: 'center' },
                i.a.createElement(Tr.b, { fontWeight: 600, fontSize: 14, color: '', textAlign: 'center' }, n)
              ),
              i.a.createElement(
                Tr.b,
                { fontSize: 12, color: '#565A69', textAlign: 'center' },
                'Confirm this transaction in your wallet'
              )
            )
          )
        )
      }
      function cb(e) {
        var t = e.onDismiss,
          n = e.chainId,
          a = e.hash,
          r = Object(o.useContext)(He.ThemeContext)
        return i.a.createElement(
          nb,
          null,
          i.a.createElement(
            ab,
            null,
            i.a.createElement(Vt, null, i.a.createElement('div', null), i.a.createElement(to, { onClick: t })),
            i.a.createElement(ob, null, i.a.createElement(Zf.a, { strokeWidth: 0.5, size: 90, color: r.primary1 })),
            i.a.createElement(
              bt,
              { gap: '12px', justify: 'center' },
              i.a.createElement(Tr.b, { fontWeight: 500, fontSize: 20 }, 'Transaction Submitted'),
              n &&
                a &&
                i.a.createElement(
                  mo,
                  { href: ra(n, a, 'transaction') },
                  i.a.createElement(
                    Tr.b,
                    { fontWeight: 500, fontSize: 14, color: r.primary1 },
                    'View on scan.kbcfoundation.com'
                  )
                ),
              i.a.createElement(
                ii,
                { onClick: t, style: { margin: '20px 0 0 0' } },
                i.a.createElement(Tr.b, { fontWeight: 500, fontSize: 20 }, 'Close')
              )
            )
          )
        )
      }
      function ub(e) {
        var t = e.title,
          n = e.bottomContent,
          a = e.onDismiss,
          r = e.topContent
        return i.a.createElement(
          nb,
          null,
          i.a.createElement(
            ab,
            null,
            i.a.createElement(
              Vt,
              null,
              i.a.createElement(Tr.b, { fontWeight: 500, fontSize: 20 }, t),
              i.a.createElement(to, { onClick: a })
            ),
            r()
          ),
          i.a.createElement(rb, { gap: '12px' }, n())
        )
      }
      function lb(e) {
        var t = e.message,
          n = e.onDismiss,
          a = Object(o.useContext)(He.ThemeContext)
        return i.a.createElement(
          nb,
          null,
          i.a.createElement(
            ab,
            null,
            i.a.createElement(
              Vt,
              null,
              i.a.createElement(Tr.b, { fontWeight: 500, fontSize: 20 }, 'Error'),
              i.a.createElement(to, { onClick: n })
            ),
            i.a.createElement(
              bt,
              { style: { marginTop: 20, padding: '2rem 0' }, gap: '24px', justify: 'center' },
              i.a.createElement(sm.a, { color: a.red1, style: { strokeWidth: 1.5 }, size: 64 }),
              i.a.createElement(
                Tr.b,
                { fontWeight: 500, fontSize: 16, color: a.red1, style: { textAlign: 'center', width: '85%' } },
                t
              )
            )
          ),
          i.a.createElement(rb, { gap: '12px' }, i.a.createElement(ii, { onClick: n }, 'Dismiss'))
        )
      }
      function sb(e) {
        var t = e.isOpen,
          n = e.onDismiss,
          a = e.attemptingTxn,
          r = e.hash,
          o = e.pendingText,
          c = e.content,
          u = Le().chainId
        return u
          ? i.a.createElement(
              lt,
              { isOpen: t, onDismiss: n, maxHeight: 90 },
              a
                ? i.a.createElement(ib, { onDismiss: n, pendingText: o })
                : r
                ? i.a.createElement(cb, { chainId: u, hash: r, onDismiss: n })
                : c()
            )
          : null
      }
      function db(e, t) {
        var n = Object(o.useState)(t && t(e) ? e : void 0),
          a = Object(A.a)(n, 2),
          r = a[0],
          i = a[1]
        return (
          Object(o.useEffect)(
            function() {
              i(function(n) {
                return !t || t(e) ? e : n
              })
            },
            [t, e]
          ),
          r
        )
      }
      function mb(e) {
        return null !== e && void 0 !== e
      }
      var pb = n(768),
        fb = n(776)
      function bb(e, t) {
        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
          a = Object(o.useRef)()
        Object(o.useEffect)(
          function() {
            a.current = e
          },
          [e]
        ),
          Object(o.useEffect)(
            function() {
              function e() {
                var e = a.current
                e && e()
              }
              if (null !== t) {
                n && e()
                var r = setInterval(e, t)
                return function() {
                  return clearInterval(r)
                }
              }
            },
            [t, n]
          )
      }
      var vb = n(165)
      function hb() {
        var e = Object(Ve.a)([
          "\n  width: 8px;\n  height: 8px;\n  z-index: 9998;\n\n  ::before {\n    position: absolute;\n    width: 8px;\n    height: 8px;\n    z-index: 9998;\n\n    content: '';\n    border: 1px solid ",
          ';\n    transform: rotate(45deg);\n    background: ',
          ';\n  }\n\n  &.arrow-top {\n    bottom: -5px;\n    ::before {\n      border-top: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-bottom {\n    top: -5px;\n    ::before {\n      border-bottom: none;\n      border-right: none;\n    }\n  }\n\n  &.arrow-left {\n    right: -5px;\n\n    ::before {\n      border-bottom: none;\n      border-left: none;\n    }\n  }\n\n  &.arrow-right {\n    left: -5px;\n    ::before {\n      border-right: none;\n      border-top: none;\n    }\n  }\n'
        ])
        return (
          (hb = function() {
            return e
          }),
          e
        )
      }
      function gb() {
        var e = Object(Ve.a)(['\n  display: inline-block;\n'])
        return (
          (gb = function() {
            return e
          }),
          e
        )
      }
      function yb() {
        var e = Object(Ve.a)([
          '\n  z-index: 9999;\n\n  visibility: ',
          ';\n  opacity: ',
          ';\n  transition: visibility 150ms linear, opacity 150ms linear;\n\n  background: ',
          ';\n  border: 1px solid ',
          ';\n  box-shadow: 0 4px 8px 0 ',
          ';\n  color: ',
          ';\n  border-radius: 8px;\n'
        ])
        return (
          (yb = function() {
            return e
          }),
          e
        )
      }
      var Eb = He.default.div(
          yb(),
          function(e) {
            return e.show ? 'visible' : 'hidden'
          },
          function(e) {
            return e.show ? 1 : 0
          },
          function(e) {
            return e.theme.bg2
          },
          function(e) {
            return e.theme.bg3
          },
          function(e) {
            var t = e.theme
            return Object(Ke.d)(0.9, t.shadow1)
          },
          function(e) {
            return e.theme.text2
          }
        ),
        xb = He.default.div(gb()),
        Ob = He.default.div(
          hb(),
          function(e) {
            return e.theme.bg3
          },
          function(e) {
            return e.theme.bg2
          }
        )
      function jb(e) {
        var t,
          n,
          a = e.content,
          r = e.show,
          c = e.children,
          u = e.placement,
          l = void 0 === u ? 'auto' : u,
          s = Object(o.useState)(null),
          d = Object(A.a)(s, 2),
          m = d[0],
          p = d[1],
          f = Object(o.useState)(null),
          b = Object(A.a)(f, 2),
          v = b[0],
          h = b[1],
          g = Object(o.useState)(null),
          y = Object(A.a)(g, 2),
          E = y[0],
          x = y[1],
          O = Object(fb.a)(m, v, {
            placement: l,
            strategy: 'fixed',
            modifiers: [
              { name: 'offset', options: { offset: [8, 8] } },
              { name: 'arrow', options: { element: E } }
            ]
          }),
          j = O.styles,
          w = O.update,
          k = O.attributes
        return (
          bb(
            Object(o.useCallback)(
              function() {
                w && w()
              },
              [w]
            ),
            r ? 100 : null
          ),
          i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(xb, { ref: p }, c),
            i.a.createElement(
              vb.a,
              null,
              i.a.createElement(
                Eb,
                Object.assign({ show: r, ref: h, style: j.popper }, k.popper),
                a,
                i.a.createElement(
                  Ob,
                  Object.assign(
                    {
                      className: 'arrow-'.concat(
                        null !== (t = null === (n = k.popper) || void 0 === n ? void 0 : n['data-popper-placement']) &&
                          void 0 !== t
                          ? t
                          : ''
                      ),
                      ref: x,
                      style: j.arrow
                    },
                    k.arrow
                  )
                )
              )
            )
          )
        )
      }
      function Ab() {
        var e = Object(Ve.a)([
          '\n  width: 228px;\n  padding: 0.6rem 1rem;\n  line-height: 150%;\n  font-weight: 400;\n'
        ])
        return (
          (Ab = function() {
            return e
          }),
          e
        )
      }
      var wb = He.default.div(Ab())
      function kb(e) {
        var t = e.text,
          n = Object(Xe.a)(e, ['text'])
        return i.a.createElement(jb, Object.assign({ content: i.a.createElement(wb, null, t) }, n))
      }
      function Tb(e) {
        var t = e.children,
          n = Object(Xe.a)(e, ['children']),
          a = Object(o.useState)(!1),
          r = Object(A.a)(a, 2),
          c = r[0],
          u = r[1],
          l = Object(o.useCallback)(
            function() {
              return u(!0)
            },
            [u]
          ),
          s = Object(o.useCallback)(
            function() {
              return u(!1)
            },
            [u]
          )
        return i.a.createElement(
          kb,
          Object.assign({}, n, { show: c }),
          i.a.createElement('div', { onMouseEnter: l, onMouseLeave: s }, t)
        )
      }
      function Cb() {
        var e = Object(Ve.a)(['\n  font-size: 1rem;\n'])
        return (
          (Cb = function() {
            return e
          }),
          e
        )
      }
      function Ib() {
        var e = Object(Ve.a)([
          '\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.2rem;\n  border: none;\n  background: none;\n  outline: none;\n  cursor: default;\n  border-radius: 36px;\n  width: 24px;\n  height: 24px;\n  background-color: rgba(255, 255, 255, 0.1);\n  color: ',
          ';\n\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n'
        ])
        return (
          (Ib = function() {
            return e
          }),
          e
        )
      }
      function Sb() {
        var e = Object(Ve.a)([
          '\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.2rem;\n  border: none;\n  background: none;\n  outline: none;\n  cursor: default;\n  border-radius: 36px;\n  background-color: ',
          ';\n  color: ',
          ';\n\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n'
        ])
        return (
          (Sb = function() {
            return e
          }),
          e
        )
      }
      var Nb = He.default.div(
        Sb(),
        function(e) {
          return e.theme.bg2
        },
        function(e) {
          return e.theme.text2
        }
      )
      He.default.div(Ib(), function(e) {
        return e.theme.white
      }),
        He.default.span(Cb())
      function Rb(e) {
        var t = e.text,
          n = Object(o.useState)(!1),
          a = Object(A.a)(n, 2),
          r = a[0],
          c = a[1],
          u = Object(o.useCallback)(
            function() {
              return c(!0)
            },
            [c]
          ),
          l = Object(o.useCallback)(
            function() {
              return c(!1)
            },
            [c]
          )
        return i.a.createElement(
          'span',
          { style: { marginLeft: 4 } },
          i.a.createElement(
            kb,
            { text: t, show: r },
            i.a.createElement(
              Nb,
              { onClick: u, onMouseEnter: u, onMouseLeave: l },
              i.a.createElement(pb.a, { size: 16 })
            )
          )
        )
      }
      var Ub = n(216),
        Bb = n.n(Ub),
        Lb = n(226),
        Wb = n.n(Lb),
        zb = n(141),
        Mb = n(120)
      var Pb = new TextDecoder()
      function Db(e) {
        var t = (function(e) {
            if ((e = e.startsWith('0x') ? e.substr(2) : e).length % 2 !== 0)
              throw new Error('hex must have length that is multiple of 2')
            for (var t = new Uint8Array(e.length / 2), n = 0; n < t.length; n++) t[n] = parseInt(e.substr(2 * n, 2), 16)
            return t
          })(e),
          n = Object(zb.getCodec)(t)
        switch (n) {
          case 'ipfs-ns':
            var a = Object(zb.rmPrefix)(t),
              r = new Wb.a(a)
            return 'ipfs://'.concat(Object(Mb.toB58String)(r.multihash))
          case 'ipns-ns':
            var o = Object(zb.rmPrefix)(t),
              i = new Wb.a(o),
              c = Object(Mb.decode)(i.multihash)
            return 'identity' === c.name
              ? 'ipns://'.concat(Pb.decode(c.digest).trim())
              : 'ipns://'.concat(Object(Mb.toB58String)(i.multihash))
          default:
            throw new Error('Unrecognized codec: '.concat(n))
        }
      }
      var Fb = /^(([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+)eth(\/.*)?$/
      function qb(e) {
        var t = e.match(Fb)
        if (t) return { ensName: ''.concat(t[1].toLowerCase(), 'eth'), ensPath: t[4] }
      }
      function Vb(e) {
        var t, n
        switch (e.split(':')[0].toLowerCase()) {
          case 'https':
            return [e]
          case 'http':
            return ['https' + e.substr(4), e]
          case 'ipfs':
            var a = null === (t = e.match(/^ipfs:(\/\/)?(.*)$/i)) || void 0 === t ? void 0 : t[2]
            return ['https://cloudflare-ipfs.com/ipfs/'.concat(a, '/'), 'https://ipfs.io/ipfs/'.concat(a, '/')]
          case 'ipns':
            var r = null === (n = e.match(/^ipns:(\/\/)?(.*)$/i)) || void 0 === n ? void 0 : n[2]
            return ['https://cloudflare-ipfs.com/ipns/'.concat(r, '/'), 'https://ipfs.io/ipns/'.concat(r, '/')]
          default:
            return []
        }
      }
      function Yb(e) {
        var t = Object(o.useMemo)(
            function() {
              return e ? qb(e) : void 0
            },
            [e]
          ),
          n = (function(e) {
            var t,
              n,
              a,
              r = Object(o.useMemo)(
                function() {
                  if (!e) return [void 0]
                  try {
                    return e ? [Object(Ja.namehash)(e)] : [void 0]
                  } catch (t) {
                    return [void 0]
                  }
                },
                [e]
              ),
              i = Kn(Pa(!1), 'resolver', r),
              c = null === (t = i.result) || void 0 === t ? void 0 : t[0],
              u = Kn(Da(c && Bi(c) ? void 0 : c, !1), 'contenthash', r)
            return {
              contenthash:
                null !== (n = null === (a = u.result) || void 0 === a ? void 0 : a[0]) && void 0 !== n ? n : null,
              loading: i.loading || u.loading
            }
          })(null === t || void 0 === t ? void 0 : t.ensName)
        return Object(o.useMemo)(
          function() {
            return t ? (n.contenthash ? Vb(Db(n.contenthash)) : []) : e ? Vb(e) : []
          },
          [t, n.contenthash, e]
        )
      }
      var Hb = {}
      function Qb(e) {
        var t = e.srcs,
          n = e.alt,
          a = Object(Xe.a)(e, ['srcs', 'alt']),
          r = Object(o.useState)(0),
          c = Object(A.a)(r, 2)[1],
          u = t.find(function(e) {
            return !Hb[e]
          })
        return u
          ? i.a.createElement(
              'img',
              Object.assign({}, a, {
                alt: n,
                src: u,
                onError: function() {
                  u && (Hb[u] = !0),
                    c(function(e) {
                      return e + 1
                    })
                }
              })
            )
          : i.a.createElement(pb.a, a)
      }
      function Xb() {
        var e = Object(Ve.a)([
          '\n  width: ',
          ';\n  height: ',
          ';\n  border-radius: ',
          ';\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);\n  background-color: ',
          ';\n'
        ])
        return (
          (Xb = function() {
            return e
          }),
          e
        )
      }
      function Jb() {
        var e = Object(Ve.a)([
          '\n  width: ',
          ';\n  height: ',
          ';\n  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);\n  border-radius: 24px;\n'
        ])
        return (
          (Jb = function() {
            return e
          }),
          e
        )
      }
      var Gb = function(e) {
          return 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/'.concat(
            e,
            '/logo.png'
          )
        },
        Kb = He.default.img(
          Jb(),
          function(e) {
            return e.size
          },
          function(e) {
            return e.size
          }
        ),
        Zb = Object(He.default)(Qb)(
          Xb(),
          function(e) {
            return e.size
          },
          function(e) {
            return e.size
          },
          function(e) {
            return e.size
          },
          function(e) {
            return e.theme.white
          }
        )
      function _b(e) {
        var t,
          n = e.currency,
          a = e.size,
          r = void 0 === a ? '24px' : a,
          c = e.style,
          u = Yb(n instanceof rn ? n.logoURI : void 0),
          l = Object(o.useMemo)(
            function() {
              return n === v.d
                ? []
                : n instanceof v.l
                ? n instanceof rn
                  ? [].concat(Object(p.a)(u), [Gb(n.address)])
                  : [Gb(n.address)]
                : []
            },
            [n, u]
          )
        return n === v.d
          ? i.a.createElement(Kb, { src: Bb.a, size: r, style: c })
          : i.a.createElement(Zb, {
              size: r,
              srcs: l,
              alt: ''.concat(
                null !== (t = null === n || void 0 === n ? void 0 : n.symbol) && void 0 !== t ? t : 'token',
                ' logo'
              ),
              style: c
            })
      }
      function $b() {
        var e = Object(Ve.a)([
          '\n  border: 1px solid ',
          ';\n  border-radius: 10px;\n  display: flex;\n  padding: 6px;\n\n  align-items: center;\n  :hover {\n    cursor: ',
          ';\n    background-color: ',
          ';\n  }\n\n  background-color: ',
          ';\n  opacity: ',
          ';\n'
        ])
        return (
          ($b = function() {
            return e
          }),
          e
        )
      }
      var ev = He.default.div(
        $b(),
        function(e) {
          var t = e.theme
          return e.disable ? 'transparent' : t.bg3
        },
        function(e) {
          return !e.disable && 'pointer'
        },
        function(e) {
          var t = e.theme
          return !e.disable && t.bg2
        },
        function(e) {
          var t = e.theme
          return e.disable && t.bg3
        },
        function(e) {
          return e.disable && '0.4'
        }
      )
      function tv(e) {
        var t = e.chainId,
          n = e.onSelect,
          a = e.selectedCurrency
        return i.a.createElement(
          bt,
          { gap: 'md' },
          i.a.createElement(
            Ht,
            null,
            i.a.createElement(Tr.b, { fontWeight: 500, fontSize: 14 }, 'Common bases'),
            i.a.createElement(Rb, { text: 'These tokens are commonly paired with other tokens.' })
          ),
          i.a.createElement(
            Ht,
            { gap: '4px' },
            i.a.createElement(
              ev,
              {
                onClick: function() {
                  ;(a && Object(v.q)(a, v.d)) || n(v.d)
                },
                disable: a === v.d
              },
              i.a.createElement(_b, { currency: v.d, style: { marginRight: 8 } }),
              i.a.createElement(Tr.b, { fontWeight: 500, fontSize: 16 }, 'ETH')
            ),
            (t ? he[t] : []).map(function(e) {
              var t = a instanceof v.l && a.address === e.address
              return i.a.createElement(
                ev,
                {
                  onClick: function() {
                    return !t && n(e)
                  },
                  disable: t,
                  key: e.address
                },
                i.a.createElement(_b, { currency: e, style: { marginRight: 8 } }),
                i.a.createElement(Tr.b, { fontWeight: 500, fontSize: 16 }, e.symbol)
              )
            })
          )
        )
      }
      var nv = n(346)
      function av() {
        var e = Object(Ve.a)(['\n  width: 100%;\n  height: 1px;\n  background-color: ', ';\n'])
        return (
          (av = function() {
            return e
          }),
          e
        )
      }
      function rv() {
        var e = Object(Ve.a)(['\n  width: 100%;\n  height: 1px;\n  background-color: ', ';\n'])
        return (
          (rv = function() {
            return e
          }),
          e
        )
      }
      function ov() {
        var e = Object(Ve.a)([
          '\n  position: relative;\n  display: flex;\n  padding: 16px;\n  align-items: center;\n  width: 100%;\n  white-space: nowrap;\n  background: none;\n  border: none;\n  outline: none;\n  border-radius: 20px;\n  color: ',
          ';\n  border-style: solid;\n  border: 1px solid ',
          ';\n  -webkit-appearance: none;\n\n  font-size: 18px;\n\n  ::placeholder {\n    color: ',
          ';\n  }\n  transition: border 100ms;\n  :focus {\n    border: 1px solid ',
          ';\n    outline: none;\n  }\n'
        ])
        return (
          (ov = function() {
            return e
          }),
          e
        )
      }
      function iv() {
        var e = Object(Ve.a)([
          '\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) auto minmax(0, 72px);\n  grid-gap: 16px;\n  cursor: ',
          ';\n  pointer-events: ',
          ';\n  :hover {\n    background-color: ',
          ';\n  }\n  opacity: ',
          ';\n'
        ])
        return (
          (iv = function() {
            return e
          }),
          e
        )
      }
      function cv() {
        var e = Object(Ve.a)(['\n  padding: 20px;\n'])
        return (
          (cv = function() {
            return e
          }),
          e
        )
      }
      function uv() {
        var e = Object(Ve.a)(['\n  border: 1px solid ', ';\n  height: 20px;\n  margin: 0;\n'])
        return (
          (uv = function() {
            return e
          }),
          e
        )
      }
      function lv() {
        var e = Object(Ve.a)(['\n  color: ', ';\n  font-size: 14px;\n'])
        return (
          (lv = function() {
            return e
          }),
          e
        )
      }
      function sv() {
        var e = Object(Ve.a)(['\n  height: 3px;\n  width: 3px;\n  background-color: ', ';\n  border-radius: 50%;\n'])
        return (
          (sv = function() {
            return e
          }),
          e
        )
      }
      function dv() {
        var e = Object(Ve.a)([
          '\n  z-index: 100;\n  visibility: ',
          ';\n  opacity: ',
          ';\n  transition: visibility 150ms linear, opacity 150ms linear;\n  background: ',
          ';\n  border: 1px solid ',
          ';\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  color: ',
          ';\n  border-radius: 0.5rem;\n  padding: 1rem;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-gap: 8px;\n  font-size: 1rem;\n  text-align: left;\n  top: 80px;\n'
        ])
        return (
          (dv = function() {
            return e
          }),
          e
        )
      }
      function mv() {
        var e = Object(Ve.a)([
          '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n'
        ])
        return (
          (mv = function() {
            return e
          }),
          e
        )
      }
      function pv() {
        var e = Object(Ve.a)([
          '\n  ',
          '\n  align-items: center;\n  padding: 1rem 1rem;\n  margin: 0.25rem 0.5rem;\n  justify-content: center;\n  flex: 1;\n  user-select: none;\n'
        ])
        return (
          (pv = function() {
            return e
          }),
          e
        )
      }
      He.default.div(pv(), function(e) {
        return e.theme.flexRowNoWrap
      }),
        He.default.div(mv()),
        He.default.div(
          dv(),
          function(e) {
            return e.show ? 'visible' : 'hidden'
          },
          function(e) {
            return e.show ? 1 : 0
          },
          function(e) {
            return e.theme.bg2
          },
          function(e) {
            return e.theme.bg3
          },
          function(e) {
            return e.theme.text2
          }
        )
      var fv = He.default.div(sv(), function(e) {
          return e.theme.text2
        }),
        bv =
          (Object(He.default)(Qt)(lv(), function(e) {
            return e.theme.primary1
          }),
          He.default.input(uv(), function(e) {
            return e.theme.red3
          })),
        vv = Object(He.default)(bt)(cv()),
        hv = Object(He.default)(Vt)(
          iv(),
          function(e) {
            return !e.disabled && 'pointer'
          },
          function(e) {
            return e.disabled && 'none'
          },
          function(e) {
            var t = e.theme
            return !e.disabled && t.bg2
          },
          function(e) {
            var t = e.disabled,
              n = e.selected
            return t || n ? 0.5 : 1
          }
        ),
        gv = He.default.input(
          ov(),
          function(e) {
            return e.theme.text1
          },
          function(e) {
            return e.theme.bg3
          },
          function(e) {
            return e.theme.text3
          },
          function(e) {
            return e.theme.primary1
          }
        ),
        yv = He.default.div(rv(), function(e) {
          return e.theme.bg2
        }),
        Ev = He.default.div(av(), function(e) {
          return e.theme.bg3
        })
      function xv() {
        var e = Object(Ve.a)(['\n  width: ', ';\n  height: ', ';\n'])
        return (
          (xv = function() {
            return e
          }),
          e
        )
      }
      var Ov = Object(He.default)(Qb)(
        xv(),
        function(e) {
          return e.size
        },
        function(e) {
          return e.size
        }
      )
      function jv(e) {
        var t = e.logoURI,
          n = e.style,
          a = e.size,
          r = void 0 === a ? '24px' : a,
          o = e.alt,
          c = Yb(t)
        return i.a.createElement(Ov, { alt: o, size: r, srcs: c, style: n })
      }
      function Av() {
        return Object(o.useContext)(He.ThemeContext)
      }
      function wv() {
        var e = Object(Ve.a)([
          '\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 140px;\n  font-size: 12px;\n'
        ])
        return (
          (wv = function() {
            return e
          }),
          e
        )
      }
      function kv() {
        var e = Object(Ve.a)(['\n  height: 16px;\n  width: 16px;\n  margin-right: 6px;\n  stroke: ', ';\n'])
        return (
          (kv = function() {
            return e
          }),
          e
        )
      }
      function Tv() {
        var e = Object(Ve.a)([
          '\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) auto;\n  grid-gap: 16px;\n  align-items: center;\n\n  opacity: ',
          ';\n'
        ])
        return (
          (Tv = function() {
            return e
          }),
          e
        )
      }
      var Cv = He.default.div(Tv(), function(e) {
          return e.dim ? '0.6' : '1'
        }),
        Iv = Object(He.default)(Sl.a)(kv(), function(e) {
          return e.theme.green1
        }),
        Sv = He.default.div(wv())
      function Nv(e) {
        var t,
          n,
          a = e.token,
          r = e.style,
          o = e.dim,
          c = e.showImportView,
          u = e.setImportToken,
          l = Le().chainId,
          s = Av(),
          d = fn(),
          m =
            l &&
            (null === d ||
            void 0 === d ||
            null === (t = d[l]) ||
            void 0 === t ||
            null === (n = t[a.address]) ||
            void 0 === n
              ? void 0
              : n.list),
          p = $a(a),
          f = (function(e) {
            var t = Ka()
            return !(!t || !e) && !!t[e.address]
          })(a)
        return i.a.createElement(
          Cv,
          { style: r },
          i.a.createElement(_b, { currency: a, size: '24px', style: { opacity: o ? '0.6' : '1' } }),
          i.a.createElement(
            bt,
            { gap: '4px', style: { opacity: o ? '0.6' : '1' } },
            i.a.createElement(
              Ht,
              null,
              i.a.createElement(Lo, { fontWeight: 500 }, a.symbol),
              i.a.createElement(Fo, { ml: '8px', fontWeight: 300 }, i.a.createElement(Sv, { title: a.name }, a.name))
            ),
            m &&
              m.logoURI &&
              i.a.createElement(
                Qt,
                null,
                i.a.createElement(Po, { mr: '4px', color: s.text3 }, 'via ', m.name),
                i.a.createElement(jv, { logoURI: m.logoURI, size: '12px' })
              )
          ),
          f || p
            ? i.a.createElement(
                Qt,
                { style: { minWidth: 'fit-content' } },
                i.a.createElement(Iv, null),
                i.a.createElement(No, { color: s.green1 }, 'Active')
              )
            : i.a.createElement(
                ii,
                {
                  width: 'fit-content',
                  padding: '6px 12px',
                  fontWeight: 500,
                  fontSize: '14px',
                  onClick: function() {
                    u && u(a), c()
                  }
                },
                'Import'
              )
        )
      }
      function Rv() {
        var e = Object(Ve.a)(['\n  display: flex;\n  justify-content: flex-end;\n'])
        return (
          (Rv = function() {
            return e
          }),
          e
        )
      }
      function Uv() {
        var e = Object(Ve.a)([
          '\n  background-color: ',
          ';\n  color: ',
          ';\n  font-size: 14px;\n  border-radius: 4px;\n  padding: 0.25rem 0.3rem 0.25rem 0.3rem;\n  max-width: 6rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  justify-self: flex-end;\n  margin-right: 4px;\n'
        ])
        return (
          (Uv = function() {
            return e
          }),
          e
        )
      }
      function Bv() {
        var e = Object(Ve.a)([
          '\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 5rem;\n  text-overflow: ellipsis;\n'
        ])
        return (
          (Bv = function() {
            return e
          }),
          e
        )
      }
      function Lv(e) {
        return e instanceof v.l ? e.address : e === v.d ? 'ETHER' : ''
      }
      var Wv = Object(He.default)(Tr.b)(Bv()),
        zv = He.default.div(
          Uv(),
          function(e) {
            return e.theme.bg3
          },
          function(e) {
            return e.theme.text2
          }
        )
      function Mv(e) {
        var t = e.balance
        return i.a.createElement(Wv, { title: t.toExact() }, t.toSignificant(4))
      }
      var Pv = He.default.div(Rv())
      function Dv(e) {
        var t = e.currency
        if (!(t instanceof rn)) return i.a.createElement('span', null)
        var n = t.tags
        if (!n || 0 === n.length) return i.a.createElement('span', null)
        var a = n[0]
        return i.a.createElement(
          Pv,
          null,
          i.a.createElement(Tb, { text: a.description }, i.a.createElement(zv, { key: a.id }, a.name)),
          n.length > 1
            ? i.a.createElement(
                Tb,
                {
                  text: n
                    .slice(1)
                    .map(function(e) {
                      var t = e.name,
                        n = e.description
                      return ''.concat(t, ': ').concat(n)
                    })
                    .join('; \n')
                },
                i.a.createElement(zv, null, '...')
              )
            : null
        )
      }
      function Fv(e) {
        var t = e.currency,
          n = e.onSelect,
          a = e.isSelected,
          r = e.otherSelected,
          o = e.style,
          c = Le().account,
          u = Lv(t),
          l = sa(pn(), t),
          s = $a(t),
          d = su(null !== c && void 0 !== c ? c : void 0, t)
        return i.a.createElement(
          hv,
          {
            style: o,
            className: 'token-item-'.concat(u),
            onClick: function() {
              return a ? null : n()
            },
            disabled: a,
            selected: r
          },
          i.a.createElement(_b, { currency: t, size: '24px' }),
          i.a.createElement(
            vt,
            null,
            i.a.createElement(Tr.b, { title: t.name, fontWeight: 500 }, t.symbol),
            i.a.createElement(
              Fo,
              { ml: '0px', fontSize: '12px', fontWeight: 300 },
              t.name,
              ' ',
              !l && s && '\u2022 Added by user'
            )
          ),
          i.a.createElement(Dv, { currency: t }),
          i.a.createElement(
            Qt,
            { style: { justifySelf: 'flex-end' } },
            d ? i.a.createElement(Mv, { balance: d }) : c ? i.a.createElement(gl, null) : null
          )
        )
      }
      function qv(e) {
        var t = e.height,
          n = e.currencies,
          a = e.selectedCurrency,
          r = e.onCurrencySelect,
          c = e.otherCurrency,
          u = e.fixedListRef,
          l = e.showETH,
          s = e.showImportView,
          d = e.setImportToken,
          m = Object(o.useMemo)(
            function() {
              return l ? [v.b.ETHER].concat(Object(p.a)(n)) : n
            },
            [n, l]
          ),
          f = Le().chainId,
          b = Za(),
          h = Object(o.useCallback)(
            function(e) {
              var t = e.data,
                n = e.index,
                o = e.style,
                u = t[n],
                l = Boolean(a && Object(v.q)(a, u)),
                m = Boolean(c && Object(v.q)(c, u)),
                p = wc(u, f)
              return b && p && Object.keys(b).includes(p.address) && p
                ? i.a.createElement(Nv, { style: o, token: p, showImportView: s, setImportToken: d, dim: !0 })
                : i.a.createElement(Fv, {
                    style: o,
                    currency: u,
                    isSelected: l,
                    onSelect: function() {
                      return r(u)
                    },
                    otherSelected: m
                  })
            },
            [f, b, r, c, a, d, s]
          ),
          g = Object(o.useCallback)(function(e, t) {
            return Lv(t[e])
          }, [])
        return i.a.createElement(
          nv.a,
          { height: t, ref: u, width: '100%', itemData: m, itemCount: m.length, itemSize: 56, itemKey: g },
          h
        )
      }
      function Vv(e) {
        var t = (function() {
            var e = Le().account,
              t = Ka(),
              n = cu(
                null !== e && void 0 !== e ? e : void 0,
                Object(o.useMemo)(
                  function() {
                    return Object.values(null !== t && void 0 !== t ? t : {})
                  },
                  [t]
                )
              )
            return null !== n && void 0 !== n ? n : {}
          })(),
          n = Object(o.useMemo)(
            function() {
              return (function(e) {
                return function(t, n) {
                  var a = (function(e, t) {
                    return e && t
                      ? e.greaterThan(t)
                        ? -1
                        : e.equalTo(t)
                        ? 0
                        : 1
                      : e && e.greaterThan('0')
                      ? -1
                      : t && t.greaterThan('0')
                      ? 1
                      : 0
                  })(e[t.address], e[n.address])
                  return 0 !== a
                    ? a
                    : t.symbol && n.symbol
                    ? t.symbol.toLowerCase() < n.symbol.toLowerCase()
                      ? -1
                      : 1
                    : t.symbol || n.symbol
                    ? -1
                    : 0
                }
              })(null !== t && void 0 !== t ? t : {})
            },
            [t]
          )
        return Object(o.useMemo)(
          function() {
            return e
              ? function(e, t) {
                  return -1 * n(e, t)
                }
              : n
          },
          [e, n]
        )
      }
      var Yv = n(347)
      function Hv() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = Object(o.useState)(e),
          n = Object(A.a)(t, 2),
          a = n[0],
          r = n[1],
          i = Object(o.useCallback)(function() {
            return r(function(e) {
              return !e
            })
          }, [])
        return [a, i]
      }
      var Qv = n(769)
      function Xv() {
        var e = Object(Ve.a)([
          '\n  width: 100%;\n  border-radius: 20px;\n  padding: 20px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  background-color: ',
          ';\n  border-top: 1px solid ',
          ';\n'
        ])
        return (
          (Xv = function() {
            return e
          }),
          e
        )
      }
      function Jv() {
        var e = Object(Ve.a)(['\n  width: 100%;\n  flex: 1 1;\n  position: relative;\n'])
        return (
          (Jv = function() {
            return e
          }),
          e
        )
      }
      var Gv = Object(He.default)(vt)(Jv()),
        Kv = He.default.div(
          Xv(),
          function(e) {
            return e.theme.bg1
          },
          function(e) {
            return e.theme.bg2
          }
        )
      function Zv(e) {
        var t = e.selectedCurrency,
          n = e.onCurrencySelect,
          a = e.otherSelectedCurrency,
          r = e.showCommonBases,
          c = e.onDismiss,
          u = e.isOpen,
          l = e.showManageView,
          d = e.showImportView,
          m = e.setImportToken,
          f = Object(Me.b)().t,
          b = Le().chainId,
          h = Av(),
          g = Object(o.useRef)(),
          y = Object(o.useState)(''),
          E = Object(A.a)(y, 2),
          x = E[0],
          O = E[1],
          j = Object(o.useState)(!1),
          w = Object(A.a)(j, 1)[0],
          k = Ka(),
          T = na(x),
          C = nr(x),
          I = $a(C)
        Object(o.useEffect)(
          function() {
            T && s.a.event({ category: 'Currency Select', action: 'Search by address', label: T })
          },
          [T]
        )
        var S = Object(o.useMemo)(
            function() {
              var e = x.toLowerCase().trim()
              return '' === e || 'e' === e || 'et' === e || 'eth' === e
            },
            [x]
          ),
          N = Vv(w),
          R = Object(o.useMemo)(
            function() {
              return Xa(Object.values(k), x)
            },
            [k, x]
          ),
          U = Object(o.useMemo)(
            function() {
              var e = R.sort(N),
                t = x
                  .toLowerCase()
                  .split(/\s+/)
                  .filter(function(e) {
                    return e.length > 0
                  })
              return t.length > 1
                ? e
                : [].concat(
                    Object(p.a)(
                      e.filter(function(e) {
                        var n
                        return (null === (n = e.symbol) || void 0 === n ? void 0 : n.toLowerCase()) === t[0]
                      })
                    ),
                    Object(p.a)(
                      e.filter(function(e) {
                        var n, a
                        return (
                          (null === (n = e.symbol) || void 0 === n
                            ? void 0
                            : n.toLowerCase().startsWith(x.toLowerCase().trim())) &&
                          (null === (a = e.symbol) || void 0 === a ? void 0 : a.toLowerCase()) !== t[0]
                        )
                      })
                    ),
                    Object(p.a)(
                      e.filter(function(e) {
                        var n, a
                        return (
                          !(null === (n = e.symbol) || void 0 === n
                            ? void 0
                            : n.toLowerCase().startsWith(x.toLowerCase().trim())) &&
                          (null === (a = e.symbol) || void 0 === a ? void 0 : a.toLowerCase()) !== t[0]
                        )
                      })
                    )
                  )
            },
            [R, x, N]
          ),
          B = Object(o.useCallback)(
            function(e) {
              n(e), c()
            },
            [c, n]
          )
        Object(o.useEffect)(
          function() {
            u && O('')
          },
          [u]
        )
        var L = Object(o.useRef)(),
          W = Object(o.useCallback)(function(e) {
            var t,
              n = e.target.value,
              a = na(n)
            O(a || n), null === (t = g.current) || void 0 === t || t.scrollTo(0)
          }, []),
          z = Object(o.useCallback)(
            function(e) {
              if ('Enter' === e.key)
                if ('eth' === x.toLowerCase().trim()) B(v.d)
                else if (U.length > 0) {
                  var t
                  ;((null === (t = U[0].symbol) || void 0 === t ? void 0 : t.toLowerCase()) !==
                    x.trim().toLowerCase() &&
                    1 !== U.length) ||
                    B(U[0])
                }
            },
            [U, B, x]
          ),
          M = Hv(!1),
          P = Object(A.a)(M, 2),
          D = P[0],
          F = P[1]
        Du(Object(o.useRef)(), D ? F : void 0)
        var q = Object(o.useState)(!1),
          V = Object(A.a)(q, 2),
          Y = V[0],
          H = V[1],
          Q = (function(e) {
            var t = Le().chainId,
              n = Za()
            return Object(o.useMemo)(
              function() {
                return t && '' !== e ? Xa(Object.values(n), e) : void 0
              },
              [t, n, e]
            )
          })(x)
        return (
          Object(o.useEffect)(
            function() {
              '' === x && H(!1)
            },
            [H, x]
          ),
          i.a.createElement(
            Gv,
            null,
            i.a.createElement(
              vv,
              { gap: '16px' },
              i.a.createElement(
                Vt,
                null,
                i.a.createElement(Tr.b, { fontWeight: 500, fontSize: 16 }, 'Select a token'),
                i.a.createElement(to, { onClick: c })
              ),
              i.a.createElement(
                Xt,
                null,
                i.a.createElement(gv, {
                  type: 'text',
                  id: 'token-search-input',
                  placeholder: f('tokenSearchPlaceholder'),
                  autoComplete: 'off',
                  value: x,
                  ref: L,
                  onChange: W,
                  onKeyDown: z
                })
              ),
              r && i.a.createElement(tv, { chainId: b, onSelect: B, selectedCurrency: t })
            ),
            i.a.createElement(yv, null),
            C && !I
              ? i.a.createElement(
                  vt,
                  { style: { padding: '20px 0', height: '100%' } },
                  i.a.createElement(Nv, { token: C, showImportView: d, setImportToken: m })
                )
              : (null === U || void 0 === U ? void 0 : U.length) > 0 || (Y && Q && Q.length > 0)
              ? i.a.createElement(
                  'div',
                  { style: { flex: '1' } },
                  i.a.createElement(Yv.a, { disableWidth: !0 }, function(e) {
                    var n = e.height
                    return i.a.createElement(qv, {
                      height: n,
                      showETH: S,
                      currencies: Y && Q ? U.concat(Q) : U,
                      onCurrencySelect: B,
                      otherCurrency: a,
                      selectedCurrency: t,
                      fixedListRef: g,
                      showImportView: d,
                      setImportToken: m
                    })
                  })
                )
              : i.a.createElement(
                  vt,
                  { style: { padding: '20px', height: '100%' } },
                  i.a.createElement(
                    No,
                    { color: h.text3, textAlign: 'center', mb: '20px' },
                    'No results found in active lists.'
                  ),
                  Q &&
                    Q.length > 0 &&
                    !(C && !I) &&
                    x.length > 1 &&
                    0 === (null === U || void 0 === U ? void 0 : U.length) &&
                    i.a.createElement(
                      Xt,
                      { align: 'center', width: '100%', justify: 'center' },
                      i.a.createElement(
                        ci,
                        {
                          width: 'fit-content',
                          borderRadius: '12px',
                          padding: '8px 12px',
                          onClick: function() {
                            return H(!Y)
                          }
                        },
                        Y
                          ? 'Hide expanded search'
                          : 'Show '.concat(Q.length, ' more inactive ').concat(1 === Q.length ? 'token' : 'tokens')
                      )
                    )
                ),
            Q &&
              Q.length > 0 &&
              !(C && !I) &&
              (x.length > 1 || Y) &&
              (0 !== (null === U || void 0 === U ? void 0 : U.length) || Y) &&
              i.a.createElement(
                Xt,
                {
                  align: 'center',
                  width: '100%',
                  justify: 'center',
                  style: { position: 'absolute', bottom: '80px', left: 0 }
                },
                i.a.createElement(
                  ci,
                  {
                    width: 'fit-content',
                    borderRadius: '12px',
                    padding: '8px 12px',
                    onClick: function() {
                      return H(!Y)
                    }
                  },
                  Y
                    ? 'Hide expanded search'
                    : 'Show '.concat(Q.length, ' more inactive ').concat(1 === Q.length ? 'token' : 'tokens')
                )
              ),
            i.a.createElement(
              Kv,
              null,
              i.a.createElement(
                Xt,
                { justify: 'center' },
                i.a.createElement(
                  eo,
                  { onClick: l, color: h.blue1, className: 'list-token-manage-button' },
                  i.a.createElement(
                    Qt,
                    null,
                    i.a.createElement(no, { size: '16px', marginRight: '6px' }, i.a.createElement(Qv.a, null)),
                    i.a.createElement(No, { color: h.blue1 }, 'Manage')
                  )
                )
              )
            )
          )
        )
      }
      function _v() {
        var e = Object(Ve.a)(['\n    font-size: 10px;\n'])
        return (
          (_v = function() {
            return e
          }),
          e
        )
      }
      function $v() {
        var e = Object(Ve.a)(['\n  font-size: 12px;\n\n  ', '\n'])
        return (
          ($v = function() {
            return e
          }),
          e
        )
      }
      function eh() {
        var e = Object(Ve.a)(['\n  background-color: ', ';\n  width: fit-content;\n'])
        return (
          (eh = function() {
            return e
          }),
          e
        )
      }
      function th() {
        var e = Object(Ve.a)(['\n  position: relative;\n  width: 100%;\n  overflow: auto;\n'])
        return (
          (th = function() {
            return e
          }),
          e
        )
      }
      var nh = He.default.div(th()),
        ah = Object(He.default)(Eu)(eh(), function(e) {
          var t = e.theme
          return e.highWarning ? Object(Ke.d)(0.8, t.red1) : Object(Ke.d)(0.8, t.yellow2)
        }),
        rh = Object(He.default)(Do)($v(), function(e) {
          return e.theme.mediaWidth.upToSmall(_v())
        })
      function oh(e) {
        var t,
          n,
          a,
          r,
          c,
          u,
          l = e.tokens,
          s = e.onBack,
          d = e.onDismiss,
          m = e.handleCurrencySelect,
          p = Av(),
          f = Le().chainId,
          b = Object(o.useState)(!1),
          v = Object(A.a)(b, 2),
          h = v[0],
          g = v[1],
          y = Or(),
          E = fn(),
          x =
            (f &&
              (null === E ||
              void 0 === E ||
              null === (t = E[f]) ||
              void 0 === t ||
              null === (n = t[null === (a = l[0]) || void 0 === a ? void 0 : a.address]) ||
              void 0 === n
                ? void 0
                : n.list)) ||
            (f &&
              (null === E ||
              void 0 === E ||
              null === (r = E[f]) ||
              void 0 === r ||
              null === (c = r[null === (u = l[1]) || void 0 === u ? void 0 : u.address]) ||
              void 0 === c
                ? void 0
                : c.list))
        return i.a.createElement(
          nh,
          null,
          i.a.createElement(
            vv,
            { gap: '14px', style: { width: '100%', flex: '1 1' } },
            i.a.createElement(
              Vt,
              null,
              s
                ? i.a.createElement(Nr.a, { style: { cursor: 'pointer' }, onClick: s })
                : i.a.createElement('div', null),
              i.a.createElement(zo, null, 'Import ', l.length > 1 ? 'Tokens' : 'Token'),
              d ? i.a.createElement(to, { onClick: d }) : i.a.createElement('div', null)
            )
          ),
          i.a.createElement(km, null),
          i.a.createElement(
            vv,
            { gap: 'md' },
            l.map(function(e) {
              var t,
                n,
                a =
                  f &&
                  (null === E ||
                  void 0 === E ||
                  null === (t = E[f]) ||
                  void 0 === t ||
                  null === (n = t[e.address]) ||
                  void 0 === n
                    ? void 0
                    : n.list)
              return i.a.createElement(
                Eu,
                { backgroundColor: p.bg2, key: 'import' + e.address, className: '.token-warning-container' },
                i.a.createElement(
                  bt,
                  { gap: '10px' },
                  i.a.createElement(
                    Ht,
                    { align: 'center' },
                    i.a.createElement(_b, { currency: e, size: '24px' }),
                    i.a.createElement(Lo, { ml: '8px', mr: '8px', fontWeight: 500 }, e.symbol),
                    i.a.createElement(Fo, { fontWeight: 300 }, e.name)
                  ),
                  f &&
                    i.a.createElement(
                      mo,
                      { href: ra(f, e.address, 'address') },
                      i.a.createElement(rh, null, e.address)
                    ),
                  void 0 !== a
                    ? i.a.createElement(
                        Qt,
                        null,
                        a.logoURI && i.a.createElement(jv, { logoURI: a.logoURI, size: '12px' }),
                        i.a.createElement(Po, { ml: '6px', color: p.text3 }, 'via ', a.name)
                      )
                    : i.a.createElement(
                        ah,
                        { borderRadius: '4px', padding: '4px', highWarning: !0 },
                        i.a.createElement(
                          Qt,
                          null,
                          i.a.createElement(sm.a, { stroke: p.red1, size: '10px' }),
                          i.a.createElement(
                            Lo,
                            { color: p.red1, ml: '4px', fontSize: '10px', fontWeight: 500 },
                            'Unknown Source'
                          )
                        )
                      )
                )
              )
            }),
            i.a.createElement(
              Eu,
              { style: { backgroundColor: x ? Object(Ke.d)(0.8, p.yellow2) : Object(Ke.d)(0.8, p.red1) } },
              i.a.createElement(
                bt,
                { justify: 'center', style: { textAlign: 'center', gap: '16px', marginBottom: '12px' } },
                i.a.createElement(sm.a, { stroke: x ? p.yellow2 : p.red1, size: 32 }),
                i.a.createElement(
                  Lo,
                  { fontWeight: 600, fontSize: 20, color: x ? p.yellow2 : p.red1 },
                  'Trade at your own risk!'
                )
              ),
              i.a.createElement(
                bt,
                { style: { textAlign: 'center', gap: '16px', marginBottom: '12px' } },
                i.a.createElement(
                  Lo,
                  { fontWeight: 400, color: x ? p.yellow2 : p.red1 },
                  'Anyone can create a token, including creating fake versions of existing tokens that claim to represent projects.'
                ),
                i.a.createElement(
                  Lo,
                  { fontWeight: 600, color: x ? p.yellow2 : p.red1 },
                  'If you purchase this token, you may not be able to sell it back.'
                )
              ),
              i.a.createElement(
                Ht,
                {
                  justify: 'center',
                  style: { cursor: 'pointer' },
                  onClick: function() {
                    return g(!h)
                  }
                },
                i.a.createElement(bv, {
                  className: '.understand-checkbox',
                  name: 'confirmed',
                  type: 'checkbox',
                  checked: h,
                  onChange: function() {
                    return g(!h)
                  }
                }),
                i.a.createElement(
                  Lo,
                  { ml: '10px', fontSize: '16px', color: x ? p.yellow2 : p.red1, fontWeight: 500 },
                  'I understand'
                )
              )
            ),
            i.a.createElement(
              ii,
              {
                disabled: !h,
                altDisabledStyle: !0,
                borderRadius: '20px',
                padding: '10px 1rem',
                onClick: function() {
                  l.map(function(e) {
                    return y(e)
                  }),
                    m && m(l[0])
                },
                className: '.token-dismiss-button'
              },
              'Import'
            )
          )
        )
      }
      var ih = n(770),
        ch = n(348),
        uh = n(349),
        lh = new (n.n(uh).a)({ allErrors: !0 }).compile(ch)
      function sh(e, t) {
        return dh.apply(this, arguments)
      }
      function dh() {
        return (dh = Object(w.a)(
          j.a.mark(function e(t, n) {
            var a, r, o, i, c, u, l, s, d, m, p, f, b
            return j.a.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!(a = qb(t))) {
                        e.next = 23
                        break
                      }
                      return (e.prev = 2), (e.next = 5), n(a.ensName)
                    case 5:
                      ;(i = e.sent), (e.next = 12)
                      break
                    case 8:
                      throw ((e.prev = 8),
                      (e.t0 = e.catch(2)),
                      console.debug('Failed to resolve ENS name: '.concat(a.ensName), e.t0),
                      new Error('Failed to resolve ENS name: '.concat(a.ensName)))
                    case 12:
                      ;(e.prev = 12), (c = Db(i)), (e.next = 20)
                      break
                    case 16:
                      throw ((e.prev = 16),
                      (e.t1 = e.catch(12)),
                      console.debug('Failed to translate contenthash to URI', i),
                      new Error('Failed to translate contenthash to URI: '.concat(i)))
                    case 20:
                      ;(r = Vb(''.concat(c).concat(null !== (o = a.ensPath) && void 0 !== o ? o : ''))), (e.next = 24)
                      break
                    case 23:
                      r = Vb(t)
                    case 24:
                      u = 0
                    case 25:
                      if (!(u < r.length)) {
                        e.next = 55
                        break
                      }
                      return (l = r[u]), (s = u === r.length - 1), (d = void 0), (e.prev = 29), (e.next = 32), fetch(l)
                    case 32:
                      ;(d = e.sent), (e.next = 41)
                      break
                    case 35:
                      if (((e.prev = 35), (e.t2 = e.catch(29)), console.debug('Failed to fetch list', t, e.t2), !s)) {
                        e.next = 40
                        break
                      }
                      throw new Error('Failed to download list '.concat(t))
                    case 40:
                      return e.abrupt('continue', 52)
                    case 41:
                      if (d.ok) {
                        e.next = 45
                        break
                      }
                      if (!s) {
                        e.next = 44
                        break
                      }
                      throw new Error('Failed to download list '.concat(t))
                    case 44:
                      return e.abrupt('continue', 52)
                    case 45:
                      return (e.next = 47), d.json()
                    case 47:
                      if (((m = e.sent), lh(m))) {
                        e.next = 51
                        break
                      }
                      throw ((b =
                        null !==
                          (p =
                            null === (f = lh.errors) || void 0 === f
                              ? void 0
                              : f.reduce(function(e, t) {
                                  var n,
                                    a = ''
                                      .concat(t.dataPath, ' ')
                                      .concat(null !== (n = t.message) && void 0 !== n ? n : '')
                                  return e.length > 0 ? ''.concat(e, '; ').concat(a) : ''.concat(a)
                                }, '')) && void 0 !== p
                          ? p
                          : 'unknown error'),
                      new Error('Token list failed validation: '.concat(b)))
                    case 51:
                      return e.abrupt('return', m)
                    case 52:
                      u++, (e.next = 25)
                      break
                    case 55:
                      throw new Error('Unrecognized list URL protocol.')
                    case 56:
                    case 'end':
                      return e.stop()
                  }
              },
              e,
              null,
              [
                [2, 8],
                [12, 16],
                [29, 35]
              ]
            )
          })
        )).apply(this, arguments)
      }
      var mh = [
          {
            constant: !0,
            inputs: [{ name: 'node', type: 'bytes32' }],
            name: 'resolver',
            outputs: [{ name: 'resolverAddress', type: 'address' }],
            payable: !1,
            stateMutability: 'view',
            type: 'function'
          }
        ],
        ph = [
          {
            constant: !0,
            inputs: [{ internalType: 'bytes32', name: 'node', type: 'bytes32' }],
            name: 'contenthash',
            outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
            payable: !1,
            stateMutability: 'view',
            type: 'function'
          }
        ]
      function fh(e, t) {
        return new Zn.a(e, ph, t)
      }
      function bh(e, t) {
        return vh.apply(this, arguments)
      }
      function vh() {
        return (vh = Object(w.a)(
          j.a.mark(function e(t, n) {
            var a, r, o
            return j.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (a = new Zn.a('0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e', mh, n)),
                      (r = Object(Ja.namehash)(t)),
                      (e.next = 4),
                      a.resolver(r)
                    )
                  case 4:
                    return (o = e.sent), e.abrupt('return', fh(o, n).contenthash(r))
                  case 6:
                  case 'end':
                    return e.stop()
                }
            }, e)
          })
        )).apply(this, arguments)
      }
      function hh() {
        var e = Le(),
          t = e.chainId,
          n = e.library,
          a = Object(d.c)(),
          r = Object(o.useCallback)(
            function(e) {
              if (!n || t !== v.a.MAINNET) {
                if (V === v.a.MAINNET) {
                  var a = (function() {
                    var e
                    return (Y = null !== (e = Y) && void 0 !== e ? e : new h.a(H.provider))
                  })()
                  if (a) return bh(e, a)
                }
                throw new Error('Could not construct mainnet ENS resolver')
              }
              return bh(e, n)
            },
            [t, n]
          )
        return Object(o.useCallback)(
          (function() {
            var e = Object(w.a)(
              j.a.mark(function e(t) {
                var n,
                  o,
                  i = arguments
                return j.a.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = !(i.length > 1 && void 0 !== i[1]) || i[1]),
                          (o = Object(hn.e)()),
                          n && a(nf.pending({ requestId: o, url: t })),
                          e.abrupt(
                            'return',
                            sh(t, r)
                              .then(function(e) {
                                return n && a(nf.fulfilled({ url: t, tokenList: e, requestId: o })), e
                              })
                              .catch(function(e) {
                                throw (console.debug('Failed to get list at url '.concat(t), e),
                                n && a(nf.rejected({ url: t, requestId: o, errorMessage: e.message })),
                                e)
                              })
                          )
                        )
                      case 4:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })
            )
            return function(t) {
              return e.apply(this, arguments)
            }
          })(),
          [a, r]
        )
      }
      var gh = n(227),
        yh = n.n(gh),
        Eh = n(228)
      function xh() {
        return (xh = Object(w.a)(
          j.a.mark(function e(t) {
            var n
            return j.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (t.chainId !== v.a.RINKEBY || '0xc7AD46e0b8a400Bb3C915120d284AafbA8fc4735' !== t.address) {
                      e.next = 2
                      break
                    }
                    return e.abrupt('return', Promise.resolve('#FAAB14'))
                  case 2:
                    return (
                      (n = 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/'.concat(
                        t.address,
                        '/logo.png'
                      )),
                      e.abrupt(
                        'return',
                        yh.a
                          .from(n)
                          .getPalette()
                          .then(function(e) {
                            if (null === e || void 0 === e ? void 0 : e.Vibrant) {
                              for (var t = e.Vibrant.hex, n = Object(Eh.a)(t, '#FFF'); n < 3; )
                                (t = Object(Ke.c)(0.005, t)), (n = Object(Eh.a)(t, '#FFF'))
                              return t
                            }
                            return null
                          })
                          .catch(function() {
                            return null
                          })
                      )
                    )
                  case 4:
                  case 'end':
                    return e.stop()
                }
            }, e)
          })
        )).apply(this, arguments)
      }
      function Oh() {
        return (Oh = Object(w.a)(
          j.a.mark(function e(t) {
            var n
            return j.a.wrap(function(e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = Vb(t)[0]),
                      e.abrupt(
                        'return',
                        yh.a
                          .from(n)
                          .getPalette()
                          .then(function(e) {
                            return (null === e || void 0 === e ? void 0 : e.Vibrant) ? e.Vibrant.hex : null
                          })
                          .catch(function() {
                            return null
                          })
                      )
                    )
                  case 2:
                  case 'end':
                    return e.stop()
                }
            }, e)
          })
        )).apply(this, arguments)
      }
      function jh(e) {
        var t = Object(o.useState)('#008b8a'),
          n = Object(A.a)(t, 2),
          a = n[0],
          r = n[1]
        return (
          Object(o.useLayoutEffect)(
            function() {
              var t = !1
              return (
                e &&
                  (function(e) {
                    return xh.apply(this, arguments)
                  })(e).then(function(e) {
                    t || null === e || r(e)
                  }),
                function() {
                  ;(t = !0), r('#008b8a')
                }
              )
            },
            [e]
          ),
          a
        )
      }
      function Ah(e) {
        var t = Object(o.useState)('#008b8a'),
          n = Object(A.a)(t, 2),
          a = n[0],
          r = n[1]
        return (
          Object(o.useLayoutEffect)(
            function() {
              var t = !1
              return (
                e &&
                  (function(e) {
                    return Oh.apply(this, arguments)
                  })(e).then(function(e) {
                    t || null === e || r(e)
                  }),
                function() {
                  ;(t = !0), r('#008b8a')
                }
              )
            },
            [e]
          ),
          a
        )
      }
      function wh() {
        var e = Object(Ve.a)(['\n  margin: 0 10px;\n  width: 24px;\n  color: ', ';\n'])
        return (
          (wh = function() {
            return e
          }),
          e
        )
      }
      function kh() {
        var e = Object(Ve.a)([
          '\n  border-radius: 50%;\n  height: 24px;\n  width: 24px;\n  background-color: ',
          ';\n  :hover {\n    opacity: 0.8;\n  }\n'
        ])
        return (
          (kh = function() {
            return e
          }),
          e
        )
      }
      function Th() {
        var e = Object(Ve.a)([
          '\n  border-radius: 20px;\n  border: none;\n  background: ',
          ';\n  display: flex;\n  width: fit-content;\n  cursor: pointer;\n  outline: none;\n  padding: 0.4rem 0.4rem;\n  align-items: center;\n'
        ])
        return (
          (Th = function() {
            return e
          }),
          e
        )
      }
      var Ch = He.default.button(Th(), function(e) {
          return e.theme.bg1
        }),
        Ih = He.default.span(kh(), function(e) {
          var t = e.isActive,
            n = e.bgColor,
            a = e.theme
          return t ? n : a.bg4
        }),
        Sh = Object(He.default)(No)(wh(), function(e) {
          var t = e.theme
          return e.isActive ? t.text1 : t.text3
        })
      function Nh(e) {
        var t = e.id,
          n = e.isActive,
          a = e.bgColor,
          r = e.toggle
        return i.a.createElement(
          Ch,
          { id: t, isActive: n, onClick: r },
          n && i.a.createElement(Sh, { fontWeight: '600', margin: '0 6px', isActive: !0 }, 'ON'),
          i.a.createElement(Ih, { isActive: n, bgColor: a }),
          !n && i.a.createElement(Sh, { fontWeight: '600', margin: '0 6px', isActive: !1 }, 'OFF')
        )
      }
      function Rh() {
        var e = Object(Ve.a)(['\n  padding: 1rem;\n  height: 100%;\n  overflow: auto;\n  padding-bottom: 80px;\n'])
        return (
          (Rh = function() {
            return e
          }),
          e
        )
      }
      function Uh() {
        var e = Object(Ve.a)([
          '\n  background-color: ',
          ';\n  transition: 200ms;\n  align-items: center;\n  padding: 1rem;\n  border-radius: 20px;\n'
        ])
        return (
          (Uh = function() {
            return e
          }),
          e
        )
      }
      function Bh() {
        var e = Object(Ve.a)(['\n  font-size: 12px;\n  color: ', ';\n'])
        return (
          (Bh = function() {
            return e
          }),
          e
        )
      }
      function Lh() {
        var e = Object(Ve.a)([
          '\n  font-size: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 600;\n  color: ',
          ';\n'
        ])
        return (
          (Lh = function() {
            return e
          }),
          e
        )
      }
      function Wh() {
        var e = Object(Ve.a)([
          '\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n'
        ])
        return (
          (Wh = function() {
            return e
          }),
          e
        )
      }
      function zh() {
        var e = Object(Ve.a)([
          '\n  z-index: 100;\n  visibility: ',
          ';\n  opacity: ',
          ';\n  transition: visibility 150ms linear, opacity 150ms linear;\n  background: ',
          ';\n  border: 1px solid ',
          ';\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  color: ',
          ';\n  border-radius: 0.5rem;\n  padding: 1rem;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-gap: 8px;\n  font-size: 1rem;\n  text-align: left;\n'
        ])
        return (
          (zh = function() {
            return e
          }),
          e
        )
      }
      function Mh() {
        var e = Object(Ve.a)(['\n  padding: 0;\n  font-size: 1rem;\n  opacity: ', ';\n'])
        return (
          (Mh = function() {
            return e
          }),
          e
        )
      }
      function Ph() {
        var e = Object(Ve.a)(['\n  width: 100%;\n  height: 100%;\n'])
        return (
          (Ph = function() {
            return e
          }),
          e
        )
      }
      var Dh = Object(He.default)(vt)(Ph()),
        Fh = Object(He.default)(ao)(Mh(), function(e) {
          return e.disabled ? '0.4' : '1'
        }),
        qh = He.default.div(
          zh(),
          function(e) {
            return e.show ? 'visible' : 'hidden'
          },
          function(e) {
            return e.show ? 1 : 0
          },
          function(e) {
            return e.theme.bg2
          },
          function(e) {
            return e.theme.bg3
          },
          function(e) {
            return e.theme.text2
          }
        ),
        Vh = He.default.div(Wh()),
        Yh = He.default.div(Lh(), function(e) {
          var t = e.theme
          return e.active ? t.white : t.text2
        }),
        Hh = Object(He.default)(No)(Bh(), function(e) {
          var t = e.theme
          return e.active ? t.white : t.text2
        }),
        Qh = Object(He.default)(Xt)(Uh(), function(e) {
          var t = e.bgColor,
            n = e.active,
            a = e.theme
          return n ? (null !== t && void 0 !== t ? t : 'transparent') : a.bg2
        })
      function Xh(e) {
        return 'list-row-'.concat(e.replace(/\./g, '-'))
      }
      var Jh = Object(o.memo)(function(e) {
          var t = e.listUrl,
            n = Object(d.d)(function(e) {
              return e.lists.byUrl
            }),
            a = Object(d.c)(),
            r = n[t],
            c = r.current,
            u = r.pendingUpdate,
            l = Av(),
            m = Ah(null === c || void 0 === c ? void 0 : c.logoURI),
            p = (function(e) {
              var t = mn()
              return Boolean(null === t || void 0 === t ? void 0 : t.includes(e))
            })(t),
            f = Hv(!1),
            b = Object(A.a)(f, 2),
            v = b[0],
            h = b[1],
            g = Object(o.useRef)(),
            y = Object(o.useState)(),
            E = Object(A.a)(y, 2),
            x = E[0],
            O = E[1],
            j = Object(o.useState)(),
            w = Object(A.a)(j, 2),
            k = w[0],
            T = w[1],
            C = Object(fb.a)(x, k, {
              placement: 'auto',
              strategy: 'fixed',
              modifiers: [{ name: 'offset', options: { offset: [8, 8] } }]
            }),
            I = C.styles,
            S = C.attributes
          Du(g, v ? h : void 0)
          var N = Object(o.useCallback)(
              function() {
                u && (s.a.event({ category: 'Lists', action: 'Update List from List Select', label: t }), a(uf(t)))
              },
              [a, t, u]
            ),
            R = Object(o.useCallback)(
              function() {
                s.a.event({ category: 'Lists', action: 'Start Remove List', label: t }),
                  'REMOVE' === window.prompt('Please confirm you would like to remove this list by typing REMOVE') &&
                    (s.a.event({ category: 'Lists', action: 'Confirm Remove List', label: t }), a(rf(t)))
              },
              [a, t]
            ),
            U = Object(o.useCallback)(
              function() {
                s.a.event({ category: 'Lists', action: 'Enable List', label: t }), a(of(t))
              },
              [a, t]
            ),
            B = Object(o.useCallback)(
              function() {
                s.a.event({ category: 'Lists', action: 'Disable List', label: t }), a(cf(t))
              },
              [a, t]
            )
          return c
            ? i.a.createElement(
                Qh,
                { active: p, bgColor: m, key: t, id: Xh(t) },
                c.logoURI
                  ? i.a.createElement(jv, {
                      size: '40px',
                      style: { marginRight: '1rem' },
                      logoURI: c.logoURI,
                      alt: ''.concat(c.name, ' list logo')
                    })
                  : i.a.createElement('div', { style: { width: '24px', height: '24px', marginRight: '1rem' } }),
                i.a.createElement(
                  vt,
                  { style: { flex: '1' } },
                  i.a.createElement(Xt, null, i.a.createElement(Yh, { active: p }, c.name)),
                  i.a.createElement(
                    Qt,
                    { mt: '4px' },
                    i.a.createElement(Hh, { active: p, mr: '6px' }, c.tokens.length, ' tokens'),
                    i.a.createElement(
                      Vh,
                      { ref: g },
                      i.a.createElement(
                        si,
                        { onClick: h, ref: O, padding: '0' },
                        i.a.createElement(ih.a, { stroke: p ? l.bg1 : l.text1, size: 12 })
                      ),
                      v &&
                        i.a.createElement(
                          qh,
                          Object.assign({ show: !0, ref: T, style: I.popper }, S.popper),
                          i.a.createElement('div', null, c && lf(c.version)),
                          i.a.createElement(Ev, null),
                          i.a.createElement(
                            mo,
                            { href: 'https://tokenlists.org/token-list?url='.concat(t) },
                            'View list'
                          ),
                          i.a.createElement(Fh, { onClick: R, disabled: 1 === Object.keys(n).length }, 'Remove list'),
                          u && i.a.createElement(Fh, { onClick: N }, 'Update list')
                        )
                    )
                  )
                ),
                i.a.createElement(Nh, {
                  isActive: p,
                  bgColor: m,
                  toggle: function() {
                    p ? B() : U()
                  }
                })
              )
            : null
        }),
        Gh = He.default.div(Rh())
      function Kh(e) {
        var t = e.setModalView,
          n = e.setImportList,
          a = e.setListUrl,
          r = Av(),
          c = Object(o.useState)(''),
          u = Object(A.a)(c, 2),
          l = u[0],
          s = u[1],
          d = ln(),
          m = mn(),
          p = Object(o.useState)(),
          f = Object(A.a)(p, 2),
          b = f[0],
          v = f[1]
        Object(o.useEffect)(
          function() {
            !b && m && v(m)
          },
          [b, m]
        )
        var h = Object(o.useCallback)(function(e) {
            s(e.target.value)
          }, []),
          g = hh(),
          y = Object(o.useMemo)(
            function() {
              return Vb(l).length > 0 || Boolean(qb(l))
            },
            [l]
          ),
          E = Object(o.useMemo)(
            function() {
              return Object.keys(d)
                .filter(function(e) {
                  return Boolean(d[e].current) && !Boolean(Kt.includes(e))
                })
                .sort(function(e, t) {
                  var n = d[e].current,
                    a = d[t].current
                  return (null === b || void 0 === b ? void 0 : b.includes(e)) &&
                    !(null === b || void 0 === b ? void 0 : b.includes(t))
                    ? -1
                    : !(null === b || void 0 === b ? void 0 : b.includes(e)) &&
                      (null === b || void 0 === b ? void 0 : b.includes(t))
                    ? 1
                    : n && a
                    ? n.name.toLowerCase() < a.name.toLowerCase()
                      ? -1
                      : n.name.toLowerCase() === a.name.toLowerCase()
                      ? 0
                      : 1
                    : n
                    ? -1
                    : a
                    ? 1
                    : 0
                })
            },
            [d, b]
          ),
          x = Object(o.useState)(),
          O = Object(A.a)(x, 2),
          k = O[0],
          T = O[1],
          C = Object(o.useState)(),
          I = Object(A.a)(C, 2),
          S = I[0],
          N = I[1]
        Object(o.useEffect)(
          function() {
            function e() {
              return (e = Object(w.a)(
                j.a.mark(function e() {
                  return j.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          g(l, !1)
                            .then(function(e) {
                              return T(e)
                            })
                            .catch(function() {
                              return N('Error importing list')
                            })
                        case 1:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                })
              )).apply(this, arguments)
            }
            y
              ? (function() {
                  e.apply(this, arguments)
                })()
              : (T(void 0), '' !== l && N('Enter valid list location')),
              '' === l && N(void 0)
          },
          [g, l, y]
        )
        var R = Object.keys(d).includes(l),
          U = Object(o.useCallback)(
            function() {
              k && (n(k), t(sg.importList), a(l))
            },
            [l, n, a, t, k]
          )
        return i.a.createElement(
          Dh,
          null,
          i.a.createElement(
            vv,
            { gap: '14px' },
            i.a.createElement(
              Xt,
              null,
              i.a.createElement(gv, {
                type: 'text',
                id: 'list-add-input',
                placeholder: 'https:// or ipfs:// or ENS name',
                value: l,
                onChange: h
              })
            ),
            S
              ? i.a.createElement(
                  Vo,
                  { title: S, style: { textOverflow: 'ellipsis', overflow: 'hidden' }, error: !0 },
                  S
                )
              : null
          ),
          k &&
            i.a.createElement(
              vv,
              { style: { paddingTop: 0 } },
              i.a.createElement(
                Eu,
                { backgroundColor: r.bg2, padding: '12px 20px' },
                i.a.createElement(
                  Vt,
                  null,
                  i.a.createElement(
                    Qt,
                    null,
                    k.logoURI && i.a.createElement(jv, { logoURI: k.logoURI, size: '40px' }),
                    i.a.createElement(
                      bt,
                      { gap: '4px', style: { marginLeft: '20px' } },
                      i.a.createElement(Lo, { fontWeight: 600 }, k.name),
                      i.a.createElement(No, { fontSize: '12px' }, k.tokens.length, ' tokens')
                    )
                  ),
                  R
                    ? i.a.createElement(
                        Qt,
                        null,
                        i.a.createElement(
                          no,
                          { stroke: r.text2, size: '16px', marginRight: '10px' },
                          i.a.createElement(Sl.a, null)
                        ),
                        i.a.createElement(Lo, { color: r.text2 }, 'Loaded')
                      )
                    : i.a.createElement(
                        ii,
                        { style: { fontSize: '14px' }, padding: '6px 8px', width: 'fit-content', onClick: U },
                        'Import'
                      )
                )
              )
            ),
          i.a.createElement(yv, null),
          i.a.createElement(
            Gh,
            null,
            i.a.createElement(
              bt,
              { gap: 'md' },
              E.map(function(e) {
                return i.a.createElement(Jh, { key: e, listUrl: e })
              })
            )
          )
        )
      }
      function Zh() {
        var e = Object(Ve.a)([
          '\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  border-radius: 20px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-top: 1px solid ',
          ';\n  padding: 20px;\n  text-align: center;\n'
        ])
        return (
          (Zh = function() {
            return e
          }),
          e
        )
      }
      function _h() {
        var e = Object(Ve.a)([
          '\n  width: 100%;\n  height: calc(100% - 60px);\n  position: relative;\n  padding-bottom: 60px;\n'
        ])
        return (
          (_h = function() {
            return e
          }),
          e
        )
      }
      var $h = He.default.div(_h()),
        eg = He.default.div(Zh(), function(e) {
          return e.theme.bg3
        })
      function tg(e) {
        var t = e.setModalView,
          n = e.setImportToken,
          a = Le().chainId,
          r = Object(o.useState)(''),
          c = Object(A.a)(r, 2),
          u = c[0],
          l = c[1],
          s = Av(),
          m = Object(o.useRef)(),
          p = Object(o.useCallback)(function(e) {
            var t = e.target.value,
              n = na(t)
            l(n || t)
          }, []),
          f = na(u),
          b = nr(u),
          v = jr(),
          h = (function() {
            var e = Object(d.c)()
            return Object(o.useCallback)(
              function(t, n) {
                e(dr({ chainId: t, address: n }))
              },
              [e]
            )
          })(),
          g = Object(o.useCallback)(
            function() {
              a &&
                v &&
                v.map(function(e) {
                  return h(a, e.address)
                })
            },
            [h, v, a]
          ),
          y = Object(o.useMemo)(
            function() {
              return (
                a &&
                v.map(function(e) {
                  return i.a.createElement(
                    Vt,
                    { key: e.address, width: '100%' },
                    i.a.createElement(
                      Qt,
                      null,
                      i.a.createElement(_b, { currency: e, size: '20px' }),
                      i.a.createElement(
                        mo,
                        { href: ra(a, e.address, 'address') },
                        i.a.createElement(No, { ml: '10px', fontWeight: 600 }, e.symbol)
                      )
                    ),
                    i.a.createElement(
                      Qt,
                      null,
                      i.a.createElement(uo, {
                        onClick: function() {
                          return h(a, e.address)
                        }
                      }),
                      i.a.createElement(po, { href: ra(a, e.address, 'address') })
                    )
                  )
                })
              )
            },
            [v, a, h]
          )
        return i.a.createElement(
          $h,
          null,
          i.a.createElement(
            vt,
            { style: { width: '100%', flex: '1 1' } },
            i.a.createElement(
              vv,
              { gap: '14px' },
              i.a.createElement(
                Xt,
                null,
                i.a.createElement(gv, {
                  type: 'text',
                  id: 'token-search-input',
                  placeholder: '0x0000',
                  value: u,
                  autoComplete: 'off',
                  ref: m,
                  onChange: p
                })
              ),
              '' !== u && !f && i.a.createElement(Vo, { error: !0 }, 'Enter valid token address'),
              b &&
                i.a.createElement(
                  Eu,
                  { backgroundColor: s.bg2, padding: '10px 0' },
                  i.a.createElement(Nv, {
                    token: b,
                    showImportView: function() {
                      return t(sg.importToken)
                    },
                    setImportToken: n,
                    style: { height: 'fit-content' }
                  })
                )
            ),
            i.a.createElement(yv, null),
            i.a.createElement(
              vv,
              { gap: 'lg' },
              i.a.createElement(
                Vt,
                null,
                i.a.createElement(
                  No,
                  { fontWeight: 600 },
                  null === v || void 0 === v ? void 0 : v.length,
                  ' Custom ',
                  1 === v.length ? 'Token' : 'Tokens'
                ),
                v.length > 0 && i.a.createElement(eo, { onClick: g }, i.a.createElement(Do, null, 'Clear all'))
              ),
              y
            )
          ),
          i.a.createElement(
            eg,
            null,
            i.a.createElement(Fo, null, 'Tip: Custom tokens are stored locally in your browser')
          )
        )
      }
      function ng() {
        var e = Object(Ve.a)([
          '\n  width: 48%;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 12px;\n  font-weight: 600;\n  background-color: ',
          ';\n  color: ',
          ';\n  user-select: none;\n\n  :hover {\n    cursor: pointer;\n    opacity: 0.7;\n  }\n'
        ])
        return (
          (ng = function() {
            return e
          }),
          e
        )
      }
      function ag() {
        var e = Object(Ve.a)(['\n  background-color: ', ';\n  border-radius: 12px;\n  padding: 6px;\n'])
        return (
          (ag = function() {
            return e
          }),
          e
        )
      }
      function rg() {
        var e = Object(Ve.a)(['\n  width: 100%;\n  position: relative;\n  padding-bottom: 80px;\n'])
        return (
          (rg = function() {
            return e
          }),
          e
        )
      }
      var og = He.default.div(rg()),
        ig = Object(He.default)(Vt)(ag(), function(e) {
          return e.theme.bg3
        }),
        cg = He.default.div(
          ng(),
          function(e) {
            var t = e.theme
            return e.active ? t.bg1 : t.bg3
          },
          function(e) {
            var t = e.theme
            return e.active ? t.text1 : t.text2
          }
        )
      function ug(e) {
        var t = e.onDismiss,
          n = e.setModalView,
          a = e.setImportList,
          r = e.setImportToken,
          c = e.setListUrl,
          u = Object(o.useState)(!0),
          l = Object(A.a)(u, 2),
          s = l[0],
          d = l[1]
        return i.a.createElement(
          og,
          null,
          i.a.createElement(
            vv,
            null,
            i.a.createElement(
              Vt,
              null,
              i.a.createElement(Nr.a, {
                style: { cursor: 'pointer' },
                onClick: function() {
                  return n(sg.search)
                }
              }),
              i.a.createElement(Tr.b, { fontWeight: 500, fontSize: 20 }, 'Manage'),
              i.a.createElement(to, { onClick: t })
            )
          ),
          i.a.createElement(yv, null),
          i.a.createElement(
            vv,
            { style: { paddingBottom: 0 } },
            i.a.createElement(
              ig,
              null,
              i.a.createElement(
                cg,
                {
                  onClick: function() {
                    return d(!s)
                  },
                  active: s
                },
                'Lists'
              ),
              i.a.createElement(
                cg,
                {
                  onClick: function() {
                    return d(!s)
                  },
                  active: !s
                },
                'Tokens'
              )
            )
          ),
          s
            ? i.a.createElement(Kh, { setModalView: n, setImportList: a, setListUrl: c })
            : i.a.createElement(tg, { setModalView: n, setImportToken: r })
        )
      }
      function lg() {
        var e = Object(Ve.a)(['\n  position: relative;\n  width: 100%;\n  overflow: auto;\n'])
        return (
          (lg = function() {
            return e
          }),
          e
        )
      }
      var sg,
        dg = He.default.div(lg())
      function mg(e) {
        var t,
          n = e.listURL,
          a = e.list,
          r = e.setModalView,
          c = e.onDismiss,
          u = Av(),
          l = Object(d.c)(),
          m = Object(o.useState)(!1),
          p = Object(A.a)(m, 2),
          f = p[0],
          b = p[1],
          v = ln(),
          h = hh(),
          g = Boolean(null === (t = v[n]) || void 0 === t ? void 0 : t.loadingRequestId),
          y = Object(o.useState)(null),
          E = Object(A.a)(y, 2),
          x = E[0],
          O = E[1],
          j = Object(o.useCallback)(
            function() {
              g ||
                (O(null),
                h(n)
                  .then(function() {
                    s.a.event({ category: 'Lists', action: 'Add List', label: n }), l(of(n)), r(sg.manage)
                  })
                  .catch(function(e) {
                    s.a.event({ category: 'Lists', action: 'Add List Failed', label: n }), O(e.message), l(rf(n))
                  }))
            },
            [g, l, h, n, r]
          )
        return i.a.createElement(
          dg,
          null,
          i.a.createElement(
            vv,
            { gap: '14px', style: { width: '100%', flex: '1 1' } },
            i.a.createElement(
              Vt,
              null,
              i.a.createElement(Nr.a, {
                style: { cursor: 'pointer' },
                onClick: function() {
                  return r(sg.manage)
                }
              }),
              i.a.createElement(zo, null, 'Import List'),
              i.a.createElement(to, { onClick: c })
            )
          ),
          i.a.createElement(km, null),
          i.a.createElement(
            vv,
            { gap: 'md' },
            i.a.createElement(
              bt,
              { gap: 'md' },
              i.a.createElement(
                Eu,
                { backgroundColor: u.bg2, padding: '12px 20px' },
                i.a.createElement(
                  Vt,
                  null,
                  i.a.createElement(
                    Qt,
                    null,
                    a.logoURI && i.a.createElement(jv, { logoURI: a.logoURI, size: '40px' }),
                    i.a.createElement(
                      bt,
                      { gap: 'sm', style: { marginLeft: '20px' } },
                      i.a.createElement(
                        Qt,
                        null,
                        i.a.createElement(Lo, { fontWeight: 600, mr: '6px' }, a.name),
                        i.a.createElement(fv, null),
                        i.a.createElement(No, { fontSize: '16px', ml: '6px' }, a.tokens.length, ' tokens')
                      ),
                      i.a.createElement(
                        mo,
                        { href: 'https://tokenlists.org/token-list?url='.concat(n) },
                        i.a.createElement(No, { fontSize: '12px', color: u.blue1 }, n)
                      )
                    )
                  )
                )
              ),
              i.a.createElement(
                Eu,
                { style: { backgroundColor: Object(Ke.d)(0.8, u.red1) } },
                i.a.createElement(
                  bt,
                  { justify: 'center', style: { textAlign: 'center', gap: '16px', marginBottom: '12px' } },
                  i.a.createElement(sm.a, { stroke: u.red1, size: 32 }),
                  i.a.createElement(
                    Lo,
                    { fontWeight: 500, fontSize: 20, color: u.red1 },
                    'Import at your own risk',
                    ' '
                  )
                ),
                i.a.createElement(
                  bt,
                  { style: { textAlign: 'center', gap: '16px', marginBottom: '12px' } },
                  i.a.createElement(
                    Lo,
                    { fontWeight: 500, color: u.red1 },
                    'By adding this list you are implicitly trusting that the data is correct. Anyone can create a list, including creating fake versions of existing lists and lists that claim to represent projects that do not have one.'
                  ),
                  i.a.createElement(
                    Lo,
                    { fontWeight: 600, color: u.red1 },
                    'If you purchase a token from this list, you may not be able to sell it back.'
                  )
                ),
                i.a.createElement(
                  Ht,
                  {
                    justify: 'center',
                    style: { cursor: 'pointer' },
                    onClick: function() {
                      return b(!f)
                    }
                  },
                  i.a.createElement(bv, {
                    name: 'confirmed',
                    type: 'checkbox',
                    checked: f,
                    onChange: function() {
                      return b(!f)
                    }
                  }),
                  i.a.createElement(
                    Lo,
                    { ml: '10px', fontSize: '16px', color: u.red1, fontWeight: 500 },
                    'I understand'
                  )
                )
              ),
              i.a.createElement(
                ii,
                { disabled: !f, altDisabledStyle: !0, borderRadius: '20px', padding: '10px 1rem', onClick: j },
                'Import'
              ),
              x
                ? i.a.createElement(
                    Vo,
                    { title: x, style: { textOverflow: 'ellipsis', overflow: 'hidden' }, error: !0 },
                    x
                  )
                : null
            )
          )
        )
      }
      function pg(e) {
        var t = e.isOpen,
          n = e.onDismiss,
          a = e.onCurrencySelect,
          r = e.selectedCurrency,
          c = e.otherSelectedCurrency,
          u = e.showCommonBases,
          l = void 0 !== u && u,
          s = Object(o.useState)(sg.manage),
          d = Object(A.a)(s, 2),
          m = d[0],
          p = d[1],
          f = db(t)
        Object(o.useEffect)(
          function() {
            t && !f && p(sg.search)
          },
          [t, f]
        )
        var b = Object(o.useCallback)(
            function(e) {
              a(e), n()
            },
            [n, a]
          ),
          v = Tl(m),
          h = Object(o.useState)(),
          g = Object(A.a)(h, 2),
          y = g[0],
          E = g[1],
          x = Object(o.useState)(),
          O = Object(A.a)(x, 2),
          j = O[0],
          w = O[1],
          k = Object(o.useState)(),
          T = Object(A.a)(k, 2),
          C = T[0],
          I = T[1],
          S = m === sg.importToken || m === sg.importList ? 40 : 80
        return i.a.createElement(
          lt,
          { isOpen: t, onDismiss: n, maxHeight: 80, minHeight: S },
          m === sg.search
            ? i.a.createElement(Zv, {
                isOpen: t,
                onDismiss: n,
                onCurrencySelect: b,
                selectedCurrency: r,
                otherSelectedCurrency: c,
                showCommonBases: l,
                showImportView: function() {
                  return p(sg.importToken)
                },
                setImportToken: E,
                showManageView: function() {
                  return p(sg.manage)
                }
              })
            : m === sg.importToken && y
            ? i.a.createElement(oh, {
                tokens: [y],
                onDismiss: n,
                onBack: function() {
                  return p(v && v !== sg.importToken ? v : sg.search)
                },
                handleCurrencySelect: b
              })
            : m === sg.importList && j && C
            ? i.a.createElement(mg, { list: j, listURL: C, onDismiss: n, setModalView: p })
            : m === sg.manage
            ? i.a.createElement(ug, {
                onDismiss: n,
                setModalView: p,
                setImportToken: E,
                setImportList: w,
                setListUrl: I
              })
            : ''
        )
      }
      function fg() {
        var e = Object(Ve.a)(['\n  position: absolute;\n  left: ', ' !important;\n'])
        return (
          (fg = function() {
            return e
          }),
          e
        )
      }
      function bg() {
        var e = Object(Ve.a)(['\n  z-index: 2;\n'])
        return (
          (bg = function() {
            return e
          }),
          e
        )
      }
      function vg() {
        var e = Object(Ve.a)([
          '\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  margin-right: ',
          ';\n'
        ])
        return (
          (vg = function() {
            return e
          }),
          e
        )
      }
      !(function(e) {
        ;(e[(e.search = 0)] = 'search'),
          (e[(e.manage = 1)] = 'manage'),
          (e[(e.importToken = 2)] = 'importToken'),
          (e[(e.importList = 3)] = 'importList')
      })(sg || (sg = {}))
      var hg = He.default.div(vg(), function(e) {
          var t = e.sizeraw
          return e.margin && (t / 3 + 8).toString() + 'px'
        }),
        gg = Object(He.default)(_b)(bg()),
        yg = Object(He.default)(_b)(fg(), function(e) {
          return '-' + (e.sizeraw / 2).toString() + 'px'
        })
      function Eg(e) {
        var t = e.currency0,
          n = e.currency1,
          a = e.size,
          r = void 0 === a ? 16 : a,
          o = e.margin,
          c = void 0 !== o && o
        return i.a.createElement(
          hg,
          { sizeraw: r, margin: c },
          t && i.a.createElement(gg, { currency: t, size: r.toString() + 'px' }),
          n && i.a.createElement(yg, { currency: n, size: r.toString() + 'px', sizeraw: r })
        )
      }
      function xg() {
        var e = Object(Ve.a)([
          '\n  color: ',
          ';\n  width: 0;\n  position: relative;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: ',
          ';\n  font-size: ',
          ';\n  text-align: ',
          ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  [type='number'] {\n    -moz-appearance: textfield;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ",
          ';\n  }\n'
        ])
        return (
          (xg = function() {
            return e
          }),
          e
        )
      }
      var Og = He.default.input(
          xg(),
          function(e) {
            var t = e.error,
              n = e.theme
            return t ? n.red1 : n.text1
          },
          function(e) {
            return e.theme.bg1
          },
          function(e) {
            var t = e.fontSize
            return null !== t && void 0 !== t ? t : '24px'
          },
          function(e) {
            var t = e.align
            return t && t
          },
          function(e) {
            return e.theme.text4
          }
        ),
        jg = RegExp('^\\d*(?:\\\\[.])?\\d*$'),
        Ag = i.a.memo(function(e) {
          var t = e.value,
            n = e.onUserInput,
            a = e.placeholder,
            r = Object(Xe.a)(e, ['value', 'onUserInput', 'placeholder'])
          return i.a.createElement(
            Og,
            Object.assign({}, r, {
              value: t,
              onChange: function(e) {
                var t
                ;('' === (t = e.target.value.replace(/,/g, '.')) ||
                  jg.test(t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))) &&
                  n(t)
              },
              inputMode: 'decimal',
              title: 'Token Amount',
              autoComplete: 'off',
              autoCorrect: 'off',
              type: 'text',
              pattern: '^[0-9]*[.,]?[0-9]*$',
              placeholder: a || '0.0',
              minLength: 1,
              maxLength: 79,
              spellCheck: 'false'
            })
          )
        })
      function wg() {
        return (wg =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
          }).apply(this, arguments)
      }
      function kg(e, t) {
        if (null == e) return {}
        var n,
          a,
          r = (function(e, t) {
            if (null == e) return {}
            var n,
              a,
              r = {},
              o = Object.keys(e)
            for (a = 0; a < o.length; a++) (n = o[a]), t.indexOf(n) >= 0 || (r[n] = e[n])
            return r
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          for (a = 0; a < o.length; a++)
            (n = o[a]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]))
        }
        return r
      }
      var Tg = i.a.createElement('path', { d: 'M0.97168 1L6.20532 6L11.439 1', stroke: '#AEAEAE' }),
        Cg = function(e) {
          var t = e.svgRef,
            n = e.title,
            a = kg(e, ['svgRef', 'title'])
          return i.a.createElement(
            'svg',
            wg({ width: 12, height: 7, viewBox: '0 0 12 7', fill: 'none', ref: t }, a),
            n ? i.a.createElement('title', null, n) : null,
            Tg
          )
        },
        Ig = i.a.forwardRef(function(e, t) {
          return i.a.createElement(Cg, wg({ svgRef: t }, e))
        })
      n.p
      function Sg() {
        var e = Object(Ve.a)(['\n    margin-right: 0.5rem;\n  '])
        return (
          (Sg = function() {
            return e
          }),
          e
        )
      }
      function Ng() {
        var e = Object(Ve.a)([
          '\n  height: 28px;\n  background-color: ',
          ';\n  border: 1px solid ',
          ';\n  border-radius: 0.5rem;\n  font-size: 0.875rem;\n\n  font-weight: 500;\n  cursor: pointer;\n  margin-right: 0.5rem;\n  color: ',
          ';\n  :hover {\n    border: 1px solid ',
          ';\n  }\n  :focus {\n    border: 1px solid ',
          ';\n    outline: none;\n  }\n\n  ',
          ';\n'
        ])
        return (
          (Ng = function() {
            return e
          }),
          e
        )
      }
      function Rg() {
        var e = Object(Ve.a)(['\n  ', '\n  font-size:  ', ';\n\n'])
        return (
          (Rg = function() {
            return e
          }),
          e
        )
      }
      function Ug() {
        var e = Object(Ve.a)(['\n  border-radius: ', ';\n  border: 1px solid ', ';\n  background-color: ', ';\n'])
        return (
          (Ug = function() {
            return e
          }),
          e
        )
      }
      function Bg() {
        var e = Object(Ve.a)([
          '\n  ',
          '\n  position: relative;\n  border-radius: ',
          ';\n  background-color: ',
          ';\n  z-index: 1;\n'
        ])
        return (
          (Bg = function() {
            return e
          }),
          e
        )
      }
      function Lg() {
        var e = Object(Ve.a)([
          '\n  margin: 0 0.25rem 0 0.5rem;\n  height: 35%;\n\n  path {\n    stroke: ',
          ';\n    stroke-width: 1.5px;\n  }\n'
        ])
        return (
          (Lg = function() {
            return e
          }),
          e
        )
      }
      function Wg() {
        var e = Object(Ve.a)(['\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n'])
        return (
          (Wg = function() {
            return e
          }),
          e
        )
      }
      function zg() {
        var e = Object(Ve.a)([
          '\n  ',
          '\n  align-items: center;\n  color: ',
          ';\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem 0 1rem;\n  span:hover {\n    cursor: pointer;\n    color: ',
          ';\n  }\n'
        ])
        return (
          (zg = function() {
            return e
          }),
          e
        )
      }
      function Mg() {
        var e = Object(Ve.a)([
          '\n  align-items: center;\n  height: 2.2rem;\n  font-size: 20px;\n  font-weight: 500;\n  background-color: ',
          ';\n  color: ',
          ';\n  border-radius: 12px;\n  box-shadow: ',
          ';\n  outline: none;\n  cursor: pointer;\n  user-select: none;\n  border: none;\n  padding: 0 0.5rem;\n\n  :focus,\n  :hover {\n    background-color: ',
          ';\n  }\n'
        ])
        return (
          (Mg = function() {
            return e
          }),
          e
        )
      }
      function Pg() {
        var e = Object(Ve.a)(['\n  ', '\n  align-items: center;\n  padding: ', ';\n'])
        return (
          (Pg = function() {
            return e
          }),
          e
        )
      }
      var Dg = He.default.div(
          Pg(),
          function(e) {
            return e.theme.flexRowNoWrap
          },
          function(e) {
            return e.selected ? '0.75rem 0.5rem 0.75rem 1rem' : '0.75rem 0.75rem 0.75rem 1rem'
          }
        ),
        Fg = He.default.button(
          Mg(),
          function(e) {
            var t = e.selected,
              n = e.theme
            return t ? n.bg1 : n.primary1
          },
          function(e) {
            var t = e.selected,
              n = e.theme
            return t ? n.text1 : n.white
          },
          function(e) {
            return e.selected ? 'none' : '0px 6px 10px rgba(0, 0, 0, 0.075)'
          },
          function(e) {
            var t = e.selected,
              n = e.theme
            return t ? n.bg2 : Object(Ke.a)(0.05, n.primary1)
          }
        ),
        qg = He.default.div(
          zg(),
          function(e) {
            return e.theme.flexRowNoWrap
          },
          function(e) {
            return e.theme.text1
          },
          function(e) {
            var t = e.theme
            return Object(Ke.a)(0.2, t.text2)
          }
        ),
        Vg = He.default.span(Wg()),
        Yg = Object(He.default)(Ig)(Lg(), function(e) {
          var t = e.selected,
            n = e.theme
          return t ? n.text1 : n.white
        }),
        Hg = He.default.div(
          Bg(),
          function(e) {
            return e.theme.flexColumnNoWrap
          },
          function(e) {
            return e.hideInput ? '8px' : '20px'
          },
          function(e) {
            return e.theme.bg2
          }
        ),
        Qg = He.default.div(
          Ug(),
          function(e) {
            return e.hideInput ? '8px' : '20px'
          },
          function(e) {
            return e.theme.bg2
          },
          function(e) {
            return e.theme.bg1
          }
        ),
        Xg = He.default.span(
          Rg(),
          function(e) {
            return e.active ? '  margin: 0 0.25rem 0 0.75rem;' : '  margin: 0 0.25rem 0 0.25rem;'
          },
          function(e) {
            return e.active ? '20px' : '16px'
          }
        ),
        Jg = He.default.button(
          Ng(),
          function(e) {
            return e.theme.primary5
          },
          function(e) {
            return e.theme.primary5
          },
          function(e) {
            return e.theme.primaryText1
          },
          function(e) {
            return e.theme.primary1
          },
          function(e) {
            return e.theme.primary1
          },
          function(e) {
            return e.theme.mediaWidth.upToExtraSmall(Sg())
          }
        )
      function Gg(e) {
        var t = e.value,
          n = e.onUserInput,
          a = e.onMax,
          r = e.showMaxButton,
          c = e.label,
          u = void 0 === c ? 'Input' : c,
          l = e.onCurrencySelect,
          s = e.currency,
          d = e.disableCurrencySelect,
          m = void 0 !== d && d,
          p = e.hideBalance,
          f = void 0 !== p && p,
          b = e.pair,
          v = void 0 === b ? null : b,
          h = e.hideInput,
          g = void 0 !== h && h,
          y = e.otherCurrency,
          E = e.id,
          x = e.showCommonBases,
          O = e.customBalanceText,
          j = Object(Me.b)().t,
          w = Object(o.useState)(!1),
          k = Object(A.a)(w, 2),
          T = k[0],
          C = k[1],
          I = Le().account,
          S = su(null !== I && void 0 !== I ? I : void 0, null !== s && void 0 !== s ? s : void 0),
          N = Av(),
          R = Object(o.useCallback)(
            function() {
              C(!1)
            },
            [C]
          )
        return i.a.createElement(
          Hg,
          { id: E },
          i.a.createElement(
            Qg,
            { hideInput: g },
            !g &&
              i.a.createElement(
                qg,
                null,
                i.a.createElement(
                  Vt,
                  null,
                  i.a.createElement(Lo, { color: N.text2, fontWeight: 500, fontSize: 14 }, u),
                  I &&
                    i.a.createElement(
                      Lo,
                      {
                        onClick: a,
                        color: N.text2,
                        fontWeight: 500,
                        fontSize: 14,
                        style: { display: 'inline', cursor: 'pointer' }
                      },
                      !f && s && S
                        ? (null !== O && void 0 !== O ? O : 'Balance: ') +
                            (null === S || void 0 === S ? void 0 : S.toSignificant(6))
                        : ' -'
                    )
                )
              ),
            i.a.createElement(
              Dg,
              { style: g ? { padding: '0', borderRadius: '8px' } : {}, selected: m },
              !g &&
                i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(Ag, {
                    className: 'token-amount-input',
                    value: t,
                    onUserInput: function(e) {
                      n(e)
                    }
                  }),
                  I && s && r && 'To' !== u && i.a.createElement(Jg, { onClick: a }, 'MAX')
                ),
              i.a.createElement(
                Fg,
                {
                  selected: !!s,
                  className: 'open-currency-select-button',
                  onClick: function() {
                    m || C(!0)
                  }
                },
                i.a.createElement(
                  Vg,
                  null,
                  v
                    ? i.a.createElement(Eg, { currency0: v.token0, currency1: v.token1, size: 24, margin: !0 })
                    : s
                    ? i.a.createElement(_b, { currency: s, size: '24px' })
                    : null,
                  v
                    ? i.a.createElement(
                        Xg,
                        { className: 'pair-name-container' },
                        null === v || void 0 === v ? void 0 : v.token0.symbol,
                        ':',
                        null === v || void 0 === v ? void 0 : v.token1.symbol
                      )
                    : i.a.createElement(
                        Xg,
                        { className: 'token-symbol-container', active: Boolean(s && s.symbol) },
                        (s && s.symbol && s.symbol.length > 20
                          ? s.symbol.slice(0, 4) + '...' + s.symbol.slice(s.symbol.length - 5, s.symbol.length)
                          : null === s || void 0 === s
                          ? void 0
                          : s.symbol) || j('selectToken')
                      ),
                  !m && i.a.createElement(Yg, { selected: !!s })
                )
              )
            )
          ),
          !m &&
            l &&
            i.a.createElement(pg, {
              isOpen: T,
              onDismiss: R,
              onCurrencySelect: l,
              selectedCurrency: s,
              otherSelectedCurrency: y,
              showCommonBases: x
            })
        )
      }
      function Kg() {
        var e = Object(Ve.a)([
          '\n  border-radius: 12px;\n  border: none;\n  background: ',
          ';\n  display: flex;\n  width: fit-content;\n  cursor: pointer;\n  outline: none;\n  padding: 0;\n'
        ])
        return (
          (Kg = function() {
            return e
          }),
          e
        )
      }
      function Zg() {
        var e = Object(Ve.a)([
          '\n  padding: 0.25rem 0.5rem;\n  border-radius: 14px;\n  background: ',
          ';\n  color: ',
          ';\n  font-size: 1rem;\n  font-weight: 400;\n\n  padding: 0.35rem 0.6rem;\n  border-radius: 12px;\n  background: ',
          ';\n  color: ',
          ';\n  font-size: 1rem;\n  font-weight: ',
          ';\n  :hover {\n    user-select: ',
          ';\n    background: ',
          ';\n    color: ',
          ';\n  }\n'
        ])
        return (
          (Zg = function() {
            return e
          }),
          e
        )
      }
      var _g,
        $g,
        ey = He.default.span(
          Zg(),
          function(e) {
            var t = e.theme,
              n = e.isActive,
              a = e.isOnSwitch
            return n ? (a ? t.primary1 : t.text4) : 'none'
          },
          function(e) {
            var t = e.theme,
              n = e.isActive,
              a = e.isOnSwitch
            return n ? (a ? t.white : t.text2) : t.text3
          },
          function(e) {
            var t = e.theme,
              n = e.isActive,
              a = e.isOnSwitch
            return n ? (a ? t.primary1 : t.text4) : 'none'
          },
          function(e) {
            var t = e.theme,
              n = e.isActive,
              a = e.isOnSwitch
            return n && a ? t.white : t.text2
          },
          function(e) {
            return e.isOnSwitch ? '500' : '400'
          },
          function(e) {
            return e.isOnSwitch ? 'none' : 'initial'
          },
          function(e) {
            var t = e.theme,
              n = e.isActive,
              a = e.isOnSwitch
            return n ? (a ? t.primary1 : t.text3) : 'none'
          },
          function(e) {
            var t = e.theme,
              n = e.isActive,
              a = e.isOnSwitch
            return n ? (a ? t.white : t.text2) : t.text3
          }
        ),
        ty = He.default.button(Kg(), function(e) {
          return e.theme.bg3
        })
      function ny(e) {
        var t = e.id,
          n = e.isActive,
          a = e.toggle
        return i.a.createElement(
          ty,
          { id: t, isActive: n, onClick: a },
          i.a.createElement(ey, { isActive: n, isOnSwitch: !0 }, 'On'),
          i.a.createElement(ey, { isActive: !n, isOnSwitch: !1 }, 'Off')
        )
      }
      function ay() {
        var e = Object(Ve.a)(['\n    display: none;  \n  '])
        return (
          (ay = function() {
            return e
          }),
          e
        )
      }
      function ry() {
        var e = Object(Ve.a)(['\n  color: #f3841e;\n  ', '\n'])
        return (
          (ry = function() {
            return e
          }),
          e
        )
      }
      function oy() {
        var e = Object(Ve.a)([
          '\n  height: 2rem;\n  position: relative;\n  padding: 0 0.75rem;\n  flex: 1;\n  border: ',
          ';\n  :hover {\n    border: ',
          ';\n  }\n\n  input {\n    width: 100%;\n    height: 100%;\n    border: 0px;\n    border-radius: 2rem;\n  }\n'
        ])
        return (
          (oy = function() {
            return e
          }),
          e
        )
      }
      function iy() {
        var e = Object(Ve.a)([
          '\n  background: ',
          ';\n  font-size: 16px;\n  width: auto;\n  outline: none;\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n  color: ',
          ';\n  text-align: right;\n'
        ])
        return (
          (iy = function() {
            return e
          }),
          e
        )
      }
      function cy() {
        var e = Object(Ve.a)([
          '\n  margin-right: 8px;\n  :hover {\n    cursor: pointer;\n  }\n  background-color: ',
          ';\n  color: ',
          ';\n'
        ])
        return (
          (cy = function() {
            return e
          }),
          e
        )
      }
      function uy() {
        var e = Object(Ve.a)([
          '\n  color: ',
          ';\n  align-items: center;\n  height: 2rem;\n  border-radius: 36px;\n  font-size: 1rem;\n  width: auto;\n  min-width: 3.5rem;\n  border: 1px solid ',
          ';\n  outline: none;\n  background: ',
          ';\n  :hover {\n    border: 1px solid ',
          ';\n  }\n  :focus {\n    border: 1px solid ',
          ';\n  }\n'
        ])
        return (
          (uy = function() {
            return e
          }),
          e
        )
      }
      !(function(e) {
        ;(e.InvalidInput = 'InvalidInput'), (e.RiskyLow = 'RiskyLow'), (e.RiskyHigh = 'RiskyHigh')
      })(_g || (_g = {})),
        (function(e) {
          e.InvalidInput = 'InvalidInput'
        })($g || ($g = {}))
      var ly = He.default.button(
          uy(),
          function(e) {
            return e.theme.text1
          },
          function(e) {
            return e.theme.bg3
          },
          function(e) {
            return e.theme.bg1
          },
          function(e) {
            return e.theme.bg4
          },
          function(e) {
            return e.theme.primary1
          }
        ),
        sy = Object(He.default)(ly)(
          cy(),
          function(e) {
            var t = e.active,
              n = e.theme
            return t && n.primary1
          },
          function(e) {
            var t = e.active,
              n = e.theme
            return t ? n.white : n.text1
          }
        ),
        dy = He.default.input(
          iy(),
          function(e) {
            return e.theme.bg1
          },
          function(e) {
            var t = e.theme
            return 'red' === e.color ? t.red1 : t.text1
          }
        ),
        my = Object(He.default)(ly)(
          oy(),
          function(e) {
            var t = e.theme,
              n = e.active,
              a = e.warning
            return n && '1px solid '.concat(a ? t.red1 : t.primary1)
          },
          function(e) {
            var t = e.theme,
              n = e.active,
              a = e.warning
            return n && '1px solid '.concat(a ? Object(Ke.a)(0.1, t.red1) : Object(Ke.a)(0.1, t.primary1))
          }
        ),
        py = He.default.span(ry(), function(e) {
          return e.theme.mediaWidth.upToSmall(ay())
        })
      function fy(e) {
        var t,
          n,
          a = e.rawSlippage,
          r = e.setRawSlippage,
          c = e.deadline,
          u = e.setDeadline,
          l = Object(o.useContext)(He.ThemeContext),
          s = Object(o.useRef)(),
          d = Object(o.useState)(''),
          m = Object(A.a)(d, 2),
          p = m[0],
          f = m[1],
          b = Object(o.useState)(''),
          v = Object(A.a)(b, 2),
          h = v[0],
          g = v[1],
          y = '' === p || (a / 100).toFixed(2) === Number.parseFloat(p).toFixed(2),
          E = '' === h || (c / 60).toString() === h
        function x(e) {
          f(e)
          try {
            var t = Number.parseInt((100 * Number.parseFloat(e)).toString())
            !Number.isNaN(t) && t < 5e3 && r(t)
          } catch (n) {}
        }
        function O(e) {
          g(e)
          try {
            var t = 60 * Number.parseInt(e)
            !Number.isNaN(t) && t > 0 && u(t)
          } catch (n) {}
        }
        return (
          (t = '' === p || y ? (y && a < 50 ? _g.RiskyLow : y && a > 500 ? _g.RiskyHigh : void 0) : _g.InvalidInput),
          (n = '' === h || E ? void 0 : $g.InvalidInput),
          i.a.createElement(
            bt,
            { gap: 'md' },
            i.a.createElement(
              bt,
              { gap: 'sm' },
              i.a.createElement(
                Qt,
                null,
                i.a.createElement(Uo, { fontWeight: 400, fontSize: 14, color: l.text2 }, 'Slippage tolerance'),
                i.a.createElement(Rb, {
                  text: 'Your transaction will revert if the price changes unfavorably by more than this percentage.'
                })
              ),
              i.a.createElement(
                Vt,
                null,
                i.a.createElement(
                  sy,
                  {
                    onClick: function() {
                      f(''), r(10)
                    },
                    active: 10 === a
                  },
                  '0.1%'
                ),
                i.a.createElement(
                  sy,
                  {
                    onClick: function() {
                      f(''), r(50)
                    },
                    active: 50 === a
                  },
                  '0.5%'
                ),
                i.a.createElement(
                  sy,
                  {
                    onClick: function() {
                      f(''), r(100)
                    },
                    active: 100 === a
                  },
                  '1%'
                ),
                i.a.createElement(
                  my,
                  { active: ![10, 50, 100].includes(a), warning: !y, tabIndex: -1 },
                  i.a.createElement(
                    Vt,
                    null,
                    !p || (t !== _g.RiskyLow && t !== _g.RiskyHigh)
                      ? null
                      : i.a.createElement(
                          py,
                          null,
                          i.a.createElement('span', { role: 'img', 'aria-label': 'warning' }, '\u26a0\ufe0f')
                        ),
                    i.a.createElement(dy, {
                      ref: s,
                      placeholder: (a / 100).toFixed(2),
                      value: p,
                      onBlur: function() {
                        x((a / 100).toFixed(2))
                      },
                      onChange: function(e) {
                        return x(e.target.value)
                      },
                      color: y ? '' : 'red'
                    }),
                    '%'
                  )
                )
              ),
              !!t &&
                i.a.createElement(
                  Vt,
                  { style: { fontSize: '14px', paddingTop: '7px', color: t === _g.InvalidInput ? 'red' : '#F3841E' } },
                  t === _g.InvalidInput
                    ? 'Enter a valid slippage percentage'
                    : t === _g.RiskyLow
                    ? 'Your transaction may fail'
                    : 'Your transaction may be frontrun'
                )
            ),
            i.a.createElement(
              bt,
              { gap: 'sm' },
              i.a.createElement(
                Qt,
                null,
                i.a.createElement(Uo, { fontSize: 14, fontWeight: 400, color: l.text2 }, 'Transaction deadline'),
                i.a.createElement(Rb, {
                  text: 'Your transaction will revert if it is pending for more than this long.'
                })
              ),
              i.a.createElement(
                Qt,
                null,
                i.a.createElement(
                  my,
                  { style: { width: '80px' }, tabIndex: -1 },
                  i.a.createElement(dy, {
                    color: n ? 'red' : void 0,
                    onBlur: function() {
                      O((c / 60).toString())
                    },
                    placeholder: (c / 60).toString(),
                    value: h,
                    onChange: function(e) {
                      return O(e.target.value)
                    }
                  })
                ),
                i.a.createElement(Lo, { style: { paddingLeft: '8px' }, fontSize: 14 }, 'minutes')
              )
            )
          )
        )
      }
      function by() {
        var e = Object(Ve.a)([
          '\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 0;\n  background-color: ',
          ';\n  border-radius: 20px;\n'
        ])
        return (
          (by = function() {
            return e
          }),
          e
        )
      }
      function vy() {
        var e = Object(Ve.a)(['\n  width: 100%;\n  height: 1px;\n  background-color: ', ';\n'])
        return (
          (vy = function() {
            return e
          }),
          e
        )
      }
      function hy() {
        var e = Object(Ve.a)(['\n    min-width: 18.125rem;\n  '])
        return (
          (hy = function() {
            return e
          }),
          e
        )
      }
      function gy() {
        var e = Object(Ve.a)([
          '\n  min-width: 20.125rem;\n  background-color: ',
          ';\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  font-size: 1rem;\n  position: absolute;\n  top: 3rem;\n  right: 0rem;\n  z-index: 100;\n\n  ',
          ';\n'
        ])
        return (
          (gy = function() {
            return e
          }),
          e
        )
      }
      function yy() {
        var e = Object(Ve.a)([
          '\n  margin-left: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border: none;\n  text-align: left;\n'
        ])
        return (
          (yy = function() {
            return e
          }),
          e
        )
      }
      function Ey() {
        var e = Object(Ve.a)(['\n  position: absolute;\n  bottom: -6px;\n  right: 0px;\n  font-size: 14px;\n'])
        return (
          (Ey = function() {
            return e
          }),
          e
        )
      }
      function xy() {
        var e = Object(Ve.a)([
          '\n  position: relative;\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: transparent;\n  margin: 0;\n  padding: 0;\n  height: 35px;\n\n  padding: 0.15rem 0.5rem;\n  border-radius: 0.5rem;\n\n  :hover,\n  :focus {\n    cursor: pointer;\n    outline: none;\n  }\n\n  svg {\n    margin-top: 2px;\n  }\n'
        ])
        return (
          (xy = function() {
            return e
          }),
          e
        )
      }
      function Oy() {
        var e = Object(Ve.a)([
          '\n  height: 20px;\n  width: 20px;\n  :hover {\n    cursor: pointer;\n  }\n\n  > * {\n    stroke: ',
          ';\n  }\n'
        ])
        return (
          (Oy = function() {
            return e
          }),
          e
        )
      }
      function jy() {
        var e = Object(Ve.a)([
          '\n  height: 20px;\n  width: 20px;\n\n  > * {\n    stroke: ',
          ';\n  }\n\n  :hover {\n    opacity: 0.7;\n  }\n'
        ])
        return (
          (jy = function() {
            return e
          }),
          e
        )
      }
      var Ay,
        wy = Object(He.default)(ih.a)(jy(), function(e) {
          return e.theme.text2
        }),
        ky = Object(He.default)(Cr.a)(Oy(), function(e) {
          return e.theme.text1
        }),
        Ty = He.default.button(xy()),
        Cy = He.default.div(Ey()),
        Iy = He.default.div(yy()),
        Sy = He.default.span(
          gy(),
          function(e) {
            return e.theme.bg2
          },
          function(e) {
            return e.theme.mediaWidth.upToMedium(hy())
          }
        ),
        Ny = He.default.div(vy(), function(e) {
          return e.theme.bg3
        }),
        Ry = He.default.div(by(), function(e) {
          return e.theme.bg2
        })
      function Uy() {
        var e = Object(o.useRef)(),
          t = jn(bn.SETTINGS),
          n = kn(),
          a = Object(o.useContext)(He.ThemeContext),
          r = xr(),
          c = Object(A.a)(r, 2),
          u = c[0],
          l = c[1],
          s = (function() {
            var e = Object(d.c)()
            return [
              Object(d.d)(function(e) {
                return e.user.userDeadline
              }),
              Object(o.useCallback)(
                function(t) {
                  e(lr({ userDeadline: t }))
                },
                [e]
              )
            ]
          })(),
          m = Object(A.a)(s, 2),
          p = m[0],
          f = m[1],
          b = yr(),
          v = Object(A.a)(b, 2),
          h = v[0],
          g = v[1],
          y = Er(),
          E = Object(A.a)(y, 2),
          x = E[0],
          O = E[1],
          j = Object(o.useState)(!1),
          w = Object(A.a)(j, 2),
          k = w[0],
          T = w[1]
        return (
          Du(e, t ? n : void 0),
          i.a.createElement(
            Iy,
            { ref: e },
            i.a.createElement(
              lt,
              {
                isOpen: k,
                onDismiss: function() {
                  return T(!1)
                },
                maxHeight: 100
              },
              i.a.createElement(
                Ry,
                null,
                i.a.createElement(
                  bt,
                  { gap: 'lg' },
                  i.a.createElement(
                    Vt,
                    { style: { padding: '0 2rem' } },
                    i.a.createElement('div', null),
                    i.a.createElement(Tr.b, { fontWeight: 500, fontSize: 20 }, 'Are you sure?'),
                    i.a.createElement(ky, {
                      onClick: function() {
                        return T(!1)
                      }
                    })
                  ),
                  i.a.createElement(Ny, null),
                  i.a.createElement(
                    bt,
                    { gap: 'lg', style: { padding: '0 2rem' } },
                    i.a.createElement(
                      Tr.b,
                      { fontWeight: 500, fontSize: 20 },
                      'Expert mode turns off the confirm transaction prompt and allows high slippage trades that often result in bad rates and lost funds.'
                    ),
                    i.a.createElement(
                      Tr.b,
                      { fontWeight: 600, fontSize: 20 },
                      'ONLY USE THIS MODE IF YOU KNOW WHAT YOU ARE DOING.'
                    ),
                    i.a.createElement(
                      fi,
                      {
                        error: !0,
                        padding: '12px',
                        onClick: function() {
                          'confirm' === window.prompt('Please type the word "confirm" to enable expert mode.') &&
                            (g(), T(!1))
                        }
                      },
                      i.a.createElement(
                        Tr.b,
                        { fontSize: 20, fontWeight: 500, id: 'confirm-expert-mode' },
                        'Turn On Expert Mode'
                      )
                    )
                  )
                )
              )
            ),
            i.a.createElement(
              Ty,
              { onClick: n, id: 'open-settings-dialog-button' },
              i.a.createElement(wy, null),
              h
                ? i.a.createElement(
                    Cy,
                    null,
                    i.a.createElement('span', { role: 'img', 'aria-label': 'wizard-icon' }, '\ud83e\uddd9')
                  )
                : null
            ),
            t &&
              i.a.createElement(
                Sy,
                null,
                i.a.createElement(
                  bt,
                  { gap: 'md', style: { padding: '1rem' } },
                  i.a.createElement(Tr.b, { fontWeight: 600, fontSize: 14 }, 'Transaction Settings'),
                  i.a.createElement(fy, { rawSlippage: u, setRawSlippage: l, deadline: p, setDeadline: f }),
                  i.a.createElement(Tr.b, { fontWeight: 600, fontSize: 14 }, 'Interface Settings'),
                  i.a.createElement(
                    Vt,
                    null,
                    i.a.createElement(
                      Qt,
                      null,
                      i.a.createElement(Uo, { fontWeight: 400, fontSize: 14, color: a.text2 }, 'Toggle Expert Mode'),
                      i.a.createElement(Rb, {
                        text: 'Bypasses confirmation modals and allows high slippage trades. Use at your own risk.'
                      })
                    ),
                    i.a.createElement(ny, {
                      id: 'toggle-expert-mode-button',
                      isActive: h,
                      toggle: h
                        ? function() {
                            g(), T(!1)
                          }
                        : function() {
                            n(), T(!0)
                          }
                    })
                  ),
                  i.a.createElement(
                    Vt,
                    null,
                    i.a.createElement(
                      Qt,
                      null,
                      i.a.createElement(Uo, { fontWeight: 400, fontSize: 14, color: a.text2 }, 'Disable Multihops'),
                      i.a.createElement(Rb, { text: 'Restricts swaps to direct pairs only.' })
                    ),
                    i.a.createElement(ny, {
                      id: 'toggle-disable-multihop-button',
                      isActive: x,
                      toggle: function() {
                        return O(!x)
                      }
                    })
                  )
                )
              )
          )
        )
      }
      !(function(e) {
        ;(e.CURRENCY_A = 'CURRENCY_A'), (e.CURRENCY_B = 'CURRENCY_B')
      })(Ay || (Ay = {}))
      var By = Object(hn.b)('mint/typeInputMint'),
        Ly = Object(hn.b)('mint/resetMintState')
      function Wy() {
        var e = Object(Ve.a)(['\n  color: ', ';\n'])
        return (
          (Wy = function() {
            return e
          }),
          e
        )
      }
      function zy() {
        var e = Object(Ve.a)(['\n  font-weight: 500;\n  font-size: 20px;\n'])
        return (
          (zy = function() {
            return e
          }),
          e
        )
      }
      function My() {
        var e = Object(Ve.a)([
          '\n  ',
          '\n  align-items: center;\n  justify-content: center;\n  height: 3rem;\n  border-radius: 3rem;\n  outline: none;\n  cursor: pointer;\n  text-decoration: none;\n  color: ',
          ';\n  font-size: 20px;\n\n  &.',
          ' {\n    border-radius: 12px;\n    font-weight: 500;\n    color: ',
          ';\n  }\n\n  :hover,\n  :focus {\n    color: ',
          ';\n  }\n'
        ])
        return (
          (My = function() {
            return e
          }),
          e
        )
      }
      function Py() {
        var e = Object(Ve.a)([
          '\n  ',
          '\n  align-items: center;\n  border-radius: 3rem;\n  justify-content: space-evenly;\n'
        ])
        return (
          (Py = function() {
            return e
          }),
          e
        )
      }
      var Dy = He.default.div(Py(), function(e) {
          return e.theme.flexRowNoWrap
        }),
        Fy = Object(He.default)(m.c).attrs({ activeClassName: 'ACTIVE' })(
          My(),
          function(e) {
            return e.theme.flexRowNoWrap
          },
          function(e) {
            return e.theme.text3
          },
          'ACTIVE',
          function(e) {
            return e.theme.text1
          },
          function(e) {
            var t = e.theme
            return Object(Ke.a)(0.1, t.text1)
          }
        ),
        qy = He.default.div(zy()),
        Vy = Object(He.default)(Nr.a)(Wy(), function(e) {
          return e.theme.text1
        })
      function Yy(e) {
        var t = e.active,
          n = Object(Me.b)().t
        return i.a.createElement(
          Dy,
          { style: { marginBottom: '20px', display: 'none' } },
          i.a.createElement(
            Fy,
            {
              id: 'swap-nav-link',
              to: '/swap',
              isActive: function() {
                return 'swap' === t
              }
            },
            n('swap')
          ),
          i.a.createElement(
            Fy,
            {
              id: 'pool-nav-link',
              to: '/pool',
              isActive: function() {
                return 'pool' === t
              }
            },
            n('pool')
          )
        )
      }
      function Hy() {
        return i.a.createElement(
          Dy,
          null,
          i.a.createElement(
            Vt,
            { style: { padding: '1rem 1rem 0 1rem' } },
            i.a.createElement(m.b, { to: '/pool' }, i.a.createElement(Vy, null)),
            i.a.createElement(qy, null, 'Import Pool'),
            i.a.createElement(Uy, null)
          )
        )
      }
      function Qy(e) {
        var t = e.adding,
          n = e.creating,
          a = Object(d.c)()
        return i.a.createElement(
          Dy,
          null,
          i.a.createElement(
            Vt,
            { style: { padding: '1rem 1rem 0 1rem' } },
            i.a.createElement(
              m.b,
              {
                to: '/pool',
                onClick: function() {
                  t && a(Ly())
                }
              },
              i.a.createElement(Vy, null)
            ),
            i.a.createElement(qy, null, n ? 'Create a pair' : t ? 'Add Liquidity' : 'Remove Liquidity'),
            i.a.createElement(Uy, null)
          )
        )
      }
      var Xy = n(771)
      function Jy(e) {
        if (e === v.d) return 'ETH'
        if (e instanceof v.l) return e.address
        throw new Error('invalid currency')
      }
      function Gy() {
        var e = Object(Ve.a)(['\n  border: none;\n  background: ', ';\n  position: relative;\n  overflow: hidden;\n'])
        return (
          (Gy = function() {
            return e
          }),
          e
        )
      }
      function Ky() {
        var e = Object(Ve.a)(['\n  border: 1px solid transparent;\n  :hover {\n    border: 1px solid ', ';\n  }\n'])
        return (
          (Ky = function() {
            return e
          }),
          e
        )
      }
      function Zy() {
        var e = Object(Ve.a)(['\n  height: 24px;\n'])
        return (
          (Zy = function() {
            return e
          }),
          e
        )
      }
      var _y,
        $y = Object(He.default)(Vt)(Zy()),
        eE = Object(He.default)(Eu)(Ky(), function(e) {
          var t = e.theme
          return Object(Ke.a)(0.06, t.bg2)
        }),
        tE = Object(He.default)(xu)(Gy(), function(e) {
          var t = e.theme,
            n = e.bgColor
          return 'radial-gradient(91.85% 100% at 1.84% 0%, '
            .concat(Object(Ke.d)(0.8, n), ' 0%, ')
            .concat(t.bg3, ' 100%) ')
        })
      function nE(e) {
        var t = e.pair,
          n = e.showUnwrapped,
          a = void 0 !== n && n,
          r = e.border,
          c = Le().account,
          u = a ? t.token0 : Tc(t.token0),
          l = a ? t.token1 : Tc(t.token1),
          s = Object(o.useState)(!1),
          d = Object(A.a)(s, 2),
          m = d[0],
          p = d[1],
          f = uu(null !== c && void 0 !== c ? c : void 0, t.liquidityToken),
          b = Wm(t.liquidityToken),
          h = f && b && v.f.greaterThanOrEqual(b.raw, f.raw) ? new v.h(f.raw, b.raw) : void 0,
          g =
            t && b && f && v.f.greaterThanOrEqual(b.raw, f.raw)
              ? [t.getLiquidityValue(t.token0, b, f, !1), t.getLiquidityValue(t.token1, b, f, !1)]
              : [void 0, void 0],
          y = Object(A.a)(g, 2),
          E = y[0],
          x = y[1]
        return i.a.createElement(
          i.a.Fragment,
          null,
          f && v.f.greaterThan(f.raw, v.f.BigInt(0))
            ? i.a.createElement(
                Ou,
                { border: r },
                i.a.createElement(
                  bt,
                  { gap: '12px' },
                  i.a.createElement(
                    $y,
                    null,
                    i.a.createElement(
                      Qt,
                      null,
                      i.a.createElement(Tr.b, { fontWeight: 500, fontSize: 16 }, 'Your position')
                    )
                  ),
                  i.a.createElement(
                    $y,
                    {
                      onClick: function() {
                        return p(!m)
                      }
                    },
                    i.a.createElement(
                      Qt,
                      null,
                      i.a.createElement(Eg, { currency0: u, currency1: l, margin: !0, size: 20 }),
                      i.a.createElement(Tr.b, { fontWeight: 500, fontSize: 20 }, u.symbol, '/', l.symbol)
                    ),
                    i.a.createElement(
                      Qt,
                      null,
                      i.a.createElement(Tr.b, { fontWeight: 500, fontSize: 20 }, f ? f.toSignificant(4) : '-')
                    )
                  ),
                  i.a.createElement(
                    bt,
                    { gap: '4px' },
                    i.a.createElement(
                      $y,
                      null,
                      i.a.createElement(Tr.b, { fontSize: 16, fontWeight: 500 }, 'Your pool share:'),
                      i.a.createElement(Tr.b, { fontSize: 16, fontWeight: 500 }, h ? h.toFixed(6) + '%' : '-')
                    ),
                    i.a.createElement(
                      $y,
                      null,
                      i.a.createElement(Tr.b, { fontSize: 16, fontWeight: 500 }, u.symbol, ':'),
                      E
                        ? i.a.createElement(
                            Qt,
                            null,
                            i.a.createElement(
                              Tr.b,
                              { fontSize: 16, fontWeight: 500, marginLeft: '6px' },
                              null === E || void 0 === E ? void 0 : E.toSignificant(6)
                            )
                          )
                        : '-'
                    ),
                    i.a.createElement(
                      $y,
                      null,
                      i.a.createElement(Tr.b, { fontSize: 16, fontWeight: 500 }, l.symbol, ':'),
                      x
                        ? i.a.createElement(
                            Qt,
                            null,
                            i.a.createElement(
                              Tr.b,
                              { fontSize: 16, fontWeight: 500, marginLeft: '6px' },
                              null === x || void 0 === x ? void 0 : x.toSignificant(6)
                            )
                          )
                        : '-'
                    )
                  )
                )
              )
            : i.a.createElement(
                xu,
                null,
                i.a.createElement(
                  Mo,
                  { style: { textAlign: 'center' } },
                  i.a.createElement('span', { role: 'img', 'aria-label': 'wizard-icon' }, '\u2b50\ufe0f'),
                  ' ',
                  "By adding liquidity you'll earn 0.3% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity."
                )
              )
        )
      }
      function aE(e) {
        var t = e.pair,
          n = e.border,
          a = e.stakedBalance,
          r = Le().account,
          c = Tc(t.token0),
          u = Tc(t.token1),
          l = Object(o.useState)(!1),
          s = Object(A.a)(l, 2),
          d = s[0],
          p = s[1],
          f = uu(null !== r && void 0 !== r ? r : void 0, t.liquidityToken),
          b = Wm(t.liquidityToken),
          h = a ? (null === f || void 0 === f ? void 0 : f.add(a)) : f,
          g = h && b && v.f.greaterThanOrEqual(b.raw, h.raw) ? new v.h(h.raw, b.raw) : void 0,
          y =
            t && b && h && v.f.greaterThanOrEqual(b.raw, h.raw)
              ? [t.getLiquidityValue(t.token0, b, h, !1), t.getLiquidityValue(t.token1, b, h, !1)]
              : [void 0, void 0],
          E = Object(A.a)(y, 2),
          x = E[0],
          O = E[1],
          j = jh(null === t || void 0 === t ? void 0 : t.token0)
        return i.a.createElement(
          tE,
          { border: n, bgColor: j },
          i.a.createElement(Ut, null),
          i.a.createElement(
            bt,
            { gap: '12px' },
            i.a.createElement(
              $y,
              null,
              i.a.createElement(
                Ht,
                { gap: '8px' },
                i.a.createElement(Eg, { currency0: c, currency1: u, size: 20 }),
                i.a.createElement(
                  Tr.b,
                  { fontWeight: 500, fontSize: 20 },
                  c && u ? ''.concat(c.symbol, '/').concat(u.symbol) : i.a.createElement(Nm, null, 'Loading')
                )
              ),
              i.a.createElement(
                Qt,
                { gap: '8px' },
                i.a.createElement(
                  si,
                  {
                    padding: '6px 8px',
                    borderRadius: '12px',
                    width: 'fit-content',
                    onClick: function() {
                      return p(!d)
                    }
                  },
                  d
                    ? i.a.createElement(
                        i.a.Fragment,
                        null,
                        'Manage',
                        i.a.createElement(Xy.a, { size: '20', style: { marginLeft: '10px' } })
                      )
                    : i.a.createElement(
                        i.a.Fragment,
                        null,
                        'Manage',
                        i.a.createElement(Qo.a, { size: '20', style: { marginLeft: '10px' } })
                      )
                )
              )
            ),
            d &&
              i.a.createElement(
                bt,
                { gap: '8px' },
                i.a.createElement(
                  $y,
                  null,
                  i.a.createElement(Tr.b, { fontSize: 16, fontWeight: 500 }, 'Your total pool tokens:'),
                  i.a.createElement(Tr.b, { fontSize: 16, fontWeight: 500 }, h ? h.toSignificant(4) : '-')
                ),
                a &&
                  i.a.createElement(
                    $y,
                    null,
                    i.a.createElement(Tr.b, { fontSize: 16, fontWeight: 500 }, 'Pool tokens in rewards pool:'),
                    i.a.createElement(Tr.b, { fontSize: 16, fontWeight: 500 }, a.toSignificant(4))
                  ),
                i.a.createElement(
                  $y,
                  null,
                  i.a.createElement(
                    Qt,
                    null,
                    i.a.createElement(Tr.b, { fontSize: 16, fontWeight: 500 }, 'Pooled ', c.symbol, ':')
                  ),
                  x
                    ? i.a.createElement(
                        Qt,
                        null,
                        i.a.createElement(
                          Tr.b,
                          { fontSize: 16, fontWeight: 500, marginLeft: '6px' },
                          null === x || void 0 === x ? void 0 : x.toSignificant(6)
                        ),
                        i.a.createElement(_b, { size: '20px', style: { marginLeft: '8px' }, currency: c })
                      )
                    : '-'
                ),
                i.a.createElement(
                  $y,
                  null,
                  i.a.createElement(
                    Qt,
                    null,
                    i.a.createElement(Tr.b, { fontSize: 16, fontWeight: 500 }, 'Pooled ', u.symbol, ':')
                  ),
                  O
                    ? i.a.createElement(
                        Qt,
                        null,
                        i.a.createElement(
                          Tr.b,
                          { fontSize: 16, fontWeight: 500, marginLeft: '6px' },
                          null === O || void 0 === O ? void 0 : O.toSignificant(6)
                        ),
                        i.a.createElement(_b, { size: '20px', style: { marginLeft: '8px' }, currency: u })
                      )
                    : '-'
                ),
                i.a.createElement(
                  $y,
                  null,
                  i.a.createElement(Tr.b, { fontSize: 16, fontWeight: 500 }, 'Your pool share:'),
                  i.a.createElement(
                    Tr.b,
                    { fontSize: 16, fontWeight: 500 },
                    g ? ('0.00' === g.toFixed(2) ? '<0.01' : g.toFixed(2)) + '%' : '-'
                  )
                ),
                i.a.createElement(
                  ui,
                  { padding: '8px', borderRadius: '8px' },
                  i.a.createElement(
                    mo,
                    { style: { width: '100%', textAlign: 'center' }, href: 'https://uniswap.info/account/'.concat(r) },
                    'View accrued fees and analytics',
                    i.a.createElement('span', { style: { fontSize: '11px' } }, '\u2197')
                  )
                ),
                f &&
                  v.f.greaterThan(f.raw, Oe) &&
                  i.a.createElement(
                    Vt,
                    { marginTop: '10px' },
                    i.a.createElement(
                      ii,
                      {
                        padding: '8px',
                        borderRadius: '8px',
                        as: m.b,
                        to: '/add/'.concat(Jy(c), '/').concat(Jy(u)),
                        width: '48%'
                      },
                      'Add'
                    ),
                    i.a.createElement(
                      ii,
                      {
                        padding: '8px',
                        borderRadius: '8px',
                        as: m.b,
                        width: '48%',
                        to: '/remove/'.concat(Jy(c), '/').concat(Jy(u))
                      },
                      'Remove'
                    )
                  ),
                a &&
                  v.f.greaterThan(a.raw, Oe) &&
                  i.a.createElement(
                    ii,
                    {
                      padding: '8px',
                      borderRadius: '8px',
                      as: m.b,
                      to: '/uni/'.concat(Jy(c), '/').concat(Jy(u)),
                      width: '100%'
                    },
                    'Manage Liquidity in Rewards Pool'
                  )
              )
          )
        )
      }
      function rE(e, t) {
        var n = Le().account,
          a = e instanceof v.m ? e.token : void 0,
          r = (function(e, t, n) {
            var a = Kn(
              Ma(null === e || void 0 === e ? void 0 : e.address, !1),
              'allowance',
              Object(o.useMemo)(
                function() {
                  return [t, n]
                },
                [t, n]
              )
            ).result
            return Object(o.useMemo)(
              function() {
                return e && a ? new v.m(e, a.toString()) : void 0
              },
              [e, a]
            )
          })(a, null !== n && void 0 !== n ? n : void 0, t),
          i = (function(e, t) {
            var n = xi()
            return Object(o.useMemo)(
              function() {
                return (
                  'string' === typeof e &&
                  'string' === typeof t &&
                  Object.keys(n).some(function(a) {
                    var r = n[a]
                    if (!r) return !1
                    if (r.receipt) return !1
                    var o = r.approval
                    return !!o && o.spender === t && o.tokenAddress === e && ji(r)
                  })
                )
              },
              [n, t, e]
            )
          })(null === a || void 0 === a ? void 0 : a.address, t),
          c = Object(o.useMemo)(
            function() {
              return e && t
                ? e.currency === v.d
                  ? _y.APPROVED
                  : r
                  ? r.lessThan(e)
                    ? i
                      ? _y.PENDING
                      : _y.NOT_APPROVED
                    : _y.APPROVED
                  : _y.UNKNOWN
                : _y.UNKNOWN
            },
            [e, r, i, t]
          ),
          u = Ma(null === a || void 0 === a ? void 0 : a.address),
          l = Ei(),
          s = Object(o.useCallback)(
            Object(w.a)(
              j.a.mark(function n() {
                var r, o
                return j.a.wrap(function(n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        if (c === _y.NOT_APPROVED) {
                          n.next = 3
                          break
                        }
                        return console.error('approve was called unnecessarily'), n.abrupt('return')
                      case 3:
                        if (a) {
                          n.next = 6
                          break
                        }
                        return console.error('no token'), n.abrupt('return')
                      case 6:
                        if (u) {
                          n.next = 9
                          break
                        }
                        return console.error('tokenContract is null'), n.abrupt('return')
                      case 9:
                        if (e) {
                          n.next = 12
                          break
                        }
                        return console.error('missing amount to approve'), n.abrupt('return')
                      case 12:
                        if (t) {
                          n.next = 15
                          break
                        }
                        return console.error('no spender'), n.abrupt('return')
                      case 15:
                        return (
                          (r = !1),
                          (n.next = 18),
                          u.estimateGas.approve(t, $n.c).catch(function() {
                            return (r = !0), u.estimateGas.approve(t, e.raw.toString())
                          })
                        )
                      case 18:
                        return (
                          (o = n.sent),
                          n.abrupt(
                            'return',
                            u
                              .approve(t, r ? e.raw.toString() : $n.c, { gasLimit: ia(o) })
                              .then(function(n) {
                                l(n, {
                                  summary: 'Approve ' + e.currency.symbol,
                                  approval: { tokenAddress: a.address, spender: t }
                                })
                              })
                              .catch(function(e) {
                                throw (console.debug('Failed to approve token', e), e)
                              })
                          )
                        )
                      case 20:
                      case 'end':
                        return n.stop()
                    }
                }, n)
              })
            ),
            [c, a, u, e, t, l]
          )
        return [c, s]
      }
      function oE() {
        var e = Object(d.d)(function(e) {
            return e.user.userDeadline
          }),
          t = tu()
        return Object(o.useMemo)(
          function() {
            if (t && e) return t.add(e)
          },
          [t, e]
        )
      }
      !(function(e) {
        ;(e[(e.UNKNOWN = 0)] = 'UNKNOWN'),
          (e[(e.NOT_APPROVED = 1)] = 'NOT_APPROVED'),
          (e[(e.PENDING = 2)] = 'PENDING'),
          (e[(e.APPROVED = 3)] = 'APPROVED')
      })(_y || (_y = {}))
      var iE = v.f.BigInt(0)
      function cE() {
        return Object(d.d)(function(e) {
          return e.mint
        })
      }
      function uE(e) {
        if (e)
          return e.currency === v.d
            ? v.f.greaterThan(e.raw, Se)
              ? v.c.ether(v.f.subtract(e.raw, Se))
              : v.c.ether(v.f.BigInt(0))
            : e
      }
      function lE() {
        var e = Object(Ve.a)([
          '\n  position: relative;\n  max-width: 420px;\n  width: 100%;\n  background: ',
          ';\n  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);\n  border-radius: 30px;\n  /* padding: 1rem; */\n'
        ])
        return (
          (lE = function() {
            return e
          }),
          e
        )
      }
      var sE = He.default.div(lE(), function(e) {
        return e.theme.bg1
      })
      function dE(e) {
        var t = e.children
        return i.a.createElement(sE, null, t)
      }
      function mE() {
        var e = Object(Ve.a)([
          "\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"
        ])
        return (
          (mE = function() {
            return e
          }),
          e
        )
      }
      function pE() {
        var e = Object(Ve.a)(['\n    padding: 0.25rem 0.5rem;\n  '])
        return (
          (pE = function() {
            return e
          }),
          e
        )
      }
      function fE() {
        var e = Object(Ve.a)([
          '\n  padding: 0.5rem 1rem;\n  background-color: ',
          ';\n  border: 1px solid ',
          ';\n  border-radius: 0.5rem;\n  font-size: 1rem;\n  ',
          ';\n  font-weight: 500;\n  cursor: pointer;\n  margin: 0.25rem;\n  overflow: hidden;\n  color: ',
          ';\n  :hover {\n    border: 1px solid ',
          ';\n  }\n  :focus {\n    border: 1px solid ',
          ';\n    outline: none;\n  }\n'
        ])
        return (
          (fE = function() {
            return e
          }),
          e
        )
      }
      function bE() {
        var e = Object(Ve.a)(['\n  :hover {\n    cursor: pointer;\n  }\n  color: ', ';\n'])
        return (
          (bE = function() {
            return e
          }),
          e
        )
      }
      function vE() {
        var e = Object(Ve.a)(['\n  position: relative;\n  padding: 1rem;\n'])
        return (
          (vE = function() {
            return e
          }),
          e
        )
      }
      var hE = He.default.div(vE()),
        gE = Object(He.default)(Tr.b)(bE(), function(e) {
          return e.theme.primary1
        }),
        yE = He.default.button(
          fE(),
          function(e) {
            return e.theme.primary5
          },
          function(e) {
            return e.theme.primary5
          },
          function(e) {
            return e.theme.mediaWidth.upToSmall(pE())
          },
          function(e) {
            return e.theme.primary1
          },
          function(e) {
            return e.theme.primary1
          },
          function(e) {
            return e.theme.primary1
          }
        ),
        EE = He.default.span(mE())
      function xE(e) {
        var t,
          n,
          a,
          r,
          o,
          c,
          u,
          l,
          s = e.noLiquidity,
          d = e.price,
          m = e.currencies,
          p = e.parsedAmounts,
          f = e.poolTokenPercentage,
          b = e.onAdd
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            Vt,
            null,
            i.a.createElement(
              Lo,
              null,
              null === (t = m[Ay.CURRENCY_A]) || void 0 === t ? void 0 : t.symbol,
              ' Deposited'
            ),
            i.a.createElement(
              Qt,
              null,
              i.a.createElement(_b, { currency: m[Ay.CURRENCY_A], style: { marginRight: '8px' } }),
              i.a.createElement(Lo, null, null === (n = p[Ay.CURRENCY_A]) || void 0 === n ? void 0 : n.toSignificant(6))
            )
          ),
          i.a.createElement(
            Vt,
            null,
            i.a.createElement(
              Lo,
              null,
              null === (a = m[Ay.CURRENCY_B]) || void 0 === a ? void 0 : a.symbol,
              ' Deposited'
            ),
            i.a.createElement(
              Qt,
              null,
              i.a.createElement(_b, { currency: m[Ay.CURRENCY_B], style: { marginRight: '8px' } }),
              i.a.createElement(Lo, null, null === (r = p[Ay.CURRENCY_B]) || void 0 === r ? void 0 : r.toSignificant(6))
            )
          ),
          i.a.createElement(
            Vt,
            null,
            i.a.createElement(Lo, null, 'Rates'),
            i.a.createElement(
              Lo,
              null,
              '1 '
                .concat(null === (o = m[Ay.CURRENCY_A]) || void 0 === o ? void 0 : o.symbol, ' = ')
                .concat(null === d || void 0 === d ? void 0 : d.toSignificant(4), ' ')
                .concat(null === (c = m[Ay.CURRENCY_B]) || void 0 === c ? void 0 : c.symbol)
            )
          ),
          i.a.createElement(
            Vt,
            { style: { justifyContent: 'flex-end' } },
            i.a.createElement(
              Lo,
              null,
              '1 '
                .concat(null === (u = m[Ay.CURRENCY_B]) || void 0 === u ? void 0 : u.symbol, ' = ')
                .concat(null === d || void 0 === d ? void 0 : d.invert().toSignificant(4), ' ')
                .concat(null === (l = m[Ay.CURRENCY_A]) || void 0 === l ? void 0 : l.symbol)
            )
          ),
          i.a.createElement(
            Vt,
            null,
            i.a.createElement(Lo, null, 'Share of Pool:'),
            i.a.createElement(Lo, null, s ? '100' : null === f || void 0 === f ? void 0 : f.toSignificant(4), '%')
          ),
          i.a.createElement(
            ii,
            { style: { margin: '20px 0 0 0' }, onClick: b },
            i.a.createElement(Tr.b, { fontWeight: 500, fontSize: 20 }, s ? 'Create Pool & Supply' : 'Confirm Supply')
          )
        )
      }
      function OE(e) {
        var t,
          n,
          a,
          r,
          c,
          u,
          l,
          s,
          d = e.currencies,
          m = e.noLiquidity,
          p = e.poolTokenPercentage,
          f = e.price,
          b = Object(o.useContext)(He.ThemeContext)
        return i.a.createElement(
          bt,
          { gap: 'md' },
          i.a.createElement(
            Ht,
            { justify: 'space-around', gap: '4px' },
            i.a.createElement(
              bt,
              { justify: 'center' },
              i.a.createElement(
                Uo,
                null,
                null !== (t = null === f || void 0 === f ? void 0 : f.toSignificant(6)) && void 0 !== t ? t : '-'
              ),
              i.a.createElement(
                Tr.b,
                { fontWeight: 500, fontSize: 14, color: b.text2, pt: 1 },
                null === (n = d[Ay.CURRENCY_B]) || void 0 === n ? void 0 : n.symbol,
                ' per ',
                null === (a = d[Ay.CURRENCY_A]) || void 0 === a ? void 0 : a.symbol
              )
            ),
            i.a.createElement(
              bt,
              { justify: 'center' },
              i.a.createElement(
                Uo,
                null,
                null !==
                  (r =
                    null === f || void 0 === f || null === (c = f.invert()) || void 0 === c
                      ? void 0
                      : c.toSignificant(6)) && void 0 !== r
                  ? r
                  : '-'
              ),
              i.a.createElement(
                Tr.b,
                { fontWeight: 500, fontSize: 14, color: b.text2, pt: 1 },
                null === (u = d[Ay.CURRENCY_A]) || void 0 === u ? void 0 : u.symbol,
                ' per ',
                null === (l = d[Ay.CURRENCY_B]) || void 0 === l ? void 0 : l.symbol
              )
            ),
            i.a.createElement(
              bt,
              { justify: 'center' },
              i.a.createElement(
                Uo,
                null,
                m && f
                  ? '100'
                  : null !==
                      (s = (null === p || void 0 === p
                      ? void 0
                      : p.lessThan(je))
                        ? '<0.01'
                        : null === p || void 0 === p
                        ? void 0
                        : p.toFixed(2)) && void 0 !== s
                  ? s
                  : '0',
                '%'
              ),
              i.a.createElement(Tr.b, { fontWeight: 500, fontSize: 14, color: b.text2, pt: 1 }, 'Share of Pool')
            )
          )
        )
      }
      function jE() {
        var e = Object(Ve.a)(['\n    font-size: 10px;\n'])
        return (
          (jE = function() {
            return e
          }),
          e
        )
      }
      function AE() {
        var e = Object(Ve.a)(['\n  font-size: 12px;\n\n  ', '\n'])
        return (
          (AE = function() {
            return e
          }),
          e
        )
      }
      function wE() {
        var e = Object(Ve.a)([
          '\n  padding-top: calc(16px + 2rem);\n  padding-bottom: 20px;\n  margin-top: -2rem;\n  width: 100%;\n  max-width: 400px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  color: ',
          ';\n  background-color: ',
          ';\n  z-index: -1;\n\n  transform: ',
          ';\n  transition: transform 300ms ease-in-out;\n  text-align: center;\n'
        ])
        return (
          (wE = function() {
            return e
          }),
          e
        )
      }
      var kE = He.default.div(
          wE(),
          function(e) {
            return e.theme.text2
          },
          function(e) {
            return e.theme.advancedBG
          },
          function(e) {
            return e.show ? 'translateY(0%)' : 'translateY(-100%)'
          }
        ),
        TE = Object(He.default)(Do)(AE(), function(e) {
          return e.theme.mediaWidth.upToSmall(jE())
        })
      function CE(e) {
        var t = e.show,
          n = e.currencies,
          a = Le().chainId,
          r = Object(o.useState)(!1),
          c = Object(A.a)(r, 2),
          u = c[0],
          l = c[1],
          s =
            a && n
              ? n.map(function(e) {
                  return wc(e, a)
                })
              : [],
          d = _a()
        return i.a.createElement(
          kE,
          { show: t },
          i.a.createElement(
            lt,
            {
              isOpen: u,
              onDismiss: function() {
                return l(!1)
              }
            },
            i.a.createElement(
              Eu,
              { padding: '2rem' },
              i.a.createElement(
                bt,
                { gap: 'lg' },
                i.a.createElement(
                  Vt,
                  null,
                  i.a.createElement(zo, null, 'Unsupported Assets'),
                  i.a.createElement(to, {
                    onClick: function() {
                      return l(!1)
                    }
                  })
                ),
                s.map(function(e) {
                  var t
                  return (
                    e &&
                    d &&
                    Object.keys(d).includes(e.address) &&
                    i.a.createElement(
                      ju,
                      { key: null === (t = e.address) || void 0 === t ? void 0 : t.concat('not-supported') },
                      i.a.createElement(
                        bt,
                        { gap: '10px' },
                        i.a.createElement(
                          Ht,
                          { gap: '5px', align: 'center' },
                          i.a.createElement(_b, { currency: e, size: '24px' }),
                          i.a.createElement(Lo, { fontWeight: 500 }, e.symbol)
                        ),
                        a &&
                          i.a.createElement(
                            mo,
                            { href: ra(a, e.address, 'address') },
                            i.a.createElement(TE, null, e.address)
                          )
                      )
                    )
                  )
                }),
                i.a.createElement(
                  bt,
                  { gap: 'lg' },
                  i.a.createElement(
                    Lo,
                    { fontWeight: 500 },
                    'Some assets are not available through this interface because they may not work well with our smart contract or we are unable to allow trading for legal reasons.'
                  )
                )
              )
            )
          ),
          i.a.createElement(
            si,
            {
              padding: '0',
              onClick: function() {
                return l(!0)
              }
            },
            i.a.createElement(Do, null, 'Read more about unsupported assets')
          )
        )
      }
      function IE(e) {
        var t,
          n,
          a,
          r,
          c,
          u,
          l,
          m,
          h,
          g,
          y,
          E = e.match.params,
          x = E.currencyIdA,
          O = E.currencyIdB,
          k = e.history,
          T = Le(),
          C = T.account,
          I = T.chainId,
          S = T.library,
          N = Object(o.useContext)(He.ThemeContext),
          R = ar(x),
          U = ar(O),
          B = Boolean(I && ((R && Object(v.q)(R, v.p[I])) || (U && Object(v.q)(U, v.p[I])))),
          L = wn(),
          W = gr(),
          z = cE(),
          M = z.independentField,
          P = z.typedValue,
          D = z.otherTypedValue,
          F = (function(e, t) {
            var n,
              a,
              r,
              i,
              c,
              u,
              l,
              s = Le(),
              d = s.account,
              m = s.chainId,
              p = cE(),
              f = p.independentField,
              h = p.typedValue,
              g = p.otherTypedValue,
              y = f === Ay.CURRENCY_A ? Ay.CURRENCY_B : Ay.CURRENCY_A,
              E = Object(o.useMemo)(
                function() {
                  var n
                  return (
                    (n = {}),
                    Object(b.a)(n, Ay.CURRENCY_A, null !== e && void 0 !== e ? e : void 0),
                    Object(b.a)(n, Ay.CURRENCY_B, null !== t && void 0 !== t ? t : void 0),
                    n
                  )
                },
                [e, t]
              ),
              x = Nc(E[Ay.CURRENCY_A], E[Ay.CURRENCY_B]),
              O = Object(A.a)(x, 2),
              j = O[0],
              w = O[1],
              k = Wm(null === w || void 0 === w ? void 0 : w.liquidityToken),
              T = j === Cc.NOT_EXISTS || Boolean(k && v.f.equal(k.raw, iE)),
              C = lu(null !== d && void 0 !== d ? d : void 0, [E[Ay.CURRENCY_A], E[Ay.CURRENCY_B]]),
              I = ((n = {}), Object(b.a)(n, Ay.CURRENCY_A, C[0]), Object(b.a)(n, Ay.CURRENCY_B, C[1]), n),
              S = Xc(h, E[f]),
              N = Object(o.useMemo)(
                function() {
                  if (T) return g && E[y] ? Xc(g, E[y]) : void 0
                  if (S) {
                    var n = kc(S, m),
                      a = [wc(e, m), wc(t, m)],
                      r = a[0],
                      o = a[1]
                    if (r && o && n && w) {
                      var i = y === Ay.CURRENCY_B ? t : e,
                        c = y === Ay.CURRENCY_B ? w.priceOf(r).quote(n) : w.priceOf(o).quote(n)
                      return i === v.d ? v.c.ether(c.raw) : c
                    }
                  } else;
                },
                [T, g, E, y, S, e, m, t, w]
              ),
              R =
                ((a = {}),
                Object(b.a)(a, Ay.CURRENCY_A, f === Ay.CURRENCY_A ? S : N),
                Object(b.a)(a, Ay.CURRENCY_B, f === Ay.CURRENCY_A ? N : S),
                a),
              U = Object(o.useMemo)(
                function() {
                  if (T) {
                    var t = R[Ay.CURRENCY_A],
                      n = R[Ay.CURRENCY_B]
                    return t && n ? new v.i(t.currency, n.currency, t.raw, n.raw) : void 0
                  }
                  var a = wc(e, m)
                  return w && a ? w.priceOf(a) : void 0
                },
                [m, e, T, w, R]
              ),
              B = Object(o.useMemo)(
                function() {
                  var e = R[Ay.CURRENCY_A],
                    t = R[Ay.CURRENCY_B],
                    n = [kc(e, m), kc(t, m)],
                    a = n[0],
                    r = n[1]
                  return w && k && a && r ? w.getLiquidityMinted(k, a, r) : void 0
                },
                [R, m, w, k]
              ),
              L = Object(o.useMemo)(
                function() {
                  return B && k ? new v.h(B.raw, k.add(B).raw) : void 0
                },
                [B, k]
              )
            d || (c = 'Connect Wallet'),
              j === Cc.INVALID && (c = null !== (u = c) && void 0 !== u ? u : 'Invalid pair'),
              (R[Ay.CURRENCY_A] && R[Ay.CURRENCY_B]) || (c = null !== (l = c) && void 0 !== l ? l : 'Enter an amount')
            var W,
              z,
              M = R[Ay.CURRENCY_A],
              P = R[Ay.CURRENCY_B]
            return (
              M &&
                (null === I || void 0 === I || null === (r = I[Ay.CURRENCY_A]) || void 0 === r
                  ? void 0
                  : r.lessThan(M)) &&
                (c =
                  'Insufficient ' + (null === (W = E[Ay.CURRENCY_A]) || void 0 === W ? void 0 : W.symbol) + ' balance'),
              P &&
                (null === I || void 0 === I || null === (i = I[Ay.CURRENCY_B]) || void 0 === i
                  ? void 0
                  : i.lessThan(P)) &&
                (c =
                  'Insufficient ' + (null === (z = E[Ay.CURRENCY_B]) || void 0 === z ? void 0 : z.symbol) + ' balance'),
              {
                dependentField: y,
                currencies: E,
                pair: w,
                pairState: j,
                currencyBalances: I,
                parsedAmounts: R,
                price: U,
                noLiquidity: T,
                liquidityMinted: B,
                poolTokenPercentage: L,
                error: c
              }
            )
          })(null !== R && void 0 !== R ? R : void 0, null !== U && void 0 !== U ? U : void 0),
          q = F.dependentField,
          V = F.currencies,
          Y = F.pair,
          H = F.pairState,
          Q = F.currencyBalances,
          X = F.parsedAmounts,
          J = F.price,
          G = F.noLiquidity,
          K = F.liquidityMinted,
          Z = F.poolTokenPercentage,
          _ = F.error,
          $ = (function(e) {
            var t = Object(d.c)()
            return {
              onFieldAInput: Object(o.useCallback)(
                function(n) {
                  t(By({ field: Ay.CURRENCY_A, typedValue: n, noLiquidity: !0 === e }))
                },
                [t, e]
              ),
              onFieldBInput: Object(o.useCallback)(
                function(n) {
                  t(By({ field: Ay.CURRENCY_B, typedValue: n, noLiquidity: !0 === e }))
                },
                [t, e]
              )
            }
          })(G),
          ee = $.onFieldAInput,
          ne = $.onFieldBInput,
          ae = !_,
          re = Object(o.useState)(!1),
          oe = Object(A.a)(re, 2),
          ie = oe[0],
          ce = oe[1],
          ue = Object(o.useState)(!1),
          le = Object(A.a)(ue, 2),
          se = le[0],
          de = le[1],
          me = oE(),
          pe = xr(),
          fe = Object(A.a)(pe, 1)[0],
          be = Object(o.useState)(''),
          ve = Object(A.a)(be, 2),
          he = ve[0],
          ge = ve[1],
          ye =
            ((a = {}),
            Object(b.a)(a, M, P),
            Object(b.a)(
              a,
              q,
              G
                ? D
                : null !== (t = null === (n = X[q]) || void 0 === n ? void 0 : n.toSignificant(6)) && void 0 !== t
                ? t
                : ''
            ),
            a),
          Ee = [Ay.CURRENCY_A, Ay.CURRENCY_B].reduce(function(e, t) {
            return Object(f.a)(Object(f.a)({}, e), {}, Object(b.a)({}, t, uE(Q[t])))
          }, {}),
          xe = [Ay.CURRENCY_A, Ay.CURRENCY_B].reduce(function(e, t) {
            var n, a
            return Object(f.a)(
              Object(f.a)({}, e),
              {},
              Object(b.a)(
                {},
                t,
                null === (n = Ee[t]) || void 0 === n ? void 0 : n.equalTo(null !== (a = X[t]) && void 0 !== a ? a : '0')
              )
            )
          }, {}),
          Oe = rE(X[Ay.CURRENCY_A], te),
          je = Object(A.a)(Oe, 2),
          Ae = je[0],
          we = je[1],
          ke = rE(X[Ay.CURRENCY_B], te),
          Te = Object(A.a)(ke, 2),
          Ce = Te[0],
          Ie = Te[1],
          Se = Ei()
        function Ne() {
          return Re.apply(this, arguments)
        }
        function Re() {
          return (Re = Object(w.a)(
            j.a.mark(function e() {
              var t, n, a, r, o, i, c, u, l, d, m, h, g, y, E, x
              return j.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (I && S && C) {
                        e.next = 2
                        break
                      }
                      return e.abrupt('return')
                    case 2:
                      if (((n = la(0, S, C)), (a = X[Ay.CURRENCY_A]), (r = X[Ay.CURRENCY_B]), a && r && R && U && me)) {
                        e.next = 6
                        break
                      }
                      return e.abrupt('return')
                    case 6:
                      return (
                        (t = {}),
                        Object(b.a)(t, Ay.CURRENCY_A, ca(a, G ? 0 : fe)[0]),
                        Object(b.a)(t, Ay.CURRENCY_B, ca(r, G ? 0 : fe)[0]),
                        (o = t),
                        R === v.d || U === v.d
                          ? ((h = U === v.d),
                            (i = n.estimateGas.addLiquidityETH),
                            (c = n.addLiquidityETH),
                            (u = [
                              null !== (d = null === (m = wc(h ? R : U, I)) || void 0 === m ? void 0 : m.address) &&
                              void 0 !== d
                                ? d
                                : '',
                              (h ? a : r).raw.toString(),
                              o[h ? Ay.CURRENCY_A : Ay.CURRENCY_B].toString(),
                              o[h ? Ay.CURRENCY_B : Ay.CURRENCY_A].toString(),
                              C,
                              me.toHexString(),
                              Ye
                            ]),
                            (l = ea.a.from((h ? r : a).raw.toString())),
                            console.log(Ge, 'li'))
                          : ((i = n.estimateGas.addLiquidity),
                            (c = n.addLiquidity),
                            (u = [
                              null !== (g = null === (y = wc(R, I)) || void 0 === y ? void 0 : y.address) &&
                              void 0 !== g
                                ? g
                                : '',
                              null !== (E = null === (x = wc(U, I)) || void 0 === x ? void 0 : x.address) &&
                              void 0 !== E
                                ? E
                                : '',
                              a.raw.toString(),
                              r.raw.toString(),
                              o[Ay.CURRENCY_A].toString(),
                              o[Ay.CURRENCY_B].toString(),
                              C,
                              me.toHexString(),
                              Ye
                            ]),
                            (l = null),
                            console.log(Ge, 'li')),
                        de(!0),
                        (e.next = 11),
                        i
                          .apply(void 0, Object(p.a)(u).concat([l ? { value: l } : {}]))
                          .then(function(e) {
                            return c
                              .apply(
                                void 0,
                                Object(p.a)(u).concat([
                                  Object(f.a)(Object(f.a)({}, l ? { value: l } : {}), {}, { gasLimit: ia(e) })
                                ])
                              )
                              .then(function(e) {
                                var t, n, a, r, o, i
                                de(!1),
                                  Se(e, {
                                    summary:
                                      'Add ' +
                                      (null === (t = X[Ay.CURRENCY_A]) || void 0 === t ? void 0 : t.toSignificant(3)) +
                                      ' ' +
                                      (null === (n = V[Ay.CURRENCY_A]) || void 0 === n ? void 0 : n.symbol) +
                                      ' and ' +
                                      (null === (a = X[Ay.CURRENCY_B]) || void 0 === a ? void 0 : a.toSignificant(3)) +
                                      ' ' +
                                      (null === (r = V[Ay.CURRENCY_B]) || void 0 === r ? void 0 : r.symbol)
                                  }),
                                  ge(e.hash),
                                  s.a.event({
                                    category: 'Liquidity',
                                    action: 'Add',
                                    label: [
                                      null === (o = V[Ay.CURRENCY_A]) || void 0 === o ? void 0 : o.symbol,
                                      null === (i = V[Ay.CURRENCY_B]) || void 0 === i ? void 0 : i.symbol
                                    ].join('/')
                                  })
                              })
                          })
                          .catch(function(e) {
                            de(!1), 4001 !== (null === e || void 0 === e ? void 0 : e.code) && console.error(e)
                          })
                      )
                    case 11:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )).apply(this, arguments)
        }
        var Ue = function() {
            var e, t, n, a
            return G
              ? i.a.createElement(
                  bt,
                  { gap: '20px' },
                  i.a.createElement(
                    xu,
                    { mt: '20px', borderRadius: '20px' },
                    i.a.createElement(
                      Yt,
                      null,
                      i.a.createElement(
                        Tr.b,
                        { fontSize: '48px', fontWeight: 500, lineHeight: '42px', marginRight: 10 },
                        (null === (e = V[Ay.CURRENCY_A]) || void 0 === e ? void 0 : e.symbol) +
                          '/' +
                          (null === (t = V[Ay.CURRENCY_B]) || void 0 === t ? void 0 : t.symbol)
                      ),
                      i.a.createElement(Eg, { currency0: V[Ay.CURRENCY_A], currency1: V[Ay.CURRENCY_B], size: 30 })
                    )
                  )
                )
              : i.a.createElement(
                  bt,
                  { gap: '20px' },
                  i.a.createElement(
                    Yt,
                    { style: { marginTop: '20px' } },
                    i.a.createElement(
                      Tr.b,
                      { fontSize: '48px', fontWeight: 500, lineHeight: '42px', marginRight: 10 },
                      null === K || void 0 === K ? void 0 : K.toSignificant(6)
                    ),
                    i.a.createElement(Eg, { currency0: V[Ay.CURRENCY_A], currency1: V[Ay.CURRENCY_B], size: 30 })
                  ),
                  i.a.createElement(
                    Xt,
                    null,
                    i.a.createElement(
                      Tr.b,
                      { fontSize: '24px' },
                      (null === (n = V[Ay.CURRENCY_A]) || void 0 === n ? void 0 : n.symbol) +
                        '/' +
                        (null === (a = V[Ay.CURRENCY_B]) || void 0 === a ? void 0 : a.symbol) +
                        ' Pool Tokens'
                    )
                  ),
                  i.a.createElement(
                    qo,
                    { fontSize: 12, textAlign: 'left', padding: '8px 0 0 0 ' },
                    'Output is estimated. If the price changes by more than '.concat(
                      fe / 100,
                      '% your transaction will revert.'
                    )
                  )
                )
          },
          Be = function() {
            return i.a.createElement(xE, {
              price: J,
              currencies: V,
              parsedAmounts: X,
              noLiquidity: G,
              onAdd: Ne,
              poolTokenPercentage: Z
            })
          },
          We = 'Supplying '
            .concat(null === (r = X[Ay.CURRENCY_A]) || void 0 === r ? void 0 : r.toSignificant(6), ' ')
            .concat(null === (c = V[Ay.CURRENCY_A]) || void 0 === c ? void 0 : c.symbol, ' and ')
            .concat(null === (u = X[Ay.CURRENCY_B]) || void 0 === u ? void 0 : u.toSignificant(6), ' ')
            .concat(null === (l = V[Ay.CURRENCY_B]) || void 0 === l ? void 0 : l.symbol),
          ze = Object(o.useCallback)(
            function(e) {
              var t = Jy(e)
              t === O ? k.push('/add/'.concat(O, '/').concat(x)) : k.push('/add/'.concat(t, '/').concat(O))
            },
            [O, k, x]
          ),
          Me = Object(o.useCallback)(
            function(e) {
              var t = Jy(e)
              x === t
                ? O
                  ? k.push('/add/'.concat(O, '/').concat(t))
                  : k.push('/add/'.concat(t))
                : k.push('/add/'.concat(x || 'ETH', '/').concat(t))
            },
            [x, k, O]
          ),
          Pe = Object(o.useCallback)(
            function() {
              ce(!1), he && ee(''), ge('')
            },
            [ee, he]
          ),
          De = k.location.pathname.includes('/create'),
          Fe = Bc(
            null === V || void 0 === V ? void 0 : V.CURRENCY_A,
            null === V || void 0 === V ? void 0 : V.CURRENCY_B
          ),
          qe = Object(o.useState)(0),
          Ve = Object(A.a)(qe, 2),
          Ye = Ve[0],
          Qe = Ve[1],
          Xe = Object(o.useState)(!0),
          Je = Object(A.a)(Xe, 2),
          Ge = Je[0],
          Ke = Je[1]
        Object(o.useEffect)(
          function() {
            Qe(Ge ? Ze : _e)
          },
          [Ge]
        )
        var Ze = 100,
          _e = 101
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            dE,
            null,
            i.a.createElement(Qy, { creating: De, adding: !0 }),
            i.a.createElement(
              hE,
              null,
              i.a.createElement(sb, {
                isOpen: ie,
                onDismiss: Pe,
                attemptingTxn: se,
                hash: he,
                content: function() {
                  return i.a.createElement(ub, {
                    title: G ? 'You are creating a pool' : 'You will receive',
                    onDismiss: Pe,
                    topContent: Ue,
                    bottomContent: Be
                  })
                },
                pendingText: We
              }),
              i.a.createElement(
                bt,
                { gap: '20px' },
                G ||
                  (De
                    ? i.a.createElement(
                        ft,
                        null,
                        i.a.createElement(
                          Tu,
                          null,
                          i.a.createElement(
                            bt,
                            { gap: '10px' },
                            i.a.createElement(
                              Ro,
                              { fontWeight: 600, color: 'primaryText1' },
                              'You are the first liquidity provider.'
                            ),
                            i.a.createElement(
                              Ro,
                              { fontWeight: 400, color: 'primaryText1' },
                              'The ratio of tokens you add will set the price of this pool.'
                            ),
                            i.a.createElement(
                              Ro,
                              { fontWeight: 400, color: 'primaryText1' },
                              'Once you are happy with the rate click supply to review.'
                            )
                          )
                        )
                      )
                    : i.a.createElement(
                        ft,
                        null,
                        i.a.createElement(
                          Tu,
                          null,
                          i.a.createElement(
                            bt,
                            { gap: '10px' },
                            i.a.createElement(
                              Ro,
                              { fontWeight: 400, color: 'primaryText1' },
                              i.a.createElement('b', null, 'Tip:'),
                              ' When you add liquidity, you will receive pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time.'
                            )
                          )
                        )
                      )),
                i.a.createElement(Gg, {
                  value: ye[Ay.CURRENCY_A],
                  onUserInput: ee,
                  onMax: function() {
                    var e, t
                    ee(
                      null !== (e = null === (t = Ee[Ay.CURRENCY_A]) || void 0 === t ? void 0 : t.toExact()) &&
                        void 0 !== e
                        ? e
                        : ''
                    )
                  },
                  onCurrencySelect: ze,
                  showMaxButton: !xe[Ay.CURRENCY_A],
                  currency: V[Ay.CURRENCY_A],
                  id: 'add-liquidity-input-tokena',
                  showCommonBases: !0
                }),
                i.a.createElement(ft, null, i.a.createElement(Kf.a, { size: '16', color: N.text2 })),
                i.a.createElement(Gg, {
                  value: ye[Ay.CURRENCY_B],
                  onUserInput: ne,
                  onCurrencySelect: Me,
                  onMax: function() {
                    var e, t
                    ne(
                      null !== (e = null === (t = Ee[Ay.CURRENCY_B]) || void 0 === t ? void 0 : t.toExact()) &&
                        void 0 !== e
                        ? e
                        : ''
                    )
                  },
                  showMaxButton: !xe[Ay.CURRENCY_B],
                  currency: V[Ay.CURRENCY_B],
                  id: 'add-liquidity-input-tokenb',
                  showCommonBases: !0
                }),
                V[Ay.CURRENCY_A] &&
                  V[Ay.CURRENCY_B] &&
                  H !== Cc.INVALID &&
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      'div',
                      null,
                      i.a.createElement('input', {
                        type: 'checkbox',
                        name: 'toggle1',
                        style: { opacity: '0', position: 'absolute' },
                        className: 'mobileToggle',
                        id: 'toggle1',
                        checked: Ge,
                        onChange: function() {
                          Ke(!Ge)
                        }
                      }),
                      i.a.createElement(
                        'label',
                        {
                          htmlFor: 'toggle1',
                          style: {
                            position: 'relative',
                            display: 'inline-block',
                            userSelect: 'none',
                            transition: '.4s ease',
                            height: '30px',
                            width: '50px',
                            border: '1px solid #e4e4e4',
                            borderRadius: '60px'
                          }
                        },
                        i.a.createElement('div', {
                          style: {
                            content: '""',
                            position: 'absolute',
                            display: 'block',
                            transition: '.2s cubic-bezier(.24, 0, .5, 1)',
                            height: '30px',
                            width: '51px',
                            top: '0',
                            left: '0',
                            borderRadius: '30px',
                            background: Ge ? '#2ecc71' : 'whitesmoke'
                          }
                        }),
                        i.a.createElement('div', {
                          style: {
                            content: '""',
                            position: 'absolute',
                            display: 'block',
                            boxShadow: Ge
                              ? '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 0px 0 hsla(0, 0%, 0%, .04), 0 4px 9px hsla(0, 0%, 0%, .13), 0 3px 3px hsla(0, 0%, 0%, .05)'
                              : 'none',
                            transition: '.35s cubic-bezier(.54, 1.60, .5, 1)',
                            background: 'whitesmoke',
                            height: '28px',
                            width: '28px',
                            top: '1px',
                            left: Ge ? '24px' : '0px',
                            borderRadius: '60px'
                          }
                        })
                      ),
                      i.a.createElement('h1', null, 'LOCK LP LIFE LONG')
                    ),
                    i.a.createElement(
                      xu,
                      { padding: '0px', borderRadius: '20px' },
                      i.a.createElement(
                        Vt,
                        { padding: '1rem' },
                        i.a.createElement(
                          Mo,
                          { fontWeight: 500, fontSize: 14 },
                          G ? 'Initial prices' : 'Prices',
                          ' and pool share'
                        )
                      ),
                      ' ',
                      i.a.createElement(
                        xu,
                        { padding: '1rem', borderRadius: '20px' },
                        i.a.createElement(OE, { currencies: V, poolTokenPercentage: Z, noLiquidity: G, price: J })
                      )
                    )
                  ),
                Fe
                  ? i.a.createElement(ii, { disabled: !0 }, i.a.createElement(No, { mb: '4px' }, 'Unsupported Asset'))
                  : C
                  ? i.a.createElement(
                      bt,
                      { gap: 'md' },
                      (Ae === _y.NOT_APPROVED || Ae === _y.PENDING || Ce === _y.NOT_APPROVED || Ce === _y.PENDING) &&
                        ae &&
                        i.a.createElement(
                          Vt,
                          null,
                          Ae !== _y.APPROVED &&
                            i.a.createElement(
                              ii,
                              { onClick: we, disabled: Ae === _y.PENDING, width: Ce !== _y.APPROVED ? '48%' : '100%' },
                              Ae === _y.PENDING
                                ? i.a.createElement(
                                    EE,
                                    null,
                                    'Approving ',
                                    null === (m = V[Ay.CURRENCY_A]) || void 0 === m ? void 0 : m.symbol
                                  )
                                : 'Approve ' + (null === (h = V[Ay.CURRENCY_A]) || void 0 === h ? void 0 : h.symbol)
                            ),
                          Ce !== _y.APPROVED &&
                            i.a.createElement(
                              ii,
                              { onClick: Ie, disabled: Ce === _y.PENDING, width: Ae !== _y.APPROVED ? '48%' : '100%' },
                              Ce === _y.PENDING
                                ? i.a.createElement(
                                    EE,
                                    null,
                                    'Approving ',
                                    null === (g = V[Ay.CURRENCY_B]) || void 0 === g ? void 0 : g.symbol
                                  )
                                : 'Approve ' + (null === (y = V[Ay.CURRENCY_B]) || void 0 === y ? void 0 : y.symbol)
                            )
                        ),
                      i.a.createElement(
                        fi,
                        {
                          onClick: function() {
                            W ? Ne() : ce(!0)
                          },
                          disabled: !ae || Ae !== _y.APPROVED || Ce !== _y.APPROVED,
                          error: !ae && !!X[Ay.CURRENCY_A] && !!X[Ay.CURRENCY_B]
                        },
                        i.a.createElement(
                          Tr.b,
                          { fontSize: 20, fontWeight: 500 },
                          null !== _ && void 0 !== _ ? _ : 'Supply'
                        )
                      )
                    )
                  : i.a.createElement(ci, { onClick: L }, 'Connect Wallet')
              )
            )
          ),
          Fe
            ? i.a.createElement(CE, { show: Fe, currencies: [V.CURRENCY_A, V.CURRENCY_B] })
            : Y && !G && H !== Cc.INVALID
            ? i.a.createElement(
                bt,
                { style: { minWidth: '20rem', width: '100%', maxWidth: '400px', marginTop: '1rem' } },
                i.a.createElement(nE, { showUnwrapped: B, pair: Y })
              )
            : null
        )
      }
      function SE() {
        return i.a.createElement(Ye.a, { to: '/add/' })
      }
      var NE = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/
      function RE(e) {
        var t = e.match.params.currencyIdA.match(NE)
        return (null === t || void 0 === t
        ? void 0
        : t.length)
          ? i.a.createElement(Ye.a, { to: '/add/'.concat(t[1], '/').concat(t[2]) })
          : i.a.createElement(IE, e)
      }
      function UE(e) {
        var t = e.match.params,
          n = t.currencyIdA,
          a = t.currencyIdB
        return n.toLowerCase() === a.toLowerCase()
          ? i.a.createElement(Ye.a, { to: '/add/'.concat(n) })
          : i.a.createElement(IE, e)
      }
      function BE() {
        var e = Object(Ve.a)([
          '\n  padding: 12px 16px;\n  opacity: ',
          ';\n  border-radius: 0 0 12px 12px;\n  display: flex;\n  flex-direction: row;\n  align-items: baseline;\n  justify-content: space-between;\n  z-index: 1;\n'
        ])
        return (
          (BE = function() {
            return e
          }),
          e
        )
      }
      function LE() {
        var e = Object(Ve.a)(['\n    grid-template-columns: 48px 1fr 96px;\n  '])
        return (
          (LE = function() {
            return e
          }),
          e
        )
      }
      function WE() {
        var e = Object(Ve.a)([
          '\n  display: grid;\n  grid-template-columns: 48px 1fr 120px;\n  grid-gap: 0px;\n  align-items: center;\n  padding: 1rem;\n  z-index: 1;\n  ',
          ';\n'
        ])
        return (
          (WE = function() {
            return e
          }),
          e
        )
      }
      function zE() {
        var e = Object(Ve.a)([
          '\n  border-radius: 12px;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n  opacity: ',
          ';\n  background: ',
          ';\n  color: ',
          ' !important;\n\n  ',
          '\n'
        ])
        return (
          (zE = function() {
            return e
          }),
          e
        )
      }
      function ME() {
        var e = Object(Ve.a)(['\n  display: none;\n'])
        return (
          (ME = function() {
            return e
          }),
          e
        )
      }
      function PE() {
        var e = Object(Ve.a)([
          '\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 1rem;\n  margin-right: 1rem;\n  margin-left: 1rem;\n  ',
          ';\n'
        ])
        return (
          (PE = function() {
            return e
          }),
          e
        )
      }
      var DE = He.default.div(PE(), function(e) {
          return e.theme.mediaWidth.upToSmall(ME())
        }),
        FE = Object(He.default)(bt)(
          zE(),
          function(e) {
            e.showBackground
            return '1'
          },
          function(e) {
            var t = e.theme,
              n = e.bgColor,
              a = e.showBackground
            return 'radial-gradient(91.85% 100% at 1.84% 0%, '.concat(n, ' 0%, ').concat(a ? t.black : t.bg5, ' 100%) ')
          },
          function(e) {
            var t = e.theme
            return e.showBackground ? t.white : t.text1
          },
          function(e) {
            return (
              e.showBackground &&
              '  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);'
            )
          }
        ),
        qE = He.default.div(WE(), function(e) {
          return e.theme.mediaWidth.upToSmall(LE())
        }),
        VE = He.default.div(BE(), function(e) {
          return e.showBackground ? '1' : '0.4'
        })
      function YE(e) {
        var t,
          n,
          a,
          r,
          o,
          c,
          u,
          l = e.stakingInfo,
          s = l.tokens[0],
          d = l.tokens[1],
          m = Tc(s),
          f = Tc(d),
          b = Boolean(l.stakedAmount.greaterThan('0')),
          h = m === v.d ? d : s,
          g = m === v.d ? s : d,
          y = jh(h),
          E = Wm(l.stakedAmount.token),
          x = Nc.apply(void 0, Object(p.a)(l.tokens)),
          O = Object(A.a)(x, 2)[1]
        E &&
          O &&
          (u = new v.m(
            g,
            v.f.divide(v.f.multiply(v.f.multiply(l.totalStakedAmount.raw, O.reserveOf(g).raw), v.f.BigInt(2)), E.raw)
          ))
        var j = Mm(g),
          w = u && (null === j || void 0 === j ? void 0 : j.quote(u))
        return i.a.createElement(
          FE,
          { showBackground: b, bgColor: y },
          i.a.createElement(Nt, { desaturate: !0 }),
          i.a.createElement(Ut, null),
          i.a.createElement(
            qE,
            null,
            i.a.createElement(Eg, { currency0: m, currency1: f, size: 24 }),
            i.a.createElement(
              Bo,
              { fontWeight: 600, fontSize: 24, style: { marginLeft: '8px' } },
              m.symbol,
              '-',
              f.symbol
            ),
            i.a.createElement(
              ro,
              { to: '/uni/'.concat(Jy(m), '/').concat(Jy(f)), style: { width: '100%' } },
              i.a.createElement(ii, { padding: '8px', borderRadius: '8px' }, b ? 'Manage' : 'Deposit')
            )
          ),
          i.a.createElement(
            DE,
            null,
            i.a.createElement(
              Vt,
              null,
              i.a.createElement(Bo, null, ' Total deposited'),
              i.a.createElement(
                Bo,
                null,
                w
                  ? '$'.concat(w.toFixed(0, { groupSeparator: ',' }))
                  : ''.concat(
                      null !==
                        (t = null === (n = u) || void 0 === n ? void 0 : n.toSignificant(4, { groupSeparator: ',' })) &&
                        void 0 !== t
                        ? t
                        : '-',
                      ' ETH'
                    )
              )
            ),
            i.a.createElement(
              Vt,
              null,
              i.a.createElement(Bo, null, ' Pool rate '),
              i.a.createElement(
                Bo,
                null,
                l
                  ? l.active
                    ? ''.concat(
                        null === (a = l.totalRewardRate) ||
                          void 0 === a ||
                          null === (r = a.multiply(xe)) ||
                          void 0 === r
                          ? void 0
                          : r.toFixed(0, { groupSeparator: ',' }),
                        ' UNI / week'
                      )
                    : '0 UNI / week'
                  : '-'
              )
            )
          ),
          b &&
            i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(Lt, null),
              i.a.createElement(
                VE,
                { showBackground: !0 },
                i.a.createElement(
                  Uo,
                  { color: 'white', fontWeight: 500 },
                  i.a.createElement('span', null, 'Your rate')
                ),
                i.a.createElement(
                  Uo,
                  { style: { textAlign: 'right' }, color: 'white', fontWeight: 500 },
                  i.a.createElement(
                    'span',
                    { role: 'img', 'aria-label': 'wizard-icon', style: { marginRight: '0.5rem' } },
                    '\u26a1'
                  ),
                  l
                    ? l.active
                      ? ''.concat(
                          null === (o = l.rewardRate) || void 0 === o || null === (c = o.multiply(xe)) || void 0 === c
                            ? void 0
                            : c.toSignificant(4, { groupSeparator: ',' }),
                          ' UNI / week'
                        )
                      : '0 UNI / week'
                    : '-'
                )
              )
            )
        )
      }
      function HE(e) {
        var t = e.exactEnd,
          n = Object(o.useMemo)(
            function() {
              return t ? Math.floor(t.getTime() / 1e3) : 1605571200
            },
            [t]
          ),
          a = Object(o.useMemo)(
            function() {
              return n - 5184e3
            },
            [n]
          ),
          r = Object(o.useState)(function() {
            return Math.floor(Date.now() / 1e3)
          }),
          c = Object(A.a)(r, 2),
          u = c[0],
          l = c[1]
        Object(o.useEffect)(
          function() {
            if (u <= n) {
              var e = setTimeout(function() {
                return l(Math.floor(Date.now() / 1e3))
              }, 1e3)
              return function() {
                clearTimeout(e)
              }
            }
          },
          [u, n]
        )
        var s,
          d,
          m = a - u,
          p = n - u
        m >= 0
          ? ((d = 'Rewards begin in'), (s = m))
          : p >= 0
          ? ((d = 'Rewards end in'), (s = p))
          : ((d = 'Rewards have ended!'), (s = 1 / 0))
        var f = (s - (s % 86400)) / 86400,
          b = ((s -= 86400 * f) - (s % 3600)) / 3600,
          v = ((s -= 3600 * b) - (s % 60)) / 60,
          h = (s -= 60 * v)
        return i.a.createElement(
          Uo,
          { fontWeight: 400 },
          d,
          ' ',
          Number.isFinite(s) &&
            i.a.createElement(
              'code',
              null,
              ''
                .concat(f, ':')
                .concat(b.toString().padStart(2, '0'), ':')
                .concat(v.toString().padStart(2, '0'), ':')
                .concat(h.toString().padStart(2, '0'))
            )
        )
      }
      function QE() {
        var e = Object(Ve.a)(['\nflex-direction: column;\n'])
        return (
          (QE = function() {
            return e
          }),
          e
        )
      }
      function XE() {
        var e = Object(Ve.a)(['\n  ', ';\n'])
        return (
          (XE = function() {
            return e
          }),
          e
        )
      }
      function JE() {
        var e = Object(Ve.a)([
          '\n  display: grid;\n  grid-template-columns: 1fr;\n  column-gap: 10px;\n  row-gap: 15px;\n  width: 100%;\n  justify-self: center;\n'
        ])
        return (
          (JE = function() {
            return e
          }),
          e
        )
      }
      function GE() {
        var e = Object(Ve.a)(['\n  max-width: 720px;\n  width: 100%;\n'])
        return (
          (GE = function() {
            return e
          }),
          e
        )
      }
      function KE() {
        var e = Object(Ve.a)(['\n  max-width: 640px;\n  width: 100%;\n'])
        return (
          (KE = function() {
            return e
          }),
          e
        )
      }
      var ZE = Object(He.default)(bt)(KE()),
        _E = Object(He.default)(bt)(GE()),
        $E = He.default.div(JE()),
        ex = Object(He.default)(Vt)(XE(), function(e) {
          return e.theme.mediaWidth.upToSmall(QE())
        })
      function tx() {
        var e,
          t,
          n,
          a = Le().chainId,
          r = au(),
          o =
            null === r || void 0 === r
              ? void 0
              : r.filter(function(e) {
                  return v.f.greaterThan(e.stakedAmount.raw, Oe)
                }),
          c = Boolean(
            'number' === typeof a &&
              (null !== (e = null === (t = nu[a]) || void 0 === t ? void 0 : t.length) && void 0 !== e ? e : 0) > 0
          )
        return i.a.createElement(
          ZE,
          { gap: 'lg', justify: 'center' },
          i.a.createElement(
            _E,
            { gap: 'md' },
            i.a.createElement(
              St,
              null,
              i.a.createElement(Nt, null),
              i.a.createElement(Ut, null),
              i.a.createElement(
                Bt,
                null,
                i.a.createElement(
                  bt,
                  { gap: 'md' },
                  i.a.createElement(Vt, null, i.a.createElement(Bo, { fontWeight: 600 }, 'Uniswap liquidity mining')),
                  i.a.createElement(
                    Vt,
                    null,
                    i.a.createElement(
                      Bo,
                      { fontSize: 14 },
                      'Deposit your Liquidity Provider tokens to receive UNI, the Uniswap protocol governance token.'
                    )
                  ),
                  ' ',
                  i.a.createElement(
                    mo,
                    {
                      style: { color: 'white', textDecoration: 'underline' },
                      href: 'https://uniswap.org/blog/uni/',
                      target: '_blank'
                    },
                    i.a.createElement(Bo, { fontSize: 14 }, 'Read more about UNI')
                  )
                )
              ),
              i.a.createElement(Nt, null),
              i.a.createElement(Ut, null)
            )
          ),
          i.a.createElement(
            bt,
            { gap: 'lg', style: { width: '100%', maxWidth: '720px' } },
            i.a.createElement(
              ex,
              { style: { alignItems: 'baseline' } },
              i.a.createElement(zo, { style: { marginTop: '0.5rem' } }, 'Participating pools'),
              i.a.createElement(HE, {
                exactEnd: null === r || void 0 === r || null === (n = r[0]) || void 0 === n ? void 0 : n.periodFinish
              })
            ),
            i.a.createElement(
              $E,
              null,
              c && 0 === (null === r || void 0 === r ? void 0 : r.length)
                ? i.a.createElement(gl, { style: { margin: 'auto' } })
                : c
                ? 0 !== (null === r || void 0 === r ? void 0 : r.length) && 0 === o.length
                  ? i.a.createElement(ju, null, 'No active pools')
                  : null === o || void 0 === o
                  ? void 0
                  : o.map(function(e) {
                      return i.a.createElement(YE, { key: e.stakingRewardAddress, stakingInfo: e })
                    })
                : i.a.createElement(ju, null, 'No active pools')
            )
          )
        )
      }
      function nx() {
        var e,
          t,
          n = Le().account,
          a = Kn(
            La(Le().chainId === v.a.MAINNET ? '0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8' : void 0, ga, !1),
            'isArgentWallet',
            [null !== n && void 0 !== n ? n : void 0],
            Vn
          )
        return (
          null !== (e = null === a || void 0 === a || null === (t = a.result) || void 0 === t ? void 0 : t[0]) &&
          void 0 !== e &&
          e
        )
      }
      function ax() {
        var e = Object(Ve.a)([
          '\n  width: 100%;\n  height: 2px;\n  background-color: ;\n  background: linear-gradient(\n    90deg,\n    ',
          '\n      0%,\n    ',
          ' 80%\n  );\n  opacity: 0.6;\n'
        ])
        return (
          (ax = function() {
            return e
          }),
          e
        )
      }
      function rx() {
        var e = Object(Ve.a)(['\n  width: calc(100% - 20px);\n  display: flex;\n  align-items: center;\n'])
        return (
          (rx = function() {
            return e
          }),
          e
        )
      }
      function ox() {
        var e = Object(Ve.a)([
          '\n  min-width: 20px;\n  min-height: 20px;\n  background-color: ',
          ';\n  border-radius: 50%;\n  color: ',
          ';\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 8px;\n  font-size: 12px;\n'
        ])
        return (
          (ox = function() {
            return e
          }),
          e
        )
      }
      function ix() {
        var e = Object(Ve.a)(['\n  width: 50%;\n'])
        return (
          (ix = function() {
            return e
          }),
          e
        )
      }
      function cx() {
        var e = Object(Ve.a)([''])
        return (
          (cx = function() {
            return e
          }),
          e
        )
      }
      var ux = Object(He.default)(bt)(cx()),
        lx = Object(He.default)(Vt)(ix()),
        sx = He.default.div(
          ox(),
          function(e) {
            var t = e.theme,
              n = e.confirmed
            return e.disabled ? t.bg4 : n ? t.green1 : t.primary1
          },
          function(e) {
            return e.theme.white
          }
        ),
        dx = He.default.div(rx()),
        mx = He.default.div(
          ax(),
          function(e) {
            var t = e.theme,
              n = e.prevConfirmed
            return e.disabled ? t.bg4 : Object(Ke.d)(0.5, n ? t.green1 : t.primary1)
          },
          function(e) {
            var t = e.theme,
              n = e.prevConfirmed
            return e.disabled ? t.bg4 : n ? t.primary1 : t.bg4
          }
        )
      function px(e) {
        var t = e.steps,
          n = e.disabled,
          a = void 0 !== n && n,
          r = Object(Xe.a)(e, ['steps', 'disabled'])
        return i.a.createElement(
          ux,
          Object.assign({ justify: 'center' }, r),
          i.a.createElement(
            lx,
            null,
            t.map(function(e, n) {
              return i.a.createElement(
                dx,
                { key: n },
                i.a.createElement(sx, { confirmed: e, disabled: a || (!t[n - 1] && 0 !== n) }, e ? '\u2713' : n + 1),
                i.a.createElement(mx, { prevConfirmed: e, disabled: a })
              )
            }),
            i.a.createElement(sx, { disabled: a || !t[t.length - 1] }, t.length + 1)
          )
        )
      }
      function fx() {
        var e = Object(Ve.a)(['\n  padding: 60px 0;\n'])
        return (
          (fx = function() {
            return e
          }),
          e
        )
      }
      function bx() {
        var e = Object(Ve.a)(['\n  width: 100%;\n  padding: 24px;\n'])
        return (
          (bx = function() {
            return e
          }),
          e
        )
      }
      var vx = He.default.div(bx()),
        hx = Object(He.default)(ft)(fx())
      function gx(e) {
        var t = e.children,
          n = e.onDismiss
        return i.a.createElement(
          vx,
          null,
          i.a.createElement(Vt, null, i.a.createElement('div', null), i.a.createElement(to, { onClick: n })),
          i.a.createElement(hx, null, i.a.createElement(go, { src: Ui.a, alt: 'loader', size: '90px' })),
          i.a.createElement(
            bt,
            { gap: '100px', justify: 'center' },
            t,
            i.a.createElement(Mo, null, 'Confirm this transaction in your wallet')
          )
        )
      }
      function yx(e) {
        var t = e.children,
          n = e.onDismiss,
          a = e.hash,
          r = Object(o.useContext)(He.ThemeContext),
          c = Le().chainId
        return i.a.createElement(
          vx,
          null,
          i.a.createElement(Vt, null, i.a.createElement('div', null), i.a.createElement(to, { onClick: n })),
          i.a.createElement(hx, null, i.a.createElement(Zf.a, { strokeWidth: 0.5, size: 90, color: r.primary1 })),
          i.a.createElement(
            bt,
            { gap: '100px', justify: 'center' },
            t,
            c &&
              a &&
              i.a.createElement(
                mo,
                { href: ra(c, a, 'transaction'), style: { marginLeft: '4px' } },
                i.a.createElement(Mo, null, 'View transaction on Etherscan')
              )
          )
        )
      }
      function Ex() {
        var e = Object(Ve.a)(['\n  width: 100%;\n  padding: 1rem;\n'])
        return (
          (Ex = function() {
            return e
          }),
          e
        )
      }
      function xx() {
        var e = Object(Ve.a)([
          '\n  display: flex;\n  justify-content: space-between;\n  padding-right: 20px;\n  padding-left: 20px;\n\n  opacity: ',
          ';\n'
        ])
        return (
          (xx = function() {
            return e
          }),
          e
        )
      }
      var Ox = He.default.div(xx(), function(e) {
          return e.dim ? 0.5 : 1
        }),
        jx = Object(He.default)(bt)(Ex())
      function Ax(e) {
        var t = e.isOpen,
          n = e.onDismiss,
          a = e.stakingInfo,
          r = e.userLiquidityUnstaked,
          c = Le(),
          u = c.account,
          l = c.chainId,
          s = c.library,
          d = Object(o.useState)(''),
          m = Object(A.a)(d, 2),
          p = m[0],
          f = m[1],
          b = (function(e, t, n) {
            var a,
              r,
              o = Le().account,
              i = Xc(e, t),
              c = i && n && v.f.lessThanOrEqual(i.raw, n.raw) ? i : void 0
            return (
              o || (a = 'Connect Wallet'),
              c || (a = null !== (r = a) && void 0 !== r ? r : 'Enter an amount'),
              { parsedAmount: c, error: a }
            )
          })(p, a.stakedAmount.token, r),
          h = b.parsedAmount,
          g = b.error,
          y = kc(h, l),
          E = new v.m(a.rewardRate.token, '0')
        ;(null === y || void 0 === y ? void 0 : y.greaterThan('0')) &&
          (E = a.getHypotheticalRewardRate(a.stakedAmount.add(y), a.totalStakedAmount.add(y), a.totalRewardRate))
        var x = Ei(),
          O = Object(o.useState)(!1),
          k = Object(A.a)(O, 2),
          T = k[0],
          C = k[1],
          I = Object(o.useState)(),
          S = Object(A.a)(I, 2),
          N = S[0],
          R = S[1],
          U = Object(o.useCallback)(
            function() {
              R(void 0), C(!1), n()
            },
            [n]
          ),
          B = new v.g(new v.m(a.tokens[0], '0'), new v.m(a.tokens[1], '0')),
          L = Fa(B.liquidityToken.address),
          W = oE(),
          z = Object(o.useState)(null),
          M = Object(A.a)(z, 2),
          P = M[0],
          D = M[1],
          F = rE(h, a.stakingRewardAddress),
          q = Object(A.a)(F, 2),
          V = q[0],
          Y = q[1],
          H = nx(),
          Q = Qa(a.stakingRewardAddress)
        function X() {
          return (X = Object(w.a)(
            j.a.mark(function e() {
              return j.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ((C(!0), !(Q && h && W))) {
                        e.next = 13
                        break
                      }
                      if (V !== _y.APPROVED) {
                        e.next = 7
                        break
                      }
                      return (e.next = 5), Q.stake('0x'.concat(h.raw.toString(16)), { gasLimit: 35e4 })
                    case 5:
                      e.next = 13
                      break
                    case 7:
                      if (!P) {
                        e.next = 11
                        break
                      }
                      Q.stakeWithPermit('0x'.concat(h.raw.toString(16)), P.deadline, P.v, P.r, P.s, { gasLimit: 35e4 })
                        .then(function(e) {
                          x(e, { summary: 'Deposit liquidity' }), R(e.hash)
                        })
                        .catch(function(e) {
                          C(!1), console.log(e)
                        }),
                        (e.next = 13)
                      break
                    case 11:
                      throw (C(!1),
                      new Error('Attempting to stake without approval or a signature. Please contact support.'))
                    case 13:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )).apply(this, arguments)
        }
        var J = Object(o.useCallback)(function(e) {
            D(null), f(e)
          }, []),
          G = uE(r),
          K = Boolean(G && (null === h || void 0 === h ? void 0 : h.equalTo(G))),
          Z = Object(o.useCallback)(
            function() {
              G && J(G.toExact())
            },
            [G, J]
          )
        function _() {
          return (_ = Object(w.a)(
            j.a.mark(function e() {
              var t, n, r, o, i, c, d
              return j.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (L && s && W) {
                        e.next = 2
                        break
                      }
                      throw new Error('missing dependencies')
                    case 2:
                      if ((t = h)) {
                        e.next = 5
                        break
                      }
                      throw new Error('missing liquidity amount')
                    case 5:
                      if (!H) {
                        e.next = 7
                        break
                      }
                      return e.abrupt('return', Y())
                    case 7:
                      return (e.next = 9), L.nonces(u)
                    case 9:
                      ;(n = e.sent),
                        (r = [
                          { name: 'name', type: 'string' },
                          { name: 'version', type: 'string' },
                          { name: 'chainId', type: 'uint256' },
                          { name: 'verifyingContract', type: 'address' }
                        ]),
                        (o = { name: 'WhooshSwap LP', version: '1', chainId: l, verifyingContract: L.address }),
                        (i = [
                          { name: 'owner', type: 'address' },
                          { name: 'spender', type: 'address' },
                          { name: 'value', type: 'uint256' },
                          { name: 'nonce', type: 'uint256' },
                          { name: 'deadline', type: 'uint256' }
                        ]),
                        (c = {
                          owner: u,
                          spender: a.stakingRewardAddress,
                          value: t.raw.toString(),
                          nonce: n.toHexString(),
                          deadline: W.toNumber()
                        }),
                        (d = JSON.stringify({
                          types: { EIP712Domain: r, Permit: i },
                          domain: o,
                          primaryType: 'Permit',
                          message: c
                        })),
                        s
                          .send('eth_signTypedData_v4', [u, d])
                          .then(Ja.splitSignature)
                          .then(function(e) {
                            D({ v: e.v, r: e.r, s: e.s, deadline: W.toNumber() })
                          })
                          .catch(function(e) {
                            4001 !== (null === e || void 0 === e ? void 0 : e.code) && Y()
                          })
                    case 16:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )).apply(this, arguments)
        }
        return i.a.createElement(
          lt,
          { isOpen: t, onDismiss: U, maxHeight: 90 },
          !T &&
            !N &&
            i.a.createElement(
              jx,
              { gap: 'lg' },
              i.a.createElement(
                Vt,
                null,
                i.a.createElement(zo, null, 'Deposit'),
                i.a.createElement(to, { onClick: U })
              ),
              i.a.createElement(Gg, {
                value: p,
                onUserInput: J,
                onMax: Z,
                showMaxButton: !K,
                currency: a.stakedAmount.token,
                pair: B,
                label: '',
                disableCurrencySelect: !0,
                customBalanceText: 'Available to deposit: ',
                id: 'stake-liquidity-token'
              }),
              i.a.createElement(
                Ox,
                { dim: !E.greaterThan('0') },
                i.a.createElement('div', null, i.a.createElement(Uo, { fontWeight: 600 }, 'Weekly Rewards')),
                i.a.createElement(
                  Uo,
                  null,
                  E.multiply((604800).toString()).toSignificant(4, { groupSeparator: ',' }),
                  ' ',
                  'UNI / week'
                )
              ),
              i.a.createElement(
                Vt,
                null,
                i.a.createElement(
                  pi,
                  {
                    mr: '0.5rem',
                    onClick: function() {
                      return _.apply(this, arguments)
                    },
                    confirmed: V === _y.APPROVED || null !== P,
                    disabled: V !== _y.NOT_APPROVED || null !== P
                  },
                  'Approve'
                ),
                i.a.createElement(
                  fi,
                  {
                    disabled: !!g || (null === P && V !== _y.APPROVED),
                    error: !!g && !!h,
                    onClick: function() {
                      return X.apply(this, arguments)
                    }
                  },
                  null !== g && void 0 !== g ? g : 'Deposit'
                )
              ),
              i.a.createElement(px, { steps: [V === _y.APPROVED || null !== P], disabled: !0 })
            ),
          T &&
            !N &&
            i.a.createElement(
              gx,
              { onDismiss: U },
              i.a.createElement(
                bt,
                { gap: '12px', justify: 'center' },
                i.a.createElement(Wo, null, 'Depositing Liquidity'),
                i.a.createElement(
                  Lo,
                  { fontSize: 20 },
                  null === h || void 0 === h ? void 0 : h.toSignificant(4),
                  ' WHOOSH-LP'
                )
              )
            ),
          T &&
            N &&
            i.a.createElement(
              yx,
              { onDismiss: U, hash: N },
              i.a.createElement(
                bt,
                { gap: '12px', justify: 'center' },
                i.a.createElement(Wo, null, 'Transaction Submitted'),
                i.a.createElement(
                  Lo,
                  { fontSize: 20 },
                  'Deposited ',
                  null === h || void 0 === h ? void 0 : h.toSignificant(4),
                  ' WHOOSH-LP'
                )
              )
            )
        )
      }
      var wx = new v.e(v.f.BigInt(1), v.f.BigInt(1e6))
      function kx(e) {
        var t = e.currencyAmount,
          n = e.significantDigits,
          a = void 0 === n ? 4 : n
        return i.a.createElement(
          i.a.Fragment,
          null,
          t.equalTo(v.f.BigInt(0)) ? '0' : t.greaterThan(wx) ? t.toSignificant(a) : '<'.concat(wx.toSignificant(1))
        )
      }
      function Tx() {
        var e = Object(Ve.a)(['\n  width: 100%;\n  padding: 1rem;\n'])
        return (
          (Tx = function() {
            return e
          }),
          e
        )
      }
      var Cx = Object(He.default)(bt)(Tx())
      function Ix(e) {
        var t,
          n,
          a,
          r = e.isOpen,
          c = e.onDismiss,
          u = e.stakingInfo,
          l = Le().account,
          s = Ei(),
          d = Object(o.useState)(),
          m = Object(A.a)(d, 2),
          p = m[0],
          f = m[1],
          b = Object(o.useState)(!1),
          v = Object(A.a)(b, 2),
          h = v[0],
          g = v[1]
        function y() {
          f(void 0), g(!1), c()
        }
        var E,
          x,
          O = Qa(u.stakingRewardAddress)
        function k() {
          return (k = Object(w.a)(
            j.a.mark(function e() {
              return j.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!O || !(null === u || void 0 === u ? void 0 : u.stakedAmount)) {
                        e.next = 4
                        break
                      }
                      return (
                        g(!0),
                        (e.next = 4),
                        O.exit({ gasLimit: 3e5 })
                          .then(function(e) {
                            s(e, { summary: 'Withdraw deposited liquidity' }), f(e.hash)
                          })
                          .catch(function(e) {
                            g(!1), console.log(e)
                          })
                      )
                    case 4:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )).apply(this, arguments)
        }
        ;(l || (E = 'Connect Wallet'), null === u || void 0 === u ? void 0 : u.stakedAmount) ||
          (E = null !== (x = E) && void 0 !== x ? x : 'Enter an amount')
        return i.a.createElement(
          lt,
          { isOpen: r, onDismiss: y, maxHeight: 90 },
          !h &&
            !p &&
            i.a.createElement(
              Cx,
              { gap: 'lg' },
              i.a.createElement(
                Vt,
                null,
                i.a.createElement(zo, null, 'Withdraw'),
                i.a.createElement(to, { onClick: y })
              ),
              (null === u || void 0 === u ? void 0 : u.stakedAmount) &&
                i.a.createElement(
                  bt,
                  { justify: 'center', gap: 'md' },
                  i.a.createElement(
                    Lo,
                    { fontWeight: 600, fontSize: 36 },
                    i.a.createElement(kx, { currencyAmount: u.stakedAmount })
                  ),
                  i.a.createElement(Lo, null, 'Deposited liquidity:')
                ),
              (null === u || void 0 === u ? void 0 : u.earnedAmount) &&
                i.a.createElement(
                  bt,
                  { justify: 'center', gap: 'md' },
                  i.a.createElement(
                    Lo,
                    { fontWeight: 600, fontSize: 36 },
                    i.a.createElement(kx, { currencyAmount: null === u || void 0 === u ? void 0 : u.earnedAmount })
                  ),
                  i.a.createElement(Lo, null, 'Unclaimed UNI')
                ),
              i.a.createElement(
                Mo,
                { style: { textAlign: 'center' } },
                'When you withdraw, your UNI is claimed and your liquidity is removed from the mining pool.'
              ),
              i.a.createElement(
                fi,
                {
                  disabled: !!E,
                  error: !!E && !!(null === u || void 0 === u ? void 0 : u.stakedAmount),
                  onClick: function() {
                    return k.apply(this, arguments)
                  }
                },
                null !== (t = E) && void 0 !== t ? t : 'Withdraw & Claim'
              )
            ),
          h &&
            !p &&
            i.a.createElement(
              gx,
              { onDismiss: y },
              i.a.createElement(
                bt,
                { gap: '12px', justify: 'center' },
                i.a.createElement(
                  Lo,
                  { fontSize: 20 },
                  'Withdrawing ',
                  null === u || void 0 === u || null === (n = u.stakedAmount) || void 0 === n
                    ? void 0
                    : n.toSignificant(4),
                  ' WHOOSH-LP'
                ),
                i.a.createElement(
                  Lo,
                  { fontSize: 20 },
                  'Claiming ',
                  null === u || void 0 === u || null === (a = u.earnedAmount) || void 0 === a
                    ? void 0
                    : a.toSignificant(4),
                  ' UNI'
                )
              )
            ),
          p &&
            i.a.createElement(
              yx,
              { onDismiss: y, hash: p },
              i.a.createElement(
                bt,
                { gap: '12px', justify: 'center' },
                i.a.createElement(Wo, null, 'Transaction Submitted'),
                i.a.createElement(Lo, { fontSize: 20 }, 'Withdrew WHOOSH-LP!'),
                i.a.createElement(Lo, { fontSize: 20 }, 'Claimed UNI!')
              )
            )
        )
      }
      function Sx() {
        var e = Object(Ve.a)(['\n  width: 100%;\n  padding: 1rem;\n'])
        return (
          (Sx = function() {
            return e
          }),
          e
        )
      }
      var Nx = Object(He.default)(bt)(Sx())
      function Rx(e) {
        var t,
          n,
          a,
          r = e.isOpen,
          c = e.onDismiss,
          u = e.stakingInfo,
          l = Le().account,
          s = Ei(),
          d = Object(o.useState)(),
          m = Object(A.a)(d, 2),
          p = m[0],
          f = m[1],
          b = Object(o.useState)(!1),
          v = Object(A.a)(b, 2),
          h = v[0],
          g = v[1]
        function y() {
          f(void 0), g(!1), c()
        }
        var E,
          x,
          O = Qa(u.stakingRewardAddress)
        function k() {
          return (k = Object(w.a)(
            j.a.mark(function e() {
              return j.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (!O || !(null === u || void 0 === u ? void 0 : u.stakedAmount)) {
                        e.next = 4
                        break
                      }
                      return (
                        g(!0),
                        (e.next = 4),
                        O.getReward({ gasLimit: 35e4 })
                          .then(function(e) {
                            s(e, { summary: 'Claim accumulated UNI rewards' }), f(e.hash)
                          })
                          .catch(function(e) {
                            g(!1), console.log(e)
                          })
                      )
                    case 4:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )).apply(this, arguments)
        }
        ;(l || (E = 'Connect Wallet'), null === u || void 0 === u ? void 0 : u.stakedAmount) ||
          (E = null !== (x = E) && void 0 !== x ? x : 'Enter an amount')
        return i.a.createElement(
          lt,
          { isOpen: r, onDismiss: y, maxHeight: 90 },
          !h &&
            !p &&
            i.a.createElement(
              Nx,
              { gap: 'lg' },
              i.a.createElement(Vt, null, i.a.createElement(zo, null, 'Claim'), i.a.createElement(to, { onClick: y })),
              (null === u || void 0 === u ? void 0 : u.earnedAmount) &&
                i.a.createElement(
                  bt,
                  { justify: 'center', gap: 'md' },
                  i.a.createElement(
                    Lo,
                    { fontWeight: 600, fontSize: 36 },
                    null === u || void 0 === u || null === (t = u.earnedAmount) || void 0 === t
                      ? void 0
                      : t.toSignificant(6)
                  ),
                  i.a.createElement(Lo, null, 'Unclaimed UNI')
                ),
              i.a.createElement(
                Mo,
                { style: { textAlign: 'center' } },
                'When you claim without withdrawing your liquidity remains in the mining pool.'
              ),
              i.a.createElement(
                fi,
                {
                  disabled: !!E,
                  error: !!E && !!(null === u || void 0 === u ? void 0 : u.stakedAmount),
                  onClick: function() {
                    return k.apply(this, arguments)
                  }
                },
                null !== (n = E) && void 0 !== n ? n : 'Claim'
              )
            ),
          h &&
            !p &&
            i.a.createElement(
              gx,
              { onDismiss: y },
              i.a.createElement(
                bt,
                { gap: '12px', justify: 'center' },
                i.a.createElement(
                  Lo,
                  { fontSize: 20 },
                  'Claiming ',
                  null === u || void 0 === u || null === (a = u.earnedAmount) || void 0 === a
                    ? void 0
                    : a.toSignificant(6),
                  ' UNI'
                )
              )
            ),
          p &&
            i.a.createElement(
              yx,
              { onDismiss: y, hash: p },
              i.a.createElement(
                bt,
                { gap: '12px', justify: 'center' },
                i.a.createElement(Wo, null, 'Transaction Submitted'),
                i.a.createElement(Lo, { fontSize: 20 }, 'Claimed UNI!')
              )
            )
        )
      }
      var Ux = n(350)
      function Bx() {
        var e = Object(Ve.a)(['\n    flex-direction: column;\n    gap: 12px;\n  '])
        return (
          (Bx = function() {
            return e
          }),
          e
        )
      }
      function Lx() {
        var e = Object(Ve.a)(['\n  justify-content: center;\n  gap: 12px;\n\n  ', ';\n'])
        return (
          (Lx = function() {
            return e
          }),
          e
        )
      }
      function Wx() {
        var e = Object(Ve.a)([
          '\n  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #27ae60 0%, #000000 100%);\n  overflow: hidden;\n'
        ])
        return (
          (Wx = function() {
            return e
          }),
          e
        )
      }
      function zx() {
        var e = Object(Ve.a)(['\n  background: none;\n  border: 1px solid ', ';\n  padding: 1rem;\n  z-index: 1;\n'])
        return (
          (zx = function() {
            return e
          }),
          e
        )
      }
      function Mx() {
        var e = Object(Ve.a)([
          '\n  background: ',
          ';\n  opacity: ',
          ';\n  margin-top: -40px;\n  padding: 0 1.25rem 1rem 1.25rem;\n  padding-top: 32px;\n  z-index: 1;\n'
        ])
        return (
          (Mx = function() {
            return e
          }),
          e
        )
      }
      function Px() {
        var e = Object(Ve.a)([
          '\n  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #1e1a31 0%, #3d51a5 100%);\n  z-index: 2;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);\n  background: ',
          ';\n'
        ])
        return (
          (Px = function() {
            return e
          }),
          e
        )
      }
      function Dx() {
        var e = Object(Ve.a)(['\n  border-radius: 12px;\n  width: 100%;\n  position: relative;\n'])
        return (
          (Dx = function() {
            return e
          }),
          e
        )
      }
      function Fx() {
        var e = Object(Ve.a)(['\n  position: relative;\n  max-width: 640px;\n  width: 100%;\n  opacity: ', ';\n'])
        return (
          (Fx = function() {
            return e
          }),
          e
        )
      }
      function qx() {
        var e = Object(Ve.a)(['\n  max-width: 640px;\n  width: 100%;\n'])
        return (
          (qx = function() {
            return e
          }),
          e
        )
      }
      var Vx = Object(He.default)(bt)(qx()),
        Yx = Object(He.default)(bt)(Fx(), function(e) {
          return e.dim ? 0.6 : 1
        }),
        Hx = Object(He.default)(bt)(Dx()),
        Qx = Object(He.default)(St)(Px(), function(e) {
          var t = e.theme,
            n = e.bgColor,
            a = e.showBackground
          return 'radial-gradient(91.85% 100% at 1.84% 0%, '.concat(n, ' 0%,  ').concat(a ? t.black : t.bg5, ' 100%) ')
        }),
        Xx = Object(He.default)(St)(
          Mx(),
          function(e) {
            return e.theme.bg3
          },
          function(e) {
            return e.dim ? 0.4 : 1
          }
        ),
        Jx = Object(He.default)(St)(zx(), function(e) {
          return e.theme.bg4
        }),
        Gx = Object(He.default)(St)(Wx()),
        Kx = Object(He.default)(Vt)(Lx(), function(e) {
          return e.theme.mediaWidth.upToSmall(Bx())
        })
      function Zx(e) {
        var t,
          n,
          a,
          r,
          c,
          u,
          l,
          s,
          d,
          p,
          f,
          b,
          h,
          g,
          y,
          E,
          x,
          O,
          j,
          w,
          k,
          T,
          C = e.match.params,
          I = C.currencyIdA,
          S = C.currencyIdB,
          N = Le(),
          R = N.account,
          U = N.chainId,
          B = [ar(I), ar(S)],
          L = B[0],
          W = B[1],
          z = wc(null !== L && void 0 !== L ? L : void 0, U),
          M = wc(null !== W && void 0 !== W ? W : void 0, U),
          P = Nc(z, M),
          D = Object(A.a)(P, 2)[1],
          F = null === (t = au(D)) || void 0 === t ? void 0 : t[0],
          q = uu(
            null !== R && void 0 !== R ? R : void 0,
            null === F || void 0 === F || null === (n = F.stakedAmount) || void 0 === n ? void 0 : n.token
          ),
          V = Boolean(
            (null === F || void 0 === F || null === (a = F.stakedAmount) || void 0 === a ? void 0 : a.equalTo('0')) &&
              (null === q || void 0 === q ? void 0 : q.equalTo('0'))
          ),
          Y = Object(o.useState)(!1),
          H = Object(A.a)(Y, 2),
          Q = H[0],
          X = H[1],
          J = Object(o.useState)(!1),
          G = Object(A.a)(J, 2),
          K = G[0],
          Z = G[1],
          _ = Object(o.useState)(!1),
          $ = Object(A.a)(_, 2),
          ee = $[0],
          te = $[1],
          ne = !(null === F || void 0 === F ? void 0 : F.stakedAmount) || F.stakedAmount.equalTo(v.f.BigInt(0)),
          ae = L === v.d ? M : z,
          re = L === v.d ? z : M,
          oe = jh(ae),
          ie = Wm(null === F || void 0 === F || null === (r = F.stakedAmount) || void 0 === r ? void 0 : r.token)
        ie &&
          D &&
          F &&
          re &&
          (T = new v.m(
            re,
            v.f.divide(v.f.multiply(v.f.multiply(F.totalStakedAmount.raw, D.reserveOf(re).raw), v.f.BigInt(2)), ie.raw)
          ))
        var ce =
            null !==
              (c =
                null === F || void 0 === F || null === (u = F.earnedAmount) || void 0 === u ? void 0 : u.toFixed(6)) &&
            void 0 !== c
              ? c
              : '0',
          ue = null !== (l = Tl(ce)) && void 0 !== l ? l : '0',
          le = Mm(re),
          se = T && (null === le || void 0 === le ? void 0 : le.quote(T)),
          de = wn(),
          me = Object(o.useCallback)(
            function() {
              R ? X(!0) : de()
            },
            [R, de]
          )
        return i.a.createElement(
          Vx,
          { gap: 'lg', justify: 'center' },
          i.a.createElement(
            Vt,
            { style: { gap: '24px' } },
            i.a.createElement(
              zo,
              { style: { margin: 0 } },
              null === L || void 0 === L ? void 0 : L.symbol,
              '-',
              null === W || void 0 === W ? void 0 : W.symbol,
              ' Liquidity Mining'
            ),
            i.a.createElement(Eg, {
              currency0: null !== L && void 0 !== L ? L : void 0,
              currency1: null !== W && void 0 !== W ? W : void 0,
              size: 24
            })
          ),
          i.a.createElement(
            Kx,
            { style: { gap: '24px' } },
            i.a.createElement(
              Jx,
              null,
              i.a.createElement(
                bt,
                { gap: 'sm' },
                i.a.createElement(Lo, { style: { margin: 0 } }, 'Total deposits'),
                i.a.createElement(
                  Lo,
                  { fontSize: 24, fontWeight: 500 },
                  se
                    ? '$'.concat(se.toFixed(0, { groupSeparator: ',' }))
                    : ''.concat(
                        null !==
                          (s =
                            null === (d = T) || void 0 === d ? void 0 : d.toSignificant(4, { groupSeparator: ',' })) &&
                          void 0 !== s
                          ? s
                          : '-',
                        ' ETH'
                      )
                )
              )
            ),
            i.a.createElement(
              Jx,
              null,
              i.a.createElement(
                bt,
                { gap: 'sm' },
                i.a.createElement(Lo, { style: { margin: 0 } }, 'Pool Rate'),
                i.a.createElement(
                  Lo,
                  { fontSize: 24, fontWeight: 500 },
                  (null === F || void 0 === F
                  ? void 0
                  : F.active)
                    ? null !==
                        (p =
                          null === F ||
                          void 0 === F ||
                          null === (f = F.totalRewardRate) ||
                          void 0 === f ||
                          null === (b = f.multiply(xe)) ||
                          void 0 === b
                            ? void 0
                            : b.toFixed(0, { groupSeparator: ',' })) && void 0 !== p
                      ? p
                      : '-'
                    : '0',
                  ' UNI / week'
                )
              )
            )
          ),
          V &&
            i.a.createElement(
              Gx,
              null,
              i.a.createElement(Nt, null),
              i.a.createElement(Ut, null),
              i.a.createElement(
                Bt,
                null,
                i.a.createElement(
                  bt,
                  { gap: 'md' },
                  i.a.createElement(
                    Vt,
                    null,
                    i.a.createElement(Bo, { fontWeight: 600 }, 'Step 1. Get WHOOSH-LP Liquidity tokens')
                  ),
                  i.a.createElement(
                    Vt,
                    { style: { marginBottom: '1rem' } },
                    i.a.createElement(
                      Bo,
                      { fontSize: 14 },
                      "WHOOSH-LP LP tokens are required. Once you've added liquidity to the "
                        .concat(null === L || void 0 === L ? void 0 : L.symbol, '-')
                        .concat(
                          null === W || void 0 === W ? void 0 : W.symbol,
                          ' pool you can stake your liquidity tokens on this page.'
                        )
                    )
                  ),
                  i.a.createElement(
                    ii,
                    {
                      padding: '8px',
                      borderRadius: '8px',
                      width: 'fit-content',
                      as: m.b,
                      to: '/add/'.concat(L && Jy(L), '/').concat(W && Jy(W))
                    },
                    'Add '
                      .concat(null === L || void 0 === L ? void 0 : L.symbol, '-')
                      .concat(null === W || void 0 === W ? void 0 : W.symbol, ' liquidity')
                  )
                )
              ),
              i.a.createElement(Nt, null),
              i.a.createElement(Ut, null)
            ),
          F &&
            i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(Ax, {
                isOpen: Q,
                onDismiss: function() {
                  return X(!1)
                },
                stakingInfo: F,
                userLiquidityUnstaked: q
              }),
              i.a.createElement(Ix, {
                isOpen: K,
                onDismiss: function() {
                  return Z(!1)
                },
                stakingInfo: F
              }),
              i.a.createElement(Rx, {
                isOpen: ee,
                onDismiss: function() {
                  return te(!1)
                },
                stakingInfo: F
              })
            ),
          i.a.createElement(
            Yx,
            { gap: 'lg', justify: 'center', dim: V },
            i.a.createElement(
              Hx,
              { gap: 'lg', justify: 'center' },
              i.a.createElement(
                Qx,
                { disabled: ne, bgColor: oe, showBackground: !V },
                i.a.createElement(
                  Bt,
                  null,
                  i.a.createElement(Nt, { desaturate: !0 }),
                  i.a.createElement(Ut, null),
                  i.a.createElement(
                    bt,
                    { gap: 'md' },
                    i.a.createElement(Vt, null, i.a.createElement(Bo, { fontWeight: 600 }, 'Your liquidity deposits')),
                    i.a.createElement(
                      Vt,
                      { style: { alignItems: 'baseline' } },
                      i.a.createElement(
                        Bo,
                        { fontSize: 36, fontWeight: 600 },
                        null !==
                          (h =
                            null === F || void 0 === F || null === (g = F.stakedAmount) || void 0 === g
                              ? void 0
                              : g.toSignificant(6)) && void 0 !== h
                          ? h
                          : '-'
                      ),
                      i.a.createElement(
                        Bo,
                        null,
                        'WHOOSH-LP ',
                        null === L || void 0 === L ? void 0 : L.symbol,
                        '-',
                        null === W || void 0 === W ? void 0 : W.symbol
                      )
                    )
                  )
                )
              ),
              i.a.createElement(
                Xx,
                {
                  dim:
                    null === F || void 0 === F || null === (y = F.stakedAmount) || void 0 === y
                      ? void 0
                      : y.equalTo(v.f.BigInt(0))
                },
                i.a.createElement(Nt, { desaturate: !0 }),
                i.a.createElement(Ut, null),
                i.a.createElement(
                  bt,
                  { gap: 'sm' },
                  i.a.createElement(
                    Vt,
                    null,
                    i.a.createElement('div', null, i.a.createElement(Uo, null, 'Your unclaimed UNI')),
                    (null === F || void 0 === F ? void 0 : F.earnedAmount) &&
                      v.f.notEqual(
                        Oe,
                        null === F || void 0 === F || null === (E = F.earnedAmount) || void 0 === E ? void 0 : E.raw
                      ) &&
                      i.a.createElement(
                        si,
                        {
                          padding: '8px',
                          borderRadius: '8px',
                          width: 'fit-content',
                          onClick: function() {
                            return te(!0)
                          }
                        },
                        'Claim'
                      )
                  ),
                  i.a.createElement(
                    Vt,
                    { style: { alignItems: 'baseline' } },
                    i.a.createElement(
                      Wo,
                      { fontSize: 36, fontWeight: 600 },
                      i.a.createElement(Ux.a, {
                        key: ce,
                        isCounting: !0,
                        decimalPlaces: 4,
                        start: parseFloat(ue),
                        end: parseFloat(ce),
                        thousandsSeparator: ',',
                        duration: 1
                      })
                    ),
                    i.a.createElement(
                      Uo,
                      { fontSize: 16, fontWeight: 500 },
                      i.a.createElement(
                        'span',
                        { role: 'img', 'aria-label': 'wizard-icon', style: { marginRight: '8px ' } },
                        '\u26a1'
                      ),
                      (null === F || void 0 === F
                      ? void 0
                      : F.active)
                        ? null !==
                            (x =
                              null === F ||
                              void 0 === F ||
                              null === (O = F.rewardRate) ||
                              void 0 === O ||
                              null === (j = O.multiply(xe)) ||
                              void 0 === j
                                ? void 0
                                : j.toSignificant(4, { groupSeparator: ',' })) && void 0 !== x
                          ? x
                          : '-'
                        : '0',
                      ' UNI / week'
                    )
                  )
                )
              )
            ),
            i.a.createElement(
              No,
              { style: { textAlign: 'center' }, fontSize: 14 },
              i.a.createElement(
                'span',
                { role: 'img', 'aria-label': 'wizard-icon', style: { marginRight: '8px' } },
                '\u2b50\ufe0f'
              ),
              'When you withdraw, the contract will automagically claim UNI on your behalf!'
            ),
            !V &&
              i.a.createElement(
                Kx,
                { style: { marginBottom: '1rem' } },
                F &&
                  F.active &&
                  i.a.createElement(
                    ii,
                    { padding: '8px', borderRadius: '8px', width: '160px', onClick: me },
                    (null === F || void 0 === F || null === (w = F.stakedAmount) || void 0 === w
                    ? void 0
                    : w.greaterThan(v.f.BigInt(0)))
                      ? 'Deposit'
                      : 'Deposit WHOOSH-LP LP Tokens'
                  ),
                (null === F || void 0 === F || null === (k = F.stakedAmount) || void 0 === k
                  ? void 0
                  : k.greaterThan(v.f.BigInt(0))) &&
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      ii,
                      {
                        padding: '8px',
                        borderRadius: '8px',
                        width: '160px',
                        onClick: function() {
                          return Z(!0)
                        }
                      },
                      'Withdraw'
                    )
                  )
              ),
            q
              ? q.equalTo('0')
                ? null
                : (null === F || void 0 === F
                  ? void 0
                  : F.active)
                ? i.a.createElement(No, null, q.toSignificant(6), ' WHOOSH-LP LP tokens available')
                : null
              : null
          )
        )
      }
      function _x(e) {
        var t = e.message
        return i.a.createElement(
          bt,
          { style: { minHeight: 200, justifyContent: 'center', alignItems: 'center' } },
          i.a.createElement(Lo, null, t)
        )
      }
      var $x = Object(Ye.h)(function(e) {
        var t = e.token,
          n = e.V1LiquidityBalance,
          a = Object(o.useContext)(He.ThemeContext),
          r = Le().chainId
        return i.a.createElement(
          eE,
          null,
          i.a.createElement(
            bt,
            { gap: '12px' },
            i.a.createElement(
              $y,
              null,
              i.a.createElement(
                Qt,
                null,
                i.a.createElement(Eg, { currency0: t, margin: !0, size: 20 }),
                i.a.createElement(
                  Tr.b,
                  { fontWeight: 500, fontSize: 20, style: { marginLeft: '' } },
                  ''.concat(r && t.equals(v.p[r]) ? 'WETH' : t.symbol, '/ETH')
                ),
                i.a.createElement(
                  Tr.b,
                  {
                    fontSize: 12,
                    fontWeight: 500,
                    ml: '0.5rem',
                    px: '0.75rem',
                    py: '0.25rem',
                    style: { borderRadius: '1rem' },
                    backgroundColor: a.yellow1,
                    color: 'black'
                  },
                  'V1'
                )
              )
            ),
            i.a.createElement(
              bt,
              { gap: '8px' },
              i.a.createElement(
                Vt,
                { marginTop: '10px' },
                i.a.createElement(ui, { width: '68%', as: m.b, to: '/migrate/v1/'.concat(n.token.address) }, 'Migrate'),
                i.a.createElement(
                  ui,
                  {
                    style: { backgroundColor: 'transparent' },
                    width: '28%',
                    as: m.b,
                    to: '/remove/v1/'.concat(n.token.address)
                  },
                  'Remove'
                )
              )
            )
          )
        )
      })
      function eO() {
        var e,
          t = Object(o.useContext)(He.ThemeContext),
          n = Le(),
          a = n.account,
          r = n.chainId,
          c = Object(o.useState)(''),
          u = Object(A.a)(c, 2),
          l = u[0],
          s = u[1],
          d = Object(o.useCallback)(
            function(e) {
              return s(e.target.value)
            },
            [s]
          ),
          m = nr(l),
          p = sa(pn(), null !== m && void 0 !== m ? m : void 0),
          f = Ka(),
          b = Or()
        Object(o.useEffect)(
          function() {
            !m || p || f[m.address] || b(m)
          },
          [m, p, b, f]
        )
        var h = xc(),
          g = Object(o.useMemo)(
            function() {
              return r
                ? Object.keys(h).map(function(e) {
                    return new v.l(r, e, 18, 'UNI-V1', 'Uniswap V1')
                  })
                : []
            },
            [r, h]
          ),
          y = iu(null !== a && void 0 !== a ? a : void 0, g),
          E = Object(A.a)(y, 2),
          x = E[0],
          O = E[1],
          j = g
            .filter(function(e) {
              var t = null === x || void 0 === x ? void 0 : x[e.address]
              return t && v.f.greaterThan(t.raw, v.f.BigInt(0))
            })
            .map(function(e) {
              var t = x[e.address]
              return t ? i.a.createElement($x, { key: e.address, token: h[e.address], V1LiquidityBalance: t }) : null
            }),
          w = 0 === (null === (e = Object.keys(h)) || void 0 === e ? void 0 : e.length) || O
        return i.a.createElement(
          sE,
          { style: { padding: 24 } },
          i.a.createElement(
            bt,
            { gap: '16px' },
            i.a.createElement(
              Ht,
              { style: { alignItems: 'center', justifyContent: 'space-between' }, gap: '8px' },
              i.a.createElement(ho, { to: '/pool' }),
              i.a.createElement(zo, null, 'Migrate V1 Liquidity'),
              i.a.createElement(
                'div',
                null,
                i.a.createElement(Rb, { text: 'Migrate your liquidity tokens from Uniswap V1 to WhooshSwap LP.' })
              )
            ),
            i.a.createElement(
              Lo,
              { style: { marginBottom: 8, fontWeight: 400 } },
              'For each pool shown below, click migrate to remove your liquidity from Uniswap V1 and deposit it into Uniswap V2.'
            ),
            a
              ? w
                ? i.a.createElement(
                    xu,
                    { padding: '40px' },
                    i.a.createElement(
                      Lo,
                      { color: t.text3, textAlign: 'center' },
                      i.a.createElement(Nm, null, 'Loading')
                    )
                  )
                : i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      Ht,
                      null,
                      i.a.createElement(gv, {
                        value: l,
                        onChange: d,
                        placeholder: 'Enter a token address to find liquidity'
                      })
                    ),
                    (null === j || void 0 === j ? void 0 : j.length) > 0
                      ? i.a.createElement(i.a.Fragment, null, j)
                      : i.a.createElement(_x, { message: 'No V1 Liquidity found.' })
                  )
              : i.a.createElement(
                  xu,
                  { padding: '40px' },
                  i.a.createElement(
                    Lo,
                    { color: t.text3, textAlign: 'center' },
                    'Connect to a wallet to view your V1 liquidity.'
                  )
                )
          )
        )
      }
      var tO = v.f.exponentiate(v.f.BigInt(10), v.f.BigInt(18)),
        nO = v.f.BigInt(0),
        aO = v.f.BigInt(1),
        rO = new v.e(nO, aO),
        oO = new v.h(v.f.BigInt(9950), v.f.BigInt(1e4))
      function iO(e) {
        var t = e.token,
          n = e.liquidityTokenAmount,
          a = e.tokenWorth,
          r = e.ethWorth,
          o = Le().chainId
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            Ht,
            { style: { justifyContent: 'flex-start', width: 'fit-content' } },
            i.a.createElement(_b, { size: '24px', currency: t }),
            i.a.createElement(
              'div',
              { style: { marginLeft: '.75rem' } },
              i.a.createElement(
                zo,
                null,
                i.a.createElement(kx, { currencyAmount: n }),
                ' ',
                o && t.equals(v.p[o]) ? 'WETH' : t.symbol,
                '/ETH'
              )
            )
          ),
          i.a.createElement(
            Vt,
            { my: '1rem' },
            i.a.createElement(
              Tr.b,
              { fontSize: 16, fontWeight: 500 },
              'Pooled ',
              o && t.equals(v.p[o]) ? 'WETH' : t.symbol,
              ':'
            ),
            i.a.createElement(
              Qt,
              null,
              i.a.createElement(Tr.b, { fontSize: 16, fontWeight: 500, marginLeft: '6px' }, a.toSignificant(4)),
              i.a.createElement(_b, { size: '20px', style: { marginLeft: '8px' }, currency: t })
            )
          ),
          i.a.createElement(
            Vt,
            { mb: '1rem' },
            i.a.createElement(Tr.b, { fontSize: 16, fontWeight: 500 }, 'Pooled ETH:'),
            i.a.createElement(
              Qt,
              null,
              i.a.createElement(
                Tr.b,
                { fontSize: 16, fontWeight: 500, marginLeft: '6px' },
                i.a.createElement(kx, { currencyAmount: r })
              ),
              i.a.createElement(_b, { size: '20px', style: { marginLeft: '8px' }, currency: v.b.ETHER })
            )
          )
        )
      }
      function cO(e) {
        var t,
          n,
          a,
          r,
          c = e.liquidityTokenAmount,
          u = e.token,
          l = Le(),
          d = l.account,
          m = l.chainId,
          p = Wm(c.token),
          f = null === (t = ou([c.token.address])) || void 0 === t ? void 0 : t[c.token.address],
          b = uu(c.token.address, u),
          h = Nc(m ? v.p[m] : void 0, u),
          g = Object(A.a)(h, 2),
          y = g[0],
          E = g[1],
          x = y === Cc.NOT_EXISTS,
          O = m && E ? E.reserveOf(u).divide(E.reserveOf(v.p[m])) : void 0,
          j = Object(o.useState)(!1),
          w = Object(A.a)(j, 2),
          k = w[0],
          T = w[1],
          C = Object(o.useState)(null),
          I = Object(A.a)(C, 2),
          S = I[0],
          N = I[1],
          R = p ? new v.h(c.raw, p.raw) : rO,
          U = f ? v.c.ether(f.multiply(R).multiply(tO).quotient) : v.c.ether(nO),
          B = b ? new v.m(u, R.multiply(b.raw).quotient) : new v.m(u, nO),
          L = rE(c, Ta),
          W = Object(A.a)(L, 2),
          z = W[0],
          M = W[1],
          P = b && f ? b.divide(new v.e(f.raw, tO)) : null,
          D =
            P && O
              ? P.divide(O)
                  .multiply('100')
                  .subtract('100')
              : void 0,
          F = (null === D || void 0 === D
          ? void 0
          : D.lessThan(nO))
            ? null === D || void 0 === D
              ? void 0
              : D.multiply('-1')
            : D,
          q =
            O && B
              ? B.divide(O)
                  .multiply(tO)
                  .multiply(oO).quotient
              : null === U || void 0 === U
              ? void 0
              : U.numerator,
          V =
            O && U
              ? U.multiply(O)
                  .multiply(v.f.exponentiate(v.f.BigInt(10), v.f.BigInt(u.decimals)))
                  .multiply(oO).quotient
              : null === B || void 0 === B
              ? void 0
              : B.numerator,
          Y = Ei(),
          H = Oi(null !== S && void 0 !== S ? S : void 0),
          Q = La(Ta, ka, !0),
          X = Object(o.useCallback)(
            function() {
              V &&
                q &&
                Q &&
                (T(!0),
                Q.migrate(u.address, V.toString(), q.toString(), d, Math.floor(new Date().getTime() / 1e3) + 1200)
                  .then(function(e) {
                    s.a.event({
                      category: 'Migrate',
                      action: 'V1->V2',
                      label: null === u || void 0 === u ? void 0 : u.symbol
                    }),
                      Y(e, { summary: 'Migrate '.concat(u.symbol, ' liquidity to V2') }),
                      N(e.hash)
                  })
                  .catch(function() {
                    T(!1)
                  }))
            },
            [V, q, Q, u, d, Y]
          ),
          J = !!c && c.equalTo(nO),
          G = !!F && !F.lessThan(v.f.BigInt(5)),
          K = !!S && J
        return i.a.createElement(
          bt,
          { gap: '20px' },
          i.a.createElement(
            Lo,
            { my: 9, style: { fontWeight: 400 } },
            'This tool will safely migrate your V1 liquidity to V2 with minimal price risk. The process is completely trustless thanks to the',
            ' ',
            m &&
              i.a.createElement(
                mo,
                { href: ra(m, Ta, 'address') },
                i.a.createElement(Do, { display: 'inline' }, 'Uniswap migration contract\u2197')
              ),
            '.'
          ),
          !x && G
            ? i.a.createElement(
                Au,
                null,
                i.a.createElement(
                  Lo,
                  { style: { marginBottom: 8, fontWeight: 400 } },
                  'It',
                  "'",
                  's best to deposit liquidity into WhooshSwap LP at a price you believe is correct. If the V2 price seems incorrect, you can either make a swap to move the price or wait for someone else to do so.'
                ),
                i.a.createElement(
                  bt,
                  { gap: '8px' },
                  i.a.createElement(
                    Vt,
                    null,
                    i.a.createElement(Lo, null, 'V1 Price:'),
                    i.a.createElement(
                      Uo,
                      null,
                      null === P || void 0 === P ? void 0 : P.toSignificant(6),
                      ' ',
                      u.symbol,
                      '/ETH'
                    )
                  ),
                  i.a.createElement(
                    Vt,
                    null,
                    i.a.createElement('div', null),
                    i.a.createElement(
                      Uo,
                      null,
                      null === P || void 0 === P || null === (n = P.invert()) || void 0 === n
                        ? void 0
                        : n.toSignificant(6),
                      ' ETH/',
                      u.symbol
                    )
                  ),
                  i.a.createElement(
                    Vt,
                    null,
                    i.a.createElement(Lo, null, 'V2 Price:'),
                    i.a.createElement(
                      Uo,
                      null,
                      null === O || void 0 === O ? void 0 : O.toSignificant(6),
                      ' ',
                      u.symbol,
                      '/ETH'
                    )
                  ),
                  i.a.createElement(
                    Vt,
                    null,
                    i.a.createElement('div', null),
                    i.a.createElement(
                      Uo,
                      null,
                      null === O || void 0 === O || null === (a = O.invert()) || void 0 === a
                        ? void 0
                        : a.toSignificant(6),
                      ' ETH/',
                      u.symbol
                    )
                  ),
                  i.a.createElement(
                    Vt,
                    null,
                    i.a.createElement(Lo, { color: 'inherit' }, 'Price Difference:'),
                    i.a.createElement(
                      Uo,
                      { color: 'inherit' },
                      null === F || void 0 === F ? void 0 : F.toSignificant(4),
                      '%'
                    )
                  )
                )
              )
            : null,
          x &&
            i.a.createElement(
              wu,
              null,
              i.a.createElement(
                Lo,
                { style: { marginBottom: 8, fontWeight: 400 } },
                'You are the first liquidity provider for this pair on WhooshSwap LP. Your liquidity will be migrated at the current V1 price. Your transaction cost also includes the gas to create the pool.'
              ),
              i.a.createElement(
                bt,
                { gap: '8px' },
                i.a.createElement(
                  Vt,
                  null,
                  i.a.createElement(Lo, null, 'V1 Price:'),
                  i.a.createElement(
                    Uo,
                    null,
                    null === P || void 0 === P ? void 0 : P.toSignificant(6),
                    ' ',
                    u.symbol,
                    '/ETH'
                  )
                ),
                i.a.createElement(
                  Vt,
                  null,
                  i.a.createElement('div', null),
                  i.a.createElement(
                    Uo,
                    null,
                    null === P || void 0 === P || null === (r = P.invert()) || void 0 === r
                      ? void 0
                      : r.toSignificant(6),
                    ' ETH/',
                    u.symbol
                  )
                )
              )
            ),
          i.a.createElement(
            xu,
            null,
            i.a.createElement(iO, { token: u, liquidityTokenAmount: c, tokenWorth: B, ethWorth: U }),
            i.a.createElement(
              'div',
              { style: { display: 'flex', marginTop: '1rem' } },
              i.a.createElement(
                bt,
                { gap: '12px', style: { flex: '1', marginRight: 12 } },
                i.a.createElement(
                  pi,
                  { confirmed: z === _y.APPROVED, disabled: z !== _y.NOT_APPROVED, onClick: M },
                  z === _y.PENDING
                    ? i.a.createElement(Nm, null, 'Approving')
                    : z === _y.APPROVED
                    ? 'Approved'
                    : 'Approve'
                )
              ),
              i.a.createElement(
                bt,
                { gap: '12px', style: { flex: '1' } },
                i.a.createElement(
                  pi,
                  { confirmed: K, disabled: K || J || H || z !== _y.APPROVED || k, onClick: X },
                  K ? 'Success' : H ? i.a.createElement(Nm, null, 'Migrating') : 'Migrate'
                )
              )
            )
          ),
          i.a.createElement(
            Fo,
            { style: { textAlign: 'center' } },
            'Your Uniswap V1 '
              .concat(u.symbol, '/ETH liquidity will become WhooshSwap LP ')
              .concat(u.symbol, '/ETH liquidity.')
          )
        )
      }
      function uO(e) {
        var t,
          n,
          a = e.history,
          r = e.match.params.address,
          c = na(r),
          u = Le(),
          l = u.chainId,
          s = u.account,
          d =
            null === (t = Kn(za(c || void 0), 'tokenAddress', void 0, Vn)) ||
            void 0 === t ||
            null === (n = t.result) ||
            void 0 === n
              ? void 0
              : n[0],
          m = nr(d),
          p = uu(
            null !== s && void 0 !== s ? s : void 0,
            Object(o.useMemo)(
              function() {
                return c && l && m ? new v.l(l, c, 18, 'UNI-V1-'.concat(m.symbol), 'Uniswap V1') : void 0
              },
              [l, c, m]
            )
          )
        return c && d !== $n.a
          ? i.a.createElement(
              sE,
              { style: { padding: 24 } },
              i.a.createElement(
                bt,
                { gap: '16px' },
                i.a.createElement(
                  Ht,
                  { style: { alignItems: 'center', justifyContent: 'space-between' }, gap: '8px' },
                  i.a.createElement(ho, { to: '/migrate/v1' }),
                  i.a.createElement(zo, null, 'Migrate V1 Liquidity'),
                  i.a.createElement(
                    'div',
                    null,
                    i.a.createElement(Rb, { text: 'Migrate your liquidity tokens from Uniswap V1 to WhooshSwap LP.' })
                  )
                ),
                s
                  ? c && l && (null === m || void 0 === m ? void 0 : m.equals(v.p[l]))
                    ? i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(
                          Lo,
                          { my: 9, style: { fontWeight: 400 } },
                          'Because WhooshSwap LP uses WETH under the hood, your Uniswap V1 WETH/ETH liquidity cannot be migrated. You may want to remove your liquidity instead.'
                        ),
                        i.a.createElement(
                          pi,
                          {
                            onClick: function() {
                              a.push('/remove/v1/'.concat(c))
                            }
                          },
                          'Remove'
                        )
                      )
                    : p && m
                    ? i.a.createElement(cO, { liquidityTokenAmount: p, token: m })
                    : i.a.createElement(_x, { message: 'Loading...' })
                  : i.a.createElement(Wo, null, 'You must connect an account.')
              )
            )
          : (console.error('Invalid address in path', r), i.a.createElement(Ye.a, { to: '/migrate/v1' }))
      }
      var lO = v.f.exponentiate(v.f.BigInt(10), v.f.BigInt(18)),
        sO = v.f.BigInt(0),
        dO = v.f.BigInt(1),
        mO = new v.e(sO, dO)
      function pO(e) {
        var t,
          n = e.exchangeContract,
          a = e.liquidityTokenAmount,
          r = e.token,
          c = Le().chainId,
          u = Wm(a.token),
          l = null === (t = ou([a.token.address])) || void 0 === t ? void 0 : t[a.token.address],
          d = uu(a.token.address, r),
          m = Object(o.useState)(!1),
          p = Object(A.a)(m, 2),
          f = p[0],
          b = p[1],
          h = Object(o.useState)(null),
          g = Object(A.a)(h, 2),
          y = g[0],
          E = g[1],
          x = u ? new v.h(a.raw, u.raw) : mO,
          O = l ? v.c.ether(l.multiply(x).multiply(lO).quotient) : v.c.ether(sO),
          j = d ? new v.m(r, x.multiply(d.raw).quotient) : new v.m(r, sO),
          w = Ei(),
          k = Oi(null !== y && void 0 !== y ? y : void 0),
          T = Object(o.useCallback)(
            function() {
              a &&
                (b(!0),
                n
                  .removeLiquidity(a.raw.toString(), 1, 1, Math.floor(new Date().getTime() / 1e3) + 1200)
                  .then(function(e) {
                    s.a.event({
                      category: 'Remove',
                      action: 'V1',
                      label: null === r || void 0 === r ? void 0 : r.symbol
                    }),
                      w(e, {
                        summary: 'Remove '.concat(c && r.equals(v.p[c]) ? 'WETH' : r.symbol, '/ETH V1 liquidity')
                      }),
                      E(e.hash)
                  })
                  .catch(function(e) {
                    console.error(e), b(!1)
                  }))
            },
            [n, a, r, c, w]
          ),
          C = !!a && a.equalTo(sO),
          I = !!y && C
        return i.a.createElement(
          bt,
          { gap: '20px' },
          i.a.createElement(
            Lo,
            { my: 9, style: { fontWeight: 400 } },
            'This tool will remove your V1 liquidity and send the underlying assets to your wallet.'
          ),
          i.a.createElement(
            xu,
            null,
            i.a.createElement(iO, { token: r, liquidityTokenAmount: a, tokenWorth: j, ethWorth: O }),
            i.a.createElement(
              'div',
              { style: { display: 'flex', marginTop: '1rem' } },
              i.a.createElement(
                pi,
                { confirmed: I, disabled: I || C || k || f, onClick: T },
                I ? 'Success' : k ? i.a.createElement(Nm, null, 'Removing') : 'Remove'
              )
            )
          ),
          i.a.createElement(
            Fo,
            { style: { textAlign: 'center' } },
            'Your Uniswap V1 '.concat(
              c && r.equals(v.p[c]) ? 'WETH' : r.symbol,
              '/ETH liquidity will be redeemed for underlying assets.'
            )
          )
        )
      }
      function fO(e) {
        var t,
          n,
          a = e.match.params.address,
          r = na(a),
          c = Le(),
          u = c.chainId,
          l = c.account,
          s = za(r || void 0, !0),
          d =
            null === (t = Kn(s, 'tokenAddress', void 0, Vn)) || void 0 === t || null === (n = t.result) || void 0 === n
              ? void 0
              : n[0],
          m = nr(d),
          p = uu(
            null !== l && void 0 !== l ? l : void 0,
            Object(o.useMemo)(
              function() {
                return r && u && m ? new v.l(u, r, 18, 'UNI-V1-'.concat(m.symbol), 'Uniswap V1') : void 0
              },
              [u, r, m]
            )
          )
        return r && d !== $n.a
          ? i.a.createElement(
              sE,
              { style: { padding: 24 }, id: 'remove-v1-exchange' },
              i.a.createElement(
                bt,
                { gap: '16px' },
                i.a.createElement(
                  Ht,
                  { style: { alignItems: 'center', justifyContent: 'space-between' }, gap: '8px' },
                  i.a.createElement(ho, { to: '/migrate/v1' }),
                  i.a.createElement(zo, null, 'Remove V1 Liquidity'),
                  i.a.createElement(
                    'div',
                    null,
                    i.a.createElement(Rb, { text: 'Remove your Uniswap V1 liquidity tokens.' })
                  )
                ),
                l
                  ? p && m && s
                    ? i.a.createElement(pO, { exchangeContract: s, liquidityTokenAmount: p, token: m })
                    : i.a.createElement(_x, { message: 'Loading...' })
                  : i.a.createElement(Wo, null, 'You must connect an account.')
              )
            )
          : (console.error('Invalid address in path', a), i.a.createElement(Ye.a, { to: '/migrate/v1' }))
      }
      function bO() {
        var e = Object(Ve.a)([
          '\n  border: 1px solid ',
          ';\n  padding: 16px 12px;\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n'
        ])
        return (
          (bO = function() {
            return e
          }),
          e
        )
      }
      function vO() {
        var e = Object(Ve.a)(['\n    width: 48%;\n  '])
        return (
          (vO = function() {
            return e
          }),
          e
        )
      }
      function hO() {
        var e = Object(Ve.a)(['\n  width: fit-content;\n  ', ';\n'])
        return (
          (hO = function() {
            return e
          }),
          e
        )
      }
      function gO() {
        var e = Object(Ve.a)(['\n    width: 48%;\n  '])
        return (
          (gO = function() {
            return e
          }),
          e
        )
      }
      function yO() {
        var e = Object(Ve.a)(['\n  width: fit-content;\n  ', ';\n'])
        return (
          (yO = function() {
            return e
          }),
          e
        )
      }
      function EO() {
        var e = Object(Ve.a)([
          '\n    width: 100%;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n  '
        ])
        return (
          (EO = function() {
            return e
          }),
          e
        )
      }
      function xO() {
        var e = Object(Ve.a)(['\n  gap: 8px;\n  ', ';\n'])
        return (
          (xO = function() {
            return e
          }),
          e
        )
      }
      function OO() {
        var e = Object(Ve.a)([
          '\n    flex-wrap: wrap;\n    gap: 12px;\n    width: 100%;\n    flex-direction: column-reverse;\n  '
        ])
        return (
          (OO = function() {
            return e
          }),
          e
        )
      }
      function jO() {
        var e = Object(Ve.a)(['\n  ', ';\n'])
        return (
          (jO = function() {
            return e
          }),
          e
        )
      }
      function AO() {
        var e = Object(Ve.a)([
          '\n  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #27ae60 0%, #000000 100%);\n  overflow: hidden;\n'
        ])
        return (
          (AO = function() {
            return e
          }),
          e
        )
      }
      function wO() {
        var e = Object(Ve.a)(['\n  max-width: 640px;\n  width: 100%;\n'])
        return (
          (wO = function() {
            return e
          }),
          e
        )
      }
      var kO,
        TO = Object(He.default)(bt)(wO()),
        CO = Object(He.default)(St)(AO()),
        IO = Object(He.default)(Vt)(jO(), function(e) {
          return e.theme.mediaWidth.upToSmall(OO())
        }),
        SO = Object(He.default)(Qt)(xO(), function(e) {
          return e.theme.mediaWidth.upToSmall(EO())
        }),
        NO = Object(He.default)(ii)(yO(), function(e) {
          return e.theme.mediaWidth.upToSmall(gO())
        }),
        RO = Object(He.default)(ui)(hO(), function(e) {
          return e.theme.mediaWidth.upToSmall(vO())
        }),
        UO = He.default.div(bO(), function(e) {
          return e.theme.text4
        })
      function BO() {
        var e = Object(o.useContext)(He.ThemeContext),
          t = Le().account,
          n = (function() {
            var e = Le().chainId,
              t = Ka(),
              n = Object(o.useMemo)(
                function() {
                  var t
                  return e && null !== (t = ye[e]) && void 0 !== t ? t : []
                },
                [e]
              ),
              a = Object(o.useMemo)(
                function() {
                  return e
                    ? Gt()(Object.keys(t), function(n) {
                        var a,
                          r = t[n]
                        return (null !== (a = ge[e]) && void 0 !== a ? a : [])
                          .map(function(e) {
                            return e.address === r.address ? null : [e, r]
                          })
                          .filter(function(e) {
                            return null !== e
                          })
                      })
                    : []
                },
                [t, e]
              ),
              r = Object(d.d)(function(e) {
                return e.user.pairs
              }),
              i = Object(o.useMemo)(
                function() {
                  if (!e || !r) return []
                  var t = r[e]
                  return t
                    ? Object.keys(t).map(function(e) {
                        return [vr(t[e].token0), vr(t[e].token1)]
                      })
                    : []
                },
                [r, e]
              ),
              c = Object(o.useMemo)(
                function() {
                  return i.concat(a).concat(n)
                },
                [a, n, i]
              )
            return Object(o.useMemo)(
              function() {
                var e = c.reduce(function(e, t) {
                  var n = Object(A.a)(t, 2),
                    a = n[0],
                    r = n[1],
                    o = a.sortsBefore(r),
                    i = o ? ''.concat(a.address, ':').concat(r.address) : ''.concat(r.address, ':').concat(a.address)
                  return e[i] || (e[i] = o ? [a, r] : [r, a]), e
                }, {})
                return Object.keys(e).map(function(t) {
                  return e[t]
                })
              },
              [c]
            )
          })(),
          a = Object(o.useMemo)(
            function() {
              return n.map(function(e) {
                return { liquidityToken: kr(e), tokens: e }
              })
            },
            [n]
          ),
          r = iu(
            null !== t && void 0 !== t ? t : void 0,
            Object(o.useMemo)(
              function() {
                return a.map(function(e) {
                  return e.liquidityToken
                })
              },
              [a]
            )
          ),
          c = Object(A.a)(r, 2),
          u = c[0],
          l = c[1],
          s = Object(o.useMemo)(
            function() {
              return a.filter(function(e) {
                var t,
                  n = e.liquidityToken
                return null === (t = u[n.address]) || void 0 === t ? void 0 : t.greaterThan('0')
              })
            },
            [a, u]
          ),
          p = Sc(
            s.map(function(e) {
              return e.tokens
            })
          ),
          f =
            l ||
            (null === p || void 0 === p ? void 0 : p.length) < s.length ||
            (null === p || void 0 === p
              ? void 0
              : p.some(function(e) {
                  return !e
                })),
          b = p
            .map(function(e) {
              return Object(A.a)(e, 2)[1]
            })
            .filter(function(e) {
              return Boolean(e)
            }),
          h = (function() {
            var e = Le(),
              t = e.account,
              n = e.chainId,
              a = xc(),
              r = cu(
                null !== t && void 0 !== t ? t : void 0,
                Object(o.useMemo)(
                  function() {
                    return n
                      ? Object.keys(a).map(function(e) {
                          return new v.l(n, e, 18, 'UNI-V1', 'Uniswap V1')
                        })
                      : []
                  },
                  [n, a]
                )
              )
            return Object(o.useMemo)(
              function() {
                return Object.keys(r).some(function(e) {
                  var t,
                    n = null === (t = r[e]) || void 0 === t ? void 0 : t.raw
                  return n && v.f.greaterThan(n, v.f.BigInt(0))
                })
              },
              [r]
            )
          })(),
          g = au(),
          y =
            null === g || void 0 === g
              ? void 0
              : g.filter(function(e) {
                  return v.f.greaterThan(e.stakedAmount.raw, Oe)
                }),
          E = Sc(
            null === y || void 0 === y
              ? void 0
              : y.map(function(e) {
                  return e.tokens
                })
          ),
          x = b.filter(function(e) {
            return (
              0 ===
              (null === E || void 0 === E
                ? void 0
                : E.map(function(e) {
                    return e[1]
                  }).filter(function(t) {
                    return (null === t || void 0 === t ? void 0 : t.liquidityToken.address) === e.liquidityToken.address
                  }).length)
            )
          })
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            TO,
            null,
            i.a.createElement(Yy, { active: 'pool' }),
            i.a.createElement(
              CO,
              null,
              i.a.createElement(Nt, null),
              i.a.createElement(Ut, null),
              i.a.createElement(
                Bt,
                null,
                i.a.createElement(
                  bt,
                  { gap: 'md' },
                  i.a.createElement(Vt, null, i.a.createElement(Bo, { fontWeight: 600 }, 'Liquidity provider rewards')),
                  i.a.createElement(
                    Vt,
                    null,
                    i.a.createElement(
                      Bo,
                      { fontSize: 14 },
                      'Liquidity providers earn a 0.3% fee on all trades proportional to their share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.'
                    )
                  ),
                  i.a.createElement(
                    mo,
                    {
                      style: { color: 'white', textDecoration: 'underline' },
                      target: '_blank',
                      href: 'https://uniswap.org/docs/v2/core-concepts/pools/'
                    },
                    i.a.createElement(Bo, { fontSize: 14 }, 'Read more about providing liquidity')
                  )
                )
              ),
              i.a.createElement(Nt, null),
              i.a.createElement(Ut, null)
            ),
            i.a.createElement(
              bt,
              { gap: 'lg', justify: 'center' },
              i.a.createElement(
                bt,
                { gap: 'lg', style: { width: '100%' } },
                i.a.createElement(
                  IO,
                  { style: { marginTop: '1rem' }, padding: '0' },
                  i.a.createElement(
                    yo,
                    null,
                    i.a.createElement(
                      zo,
                      { style: { marginTop: '0.5rem', justifySelf: 'flex-start' } },
                      'Your liquidity'
                    )
                  ),
                  i.a.createElement(
                    SO,
                    null,
                    i.a.createElement(RO, { as: m.b, padding: '6px 8px', to: '/create/ETH' }, 'Create a pair'),
                    i.a.createElement(
                      NO,
                      { id: 'join-pool-button', as: m.b, padding: '6px 8px', borderRadius: '12px', to: '/add/ETH' },
                      i.a.createElement(Tr.b, { fontWeight: 500, fontSize: 16 }, 'Add Liquidity')
                    )
                  )
                ),
                t
                  ? f
                    ? i.a.createElement(
                        UO,
                        null,
                        i.a.createElement(
                          Lo,
                          { color: e.text3, textAlign: 'center' },
                          i.a.createElement(Nm, null, 'Loading')
                        )
                      )
                    : (null === b || void 0 === b ? void 0 : b.length) > 0 ||
                      (null === E || void 0 === E ? void 0 : E.length) > 0
                    ? i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(
                          ui,
                          null,
                          i.a.createElement(
                            Vt,
                            null,
                            i.a.createElement(
                              mo,
                              { href: 'https://uniswap.info/account/' + t },
                              'Account analytics and accrued fees'
                            ),
                            i.a.createElement('span', null, ' \u2197')
                          )
                        ),
                        x.map(function(e) {
                          return i.a.createElement(aE, { key: e.liquidityToken.address, pair: e })
                        }),
                        E.map(function(e, t) {
                          return (
                            e[1] &&
                            i.a.createElement(aE, {
                              key: y[t].stakingRewardAddress,
                              pair: e[1],
                              stakedBalance: y[t].stakedAmount
                            })
                          )
                        })
                      )
                    : i.a.createElement(
                        UO,
                        null,
                        i.a.createElement(Lo, { color: e.text3, textAlign: 'center' }, 'No liquidity found.')
                      )
                  : i.a.createElement(
                      Eu,
                      { padding: '40px' },
                      i.a.createElement(
                        Lo,
                        { color: e.text3, textAlign: 'center' },
                        'Connect to a wallet to view your liquidity.'
                      )
                    ),
                i.a.createElement(
                  bt,
                  { justify: 'center', gap: 'md' },
                  i.a.createElement(
                    Tr.b,
                    { textAlign: 'center', fontSize: 14, style: { padding: '.5rem 0 .5rem 0' } },
                    h ? 'Uniswap V1 liquidity found!' : "Don't see a pool you joined?",
                    ' ',
                    i.a.createElement(
                      ro,
                      { id: 'import-pool-link', to: h ? '/migrate/v1' : '/find' },
                      h ? 'Migrate now.' : 'Import it.'
                    )
                  )
                )
              )
            )
          )
        )
      }
      function LO() {
        var e,
          t = Le().account,
          n = Object(o.useState)(!1),
          a = Object(A.a)(n, 2),
          r = a[0],
          c = a[1],
          u = Object(o.useState)(kO.TOKEN1),
          l = Object(A.a)(u, 2),
          s = l[0],
          m = l[1],
          p = Object(o.useState)(v.d),
          f = Object(A.a)(p, 2),
          b = f[0],
          h = f[1],
          g = Object(o.useState)(null),
          y = Object(A.a)(g, 2),
          E = y[0],
          x = y[1],
          O = Nc(null !== b && void 0 !== b ? b : void 0, null !== E && void 0 !== E ? E : void 0),
          j = Object(A.a)(O, 2),
          w = j[0],
          k = j[1],
          T = (function() {
            var e = Object(d.c)()
            return Object(o.useCallback)(
              function(t) {
                e(mr({ serializedPair: Ar(t) }))
              },
              [e]
            )
          })()
        Object(o.useEffect)(
          function() {
            k && T(k)
          },
          [k, T]
        )
        var C =
            w === Cc.NOT_EXISTS ||
            Boolean(
              w === Cc.EXISTS &&
                k &&
                v.f.equal(k.reserve0.raw, v.f.BigInt(0)) &&
                v.f.equal(k.reserve1.raw, v.f.BigInt(0))
            ),
          I = uu(null !== t && void 0 !== t ? t : void 0, null === k || void 0 === k ? void 0 : k.liquidityToken),
          S = Boolean(I && v.f.greaterThan(I.raw, v.f.BigInt(0))),
          N = Object(o.useCallback)(
            function(e) {
              s === kO.TOKEN0 ? h(e) : x(e)
            },
            [s]
          ),
          R = Object(o.useCallback)(
            function() {
              c(!1)
            },
            [c]
          ),
          U = i.a.createElement(
            xu,
            { padding: '45px 10px' },
            i.a.createElement(
              Tr.b,
              { textAlign: 'center' },
              t ? 'Select a token to find your liquidity.' : 'Connect to a wallet to find pools'
            )
          )
        return i.a.createElement(
          dE,
          null,
          i.a.createElement(Hy, null),
          i.a.createElement(
            bt,
            { style: { padding: '1rem' }, gap: 'md' },
            i.a.createElement(
              Tu,
              null,
              i.a.createElement(
                bt,
                { gap: '10px' },
                i.a.createElement(
                  Ro,
                  { fontWeight: 400, color: 'primaryText1' },
                  i.a.createElement('b', null, 'Tip:'),
                  " Use this tool to find pairs that don't automatically appear in the interface."
                )
              )
            ),
            i.a.createElement(
              bi,
              {
                onClick: function() {
                  c(!0), m(kO.TOKEN0)
                }
              },
              b
                ? i.a.createElement(
                    Xt,
                    null,
                    i.a.createElement(_b, { currency: b }),
                    i.a.createElement(Tr.b, { fontWeight: 500, fontSize: 20, marginLeft: '12px' }, b.symbol)
                  )
                : i.a.createElement(Tr.b, { fontWeight: 500, fontSize: 20, marginLeft: '12px' }, 'Select a Token')
            ),
            i.a.createElement(ft, null, i.a.createElement(Kf.a, { size: '16', color: '#888D9B' })),
            i.a.createElement(
              bi,
              {
                onClick: function() {
                  c(!0), m(kO.TOKEN1)
                }
              },
              E
                ? i.a.createElement(
                    Xt,
                    null,
                    i.a.createElement(_b, { currency: E }),
                    i.a.createElement(Tr.b, { fontWeight: 500, fontSize: 20, marginLeft: '12px' }, E.symbol)
                  )
                : i.a.createElement(Tr.b, { fontWeight: 500, fontSize: 20, marginLeft: '12px' }, 'Select a Token')
            ),
            S &&
              i.a.createElement(
                ft,
                { style: { justifyItems: 'center', backgroundColor: '', padding: '12px 0px', borderRadius: '12px' } },
                i.a.createElement(Tr.b, { textAlign: 'center', fontWeight: 500 }, 'Pool Found!'),
                i.a.createElement(
                  ro,
                  { to: '/pool' },
                  i.a.createElement(Tr.b, { textAlign: 'center' }, 'Manage this pool.')
                )
              ),
            b && E
              ? w === Cc.EXISTS
                ? S && k
                  ? i.a.createElement(nE, { pair: k, border: '1px solid #CED0D9' })
                  : i.a.createElement(
                      xu,
                      { padding: '45px 10px' },
                      i.a.createElement(
                        bt,
                        { gap: 'sm', justify: 'center' },
                        i.a.createElement(
                          Tr.b,
                          { textAlign: 'center' },
                          'You don\u2019t have liquidity in this pool yet.'
                        ),
                        i.a.createElement(
                          ro,
                          { to: '/add/'.concat(Jy(b), '/').concat(Jy(E)) },
                          i.a.createElement(Tr.b, { textAlign: 'center' }, 'Add liquidity.')
                        )
                      )
                    )
                : C
                ? i.a.createElement(
                    xu,
                    { padding: '45px 10px' },
                    i.a.createElement(
                      bt,
                      { gap: 'sm', justify: 'center' },
                      i.a.createElement(Tr.b, { textAlign: 'center' }, 'No pool found.'),
                      i.a.createElement(ro, { to: '/add/'.concat(Jy(b), '/').concat(Jy(E)) }, 'Create pool.')
                    )
                  )
                : w === Cc.INVALID
                ? i.a.createElement(
                    xu,
                    { padding: '45px 10px' },
                    i.a.createElement(
                      bt,
                      { gap: 'sm', justify: 'center' },
                      i.a.createElement(Tr.b, { textAlign: 'center', fontWeight: 500 }, 'Invalid pair.')
                    )
                  )
                : w === Cc.LOADING
                ? i.a.createElement(
                    xu,
                    { padding: '45px 10px' },
                    i.a.createElement(
                      bt,
                      { gap: 'sm', justify: 'center' },
                      i.a.createElement(Tr.b, { textAlign: 'center' }, 'Loading', i.a.createElement(EE, null))
                    )
                  )
                : null
              : U
          ),
          i.a.createElement(pg, {
            isOpen: r,
            onCurrencySelect: N,
            onDismiss: R,
            showCommonBases: !0,
            selectedCurrency: null !== (e = s === kO.TOKEN0 ? E : b) && void 0 !== e ? e : void 0
          })
        )
      }
      !(function(e) {
        ;(e[(e.TOKEN0 = 0)] = 'TOKEN0'), (e[(e.TOKEN1 = 1)] = 'TOKEN1')
      })(kO || (kO = {}))
      var WO = n(4),
        zO = n(773)
      function MO() {
        var e = Object(Ve.a)([
          '\n  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n  width: 100%; /* Specific width is required for Firefox. */\n  background: transparent; /* Otherwise white in Chrome */\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  &::-moz-focus-outer {\n    border: 0;\n  }\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    height: ',
          'px;\n    width: ',
          'px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    transform: translateY(-50%);\n    color: ',
          ';\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-moz-range-thumb {\n    height: ',
          'px;\n    width: ',
          'px;\n    background-color: #565a69;\n    border-radius: 100%;\n    border: none;\n    color: ',
          ';\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-ms-thumb {\n    height: ',
          'px;\n    width: ',
          'px;\n    background-color: #565a69;\n    border-radius: 100%;\n    color: ',
          ';\n\n    &:hover,\n    &:focus {\n      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),\n        0px 24px 32px rgba(0, 0, 0, 0.04);\n    }\n  }\n\n  &::-webkit-slider-runnable-track {\n    background: linear-gradient(90deg, ',
          ', ',
          ');\n    height: 2px;\n  }\n\n  &::-moz-range-track {\n    background: linear-gradient(90deg, ',
          ', ',
          ');\n    height: 2px;\n  }\n\n  &::-ms-track {\n    width: 100%;\n    border-color: transparent;\n    color: transparent;\n\n    background: ',
          ';\n    height: 2px;\n  }\n  &::-ms-fill-lower {\n    background: ',
          ';\n  }\n  &::-ms-fill-upper {\n    background: ',
          ';\n  }\n'
        ])
        return (
          (MO = function() {
            return e
          }),
          e
        )
      }
      var PO,
        DO = He.default.input(
          MO(),
          function(e) {
            return e.size
          },
          function(e) {
            return e.size
          },
          function(e) {
            return e.theme.bg1
          },
          function(e) {
            return e.size
          },
          function(e) {
            return e.size
          },
          function(e) {
            return e.theme.bg1
          },
          function(e) {
            return e.size
          },
          function(e) {
            return e.size
          },
          function(e) {
            return e.theme.bg1
          },
          function(e) {
            return e.theme.bg5
          },
          function(e) {
            return e.theme.bg3
          },
          function(e) {
            return e.theme.bg5
          },
          function(e) {
            return e.theme.bg3
          },
          function(e) {
            return e.theme.bg5
          },
          function(e) {
            return e.theme.bg5
          },
          function(e) {
            return e.theme.bg3
          }
        )
      function FO(e) {
        var t = e.value,
          n = e.onChange,
          a = e.min,
          r = void 0 === a ? 0 : a,
          c = e.step,
          u = void 0 === c ? 1 : c,
          l = e.max,
          s = void 0 === l ? 100 : l,
          d = e.size,
          m = void 0 === d ? 28 : d,
          p = Object(o.useCallback)(
            function(e) {
              n(parseInt(e.target.value))
            },
            [n]
          )
        return i.a.createElement(DO, {
          size: m,
          type: 'range',
          value: t,
          style: { width: '90%', marginLeft: 15, marginRight: 15, padding: '15px 0' },
          onChange: p,
          'aria-labelledby': 'input slider',
          step: u,
          min: r,
          max: s
        })
      }
      !(function(e) {
        ;(e.LIQUIDITY_PERCENT = 'LIQUIDITY_PERCENT'),
          (e.LIQUIDITY = 'LIQUIDITY'),
          (e.CURRENCY_A = 'CURRENCY_A'),
          (e.CURRENCY_B = 'CURRENCY_B')
      })(PO || (PO = {}))
      var qO = Object(hn.b)('burn/typeInputBurn')
      function VO() {
        return Object(d.d)(function(e) {
          return e.burn
        })
      }
      function YO(e) {
        var t,
          n,
          a,
          r,
          c,
          u,
          l,
          m,
          f,
          h,
          g,
          y,
          E,
          x = e.history,
          O = e.match.params,
          k = O.currencyIdA,
          T = O.currencyIdB,
          C = null !== (t = ar(k)) && void 0 !== t ? t : void 0,
          I = null !== (n = ar(T)) && void 0 !== n ? n : void 0,
          S = Le(),
          N = S.account,
          R = S.chainId,
          U = S.library,
          B = Object(o.useMemo)(
            function() {
              return [wc(C, R), wc(I, R)]
            },
            [C, I, R]
          ),
          L = Object(A.a)(B, 2),
          W = L[0],
          z = L[1],
          M = Object(o.useContext)(He.ThemeContext),
          P = wn(),
          D = VO(),
          F = D.independentField,
          q = D.typedValue,
          V = (function(e, t) {
            var n,
              a,
              r,
              o,
              i,
              c = Le(),
              u = c.account,
              l = c.chainId,
              s = VO(),
              d = s.independentField,
              m = s.typedValue,
              p = Nc(e, t),
              f = Object(A.a)(p, 2)[1],
              h = cu(null !== u && void 0 !== u ? u : void 0, [null === f || void 0 === f ? void 0 : f.liquidityToken]),
              g =
                null === h || void 0 === h
                  ? void 0
                  : h[
                      null !==
                        (n =
                          null === f || void 0 === f || null === (a = f.liquidityToken) || void 0 === a
                            ? void 0
                            : a.address) && void 0 !== n
                        ? n
                        : ''
                    ],
              y = [wc(e, l), wc(t, l)],
              E = y[0],
              x = y[1],
              O =
                ((r = {}),
                Object(b.a)(r, PO.CURRENCY_A, E),
                Object(b.a)(r, PO.CURRENCY_B, x),
                Object(b.a)(r, PO.LIQUIDITY, null === f || void 0 === f ? void 0 : f.liquidityToken),
                r),
              j = Wm(null === f || void 0 === f ? void 0 : f.liquidityToken),
              w =
                f && j && g && E && v.f.greaterThanOrEqual(j.raw, g.raw)
                  ? new v.m(E, f.getLiquidityValue(E, j, g, !1).raw)
                  : void 0,
              k =
                f && j && g && x && v.f.greaterThanOrEqual(j.raw, g.raw)
                  ? new v.m(x, f.getLiquidityValue(x, j, g, !1).raw)
                  : void 0,
              T = ((o = {}), Object(b.a)(o, PO.CURRENCY_A, w), Object(b.a)(o, PO.CURRENCY_B, k), o),
              C = new v.h('0', '100')
            if (d === PO.LIQUIDITY_PERCENT) C = new v.h(m, '100')
            else if (d === PO.LIQUIDITY) {
              if (null === f || void 0 === f ? void 0 : f.liquidityToken) {
                var I = Xc(m, f.liquidityToken)
                I && g && !I.greaterThan(g) && (C = new v.h(I.raw, g.raw))
              }
            } else if (O[d]) {
              var S = Xc(m, O[d]),
                N = T[d]
              S && N && !S.greaterThan(N) && (C = new v.h(S.raw, N.raw))
            }
            var R,
              U,
              B =
                ((i = {}),
                Object(b.a)(i, PO.LIQUIDITY_PERCENT, C),
                Object(b.a)(
                  i,
                  PO.LIQUIDITY,
                  g && C && C.greaterThan('0') ? new v.m(g.token, C.multiply(g.raw).quotient) : void 0
                ),
                Object(b.a)(
                  i,
                  PO.CURRENCY_A,
                  E && C && C.greaterThan('0') && w ? new v.m(E, C.multiply(w.raw).quotient) : void 0
                ),
                Object(b.a)(
                  i,
                  PO.CURRENCY_B,
                  x && C && C.greaterThan('0') && k ? new v.m(x, C.multiply(k.raw).quotient) : void 0
                ),
                i)
            return (
              u || (R = 'Connect Wallet'),
              (B[PO.LIQUIDITY] && B[PO.CURRENCY_A] && B[PO.CURRENCY_B]) ||
                (R = null !== (U = R) && void 0 !== U ? U : 'Enter an amount'),
              { pair: f, parsedAmounts: B, error: R }
            )
          })(null !== C && void 0 !== C ? C : void 0, null !== I && void 0 !== I ? I : void 0),
          Y = V.pair,
          H = V.parsedAmounts,
          Q = V.error,
          X = (function() {
            var e = Object(d.c)()
            return {
              onUserInput: Object(o.useCallback)(
                function(t, n) {
                  e(qO({ field: t, typedValue: n }))
                },
                [e]
              )
            }
          })().onUserInput,
          J = !Q,
          G = Object(o.useState)(!1),
          K = Object(A.a)(G, 2),
          Z = K[0],
          _ = K[1],
          $ = Object(o.useState)(!1),
          ee = Object(A.a)($, 2),
          ne = ee[0],
          ae = ee[1],
          re = Object(o.useState)(!1),
          oe = Object(A.a)(re, 2),
          ie = oe[0],
          ce = oe[1],
          ue = Object(o.useState)(''),
          le = Object(A.a)(ue, 2),
          se = le[0],
          de = le[1],
          me = oE(),
          pe = xr(),
          fe = Object(A.a)(pe, 1)[0],
          be =
            ((f = {}),
            Object(b.a)(
              f,
              PO.LIQUIDITY_PERCENT,
              H[PO.LIQUIDITY_PERCENT].equalTo('0')
                ? '0'
                : H[PO.LIQUIDITY_PERCENT].lessThan(new v.h('1', '100'))
                ? '<1'
                : H[PO.LIQUIDITY_PERCENT].toFixed(0)
            ),
            Object(b.a)(
              f,
              PO.LIQUIDITY,
              F === PO.LIQUIDITY
                ? q
                : null !== (a = null === (r = H[PO.LIQUIDITY]) || void 0 === r ? void 0 : r.toSignificant(6)) &&
                  void 0 !== a
                ? a
                : ''
            ),
            Object(b.a)(
              f,
              PO.CURRENCY_A,
              F === PO.CURRENCY_A
                ? q
                : null !== (c = null === (u = H[PO.CURRENCY_A]) || void 0 === u ? void 0 : u.toSignificant(6)) &&
                  void 0 !== c
                ? c
                : ''
            ),
            Object(b.a)(
              f,
              PO.CURRENCY_B,
              F === PO.CURRENCY_B
                ? q
                : null !== (l = null === (m = H[PO.CURRENCY_B]) || void 0 === m ? void 0 : m.toSignificant(6)) &&
                  void 0 !== l
                ? l
                : ''
            ),
            f),
          ve = null === (h = H[PO.LIQUIDITY_PERCENT]) || void 0 === h ? void 0 : h.equalTo(new v.h('1')),
          he = Fa(null === Y || void 0 === Y || null === (g = Y.liquidityToken) || void 0 === g ? void 0 : g.address),
          ge = Object(o.useState)(null),
          ye = Object(A.a)(ge, 2),
          Ee = ye[0],
          xe = ye[1],
          Oe = rE(H[PO.LIQUIDITY], te),
          je = Object(A.a)(Oe, 2),
          Ae = je[0],
          we = je[1],
          ke = nx()
        function Te() {
          return (Te = Object(w.a)(
            j.a.mark(function e() {
              var t, n, a, r, o, i, c
              return j.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (he && Y && U && me) {
                        e.next = 2
                        break
                      }
                      throw new Error('missing dependencies')
                    case 2:
                      if ((t = H[PO.LIQUIDITY])) {
                        e.next = 5
                        break
                      }
                      throw new Error('missing liquidity amount')
                    case 5:
                      if (!ke) {
                        e.next = 7
                        break
                      }
                      return e.abrupt('return', we())
                    case 7:
                      return (e.next = 9), he.nonces(N)
                    case 9:
                      ;(n = e.sent),
                        (a = [
                          { name: 'name', type: 'string' },
                          { name: 'version', type: 'string' },
                          { name: 'chainId', type: 'uint256' },
                          { name: 'verifyingContract', type: 'address' }
                        ]),
                        (r = {
                          name: 'EposSwap LP',
                          version: '1',
                          chainId: R,
                          verifyingContract: Y.liquidityToken.address
                        }),
                        (o = [
                          { name: 'owner', type: 'address' },
                          { name: 'spender', type: 'address' },
                          { name: 'value', type: 'uint256' },
                          { name: 'nonce', type: 'uint256' },
                          { name: 'deadline', type: 'uint256' }
                        ]),
                        (i = {
                          owner: N,
                          spender: te,
                          value: t.raw.toString(),
                          nonce: n.toHexString(),
                          deadline: me.toNumber()
                        }),
                        (c = JSON.stringify({
                          types: { EIP712Domain: a, Permit: o },
                          domain: r,
                          primaryType: 'Permit',
                          message: i
                        })),
                        U.send('eth_signTypedData_v4', [N, c])
                          .then(WO.splitSignature)
                          .then(function(e) {
                            xe({ v: e.v, r: e.r, s: e.s, deadline: me.toNumber() })
                          })
                          .catch(function(e) {
                            4001 !== (null === e || void 0 === e ? void 0 : e.code) && we()
                          })
                    case 16:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )).apply(this, arguments)
        }
        var Ce = Object(o.useCallback)(
            function(e, t) {
              return xe(null), X(e, t)
            },
            [X]
          ),
          Ie = Object(o.useCallback)(
            function(e) {
              return Ce(PO.LIQUIDITY, e)
            },
            [Ce]
          ),
          Se = Object(o.useCallback)(
            function(e) {
              return Ce(PO.CURRENCY_A, e)
            },
            [Ce]
          ),
          Ne = Object(o.useCallback)(
            function(e) {
              return Ce(PO.CURRENCY_B, e)
            },
            [Ce]
          ),
          Re = Ei()
        function Ue() {
          return Be.apply(this, arguments)
        }
        function Be() {
          return (Be = Object(w.a)(
            j.a.mark(function e() {
              var t, n, a, r, o, i, c, u, l, d, m, f, h, g
              return j.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (R && U && N && me) {
                        e.next = 2
                        break
                      }
                      throw new Error('missing dependencies')
                    case 2:
                      if (((n = H[PO.CURRENCY_A]), (a = H[PO.CURRENCY_B]), n && a)) {
                        e.next = 5
                        break
                      }
                      throw new Error('missing currency amounts')
                    case 5:
                      if (
                        ((r = la(0, U, N)),
                        (t = {}),
                        Object(b.a)(t, PO.CURRENCY_A, ca(n, fe)[0]),
                        Object(b.a)(t, PO.CURRENCY_B, ca(a, fe)[0]),
                        (o = t),
                        C && I)
                      ) {
                        e.next = 9
                        break
                      }
                      throw new Error('missing tokens')
                    case 9:
                      if ((i = H[PO.LIQUIDITY])) {
                        e.next = 12
                        break
                      }
                      throw new Error('missing liquidity amount')
                    case 12:
                      if (((c = I === v.d), (u = C === v.d || c), W && z)) {
                        e.next = 16
                        break
                      }
                      throw new Error('could not wrap')
                    case 16:
                      if (Ae !== _y.APPROVED) {
                        e.next = 20
                        break
                      }
                      u
                        ? ((l = ['removeLiquidityETH', 'removeLiquidityETHSupportingFeeOnTransferTokens']),
                          (d = [
                            c ? W.address : z.address,
                            i.raw.toString(),
                            o[c ? PO.CURRENCY_A : PO.CURRENCY_B].toString(),
                            o[c ? PO.CURRENCY_B : PO.CURRENCY_A].toString(),
                            N,
                            me.toHexString()
                          ]))
                        : ((l = ['removeLiquidity']),
                          (d = [
                            W.address,
                            z.address,
                            i.raw.toString(),
                            o[PO.CURRENCY_A].toString(),
                            o[PO.CURRENCY_B].toString(),
                            N,
                            me.toHexString()
                          ])),
                        (e.next = 25)
                      break
                    case 20:
                      if (null === Ee) {
                        e.next = 24
                        break
                      }
                      u
                        ? ((l = [
                            'removeLiquidityETHWithPermit',
                            'removeLiquidityETHWithPermitSupportingFeeOnTransferTokens'
                          ]),
                          (d = [
                            c ? W.address : z.address,
                            i.raw.toString(),
                            o[c ? PO.CURRENCY_A : PO.CURRENCY_B].toString(),
                            o[c ? PO.CURRENCY_B : PO.CURRENCY_A].toString(),
                            N,
                            Ee.deadline,
                            !1,
                            Ee.v,
                            Ee.r,
                            Ee.s
                          ]))
                        : ((l = ['removeLiquidityWithPermit']),
                          (d = [
                            W.address,
                            z.address,
                            i.raw.toString(),
                            o[PO.CURRENCY_A].toString(),
                            o[PO.CURRENCY_B].toString(),
                            N,
                            Ee.deadline,
                            !1,
                            Ee.v,
                            Ee.r,
                            Ee.s
                          ])),
                        (e.next = 25)
                      break
                    case 24:
                      throw new Error('Attempting to confirm without approval or a signature. Please contact support.')
                    case 25:
                      return (
                        (e.next = 27),
                        Promise.all(
                          l.map(function(e) {
                            var t
                            return (t = r.estimateGas)[e]
                              .apply(t, Object(p.a)(d))
                              .then(ia)
                              .catch(function(t) {
                                console.error('estimateGas failed', e, d, t)
                              })
                          })
                        )
                      )
                    case 27:
                      if (
                        ((m = e.sent),
                        -1 !==
                          (f = m.findIndex(function(e) {
                            return ea.a.isBigNumber(e)
                          })))
                      ) {
                        e.next = 33
                        break
                      }
                      console.error('This transaction would fail. Please contact support.'), (e.next = 38)
                      break
                    case 33:
                      return (
                        (h = l[f]),
                        (g = m[f]),
                        ce(!0),
                        (e.next = 38),
                        r[h]
                          .apply(r, Object(p.a)(d).concat([{ gasLimit: g }]))
                          .then(function(e) {
                            var t, n
                            ce(!1),
                              Re(e, {
                                summary:
                                  'Remove ' +
                                  (null === (t = H[PO.CURRENCY_A]) || void 0 === t ? void 0 : t.toSignificant(3)) +
                                  ' ' +
                                  (null === C || void 0 === C ? void 0 : C.symbol) +
                                  ' and ' +
                                  (null === (n = H[PO.CURRENCY_B]) || void 0 === n ? void 0 : n.toSignificant(3)) +
                                  ' ' +
                                  (null === I || void 0 === I ? void 0 : I.symbol)
                              }),
                              de(e.hash),
                              s.a.event({
                                category: 'Liquidity',
                                action: 'Remove',
                                label: [
                                  null === C || void 0 === C ? void 0 : C.symbol,
                                  null === I || void 0 === I ? void 0 : I.symbol
                                ].join('/')
                              })
                          })
                          .catch(function(e) {
                            ce(!1), console.error(e)
                          })
                      )
                    case 38:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )).apply(this, arguments)
        }
        function We() {
          var e, t
          return i.a.createElement(
            bt,
            { gap: 'md', style: { marginTop: '20px' } },
            i.a.createElement(
              Vt,
              { align: 'flex-end' },
              i.a.createElement(
                Tr.b,
                { fontSize: 24, fontWeight: 500 },
                null === (e = H[PO.CURRENCY_A]) || void 0 === e ? void 0 : e.toSignificant(6)
              ),
              i.a.createElement(
                Qt,
                { gap: '4px' },
                i.a.createElement(_b, { currency: C, size: '24px' }),
                i.a.createElement(
                  Tr.b,
                  { fontSize: 24, fontWeight: 500, style: { marginLeft: '10px' } },
                  null === C || void 0 === C ? void 0 : C.symbol
                )
              )
            ),
            i.a.createElement(Qt, null, i.a.createElement(Kf.a, { size: '16', color: M.text2 })),
            i.a.createElement(
              Vt,
              { align: 'flex-end' },
              i.a.createElement(
                Tr.b,
                { fontSize: 24, fontWeight: 500 },
                null === (t = H[PO.CURRENCY_B]) || void 0 === t ? void 0 : t.toSignificant(6)
              ),
              i.a.createElement(
                Qt,
                { gap: '4px' },
                i.a.createElement(_b, { currency: I, size: '24px' }),
                i.a.createElement(
                  Tr.b,
                  { fontSize: 24, fontWeight: 500, style: { marginLeft: '10px' } },
                  null === I || void 0 === I ? void 0 : I.symbol
                )
              )
            ),
            i.a.createElement(
              qo,
              { fontSize: 12, color: M.text2, textAlign: 'left', padding: '12px 0 0 0' },
              'Output is estimated. If the price changes by more than '.concat(
                fe / 100,
                '% your transaction will revert.'
              )
            )
          )
        }
        function ze() {
          var e
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              Vt,
              null,
              i.a.createElement(
                Tr.b,
                { color: M.text2, fontWeight: 500, fontSize: 16 },
                'UNI ' +
                  (null === C || void 0 === C ? void 0 : C.symbol) +
                  '/' +
                  (null === I || void 0 === I ? void 0 : I.symbol),
                ' Burned'
              ),
              i.a.createElement(
                Qt,
                null,
                i.a.createElement(Eg, { currency0: C, currency1: I, margin: !0 }),
                i.a.createElement(
                  Tr.b,
                  { fontWeight: 500, fontSize: 16 },
                  null === (e = H[PO.LIQUIDITY]) || void 0 === e ? void 0 : e.toSignificant(6)
                )
              )
            ),
            Y &&
              i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(
                  Vt,
                  null,
                  i.a.createElement(Tr.b, { color: M.text2, fontWeight: 500, fontSize: 16 }, 'Price'),
                  i.a.createElement(
                    Tr.b,
                    { fontWeight: 500, fontSize: 16, color: M.text1 },
                    '1 ',
                    null === C || void 0 === C ? void 0 : C.symbol,
                    ' = ',
                    W ? Y.priceOf(W).toSignificant(6) : '-',
                    ' ',
                    null === I || void 0 === I ? void 0 : I.symbol
                  )
                ),
                i.a.createElement(
                  Vt,
                  null,
                  i.a.createElement('div', null),
                  i.a.createElement(
                    Tr.b,
                    { fontWeight: 500, fontSize: 16, color: M.text1 },
                    '1 ',
                    null === I || void 0 === I ? void 0 : I.symbol,
                    ' = ',
                    z ? Y.priceOf(z).toSignificant(6) : '-',
                    ' ',
                    null === C || void 0 === C ? void 0 : C.symbol
                  )
                )
              ),
            i.a.createElement(
              ii,
              { disabled: !(Ae === _y.APPROVED || null !== Ee), onClick: Ue },
              i.a.createElement(Tr.b, { fontWeight: 500, fontSize: 20 }, 'Confirm')
            )
          )
        }
        var Me = 'Removing '
            .concat(null === (y = H[PO.CURRENCY_A]) || void 0 === y ? void 0 : y.toSignificant(6), ' ')
            .concat(null === C || void 0 === C ? void 0 : C.symbol, ' and ')
            .concat(null === (E = H[PO.CURRENCY_B]) || void 0 === E ? void 0 : E.toSignificant(6), ' ')
            .concat(null === I || void 0 === I ? void 0 : I.symbol),
          Pe = Object(o.useCallback)(
            function(e) {
              Ce(PO.LIQUIDITY_PERCENT, e.toString())
            },
            [Ce]
          ),
          De = C === v.d || I === v.d,
          Fe = Boolean(R && ((C && Object(v.q)(v.p[R], C)) || (I && Object(v.q)(v.p[R], I)))),
          qe = Object(o.useCallback)(
            function(e) {
              T && Jy(e) === T
                ? x.push('/remove/'.concat(Jy(e), '/').concat(k))
                : x.push('/remove/'.concat(Jy(e), '/').concat(T))
            },
            [k, T, x]
          ),
          Ve = Object(o.useCallback)(
            function(e) {
              k && Jy(e) === k
                ? x.push('/remove/'.concat(T, '/').concat(Jy(e)))
                : x.push('/remove/'.concat(k, '/').concat(Jy(e)))
            },
            [k, T, x]
          ),
          Ye = Object(o.useCallback)(
            function() {
              _(!1), xe(null), se && Ce(PO.LIQUIDITY_PERCENT, '0'), de('')
            },
            [Ce, se]
          ),
          Qe = (function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
              a = Object(o.useState)(function() {
                return e
              }),
              r = Object(A.a)(a, 2),
              i = r[0],
              c = r[1],
              u = Object(o.useRef)(),
              l = Object(o.useCallback)(
                function(e) {
                  c(e),
                    u.current && clearTimeout(u.current),
                    (u.current = setTimeout(function() {
                      t(e), (u.current = void 0)
                    }, n))
                },
                [n, t]
              )
            return (
              Object(o.useEffect)(
                function() {
                  u.current && (clearTimeout(u.current), (u.current = void 0)), c(e)
                },
                [e]
              ),
              [i, l]
            )
          })(Number.parseInt(H[PO.LIQUIDITY_PERCENT].toFixed(0)), Pe),
          Xe = Object(A.a)(Qe, 2),
          Je = Xe[0],
          Ge = Xe[1]
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            dE,
            null,
            i.a.createElement(Qy, { creating: !1, adding: !1 }),
            i.a.createElement(
              hE,
              null,
              i.a.createElement(sb, {
                isOpen: Z,
                onDismiss: Ye,
                attemptingTxn: ie,
                hash: se || '',
                content: function() {
                  return i.a.createElement(ub, {
                    title: 'You will receive',
                    onDismiss: Ye,
                    topContent: We,
                    bottomContent: ze
                  })
                },
                pendingText: Me
              }),
              i.a.createElement(
                bt,
                { gap: 'md' },
                i.a.createElement(
                  Tu,
                  null,
                  i.a.createElement(
                    bt,
                    { gap: '10px' },
                    i.a.createElement(
                      Ro,
                      { fontWeight: 400, color: 'primaryText1' },
                      i.a.createElement('b', null, 'Tip:'),
                      ' Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive.'
                    )
                  )
                ),
                i.a.createElement(
                  xu,
                  null,
                  i.a.createElement(
                    bt,
                    { gap: '20px' },
                    i.a.createElement(
                      Vt,
                      null,
                      i.a.createElement(Tr.b, { fontWeight: 500 }, 'Amount'),
                      i.a.createElement(
                        gE,
                        {
                          fontWeight: 500,
                          onClick: function() {
                            ae(!ne)
                          }
                        },
                        ne ? 'Simple' : 'Detailed'
                      )
                    ),
                    i.a.createElement(
                      Xt,
                      { style: { alignItems: 'flex-end' } },
                      i.a.createElement(Tr.b, { fontSize: 72, fontWeight: 500 }, be[PO.LIQUIDITY_PERCENT], '%')
                    ),
                    !ne &&
                      i.a.createElement(
                        i.a.Fragment,
                        null,
                        i.a.createElement(FO, { value: Je, onChange: Ge }),
                        i.a.createElement(
                          Vt,
                          null,
                          i.a.createElement(
                            yE,
                            {
                              onClick: function() {
                                return Ce(PO.LIQUIDITY_PERCENT, '25')
                              },
                              width: '20%'
                            },
                            '25%'
                          ),
                          i.a.createElement(
                            yE,
                            {
                              onClick: function() {
                                return Ce(PO.LIQUIDITY_PERCENT, '50')
                              },
                              width: '20%'
                            },
                            '50%'
                          ),
                          i.a.createElement(
                            yE,
                            {
                              onClick: function() {
                                return Ce(PO.LIQUIDITY_PERCENT, '75')
                              },
                              width: '20%'
                            },
                            '75%'
                          ),
                          i.a.createElement(
                            yE,
                            {
                              onClick: function() {
                                return Ce(PO.LIQUIDITY_PERCENT, '100')
                              },
                              width: '20%'
                            },
                            'Max'
                          )
                        )
                      )
                  )
                ),
                !ne &&
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(ft, null, i.a.createElement(zO.a, { size: '16', color: M.text2 })),
                    i.a.createElement(
                      xu,
                      null,
                      i.a.createElement(
                        bt,
                        { gap: '10px' },
                        i.a.createElement(
                          Vt,
                          null,
                          i.a.createElement(Tr.b, { fontSize: 24, fontWeight: 500 }, be[PO.CURRENCY_A] || '-'),
                          i.a.createElement(
                            Qt,
                            null,
                            i.a.createElement(_b, { currency: C, style: { marginRight: '12px' } }),
                            i.a.createElement(
                              Tr.b,
                              { fontSize: 24, fontWeight: 500, id: 'remove-liquidity-tokena-symbol' },
                              null === C || void 0 === C ? void 0 : C.symbol
                            )
                          )
                        ),
                        i.a.createElement(
                          Vt,
                          null,
                          i.a.createElement(Tr.b, { fontSize: 24, fontWeight: 500 }, be[PO.CURRENCY_B] || '-'),
                          i.a.createElement(
                            Qt,
                            null,
                            i.a.createElement(_b, { currency: I, style: { marginRight: '12px' } }),
                            i.a.createElement(
                              Tr.b,
                              { fontSize: 24, fontWeight: 500, id: 'remove-liquidity-tokenb-symbol' },
                              null === I || void 0 === I ? void 0 : I.symbol
                            )
                          )
                        ),
                        R && (Fe || De)
                          ? i.a.createElement(
                              Vt,
                              { style: { justifyContent: 'flex-end' } },
                              De
                                ? i.a.createElement(
                                    ro,
                                    {
                                      to: '/remove/'
                                        .concat(C === v.d ? v.p[R].address : k, '/')
                                        .concat(I === v.d ? v.p[R].address : T)
                                    },
                                    'Receive WETH'
                                  )
                                : Fe
                                ? i.a.createElement(
                                    ro,
                                    {
                                      to: '/remove/'
                                        .concat(C && Object(v.q)(C, v.p[R]) ? 'ETH' : k, '/')
                                        .concat(I && Object(v.q)(I, v.p[R]) ? 'ETH' : T)
                                    },
                                    'Receive ETH'
                                  )
                                : null
                            )
                          : null
                      )
                    )
                  ),
                ne &&
                  i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(Gg, {
                      value: be[PO.LIQUIDITY],
                      onUserInput: Ie,
                      onMax: function() {
                        Ce(PO.LIQUIDITY_PERCENT, '100')
                      },
                      showMaxButton: !ve,
                      disableCurrencySelect: !0,
                      currency: null === Y || void 0 === Y ? void 0 : Y.liquidityToken,
                      pair: Y,
                      id: 'liquidity-amount'
                    }),
                    i.a.createElement(ft, null, i.a.createElement(zO.a, { size: '16', color: M.text2 })),
                    i.a.createElement(Gg, {
                      hideBalance: !0,
                      value: be[PO.CURRENCY_A],
                      onUserInput: Se,
                      onMax: function() {
                        return Ce(PO.LIQUIDITY_PERCENT, '100')
                      },
                      showMaxButton: !ve,
                      currency: C,
                      label: 'Output',
                      onCurrencySelect: qe,
                      id: 'remove-liquidity-tokena'
                    }),
                    i.a.createElement(ft, null, i.a.createElement(Kf.a, { size: '16', color: M.text2 })),
                    i.a.createElement(Gg, {
                      hideBalance: !0,
                      value: be[PO.CURRENCY_B],
                      onUserInput: Ne,
                      onMax: function() {
                        return Ce(PO.LIQUIDITY_PERCENT, '100')
                      },
                      showMaxButton: !ve,
                      currency: I,
                      label: 'Output',
                      onCurrencySelect: Ve,
                      id: 'remove-liquidity-tokenb'
                    })
                  ),
                Y &&
                  i.a.createElement(
                    'div',
                    { style: { padding: '10px 20px' } },
                    i.a.createElement(
                      Vt,
                      null,
                      'Price:',
                      i.a.createElement(
                        'div',
                        null,
                        '1 ',
                        null === C || void 0 === C ? void 0 : C.symbol,
                        ' = ',
                        W ? Y.priceOf(W).toSignificant(6) : '-',
                        ' ',
                        null === I || void 0 === I ? void 0 : I.symbol
                      )
                    ),
                    i.a.createElement(
                      Vt,
                      null,
                      i.a.createElement('div', null),
                      i.a.createElement(
                        'div',
                        null,
                        '1 ',
                        null === I || void 0 === I ? void 0 : I.symbol,
                        ' = ',
                        z ? Y.priceOf(z).toSignificant(6) : '-',
                        ' ',
                        null === C || void 0 === C ? void 0 : C.symbol
                      )
                    )
                  ),
                i.a.createElement(
                  'div',
                  { style: { position: 'relative' } },
                  N
                    ? i.a.createElement(
                        Vt,
                        null,
                        i.a.createElement(
                          pi,
                          {
                            onClick: function() {
                              return Te.apply(this, arguments)
                            },
                            confirmed: Ae === _y.APPROVED || null !== Ee,
                            disabled: Ae !== _y.NOT_APPROVED || null !== Ee,
                            mr: '0.5rem',
                            fontWeight: 500,
                            fontSize: 16
                          },
                          Ae === _y.PENDING
                            ? i.a.createElement(Nm, null, 'Approving')
                            : Ae === _y.APPROVED || null !== Ee
                            ? 'Approved'
                            : 'Approve'
                        ),
                        i.a.createElement(
                          fi,
                          {
                            onClick: function() {
                              _(!0)
                            },
                            disabled: !J || (null === Ee && Ae !== _y.APPROVED),
                            error: !J && !!H[PO.CURRENCY_A] && !!H[PO.CURRENCY_B]
                          },
                          i.a.createElement(Tr.b, { fontSize: 16, fontWeight: 500 }, Q || 'Remove')
                        )
                      )
                    : i.a.createElement(ci, { onClick: P }, 'Connect Wallet')
                )
              )
            )
          ),
          Y
            ? i.a.createElement(
                bt,
                { style: { minWidth: '20rem', width: '100%', maxWidth: '400px', marginTop: '1rem' } },
                i.a.createElement(nE, { showUnwrapped: Fe, pair: Y })
              )
            : null
        )
      }
      var HO = /^(0x[a-fA-F0-9]{40})-(0x[a-fA-F0-9]{40})$/
      function QO(e) {
        var t = e.match.params.tokens
        if (!HO.test(t)) return i.a.createElement(Ye.a, { to: '/pool' })
        var n = t.split('-'),
          a = Object(A.a)(n, 2),
          r = a[0],
          o = a[1]
        return i.a.createElement(Ye.a, { to: '/remove/'.concat(r, '/').concat(o) })
      }
      var XO = n(774)
      function JO(e) {
        var t = e.priceImpact
        return i.a.createElement(
          Cm,
          { fontWeight: 500, fontSize: 14, severity: Hc(t) },
          t ? (t.lessThan(je) ? '<0.01%' : ''.concat(t.toFixed(2), '%')) : '-'
        )
      }
      function GO(e) {
        var t,
          n,
          a,
          r,
          c = e.trade,
          u = e.onConfirm,
          l = e.allowedSlippage,
          s = e.swapErrorMessage,
          d = e.disabledConfirm,
          m = Object(o.useState)(!1),
          p = Object(A.a)(m, 2),
          f = p[0],
          b = p[1],
          h = Object(o.useContext)(He.ThemeContext),
          g = Object(o.useMemo)(
            function() {
              return Yc(c, l)
            },
            [l, c]
          ),
          y = Object(o.useMemo)(
            function() {
              return Vc(c)
            },
            [c]
          ),
          E = y.priceImpactWithoutFee,
          x = y.realizedLPFee,
          O = Hc(E)
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            bt,
            { gap: '0px' },
            i.a.createElement(
              Vt,
              { align: 'center' },
              i.a.createElement(Tr.b, { fontWeight: 400, fontSize: 14, color: h.text2 }, 'Price'),
              i.a.createElement(
                Tr.b,
                {
                  fontWeight: 500,
                  fontSize: 14,
                  color: h.text1,
                  style: {
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    textAlign: 'right',
                    paddingLeft: '10px'
                  }
                },
                (function(e, t) {
                  return e
                    ? t
                      ? ''
                          .concat(e.executionPrice.invert().toSignificant(6), ' ')
                          .concat(e.inputAmount.currency.symbol, ' / ')
                          .concat(e.outputAmount.currency.symbol)
                      : ''
                          .concat(e.executionPrice.toSignificant(6), ' ')
                          .concat(e.outputAmount.currency.symbol, ' / ')
                          .concat(e.inputAmount.currency.symbol)
                    : ''
                })(c, f),
                i.a.createElement(
                  Im,
                  {
                    onClick: function() {
                      return b(!f)
                    }
                  },
                  i.a.createElement(XO.a, { size: 14 })
                )
              )
            ),
            i.a.createElement(
              Vt,
              null,
              i.a.createElement(
                Qt,
                null,
                i.a.createElement(
                  Uo,
                  { fontSize: 14, fontWeight: 400, color: h.text2 },
                  c.tradeType === v.o.EXACT_INPUT ? 'Minimum received' : 'Maximum sold'
                ),
                i.a.createElement(Rb, {
                  text:
                    'Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.'
                })
              ),
              i.a.createElement(
                Qt,
                null,
                i.a.createElement(
                  Uo,
                  { fontSize: 14 },
                  c.tradeType === v.o.EXACT_INPUT
                    ? null !== (t = null === (n = g[Uc.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(4)) &&
                      void 0 !== t
                      ? t
                      : '-'
                    : null !== (a = null === (r = g[Uc.INPUT]) || void 0 === r ? void 0 : r.toSignificant(4)) &&
                      void 0 !== a
                    ? a
                    : '-'
                ),
                i.a.createElement(
                  Uo,
                  { fontSize: 14, marginLeft: '4px' },
                  c.tradeType === v.o.EXACT_INPUT ? c.outputAmount.currency.symbol : c.inputAmount.currency.symbol
                )
              )
            ),
            i.a.createElement(
              Vt,
              null,
              i.a.createElement(
                Qt,
                null,
                i.a.createElement(Uo, { color: h.text2, fontSize: 14, fontWeight: 400 }, 'Price Impact'),
                i.a.createElement(Rb, {
                  text: 'The difference between the market price and your price due to trade size.'
                })
              ),
              i.a.createElement(JO, { priceImpact: E })
            ),
            i.a.createElement(
              Vt,
              null,
              i.a.createElement(
                Qt,
                null,
                i.a.createElement(Uo, { fontSize: 14, fontWeight: 400, color: h.text2 }, 'Liquidity Provider Fee'),
                i.a.createElement(Rb, {
                  text: 'A portion of each trade (0.30%) goes to liquidity providers as a protocol incentive.'
                })
              ),
              i.a.createElement(
                Uo,
                { fontSize: 14 },
                x
                  ? (null === x || void 0 === x ? void 0 : x.toSignificant(6)) + ' ' + c.inputAmount.currency.symbol
                  : '-'
              )
            )
          ),
          i.a.createElement(
            Ht,
            null,
            i.a.createElement(
              fi,
              { onClick: u, disabled: d, error: O > 2, style: { margin: '10px 0 0 0' }, id: 'confirm-swap-or-send' },
              i.a.createElement(Tr.b, { fontSize: 20, fontWeight: 500 }, O > 2 ? 'Swap Anyway' : 'Confirm Swap')
            ),
            s ? i.a.createElement(Bm, { error: s }) : null
          )
        )
      }
      function KO(e) {
        var t,
          n,
          a = e.trade,
          r = e.allowedSlippage,
          c = e.recipient,
          u = e.showAcceptChanges,
          l = e.onAcceptChanges,
          s = Object(o.useMemo)(
            function() {
              return Yc(a, r)
            },
            [a, r]
          ),
          d = Hc(
            Object(o.useMemo)(
              function() {
                return Vc(a)
              },
              [a]
            ).priceImpactWithoutFee
          ),
          m = Object(o.useContext)(He.ThemeContext)
        return i.a.createElement(
          bt,
          { gap: 'md', style: { marginTop: '20px' } },
          i.a.createElement(
            Vt,
            { align: 'flex-end' },
            i.a.createElement(
              Qt,
              { gap: '0px' },
              i.a.createElement(_b, { currency: a.inputAmount.currency, size: '24px', style: { marginRight: '12px' } }),
              i.a.createElement(
                Sm,
                { fontSize: 24, fontWeight: 500, color: u && a.tradeType === v.o.EXACT_OUTPUT ? m.primary1 : '' },
                a.inputAmount.toSignificant(6)
              )
            ),
            i.a.createElement(
              Qt,
              { gap: '0px' },
              i.a.createElement(
                Tr.b,
                { fontSize: 24, fontWeight: 500, style: { marginLeft: '10px' } },
                a.inputAmount.currency.symbol
              )
            )
          ),
          i.a.createElement(
            Qt,
            null,
            i.a.createElement(zO.a, { size: '16', color: m.text2, style: { marginLeft: '4px', minWidth: '16px' } })
          ),
          i.a.createElement(
            Vt,
            { align: 'flex-end' },
            i.a.createElement(
              Qt,
              { gap: '0px' },
              i.a.createElement(_b, {
                currency: a.outputAmount.currency,
                size: '24px',
                style: { marginRight: '12px' }
              }),
              i.a.createElement(
                Sm,
                {
                  fontSize: 24,
                  fontWeight: 500,
                  color: d > 2 ? m.red1 : u && a.tradeType === v.o.EXACT_INPUT ? m.primary1 : ''
                },
                a.outputAmount.toSignificant(6)
              )
            ),
            i.a.createElement(
              Qt,
              { gap: '0px' },
              i.a.createElement(
                Tr.b,
                { fontSize: 24, fontWeight: 500, style: { marginLeft: '10px' } },
                a.outputAmount.currency.symbol
              )
            )
          ),
          u
            ? i.a.createElement(
                Lm,
                { justify: 'flex-start', gap: '0px' },
                i.a.createElement(
                  Vt,
                  null,
                  i.a.createElement(
                    Qt,
                    null,
                    i.a.createElement(sm.a, { size: 20, style: { marginRight: '8px', minWidth: 24 } }),
                    i.a.createElement(No, { color: m.primary1 }, ' Price Updated')
                  ),
                  i.a.createElement(
                    ii,
                    {
                      style: { padding: '.5rem', width: 'fit-content', fontSize: '0.825rem', borderRadius: '12px' },
                      onClick: l
                    },
                    'Accept'
                  )
                )
              )
            : null,
          i.a.createElement(
            bt,
            { justify: 'flex-start', gap: 'sm', style: { padding: '12px 0 0 0px' } },
            a.tradeType === v.o.EXACT_INPUT
              ? i.a.createElement(
                  qo,
                  { textAlign: 'left', style: { width: '100%' } },
                  'Output is estimated. You will receive at least ',
                  i.a.createElement(
                    'b',
                    null,
                    null === (t = s[Uc.OUTPUT]) || void 0 === t ? void 0 : t.toSignificant(6),
                    ' ',
                    a.outputAmount.currency.symbol
                  ),
                  ' or the transaction will revert.'
                )
              : i.a.createElement(
                  qo,
                  { textAlign: 'left', style: { width: '100%' } },
                  'Input is estimated. You will sell at most ',
                  i.a.createElement(
                    'b',
                    null,
                    null === (n = s[Uc.INPUT]) || void 0 === n ? void 0 : n.toSignificant(6),
                    ' ',
                    a.inputAmount.currency.symbol
                  ),
                  ' or the transaction will revert.'
                )
          ),
          null !== c
            ? i.a.createElement(
                bt,
                { justify: 'flex-start', gap: 'sm', style: { padding: '12px 0 0 0px' } },
                i.a.createElement(
                  No,
                  null,
                  'Output will be sent to',
                  ' ',
                  i.a.createElement('b', { title: c }, na(c) ? oa(c) : c)
                )
              )
            : null
        )
      }
      function ZO(e) {
        var t,
          n,
          a,
          r,
          c,
          u,
          l = e.trade,
          s = e.originalTrade,
          d = e.onAcceptChanges,
          m = e.allowedSlippage,
          p = e.onConfirm,
          f = e.onDismiss,
          b = e.recipient,
          h = e.swapErrorMessage,
          g = e.isOpen,
          y = e.attemptingTxn,
          E = e.txHash,
          x = Object(o.useMemo)(
            function() {
              return Boolean(
                l &&
                  s &&
                  ((t = s),
                  (e = l).tradeType !== t.tradeType ||
                    !Object(v.q)(e.inputAmount.currency, t.inputAmount.currency) ||
                    !e.inputAmount.equalTo(t.inputAmount) ||
                    !Object(v.q)(e.outputAmount.currency, t.outputAmount.currency) ||
                    !e.outputAmount.equalTo(t.outputAmount))
              )
              var e, t
            },
            [s, l]
          ),
          O = Object(o.useCallback)(
            function() {
              return l
                ? i.a.createElement(KO, {
                    trade: l,
                    allowedSlippage: m,
                    recipient: b,
                    showAcceptChanges: x,
                    onAcceptChanges: d
                  })
                : null
            },
            [m, d, b, x, l]
          ),
          j = Object(o.useCallback)(
            function() {
              return l
                ? i.a.createElement(GO, {
                    onConfirm: p,
                    trade: l,
                    disabledConfirm: x,
                    swapErrorMessage: h,
                    allowedSlippage: m
                  })
                : null
            },
            [m, p, x, h, l]
          ),
          A = 'Swapping '
            .concat(
              null === l || void 0 === l || null === (t = l.inputAmount) || void 0 === t ? void 0 : t.toSignificant(6),
              ' '
            )
            .concat(
              null === l ||
                void 0 === l ||
                null === (n = l.inputAmount) ||
                void 0 === n ||
                null === (a = n.currency) ||
                void 0 === a
                ? void 0
                : a.symbol,
              ' for '
            )
            .concat(
              null === l || void 0 === l || null === (r = l.outputAmount) || void 0 === r ? void 0 : r.toSignificant(6),
              ' '
            )
            .concat(
              null === l ||
                void 0 === l ||
                null === (c = l.outputAmount) ||
                void 0 === c ||
                null === (u = c.currency) ||
                void 0 === u
                ? void 0
                : u.symbol
            ),
          w = Object(o.useCallback)(
            function() {
              return h
                ? i.a.createElement(lb, { onDismiss: f, message: h })
                : i.a.createElement(ub, { title: 'Confirm Swap', onDismiss: f, topContent: O, bottomContent: j })
            },
            [f, j, O, h]
          )
        return i.a.createElement(sb, { isOpen: g, onDismiss: f, attemptingTxn: y, hash: E, content: w, pendingText: A })
      }
      var _O = n(775),
        $O = Object(o.memo)(function(e) {
          var t = e.trade,
            n = Object(o.useContext)(He.ThemeContext)
          return i.a.createElement(
            Tr.a,
            { flexWrap: 'wrap', width: '100%', justifyContent: 'flex-end', alignItems: 'center' },
            t.route.path.map(function(e, t, a) {
              var r = t === a.length - 1,
                c = Tc(e)
              return i.a.createElement(
                o.Fragment,
                { key: t },
                i.a.createElement(
                  Tr.a,
                  { alignItems: 'end' },
                  i.a.createElement(Uo, { fontSize: 14, color: n.text1, ml: '0.125rem', mr: '0.125rem' }, c.symbol)
                ),
                r ? null : i.a.createElement(_O.a, { size: 12, color: n.text2 })
              )
            })
          )
        })
      function ej() {
        var e = Object(Ve.a)([
          '\n  width: 100%;\n  border: 1px solid ',
          ';\n  padding: 6px 6px;\n  border-radius: 8px;\n  text-align: center;\n  font-size: 14px;\n  color: ',
          ';\n'
        ])
        return (
          (ej = function() {
            return e
          }),
          e
        )
      }
      var tj = Object(He.default)(mo)(
        ej(),
        function(e) {
          return e.theme.bg3
        },
        function(e) {
          return e.theme.text1
        }
      )
      function nj(e) {
        var t,
          n,
          a,
          r,
          c = e.trade,
          u = e.allowedSlippage,
          l = Object(o.useContext)(He.ThemeContext),
          s = Vc(c),
          d = s.priceImpactWithoutFee,
          m = s.realizedLPFee,
          p = c.tradeType === v.o.EXACT_INPUT,
          f = Yc(c, u)
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            bt,
            { style: { padding: '0 16px' } },
            i.a.createElement(
              Vt,
              null,
              i.a.createElement(
                Qt,
                null,
                i.a.createElement(
                  Uo,
                  { fontSize: 14, fontWeight: 400, color: l.text2 },
                  p ? 'Minimum received' : 'Maximum sold'
                ),
                i.a.createElement(Rb, {
                  text:
                    'Your transaction will revert if there is a large, unfavorable price movement before it is confirmed.'
                })
              ),
              i.a.createElement(
                Qt,
                null,
                i.a.createElement(
                  Uo,
                  { color: l.text1, fontSize: 14 },
                  p
                    ? null !==
                        (t = ''
                          .concat(null === (n = f[Uc.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(4), ' ')
                          .concat(c.outputAmount.currency.symbol)) && void 0 !== t
                      ? t
                      : '-'
                    : null !==
                        (a = ''
                          .concat(null === (r = f[Uc.INPUT]) || void 0 === r ? void 0 : r.toSignificant(4), ' ')
                          .concat(c.inputAmount.currency.symbol)) && void 0 !== a
                    ? a
                    : '-'
                )
              )
            ),
            i.a.createElement(
              Vt,
              null,
              i.a.createElement(
                Qt,
                null,
                i.a.createElement(Uo, { fontSize: 14, fontWeight: 400, color: l.text2 }, 'Price Impact'),
                i.a.createElement(Rb, {
                  text: 'The difference between the market price and estimated price due to trade size.'
                })
              ),
              i.a.createElement(JO, { priceImpact: d })
            ),
            i.a.createElement(
              Vt,
              null,
              i.a.createElement(
                Qt,
                null,
                i.a.createElement(Uo, { fontSize: 14, fontWeight: 400, color: l.text2 }, 'Liquidity Provider Fee'),
                i.a.createElement(Rb, {
                  text: 'A portion of each trade (0.30%) goes to liquidity providers as a protocol incentive.'
                })
              ),
              i.a.createElement(
                Uo,
                { fontSize: 14, color: l.text1 },
                m ? ''.concat(m.toSignificant(4), ' ').concat(c.inputAmount.currency.symbol) : '-'
              )
            )
          )
        )
      }
      function aj(e) {
        var t = e.trade,
          n = Object(o.useContext)(He.ThemeContext),
          a = xr(),
          r = Object(A.a)(a, 1)[0],
          c = Boolean(t && t.route.path.length > 2)
        return i.a.createElement(
          bt,
          { gap: '0px' },
          t &&
            i.a.createElement(
              i.a.Fragment,
              null,
              i.a.createElement(nj, { trade: t, allowedSlippage: r }),
              c &&
                i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(
                    Vt,
                    { style: { padding: '0 16px' } },
                    i.a.createElement(
                      'span',
                      { style: { display: 'flex', alignItems: 'center' } },
                      i.a.createElement(Uo, { fontSize: 14, fontWeight: 400, color: n.text2 }, 'Route'),
                      i.a.createElement(Rb, {
                        text: 'Routing through these tokens resulted in the best price for your trade.'
                      })
                    ),
                    i.a.createElement($O, { trade: t })
                  )
                ),
              !c &&
                i.a.createElement(
                  bt,
                  { style: { padding: '12px 16px 0 16px' } },
                  i.a.createElement(
                    tj,
                    { href: 'https://uniswap.info/pair/' + t.route.pairs[0].liquidityToken.address, target: '_blank' },
                    'View pair analytics \u2197'
                  )
                )
            )
        )
      }
      function rj() {
        var e = Object(Ve.a)([
          '\n  padding-top: calc(16px + 2rem);\n  padding-bottom: 16px;\n  margin-top: -2rem;\n  width: 100%;\n  max-width: 400px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  color: ',
          ';\n  background-color: ',
          ';\n  z-index: -1;\n\n  transform: ',
          ';\n  transition: transform 300ms ease-in-out;\n'
        ])
        return (
          (rj = function() {
            return e
          }),
          e
        )
      }
      var oj = He.default.div(
        rj(),
        function(e) {
          return e.theme.text2
        },
        function(e) {
          return e.theme.advancedBG
        },
        function(e) {
          return e.show ? 'translateY(0%)' : 'translateY(-100%)'
        }
      )
      function ij(e) {
        var t,
          n = e.trade,
          a = Object(Xe.a)(e, ['trade']),
          r = db(n, mb)
        return i.a.createElement(
          oj,
          { show: Boolean(n) },
          i.a.createElement(
            aj,
            Object.assign({}, a, {
              trade: null !== (t = null !== n && void 0 !== n ? n : r) && void 0 !== t ? t : void 0
            })
          )
        )
      }
      function cj(e) {
        var t = e.children,
          n = Object(o.useContext)(He.ThemeContext)
        return i.a.createElement(
          Au,
          { style: { marginTop: '12px', padding: '0.5rem 0.5rem' } },
          i.a.createElement(
            bt,
            { gap: 'sm', justify: 'center', style: { alignItems: 'center', textAlign: 'center' } },
            i.a.createElement(Tr.b, { lineHeight: '145.23%;', fontSize: 14, fontWeight: 400, color: n.text1 }, t)
          )
        )
      }
      function uj(e) {
        var t = e.version,
          n = Object(Ye.g)(),
          a = fc(),
          r = Object(o.useMemo)(
            function() {
              return Object(f.a)(
                Object(f.a)({}, n),
                {},
                {
                  search: '?'.concat(
                    Object(pc.stringify)(Object(f.a)(Object(f.a)({}, a), {}, { use: t !== bc ? t : void 0 }))
                  )
                }
              )
            },
            [n, a, t]
          )
        return i.a.createElement(
          cj,
          null,
          'There is a better price for this trade on',
          ' ',
          i.a.createElement(ro, { to: r }, i.a.createElement('b', null, 'Uniswap ', t.toUpperCase(), ' \u2197'))
        )
      }
      function lj() {
        var e = Object(Ye.g)(),
          t = fc(),
          n = vc(),
          a = Object(o.useMemo)(
            function() {
              return Object(f.a)(
                Object(f.a)({}, e),
                {},
                { search: '?'.concat(Object(pc.stringify)(Object(f.a)(Object(f.a)({}, t), {}, { use: bc }))) }
              )
            },
            [e, t]
          )
        return i.a.createElement(
          cj,
          null,
          'Showing ',
          n.toUpperCase(),
          ' price.',
          ' ',
          i.a.createElement(
            ro,
            { to: a },
            i.a.createElement('b', null, 'Switch to Uniswap ', bc.toUpperCase(), ' \u2197')
          )
        )
      }
      function sj(e) {
        var t,
          n,
          a,
          r,
          c,
          u = e.price,
          l = e.showInverted,
          s = e.setShowInverted,
          d = Object(o.useContext)(He.ThemeContext),
          m = l
            ? null === u || void 0 === u
              ? void 0
              : u.toSignificant(6)
            : null === u || void 0 === u || null === (t = u.invert()) || void 0 === t
            ? void 0
            : t.toSignificant(6),
          p = Boolean(
            (null === u || void 0 === u ? void 0 : u.baseCurrency) &&
              (null === u || void 0 === u ? void 0 : u.quoteCurrency)
          ),
          f = l
            ? ''
                .concat(
                  null === u || void 0 === u || null === (n = u.quoteCurrency) || void 0 === n ? void 0 : n.symbol,
                  ' per '
                )
                .concat(null === u || void 0 === u || null === (a = u.baseCurrency) || void 0 === a ? void 0 : a.symbol)
            : ''
                .concat(
                  null === u || void 0 === u || null === (r = u.baseCurrency) || void 0 === r ? void 0 : r.symbol,
                  ' per '
                )
                .concat(
                  null === u || void 0 === u || null === (c = u.quoteCurrency) || void 0 === c ? void 0 : c.symbol
                )
        return i.a.createElement(
          Tr.b,
          {
            fontWeight: 500,
            fontSize: 14,
            color: d.text2,
            style: { justifyContent: 'center', alignItems: 'center', display: 'flex' }
          },
          p
            ? i.a.createElement(
                i.a.Fragment,
                null,
                null !== m && void 0 !== m ? m : '-',
                ' ',
                f,
                i.a.createElement(
                  Im,
                  {
                    onClick: function() {
                      return s(!l)
                    }
                  },
                  i.a.createElement(XO.a, { size: 14 })
                )
              )
            : '-'
        )
      }
      function dj(e) {
        var t = e.isOpen,
          n = e.tokens,
          a = e.onConfirm,
          r = Object(o.useCallback)(function() {
            return null
          }, [])
        return i.a.createElement(
          lt,
          { isOpen: t, onDismiss: r, maxHeight: 90 },
          i.a.createElement(oh, { tokens: n, handleCurrencySelect: a })
        )
      }
      function mj() {
        var e = Object(Ve.a)([
          '\n  padding: 12px 1rem 0px 1.5rem;\n  margin-bottom: -4px;\n  width: 100%;\n  max-width: 420px;\n  color: ',
          ';\n'
        ])
        return (
          (mj = function() {
            return e
          }),
          e
        )
      }
      var pj,
        fj,
        bj = He.default.div(mj(), function(e) {
          return e.theme.text2
        })
      function vj() {
        return i.a.createElement(
          bj,
          null,
          i.a.createElement(Vt, null, i.a.createElement(Uo, { fontWeight: 500 }, 'Swap'), i.a.createElement(Uy, null))
        )
      }
      function hj(e) {
        return '0x'.concat(e.raw.toString(16))
      }
      function gj(e, t) {
        if (Oc(e) !== uc.v1) throw new Error('invalid trade version')
        if (e.route.pairs.length > 2) throw new Error('too many pairs')
        var n = e.tradeType === v.o.EXACT_INPUT,
          a = e.inputAmount.currency === v.d,
          r = e.outputAmount.currency === v.d
        if (a && r) throw new Error('ETHER to ETHER')
        var o = hj(e.minimumAmountOut(t.allowedSlippage)),
          i = hj(e.maximumAmountIn(t.allowedSlippage)),
          c = '0x'.concat(t.deadline.toString(16))
        if (n) {
          if (a) return { methodName: 'ethToTokenTransferInput', args: [o, c, t.recipient], value: i }
          if (r) return { methodName: 'tokenToEthTransferInput', args: [i, o, c, t.recipient], value: '0x0' }
          var u = e.outputAmount.currency
          if (!(u instanceof v.l)) throw new Error('token to token')
          return {
            methodName: 'tokenToTokenTransferInput',
            args: [i, o, '0x1', c, t.recipient, u.address],
            value: '0x0'
          }
        }
        if (a) return { methodName: 'ethToTokenTransferOutput', args: [o, c, t.recipient], value: i }
        if (r) return { methodName: 'tokenToEthTransferOutput', args: [o, i, c, t.recipient], value: '0x0' }
        var l = e.outputAmount.currency
        if (!(l instanceof v.l)) throw new Error('invalid output amount currency')
        return {
          methodName: 'tokenToTokenTransferOutput',
          args: [o, i, $n.c.toHexString(), c, t.recipient, l.address],
          value: '0x0'
        }
      }
      function yj(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
          n = arguments.length > 2 ? arguments[2] : void 0,
          a = Le(),
          r = a.account,
          i = a.chainId,
          c = a.library,
          u = Mi(n),
          l = u.address,
          s = null === n ? r : l,
          d = oE(),
          m = za(jc(e), !0)
        return Object(o.useMemo)(
          function() {
            var n = Oc(e)
            if (!e || !s || !c || !r || !n || !i || !d) return []
            var a = n === uc.v2 ? la(0, c, r) : m
            if (!a) return []
            var o = []
            switch (n) {
              case uc.v2:
                o.push(
                  v.k.swapCallParameters(e, {
                    feeOnTransfer: !1,
                    allowedSlippage: new v.h(v.f.BigInt(t), Ae),
                    recipient: s,
                    deadline: d.toNumber()
                  })
                ),
                  e.tradeType === v.o.EXACT_INPUT &&
                    o.push(
                      v.k.swapCallParameters(e, {
                        feeOnTransfer: !0,
                        allowedSlippage: new v.h(v.f.BigInt(t), Ae),
                        recipient: s,
                        deadline: d.toNumber()
                      })
                    )
                break
              case uc.v1:
                o.push(gj(e, { allowedSlippage: new v.h(v.f.BigInt(t), Ae), recipient: s, deadline: d.toNumber() }))
            }
            return o.map(function(e) {
              return { parameters: e, contract: a }
            })
          },
          [r, t, i, d, c, s, e, m]
        )
      }
      !(function(e) {
        ;(e[(e.INVALID = 0)] = 'INVALID'), (e[(e.LOADING = 1)] = 'LOADING'), (e[(e.VALID = 2)] = 'VALID')
      })(pj || (pj = {})),
        (function(e) {
          ;(e[(e.NOT_APPLICABLE = 0)] = 'NOT_APPLICABLE'), (e[(e.WRAP = 1)] = 'WRAP'), (e[(e.UNWRAP = 2)] = 'UNWRAP')
        })(fj || (fj = {}))
      var Ej = { wrapType: fj.NOT_APPLICABLE }
      function xj(e, t, n) {
        var a = Le(),
          r = a.chainId,
          i = a.account,
          c = (function(e) {
            var t = Le().chainId
            return La(t ? v.p[t].address : void 0, Ia, e)
          })(),
          u = su(null !== i && void 0 !== i ? i : void 0, e),
          l = Object(o.useMemo)(
            function() {
              return Xc(n, e)
            },
            [e, n]
          ),
          s = Ei()
        return Object(o.useMemo)(
          function() {
            if (!c || !r || !e || !t) return Ej
            var n = l && u && !u.lessThan(l)
            return e === v.d && Object(v.q)(v.p[r], t)
              ? {
                  wrapType: fj.WRAP,
                  execute:
                    n && l
                      ? Object(w.a)(
                          j.a.mark(function e() {
                            var t
                            return j.a.wrap(
                              function(e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        c.deposit({ value: '0x'.concat(l.raw.toString(16)) })
                                      )
                                    case 3:
                                      ;(t = e.sent),
                                        s(t, { summary: 'Wrap '.concat(l.toSignificant(6), ' ETH to WETH') }),
                                        (e.next = 10)
                                      break
                                    case 7:
                                      ;(e.prev = 7), (e.t0 = e.catch(0)), console.error('Could not deposit', e.t0)
                                    case 10:
                                    case 'end':
                                      return e.stop()
                                  }
                              },
                              e,
                              null,
                              [[0, 7]]
                            )
                          })
                        )
                      : void 0,
                  inputError: n ? void 0 : 'Insufficient ETH balance'
                }
              : Object(v.q)(v.p[r], e) && t === v.d
              ? {
                  wrapType: fj.UNWRAP,
                  execute:
                    n && l
                      ? Object(w.a)(
                          j.a.mark(function e() {
                            var t
                            return j.a.wrap(
                              function(e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (e.prev = 0), (e.next = 3), c.withdraw('0x'.concat(l.raw.toString(16)))
                                    case 3:
                                      ;(t = e.sent),
                                        s(t, { summary: 'Unwrap '.concat(l.toSignificant(6), ' WETH to ETH') }),
                                        (e.next = 10)
                                      break
                                    case 7:
                                      ;(e.prev = 7), (e.t0 = e.catch(0)), console.error('Could not withdraw', e.t0)
                                    case 10:
                                    case 'end':
                                      return e.stop()
                                  }
                              },
                              e,
                              null,
                              [[0, 7]]
                            )
                          })
                        )
                      : void 0,
                  inputError: n ? void 0 : 'Insufficient WETH balance'
                }
              : Ej
          },
          [c, r, e, t, l, u, s]
        )
      }
      function Oj() {
        var e,
          t,
          n,
          a,
          r,
          c,
          u,
          l,
          m,
          h,
          g,
          y = (function() {
            var e = Le().chainId,
              t = Object(d.c)(),
              n = fc(),
              a = Object(o.useState)(),
              r = Object(A.a)(a, 2),
              i = r[0],
              c = r[1]
            return (
              Object(o.useEffect)(
                function() {
                  if (e) {
                    var a = eu(n)
                    t(
                      Mc({
                        typedValue: a.typedValue,
                        field: a.independentField,
                        inputCurrencyId: a[Uc.INPUT].currencyId,
                        outputCurrencyId: a[Uc.OUTPUT].currencyId,
                        recipient: a.recipient
                      })
                    ),
                      c({ inputCurrencyId: a[Uc.INPUT].currencyId, outputCurrencyId: a[Uc.OUTPUT].currencyId })
                  }
                },
                [t, e]
              ),
              i
            )
          })(),
          E = [
            ar(null === y || void 0 === y ? void 0 : y.inputCurrencyId),
            ar(null === y || void 0 === y ? void 0 : y.outputCurrencyId)
          ],
          x = E[0],
          O = E[1],
          k = Object(o.useState)(!1),
          T = Object(A.a)(k, 2),
          C = T[0],
          I = T[1],
          S = Object(o.useMemo)(
            function() {
              var e, t
              return null !==
                (e =
                  null === (t = [x, O]) || void 0 === t
                    ? void 0
                    : t.filter(function(e) {
                        return e instanceof v.l
                      })) && void 0 !== e
                ? e
                : []
            },
            [x, O]
          ),
          N = Object(o.useCallback)(function() {
            I(!0)
          }, []),
          R = Ka(),
          U =
            S &&
            S.filter(function(e) {
              return !Boolean(e.address in R)
            }),
          B = Le().account,
          L = Object(o.useContext)(He.ThemeContext),
          W = wn(),
          z = kn(),
          M = yr(),
          P = Object(A.a)(M, 1)[0],
          D = xr(),
          F = Object(A.a)(D, 1)[0],
          q = Qc(),
          V = q.independentField,
          Y = q.typedValue,
          H = q.recipient,
          Q = Kc(),
          X = Q.v1Trade,
          J = Q.v2Trade,
          G = Q.currencyBalances,
          K = Q.parsedAmount,
          Z = Q.currencies,
          _ = Q.inputError,
          $ = xj(Z[Uc.INPUT], Z[Uc.OUTPUT], Y),
          ee = $.wrapType,
          ne = $.execute,
          ae = $.inputError,
          re = ee !== fj.NOT_APPLICABLE,
          oe = Wi(H).address,
          ie = vc(),
          ce = ((e = {}), Object(b.a)(e, uc.v1, X), Object(b.a)(e, uc.v2, J), e),
          ue = re ? void 0 : ce[ie],
          le = re ? void 0 : ce[bc],
          se = ie === uc.v1 && Ac(X, J) ? uc.v2 : void 0,
          de = re
            ? ((t = {}), Object(b.a)(t, Uc.INPUT, K), Object(b.a)(t, Uc.OUTPUT, K), t)
            : ((n = {}),
              Object(b.a)(n, Uc.INPUT, V === Uc.INPUT ? K : null === ue || void 0 === ue ? void 0 : ue.inputAmount),
              Object(b.a)(n, Uc.OUTPUT, V === Uc.OUTPUT ? K : null === ue || void 0 === ue ? void 0 : ue.outputAmount),
              n),
          me = (function() {
            var e = Object(d.c)(),
              t = Object(o.useCallback)(
                function(t, n) {
                  e(Lc({ field: t, currencyId: n instanceof v.l ? n.address : n === v.d ? 'ETH' : '' }))
                },
                [e]
              )
            return {
              onSwitchTokens: Object(o.useCallback)(
                function() {
                  e(Wc())
                },
                [e]
              ),
              onCurrencySelection: t,
              onUserInput: Object(o.useCallback)(
                function(t, n) {
                  e(zc({ field: t, typedValue: n }))
                },
                [e]
              ),
              onChangeRecipient: Object(o.useCallback)(
                function(t) {
                  e(Pc({ recipient: t }))
                },
                [e]
              )
            }
          })(),
          pe = me.onSwitchTokens,
          fe = me.onCurrencySelection,
          be = me.onUserInput,
          ve = me.onChangeRecipient,
          he = !_,
          ge = V === Uc.INPUT ? Uc.OUTPUT : Uc.INPUT,
          ye = Object(o.useCallback)(
            function(e) {
              be(Uc.INPUT, e)
            },
            [be]
          ),
          Ee = Object(o.useCallback)(
            function(e) {
              be(Uc.OUTPUT, e)
            },
            [be]
          ),
          xe = Object(o.useState)({
            showConfirm: !1,
            tradeToConfirm: void 0,
            attemptingTxn: !1,
            swapErrorMessage: void 0,
            txHash: void 0
          }),
          Oe = Object(A.a)(xe, 2),
          je = Oe[0],
          Ae = je.showConfirm,
          we = je.tradeToConfirm,
          ke = je.swapErrorMessage,
          Ie = je.attemptingTxn,
          Se = je.txHash,
          Ne = Oe[1],
          Re =
            ((l = {}),
            Object(b.a)(l, V, Y),
            Object(b.a)(
              l,
              ge,
              re
                ? null !== (a = null === (r = de[V]) || void 0 === r ? void 0 : r.toExact()) && void 0 !== a
                  ? a
                  : ''
                : null !== (c = null === (u = de[ge]) || void 0 === u ? void 0 : u.toSignificant(6)) && void 0 !== c
                ? c
                : ''
            ),
            l),
          Ue = null === ue || void 0 === ue ? void 0 : ue.route,
          Be = Boolean(
            Z[Uc.INPUT] &&
              Z[Uc.OUTPUT] &&
              (null === (m = de[V]) || void 0 === m ? void 0 : m.greaterThan(v.f.BigInt(0)))
          ),
          We = !Ue,
          ze = (function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              n = Object(o.useMemo)(
                function() {
                  return e ? Yc(e, t)[Uc.INPUT] : void 0
                },
                [e, t]
              ),
              a = Oc(e) === uc.v1,
              r = jc(e)
            return rE(n, a ? r : te)
          })(ue, F),
          Me = Object(A.a)(ze, 2),
          Pe = Me[0],
          De = Me[1],
          Fe = Object(o.useState)(!1),
          qe = Object(A.a)(Fe, 2),
          Ve = qe[0],
          Ye = qe[1]
        Object(o.useEffect)(
          function() {
            Pe === _y.PENDING && Ye(!0)
          },
          [Pe, Ve]
        )
        var Qe = uE(G[Uc.INPUT]),
          Xe = Boolean(Qe && (null === (h = de[Uc.INPUT]) || void 0 === h ? void 0 : h.equalTo(Qe))),
          Je = (function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
              n = arguments.length > 2 ? arguments[2] : void 0,
              a = Le(),
              r = a.account,
              i = a.chainId,
              c = a.library,
              u = yj(e, t, n),
              l = Ei(),
              s = Mi(n),
              d = s.address,
              m = null === n ? r : d
            return Object(o.useMemo)(
              function() {
                if (!e || !c || !r || !i) return { state: pj.INVALID, callback: null, error: 'Missing dependencies' }
                if (!m)
                  return null !== n
                    ? { state: pj.INVALID, callback: null, error: 'Invalid recipient' }
                    : { state: pj.LOADING, callback: null, error: null }
                var t = Oc(e)
                return {
                  state: pj.VALID,
                  callback: (function() {
                    var a = Object(w.a)(
                      j.a.mark(function a() {
                        var o, i, c, s, d, b, v, h, g, y
                        return j.a.wrap(function(a) {
                          for (;;)
                            switch ((a.prev = a.next)) {
                              case 0:
                                return (
                                  (a.next = 2),
                                  Promise.all(
                                    u.map(function(e) {
                                      var t,
                                        n = e.parameters,
                                        a = n.methodName,
                                        r = n.args,
                                        o = n.value,
                                        i = e.contract,
                                        c = !o || Bi(o) ? {} : { value: o }
                                      return (t = i.estimateGas)[a]
                                        .apply(t, Object(p.a)(r).concat([c]))
                                        .then(function(t) {
                                          return { call: e, gasEstimate: t }
                                        })
                                        .catch(function(t) {
                                          var n
                                          return (
                                            console.debug('Gas estimate failed, trying eth_call to extract error', e),
                                            (n = i.callStatic)[a]
                                              .apply(n, Object(p.a)(r).concat([c]))
                                              .then(function(n) {
                                                return (
                                                  console.debug(
                                                    'Unexpected successful call after failed estimate gas',
                                                    e,
                                                    t,
                                                    n
                                                  ),
                                                  {
                                                    call: e,
                                                    error: new Error(
                                                      'Unexpected issue with estimating the gas. Please try again.'
                                                    )
                                                  }
                                                )
                                              })
                                              .catch(function(t) {
                                                var n
                                                switch ((console.debug('Call threw error', e, t), t.reason)) {
                                                  case 'UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT':
                                                  case 'UniswapV2Router: EXCESSIVE_INPUT_AMOUNT':
                                                    n =
                                                      'This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.'
                                                    break
                                                  default:
                                                    n = 'The transaction cannot succeed due to error: '.concat(
                                                      t.reason,
                                                      '. This is probably an issue with one of the tokens you are swapping.'
                                                    )
                                                }
                                                return { call: e, error: new Error(n) }
                                              })
                                          )
                                        })
                                    })
                                  )
                                )
                              case 2:
                                if (
                                  ((o = a.sent),
                                  (i = o.find(function(e, t, n) {
                                    return 'gasEstimate' in e && (t === n.length - 1 || 'gasEstimate' in n[t + 1])
                                  })))
                                ) {
                                  a.next = 9
                                  break
                                }
                                if (
                                  !(
                                    (c = o.filter(function(e) {
                                      return 'error' in e
                                    })).length > 0
                                  )
                                ) {
                                  a.next = 8
                                  break
                                }
                                throw c[c.length - 1].error
                              case 8:
                                throw new Error(
                                  'Unexpected error. Please contact support: none of the calls threw an error'
                                )
                              case 9:
                                return (
                                  (s = i.call),
                                  (d = s.contract),
                                  (b = s.parameters),
                                  (v = b.methodName),
                                  (h = b.args),
                                  (g = b.value),
                                  (y = i.gasEstimate),
                                  a.abrupt(
                                    'return',
                                    d[v]
                                      .apply(
                                        d,
                                        Object(p.a)(h).concat([
                                          Object(f.a)(
                                            { gasLimit: ia(y) },
                                            g && !Bi(g) ? { value: g, from: r } : { from: r }
                                          )
                                        ])
                                      )
                                      .then(function(a) {
                                        var o = e.inputAmount.currency.symbol,
                                          i = e.outputAmount.currency.symbol,
                                          c = e.inputAmount.toSignificant(3),
                                          u = e.outputAmount.toSignificant(3),
                                          s = 'Swap '
                                            .concat(c, ' ')
                                            .concat(o, ' for ')
                                            .concat(u, ' ')
                                            .concat(i),
                                          d = m === r ? s : ''.concat(s, ' to ').concat(n && na(n) ? oa(n) : n),
                                          p = t === uc.v2 ? d : ''.concat(d, ' on ').concat(t.toUpperCase())
                                        return l(a, { summary: p }), a.hash
                                      })
                                      .catch(function(e) {
                                        throw 4001 === (null === e || void 0 === e ? void 0 : e.code)
                                          ? new Error('Transaction rejected.')
                                          : (console.error('Swap failed', e, v, h, g),
                                            new Error('Swap failed: '.concat(e.message)))
                                      })
                                  )
                                )
                              case 11:
                              case 'end':
                                return a.stop()
                            }
                        }, a)
                      })
                    )
                    return function() {
                      return a.apply(this, arguments)
                    }
                  })(),
                  error: null
                }
              },
              [e, c, r, i, m, n, u, l]
            )
          })(ue, F, H),
          Ge = Je.callback,
          Ke = Je.error,
          Ze = Vc(ue).priceImpactWithoutFee,
          _e = Er(),
          $e = Object(A.a)(_e, 1)[0],
          et = Object(o.useCallback)(
            function() {
              ;(Ze &&
                !(function(e) {
                  return e.lessThan(Ce)
                    ? !!e.lessThan(Te) ||
                        window.confirm(
                          'This swap has a price impact of at least '.concat(
                            Te.toFixed(0),
                            '%. Please confirm that you would like to continue with this swap.'
                          )
                        )
                    : 'confirm' ===
                        window.prompt(
                          'This swap has a price impact of at least '.concat(
                            Ce.toFixed(0),
                            '%. Please type the word "confirm" to continue with this swap.'
                          )
                        )
                })(Ze)) ||
                (Ge &&
                  (Ne({
                    attemptingTxn: !0,
                    tradeToConfirm: we,
                    showConfirm: Ae,
                    swapErrorMessage: void 0,
                    txHash: void 0
                  }),
                  Ge()
                    .then(function(e) {
                      var t, n, a, r
                      Ne({
                        attemptingTxn: !1,
                        tradeToConfirm: we,
                        showConfirm: Ae,
                        swapErrorMessage: void 0,
                        txHash: e
                      }),
                        s.a.event({
                          category: 'Swap',
                          action:
                            null === H
                              ? 'Swap w/o Send'
                              : (null !== oe && void 0 !== oe ? oe : H) === B
                              ? 'Swap w/o Send + recipient'
                              : 'Swap w/ Send',
                          label: [
                            null === ue ||
                            void 0 === ue ||
                            null === (t = ue.inputAmount) ||
                            void 0 === t ||
                            null === (n = t.currency) ||
                            void 0 === n
                              ? void 0
                              : n.symbol,
                            null === ue ||
                            void 0 === ue ||
                            null === (a = ue.outputAmount) ||
                            void 0 === a ||
                            null === (r = a.currency) ||
                            void 0 === r
                              ? void 0
                              : r.symbol,
                            Oc(ue)
                          ].join('/')
                        }),
                        s.a.event({
                          category: 'Routing',
                          action: $e ? 'Swap with multihop disabled' : 'Swap with multihop enabled'
                        })
                    })
                    .catch(function(e) {
                      Ne({
                        attemptingTxn: !1,
                        tradeToConfirm: we,
                        showConfirm: Ae,
                        swapErrorMessage: e.message,
                        txHash: void 0
                      })
                    })))
            },
            [Ze, Ge, we, Ae, H, oe, B, ue, $e]
          ),
          tt = Object(o.useState)(!1),
          nt = Object(A.a)(tt, 2),
          at = nt[0],
          rt = nt[1],
          ot = Hc(Ze),
          it = !_ && (Pe === _y.NOT_APPROVED || Pe === _y.PENDING || (Ve && Pe === _y.APPROVED)) && !(ot > 3 && !P),
          ct = Object(o.useCallback)(
            function() {
              Ne({ showConfirm: !1, tradeToConfirm: we, attemptingTxn: Ie, swapErrorMessage: ke, txHash: Se }),
                Se && be(Uc.INPUT, '')
            },
            [Ie, be, ke, we, Se]
          ),
          ut = Object(o.useCallback)(
            function() {
              Ne({ tradeToConfirm: ue, swapErrorMessage: ke, txHash: Se, attemptingTxn: Ie, showConfirm: Ae })
            },
            [Ie, Ae, ke, ue, Se]
          ),
          lt = Object(o.useCallback)(
            function(e) {
              Ye(!1), fe(Uc.INPUT, e)
            },
            [fe]
          ),
          st = Object(o.useCallback)(
            function() {
              Qe && be(Uc.INPUT, Qe.toExact())
            },
            [Qe, be]
          ),
          dt = Object(o.useCallback)(
            function(e) {
              return fe(Uc.OUTPUT, e)
            },
            [fe]
          ),
          mt = Bc(null === Z || void 0 === Z ? void 0 : Z.INPUT, null === Z || void 0 === Z ? void 0 : Z.OUTPUT)
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(dj, { isOpen: U.length > 0 && !C, tokens: U, onConfirm: N }),
          i.a.createElement(Yy, { active: 'swap' }),
          i.a.createElement(
            dE,
            null,
            i.a.createElement(vj, null),
            i.a.createElement(
              Am,
              { id: 'swap-page' },
              i.a.createElement(ZO, {
                isOpen: Ae,
                trade: ue,
                originalTrade: we,
                onAcceptChanges: ut,
                attemptingTxn: Ie,
                txHash: Se,
                recipient: H,
                allowedSlippage: F,
                onConfirm: et,
                swapErrorMessage: ke,
                onDismiss: ct
              }),
              i.a.createElement(
                bt,
                { gap: 'md' },
                i.a.createElement(Gg, {
                  label: V === Uc.OUTPUT && !re && ue ? 'From (estimated)' : 'From',
                  value: Re[Uc.INPUT],
                  showMaxButton: !Xe,
                  currency: Z[Uc.INPUT],
                  onUserInput: ye,
                  onMax: st,
                  onCurrencySelect: lt,
                  otherCurrency: Z[Uc.OUTPUT],
                  id: 'swap-currency-input'
                }),
                i.a.createElement(
                  bt,
                  { justify: 'space-between' },
                  i.a.createElement(
                    Ht,
                    { justify: P ? 'space-between' : 'center', style: { padding: '0 1rem' } },
                    i.a.createElement(
                      wm,
                      { clickable: !0 },
                      i.a.createElement(zO.a, {
                        size: '16',
                        onClick: function() {
                          Ye(!1), pe()
                        },
                        color: Z[Uc.INPUT] && Z[Uc.OUTPUT] ? L.primary1 : L.text2
                      })
                    ),
                    null === H && !re && P
                      ? i.a.createElement(
                          ao,
                          {
                            id: 'add-recipient-button',
                            onClick: function() {
                              return ve('')
                            }
                          },
                          '+ Add a send (optional)'
                        )
                      : null
                  )
                ),
                i.a.createElement(Gg, {
                  value: Re[Uc.OUTPUT],
                  onUserInput: Ee,
                  label: V === Uc.INPUT && !re && ue ? 'To (estimated)' : 'To',
                  showMaxButton: !1,
                  currency: Z[Uc.OUTPUT],
                  onCurrencySelect: dt,
                  otherCurrency: Z[Uc.INPUT],
                  id: 'swap-currency-output'
                }),
                null === H || re
                  ? null
                  : i.a.createElement(
                      i.a.Fragment,
                      null,
                      i.a.createElement(
                        Ht,
                        { justify: 'space-between', style: { padding: '0 1rem' } },
                        i.a.createElement(
                          wm,
                          { clickable: !1 },
                          i.a.createElement(zO.a, { size: '16', color: L.text2 })
                        ),
                        i.a.createElement(
                          ao,
                          {
                            id: 'remove-recipient-button',
                            onClick: function() {
                              return ve(null)
                            }
                          },
                          '- Remove send'
                        )
                      ),
                      i.a.createElement(Xi, { id: 'recipient', value: H, onChange: ve })
                    ),
                re
                  ? null
                  : i.a.createElement(
                      Eu,
                      { padding: re ? '.25rem 1rem 0 1rem' : '0px', borderRadius: '20px' },
                      i.a.createElement(
                        bt,
                        { gap: '8px', style: { padding: '0 16px' } },
                        Boolean(ue) &&
                          i.a.createElement(
                            Vt,
                            { align: 'center' },
                            i.a.createElement(Tr.b, { fontWeight: 500, fontSize: 14, color: L.text2 }, 'Price'),
                            i.a.createElement(sj, {
                              price: null === ue || void 0 === ue ? void 0 : ue.executionPrice,
                              showInverted: at,
                              setShowInverted: rt
                            })
                          ),
                        50 !== F &&
                          i.a.createElement(
                            Vt,
                            { align: 'center' },
                            i.a.createElement(
                              gE,
                              { fontWeight: 500, fontSize: 14, color: L.text2, onClick: z },
                              'Slippage Tolerance'
                            ),
                            i.a.createElement(
                              gE,
                              { fontWeight: 500, fontSize: 14, color: L.text2, onClick: z },
                              F / 100,
                              '%'
                            )
                          )
                      )
                    )
              ),
              i.a.createElement(
                Tm,
                null,
                mt
                  ? i.a.createElement(ii, { disabled: !0 }, i.a.createElement(No, { mb: '4px' }, 'Unsupported Asset'))
                  : B
                  ? re
                    ? i.a.createElement(
                        ii,
                        { disabled: Boolean(ae), onClick: ne },
                        null !== ae && void 0 !== ae ? ae : ee === fj.WRAP ? 'Wrap' : ee === fj.UNWRAP ? 'Unwrap' : null
                      )
                    : We && Be
                    ? i.a.createElement(
                        Ou,
                        { style: { textAlign: 'center' } },
                        i.a.createElement(No, { mb: '4px' }, 'Insufficient liquidity for this trade.'),
                        $e && i.a.createElement(No, { mb: '4px' }, 'Try enabling multi-hop trades.')
                      )
                    : it
                    ? i.a.createElement(
                        Vt,
                        null,
                        i.a.createElement(
                          pi,
                          {
                            onClick: De,
                            disabled: Pe !== _y.NOT_APPROVED || Ve,
                            width: '48%',
                            altDisabledStyle: Pe === _y.PENDING,
                            confirmed: Pe === _y.APPROVED
                          },
                          Pe === _y.PENDING
                            ? i.a.createElement(
                                Ht,
                                { gap: '6px', justify: 'center' },
                                'Approving ',
                                i.a.createElement(gl, { stroke: 'white' })
                              )
                            : Ve && Pe === _y.APPROVED
                            ? 'Approved'
                            : 'Approve ' + (null === (g = Z[Uc.INPUT]) || void 0 === g ? void 0 : g.symbol)
                        ),
                        i.a.createElement(
                          fi,
                          {
                            onClick: function() {
                              P
                                ? et()
                                : Ne({
                                    tradeToConfirm: ue,
                                    attemptingTxn: !1,
                                    swapErrorMessage: void 0,
                                    showConfirm: !0,
                                    txHash: void 0
                                  })
                            },
                            width: '48%',
                            id: 'swap-button',
                            disabled: !he || Pe !== _y.APPROVED || (ot > 3 && !P),
                            error: he && ot > 2
                          },
                          i.a.createElement(
                            Tr.b,
                            { fontSize: 16, fontWeight: 500 },
                            ot > 3 && !P ? 'Price Impact High' : 'Swap'.concat(ot > 2 ? ' Anyway' : '')
                          )
                        )
                      )
                    : i.a.createElement(
                        fi,
                        {
                          onClick: function() {
                            P
                              ? et()
                              : Ne({
                                  tradeToConfirm: ue,
                                  attemptingTxn: !1,
                                  swapErrorMessage: void 0,
                                  showConfirm: !0,
                                  txHash: void 0
                                })
                          },
                          id: 'swap-button',
                          disabled: !he || (ot > 3 && !P) || !!Ke,
                          error: he && ot > 2 && !Ke
                        },
                        i.a.createElement(
                          Tr.b,
                          { fontSize: 20, fontWeight: 500 },
                          _ || (ot > 3 && !P ? 'Price Impact Too High' : 'Swap'.concat(ot > 2 ? ' Anyway' : ''))
                        )
                      )
                  : i.a.createElement(ci, { onClick: W }, 'Connect Wallet'),
                it &&
                  i.a.createElement(
                    vt,
                    { style: { marginTop: '1rem' } },
                    i.a.createElement(px, { steps: [Pe === _y.APPROVED] })
                  ),
                P && ke ? i.a.createElement(Bm, { error: ke }) : null,
                se && !mt && ie === uc.v1
                  ? i.a.createElement(uj, { version: se })
                  : ie !== bc && le
                  ? i.a.createElement(lj, null)
                  : null
              )
            )
          ),
          mt
            ? i.a.createElement(CE, { show: mt, currencies: [Z.INPUT, Z.OUTPUT] })
            : i.a.createElement(ij, { trade: ue })
        )
      }
      function jj(e) {
        var t = e.location
        return i.a.createElement(Ye.a, { to: Object(f.a)(Object(f.a)({}, t), {}, { pathname: '/swap' }) })
      }
      function Aj(e) {
        var t = e.location.search,
          n = e.match.params.outputCurrency
        return i.a.createElement(Ye.a, {
          to: Object(f.a)(
            Object(f.a)({}, e.location),
            {},
            {
              pathname: '/swap',
              search: t && t.length > 1 ? ''.concat(t, '&outputCurrency=').concat(n) : '?outputCurrency='.concat(n)
            }
          )
        })
      }
      function wj(e) {
        var t = Object(d.c)()
        return (
          Object(o.useEffect)(
            function() {
              t(yn(bn.ADDRESS_CLAIM))
            },
            [t]
          ),
          i.a.createElement(jj, e)
        )
      }
      function kj() {
        var e = Object(Ve.a)([
          '\n  font-size: 0.825rem;\n  font-weight: 600;\n  padding: 0.5rem;\n  border-radius: 8px;\n  color: ',
          ';\n  border: 1px solid ',
          ';\n  width: fit-content;\n  justify-self: flex-end;\n  text-transform: uppercase;\n'
        ])
        return (
          (kj = function() {
            return e
          }),
          e
        )
      }
      var Tj = function(e, t) {
          switch (e) {
            case 'pending':
            case 'active':
              return t.blue1
            case 'succeeded':
              return t.green1
            case 'defeated':
              return t.red1
            case 'queued':
              return t.text3
            case 'executed':
              return t.green1
            case 'canceled':
            case 'expired':
            default:
              return t.text3
          }
        },
        Cj = He.default.span(
          kj(),
          function(e) {
            var t = e.status,
              n = e.theme
            return Tj(t, n)
          },
          function(e) {
            var t = e.status,
              n = e.theme
            return Tj(t, n)
          }
        ),
        Ij = n(103)
      function Sj() {
        for (
          var e = (function() {
              var e = Kn(Ya(), 'proposalCount')
              if (e.result && !e.loading) return parseInt(e.result[0])
            })(),
            t = Ya(),
            n = [],
            a = 1;
          a <= (null !== e && void 0 !== e ? e : 0);
          a++
        )
          n.push([a])
        var r = (function() {
            var e,
              t = Le().library,
              n = Object(o.useState)(),
              a = Object(A.a)(n, 2),
              r = a[0],
              i = a[1],
              c = Ya(),
              u = Object(f.a)(
                Object(f.a)(
                  {},
                  null === c || void 0 === c || null === (e = c.filters) || void 0 === e ? void 0 : e.ProposalCreated()
                ),
                {},
                { fromBlock: 0, toBlock: 'latest' }
              ),
              l = new Ij.ethers.utils.Interface(pa.a)
            return (
              Object(o.useEffect)(
                function() {
                  function e() {
                    return (e = Object(w.a)(
                      j.a.mark(function e() {
                        var n, a
                        return j.a.wrap(function(e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), null === t || void 0 === t ? void 0 : t.getLogs(u)
                              case 2:
                                ;(n = e.sent),
                                  (a =
                                    null === n || void 0 === n
                                      ? void 0
                                      : n
                                          .map(function(e) {
                                            var t = l.parseLog(e).args
                                            return {
                                              description: t.description,
                                              details: t.targets.map(function(e, n) {
                                                var a = t.signatures[n],
                                                  r = a.substr(0, a.length - 1).split('('),
                                                  o = Object(A.a)(r, 2),
                                                  i = o[0],
                                                  c = o[1],
                                                  u = t.calldatas[n]
                                                return {
                                                  target: e,
                                                  functionSig: i,
                                                  callData: Ij.utils.defaultAbiCoder.decode(c.split(','), u).join(', ')
                                                }
                                              })
                                            }
                                          })
                                          .reverse()),
                                  i(a)
                              case 5:
                              case 'end':
                                return e.stop()
                            }
                        }, e)
                      })
                    )).apply(this, arguments)
                  }
                  r ||
                    (function() {
                      e.apply(this, arguments)
                    })()
                },
                [l, u, t, r]
              ),
              r
            )
          })(),
          i = Jn(t, 'proposals', n),
          c = Jn(t, 'state', n)
        return r && i && c
          ? (i.reverse(),
            c.reverse(),
            i
              .filter(function(e, t) {
                var n
                return (
                  Boolean(e.result) && Boolean(null === (n = c[t]) || void 0 === n ? void 0 : n.result) && Boolean(r[t])
                )
              })
              .map(function(e, t) {
                var n,
                  a,
                  o,
                  u,
                  l,
                  s,
                  d,
                  m,
                  p,
                  f,
                  b,
                  v,
                  h,
                  g,
                  y,
                  E,
                  x,
                  O,
                  j = ee.get(i.length - t - 1) || r[t].description
                return {
                  id:
                    null === (n = i[t]) || void 0 === n || null === (a = n.result) || void 0 === a
                      ? void 0
                      : a.id.toString(),
                  title: (null === j || void 0 === j ? void 0 : j.split(/# |\n/g)[1]) || 'Untitled',
                  description: j || 'No description.',
                  proposer:
                    null === (o = i[t]) || void 0 === o || null === (u = o.result) || void 0 === u
                      ? void 0
                      : u.proposer,
                  status:
                    null !==
                      ((O =
                        null === (s = c[t]) || void 0 === s || null === (d = s.result) || void 0 === d ? void 0 : d[0]),
                      (l = ['pending', 'active', 'canceled', 'defeated', 'succeeded', 'queued', 'expired', 'executed'][
                        O
                      ])) && void 0 !== l
                      ? l
                      : 'Undetermined',
                  forCount: parseFloat(
                    Ij.ethers.utils.formatUnits(
                      null === (m = i[t]) || void 0 === m || null === (p = m.result) || void 0 === p
                        ? void 0
                        : p.forVotes.toString(),
                      18
                    )
                  ),
                  againstCount: parseFloat(
                    Ij.ethers.utils.formatUnits(
                      null === (f = i[t]) || void 0 === f || null === (b = f.result) || void 0 === b
                        ? void 0
                        : b.againstVotes.toString(),
                      18
                    )
                  ),
                  startBlock: parseInt(
                    null === (v = i[t]) ||
                      void 0 === v ||
                      null === (h = v.result) ||
                      void 0 === h ||
                      null === (g = h.startBlock) ||
                      void 0 === g
                      ? void 0
                      : g.toString()
                  ),
                  endBlock: parseInt(
                    null === (y = i[t]) ||
                      void 0 === y ||
                      null === (E = y.result) ||
                      void 0 === E ||
                      null === (x = E.endBlock) ||
                      void 0 === x
                      ? void 0
                      : x.toString()
                  ),
                  details: r[t].details
                }
              }))
          : []
      }
      function Nj() {
        var e,
          t = Le().account,
          n = Kn(Ha(), 'delegates', [null !== t && void 0 !== t ? t : void 0]).result
        return null !== (e = null === n || void 0 === n ? void 0 : n[0]) && void 0 !== e ? e : void 0
      }
      function Rj() {
        var e,
          t,
          n = Le(),
          a = n.account,
          r = n.chainId,
          o = Ha(),
          i = r ? de[r] : void 0,
          c =
            null === (e = Kn(o, 'getCurrentVotes', [null !== a && void 0 !== a ? a : void 0])) ||
            void 0 === e ||
            null === (t = e.result) ||
            void 0 === t
              ? void 0
              : t[0]
        return c && i ? new v.m(i, c) : void 0
      }
      function Uj() {
        var e = Object(Ve.a)(['\n  :hover {\n    cursor: pointer;\n  }\n'])
        return (
          (Uj = function() {
            return e
          }),
          e
        )
      }
      function Bj() {
        var e = Object(Ve.a)(['\n  :hover {\n    cursor: pointer;\n  }\n'])
        return (
          (Bj = function() {
            return e
          }),
          e
        )
      }
      function Lj() {
        var e = Object(Ve.a)(['\n  width: 100%;\n  padding: 24px;\n'])
        return (
          (Lj = function() {
            return e
          }),
          e
        )
      }
      var Wj = Object(He.default)(bt)(Lj()),
        zj = Object(He.default)(Cr.a)(Bj()),
        Mj = He.default.div(Uj())
      function Pj(e) {
        var t = e.isOpen,
          n = e.onDismiss,
          a = e.title,
          r = Le(),
          c = r.account,
          u = r.chainId,
          l = Object(o.useState)(!1),
          s = Object(A.a)(l, 2),
          d = s[0],
          m = s[1],
          p = Object(o.useState)(''),
          f = Object(A.a)(p, 2),
          b = f[0],
          v = f[1]
        var h = Mi(d ? b : c).address,
          g = uu(null !== c && void 0 !== c ? c : void 0, u ? de[u] : void 0),
          y = (function() {
            var e = Le(),
              t = e.account,
              n = e.chainId,
              a = e.library,
              r = Ei(),
              i = Ha()
            return Object(o.useCallback)(
              function(e) {
                var o
                if (a && n && t && Object(Ja.isAddress)(null !== e && void 0 !== e ? e : '')) {
                  var c = [e]
                  if (!i) throw new Error('No UNI Contract!')
                  return (o = i.estimateGas).delegate.apply(o, c.concat([{}])).then(function(e) {
                    return i.delegate.apply(i, c.concat([{ value: null, gasLimit: ia(e) }])).then(function(e) {
                      return r(e, { summary: 'Delegated votes' }), e.hash
                    })
                  })
                }
              },
              [t, r, n, a, i]
            )
          })(),
          E = Object(o.useState)(),
          x = Object(A.a)(E, 2),
          O = x[0],
          k = x[1],
          T = Object(o.useState)(!1),
          C = Object(A.a)(T, 2),
          I = C[0],
          S = C[1]
        function N() {
          k(void 0), S(!1), n()
        }
        function R() {
          return (R = Object(w.a)(
            j.a.mark(function e() {
              var t, n
              return j.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ((S(!0), y)) {
                        e.next = 3
                        break
                      }
                      return e.abrupt('return')
                    case 3:
                      return (
                        (e.next = 5),
                        null === (t = y(null !== h && void 0 !== h ? h : void 0)) || void 0 === t
                          ? void 0
                          : t.catch(function(e) {
                              S(!1), console.log(e)
                            })
                      )
                    case 5:
                      ;(n = e.sent) && k(n)
                    case 7:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )).apply(this, arguments)
        }
        return i.a.createElement(
          lt,
          { isOpen: t, onDismiss: N, maxHeight: 90 },
          !I &&
            !O &&
            i.a.createElement(
              Wj,
              { gap: 'lg' },
              i.a.createElement(
                bt,
                { gap: 'lg', justify: 'center' },
                i.a.createElement(
                  Vt,
                  null,
                  i.a.createElement(zo, { fontWeight: 500 }, a),
                  i.a.createElement(zj, { stroke: 'black', onClick: N })
                ),
                i.a.createElement(Lo, null, 'Earned UNI tokens represent voting shares in Uniswap governance.'),
                i.a.createElement(
                  Lo,
                  null,
                  'You can either vote on each proposal yourself or delegate your votes to a third party.'
                ),
                d &&
                  i.a.createElement(Xi, {
                    value: b,
                    onChange: function(e) {
                      v(e)
                    }
                  }),
                i.a.createElement(
                  ii,
                  {
                    disabled: !Object(Ja.isAddress)(null !== h && void 0 !== h ? h : ''),
                    onClick: function() {
                      return R.apply(this, arguments)
                    }
                  },
                  i.a.createElement(zo, { color: 'white' }, d ? 'Delegate Votes' : 'Self Delegate')
                ),
                i.a.createElement(
                  Mj,
                  {
                    onClick: function() {
                      return m(!d)
                    }
                  },
                  i.a.createElement(Do, null, d ? 'Remove' : 'Add', ' Delegate ', !d && '+')
                )
              )
            ),
          I &&
            !O &&
            i.a.createElement(
              gx,
              { onDismiss: N },
              i.a.createElement(
                bt,
                { gap: '12px', justify: 'center' },
                i.a.createElement(Wo, null, d ? 'Delegating votes' : 'Unlocking Votes'),
                i.a.createElement(No, { fontSize: 36 }, null === g || void 0 === g ? void 0 : g.toSignificant(4))
              )
            ),
          O &&
            i.a.createElement(
              yx,
              { onDismiss: N, hash: O },
              i.a.createElement(
                bt,
                { gap: '12px', justify: 'center' },
                i.a.createElement(Wo, null, 'Transaction Submitted'),
                i.a.createElement(No, { fontSize: 36 }, null === g || void 0 === g ? void 0 : g.toSignificant(4))
              )
            )
        )
      }
      function Dj() {
        var e = Object(Ve.a)([
          '\n  border: 1px solid ',
          ';\n  padding: 16px 12px;\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n'
        ])
        return (
          (Dj = function() {
            return e
          }),
          e
        )
      }
      function Fj() {
        var e = Object(Ve.a)(['\n  color: ', ';\n'])
        return (
          (Fj = function() {
            return e
          }),
          e
        )
      }
      function qj() {
        var e = Object(Ve.a)([
          '\n  border: 1px solid ',
          ';\n  padding: 2px 4px;\n  border-radius: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'
        ])
        return (
          (qj = function() {
            return e
          }),
          e
        )
      }
      function Vj() {
        var e = Object(Ve.a)([
          '\n  color: ',
          ';\n  :hover {\n    cursor: pointer;\n    text-decoration: underline;\n  }\n'
        ])
        return (
          (Vj = function() {
            return e
          }),
          e
        )
      }
      function Yj() {
        var e = Object(Ve.a)(['\n    flex-wrap: wrap;\n  \n  '])
        return (
          (Yj = function() {
            return e
          }),
          e
        )
      }
      function Hj() {
        var e = Object(Ve.a)(['\n  ', ';\n'])
        return (
          (Hj = function() {
            return e
          }),
          e
        )
      }
      function Qj() {
        var e = Object(Ve.a)([
          '\n  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #27ae60 0%, #000000 100%);\n  overflow: hidden;\n'
        ])
        return (
          (Qj = function() {
            return e
          }),
          e
        )
      }
      function Xj() {
        var e = Object(Ve.a)(['\n  font-weight: 600;\n'])
        return (
          (Xj = function() {
            return e
          }),
          e
        )
      }
      function Jj() {
        var e = Object(Ve.a)(['\n  opacity: 0.6;\n'])
        return (
          (Jj = function() {
            return e
          }),
          e
        )
      }
      function Gj() {
        var e = Object(Ve.a)([
          '\n  padding: 0.75rem 1rem;\n  width: 100%;\n  margin-top: 1rem;\n  border-radius: 12px;\n  display: grid;\n  grid-template-columns: 48px 1fr 120px;\n  align-items: center;\n  text-align: left;\n  outline: none;\n  cursor: pointer;\n  color: ',
          ';\n  text-decoration: none;\n  background-color: ',
          ';\n  &:focus {\n    background-color: ',
          ';\n  }\n  &:hover {\n    background-color: ',
          ';\n  }\n'
        ])
        return (
          (Gj = function() {
            return e
          }),
          e
        )
      }
      function Kj() {
        var e = Object(Ve.a)(['\n  max-width: 640px;\n  width: 100%;\n'])
        return (
          (Kj = function() {
            return e
          }),
          e
        )
      }
      function Zj() {
        var e = Object(Ve.a)([''])
        return (
          (Zj = function() {
            return e
          }),
          e
        )
      }
      var _j = Object(He.default)(bt)(Zj()),
        $j = Object(He.default)(bt)(Kj()),
        eA = Object(He.default)(Wt.Button)(
          Gj(),
          function(e) {
            return e.theme.text1
          },
          function(e) {
            return e.theme.bg1
          },
          function(e) {
            var t = e.theme
            return Object(Ke.a)(0.05, t.bg1)
          },
          function(e) {
            var t = e.theme
            return Object(Ke.a)(0.05, t.bg1)
          }
        ),
        tA = He.default.span(Jj()),
        nA = He.default.span(Xj()),
        aA = Object(He.default)(St)(Qj()),
        rA = Object(He.default)(Vt)(Hj(), function(e) {
          return e.theme.mediaWidth.upToSmall(Yj())
        }),
        oA = Object(He.default)(No)(Vj(), function(e) {
          return e.theme.primary1
        }),
        iA = He.default.div(qj(), function(e) {
          return e.theme.bg3
        }),
        cA = Object(He.default)(mo)(Fj(), function(e) {
          return e.theme.text1
        }),
        uA = He.default.div(Dj(), function(e) {
          return e.theme.text4
        })
      function lA() {
        var e = Le(),
          t = e.account,
          n = e.chainId,
          a = jn(bn.DELEGATE),
          r = In(),
          o = Sj(),
          c = Rj(),
          u = uu(null !== t && void 0 !== t ? t : void 0, n ? de[n] : void 0),
          l = Nj(),
          s = Boolean(u && v.f.notEqual(u.raw, v.f.BigInt(0)) && l === ne)
        return i.a.createElement(
          _j,
          { gap: 'lg', justify: 'center' },
          i.a.createElement(Pj, { isOpen: a, onDismiss: r, title: s ? 'Unlock Votes' : 'Update Delegation' }),
          i.a.createElement(
            $j,
            { gap: 'md' },
            i.a.createElement(
              aA,
              null,
              i.a.createElement(Nt, null),
              i.a.createElement(Ut, null),
              i.a.createElement(
                Bt,
                null,
                i.a.createElement(
                  bt,
                  { gap: 'md' },
                  i.a.createElement(Vt, null, i.a.createElement(Bo, { fontWeight: 600 }, 'Uniswap Governance')),
                  i.a.createElement(
                    Vt,
                    null,
                    i.a.createElement(
                      Bo,
                      { fontSize: 14 },
                      'UNI tokens represent voting shares in Uniswap governance. You can vote on each proposal yourself or delegate your votes to a third party.'
                    )
                  ),
                  i.a.createElement(
                    mo,
                    {
                      style: { color: 'white', textDecoration: 'underline' },
                      href: 'https://uniswap.org/blog/uni',
                      target: '_blank'
                    },
                    i.a.createElement(Bo, { fontSize: 14 }, 'Read more about Uniswap governance')
                  )
                )
              ),
              i.a.createElement(Nt, null),
              i.a.createElement(Ut, null)
            )
          ),
          i.a.createElement(
            $j,
            { gap: '2px' },
            i.a.createElement(
              rA,
              null,
              i.a.createElement(zo, { style: { margin: '0.5rem 0.5rem 0.5rem 0', flexShrink: 0 } }, 'Proposals'),
              (!o || 0 === o.length) && !c && i.a.createElement(gl, null),
              s
                ? i.a.createElement(
                    ii,
                    { style: { width: 'fit-content' }, padding: '8px', borderRadius: '8px', onClick: r },
                    'Unlock Voting'
                  )
                : c && v.f.notEqual(v.f.BigInt(0), null === c || void 0 === c ? void 0 : c.raw)
                ? i.a.createElement(
                    Lo,
                    { fontWeight: 500, mr: '6px' },
                    i.a.createElement(kx, { currencyAmount: c }),
                    ' Votes'
                  )
                : u && l && l !== ne && v.f.notEqual(v.f.BigInt(0), null === u || void 0 === u ? void 0 : u.raw)
                ? i.a.createElement(
                    Lo,
                    { fontWeight: 500, mr: '6px' },
                    i.a.createElement(kx, { currencyAmount: u }),
                    ' Votes'
                  )
                : ''
            ),
            !s &&
              i.a.createElement(
                Vt,
                null,
                i.a.createElement('div', null),
                l && l !== ne
                  ? i.a.createElement(
                      Qt,
                      null,
                      i.a.createElement(Lo, { fontWeight: 500, mr: '4px' }, 'Delegated to:'),
                      i.a.createElement(
                        iA,
                        null,
                        i.a.createElement(
                          cA,
                          { href: ra(v.a.MAINNET, l, 'address'), style: { margin: '0 4px' } },
                          l === t ? 'Self' : oa(l)
                        ),
                        i.a.createElement(oA, { onClick: r, style: { marginLeft: '4px' } }, '(edit)')
                      )
                    )
                  : ''
              ),
            0 === (null === o || void 0 === o ? void 0 : o.length) &&
              i.a.createElement(
                uA,
                null,
                i.a.createElement(Lo, { style: { marginBottom: '8px' } }, 'No proposals found.'),
                i.a.createElement(
                  Mo,
                  null,
                  i.a.createElement('i', null, 'Proposals submitted by community members will appear here.')
                )
              ),
            null === o || void 0 === o
              ? void 0
              : o.map(function(e, t) {
                  return i.a.createElement(
                    eA,
                    { as: m.b, to: '/vote/' + e.id, key: t },
                    i.a.createElement(tA, null, e.id),
                    i.a.createElement(nA, null, e.title),
                    i.a.createElement(Cj, { status: e.status }, e.status)
                  )
                })
          ),
          i.a.createElement(
            Mo,
            { color: 'text3' },
            'A minimum threshhold of 1% of the total UNI supply is required to submit proposals'
          )
        )
      }
      var sA = n(144),
        dA = n(229),
        mA = n.n(dA)
      function pA() {
        var e = Object(Ve.a)(['\n  padding: 60px 0;\n'])
        return (
          (pA = function() {
            return e
          }),
          e
        )
      }
      function fA() {
        var e = Object(Ve.a)(['\n  width: 100%;\n  padding: 24px;\n'])
        return (
          (fA = function() {
            return e
          }),
          e
        )
      }
      function bA() {
        var e = Object(Ve.a)(['\n  :hover {\n    cursor: pointer;\n  }\n'])
        return (
          (bA = function() {
            return e
          }),
          e
        )
      }
      function vA() {
        var e = Object(Ve.a)(['\n  width: 100%;\n  padding: 24px;\n'])
        return (
          (vA = function() {
            return e
          }),
          e
        )
      }
      var hA = Object(He.default)(bt)(vA()),
        gA = Object(He.default)(Cr.a)(bA()),
        yA = He.default.div(fA()),
        EA = Object(He.default)(ft)(pA())
      function xA(e) {
        var t = e.isOpen,
          n = e.onDismiss,
          a = e.proposalId,
          r = e.support,
          c = Le().chainId,
          u = (function() {
            var e = Le().account,
              t = Ya(),
              n = Ei()
            return {
              voteCallback: Object(o.useCallback)(
                function(a, r) {
                  var o
                  if (e && t && a) {
                    var i = [a, r]
                    return (o = t.estimateGas).castVote.apply(o, i.concat([{}])).then(function(e) {
                      return t.castVote.apply(t, i.concat([{ value: null, gasLimit: ia(e) }])).then(function(e) {
                        return (
                          n(e, { summary: 'Voted '.concat(r ? 'for ' : 'against', ' proposal ').concat(a) }), e.hash
                        )
                      })
                    })
                  }
                },
                [e, n, t]
              )
            }
          })().voteCallback,
          l = Rj(),
          s = Object(o.useState)(),
          d = Object(A.a)(s, 2),
          m = d[0],
          p = d[1],
          f = Object(o.useState)(!1),
          b = Object(A.a)(f, 2),
          v = b[0],
          h = b[1],
          g = Object(o.useContext)(He.ThemeContext)
        function y() {
          p(void 0), h(!1), n()
        }
        function E() {
          return (E = Object(w.a)(
            j.a.mark(function e() {
              var t, n
              return j.a.wrap(function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ((h(!0), u)) {
                        e.next = 3
                        break
                      }
                      return e.abrupt('return')
                    case 3:
                      return (
                        (e.next = 5),
                        null === (t = u(a, r)) || void 0 === t
                          ? void 0
                          : t.catch(function(e) {
                              h(!1), console.log(e)
                            })
                      )
                    case 5:
                      ;(n = e.sent) && p(n)
                    case 7:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            })
          )).apply(this, arguments)
        }
        return i.a.createElement(
          lt,
          { isOpen: t, onDismiss: y, maxHeight: 90 },
          !v &&
            !m &&
            i.a.createElement(
              hA,
              { gap: 'lg' },
              i.a.createElement(
                bt,
                { gap: 'lg', justify: 'center' },
                i.a.createElement(
                  Vt,
                  null,
                  i.a.createElement(
                    zo,
                    { fontWeight: 500 },
                    'Vote '.concat(r ? 'for ' : 'against', ' proposal ').concat(a)
                  ),
                  i.a.createElement(gA, { stroke: 'black', onClick: y })
                ),
                i.a.createElement(Wo, null, null === l || void 0 === l ? void 0 : l.toSignificant(4), ' Votes'),
                i.a.createElement(
                  ii,
                  {
                    onClick: function() {
                      return E.apply(this, arguments)
                    }
                  },
                  i.a.createElement(
                    zo,
                    { color: 'white' },
                    'Vote '.concat(r ? 'for ' : 'against', ' proposal  ').concat(a)
                  )
                )
              )
            ),
          v &&
            !m &&
            i.a.createElement(
              yA,
              null,
              i.a.createElement(Vt, null, i.a.createElement('div', null), i.a.createElement(gA, { onClick: y })),
              i.a.createElement(EA, null, i.a.createElement(go, { src: Ui.a, alt: 'loader', size: '90px' })),
              i.a.createElement(
                bt,
                { gap: '100px', justify: 'center' },
                i.a.createElement(
                  bt,
                  { gap: '12px', justify: 'center' },
                  i.a.createElement(Wo, null, 'Submitting Vote')
                ),
                i.a.createElement(Mo, null, 'Confirm this transaction in your wallet')
              )
            ),
          m &&
            i.a.createElement(
              yA,
              null,
              i.a.createElement(Vt, null, i.a.createElement('div', null), i.a.createElement(gA, { onClick: y })),
              i.a.createElement(EA, null, i.a.createElement(Zf.a, { strokeWidth: 0.5, size: 90, color: g.primary1 })),
              i.a.createElement(
                bt,
                { gap: '100px', justify: 'center' },
                i.a.createElement(
                  bt,
                  { gap: '12px', justify: 'center' },
                  i.a.createElement(Wo, null, 'Transaction Submitted')
                ),
                c &&
                  i.a.createElement(
                    mo,
                    { href: ra(c, m, 'transaction'), style: { marginLeft: '4px' } },
                    i.a.createElement(Mo, null, 'View transaction on scan.kbcfoundation.com')
                  )
              )
            )
        )
      }
      function OA() {
        var e = Object(Ve.a)(['\n  word-break: break-all;\n'])
        return (
          (OA = function() {
            return e
          }),
          e
        )
      }
      function jA() {
        var e = Object(Ve.a)(['\n  word-break: break-all;\n'])
        return (
          (jA = function() {
            return e
          }),
          e
        )
      }
      function AA() {
        var e = Object(Ve.a)(['\n    align-items: flex-start;\n    flex-direction: column;\n  '])
        return (
          (AA = function() {
            return e
          }),
          e
        )
      }
      function wA() {
        var e = Object(Ve.a)(['\n  ', ';\n'])
        return (
          (wA = function() {
            return e
          }),
          e
        )
      }
      function kA() {
        var e = Object(Ve.a)(['\n  max-width: 640px;\n  overflow: hidden;\n'])
        return (
          (kA = function() {
            return e
          }),
          e
        )
      }
      function TA() {
        var e = Object(Ve.a)(['\n  height: 4px;\n  border-radius: 4px;\n  background-color: ', ';\n  width: ', ';\n'])
        return (
          (TA = function() {
            return e
          }),
          e
        )
      }
      function CA() {
        var e = Object(Ve.a)([
          '\n  width: 100%;\n  margin-top: 1rem;\n  height: 4px;\n  border-radius: 4px;\n  background-color: ',
          ';\n  position: relative;\n'
        ])
        return (
          (CA = function() {
            return e
          }),
          e
        )
      }
      function IA() {
        var e = Object(Ve.a)([
          '\n  width: 100%;\n  background: none;\n  background-color: ',
          ';\n  height: fit-content;\n  z-index: 2;\n'
        ])
        return (
          (IA = function() {
            return e
          }),
          e
        )
      }
      function SA() {
        var e = Object(Ve.a)(['\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n  width: 100%;\n'])
        return (
          (SA = function() {
            return e
          }),
          e
        )
      }
      function NA() {
        var e = Object(Ve.a)([
          '\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  height: 24px;\n  color: ',
          ';\n\n  a {\n    color: ',
          ';\n    text-decoration: none;\n  }\n  :hover {\n    text-decoration: none;\n  }\n'
        ])
        return (
          (NA = function() {
            return e
          }),
          e
        )
      }
      function RA() {
        var e = Object(Ve.a)([
          '\n  border: 1px solid ',
          ';\n  border-radius: 12px;\n  padding: 1.5rem;\n  position: relative;\n  max-width: 640px;\n  width: 100%;\n'
        ])
        return (
          (RA = function() {
            return e
          }),
          e
        )
      }
      function UA() {
        var e = Object(Ve.a)(['\n  width: 100%;\n'])
        return (
          (UA = function() {
            return e
          }),
          e
        )
      }
      var BA = Object(He.default)(bt)(UA()),
        LA = Object(He.default)(bt)(RA(), function(e) {
          return e.theme.bg4
        }),
        WA = Object(He.default)(ro)(
          NA(),
          function(e) {
            return e.theme.text1
          },
          function(e) {
            return e.theme.text1
          }
        ),
        zA = He.default.div(SA()),
        MA = Object(He.default)(St)(IA(), function(e) {
          return e.theme.bg1
        }),
        PA = He.default.div(CA(), function(e) {
          return e.theme.bg3
        }),
        DA = He.default.div(
          TA(),
          function(e) {
            var t = e.theme
            return 'for' === e.status ? t.green1 : t.red1
          },
          function(e) {
            return e.percentageString
          }
        ),
        FA = He.default.div(kA()),
        qA = Object(He.default)(Vt)(wA(), function(e) {
          return e.theme.mediaWidth.upToSmall(AA())
        }),
        VA = He.default.div(jA()),
        YA = Object(He.default)(mo)(OA())
      function HA(e) {
        var t,
          n,
          a,
          r = e.match.params.id,
          c = Le(),
          u = c.chainId,
          l = c.account,
          s = (function(e) {
            var t = Sj()
            return null === t || void 0 === t
              ? void 0
              : t.find(function(t) {
                  return t.id === e
                })
          })(r),
          d = Object(o.useState)(!0),
          m = Object(A.a)(d, 2),
          p = m[0],
          f = m[1],
          b = jn(bn.VOTE),
          h = An(bn.VOTE),
          g = jn(bn.DELEGATE),
          y = In(),
          E = tu(),
          x = On(),
          O =
            s && E && x
              ? sA.DateTime.fromSeconds(E.add(Ij.BigNumber.from(13).mul(Ij.BigNumber.from(s.endBlock - x))).toNumber())
              : void 0,
          j = sA.DateTime.local(),
          w = s ? s.forCount + s.againstCount : void 0,
          k = s && w ? ((100 * s.forCount) / w).toFixed(0) + '%' : '0%',
          T = s && w ? ((100 * s.againstCount) / w).toFixed(0) + '%' : '0%',
          C = (function(e) {
            var t,
              n,
              a = Le(),
              r = a.account,
              o = a.chainId,
              i = Ha(),
              c = o ? de[o] : void 0,
              u =
                null ===
                  (t = Kn(i, 'getPriorVotes', [
                    null !== r && void 0 !== r ? r : void 0,
                    null !== e && void 0 !== e ? e : void 0
                  ])) ||
                void 0 === t ||
                null === (n = t.result) ||
                void 0 === n
                  ? void 0
                  : n[0]
            return u && c ? new v.m(c, u) : void 0
          })(null !== (t = null === s || void 0 === s ? void 0 : s.startBlock) && void 0 !== t ? t : void 0),
          I = C && v.f.greaterThan(C.raw, v.f.BigInt(0)) && s && 'active' === s.status,
          S = uu(null !== l && void 0 !== l ? l : void 0, u ? de[u] : void 0),
          N = Nj(),
          R = Boolean(S && v.f.notEqual(S.raw, v.f.BigInt(0)) && N === ne),
          U = function(e) {
            if (na(e) && u) {
              var t,
                n = null !== (t = me[e]) && void 0 !== t ? t : e
              return i.a.createElement(mo, { href: ra(u, e, 'address') }, n)
            }
            return i.a.createElement('span', null, e)
          }
        return i.a.createElement(
          BA,
          { gap: 'lg', justify: 'center' },
          i.a.createElement(xA, {
            isOpen: b,
            onDismiss: h,
            proposalId: null === s || void 0 === s ? void 0 : s.id,
            support: p
          }),
          i.a.createElement(Pj, { isOpen: g, onDismiss: y, title: 'Unlock Votes' }),
          i.a.createElement(
            LA,
            { gap: 'lg', justify: 'start' },
            i.a.createElement(
              Vt,
              { style: { width: '100%' } },
              i.a.createElement(WA, { to: '/vote' }, i.a.createElement(Nr.a, { size: 20 }), ' All Proposals'),
              s &&
                i.a.createElement(
                  Cj,
                  { status: null !== (n = null === s || void 0 === s ? void 0 : s.status) && void 0 !== n ? n : '' },
                  null === s || void 0 === s ? void 0 : s.status
                )
            ),
            i.a.createElement(
              bt,
              { gap: '10px', style: { width: '100%' } },
              i.a.createElement(
                Wo,
                { style: { marginBottom: '.5rem' } },
                null === s || void 0 === s ? void 0 : s.title
              ),
              i.a.createElement(
                Vt,
                null,
                i.a.createElement(
                  No,
                  null,
                  O && O < j
                    ? 'Voting ended ' + (O && O.toLocaleString(sA.DateTime.DATETIME_FULL))
                    : s
                    ? 'Voting ends approximately ' + (O && O.toLocaleString(sA.DateTime.DATETIME_FULL))
                    : ''
                )
              ),
              s &&
                'active' === s.status &&
                !I &&
                i.a.createElement(
                  Ou,
                  null,
                  i.a.createElement(
                    Uo,
                    null,
                    'Only UNI votes that were self delegated or delegated to another address before block',
                    ' ',
                    s.startBlock,
                    ' are eligible for voting.',
                    ' ',
                    R &&
                      i.a.createElement(
                        'span',
                        null,
                        i.a.createElement(ro, { to: '/vote' }, 'Unlock voting'),
                        ' to prepare for the next proposal.'
                      )
                  )
                )
            ),
            I
              ? i.a.createElement(
                  Qt,
                  { style: { width: '100%', gap: '12px' } },
                  i.a.createElement(
                    ii,
                    {
                      padding: '8px',
                      borderRadius: '8px',
                      onClick: function() {
                        f(!0), h()
                      }
                    },
                    'Vote For'
                  ),
                  i.a.createElement(
                    ii,
                    {
                      padding: '8px',
                      borderRadius: '8px',
                      onClick: function() {
                        f(!1), h()
                      }
                    },
                    'Vote Against'
                  )
                )
              : '',
            i.a.createElement(
              zA,
              null,
              i.a.createElement(
                MA,
                null,
                i.a.createElement(
                  Bt,
                  null,
                  i.a.createElement(
                    bt,
                    { gap: 'md' },
                    i.a.createElement(
                      qA,
                      null,
                      i.a.createElement(Uo, { fontWeight: 600 }, 'For'),
                      i.a.createElement(
                        Uo,
                        { fontWeight: 600 },
                        ' ',
                        null === s || void 0 === s
                          ? void 0
                          : s.forCount.toLocaleString(void 0, { maximumFractionDigits: 0 })
                      )
                    )
                  ),
                  i.a.createElement(PA, null, i.a.createElement(DA, { status: 'for', percentageString: k }))
                )
              ),
              i.a.createElement(
                MA,
                null,
                i.a.createElement(
                  Bt,
                  null,
                  i.a.createElement(
                    bt,
                    { gap: 'md' },
                    i.a.createElement(
                      qA,
                      null,
                      i.a.createElement(Uo, { fontWeight: 600 }, 'Against'),
                      i.a.createElement(
                        Uo,
                        { fontWeight: 600 },
                        null === s || void 0 === s
                          ? void 0
                          : s.againstCount.toLocaleString(void 0, { maximumFractionDigits: 0 })
                      )
                    )
                  ),
                  i.a.createElement(PA, null, i.a.createElement(DA, { status: 'against', percentageString: T }))
                )
              )
            ),
            i.a.createElement(
              bt,
              { gap: 'md' },
              i.a.createElement(zo, { fontWeight: 600 }, 'Details'),
              null === s || void 0 === s || null === (a = s.details) || void 0 === a
                ? void 0
                : a.map(function(e, t) {
                    return i.a.createElement(
                      VA,
                      { key: t },
                      t + 1,
                      ': ',
                      U(e.target),
                      '.',
                      e.functionSig,
                      '(',
                      e.callData.split(',').map(function(t, n) {
                        return i.a.createElement(
                          'span',
                          { key: n },
                          U(t),
                          e.callData.split(',').length - 1 === n ? '' : ','
                        )
                      }),
                      ')'
                    )
                  })
            ),
            i.a.createElement(
              bt,
              { gap: 'md' },
              i.a.createElement(zo, { fontWeight: 600 }, 'Description'),
              i.a.createElement(
                FA,
                null,
                i.a.createElement(mA.a, { source: null === s || void 0 === s ? void 0 : s.description })
              )
            ),
            i.a.createElement(
              bt,
              { gap: 'md' },
              i.a.createElement(zo, { fontWeight: 600 }, 'Proposer'),
              i.a.createElement(
                YA,
                {
                  href:
                    (null === s || void 0 === s ? void 0 : s.proposer) && u
                      ? ra(u, null === s || void 0 === s ? void 0 : s.proposer, 'address')
                      : ''
                },
                i.a.createElement(mA.a, { source: null === s || void 0 === s ? void 0 : s.proposer })
              )
            )
          )
        )
      }
      function QA() {
        var e = Object(Ve.a)(['\n  margin-top: 5rem;\n'])
        return (
          (QA = function() {
            return e
          }),
          e
        )
      }
      function XA() {
        var e = Object(Ve.a)(['\n    padding: 16px;\n    padding-top: 2rem;\n  '])
        return (
          (XA = function() {
            return e
          }),
          e
        )
      }
      function JA() {
        var e = Object(Ve.a)([
          '\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-top: 100px;\n  align-items: center;\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 10;\n\n  ',
          ';\n\n  z-index: 1;\n'
        ])
        return (
          (JA = function() {
            return e
          }),
          e
        )
      }
      function GA() {
        var e = Object(Ve.a)(['\n  ', '\n  width: 100%;\n  justify-content: space-between;\n'])
        return (
          (GA = function() {
            return e
          }),
          e
        )
      }
      function KA() {
        var e = Object(Ve.a)([
          '\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  overflow-x: hidden;\n'
        ])
        return (
          (KA = function() {
            return e
          }),
          e
        )
      }
      var ZA = He.default.div(KA()),
        _A = He.default.div(GA(), function(e) {
          return e.theme.flexRowNoWrap
        }),
        $A = He.default.div(JA(), function(e) {
          return e.theme.mediaWidth.upToSmall(XA())
        }),
        ew = He.default.div(QA())
      function tw() {
        var e = jn(bn.ADDRESS_CLAIM),
          t = An(bn.ADDRESS_CLAIM)
        return i.a.createElement(cc, { isOpen: e, onDismiss: t })
      }
      function nw() {
        return i.a.createElement(
          o.Suspense,
          { fallback: null },
          i.a.createElement(Ye.b, { component: Qe }),
          i.a.createElement(Ye.b, { component: Gf }),
          i.a.createElement(
            ZA,
            null,
            i.a.createElement(ef, null),
            i.a.createElement(_A, null, i.a.createElement(Pp, null)),
            i.a.createElement(
              $A,
              null,
              i.a.createElement(Vf, null),
              i.a.createElement(Gp, null),
              i.a.createElement(tw, null),
              i.a.createElement(
                Jf,
                null,
                i.a.createElement(
                  Ye.d,
                  null,
                  i.a.createElement(Ye.b, { exact: !0, strict: !0, path: '/swap', component: Oj }),
                  i.a.createElement(Ye.b, { exact: !0, strict: !0, path: '/claim', component: wj }),
                  i.a.createElement(Ye.b, { exact: !0, strict: !0, path: '/swap/:outputCurrency', component: Aj }),
                  i.a.createElement(Ye.b, { exact: !0, strict: !0, path: '/send', component: jj }),
                  i.a.createElement(Ye.b, { exact: !0, strict: !0, path: '/find', component: LO }),
                  i.a.createElement(Ye.b, { exact: !0, strict: !0, path: '/pool', component: BO }),
                  i.a.createElement(Ye.b, { exact: !0, strict: !0, path: '/uni', component: tx }),
                  i.a.createElement(Ye.b, { exact: !0, strict: !0, path: '/vote', component: lA }),
                  i.a.createElement(Ye.b, { exact: !0, strict: !0, path: '/create', component: SE }),
                  i.a.createElement(Ye.b, { exact: !0, path: '/add', component: IE }),
                  i.a.createElement(Ye.b, { exact: !0, path: '/add/:currencyIdA', component: RE }),
                  i.a.createElement(Ye.b, { exact: !0, path: '/add/:currencyIdA/:currencyIdB', component: UE }),
                  i.a.createElement(Ye.b, { exact: !0, path: '/create', component: IE }),
                  i.a.createElement(Ye.b, { exact: !0, path: '/create/:currencyIdA', component: RE }),
                  i.a.createElement(Ye.b, { exact: !0, path: '/create/:currencyIdA/:currencyIdB', component: UE }),
                  i.a.createElement(Ye.b, { exact: !0, strict: !0, path: '/remove/v1/:address', component: fO }),
                  i.a.createElement(Ye.b, { exact: !0, strict: !0, path: '/remove/:tokens', component: QO }),
                  i.a.createElement(Ye.b, {
                    exact: !0,
                    strict: !0,
                    path: '/remove/:currencyIdA/:currencyIdB',
                    component: YO
                  }),
                  i.a.createElement(Ye.b, { exact: !0, strict: !0, path: '/migrate/v1', component: eO }),
                  i.a.createElement(Ye.b, { exact: !0, strict: !0, path: '/migrate/v1/:address', component: uO }),
                  i.a.createElement(Ye.b, {
                    exact: !0,
                    strict: !0,
                    path: '/uni/:currencyIdA/:currencyIdB',
                    component: Zx
                  }),
                  i.a.createElement(Ye.b, { exact: !0, strict: !0, path: '/vote/:id', component: HA }),
                  i.a.createElement(Ye.b, { component: jj })
                )
              ),
              i.a.createElement(ew, null)
            )
          )
        )
      }
      var aw = n(230),
        rw = Object(hn.c)({ blockNumber: {}, popupList: [], openModal: null }, function(e) {
          return e
            .addCase(gn, function(e, t) {
              var n = t.payload,
                a = n.chainId,
                r = n.blockNumber
              'number' !== typeof e.blockNumber[a]
                ? (e.blockNumber[a] = r)
                : (e.blockNumber[a] = Math.max(r, e.blockNumber[a]))
            })
            .addCase(yn, function(e, t) {
              e.openModal = t.payload
            })
            .addCase(En, function(e, t) {
              var n = t.payload,
                a = n.content,
                r = n.key,
                o = n.removeAfterMs,
                i = void 0 === o ? 15e3 : o
              e.popupList = (r
                ? e.popupList.filter(function(e) {
                    return e.key !== r
                  })
                : e.popupList
              ).concat([{ key: r || Object(hn.e)(), show: !0, content: a, removeAfterMs: i }])
            })
            .addCase(xn, function(e, t) {
              var n = t.payload.key
              e.popupList.forEach(function(e) {
                e.key === n && (e.show = !1)
              })
            })
        }),
        ow = Object(hn.b)('global/updateVersion'),
        iw = function() {
          return new Date().getTime()
        }
      function cw(e, t) {
        return ''.concat(e, ';').concat(t)
      }
      var uw,
        lw = {
          userDarkMode: null,
          matchesDarkMode: !1,
          userExpertMode: !1,
          userSingleHopOnly: !1,
          userSlippageTolerance: 50,
          userDeadline: 1200,
          tokens: {},
          pairs: {},
          timestamp: iw(),
          URLWarningVisible: !0
        },
        sw = Object(hn.c)(lw, function(e) {
          return e
            .addCase(ow, function(e) {
              'number' !== typeof e.userSlippageTolerance && (e.userSlippageTolerance = 50),
                'number' !== typeof e.userDeadline && (e.userDeadline = 1200),
                (e.lastUpdateVersionTimestamp = iw())
            })
            .addCase(or, function(e, t) {
              ;(e.userDarkMode = t.payload.userDarkMode), (e.timestamp = iw())
            })
            .addCase(rr, function(e, t) {
              ;(e.matchesDarkMode = t.payload.matchesDarkMode), (e.timestamp = iw())
            })
            .addCase(ir, function(e, t) {
              ;(e.userExpertMode = t.payload.userExpertMode), (e.timestamp = iw())
            })
            .addCase(ur, function(e, t) {
              ;(e.userSlippageTolerance = t.payload.userSlippageTolerance), (e.timestamp = iw())
            })
            .addCase(lr, function(e, t) {
              ;(e.userDeadline = t.payload.userDeadline), (e.timestamp = iw())
            })
            .addCase(cr, function(e, t) {
              e.userSingleHopOnly = t.payload.userSingleHopOnly
            })
            .addCase(sr, function(e, t) {
              var n = t.payload.serializedToken
              ;(e.tokens[n.chainId] = e.tokens[n.chainId] || {}),
                (e.tokens[n.chainId][n.address] = n),
                (e.timestamp = iw())
            })
            .addCase(dr, function(e, t) {
              var n = t.payload,
                a = n.address,
                r = n.chainId
              ;(e.tokens[r] = e.tokens[r] || {}), delete e.tokens[r][a], (e.timestamp = iw())
            })
            .addCase(mr, function(e, t) {
              var n = t.payload.serializedPair
              if (n.token0.chainId === n.token1.chainId && n.token0.address !== n.token1.address) {
                var a = n.token0.chainId
                ;(e.pairs[a] = e.pairs[a] || {}), (e.pairs[a][cw(n.token0.address, n.token1.address)] = n)
              }
              e.timestamp = iw()
            })
            .addCase(pr, function(e, t) {
              var n = t.payload,
                a = n.chainId,
                r = n.tokenAAddress,
                o = n.tokenBAddress
              e.pairs[a] && (delete e.pairs[a][cw(r, o)], delete e.pairs[a][cw(o, r)]), (e.timestamp = iw())
            })
            .addCase(fr, function(e) {
              e.URLWarningVisible = !e.URLWarningVisible
            })
        }),
        dw = function() {
          return new Date().getTime()
        },
        mw = Object(hn.c)({}, function(e) {
          return e
            .addCase(vi, function(e, t) {
              var n,
                a,
                r = t.payload,
                o = r.chainId,
                i = r.from,
                c = r.hash,
                u = r.approval,
                l = r.summary,
                s = r.claim
              if (null === (n = e[o]) || void 0 === n ? void 0 : n[c])
                throw Error('Attempted to add existing transaction.')
              var d = null !== (a = e[o]) && void 0 !== a ? a : {}
              ;(d[c] = { hash: c, approval: u, summary: l, claim: s, from: i, addedTime: dw() }), (e[o] = d)
            })
            .addCase(hi, function(e, t) {
              var n = t.payload.chainId
              e[n] && (e[n] = {})
            })
            .addCase(yi, function(e, t) {
              var n,
                a = t.payload,
                r = a.chainId,
                o = a.hash,
                i = a.blockNumber,
                c = null === (n = e[r]) || void 0 === n ? void 0 : n[o]
              c &&
                (c.lastCheckedBlockNumber
                  ? (c.lastCheckedBlockNumber = Math.max(i, c.lastCheckedBlockNumber))
                  : (c.lastCheckedBlockNumber = i))
            })
            .addCase(gi, function(e, t) {
              var n,
                a = t.payload,
                r = a.hash,
                o = a.chainId,
                i = a.receipt,
                c = null === (n = e[o]) || void 0 === n ? void 0 : n[r]
              c && ((c.receipt = i), (c.confirmedTime = dw()))
            })
        }),
        pw =
          ((uw = { independentField: Uc.INPUT, typedValue: '' }),
          Object(b.a)(uw, Uc.INPUT, { currencyId: '' }),
          Object(b.a)(uw, Uc.OUTPUT, { currencyId: '' }),
          Object(b.a)(uw, 'recipient', null),
          uw),
        fw = Object(hn.c)(pw, function(e) {
          return e
            .addCase(Mc, function(e, t) {
              var n,
                a = t.payload,
                r = a.typedValue,
                o = a.recipient,
                i = a.field,
                c = a.inputCurrencyId,
                u = a.outputCurrencyId
              return (
                (n = {}),
                Object(b.a)(n, Uc.INPUT, { currencyId: c }),
                Object(b.a)(n, Uc.OUTPUT, { currencyId: u }),
                Object(b.a)(n, 'independentField', i),
                Object(b.a)(n, 'typedValue', r),
                Object(b.a)(n, 'recipient', o),
                n
              )
            })
            .addCase(Lc, function(e, t) {
              var n,
                a = t.payload,
                r = a.currencyId,
                o = a.field,
                i = o === Uc.INPUT ? Uc.OUTPUT : Uc.INPUT
              return r === e[i].currencyId
                ? Object(f.a)(
                    Object(f.a)({}, e),
                    {},
                    ((n = { independentField: e.independentField === Uc.INPUT ? Uc.OUTPUT : Uc.INPUT }),
                    Object(b.a)(n, o, { currencyId: r }),
                    Object(b.a)(n, i, { currencyId: e[o].currencyId }),
                    n)
                  )
                : Object(f.a)(Object(f.a)({}, e), {}, Object(b.a)({}, o, { currencyId: r }))
            })
            .addCase(Wc, function(e) {
              var t
              return Object(f.a)(
                Object(f.a)({}, e),
                {},
                ((t = { independentField: e.independentField === Uc.INPUT ? Uc.OUTPUT : Uc.INPUT }),
                Object(b.a)(t, Uc.INPUT, { currencyId: e[Uc.OUTPUT].currencyId }),
                Object(b.a)(t, Uc.OUTPUT, { currencyId: e[Uc.INPUT].currencyId }),
                t)
              )
            })
            .addCase(zc, function(e, t) {
              var n = t.payload,
                a = n.field,
                r = n.typedValue
              return Object(f.a)(Object(f.a)({}, e), {}, { independentField: a, typedValue: r })
            })
            .addCase(Pc, function(e, t) {
              var n = t.payload.recipient
              e.recipient = n
            })
        }),
        bw = { independentField: Ay.CURRENCY_A, typedValue: '', otherTypedValue: '' },
        vw = Object(hn.c)(bw, function(e) {
          return e
            .addCase(Ly, function() {
              return bw
            })
            .addCase(By, function(e, t) {
              var n = t.payload,
                a = n.field,
                r = n.typedValue
              return n.noLiquidity
                ? a === e.independentField
                  ? Object(f.a)(Object(f.a)({}, e), {}, { independentField: a, typedValue: r })
                  : Object(f.a)(
                      Object(f.a)({}, e),
                      {},
                      { independentField: a, typedValue: r, otherTypedValue: e.typedValue }
                    )
                : Object(f.a)(Object(f.a)({}, e), {}, { independentField: a, typedValue: r, otherTypedValue: '' })
            })
        }),
        hw = { error: null, current: null, loadingRequestId: null, pendingUpdate: null },
        gw = {
          lastInitializedDefaultListOfLists: _t,
          byUrl: Object(f.a)(
            {},
            _t.reduce(function(e, t) {
              return (e[t] = hw), e
            }, {})
          ),
          activeListUrls: $t
        },
        yw = Object(hn.c)(gw, function(e) {
          return e
            .addCase(nf.pending, function(e, t) {
              var n = t.payload,
                a = n.requestId,
                r = n.url
              e.byUrl[r] = Object(f.a)(
                Object(f.a)({ current: null, pendingUpdate: null }, e.byUrl[r]),
                {},
                { loadingRequestId: a, error: null }
              )
            })
            .addCase(nf.fulfilled, function(e, t) {
              var n,
                a,
                r = t.payload,
                o = r.requestId,
                i = r.tokenList,
                c = r.url,
                u = null === (n = e.byUrl[c]) || void 0 === n ? void 0 : n.current,
                l = null === (a = e.byUrl[c]) || void 0 === a ? void 0 : a.loadingRequestId
              if (u) {
                if (Object(tf.c)(u.version, i.version) === tf.a.NONE) return
                ;(null !== l && l !== o) ||
                  (e.byUrl[c] = Object(f.a)(
                    Object(f.a)({}, e.byUrl[c]),
                    {},
                    { loadingRequestId: null, error: null, current: u, pendingUpdate: i }
                  ))
              } else {
                var s
                if ($t.includes(c)) null === (s = e.activeListUrls) || void 0 === s || s.push(c)
                e.byUrl[c] = Object(f.a)(
                  Object(f.a)({}, e.byUrl[c]),
                  {},
                  { loadingRequestId: null, error: null, current: i, pendingUpdate: null }
                )
              }
            })
            .addCase(nf.rejected, function(e, t) {
              var n,
                a = t.payload,
                r = a.url,
                o = a.requestId,
                i = a.errorMessage
              ;(null === (n = e.byUrl[r]) || void 0 === n ? void 0 : n.loadingRequestId) === o &&
                (e.byUrl[r] = Object(f.a)(
                  Object(f.a)({}, e.byUrl[r]),
                  {},
                  { loadingRequestId: null, error: i, current: null, pendingUpdate: null }
                ))
            })
            .addCase(af, function(e, t) {
              var n = t.payload
              e.byUrl[n] || (e.byUrl[n] = hw)
            })
            .addCase(rf, function(e, t) {
              var n = t.payload
              e.byUrl[n] && delete e.byUrl[n],
                e.activeListUrls &&
                  e.activeListUrls.includes(n) &&
                  (e.activeListUrls = e.activeListUrls.filter(function(e) {
                    return e !== n
                  }))
            })
            .addCase(of, function(e, t) {
              var n = t.payload
              e.byUrl[n] || (e.byUrl[n] = hw),
                e.activeListUrls && !e.activeListUrls.includes(n) && e.activeListUrls.push(n),
                e.activeListUrls || (e.activeListUrls = [n])
            })
            .addCase(cf, function(e, t) {
              var n = t.payload
              e.activeListUrls &&
                e.activeListUrls.includes(n) &&
                (e.activeListUrls = e.activeListUrls.filter(function(e) {
                  return e !== n
                }))
            })
            .addCase(uf, function(e, t) {
              var n,
                a = t.payload
              if (!(null === (n = e.byUrl[a]) || void 0 === n ? void 0 : n.pendingUpdate))
                throw new Error('accept list update called without pending update')
              e.byUrl[a] = Object(f.a)(
                Object(f.a)({}, e.byUrl[a]),
                {},
                { pendingUpdate: null, current: e.byUrl[a].pendingUpdate }
              )
            })
            .addCase(ow, function(e) {
              if (e.lastInitializedDefaultListOfLists) {
                if (e.lastInitializedDefaultListOfLists) {
                  var t = e.lastInitializedDefaultListOfLists.reduce(function(e, t) {
                      return e.add(t)
                    }, new Set()),
                    n = _t.reduce(function(e, t) {
                      return e.add(t)
                    }, new Set())
                  _t.forEach(function(n) {
                    t.has(n) || (e.byUrl[n] = hw)
                  }),
                    e.lastInitializedDefaultListOfLists.forEach(function(t) {
                      n.has(t) || delete e.byUrl[t]
                    })
                }
              } else (e.byUrl = gw.byUrl), (e.activeListUrls = gw.activeListUrls)
              ;(e.lastInitializedDefaultListOfLists = _t),
                e.activeListUrls ||
                  ((e.activeListUrls = $t),
                  $t.map(function(t) {
                    return e.byUrl[t] || (e.byUrl[t] = hw), !0
                  }))
            })
        }),
        Ew = { independentField: PO.LIQUIDITY_PERCENT, typedValue: '0' },
        xw = Object(hn.c)(Ew, function(e) {
          return e.addCase(qO, function(e, t) {
            var n = t.payload,
              a = n.field,
              r = n.typedValue
            return Object(f.a)(Object(f.a)({}, e), {}, { independentField: a, typedValue: r })
          })
        }),
        Ow = Object(hn.c)({ callResults: {} }, function(e) {
          return e
            .addCase(Ln, function(e, t) {
              var n,
                a = t.payload,
                r = a.calls,
                o = a.chainId,
                i = a.options,
                c = (i = void 0 === i ? {} : i).blocksPerFetch,
                u = void 0 === c ? 1 : c,
                l = e.callListeners ? e.callListeners : (e.callListeners = {})
              ;(l[o] = null !== (n = l[o]) && void 0 !== n ? n : {}),
                r.forEach(function(e) {
                  var t,
                    n,
                    a = Un(e)
                  ;(l[o][a] = null !== (t = l[o][a]) && void 0 !== t ? t : {}),
                    (l[o][a][u] = (null !== (n = l[o][a][u]) && void 0 !== n ? n : 0) + 1)
                })
            })
            .addCase(Wn, function(e, t) {
              var n = t.payload,
                a = n.chainId,
                r = n.calls,
                o = n.options,
                i = (o = void 0 === o ? {} : o).blocksPerFetch,
                c = void 0 === i ? 1 : i,
                u = e.callListeners ? e.callListeners : (e.callListeners = {})
              u[a] &&
                r.forEach(function(e) {
                  var t = Un(e)
                  u[a][t] && u[a][t][c] && (1 === u[a][t][c] ? delete u[a][t][c] : u[a][t][c]--)
                })
            })
            .addCase(zn, function(e, t) {
              var n,
                a = t.payload,
                r = a.chainId,
                o = a.fetchingBlockNumber,
                i = a.calls
              ;(e.callResults[r] = null !== (n = e.callResults[r]) && void 0 !== n ? n : {}),
                i.forEach(function(t) {
                  var n = Un(t),
                    a = e.callResults[r][n]
                  if (a) {
                    var i
                    if ((null !== (i = a.fetchingBlockNumber) && void 0 !== i ? i : 0) >= o) return
                    e.callResults[r][n].fetchingBlockNumber = o
                  } else e.callResults[r][n] = { fetchingBlockNumber: o }
                })
            })
            .addCase(Mn, function(e, t) {
              var n,
                a = t.payload,
                r = a.fetchingBlockNumber,
                o = a.chainId,
                i = a.calls
              ;(e.callResults[o] = null !== (n = e.callResults[o]) && void 0 !== n ? n : {}),
                i.forEach(function(t) {
                  var n = Un(t),
                    a = e.callResults[o][n]
                  a &&
                    a.fetchingBlockNumber === r &&
                    (delete a.fetchingBlockNumber, (a.data = null), (a.blockNumber = r))
                })
            })
            .addCase(Pn, function(e, t) {
              var n,
                a = t.payload,
                r = a.chainId,
                o = a.results,
                i = a.blockNumber
              ;(e.callResults[r] = null !== (n = e.callResults[r]) && void 0 !== n ? n : {}),
                Object.keys(o).forEach(function(t) {
                  var n,
                    a = e.callResults[r][t]
                  ;(null !== (n = null === a || void 0 === a ? void 0 : a.blockNumber) && void 0 !== n ? n : 0) > i ||
                    (e.callResults[r][t] = { data: o[t], blockNumber: i })
                })
            })
        }),
        jw = ['user', 'transactions', 'lists'],
        Aw = Object(hn.a)({
          reducer: {
            application: rw,
            user: sw,
            transactions: mw,
            swap: fw,
            mint: vw,
            burn: xw,
            multicall: Ow,
            lists: yw
          },
          middleware: [].concat(Object(p.a)(Object(hn.d)({ thunk: !1 })), [Object(aw.save)({ states: jw })]),
          preloadedState: Object(aw.load)({ states: jw })
        })
      Aw.dispatch(ow())
      var ww = Aw,
        kw = 'visibilityState' in document
      function Tw() {
        return !kw || 'hidden' !== document.visibilityState
      }
      function Cw() {
        var e = Object(o.useState)(Tw()),
          t = Object(A.a)(e, 2),
          n = t[0],
          a = t[1],
          r = Object(o.useCallback)(
            function() {
              a(Tw())
            },
            [a]
          )
        return (
          Object(o.useEffect)(
            function() {
              if (kw)
                return (
                  document.addEventListener('visibilitychange', r),
                  function() {
                    document.removeEventListener('visibilitychange', r)
                  }
                )
            },
            [r]
          ),
          n
        )
      }
      function Iw() {
        var e = Le(),
          t = e.library,
          n = e.chainId,
          a = Object(d.c)(),
          r = Cw(),
          i = Object(o.useState)({ chainId: n, blockNumber: null }),
          c = Object(A.a)(i, 2),
          u = c[0],
          l = c[1],
          s = Object(o.useCallback)(
            function(e) {
              l(function(t) {
                return n === t.chainId
                  ? 'number' !== typeof t.blockNumber
                    ? { chainId: n, blockNumber: e }
                    : { chainId: n, blockNumber: Math.max(e, t.blockNumber) }
                  : t
              })
            },
            [n, l]
          )
        Object(o.useEffect)(
          function() {
            if (t && n && r)
              return (
                l({ chainId: n, blockNumber: null }),
                t
                  .getBlockNumber()
                  .then(s)
                  .catch(function(e) {
                    return console.error('Failed to get block number for chainId: '.concat(n), e)
                  }),
                t.on('block', s),
                function() {
                  t.removeListener('block', s)
                }
              )
          },
          [a, n, t, s, r]
        )
        var m = Li(u, 100)
        return (
          Object(o.useEffect)(
            function() {
              m.chainId && m.blockNumber && r && a(gn({ chainId: m.chainId, blockNumber: m.blockNumber }))
            },
            [r, a, m.blockNumber, m.chainId]
          ),
          null
        )
      }
      function Sw() {
        var e = Le().library,
          t = Object(d.c)(),
          n = Cw(),
          a = ln(),
          r = mn()
        Za()
        var i = hh()
        return (
          bb(
            Object(o.useCallback)(
              function() {
                n &&
                  Object.keys(a).forEach(function(e) {
                    return i(e).catch(function(e) {
                      return console.debug('interval list fetching error', e)
                    })
                  })
              },
              [i, n, a]
            ),
            e ? 6e5 : null
          ),
          Object(o.useEffect)(
            function() {
              Object.keys(a).forEach(function(e) {
                var t = a[e]
                t.current ||
                  t.loadingRequestId ||
                  t.error ||
                  i(e).catch(function(e) {
                    return console.debug('list added fetching error', e)
                  })
              })
            },
            [t, i, e, a]
          ),
          Object(o.useEffect)(
            function() {
              Object.keys(a).forEach(function(e) {
                var n = a[e]
                if (n.current && n.pendingUpdate) {
                  var r = Object(tf.c)(n.current.version, n.pendingUpdate.version)
                  switch (r) {
                    case tf.a.NONE:
                      throw new Error('unexpected no version bump')
                    case tf.a.PATCH:
                    case tf.a.MINOR:
                      r >= Object(tf.d)(n.current.tokens, n.pendingUpdate.tokens)
                        ? t(uf(e))
                        : console.error(
                            'List at url '.concat(
                              e,
                              ' could not automatically update because the version bump was only PATCH/MINOR while the update had breaking changes and should have been MAJOR'
                            )
                          )
                      break
                    case tf.a.MAJOR:
                      t(uf(e))
                  }
                }
              })
            },
            [t, a, r]
          ),
          null
        )
      }
      function Nw(e, t) {
        return (
          (n = e + Math.round(Math.random() * Math.max(0, t - e))),
          new Promise(function(e) {
            return setTimeout(e, n)
          })
        )
        var n
      }
      var Rw = (function(e) {
          Object(C.a)(n, e)
          var t = Object(I.a)(n)
          function n() {
            return Object(k.a)(this, n), t.call(this, 'Cancelled')
          }
          return n
        })(Object(B.a)(Error)),
        Uw = (function(e) {
          Object(C.a)(n, e)
          var t = Object(I.a)(n)
          function n() {
            return Object(k.a)(this, n), t.apply(this, arguments)
          }
          return n
        })(Object(B.a)(Error))
      function Bw() {
        return (Bw = Object(w.a)(
          j.a.mark(function e(t, n, a) {
            var r, o, i, c
            return j.a.wrap(
              function(e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        console.debug('Fetching chunk', t, n, a),
                        (e.prev = 1),
                        (e.next = 5),
                        t.aggregate(
                          n.map(function(e) {
                            return [e.address, e.callData]
                          })
                        )
                      )
                    case 5:
                      ;(i = e.sent), (c = Object(A.a)(i, 2)), (r = c[0]), (o = c[1]), (e.next = 15)
                      break
                    case 11:
                      throw ((e.prev = 11),
                      (e.t0 = e.catch(1)),
                      console.debug('Failed to fetch chunk inside retry', e.t0),
                      e.t0)
                    case 15:
                      if (!(r.toNumber() < a)) {
                        e.next = 18
                        break
                      }
                      throw (console.debug(
                        'Fetched results for old block number: '.concat(r.toString(), ' vs. ').concat(a)
                      ),
                      new Uw('Fetched for old block number'))
                    case 18:
                      return e.abrupt('return', { results: o, blockNumber: r.toNumber() })
                    case 19:
                    case 'end':
                      return e.stop()
                  }
              },
              e,
              null,
              [[1, 11]]
            )
          })
        )).apply(this, arguments)
      }
      function Lw() {
        var e = Object(d.c)(),
          t = Object(d.d)(function(e) {
            return e.multicall
          }),
          n = Li(t.callListeners, 100),
          a = On(),
          r = Le().chainId,
          i = qa(),
          c = Object(o.useRef)(),
          u = Object(o.useMemo)(
            function() {
              return (function(e, t) {
                if (!e || !t) return {}
                var n = e[t]
                return n
                  ? Object.keys(n).reduce(function(e, t) {
                      var a = n[t]
                      return (
                        (e[t] = Object.keys(a)
                          .filter(function(e) {
                            var t = parseInt(e)
                            return !(t <= 0) && a[t] > 0
                          })
                          .reduce(function(e, t) {
                            return Math.min(e, parseInt(t))
                          }, 1 / 0)),
                        e
                      )
                    }, {})
                  : {}
              })(n, r)
            },
            [n, r]
          ),
          l = Object(o.useMemo)(
            function() {
              return (function(e, t, n, a) {
                return n && a
                  ? e[n]
                    ? Object.keys(t).filter(function(r) {
                        var o = t[r],
                          i = e[n][r]
                        if (!i) return !0
                        var c = a - (o - 1)
                        return (
                          !(i.fetchingBlockNumber && i.fetchingBlockNumber >= c) &&
                          (!i.blockNumber || i.blockNumber < c)
                        )
                      })
                    : Object.keys(t)
                  : []
              })(t.callResults, u, r, a)
            },
            [r, t.callResults, u, a]
          ),
          s = Object(o.useMemo)(
            function() {
              return JSON.stringify(l.sort())
            },
            [l]
          )
        return (
          Object(o.useEffect)(
            function() {
              var t
              if (a && r && i) {
                var n = JSON.parse(s)
                if (0 !== n.length) {
                  var o,
                    u,
                    l = n.map(function(e) {
                      return Bn(e)
                    }),
                    d = (function(e, t) {
                      if (t < 1) throw new Error('maxChunkSize must be gte 1')
                      if (e.length <= t) return [e]
                      var n = Math.ceil(e.length / t),
                        a = Math.ceil(e.length / n)
                      return Object(p.a)(Array(n).keys()).map(function(t) {
                        return e.slice(t * a, t * a + a)
                      })
                    })(l, 500)
                  if ((null === (t = c.current) || void 0 === t ? void 0 : t.blockNumber) !== a)
                    null === (o = c.current) ||
                      void 0 === o ||
                      null === (u = o.cancellations) ||
                      void 0 === u ||
                      u.forEach(function(e) {
                        return e()
                      })
                  e(zn({ calls: l, chainId: r, fetchingBlockNumber: a })),
                    (c.current = {
                      blockNumber: a,
                      cancellations: d.map(function(t, o) {
                        var u = (function(e, t) {
                            var n,
                              a = t.n,
                              r = t.minWait,
                              o = t.maxWait,
                              i = !1
                            return {
                              promise: new Promise(
                                (function() {
                                  var t = Object(w.a)(
                                    j.a.mark(function t(c, u) {
                                      var l
                                      return j.a.wrap(
                                        function(t) {
                                          for (;;)
                                            switch ((t.prev = t.next)) {
                                              case 0:
                                                n = u
                                              case 1:
                                                return (l = void 0), (t.prev = 3), (t.next = 6), e()
                                              case 6:
                                                return (l = t.sent), i || (c(l), (i = !0)), t.abrupt('break', 24)
                                              case 11:
                                                if (((t.prev = 11), (t.t0 = t.catch(3)), !i)) {
                                                  t.next = 15
                                                  break
                                                }
                                                return t.abrupt('break', 24)
                                              case 15:
                                                if (!(a <= 0) && t.t0 instanceof Uw) {
                                                  t.next = 19
                                                  break
                                                }
                                                return u(t.t0), (i = !0), t.abrupt('break', 24)
                                              case 19:
                                                a--
                                              case 20:
                                                return (t.next = 22), Nw(r, o)
                                              case 22:
                                                t.next = 1
                                                break
                                              case 24:
                                              case 'end':
                                                return t.stop()
                                            }
                                        },
                                        t,
                                        null,
                                        [[3, 11]]
                                      )
                                    })
                                  )
                                  return function(e, n) {
                                    return t.apply(this, arguments)
                                  }
                                })()
                              ),
                              cancel: function() {
                                i || ((i = !0), n(new Rw()))
                              }
                            }
                          })(
                            function() {
                              return (function(e, t, n) {
                                return Bw.apply(this, arguments)
                              })(i, t, a)
                            },
                            { n: 1, minWait: 6e17, maxWait: 6e35 }
                          ),
                          l = u.cancel
                        return (
                          u.promise
                            .then(function(t) {
                              var i = t.results,
                                u = t.blockNumber
                              c.current = { cancellations: [], blockNumber: a }
                              var l = d.slice(0, o).reduce(function(e, t) {
                                  return e + t.length
                                }, 0),
                                s = l + i.length
                              e(
                                Pn({
                                  chainId: r,
                                  results: n.slice(l, s).reduce(function(e, t, n) {
                                    var a
                                    return (e[t] = null !== (a = i[n]) && void 0 !== a ? a : null), e
                                  }, {}),
                                  blockNumber: u
                                })
                              )
                            })
                            .catch(function(n) {
                              n instanceof Rw
                                ? console.debug('Cancelled fetch for blockNumber', a)
                                : (console.error('Failed to fetch multicall chunk', t, r, n),
                                  e(Mn({ calls: t, chainId: r, fetchingBlockNumber: a })))
                            }),
                          l
                        )
                      })
                    })
                }
              }
            },
            [r, i, e, s, a]
          ),
          null
        )
      }
      function Ww() {
        var e,
          t = Le(),
          n = t.chainId,
          a = t.library,
          r = On(),
          i = Object(d.c)(),
          c = Object(d.d)(function(e) {
            return e.transactions
          }),
          u = n && null !== (e = c[n]) && void 0 !== e ? e : {},
          l = (function() {
            var e = Object(d.c)()
            return Object(o.useCallback)(
              function(t, n) {
                e(En({ content: t, key: n }))
              },
              [e]
            )
          })()
        return (
          Object(o.useEffect)(
            function() {
              n &&
                a &&
                r &&
                Object.keys(u)
                  .filter(function(e) {
                    return (function(e, t) {
                      if (t.receipt) return !1
                      if (!t.lastCheckedBlockNumber) return !0
                      var n = e - t.lastCheckedBlockNumber
                      if (n < 1) return !1
                      var a = (new Date().getTime() - t.addedTime) / 1e3 / 60
                      return a > 60 ? n > 9 : !(a > 5) || n > 2
                    })(r, u[e])
                  })
                  .forEach(function(e) {
                    a.getTransactionReceipt(e)
                      .then(function(t) {
                        var a
                        t
                          ? (i(
                              gi({
                                chainId: n,
                                hash: e,
                                receipt: {
                                  blockHash: t.blockHash,
                                  blockNumber: t.blockNumber,
                                  contractAddress: t.contractAddress,
                                  from: t.from,
                                  status: t.status,
                                  to: t.to,
                                  transactionHash: t.transactionHash,
                                  transactionIndex: t.transactionIndex
                                }
                              })
                            ),
                            l(
                              {
                                txn: {
                                  hash: e,
                                  success: 1 === t.status,
                                  summary: null === (a = u[e]) || void 0 === a ? void 0 : a.summary
                                }
                              },
                              e
                            ))
                          : i(yi({ chainId: n, hash: e, blockNumber: r }))
                      })
                      .catch(function(t) {
                        console.error('failed to check transaction hash: '.concat(e), t)
                      })
                  })
            },
            [n, a, u, r, i, l]
          ),
          null
        )
      }
      function zw() {
        var e = Object(d.c)()
        return (
          Object(o.useEffect)(
            function() {
              var t,
                n = function(t) {
                  e(rr({ matchesDarkMode: t.matches }))
                },
                a = null === (t = window) || void 0 === t ? void 0 : t.matchMedia('(prefers-color-scheme: dark)')
              return (
                e(rr({ matchesDarkMode: a.matches })),
                (null === a || void 0 === a
                ? void 0
                : a.addListener)
                  ? null === a || void 0 === a || a.addListener(n)
                  : (null === a || void 0 === a ? void 0 : a.addEventListener) &&
                    (null === a || void 0 === a || a.addEventListener('change', n)),
                function() {
                  ;(null === a || void 0 === a
                  ? void 0
                  : a.removeListener)
                    ? null === a || void 0 === a || a.removeListener(n)
                    : (null === a || void 0 === a ? void 0 : a.removeEventListener) &&
                      (null === a || void 0 === a || a.removeEventListener('change', n))
                }
              )
            },
            [e]
          ),
          null
        )
      }
      function Mw(e) {
        var t = new h.a(e, 'any')
        return (t.pollingInterval = 15e3), t
      }
      var Pw = Object(r.c)('NETWORK')
      window.ethereum && (window.ethereum.autoRefreshOnNetworkChange = !1)
      function Dw() {
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(Sw, null),
          i.a.createElement(zw, null),
          i.a.createElement(Iw, null),
          i.a.createElement(Ww, null),
          i.a.createElement(Lw, null)
        )
      }
      s.a.initialize('UA-128182339-4'),
        s.a.set({
          customBrowserType: c.isMobile
            ? 'web3' in window || 'ethereum' in window
              ? 'mobileWeb3'
              : 'mobileRegular'
            : 'desktop'
        }),
        window.addEventListener('error', function(e) {
          s.a.exception({
            description: ''
              .concat(e.message, ' @ ')
              .concat(e.filename, ':')
              .concat(e.lineno, ':')
              .concat(e.colno),
            fatal: !0
          })
        }),
        l.a.render(
          i.a.createElement(
            o.StrictMode,
            null,
            i.a.createElement(Yo, null),
            i.a.createElement(
              r.b,
              { getLibrary: Mw },
              i.a.createElement(
                Pw,
                { getLibrary: Mw },
                i.a.createElement(
                  We,
                  null,
                  i.a.createElement(
                    d.a,
                    { store: ww },
                    i.a.createElement(Dw, null),
                    i.a.createElement(
                      Io,
                      null,
                      i.a.createElement(Ho, null),
                      i.a.createElement(m.a, null, i.a.createElement(nw, null))
                    )
                  )
                )
              )
            )
          ),
          document.getElementById('root')
        )
    },
    75: function(e, t, n) {
      e.exports = n.p + 'static/media/blue-loader.904b44c2.svg'
    },
    87: function(e, t) {
      e.exports =
        'data:image/png;base64,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'
    }
  },
  [[365, 3, 4]]
])
//# sourceMappingURL=main.d76fcd1a.chunk.js.map
