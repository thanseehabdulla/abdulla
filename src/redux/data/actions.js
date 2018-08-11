export const DATA_ACTIONS = {

// action types
    API_CALL_REQUEST: "API_CALL_REQUEST",
    API_CALL_SUCCESS: "API_CALL_SUCCESS",
    API_CALL_FAILURE: "API_CALL_FAILURE",
    API_FOR_MAILSERVICE:"API_FOR_MAILSERVICE",
    API_FOR_DATASERVICE:"API_FOR_DATASERVICE",
    API_FOR_GETDATASERVICE:"API_FOR_GETDATASERVICE",
    API_FOR_GETMAILDATASERVICE:"API_FOR_GETMAILDATASERVICE",
    API_GETCALL_SUCCESS:"API_GETCALL_SUCCESS",
    API_GETMAILCALL_SUCCESS:"API_GETMAILCALL_SUCCESS",
    send_Mail:(data)=>{
        return{
            type:DATA_ACTIONS.API_FOR_MAILSERVICE,
            data
        }
    },
    get_data:()=>{
        return{
            type:DATA_ACTIONS.API_FOR_GETDATASERVICE
        }
    },
    get_mail:()=>{
        return{
            type:DATA_ACTIONS.API_FOR_GETMAILDATASERVICE
        }
    },
    send_Username:(data)=>{
        return{
            type:DATA_ACTIONS.API_FOR_DATASERVICE,
            data
        }
    },
    send_Profile:(data)=>{
        return{
            type:DATA_ACTIONS.API_FOR_DATASERVICE,
            data
        }
    },
    send_company:(data)=>{
        return{
            type:DATA_ACTIONS.API_FOR_DATASERVICE,
            data
        }
    },
    send_position:(data)=>{
        return{
            type:DATA_ACTIONS.API_FOR_DATASERVICE,
            data
        }
    },
    send_tutorialdata:(data)=>{
        return{
            type:DATA_ACTIONS.API_FOR_DATASERVICE,
            data
        }
    },
    send_donatedata:(data)=>{
        return{
            type:DATA_ACTIONS.API_FOR_DATASERVICE,
            data
        }
    },
    send_overview:(data)=>{
        return{
            type:DATA_ACTIONS.API_FOR_DATASERVICE,
            data
        }
    },
    send_projects:(data)=>{
        return{
            type:DATA_ACTIONS.API_FOR_DATASERVICE,
            data
        }
    },
    send_homevideos:(data)=>{
        return{
            type:DATA_ACTIONS.API_FOR_DATASERVICE,
            data
        }
    },
    send_tutorialvideos:(data)=>{
        return{
            type:DATA_ACTIONS.API_FOR_DATASERVICE,
            data
        }
    },
    send_assetvideos:(data)=>{
        return{
            type:DATA_ACTIONS.API_FOR_DATASERVICE,
            data
        }
    },
    send_donatevideos:(data)=>{
        return{
            type:DATA_ACTIONS.API_FOR_DATASERVICE,
            data
        }
    }

}