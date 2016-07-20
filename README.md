DESCRIZIONE GENERALE:

Nel nostro progetto per la parte di Technology abbiamo sviluppato come richiesto almeno una pagina per tutto (quasi sempre di più di una) 
ad eccezione di: Il Gruppo (non richiesto) e form acquisto smartphone (opzionale). Il sito rispecchia lo schema P-IDM da noi fatto per la parte
di Design.

Abbiamo utilizzato il toolkit Font Awesome per le sole icone. 
Non abbiamo fatto uso di framework quali Bootstrap poiché ci è sembrato più istruttivo e utile per imparare fare un sito nostro al 100%; quindi 
tutto il codice css, html, js, php presente nel progetto è stato da noi sviluppato.

Per le parti non cliccabili opzionali e non necessarie sono stati aggiunti opportuni alert che segnalano la cosa, oppure opportuni avvisi sulle pagine.
Si consiglia di scegliere nella navigazione:
per i prodotti -> iPhone  (ci sono anche tutti gli altri prodotti presenti su db navigabili ma iPhone è l’unico per cui sono state inserite anche le specifiche tecniche nel db)
per SL-> TIM MUSIC
per assistenza-> offerte rateizzate o screen repair

Abbiamo inoltre creato un database che supporti il sito a livello DATA che si interfaccia con un livello di BUSINESS LOGIC fatto da script php 
e il tutto viene poi interfacciato a livello di PRESENTAZIONE con chiamate ajax agli script php e renderizzato in pagine html.

IL FOCUS:

Nello sviluppare il sito ci siamo concentrati maggiormente sul Multiple group of topic Dispositivi (nel nostro sito chiamato “Prodotti”) sia sul render 
delle pagine che sulla navigazione che permette seguendo i transition link di passare da un topic all’altro. Tutte le pagine relative ai prodotti sono dinamiche
e vengono riempite con query fatte da database attraverso script php che poi vengono richiamati da js con ajax. 

IL DATABASE:

Il database da noi creato ospita 3 tabelle: una per le immagini, una per i prodotti e una per i servizi SL. Come specificato sopra l’accesso al database avviene tramite query da php per poi essere richiamata da script js con ajax.
Il database è stato popolato il più possibile, infatti ci sono molti prodotti visionabili. Le specifiche tecniche dei prodotti sono state legate alla tabella Prodotto, 
si ricorda che le specifiche tecniche sono state inserite soltanto per iPhone.

PHONEGAP:

A malincuore, l'APK creato con Phonegap, non funziona a dovere. 
Nonostante avessimo mantenuto le linee guida, con chiamate a database tramite Ajax&jQuery (senza utilizzare Php) ed avendo svolto dei lavori di ricerca chiedendo anche confronti con i nostri colleghi per cercare di risolvere i problemi,
non abbiamo ottenuto il risultato.
 
