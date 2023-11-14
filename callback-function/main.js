const getDataBtn = document.querySelector("button");
const cat = document.querySelector(".cat");
const dog = document.querySelector('.dog');

getDataBtn.addEventListener('click',getData)

function getData() {
    let getToDos = (callback) =>{
        const data = new XMLHttpRequest();
        data.addEventListener('readystatechange', function () {
            if (this.status === 200 && this.readyState === 4) {
                const dataRetrieved = JSON.parse(data.responseText)
                
                callback(undefined, dataRetrieved)               
            } else if (this.readyState === 4) {
                console.log('Error Fetching Data')
                callback('Error Fetching Data', undefined)                
            }            
        })
        data.open('GET','https://jsonplaceholder.typicode.com/todos/', true);
        data.send()
    } 
    cat.classList.add("show")
    getToDos((error, toDoData) =>{
        if (error) {
            console.log(error)
        }else{
            console.log(toDoData)
        }
    } )
    dog.classList.add("show")      
}