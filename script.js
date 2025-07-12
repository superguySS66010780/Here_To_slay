const data = {
  "Party Leaders & Heroes": {
    "Fighter": [
      {
        name: "กาย",
        ability: "ปีนต้นไม้",
        roll: "+6",
        image: "https://unstablegameswiki.com/images/4/47/HtS-BersNecr-102.png"
      },{
        name: "หาย",
        ability: "ปีนต้นไม้",
        roll: "+6",
        image: "https://example.com/images/fighter1.jpg"
      },
    ],
    "Wizard": [
      {
        name: "กาย",
        ability: "ปีนต้นไม้",
        roll: "+6",
        image: "https://example.com/images/wizard1.jpg"
      },
    ],
    "Thief": [],
    "Guardian": [],
    "Bard": [],
    "Ranger": [],
    "Warrior": [],
    "Druid": [],
    "Necromancer": [],
    "Berserker": [],
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
        ทอย: ${card.roll}
      </div>
    `;
    cardContainer.appendChild(div);
  });
}