// https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=jane
let head = document.createElement("h1")
document.body.append(head)
var divi = document.createElement("div")
divi.setAttribute("id","first")

document.body.append(divi)


let dell = document.createElement("div")
dell.setAttribute("id","lno")
document.body.append(dell)
let dov = document.createElement("div")
dov.setAttribute("id","sho")
document.body.append(dov)

async function foo(){
    let book = document.getElementById("txt").value

let result = await fetch(`https://api.nationalize.io/?name[]=michael&name[]=matthew&name[]=${book}`)
let res = await result.json()
console.log(res)
console.log(res.length)



let country1Id = res[0].country[0].country_id;
let country1Probability = res[0].country[0].probability;
let country2Id = res[1].country[0].country_id;
let country2Probability = res[1].country[0].probability;

document.getElementById("sho").innerHTML = `${book} : your country is : ${country1Id} & probability is: ${country1Probability}`;
console.log(`Mr.${book} your country is: ${country1Id} & probability is: ${country1Probability}`);

document.getElementById("lno").innerHTML = `${book}: your country is: ${country2Id} & probability is: ${country2Probability}`;
console.log(`Mr.${book} your country is: ${country2Id} & probability is: ${country2Probability}`);

}


   
