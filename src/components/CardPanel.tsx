'use client'
import Hospital from "@/app/(hospitalinfo)/hospital/page";
import InfoCard from "./InfoCard";
import { useReducer } from "react";
import Link from "next/link";
import { hostname } from "os";

export default function CardPanel(){
    const ratingReducer = (ratingList:Map<string,number>,action:{type:string,hospitalName:string,ratingVal:number})=>{
        switch(action.type){
            case'add': {
                return new Map(ratingList.set(action.hospitalName,action.ratingVal))
            }
            case 'remove' :{
                ratingList.delete(action.hospitalName);
                return new Map(ratingList)
            }
            default: return ratingList;
        }
    }
    const [ratingList,dispatchRating] = useReducer(ratingReducer, new Map<string, number>());

    const mockHospital = [{hid:'001',hospitalName:'Chulalongkorn Hospital' ,imgRef:'/img/chula.jpg'},
    {hid:'002',hospitalName:'Rajavithi Hospital', imgRef:'/img/rajavithi.jpg'},
    {hid:'003',hospitalName:'Thammasat University Hospital' ,imgRef:'/img/thammasat.jpg'}]

    return(
        <div>
            <div className='flex place-content-around p-10'>
                {
                    mockHospital.map((HospitalItem)=>(
                        <Link href={`hospital/${HospitalItem.hid}`}>
                        <InfoCard hospitalName={HospitalItem.hospitalName} imgRef={HospitalItem.imgRef} rating={ratingList.get(HospitalItem.hospitalName)||0} OnRating={(hospital:string,rating:number)=>dispatchRating({type:'add',hospitalName:hospital,ratingVal:rating})}/>
                        </Link>
                        )
                    )
                }
        </div>
        {Array.from(ratingList).map(([hospital,rating])=><div className="font-serif text-l pl-10 pb-2" key={hospital}  onClick={()=>dispatchRating({type:'remove',hospitalName:hospital,ratingVal:0})}>{hospital} Rating = {rating==null ? 0:rating}</div>)}
      </div>
    );
}