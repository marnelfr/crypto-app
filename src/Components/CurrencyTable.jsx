import React, { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { loadData } from "../Hooks/Axios"
import { CurrencyRow } from "./CurrencyRow"

const loadCurrencyRowFromData = (data, filter, setState, handleShowDetails) => {
  let rows = data.flatMap(currency => {
    if(
      currency.name.toLowerCase().indexOf(filter) >= 0 || 
      currency.symbol.toLowerCase().indexOf(filter) >= 0
    ) {
      return [<CurrencyRow
        key={currency.id} 
        currency={currency} 
        showDetails={handleShowDetails} 
      />]
    }
    return []
  })
  if(rows.length) return rows

  loadData('https://api.coincap.io/v2/assets?search=' + filter + '&limit=5&order=rank', setState)
}

export default function CurrencyTable({data, setState, filter}) {
  const navigate = useNavigate()

  const handleShowDetails = useCallback(function(id) {
    navigate('/currency/' + id)
  }, [navigate])

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
        {loadCurrencyRowFromData(data, filter, setState, handleShowDetails)}
      </tbody>
    </table>
  )
}