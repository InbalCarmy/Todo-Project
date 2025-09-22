const {useSelector} = ReactRedux
const { useState, useEffect } = React


import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"
import { saveUser } from "../store/actions/user.actions.js"
import {ColorPref} from "../cmps/ColorPref.jsx"




export function UserDetails(){

    const [prefs, setPrefs] = useState({
        backgroundColor: 'white',
        color: 'black'
    })
    const user = useSelector(storeState => storeState.useModule.loggedInUser)
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

    function onSetPref(newPref){
        setPrefs(prevPrefs => ({...prevPrefs, ...newPref}))
    }


    return(
        <section className="user-details" style={{ backgroundColor: prefs.backgroundColor, color: prefs.color }}>
            <h2>Profile</h2>
            <form onSubmit={onEditUser} >
                <div>
                    <label htmlFor="fullname">Name: </label>
                    <input value={userToEdit.fullname || ''} onChange={handleChange}
                        type="search" id="fullname" name="fullname"
                    />
                </div>

                {/* <h1>Preferences:</h1>
                <ColorPref onSetPref={onSetPref} {...prefs} /> */}
                <button >Save</button>
            </form>

            <h1>Preferences:</h1>
            <ColorPref onSetPref={onSetPref} {...prefs} />
        </section>


    )
}