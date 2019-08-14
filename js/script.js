
/*********************Menu accordéon Description fiche produit***************************/


$(document).ready(function(){
  $('#barre').click(function(){
        
        $('#rideau').slideToggle(500);
     });

    $('#barre2').click(function(){
        
        $('#rideau2').slideToggle(500);
     });
 
    $('#barre3').click(function(){
        
        $('#rideau3').slideToggle(500);
     });
   
    $('#barre4').click(function(){
        
        $('#rideau4').slideToggle(500);
     });
    });

    /**********************************Récupération photo fiche produit ************************************/
    function recupImg(){
      listimg = document.getElementById('photoFicheProduit').getElementsByTagName('img');
    
      for(var i = 0; i < listimg.length; i++){
         alert(listimg[i].src);
      }
<<<<<<< HEAD
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
    
      alert("ERREUR! Votre demande n'a pas abouti! veuillez re-commencer");}
    }


=======
   }
>>>>>>> 964d2ae067102e7792e11a942a81591279945674











<<<<<<< HEAD

  
  /* click bouton ajout panier
$('.add-to-cart').click(function() {*/

  /* récupération des infos du produit
  var $this = $(this);
  var id = $this.attr('data-id');
  var name = $this.attr('data-name');
  var price = $this.attr('data-price');
  var weight = $this.attr('data-weight');
  var url = $this.attr('data-url');
  var qt = parseInt($('#qt').val());
  inCartItemsNum += qt;*/

  /* mise à jour du nombre de produit dans le widget
  $('#in-cart-items-num').html(inCartItemsNum);

  var newArticle = true;*/

  /* vérifie si l'article est pas déjà dans le panier
  cartArticles.forEach(function(v) {
    // si l'article est déjà présent, on incrémente la quantité
    if (v.id == id) {
      newArticle = false;
      v.qt += qt;
      $('#'+ id).html('<a href="'+ url +'">'+ name +'<br><small>Quantité : <span class="qt">'+ v.qt +'</span></small></a>');
    }
  });*/

  /* s'il est nouveau, on l'ajoute
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
  }*/

  /* sauvegarde le panier
  saveCart(inCartItemsNum, cartArticles);*/

  /* affiche le contenu du panier si c'est le premier article
  cartEmptyToggle();
});
Les commentaires sont ass*/
=======
>>>>>>> 964d2ae067102e7792e11a942a81591279945674
