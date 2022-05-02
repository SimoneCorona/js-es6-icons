const arrayItems = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
const item = document.querySelector(".row");

arrayItems.forEach(element => {
	item.innerHTML +=  `<div class="item_wrapper">
							<i class="${element.family} ${element.prefix}${element.name} ${element.color}"></i>  
							<p>${(element.name)}</p>
						</div>`;
}); 

// BONUS
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
const typeAnimal = arrayItems.filter((element) => {return element.type === 'animal'})
console.log(typeAnimal);

const typeVegetable = arrayItems.filter((element) => {return element.type === 'vegetable'})
console.log(typeVegetable);

const typeUser = arrayItems.filter((element) => {return element.type === 'user'})
console.log(typeUser);


const selectTypeitem = document.getElementById('selectorItem').addEventListener('change', function() {
	console.log(this.value);
	
	if (this.value === 'animal') {
		item.innerHTML = " ";
		typeAnimal.forEach(element => {
			item.innerHTML +=  `<div class="item_wrapper">
									<i class="${element.family} ${element.prefix}${element.name} ${element.color}"></i>  
									<p>${(element.name)}</p>
							   </div>`; 	
						   }); 

    } else if (this.value === 'vegetable') {
		item.innerHTML = " ";
		typeVegetable.forEach(element => {
			item.innerHTML +=  `<div class="item_wrapper">
									<i class="${element.family} ${element.prefix}${element.name} ${element.color}"></i>  
									<p>${(element.name)}</p>
						   		</div>`; 	
		});

	} else if (this.value === 'user') {
		item.innerHTML = " ";
		typeUser.forEach(element => {
			item.innerHTML +=  `<div class="item_wrapper">
									<i class="${element.family} ${element.prefix}${element.name} ${element.color}"></i>  
									<p>${(element.name)}</p>
							   </div>`; 	
						   });

	} else (this.value === 'All') 
		arrayItems.forEach(element => {
		item.innerHTML = " ";
		item.innerHTML +=  `<div class="item_wrapper">
								<i class="${element.family} ${element.prefix}${element.name} ${element.color}"></i>  
								<p>${(element.name)}</p>
							</div>`;
		});
})
