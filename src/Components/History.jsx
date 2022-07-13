import { useEffect, useMemo } from "react";
import { useAxios } from "../Hooks/Axios";
import { useCallback } from "react";
import {CanvasJSChart} from 'canvasjs-react-charts'




export default function History({currencyId}) {
  const [state, setState] = useAxios('https://api.coincap.io/v2/assets/' + currencyId + '/history?interval=d1')

  useEffect(() => {
    // const { datasets } = refs.chart.chartInstance.data
    // console.log(datasets[0].data); 
  })

  const handleClick = useCallback(() => {
    setState(1)
  }, [setState])

  const options = useMemo(() => ({
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1", // "light1", "dark1", "dark2"
    title:{
      text: ""
    },
    axisY: {
      title: "Price",
      prefix: '$'
    },
    axisX: {
      title: "Timeline"
    },
    data: [{
      type: "line",
      toolTipContent: "Price {x}: ${y}",
      dataPoints: state.data.map(datum => ({x: new Date(datum.time), y: (datum.priceUsd*1).toFixed(2)*1}))
    }]
  }), [state])

  if(state.loading) return <div className="col-12 my-4">
    <p className="text-center">Loading the history graph...</p>
  </div>
  
  return <div className="col-12 my-4">
    <header className="text-center">
      <h4 className="mb-4" onClick={handleClick}>History Graph</h4>
    </header>
    <CanvasJSChart options={options} />
    <pre>
     {JSON.stringify(options.data.dataPoints, undefined, 2)}
    </pre>
  </div>
}