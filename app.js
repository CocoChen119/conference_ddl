const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const state = { cat: "all", region: "all", status: "all", q: "" };

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

function matches(c) {
  if (!inCat(c, state.cat)) return false;
  if (!inRegion(c, state.region)) return false;
  const st = paperStatus(c);
  if (state.status === "open" && st !== "open") return false;
  if (state.status === "tba" && st !== "tba") return false;
  if (state.status === "closed" && st !== "closed" && st !== "skip") return false;
  if (!state.q) return true;
  const hay = [c.abbr, c.name, c.place, c.when].filter(Boolean).join(" ").toLowerCase();
  return hay.includes(state.q);
}

function sortKey(c) {
  const st = paperStatus(c);
  const rank = st === "open" ? 0 : st === "tba" ? 1 : st === "closed" ? 2 : 3;
  const date = c.deadline || "9999-99-99";
  return `${rank}-${date}-${c.abbr}`;
}

function renderNav() {
  const nav = document.getElementById("cats");
  nav.innerHTML = "";
  for (const cat of META.categories) {
    const n = CONFS.filter((c) => inCat(c, cat.id) && inRegion(c, state.region)).length;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = cat.id === state.cat ? "on" : "";
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
    const n = CONFS.filter((c) => inCat(c, state.cat) && inRegion(c, region.id)).length;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = region.id === state.region ? "on" : "";
    btn.textContent = `${region.label} ${n}`;
    btn.addEventListener("click", () => {
      state.region = region.id;
      render();
    });
    regions.appendChild(btn);
  }

  const seg = document.getElementById("status");
  seg.innerHTML = "";
  for (const item of [
    ["all", "All"],
    ["open", "Open"],
    ["tba", "TBA"],
    ["closed", "Closed"]
  ]) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = item[0] === state.status ? "on" : "";
    btn.textContent = item[1];
    btn.addEventListener("click", () => {
      state.status = item[0];
      render();
    });
    seg.appendChild(btn);
  }
}

function renderRows() {
  const list = CONFS.filter(matches).sort((a, b) => sortKey(a).localeCompare(sortKey(b)));
  const body = document.getElementById("rows");
  body.innerHTML = "";
  document.getElementById("empty").hidden = list.length > 0;
  document.getElementById("count").textContent = `${list.length} conference${list.length === 1 ? "" : "s"}`;

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

document.getElementById("q").addEventListener("input", (event) => {
  state.q = event.target.value.trim().toLowerCase();
  renderRows();
});

render();
