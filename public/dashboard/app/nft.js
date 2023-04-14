// eslint-disable-next-line quotes

/* eslint-disable no-undef */
const getTokens = async () => {
  axios({
    url: `/me/transfers/nft/${chain}/${address}`,
    method: 'GET',
    onDownloadProgress: progressEvent => {
      const dataChunk = progressEvent.currentTarget.response
      // console.log(dataChunk)
      const data = dataChunk.split('\r\n')
      console.log(data)
      const nft = JSON.parse(data[data.length - 2])
      $('#nft-transfers').append(`
      <tr>
      <td class="align-middle text-center text-sm">
        <p class="badge badge-sm bg-gradient-${nft.type === 'Sent' ? 'danger' : 'success'}">${nft.type}</p>
      </td>
      <td>
        <p class="text-center text-xs font-weight-bold mb-0">${nft.tokenId}</p>
      </td>
      <td>
        <p class="text-center text-xs font-weight-bold mb-0">${nft.name}</p>
      </td>

      <td class="align-middle text-center">
        <span class="text-secondary text-xs font-weight-bold">${nft.symbol}</span>
      </td>
      <td>
        <span class="text-center text-xs font-weight-bold mb-0 text-warning">${nft.contractType}</span>
      </td>
      <td class="align-middle text-center">
        <a href="${explorerLink}/address/${nft.tokenAddress}" class="text-primary text-xs font-weight-bold">${nft.tokenAddress}</a>
      </td>
      <td class="align-middle text-center">
        <a href="${explorerLink}/address/${nft.fromAddress}" class="text-primary text-xs font-weight-bold">${nft.fromAddress}</a>
      </td>
      <td class="align-middle text-center">
        <a href="${explorerLink}/address/${nft.toAddress}" class="text-primary text-xs font-weight-bold">${nft.toAddress}</a>
      </td>
      <td class="align-middle text-center">
        <span class="text-secondary text-xs font-weight-bold">${nft.amount}</span>
      </td>
      <td class="align-middle text-center">
        <a href="${explorerLink}/tx/${nft.transactionHash}" class="text-primary class="text-secondary text-xs font-weight-bold">${nft.transactionHash}</a>
      </td>
    </tr>
      `)
    }

  }).then(({ data }) => {
    console.log(data)
  })

  // const xhr = new XMLHttpRequest()
  // xhr.open('GET', `/me/transfers/nft/${chain}/${address}`)
  // xhr.send()
  // xhr.onprogress = function (event) { // triggers periodically
  //   // event.loaded - how many bytes downloaded
  //   // event.lengthComputable = true if the server sent Content-Length header
  //   // event.total - total number of bytes (if lengthComputable)
  //   console.log(event.currentTarget.response)
  // }
}

getTokens()
