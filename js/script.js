
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

    }