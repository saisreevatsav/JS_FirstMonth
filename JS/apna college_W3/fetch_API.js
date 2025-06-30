const URL="https://cat-fact.herokuapp.com";
const factPara = document.querySelector("#fact");
const btn=document.querySelector("#btn");

// const getFacts=async()=>{
//     console.log("getting data");
//     let response = await fetch(URL); 
//     console.log(response); //output is in JSON Format.
//     let data = await response.json(); // this returns second promise. JSON format makes the output readable.
//     factPara.innerText = data.text;
// };
// btn.addEventListener("click",getFacts);

function getFacts() {
    fetch(URL) //Promise Chaining.
     .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        factPara.innerText = data.text;
    });
}
btn.addEventListener("click",getFacts);