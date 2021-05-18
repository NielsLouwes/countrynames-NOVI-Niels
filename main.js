console.log(axios);

//node element for button
const searchButton = document.getElementById("button");

// Add event listener to button
// WHAT IS HAPPENING HERE?
// 1. CREATED A DOM FOR SEARCH BUTTON
// 2. ADDED AN EVENT LISTENER TO BUTTON NODE ELEMENT
// 3. ASYNC FUNCTION SETTING A VARIABLE EQUAL TO AWAIT AND AXIOS FOR GETTING THE INFORMATION FROM THE API LINK
// 4.
searchButton.addEventListener("click", () => {
    async function getCountryInfo() {
        const response = await axios.get("https://restcountries.eu/rest/v2/name/sweden");
        console.log(response);
        console.log(response.data[0].flag); //response of API // we need to look at URL van plaatje.
        //CREATED IMAGE CONATINER DIV NODE ELEMENT.
        const imageContainer = document.getElementById("img-container");

        //create IMG element
        const image = document.createElement("img");
        image.src = (response.data[0].flag); // this is the place where the flag image is. OT REFERS TO THE AXIOS GET METHOD AND THE LOCATION OF THE FLAG URL.
        imageContainer.appendChild(image); // APPENDING THIS IMAGE TO THE IMAGE CONTAINER MADE EARLIER.

        const countryName = document.createElement("h2");
        countryName.innerText = `${response.data[0].name}`;
        imageContainer.append(countryName);

        // create P element for more data returned
        const countryInfo = document.createElement("p");
        countryInfo.innerText = `${response.data[0].name} is situated in ${response.data[0].region}. It has a population of ${response.data[0].population} people.`;
        imageContainer.appendChild(countryInfo);

        //Another P element for capital and currencies
        // Bonusopdracht: Maak een functie die ongeacht het aantal talen die in een land gesproken worden, een string maakt:
        //
        //     1 taal: They speak [language]
        // 2 talen: They speak [language] and [language]
        // 3 talen: They speak [language], [language] and [language]
        // etc.

        // We need to place this inside a loop.

        const moreCountryInfo = document.createElement("p");
        moreCountryInfo.innerText = `The capital is ${response.data[0].capital} and you can pay with ${response.data[0].currencies[0].name}.`;
        imageContainer.appendChild(moreCountryInfo);

        // Another P element for languages spoken
        const languagesInfo = document.createElement("p");
        languagesInfo.innerText = `They speak ${response.data[0].languages[0].name}.`;
        imageContainer.appendChild(languagesInfo);

    }
    getCountryInfo(); // it's return the object, just not what is in it.

});


//DOM for inputField
const inputField = document.getElementById("input-field");


// event listener keyup for input field
// trying to get info based on Enter key event, gather information equal to country entered.

inputField.addEventListener("keyup", (event)=>{
    if (event.key === "Enter"){
        async function getInfo() {
            const input = inputField.value;
            const response = await axios.get(`https://restcountries.eu/rest/v2/name/${input}`);
            console.log(response);

            //CREATED IMAGE CONATINER DIV NODE ELEMENT.
            const imageContainer = document.getElementById("img-container");

            //create IMG element
            const image = document.createElement("img");
            image.src = (response.data[0].flag); // this is the place where the flag image is. OT REFERS TO THE AXIOS GET METHOD AND THE LOCATION OF THE FLAG URL.
            imageContainer.appendChild(image); // APPENDING THIS IMAGE TO THE IMAGE CONTAINER MADE EARLIER.

            const countryName = document.createElement("h2");
            countryName.innerText = `${response.data[0].name}`;
            imageContainer.append(countryName);

            // create P element for more data returned
            const countryInfo = document.createElement("p");
            countryInfo.innerText = `${response.data[0].name} is situated in ${response.data[0].region}. It has a population of ${response.data[0].population} people.`;
            imageContainer.appendChild(countryInfo);

            const moreCountryInfo = document.createElement("p");
            moreCountryInfo.innerText = `The capital is ${response.data[0].capital} and you can pay with ${response.data[0].currencies[0].name}.`;
            imageContainer.appendChild(moreCountryInfo);

            // Another P element for languages spoken
            const languagesInfo = document.createElement("p");
            languagesInfo.innerText = `They speak ${response.data[0].languages[0].name}.`;
            imageContainer.appendChild(languagesInfo);

            //Attempt at making error message if no valid country not entered
            if (inputField.value !== response.data[0].name){
               console.log("Not a valid country!");
            }
        }
        getInfo();
    }
})






















// inputField.addEventListener("keyup", (event)=>{
//     if (event.key === "Enter"){
//         async function getInfo(){
//             const query = inputField.value;
//             const api = await axios.get("https://restcountries.eu/rest/v2/name/");
//             const url = api + query;
//             console.log(url)
//         }
//
//     }
//     getInfo();
// })

//remove text after each input text area

// document.getElementById("input-field").value = "";











