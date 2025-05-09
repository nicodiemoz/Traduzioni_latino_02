const nomi = [
	{ parola: "accola, ae, m.", traduzione: "abitante" },
	{ parola: "advena, ae, m.", traduzione: "straniero, forestiero" },
	{ parola: "agricola, ae, m.", traduzione: "contadino" },
	{ parola: "ancilla, ae, f.", traduzione: "ancella, serva, schiava" },
	{ parola: "ara, ae, f.", traduzione: "altare" },
	{ parola: "arena, ae, f.", traduzione: "sabbia" },
	{ parola: "auriga, ae, m.", traduzione: "auriga, cocchiere" },
	{ parola: "belua, ae, f.", traduzione: "bestia, belva" },
	{ parola: "bestia, ae, f.", traduzione: "bestia, belva" },
	{ parola: "casa, ae, f.", traduzione: "capanna, tugurio, baracca" },
	{ parola: "cura, ae, f.", traduzione: "preoccupazione, pensiero, inquietudine, cura" },
	{ parola: "diligentia, ae, f.", traduzione: "diligenza, attenzione, scrupolosità" },
	{ parola: "discipula, ae, f.", traduzione: "scolara, allieva" },
	{ parola: "doctrina, ae, f.", traduzione: "cultura, scienza, teoria" },
	{ parola: "domina, ae, f.", traduzione: "padrona, signora, regina" },
	{ parola: "epistula, ae, f.", traduzione: "lettera, epistola, missiva" },
	{ parola: "fabula, ae, f.", traduzione: "favola, fiaba, racconto, mito" },
	{ parola: "familia, ae, f.", traduzione: "famiglia, servitù" },
	{ parola: "fera, ae, f.", traduzione: "fiera, animale, bestia" },
	{ parola: "fortuna, ae, f.", traduzione: "sorte, fortuna, sfortuna" },
	{ parola: "gratia, ae, f.", traduzione: "favore, ringraziamento, gratitudine, riconoscenza, amicizia" },
	{ parola: "harena, ae, f.", traduzione: "sabbia" },
	{ parola: "hasta, ae, f.", traduzione: "lancia, bastone" },
	{ parola: "historia, ae, f.", traduzione: "storia, ricerca, racconto" },
	{ parola: "hostia, ae, f.", traduzione: "vittima (sacrificale)" },
	{ parola: "ignavia, ae, f.", traduzione: "pigritia" },
	{ parola: "incola, ae, m.", traduzione: "abitante" },
	{ parola: "industria, ae, f.", traduzione: "laboriosità, operosità, voglia di lavorare, zelo" },
	{ parola: "iniuria, ae, f.", traduzione: "offesa, ingiustizia, oltraggio, torto, affronto" },
	{ parola: "inopia, ae, f.", traduzione: "povertà" },
	{ parola: "insula, ae, f.", traduzione: "isola, quartiere" },
	{ parola: "ira, ae, f.", traduzione: "ira, collera, rabbia" },
	{ parola: "matrona, ae, f.", traduzione: "matrona, signora, sposa" },
	{ parola: "natura, ae, f.", traduzione: "natura, nascita, qualità, carattere" },
	{ parola: "nauta, ae, m.", traduzione: "marinaio, navigante" },
	{ parola: "nebula, ae, f.", traduzione: "nebbia, nuvola, oscurità, caligine" },
	{ parola: "parsimonia, ae, f.", traduzione: "parsimonia, risparmio, frugalità" },
	{ parola: "pecunia, ae, f.", traduzione: "denaro, ricchezza" },
	{ parola: "perfuga, ae, m.", traduzione: "fuggiasco, disertore" },
	{ parola: "pirata, ae, m.", traduzione: "pirata" },
	{ parola: "poena, ae, f.", traduzione: "pena, castigo, punizione" },
	{ parola: "praeda, ae, f.", traduzione: "bottino" },
	{ parola: "procella, ae, f.", traduzione: "tempesta, burrasca" },
	{ parola: "prudentia, ae, f.", traduzione: "saggezza, buon senso" },
	{ parola: "rixa, ae, f.", traduzione: "rissa, lotta" },
	{ parola: "saevitia, ae, f.", traduzione: "crudeltà" },
	{ parola: "sagitta, ae, f.", traduzione: "freccia, dardo" },
	{ parola: "scientia, ae, f.", traduzione: "conoscenza" },
	{ parola: "sica, ae, f.", traduzione: "pugnale" },
	{ parola: "spelunca, ae, f.", traduzione: "grotta, spelonca" },
	{ parola: "terra, ae, f.", traduzione: "terra, regione" },
	{ parola: "transfuga, ae, m.", traduzione: "disertore" },
	{ parola: "venia, ae, f.", traduzione: "perdono, grazia" },
	{ parola: "victima, ae, f.", traduzione: "vittima (sacrificale)" },
	{ parola: "villa, ae, f.", traduzione: "fattoria, casa di campagna, villa, tenuta" },
	{ parola: "adversarius, ii, m.", traduzione: "nemico, avversario" },
	{ parola: "ager, ri, m.", traduzione: "campo, campagna, territorio" },
	{ parola: "animus, i, m.", traduzione: "animo, coraggio, spirito, sentimento" },
	{ parola: "aquilifer, eri, m.", traduzione: "alfiere" },
	{ parola: "arbiter, ri, m.", traduzione: "arbitro" },
	{ parola: "armiger, eri, m.", traduzione: "scudiero" },
	{ parola: "campus, i, m.", traduzione: "pianura, campo, campagna" },
	{ parola: "captivus, i, m.", traduzione: "prigioniero" },
	{ parola: "culter, ri, m.", traduzione: "coltello" },
	{ parola: "cuniculus, i, m.", traduzione: "galleria, sotterraneo, cunicolo, coniglio" },
	{ parola: "discipulus, i, m.", traduzione: "scolaro, allievo" },
	{ parola: "dolus, i, m.", traduzione: "astuzia, inganno" },
	{ parola: "dominus, i, m.", traduzione: "padrone, signore" },
	{ parola: "fluvius, ii, m.", traduzione: "fiume" },
	{ parola: "gener, eri, m.", traduzione: "genero" },
	{ parola: "gladius, ii, m.", traduzione: "spada" },
	{ parola: "grammaticus, i, m.", traduzione: "maestro" },
	{ parola: "historicus, i, m.", traduzione: "storico" },
	{ parola: "hortus, i, m.", traduzione: "giardino" },
	{ parola: "inimicus, i, m.", traduzione: "nemico, avversario" },
	{ parola: "legatus, i, m.", traduzione: "ambasciatore, luogotenente" },
	{ parola: "liber, ri, m.", traduzione: "libro" },
	{ parola: "Liber, eri, m.", traduzione: "Libero, Bacco" },
	{ parola: "libertus, i, m.", traduzione: "liberto" },
	{ parola: "magister, ri, m.", traduzione: "maestro" },
	{ parola: "minister, ri, m.", traduzione: "sacerdote, aiutante, servo" },
	{ parola: "modus, i, m.", traduzione: "misura, limite, regola, norma, modo" },
	{ parola: "morbus, i, m.", traduzione: "malattia" },
	{ parola: "murus, i, m.", traduzione: "muro, baluardo, difesa" },
	{ parola: "numerus, i, m.", traduzione: "numero" },
	{ parola: "nuntius, ii, m.", traduzione: "messaggero, messaggio" },
	{ parola: "pagus, i, m.", traduzione: "villaggio, borgo, cantone, distretto" },
	{ parola: "philosophus, i, m.", traduzione: "filosofo" },
	{ parola: "pontus, i, m.", traduzione: "mare" },
	{ parola: "populus, i, m.", traduzione: "popolo" },
	{ parola: "puer, eri, m.", traduzione: "bambino, ragazzo" },
	{ parola: "ramus, i, m.", traduzione: "ramo" },
	{ parola: "rivus, i, m.", traduzione: "ruscello, fiumicello" },
	{ parola: "servus, i, m.", traduzione: "schiavo, servo" },
	{ parola: "signifer, eri, m.", traduzione: "vessillifero" },
	{ parola: "socer, eri, m.", traduzione: "suocero" },
	{ parola: "socius, ii, m.", traduzione: "alleato, compagno" },
	{ parola: "tyrannus, i, m.", traduzione: "tiranno, signore, sovrano, re, principe" },
	{ parola: "ventus, i, m.", traduzione: "vento" },
	{ parola: "vesper, eri, m.", traduzione: "sera" },
	{ parola: "vicus, i, m.", traduzione: "villaggio" },
	{ parola: "Aegyptus, i, f.", traduzione: "Egitto" },
	{ parola: "cerasus, i, f.", traduzione: "ciliegio" },
	{ parola: "Corinthus, i, f.", traduzione: "Corinto" },
	{ parola: "cupressus, i, f.", traduzione: "cipresso" },
	{ parola: "humus, i, f.", traduzione: "terra, suolo" },
	{ parola: "laurus, i, f.", traduzione: "alloro" },
	{ parola: "malus, i, f.", traduzione: "melo" },
	{ parola: "myrthus, i, f.", traduzione: "mirto" },
	{ parola: "Peloponnesus, i, f.", traduzione: "Peloponneso" },
	{ parola: "pinus, i, f.", traduzione: "pino" },
	{ parola: "pirus, i, f.", traduzione: "pero" },
	{ parola: "platanus, i, f.", traduzione: "platano" },
	{ parola: "populus, i, f.", traduzione: "pioppo" },
	{ parola: "ulmus, i, f.", traduzione: "olmo" },
	{ parola: "aedificium, ii, n.", traduzione: "edificio" },
	{ parola: "argentum, i, n.", traduzione: "argento, denaro" },
	{ parola: "arvum, i, n.", traduzione: "campo, pianura, regione" },
	{ parola: "aurum, i, n.", traduzione: "oro, denaro" },
	{ parola: "auxilium, ii, n.", traduzione: "aiuto, soccorso" },
	{ parola: "baculum, i, n.", traduzione: "bastone, mazza" },
	{ parola: "bellum, i, n.", traduzione: "guerra" },
	{ parola: "bonum, i, n.", traduzione: "il bene" },
	{ parola: "consilium, ii, n.", traduzione: "decisione, assemblea, intenzione, consiglio" },
	{ parola: "convivium, ii, n.", traduzione: "banchetto" },
	{ parola: "donum, i, n.", traduzione: "dono, regalo" },
	{ parola: "epulum, i, n.", traduzione: "banchetto pubblico o sacro" },
	{ parola: "exemplum, i, n.", traduzione: "esempio, modello, punizione" },
	{ parola: "fanum, i, n.", traduzione: "santuario, tempio" },
	{ parola: "fatum, i, n.", traduzione: "fato, sorte, destino" },
	{ parola: "ferrum, i, n.", traduzione: "ferro, arma" },
	{ parola: "flagellum, i, n.", traduzione: "flagello, frusta, sferza" },
	{ parola: "flagitium, ii, n.", traduzione: "disonore, vergogna" },
	{ parola: "frumentum, i, n.", traduzione: "frumento, grano" },
	{ parola: "gaudium, ii, n.", traduzione: "gioia" },
	{ parola: "impedimentum, i, n.", traduzione: "ostacolo, difficoltà" },
	{ parola: "imperium, ii, n.", traduzione: "comando, dominio" },
	{ parola: "initium, ii, n.", traduzione: "inizio, principio" },
	{ parola: "iurgium, ii, n.", traduzione: "litigio" },
	{ parola: "lutum, ii, n.", traduzione: "fango" },
	{ parola: "malum, i, n.", traduzione: "il male" },
	{ parola: "membrum, i, n.", traduzione: "membro" },
	{ parola: "mendacium, ii, n.", traduzione: "menzogna" },
	{ parola: "monstrum, i, n.", traduzione: "portento, prodigio, mostro" },
	{ parola: "monumentum, i, n.", traduzione: "monumento, ricordo" },
	{ parola: "naufragium, ii, n.", traduzione: "naufragio" },
	{ parola: "negotium, ii, n.", traduzione: "faccenda, lavoro, affare" },
	{ parola: "oppidum, i, n.", traduzione: "città" },
	{ parola: "otium, ii, n.", traduzione: "tempo libero, ozio, tranquillità" },
	{ parola: "periculum, i, n.", traduzione: "pericolo, tentativo" },
	{ parola: "pilum, i, n.", traduzione: "giavellotto" },
	{ parola: "praeceptum, i, n.", traduzione: "insegnamento, regola" },
	{ parola: "praemium, ii, n.", traduzione: "premio, guadagno" },
	{ parola: "proelium, ii, n.", traduzione: "battaglia" },
	{ parola: "pulpamentum, i, n.", traduzione: "spezzatino" },
	{ parola: "regnum, i, n.", traduzione: "regno" },
	{ parola: "remedium, ii, n.", traduzione: "rimedio" },
	{ parola: "signum, i, n.", traduzione: "segnale, indizio, insegna" },
	{ parola: "simulacrum, i, n.", traduzione: "statua" },
	{ parola: "solacium, ii, n.", traduzione: "conforto" },
	{ parola: "stabulum, i, n.", traduzione: "stalla" },
	{ parola: "studium, ii, n.", traduzione: "studio, impegno, passione, zelo" },
	{ parola: "telum, i, n.", traduzione: "giavellotto, lancia, freccia" },
	{ parola: "templum, i, n.", traduzione: "tempio" },
	{ parola: "theatrum, i, n.", traduzione: "teatro" },
	{ parola: "venenum, i, n.", traduzione: "veleno, pozione" },
	{ parola: "verbum, i, n.", traduzione: "parola" },
	{ parola: "vestigium, ii, n.", traduzione: "traccia, impronta" },
	{ parola: "vitium, ii, n.", traduzione: "vizio" },
	{ parola: "votum, i, n.", traduzione: "preghiera" }

]


const verbi = [
    { parola: "adiuvo, as, adiuvi, adiutum, adiuvare", traduzione: "aiutare" },
    { parola: "aedifico, as, avi, atum, are", traduzione: "costruire" },
    { parola: "aestimo, as, avi, atum, are", traduzione: "stimare" },
    { parola: "ambulo, as, avi, atum, are", traduzione: "passeggiare" },
    { parola: "amo, as, avi, atum, are", traduzione: "amare" },
    { parola: "appello, as, avi, atum, are", traduzione: "chiamare" },
    { parola: "apporto, as, avi, atum, are", traduzione: "recare" },
    { parola: "appropinquo, as, avi, atum, are", traduzione: "avvicinarsi" },
    { parola: "canto, as, avi, atum, are", traduzione: "cantare, celebrare" },
    { parola: "capto, as, avi, atum, are", traduzione: "catturare" },
    { parola: "celebro, as, avi, atum, are", traduzione: "celebrare" },
    { parola: "clamo, as, avi, atum, are", traduzione: "gridare" },
    { parola: "comparo, as, avi, atum, are", traduzione: "procurare" },
    { parola: "certo, as, avi, atum, are", traduzione: "gareggiare" },
    { parola: "creo, as, avi, atum, are", traduzione: "creare, nominare" },
    { parola: "delecto, as, avi, atum, are", traduzione: "divertire" },
    { parola: "devoro, as, avi, atum, are", traduzione: "divorare" },
    { parola: "disputo, as, avi, atum, are", traduzione: "discutere" },
    { parola: "do, das, dedi, datum, dare, dare", traduzione: "dare" },
    { parola: "dono, as, avi, atum, are", traduzione: "donare" },
    { parola: "excito, as, avi, atum, are", traduzione: "suscitare" },
    { parola: "explano, as, avi, atum, are", traduzione: "spiegare" },
    { parola: "fabrico, as, avi, atum, are", traduzione: "fabbricare" },
    { parola: "festino, as, avi, atum, are", traduzione: "affrettarsi" },
    { parola: "formido, as, avi, atum, are", traduzione: "temere" },
    { parola: "fugo, as, avi, atum, are", traduzione: "mettere in fuga" },
    { parola: "ignoro, as, avi, atum, are", traduzione: "non conoscere" },
    { parola: "incito, as, avi, atum, are", traduzione: "incitare, incoraggiare" },
    { parola: "inundo, as, avi, atum, are", traduzione: "inondare" },
    { parola: "invoco, as, avi, atum, are", traduzione: "invocare" },
    { parola: "laboro, as, avi, atum, are", traduzione: "faticare" },
    { parola: "lavo, as, lavi, lautum, lavare, lavare", traduzione: "lavare" },
    { parola: "laudo, as, avi, atum, are", traduzione: "lodare" },
    { parola: "macto, as, avi, atum, are", traduzione: "sacrificare" },
    { parola: "narro, as, avi, atum, are", traduzione: "narrare" },
    { parola: "nomino, as, avi, atum, are", traduzione: "nominare" },
    { parola: "nuntio, as, avi, atum, are", traduzione: "annunciare" },
    { parola: "neco, as, avi, atum, are", traduzione: "uccidere" },
    { parola: "obscuro, as, avi, atum, are", traduzione: "oscurare" },
    { parola: "oppugno, as, avi, atum, are", traduzione: "assalire, espugnare" },
    { parola: "opto, as, avi, atum, are", traduzione: "desiderare" },
    { parola: "orno, as, avi, atum, are", traduzione: "ornare" },
    { parola: "oro, as, avi, atum, are", traduzione: "pregare" },
    { parola: "paro, as, avi, atum, are", traduzione: "procurare" },
    { parola: "placo, as, avi, atum, are", traduzione: "placare" },
    { parola: "pugno, as, avi, atum, are", traduzione: "combattere" },
    { parola: "puto, as, avi, atum, are", traduzione: "ritenere" },
    { parola: "recuso, as, avi, atum, are", traduzione: "rifiutare" },
    { parola: "reporto, as, avi, atum, are", traduzione: "conseguire" },
    { parola: "seco, secas, secui, sectum, secare", traduzione: "tagliare" },
    { parola: "servo, as, avi, atum, are", traduzione: "salvare" },
    { parola: "specto, as, avi, atum, are", traduzione: "guardare, osservare, mirare a" },
    { parola: "spero, as, avi, atum, are", traduzione: "sperare, augurarsi, essere certo di" },
    { parola: "sto, stas, steti, statum, stare, stare fermo, stare", traduzione: "stare" },
    { parola: "supero, as, avi, atum, are", traduzione: "superare" },
    { parola: "territo, as, avi, atum, are", traduzione: "atterrire" },
    { parola: "tolero, as, avi, atum, are", traduzione: "sopportare" },
    { parola: "vaco, as, avi, atum, are", traduzione: "essere privo di" },
    { parola: "vasto, as, avi, atum, are", traduzione: "devastare" },
    { parola: "veto, as, vetui, vetitum, vetare", traduzione: "vietare" },
    { parola: "visito, as, avi, atum, are", traduzione: "visitare" },
    { parola: "vito, as, avi, atum, are", traduzione: "evitare" },
    { parola: "vitupero, as, avi, atum, are", traduzione: "biasimare" },
    { parola: "vulnero, as, avi, atum, are", traduzione: "ferire" },
    { parola: "abhorreo, es, abhorrui, ere", traduzione: "detestare" },
    { parola: "admoneo, es, ui, itum, ere", traduzione: "esortare" },
    { parola: "appareo, es, ui, ere", traduzione: "apparire" },
    { parola: "arceo, es, arcui, ere", traduzione: "tenere lontano, allontanare" },
    { parola: "augeo, es, auxi, auctum, ere", traduzione: "accrescere, aumentare, ingrandire" },
    { parola: "caveo, es, cavi, cautum, cavere", traduzione: "guardarsi da..." },
    { parola: "censeo, es, censui, censum, ere", traduzione: "stimare" },
    { parola: "debeo, debes, debui, debitum, debere", traduzione: "dovere" },
    { parola: "deleo, es, evi, etum, ere", traduzione: "distruggere, cancellare" },
    { parola: "doceo, es, docui, doctum, ere", traduzione: "insegnare" },
    { parola: "exerceo, es, ui, itum, ere", traduzione: "esercitare" },
    { parola: "fleo, es, flevi, fletum, flere", traduzione: "piangere" },
    { parola: "floreo, es, florui, ere", traduzione: "fiorire" },
    { parola: "habeo, es, ui, itum, ere", traduzione: "avere" },
    { parola: "horreo, es, ui, ere", traduzione: "spaventarsi di..." },
    { parola: "iaceo, es, iacui, ere", traduzione: "giacere, giacere a terra, essere ammalato" },
    { parola: "impleo, es, evi, etum, ere", traduzione: "riempire" },
    { parola: "iubeo, es, iussi, iussum, iubere", traduzione: "comandare" },
    { parola: "lateo, es, ui, ere", traduzione: "essere nascosto" },
    { parola: "maereo, es, ere", traduzione: "essere triste" },
    { parola: "maneo, es, mansi, mansum, ere", traduzione: "restare, durare" },
    { parola: "moneo, es, ui, itum, ere", traduzione: "consigliare" },
    { parola: "moveo, es, movi, motum, ere", traduzione: "muovere, suscitare" },
    { parola: "noceo, es, ui, itum, ere", traduzione: "danneggiare" },
    { parola: "obsideo, es, obsedi, obsessum, ere", traduzione: "assediare" },
    { parola: "obtineo, es, obtinui, obtentum, ere", traduzione: "tenere, occupare, ottenere, mantenere" },
    { parola: "pareo, es, parui, paritum, ere", traduzione: "ubbidire" },
    { parola: "placeo, es, ui, itum, ere", traduzione: "piacere" },
    { parola: "praebeo, es, ui, itum, ere", traduzione: "offrire" },
    { parola: "praevaleo, es, ui, ere", traduzione: "prevalere" },
    { parola: "spondeo, es, spondere", traduzione: "promettere" },
    { parola: "studeo, es, studui, ere", traduzione: "dedicarsi a, applicarsi, occuparsi di, aspirare a, desiderare, impegnarsi, amare, studiare" },
    { parola: "taceo, es, ui, itum, ere", traduzione: "tacere" },
    { parola: "terreo, es, terrui, territum, ere", traduzione: "atterrire, spaventare, terrorizzare" },
    { parola: "teneo, es, ui, tentum, tenere", traduzione: "tenere" },
    { parola: "timeo, es, ui, tenere, temere", traduzione: "avere paura" },
    { parola: "valeo, es, ui, ere", traduzione: "star bene" },
    { parola: "video, es, vidi, visum, ere", traduzione: "vedere" },
    { parola: "ago, is, egi, actum, agere", traduzione: "fare" },
    { parola: "amitto, is, amisi, amissum, amittere", traduzione: "perdere" },
    { parola: "cado, is, cecidi, cadere", traduzione: "cadere" },
    { parola: "caedo, is, cecidi, caesum, caedere", traduzione: "tagliare, uccidere" },
    { parola: "cognosco, is, cognovi, cognitum, cognoscere", traduzione: "conoscere, venire a sapere" },
    { parola: "colo, is, colui, cultum, colere", traduzione: "coltivare, venerare, abitare" },
    { parola: "consulo, is, consului, consultum, consulere", traduzione: "deliberare" },
    { parola: "contemno, is, contempsi, contemptum, contemnere", traduzione: "disprezzare" },
    { parola: "credo, is, credidi, creditum, credere", traduzione: "credere" },
    { parola: "cupio, is, ivi, itum, ere", traduzione: "desiderare" },
    { parola: "defendo, is, defendi, defensum, defendere", traduzione: "difendere" },
    { parola: "dico, is, dixi, dictum, dicere", traduzione: "dire" },
    { parola: "disco, is, didici, ere", traduzione: "imparare" },
    { parola: "divido, is, divisi, divisum, dividere", traduzione: "dividere" },
    { parola: "duco, is, duxi, ductum, ducere", traduzione: "condurre, guidare" },
    { parola: "eligo, is, elegi, electum, eligere", traduzione: "scegliere" },
    { parola: "evado, is, evasi, evasum, evadere", traduzione: "sfuggire" },
    { parola: "expello, is, expuli, expulsum, expellere", traduzione: "cacciare via" },
    { parola: "fallo, fallis, fefelli, falsum, fallere", traduzione: "ingannare" },
    { parola: "frango, frangis, fregi, fractum, frangere", traduzione: "spezzare, rompere" },
    { parola: "gero, is, gessi, gestum, gerere", traduzione: "fare" },
    { parola: "intellego, is, intellexi, intellectum, intellegere", traduzione: "comprendere, capire" },
    { parola: "lego, is, legi, lectum, legere", traduzione: "leggere" },
    { parola: "mitto, is, misi, missum, mittere", traduzione: "inviare" },
    { parola: "ostendo, is, ostendi, ostensum, ostendere", traduzione: "mostrare" },
    { parola: "pello, pellis, pepuli, pulsum, pellere", traduzione: "spingere, scacciare" },
    { parola: "pendo, is, pependi, pensum, pendere", traduzione: "pesare" },
    { parola: "pergo, is, perrexi, perrectum, pergere", traduzione: "dirigersi" },
    { parola: "peto, is, petivi/petii, petitum, petere", traduzione: "chiedere, assalire, dirigersi" },
    { parola: "quaero, is, quaesivi, quaesitum, quaerere", traduzione: "chiedere" },
    { parola: "pello, is, pepuli, pulsum, pellere", traduzione: "respingere" },
    { parola: "pono, is, posui, positum, ponere", traduzione: "porre" },
    { parola: "relinquo, is, reliqui, relictum, relinquere", traduzione: "lasciare" },
    { parola: "scribo, is, scripsi, scriptum, scribere", traduzione: "scrivere" },
    { parola: "statuo, is, statui, statutum, statuere", traduzione: "stabilire" },
    { parola: "subtraho, is, subtraxi, subtractum, subtrahere", traduzione: "sottrarre" },
    { parola: "trado, is, tradidi, traditum, tradere", traduzione: "consegnare, tramandare" },
    { parola: "vinco, is, vici, victum, vincere", traduzione: "vincere" },
    { parola: "vivo, is, vixi, victum, vivere", traduzione: "vivere" },
    { parola: "aperio, is, aperui, apertum, aperire", traduzione: "aprire, spiegare" },
    { parola: "audio, is, ivi, itum, ire", traduzione: "udire" },
    { parola: "dormio, is, ivi, itum, ire", traduzione: "dormire" },
    { parola: "expedio, is, expedivi, expeditum, expedire", traduzione: "liberare" },
    { parola: "invenio, is, inveni, inventum, ire", traduzione: "trovare" },
    { parola: "venio, is, veni, ventum, ire", traduzione: "venire" },
    { parola: "mollio, is, ivi, itum, ire", traduzione: "rammolire" },
    { parola: "munio, is, ivi, itum, ire", traduzione: "fortificare" },
    { parola: "oboedio, is, oboedivi o oboedii, oboeditum, oboedire", traduzione: "ubbidire" },
    { parola: "punio, is, ivi, itum, ire", traduzione: "punire" },
    { parola: "reperio, is, repperi, repertum, reperire", traduzione: "trovare, ritrovare" },
    { parola: "salio, is, salui, saltum, salire", traduzione: "saltare, danzare" },
    { parola: "scio, is, scivi, scitum, scire", traduzione: "sapere" },
    { parola: "sentio, is, sensi, sensum, sentire", traduzione: "sentire, percepire, pensare, capire" },
    { parola: "servio, is, servivi o servii, servitum, servire", traduzione: "servire, essere schiavo" },
    { parola: "sitio, is, sitii o sitivi, sitire", traduzione: "avere sete" },
    { parola: "venio, is, veni, ventum, venire", traduzione: "arrivare" },
    { parola: "vincio, is, vinxi, vinctum, ire", traduzione: "legare" },
    { parola: "aspicio, is, aspexi, aspectum, aspicere", traduzione: "vedere, scorgere" },
    { parola: "capio, is, cepi, captum, capere", traduzione: "prendere, catturare, conquistare" },
    { parola: "cupio, is, cupivi o cupii, cupitum, cupere", traduzione: "desiderare, bramare" },
    { parola: "facio, is, feci, factum, facere", traduzione: "fare" },
    { parola: "fugio, is, fugi, fugitum, fugere", traduzione: "fuggire" },
    { parola: "iacio, is, ieci, iactum, iacere", traduzione: "scagliare, gettare" },
    { parola: "interficio, is, feci, factum, ere", traduzione: "uccidere" },
    { parola: "pario, is, peperi, partum, parere", traduzione: "generare" },
    { parola: "rapio, is, rapui, raptum, rapere", traduzione: "rubare, rapire" }

];

    
  const congiunzioni_e_avverbi = [
    { parola: "et", traduzione: "anche" },
    { parola: "et... et...", traduzione: "sia... sia (NON sia... che...)" },
    { parola: "atque", traduzione: "e" },
    { parola: "ac", traduzione: "e" },
    { parola: "-que", traduzione: "e" },
    { parola: "nec", traduzione: "non" },
    { parola: "nec... nec...", traduzione: "nè... nè..." },
    { parola: "neque... neque...", traduzione: "nè... nè..." },
    { parola: "aut", traduzione: "oppure" },
    { parola: "vel", traduzione: "oppure" },
    { parola: "sed", traduzione: "ma" },
    { parola: "at", traduzione: "ma" },
    { parola: "vero", traduzione: "ma, invece (ma non sempre)" },
    { parola: "verum", traduzione: "ma, invece (ma non sempre)" },
    { parola: "autem", traduzione: "invece" },
    { parola: "nam", traduzione: "infatti" },
    { parola: "namque", traduzione: "infatti" },
    { parola: "enim", traduzione: "infatti" },
    { parola: "etiam", traduzione: "anche" },
    { parola: "quoque", traduzione: "anche" },
    { parola: "itaque", traduzione: "perciò, quindi" },
    { parola: "ita", traduzione: "così" },
    { parola: "sic", traduzione: "così" },
    { parola: "tamen", traduzione: "tuttavia" },
    { parola: "ut (con il modo indicativo)", traduzione: "come, quando" },
    { parola: "ut (con il modo congiuntivo)", traduzione: "affinché" },
    { parola: "ut (finale)", traduzione: "così che (consecutiva)" },
    { parola: "cum (con il modo indicativo)", traduzione: "quando" },
    { parola: "cum (con il modo congiuntivo)", traduzione: "gerundio presente o passato" },
    { parola: "ubi", traduzione: "dove, quando" },
    { parola: "cum… tum…", traduzione: "non solo... ma anche" },
    { parola: "dum", traduzione: "mentre" },
    { parola: "quod", traduzione: "poiché, perché" },
    { parola: "quia", traduzione: "poiché, perché" },
    { parola: "quoniam", traduzione: "poiché, perché" },
    { parola: "antequam", traduzione: "prima che" },
    { parola: "priusquam", traduzione: "prima che" },
    { parola: "postquam", traduzione: "dopo che" },
    { parola: "posteaquam", traduzione: "dopo che" },
    { parola: "admodum", traduzione: "molto" },
    { parola: "antea", traduzione: "prima" },
    { parola: "deinde", traduzione: "dopo" },
    { parola: "fere", traduzione: "quasi" },
    { parola: "postea", traduzione: "dopo" },
    { parola: "nunc", traduzione: "ora, adesso" },
    { parola: "numquam", traduzione: "mai" },
    { parola: "saepe", traduzione: "spesso" },
    { parola: "semper", traduzione: "sempre" },
    { parola: "statim", traduzione: "subito" },
    { parola: "subito", traduzione: "improvvisamente" },
    { parola: "tandem", traduzione: "infine" },
    { parola: "tum", traduzione: "allora" },
    { parola: "tunc", traduzione: "allora" }
];

let currentWordIndex = 0;
let currentMode = 'nomi';
let shuffledWords = [];

// Funzione per mescolare un array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

document.getElementById("startQuiz").addEventListener("click", function () {
    currentMode = document.getElementById("modalita").value;

    if (currentMode === 'nomi') {
        shuffledWords = [...nomi];
    } else if (currentMode === 'verbi') {
        shuffledWords = [...verbi];
    } else if (currentMode === 'congiunzioni_e_avverbi') {
        shuffledWords = [...congiunzioni_e_avverbi];
    } else {
        shuffledWords = [...nomi, ...verbi, ...congiunzioni_e_avverbi];
    }

    shuffle(shuffledWords);
    currentWordIndex = 0;
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("quizAnswer").style.display = "none";

    // Mostra la prima parola
    showNextWord();
});

document.getElementById("nextBtn").addEventListener("click", function () {
    document.getElementById("quizAnswer").style.display = "block";
    if (currentWordIndex < shuffledWords.length) {
        document.getElementById("nextBtn").textContent = "Mostra traduzione";
    } else {
        document.getElementById("quizPrompt").textContent = "Quiz terminato!";
        document.getElementById("nextBtn").style.display = "none";
    }
});

// Funzione per mostrare la prossima parola
function showNextWord() {
    if (currentWordIndex < shuffledWords.length) {
        let word = shuffledWords[currentWordIndex];
        const visualizzazione = document.getElementById("visualizzazione").value;
        
        if (visualizzazione === 'parola') {
            document.getElementById("quizPrompt").textContent = `${word.parola}`;
            document.getElementById("quizAnswer").textContent = `Traduzione: ${word.traduzione}`;
        } else {
            document.getElementById("quizPrompt").textContent = `${word.traduzione}`;
            document.getElementById("quizAnswer").textContent = `${word.parola}`;
        }

        document.getElementById("quizAnswer").style.display = "none";
        currentWordIndex++;
    }
}
