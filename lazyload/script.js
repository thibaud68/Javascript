

function lazyload_elem(elem){

	var the_src = elem.getAttribute("data-src");//On récupère l'adresse de l'image à charger
	
	var img = document.createElement("img");//Prépare un nouvel élément <img/>
	/*Note: cet élément n'apparaîtra pas automatiquement dans le HTML, 
	il faudrait pour cela l'y insérer avec apendChild()*/
	img.src = the_src;//Commencer le chargement de l'image
	img.onload = function(){//Instruction à exécuter lorsque l'image est chargée
	
		elem.style.backgroundImage = "url("+ this.src + ")";
		//Ici,"this" fait référence à img , car on est dans une méthode de img

		elem.classList.remove("lazy");
		
	}

}
//var scroll_Y;

function update_scroll() { 

	var scroll_Y = window.scrollY;//haut de la fenêtre

	var scrolled_bottom = scroll_Y + window.innerHeight;//bas de la fenêtre / "ligne de flottaison" 

	var lazyload_targets = document.getElementsByClassName("gallery_element");

////1) lazyload
for (var i = 0; i < lazyload_targets.length; i++) { 

	var the_elem = lazyload_targets[i];
	
	if (the_elem.offsetTop < scrolled_bottom){//the_elem apparaît à l'écran
		lazyload_elem(the_elem);

	}
	//Hauteur du conteneur, donc du document
	var container_height = document.getElementById("gallery").offsetHeight;
	if(scrolled_bottom >= container_height - 10) {
		generate_elems(3);
	}

}
///2)Bonus : scroll infini
}
//(amount)<=>quantité
function generate_elems(amount){
	for (var i = 0 ; i < amount; i++) {
		var random_number = Math.round(Math.random() * 1000);//Nombre aléatoire entre 0 et 1000

	var elem = document.createElement("div");//<div></div>
	elem.className = "gallery_element lazy";//elem.setAttribute("className","gallery_element lazy");
	elem.setAttribute("data-src","https://picsum.photos/800?r=" + random_number);

	document.getElementById("gallery").appendChild(elem);
	}
}

document.body.onscroll = update_scroll;
document.body.onload = update_scroll;
/*//Temporaire
var lazyload_targets = document.getElementsByClassName("gallery_element");

for (var i = 0; i < lazyload_targets.length; i++) { 
	var the_elem = lazyload_targets[i];
	
	the_elem.onclick = function(){lazyload_elem(this)}
		//Ici,"this" fait référence à the_elem,car on est dans une méthode de the_elem
}
*/