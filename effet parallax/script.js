function $id(id){//Raccourci !
	return document.getElementById(id);
}
//On prépare un tableau de tous les éléments portant la classe"parallax"
var parallax_targets = document.getElementsByClassName("parallax");



var scroll_Y;//Variable globale, accessible de partout

document.body.onscroll= function(){//Dès que l'utilisateur scrolle.
	
	scroll_Y=window.scrollY;//On met à jour notre variable scroll_Y
	
	//scroll_Y=document.body.scrollTop;
	//console.log(scroll_Y);

	/*parallax_on_scroll($id("p1_photo"));
	parallax_on_scroll($id("p2_photo"),1.5);
	parallax_on_scroll($id("p1_title"),6);
	*/
	for (var i = 0 ;i < parallax_targets.length ;i++){
		//Boucle xeécutée autant de fois qu'il y a d'éléments dans notre liste
		var elem = parallax_targets[i];


		if (elem.hasAttribute("data-scroll-factor")){//si l'élément possède notre attribut customisé

		var factor = elem.getAttribute("data-scroll-factor");
		
		parallax_on_scroll(elem,factor);

		}else{//si l'élément ne possède pas cet attribut
		parallax_on_scroll(elem);

		}
	}



	/*//Calcul du margin-top à appliquer :

	//récupérer l'écart entre le container de la photo et le haut de la fenêtre
	//$id("p1_photo")-> la photo
	//.parentNode -> son parent (dans le conteneur)
	//.offsetTop -> sa position verticale traitée par le navigateur
	var position_Y = $id("p1_photo").parentNode.offsetTop;

	
	var new_mT = Math.round((scroll_Y-position_Y) / 2);
	//Math.round garantit un nombre entier
	//on soustrait position_Y pour "retarder" l'effet
	//On divise par 2 pour que le rythme de  scroll soit différent (photo VS page) 
	console.log(new_mT);

	//On applique le margin-top
	$id("p1_photo").style.marginTop = new_mT + "px";

*/}
var mouse_X, diff_X;

	document.body.onmousemove = function(){

	//console.log(event);//A chaque mouvement de souris
	mouse_X = event.clientX;//On récupère la position horizontale du pointeur
	//console.log(mouse_X);
	/*diff_X = Math.round((mouse_X - (window.innerWidth/2))*-1/100);
	//l'écart entre le pointeur et la moitié de la fenêtre
	//On mouse_X - (window.innerWidth / 2) car le point 0 est le centre de la fenêtre
	//On multiplie par -1 pour inverser le sens de déplacement
	//On divise par un grand nombre pour adoucir / encadrer le mouvement
	//Math.round garantit un chiffre entier

	//console.log(diff_X);
	$id("p1_photo").style.marginLeft = diff_X + "px";
*/
	/*parallax_on_mousemove($id("p1_photo"));

	parallax_on_mousemove($id("p1_title"),10);
	*/
		for (var i = 0 ;i < parallax_targets.length ;i++){
		//Boucle xeécutée autant de fois qu'il y a d'éléments dans notre liste
		var elem = parallax_targets[i];

		if (elem.hasAttribute("data-mouse-factor")){//si l'élément possède notre attribut customisé

		var factor = elem.getAttribute("data-mouse-factor");
		
		parallax_on_mousemove(elem,factor);

		}else{//si l'élément ne possède pas cet attribut
		parallax_on_mousemove(elem);

		}
		}
	}

function parallax_on_scroll(elem , factor = 2){
	
	//Calcul du margin-top à appliquer :

	//récupérer l'écart entre le container de la photo et le haut de la fenêtre
	//$id("p1_photo")-> la photo
	//.parentNode -> son parent (dans le conteneur)
	//.offsetTop -> sa position verticale traitée par le navigateur
	var position_Y = elem.parentNode.offsetTop;

	
	var new_mT = Math.round((scroll_Y-position_Y) / factor);
	//Math.round garantit un nombre entier
	//on soustrait position_Y pour "retarder" l'effet
	//On divise par 2 pour que le rythme de  scroll soit différent (photo VS page) 
	//console.log(new_mT);

	//On applique le margin-top
	elem.style.marginTop = new_mT + "px";

}
 function parallax_on_mousemove(elem, factor = 50){
	//Math.round pour arrondir
 	diff_X = Math.round((mouse_X - (window.innerWidth/2))*-1/factor);
	//l'écart entre le pointeur et la moitié de la fenêtre
	//On mouse_X - (window.innerWidth / 2) car le point 0 est le centre de la fenêtre
	//On multiplie par -1 pour inverser le sens de déplacement
	//On divise par un grand nombre pour adoucir / encadrer le mouvement
	//Math.round garantit un chiffre entier

	//console.log(diff_X);
	elem.style.marginLeft = diff_X + "px";

 }