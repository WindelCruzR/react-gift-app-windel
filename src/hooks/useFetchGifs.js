// REPITE SIEMPRE: UN HOOK NO ES MÁS QUE UNA FUNCIÓN

import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  
    //Use state para almacenar las imagenes que allí estén.
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Funcion para obtener las imágenes.
    // Para esto necesita de la función getGifs, dado que es una tarea asincrona, esta función es también asíncrona.
    const getImages = async() => {
        // La variable newImages almacenará todo lo que retorna la función getGifs().
        const newImages = await getGifs(category);

        // setImages almacenará en el arreglo todo lo que esta función retorne. Así se obtuvieron las imágenes.
        setImages(newImages);
        setIsLoading(false);
    }

    // Para que solo se dispare una vez, en producción.
    useEffect(() => {getImages(category)}
    , []);

    return{
        images,
        isLoading
    } // Si esto se regresa, ya esto es un hook
}
