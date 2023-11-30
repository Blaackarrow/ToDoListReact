// creer un input, lui faire passer les données transmises au submit avec la touche entrée
//a chaque fois que l'on passse une données au submit, on créer une nouvelle tâche dans la liste , dans cette tâche il y un 
// input de type checkbox, du texte et un bouton 

import React from "react"
import { useState } from 'react'

//  function Form () {

    const Form = ({addTask}) => {

        const [task, setTask] = useState("");
        const handleChange =(e) => {
            setTask(e.target.value);
        };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task);
    };

};
    
    console.log("task >>", task);
    console.log("addTask >>",addTask);
    console.log("setTask >>",setTask);

    return (
        <>
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder="Ajouter une tâche" value={task} onChange={handleChange}/>
        </form>
        </>
    )



// }


export default Form;