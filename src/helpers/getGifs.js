// Función helper que obtendrá informacion de los gifs, como la url, el titulo y el id, que servirá como key para imprimirlos cuando se haga el mapeo.
// El fecth api es una tarea asincrona, por lo tanto se utiliza el async y el await.


export const getGifs = async(category)=> {

    // Obtendremos la url, la resp mediante la fetch api y la data mediante la desestructuración de la reesp.json().
    const url = `https://api.giphy.com/v1/gifs/search?api_key=AwbAgi8ZV7TQx7LKLLfmj8aPhDtWLNdo&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
 
// En la data, se encuentra la info necesaria para obtener las imagenes e imprimirlas, por lo tanto se les hará un mapeo pra obetener cada una de ellas.
 const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

 // Retornará toda la información que de los gifs, la función obtenga.
    return gifs;
}