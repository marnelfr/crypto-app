import { useCallback } from "react"

export function CurrencyRow({currency, showDetails}) {

  const handleClick = useCallback(() => {
    showDetails(currency.id)
  }, [currency, showDetails])

  return <tr>
    <td>{currency.rank}</td>
    <td>{currency.name}</td>
    <td className="text-center">{currency.symbol}</td>
    <td>${Math.round(currency.priceUsd * 1000) / 1000}</td>
    <td className="text-center">{currency.changePercent24Hr < 0 ? <span className="badge badge-danger">Down</span> : <span className="badge badge-success">Up</span>}</td>
    <td className="text-right">
      <button onClick={handleClick} className="btn btn-sm btn-outline-primary">More details</button>
    </td>
  </tr>
}