import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key":'711ce6dc52mshc27a40cda529d30p118ddfjsn14d9bddb0015',
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};
