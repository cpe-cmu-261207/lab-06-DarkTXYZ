import axios from "axios"
import { useEffect, useState } from "react"

type DataType = {
    time: {
        updated: string,
        updatedISO: string,
        updateduk: string
    },
    disclaimer: string,
    bpi: {
        USD: {
            code: string,
            rate: string,
            description: string,
            rate_float: string
        },
        THB: {
            code: string,
            rate: string,
            description: string,
            rate_float: string
        }
    }
}

const Current = () => {

    const [data, setData] = useState<DataType | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)

    const fetchAPI = async () => {
        try {
            const resp = await axios.get<DataType>('https://api.coindesk.com/v1/bpi/currentprice/thb.json')
            setData(resp.data)
            setLoading(false)
            setError(false)
        }
        catch (err) {
            console.log(err)
            setError(true)
        }
    }

    useEffect(() => {
        fetchAPI()
        console.log(data)
    }, [])

    const render = () => {
        if (error) {
            return (
                <div className='text-center space-y-3'>
                    <p className='text-2xl font-semibold'>Current price</p>
                    <p className='text-2xl'>Error!</p>
                </div>
            )
        }
        else if (loading) {
            return (
                <div className='text-center space-y-3'>
                    <p className='text-2xl font-semibold'>Current price</p>
                    <p className='text-2xl'>Loading ...</p>
                </div>
            )

        }
        else {
            return (
                <div className='text-center space-y-3'>
                    <p className='text-2xl font-semibold'>Current price</p>
                    <p className='text-2xl'>{data?.bpi.THB.rate.toLocaleString()} THB</p>
                    <p> (Last updated {data?.time.updated}) </p>
                </div>
            )
        }
    }

    return (
        <div>
            {render()}
        </div>

    )
}

export default Current