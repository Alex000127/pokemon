document.addEventListener('DOMContentLoaded', () =>{
 
    const getPokemon = async (name) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${name} `;
        const res = await fetch(url);
        const data = await res.json();
        return data
        
    }
    
    const searchPokemon = async() => {
        const name = document.querySelector("#name").value
        const data = await getPokemon(name)


        document.querySelector("#name").value = ''
        document.querySelector("h1").innerHTML = name;

        const img = document.createElement("img")
        img.src = data.sprites.front_default
        document.querySelector("div").appendChild(img)
    }
    document.querySelector("button").onclick = searchPokemon
    })
