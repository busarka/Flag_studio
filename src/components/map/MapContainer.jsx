import React from 'react'
import { Map, Placemark } from '@pbe/react-yandex-maps';
import styles from './MapContainer.module.css'

const defaultState = {
  center: [55.751574, 37.573856], 
  zoom: 9,
}

export default function MapContainer({ data, countryName, shownFullInfos }) {

  const renderPlacemarks = () => {
    if (!countryName) {
      return
    }
    if (Object.keys(shownFullInfos).length == 0 || Object.values(shownFullInfos) == false) {
      return data?.find((countryItem) => countryItem.country == countryName).cities?.map(city => city.offices.map((office, i) =>
      <Placemark key={i} 
        geometry={office.address}
      />
    ))
  } else {
    return data?.find((countryItem) => countryItem.country == countryName).cities?.map((cityItem, i) =>
      shownFullInfos[cityItem.city] ? (cityItem.offices).map((officeItem, i) => 
      <Placemark key={i} geometry={officeItem.address}/>
    ) : '')
    }
  }

  return (
    <div className={styles.mapContainer}>
      <Map className={styles.map} defaultState={defaultState}>
          {renderPlacemarks()}
      </Map>
    </div>
  )
}
