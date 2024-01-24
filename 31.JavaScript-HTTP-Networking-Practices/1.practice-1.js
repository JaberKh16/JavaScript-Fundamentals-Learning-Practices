// getting url
const url = () =>{
    const url = '';
    return url.trim(); 
}
// settings items initially
const settingsItems = {
    method: undefined,
    mode: undefined,
    headers: {}
}
// function constructor to set headers settings for Request Object
const setupSettings = function(settingsItems) {
    this.settingsItems.methodType = settingsItems.method;
    this.settingsItems.mode = settingsItems.mode;
    this.settingsItems.headers = settingsItems.headers;
    function settedObjects(){
        return {
            method: this.settingsItems.methodType,
            mode: this.settingsItems.mode,
            headers: this.settingsItems.headers
        }
    }
    return settedObjects;
} 


const getAPIData = async function (url, settingsItems) {
    const API_KEY = '';
    const setupItems = (settingsItems) => {
        return  {
            method: 'GET',
            mode: 'cors',
            headers:{
                'Authorization': 'Bearer ' + API_KEY,
                'Content-Type': 'application/json'
            }
        }
    };
    const settings = new Settings(setupItems());
    const responseObj = await fetch(url, settings);
    const responseJSONObj = await responseObj.json();
    return responseJSONObj;
}