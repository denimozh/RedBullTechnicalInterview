import React, { useEffect, useRef, useState } from 'react'
import { Information } from '../types'
import { DataTable } from '../components/Table/DataTable'
import { columns } from '../components/Table/columns'

const BASE_URL = "https://pitwall.redbullracing.com/api/stats"

type Props = {
    year: number
}

const DriverStatistics = ({year}: Props) => {
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<Information[]>([]);

    const abortControllerRef = useRef<AbortController | null>(null);

    useEffect(() => {
        const fetchInfo = async () => {
            abortControllerRef.current?.abort();
            abortControllerRef.current = new AbortController();
            
            setIsLoading(true);

            try {
                const response = await fetch(`${BASE_URL}/drivers/${year}`, 
                    {
                        signal: abortControllerRef.current?.signal,
                        headers: {
                            "x-api-key": "7303c8ef-d91a-4964-a7e7-78c26ee17ec4"
                        }
                    }
                )
    
                const data = await response.json() as Information[]; 
                setData(data);
                console.log(data);
            } catch (error: any) {
                if (error.name === "AbortError"){
                    console.log("Aborted");
                    return; 
                }
                setError(error);
            } finally {
                setIsLoading(false);
            }

            setIsLoading(false);
        };

        fetchInfo();
        return () => abortControllerRef.current?.abort();
    }, [year]);


    if (error){
        return <div>Something went wrong! Please try again.</div>
    }

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {!isLoading &&
                <div className='container mx-auto py-10'>
                    <DataTable columns={columns} data={data} />
                </div>
            }
        </div>
    )
}

export default DriverStatistics