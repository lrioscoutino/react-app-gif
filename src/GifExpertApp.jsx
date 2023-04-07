import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () =>{
    const [categories, setCategories] = useState([]);

    const addCategory = (newCategory) => {
        //console.log('dato', event);
        //const category = document.querySelector('#inputCategory')
        if (categories.includes(newCategory)) return;

         setCategories([...categories, newCategory]);
         //setCategories([ newCategory ]);
        // console.log(categories);

    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>
            {/* input */}
            <AddCategory  
            /*setCategories= { setCategories }*/
                onNewCategory = { (category) => addCategory(category)}
            />
            
            {/* listado de Gif */}
            {
                        /* categories.map( (category) => {
                            return (
                                <div key={category}>
                                    <li>{category}</li>
                                </div>
                            )
                        })
                    */}
                     {
                        categories.map( (category) => (
                            <GifGrid 
                            key={category}
                            category={category}/>
                        ))
                     }   
                    
                    

            {/* Gif item */}
        </>
    )
}