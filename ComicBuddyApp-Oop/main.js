//The SuperHero Entry
class SuperheroEntry {
    constructor(superheroName, superheroUniverse, superheroPower) {
        this.superheroName = superheroName
        this.superheroUniverse = superheroUniverse
        this.superheroPower = superheroPower

    }
}

//Superhero List Class
class SuperheroList {
    //Add Superhero
    addSuperhero(entry) {
        const listData = document.querySelector('.superhero-list-data');
        const listContainer = document.createElement('ul');
        listContainer.setAttribute('id', 'list');

        listContainer.innerHTML += `
        <li>${entry.superheroName}</li>
        <li>${entry.superheroUniverse}</li>
        <li>${entry.superheroPower}</li>
        <i class="fas fa-trash"></i>       
        `;

        listData.appendChild(listContainer)

    }

    //Clear Superhero Input Fields
    clearSuperheroInputs() {
        [document.querySelector('#name').value,
        document.querySelector('#universe').value,
        document.querySelector('#power').value,] = ['', '', '']
    }

    //Validation Error function
    validationError() {
        document.querySelector('.validate-error').classList.add('show-validation')
        setTimeout(() => {
            document.querySelector('.validate-error').classList.remove('show-validation')

        }, 2500)
    }

    //Validation Succes function
    validationSuccess() {
        document.querySelector('.validate-success').classList.add('show-validation')
        setTimeout(() => {
            document.querySelector('.validate-success').classList.remove('show-validation')

        }, 2500)
    }

}

// StoreSuperhero Class
class StoreSuperhero {

    //Get Superheros From LS
    static getSuperrhero() {
        let superheros;
        if (localStorage.getItem('superheros')===null) {
            superheros = []

        }else{
           superheros = JSON.parse(localStorage.getItem('superheros'));
        }

        return superheros;
    }
    //AD superheros From LS
    static addSuperhero(entry){
        const SuperheroList = StoreSuperhero.getSuperrhero();
        SuperheroList.push(entry);
        localStorage.setItem('superheros', JSON.stringify(SuperheroList))
    }

    // Display Superheros From Local Store
    static displaySuperhero(){
        const superheroList = StoreSuperhero.getSuperrhero();
        superheroList.forEach(superhero => {
            //Instantiating the Superhero Class
            const list =  new SuperheroList();
            list.addSuperhero(superhero)
            
        });
    
    }

    //Remove Superheros from Local Store
    static removeSuperhero(clickedSuperhero){
        const superheroList = StoreSuperhero.getSuperrhero();

        superheroList.forEach((superhero, index) =>{
            if (superhero.superheroName === clickedSuperhero ) {
                superheroList.splice(index,1)                
            }
        })
        localStorage.setItem('superheros' , JSON.stringify(superheroList))
    }

}

//-------------Events-------------
//
document.addEventListener("DOMContentLoaded", StoreSuperhero.displaySuperhero);

//Form Submission Event Listener

const form = document.querySelector('.superhero-form');
form.addEventListener('submit', function (e) {
    e.preventDefault()
    let [superheroName, superheroUniverse, superheroPower] = [
        document.querySelector('#name').value,
        document.querySelector('#universe').value,
        document.querySelector('#power').value,
    ]

    // Instantiating the SuperheroEntry Class
    const entry = new SuperheroEntry(
        superheroName,
        superheroUniverse,
        superheroPower);

    // Instantiating the SuperheroList Class
    const list = new SuperheroList();



    // Validate the form if one or more of the input fields are empty
    if (superheroName === '' || superheroUniverse === '' || superheroPower === '') {
        list.validationError()

    } else {
        list.addSuperhero(entry);
        list.clearSuperheroInputs()
        list.validationSuccess()

        //Adding superhero to Local Storage
        StoreSuperhero.addSuperhero(entry)
    }
    console.log(list)
})



// Deleting Listed Superheros
const listData = document.querySelector('.superhero-list-data');
listData.addEventListener('click', function (e) {
    if (e.target.className==='fas fa-trash') {
        const trash  = e.target.parentNode

        const clickedSuperhero = e.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        StoreSuperhero.removeSuperhero(clickedSuperhero)

        console.log(e)
        


        trash.remove();
    }
       
})