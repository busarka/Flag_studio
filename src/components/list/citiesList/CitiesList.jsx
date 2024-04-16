import React from 'react'
import styles from './CitiesList.module.css'
import CityCard from '../cityCard/CityCard'
import ShowMoreIcon from '../../../assets/ShowMoreIcon';

export default function CitiesList({data, countryName, shownFullInfos, toggleComment, setColor, setTransform}) {

    return (
        <>
        {countryName ? data?.find((countryItem) => countryItem.country == countryName).cities?.map((cityItem, i) => {
                return (
                <div className={styles.officeContainer} key={cityItem.city+i}>
                    <button className={styles.showButton} onClick={() => toggleComment(cityItem.city)}> 
                        <h3 className={styles.h2} style={{color: setColor(cityItem.city)}}>{cityItem.city}</h3>
                        <ShowMoreIcon color={setColor(cityItem.city)} transform={setTransform(cityItem.city)}></ShowMoreIcon>
                    </button>
                    {shownFullInfos[cityItem.city] ? (cityItem.offices).map((officeItem, i) => {
                        return (
                            <CityCard key={officeItem+i} officeItem={officeItem}></CityCard>
                        )}
                    ) : ''}
                </div>
                )
            })
        : <span className={styles.span}>Выберите страну</span>}
        </>
    )
}
