import React from 'react'
import { Map } from '@pbe/react-yandex-maps';
import styles from './MapContainer.module.css'

export default function MapContainer() {
  return (
    <div className={styles.mapContainer}>
      <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} className={styles.map}/>

    </div>
  )
}
