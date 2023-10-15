import getHospitals from "@/libs/getHospitals"
import {Suspense} from 'react'
import {LinearProgress} from '@mui/material'
import HospitalCatalog from "@/components/้hospitalCatalog"
export default function Hospital(){
    const hospitals = getHospitals()
    return(
        <main className="text-left p-5">
            <Suspense fallback={<div className="text-center">Loading...<LinearProgress></LinearProgress></div>}>
                <HospitalCatalog hospitalJson={hospitals}></HospitalCatalog>
            </Suspense>
        </main>
    )
}