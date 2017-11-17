import axios from "axios";

export const getResponseData = (data) => {
    return axios.post("http://localhost:8080/data/", data, {
        headers: {
            "Content-Type": "application/xml"
        },
        validateStatus: function(status) {
            return true
        }
    });

};