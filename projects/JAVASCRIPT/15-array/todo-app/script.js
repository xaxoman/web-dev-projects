
   // creo un array dove salvo le attività già completate 
   //  l'array è fuori dalla funzione perché altrimenti si azzera ogni volta che aggiungo un'attività 
   const completed_tasks = [];


   function addTask() {
    
    const task_value = document.getElementById("task").value.trim(); // prendo il valore stringa dall'input
    const task_date = document.getElementById("task-date").value;
    const task_time = document.getElementById("task-time").value;
 
    if (task_value !== '') {
 
         // creo il container DIV per task e inizializzo i relativi tag input e label dentro
         const check_box_wrap = document.createElement("div");
         check_box_wrap.classList.add("tasks-container"); // gli aggiungo una classe per poter gestire lo stile
 
         // creo il container per la checkbox e la label
         const checkbox_label_container = document.createElement("div");
        checkbox_label_container.style.display = "flex";

         // creo la checkbox
         const check_box_input = document.createElement("input");
         check_box_input.type = "checkbox";
 
         // creo l'etichetta per la checkbox
         const check_box_label = document.createElement("label");
         check_box_label.innerHTML = task_value;
     
         // creo il container per la data e l'ora dell'attività
         const date_time_container = document.createElement("div");
                date_time_container.classList.add("date-time-container");
        
        // creo i tag per la data e l'ora dell'attività
         const check_box_date = document.createElement("p");
         check_box_date.innerHTML = task_date + " ~ " ;
     
         const check_box_time = document.createElement("p");
         check_box_time.innerHTML = task_time;
       
        // aggiungo gli elementi al contenitore
        checkbox_label_container.appendChild(check_box_input);
        checkbox_label_container.appendChild(check_box_label);

        date_time_container.appendChild(check_box_date);
        date_time_container.appendChild(check_box_time);

        check_box_wrap.appendChild(checkbox_label_container);
        check_box_wrap.appendChild(date_time_container);

        // aggiungo il contenitore al documento
        document.body.appendChild(check_box_wrap);
 
         // come rimuovere un'attività una volta cliccata la spunta
         // aggiungo un event listener per controllare se la spunta è stata cliccata
         check_box_input.addEventListener('change', () => {
         
             if (check_box_input.checked) { // se la spunta è attiva rimuovi il div che contiene la task
                 
                 check_box_label.style.textDecoration = "line-through";
                 check_box_label.style.color = "gray";
 
                 // imposto un delay di 2s per dare una transizione più fluida alla rimoazione della task
                 setTimeout(() => {
             
                     // add tasks to the completed tasks array
                     completed_tasks.push(check_box_label.innerHTML);
                     console.log(completed_tasks);
                     console.log(completed_tasks.length);
                     document.body.removeChild(check_box_wrap); // Remove the entire task container
                 }, 900);
             }
         });
 
         // Clear the input field after adding the task
         document.getElementById("task").value = '';
    }
 
    else {
 
       const error_message = document.createElement("p");
       error_message.innerHTML = "Task can't be empty";
       error_message.style.color = "red";
       error_message.style.fontWeight = "bold";
       error_message.style.textAlign = "center";
       document.body.appendChild(error_message);
 
       // elimino il messaggio di errore dopo 2s
       setTimeout(() => {
         document.body.removeChild(error_message); // Remove the entire task container
     }, 2000);
 
    }
 
 }

       function showCompleted() {
        
        /* 
        se nel container create sotto è presente almeno un attività 
       allora elimina tutto per aggiornare la lista con i nuovi valori 
        */
        let existingSection = document.getElementById("completed-tasks-section");
        if (existingSection) {
            document.body.removeChild(existingSection);
        }
    
        if (completed_tasks.length > 0) {
            // Create a container for the completed tasks
            const completed_tasks_section = document.createElement("div");
            completed_tasks_section.id = "completed-tasks-section"; // Set an ID to easily find and remove this section later
            document.body.appendChild(completed_tasks_section);
    
            // Create a title for the completed tasks section
            const completed_tasks_title = document.createElement("h2");
            completed_tasks_title.innerHTML = "Completed Tasks"; 
            completed_tasks_section.appendChild(completed_tasks_title);
    
            // Now create the list of completed tasks
            for (let i = 0; i < completed_tasks.length; i++) {
                // Create the container for each task
                const completed_tasks_container = document.createElement("div");
                completed_tasks_container.classList.add("completed_tasks_container");
    
                // Create the label and checkbox for the task
                const completed_task_label = document.createElement("label");
                const completed_task_checkbox = document.createElement("input");
                completed_task_checkbox.type = "checkbox";
                completed_task_checkbox.checked = true; // Make the checkbox checked as the task is completed
                completed_task_label.innerHTML = completed_tasks[i];
    
                // Append the checkbox and label to the container
                completed_tasks_container.appendChild(completed_task_checkbox);
                completed_tasks_container.appendChild(completed_task_label);
    
                // Append the task container to the completed tasks section
                completed_tasks_section.appendChild(completed_tasks_container);
            }  
        } 
        
        else {
            const error_message = document.createElement("p");
            error_message.innerHTML = "No completed tasks";
            error_message.style.color = "red";
            error_message.style.fontWeight = "bold";
            error_message.style.textAlign = "center";
            document.body.appendChild(error_message);
    
            // Remove the error message after 2 seconds
            setTimeout(() => {
                document.body.removeChild(error_message);
            }, 2000);
        }
    }
    