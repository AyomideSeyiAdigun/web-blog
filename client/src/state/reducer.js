
//selector


const reducer = (state,action) =>{
    switch(action.type){
        case 'ALL_POST':
            return{
                posts:action.item,
            }
        case 'LOGIN-START':
            return{
                user:null,
                isFecthing:true,
                error:false
            }
        case 'LOGIN_SUCCESS':
            return{
                user:action.payload,
                isFecthing:false,
                error:false
            }
        case 'LOGIN_FAILURE' :
            return{
                user:null,
                isFecthing:false,
                error:true
            }
            case 'UPDATE_START':
                return{
                    ...state,
                    isFecthing:true,
                    error:false
                }
            case 'UPDATE_SUCCESS':
                return{
                    user:action.payload,
                    isFecthing:false,
                    error:false
                }
            case 'UPDATE_FAILURE' :
                return{
                    user:state.user,
                    isFecthing:false,
                    error:true
                }
         case 'LOGOUT':
            return{
                user:null,
                isFecthing:false,
                error:false
                }
        default:
            return state;
    };
}

export default reducer;