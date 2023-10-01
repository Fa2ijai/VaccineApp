import Image from "next/image"

export default function HospitalDetailPage({params}:{params:{hid:string}}){
    const mockHospital = new Map()
    mockHospital.set('001',{hospitalName:'Chulalongkorn Hospital' ,imgRef:'/img/chula.jpg'})
    mockHospital.set('002',{hospitalName:'Rajavithi Hospital', imgRef:'/img/rajavithi.jpg'})
    mockHospital.set('003',{hospitalName:'Thammasat University Hospital' ,imgRef:'/img/thammasat.jpg'})

    return(
        <main className="text-center p-5">
            <div className="text-lg font-medium"> Hospital ID {params.hid}</div>
            <div className="flex flex-row my-5">
                <Image src={(mockHospital.get(params.hid)).imgRef} 
                    alt="Hospital Image"
                    height={0} width={0} sizes="100vw"
                    className="rounded-lg w-[30%] bg-black"
                />
                <div className="text-md font-medium mx-5">{(mockHospital.get(params.hid)).hospitalName}</div>
            </div>
        </main>
    )
}