const nomi_json = {
    "1": "",
    "2": "Isola di San Salvador",
    "3": "Santa Maria de la Concepciòn",
    "4": "Fernandina",
    "5": "Baia Di Bariay",
    "6": "Baia di Baracoa",
    "7": "Hispaniola",
    "8": "Bahía de Los Mosquitos",
    "9": "Tortuga",
    "10": "Capo Samanà",
    "11": "             ",
    "12": "Gomera",
    "13": "Dominica 1",
    "14": "Antille",
    "15": "Santa Cruz",
    "16": "Porto Rico",
    "17": "Baia Samanà",
    "18": "Puerto Grande",
    "19": "Baia Guantanamo",
    "20": "Giamaica",
    "21": "",
    "22": "Canarie",
    "23": "Dominica 2",
    "24": "Capo Verde",
    "25": "Golfo di Paria",
    "26": "Delta dell’Orinoco",
    "27": "Santo Domingo",
    "28": "Cadice",
    "29": "Rio delle Amazzoni",
    "30": "Cuba",
    "31": "",
    "32": "Gran Canaria",
    "33": "Martinica",
    "34": "Honduras",
    "35": "Nicaragua",
    "36": "Costa Rica",
    "37": "Panama",
    "38": "isole Cayman",
    "39": "Navassa",
    "40": "Santo Domingo"
}

const tasse_json = {
    "1": 50,
    "2": 0,
    "3": 50,
    "4": 200,
    "5": 200,
    "6": 100,
    "7": 0,
    "8": 100,
    "9": 120,
    "10": 0,
    "11": 140,
    "12": 160,
    "13": 140,
    "14": 160,
    "15": 200,
    "16": 180,
    "17": 180,
    "18": 0,
    "19": 180,
    "20": 200,
    "21": 0,
    "22": 220,
    "23": 0,
    "24": 220,
    "25": 200,
    "26": 200,
    "27": 260,
    "28": 260,
    "29": 120,
    "30": 280,
    "31": 0,
    "32": 300,
    "33": 300,
    "34": 0,
    "35": 320,
    "36": 200,
    "37": 0,
    "38": 360,
    "39": 75,
    "40": 400
}

const desc_json = {
    "1": "12 Ottobre 1492 Prima tappa del primo fra 4 dei viaggi che Colombo condusse verso il “Nuovo Mondo”. San Salvadoruna delle isole, presenti nella baia di Fernandez. Colombo e la sua ciurma furono accolti con grande cortesia e condiscendenza dai Taino, i nativi di etnia Arawak, abitanti dell'isola.",
    "2": "Ripreso il mare, con sei indigeni che svolsero attività di interpreti e di guide, la sua spedizione esplorò prima alcune isole prive di fiumi, la prima delle quali fu Santa Maria De La Concepción",
    "3": "Seconda delle isole prive di fiumi esplorate grazie all’aiuto di due indigeni",
    "4": "La sera del 27 ottobre 1492 le caravelle di Colombo arrivano alla fonda della baia di Bariay a Cuba, nell'attuale provincia di Holguín.",
    "5": "Cercando l'oro Pinzon (comandante della Pinta) ricevette informazioni su una fantomatica isola chiamata Babeque e decise, dopo qualche tentativo con Colombo, di partire da solo con la Pinta; per quasi due mesi scomparve, mentre Colombo giunse nella baia di Baracoa.",
    "6": "Colombo esplorò la costa settentrionale di Haiti, raggiunta il 5 dicembre 1492, e la chiamò Hispaniola; approdò la sera del 6 dicembre chiamando il luogo, Puerto San Nicola.",
    "7": "Cercò l'oro giungendo in quella che chiamò Bahia de los Mosquitos, nome che sopravvisse nei secoli.",
    "8": "Approdò su un isola a forma di tartaruga che il navigatore chiamò poi Tortuga",
    "9": "Prima del ritorno decisero di trarre in secco le due caravelle, a Capo Samanà, per opere di manutenzione.",
    "10": "Approdarono a Gomera come nel primo viaggio e ne ripartirono il 13 ottobre 1493.",
    "11": "Il 3 novembre 1493 la flotta raggiunse Dominica, chiamata in tal modo perché la raggiunse nel giorno di domenica.",
    "12": "Veleggiò tra le piccole e le grandi Antille",
    "13": "Giunse poi all’isola di Santa Cruz, dove perse uno dei suoi uomini, il primo morto nei viaggi.",
    "14": "ll 19 novembre 1493 arrivarono a Porto Rico",
    "15": "Il 23 novembre 1493 giunsero nella baia di Samanà.",
    "16": "Il 30 aprile 1494 giunto a Cuba, raggiunse Puerto Grande",
    "17": "In  seguito a Puerto Grande, Colombo reggiunse la baia di Guantánamo",
    "18": "",
    "19": "",
    "20": "",
    "21": "",
    "22": "",
    "23": "",
    "24": "",
    "25": "",
    "26": "",
    "27": "",
    "28": "",
    "29": "",
    "30": "",
    "31": "",
    "32": "",
    "33": "",
    "34": "",
    "35": "",
    "36": "",
    "37": "",
    "38": "",
    "39": "",
    "40": " "
}

function imposta_dadi() {
    // waluigi
    const a = 1 + Math.floor(Math.random() * 6);
    const b = 1 + Math.floor(Math.random() * 6);
    document.getElementById('dado-1').innerHTML = a.toString();
    document.getElementById('dado-2').innerHTML = b.toString();
    document.getElementById('somma').innerHTML = `Somma = ${a + b}`;

    let tira_di_nuovo = a === b;

    if (tira_di_nuovo) {
        alert('Hai tirado due dadi con lo stesso valore, potrai tirarne un\'altro nello stesso turno!');
    }

    notifica_movimento(a + b);
    muovi_pedina(a + b);
    colora_casella(NaN, true);

    if (!tira_di_nuovo) {
        incrementa_turno();
    }4
}

incrementa_turno = () => {
    let element = document.getElementById('turno');
    let n = element.innerHTML;
    let nn = parseInt(n);
    nn += 1;
    element.innerHTML = nn.toString();
}

traduci_json = () => {
    for (let i = 1; i <= 40; i++) {
        let name = `p-${i}`;
        let el = document.getElementById(name);
        if (el != null) {
            el.innerHTML = nomi_json[i.toString()]
        }
    }
}

function reset_gioco() {
    document.getElementById('turno').innerHTML = '1';
    localStorage.setItem('casella', '1');
    location.reload();
}

window.onload = () => {
    traduci_json();
    if (localStorage.getItem('casella') === null) {
        window.localStorage.removeItem('casella');
        window.localStorage.setItem('casella', '1');
        colora_casella(1, true);
    }
}

fotti_soldati = (pos) => {
    let cash = tasse_json[pos.toString()];
    if (cash !== 0) {
        let soldati = document.getElementById('soldati');
        let num = parseInt(soldati.innerHTML);
        if (num - cash <= 0) {
            alert('Hai finito i soldati, hai perso!');
            soldati.innerHTML = '0';
        } else {
            soldati.innerHTML = (num - cash).toString();
        }
    }
}

function info_casella(id) {
    let msg = desc_json[id.toString()];
    if (msg == "") {
        // mancante
    } else {
        alert(msg);
    }
}

function colora_casella(num, abs) {
    for (let i = 1; i <= 40; i++) {
        document.getElementById(i.toString()).style.background = '#fafaf8';
    }

    if (!abs) {
        let space = document.getElementById(num);
        space.style.background = '#fc3917';
    } else {
        let space = document.getElementById(localStorage.getItem('casella'));
        space.style.background = '#fc3917';
    }

}

function muovi_pedina(pos) {
    let casella = parseInt(window.localStorage.getItem('casella'));
    if (casella + pos > 40) {
        window.localStorage.setItem(`casella`, ((casella + pos) - 40).toString());
    } else {
        window.localStorage.setItem(`casella`, casella + pos);
    }

    alert(`La tua posizione e\': ${window.localStorage.getItem('casella')}`);
    fotti_soldati(parseInt(window.localStorage.getItem('casella')))
}

function notifica_movimento(pos) {
    alert(`Ti sei mosso di ${pos} caselle!`);
}
