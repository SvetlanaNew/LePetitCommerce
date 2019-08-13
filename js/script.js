
/*****************************************formulaire1 connexion************************/

function resultat(){
  if(document.formulaire1.pseudo.value.length < 5 
      || document.formulaire1.pseudo.value.length > 15)
  {
    alert('Le pseudo doit comporter entre 5 et 15 caractères !');
  }
  if(document.formulaire1.mdp.value.length < 8 
       || document.formulaire1.mdp.value.length > 16)
  {
    alert('Le mot de passe doit comporter entre 8 et 16 caractères !');
  }
  if(document.formulaire1.pseudo.value.length >= 5 
     && document.formulaire1.pseudo.value.length <= 15
       && document.formulaire1.mdp.value.length >= 8
          && document.formulaire1.mdp.value.length <=16)
          { 
            alert('Bienvenue! vous êtes connecté')
           
            }else{
              alert("ERREUR! Votre coonexion a échoué");
        
            };
};
   

/*******************************formulaire2 inscription*************************/

function resultat2(){
if(document.formulaire2.pseudo2.value.length < 5 
  || document.formulaire2.pseudo2.value.length > 15)
{
  alert('Le pseudo doit comporter entre 5 et 15 caractères !');
}
if(document.formulaire2.prenom.value.length < 3 
  || document.formulaire2.prenom.value.length > 25)
{
  alert('Le prénom doit comporter entre 3 et 25 caractères !');
}
if(document.formulaire2.nom.value.length < 3 
  || document.formulaire2.nom.value.length > 25)
{
  alert('Le nom doit comporter entre 3 et 25 caractères !');
}
if(document.formulaire2.email.value.length == "")
{
  alert('mail non valide');
}
if(document.formulaire2.tel.value.length < 10)
{
  alert('Le tel doit comporter 10 nombres !');
}
/*if(document.formulaire2.tel.value.length.typeof != 'Number')
{
alert('Le tel doit comporter uniquement des nombres!')
}*/
if(document.formulaire2.ville.value.length == "")
{
alert('ville non valide');
}
if(document.formulaire2.code_postal.value.length < 5 )
{
alert('code postal non valide');
}
if(document.formulaire2.mdp2.value.length < 8 
  || document.formulaire2.mdp2.value.length > 16)
{
  alert('Le mot de passe doit comporter entre 8 et 16 caractères !');
}

if(document.formulaire2.pseudo2.value.length >= 5 
  && document.formulaire2.pseudo2.value.length <= 15 
    && document.formulaire2.prenom.value.length > 3 
      && document.formulaire2.prenom.value.length < 25
        && document.formulaire2.email.value.length != ""
          && document.formulaire2.tel.value.length === 10
            && document.formulaire2.ville.value.length != ""
              && document.formulaire2.code_postal.value.length === 5 
                && document.formulaire2.mdp2.value.length >= 8 
                  && document.formulaire2.mdp2.value.length <=16

// && document.formulaire2.tel.value.typeof ==='number'
// && document.formulaire2.code_postal.value.typeof === 'number'

)      { 
  alert('Votre compte a été créé avec succes!')
 
  }else{
    alert("ERREUR! Votre inscription a échoué");

  };
};


  /*****************Formulaire3 contact**********************************************/


  function resultat3(){
    if(document.formulaireContact.nom3.value.length < 3 
      || document.formulaireContact.nom3.value.length > 25)
    {
      alert('Le nom doit comporter entre 3 et 25 caractères !');
    }
    if(document.formulaireContact.prenom3.value.length < 3 
      || document.formulaireContact.prenom3.value.length > 25)
    {
      alert('Le prénom doit comporter entre 3 et 25 caractères !');
    }
    if(document.formulaireContact.email3.value.length == "")
    {
      alert('mail non valide');
    }
    if(document.formulaireContact.entreprise.value.length == "")
    {
      alert('entreprise non valide');
    }
    if(document.formulaireContact.pays3.value.length == "")
    {
      alert('pays non valide');
    }
    if(document.formulaireContact.message3.value.length == "")
    {
      alert('message non valide');
    }

    
    if( document.formulaireContact.nom3.value.length > 3 
          && document.formulaireContact.nom3.value.length < 25
            && document.formulaireContact.prenom3.value.length > 3 
              && document.formulaireContact.prenom3.value.length < 25
                && document.formulaireContact.email3.value.length != ""
                  && document.formulaireContact.entreprise.value.length != ""
                    && document.formulaireContact.pays3.value.length != ""
                      && document.formulaireContact.message3.value.length != ""
      ){ 
      alert('Votre message a bien été envoyer! Vous recevrez un mail de confirmation dès reception de votre message.')
     
      }else{
        alert("ERREUR! Votre demande n'a pas abouti!");
  
      }
  };

 /*****************Formulaire4 candidature**********************************************/


 function resultat4(){
  if(document.formulaireRecrutement.nom4.value.length < 3 
    || document.formulaireRecrutement.nom4.value.length > 25)
  {
    alert('Le nom doit comporter entre 3 et 25 caractères !');
  }
  if(document.formulaireRecrutement.prenom4.value.length < 3 
    || document.formulaireRecrutement.prenom4.value.length > 25)
  {
    alert('Le prénom doit comporter entre 3 et 25 caractères !');
  }
  if(document.formulaireRecrutement.email4.value.length == "")
  {
    alert('mail non valide');
  }
  if(document.formulaireRecrutement.entreprise2.value.length == "")
  {
    alert('entreprise non valide');
  }
  if(document.formulaireRecrutement.cv.value.length == "")
  {
    alert('aucun fichier choisi');
  }
  if(document.formulaireRecrutement.lettreM.value.length == "")
  {
    alert('aucun fichier choisi');
  }
  if(document.formulaireRecrutement.message4.value.length == "")
  {
    alert('message non valide');
  }

  
  if( document.formulaireRecrutement.nom4.value.length > 3 
        && document.formulaireRecrutement.nom4.value.length < 25
          && document.formulaireRecrutement.prenom4.value.length > 3 
            && document.formulaireRecrutement.prenom4.value.length < 25
              && document.formulaireRecrutement.email4.value.length != ""
                && document.formulaireRecrutement.entreprise2.value.length != ""
                  && document.formulaireRecrutement.cv.value.length != ""
                    && document.formulaireRecrutement.lettreM.value.length != ""
                      && document.formulaireRecrutement.message4.value.length != ""
    ){ 
    alert('Votre candidature a bien été envoyer! Vous recevrez un email de confirmation dès reception de votre dossier.')
   
    }else{
      alert("ERREUR! Votre demande n'a pas abouti! veuillez re-commencer");

    }
};
/*********************Formulaire prise rendez vous***************************/
function resultat5(){
  if(document.formulaireRendezVous.nom5.value.length < 3 
    || document.formulaireRendezVous.nom5.value.length > 25)
  {
    alert('Le nom doit comporter entre 3 et 25 caractères !');
  }
  if(document.formulaireRendezVous.prenom5.value.length < 3 
    || document.formulaireRendezVous.prenom5.value.length > 25)
  {
    alert('Le prénom doit comporter entre 3 et 25 caractères !');
  }
  if(document.formulaireRendezVous.email5.value.length == "")
  {
    alert('mail non valide');
  }
  if(document.formulaireRendezVous.calendrier.value.length == "")
  {
    alert('Date non valide');
  }
  if( document.formulaireRendezVous.nom5.value.length > 3 
        && document.formulaireRendezVous.nom5.value.length < 25
          && document.formulaireRendezVous.prenom5.value.length > 3 
            && document.formulaireRendezVous.prenom5.value.length < 25
              && document.formulaireRendezVous.email5.value.length != ""
                      && document.formulaireRendezVous.calendrier.value.length != ""
    ){ 
    alert('Votre DEMANDE a bien été envoyer! Vous recevrez un email de confirmation dès reception de votre dossier.')
   
    }else{
      alert("ERREUR! Votre demande n'a pas abouti! veuillez re-commencer");

    }
};
/**************evaluation commentaires***********************/
var done=false
var pic = new Array();
pic[0]=new Image();
  pic[0].src="img/star.png";
pic[1]=new Image();
  pic[1].src="img/star2.png";
var bareme = new Array("peu ","passablement ","moyennement","presque","") 
 
  function rate(level){
  if (done){return false;}
    for(i=1;i<6;i++){ document.getElementById('_'+i).src=(level<i)?pic[0].src:pic[1].src;
    document.getElementById('choix').innerHTML="Votre choix : "+level+" étoile(s)   "+bareme[level-1]+" satisfaisant" 
    }
    }
    
  function zero(){
      for(i=1;i<6;i++){ document.getElementById('_'+i).src=pic[0].src;
      done=false;
      document.getElementById('choix').innerHTML="Votre choix : 0 étoile(s)" 
  
      }
      }
  function valider(){
    alert('Votre évaluation a été enregistrée!');
  done=true;
  document.getElementById('choix').innerHTML+='   VALID&Eacute;';

}
/*********************Formulaire Commentaire***************************/
function resultat6(){
  if(document.formulaireCommentaire.nom6.value.length < 3 
    || document.formulaireCommentaire.nom6.value.length > 25)
  {
    alert('Le nom doit comporter entre 3 et 25 caractères !');
  }
  if(document.formulaireCommentaire.prenom6.value.length < 3 
    || document.formulaireCommentaire.prenom6.value.length > 25)
  {
    alert('Le prénom doit comporter entre 3 et 25 caractères !');
  }
  if(document.formulaireCommentaire.email6.value.length == "")
  {
    alert('mail non valide');
  }
  if(document.formulaireCommentaire.message6.value.length == "")
  {
    alert('message non valide');
  }
  if( document.formulaireCommentaire.nom6.value.length > 3 
        && document.formulaireCommentaire.nom6.value.length < 25
          && document.formulaireCommentaire.prenom6.value.length > 3 
            && document.formulaireCommentaire.prenom6.value.length < 25
              && document.formulaireCommentaire.email6.value.length != ""
                && document.formulaireCommentaire.message6.value.length != ""
    ){ 
    alert('Votre Commentaire a bien été envoyer! il sera visible dans 24H! Vous recevrez un email de confirmation dès sa parution')
   
    }else{
      alert("ERREUR! Votre demande n'a pas abouti! veuillez re-commencer");

    }
};
  




















  
  /* click bouton ajout panier
$('.add-to-cart').click(function() {

  // récupération des infos du produit
  var $this = $(this);
  var id = $this.attr('data-id');
  var name = $this.attr('data-name');
  var price = $this.attr('data-price');
  var weight = $this.attr('data-weight');
  var url = $this.attr('data-url');
  var qt = parseInt($('#qt').val());
  inCartItemsNum += qt;

  // mise à jour du nombre de produit dans le widget
  $('#in-cart-items-num').html(inCartItemsNum);

  var newArticle = true;

  // vérifie si l'article est pas déjà dans le panier
  cartArticles.forEach(function(v) {
    // si l'article est déjà présent, on incrémente la quantité
    if (v.id == id) {
      newArticle = false;
      v.qt += qt;
      $('#'+ id).html('<a href="'+ url +'">'+ name +'<br><small>Quantité : <span class="qt">'+ v.qt +'</span></small></a>');
    }
  });

  // s'il est nouveau, on l'ajoute
  if (newArticle) {
    $('#cart-dropdown').prepend('<li id="'+ id +'"><a href="'+ url +'">'+ name +'<br><small>Quantité : <span class="qt">'+ qt +'</span></small></a></li>');

    cartArticles.push({
      id: id,
      name: name,
      price: price,
      weight: weight,
      qt: qt,
      url: url
    });
  }

  // sauvegarde le panier
  saveCart(inCartItemsNum, cartArticles);

  // affiche le contenu du panier si c'est le premier article
  cartEmptyToggle();
});
Les commentaires sont ass */