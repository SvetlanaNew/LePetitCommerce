

    /**********************************Récupération photo fiche produit ************************************/
    function recupImg(){
      listimg = document.getElementById('photoFicheProduit').getElementsByTagName('img');
    
      for(var i = 0; i < listimg.length; i++){
         alert(listimg[i].src);
      }
      }

    


/**************************tableau js**************************************/



var donnees = {
  chaussuresF: [{
/*sandale*/
    Titre: 'Sandale kaki',
    Taille: ['36','38','40'],
    Prix: '169 €',
    category: 'sandales',
    img1: 'img\femme\chaussures\sandales\sandale_kaki_laniere_1.jpg',
    img2: 'img\femme\chaussures\sandales\sandale_kaki_laniere_2.jpg',
    img3: 'img\femme\chaussures\sandales\sandale_kaki_laniere_3.jpg'
  },{
    Titre: 'Sandale transparent',
    Taille: ['36','38','40'],
    Prix: '135 €',
    category: 'sandales',
    img1: 'img\femme\chaussures\sandales\sandale_kaki_transparent_1.jpg',
    img2: 'img\femme\chaussures\sandales\sandale_kaki_transparent_2.jpg',
    img3: 'img\femme\chaussures\sandales\sandale_kaki_transparent_3.jpg'
  },{
    Titre: 'Sandale léopard',
    Taille: ['36','38','40'],
    Prix: '289 €',
    category: 'sandales',
    img1: 'img\femme\chaussures\sandales\sandale_leopard_1.jpg',
    img2: 'img\femme\chaussures\sandales\sandale_leopard_2.jpg',
    img3: 'img\femme\chaussures\sandales\sandale_leopard_3.jpg'
  },{
    Titre:'Sandale kaki transparent',
    Taille: ['37','38','39'],
    Prix: '120 €',
    category: 'sandales',
    img1: 'img\femme\chaussures\sandales\sandale_kaki_transparent_1.jpg',
    img2: 'img\femme\chaussures\sandales\sandale_kaki_transparent_2.jpg',
    img3: 'img\femme\chaussures\sandales\sandale_kaki_transparent_3.jpg'
  },{
    Titre: 'Sandale multicolore croco',
    Taille: ['37','38','39'],
    Prix: '110 €',
    category: 'sandales',
    img1: 'img\femme\chaussures\sandales\sandale_multicolor_croco_1.jpg',
    img2: 'img\femme\chaussures\sandales\sandale_multicolor_croco_2.jpg',
    img3: 'img\femme\chaussures\sandales\sandale_multicolor_croco_3.jpg'
  },{
    Titre: 'Sandale noir compensé',
    Taille: ['34','36','38','40'],
    Prix: '89.99 €',
    category: 'sandales',
    img1: 'img\femme\chaussures\sandales\sandale_noir_compense_1.jpg',
    img2: 'img\femme\chaussures\sandales\sandale_noir_compense_2.jpg',
    img3: 'img\femme\chaussures\sandales\sandale_noir_compense_3.jpg'
  },{
    Titre: 'sandales noir perle',
    Taille: ['37','38','39'],
    Prix: '120 €',
    category: 'sandales',
    img1: 'img\femme\chaussures\sandales\sandale_noir_perle_1.jpg',
    img2: 'img\femme\chaussures\sandales\sandale_noir_perle_2.jpg',
    img3: 'img\femme\chaussures\sandales\sandale_noir_perle_3.jpg'
  },{
    Titre: 'sandales rouge',
    Taille: ['37','38','39'],
    Prix: '120 €',
    category: 'sandales',
    img1: 'img\femme\chaussures\sandales\sandale_rouge_laniere_1.jpg',
    img2: 'img\femme\chaussures\sandales\sandale_rouge_laniere_2.jpg',
    img3: 'img\femme\chaussures\sandales\sandale_rouge_laniere_3.jpg'
  },{

    /*Bottine*/
    Titre: 'Bottine transparente',
    Taille: ['37','38','39'],
    Prix: '110 €',
    category: 'Bottine',
    img1: 'img\femme\chaussures\bottine\bottine_transparent_1.jpg',
    img2: 'img\femme\chaussures\bottine\bottine_transparent_2.jpg',
    img3: 'img\femme\chaussures\bottine\bottine_transparent_3.jpg'
  },{
    Titre: 'Bottine léopard',
    Taille: ['34','36','38','40'],
    Prix: '89.99 €',
    category: 'bottines',
    img1: 'img\femme\chaussures\bottine\bottine_bleu_croco_1.jpg',
    img2: 'img\femme\chaussures\bottine\bottine_bleu_croco_2.jpg',
    img3: 'img\femme\chaussures\bottine\bottine_bleu_croco_3.jpg'
  },{
    Titre: 'Bottine bleu croco',
    Taille: ['37','38','39'],
    Prix: '120 €',
    category: 'bottines',
    img1: 'img\femme\chaussures\bottine\bottine_bleu_croco_1.jpg',
    img2: 'img\femme\chaussures\bottine\bottine_bleu_croco_2.jpg',
    img3: 'img\femme\chaussures\bottine\bottine_bleu_croco_3.jpg'
  },{
    Titre: 'Bottine diamant',
    Taille: ['37','38','39'],
    Prix: '110 €',
    category: 'bottines',
    img1: 'img\femme\chaussures\bottine\bottine_diamant_1.jpg',
    img2: 'img\femme\chaussures\bottine\bottine_diamant_2.jpg',
    img3: 'img\femme\chaussures\bottine\bottine_diamant_3.jpg'
  },{
    Titre: 'Bottine kaki',
    Taille: ['36','38','40'],
    Prix: '69.99 €',
    category: 'bottines',
    img1: 'img\femme\chaussures\bottine\bottine_kaki_1.jpg',
    img2: 'img\femme\chaussures\bottine\bottine_kaki_2.jpg',
    img3: 'img\femme\chaussures\bottine\bottine_kaki_3.jpg',
  },{
    Titre: 'Bottine kaki croco',
    Taille: ['34','36','38','40'],
    Prix: '89.99 €',
    category: 'bottines',
    img1: 'img\femme\chaussures\bottine\bottine_kaki_croco_1.jpg',
    img2: 'img\femme\chaussures\bottine\bottine_kaki_croco_2.jpg',
    img3: 'img\femme\chaussures\bottine\bottine_kaki_croco_3.jpg'
  },{
    Titre: 'Bottine noir',
    Taille: ['34','36','38','40'],
    Prix: '89.99 €',
    category: 'bottines',
    img1: 'img\femme\chaussures\bottine\bottine_noir_1.jpg',
    img2: 'img\femme\chaussures\bottine\bottine_noir_2.jpg',
    img3: 'img\femme\chaussures\bottine\bottine_noir_3.jpg'
  },{
    Titre: 'Bottine noir en daim',
    Taille: ['34','36','38','40'],
    Prix: '89.99 €',
    category: 'bottines',
    img1: 'img\femme\chaussures\bottine\bottine_noir_daim_lacet_1.jpg',
    img2: 'img\femme\chaussures\bottine\bottine_noir_daim_lacet_2.jpg',
    img3: 'img\femme\chaussures\bottine\bottine_noir_daim_lacet_3.jpg'
  },{
    Titre: 'Bottine rouge vernis',
    Taille: ['34','36','38','40'],
    Prix: '89.99 €',
    category: 'bottines',
    img1: 'img\femme\chaussures\bottine\bottine_rouge_vernis_1.jpg',
    img2: 'img\femme\chaussures\bottine\bottine_rouge_vernis_2.jpg',
    img3: 'img\femme\chaussures\bottine\bottine_rouge_vernis_3.jpg'
  },{
    Titre: 'Bottine rose en daim',
    Taille: ['34','36','38','40'],
    Prix: '89.99 €',
    category: 'bottines',
    img1: 'img\femme\chaussures\bottine\bottine_rose_daim_1.jpg',
    img2: 'img\femme\chaussures\bottine\bottine_rose_daim_2.jpg',
    img3: 'img\femme\chaussures\bottine\bottine_rose_daim_3.jpg'
  },{
    Titre: 'Bottine Bottine rouge tissu',
    Taille: ['34','36','38','40'],
    Prix: '89.99 €',
    category: 'bottines',
    img1: 'img\femme\chaussures\bottine\bottine_rouge_tissu_1.jpg',
    img2: 'img\femme\chaussures\bottine\bottine_rouge_tissu_2.jpg',
    img3: 'img\femme\chaussures\bottine\bottine_rouge_tissu_3.jpg'
  },{
/*Escarpins*/
Titre: 'Escarpins argent',
Taille: ['34','36','38','40'],
Prix: '89.99 €',
category: 'escarpins',
img1: 'img\femme\chaussures\escarpins\escarpin_argent_1.jpg',
img2: 'img\femme\chaussures\escarpins\escarpin_argent_2.jpg',
img3: 'img\femme\chaussures\escarpins\escarpin_argent_3.jpg'
},{
Titre: 'Escarpins crème',
Taille: ['34','36','38','40'],
Prix: '89.99 €',
category: 'escarpins',
img1: 'img\femme\chaussures\escarpins\escarpin_creme_1.jpg',
img2: 'img\femme\chaussures\escarpins\escarpin_creme_1.jpg',
img3: 'img\femme\chaussures\escarpins\escarpin_creme_1.jpg'
},{
  Titre: 'Top Belleville',
  Taille: ['34','36','38','40'],
  Prix: '100 €',
  Collection: ' - Collection Été 2020',
  category: 'Top',
  img1: 'img/vtmts/femme/top/belleville.jpg',
  img2: 'img/vtmts/femme/top/belleville (1).jpg',
  img3: 'img/vtmts/femme/top/belleville (2).jpg'
},{
  Titre: 'Top Bonnie',
  Taille: ['36','38','40'],
  Prix: '155 €',
  Collection: ' - Collection Été 2020',
  category: 'Top',
  img1: 'img/vtmts/femme/top/bonnie.jpg',
  img2: 'img/vtmts/femme/top/bonnie (1).jpg',
  img3: 'img/vtmts/femme/top/bonnie (2).jpg'
},{
  Titre: 'Top Bourgeon',
  Taille: ['36','38','40'],
  Prix: '135 €',
  Collection: ' - Collection Été 2020',
  category: 'Top',
  img1: 'img/vtmts/femme/top/bourgeon.jpg',
  img2: 'img/vtmts/femme/top/bourgeon (1).jpg',
  img3: 'img/vtmts/femme/top/bourgeon (2).jpg'
},{
  Titre: 'Top Creative',
  Taille: ['36','38','40'],
  Prix: '140 €',
  Collection: ' - Collection Été 2020',
  category: 'Top',
  img1: 'img/vtmts/femme/top/creative.jpg',
  img2: 'img/vtmts/femme/top/creative (1).jpg',
  img3: 'img/vtmts/femme/top/creative (2).jpg'
},{
















  
  /* click bouton ajout panier
$('.add-to-cart').click(function() {*/

  /* récupération des infos du produit
   $this = $(this);
   id = $this.attr('data-id');
   name = $this.attr('data-name');
   price = $this.attr('data-price');
   weight = $this.attr('data-weight');
   url = $this.attr('data-url');
   qt = parseInt($('#qt').val());
  inCartItemsNum += qt;*/

  /* mise à jour du nombre de produit dans le widget
  $('#in-cart-items-num').html(inCartItemsNum);

   newArticle = true;*/

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
