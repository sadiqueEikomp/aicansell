const ProfileReducer = (state, action) => {
    switch (action.type) {
        case "IS_LOADING":
            return {
                ...state,
                is_loading: true
            };

        case "API_ERROR":
            return {
                ...state,
                is_loading: false,
                is_error: true
            };
            case "SET_API_DATA":
                console.log(action.payload,"qqq")
                return {
                    ...state,
                    is_loading: false,
                    is_error: false,
                    craeteAccountStatus: action.payload,
                    
                    
                };   
                case "SET_API_LOGIN_DATA":
                    console.log(action.payload,"qqqq")
                    return {
                        ...state,
                        is_loading: false,
                        is_error: false,
                        loginStatus: action.payload,
                        
                        
                    };  
                case "SET_STATUS_DATA":
                console.log(action.payload,"qqq")
                return {
                    ...state,
                    is_loading: false,
                    is_error: false,
                    craeteAccountStatus: "",
                    
                    
                };   
                case "SET_USER_DATA":
                    const user=action.payload
                    console.log(user,"userrrrr")
                    return {
                        ...state,
                        is_loading: false,
                        is_error: false,
                        userData:action.payload,
                        
                        
                    };  

        default:
            return state;
    }
}

export default ProfileReducer;