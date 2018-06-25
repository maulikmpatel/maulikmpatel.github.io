addEventListeners();

function addEventListeners() {
    var navButton = document.querySelector('.nav-menu');
    if (navButton) {
        navButton.addEventListener('click', function() {
            showNavMenu(this.nextElementSibling);
        });
    }
    var cards = document.querySelector('.cards');
    if (cards) {
        cards.addEventListener('click', function(e) {
            if(e.target.tagName === "BUTTON"){
                deleteCard(e.target.parentElement.parentElement)
            }
        });
    }
    var submitButton = document.querySelector('.submit');
    if (submitButton){
        submitButton.addEventListener('click', function(){
            addNewCard();

        });
    }
}

function deleteCard(elem) {
	elem.remove()
}
function showNavMenu(elem) {
    elem.classList.toggle('nav-menu');
}
function addNewCard(){
    
	var card = document.createElement('section');
	card.classList.add('card');
        var header = document.createElement('header');
        var h2 = document.createElement('h2');
        	h2.innerText = document.querySelector('input[type="text"]').value
   
        var button = document.createElement('button')
        	button.innerText = '+'
      
        var main = document.createElement('main');
        var p = document.createElement('p');
        	p.innerText = document.querySelector('textarea').value
    	card.appendChild(header);
    	card.appendChild(main);
   		main.appendChild(p);
    	header.appendChild(h2);
    	header.appendChild(button);
    	var cards = document.querySelector('.cards');
        cards.appendChild(card);
        // document.querySelector('input[type="text"]').value = "";
        // document.querySelector('textarea').value = "";


        
}