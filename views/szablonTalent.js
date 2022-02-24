let allreadyAddedTalent = [];

const siepaczHTML = `
<div id="banner">
    <div></div>
</div>
<div class="underbanner">
<div></div>
<div id="osiągnięcia"><strong>TWOJE OSIĄGNIĘCIA</strong></div>
<div id="dark-gift-confirm">
<div id="repetable"></div>
</div>
<div id="dark-gift-content">
<div id="darkness-comes"></div>
<div id="ciemność">
<strong>TWOJE OSIĄGNIĘCIE</strong></br>Kolejne części naszego tekstu, możemy tam wrzucić wszystko w nadziei, że będzie tego więcej.
</div>
</div>
<div class="splugawienie" id="epifany"></div>
<div class="splugawienie" id="nightmares"></div>
<div class="splugawienie" id="dark-gift"></div>
<div class="splugawienie" id="spirall"></div>
<div class="splugawienie" id="hering"></div>
<div class="splugawienie" id="shadow"></div>
<div></div>
</div>
<div id="archetype-talents">
<div></div>
<div></div>
<div></div>
<div></div>
<div class="hover-shadow" id="one2" onclick="showSign('one2')"></div>
<div class="hover-shadow talentHidden" id="one3" onclick="showSign('one3')"></div>
<div class="hover-shadow talentHidden" id="one4" onclick="showSign('one4')"></div>
<div class="hover-shadow talentHidden" id="one5" onclick="showSign('one5')"></div>
<div id="halftwoone"></div>
<div class="hover-shadow half talentHidden" id="witalnosc" onclick="showSign('witalnosc')"></div>
<div id="halffourone"></div>
<div class="hover-shadow  half talentHidden" id="zimna" onclick="showSign('zimna')"></div>
<div class="hover-shadow talentHidden" id="two2" onclick="showSign('two2')"></div>
<div class="hover-shadow talentHidden" id="two3" onclick="showSign('two3')"></div>
<div class="hover-shadow talentHidden" id="two4" onclick="showSign('two4')"></div>
<div class="hover-shadow talentHidden" id="two5" onclick="showSign('two5')"></div>
<div class="hover-shadow talentHidden half" id="walka" onclick="showSign('walka')"></div>
<div id="halftwothree"></div>
<div id="halftwofour"></div>
<div class="hover-shadow half talentHidden" id="parkour" onclick="showSign('parkour')"></div>
<div class="hover-shadow talentHidden" id="three2" onclick="showSign('three2')"></div>
<div class="hover-shadow talentHidden" id="three3" onclick="showSign('three3')"></div>
<div class="hover-shadow talentHidden" id="three4" onclick="showSign('three4')"></div>
<div class="hover-shadow talentHidden" id="three5" onclick="showSign('three5')"></div>
<div class="hover-shadow half talentHidden" id="status" onclick="showSign('status')"></div>
<div class="hover-shadow half talentHidden" id="czujnosc" onclick="showSign('czujnosc')"></div>
<div class="hover-shadow half talentHidden" id="krzepa" onclick="showSign('krzepa')"></div>
<div class="hover-shadow  half talentHidden" id="wiedza" onclick="showSign('wiedza')"></div>
<div class="hover-shadow talentHidden" id="four2" onclick="showSign('four2')"></div>
<div class="hover-shadow talentHidden" id="four3" onclick="showSign('four3')"></div>
<div class="hover-shadow talentHidden" id="four4" onclick="showSign('four4')"></div>
<div class="hover-shadow talentHidden" id="four5" onclick="showSign('four5')"></div>
</div>
<div id="rest"></div>
`;

let siepaczAllreadyAddedTalent = [];
let siepaczFreeAccessObject = {
    start: ['one2', 'one4'],
};
const siepaczMatrixOfAcces = {
    one2: ['one3', 'two2'],
    one3: ['witalnosc'],
    one4: ['one5', 'two4'],
    one5: ['zimna'],
    witalnosc: ['one3', 'two3'],
    zimna: ['two5', 'one5'],
    two2: ['two3', 'walka'],
    two3: ['two2', 'two4', 'three3', 'witalnosc'],
    two4: ['two3', 'two5'],
    two5: ['two4', 'zimna', 'parkour'],
    walka: ['two2', 'three2'],
    parkour: ['two5', 'three5'],
    three2: ['three3', 'parkour', 'status'],
    three3: ['three2', 'three4', 'czujnosc', 'two3'],
    three4: ['three3', 'three5', 'krzepa'],
    three5: ['three4', 'wiedza'],
    status: ['three2', 'four2'],
    czujnosc: ['three3', 'four3'],
    krzepa: ['three4', 'four4'],
    wiedza: ['three5', 'four5'],
    four2: ['status'],
    four3: ['four4', 'czujnosc'],
    four4: ['four3', 'krzepa'],
    four5: ['wiedza'],
};

const egzorcystaHTML = `
<div id="banner">
    <div></div>
</div>
<div class="underbanner">
<div></div>
<div id="osiągnięcia"><strong>TWOJE OSIĄGNIĘCIA</strong></div>
<div id="dark-gift-confirm">
<div id="repetable"></div>
</div>
<div id="dark-gift-content">
<div id="darkness-comes"></div>
<div id="ciemność">
<strong>TWOJE OSIĄGNIĘCIE</strong></br>Kolejne części naszego tekstu, możemy tam wrzucić wszystko w nadziei, że będzie tego więcej.
</div>
</div>
<div class="splugawienie" id="epifany"></div>
<div class="splugawienie" id="nightmares"></div>
<div class="splugawienie" id="dark-gift"></div>
<div class="splugawienie" id="spirall"></div>
<div class="splugawienie" id="hering"></div>
<div class="splugawienie" id="shadow"></div>
<div></div>
</div>
<div id="archetype-talents">
<div></div>
<div></div>
<div></div>
<div></div>
<div class="hover-shadow" id="one2" onclick="showSign('one2')"></div>
<div class="hover-shadow" id="one3" onclick="showSign('one3')"></div>
<div class="hover-shadow" id="one4" onclick="showSign('one4')"></div>
<div class="hover-shadow" id="one5" onclick="showSign('one5')"></div>
<div class="hover-shadow half" id="charyzma" onclick="showSign('charyzma')"></div>
<div class="hover-shadow" id="two2" onclick="showSign('two2')"></div>
<div class="hover-shadow" id="two3" onclick="showSign('two3')"></div>
<div class="hover-shadow" id="two4" onclick="showSign('two4')"></div>
<div class="hover-shadow half" id="witalnosc" onclick="showSign('witalnosc')"></div>
<div class="hover-shadow half" id="okultyzm" onclick="showSign('okultyzm')"></div>
<div class="hover-shadow half" id="czujnosc" onclick="showSign('czujnosc')"></div>
<div class="hover-shadow half" id="wiedza" onclick="showSign('wiedza')"></div>
<div class="hover-shadow" id="three2" onclick="showSign('three2')"></div>
<div class="hover-shadow" id="three3" onclick="showSign('three3')"></div>
<div class="hover-shadow" id="three4" onclick="showSign('three4')"></div>
<div class="hover-shadow" id="three5" onclick="showSign('three5')"></div>
<div class="hover-shadow half" id="wola" onclick="showSign('wola')"></div>
<div class="hover-shadow half" id="status" onclick="showSign('status')"></div>
<div class="hover-shadow half" id="zimna" onclick="showSign('zimna')"></div>
<div class="hover-shadow" id="four2" onclick="showSign('four2')"></div>
<div class="hover-shadow" id="four4" onclick="showSign('four4')"></div>
<div class="hover-shadow" id="four5" onclick="showSign('four5')"></div>
</div>
<div id="rest"></div>
`;

let egzorcystaFreeAccessObject = {
    start: ['one2', 'one5'],
};
const egzorcystaMatrixOfAcces = {
    one2: ['one3', 'charyzma'],
    one3: ['one4', 'two3'],
    one4: ['one3', 'two4'],
    one5: ['wiedza', 'two4'],
    charyzma: ['one2', 'two2'],
    two2: ['two3', 'charyzma', 'witalnosc'],
    two3: ['one3', 'two2', 'okultyzm'],
    two4: ['one4', 'one2', 'czujnosc'],
    witalnosc: ['two2', 'three2'],
    okultyzm: ['two3', 'three3'],
    czujnosc: ['two4', 'three4'],
    wiedza: ['one5', 'three5'],
    three2: ['three3', 'witalnosc', 'four2'],
    three3: ['okultyzm', 'wola', 'three4'],
    three4: ['three3', 'czujnosc', 'status'],
    three5: ['zimna', 'wiedza'],
    wola: ['three3', 'four2'],
    status: ['three4', 'four4'],
    zimna: ['three5', 'four5'],
    four2: ['wola', 'three2'],
    four4: ['four5', 'status'],
    four5: ['zimna', 'four4'],
};


const kronikarzHTML = `
<div id="banner">
    <div></div>
</div>
<div class="underbanner">
<div></div>
<div id="osiągnięcia"><strong>TWOJE OSIĄGNIĘCIA</strong></div>
<div id="dark-gift-confirm">
<div id="repetable"></div>
</div>
<div id="dark-gift-content">
<div id="darkness-comes"></div>
<div id="ciemność">
<strong>TWOJE OSIĄGNIĘCIE</strong></br>Kolejne części naszego tekstu, możemy tam wrzucić wszystko w nadziei, że będzie tego więcej.
</div>
</div>
<div class="splugawienie" id="epifany"></div>
<div class="splugawienie" id="nightmares"></div>
<div class="splugawienie" id="dark-gift"></div>
<div class="splugawienie" id="spirall"></div>
<div class="splugawienie" id="hering"></div>
<div class="splugawienie" id="shadow"></div>
<div></div>
</div>
<div id="archetype-talents">
<div></div>
<div></div>
<div></div>
<div></div>
<div class="hover-shadow" id="one2" onclick="showSign('one2')"></div>
<div class="hover-shadow" id="one3" onclick="showSign('one3')"></div>
<div class="hover-shadow" id="one4" onclick="showSign('one4')"></div>
<div class="hover-shadow" id="one5" onclick="showSign('one5')"></div>
<div class="hover-shadow half" id="zimna" onclick="showSign('zimna')"></div>
<div class="hover-shadow" id="two2" onclick="showSign('two2')"></div>
<div class="hover-shadow" id="two3" onclick="showSign('two3')"></div>
<div class="hover-shadow" id="two4" onclick="showSign('two4')"></div>
<div class="hover-shadow" id="two5" onclick="showSign('two5')"></div>
<div class="hover-shadow half" id="walka" onclick="showSign('walka')"></div>
<div class="hover-shadow half" id="okultyzm" onclick="showSign('okultyzm')"></div>
<div class="hover-shadow half" id="parkour" onclick="showSign('parkour')"></div>
<div class="hover-shadow half" id="czujnosc" onclick="showSign('czujnosc')"></div>
<div class="hover-shadow" id="three2" onclick="showSign('three2')"></div>
<div class="hover-shadow" id="three3" onclick="showSign('three3')"></div>
<div class="hover-shadow" id="three4" onclick="showSign('three4')"></div>
<div class="hover-shadow" id="three5" onclick="showSign('three5')"></div>
<div class="hover-shadow half" id="status" onclick="showSign('status')"></div>
<div class="hover-shadow half" id="wiedza" onclick="showSign('wiedza')"></div>
<div class="hover-shadow half" id="krzepa" onclick="showSign('krzepa')"></div>
<div class="hover-shadow" id="four2" onclick="showSign('four2')"></div>
<div class="hover-shadow" id="four3" onclick="showSign('four3')"></div>
<div class="hover-shadow" id="four4" onclick="showSign('four4')"></div>
<div class="hover-shadow" id="four5" onclick="showSign('four5')"></div>
</div>
<div id="rest"></div>
`;

let kronikarzFreeAccessObject = {
    start: ['one2', 'one4'],
};
const kronikarzMatrixOfAcces = {
    one2: ['two2', 'one3'],
    one3: ['zimna'],
    one4: ['one5', 'two4'],
    one5: ['two5'],
    zimna: ['one3', 'two3'],
    two2: ['walka'],
    two3: ['zimna', 'two4', 'okultyzm'],
    two4: ['one4', 'two3', 'parkour'],
    two5: ['one5', 'czujnosc'],
    walka: ['three2', 'two2'],
    okultyzm: ['two3', 'three3'],
    parkour: ['two4', 'three4'],
    czujnosc: ['two5', 'three5'],
    three2: ['three3', 'walka', 'four2'],
    three3: ['three2', 'okultyzm', 'status'],
    three4: ['three5', 'parkour', 'wiedza'],
    three5: ['three4', 'krzepa', 'czujnosc'],
    status: ['three2', 'four3'],
    wiedza: ['three4', 'four4'],
    krzepa: ['three5', 'four5'],
    four2: [],
    four3: [],
    four4: [],
    four5: [],
};

const przepatrywaczHTML = `
<div id="banner">
    <div></div>
</div>
<div class="underbanner">
<div></div>
<div id="osiągnięcia"><strong>TWOJE OSIĄGNIĘCIA</strong></div>
<div id="dark-gift-confirm">
<div id="repetable"></div>
</div>
<div id="dark-gift-content">
<div id="darkness-comes"></div>
<div id="ciemność">
<strong>TWOJE OSIĄGNIĘCIE</strong></br>Kolejne części naszego tekstu, możemy tam wrzucić wszystko w nadziei, że będzie tego więcej.
</div>
</div>
<div class="splugawienie" id="epifany"></div>
<div class="splugawienie" id="nightmares"></div>
<div class="splugawienie" id="dark-gift"></div>
<div class="splugawienie" id="spirall"></div>
<div class="splugawienie" id="hering"></div>
<div class="splugawienie" id="shadow"></div>
<div></div>
</div>
<div id="archetype-talents">
<div></div>
<div></div>
<div></div>
<div></div>
<div class="hover-shadow" id="one2" onclick="showSign('one2')"></div>
<div class="hover-shadow" id="one3" onclick="showSign('one3')"></div>
<div class="hover-shadow" id="one4" onclick="showSign('one4')"></div>
<div class="hover-shadow" id="one5" onclick="showSign('one5')"></div>
<div class="hover-shadow half" id="wiedza" onclick="showSign('wiedza')"></div>
<div class="hover-shadow half" id="parkour" onclick="showSign('parkour')"></div>
<div class="hover-shadow" id="two2" onclick="showSign('two2')"></div>
<div class="hover-shadow" id="two3" onclick="showSign('two3')"></div>
<div class="hover-shadow" id="two4" onclick="showSign('two4')"></div>
<div class="hover-shadow" id="two5" onclick="showSign('two5')"></div>
<div class="hover-shadow half" id="krzepa" onclick="showSign('krzepa')"></div>
<div class="hover-shadow half" id="witalnosc" onclick="showSign('witalnosc')"></div>
<div class="hover-shadow half" id="okultyzm" onclick="showSign('okultyzm')"></div>
<div class="hover-shadow" id="three2" onclick="showSign('three2')"></div>
<div class="hover-shadow" id="three3" onclick="showSign('three3')"></div>
<div class="hover-shadow" id="three4" onclick="showSign('three4')"></div>
<div class="hover-shadow" id="three5" onclick="showSign('three5')"></div>
<div class="hover-shadow half" id="walka" onclick="showSign('walka')"></div>
<div class="hover-shadow half" id="zimna" onclick="showSign('zimna')"></div>
<div class="hover-shadow half" id="czujnosc" onclick="showSign('czujnosc')"></div>
<div class="hover-shadow" id="four2" onclick="showSign('four2')"></div>
<div class="hover-shadow" id="four3" onclick="showSign('four3')"></div>
<div class="hover-shadow" id="four4" onclick="showSign('four4')"></div>
</div>
<div id="rest"></div>
`;

let przepatrywaczFreeAccessObject = {
    start: ['one2', 'one5'],
};
const przepatrywaczMatrixOfAcces = {
    one2: ['two2', 'one3'],
    one3: ['wiedza', 'one4'],
    one4: ['one3', 'one5', 'parkour'],
    one5: ['one4', 'two5'],
    wiedza: ['one3', 'two3'],
    parkour: ['one4', 'two4'],
    two2: ['krzepa', 'two3'],
    two3: ['wiedza', 'two2', 'two4', 'witalnosc'],
    two4: ['two3', 'parkour'],
    two5: ['one5', 'okultyzm'],
    krzepa: ['two2', 'three2'],
    witalnosc: ['two3', 'three3'],
    okultyzm: ['two5', 'three5'],
    three2: ['krzepa', 'walka'],
    three3: ['witalnosc', 'zimna'],
    three4: ['three5', 'czujnosc'],
    three5: ['three4', 'okultyzm'],
    walka: ['three2', 'four2'],
    zimna: ['three3', 'four3'],
    czujnosc: ['three4', 'four4'],
    four2: [],
    four3: [],
    four4: [],
};

const rzecznikHTML = `
<div id="banner">
    <div></div>
</div>
<div class="underbanner">
<div></div>
<div id="osiągnięcia"><strong>TWOJE OSIĄGNIĘCIA</strong></div>
<div id="dark-gift-confirm">
<div id="repetable"></div>
</div>
<div id="dark-gift-content">
<div id="darkness-comes"></div>
<div id="ciemność">
<strong>TWOJE OSIĄGNIĘCIE</strong></br>Kolejne części naszego tekstu, możemy tam wrzucić wszystko w nadziei, że będzie tego więcej.
</div>
</div>
<div class="splugawienie" id="epifany"></div>
<div class="splugawienie" id="nightmares"></div>
<div class="splugawienie" id="dark-gift"></div>
<div class="splugawienie" id="spirall"></div>
<div class="splugawienie" id="hering"></div>
<div class="splugawienie" id="shadow"></div>
<div></div>
</div>
<div id="archetype-talents">
<div></div>
<div></div>
<div></div>
<div></div>
<div class="hover-shadow" id="one2" onclick="showSign('one2')"></div>
<div class="hover-shadow" id="one3" onclick="showSign('one3')"></div>
<div class="hover-shadow" id="one4" onclick="showSign('one4')"></div>
<div class="hover-shadow" id="one5" onclick="showSign('one5')"></div>
<div class="hover-shadow half" id="czujnosc" onclick="showSign('czujnosc')"></div>
<div class="hover-shadow half" id="wola" onclick="showSign('wola')"></div>
<div class="hover-shadow" id="two2" onclick="showSign('two2')"></div>
<div class="hover-shadow" id="two3" onclick="showSign('two3')"></div>
<div class="hover-shadow" id="two4" onclick="showSign('two4')"></div>
<div class="hover-shadow" id="two5" onclick="showSign('two5')"></div>
<div class="hover-shadow half" id="zimna" onclick="showSign('zimna')"></div>
<div class="hover-shadow half" id="walka" onclick="showSign('walka')"></div>
<div class="hover-shadow half" id="charyzma" onclick="showSign('charyzma')"></div>
<div class="hover-shadow" id="three2" onclick="showSign('three2')"></div>
<div class="hover-shadow" id="three3" onclick="showSign('three3')"></div>
<div class="hover-shadow" id="three5" onclick="showSign('three5')"></div>
<div class="hover-shadow half" id="status" onclick="showSign('status')"></div>
<div class="hover-shadow half" id="wiedza" onclick="showSign('wiedza')"></div>
<div class="hover-shadow half" id="okultyzm" onclick="showSign('okultyzm')"></div>
<div class="hover-shadow" id="four2" onclick="showSign('four2')"></div>
<div class="hover-shadow" id="four3" onclick="showSign('four3')"></div>
<div class="hover-shadow" id="four4" onclick="showSign('four4')"></div>
<div class="hover-shadow" id="four5" onclick="showSign('four5')"></div>
</div>
<div id="rest"></div>
`;

let rzecznikFreeAccessObject = {
    start: ['one3', 'one4'],
};
const rzecznikMatrixOfAcces = {
    one2: ['czujnosc'],
    one3: ['one2', 'two3'],
    one4: ['one5', 'two4'],
    one5: ['wola'],
    czujnosc: ['one2', 'two2'],
    wola: ['one5', 'two5'],
    two2: ['czujnosc', 'two3', 'three2'],
    two3: ['two2', 'one3', 'zimna'],
    two4: ['two5', 'walka'],
    two5: ['two4', 'wola', 'charyzma'],
    zimna: ['two3', 'three3'],
    walka: ['two4', 'three3'],
    charyzma: ['two5', 'three5'],
    three2: ['two2', 'status'],
    three3: ['zimna', 'walka', 'wiedza'],
    three5: ['charyzma', 'okultyzm'],
    status: ['four2'],
    wiedza: ['three3', 'four4'],
    okultyzm: ['three5', 'four5'],
    four2: ['four3'],
    four3: [],
    four4: ['wiedza', 'four5'],
    four5: ['four4', 'okultyzm'],
};

const sniacyHTML = `
<div id="banner">
    <div></div>
</div>
<div class="underbanner">
<div></div>
<div id="osiągnięcia"><strong>TWOJE OSIĄGNIĘCIA</strong></div>
<div id="dark-gift-confirm">
<div id="repetable"></div>
</div>
<div id="dark-gift-content">
<div id="darkness-comes"></div>
<div id="ciemność">
<strong>TWOJE OSIĄGNIĘCIE</strong></br>Kolejne części naszego tekstu, możemy tam wrzucić wszystko w nadziei, że będzie tego więcej.
</div>
</div>
<div class="splugawienie" id="epifany"></div>
<div class="splugawienie" id="nightmares"></div>
<div class="splugawienie" id="dark-gift"></div>
<div class="splugawienie" id="spirall"></div>
<div class="splugawienie" id="hering"></div>
<div class="splugawienie" id="shadow"></div>
<div></div>
</div>
<div id="archetype-talents">
<div></div>
<div></div>
<div></div>
<div></div>
<div class="hover-shadow" id="one2" onclick="showSign('one2')"></div>
<div class="hover-shadow" id="one3" onclick="showSign('one3')"></div>
<div class="hover-shadow" id="one4" onclick="showSign('one4')"><img src="./card/rytualiscismall.png"></div>
<div class="hover-shadow" id="one5" onclick="showSign('one5')"></div>
<div class="hover-shadow half" id="wola" onclick="showSign('wola')"></div>
<div class="hover-shadow half" id="krzepa" onclick="showSign('krzepa')"></div>
<div class="hover-shadow half" id="witalnosc" onclick="showSign('witalnosc')"></div>
<div class="hover-shadow" id="two2" onclick="showSign('two2')"><img src="./card/rytualiscismall.png"></div>
<div class="hover-shadow" id="two3" onclick="showSign('two3')"></div>
<div class="hover-shadow" id="two5" onclick="showSign('two5')"></div>
<div class="hover-shadow half" id="wiedza" onclick="showSign('wiedza')"></div>
<div class="hover-shadow half" id="charyzma" onclick="showSign('charyzma')"></div>
<div class="hover-shadow" id="three3" onclick="showSign('three3')"></div>
<div class="hover-shadow" id="three4" onclick="showSign('three4')"></div>
<div class="hover-shadow" id="three5" onclick="showSign('three5')"></div>
<div class="hover-shadow half" id="okultyzm" onclick="showSign('okultyzm')"></div>
<div class="hover-shadow half" id="status" onclick="showSign('status')"></div>
<div class="hover-shadow half" id="czujnosc" onclick="showSign('czujnosc')"></div>
<div class="hover-shadow" id="four2" onclick="showSign('four2')"></div>
<div class="hover-shadow" id="four3" onclick="showSign('four3')"></div>
<div class="hover-shadow" id="four4" onclick="showSign('four4')"></div>
<div class="hover-shadow" id="four5" onclick="showSign('four5')"></div>
</div>
<div id="rest"></div>
`;

let sniacyFreeAccessObject = {
    start: ['one2', 'one5', 'two3', 'charyzma'],
};
const sniacyMatrixOfAcces = {
    one2: ['one3', 'wola'],
    one3: ['krzepa'],
    one4: [],
    one5: ['witalnosc'],
    wola: ['okultyzm', 'three3'],
    krzepa: ['one3', 'two3'],
    witalnosc: ['one5', 'two5'],
    two3: ['krzepa', 'wiedza'],
    two5: ['witalnosc', 'three5'],
    wiedza: ['three3'],
    charyzma: ['three4'],
    three3: ['wola', 'okultyzm', 'wiedza', 'three4', 'four3'],
    three4: ['three3', 'three5', 'status'],
    three5: ['three4', 'two5', 'czujnosc'],
    okultyzm: ['four2', 'wola', 'three3'],
    status: ['three4', 'four4'],
    czujnosc: ['three5', 'four5'],
    four2: ['okultyzm', 'four3'],
    four3: ['three3', 'four2', 'four4'],
    four4: ['status', 'four3'],
    four5: [],
};

const szabrownikHTML = `
<div id="banner">
    <div></div>
</div>
<div class="underbanner">
<div></div>
<div id="osiągnięcia"><strong>TWOJE OSIĄGNIĘCIA</strong></div>
<div id="dark-gift-confirm">
<div id="repetable"></div>
</div>
<div id="dark-gift-content">
<div id="darkness-comes"></div>
<div id="ciemność">
<strong>TWOJE OSIĄGNIĘCIE</strong></br>Kolejne części naszego tekstu, możemy tam wrzucić wszystko w nadziei, że będzie tego więcej.
</div>
</div>
<div class="splugawienie" id="epifany"></div>
<div class="splugawienie" id="nightmares"></div>
<div class="splugawienie" id="dark-gift"></div>
<div class="splugawienie" id="spirall"></div>
<div class="splugawienie" id="hering"></div>
<div class="splugawienie" id="shadow"></div>
<div></div>
</div>
<div id="archetype-talents">
<div></div>
<div></div>
<div></div>
<div></div>
<div class="hover-shadow" id="one2" onclick="showSign('one2')"></div>
<div class="hover-shadow" id="one3" onclick="showSign('one3')"></div>
<div class="hover-shadow" id="one4" onclick="showSign('one4')"></div>
<div class="hover-shadow" id="one5" onclick="showSign('one5')"></div>
<div class="hover-shadow half" id="krzepa" onclick="showSign('krzepa')"></div>
<div class="hover-shadow half" id="wiedza" onclick="showSign('wiedza')"></div>
<div class="hover-shadow" id="two2" onclick="showSign('two2')"></div>
<div class="hover-shadow" id="two3" onclick="showSign('two3')"></div>
<div class="hover-shadow" id="two4" onclick="showSign('two4')"></div>
<div class="hover-shadow" id="two5" onclick="showSign('two5')"></div>
<div class="hover-shadow half" id="status" onclick="showSign('status')"></div>
<div class="hover-shadow half" id="witalnosc" onclick="showSign('witalnosc')"></div>
<div class="hover-shadow" id="three2" onclick="showSign('three2')"></div>
<div class="hover-shadow" id="three3" onclick="showSign('three3')"></div>
<div class="hover-shadow" id="three4" onclick="showSign('three4')"></div>
<div class="hover-shadow" id="three5" onclick="showSign('three5')"></div>
<div class="hover-shadow half" id="wola" onclick="showSign('wola')"></div>
<div class="hover-shadow half" id="parkour" onclick="showSign('parkour')"></div>
<div class="hover-shadow half" id="czujnosc" onclick="showSign('czujnosc')"></div>
<div class="hover-shadow half" id="okultyzm" onclick="showSign('okultyzm')"></div>
<div class="hover-shadow" id="four2" onclick="showSign('four2')"></div>
<div class="hover-shadow" id="four3" onclick="showSign('four3')"></div>
<div class="hover-shadow" id="four4" onclick="showSign('four4')"></div>
<div class="hover-shadow" id="four5" onclick="showSign('four5')"></div>
</div>
<div id="rest"></div>
`;

let szabrownikFreeAccessObject = {
    start: ['one2', 'one5'],
};
const szabrownikMatrixOfAcces = {
    one2: ['one3', 'two2'],
    one3: ['krzepa', 'one4'],
    one4: ['one3', 'one5'],
    one5: ['wiedza', 'one4'],
    krzepa: ['two3'],
    wiedza: ['two5'],
    two2: ['status'],
    two3: ['krzepa', 'two4'],
    two4: ['two3', 'three4'],
    two5: ['wiedza', 'witalnosc'],
    status: ['two2', 'three2'],
    witalnosc: ['two5', 'three5'],
    three2: ['status', 'three3', 'walka'],
    three3: ['three2', 'three4', 'parkour'],
    three4: ['two4', 'three3', 'three5', 'czujnosc'],
    three5: ['three4', 'witalnosc', 'okultyzm'],
    walka: ['three2', 'four2'],
    parkour: ['three3', 'four3'],
    czujnosc: ['three4', 'four4'],
    okultyzm: ['three5', 'four5'],
    four2: [],
    four3: ['parkour', 'four4'],
    four4: ['czujnosc', 'four3'],
    four5: [],
};

const wiedzmiarzHTML = `
<div id="banner">
    <div></div>
</div>
<div class="underbanner">
<div></div>
<div id="osiągnięcia"><strong>TWOJE OSIĄGNIĘCIA</strong></div>
<div id="dark-gift-confirm">
<div id="repetable"></div>
</div>
<div id="dark-gift-content">
<div id="darkness-comes"></div>
<div id="ciemność">
<strong>TWOJE OSIĄGNIĘCIE</strong></br>Kolejne części naszego tekstu, możemy tam wrzucić wszystko w nadziei, że będzie tego więcej.
</div>
</div>
<div class="splugawienie" id="epifany"></div>
<div class="splugawienie" id="nightmares"></div>
<div class="splugawienie" id="dark-gift"></div>
<div class="splugawienie" id="spirall"></div>
<div class="splugawienie" id="hering"></div>
<div class="splugawienie" id="shadow"></div>
<div></div>
</div>
<div id="archetype-talents">
<div></div>
<div></div>
<div></div>
<div></div>
<div class="hover-shadow" id="one2" onclick="showSign('one2')"><img src="./card/rytualiscismall.png"></div>
<div class="hover-shadow" id="one4" onclick="showSign('one4')"></div>
<div class="hover-shadow" id="one5" onclick="showSign('one5')"><img src="./card/rytualiscismall.png"></div>
<div class="hover-shadow half" id="czujnosc" onclick="showSign('czujnosc')"></div>
<div class="hover-shadow half" id="wiedza" onclick="showSign('wiedza')"></div>
<div class="hover-shadow" id="two2" onclick="showSign('two2')"></div>
<div class="hover-shadow" id="two3" onclick="showSign('two3')"></div>
<div class="hover-shadow" id="two4" onclick="showSign('two4')"></div>
<div class="hover-shadow half" id="krzepa" onclick="showSign('krzepa')"></div>
<div class="hover-shadow half" id="parkour" onclick="showSign('parkour')"></div>
<div class="hover-shadow half" id="charyzma" onclick="showSign('charyzma')"></div>
<div class="hover-shadow" id="three2" onclick="showSign('three2')"></div>
<div class="hover-shadow" id="three3" onclick="showSign('three3')"></div>
<div class="hover-shadow" id="three4" onclick="showSign('three4')"></div>
<div class="hover-shadow" id="three5" onclick="showSign('three5')"></div>
<div class="hover-shadow half" id="witalnosc" onclick="showSign('witalnosc')"></div>
<div class="hover-shadow half" id="wola" onclick="showSign('wola')"></div>
<div class="hover-shadow half" id="okultyzm" onclick="showSign('okultyzm')"></div>
<div class="hover-shadow" id="four2" onclick="showSign('four2')"></div>
<div class="hover-shadow" id="four3" onclick="showSign('four3')"></div>
<div class="hover-shadow" id="four4" onclick="showSign('four4')"></div>
<div class="hover-shadow" id="four5" onclick="showSign('four5')"></div>
</div>
<div id="rest"></div>
`;

let wiedzmiarzFreeAccessObject = {
    start: ['two2', 'czujnosc', 'one4', 'charyzma'],
};
const wiedzmiarzMatrixOfAcces = {
    one4: ['wiedza'],
    czujnosc: ['two3'],
    wiedza: ['two4'],
    two2: ['two3', 'krzepa'],
    two3: ['two4', 'parkour'],
    two4: ['wiedza', 'two3', 'three4'],
    krzepa: ['three2'],
    parkour: ['two3', 'three3'],
    charyzma: ['three5'],
    three2: ['krzepa', 'four2'],
    three3: ['parkour', 'four3'],
    three4: ['wola'],
    three5: ['three4', 'okultyzm'],
    witalnosc: ['three3', 'four3', 'witalnosc'],
    wola: ['four4'],
    okultyzm: ['four5'],
    four2: ['three2', 'four3'],
    four3: ['witalnosc', 'four2'],
    four4: [],
    four5: [],
};

const zercaHTML = `
<div id="banner">
    <div></div>
</div>
<div class="underbanner">
<div></div>
<div id="osiągnięcia"><strong>TWOJE OSIĄGNIĘCIA</strong></div>
<div id="dark-gift-confirm">
<div id="repetable"></div>
</div>
<div id="dark-gift-content">
<div id="darkness-comes"></div>
<div id="ciemność">
<strong>TWOJE OSIĄGNIĘCIE</strong></br>Kolejne części naszego tekstu, możemy tam wrzucić wszystko w nadziei, że będzie tego więcej.
</div>
</div>
<div class="splugawienie" id="epifany"></div>
<div class="splugawienie" id="nightmares"></div>
<div class="splugawienie" id="dark-gift"></div>
<div class="splugawienie" id="spirall"></div>
<div class="splugawienie" id="hering"></div>
<div class="splugawienie" id="shadow"></div>
<div></div>
</div>
<div id="archetype-talents">
<div></div>
<div></div>
<div></div>
<div></div>
<div class="hover-shadow" id="one2" onclick="showSign('one2')"></div>
<div class="hover-shadow" id="one3" onclick="showSign('one3')"></div>
<div class="hover-shadow" id="one4" onclick="showSign('one4')"></div>
<div class="hover-shadow" id="one5" onclick="showSign('one5')"></div>
<div class="hover-shadow half" id="charyzma" onclick="showSign('charyzma')"></div>
<div class="hover-shadow half" id="parkour" onclick="showSign('parkour')"></div>
<div class="hover-shadow" id="two2" onclick="showSign('two2')"></div>
<div class="hover-shadow" id="two3" onclick="showSign('two3')"></div>
<div class="hover-shadow" id="two5" onclick="showSign('two5')"></div>
<div class="hover-shadow half" id="okultyzm" onclick="showSign('okultyzm')"></div>
<div class="hover-shadow half" id="czujnosc" onclick="showSign('czujnosc')"></div>
<div class="hover-shadow half" id="status" onclick="showSign('status')"></div>
<div class="hover-shadow" id="three2" onclick="showSign('three2')"></div>
<div class="hover-shadow" id="three3" onclick="showSign('three3')"></div>
<div class="hover-shadow" id="three4" onclick="showSign('three4')"></div>
<div class="hover-shadow" id="three5" onclick="showSign('three5')"></div>
<div class="hover-shadow half" id="walka" onclick="showSign('walka')"></div>
<div class="hover-shadow half" id="witalnosc" onclick="showSign('witalnosc')"></div>
<div class="hover-shadow half" id="krzepa" onclick="showSign('krzepa')"></div>
<div class="hover-shadow" id="four2" onclick="showSign('four2')"></div>
<div class="hover-shadow" id="four3" onclick="showSign('four3')"></div>
<div class="hover-shadow" id="four4" onclick="showSign('four4')"></div>
<div class="hover-shadow" id="four5" onclick="showSign('four5')"></div>
</div>
<div id="rest"></div>
`;

let zercaFreeAccessObject = {
    start: ['one2', 'one4'],
};
const zercaMatrixOfAcces = {
    one2: ['one3', 'two2'],
    one3: ['charyzma'],
    one4: ['one5', 'czujnosc'],
    one5: ['parkour'],
    charyzma: ['two3'],
    parkour: ['two5'],
    two2: ['two3', 'three2'],
    two3: ['two2', 'charyzma', 'okultyzm'],
    two5: ['parkour', 'status'],
    okultyzm: ['two3', 'three3'],
    czujnosc: ['three4'],
    status: ['two5', 'three5'],
    three2: ['two2', 'three3', 'walka'],
    three3: ['three2', 'okultyzm', 'three4'],
    three4: ['czujnosc', 'three3', 'three5', 'witalnosc'],
    three5: ['three4', 'two5', 'krzepa'],
    walka: ['three2', 'four2'],
    witalnosc: ['four4'],
    krzepa: ['four5'],
    four2: ['walka', 'four3'],
    four3: ['four2', 'four4'],
    four4: ['witalnosc', 'four3'],
    four5: [],
};
