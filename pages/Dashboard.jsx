const { useEffect, useState } = React
const {useSelector} = ReactRedux

import {Chart} from '../cmps/Chart.jsx'
import { todoService } from '../services/todo.service.js'

export function Dashboard() {
    const user = useSelector(storeState => storeState.useModule.loggedInUser)
    const prefs = user && user.prefs || {}

    const [todos, setTodos] = useState([])
    const [importanceStats, setImportanceStats] = useState([])

    useEffect(()=>{
        todoService.query()
            .then(setTodos)
        todoService.getImportanceStats()
            .then(setImportanceStats)
    }, [])


    return (
        <section className="dashboard" style={{ backgroundColor: prefs.backgroundcolor, color: prefs.color }}>
            <h1>Dashboard</h1>
            <h2>Statistics for {todos.length} Todos</h2>
            <hr />
            <h4>By Importance</h4>
            <Chart data={importanceStats}/>
        </section>
    )
}