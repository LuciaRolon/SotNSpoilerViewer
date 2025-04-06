const highlightSpots = {
    "Cube of Zoe": {
        xPos: 200,
        yPos: 970,
        imageUrl: "Cube_of_Zoe_Icon.png"
    },
    "Soul of Bat": {
        xPos: 563,
        yPos: 785,
        imageUrl: "Soul_of_Bat_Icon.png"
    },
    "Power of Wolf": {
        xPos: 8,
        yPos: 990,
        imageUrl: "Power_of_Wolf_Icon.png"
    },
    "Skill of Wolf": {
        xPos: 165,
        yPos: 935,
        imageUrl: "Skill_of_Wolf_Icon.png"
    },
    "Bat Card": {
        xPos: 140,
        yPos: 862,
        imageUrl: "Card_Icon.png"
    },
    "Spirit Orb": {
        xPos: 285,
        yPos: 910,
        imageUrl: "Spirit_Orb_Icon.png"
    },
    "Gravity Boots": {
        xPos: 390,
        yPos: 810,
        imageUrl: "Gravity_Boots_Icon.png"
    },
    "Holy glasses": {
        xPos: 370,
        yPos: 910,
        imageUrl: "Holy_Glasses_Icon.png"
    },
    "Soul of Wolf": {
        xPos: 718,
        yPos: 750,
        imageUrl: "Soul_of_Wolf_Icon.png"
    },
    "Faerie Scroll": {
        xPos: 692,
        yPos: 761,
        imageUrl: "Fairie_Scroll_Icon.png"
    },
    "Jewel of Open": {
        xPos: 575,
        yPos: 775,
        imageUrl: "Jewel_of_Open_Icon.png"
    },
    "Faerie Card": {
        xPos: 610,
        yPos: 750,
        imageUrl: "Card_Icon.png"
    },
    "Fire of Bat": {
        xPos: 695,
        yPos: 668,
        imageUrl: "Fire_of_Bat_Icon.png"
    },
    "Leap Stone": {
        xPos: 357,
        yPos: 667,
        imageUrl: "Leap_Stone_Icon.png"
    },
    "Power of Mist": {
        xPos: 357,
        yPos: 644,
        imageUrl: "Power_of_Mist_Icon.png"
    },
    "Ghost Card": {
        xPos: 453,
        yPos: 620,
        imageUrl: "Card_Icon.png"
    },
    "Silver ring": {
        xPos: 81,
        yPos: 716,
        imageUrl: "Silver_Ring_Icon.png"
    },
    "Echo of Bat": {
        xPos: 177,
        yPos: 729,
        imageUrl: "Echo_of_Bat_Icon.png"
    },
    "Sword Card": {
        xPos: 225,
        yPos: 752,
        imageUrl: "Card_Icon.png"
    },
    "Form of Mist": {
        xPos: 237,
        yPos: 800,
        imageUrl: "Form_of_Mist_Icon.png"
    },
    "Crystal cloak": {
        xPos: 465,
        yPos: 992,
        imageUrl: ""
    },
    "Gold ring": {
        xPos: 525,
        yPos: 932,
        imageUrl: "Gold_Ring_Icon.png"
    },
    "Holy Symbol": {
        xPos: 646,
        yPos: 1027,
        imageUrl: "Holy_Symbol_Icon.png"
    },
    "Merman Statue": {
        xPos: 81,
        yPos: 1040,
        imageUrl: "Merman_Statue_Icon.png"
    },
    "Demon Card": {
        xPos: 333,
        yPos: 1064,
        imageUrl: "Card_Icon.png"
    },
    "Spike Breaker": {
        xPos: 477,
        yPos: 1148,
        imageUrl: "Spike_Breaker_Icon.png"
    },
    "Nosedevil Card": {
        xPos: 0,
        yPos: 0,
        imageUrl: "Card_Icon.png"
    },
    "Sprite Card": {
        xPos: 0,
        yPos: 0,
        imageUrl: "Card_Icon.png"
    },
    "Mormegil": {
        xPos: 194,
        yPos: 1136,
        imageUrl: ""
    },
    "Ring of Vlad": {
        xPos: 261,
        yPos: 500,
        imageUrl: "Ring_of_Vlad_Icon.png"
    },
    "Heart of Vlad": {
        xPos: 465,
        yPos: 464,
        imageUrl: "Heart_of_Vlad_Icon.png"
    },
    "Rib of Vlad": {
        xPos: 515,
        yPos: 428,
        imageUrl: "Rib_of_Vlad_Icon.png"
    },
    "Trio": {
        xPos: 501,
        yPos: 356,
        imageUrl: ""
    },
    "Ring of Arcana": {
        xPos: 585,
        yPos: 296,
        imageUrl: ""
    },
    "Tooth of Vlad": {
        xPos: 57,
        yPos: 344,
        imageUrl: "Tooth_of_Vlad_Icon.png"
    },
    "Dark Blade": {
        xPos: 261,
        yPos: 164,
        imageUrl: ""
    },
    "Force of Echo": {
        xPos: 81,
        yPos: 128,
        imageUrl: "Force_of_Echo_Icon.png"
    },
    "Eye of Vlad": {
        xPos: 381,
        yPos: 140,
        imageUrl: "Eye_of_Vlad_Icon.png"
    },
    "Gas Cloud": {
        xPos: 537,
        yPos: 20,
        imageUrl: "Gas_Cloud_Icon.png"
    }
};

function removeElementsByTagAndAlt(tag, altText) {
    document.querySelectorAll(`${tag}[alt="${altText}"]`).forEach(el => el.remove());
}

function readSpoilerLog(){
    removeElementsByTagAndAlt("img", "RelicSpoiler");
    const inputArea = document.getElementById("spoilerLog");
    let content = inputArea.value;
    const lines = content.split("\n");
    lines.forEach(line => {
        if(line.split(" at ").length <= 1) return;
        line = line.trim();
        let relicName = line.split(" at ")[0];        
        let relicLocation = line.split(" at ")[1];
        if(!(relicName in highlightSpots) || !(relicLocation in highlightSpots)) return;
        
        let originalLocation = highlightSpots[relicName];
        let newLocation = highlightSpots[relicLocation];
        insertImage(newLocation.xPos, newLocation.yPos, originalLocation.imageUrl);
    })
    
}

function insertImage(xPos, yPos, imgUrl){
    const container = document.getElementById('mapContainer');
    const img = document.createElement('img');
    img.src = imgUrl;
    img.alt = "RelicSpoiler";
    img.className = 'highlight-spot';
    img.style.left = `${xPos}px`;
    img.style.top = `${yPos}px`;
    img.style.position = "absolute";
    img.style.width = "20px";
    img.style.height = "20px";
    container.appendChild(img);
    
}

function loadPage(){
    const inputArea = document.getElementById("spoilerLog");
    inputArea.value = "";
    inputArea.addEventListener("input", readSpoilerLog);
    
}



window.addEventListener("load", loadPage);
