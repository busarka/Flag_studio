import { useState } from 'react'

const fullIngoInitState = {
    Екатеринбург: true, 
    Москва: true, 
    Новосибирск: true, 
    Казань: true, 
    Пермь: true, 
    Минск: true, 
    Гродно: true, 
    Могилев: true, 
    Брест: true,
    Гомель: true}

export default function useOpenFullInfo() {
    const [shownFullInfos, setShownFullInfos] = useState(fullIngoInitState)

    const toggleComment = (city) => {
        setShownFullInfos(prevShownFullInfos => ({
            ...prevShownFullInfos,
            [city]: !prevShownFullInfos[city]
        }));
    };
        
    const setColor = (city) => {
        if (Object.keys(shownFullInfos).length !== 0) {
            return shownFullInfos[city] ? "#FF9E00" : "#3C6264"
        } else {
            return "#3C6264"
        }
    }

    const setTransform = (city) => {
        if (Object.keys(shownFullInfos).length !== 0) {
            return shownFullInfos[city] ? "scale(1 -1)" : ""
        } else {
            return ""
        }
    }

    return [shownFullInfos, toggleComment, setColor, setTransform]
}
