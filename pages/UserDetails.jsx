const {useSelector} = ReactRedux
const { useState, useEffect } = React


import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"
import { changeBGcolor, changeColor, saveUser } from "../store/actions/user.actions.js"
import {ColorPref} from "../cmps/ColorPref.jsx"




export function UserDetails(){
    const user = useSelector(storeState => storeState.useModule.loggedInUser)
    const bgColor= useSelector(storeState => storeState.useModule.backgroundcolor)
    const color= useSelector(storeState => storeState.useModule.color)
    const [userToEdit, setUserToEdit] = useState(user)

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value || ''
                break

            case 'checkbox':
                value = target.checked
                break

            default: break
        }
        setUserToEdit(prevUser => ({ ...prevUser, [field]: value }))
    }

    function onEditUser(ev) {
        ev.preventDefault()
        saveUser(userToEdit)
            .then(()=> showSuccessMsg('Full name changed!'))
            .catch(err => showErrorMsg('Had issues saving user'))
    }


    function onSetBGcolor(BGcolor){
        changeBGcolor(BGcolor, user)
            .then((saveBGcolor) => showSuccessMsg('backgroundcolor changed!'))
            .catch(err => showErrorMsg('Cannot change BGcolor'))

    }

    function onSetColor(color){
        changeColor(color, user)
            .then((saveColor) => showSuccessMsg('Color changed!'))
            .catch(err => showErrorMsg('Cannot change color'))
    }


    return(
        <section className="user-details" style={{ backgroundColor: bgColor, color: color }}>
            <h2>Profile</h2>
            <form onSubmit={onEditUser} >
                <div>
                    <label htmlFor="fullname">Name: </label>
                    <input value={userToEdit.fullname || ''} onChange={handleChange}
                        type="search" id="fullname" name="fullname"
                    />
                </div>

                <button >Save</button>
            </form>

            <h1>Preferences:</h1>
            <ColorPref onSetColor={onSetColor} onSetBGcolor={onSetBGcolor} backgroundColor={bgColor} color={color} />
        </section>


    )
}