// 1. Create a database of your books
const booksData = {
    "units-dimensions-and-vectors": {
        title: "Units, Dimensions and Vectors",
        author: "Physic Universe Press",
        desc: "SI units, dimensional analysis, scalars, vectors, and measurement basics.",
        cover: "image/textbooks/units-vectors-cover.jpg",
        subject: "Mechanics",
        level: "Secondary School",
        size: "2.1 MB",
        pdfLink: "textbooks/units-vectors.pdf",
    },
    "kinematics-masterclass": {
        title: "Kinematics Masterclass",
        author: "Physic Universe Press",
        desc: "Motion, velocity, acceleration, and graphs.",
        cover: "image/textbooks/kinematics-cover.png",
        subject: "Mechanics",
        level: "BSc Level",
        size: "4.2 MB",
        pdfLink: "textbooks/kinematics.pdf",
    },
    "newtons-laws-of-motion": {
        title: "Newton's Laws of Motion",
        author: "Physic Universe Press",
        desc: "Forces, inertia, friction, and free-body diagrams.",
        cover: "image/textbooks/newtons-laws-cover.png",
        subject: "Mechanics",
        level: "Secondary School",
        size: "3.4 MB",
        pdfLink: "textbooks/newtons-laws.pdf",
    },
    "work-energy-and-power": {
        title: "Work, Energy and Power",
        author: "Physic Universe Press",
        desc: "Kinetic and potential energy, conservation of energy, and efficiency.",
        cover: "image/textbooks/work-energy-power-cover.png",
        subject: "Mechanics",
        level: "Secondary School",
        size: "3.1 MB",
        pdfLink: "textbooks/work-energy-power.pdf",
    },
    "momentum-and-collisions": {
        title: "Momentum and Collisions",
        author: "Physic Universe Press",
        desc: "Impulse, conservation of momentum, and elastic and inelastic collisions.",
        cover: "image/textbooks/momentum-collisions-cover.png",
        subject: "Mechanics",
        level: "Secondary School",
        size: "2.9 MB",
        pdfLink: "textbooks/momentum-collisions.pdf",
    },
    "circular-motion-and-gravitation": {
        title: "Circular Motion and Gravitation",
        author: "Physic Universe Press",
        desc: "Centripetal force, satellite orbits, Kepler's laws, and gravitational fields.",
        cover: "image/textbooks/circular-motion-gravitation-cover.png",
        subject: "Mechanics",
        level: "Secondary School",
        size: "3.8 MB",
        pdfLink: "textbooks/circular-motion-gravitation.pdf",
    },
    "rotational-dynamics": {
        title: "Rotational Dynamics",
        author: "Physic Universe Press",
        desc: "Torque, moment of inertia, angular momentum, and rolling motion.",
        cover: "image/textbooks/rotational-dynamics-cover.png",
        subject: "Mechanics",
        level: "BSc Level",
        size: "4.5 MB",
        pdfLink: "textbooks/rotational-dynamics.pdf",
    },
    "statics-and-equilibrium": {
        title: "Statics and Equilibrium",
        author: "Physic Universe Press",
        desc: "Moments, centre of gravity, and stability of structures.",
        cover: "image/textbooks/statics-equilibrium-cover.png",
        subject: "Mechanics",
        level: "Secondary School",
        size: "2.6 MB",
        pdfLink: "textbooks/statics-equilibrium.pdf",
    },
    "fluid-mechanics": {
        title: "Fluid Mechanics",
        author: "Physic Universe Press",
        desc: "Pressure, buoyancy, viscosity, and Bernoulli's principle.",
        cover: "image/textbooks/fluid-mechanics-cover.png",
        subject: "Mechanics",
        level: "BSc Level",
        size: "4.0 MB",
        pdfLink: "textbooks/fluid-mechanics.pdf",
    },
    "properties-of-matter": {
        title: "Properties of Matter",
        author: "Physic Universe Press",
        desc: "Stress, strain, Hooke's law, surface tension, and material behaviour.",
        cover: "image/textbooks/properties-of-matter-cover.png",
        subject: "Mechanics",
        level: "Secondary School",
        size: "3.2 MB",
        pdfLink: "textbooks/properties-of-matter.pdf",
    },
    "simple-harmonic-motion": {
        title: "Simple Harmonic Motion",
        author: "Physic Universe Press",
        desc: "Oscillations, springs, pendulums, damping, and resonance.",
        cover: "image/textbooks/shm-cover.png",
        subject: "Waves and Oscillations",
        level: "Secondary School",
        size: "2.7 MB",
        pdfLink: "textbooks/simple-harmonic-motion.pdf",
    },
    "lagrangian-and-hamiltonian-mechanics": {
        title: "Lagrangian and Hamiltonian Mechanics",
        author: "Physic Universe Press",
        desc: "Generalised coordinates, variational principles, and advanced classical mechanics.",
        cover: "image/textbooks/lagrangian-hamiltonian-cover.png",
        subject: "Mechanics",
        level: "MSc Level",
        size: "6.3 MB",
        pdfLink: "textbooks/lagrangian-hamiltonian.pdf",
    },
    "thermodynamics-essentials": {
        title: "Thermodynamics Essentials",
        author: "Dr. Praise Toluwase",
        desc: "Heat, temperature, entropy, and laws of thermodynamics.",
        cover: "image/textbooks/thermo-cover.png",
        subject: "Thermodynamics",
        level: "Secondary School",
        size: "2.8 MB",
        pdfLink: "textbooks/thermodynamics.pdf",
    },
    "kinetic-theory-of-gases": {
        title: "Kinetic Theory of Gases",
        author: "Physic Universe Press",
        desc: "Ideal gas laws, molecular speeds, pressure, and gas behaviour.",
        cover: "image/textbooks/kinetic-theory-cover.png",
        subject: "Thermodynamics",
        level: "BSc Level",
        size: "3.5 MB",
        pdfLink: "textbooks/kinetic-theory.pdf",
    },
    "heat-transfer": {
        title: "Heat Transfer",
        author: "Physic Universe Press",
        desc: "Conduction, convection, radiation, and thermal insulation.",
        cover: "image/textbooks/heat-transfer-cover.png",
        subject: "Thermodynamics",
        level: "BSc Level",
        size: "3.9 MB",
        pdfLink: "textbooks/heat-transfer.pdf",
    },
    "statistical-mechanics": {
        title: "Statistical Mechanics",
        author: "Physic Universe Press",
        desc: "Microstates, partition functions, Boltzmann distribution, and quantum statistics.",
        cover: "image/textbooks/statistical-mechanics-cover.png",
        subject: "Thermodynamics",
        level: "MSc Level",
        size: "5.8 MB",
        pdfLink: "textbooks/statistical-mechanics.pdf",
    },
    "wave-motion": {
        title: "Wave Motion",
        author: "Physic Universe Press",
        desc: "Transverse and longitudinal waves, superposition, standing waves, and the Doppler effect.",
        cover: "image/textbooks/wave-motion-cover.png",
        subject: "Waves and Oscillations",
        level: "Secondary School",
        size: "3.3 MB",
        pdfLink: "textbooks/wave-motion.pdf",
    },
    "sound-and-acoustics": {
        title: "Sound and Acoustics",
        author: "Physic Universe Press",
        desc: "Pitch, loudness, resonance, musical instruments, and room acoustics.",
        cover: "image/textbooks/sound-acoustics-cover.png",
        subject: "Waves and Oscillations",
        level: "Secondary School",
        size: "3.0 MB",
        pdfLink: "textbooks/sound-acoustics.pdf",
    },
    "geometrical-optics": {
        title: "Geometrical Optics",
        author: "Physic Universe Press",
        desc: "Reflection, refraction, lenses, mirrors, and optical instruments.",
        cover: "image/textbooks/geometrical-optics-cover.jpg",
        subject: "Optics",
        level: "Secondary School",
        size: "3.6 MB",
        pdfLink: "textbooks/geometrical-optics.pdf",
    },
    "physical-optics": {
        title: "Physical Optics",
        author: "Physic Universe Press",
        desc: "Interference, diffraction, polarisation, and the wave nature of light.",
        cover: "image/textbooks/physical-optics-cover.jpg",
        subject: "Optics",
        level: "BSc Level",
        size: "4.4 MB",
        pdfLink: "textbooks/physical-optics.pdf",
    },
    "lasers-and-photonics": {
        title: "Lasers and Photonics",
        author: "Physic Universe Press",
        desc: "Stimulated emission, laser types, optical fibres, and photonic devices.",
        cover: "image/textbooks/lasers-photonics-cover.jpg",
        subject: "Optics",
        level: "MSc Level",
        size: "5.2 MB",
        pdfLink: "textbooks/lasers-photonics.pdf",
    },
    electrostatics: {
        title: "Electrostatics",
        author: "Physic Universe Press",
        desc: "Charge, Coulomb's law, electric fields, potential, and capacitors.",
        cover: "image/textbooks/electrostatics-cover.jpg",
        subject: "Electromagnetism",
        level: "Secondary School",
        size: "3.7 MB",
        pdfLink: "textbooks/electrostatics.pdf",
    },
    "current-electricity": {
        title: "Current Electricity",
        author: "Physic Universe Press",
        desc: "Ohm's law, resistance, DC circuits, and Kirchhoff's rules.",
        cover: "image/textbooks/current-electricity-cover.jpg",
        subject: "Electromagnetism",
        level: "Secondary School",
        size: "3.4 MB",
        pdfLink: "textbooks/current-electricity.pdf",
    },
    "magnetism-and-electromagnetic-induction": {
        title: "Magnetism and Electromagnetic Induction",
        author: "Physic Universe Press",
        desc: "Magnetic fields, forces on charges, Faraday's law, and Lenz's law.",
        cover: "image/textbooks/magnetism-induction-cover.jpg",
        subject: "Electromagnetism",
        level: "Secondary School",
        size: "4.1 MB",
        pdfLink: "textbooks/magnetism-induction.pdf",
    },
    "alternating-current-circuits": {
        title: "Alternating Current Circuits",
        author: "Physic Universe Press",
        desc: "Reactance, impedance, resonance, transformers, and power in AC systems.",
        cover: "image/textbooks/ac-circuits-cover.jpg",
        subject: "Electromagnetism",
        level: "BSc Level",
        size: "3.8 MB",
        pdfLink: "textbooks/ac-circuits.pdf",
    },
    "maxwells-equations": {
        title: "Maxwell's Equations",
        author: "Physic Universe Press",
        desc: "Gauss's laws, Ampere's law, displacement current, and unified electromagnetism.",
        cover: "image/textbooks/maxwell-equations-cover.jpg",
        subject: "Electromagnetism",
        level: "BSc Level",
        size: "4.9 MB",
        pdfLink: "textbooks/maxwell-equations.pdf",
    },
    "electromagnetic-waves": {
        title: "Electromagnetic Waves",
        author: "Physic Universe Press",
        desc: "The EM spectrum, wave propagation, radiation, and antennas.",
        cover: "image/textbooks/electromagnetic-waves-cover.jpg",
        subject: "Electromagnetism",
        level: "BSc Level",
        size: "4.2 MB",
        pdfLink: "textbooks/electromagnetic-waves.pdf",
    },
    "semiconductor-physics-and-electronics": {
        title: "Semiconductor Physics and Electronics",
        author: "Physic Universe Press",
        desc: "Band theory, diodes, transistors, and amplifier basics.",
        cover: "image/textbooks/semiconductor-electronics-cover.jpg",
        subject: "Electronics",
        level: "BSc Level",
        size: "5.0 MB",
        pdfLink: "textbooks/semiconductor-electronics.pdf",
    },
    "digital-and-analogue-electronics": {
        title: "Digital and Analogue Electronics",
        author: "Physic Universe Press",
        desc: "Logic gates, operational amplifiers, signals, and circuit design.",
        cover: "image/textbooks/digital-analogue-electronics-cover.jpg",
        subject: "Electronics",
        level: "BSc Level",
        size: "4.6 MB",
        pdfLink: "textbooks/digital-analogue-electronics.pdf",
    },
    "modern-physics-fundamentals": {
        title: "Modern Physics Fundamentals",
        author: "Physic Universe Press",
        desc: "Photoelectric effect, X-rays, wave-particle duality, and early quantum ideas.",
        cover: "image/textbooks/modern-physics-cover.jpg",
        subject: "Modern Physics",
        level: "Secondary School",
        size: "3.9 MB",
        pdfLink: "textbooks/modern-physics.pdf",
    },
    "special-relativity": {
        title: "Special Relativity",
        author: "Physic Universe Press",
        desc: "Time dilation, length contraction, Lorentz transformations, and mass-energy equivalence.",
        cover: "image/textbooks/special-relativity-cover.jpg",
        subject: "Modern Physics",
        level: "BSc Level",
        size: "3.7 MB",
        pdfLink: "textbooks/special-relativity.pdf",
    },
    "general-relativity": {
        title: "General Relativity",
        author: "Physic Universe Press",
        desc: "Curved spacetime, gravity, black holes, and gravitational waves.",
        cover: "image/textbooks/general-relativity-cover.jpg",
        subject: "Modern Physics",
        level: "MSc Level",
        size: "7.1 MB",
        pdfLink: "textbooks/general-relativity.pdf",
    },
    "quantum-mechanics-an-introduction": {
        title: "Quantum Mechanics: An Introduction",
        author: "Physic Universe Press",
        desc: "Wavefunctions, the Schrodinger equation, potential wells, and uncertainty.",
        cover: "image/textbooks/quantum-intro-cover.jpg",
        subject: "Quantum Physics",
        level: "BSc Level",
        size: "5.4 MB",
        pdfLink: "textbooks/quantum-mechanics-intro.pdf",
    },
    "advanced-quantum-mechanics": {
        title: "Advanced Quantum Mechanics",
        author: "Physic Universe Press",
        desc: "Operators, spin, perturbation theory, scattering, and identical particles.",
        cover: "image/textbooks/quantum-advanced-cover.jpg",
        subject: "Quantum Physics",
        level: "MSc Level",
        size: "8.2 MB",
        pdfLink: "textbooks/quantum-mechanics-advanced.pdf",
    },
    "atomic-physics": {
        title: "Atomic Physics",
        author: "Physic Universe Press",
        desc: "Bohr model, hydrogen atom, electron configurations, and atomic spectra.",
        cover: "image/textbooks/atomic-physics-cover.jpg",
        subject: "Atomic and Molecular Physics",
        level: "BSc Level",
        size: "4.3 MB",
        pdfLink: "textbooks/atomic-physics.pdf",
    },
    "molecular-physics-and-spectroscopy": {
        title: "Molecular Physics and Spectroscopy",
        author: "Physic Universe Press",
        desc: "Molecular bonding, vibrational and rotational spectra, and Raman scattering.",
        cover: "image/textbooks/molecular-spectroscopy-cover.jpg",
        subject: "Atomic and Molecular Physics",
        level: "BSc Level",
        size: "4.8 MB",
        pdfLink: "textbooks/molecular-spectroscopy.pdf",
    },
    "nuclear-physics": {
        title: "Nuclear Physics",
        author: "Physic Universe Press",
        desc: "Nuclear structure, binding energy, fission, fusion, and reactors.",
        cover: "image/textbooks/nuclear-physics-cover.jpg",
        subject: "Nuclear Physics",
        level: "BSc Level",
        size: "5.1 MB",
        pdfLink: "textbooks/nuclear-physics.pdf",
    },
    "radioactivity-and-radiation": {
        title: "Radioactivity and Radiation",
        author: "Physic Universe Press",
        desc: "Decay laws, half-life, radiation detection, and radiation safety.",
        cover: "image/textbooks/radioactivity-radiation-cover.jpg",
        subject: "Nuclear Physics",
        level: "Secondary School",
        size: "3.2 MB",
        pdfLink: "textbooks/radioactivity-radiation.pdf",
    },
    "particle-physics": {
        title: "Particle Physics",
        author: "Physic Universe Press",
        desc: "Quarks, leptons, fundamental forces, accelerators, and the Standard Model.",
        cover: "image/textbooks/particle-physics-cover.jpg",
        subject: "Particle Physics",
        level: "MSc Level",
        size: "6.5 MB",
        pdfLink: "textbooks/particle-physics.pdf",
    },
    "solid-state-physics": {
        title: "Solid State Physics",
        author: "Physic Universe Press",
        desc: "Crystal structures, lattice vibrations, electron bands, and conductivity.",
        cover: "image/textbooks/solid-state-cover.jpg",
        subject: "Condensed Matter",
        level: "BSc Level",
        size: "5.6 MB",
        pdfLink: "textbooks/solid-state-physics.pdf",
    },
    "superconductivity-and-quantum-materials": {
        title: "Superconductivity and Quantum Materials",
        author: "Physic Universe Press",
        desc: "Zero resistance, magnetic levitation, topological materials, and nanostructures.",
        cover: "image/textbooks/superconductivity-cover.jpg",
        subject: "Condensed Matter",
        level: "MSc Level",
        size: "6.0 MB",
        pdfLink: "textbooks/superconductivity-quantum-materials.pdf",
    },
    astrophysics: {
        title: "Astrophysics",
        author: "Physic Universe Press",
        desc: "Stars, stellar evolution, galaxies, neutron stars, and black holes.",
        cover: "image/textbooks/astrophysics-cover.jpg",
        subject: "Astrophysics",
        level: "BSc Level",
        size: "6.2 MB",
        pdfLink: "textbooks/astrophysics.pdf",
    },
    cosmology: {
        title: "Cosmology",
        author: "Physic Universe Press",
        desc: "The Big Bang, expanding universe, dark matter, and dark energy.",
        cover: "image/textbooks/cosmology-cover.jpg",
        subject: "Astrophysics",
        level: "BSc Level",
        size: "5.5 MB",
        pdfLink: "textbooks/cosmology.pdf",
    },
    "plasma-physics": {
        title: "Plasma Physics",
        author: "Physic Universe Press",
        desc: "Ionised gases, magnetic confinement, fusion energy, and space plasmas.",
        cover: "image/textbooks/plasma-physics-cover.jpg",
        subject: "Plasma Physics",
        level: "MSc Level",
        size: "5.9 MB",
        pdfLink: "textbooks/plasma-physics.pdf",
    },
    "mathematical-methods-for-physics": {
        title: "Mathematical Methods for Physics",
        author: "Physic Universe Press",
        desc: "Calculus, differential equations, linear algebra, and Fourier analysis.",
        cover: "image/textbooks/mathematical-methods-cover.jpg",
        subject: "Mathematical Physics",
        level: "BSc Level",
        size: "6.8 MB",
        pdfLink: "textbooks/mathematical-methods.pdf",
    },
    "computational-physics": {
        title: "Computational Physics",
        author: "Physic Universe Press",
        desc: "Numerical methods, simulations, and Python programming for physics.",
        cover: "image/textbooks/computational-physics-cover.jpg",
        subject: "Computational Physics",
        level: "BSc Level",
        size: "5.3 MB",
        pdfLink: "textbooks/computational-physics.pdf",
    },
    "experimental-physics-and-error-analysis": {
        title: "Experimental Physics and Error Analysis",
        author: "Physic Universe Press",
        desc: "Lab techniques, uncertainty, data analysis, and report writing.",
        cover: "image/textbooks/experimental-physics-cover.jpg",
        subject: "Experimental Physics",
        level: "BSc Level",
        size: "3.6 MB",
        pdfLink: "textbooks/experimental-physics.pdf",
    },
    "biophysics-and-medical-physics": {
        title: "Biophysics and Medical Physics",
        author: "Physic Universe Press",
        desc: "Biomechanics, medical imaging, ultrasound, and radiation therapy.",
        cover: "image/textbooks/biophysics-medical-cover.jpg",
        subject: "Applied Physics",
        level: "BSc Level",
        size: "5.7 MB",
        pdfLink: "textbooks/biophysics-medical-physics.pdf",
    },
    "earth-and-atmospheric-physics": {
        title: "Earth and Atmospheric Physics",
        author: "Physic Universe Press",
        desc: "Seismology, geomagnetism, weather systems, and climate physics.",
        cover: "image/textbooks/earth-atmospheric-cover.jpg",
        subject: "Applied Physics",
        level: "BSc Level",
        size: "4.7 MB",
        pdfLink: "textbooks/earth-atmospheric-physics.pdf",
    },
    "physics-problem-solving-handbook": {
        title: "Physics Problem-Solving Handbook",
        author: "Physic Universe Press",
        desc: "Key formulas, worked examples, and exam strategies across all topics.",
        cover: "image/textbooks/problem-solving-cover.jpg",
        subject: "General Physics",
        level: "Secondary School",
        size: "4.0 MB",
        pdfLink: "textbooks/problem-solving-handbook.pdf",
    },
};

// 2. Read the ID from the URL (e.g., book-detail.html?id=kinematics)
const urlParams = new URLSearchParams(window.location.search);
const bookId = urlParams.get("id");

// 3. Find the book in the database
const book = booksData[bookId];

// 4. Inject the data into the HTML
if (book) {
    document.getElementById("breadcrumb-title").textContent = book.title;
    document.getElementById("detail-title").textContent = book.title;
    document.getElementById("detail-author").textContent = "By " + book.author;
    document.getElementById("detail-desc").textContent = book.desc;
    document.getElementById("detail-cover-img").src = book.cover;

    document.getElementById("meta-subject").textContent = book.subject;
    document.getElementById("meta-level").textContent = book.level;
    document.getElementById("meta-size").textContent = book.size;

    // THIS IS THE MAGIC FOR DOWNLOAD
    const downloadBtn = document.getElementById("download-btn");
    downloadBtn.href = book.pdfLink;
    downloadBtn.setAttribute("download", book.title + ".pdf"); // Sets the download filename
} else {
    // If someone types a random ID in the URL
    document.getElementById("detail-title").textContent = "Book Not Found";
    document.getElementById("detail-desc").textContent = "Sorry, we couldn't find that textbook.";
}

// 5. Generate "You may also like" dynamically
if (book) {
    const relatedContainer = document.getElementById("related-container");

    // Get all book IDs from our database
    const allBookIds = Object.keys(booksData);

    // Filter out the current book so we don't recommend it to itself
    const otherBookIds = allBookIds.filter((id) => id !== bookId);

    // Pick the first 4 books (you could also randomize this)
    const recommendations = otherBookIds.slice(0, 4);

    // Create the HTML for each card
    let htmlContent = "";

    recommendations.forEach((id) => {
        const recBook = booksData[id];

        htmlContent += `
            <a href="book-detail.html?id=${id}" class="book-card">
                <div class="book-cover">
                    <img src="${recBook.cover}" alt="${recBook.title}">
                    <div class="download-badge">
                        <i class="fa-solid fa-download"></i> PDF
                    </div>
                </div>
                <div class="book-info">
                    <h3>${recBook.title}</h3>
                </div>
            </a>
        `;
    });

    // Inject the HTML into the container
    relatedContainer.innerHTML = htmlContent;
}
