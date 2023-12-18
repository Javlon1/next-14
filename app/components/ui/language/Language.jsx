import * as React from 'react'
import styles from './Language.module.scss'
import { Lang } from '../data/data';
import { Context } from '../Context/Context';

const Language = () => {

    const { lan, setLan } = React.useContext(Context)

    const handleChange = (event) => {

        setLan(event.target.value);

    };

    React.useEffect(() => {

        window.localStorage.setItem('lan', lan)

    }, [lan])

    return (
        <select className={styles.select} defaultValue={lan} onChange={handleChange} name="" id="">
            {
                Lang?.map((e) => (
                    <option key={e.id} value={e.lang}>{e.lang}</option>
                ))
            }
        </select>
    )
}

export default Language;