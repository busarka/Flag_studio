import { useState } from 'react'

export default function useChoosenCountry() {
    const [countryName, setCountryName] = useState()

    const handleChooseCountry = (e) => {
        setCountryName(e.target.value)
    }

    return [countryName, handleChooseCountry]
}
