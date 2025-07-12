const data = {
  "Party Leaders & Heroes": {
    "Fighter": [
      {
        name: "The Fist of Reason",
        ability: "ทุกครั้งที่คุณทอยเพื่อต่อสู้ (Challenge) ให้บวก +2 กับผลทอยของคุณ",
        roll: "-",
        image: "https://unstablegameswiki.com/images/9/95/HtS-Base-103-2E.png",
        type: "Party Leader",
        class: "Fighter"
      },
      {
        name: "หาย",
        ability: "ปีนต้นไม้",
        roll: "+6",
        image: "https://example.com/images/fighter1.jpg",
        type: "Party Leader",
        class: "Fighter"
      },
    ],
    "Wizard": [
      {
        name: "The Cloaked Sage",
        ability: "ทุกครั้งที่คุณเล่นการ์ดเวทมนตร์ ให้จั่วการ์ด 1 ใบ",
        roll: "-",
        image: "https://unstablegameswiki.com/images/thumb/c/c5/HtS-Base-104-2E.png/347px-HtS-Base-104-2E.png",
        type: "Party Leader",
        class: "Wizard"
      },
    ],
    "Thief": [
      {
        name: "The Shadow Claw",
        ability: "ในเทิร์นของคุณ ใช้แต้มการกระทำ 1 แต้ม ดึงการ์ดจากมือผู้เล่นคนอื่นได้หนึ่งใบ",
        roll: "-",
        image: "https://unstablegameswiki.com/images/thumb/1/11/HtS-Base-102-2E.png/347px-HtS-Base-102-2E.png",
        type: "Party Leader",
        class: "Thief"
      },
      {
        name: "หาย",
        ability: "ปีนต้นไม้",
        roll: "+6",
        image: "https://example.com/images/fighter1.jpg",
        type: "Hero"
      }
    ],
    "Guardian": [
      {
        name: "The Protecting Horn",
        ability: "เมื่อใดก็ตามที่คุณเล่นการ์ดปรับแต้ม เพิ่มหรือลดผลทอยนั้น ±1",
        roll: "-",
        image: "https://unstablegameswiki.com/images/thumb/2/24/HtS-Base-101-2E.png/347px-HtS-Base-101-2E.png",
        type: "Party Leader",
        class: "Guardian"
      },
      {
        name: "หาย",
        ability: "ปีนต้นไม้",
        roll: "+6",
        image: "https://example.com/images/fighter1.jpg",
        type: "Hero"
      }
    ],
    "Bard": [
      {
        name: "The Charismatic Song",
        ability: "ทุกครั้งที่ทอยเพื่อใช้เอฟเฟกต์ของฮีโร่ +1 ให้ผลทอยนั้น",
        roll: "-",
        image: "https://unstablegameswiki.com/images/thumb/b/bf/HtS-Base-106-2E.png/200px-HtS-Base-106-2E.png",
        type: "Party Leader",
        class: "Bard"
      },
      {
        name: "หาย",
        ability: "ปีนต้นไม้",
        roll: "+6",
        image: "https://example.com/images/fighter1.jpg",
        type: "Hero"
      }
    ],
    "Ranger": [
      {
        name: "The Divine Arrow",
        ability: "ทุกครั้งที่คุณทอยเพื่อโจมตีมอนสเตอร์ +1 ให้ผลทอยนั้น",
        roll: "-",
        image: "https://unstablegameswiki.com/images/thumb/2/21/HtS-Base-105-2E.png/200px-HtS-Base-105-2E.png",
        type: "Party Leader",
        class: "Ranger"
      },
      {
        name: "หาย",
        ability: "ปีนต้นไม้",
        roll: "+6",
        image: "https://example.com/images/fighter1.jpg",
        type: "Hero"
      }
    ],
    "Warrior": [
      {
        name: "The Piercing Howl",
        ability: "ทุกครั้งที่คุณทอยลูกเต๋า ให้บวกเพิ่ม +1 ต่อจำนวนการ์ดไอเทมที่ติดตั้งอยู่กับการ์ดฮีโร่ในปาร์ตี้ของคุณ",
        roll: "-",
        image: "https://unstablegameswiki.com/images/thumb/1/18/HtS-WarDruid-101.png/200px-HtS-WarDruid-101.png",
        type: "Party Leader",
        class: "Warrior"
      },
      {
        name: "หาย",
        ability: "ปีนต้นไม้",
        roll: "+6",
        image: "https://example.com/images/fighter1.jpg",
        type: "Hero"
      }
    ],
    "Druid": [
      {
        name: "The Noble Shaman",
        ability: "หนึ่งครั้งต่อเทิร์นในแต่ละเทิร์นของผู้เล่น คุณสามารถเลือกผลทอยของผู้เล่นคนใดก็ได้ แล้วลดผลทอยนั้นลง 1 แต้ม",
        roll: "-",
        image: "https://unstablegameswiki.com/images/thumb/7/76/HtS-WarDruid-102.png/200px-HtS-WarDruid-102.png",
        type: "Party Leader",
        class: "Druid"
      },
      {
        name: "หาย",
        ability: "ปีนต้นไม้",
        roll: "+6",
        image: "https://example.com/images/fighter1.jpg",
        type: "Hero"
      }
    ],
    "Necromancer": [
      {
        name: "The Gnawing Dread",
        ability: "ในแต่ละเทิร์นของคุณ คุณสามารถใช้แต้มการกระทำ 2 แต้มเพื่อค้นหาไพ่จากกองทิ้งและนำมันกลับขึ้นมือได้หนึ่งใบ",
        roll: "-",
        image: "https://unstablegameswiki.com/images/thumb/2/29/HtS-BersNecr-101.png/200px-HtS-BersNecr-101.png",
        type: "Party Leader",
        class: "Necromancer"
      },
      {
        name: "หาย",
        ability: "ปีนต้นไม้",
        roll: "+6",
        image: "https://example.com/images/fighter1.jpg",
        type: "Hero"
      }
    ],
    "Berserker": [
      {
        name: "The Raging Manticore",
        ability: "ทุกครั้งที่คุณกำจัดการ์ดมอนสเตอร์ได้ ให้จั่วการ์ด 2 ใบ",
        roll: "-",
        image: "https://unstablegameswiki.com/images/4/47/HtS-BersNecr-102.png",
        type: "Party Leader",
        class: "Berserker"
      },
      {
        name: "หาย",
        ability: "ปีนต้นไม้",
        roll: "+6",
        image: "https://example.com/images/fighter1.jpg",
        type: "Hero"
      }
    ],
  },
  "Monsters": {},
  "Items": {},
  "Cursed Items": {},
  "Magic": {},
  "Modifiers": {},
  "Challenges": {},
  "Rule Card": {}
};

const categorySelect = document.getElementById("categorySelect");
const subCategorySelect = document.getElementById("subCategorySelect");
const searchInput = document.getElementById("searchInput");
const cardContainer = document.getElementById("cardContainer");

// เติมหมวดหมู่หลัก
for (let category in data) {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  categorySelect.appendChild(option);
}

categorySelect.addEventListener("change", () => {
  searchInput.value = "";
  const selectedCategory = categorySelect.value;
  subCategorySelect.innerHTML = '<option value="">-- เลือกกลุ่มย่อย --</option>';

  // แสดงเฉพาะกลุ่มย่อยถ้าเป็น Party Leaders & Heroes
  if (selectedCategory === "Party Leaders & Heroes") {
    const subGroups = data[selectedCategory];
    for (let sub in subGroups) {
      const option = document.createElement("option");
      option.value = sub;
      option.textContent = sub;
      subCategorySelect.appendChild(option);
    }
    subCategorySelect.disabled = false;
  } else {
    subCategorySelect.disabled = true;
  }

  displayCards();
});

subCategorySelect.addEventListener("change", () => {
  searchInput.value = "";
  subCategorySelect.blur();
  displayCards();
});
searchInput.addEventListener("input", displayCards);

function displayCards() {
  const category = categorySelect.value;
  const sub = subCategorySelect.value;
  const search = searchInput.value.toLowerCase();
  cardContainer.innerHTML = "";

  let matchedCards = [];

  if (search) {
    // ค้นหาชื่อทั้งหมดในทุกหมวดหมู่
    for (let cat in data) {
      const subcats = data[cat];
      for (let sub in subcats) {
        matchedCards.push(
          ...subcats[sub].filter(card => card.name.toLowerCase().includes(search))
        );
      }
    }
  } else if (category === "Party Leaders & Heroes" && sub && data[category][sub]) {
    matchedCards = data[category][sub];
  }

  matchedCards.forEach(card => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="${card.image || 'https://via.placeholder.com/100'}" alt="${card.name}">
      <div>
        <strong>${card.name}</strong><br>
        ความสามารถ: ${card.ability}<br>
        ทอย: ${card.roll}<br>
        หมวด: ${card.class}<br>
        ประเภท: ${card.type || '-'}
      </div>
    `;
    cardContainer.appendChild(div);
  });
}
