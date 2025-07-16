const hero = {
  name: "Clickus",
  level: 1,
  exp: 0,
  baseClickDamage: 1,
  inventory: [],
  equipped: {
    weapon: null
  },
  expDe: 100,

  get clickDamage() {
    return this.baseClickDamage + this.level * 2 + (this.equipped.weapon?.damage || 0);
  },

  gainExp(amount) {
    this.exp += amount;
    const levelUpXP = Math.floor(10 * this.level);
    this.expDe = levelUpXP;
    while (this.exp >= this.expDe) {
      this.level++;
      this.exp -= levelUpXP;
      log(`⬆️ Subiu para o nível ${this.level}`);
    }
    updateStats();
  },

  addToInventory(item) {
    // Evita duplicatas no inventário
    const jaTem = this.inventory.find(i => i.name === item.name);
    if (!jaTem) {
      this.inventory.push(item);
      log(`🎁 Ganhou item: ${item.name}`);
      updateWeaponSelect();
    }
  },

  equip(itemName) {
    const item = this.inventory.find(i => i.name === itemName);
    if (item) {
      this.equipped.weapon = item;
      log(`🗡️ Equipou ${item.name}`);
      updateStats();
    }
  }
};

const enemies = [
  {
    name: "Slime",
    maxHP: 30,
    expDrop: 50,
    loot: [{ name: "Espada de Slime", type: "weapon", damage: 3 }]
  },
  {
    name: "Goblin",
    maxHP: 50,
    expDrop: 80,
    loot: [{ name: "Adaga do Goblin", type: "weapon", damage: 5 }]
  },
  {
    name: "Esqueleto",
    maxHP: 70,
    expDrop: 120,
    loot: [{ name: "Espada Enferrujada", type: "weapon", damage: 8 }]
  }
];

let currentEnemy = {};

function summonEnemy() {
  const enemyData = enemies[Math.floor(Math.random() * enemies.length)];
  currentEnemy = {
    ...enemyData,
    currentHP: enemyData.maxHP,
    takeDamage(dmg) {
      this.currentHP -= dmg;
      if (this.currentHP <= 0) {
        log(`💥 Derrotou o ${this.name}`);
        hero.gainExp(this.expDrop);
        const item = this.loot[Math.floor(Math.random() * this.loot.length)];
        hero.addToInventory(item);

        enemyData.maxHP += Math.floor(hero.level * 2); // evolução do inimigo
        summonEnemy();
      } else {
        updateEnemyHP();
      }
    }
  };

  log(`👾 Um novo ${currentEnemy.name} apareceu!`);
  updateEnemyHP();
}

function clickAttack() {
  log(`🖱️ Clicou e causou ${hero.clickDamage} de dano!`);
  currentEnemy.takeDamage(hero.clickDamage);
}

function updateStats() {
  document.getElementById("hero-stats").innerHTML = `
    <strong>${hero.name}</strong><br>
    Level: ${hero.level} | Exp: ${hero.exp} / ${hero.expDe}<br>
    Dano por clique: ${hero.clickDamage}
  `;
}

function updateEnemyHP() {
  document.getElementById("enemy-hp").textContent = currentEnemy.currentHP;
  document.getElementById("enemy-name").textContent = currentEnemy.name;
}

function log(texto) {
  const el = document.getElementById("log");
  el.innerHTML = `<div>> ${texto}</div>` + el.innerHTML;
}

function updateWeaponSelect() {
  const select = document.getElementById("weapon-select");
  select.innerHTML = "<option disabled selected>Selecione uma arma</option>";
  hero.inventory.forEach(item => {
    const opt = document.createElement("option");
    opt.value = item.name;
    opt.textContent = `${item.name} (+${item.damage} dmg)`;
    select.appendChild(opt);
  });
}

document.getElementById("weapon-select").addEventListener("change", function () {
  hero.equip(this.value);
});

document.querySelector("button").addEventListener("click", clickAttack);
summonEnemy();
updateStats();
