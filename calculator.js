// Unicode Superscripts
function formatScientific(num) {
    const [mantissa, exponent] = num.toExponential(2).split("e");

    const superscripts = {
        0: "⁰",
        1: "¹",
        2: "²",
        3: "³",
        4: "⁴",
        5: "⁵",
        6: "⁶",
        7: "⁷",
        8: "⁸",
        9: "⁹",
        "-": "⁻",
        "+": "",
    };

    let superExp = "";
    for (let char of exponent) {
        superExp += superscripts[char] || char;
    }

    return mantissa + " × <span class='base-ten'>10</span>" + superExp;
}
// Click on each cards
const allCards = document.querySelectorAll(".cal-card");
const force = document.getElementById("card-force");

force.classList.add("active");

allCards.forEach((card) => {
    card.addEventListener("click", () => {
        allCards.forEach((c) => c.classList.remove("active")); // clear all
        card.classList.add("active"); // activate this one

        allForms.forEach((f) => f.classList.remove("active"));
        const formId = card.id.replace("card-", "form-");
        const targetForm = document.getElementById(formId);
        if (targetForm) targetForm.classList.add("active");
    });
});

// Calculator Logic
// Grab the Force Elements
const massInput = document.getElementById("mass");
const accelInput = document.getElementById("acceleration");
const calculateBtn = document.getElementById("calculateBtn");
const resultOutput = document.getElementById("forceResult");
const massUnitInput = document.getElementById("mass-dropdown-mass");
const accelUnitInput = document.getElementById("mass-dropdown-acceleration");
const allForms = document.querySelectorAll(".cal-input-body");

//  Listen for the Click and read valuses
calculateBtn.addEventListener("click", function () {
    const mass = parseFloat(massInput.value);
    const accel = parseFloat(accelInput.value);
    const massUnit = massUnitInput.value;
    const accelUnit = accelUnitInput.value;

    // Convert other Units to SI units
    let massInKg = mass; // default — assume kg
    if (massUnit === "g") {
        massInKg = mass / 1000;
    } else if (massUnit === "mg") {
        massInKg = mass / 1000000;
    }
    let accelInMS2 = accel; // default — assume m/s²
    if (accelUnit === "cm/s²") {
        accelInMS2 = accel / 100;
    } else if (accelUnit === "km/h²") {
        accelInMS2 = accel / 12960;
    }

    const force = massInKg * accelInMS2;

    if (isNaN(force)) {
        resultOutput.textContent = "⚠️ Enter valid numbers";
        resultOutput.style.fontSize = "1rem";
        resultOutput.style.fontWeight = "700";
        resultOutput.style.color = "#f23939";
    } else {
        resultOutput.textContent = force + " N";
        resultOutput.style.fontSize = "";
        resultOutput.style.fontWeight = "";
        resultOutput.style.color = "";
    }
});

// E = mc2 calculation logic
const SPEED_OF_LIGHT = 299792458; // m/s
const emcMassIput = document.getElementById("emcMass");
const emcSpeedInput = document.getElementById("speed-of-light");
const emcBtn = document.getElementById("emcBtn");
const emcResultOutput = document.getElementById("emcResult");

//  Listen for the Click and read valuses
emcBtn.addEventListener("click", function () {
    const mass = parseFloat(emcMassIput.value);
    const c = parseFloat(emcSpeedInput.value);

    if (c > 1) {
        emcResultOutput.textContent = "⚠️ Cannot exceed speed of light (c)";
        emcResultOutput.style.fontSize = "0.9rem";
        emcResultOutput.style.fontWeight = "700";
        emcResultOutput.style.color = "#f23939";
        return "nothing travels faster than light"; // ← stops the function here, skips the calculation
    }

    const cInMs = c * SPEED_OF_LIGHT;
    const energy = mass * Math.pow(cInMs, 2);

    if (isNaN(energy)) {
        emcResultOutput.textContent = "⚠️ Enter valid numbers";
        emcResultOutput.style.fontSize = "1rem";
        emcResultOutput.style.fontWeight = "700";
        emcResultOutput.style.color = "#f23939";
    } else {
        emcResultOutput.innerHTML = formatScientific(energy) + " J";
        emcResultOutput.style.fontSize = "";
        emcResultOutput.style.fontWeight = "";
        emcResultOutput.style.color = "";
    }
});

// V = u + at Kinematic calculation logic
const initialVelocityInput = document.getElementById("initial-velocity");
const constAccelInput = document.getElementById("velocity-accel");
const velocityTime = document.getElementById("velocity-time");
const velocityBtn = document.getElementById("velocityBtn");
const velocityResultOutput = document.getElementById("velocityResult");

//  Listen for the Click and read valuses
velocityBtn.addEventListener("click", function () {
    const initialVelocity = parseFloat(initialVelocityInput.value);
    const constAccel = parseFloat(constAccelInput.value);
    const time = parseFloat(velocityTime.value);

    const finalVelocity = initialVelocity + constAccel * time;

    if (isNaN(finalVelocity)) {
        velocityResultOutput.textContent = "⚠️ Enter valid numbers";
        velocityResultOutput.style.fontSize = "1rem";
        velocityResultOutput.style.fontWeight = "700";
        velocityResultOutput.style.color = "#f23939";
    } else {
        velocityResultOutput.textContent = finalVelocity + " m/s";
        velocityResultOutput.style.fontSize = "";
        velocityResultOutput.style.fontWeight = "";
        velocityResultOutput.style.color = "";
    }
});

// v = fλ Wave Speed calculation logic
const waveEquationFreqInput = document.getElementById("waveFrequency");
const waveEquationWavelengthInput = document.getElementById("wavelength");
const waveEquationBtn = document.getElementById("waveBtn");
const waveEquationResultOutput = document.getElementById("waveResult");

//  Listen for the Click and read valuses
waveEquationBtn.addEventListener("click", function () {
    const frequency = parseFloat(waveEquationFreqInput.value);
    const lambda = parseFloat(waveEquationWavelengthInput.value);

    const waveVelocity = frequency * lambda;

    if (isNaN(waveVelocity)) {
        waveEquationResultOutput.textContent = "⚠️ Enter valid numbers";
        waveEquationResultOutput.style.fontSize = "1rem";
        waveEquationResultOutput.style.fontWeight = "700";
        waveEquationResultOutput.style.color = "#f23939";
    } else {
        waveEquationResultOutput.textContent = waveVelocity + " m/s";
        waveEquationResultOutput.style.fontSize = "";
        waveEquationResultOutput.style.fontWeight = "";
        waveEquationResultOutput.style.color = "";
    }
});

// KE = 1/2 mv*v Kinetic Energy Calculation Logic
const KE_HALF = 0.5;
const KEMassInput = document.getElementById("KEMass");
const KEVelocityInput = document.getElementById("KE-Velocity");
const KEBtn = document.getElementById("KEBtn");
const KEResultOutput = document.getElementById("KEResult");

//  Listen for the Click and read valuses
KEBtn.addEventListener("click", function () {
    KEVelocity = parseFloat(KEVelocityInput.value);
    KEMass = parseFloat(KEMassInput.value);

    const kineticEnergy = KE_HALF * KEMass * Math.pow(KEVelocity, 2);

    if (isNaN(kineticEnergy)) {
        KEResultOutput.textContent = "⚠️ Enter valid numbers";
        KEResultOutput.style.fontSize = "1rem";
        KEResultOutput.style.fontWeight = "700";
        KEResultOutput.style.color = "#f23939";
    } else {
        KEResultOutput.textContent = kineticEnergy + " J";
        KEResultOutput.style.fontSize = "";
        KEResultOutput.style.fontWeight = "";
        KEResultOutput.style.color = "";
    }
});

//  V = IR Ohm's Law Calculation Logic
const ohmCurrentIput = document.getElementById("ohm'sCurrent");
const ohmResistanceInput = document.getElementById("ohm's-Resistance");
const ohmBtn = document.getElementById("ohm'sBtn");
const ohmResultOutput = document.getElementById("ohm'sResult");

//  Listen for the Click and read valuses
ohmBtn.addEventListener("click", function () {
    const ohmCurrent = parseFloat(ohmCurrentIput.value);
    const ohmResistance = parseFloat(ohmResistanceInput.value);

    const ohmVoltage = ohmCurrent * ohmResistance;

    if (isNaN(ohmVoltage)) {
        ohmResultOutput.textContent = "⚠️ Enter valid numbers";
        ohmResultOutput.style.fontSize = "1rem";
        ohmResultOutput.style.fontWeight = "700";
        ohmResultOutput.style.color = "#f23939";
    } else {
        ohmResultOutput.textContent = ohmVoltage + " volts";
        ohmResultOutput.style.fontSize = "";
        ohmResultOutput.style.fontWeight = "";
        ohmResultOutput.style.color = "";
    }
});

// F = G(m1m2)/r Gravitational Force Calculation Logic
const GRAVITATIONAL_CONSTANT = 2;
const GLmass1Input = document.getElementById("GL-mass1");
const GLmass2Input = document.getElementById("GL-mass2");
const GLdistanceInput = document.getElementById("GL-distance");
const GLBtn = document.getElementById("GLBtn");
const GLResultOutput = document.getElementById("GLResult");

//  Listen for the Click and read valuses
GLBtn.addEventListener("click", function () {
    const mass1 = parseFloat(GLmass1Input.value);
    const mass2 = parseFloat(GLmass2Input.value);
    const distanceInput = parseFloat(GLdistanceInput.value);

    const GLForce = (GRAVITATIONAL_CONSTANT * mass1 * mass2) / Math.pow(distanceInput, 2);

    if (isNaN(GLForce)) {
        GLResultOutput.textContent = "⚠️ Enter valid numbers";
        GLResultOutput.style.fontSize = "1rem";
        GLResultOutput.style.fontWeight = "700";
        GLResultOutput.style.color = "#f23939";
    } else {
        GLResultOutput.textContent = GLForce + " N";
        GLResultOutput.style.fontSize = "";
        GLResultOutput.style.fontWeight = "";
        GLResultOutput.style.color = "";
    }
});

// Q = mc/T Heat Transfer Calculation Logic
const HTmassInput = document.getElementById("HT-mass");
const HTsecInput = document.getElementById("HT-specific-heat-capacity");
const HTtempInput = document.getElementById("HT-temp-different");
const HTBtn = document.getElementById("HTBtn");
const HTResultOutput = document.getElementById("HTResult");

HTBtn.addEventListener("click", function () {
    const HTmass = parseFloat(HTmassInput.value);
    const HTsec = parseFloat(HTsecInput.value);
    const HTtemp = parseFloat(HTtempInput.value);

    const HeatTransfer = HTmass * HTsec * HTtemp;

    if (isNaN(HeatTransfer)) {
        HTResultOutput.textContent = "⚠️ Enter valid numbers";
        HTResultOutput.style.fontSize = "1rem";
        HTResultOutput.style.fontWeight = "700";
        HTResultOutput.style.color = "#f23939";
    } else {
        HTResultOutput.textContent = HeatTransfer + " J";
        HTResultOutput.style.fontSize = "";
        HTResultOutput.style.fontWeight = "";
        HTResultOutput.style.color = "";
    }
});
