// eslint-disable-next-line quotes

/* eslint-disable no-undef */
const getTokens = async () => {
  axios({
    url: `/me/transfers/native/${chain}/${address}`,
    method: 'GET',
    onDownloadProgress: progressEvent => {
      const dataChunk = progressEvent.currentTarget.response
      // console.log(dataChunk)
      const data = dataChunk.split('\r\n')
      console.log(data)
      const tx = JSON.parse(data[data.length - 2])
      $('#native-transactions').append(`
      <tr>
      <td>
        <p class="text-center text-xs font-weight-bold mb-0">${tx.timestamp}</p>
      </td>
      <td>
        <a href="${explorerLink}/address/${tx.fromAddress}" class="text-center text-primary text-xs font-weight-bold mb-0">${tx.fromAddress}</a>
      </td>

      <td class="align-middle text-center">
        <a href="${explorerLink}/address/${tx.toAddress}" class="text-primary text-xs font-weight-bold">${tx.toAddress}</a>
      </td>
      <td class="align-middle text-center text-sm">
        <span class="badge badge-sm bg-gradient-success">${tx.amount}</span>
      </td>
      <td class="align-middle text-center">
        <a href="${explorerLink}/tx/${tx.transactionHash}" class="text-primary text-xs font-weight-bold">${tx.transactionHash}</a>
      </td>
    </tr>
      `)
    }

  }).then(({ data }) => {
    console.log(data)
  })

  // const xhr = new XMLHttpRequest()
  // xhr.open('GET', `/me/transfers/tx/${chain}/${address}`)
  // xhr.send()
  // xhr.onprogress = function (event) { // triggers periodically
  //   // event.loaded - how many bytes downloaded
  //   // event.lengthComputable = true if the server sent Content-Length header
  //   // event.total - total number of bytes (if lengthComputable)
  //   console.log(event.currentTarget.response)
  // }
}

getTokens()
