import React from 'react';
import styles from './List.module.css';
import Button from './button/Button';
import CitiesList from './citiesList/CitiesList';

export default function List({ data, isLoading, countryName, handleChooseCountry, shownFullInfos, toggleComment, setColor, setTransform }) {

    return (
        <div className={styles.listcontainer}>
        {isLoading ?
            <>
            <div className={styles.buttoncontainer}>
                {data?.map((item, i) => <Button item={item} key={i} handleClick={handleChooseCountry}></Button>)}
            </div>
            <div className={styles.scroll}>
                <CitiesList
                    data={data}
                    countryName={countryName}
                    shownFullInfos={shownFullInfos}
                    toggleComment={toggleComment}
                    setColor={setColor}
                    setTransform={setTransform}>
                </CitiesList>
            </div>
            </>
            :
            <span>Идет загрузка...</span>
        }
        </div>
    )
}
