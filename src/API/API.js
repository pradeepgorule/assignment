


import axios from 'axios';

 
const baseUrl = `http://localhost:8000/`;

export const getMethod = async (context, props, successCallback, failureCallback) => {
    let params = props.input || {};

    await axios.get(
        baseUrl + props.url, {
        params: params
    }, {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    ).then((responseData) => {
        successCallback(context, responseData.data);
    }).catch((e) => {
        failureCallback(context, e)
    });

}

export const postMethod = async (context, props, successCallback, failureCallback) => {
    let params = props.input;

    await axios.post(
        baseUrl + props.url,
        params,
        // {
        // headers: {
        //     "Content-type": "application/json; charset=UTF-8"
        // }
        // }
    ).then((responseData) => {
        successCallback(context, responseData.data);
    }).catch((e) => {
        failureCallback(context, e)
    });

}


export const deleteMethod = async (context, props, successCallback, failureCallback) => {
    let params = props.input || {};

    await axios.delete(
        baseUrl + props.url, {
        params: params
    }, {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    ).then((responseData) => {
        successCallback(context, responseData.data);
    }).catch((e) => {
        failureCallback(context, e)
    });
}

export const putMethod = async (context, props, successCallback, failureCallback) => {
    let params = props.input;

    await axios.post(
        baseUrl + props.url,
        params, {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    ).then((responseData) => {
        successCallback(context, responseData.data);
    }).catch((e) => {
        failureCallback(context, e)
    });

}


export const catchError = async (props) => {
    console.log("props : ", props)
    if (props.response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        console.log("err response 1 : ", props.response.data);
        console.log("err response 2 : ", props.response.status);
        console.log("err response 3 : ", props.response.headers);
    } else if (props.request) {
        /*
         * The request was made but no response was received
         */
        console.log("no response : ", props.request);
    } else {
        // Something happened in setting up the request and triggered an Error
        let e = {
            error: props.message
        };
        console.log('Error : ', props.message, e);
        return e
    }

}