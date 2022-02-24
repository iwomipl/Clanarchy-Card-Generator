let stepFurther = document.querySelector('#stepFurther');
let choosingTalentsOptions = document.querySelector('#choosing-talents-options');
buttOutOut = ['<button class="his" id="his-clan" onclick="JavaScript:addHisClan()" value="0">Przeszłość klan</button><h4>Kliknij, by wylosować wydarzenia z przeszłości w klanie.</h4>', '<button class="his" id="his-tour" onclick="JavaScript:addHistoryTour(); chooseExpierience();" value="0">Przeszłość wyprawy</button><h4>Kliknij, by wylosować wydarzenia z przeszłości w czasie wypraw.</h4>', '<button class="his" id="his-secret" onclick="JavaScript:addHistorySecr()" value="0">Przeszłość tajemnica</button><h4>Kliknij, by wylosować tajemnice Twojej postaci.</h4>',];
let numberOfTalents = hero.drzewo;
let numberOfMaterials;
let tempNumberOfMaterials = 0;
let materialsHTML = '';

//losowanie kości
function randDice(dice, num) {
  let score = dice * (Math.floor(Math.random() * num) + 1);
  return score;
}
function adding(a, b) {
  return a + b;
}
function substra(a, b) {
  return a - b;
}
//Odszukiwanie najniższej cechy
function findMin(...obj) {
  let temp = Math.min(...Object.values(...obj));
  for (let value in cechy) {
    if (temp === cechy[`${value}`]) {
      minimal[value] = cechy[`${value}`];
    }
  }
  return minimal;
}
//odszukiwanie cech w hero
function findCech() {
  for (let x in hero) {
    //szukamy właściwych cech
    if (x === "walka" || x === "parkour" || x === "krzepa" || x === "charyzma" || x === "zimna" || x === "status" || x === "okultyzm" || x === "wiedza" || x === "czujnosc") {
      cechy[x] = hero[x];
    }
  }
  let zminimalizowania = findMin(cechy);
  return zminimalizowania;
}
// const abler = function (clasa) {
//   for (let i = clasa.length - 1; i >= 0; i--) {
//     if (clasa[i].disabled) clasa[i].disabled = false;
//     else clasa[i].disabled = true;
//   }
//   return;
// }

// const buttStop = function (fractio) {
//   let tempFrac = document.getElementById(fractio);

//   if (tempFrac.value === "0") {
//     // tempFrac.disabled = true;
//     // tempFrac.removeAttribute("onclick");
//     // tempFrac.setAttribute('onclick', `JavaScript:substrFraction('${fractio}')`);
//     // tempFrac.setAttribute('value', `1`);

//     // } else {
//     //   tempFrac.disabled = false;
//     //   tempFrac.removeAttribute("onclick");
//     //   tempFrac.setAttribute('onclick', `JavaScript:addFraction('${fractio}')`);
//     //   tempFrac.setAttribute('value', `0`);
//     //   tempHisClan.disabled = true;
//   }
// }

function changeButton() {
  stepFurther.innerHTML = buttOutOut[0];
  buttOutOut.shift();
}

function randomDarkGift(number) {
  hero['ciemność'] = darkGifts[number];
}

function chooseExpierience(ender) {
  let experienceChoosers = ``;
  for (let value in hero.experience) {
    experienceChoosers += `<div class="togleExperience" ><img src="./card/${hero.rodzina}/experience/${value}.jpg" onclick="JavaScript:togleExperience('${value}'); checkIfTwoExperiencePoints();" >${compareExperience(value)}</div>`;
  }
  experienceChoosers += '<h4>Wybierz dwa źródła doświadczenia.</h4>'
  if (ender) {
    changeButton();
    return;
  }
  buttOutOut.unshift(experienceChoosers);
  return;
}

function togleExperience(expName) {
  hero.experience[expName] = togle(hero.experience[expName]);
  return;
}
function togle(number) {
  return number ? 0 : 1;
}
function checkIfTwoExperiencePoints() {
  let sum = 0;
  for (let value in hero.experience) {
    sum += hero.experience[value];
  }
  if (sum === 2) {
    if (buttOutOut.length > 0) {
      return chooseExpierience(1)
    }
    return changeButton();
  }
  chooseExpierience();
  changeButton();
  return;
}

const showCharacter = () => {
  let variable;
  for (let [key, val] of Object.entries(hero)) {
    if (checkTheSkills(key)) {
      variable = document.querySelector(`.${key}`) ? document.querySelector(`.${key}`) : document.querySelector(`#${key}`);
      variable.innerText = val;
    } else if (key === "ciosu" || key === "presja") {
      variable = document.querySelector(`.${key}`)
      variable.innerText = tableFromSkills(key) + val;
    } else if (key === "hisClan") {
      const variable = document.querySelector(`#${key}`);
      variable.innerText = `${hero.hisClan.name}`;
    } else if (key === "hisTour") {
      const variable = document.querySelector(`#${key}`);
      variable.innerText = `${hero.hisTour.name}`;
    } else if (key === "hisSecr") {
      const variable = document.querySelector(`#${key}`);
      variable.innerText = `${hero.hisSecr.name}`;
    } else if (key === "zasoby") {
      const variable = document.querySelector(`#${key}`);
      variable.innerText = `${val + hero.status}`;
    } else if (key === "ciemność") {
      if (document.querySelector(`#${key}`)) {
        const variable = document.querySelector(`#${key}`);
        const darkGiftConfirmVariable = document.querySelector('#dark-gift-confirm');
        const darkGiftHowManyTimesVariable = document.querySelector('#repetable');
        variable.innerHTML = `<strong>${hero['ciemność'].name ? hero['ciemność'].name.toUpperCase() : ''}</strong></br>${hero['ciemność'].info ? hero['ciemność'].info : ''}`;
        darkGiftConfirmVariable.innerHTML = hero['ciemność'].name ? `<img src="./card/${hero.rodzina}small.png"><div id="repetable"><img src="./card/${hero['ciemność'].times}.png"></div>` : '';
      }
    } else if (key === "osiągnięcia") {
      if (document.querySelector(`#${key}`)) {
        const variable = document.querySelector(`#${key}`);
        variable.innerHTML = `${hero['osiągnięcia']}`;
      }
    } else if (key === "splugawienie") {
      if (document.querySelector(`.${key}`)) {
        const variable = document.querySelectorAll(`.${key}`);
        for (let i = 0; i < hero.splugawienie; i++) {
          variable[i].innerHTML = `<img src="./card/${hero.rodzina}small.png">`;
        }
      }
    }
  };
}
function compareExperience(experienceName) {
  const chosenExperience = document.querySelector(`.${experienceName}`);
  chosenExperience.innerHTML = !hero.experience[experienceName] ? '' : `<img src="./card/${hero.rodzina}small.png">`;
  return !hero.experience[experienceName] ? '' : `<div class="chosen"><img src="./card/${hero.rodzina}small.png"></div>`;
};

function changeButtonArchetype() {
  const newButton = `<div class="start" style="cursor: pointer;" onclick="JavaScript:createSecondSite()">Kolejny etap</br> tworzenia postaci</div>`;
  stepFurther.innerHTML = newButton;
};

function createSecondSite() {
  const getNextSite = `<div class="start">Wybierz Swoją Klasę Postaci</div>
  <div id="archetype-choice">
    <div class="choose" id="soldaci" onclick="JavaScript:chooseArchetype('siepacz')" value="0">Siepacz</div>
    <div class="choose" id="soldaci" onclick="JavaScript:chooseArchetype('egzorcysta')" value="0">Egzorcysta</div>
    <div class="choose" id="soldaci" onclick="JavaScript:chooseArchetype('kronikarz')" value="0">Kronikarz klanu</div>
    <div class="choose" id="soldaci" onclick="JavaScript:chooseArchetype('przepatrywacz')" value="0">Przepatrywacz</div>
    <div class="choose" id="soldaci" onclick="JavaScript:chooseArchetype('rzecznik')" value="0">Rzecznik rodu</div>
    <div class="choose" id="soldaci" onclick="JavaScript:chooseArchetype('sniacy')" value="0">Śniący</div>
    <div class="choose" id="soldaci" onclick="JavaScript:chooseArchetype('szabrownik')" value="0">Szabrownik</div>
    <div class="choose" id="soldaci" onclick="JavaScript:chooseArchetype('wiedzmiarz')" value="0">Wiedźmiarz</div>
    <div class="choose" id="soldaci" onclick="JavaScript:chooseArchetype('zerca')" value="0">Żerca</div>
  </div>`;
  stepFurther.innerHTML = getNextSite;
  wyboryElement.innerText = '';
};

function chooseArchetype(archetypeName) {
  const stylownkSecondTime = document.querySelector('#stylownik');
  stepFurther.innerHTML = '';
  stylownkSecondTime.outerHTML = `<link rel="stylesheet" href="style/${archetypeName}.css" id="stylownik" defer>`;
  r.style.setProperty('--backimage-archetype', `url(../card/archetype/${archetypeName}.jpg)`);
  archetypeContainer.innerHTML = eval(`${archetypeName}HTML`);
  container.style.display = 'none';
  scrollTheWindow(0);
  hero.archetype = archetypeName;
  addSkillsToHero(archetypeToChoose[`${archetypeName}`]);
  numberOfTalents = hero.drzewo;
  showClicableTalents();
};

function showSign(name) {
  const myNewHTML = document.querySelector(`#${name}`);
  const chooseTalents = document.querySelector('.choose-talents');
  chooseTalents.remove();
  numberOfTalents--;
  myNewHTML.innerHTML = changeAfterCLickingTalent(myNewHTML);
  return;
};


function addSkillsToHero(obj) {
  for (let key in hero) {
    for (let value in obj) {
      if (key === value) {
        hero[key] += obj[value];
      }
    }
  }
  return showCharacter();
};

function addSkill(skillName) {
  hero[skillName]++;
  return showCharacter();
};

function removeSkill(skillName) {
  hero[skillName]--;
  return showCharacter();
};

function showClicableTalents() {
  const allTalentsHidden = document.querySelectorAll('.hover-shadow');

  freeAccessObject = eval(`${hero.archetype}FreeAccessObject`);
  
  //add .talenHidden class to every div
  for (let obj of allTalentsHidden) {
    obj.classList.add('talentHidden');
  }
  //remove .talentHidden clas from div-s included in
  for (let obj of allTalentsHidden) {
    for (let array of Object.values(freeAccessObject)) {
      if (array.includes(obj.id)) {
        obj.classList.remove('talentHidden');
      }
    }
  }
  for (let obj of allTalentsHidden) {
    if (allreadyAddedTalent.includes(obj.id)) {
      obj.classList.add('talentHidden');
    }
  }
  if (numberOfTalents <= 0) {
    for (let obj of allTalentsHidden) {
      obj.classList.add('talentHidden');
    }
  }
  createNextStepDivForChoosingArchetypes();
  return;
};

function createNextStepDivForChoosingArchetypes() {
  const chooseTalents = document.createElement('div');
  chooseTalents.classList.add('choose-talents');
  const getNextSite = `<div class="start-of-menu">Jakie talenty ma twój ${hero.archetype}?</div>
  <h2>Wybierz ${numberOfTalents} talenty</h2>
  <div >
  <button class="his" id="restart" onclick="JavaScript:restartTalents('restart')">Wybierz ponownie</button>
  ${(numberOfTalents <= 0) ? '<button class="his" id="store" onclick="JavaScript:storeTalents()">Zapisz talenty</button></div>'
      : '</div>'}`;
  chooseTalents.innerHTML = getNextSite;
  main.insertBefore(chooseTalents, archetypeContainer);
  allreadyAddedTalent = [];
  return;
};

function changeAfterCLickingTalent(selectedObject) {
  const result = (selectedObject.innerHTML.indexOf('img') === -1) ? `<img src="./card/${hero.rodzina}small.png">` : '';
  addTofreeAccessObjectObject(`${selectedObject.id}`);
  allreadyAddedTalent.push(`${selectedObject.id}`)
  showClicableTalents();
  addToTempHero(`${selectedObject.id}`);
  return result;
}

function addTofreeAccessObjectObject(name) {
  matrixOfAcces = eval(`${hero.archetype}MatrixOfAcces`);
  if (freeAccessObject[name]) {
    delete freeAccessObject[name];
  } else {
    freeAccessObject[name] = matrixOfAcces[name];
  }
}
// function ifTalentCanBeClicked(name) {

// }
function restartFreeAccessObject() {
  const tempObj = eval(`${hero.archetype}FreeAccessObject`);
  for (const el in tempObj) {
    if (el !== 'start') {
      delete tempObj[`${el}`];
    }
  }
  freeAccessObject = eval(`${hero.archetype}FreeAccessObject`);
  return;
}

function addToTempHero(skillName) {
  // if (skillName === "walka" || skillName === "parkour" || skillName === "krzepa" || skillName === "charyzma" || skillName === "zimna" || skillName === "status" || skillName === "okultyzm" || skillName === "wiedza" || skillName === "czujnosc" || skillName === "wola" || skillName === "witalnosc" ){
  if (checkTheSkills(skillName)) {
    tempHero[skillName] = 1;
  }
}
function checkTheSkills(fraze) {
  switch (fraze) {
    case 'walka':
    case 'parkour':
    case 'krzepa':
    case 'charyzma':
    case 'zimna':
    case 'status':
    case 'okultyzm':
    case 'wiedza':
    case 'czujnosc':
    case 'wola':
    case 'witalnosc':
    case 'bonus':
      return true;
    default:
      return false;
  }
};

function restartTempHero() {
  Object.keys(tempHero).forEach(key => delete tempHero[key]);
};
function getRidOfImages() {
  const allTalentsHidden = document.querySelectorAll('.hover-shadow');
  allTalentsHidden.forEach(obj => obj.innerHTML = '');
  return;
};

function restartTalents() {
  const chooseTalents = document.querySelector('.choose-talents');
  restartFreeAccessObject();
  restartTempHero();
  scrollTheWindow(0);
  numberOfTalents = hero.drzewo;
  chooseTalents.remove();
  showClicableTalents();
  getRidOfImages();
  return;
}

function storeTalents() {
  addSkillsToHero(tempHero);
  restartTempHero();
  const talentBar = document.querySelector('.choose-talents')
  talentBar.style.display = 'none';
  //to się powinno zmienić, przecież najpierw jest wybieranie umiejek, a później dobieranie zasobów. z czego sprzęt jest dobierany osobno
  container.style.display = 'grid';
  showAndChooseSkills();
  createSkillHelperHTML();
  return;
};



function showAndChooseSkills() {
  const addingSkills = document.querySelectorAll('.addingSkills');
  for (const skill of addingSkills) {
    skill.style.visibility = 'visible';
  }

  const rowsWithSkills = document.querySelectorAll('#skills-top div .addingSkills');

  for (const row of rowsWithSkills) {
    row.addEventListener('click', (event) => {
      // WARTOŚĆ KLIKANEGO PRZYCISKU event.target.innerHTML
      // NAZWA KLIKNIĘTEJ UMIEJĘTNOŚCI  (event.path[2].firstChild.className).split(' ')[1] OSTATNI PUNKT TO MIEJSCE W TABLICY
      if (!isNaN(Number(event.target.innerHTML))) {
        const clickedNumber = Number(event.target.innerHTML);
        const clickedSkill = (event.path[2].firstChild.className).split(' ')[1];
        validateClickabilityOfButtons(Number(clickedNumber), clickedSkill);

      } else {
        return;
      }
    });
  }
  updateSkillHelperHTML();

  // chooseMaterialsFromStart();
  return;
}

function createSkillHelperHTML() {
  const getBannerHTML = `
  ${(Number(hero.addedSkillCount[`1`]) === 0 && Number(hero.addedSkillCount[`2`]) === 0) ? '<button class="his" id="store" onclick="JavaScript:chooseMaterialsFromStart();">Przyejdź do zasobów</button></div>'
      : `<div class="start-of-menu">Jakie cechy ma twój bohater</div>
      <div id="add-Skill-Message"> <h4>Możesz rozwinąć dwie cechy o dwa punkty i trzy cechy o jeden punkt. </br>Do rozwinięcia zostało Ci ${hero.addedSkillCount[`1`]} rozwinięć o 1 pkt. i ${hero.addedSkillCount[`2`]} rozwinięć o 2 pkt.</h4></div>`}`;
  return getBannerHTML;
};
function updateSkillHelperHTML() {
  const topBanner = document.querySelector('#banner');
  topBanner.innerHTML = createSkillHelperHTML();
  scrollTheWindow(0);
};

function validateClickabilityOfButtons(num, skill) {
  const rowsWithSkills = document.querySelectorAll('#skills-top div .skill');
  const spansWithSkills = document.querySelectorAll('#skills-top div .addingSkills span');
  const addingSkillsWithSkills = document.querySelectorAll('#skills-top div .addingSkills');
  const clickedSkill = document.querySelectorAll(`.${skill}`);
  const clickedNextElementSiblingNamedAddingSkill = clickedSkill[0].nextSibling;

  if (hero.addedSkillCount[`${num}`] > 0) {
    rowsWithSkills.forEach(elem => {
      elem.classList.forEach(node => {

        if (node === skill) {
          const siblingClass = elem.nextSibling.classList;
          if (siblingClass[1]) {

            elem.nextSibling.innerHTML = `<span>1</span><span>2</span>`;
            clickedNextElementSiblingNamedAddingSkill.classList.toggle('addedSkills');

            toogleHeroSkills(num, skill)
          } else {

            elem.nextSibling.innerHTML = `<span>${num}</span>`;
            clickedNextElementSiblingNamedAddingSkill.classList.toggle('addedSkills');

            toogleHeroSkills(num, skill)
          }
        }
      });
    })

  } else if (hero.addedSkillCount[`${num}`] <= 0) {

    rowsWithSkills.forEach(elem => {
      elem.classList.forEach(node => {

        if (node === skill) {
          const siblingClass = elem.nextSibling.classList;
          if (siblingClass[1]) {
            elem.nextSibling.innerHTML = `<span>1</span><span>2</span>`;
            clickedNextElementSiblingNamedAddingSkill.classList.toggle('addedSkills');
            toogleHeroSkills(num, skill)
          } else {
            alert(`Sorki można powiękrzyć dwie cechy o dwa punkty i trzy cechy o trzy punkty\n
                  Odznacz wybór cechy powiękrzonej o ${num}, by rozwinąć tę cechę.`)

          }
        }
      });
    })
  }
  updateSkillHelperHTML();
}
function toogleHeroSkills(num, skill) {
  // jeśli w hero.skillCount jest więcej punktów niż zero, to dopuszczam dodanie, odjęcie 

  // teraz dodajemy do bohatera odpowiednią cechę i odejmujemy, jeśli była już dodana
  if (hero.addedSkills[skill]) {
    hero[skill] -= hero.addedSkills[skill];
    delete hero.addedSkills[skill];
    hero.addedSkillCount[`${num}`]++;

  } else {
    hero.addedSkills[skill] = num;
    hero[skill] += hero.addedSkills[skill];
    hero.addedSkillCount[`${num}`]--;
  }
  showCharacter();
}

function tooglebuttonsHTML(skill, num) {
  const clickedSkill = document.querySelectorAll(`.${skill}`);
  const clickedNextElementSiblingNamedAddingSkill = clickedSkill[0].nextSibling;
  clickedNextElementSiblingNamedAddingSkill.classList.toggle('addedSkills');
  // validateClickabilityOfButtons(num, skill);
  showCharacter();
};

function disableUnclicableButtons(num, skill) {
  const clickedSkill = document.querySelectorAll(`.${skill}`);
  const clickedSkillSibling = clickedSkill[0];
}

function enableUnclicableButtons(num, skill) {
  const clickedSkill = document.querySelectorAll(`.${skill}`);
  const clickedSkillSibling = clickedSkill[0];
}

function chooseMaterialsFromStart() {
  const addingSkills = document.querySelectorAll('.addingSkills');
  const topBanner = document.querySelector('#banner');
  hero.chosenMaterials = {};
  hero.numberOfMaterialsToChoose = 0;
  numberOfMaterials = substra(adding(hero.status, adding(hero.tempBonus, adding(hero.zasoby, hero.bonus))), tempNumberOfMaterials);

  //tutaj próby, ale nie rozumiem, co tam robiem, trzeba będzi ekombinować, zaczynam odtąd
  // const chooseMaterials = document.querySelector('.choose-materials') ? document.querySelector('.choose-materials') : document.createElement('div');

  // document.querySelector('.choose-materials') ? null : chooseMaterials.classList.add('choose-materials');

  // materialsHTML = '';
  // chooseMaterials.innerHTML = materialsHTML;
  //dotąd od góry robiem zmiany w 4 liniach

  for (const skill of addingSkills) {
    skill.style.visibility = 'hidden';
  }
  topBanner.innerHTML = '';
  const talentBar = document.querySelector('.choose-talents')
  talentBar.style.display = 'grid';
  changeOfDisplay();
}

function scrollTheWindow(number) {
  window.scrollTo({
    top: number,
    behavior: 'smooth'
  });
}
function generateChooseMaterialsDiv(filesdirectory, number) {
  const newDivWithMaterials = [];
  for (let i = 1; i < 3; i++) {
    for (let j = hero.numberOfMaterialsToChoose; j > 0; j--) {
      newDivWithMaterials.push(`<div><img src="./card/${filesdirectory}/${i}/${j}.png"></div>`);
    }
  }
}
function clickMaterials(id, imageNameNumber) {
  const cLickedElement = document.querySelector(`#${id}`);
  const numberOfPointsForMaterial = checkForPointsForMaterial(imageNameNumber);
  if (numberOfPointsForMaterial <= numberOfMaterials) {


    cLickedElement.classList.toggle('chosen-materials');
    hero.chosenMaterials[`${imageNameNumber}`] ? delete hero.chosenMaterials[`${imageNameNumber}`] : hero.chosenMaterials[`${imageNameNumber}`] = numberOfPointsForMaterial;
    //jeśli istnieje taka cecha w bohaterze, to znaczy, że operator wyżej dodał ją, należy wiec usunąć jego koszt.
    (hero.chosenMaterials[`${imageNameNumber}`] === undefined) ? numberOfMaterials += numberOfPointsForMaterial : numberOfMaterials -= numberOfPointsForMaterial;
  } else {

  }

  changeOfDisplay();
}

function createMaterialsHTML(source) {
  const dataFromObject = materials.materials;

  for (const element in materials[`${source}`]) {
    const borrowedMaterials = materials[`${source}`][`${element}`];
    borrowedMaterials.forEach((value) => {
      if (dataFromObject[`${element}`].includes(value)) {

      } else {
        dataFromObject[`${element}`].push(value);
      }
    });
  };
  // console.log(allMaterialsObject);
  // const dataFromObject = eval(materials.materials);
  for (const [key, value] of Object.entries(dataFromObject)) {
    value.forEach(num => {
      const classAdder = hero.chosenMaterials[`${num}`] ? ' class="chosen-materials"' : '';
      const unchosableMaterials = key > numberOfMaterials || (numberOfMaterials < 5 && key == 0) ? ' class="unchosable-materials"' : '';
      //tutaj trzeba będzie zmienić source na materials, jeśli uda się połącyć projekty
      materialsHTML += `<div${classAdder}${unchosableMaterials}><img src="./card/materials/${num}.png"></div>`;
    })
  }
}
function eventListenerAdder() {
  const materialsToChoose = document.querySelectorAll('.choose-materials div');
  materialsToChoose.forEach(elem => elem.addEventListener('click', (event) => {
    // console.log(event.path[0].src);
    const imageName = (event.path[0].src).split('/');
    const imgWithoutExtention = imageName[imageName.length - 1].split('.');
    elem.id = `${hero.rodzina}${imgWithoutExtention[0]}`;
    // console.log(imgWithoutExtention[0]);
    clickMaterials(elem.id, imgWithoutExtention[0]);
  }
  ));
};

function changeOfDisplay() {
  const getNextSite = `<div class="start-of-menu">Jakie zasoby ma twój ${hero.archetype}?</div>
  <h2>Pozostałe punkty: ${numberOfMaterials}</h2>
  <div >
  <button class="his" id="restart" onclick="JavaScript:chooseMaterialsFromStart()">Wybierz ponownie</button>
  ${(numberOfMaterials <= 0) ? '<button class="his" id="store" onclick="JavaScript:storeMaterials()">Zapisz zasoby</button></div>'
      : '</div>'}`;

  const chooseTalents = document.querySelector('.choose-talents');
  const materials = document.querySelector('#materials');
  const rest = document.querySelector('#rest');
  const chooseMaterials = document.querySelector('.choose-materials') ? document.querySelector('.choose-materials') : document.createElement('div');

  document.querySelector('.choose-materials') ? null : chooseMaterials.classList.add('choose-materials');

  materialsHTML = '';
  chooseMaterials.innerHTML = materialsHTML;
  // createMaterialsHTML('materials');
  createMaterialsHTML(hero.rodzina);
  chooseMaterials.innerHTML = materialsHTML;
  chooseTalents.innerHTML = getNextSite;
  container.insertBefore(chooseTalents, materials);
  container.insertBefore(chooseMaterials, materials);
  materials.style.display = 'none';
  rest.style.display = 'none';
  eventListenerAdder();
  scrollTheWindow(600);
}

function checkForPointsForMaterial(imageNameNumber) {
  for ([key, val] in Object.entries(materials.materials)) {
    //key to cena materiału i nazwa klucza właściwości tabeli materials, które są numerami zdjęć
    // console.log('key', key, 'materialNumber', materials.materials[`${key}`].includes(Number(imageNameNumber)));
    if (materials.materials[`${key}`].includes(Number(imageNameNumber))) {
      // key to cena materiału
      return Number(key);
    }
  }
  console.log(materials[`${hero.rodzina}`]);
  for ([key, val] in Object.entries(materials.materials)) {
    //key to cena materiału i nazwa klucza właściwości tabeli materials, które są numerami zdjęć
    // console.log('key', key, 'materialNumber', materials.materials[`${key}`].includes(Number(imageNameNumber)));
    if (materials[`${hero.rodzina}`][`${key}`].includes(Number(imageNameNumber))) {
      // key to cena materiału
      return Number(key);
    }
  }
}

function storeMaterials() {
  const materials = document.querySelector('#materials');
  const rest = document.querySelector('#rest');
  const chooseMaterials = document.querySelector('.choose-materials');
  const chooseTalents = document.querySelector('.choose-talents');
  chooseMaterials.remove();
  chooseTalents.remove();
  materials.innerHTML += createFinalMaterialsHTML('materials');
  materials.style.display = 'flex';
  chooseSexOFYourHero();
};

function chooseSexOFYourHero() {
  const choseSexOfHeroHTML = `<div class="start-of-menu">Wybierz Płeć TwojejPostaci</div>
  <div>
  <button class="his" onclick="JavaScript:storeSex('girl')">Kobieta</button>
  <button class="his" onclick="JavaScript:storeSex('boy')">Mężczyzna</button></div>`;

  wyboryElement.innerHTML = choseSexOfHeroHTML;
  scrollTheWindow(0);
};
function storeSex(sexOfHero) {
  hero.sex = sexOfHero;
  chooseNameAndClan();
}

function chooseNameAndClan() {
  const chooseHeroAndClanNameHTML = `${createNameSelector()}`;
  // wyboryElement.innerText = '';
  const topBanner = document.querySelector('#banner');
  topBanner.innerHTML = chooseHeroAndClanNameHTML;
  scrollTheWindow(0);
  createEventListenerForInputs();
}

function deleteBannerAndChoosers() {
  const topBanner = document.querySelector('#banner');
  topBanner.innerHTML = `${getPrintEverythingButton()}`;
  wyboryElement.innerHTML = '';
  printEventListener();
}

function printEventListener() {
  const printButton = document.querySelector('#noprint');
  console.log('PrintButton', printButton);
  printButton.addEventListener('click', () => {
    console.log(window.print());
    window.print();
  });
}

function getPrintEverythingButton() {
  return `<button class="his" id="noprint">Drukuj</button>`;
}

function createEventListenerForInputs() {
  const inputHeroNames = document.getElementsByName('hero-names')[0];
  const inputClanNames = document.getElementsByName('clan-names')[0];
  const storeNames = document.querySelector('#store-names');

  inputHeroNames.addEventListener('input', (event) => {
    const nameOnCard = document.querySelector('.hero-name');
    nameOnCard.innerText = `${event.target.value}`;
  });
  inputClanNames.addEventListener('input', (event) => {
    const nameOnCard = document.querySelector('.clan-name');
    nameOnCard.innerText = `${event.target.value}`;
  });
  storeNames.addEventListener('click', (event) => {
    deleteBannerAndChoosers();
  });
}

function createNameSelector() {
  const nameSelectorHTML = `
 <div class='choose-names'>
    <div>
      <label>Imię twojej postaci:</label>
      <input type="text" list="hero-names" name="hero-names"/>
        <datalist id="hero-names">
        ${generateOptionsForHeroNames('Name')}
        </datalist>
    </div>
    <div>
      <label>Nazwa klanu twojej postaci:</label>
      <input type="text" list="clan-names" name="clan-names"/>
        <datalist id="clan-names">
        ${generateOptionsForHeroNames('Clan')}
        </datalist>
    </div>
  </div>
  <div class='choose-names-button'>
    <button class="his" id="store-names">Zapisz</button>
  </div>`;

  return nameSelectorHTML;
}

// function listOfHeroNames(){
//   console.log(heroNames[`${hero.rodzina}`][`${hero.sex}`]);
//   return ``;
// }


function generateOptionsForHeroNames(calledOption) {

  if (calledOption === 'Name') {
    const heroFamilyNames = heroNames[`${hero.rodzina}`][`${hero.sex}`];
    const familyNamesArray = [];
    for (const name in heroFamilyNames) {
      familyNamesArray.push(`<option value="${heroFamilyNames[`${name}`]}">${heroFamilyNames[`${name}`]}</option>`)
    }
    return familyNamesArray.join('');
  }

  const heroFamilyClan = heroClan[`${hero.rodzina}`];
  const familyClansArray = [];

  for (const name in heroFamilyClan) {
    familyClansArray.push(`<option value="${heroFamilyClan[`${name}`]}">${heroFamilyClan[`${name}`]}</option>`)
  }
  return familyClansArray.join('');
}

function createFinalMaterialsHTML(source) {
  const data = [];
  for (const [key, value] of Object.entries(hero.chosenMaterials)) {
    data.push(`<div ><img src="./card/${source}/${key}.png"></div>`);
  }
  return data.join('');
}

//dorzucam jeszcze dodawanie umiejek na ostatnim etapie
//okazało się, że dorzucanie tych umiejek jest przed wyborem zasobów, trzeba będzie zmienić kolejność
// do zasobów trzeba tyeż dodać opcję dostępu do wszystkich zasobów typu sprzęt
// do tego trzeba dodać jeszcze hoovera z informacją co to oznacza



// Już po kliknięciu w cyfrę przy umiejce pobieram nazwę skilla i klikniętą liczbę. Trzbea w związku z tym dodać opcję dodawania i odejmowania tych punktów z hero
//walczę z wyłączeniem przycisków po wykorzystaniu liczby dodawania skillsów do postaci. Teraz wyłączam przyciski, ale hurtem, to nei może tak działać, muszę je sprząc z listą dodanych skilli. Jeśli dana umiejka się zgadza, to nie powinna zostać wyłączona.
// linia 419

//ta sama linia
// może zamiast podmieniać ojedyncze tematy, zmienić innerHTML całej linii i zostawić tylko wybrany punkt? super pomysł
//chyba działa, teraz zrobić panell z informacją co mają robić i ile cech jeszzce rozwinąć

//PROBLEM Z TALENTAMI I TY, ŻE NIE WYŁĄCZA SIĘ KLIKANIE POPRZEDNIEGO TALENTU, JAK WŁĄCZA SIĘ POPRZEDNI

//Kończę eventlistenera po linii 617, ma on na change zmieniać zawartość imienia i nazwy klanu na karcie

// linia 627 zostało obsłużenie i ukrycie przycisku do drukowania

//zjebane skok przez cienie, żle się wyświetla, jakby nie widział stylu

//problem z wyświetlaniem materiałów dla rodzin, trzba będzie wrzucić wszystkie na kupie i dla każdej rodziny zrobić osobne listy materiałów

//AWARIA
//zesrało się na poziomie mieszania rodzin klanów w index.js powinno zmieniać pliki styli siepacz w hazie jest inaczej ustawiony niż w soldatach.
//rozjebało się także wyświetlanie hovera na talentach, style się postrały, trzeba przywrócić kopię z serwera

//walnięte jest coś w zasobach, po wybraniu ponownym, powiela się liczba obrazków linia 497