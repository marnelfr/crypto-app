import { memo, useCallback, useState } from 'react';
import { Container } from '../Components/Container';
import CurrencyTable from '../Components/CurrencyTable';
import Filter from '../Components/Filter';
import Loader from '../Components/Loader';
import { useAxios, loadData } from '../Hooks/Axios';


const MemoContainer = memo(Container)
const MemoLoader = memo(Loader)

export function Home() {
  const title = 'Crypto Currency Info',
    [state, setState] = useAxios('https://api.coincap.io/v2/assets?limit=15&order=rank'),
    [filter, setFilter] = useState('')

  const refreshData = useCallback((e) => {
    e.preventDefault()
    loadData('https://api.coincap.io/v2/assets?limit=15&order=rank', setState)
  }, [setState])

  const filterCurrency = useCallback((keyword) => {
    setFilter(keyword)
  }, [setFilter])

  if(state.loading) return <MemoLoader title={title} />

  return (
    <MemoContainer title={title}>
      <Filter onChange={filterCurrency} />
      
      <CurrencyTable data={state.data} setState={setState} filter={filter} />
      
      <div className="text-center pb-3">
        <button onClick={refreshData} className="btn btn-outline-primary">
          Refresh
        </button>
      </div>
    </MemoContainer>
  )
}