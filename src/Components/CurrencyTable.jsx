import React from "react"

export default function CurrencyTable({currencyRows}) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th className="text-center">Symbol</th>
          <th>Current Price</th>
          <th className="text-center">VWAP 24Hr</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {currencyRows}
      </tbody>
    </table>
  )
}