
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








  
  /*
   click bouton ajout panier
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
Les commentaires sont ass
*/
