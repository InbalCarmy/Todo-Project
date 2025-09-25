
export function ColorPref({onSetBGcolor, onSetColor , backgroundColor = 'white', color= 'black'}) {

    const bgColors = [
        { name: 'White', value: '#FFFFFF' },
        { name: 'Light Gray', value: '#F5F5F5' },
        { name: 'Light Blue', value: '#E3F2FD' },
        { name: 'Light Purple', value: '#F3E5F5' },
        { name: 'Light Green', value: '#E8F5E9' },
        { name: 'Light Orange', value: '#FFF3E0' },
    ]

    const fontColors = [
        { name: 'Black', value: '#000000' },
        { name: 'Dark Gray', value: '#212121' },
        { name: 'Dark Blue', value: '#1565C0' },
        { name: 'Dark Purple', value: '#6A1B9A' },
        { name: 'Dark Green', value: '#2E7D32' },
        { name: 'Dark Orange', value: '#E65100' },
    ]
    

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
    }

    function setColor(color) {
        onSetColor(color)
    }    
    
    function setBGcolor(bgColor) {
        onSetBGcolor(bgColor)
    }


    return (
        <section className="color-pref">
            <div>
                <label htmlFor="bgColor">BG Color: </label>
                <select value={backgroundColor} onChange={(e) => setBGcolor(e.target.value )}
                    id="bgColor" name="bgColor">
                    {bgColors.map(color => (
                        <option key={color.value} value={color.value}>
                            {color.name}
                        </option>
                    ))}
                </select>  
            </div>

            <div>
                <label htmlFor="color">Color: </label>
                <select value={color} onChange={(e) => setColor(e.target.value )}
                    id="color" name="color">
                    {fontColors.map(color => (
                        <option key={color.value} value={color.value}>
                            {color.name}
                        </option>
                    ))}
                </select>            
            </div>

        </section>
    )
}