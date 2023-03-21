//get the home page to load
window.addEventListener('load',()=>{
    const form=document.querySelector("#new-task-form");  //get the task list to load, id "new task form"
    const input=document.querySelector("#new-task-input"); //get the input section to load
    const list_el=document.querySelector("#tasks"); //get the list element with the id "task"

    form.addEventListener('submit',(e)=>{    //submit form
        e.preventDefault();     //stop from submiting the form to refresh the page
        
        const task= input. value;   //get the task
        if (!task) {
            alert("");   //if there is not anything written, please fill out task
            return;                //meanwhile, we don't want anything to happen
        }
        
        var task_el=document.querySelector("#new-task-submit");
        task_el.addEventListener('click',function(){
            alert(task_el.dataset.task);
        });

        
        //alert("Hey,You just created "+task+"!")


        const task_el=document.createElement("div");      //introduce the task div element
        task_el.classList.add("task");    //create a class list to add task
        
        const task_content_el=document.createElement("div"); //create a div element
        task_content_el.classList.add("content"); //give the element a class list to add content class
        //task_content_el.innerText=task;  //set the inner value equal to task, but do not need the line about text, just have div is enough

        task_el.appendChild(task_content_el);  //in task element, append task content element

        const task_input_el =document.createElement("input"); //document create an input element
        task_input_el.classList.add("text");     //give the input a class of text 
        task_input_el.type="text";      //give the input a type category
        task_input_el.value=task;    //input value should be what is in the task
        task_input_el.setAttribute("readonly","readonly") //set the attribute of readonly

        task_content_el .appendChild (task_input_el);  //in content element, append the input element

        const task_actions_el = document.createElement("div");  //create a div element
        task_actions_el.classList.add("actions");  //in task_actions element, create a actions class

        const task_edit_el= document.createElement("button") //create a new button element
        task_edit_el.classList.add("edit"); //give the element class of edit
        task_edit_el.innerHTML="Edit"; //write in edit

        const task_delete_el=document.createElement("button"); //create a button element
        task_delete_el.classList.add("delete"); // give the element the class of delete
        task_delete_el.innerHTML="Delete";  //write in delete

        task_actions_el.appendChild(task_edit_el);    
        task_actions_el.appendChild(task_delete_el)

        task_el.appendChild(task_actions_el);   //in task element, append actions element

        list_el.appendChild(task_el);   //in list element, Append task element

        input.value="";    //input value=nothing prevents the input bar from issues/errors

        
        task_edit_el.addEventListener('click',()=>{               //on click, add event listener
            if(task_edit_el.innerText.toLowerCase()=="edit")      //if innerText is "edit" (lowercase makes it all to match) 
            {task_input_el.removeAttribute("readonly");            //remove readonly attribute
            task_input_el.focus();                             //task input  will instantly focus to write
            task_edit_el.innerText="Save";                     //edit inner text will become save
            }else{                                                   //if inner text is not readonly
                task_input_el.setAttribute("readonly","readonly");    //set the attribute to read only
                task_edit_el.innerText="Edit";                       //let the innver text become save
            }
        })

        task_delete_el.addEventListener('click',()=>{             //on click, add task_delete eventlistener
            list_el.removeChild(task_el)                 // in list element, remove task element
        })

    })
})