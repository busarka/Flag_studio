import { useEffect, useState } from 'react'
import { getData } from '../api/api'

export default function useData() {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState()

    useEffect(() => {
        setIsLoading(false)
        getData().then(data => setData(data))
        setIsLoading(true)
    },[])

    return [data, isLoading]
}
