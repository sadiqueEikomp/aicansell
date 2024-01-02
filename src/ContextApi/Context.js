import { useContext, createContext, useEffect,useState, useReducer } from "react";
import AllProfile from "./Reducer"
import  axios  from 'axios';

/* API URL */


const  createAccounturl ="https://aicansellapp.com/accounts/register/"
const AppContext = createContext();
const ConfirmationEmail= "https://aicansellapp.com/accounts/api/send-confirmation-email/"
const loginurl="https://aicansellapp.com/api/token/"
const userCurrent="https://aicansellapp.com/accounts/current_user/"
/* Initial State */
const intialState = {
    is_loading: false,
    is_error: false,
    craeteAccountStatus:"",
    loginStatus:"",
    userData:"",
    is_single_loading: false,
    is_single_error: false,
};



const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AllProfile, intialState);
    const createAccount = async (data) => {
 console.log(data,"signup")
        dispatch({ type: "IS_LOADING" });
        try {
            const res = await axios.post(createAccounturl,data);
            const status = await res;
      console.log(status)
          
            dispatch({ type: "SET_API_DATA", payload: status });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
            console.log(error,"signup")
        }
    }
 const statusupdate=()=>{
    dispatch({ type: "SET_STATUS_DATA" });

}
const loginAccount=async(data)=>{
console.log(data,"sdugvcusfdb")
    dispatch({ type: "IS_LOADING" });
    try {
        const res = await axios.post(loginurl,data,{
            
          });
        const status = await res;
        console.log(status,"login")
     
        dispatch({ type: "SET_API_LOGIN_DATA", payload: status.data });
    } catch (error) {
        dispatch({ type: "API_ERROR" });
    }
}
const sendConfirmationEmail = async (data) => {
    console.log(data,"confermationfggggggggggggggggggggggggggggg")
    dispatch({ type: "IS_LOADING" });
  
    try {
      const res = await axios.post(
        ConfirmationEmail,
        data.email, // Assuming this is the request body
        {
            headers: {
              'Authorization': `Bearer ${data.token}`,
              'Content-Type': 'application/json', // Assuming JSON content type, adjust if needed
            },
        }
      );
  
      const status = await res;
      console.log(status, "statusssssssss");
  
      // Handle the response or dispatch further actions as needed
    } catch (error) {
      dispatch({ type: "API_ERROR" });
      // Handle the error or dispatch further actions as needed
    }
  };
  
  const  currentUser=async(data)=>{
 
    dispatch({ type: "IS_LOADING" });
  
    try {
      const res = await axios.get(
        userCurrent,
       // Assuming this is the request body
        {
          headers: {
            'Authorization': `Bearer ${data.token}`,
            'Content-Type': 'application/json', // Assuming JSON content type, adjust if needed
          },
        }
      );
  
      const status = await res;
      console.log(status, "current");
      dispatch({ type: "SET_USER_DATA", payload: status.data });
      // Handle the response or dispatch further actions as needed
    } catch (error) {
        console.log(error,"error")
      dispatch({ type: "API_ERROR" });
      // Handle the error or dispatch further actions as needed
    }
  }
     
      
    
    return (
        <AppContext.Provider value={{ ...state ,createAccount,statusupdate, currentUser,sendConfirmationEmail,loginAccount}}  >
            {children}
        </AppContext.Provider>
    );
}

const useProfileGlobal = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useProfileGlobal, };