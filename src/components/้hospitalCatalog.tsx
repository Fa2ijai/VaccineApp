import InfoCard from "./InfoCard"
import Link from "next/link"

export default async function HospitalCatalog({hospitalJson}:{hospitalJson:Object}) {
    const hospitalJSONReady = await hospitalJson;
    return(
    <div className='flex place-content-around p-10'>
            {
                hospitalJSONReady.data.map((HospitalItem:Object)=>(
                    <Link href={`hospital/${HospitalItem._id}`}>
                    <InfoCard hospitalName={HospitalItem.name} imgRef={HospitalItem.picture} />
                    </Link>
                    )
                )
            }
    </div>
   )
}