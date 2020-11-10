import React, { useState, useContext, useEffect, useRef} from "react"
import { ClientContext } from "../clients/ClientProvider"
import { Header } from "semantic-ui-react"
import { LineGraph } from "./LineGraph"
import format from 'date-fns/format'
import Chart from "chart.js"

export const AnalyticsList = () => {
    const { singleClient, getClientById } = useContext(ClientContext)
    const [ happinessData, setHappinessData ] = useState(null)
    const [ happinessDateData, setHappinessDateData ] = useState()

    const lineGraph = useRef(null)
    const client = +sessionStorage.getItem("activeClient")
    const clientName = sessionStorage.getItem("clientName")

    useEffect(() => {
        getClientById(client)
      }, [])
    
      useEffect(() => {
        if( lineGraph.current && happinessData?.length > 0) {
            new Chart(lineGraph.current, LineGraph(happinessData, happinessDateData))
        }
      }, [happinessData])
      
    const testArray = singleClient.testResults
    const happinessArray = []
    const happinessDateArray = []

    if (testArray !== undefined) {
        if (testArray.length > 0 && happinessData === null) {
            testArray.forEach(test => {
            happinessArray.push(test.happiness_test)
            happinessDateArray.push(format(new Date(test.date), 'Pp'))
        }) 
        console.log(happinessArray)
        setHappinessData(happinessArray)
        setHappinessDateData(happinessDateArray)
    }
}
    
    

console.log(testArray)
    return (
        <main>
            <Header as="h2">{clientName}'s Analytics</Header>
            <div className="graph">
                <canvas ref={lineGraph} id="line-chart" width="800" height="450"></canvas>
            </div>
        </main>
    )
}