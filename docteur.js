var texte= document.getElementById ('texte');

function mooving (titre,joie,id){
	var cercle= document.getElementById (id);
	cercle.style.background='red';
	texte.firstChild.innerHTML=titre;
	texte.lastChild.innerHTML= joie;
}

function time (id){
	var cercle= document.getElementById (id);
	texte.firstChild.innerHTML='';
	texte.lastChild.innerHTML='Le corps humain est la structure culturelle et physique du corps d\'un être humain.';
	cercle.style.background='black';
}