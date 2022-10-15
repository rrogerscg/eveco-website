import axios from "axios";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:1337";

async function fetchQuery(path, params=null){
    const requestHeaders = {
        "headers": {
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_CMS_READ}`,
        }
    }
    let url;
    if(params){
        url = `${baseURL}/api/${path}/${params}?populate=*`;
    } else {
        url = `${baseURL}/api/${path}?populate=*`;
    }
    console.log("fetching url");
    console.log(url);
    const {data} = await axios.get(url, requestHeaders);
    const entries = data.data;
    console.log("DEBUG");
    console.log(data.data);

    return entries;
}

export {baseURL, fetchQuery}