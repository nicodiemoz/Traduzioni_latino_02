const nomi = [
    { parola: "accola", traduzione: "abitante" },
    { parola: "advena", traduzione: "straniero, forestiero" },
    { parola: "agricola", traduzione: "contadino" },
    { parola: "ancilla", traduzione: "ancella, serva, schiava" },
    { parola: "ara", traduzione: "altare" },
    { parola: "arena", traduzione: "sabbia" },
    { parola: "auriga", traduzione: "auriga, cocchiere" },
    { parola: "belua", traduzione: "bestia, belva" },
    { parola: "bestia", traduzione: "bestia, belva" },
    { parola: "casa", traduzione: "capanna, tugurio, baracca" },
    { parola: "cura", traduzione: "preoccupazione, pensiero, inquietudine, cura" },
    { parola: "diligentia", traduzione: "diligenza, attenzione, scrupolosità" },
    { parola: "discipula", traduzione: "scolara, allieva" },
    { parola: "doctrina", traduzione: "cultura, scienza, teoria" },
    { parola: "domina", traduzione: "padrona, signora, regina" },
    { parola: "epistula", traduzione: "lettera, epistola, missiva" },
    { parola: "fabula", traduzione: "favola, fiaba, racconto, mito" },
    { parola: "familia", traduzione: "famiglia, servitù" },
    { parola: "fera", traduzione: "fiera, animale, bestia" },
    { parola: "fortuna", traduzione: "sorte, fortuna, sfortuna" },
    { parola: "gratia", traduzione: "favore, ringraziamento, gratitudine, riconoscenza, amicizia" },
    { parola: "harena", traduzione: "sabbia" },
    { parola: "hasta", traduzione: "lancia, bastone" },
    { parola: "historia", traduzione: "storia, ricerca, racconto" },
    { parola: "hostia", traduzione: "vittima (sacrificale)" },
    { parola: "ignavia", traduzione: "pigritia" },
    { parola: "incola", traduzione: "abitante" },
    { parola: "industria", traduzione: "laboriosità, operosità, voglia di lavorare, zelo" },
    { parola: "iniuria", traduzione: "offesa, ingiustizia, oltraggio, torto, affronto" },
    { parola: "inopia", traduzione: "povertà" },
    { parola: "insula", traduzione: "isola, quartiere" },
    { parola: "ira", traduzione: "ira, collera, rabbia" },
    { parola: "matrona", traduzione: "matrona, signora, sposa" },
    { parola: "natura", traduzione: "natura, nascita, qualità, carattere" },
    { parola: "nauta", traduzione: "marinaio, navigante" },
    { parola: "nebula", traduzione: "nebbia, nuvola, oscurità, caligine" },
    { parola: "parsimonia", traduzione: "parsimonia, risparmio, frugalità" },
    { parola: "pecunia", traduzione: "denaro, ricchezza" },
    { parola: "perfuga", traduzione: "fuggiasco, disertore" },
    { parola: "pirata", traduzione: "pirata" },
    { parola: "poena", traduzione: "pena, castigo, punizione" },
    { parola: "praeda", traduzione: "bottino" },
    { parola: "procella", traduzione: "tempesta, burrasca" },
    { parola: "prudentia", traduzione: "saggezza, buon senso" },
    { parola: "rixa", traduzione: "rissa, lotta" },
    { parola: "adversarius", traduzione: "nemico, avversario" },
    { parola: "ager", traduzione: "campo, campagna, territorio" },
    { parola: "animus", traduzione: "animo, coraggio, spirito, sentimento" },
    { parola: "aquilifer", traduzione: "alfiere" },
    { parola: "arbiter", traduzione: "arbitro" },
    { parola: "armiger", traduzione: "scudiero" },
    { parola: "campus", traduzione: "pianura, campo, campagna" },
    { parola: "captivus", traduzione: "prigioniero" },
    { parola: "culter", traduzione: "coltello" },
    { parola: "cuniculus", traduzione: "galleria, sotterraneo, cunicolo, coniglio" },
    { parola: "discipulus", traduzione: "scolaro, allievo" },
    { parola: "dolus", traduzione: "astuzia, inganno" },
    { parola: "dominus", traduzione: "padrone, signore" },
    { parola: "fluvius", traduzione: "fiume" },
    { parola: "gener", traduzione: "genero" },
    { parola: "gladius", traduzione: "spada" },
    { parola: "grammaticus", traduzione: "maestro" },
    { parola: "historicus", traduzione: "storico" },
    { parola: "hortus", traduzione: "giardino" },
    { parola: "inimicus", traduzione: "nemico, avversario" },
    { parola: "legatus", traduzione: "ambasciatore, luogotenente" },
    { parola: "liber", traduzione: "libro" },
    { parola: "Liber", traduzione: "Libero, Bacco" },
    { parola: "libertus", traduzione: "liberto" },
    { parola: "magister", traduzione: "maestro" },
    { parola: "minister", traduzione: "sacerdote, aiutante, servo" },
    { parola: "modus", traduzione: "misura, limite, regola, norma, modo" },
    { parola: "morbus", traduzione: "malattia" },
    { parola: "murus", traduzione: "muro, baluardo, difesa" },
    { parola: "numerus", traduzione: "numero" },
    { parola: "nuntius", traduzione: "messaggero, messaggio" },
    { parola: "pagus", traduzione: "villaggio, borgo, cantone, distretto" },
    { parola: "philosophus", traduzione: "filosofo" },
    { parola: "pontus", traduzione: "mare" },
    { parola: "populus", traduzione: "popolo" },
    { parola: "puer", traduzione: "bambino, ragazzo" },
    { parola: "ramus", traduzione: "ramo" },
    { parola: "rivus", traduzione: "ruscello, fiumicello" },
    { parola: "servus", traduzione: "schiavo, servo" },
    { parola: "signifer", traduzione: "vessillifero" },
    { parola: "socer", traduzione: "suocero" },
    { parola: "socius", traduzione: "alleato, compagno" },
    { parola: "Aegyptus", traduzione: "Egitto" },
    { parola: "cerasus", traduzione: "ciliegio" },
    { parola: "Corinthus", traduzione: "Corinto" },
    { parola: "cupressus", traduzione: "cipresso" },
    { parola: "humus", traduzione: "terra, suolo" },
    { parola: "laurus", traduzione: "alloro" },
    { parola: "malus", traduzione: "melo" },
    { parola: "myrthus", traduzione: "mirto" },
    { parola: "Peloponnesus", traduzione: "Peloponneso" },
    { parola: "pinus", traduzione: "pino" },
    { parola: "pirus", traduzione: "pero" },
    { parola: "platanus", traduzione: "platano" },
    { parola: "populus", traduzione: "pioppo" },
    { parola: "ulmus", traduzione: "olmo" },
    { parola: "aedificium", traduzione: "edificio" },
    { parola: "argentum", traduzione: "argento, denaro" },
    { parola: "arvum", traduzione: "campo, pianura, regione" },
    { parola: "aurum", traduzione: "oro, denaro" },
    { parola: "auxilium", traduzione: "aiuto, soccorso" },
    { parola: "baculum", traduzione: "bastone, mazza" },
    { parola: "bellum", traduzione: "guerra" },
    { parola: "bonum", traduzione: "il bene" },
    { parola: "consilium", traduzione: "decisione, assemblea, intenzione, consiglio" },
    { parola: "convivium", traduzione: "banchetto" },
    { parola: "donum", traduzione: "dono, regalo" },
    { parola: "epulum", traduzione: "banchetto pubblico o sacro" },
    { parola: "exemplum", traduzione: "esempio, modello, punizione" },
    { parola: "fanum", traduzione: "santuario, tempio" },
    { parola: "fatum", traduzione: "fato, sorte, destino" },
    { parola: "ferrum", traduzione: "ferro, arma" },
    { parola: "flagellum", traduzione: "flagello, frusta, sferza" },
    { parola: "flagitium", traduzione: "disonore, vergogna" },
    { parola: "frumentum", traduzione: "frumento, grano" },
    { parola: "gaudium", traduzione: "gioia" },
    { parola: "impedimentum", traduzione: "ostacolo, difficoltà" },
    { parola: "imperium", traduzione: "comando, dominio" },
    { parola: "initium", traduzione: "inizio, principio" },
    { parola: "iurgium", traduzione: "litigio" },
    { parola: "lutum", traduzione: "fango" },
    { parola: "malum", traduzione: "il male" },
    { parola: "membrum", traduzione: "membro" },
    { parola: "mendacium", traduzione: "menzogna" },
    { parola: "monstrum", traduzione: "portento, prodigio, mostro" },
    { parola: "monumentum", traduzione: "monumento, ricordo" },
    { parola: "naufragium", traduzione: "naufragio" },
    { parola: "negotium", traduzione: "faccenda, lavoro, affare" },
    { parola: "oppidum", traduzione: "città" },
    { parola: "otium", traduzione: "tempo libero, ozio, tranquillità" },
    { parola: "periculum", traduzione: "pericolo, tentativo" },
    { parola: "pilum", traduzione: "giavellotto" },
    { parola: "praeceptum", traduzione: "insegnamento, regola" },
    { parola: "praemium", traduzione: "premio, guadagno" },
    { parola: "proelium", traduzione: "battaglia" },
    { parola: "pulpamentum", traduzione: "spezzatino" },
    { parola: "regnum", traduzione: "regno" },
    { parola: "remedium", traduzione: "rimedio" },
    { parola: "signum", traduzione: "segnale, indizio, insegna" },
    { parola: "simulacrum", traduzione: "statua" },
    { parola: "solacium", traduzione: "conforto" },
    { parola: "stabulum", traduzione: "stalla" },
    { parola: "studium", traduzione: "studio, impegno, passione, zelo" }
]


const verbi = [
    { parola: "adiuvo", traduzione: "aiutare" },  
    { parola: "aedifico", traduzione: "costruire" },  
    { parola: "aestimo", traduzione: "stimare" },  
    { parola: "ambulo", traduzione: "passeggiare" },  
    { parola: "amo", traduzione: "amare" },  
    { parola: "appello", traduzione: "chiamare" },  
    { parola: "apporto", traduzione: "recare" },  
    { parola: "appropinquo", traduzione: "avvicinarsi" },  
    { parola: "canto", traduzione: "cantare, celebrare" },  
    { parola: "capto", traduzione: "catturare" },  
    { parola: "celebro", traduzione: "celebrare" },  
    { parola: "clamo", traduzione: "gridare" },  
    { parola: "comparo", traduzione: "procurare" },  
    { parola: "certo", traduzione: "gareggiare" },  
    { parola: "creo", traduzione: "creare, nominare" },  
    { parola: "delecto", traduzione: "divertire" },  
    { parola: "devoro", traduzione: "divorare" },  
    { parola: "disputo", traduzione: "discutere" },  
    { parola: "do", traduzione: "dare" },  
    { parola: "dono", traduzione: "donare" },  
    { parola: "excito", traduzione: "suscitare" },  
    { parola: "explano", traduzione: "spiegare" },  
    { parola: "fabrico", traduzione: "fabbricare" },  
    { parola: "festino", traduzione: "affrettarsi" },  
    { parola: "formido", traduzione: "temere" },  
    { parola: "fugo", traduzione: "mettere in fuga" },  
    { parola: "ignoro", traduzione: "non conoscere" },  
    { parola: "incito", traduzione: "incitare, incoraggiare" },  
    { parola: "inundo", traduzione: "inondare" },  
    { parola: "invoco", traduzione: "invocare" },  
    { parola: "laboro", traduzione: "faticare" },  
    { parola: "lavo", traduzione: "lavare" },  
    { parola: "laudo", traduzione: "lodare" },  
    { parola: "macto", traduzione: "sacrificare" },  
    { parola: "narro", traduzione: "narrare" },  
    { parola: "nomino", traduzione: "nominare" },  
    { parola: "nuntio", traduzione: "annunciare" },  
    { parola: "neco", traduzione: "uccidere" },  
    { parola: "obscuro", traduzione: "oscurare" },  
    { parola: "oppugno", traduzione: "assalire, espugnare" },  
    { parola: "opto", traduzione: "desiderare" },  
    { parola: "orno", traduzione: "ornare" },  
    { parola: "oro", traduzione: "pregare" },  
    { parola: "abhorreo", traduzione: "detestare" },  
    { parola: "admoneo", traduzione: "esortare" },  
    { parola: "appareo", traduzione: "apparire" },  
    { parola: "arceo", traduzione: "tener lontano, allontanare" },  
    { parola: "augeo", traduzione: "accrescere, aumentare, ingrandire" },  
    { parola: "caveo", traduzione: "guardarsi da" },  
    { parola: "censeo", traduzione: "stimare" },  
    { parola: "debeo", traduzione: "dovere" },  
    { parola: "deleo", traduzione: "distruggere, cancellare" },  
    { parola: "doceo", traduzione: "insegnare" },  
    { parola: "exerceo", traduzione: "esercitare" },  
    { parola: "fleo", traduzione: "piangere" },  
    { parola: "floreo", traduzione: "fiorire" },  
    { parola: "habeo", traduzione: "avere" },  
    { parola: "horreo", traduzione: "spaventarsi di" },  
    { parola: "iaceo", traduzione: "giacere" },  
    { parola: "impleo", traduzione: "riempire" },  
    { parola: "iubeo", traduzione: "comandare" },  
    { parola: "lateo", traduzione: "essere nascosto" },  
    { parola: "maereo", traduzione: "essere triste" },  
    { parola: "maneo", traduzione: "restare, durare" },  
    { parola: "moneo", traduzione: "consigliare" },  
    { parola: "moveo", traduzione: "muovere, suscitare" },  
    { parola: "ago", traduzione: "fare" },  
    { parola: "amitto", traduzione: "perdere" },  
    { parola: "cado", traduzione: "cadere" },  
    { parola: "caedo", traduzione: "tagliare, uccidere" },  
    { parola: "cognosco", traduzione: "conoscere, venire a sapere" },  
    { parola: "colo", traduzione: "coltivare, venerare, abitare" },  
    { parola: "consulo", traduzione: "deliberare" },  
    { parola: "contemno", traduzione: "disprezzare" },  
    { parola: "credo", traduzione: "credere" },  
    { parola: "cupio", traduzione: "desiderare" },  
    { parola: "defendo", traduzione: "difendere" },  
    { parola: "dico", traduzione: "dire" },  
    { parola: "disco", traduzione: "imparare" },  
    { parola: "divido", traduzione: "dividere" },  
    { parola: "duco", traduzione: "condurre, guidare" },  
    { parola: "eligo", traduzione: "raccogliere, scegliere" },  
    { parola: "evado", traduzione: "sfuggire" },  
    { parola: "expello", traduzione: "cacciar via" },  
    { parola: "fallo", traduzione: "ingannare" },  
    { parola: "frango", traduzione: "spezzare, rompere" },  
    { parola: "gero", traduzione: "fare" },  
    { parola: "intellego", traduzione: "comprendere, capire" },  
    { parola: "lego", traduzione: "leggere" },  
    { parola: "mitto", traduzione: "inviare" },  
    { parola: "ostendo", traduzione: "mostrare" },  
    { parola: "pello", traduzione: "spingere, scacciare" },  
    { parola: "pendo", traduzione: "pesare" },  
    { parola: "pergo", traduzione: "dirigersi" },  
    { parola: "peto", traduzione: "chiedere, assalire, dirigersi" },  
    { parola: "quaero", traduzione: "chiedere" },  
    { parola: "aspicio", traduzione: "vedere, scorgere" },  
    { parola: "capio", traduzione: "prendere, catturare, conquistare" },  
    { parola: "cupio", traduzione: "desiderare, bramare" },  
    { parola: "facio", traduzione: "fare" },  
    { parola: "fugio", traduzione: "fuggire" },  
    { parola: "iacio", traduzione: "scagliare, gettare" },  
    { parola: "interficio", traduzione: "uccidere" },  
    { parola: "pario", traduzione: "generare" },  
    { parola: "rapio", traduzione: "rubare, rapire" }  

];

    
  const congiunzioni_e_avverbi = [
    { parola: "et", traduzione: "e, anche" },
    { parola: "et... et...", traduzione: "sia... sia (NON sia... che...)" },
    { parola: "atque", traduzione: "e" },
    { parola: "ac", traduzione: "e" },
    { parola: "-que", traduzione: "e" },
    { parola: "nec", traduzione: "e non" },
    { parola: "nec... nec...", traduzione: "nè... nè..." },
    { parola: "neque... neque...", traduzione: "nè... nè..." },
    { parola: "aut", traduzione: "o, oppure" },
    { parola: "vel", traduzione: "o, oppure" },
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
    { parola: "ut", traduzione: "come, quando (con il modo indicativo)" },
    { parola: "ut", traduzione: "affinché (con il modo congiuntivo)" },
    { parola: "cum", traduzione: "quando (con il modo indicativo)" },
    { parola: "cum", traduzione: "gerundio presente o passato (con il modo congiuntivo)" },
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
        document.getElementById("nextBtn").textContent = "Prossima Parola";
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
