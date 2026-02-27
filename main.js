const mobilBekas = [
  {
    nama:"Wuling Cortez S LUX 2022",
    harga:"Rp 160 Juta",
    gambar:"images/cortez ex 2022.jpeg"
  },
  {
    nama:"Wuling Almaz RS HYBRID 2024",
    harga:"Rp 290 Juta",
    gambar:"images/Almaz RS Hybrid.jpeg"
  },
  {
    nama:"Wuling AIR EV STD Range 200KM",
    harga:"Rp 125 Juta",
    gambar:"images/AIR EV PUTIH 200.jpeg"
  }
];

const list = document.getElementById("bekasList");

mobilBekas.forEach(mobil => {
  const card = document.createElement("div");
  card.className = "card fade-in";
  card.innerHTML = `
    <img src="${mobil.gambar}" alt="${mobil.nama}" style="width:100%; border-radius:15px; margin-bottom:15px;">
    <h3>${mobil.nama}</h3>
    <p>${mobil.harga}</p>
    <button class="btn" onclick="hubungi('${mobil.nama}')">Detail</button>
  `;
  list.appendChild(card);
});

function hubungi(unit) {
  alert("Silakan hubungi admin untuk informasi pembelian " + unit);
}

// Scroll animation
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.3 };

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
function toggleSpec(id) {
  const specs = document.querySelectorAll('[id$="spec"]');

  specs.forEach(spec => {
    if (spec.id !== id) {
      spec.style.display = "none";
    }
  });

  const selected = document.getElementById(id);
  selected.style.display =
    selected.style.display === "block" ? "none" : "block";
}