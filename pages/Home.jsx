import { ToggleButton } from "../cmps/ToggleButton.jsx"
const {useSelector} = ReactRedux


const { useState } = React

export function Home() {
    const user = useSelector(storeState => storeState.useModule.loggedInUser)
    const prefs = user && user.prefs || {}
    
    const [isOn, setIsOn] = useState(false)

    return (
        <section className="home" style={{ backgroundColor: prefs.backgroundcolor, color: prefs.color }}>
            <h1>Todo's R Us!</h1>
            <ToggleButton val={isOn} setVal={setIsOn} />
            {isOn && <img src="../assets/img/todo.png" alt="" />}
        </section>
    )
}