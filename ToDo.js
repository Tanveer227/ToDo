function Add(){
    let task=document.querySelector('.task').value;
    let date=document.querySelector('.date').value;
    List.push({
        task,
        date});
    let prelist=JSON.stringify(List);
    localStorage.setItem('prelist', prelist);
    document.querySelector('.task').value="";
    document.querySelector('.date').value="";
    render();
}
function render(){
    let todoHTML='';
    console.log(List.length);
    for(let i=0;i<List.length;i++){
        let {task, date}=List[i];
        todoHTML+=`
            <div class="listElement">
                ${task}
            </div>
            <div class="listElement">
                ${date}
            </div>
            <button class='delete' onclick="
                List.splice(${i}, 1);
                let prelist=JSON.stringify(List);
                localStorage.setItem('prelist', prelist);
                render();">
                Delete
            </button>
        `
    }
    document.querySelector('.displayList').innerHTML=todoHTML;
}
function enterAdd(event){
    if(event.key==='Enter'){
        Add();
        document.querySelector('.task').value="";
    }
}
let List=JSON.parse(localStorage.getItem('prelist'));
if(!List){
    List=[];
}
render();