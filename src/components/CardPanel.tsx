'use client'
import InfoCard from "./InfoCard";
import { useReducer } from "react";

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


    return(
        <div>
            <div className='flex place-content-around p-10'>
                <InfoCard hospitalName='Chulalongkorn Hospital' imgRef='/img/chula.jpg' rating={ratingList.get('Chulalongkorn Hospital')||0} OnRating={(hospital:string,rating:number)=>dispatchRating({type:'add',hospitalName:hospital,ratingVal:rating})}/>
                <InfoCard hospitalName='Rajavithi Hospital' imgRef='/img/rajavithi.jpg' rating={ratingList.get('Rajavithi Hospital')||0} OnRating={(hospital:string,rating:number)=>dispatchRating({type:'add',hospitalName:hospital,ratingVal:rating})}/>
                <InfoCard hospitalName='Thammasat University Hospital' imgRef='/img/thammasat.jpg' rating={ratingList.get('Thammasat University Hospital')||0} OnRating={(hospital:string,rating:number)=>dispatchRating({type:'add',hospitalName:hospital,ratingVal:rating})}/>
        </div>
        {Array.from(ratingList).map(([hospital,rating])=><div className="font-serif text-l pl-10 pb-2" key={hospital}  onClick={()=>dispatchRating({type:'remove',hospitalName:hospital,ratingVal:0})}>{hospital} Rating = {rating==null ? 0:rating}</div>)}
      </div>
    );
}