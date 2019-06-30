var seaverObject =
{
    name: "Seaver Stanley",
    age: 22,
    hobbies:["Guitar","P.C. Gaming"],
    bands:["Knocked Loose","Down and Around 3","Niota"]
}
var htmlString = `
<h1 id="title">${seaverObject.name}</h1>
<h2 id="ageContainer"> Age:${seaverObject.age}</h2>
`
document.querySelector("#seaverInfo").innerHTML=htmlString;

document.querySelector("#hobbieHeader").innerHTML="Hobbies";
for(var i = 0; i <seaverObject.hobbies.length; i++){
    document.querySelector("#hobbies").innerHTML += `  <li>${
        seaverObject.hobbies[i]
    }</li>`
}
document.querySelector("#bandHeader").innerHTML="Bands";
for (var i = 0; i <seaverObject.bands.length; i++){
    document.querySelector("#bands").innerHTML +=` <li>${
        seaverObject.bands[i]
    }</li>`
}