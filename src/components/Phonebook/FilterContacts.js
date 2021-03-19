
export default function FilterContacts ({value, onChange}) {
    
        return (
            <label>
                Filter by the name
                <input type="text"
                    value={value}
                    onChange={onChange}/>
            </label>
        )
    
}


