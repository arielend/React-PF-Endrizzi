import {useState, useEffect} from 'react'

export const useFetch = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const  [error, setError] = useState(null)

    useEffect(()=>{
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(json => {
                setData(json.results)
            })
            .catch(error=>{
                setError(error)
            })
            .finally(()=>{
                setLoading(false)
            })

    }, [url])

    return{
        data,
        loading,
        error
    }
}