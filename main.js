 
const  task = "TodoListga"
const tasks = [];
 function newTodo(){
    alert(`Hush kelibsiz ${task} !`);
 }
 const addTask = ()=>{
  const taskTitle = prompt("TaskTitle bosgin !");
  if(taskTitle){
    const newTitle = {
        
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
            3.  O'zgartirish;
            4.  O'chirish;
            5.  Malumotni ko'rish;
            6.  Dasturni yopish;
            `);
            switch (tanlov){
                case "1":
                    alert("Qoshish");
                    break;
                case "2":
                    alert("Ko'rish");
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


 