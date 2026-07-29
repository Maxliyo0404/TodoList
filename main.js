 
const  task = "TodoListga"
const tasks = [];
 function newTodo(){
    alert(`Hush kelibsiz ${task} !`);
 }
 const addTask = ()=>{
  const taskTitle = prompt("TaskTitle bosgin !");
  if(taskTitle){
    const newTitle = {
        id:task.length +1,
        title: taskTitle,
        completed: false
    };
    task.push(newTitle);
    alert(`Task ${taskTitle} qo'shish !`);
  } else{
    alert("Bo'sh bo'lishi mumkin emas")
  }
 }
 const viewTasks = () =>{
    if(task.length === 0){
        alert("xatolik");
    } else{
        let taskList = "U sizning taskingiz";
        for(let i = 0; i < task.length; i++){
            const task =tasks [i];
            taskList += `id: ${task.id}, title: ${task.title}, completed: ${task.completed ? "Yes" : "No"}`
            alert(taskList);
        }
    }
 }
   function newList(){
    let tanlov;
     do{
        tanlov = prompt(`Hush kelibsan ${task}
            Tanlov qiling;
            1.  Qo'shish;
            2.  Ko'rish;
     
            4.  O'chirish;
            5.  Malumotni ko'rish;
            6.  Dasturni yopish;
            `);
            switch (tanlov){
                case "1":
                   addTask();
                    break;
                case "2":
                   viewTasks();
                    break;
                case "3":
                    alert("O'zgartirish");
                    break;
                case "4":
                    alert("O'chirish");
                    break;
                case "5":
                    alert("Malumotni ko'rish");
                    break;
                case "1":
                    alert("Xayr");
                    break;
                    default:
                        alert("Noto'g'ri tanlov");
            } 
     } while( tanlov !== "6");
   }
 newTodo();
 newList();



 