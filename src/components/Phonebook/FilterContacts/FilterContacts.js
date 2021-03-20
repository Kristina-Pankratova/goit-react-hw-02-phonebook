import s from './FilterContacts.module.css'

export default function FilterContacts ({value, onChange}) {
    
        return (
            <label className={s.filterLabel}>
                Filter by the name
                <input type="text"
                    value={value}
                    onChange={onChange}/>
            </label>
        )
    
}


