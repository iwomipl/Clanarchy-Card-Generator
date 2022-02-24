const gridContainerHTML = `
<div class="card">
<div id="banner">
    <div></div>
</div>
<div id="skills-top">
    <div class="skillRows"><div class="skill walka">1</div><div class="addingSkills"><span>1</span><span>2</span></div></div> 
    <div class="skillRows2"><div class="skill charyzma">1</div><div class="addingSkills"><span>1</span><span>2</span></div></div>
    <div class="skillRows3"><div class="skill okultyzm">1</div><div class="addingSkills"><span>1</span><span>2</span></div></div>
    <div class="skillRows"><div class="skill parkour">1</div><div class="addingSkills"><span>1</span><span>2</span></div></div> 
    <div class="skillRows2"><div class="skill zimna">1</div><div class="addingSkills"><span>1</span><span>2</span></div></div>
    <div class="skillRows3"><div class="skill wiedza">1</div><div class="addingSkills"><span>1</span><span>2</span></div></div>
    <div class="skillRows"><div class="skill krzepa">1</div><div class="addingSkills"><span>1</span><span>2</span></div></div> 
    <div class="skillRows2"><div class="skill status">1</div><div class="addingSkills"><span>1</span><span>2</span></div></div>
    <div class="skillRows3"><div class="skill czujnosc">1</div><div class="addingSkills"><span>1</span><span>2</span></div></div>
</div>
</div>
<div id="characteristics">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div class="first witalnosc">0</div>
<div class="second ciosu">0</div>
<div class="third pancerz">0</div>
<div class="first wola">0</div>
<div class="second presja">0</div>
<div class="third mistyczny">0</div>
<div></div>
</div>
<div>
<div id="history">
    <div id="name">
        <div></div>
        <div class="hero-name">Carlos</div>
        <div class="clan-name">Od Carlitów</div>
    </div>
    <div class="past">
        <div></div>
        <div id="hisClan">Przyszedł bosy</div>
        <div  id="hisTour">Poszedłw butach</div>
        <div  id="hisSecr">Bo ukradł</div>
    </div>
    <div></div>
</div>
</div>
<div></div>


<div id="separator"></div>
<div id="experience">
<div></div>
<div class="exp-chossers">
    <div class="chosen1"></div>
</div>
<div class="exp-chossers">
    <div class="chosen2"></div>
</div>
<div class="exp-chossers">
    <div class="chosen3"></div>
</div>
<div></div>
</div>
<div id="materials">
<div id="resources">
    <div></div>
    <div id="zasoby"></div>
    <div id="bonus"></div>
    <div></div>
</div>
</div>
<div id="rest"></div>
`;

const materials = {
    materials: {
        0: [1],
        1: [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112],
        2: [200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215],
        3: [300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311],
        4: [400, 401, 402],
        5: [500],
        6: [],
        7: [700],
        8: [800],
        9: [900],
        10: [1000],
        11: [],
        12: [1200],
    },
    soldaci: {
        1: [120, 121, 122, 123, 124],
        2: [220, 221, 222, 223, 224],
        3: [320, 321, 322, 323],
        4: [420, 421],
        6: [620],
    },
    hanza: {
        1: [140, 141],
        2: [240],
        3: [340, 341],
        5: [540],
        6: [640],
    },
    mechanisci: {
        2: [260, 261, 262],
        3: [360, 361],
        4: [460],
        5: [560],
    },
    rytualisci: {
        1: [180],
        2: [280, 281, 282],
        3: [380, 381],
        4: [480],
    },
}