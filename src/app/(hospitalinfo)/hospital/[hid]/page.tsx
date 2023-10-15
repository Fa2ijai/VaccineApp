import getHospital from "@/libs/getHospital"
import Image from "next/image"

export default async function HospitalDetailPage({params}:{params:{hid:string}}){
    const Detail = await getHospital(params.hid)
    const hospitalDetail = Detail.data
    return(
        <main className="text-center p-5">
            <div className="text-xl font-medium font-sans"> Hospital Detail</div>
            <div className="flex flex-row my-5">
                <Image src={hospitalDetail.picture} 
                    alt="Hospital Image"
                    height={0} width={0} sizes="100vw"
                    className="rounded-lg w-[30%] bg-black"
                />
                <div className="text-lg mx-10 text-left font-sans">
                    <div className="font-medium">{hospitalDetail.name}</div>
                    <div className="pt-20">Address : {hospitalDetail.address} {hospitalDetail.district}</div>
                    <div >Province : {hospitalDetail.province}</div>
                    <div >Postalcode : {hospitalDetail.postalcode}</div>
                    <div >Tel : {hospitalDetail.tel}</div>
                </div>
            </div>
        </main>
    )
}