import axios from 'axios'
import { useEffect, useState } from 'react';

export function loadData(url = 'https://api.coincap.io/v2/assets?limit=15&order=rank', action) {
  axios.get(url).then(response => {
    if(response.status === 200) {
      action(({loading: false, data: response.data.data}))
    } else {
      action(state => ({...state, loading: false}))
    }
  })
}

export function useAxios(url) {
  const [state, setState] = useState({loading: true, data: []})
  useEffect(() => {
    loadData(url, setState)
  }, [url])

  return [state, setState]
}