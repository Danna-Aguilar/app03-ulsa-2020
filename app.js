const baseUrl = 'https://rickandmortyapi.com/api/';
const characterList = document.getElementById('characters-list');
const locations=document.getElementById('character-locations');
const episodes=document.getElementById('character-episodes');

const GetCharactersList = async url =>{
    /*fetch(`${baseUrl}${url}`)
    .then(res => console.log(res.json()));*/

    const reponse = await fetch(`${baseUrl}${url}`);
    const data = await reponse.json();
    const {results} = data;

    const infoArr = results.map(element => {
        //console.log(element);
        const {image, url} = element;
        return {characterImg: image, characterUrl: url};
        //console.log(image);
    });

    await infoArr.forEach(element => {
        const imgElement = document.createElement('img');
        imgElement.src = element.characterImg;
        imgElement.onclick = ()=> {
            localStorage.setItem('characterUrl', element.characterUrl);
            window.location.href = 'file:///C:/Users/maric/Documents/programacion-hipermedia/app03-ulsa-2020/character.htm';
        };
        characterList.appendChild(imgElement);
    });
    
    //console.log(await imgArr);
    //console.log(await data.results);
}
 const Getlocations=async url=>{
    const data = await fetch(`${baseUrl}${url}`);
    const dataJson = await data.json();
    const results=dataJson.results;
    console.log(dataJson);
    const locationResults= results.map(element=>{
        const {name, dimension}=element;
        return {locationName:name,locationD:dimension};
    });
    locationResults.forEach(element=>{
        locations.innerHTML+= `<div id="list-style">
        <li>Name:  ${element.locationName} </li> <br>
         <li>Dimension: ${element.locationD}</li>`
    });
}
    const Getepisodes=async url=>{
        const data = await fetch(`${baseUrl}${url}`);
        const dataJson = await data.json();
        const results=dataJson.results;
        results.forEach(element=>{
        episodes.innerHTML+= `
        <tr>
            <td> ${element.episode}</td>
            <td> ${element.name}</td>
            <td> ${element.air_date}</td>

        </tr>`
        });
  
console.log(results);
}
GetCharactersList('character');
Getepisodes('episode');
Getlocations('location');