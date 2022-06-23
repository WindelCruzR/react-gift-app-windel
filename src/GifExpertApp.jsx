import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    //useState para manejar los estados del formulario y así agregar categorías
    const [categories, setCategories] = useState(['One Punch']);


    // función que añadirá la categoría en la aplicación y recibe como parametro el valor ingresado en onNewCategory
    const onAddCategory = ( newCategory ) => {
        //Console.log para verificar en consola que los datos sena correctos
        console.log(newCategory);

        //Validamos: si la nueva categoría que se ingresó, ya está en la aplicación, entonces no la ingresará
        if(categories.includes(newCategory)) return;

        //En caso contrario mediante el setState de cartegorias del useSate, se agregará al final, haciend spread con el arrelgo de categorias
        setCategories([...categories, newCategory])
    }
    
    // Vista del componente en HTML
  return (

    <>
        {/* Título de la aplicación*/}
        <h3>GifExpertApp</h3>

        <AddCategory 
            // Prop del componente con el fin de que se comunique el hijo al padre
            // ¿En qué consiste? Consiste en que se le pasará un valor a ese componente para que retorne en el onAddCategory para cambiar el estado del form.
            onNewCategory={(value) => onAddCategory(value)}
        />

        {/* Listado de Gifs */}
        
        {//  Recorriendo y retornando los valores del arreglo de categorias como objetos.
            categories.map((category) => (
                
                // Componente que contendrá la información de todos los gifs que se encuentran en la aplicación.
                <GifGrid 
                    // Se le envian estas dos prpiedades, esta key y las categorías
                    key={category} 
                    category={category} /> 
                ))
            }
     </>
  )
}
