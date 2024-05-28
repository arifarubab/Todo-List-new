import inquirer from "inquirer";

let todo = ["coding", "Gym"];


async function createTodo(todos:string[]) {
    do{
        let answer = await inquirer.prompt(
            {
                type:"list",
                message:"select an option",
                name:"option",
                choices:["Add","Update","View","Delete"],
            }
    );
if(answer.option === "Add"){
    let addMore = await inquirer.prompt(
        {
            type:"input",
            message:"Add task in the list",
            name:"addmore"
        }
    );
    todos.push(addMore.addmore);
    todos.forEach((addMore) => console.log(addMore));
}

if(answer.option === "Update"){
    let UpdateMore = await inquirer.prompt(
        {
            type:"list",
            message:"Update task in the list",
            name:"todos",
            choices:todos.map((item) => (item))
    }

    );
    let addMore = await inquirer.prompt(
        {
            type:"input",
            message:"Add item in the list",
            name:"todo",
    }

    );
    let newTask = todos.filter((val) => val !== UpdateMore.todos);
    todos = [...newTask,addMore.todo];
}

if(answer.option === "View"){
    console.log("****To Do List****");
    console.log(todos);
    console.log("**************");
}
if (answer.option === "Delete"){
    let deleteTask = await inquirer.prompt(
        {
            type:"list",
            message:"Delete task from the list",
            name:"deletetask",
            choices:todos.map((item) => (item))
    }

    );
    let newTask = todos.filter((val) => val !== deleteTask.deletetask);
    todos = [...newTask];
    console.log(todos);
}

}

    while(true)
        

    }

createTodo(todo

);



