Photo Blog
===
**CONSEGNA**
**Milestone 1**
Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)
**Milestone 2**
Utilizzando Postman o Thunder Client, testiamo una chiamata all’endpoint di JSON Placeholder:
https://jsonplaceholder.typicode.com/photos?_limit=6
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
**Milestone 3**
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API di JSON Placeholder, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
**Bonus**
rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata
======================================================================================
logica js
//1.effetuare chiamata AJAX all'API con axios
//2.ciclare array di oggetti ottenuto grazie a thunderClient con un forEach, destrutturo e prendo solo title e url e stampo
//3. funzione che stampa la struttura html delle card con innerhtml
=======================================================================================
Seconda giornata per il Photo Blog:
**CONSEGNA**
**Milestone 1**
Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, disponiamo un’immagine qualunque ed un button di chiusura.
**Milestone 2**
Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il `display: none` .
Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
Cliccando invece il button di chiusura, l’overlay scompare nuovamente.
**Milestone 3**
Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
Ci sono diversi modi di farlo, prova a sperimentare :faccia_leggermente_sorridente:
**Bonus**
Spostandosi col mouse sopra le foto, queste si zoommano, ruotano di 10 gradi e la loro ombra aumenta, il tutto in maniera fluida. Inoltre il mouse diventa un puntatore, per far capire all’utente che può cliccare
=========================================================================================
logica js seconda giornata
//1.creare nuovi dati del bottone e dell'overlay
//2.mostrare overlay al clic
//3.mostrare l'immagine cliccata nell'overlay
//4.evento per chiudere l'overlay con bottone
//5.bonus ruota card
=========================================================================================
//1.riprodurlo normalmente come nello screen con html e css
//2.logica per farlo scomparire e riapparire 