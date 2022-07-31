import { cartActions } from "./cartstore";
import { uiActions } from "./uiSlice";

export const FetchFromServer=(cart)=>{
    return async(dispatch)=>{
        const Fetching=async()=>{
            const response=await fetch('https://redux-store-8914f-default-rtdb.firebaseio.com/cart.json')
            if(!response.ok){
                throw new Error('something is wrong')
            }
            const data=await response.json()
            return data;
            
        };
        try{
            const serverData=await Fetching();
            dispatch(cartActions.replacecart(
                {
                items:serverData.items || [],
                quantity:serverData.quantity || 0,
                total:serverData.total || 0
                }))
        }catch(error){
            dispatch(uiActions.notify({status:'Failed',type:'type error',message:'Error in sending data'}))
        }
        
        
    }
};

export const SendToServer=(cart)=>{
    return async(dispatch)=>{
        dispatch(uiActions.notify({status:'pending',type:'Loading...',message:'Sending data to cart store'}));
        const SendingRequest=async()=>{
            const response=await fetch('https://redux-store-8914f-default-rtdb.firebaseio.com/cart.json',{
                method:'PUT',
                body:JSON.stringify(cart)
            });
            if(!response.ok){
                throw new Error('something is wrong');
            }
            
        };
        try{
            await SendingRequest();
            dispatch(uiActions.notify({status:'success',type:'Sent',message:'sucessfully sent data'}))
        }catch(error){
            dispatch(uiActions.notify({status:'Failed',type:'type error',message:'Error in sending data'}))
        }
        
        
    }
};