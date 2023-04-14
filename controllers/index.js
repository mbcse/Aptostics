
export const dashboard = async (req, res) => {
  console.log('Request Recieved')
  const address = req.params.address
  const chain = 'APTOS'
  const balanceData = await getBalance(chain, address)
  const tokenData = await getTokens(chain, address)
  const nftData = await getNFTs(chain, address)
  const transfersData = await getTransfersData(chain, address)
  console.log(transfersData)
  res.render('dashboard', { title: 'Dashboard', balanceData, tokenData, nftData, transfersData, userAddress: address, chain: 'APTOS' })
}

export const profile = async (req, res) => {
  res.render('dashboard/profile', { title: 'profile' })
}

export const nft = async (req, res) => {
  const address = req.params.address
  const chain = 'APTOS'
  const nftData = await getNFTs(chain, address)
  const explorerLink = await getChainExplorerLink(chain)
  res.render('dashboard/nft', { title: 'nft', nftData, userAddress: address, chain: 'APTOS', explorerLink })
}

export const token = async (req, res) => {
  const address = req.params.address
  const chain = 'APTOS'
  const tokenData = await getTokens(chain, address)
  const explorerLink = await getChainExplorerLink(chain)
  res.render('dashboard/token', { title: 'token', tokenData, userAddress: address, chain: 'APTOS', explorerLink })
}

export const nftTransfers = async (req, res) => {
  const address = req.params.address
  const chain = req.params.chain
  // const nftTransfers = await getNftTransfers(chain, address)
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Transfer-Encoding', 'chunked')
  req.on('close', () => {
    res.end()
    console.log('Connection closed')
  })
  await getNftTransfers(chain, address, res)
  res.end()
}

export const tokenTransfers = async (req, res) => {
  const address = req.params.address
  const chain = 'APTOS'
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Transfer-Encoding', 'chunked')
  req.on('close', () => {
    res.end()
    console.log('Connection closed')
  })
  await getTokenTransfers(chain, address, res)
  res.end()
}

export const nativeTransactions = async (req, res) => {
  const address = req.params.address
  const chain = 'APTOS'
  // const nftTransfers = await getNftTransfers(chain, address)
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Transfer-Encoding', 'chunked')
  req.on('close', () => {
    res.end()
    console.log('Connection closed')
  })
  await getNativeTransactions(chain, address, res)
  res.end()
}

export const landing = async (req, res) => {
  res.render('landing', { title: 'Landing' })
}

export const transactions = async (req, res) => {
  const address = req.params.address
  const chain = 'APTOS'
  const explorerLink = await getChainExplorerLink(chain)
  res.render('dashboard/native', { title: 'Transactions', userAddress: address, chain: 'APTOS', explorerLink })
}

