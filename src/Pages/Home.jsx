import axios from 'axios';
import { memo, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Container } from '../Components/Container';
import { CurrencyRow } from '../Components/CurrencyRow';
import CurrencyTable from '../Components/CurrencyTable';
import Filter from '../Components/Filter';
import Loader from '../Components/Loader';
import { useAxios, loadData } from '../Hooks/Axios';


const MemoContainer = memo(Container)
const MemoLoader = memo(Loader)

const loadCurrencyRowFromData = (data, filter, handleShowDetails) => {
  return data.map(currency => {
    if(
      currency.name.toLowerCase().indexOf(filter) >= 0 || 
      currency.symbol.toLowerCase().indexOf(filter) >= 0
    ) {
      return <CurrencyRow 
        key={currency.id} 
        currency={currency} 
        showDetails={handleShowDetails} 
      />
    }
    return null
  })
}

export function Home() {
  const title = 'Crypto Currency Info',
    navigate = useNavigate(),
    [state, setState] = useAxios('https://api.coincap.io/v2/assets?limit=5'),
    [filter, setFilter] = useState('')

  const refreshData = useCallback((e) => {
    e.preventDefault()
    loadData('https://api.coincap.io/v2/assets?limit=5', setState)
  }, [setState])

  const handleShowDetails = useCallback(function(id) {
    navigate('/currency/' + id)
  }, [navigate])

  const filterCurrency = useCallback((keyword) => {
    setFilter(keyword)
  }, [setFilter])

  if(state.loading) return <MemoLoader title={title} />

  return (
    <MemoContainer title={title}>

      <Filter onChange={filterCurrency} />
      
      <CurrencyTable currencyRows={loadCurrencyRowFromData(state.data, filter, handleShowDetails)} />
      
      <div className="text-center">
        <button onClick={refreshData} className="btn btn-outline-primary">
          Refresh
        </button>
      </div>
    </MemoContainer>
  )
}