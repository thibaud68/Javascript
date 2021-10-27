/*1)Les évènements sont des actions qui se produisent et
 auxquelles on va pouvoir répondre en exécutant un code. 
 Par exemple, on va pouvoir afficher ou cacher du texte suite à un clic d’un utilisateur
  sur un élément, on changer la taille d’un texte lors du passage de la souris d’un utilisateur 
  sur un élément.
Les évènements et leur prise en charge sont l’un des mécanismes principaux
 du JavaScript qui vont nous permettre d’ajouter un vrai dynamisme à nos pages Web.*/

var roll = document.getElementById("carousel_roll");

var slides = document.getElementsByClassName("carousel_elem");

var curr_carousel_elem = -1;

var carousel_duration = 3000;

var carousel_timer;

var vaisseau =document.getElementById("vaisseau");
var astronaute= document.getElementById("astronaute");
var ecran_fin = document.getElementById("ecran_fin");
var les_fonds= document.getElementsByClassName("fond");


function init_carousel() {

	roll.style.width = (slides.length * 100) + "%";
	/*il faut que le carousel_roll fasse autant de fois 100% de la largeur
	de son conteneur qu'il y a d'images à contenir*/
	carousel_goto(0);
	carousel_reset_timer();
}
	//window.onload = init_carousel;
	//window.onload = mafonction2;
	
	//variante permettant d'ajouter plusieurs réponses à l'évènement load
	/*méthode=fonction qui appertient à un objet
	window objet qui est fourni par le navigateur
	addEventListener<->méthode */
	window.addEventListener("load", init_carousel);




function carousel_goto(elem_index) {
     
     roll.style.marginLeft = "-" + (elem_index * 100) + "%";
     //pour afficher une image en particulier,
     //ondoit décaler le roll vers la gauche d'autant d'images qui la précèdent
     //->donc autant de fois 100%
     //->donc l'indice de l'image (dans la liste) fois 100%

     curr_carousel_elem = elem_index;
}


function carousel_goto_next() {

	var new_index = curr_carousel_elem + 1;
	
	if (new_index >= slides.length){
		new_index = 0;
	}

	carousel_goto(new_index);

    
}
document.getElementById("carousel-nav-next").addEventListener("click", carousel_reset_timer);


document.getElementById("carousel-nav-next").addEventListener("click", carousel_goto_next);
/*remise à zéro du défilement auto : on s'assure d'avoir la durée complète pour chaque image,même
 si l'utilisateur vient de faire défiler le carousel*/


function carousel_goto_prev() {
    	var new_index = curr_carousel_elem - 1;
	
	if (new_index <0){
		new_index = slides.length -1;//pour retourner à la dernière image.
		/*note : l'indice slides.length correspondra toujours au dernier indice dispo +1 
		(car le premier élément est l'indice 0 et non 1)*/
	}

	carousel_goto(new_index);

    
}


document.getElementById("carousel-nav-prev").addEventListener("click", carousel_reset_timer);


document.getElementById("carousel-nav-prev").addEventListener("click", carousel_goto_prev);


function carousel_reset_timer() {
       
       clearInterval(carousel_timer);/*on annule termine l'intervallerégulier

       on (re)lance l'action à intervalle régulier : 
       la fonction carousel_goto_next sera appellée
       tous les [carousel_duration]milliecondes*/
       carousel_timer = setInterval(carousel_goto_next, carousel_duration);

}

function rafraichir_animation(){
	var nouvelle_position_vaisseau = document.getElementById("vaisseau").style.left =100 +%;
    rafraichir_sens_vaisseau();
    rafraichir_etat_flammes();
    if (SCROLL_Y >= ) {
        sauvetage_astronaute();
    }


function rafraichir_sens_vaisseau(){
	
}