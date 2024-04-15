import React, { useEffect, useState } from 'react';
import styles from './List.module.css';
import useData from '../../hooks/useData';
import Button from './button/Button';
import CitiesList from './citiesList/CitiesList';

export default function List() {
  const [data, isLoading] = useData()
  const [countryName, setCountryName] = useState('Россия')
  
  const handleClick = (e) => {
    setCountryName(e.target.value)
  }

  return (
    <div className={styles.listcontainer}>
      {isLoading ?
      <>
        <div className={styles.buttoncontainer}>
            {data?.map((item, i) => {
                return (
                    <Button item={item} key={i} handleClick={handleClick}></Button>
                )})}
            </div>
            <div>
                <CitiesList data={data} countryName={countryName}></CitiesList>
            </div>
      </>
      :
      <span>Идет загрузка...</span>
      }
    </div>
  )
}
