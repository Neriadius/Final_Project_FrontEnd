
$(document).ready(function(){

    //level character
    const cureExpInput = document.getElementById('cureExp');
  const maxExpInput = document.getElementById('Exp');
  const lvlDisplay = document.getElementById('lvl');

  const expThresholds = [80, 130, 230, 430, 830, 1630];

  function updateLevel(exp) {
    let level = 0;
    for (let i = 0; i < expThresholds.length; i++) {
      if (exp >= expThresholds[i]) {
        level = i + 1;
      } else {
        break;
      }
    }
    lvlDisplay.textContent = level;
  }

  cureExpInput.addEventListener('input', () => {
    let cureExp = parseInt(cureExpInput.value) || 0;
    let maxExp = parseInt(maxExpInput.value) || 0;


    if (cureExp > maxExp) {
      cureExp = maxExp;
      cureExpInput.value = cureExp;
    }

    updateLevel(maxExp);
  });

  maxExpInput.addEventListener('input', () => {
    let cureExp = parseInt(cureExpInput.value) || 0;
    let maxExp = parseInt(maxExpInput.value) || 0;

    let delta = maxExp - (parseInt(cureExpInput.dataset.lastMax) || 0);

    cureExp += delta;

    if (cureExp > maxExp) cureExp = maxExp;

    cureExpInput.value = cureExp;

    cureExpInput.dataset.lastMax = maxExp;

    updateLevel(maxExp);
  });

  cureExpInput.dataset.lastMax = maxExpInput.value || 0;
});


// Strength attribute logic
$(document).ready(function () {
    const lvlSt = document.getElementById('lvlSt');
    const cureExpInput = document.getElementById('cureExp');

    // List of Strength-related attributes
    const attributes = [
        { input: document.getElementById('athl'), prev: 0 },
        { input: document.getElementById('durab'), prev: 0 },
        { input: document.getElementById('surv'), prev: 0 },
    ];

    // Calculates total experience cost to move from oldLevel → newLevel
    function getExpCost(oldLevel, newLevel) {
        let cost = 0;
        // Always iterate in increasing order (1 → 2 → 3 ...)
        const start = Math.min(oldLevel, newLevel) + 1;
        const end = Math.max(oldLevel, newLevel);
        for (let lvl = start; lvl <= end; lvl++) {
            cost += lvl * 2;
        }
        return cost;
    }

    // Updates Strength total level and current experience value
    function updateAttributes() {
        let totalLvl = 0;
        let cureExp = parseInt(cureExpInput.value) || 0;

        attributes.forEach(attr => {
            const newValue = parseInt(attr.input.value) || 0;

            if (newValue !== attr.prev) {
                const cost = getExpCost(attr.prev, newValue);

                // If increased → subtract cost
                // If decreased → add cost back
                if (newValue > attr.prev) {
                    cureExp -= cost;
                } else {
                    cureExp += cost;
                }

                attr.prev = newValue;
            }

            totalLvl += newValue;
        });

        // Update display values
        cureExpInput.value = cureExp;
        lvlSt.textContent = totalLvl;
    }

    // Attach listener to each attribute input
    attributes.forEach(attr => {
        attr.input.addEventListener('input', updateAttributes);
    });
});


// Dexterity attribute logic
$(document).ready(function () {
    const lvlDx = document.getElementById('lvlDx');
    const cureExpInput = document.getElementById('cureExp');

    // List of Dexterity-related attributes
    const attributesDx = [
        { input: document.getElementById('spe'), prev: 0 },
        { input: document.getElementById('stl'), prev: 0 },
        { input: document.getElementById('dex'), prev: 0 },
    ];

    // Calculates total experience cost to move from oldLevel → newLevel
    function getExpCost(oldLevel, newLevel) {
        let cost = 0;
        const start = Math.min(oldLevel, newLevel) + 1;
        const end = Math.max(oldLevel, newLevel);
        for (let lvl = start; lvl <= end; lvl++) {
            cost += lvl * 2;
        }
        return cost;
    }

    // Updates Dexterity total level and current experience value
    function updateAttributes() {
        let totalLvl = 0;
        let cureExp = parseInt(cureExpInput.value) || 0;

        attributesDx.forEach(attr => {
            const newValue = parseInt(attr.input.value) || 0;

            if (newValue !== attr.prev) {
                const cost = getExpCost(attr.prev, newValue);

                // If increased → subtract cost
                // If decreased → add cost back
                if (newValue > attr.prev) {
                    cureExp -= cost;
                } else {
                    cureExp += cost;
                }

                attr.prev = newValue;
            }

            totalLvl += newValue;
        });

        // Update display values
        cureExpInput.value = cureExp;
        lvlDx.textContent = totalLvl;
    }

    // Attach listener to each attribute input
    attributesDx.forEach(attr => {
        attr.input.addEventListener('input', updateAttributes);
    });
});



// Intelligence attribute logic
$(document).ready(function () {
    const lvlInt = document.getElementById('lvlInt');
    const cureExpInput = document.getElementById('cureExp');

    // List of Intelligence-related attributes
    const attributesInt = [
        { input: document.getElementById('anl'), prev: 0 },
        { input: document.getElementById('sci'), prev: 0 },
        { input: document.getElementById('sbt'), prev: 0 },
    ];

    // Calculates total experience cost to move from oldLevel → newLevel
    function getExpCost(oldLevel, newLevel) {
        let cost = 0;
        const start = Math.min(oldLevel, newLevel) + 1;
        const end = Math.max(oldLevel, newLevel);
        for (let lvl = start; lvl <= end; lvl++) {
            cost += lvl * 2;
        }
        return cost;
    }

    // Updates Intelligence total level and current experience value
    function updateAttributes() {
        let totalLvl = 0;
        let cureExp = parseInt(cureExpInput.value) || 0;

        attributesInt.forEach(attr => {
            const newValue = parseInt(attr.input.value) || 0;

            if (newValue !== attr.prev) {
                const cost = getExpCost(attr.prev, newValue);

                // If increased → subtract cost
                // If decreased → add cost back
                if (newValue > attr.prev) {
                    cureExp -= cost;
                } else {
                    cureExp += cost;
                }

                attr.prev = newValue;
            }

            totalLvl += newValue;
        });

        // Update display values
        cureExpInput.value = cureExp;
        lvlInt.textContent = totalLvl;
    }

    // Attach listener to each attribute input
    attributesInt.forEach(attr => {
        attr.input.addEventListener('input', updateAttributes);
    });
});



// Charisma attribute logic
$(document).ready(function () {
    const lvlChr = document.getElementById('lvlChr');
    const cureExpInput = document.getElementById('cureExp');

    // List of Charisma-related attributes
    const attributesChr = [
        { input: document.getElementById('tlk'), prev: 0 },
        { input: document.getElementById('wil'), prev: 0 },
        { input: document.getElementById('cnc'), prev: 0 },
    ];

    // Calculates total experience cost to move from oldLevel → newLevel
    function getExpCost(oldLevel, newLevel) {
        let cost = 0;
        const start = Math.min(oldLevel, newLevel) + 1;
        const end = Math.max(oldLevel, newLevel);
        for (let lvl = start; lvl <= end; lvl++) {
            cost += lvl * 2;
        }
        return cost;
    }

    // Updates Charisma total level and current experience value
    function updateAttributes() {
        let totalLvl = 0;
        let cureExp = parseInt(cureExpInput.value) || 0;

        attributesChr.forEach(attr => {
            const newValue = parseInt(attr.input.value) || 0;

            if (newValue !== attr.prev) {
                const cost = getExpCost(attr.prev, newValue);

                // If increased → subtract cost
                // If decreased → add cost back
                if (newValue > attr.prev) {
                    cureExp -= cost;
                } else {
                    cureExp += cost;
                }

                attr.prev = newValue;
            }

            totalLvl += newValue;
        });

        // Update display values
        cureExpInput.value = cureExp;
        lvlChr.textContent = totalLvl;
    }

    // Attach listener to each attribute input
    attributesChr.forEach(attr => {
        attr.input.addEventListener('input', updateAttributes);
    });
});


// Instinct attribute logic
$(document).ready(function () {
    const lvlNst = document.getElementById('lvlNst');
    const cureExpInput = document.getElementById('cureExp');

    // List of Instinct-related attributes
    const attributesNst = [
        { input: document.getElementById('rfl'), prev: 0 },
        { input: document.getElementById('aim'), prev: 0 },
        { input: document.getElementById('sns'), prev: 0 },
    ];

    // Calculates total experience cost to move from oldLevel → newLevel
    function getExpCost(oldLevel, newLevel) {
        let cost = 0;
        const start = Math.min(oldLevel, newLevel) + 1;
        const end = Math.max(oldLevel, newLevel);
        for (let lvl = start; lvl <= end; lvl++) {
            cost += lvl * 2;
        }
        return cost;
    }

    // Updates Instinct total level and current experience value
    function updateAttributes() {
        let totalLvl = 0;
        let cureExp = parseInt(cureExpInput.value) || 0;

        attributesNst.forEach(attr => {
            const newValue = parseInt(attr.input.value) || 0;

            if (newValue !== attr.prev) {
                const cost = getExpCost(attr.prev, newValue);

                // If increased → subtract cost
                // If decreased → add cost back
                if (newValue > attr.prev) {
                    cureExp -= cost;
                } else {
                    cureExp += cost;
                }

                attr.prev = newValue;
            }

            totalLvl += newValue;
        });

        // Update display values
        cureExpInput.value = cureExp;
        lvlNst.textContent = totalLvl;
    }

    // Attach listener to each attribute input
    attributesNst.forEach(attr => {
        attr.input.addEventListener('input', updateAttributes);
    });
});


// Magic attribute logic
$(document).ready(function () {
    const lvlMgc = document.getElementById('lvlMgc');
    const cureExpInput = document.getElementById('cureExp');

    // List of Magic-related attributes
    const attributesMgc = [
        { input: document.getElementById('sns1'), prev: 0 },
        { input: document.getElementById('sns2'), prev: 0 },
        { input: document.getElementById('sns3'), prev: 0 },
    ];

    // Calculates total experience cost to move from oldLevel → newLevel
    function getExpCost(oldLevel, newLevel) {
        let cost = 0;
        const start = Math.min(oldLevel, newLevel) + 1;
        const end = Math.max(oldLevel, newLevel);
        for (let lvl = start; lvl <= end; lvl++) {
            cost += lvl * 2;
        }
        return cost;
    }

    // Updates Magic total level and current experience value
    function updateAttributes() {
        let totalLvl = 0;
        let cureExp = parseInt(cureExpInput.value) || 0;

        attributesMgc.forEach(attr => {
            const newValue = parseInt(attr.input.value) || 0;

            if (newValue !== attr.prev) {
                const cost = getExpCost(attr.prev, newValue);

                // If increased → subtract cost
                // If decreased → add cost back
                if (newValue > attr.prev) {
                    cureExp -= cost;
                } else {
                    cureExp += cost;
                }

                attr.prev = newValue;
            }

            totalLvl += newValue;
        });

        // Update display values
        cureExpInput.value = cureExp;
        lvlMgc.textContent = totalLvl;
    }

    // Attach listener to each attribute input
    attributesMgc.forEach(attr => {
        attr.input.addEventListener('input', updateAttributes);
    });
});


//protection
$(document).ready(function(){
    const armourDisplay = document.getElementById('armour');
    const elementDisplay = document.getElementById('elem');

    const fieldsArmour = [
        document.getElementById('head'),
        document.getElementById('body'),
        document.getElementById('leftH'),
        document.getElementById('rightH'),
        document.getElementById('leftL'),
        document.getElementById('rightL'),
        document.getElementById('durab')
    ];

    const fieldsElement = [
        document.getElementById('head'),
        document.getElementById('body'),
        document.getElementById('leftH'),
        document.getElementById('rightH'),
        document.getElementById('leftL'),
        document.getElementById('rightL'),
        document.getElementById('surv')
    ];

    function sumFields(fields) {
        return fields.reduce((total, input) => total + (parseInt(input.value) || 0), 0);
    }

    function updateArmour() {
        armourDisplay.textContent = sumFields(fieldsArmour);
    }

    function updateElement() {
        elementDisplay.textContent = sumFields(fieldsElement);
    }

    const allFields = [...new Set([...fieldsArmour, ...fieldsElement])]
    allFields.forEach(input => {
        input.addEventListener('input', () => {
            updateArmour();
            updateElement();
        });
    });

    updateArmour();
    updateElement();
});

//dodge
$(document).ready(function() {
    const dodgeDisplay = document.getElementById('dodge');

    const rfl = document.getElementById('rfl');
    const spe = document.getElementById('spe');

    function updateDodge() {
        const total = (parseInt(rfl.value) || 0) + (parseInt(spe.value) || 0);
        dodgeDisplay.textContent = total;
    }

    rfl.oninput = spe.oninput = updateDodge;

    updateDodge();
});


$(document).ready(function() {
    const fieldIds = [
        'Exp', 'curExp', 'Race', 'name', 'HP', 'maxHP', 'HOPE', 'Move',
        'athl', 'durab', 'surv', 'spe', 'stl', 'dex',
        'anl', 'sci', 'sbt', 'tlk', 'wil', 'cnc',
        'rfl', 'aim', 'sns',
        'sp1', 'sns1', 'sp2', 'sns2', 'sp3', 'sns3',
        'trauma1', 'head', 'trauma2', 'body', 'trauma3', 'leftH', 
        'trauma4', 'rightH', 'trauma5', 'leftL', 'trauma6', 'rightL'
    ];

    const fields = {};
    fieldIds.forEach(id => {
        fields[id] = document.getElementById(id);
    });

    const output = document.getElementById('output');
    const upload = document.getElementById('upload');

    document.getElementById('download').onclick = () => {
        const data = {};
        fieldIds.forEach(id => {
            data[id] = fields[id] ? fields[id].value : '';
        });

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;

        const charName = fields['name'] ? fields['name'].value.trim() : 'character';
        a.download = charName ? `${charName}.json` : 'character.json';

        a.click();
        URL.revokeObjectURL(url);
    };

    upload.onchange = event => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = e => {
            const data = JSON.parse(e.target.result);

            fieldIds.forEach(id => {
                if (fields[id]) fields[id].value = data[id] || '';
            });

            output.textContent = JSON.stringify(data, null, 2);
        };
        reader.readAsText(file);
    };
});
