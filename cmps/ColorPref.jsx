

export function ColorPref({onSetPref, backgroundColor, color}) {

    const colors = [
        '#F44236',
        '#9C27B0',
        '#3F51B5',
        '#2196F3',
        '#4caf50',
        '#101010',
    ]

    console.log('backgroundcolor: ', backgroundColor);
    console.log('color: ', color);
    
    

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
        // setUserToEdit(prevUser => ({ ...prevUser, [field]: value }))
    }

    function onSetColor(backgroundColor, color) {
        onSetPref({ 
            backgroundColor: backgroundColor,
            color: color
         })
    }

    return (
        <section className="color-pref">
            <div>
                <label htmlFor="bgColor">BG Color: </label>
                <select value={backgroundColor} onChange={(e) => onSetPref({ backgroundColor: e.target.value })}
                    id="bgColor" name="bgColor">
                    {colors.map(color => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </select>  
            </div>

            <div>
                <label htmlFor="color">Color: </label>
                <select value={color} onChange={(e) => onSetPref({ color: e.target.value })}
                    id="color" name="color">
                    {colors.map(color => (
                        <option key={color} value={color}>
                            {color}
                        </option>
                    ))}
                </select>            
            </div>

        </section>
    )
}