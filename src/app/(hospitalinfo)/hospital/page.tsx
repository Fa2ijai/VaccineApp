import getHospitals from "@/libs/getHospitals"
import {Suspense} from 'react'
import {LinearProgress} from '@mui/material'
import HospitalCatalog from "@/components/้hospitalCatalog"
import AddHospitalForm from "@/components/AddHospitalForm";
export default function Hospital(){

    const hospitals = getHospitals()
    return(
        <main className="text-left p-5 flex flex-col justify-center items-center">
            <Suspense fallback={<div className="text-center w-full">Loading...<LinearProgress></LinearProgress></div>}>
                <HospitalCatalog hospitalJson={hospitals}></HospitalCatalog>
                <AddHospitalForm></AddHospitalForm>
            </Suspense>
        </main>
    )
}