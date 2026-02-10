const config = {
    defaults: {
        herName: "my cute pilla",
        meName: "me",
        subtitle: "I never felt like how u made me to think all abt u. i dont know what u have in mind but still as i always say it is follish life my women sometime try to look into it with foolishness to live than caluculate we wont live a 100 yrs still a few with memories is more than a 100 i know ...",
    },
    floatyEmojis: ["💖", "💘", "💗", "💓", "💕", "✨", "🥰", "😍", "🧸", "🌸"],
    noMessages: [
        "Are you sure?",
        "Really sure??",
        "Are you positive?",
        "Pookie please...",
        "Just think about it!",
        "If you say no, I will be really sad...",
        "I will be very sad...",
        "I will be very very very sad...",
        "Ok fine, I will stop asking...",
        "Just kidding, say yes please! ❤️"
    ],
    reasons: [
        { emoji: "🥺", text: "Your smile", sub: "It makes my whole day softer." },
        { emoji: "✨", text: "Your vibe", sub: "You turn boring moments magical." },
        { emoji: "🧠", text: "Your mind", sub: "Smart + sweet is unfairly cute." },
        { emoji: "🧸", text: "Your warmth", sub: "You feel like home." },
        { emoji: "🌸", text: "Your kindness", sub: "The world is better with you." },
        { emoji: "🎀", text: "Your little habits", sub: "The ones you think I don’t notice." },
        { emoji: "😍", text: "Your eyes", sub: "I get lost. Every. Time." },
        { emoji: "💬", text: "Our chats", sub: "Even ‘good night’ feels special." },
        { emoji: "🤍", text: "You", sub: "Just… you." },
    ],
    carousel: [
        { big: "💌", headline: "A letter", desc: "If I could, I’d write you 1000 love notes.", tag: "cute" },
        { big: "🍫", headline: "A treat", desc: "Because you deserve sweetness (and I do too).", tag: "sweet" },
        { big: "🌙", headline: "A promise", desc: "I’ll choose you in the little moments.", tag: "always" },
        { big: "🎶", headline: "A song", desc: "Everything reminds me of you (in the best way).", tag: "vibes" },
        { big: "🌷", headline: "A bouquet", desc: "Flowers fade, but my feelings don’t.", tag: "romantic" },
        { big: "🧸", headline: "A hug", desc: "If this were real life, I’d squeeze you rn.", tag: "warm" },
    ],
    poems: [
        { title: "The Sword That Learned to Love", lines: "Once, a god shaped me from fire and faith,\nplaced hope along my edge\nand named me *savior of the world*.\nI wandered centuries in borrowed hands,\ndrinking wars, spilling blood\nonly to protect the ones who dared to wield me.\n\nI was made to end storms,\nnot to feel them.\n\nThen I saw her.\n\nSomewhere between battles and silence,\nI fell in love with a woman\nwho smiled like peace\nand held me like I was alive.\nShe hugged me with life,\nand I answered with love\nI was never forged to carry.\n\nI saved her again and again,\nred with her enemies,\nguarding her breath like it was my own.\nYet when I looked at her,\nI wished the world could bleed instead of her.\nLet it burn, let it fall—\njust let her live.\n\nI took lives with a guard at my side,\nbut there was no guard for me.\nStill, for her,\nI leapt toward every blade meant to reach her.\nIn saving her,\nI forgot to save myself.\n\nShe held my purpose,\ntrusted me with her life.\nI gave her all the love I had,\nhoping it would be enough\nto become her forever.\n\nBut love does not always choose a sword.\n\nShe reached for words,\nfor crowns,\nfor a presence softer than my steel.\nWhile she held his hand,\nI knelt—\nsilent, loyal, bleeding.\nAll I ever received were cold orders,\neven as my blood stained her skin.\n\nAt the end, I fell.\n\nI looked up at eyes of love\nI never got,\nand in that final moment,\nI thought I would never wake again.\n\nThen—\na poet.\n\nHe stood there when I broke.\nHe saw me fall.\nHe knew the eyes of love\nbecause he had seen them before.\nHe lifted me,\nrushed me back to breath,\nproved that even weapons\ncan be seen as more than tools.\n\nI woke to another day.\nSlowly, shine on crown dimmed.\nThe love I chased was long gone,\nbut gratitude remained—\netched deeper than any scar.\n\nI once asked God what this poor love was.\nGod answered quietly,\n“I, too, have lost myself in love.”\n\nSo I prayed again, not to possess her,\nbut to meet her in another life,\nwhere I could love her closer,\nsofter,\nwithout steel between us.\n\nI was never meant to love.\nYet here I am,\ndying for it,\nliving for it,\nhuman because of it.\n\nI was a sword.\nNow I am a story.\n\nAnd in the end—\nI choose love." },
    ]
};

let messageIndex = 0;

function getParams() {
    const params = new URLSearchParams(window.location.search);
    const her = (params.get("her") || params.get("herName") || "").trim();
    const me = (params.get("me") || params.get("meName") || "").trim();
    const msg = (params.get("msg") || params.get("message") || "").trim();
    return {
        herName: her || config.defaults.herName,
        meName: me || config.defaults.meName,
        subtitle: msg || config.defaults.subtitle,
        raw: params
    };
}

function setText(id, value) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = value;
}

function buildSparkles() {
    const wrap = document.getElementById("sparkles");
    if (!wrap) return;
    const count = 28;
    wrap.innerHTML = "";
    for (let i = 0; i < count; i++) {
        const s = document.createElement("span");
        s.className = "sparkle";
        s.style.left = `${Math.random() * 100}%`;
        s.style.top = `${Math.random() * 100}%`;
        s.style.animationDelay = `${Math.random() * 2.8}s`;
        s.style.animationDuration = `${2.0 + Math.random() * 2.4}s`;
        wrap.appendChild(s);
    }
}

function buildFloaties() {
    const wrap = document.getElementById("floaties");
    if (!wrap) return;
    const count = 18;
    wrap.innerHTML = "";
    for (let i = 0; i < count; i++) {
        const f = document.createElement("span");
        f.className = "floaty";
        f.textContent = config.floatyEmojis[Math.floor(Math.random() * config.floatyEmojis.length)];
        f.style.left = `${Math.random() * 100}%`;
        f.style.bottom = `${-10 - Math.random() * 30}px`;
        f.style.fontSize = `${14 + Math.random() * 18}px`;
        f.style.animationDuration = `${10 + Math.random() * 10}s`;
        f.style.animationDelay = `${Math.random() * 6}s`;
        wrap.appendChild(f);
    }
}

function shuffle(array) {
    const a = array.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function buildReasons(herName) {
    const wrap = document.getElementById("reasonCards");
    if (!wrap) return;
    const picks = shuffle(config.reasons).slice(0, 6);
    wrap.innerHTML = "";
    for (const r of picks) {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "reason";
        card.innerHTML = `
            <div class="emoji">${r.emoji}</div>
            <div class="text">${r.text}</div>
            <div class="sub">${r.sub}</div>
        `;
        card.addEventListener("click", () => {
            const next = shuffle(config.reasons)[0];
            card.querySelector(".emoji").textContent = next.emoji;
            card.querySelector(".text").textContent = next.text;
            card.querySelector(".sub").textContent = next.sub;
            popAt(card.getBoundingClientRect().left + card.offsetWidth / 2, card.getBoundingClientRect().top + 20);
        });
        wrap.appendChild(card);
    }

    const hint = document.getElementById("reasonsHint");
    if (hint) hint.textContent = `Tap a card, ${herName}. It changes every time.`;
}

function buildPoems(herName) {
    const wrap = document.getElementById("poems");
    if (!wrap) return;
    const picks = shuffle(config.poems).slice(0, 4);
    wrap.innerHTML = "";
    for (const r of picks) {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "poem";
        card.innerHTML = `
            <div class="title">${r.title}</div>
            <div class="lines">${r.lines}</div>
        `;
        card.addEventListener("click", () => {
            const next = shuffle(config.poems)[0];
            card.querySelector(".title").textContent = next.title;
            card.querySelector(".lines").textContent = next.lines;
            popAt(card.getBoundingClientRect().left + card.offsetWidth / 2, card.getBoundingClientRect().top + 20);
        });
        wrap.appendChild(card);
    }

    const hint = document.getElementById("poetryHint");
    if (hint) hint.textContent = `Tap a poem, ${herName}. It changes every time.`;
}

function popAt(x, y) {
    const wrap = document.getElementById("floaties");
    if (!wrap) return;
    for (let i = 0; i < 6; i++) {
        const p = document.createElement("span");
        p.className = "floaty";
        p.textContent = config.floatyEmojis[Math.floor(Math.random() * config.floatyEmojis.length)];
        p.style.left = `${x}px`;
        p.style.top = `${y}px`;
        p.style.position = "fixed";
        p.style.animationDuration = `${3 + Math.random() * 2}s`;
        p.style.animationDelay = "0s";
        p.style.opacity = "1";
        wrap.appendChild(p);
        setTimeout(() => p.remove(), 5200);
    }
}

function buildCarousel() {
    const carousel = document.getElementById("carousel");
    if (!carousel) return null;
    carousel.innerHTML = "";
    const n = config.carousel.length;
    for (let i = 0; i < n; i++) {
        const item = config.carousel[i];
        const panel = document.createElement("div");
        panel.className = "panel";
        panel.style.setProperty("--ry", `${(360 / n) * i}deg`);
        panel.innerHTML = `
            <div>
                <div class="big">${item.big}</div>
                <div class="headline">${item.headline}</div>
                <div class="desc">${item.desc}</div>
            </div>
            <div class="tag">${item.tag}</div>
        `;
        carousel.appendChild(panel);
    }
    return { carousel, n };
}

function setupCarouselControls(state) {
    if (!state) return;
    const scene = document.getElementById("scene");
    const prev = document.getElementById("prevCard");
    const next = document.getElementById("nextCard");
    if (!scene || !prev || !next) return;

    let index = 0;
    let angle = 0;
    let dragStartX = 0;
    let dragging = false;
    let hoverAngle = 0;

    const apply = () => {
        const combined = angle + hoverAngle;
        state.carousel.style.transform = `translateZ(-40px) rotateY(${combined}deg)`;
    };

    const go = (dir) => {
        index = (index + dir + state.n) % state.n;
        angle = -(360 / state.n) * index;
        apply();
    };

    prev.addEventListener("click", () => go(-1));
    next.addEventListener("click", () => go(1));

    scene.addEventListener("pointerdown", (e) => {
        dragging = true;
        dragStartX = e.clientX;
        scene.setPointerCapture(e.pointerId);
    });
    scene.addEventListener("pointerup", (e) => {
        dragging = false;
        scene.releasePointerCapture(e.pointerId);
    });
    scene.addEventListener("pointermove", (e) => {
        const rect = scene.getBoundingClientRect();
        const rel = (e.clientX - rect.left) / rect.width;
        hoverAngle = (rel - 0.5) * 10;
        if (dragging) {
            const dx = e.clientX - dragStartX;
            const step = Math.round(dx / 60);
            if (Math.abs(step) >= 1) {
                dragStartX = e.clientX;
                go(step > 0 ? -1 : 1);
            }
        }
        apply();
    });

    apply();
}

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    if (!noButton || !yesButton) return;
    noButton.textContent = config.noMessages[messageIndex];
    messageIndex = (messageIndex + 1) % config.noMessages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    const nextSize = Math.min(currentSize * 1.25, 44);
    yesButton.style.fontSize = `${nextSize}px`;
    popAt(noButton.getBoundingClientRect().left + noButton.offsetWidth / 2, noButton.getBoundingClientRect().top);
}

function handleYesClick() {
    const p = getParams();
    const q = new URLSearchParams();
    q.set("her", p.herName);
    q.set("me", p.meName);
    if (p.subtitle && p.subtitle !== config.defaults.subtitle) q.set("msg", p.subtitle);
    window.location.href = `yes_page.html?${q.toString()}`;
}

function initIndexPage() {
    const p = getParams();
    setText("herName", p.herName);
    setText("herName2", p.herName);
    setText("herName3", p.herName);
    setText("meName", p.meName);
    setText("subtitle", p.subtitle);

    buildSparkles();
    buildFloaties();
    buildReasons(p.herName);
    buildPoems(p.herName);
    const state = buildCarousel();
    setupCarouselControls(state);
}

function initYesPage() {
    const p = getParams();
    const her = document.getElementById("yesHer");
    const her2 = document.getElementById("yesHer2");
    const me = document.getElementById("yesMe");
    if (her) her.textContent = p.herName;
    if (her2) her2.textContent = p.herName;
    if (me) me.textContent = p.meName;

    buildSparkles();
    buildFloaties();
    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = 80 + Math.random() * 220;
        popAt(x, y);
    }, 1200);
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("reasonCards") || document.getElementById("carousel")) {
        initIndexPage();
        return;
    }
    if (document.getElementById("yesHer")) {
        initYesPage();
    }
});