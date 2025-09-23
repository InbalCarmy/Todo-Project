import { ToggleButton } from "../cmps/ToggleButton.jsx"
const {useSelector} = ReactRedux


const { useState } = React

export function Home() {
    const bgColor= useSelector(storeState => storeState.useModule.backgroundcolor)
    const color= useSelector(storeState => storeState.useModule.color)
    
    const [isOn, setIsOn] = useState(false)

    return (
        <section className="home" style={{ backgroundColor: bgColor, color: color }}>
            <h1>Todo's R Us!</h1>
            <ToggleButton val={isOn} setVal={setIsOn} />
            {isOn && <img src="../assets/img/todo.png" alt="" />}
        </section>
    )
}