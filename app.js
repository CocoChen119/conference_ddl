const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const state = { cat: "all", region: "all", status: "all", q: "", sort: "smart", dir: "asc" };

const HEADS = [
  ["name", "Conference"],
  ["deadline", "Deadline"],
  ["notify", "Notification"],
  ["place", "Location"],
  [null, "Dates"],
  [null, "Requirements"]
];

function regionOf(c) {
  const place = (c.place || "").toLowerCase();
  if (!place) return "tba";
  if (place === "online") return "online";
  if (place.includes("europe")) return "europe";
  if (/usa|canada|brazil|montr[eé]al/.test(place)) return "america";
  if (/japan|china|hong kong|singapore|korea/.test(place)) return "asia";
  if (/australia|new zealand/.test(place)) return "oceania";
  if (/south africa/.test(place)) return "africa";
  if (/uk|scotland|spain|italy|france|netherlands|sweden|austria|greece|romania|cyprus/.test(place)) return "europe";
  return "tba";
}

function aoeEnd(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  return Date.UTC(y, m - 1, d + 1, 11, 59, 59);
}

function fmt(iso) {
  if (!iso) return "—";
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

function paperStatus(c) {
  if (c.skip) return "skip";
  if (!c.deadline) return "tba";
  return aoeEnd(c.deadline) >= Date.now() ? "open" : "closed";
}

function deadlineText(c) {
  if (c.skip) return "Not held in 2027";
  if (!c.deadline) return "TBA";
  const label = c.deadlineLabel ? ` · ${c.deadlineLabel}` : "";
  const mark = c.tentative ? " · tentative" : "";
  return fmt(c.deadline) + label + mark;
}

function notifyText(c) {
  if (c.notifyText) return c.notifyText;
  if (c.notify) return fmt(c.notify);
  return "—";
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[ch]));
}

function inCat(c, cat) {
  return cat === "all" || c.cats.includes(cat);
}

function inRegion(c, region) {
  return region === "all" || regionOf(c) === region;
}

function matchesQuery(c) {
  if (!state.q) return true;
  const hay = [c.abbr, c.name, c.place, c.when, c.req].filter(Boolean).join(" ").toLowerCase();
  return hay.includes(state.q);
}

function matchesStatus(c, status) {
  if (status === "all") return true;
  const st = paperStatus(c);
  if (status === "open") return st === "open";
  if (status === "tba") return st === "tba";
  return st === "closed" || st === "skip";
}

function matches(c) {
  return inCat(c, state.cat) && inRegion(c, state.region) && matchesQuery(c) && matchesStatus(c, state.status);
}

function sortKey(c) {
  const st = paperStatus(c);
  const rank = st === "open" ? 0 : st === "tba" ? 1 : st === "closed" ? 2 : 3;
  const date = c.deadline || "9999-99-99";
  return `${rank}-${date}-${c.abbr}`;
}

function compare(a, b) {
  if (state.sort === "smart") return sortKey(a).localeCompare(sortKey(b));
  const value = {
    name: (c) => c.abbr.toLowerCase(),
    deadline: (c) => c.deadline || "9999-99-99",
    notify: (c) => c.notify || "9999-99-99",
    place: (c) => (c.place || "\uffff").toLowerCase()
  }[state.sort];
  const dir = state.dir === "desc" ? -1 : 1;
  const av = value(a);
  const bv = value(b);
  if (av < bv) return -dir;
  if (av > bv) return dir;
  return a.abbr.localeCompare(b.abbr);
}

function filtered() {
  return CONFS.filter((c) => inCat(c, state.cat) && inRegion(c, state.region) && matchesQuery(c));
}

function isCustom() {
  return state.cat !== "all" || state.region !== "all" || state.status !== "all" || state.q || state.sort !== "smart";
}

function renderNav() {
  const nav = document.getElementById("cats");
  nav.innerHTML = "";
  for (const cat of META.categories) {
    const n = CONFS.filter((c) => inCat(c, cat.id) && inRegion(c, state.region) && matchesQuery(c)).length;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = cat.id === state.cat ? "on" : "";
    btn.setAttribute("aria-pressed", String(cat.id === state.cat));
    btn.textContent = `${cat.label} ${n}`;
    if (cat.title) btn.title = cat.title;
    btn.addEventListener("click", () => {
      state.cat = cat.id;
      render();
    });
    nav.appendChild(btn);
  }

  const regions = document.getElementById("regions");
  regions.className = "where";
  regions.innerHTML = "";
  const label = document.createElement("span");
  label.className = "where-label";
  label.textContent = "Location";
  regions.appendChild(label);
  for (const region of META.regions) {
    const n = CONFS.filter((c) => inCat(c, state.cat) && inRegion(c, region.id) && matchesQuery(c)).length;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = region.id === state.region ? "on" : "";
    btn.setAttribute("aria-pressed", String(region.id === state.region));
    btn.textContent = `${region.label} ${n}`;
    btn.addEventListener("click", () => {
      state.region = region.id;
      render();
    });
    regions.appendChild(btn);
  }

  const pool = filtered();
  const seg = document.getElementById("status");
  seg.innerHTML = "";
  for (const item of [
    ["all", "All"],
    ["open", "Open"],
    ["tba", "TBA"],
    ["closed", "Closed"]
  ]) {
    const n = pool.filter((c) => matchesStatus(c, item[0])).length;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = item[0] === state.status ? "on" : "";
    btn.setAttribute("aria-pressed", String(item[0] === state.status));
    btn.textContent = `${item[1]} ${n}`;
    btn.addEventListener("click", () => {
      state.status = item[0];
      render();
    });
    seg.appendChild(btn);
  }
}

function renderHeads() {
  const row = document.getElementById("heads");
  row.innerHTML = "";
  for (const [key, label] of HEADS) {
    const th = document.createElement("th");
    if (!key) {
      th.textContent = label;
    } else {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = state.sort === key ? "sort on" : "sort";
      const mark = state.sort === key ? (state.dir === "asc" ? " ↑" : " ↓") : "";
      btn.textContent = label + mark;
      btn.addEventListener("click", () => {
        if (state.sort === key) state.dir = state.dir === "asc" ? "desc" : "asc";
        else {
          state.sort = key;
          state.dir = "asc";
        }
        render();
      });
      th.appendChild(btn);
    }
    row.appendChild(th);
  }
}

function renderRows() {
  const list = CONFS.filter(matches).sort(compare);
  const body = document.getElementById("rows");
  body.innerHTML = "";
  const empty = document.getElementById("empty");
  empty.hidden = list.length > 0;
  empty.textContent = list.length > 0 ? "" : "No conferences match.";
  document.getElementById("count").textContent = `${list.length} conference${list.length === 1 ? "" : "s"}`;
  document.getElementById("reset").hidden = !isCustom();
  renderHeads();

  for (const c of list) {
    const tr = document.createElement("tr");
    const st = paperStatus(c);
    const deadlineClass = st === "open" ? "open" : "muted";
    const abbr = c.url
      ? `<a class="abbr" href="${esc(c.url)}" target="_blank" rel="noopener">${esc(c.abbr)}</a>`
      : `<span class="abbr">${esc(c.abbr)}</span>`;
    tr.innerHTML = `
      <td>
        ${abbr}
        <span class="name">${esc(c.name)}</span>
      </td>
      <td class="${deadlineClass}">${deadlineText(c)}${c.abstract ? `<span class="note">Abstract ${fmt(c.abstract)}</span>` : ""}</td>
      <td>${notifyText(c)}</td>
      <td>${esc(c.place || "—")}</td>
      <td>${esc(c.when || "—")}</td>
      <td class="req">${c.req ? esc(c.req) : "—"}</td>
    `;
    body.appendChild(tr);
  }
}

function render() {
  renderNav();
  renderRows();
}

const search = document.getElementById("q");
search.addEventListener("input", () => {
  state.q = search.value.trim().toLowerCase();
  render();
});
search.addEventListener("keydown", (event) => {
  if (event.key !== "Escape" || !search.value) return;
  search.value = "";
  state.q = "";
  render();
});

document.getElementById("reset").addEventListener("click", () => {
  state.cat = "all";
  state.region = "all";
  state.status = "all";
  state.q = "";
  state.sort = "smart";
  state.dir = "asc";
  search.value = "";
  render();
});

render();
