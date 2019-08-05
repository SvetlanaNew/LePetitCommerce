/*********************carousel***********************************/
$('.carousel').carousel({
  interval: 4000
})
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
      var continuer = confirm('Voulez vous voir votre compte ?');
      if(continuer == true){
        window.open('compteClient.html');
      }else{
        window.open('index.html');
      }
  };
};
      //focus et blur du formulaire de connexion
document.getElementById("pseudo").onfocus = function () {
this.style.textdecoration="none";
this.style.border = "4px solid black";
this.style.background = "black";
this.style.color = "white";
}
document.getElementById("mdp").onfocus = function () {
this.style.border = "4px solid black";
this.style.background = "black";
this.style.color = "white";
}
document.getElementById("pseudo").onblur = function () {
this.style.border = "2px inset threedface" ;
this.style.background = "white";
this.style.color = "black";
}
document.getElementById("mdp").onblur = function () {
this.style.border = "2px inset threedface";
this.style.background = "white";
this.style.color = "black";
}

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

){
  var continuer = confirm('Voulez vous voir votre compte ?');
    if(continuer == true){
        window.open('compteClient.html');
    }else{
      window.open('index.html');
    }
  };
};
                 //focus et blur du formulaire d'inscription
document.getElementById("pseudo2").onfocus = function () {
  this.style.border = "4px solid black";
  this.style.background = "black";
  this.style.color = "white";
  }
document.getElementById("prenom").onfocus = function () {
  this.style.border = "4px solid black";
  this.style.background = "black";
  this.style.color = "white";
}
document.getElementById("nom").onfocus = function () {
  this.style.textdecoration="none";
  this.style.border = "4px solid black";
  this.style.background = "black";
  this.style.color = "white";
  }
document.getElementById("date_de_naissance").onfocus = function () {
  this.style.border = "4px solid black";
  this.style.background = "black";
  this.style.color = "white";
  }
document.getElementById("email").onfocus = function () {
  this.style.border = "4px solid black";
  this.style.background = "black";
  this.style.color = "white";
  }
document.getElementById("tel").onfocus = function () {
  this.style.border = "4px solid black";
  this.style.background = "black";
  this.style.color = "white";
  }
document.getElementById("adresse").onfocus = function () {
  this.style.border = "4px solid black";
  this.style.background = "black";
  this.style.color = "white";
  }
document.getElementById("ville").onfocus = function () {
  this.style.border = "4px solid black";
  this.style.background = "black";
  this.style.color = "white";
  }
document.getElementById("code_postal").onfocus = function () {
  this.style.border = "4px solid black";
  this.style.background = "black";
  this.style.color = "white";
  }
document.getElementById("mdp2").onfocus = function () {
  this.style.border = "4px solid black";
  this.style.background = "black";
  this.style.color = "white";
  }
document.getElementById("avatar").onfocus = function () {
  this.style.border = "4px solid black";
  this.style.background = "black";
  this.style.color = "white";
  }

      //Blur
document.getElementById("pseudo2").onblur = function () {
  this.style.border = "2px inset threedface" ;
  this.style.background = "white";
  this.style.color = "black";
  }
document.getElementById("prenom").onblur = function () {
  this.style.border = "2px inset threedface";
  this.style.background = "white";
  this.style.color = "black";
  }
document.getElementById("nom").onblur = function () {
  this.style.border = "2px inset threedface" ;
  this.style.background = "white";
  this.style.color = "black";
  }
document.getElementById("date_de_naissance").onblur = function () {
  this.style.border = "2px inset threedface";
  this.style.background = "white";
  this.style.color = "black";
  }
document.getElementById("email").onblur = function () {
  this.style.border = "2px inset threedface" ;
  this.style.background = "white";
  this.style.color = "black";
  }
document.getElementById("tel").onblur = function () {
  this.style.border = "2px inset threedface";
  this.style.background = "white";
  this.style.color = "black";
  }
document.getElementById("adresse").onblur = function () {
  this.style.border = "2px inset threedface" ;
  this.style.background = "white";
  this.style.color = "black";
  }
document.getElementById("ville").onblur = function () {
  this.style.border = "2px inset threedface";
  this.style.background = "white";
  this.style.color = "black";
  }
document.getElementById("code_postal").onblur = function () {
  this.style.border = "2px inset threedface" ;
  this.style.background = "white";
  this.style.color = "black";
  }
document.getElementById("mdp2").onblur = function () {
  this.style.border = "2px inset threedface";
  this.style.background = "white";
  this.style.color = "black";
  }
document.getElementById("avatar").onblur = function () {
  this.style.border = "2px inset threedface";
  this.style.background = "white";
  this.style.color = "black";
  }

  /***************************************************************/


  
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
Les commentaires sont ass*/