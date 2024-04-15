import React from 'react'
import styles from './CityCard.module.css'

export default function CityCard({officeItem}) {
    return (
        <div className={styles.officeInfo}>
            <span className={styles.office}>Офис {(officeItem.office).toUpperCase()}</span>
            <span className={styles.name}>{officeItem.name}</span>
            <span>{officeItem.phone}</span>
            <span className={styles.email}>{officeItem.email}</span>
        </div>
    )
}
