console.log(axios);

//node element for button
const searchButton = document.getElementById("button");

// Add event listener to button
// WHAT IS HAPPENING HERE?
// 1. CREATED A DOM FOR SEARCH BUTTON
// 2. ADDED AN EVENT LISTENER TO BUTTON NODE ELEMENT
// 3. ASYNC FUNCTION SETTING A VARIABLE EQUAL TO AWAIT AND AXIOS FOR GETTING THE INFORMATION FROM THE API LINK
// 4.
searchButton.addEventListener("click",  () =>{
    async function getBelgium() {
        const response = await axios.get("https://restcountries.eu/rest/v2/name/sweden");
        console.log(response);
        console.log(response.data[0].flag); //response of API // we need to look at URL van plaatje.
        //CREATED IMAGE CONATINER DIV NODE ELEMENT.
        const imageContainer = document.getElementById("img-container");

        //create IMG element
        const image = document.createElement("img");
        image.src = (response.data[0].flag); // this is the place where the flag image is. OT REFERS TO THE AXIOS GET METHOD AND THE LOCATION OF THE FLAG URL.
        imageContainer.appendChild(image); // APPENDING THIS IMAGE TO THE IMAGE CONTAINER MADE EARLIER.

        // create P element for more data returned
        const countryInfo = document.createElement("p");
        countryInfo.innerText = `${response.data[0].name} is situated in ${response.data[0].region}. It has a population of ${response.data[0].population} people.`;
        imageContainer.appendChild(countryInfo);

        //Another P element for more information
        const moreCountryInfo = document.createElement("p");
        const currencies = response.data[0].currencies[0];
        moreCountryInfo.innerText = `The capital is ${response.data[0].capital} and you can pay with ${response.data[0].currencies}`;
        imageContainer.appendChild(moreCountryInfo);


    }
    getBelgium(); // it's return the object, just not what is in it.

});

// SHORTER VERSION WITH ASYNC.
// searchButton.addEventListener("click", async ()=>{
//     const getInfo = await axios.get("https://restcountries.eu/rest/v2/name/belgium");
//
//     console.log("Result:", getInfo.data)
// });


//DOM for inputField
const inputField = document.getElementById("input-field");
const query = inputField.value;

// event listener keyup for input field
// trying to get info based on Enter key event, gather information equal to country na,entered.
inputField.addEventListener("keyup", (event)=>{
    if (event.code === "Enter"){
        async function getInfo(){
            const response2 = await axios.get("https://restcountries.eu/rest/v2/name/belgium")
        }
    }
})










