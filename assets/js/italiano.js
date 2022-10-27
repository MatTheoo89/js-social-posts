/*
<!-- post di esempio/template, da togliere/commentare e generare da JS -->
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">Phil Mangione</div>
                        <div class="post-meta__time">4 mesi fa</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
            <div class="post__image">
                <img src="https://unsplash.it/600/300?image=171" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
                    </div>
                </div> 
            </div>            
        </div>
*/



/*
  Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

  Utilizzando la base dati fornita e prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

  Formattare le date in formato italiano (gg/mm/aaaa) || variabile data.toLocaleDateString()



  ****BONUS**

1
Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

2
Gestire l’assenza dell’immagine profilo con un elemento di fallback che contiene le iniziali dell’utente (es. Luca Formicola > LF).

3
Al click su un pulsante “Mi Piace” di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.
*/

// generare un template ciclando l'array di oggetti [forEach] passandogli tutto
// stampare in pagina tutto quello generato [mi serve output da html]
// le date nel template aggiungere ${created}.toLocaleDateString() e dovrebbe restituire giusto NON FUNZIONA allora provo .split("-").reverse().join("-")
