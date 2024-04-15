import React, { useState } from 'react'
import styles from './CitiesList.module.css'
import CityCard from '../cityCard/CityCard'

export default function CitiesList({data, countryName}) {
    const [shownComments, setShownComments] = useState({});

    const toggleComment = id => {
      setShownComments(prevShownComments => ({
        ...prevShownComments,
        [id]: !prevShownComments[id]
      }));
    };

    return (
        data?.find((countryItem) => countryItem.country == countryName).cities?.map((cityItem, i) => {
            return (
                <div className={styles.officeContainer} key={cityItem.city+i}>
                    <button className={styles.showButton} onClick={() => toggleComment(obj.id)}> /// toggle with id
                        <h3 className={styles.h2}>{cityItem.city}</h3>
                    </button>
                    {shownComments[obj.id] ? (cityItem.offices).map((officeItem, i) => {
                        return (
                            <CityCard key={officeItem+i} officeItem={officeItem}></CityCard>
                        )}
                    ) : ''}
                </div>
                )
        })
    )
}
