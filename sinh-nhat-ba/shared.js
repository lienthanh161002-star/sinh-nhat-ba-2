/* ─── DEFAULT CONFIGURATION ────────────────── */
const DEFAULT_CONFIG = {
  name: "Ba",
  age: 52,
  ageSuffix: " tuổi",
  birthdayDate: "15-10-1974",
  heroSubtext:
    "Thế giới hôm nay bỗng rạng rỡ hơn vì có ba. Chúc ba có một sinh nhật thật đáng nhớ! 🌟",
  message: `Mỗi kỷ niệm ba con mình có bên nhau là món quà con luôn trân trọng.
Ba đến đâu cũng mang theo niềm vui, và cuộc sống của cả nhà đẹp hơn vì có ba.

Trong ngày đặc biệt này, con mong ba cảm nhận được thật nhiều yêu thương và niềm vui. Chúc mừng sinh nhật ba — chúc ba đón thêm nhiều điều tốt đẹp phía trước.`,
  messageSig: "— Con thương ba nhiều 🌹",
  musicTitle: "Chuông mừng sinh nhật",
  musicArtist: "Hộp nhạc ngân vang",
  theme: "rose",
  wishes: [
    {
      icon: "🌸",
      text: "Chúc mừng sinh nhật ông xã ❤️ Chúc anh luôn mạnh khỏe, bình an và vui vẻ. Cảm ơn anh đã luôn yêu thương, che chở cho mẹ con em. Mong rằng những năm tháng sau này, gia đình mình vẫn luôn bên nhau, bình dị mà hạnh phúc. Em thương anh nhiều! 💕",
      author: "— Má gửi ba",
      color: "black",
    },
    {
      icon: "🌊",
      text: "Cám ơn Tía đã tới với mẹ con con. Con mong Tía luôn khoẻ, không bệnh không tật, dù trước đây có chuyện gì làm Tía buồn, thì mong là khoảng thơi gian sau này, ngày nào cũng la niềm vui. Mấy con đều lớn hết rồi, Tía đừng áp lực chuyện gì nữa nha. Cứ thong thả chill chill tận hưởng cuoc song nha Tía ❤️",
      author: "- Bé Ý",
      color: "#4169E1",
    },
    {
      icon: "🍀",
      text: "Ba là niềm hạnh phúc lớn lao của gia đình. Con thương ba hơn những lời con có thể nói. Chúc ba có một sinh nhật thật vui!",
      author: "— Bé Vân gửi ba",
      color: "#DC143C",
    },
    {
      icon: "✨",
      text: "Chúc mừng sinh nhật ba yêu quý! Ba mang đến cho gia đình thật nhiều niềm vui và yêu thương. Chúc ngày đặc biệt của ba ngập tiếng cười và những điều ba yêu thích.",
      author: "— Bé Tứ gửi ba ❤️",
      color: "gold",
    },
    {
      icon: "🎯",
      text: "Ông quại sn vui vẻ nhoa",
      author: "— Bé Như gửi ba",
      color: "pink",
    },
    {
      icon: "🎊",
      text: "Chúc ba đón ngày đặc biệt với thật nhiều niềm vui và tiếng cười!",
      author: "— Bé Hải gửi ba",
      color: "#4B0082",
    },
    {
      icon: "🍀",
      text: "Nhân dịp sinh nhật tía, con chúc tía luôn luôn mạnh khỏe, vui vẻ và hạnh phúc. Con rất trân quý những khoảnh khắc hai tía con mình cùng đi đánh bida, lai rai vài ly và những buổi tâm sự thủ thỉ cùng nhau. Tía con mình thật hòa thuận và gắn kết, con rất hạnh phúc khi là con trai út của tía. Chúc mừng sinh nhật tía 🔥🔥🔥",
      author: "— Bé Út gửi ba",
      color: "#4B0082",
    },
  ],
  timeline: [
    {
      year: "2015",
      icon: "🎂",
      title: "Chương đầu tiên bắt đầu",
      desc: "Ngày mọi điều đổi khác — ba đến bên gia đình và chiếm trọn tình yêu của mọi người.",
    },

    {
      year: "2018",
      icon: "🎒",
      title: "Ngày đầu tiên đến trường",
      desc: "Chiếc ba lô nhỏ trên vai, đôi giày nhỏ dưới chân — ba đã sẵn sàng khám phá thế giới.",
    },

    {
      year: "2020",
      icon: "🧸",
      title: "Những ngày thơ ấu êm đềm",
      desc: "Ngày tháng đầy ắp đồ chơi, tiếng cười, chuyện kể trước giờ ngủ và những cái ôm.",
    },

    {
      year: "2022",
      icon: "🌈",
      title: "Mang niềm vui đến mọi người",
      desc: "Tiếng cười của ba làm mọi buổi sum họp gia đình thêm rạng rỡ.",
    },

    {
      year: "2024",
      icon: "💖",
      title: "Trái tim đầy yêu thương",
      desc: "Ba luôn chu đáo, ấm áp và khiến cả nhà tự hào.",
    },

    {
      year: "2026",
      icon: "✨",
      title: "11 tuổi rực rỡ",
      desc: "Hôm nay cả nhà cùng mừng 11 năm đầy niềm vui, yêu thương và những kỷ niệm quý giá. Chúc mừng sinh nhật ba! 🎉",
    },
  ],
  photos: [
    "images/anh1.jpg",
    "images/anh2.jpg",
    "images/anh3.jpg",
    "images/anh4.jpg",
    "images/anh5.jpg",
    "images/anh6.jpg",
    "images/anh7.jpg",
    "images/anh8.jpg",
    "images/anh9.jpg",
  ],
};

// Load saved config from localStorage when available so uploads persist across pages
// Luôn sử dụng cấu hình mặc định trong code
localStorage.removeItem("bday_config");
let activeConfig = DEFAULT_CONFIG;
// Ensure there is a photos array; don't overwrite existing user photos
if (
  !activeConfig.photos ||
  !Array.isArray(activeConfig.photos) ||
  activeConfig.photos.length === 0
) {
  activeConfig.photos = DEFAULT_CONFIG.photos.slice();
}

// Ensure wishes are populated — merge defaults if saved config has empty or missing entries
if (
  !activeConfig.wishes ||
  !Array.isArray(activeConfig.wishes) ||
  activeConfig.wishes.length === 0
) {
  activeConfig.wishes = DEFAULT_CONFIG.wishes.map((w) => Object.assign({}, w));
} else {
  DEFAULT_CONFIG.wishes.forEach((w, i) => {
    if (!activeConfig.wishes[i]) {
      activeConfig.wishes[i] = Object.assign({}, w);
    } else {
      if (
        !activeConfig.wishes[i].text ||
        activeConfig.wishes[i].text.trim() === ""
      ) {
        activeConfig.wishes[i].text = w.text;
      }
      if (!activeConfig.wishes[i].icon) activeConfig.wishes[i].icon = w.icon;
      if (!activeConfig.wishes[i].author)
        activeConfig.wishes[i].author = w.author;
      if (!activeConfig.wishes[i].color) activeConfig.wishes[i].color = w.color;
    }
  });
  // Persist merged changes so the UI reflects them immediately
  try {
    localStorage.setItem("bday_config", JSON.stringify(activeConfig));
  } catch (e) {
    /* ignore storage errors */
  }
}

function saveConfig() {
  localStorage.setItem("bday_config", JSON.stringify(activeConfig));
}

function applyTheme(themeName) {
  document.documentElement.setAttribute("data-theme", themeName || "rose");
}

// Apply theme instantly on load
applyTheme(activeConfig.theme);

/* ─────────────────────────────────────
   SMOOTH CURSOR LERP
   ───────────────────────────────────── */
function initCursor() {
  const cur = document.getElementById("cursor");
  const trail = document.getElementById("cursor-trail");
  if (!cur || !trail) return;

  let mouseX = window.innerWidth / 2,
    mouseY = window.innerHeight / 2;
  let curX = mouseX,
    curY = mouseY;
  let trailX = mouseX,
    trailY = mouseY;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function tickCursor() {
    curX += (mouseX - curX) * 0.25;
    curY += (mouseY - curY) * 0.25;
    trailX += (mouseX - trailX) * 0.08;
    trailY += (mouseY - trailY) * 0.08;

    cur.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%)`;
    trail.style.transform = `translate3d(${trailX}px, ${trailY}px, 0) translate(-50%, -50%)`;

    requestAnimationFrame(tickCursor);
  }
  requestAnimationFrame(tickCursor);

  // Hover effects
  document.addEventListener("mouseover", (e) => {
    if (
      e.target.closest(
        "button, a, .wish-card, .polaroid-card, .cake, .gift-box, .ctrl-btn, .theme-opt, .color-btn, .icon-btn, .customizer-toggle, .digit-input, input, textarea, select",
      )
    ) {
      trail.style.width = "52px";
      trail.style.height = "52px";
      trail.style.borderColor = "var(--primary)";
      trail.style.background = "rgba(255, 79, 123, 0.08)";
      cur.style.transform = "translate(-50%, -50%) scale(0.5)";
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (
      e.target.closest(
        "button, a, .wish-card, .polaroid-card, .cake, .gift-box, .ctrl-btn, .theme-opt, .color-btn, .icon-btn, .customizer-toggle, .digit-input, input, textarea, select",
      )
    ) {
      trail.style.width = "36px";
      trail.style.height = "36px";
      trail.style.borderColor = "var(--secondary)";
      trail.style.background = "none";
      cur.style.transform = "translate(-50%, -50%) scale(1)";
    }
  });

  document.addEventListener("mouseleave", () => {
    cur.style.opacity = 0;
    trail.style.opacity = 0;
  });
  document.addEventListener("mouseenter", () => {
    cur.style.opacity = 1;
    trail.style.opacity = 0.6;
  });
}

/* ─────────────────────────────────────
   BACKGROUND CANVAS PARTICLES
   ───────────────────────────────────── */
function initBackgroundCanvas() {
  const canvas = document.getElementById("bg-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  let fireworks = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  function Particle() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.r = Math.random() * 2.5 + 0.5;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.c = ["#ff4f7b", "#ffd166", "#c77dff", "#ff9b6a"][
      Math.floor(Math.random() * 4)
    ];
    this.a = Math.random() * 0.5 + 0.1;
  }

  for (let i = 0; i < 70; i++) particles.push(new Particle());

  window.createFirework = function (x, y) {
    const count = 60;
    const colors = [
      "#ff4f7b",
      "#ffd166",
      "#ff9b6a",
      "#c77dff",
      "#00ffff",
      "#ff007f",
      "#39ff14",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 1.5;
      fireworks.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        color: color,
        r: Math.random() * 2 + 1,
      });
    }
  };

  (function animBG() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background particles
    particles.forEach((p) => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.c;
      ctx.globalAlpha = p.a;
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    });

    // Active fireworks particles
    fireworks.forEach((f, idx) => {
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fillStyle = f.color;
      ctx.globalAlpha = f.alpha;
      ctx.fill();
      f.x += f.vx;
      f.y += f.vy;
      f.vy += 0.04; // gravity
      f.alpha -= 0.012;

      if (f.alpha <= 0) {
        fireworks.splice(idx, 1);
      }
    });

    requestAnimationFrame(animBG);
  })();
}

/* ─────────────────────────────────────
   CONFETTI BURST EFFECT
   ───────────────────────────────────── */
function launchConfetti() {
  const colors = [
    "#ff4f7b",
    "#ffd166",
    "#c77dff",
    "#ff9b6a",
    "#fff",
    "#7dd3fc",
    "#52b788",
    "#ff007f",
  ];
  for (let i = 0; i < 50; i++) {
    const p = document.createElement("div");
    p.className = "confetti-piece";
    p.style.cssText = `
      left: ${Math.random() * 100}vw;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      --tx: ${(Math.random() - 0.5) * 350}px;
      animation-duration: ${1.2 + Math.random() * 1.6}s;
      animation-delay: ${Math.random() * 0.3}s;
      transform: rotate(${Math.random() * 360}deg);
      width: ${4 + Math.random() * 6}px;
      height: ${7 + Math.random() * 9}px;
    `;
    document.body.appendChild(p);
    p.addEventListener("animationend", () => p.remove());
  }
}

/* ─────────────────────────────────────
   WEB AUDIO API SYNTHESIZER
   ───────────────────────────────────── */
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

function playBlowSound() {
  initAudio();
  if (!audioCtx) return;
  const startTime = audioCtx.currentTime;

  // White noise blast for puff sound
  const bufferSize = audioCtx.sampleRate * 0.12;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = audioCtx.createBufferSource();
  noise.buffer = buffer;

  const filter = audioCtx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.setValueAtTime(450, startTime);
  filter.Q.setValueAtTime(2.5, startTime);

  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0.08, startTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.11);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);

  noise.start(startTime);
  noise.stop(startTime + 0.12);
}

function playSuccessChime() {
  initAudio();
  if (!audioCtx) return;
  const startTime = audioCtx.currentTime;

  // Success Arpeggio: C5 -> E5 -> G5 -> C6
  const tones = [523.25, 659.25, 783.99, 1046.5];
  tones.forEach((freq, idx) => {
    const time = startTime + idx * 0.12;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.08, time + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.3);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start(time);
    osc.stop(time + 0.35);
  });
}

// Initial calls on DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  initCursor();
  initBackgroundCanvas();
});
