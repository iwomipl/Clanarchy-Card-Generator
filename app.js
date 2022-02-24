//pobrane z innego szablonu po refactoringu

const container = document.querySelector('.grid-container')
const autocomplete = document.querySelector('.autocomplete');
const chooseButt = document.querySelectorAll('.choose');
const main = document.querySelector('#main');
const start = document.querySelector('.start');
const r = document.querySelector(':root');
const rs = getComputedStyle(r);
const archetypeContainer = document.querySelector('.grid-container-archetype');
// const sourceMaterial = document.querySelector('#family');

// autocomplete.style.visibility = 'hidden';
//pobrane z innego szablonu po refactoringu

// let divek = document.getElementById("zobaczmy");
const butony = document.getElementsByClassName("frac");
let heroHTML = "";
// divek.innerHTML = `${showHero()}`;
let postac = document.getElementById("postac");
let tempHisClan = document.getElementById('his-clan');
let tempHisTour = document.getElementById('his-tour');
let tempHisSecr = document.getElementById('his-secret');
let wyboryElement = document.querySelector('#wybory');
let chooser = document.getElementById("choose");
let heros = document.getElementById("hero");

let arrWybory = ['<h1>Twoje wybory dotąd, to:</h1>', '<h3>Kombinuj dalej</h3>'];
let buttOut = ['<h2>Najpierw wybierz dwa źródła doświadczenia.</h2><h2>Później poznasz, historię Twojej postaci.</h2>'];

let cechy = {};
let cechynew = {};
let minimal = {};

//funkcja dodaj frakcję
const addFraction = function (frac) {
  // stylownik.outerHTML = `<link rel="stylesheet" href="style/${frac}.css" id="stylownik" defer>`;
  // sourceMaterial.outerHTML = `<script src="views/${frac}.js" defer id="family"></script>`;
  for (let value in fraction[frac]) {
    hero[value] = adding(hero[value], fraction[frac][value]);
  }
  // abler(butony);   
  //buttStop([frac]);
  wybory(frac);
  // tempHisClan.disabled = false;


  hero['rodzina'] = frac;

  //zmianyu z nowego szablonu po refactoringu
  r.style.setProperty('--mainWidth', '1000px');
  r.style.setProperty('--wyb-grid-col', '110px');
  r.style.setProperty('--wybory-justify', 'right');
  r.style.setProperty('--wybory-top', '0px');
  r.style.setProperty('--backimage', `url(../card/${frac}.jpg)`);
  container.innerHTML = gridContainerHTML;
  heros.remove();
  start.remove();
  // autocomplete.style.visibility = 'hidden';
  // start.style.visibility = 'hidden';
  //zmianyu z nowego szablonu po refactoringu
  chooseExpierience()
  changeButton();
  return showCharacter();
}
//ta funkcja odejmij frakcje, ale jest nieużywania
//dodanie wybranej umiejętności z historii w klanie
const addChooser = function (source) {
  //porównanie nazwy umiejętności pod podniesienia z nazwą umiejętności bohatera
  for (let key in hero) {
    if (key === source) {
      hero[key]++;
    }
  }
  // włączenie przycisku historii wypraw
  // tempHisTour.disabled = false;
  changeButton();
  // tempHisClan.classList.remove("his");
  // tempHisClan.classList.add("chosenOnes");
  //usunięcie planszy wyboru
  chooser.innerHTML = "";
  //odświeżenie statystyk bohatera
  return showCharacter();
}
//wybór spośrod umiejętności od wylosowanych historii klanowych
const choose = function (source) {
  chooser.innerHTML = `<button class="his" id="${Object.keys(source)[0]}" onclick="JavaScript:addChooser('${Object.keys(source)[0]}')">"${Object.keys(source)[0]} + ${Object.values(source)[0]}"</button><button class="his" id="${Object.keys(source)[1]}" onclick="JavaScript:addChooser('${Object.keys(source)[1]}')">"${Object.keys(source)[1]} + ${Object.values(source)[1]}"</button><h2>Wybierz z powyższych opcji</h2>`;
}
//dodanie wybranej umiejętności z historii w wyprawach i tajemnic
const addHistoryTour = function () {
  // tempHisTour.disabled = true;
  stepFurther.innerHTML = '';
  //dodanie wylosowanego eventu
  hero.hisTour = history.tour[hero.rodzina][`${randDice(2, 10)}`];
  let source = hero.hisTour.give;
  wybory(hero.hisTour.name, hero.hisTour.opis);
  //porównanie nazwy umiejętności pod podniesienia z nazwą umiejętności bohatera
  addSkillsToHero(source);
  // for (let key in hero) {
  //   for (let value in source) {
  //     if (key === value) {
  //       hero[key]++;
  //     }
  //   }
  // }
  // włączenie przycisku historii wypraw
  // tempHisSecr.disabled = false;
  changeButton();
  //odświeżenie statystyk bohatera
  return showCharacter();
}
//dodanie umiejętności z historii sekretu
const addHistorySecr = function () {
  //wyłaczenie przycisku
  // tempHisSecr.disabled = true;
  stepFurther.innerHTML = '';
  //dodanie wylosowanego eventu
  hero.hisSecr = history.secr[hero.rodzina][`${randDice(2, 10)}`];//DO testowania wsadzam numer zamiast [`${randDice(2, 10)}`]
  //Tutaj leży obiekt z dodawanymi statami
  let source = hero.hisSecr.give;
  wybory(`${hero.hisSecr.name}`, hero.hisSecr.opis, source);
  //porównanie nazwy umiejętności do podniesienia z nazwą umiejętności bohatera
  for (let key in hero) {
    for (let value in source) {
      if (key === value) {
        //Jeśli hero[key] jest liczbą, to po prostu dodaj
        if (Number.isInteger(hero[key])) {
          //podniesienie umiejki bohatera o wartość wskazanąw losowaniu
          hero[key] += source[key];
          // komentarz na koniec
          // chooser.innerHTML = "Tutaj wrzucić krok o wyborze archetypów, pewnie lepiej będzie jak one będą, ale w css lub js będą ukryte, po wykonaiu tego kroku ";
        } else if (hero.hisSecr.name === "Człowiek bez tajemnic") { //jeśli wylosowałeś Człowieka bez tajemnic, to włączam funkcję
          // funkcja szukająca najniższej cechy i podnosząca ją, ewentualnie pozwalająca wybrać tę, którą podnosimy
          return addSecrChooser(findCech());
        } else if (hero.hisSecr.name === "Opętany") {
          // funkcja wybierająca dary ciemności
          randomDarkGift(randDice(1, 14))
          changeButtonArchetype(hero.hisSecr.name, hero.hisSecr.opis);
        } else {//W innym wypadku dodaj do zalecanego miejsca (często osiągnięcia, lub talent) obiekt z source
          hero[key] = source[value];

          // komentarz na koniec
          // chooser.innerHTML = "Tutaj wrzucić krok o wyborze archetypów, pewnie lepiej będzie jak one będą, ale w css lub js będą ukryte, po wykonaiu tego kroku ";
        }
      }
    }
  }
  // wyłączenie przycisku historii wypraw
  stepFurther.innerHTML = '';
  changeButtonArchetype(hero.hisSecr.name, hero.hisSecr.opis);
  //odświeżenie statystyk bohatera
  return showCharacter();

}
//dodawanie historii klanowych
const addHisClan = function () {
  // tempHisClan.disabled = true;
  stepFurther.innerHTML = '';
  //dodanie wylosowanego eventu
  hero.hisClan = history.clan[hero.rodzina][`${randDice(2, 10)}`];
  wybory(`${hero.hisClan.name}`, `${hero.hisClan.opis}`);
  choose(hero.hisClan.give);
}
//przyciski po wybraniu historia człowiek bez tajemnic
const addSecrChooser = function (obje) {
  let arrUmie = ['<h1>Wybierz z poniższych opcji</h1>'];
  for (let umiej in obje) {
    let buttIn = [`<button id="${umiej}" class="his" onclick="JavaScript:addChoosenSkill('${umiej}');">"${umiej} + 1"</button>`];
    arrUmie.push(buttIn);
  }
  chooser.innerHTML = `${arrUmie.join("")}`;
  return;
}
//dodanie wybranej umiejętności z historii w klanie
const addChoosenSkill = function (source) {
  //porównanie nazwy umiejętności pod podniesienia z nazwą umiejętności bohatera
  hero[`${source}`]++;
  chooser.innerHTML = '';
  // komentarz na koniec
  // chooser.innerHTML = "Najpierw zrobić losowanie darów ciemności , później, tutaj wrzucić krok o wyborze archetypów, pewnie lepiej będzie jak one będą, ale w css lub js będą ukryte, po wykonaiu tego kroku ";
  changeButtonArchetype()
  //odświeżenie statystyk bohatera
  return showCharacter();
}
const archetype = function () {
  // komentarz na koniec
  chooser.innerHTML = "Najpierw zrobić losowanie darów ciemności , później, tutaj wrzucić krok o wyborze archetypów, pewnie lepiej będzie jak one będą, ale w css lub js będą ukryte, po wykonaiu tego kroku ";
}
function wybory(name, opis) {
  arrWybory.pop();
  if (name) {
    buttIn = [`<button class="wybory" >${name}</button>`];
    arrWybory.push(buttIn);

    if (opis) {
      buttOut = [`<h2>${name.toUpperCase()}</h2><h2>${opis}</h2>`]
    }

    arrWybory.push(buttOut);
  }
  wyboryElement.innerHTML = `${arrWybory.join("")}`;
  return;
}
//  const heroShow = function(){
//    findCech();
//   function addString(obj){
//     let str = "";
//     for (let value in obj){
//       str =  `${str} <div class="cechy"> ${value}</br> ${obj[value]}</div>`;
//     }
//     return str;
//   }
//    heros.innerHTML = `${addString(cechynew)}`;
//  }