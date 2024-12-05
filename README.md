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

logica js
//1.effetuare chiamata AJAX all'API con axios
//2.ciclare array di oggetti ottenuto grazie a thunderClient con un forEach, destrutturo e prendo solo title e url e stampo
//3. funzione che stampa la struttura html delle card con innerhtml