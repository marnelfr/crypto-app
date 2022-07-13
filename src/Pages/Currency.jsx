import { useCallback, memo } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../Components/Loader';
import { Container } from '../Components/Container';
import { useAxios } from '../Hooks/Axios';
import History from '../Components/History';

const MemoContainer = memo(Container)
const MemoLoader = memo(Loader)


export function Currency() {
  const { currencyId } = useParams()
    ,[state, setState] = useAxios('https://api.coincap.io/v2/assets/' + currencyId),
    navigate = useNavigate()

  const handleClick = useCallback(function(e) {
    e.preventDefault()
    navigate('/')
  }, [navigate])

  const clickHandler = useCallback((e) => {
    setState('1')
  }, [setState])

  if(state.loading) return <MemoLoader title='Crypto' />
  const data = state.data


  return (
    <MemoContainer title={data.name}>
      <h4 className='text-center mt-4'>Information</h4>
      <table className="table mt-4">
        <tbody>
          <tr onClick={clickHandler}>
            <th>Name</th>
            <td>{data.name}</td>
          </tr>
          <tr>
            <th>Rank</th>
            <td>{data.rank}</td>
          </tr>
          <tr>
            <th>Symbol</th>
            <td>{data.symbol}</td>
          </tr>
          <tr>
            <th>Supply</th>
            <td>{parseInt(data.supply)}</td>
          </tr>
          <tr>
            <th>Max Supply</th>
            <td>{parseInt(data.maxSupply)}</td>
          </tr>
          <tr>
            <th>Market Cap USD</th>
            <td>{parseFloat(data.marketCapUsd).toFixed(2)}</td>
          </tr>
          <tr>
            <th>Volume USD 24Hr</th>
            <td>{parseFloat(data.volumeUsd24Hr).toFixed(2)}</td>
          </tr>
          <tr>
            <th>Price</th>
            <td>${parseFloat(data.priceUsd).toFixed(2)}</td>
          </tr>
          <tr>
            <th>Change Percent 24Hr</th>
            <td>{parseFloat(data.changePercent24Hr).toFixed(2)}%</td>
          </tr>
          <tr>
            <th>VWAP 24Hr</th>
            <td>{parseFloat(data.vwap24Hr).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <div className="row">
        <History currencyId={data.id} />
      </div>

      <div className="row">
        <div className="col-12 text-center mt-2 mb-4">
          <span className='border border-info rounded rounded-pill p-2 hand' onClick={handleClick}>Back to the homepage</span>
        </div>
      </div>
    </MemoContainer>
  )
}