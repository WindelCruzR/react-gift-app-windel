// Componente que se encargará de agregar la categoría de gifs en la aplicación
import React, { useState } from 'react'


// Siempre que se comunique un componente se le debe enviar la PROP para que sepa como se va a comunicar.
export const AddCategory = ({onNewCategory}) => {

    // Estado que manejará el input del html de la aplicación, se inicializa en vacío.
    const [inputValue, setInputValue] = useState('')

    // Funcion que operará mediante el evento de cambiar el contenido del label para que ste se pueda utilizar en la app.
    const onInputChange = ({target}) => {

        // Se va modificando el label con cada digito que se ingrese en el.
        setInputValue(target.value);
    }

    // Funcion que operará mediante el envento de submit en el formulario. Recibe un evento y hará lo que está dentro.
    const onSubmit = (event) => {
        event.preventDefault();

        //Validamos que exista una palabra, si no hay palabra o solo tiene una letra, no hará nada y mandará a escribir nuevamente.
        if(inputValue.trim().length <= 1) return;
        
        
        // ¿Recuerdas la prop que está en el componente AddCategory en el GifExpertApp? Bueno ese parámetro que ingresaste lo guardarás aquí
        // y eso retornará en la función onAddCategory que se encuentra en GifExpertApp.
        onNewCategory(inputValue.trim());

        //Limpiamos el form HTML despues de darle submit.
        setInputValue('');

        
    }

// Lo que Hara en el HTML.
  return (

        // Se dibuja el formulario, solo contendrá un label.
        // Se le pone la propiedad onSubmit, para que ejecute la función al darle Enter
        <form onSubmit={(event) => onSubmit(event)}>

            {/* Input de tipo texto, el valor será loq ue allí se digite y para cambiarlo se llama a la función onChange  */}
            <input
                type="text"
                placeholder = "buscar gifs"
                value={inputValue}
                onChange = {onInputChange}
            />
        </form>

  )
}
