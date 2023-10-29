import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { BookingItem } from '../../../interface'
type reservationState ={
    reservationItems :BookingItem[]
}

const initialState:reservationState =  {reservationItems: []}
export const bookSlice = createSlice({
    name: "reservation",
    initialState,
    reducers:{
        addReservation: (state,action:PayloadAction<BookingItem>)=>{
            const newItem: BookingItem[] = [action.payload]
            state.reservationItems = newItem

            // if(state.reservationItems.filter(obj =>obj.idCard==action.payload.idCard)){
            //     const newItem: BookingItem[] = [action.payload]
            //     state.reservationItems = newItem
            // }
            // else
            //     state.reservationItems.push(action.payload)
        },
        deleteReservation: (state,action:PayloadAction<BookingItem>)=>{
            const remainItem: BookingItem[]=[]
            state.reservationItems = remainItem
            // const remainItem = state.reservationItems.filter(obj =>obj.idCard != action.payload.idCard)
            // state.reservationItems = remainItem
        }
    }
})
export const {addReservation,deleteReservation} = bookSlice.actions
export default bookSlice.reducer