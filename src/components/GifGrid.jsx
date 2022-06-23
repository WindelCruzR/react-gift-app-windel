import { useState, useEffect} from "react";

// import { getGifs } from "../helpers/getGifs"
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";


//Componente que se encargará de definir las propiedades del gif y obtener la informacion de las imagenes.
// Recibirá como parámetro, la categoría que se le pasó como prop cuando se le llamó en el componente GifExpertApp.
export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

    console.log(isLoading);
    
return (
    <>
        <h3> {category} </h3>

        {
            isLoading && (<h2> ... Cargando </h2>)
        }
            <div className="card-grid">
                {/* Recorrerá el arreglo de imagenes que se obtuvieron de la función getGifs() */}
                {/* Se desestructurará la imagen para obtener las piecas de información necesarias para imprimirse. */}
                {images.map(({id, title, url}) => (
                    // Se comunica al componente lo que s enecesita para que se impriman las imagenes gif.
                    <GifItem
                        key={id}
                        title={title}
                        url = {url}
                    />
                ))}
            </div>


        </>
  )
}
