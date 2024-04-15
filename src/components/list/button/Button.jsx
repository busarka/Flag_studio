import React from 'react'
import styles from './Button.module.css'
import { NavLink } from 'react-router-dom'

export default function Button({item,handleClick, i}) {
    return (
        <NavLink to={`/country/${item.country}`} key={item.country+i} className={({isActive}) => `${isActive ? styles.active : ''}`}>
            <button className={styles.button} value={item?.country} onClick={(e) => handleClick(e)}>
                {item?.country}
            </button>
        </NavLink>
    )
}
