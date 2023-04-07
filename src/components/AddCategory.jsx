import { useState } from "react"



export const AddCategory = ({ onNewCategory }) =>{
    const [ inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        console.log(event.target.value);
        setInputValue(event.target.value);

    }

    const onSubmit = (event) =>{
        event.preventDefault();
        const newInputValue = inputValue.trim();
        //console.log(inputValue);
        if (newInputValue.length <=1) return;
        //setCategories( categories => [...categories, inputValue]);
        onNewCategory(newInputValue);
        setInputValue('');

    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input 
          type='text' 
          id='inputCategory'
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={ (event) => onInputChange(event) }
          />

        </form>
          
    )

}