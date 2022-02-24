let argumentsObject = {};
//Rzut kością pierwszy parametr liczba kostek, drugi parametr liczba ścian
function randDice(dice, num) {
    let score = dice * (Math.floor(Math.random() * num) + 1);
    return score;
};
function adding(a, b) {
    return Number(a) + Number(b);
};
function substra(a, b) {
    return Number(a) - Number(b);
};

//Odszukiwanie najniższej cechy
function findMin(...obj) {
    let temp = Math.min(...Object.values(...obj));
    for (let value in cechy) {
        if (temp === cechy[`${value}`]) {
            minimal[value] = cechy[`${value}`];
        }
    }
    return minimal;
};

function findCech() {
    for (let x in hero) {
        //szukamy właściwych cech
        if (x === "walka" || x === "parkour" || x === "krzepa" || x === "charyzma" || x === "zimna" || x === "status" || x === "okultyzm" || x === "wiedza" || x === "czujnosc") {
            cechy[x] = hero[x];
        }
    }
    cechy = findMin(cechy);
    return cechy;
};

// function AddToHero(obj, table, stage, data) {
//     //Tuaj jest zagmatwane, sprawdzam, na jakim etapie historii jestem przy 
//     // pomocy checkHistoryStage, ale liczę punkty dla poprzedniego etapu
//     if (stage === 'soldaci' || stage === 'rytualisci' || stage === 'hanza' || stage === 'mechanisci') {
//         console.log('Pierwszy etap frakcja', hero);
//         htmlToChosen(obj, table, stage, data);
//     } else if (stage === 'Clan') {
//         showCharacter();
//         console.log('Drugi etap Clan');
//         hero[stage] = data;
//         htmlToWybory(obj, data.give, stage, data);
//         return;
//     } else if (stage === 'Tour') {
//         console.log('trzeci etap Tour');
//         hero[stage] = data;
//         htmlToChosen(obj, table, stage, data);
//         // manyValues(obj, data.give, stage, data);
//         showCharacter();
//         return;
//     } else if (stage === 'Secr') {
//         console.log('cztarty etap Secr');
//         hero[stage] = data;
//         secRouter(data);
//         showCharacter();
//         // manyValues(obj, data.give, stage, data);
//         // htmlToChosen(obj, table, stage, data);;
//         autocomplete.removeEventListener('click', autocompleteEventListener);
//         return;
//     } else if (stage === 'Exp') {
//         console.log('Stage EXP');
//         // chooseExperience()
//     } else {
//         console.log('nie działa if');
//     }
// };
// //Podfuncja addToHero, ma dodawać wszystkie elementy
// function manyValues(obj, table, stage, data) {
//     for (let value in (table)) {
//         hero[value] = adding(hero[value], table[value]);
//     }
//     return;
// }
// //Podfunkcja addToHero ma wyświetlać wybów i dodać wybrany element
// function chooseOneValue(obj, table, stage, data) {
//     htmlToWybory(obj, table, stage, data)
// }
// //sprawdzanie etapu tworzenia postaci
// function checkHistoryStage(name) {
//     switch (name) {
//         case 'soldaci':
//         case 'hanza':
//         case 'mechanisci':
//         case 'rytualisci':
//             return 'Clan';
//         case 'Clan':
//             return 'Tour';
//         case 'Tour':
//             return 'Secr';
//         case 'Secr':
//             return 'Exp';// tutaj przechodzimy dalej, nie wiem, co tam będzie
//     }
// };

function getDataForStage() {

}
// Dodawanie siły ciosu i presji pod wyświetleniu 
function tableFromSkills(checkName) {
    let skillName;
    if (checkName === 'presja') {
        skillName = hero.status;
    } else if (checkName === 'ciosu') {
        skillName = hero.krzepa;
    }
    switch (skillName) {
        case 0:
        case 1:
        case 2:
            return 0;
        case 3:
        case 4:
            return 1;
        case 5:
        case 6:
            return 2;
        case 7:
        case 8:
            return 3;
        case 9:
        case 10:
            return 4;
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
            return 5;
        default:
            return 6;
    }
};

// function chooseExperience() {
//     stuffRemover(obj, table, stage, sentData);
//     let counter = hero.experience;
//     r.style.setProperty('--chooser-opacity', '0.25');
//     r.style.setProperty('--chooser-bg-color', '#3a589b');
//     const expChoosers = document.querySelectorAll('.exp-chossers');
//     expChoosers.forEach((div) => {
//         div.addEventListener('click', (event) => {
//             if (counter < 3) {
//                 counter++
//                 //z event targeta wyciągam nazwę klasy 
//                 console.log(event.target.childNodes['1']['className']);

//             }
//         })
//     });

// }
// function autocompleteEventListener(event, { obj, table, stage, sentData, nextStage } = argumentsObject) {
//     autocomplete.style.visibility = 'hidden';
//     if (stage === 'Tour'){
//         manyValues(obj, table.give, stage, data);
//     }
//     AddToHero(obj, table, nextStage, sentData);
// }
// function wyboryEventListener(event, { obj, table, stage, sentData, nextStage } = argumentsObject) {
//     autocomplete.style.visibility = 'hidden';
//     showCharacter();
//     // AddToHero(obj, table, nextStage, sentData);

// }

// function stuffRemover(obj, table, stage, sentData, nextStage, lastData) {
//     const choosersRemainer = document.querySelectorAll('.choosers')
//     chooseButt.forEach((button) => {
//         button.removeEventListener('click', mainEvent);
//     });
//     // choosersRemainer.forEach((button) => {
//     //     button.removeEventListener('click', chosenOption);
//     // });
//     argumentsObject = { obj, table, stage, sentData, nextStage, lastData };
//     autocomplete.removeEventListener('click', autocompleteEventListener);
//     autocomplete.innerHTML = ''
//     wybory.innerHTML = '';
//     let changesHTML = ``;//<div class="showers">${obj.toUpperCase()}</div></br
// }

// function chosenOption(key, { obj, table, stage, sentData, nextStage, lastData } = argumentsObject) {

//     hero[`${key}`] = adding(hero[`${key}`], lastData.give[`${key}`])
//     autocomplete.style.visibility = 'hidden';

//     AddToHero(obj, table, nextStage, sentData);
// }

// function secRouter(data){
//     data = {
//         name: "W kajdanach",
//         opis: "Każdego dnia oprawcy próbowali mnie złamać, a wieczory wypełniałem marzeniami o ucieczce.",
//         give: { witalnosc: 1 }
//     };
//     const source = data.give;
//     console.log(source);
//       //porównanie nazwy umiejętności do podniesienia z nazwą umiejętności bohatera
//   for (let key in hero){
//     for (let value in source){
//         console.log(value);
//       if (key === value){
//         //Jeśli hero[key] jest liczbą, to po prostu dodaj
//         if (Number.isInteger(hero[key])){
//           console.log(key, hero[key]);
//           //podniesienie umiejki bohatera o wartość wskazaną w losowaniu
//           hero[key] += source[key];
//           console.log(key, hero[key]);
//           // komentarz na koniec
//           autocomplete.innerHTML = `<div class="showers">Podniesiono ${key} o ${source[key]}</div></br><div class="showers">${('Kolejny Krok').toLocaleUpperCase()}</div>`;
//           autocomplete.style.visibility = 'visible';
//           return;
//         } else if (data.name === "Człowiek bez tajemnic"){ //jeśli wylosowałeś Człowieka bez tajemnic, to włączam funkcję
//           // funkcja szukająca najniższej cechy i podnosząca ją, ewentualnie pozwalająca wybrać tę, którą podnosimy
//           addSecrChooser(findCech());
//         } else if (hero.hisSecr.name === "Opętany"){//jesli wylosowałeś opętanego, to włączam funkcję losowania daru ciemności. Tyle, że muszę mieć dary
//           // funkcja wybierająca dary ciemności
//           console.log("Opętany");
//         } else {//W innym wypadku dodaj do zalecanego miejsca (często osiągnięcia, lub talent) obiekt z source
//           console.log(key, hero[key]);
//           hero[key] = source;
//           console.log(key, hero[key]);
//           // komentarz na koniec
//           autocomplete.innerHTML = "Najpierw zrobić losowanie darów ciemności , później, tutaj wrzucić krok o wyborze archetypów, pewnie lepiej będzie jak one będą, ale w css lub js będą ukryte, po wykonaiu tego kroku ";
//         }
//       }
//     }
//   }
// }