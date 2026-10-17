/* LM6: International Trade */
(() => {
const overview = `
<h2>Why countries trade</h2>
<div class="callout">
  Countries gain from trade by <strong>specialising</strong> in what they produce at the lowest <strong>opportunity cost</strong> and exchanging it for other goods. This is the principle of <strong>comparative advantage</strong>. Total output and consumption can rise for <em>both</em> trading partners.
</div>
<div class="callout cfa"><strong>CFA exam focus.</strong> Describe the benefits and costs of international trade; compare types of trade restrictions (tariffs, quotas, export subsidies) and their economic implications; and explain the motivations for and advantages of trading blocs, common markets and economic unions.</div>

<h3>Absolute vs comparative advantage</h3>
<div class="grid">
  <div class="card"><h4>Absolute advantage</h4><p>A country can produce a good using <strong>fewer resources</strong> (e.g. labour hours) than another country.</p></div>
  <div class="card"><h4>Comparative advantage</h4><p>A country has a lower <strong>opportunity cost</strong> of producing a good: it gives up less of other goods to make it. Trade is beneficial even if one country has an absolute advantage in everything.</p></div>
</div>
<div class="card table-wrap">
  <p style="margin-top:0"><strong>Ricardo's classic example</strong> (labour hours to make one unit):</p>
  <table>
    <thead><tr><th>Country</th><th>Wine</th><th>Cloth</th><th>Opportunity cost of 1 wine</th></tr></thead>
    <tbody>
      <tr><td>Portugal</td><td>80 hrs</td><td>90 hrs</td><td>0.89 cloth</td></tr>
      <tr><td>England</td><td>120 hrs</td><td>100 hrs</td><td>1.20 cloth</td></tr>
    </tbody>
  </table>
  <p class="muted" style="margin-bottom:0">Portugal has an absolute advantage in both goods, but a <strong>comparative</strong> advantage only in wine (0.89 &lt; 1.20). England's comparative advantage is cloth. Both gain if Portugal specialises in wine and England in cloth.</p>
</div>

<h3>Two models of trade</h3>
<div class="grid">
  <div class="card"><h4>Ricardian model</h4><p>Comparative advantage comes from differences in <strong>technology / labour productivity</strong>.</p></div>
  <div class="card"><h4>Heckscher–Ohlin model</h4><p>Comparative advantage comes from differences in <strong>factor endowments</strong>. A capital-abundant country exports capital-intensive goods; a labour-abundant country exports labour-intensive goods. Trade tends to <strong>redistribute income</strong> toward the abundant factor.</p></div>
</div>

<h3>Benefits and costs of trade</h3>
<div class="grid">
  <div class="card"><span class="tag ext">Benefits</span><ul style="margin:0;padding-left:18px">
    <li>Higher output through specialisation</li>
    <li>Economies of scale from serving larger markets</li>
    <li>Greater variety and lower prices for consumers</li>
    <li>More competition and efficiency; knowledge transfer</li></ul></div>
  <div class="card"><span class="tag dis">Costs</span><ul style="margin:0;padding-left:18px">
    <li>Job losses and adjustment costs in import-competing industries</li>
    <li>Greater income inequality within countries</li>
    <li>Dependence on foreign suppliers</li></ul></div>
</div>
<p class="muted"><strong>GDP vs GNP:</strong> GDP measures output produced <em>within</em> a country's borders. GNP measures output produced by a country's <em>citizens and firms</em>, wherever they are located.</p>`;

const concepts = `
<h2>Key concepts</h2>

<h3>Types of trade restrictions</h3>
<div class="grid">
  <div class="card"><span class="tag dis">Restriction</span><h4>Tariff</h4><p>A <strong>tax on imports</strong>. It raises the domestic price, increases domestic production, reduces consumption and imports, and generates <strong>government revenue</strong>.</p></div>
  <div class="card"><span class="tag dis">Restriction</span><h4>Import quota</h4><p>A <strong>limit on the quantity</strong> imported. The price effects are similar to a tariff, but the gain (<strong>quota rent</strong>) goes to whoever holds the import licences, possibly foreign exporters, unless licences are auctioned.</p></div>
  <div class="card"><span class="tag dis">Restriction</span><h4>Voluntary export restraint (VER)</h4><p>The <strong>exporting</strong> country agrees to limit its exports, usually under pressure. It works like a quota, but the rents go to <strong>foreign producers</strong>, which is the worst outcome for the importing country.</p></div>
  <div class="card"><span class="tag dis">Restriction</span><h4>Export subsidy</h4><p>A government payment to exporters. It raises the domestic price of the exported good (producers prefer to export), helps producers, and costs <strong>taxpayers and consumers</strong>. It invites countervailing duties.</p></div>
  <div class="card"><span class="tag dis">Restriction</span><h4>Other measures</h4><p>Domestic-content requirements, product standards, and capital restrictions on foreign investment.</p></div>
</div>

<h3>Welfare effects of a tariff (small country)</h3>
<p>A small country cannot affect world prices. A tariff of <em>t</em> raises the domestic price from P<sub>W</sub> to P<sub>W</sub> + t:</p>
<div class="card table-wrap">
  <table class="text">
    <thead><tr><th>Group</th><th>Effect</th></tr></thead>
    <tbody>
      <tr><td>Consumers</td><td>Lose surplus: pay more, buy less (areas A + B + C + D in Figure 1)</td></tr>
      <tr><td>Domestic producers</td><td>Gain surplus: sell more at a higher price (area A)</td></tr>
      <tr><td>Government</td><td>Gains tariff revenue: t × imports (area C)</td></tr>
      <tr><td><strong>Nation as a whole</strong></td><td><strong>Net loss = deadweight loss (B + D)</strong>: B is inefficient production, D is lost consumption</td></tr>
    </tbody>
  </table>
</div>
<p class="muted">A <strong>large</strong> country can push down the world price of its imports (improving its <strong>terms of trade</strong>), so it may gain from a tariff at its trading partners' expense. Retaliation usually erodes this.</p>

<h3>Levels of economic integration</h3>
<div class="card table-wrap">
  <table>
    <thead><tr><th>Type</th><th>Free trade among members</th><th>Common external trade policy</th><th>Free movement of labour &amp; capital</th><th>Common economic institutions</th><th>Common currency</th></tr></thead>
    <tbody>
      <tr><td><strong>Free trade area</strong></td><td>✓</td><td></td><td></td><td></td><td></td></tr>
      <tr><td><strong>Customs union</strong></td><td>✓</td><td>✓</td><td></td><td></td><td></td></tr>
      <tr><td><strong>Common market</strong></td><td>✓</td><td>✓</td><td>✓</td><td></td><td></td></tr>
      <tr><td><strong>Economic union</strong></td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td></td></tr>
      <tr><td><strong>Monetary union</strong></td><td>✓</td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
    </tbody>
  </table>
</div>

<h3>Why form trading blocs?</h3>
<div class="grid">
  <div class="card"><span class="tag ext">Advantages</span><ul style="margin:0;padding-left:18px">
    <li>Larger markets and economies of scale</li>
    <li>More competition, so efficiency rises</li>
    <li><strong>Trade creation</strong>: low-cost member output replaces high-cost domestic output</li>
    <li>More foreign direct investment</li>
    <li>Political cooperation and reduced conflict</li></ul></div>
  <div class="card"><span class="tag dis">Challenges</span><ul style="margin:0;padding-left:18px">
    <li><strong>Trade diversion</strong>: imports shift from a low-cost non-member to a higher-cost member</li>
    <li>Loss of national sovereignty over policy</li>
    <li>Adjustment costs for displaced industries</li>
    <li>In a monetary union, loss of independent monetary and exchange-rate policy</li></ul></div>
</div>`;

const diagrams = `
<h2>Diagrams</h2>

<h3>Figure 1: The welfare effects of a tariff</h3>
<figure>
  <div class="fig-wrap">
    <svg viewBox="0 0 560 340" role="img" aria-label="Domestic supply and demand with a world price line below the autarky price. A tariff raises the price from PW to PW plus t. Area A is the producer surplus gain, C is tariff revenue, and triangles B and D are deadweight losses.">
      <path class="axis" d="M60 20 V310 H540"/>
      <polygon points="60,220 210.8,220 169.2,250 60,250" class="fill-accent"/>
      <polygon points="169.2,250 210.8,220 210.8,250" class="fill-bad"/>
      <rect x="210.8" y="220" width="138.4" height="30" class="fill-good"/>
      <polygon points="349.2,220 390.8,250 349.2,250" class="fill-bad"/>
      <text x="125" y="240" text-anchor="middle" font-size="14" font-weight="700">A</text>
      <text x="197" y="243" text-anchor="middle" font-size="13" font-weight="700" style="fill:var(--bad)">B</text>
      <text x="280" y="240" text-anchor="middle" font-size="14" font-weight="700">C</text>
      <text x="362" y="243" text-anchor="middle" font-size="13" font-weight="700" style="fill:var(--bad)">D</text>
      <path class="curve2" d="M100 300 L460 40"/>
      <path class="curve" d="M100 40 L460 300"/>
      <text x="466" y="40" font-size="13" font-weight="700" style="fill:var(--curve2)">S (domestic)</text>
      <text x="466" y="302" font-size="13" font-weight="700" style="fill:var(--curve)">D</text>
      <path d="M60 250 H520" style="stroke:var(--text);stroke-width:2"/>
      <path d="M60 220 H520" style="stroke:var(--warn);stroke-width:2;stroke-dasharray:6 4"/>
      <text x="524" y="254" font-size="12" font-weight="700">P<tspan font-size="9">W</tspan></text>
      <text x="524" y="224" font-size="12" font-weight="700" style="fill:var(--warn)">P<tspan font-size="9">W</tspan>+t</text>
      <path class="dash" d="M169.2 250 V310 M210.8 220 V310 M349.2 220 V310 M390.8 250 V310"/>
      <text x="169" y="326" text-anchor="middle" font-size="10">Q<tspan font-size="8">S1</tspan></text>
      <text x="211" y="326" text-anchor="middle" font-size="10">Q<tspan font-size="8">S2</tspan></text>
      <text x="349" y="326" text-anchor="middle" font-size="10">Q<tspan font-size="8">D2</tspan></text>
      <text x="391" y="326" text-anchor="middle" font-size="10">Q<tspan font-size="8">D1</tspan></text>
      <text x="280" y="290" text-anchor="middle" font-size="11" class="muted-text">Imports after tariff: Q<tspan font-size="8">D2</tspan> − Q<tspan font-size="8">S2</tspan></text>
    </svg>
  </div>
  <figcaption><strong>A</strong> = gain to domestic producers; <strong>C</strong> = tariff revenue; <strong>B + D</strong> = deadweight loss. Consumers lose A + B + C + D, so the nation loses B + D overall.</figcaption>
</figure>

<h3>Figure 2: The integration ladder</h3>
<figure>
  <div class="fig-wrap">
    <svg viewBox="0 0 620 260" role="img" aria-label="A staircase of five steps, each adding a feature: free trade area, customs union, common market, economic union, monetary union.">
      <g font-size="12">
        <rect x="20" y="200" width="110" height="40" class="box-accent"/><text x="75" y="224" text-anchor="middle" font-weight="700">Free trade area</text>
        <rect x="135" y="160" width="110" height="80" class="box-accent"/><text x="190" y="184" text-anchor="middle" font-weight="700">Customs union</text>
        <rect x="250" y="120" width="110" height="120" class="box-accent"/><text x="305" y="144" text-anchor="middle" font-weight="700">Common market</text>
        <rect x="365" y="80" width="110" height="160" class="box-accent"/><text x="420" y="104" text-anchor="middle" font-weight="700">Economic union</text>
        <rect x="480" y="40" width="120" height="200" class="box-good"/><text x="540" y="64" text-anchor="middle" font-weight="700">Monetary union</text>
        <text x="190" y="206" text-anchor="middle" class="muted-text">+ common</text><text x="190" y="220" text-anchor="middle" class="muted-text">external tariff</text>
        <text x="305" y="166" text-anchor="middle" class="muted-text">+ free movement</text><text x="305" y="180" text-anchor="middle" class="muted-text">of labour &amp; capital</text>
        <text x="420" y="126" text-anchor="middle" class="muted-text">+ common</text><text x="420" y="140" text-anchor="middle" class="muted-text">institutions</text>
        <text x="540" y="86" text-anchor="middle" class="muted-text">+ single</text><text x="540" y="100" text-anchor="middle" class="muted-text">currency</text>
        <text x="75" y="190" text-anchor="middle" class="muted-text">e.g. USMCA</text>
        <text x="190" y="150" text-anchor="middle" class="muted-text">e.g. SACU</text>
        <text x="420" y="70" text-anchor="middle" class="muted-text">e.g. EU</text>
        <text x="540" y="30" text-anchor="middle" class="muted-text">e.g. euro area</text>
      </g>
    </svg>
  </div>
  <figcaption>Each level includes everything below it. Deeper integration brings larger gains but requires giving up more national policy independence.</figcaption>
</figure>`;

const lab = `
<h2>Trade lab</h2>

<div class="card">
  <h3 style="margin-top:0">Tool 1: Comparative advantage finder</h3>
  <p class="muted">Enter output per worker per day for two goods in two countries.</p>
  <div class="lab">
    <div>
      <div class="control"><label>Country A: Good X (e.g. textiles)</label><input class="num-input" id="caAX" type="number" min="0.1" step="0.1" value="6"></div>
      <div class="control"><label>Country A: Good Y (e.g. machinery)</label><input class="num-input" id="caAY" type="number" min="0.1" step="0.1" value="3"></div>
      <div class="control"><label>Country B: Good X</label><input class="num-input" id="caBX" type="number" min="0.1" step="0.1" value="2"></div>
      <div class="control"><label>Country B: Good Y</label><input class="num-input" id="caBY" type="number" min="0.1" step="0.1" value="2"></div>
    </div>
    <div>
      <div class="table-wrap"><table>
        <thead><tr><th></th><th>Opp. cost of 1 X</th><th>Opp. cost of 1 Y</th></tr></thead>
        <tbody id="caTable"></tbody>
      </table></div>
      <div class="verdict" id="caNote"></div>
    </div>
  </div>
</div>

<div class="card">
  <h3 style="margin-top:0">Tool 2: Tariff welfare calculator</h3>
  <p class="muted">Domestic demand: Q<sub>D</sub> = 200 − 10P. Domestic supply: Q<sub>S</sub> = −40 + 10P. The autarky price is 12. The country is small and takes the world price as given.</p>
  <div class="lab">
    <div>
      <div class="control"><label for="tW">World price (P<sub>W</sub>) <output id="tWo"></output></label><input type="range" id="tW" min="5" max="11" step="0.5" value="8"></div>
      <div class="control"><label for="tT">Tariff per unit (t) <output id="tTo"></output></label><input type="range" id="tT" min="0" max="6" step="0.5" value="2"></div>
      <div class="readout">
        <div><span>Imports before → after</span><strong id="tImp"></strong></div>
        <div><span>Domestic price</span><strong id="tP"></strong></div>
      </div>
    </div>
    <div>
      <div class="readout">
        <div><span>Consumer surplus lost</span><strong id="tCS"></strong></div>
        <div><span>Producer surplus gained (A)</span><strong id="tPS"></strong></div>
        <div><span>Tariff revenue (C)</span><strong id="tRev"></strong></div>
        <div><span>Deadweight loss (B + D)</span><strong id="tDWL"></strong></div>
      </div>
      <div id="tBar" style="margin-top:12px"></div>
      <div class="verdict" id="tNote"></div>
    </div>
  </div>
</div>`;

function initLab(el) {
  const f = window.Econ.fmt;
  const ids = ['caAX', 'caAY', 'caBX', 'caBY'];
  const r = Object.fromEntries(ids.map(id => [id, el.querySelector('#' + id)]));
  function ca() {
    const AX = Math.max(+r.caAX.value, 0.01), AY = Math.max(+r.caAY.value, 0.01), BX = Math.max(+r.caBX.value, 0.01), BY = Math.max(+r.caBY.value, 0.01);
    const aX = AY / AX, aY = AX / AY, bX = BY / BX, bY = BX / BY; // opportunity costs
    el.querySelector('#caTable').innerHTML = `
      <tr><td>Country A</td><td>${f(aX)} Y</td><td>${f(aY)} X</td></tr>
      <tr><td>Country B</td><td>${f(bX)} Y</td><td>${f(bY)} X</td></tr>`;
    const abs = [];
    if (AX > BX) abs.push('A in X'); else if (BX > AX) abs.push('B in X');
    if (AY > BY) abs.push('A in Y'); else if (BY > AY) abs.push('B in Y');
    const v = el.querySelector('#caNote');
    if (Math.abs(aX - bX) < 1e-9) { v.className = 'verdict'; v.innerHTML = 'Opportunity costs are identical, so there is <strong>no comparative advantage</strong> and no gain from specialisation.'; return; }
    const xMaker = aX < bX ? 'A' : 'B', yMaker = xMaker === 'A' ? 'B' : 'A';
    const lo = Math.min(aX, bX), hi = Math.max(aX, bX);
    v.className = 'verdict good';
    v.innerHTML = `<strong>Absolute advantage:</strong> ${abs.length ? abs.join(', ') : 'none'}.<br>
      <strong>Comparative advantage:</strong> Country ${xMaker} in Good X, Country ${yMaker} in Good Y.<br>
      Both gain if 1 X trades for between <strong>${f(lo)} and ${f(hi)} Y</strong> (the range between their opportunity costs).`;
  }
  ids.forEach(id => r[id].addEventListener('input', ca));
  ca();

  const tW = el.querySelector('#tW'), tT = el.querySelector('#tT');
  const Qd = p => Math.max(0, 200 - 10 * p), Qs = p => Math.max(0, -40 + 10 * p);
  function tariff() {
    const Pw = +tW.value, t = Math.min(+tT.value, 12 - Pw), Pt = Pw + t;
    el.querySelector('#tWo').textContent = f(Pw);
    el.querySelector('#tTo').textContent = f(+tT.value) + (+tT.value > t ? ` (capped at ${f(t)}: prohibitive)` : '');
    const qs1 = Qs(Pw), qd1 = Qd(Pw), qs2 = Qs(Pt), qd2 = Qd(Pt);
    const cs = t * (qd1 + qd2) / 2, ps = t * (qs1 + qs2) / 2, rev = t * (qd2 - qs2), dwl = cs - ps - rev;
    el.querySelector('#tImp').textContent = `${f(qd1 - qs1, 0)} → ${f(qd2 - qs2, 0)}`;
    el.querySelector('#tP').textContent = `${f(Pw)} → ${f(Pt)}`;
    el.querySelector('#tCS').textContent = f(cs, 1);
    el.querySelector('#tPS').textContent = f(ps, 1);
    el.querySelector('#tRev').textContent = f(rev, 1);
    el.querySelector('#tDWL').textContent = f(dwl, 1);
    const tot = cs || 1;
    const seg = (n, color, label) => n > 0 ? `<span style="width:${n / tot * 100}%;background:${color}" data-tip="${label}: ${f(n, 1)}"></span>` : '';
    el.querySelector('#tBar').innerHTML = `<div class="muted" style="font-size:.8rem;margin-bottom:4px">Where the consumers' loss goes</div>
      <div class="stack">${seg(ps, 'var(--accent)', 'To producers (A)')}${seg(rev, 'var(--good)', 'To government (C)')}${seg(dwl, 'var(--bad)', 'Deadweight loss (B + D)')}</div>
      <div class="legend"><span><i style="background:var(--accent)"></i>Producers (A)</span><span><i style="background:var(--good)"></i>Government (C)</span><span><i style="background:var(--bad)"></i>Lost to nobody (B + D)</span></div>`;
    el.querySelector('#tNote').innerHTML = t > 0
      ? `Consumers lose ${f(cs, 1)}. Producers and government recapture ${f(ps + rev, 1)}, but <strong>${f(dwl, 1)} is a pure deadweight loss</strong> to the nation.`
      : 'With no tariff there are no transfers and no deadweight loss. Raise the tariff to see the effects.';
  }
  [tW, tT].forEach(x => x.addEventListener('input', tariff));
  tariff();
}

const examples = `
<h2>Trade in the real world</h2>
<div class="grid">
  <div class="card"><div class="icon" aria-hidden="true">🏭</div><span class="tag dis">Tariff</span><h4>US steel &amp; aluminium tariffs (2018)</h4><p>The US imposed 25% tariffs on steel and 10% on aluminium on national-security grounds. Domestic steelmakers gained, but steel-using industries such as autos and machinery faced higher costs, and trading partners retaliated.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🚗</div><span class="tag dis">Voluntary export restraint</span><h4>Japanese cars (1981)</h4><p>Under US pressure, Japan "voluntarily" limited car exports to the US. Car prices rose, and Japanese makers earned the scarcity rents. They also shifted to higher-margin models and later built factories in the US.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🌏</div><span class="tag ext">Free trade area</span><h4>RCEP (in force 2022)</h4><p>The Regional Comprehensive Economic Partnership links 15 Asia-Pacific economies, including China, Japan, Korea, Australia and the ASEAN members. By members' combined GDP it is the world's largest free trade agreement.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🤝</div><span class="tag ext">Bilateral FTA</span><h4>India–UAE CEPA (2022)</h4><p>A comprehensive economic partnership that cut tariffs on most traded goods. It shows the rise of bilateral deals alongside slow progress at the WTO.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🇪🇺</div><span class="tag">Leaving a bloc</span><h4>Brexit (2021)</h4><p>Leaving the EU single market and customs union reintroduced customs checks and rules-of-origin paperwork for UK–EU trade, even though the trade deal kept tariffs at zero.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">👕</div><span class="tag">Heckscher–Ohlin</span><h4>Bangladesh garments</h4><p>Abundant, lower-cost labour gives Bangladesh a comparative advantage in labour-intensive clothing. Garments make up the large majority of its exports, a textbook H-O pattern.</p></div>
</div>

<h3>Quick recap</h3>
<div class="card table-wrap">
  <table class="text">
    <thead><tr><th>Concept</th><th>Key point</th></tr></thead>
    <tbody>
      <tr><td>Comparative advantage</td><td>Lower opportunity cost, which is the basis for gains from trade</td></tr>
      <tr><td>Tariff (small country)</td><td>Net national loss = deadweight loss (B + D)</td></tr>
      <tr><td>Quota / VER</td><td>Rents go to licence holders / foreign exporters</td></tr>
      <tr><td>Customs union</td><td>FTA + common external tariff</td></tr>
      <tr><td>Common market</td><td>Customs union + free movement of labour and capital</td></tr>
      <tr><td>Trade diversion</td><td>Imports shift to a higher-cost member country</td></tr>
    </tbody>
  </table>
</div>`;

const caseHtml = `
<h2>Case study: Lumeria and Kestria</h2>
<div class="card">
  <p>Two (fictional) countries produce solar panels and coffee. Output per worker per month:</p>
  <div class="table-wrap"><table>
    <thead><tr><th>Country</th><th>Solar panels</th><th>Coffee (bags)</th></tr></thead>
    <tbody><tr><td>Lumeria</td><td>20</td><td>40</td></tr><tr><td>Kestria</td><td>5</td><td>25</td></tr></tbody>
  </table></div>
  <p>Kestria currently imports solar panels at a world price of $100. Its domestic panel industry lobbies for a $20 tariff. With the tariff, Kestria's domestic production would rise from 1,000 to 1,400 panels a month, and consumption would fall from 5,000 to 4,600. Kestria is also considering joining a customs union with Lumeria.</p>
</div>
<p class="muted">Write your answers (notes are saved in this browser), then compare with the model answers.</p>

<div class="q">
  <div class="q-num">Question 1 · 4 marks</div>
  <div class="q-text">Identify absolute and comparative advantage. Which good should each country export?</div>
  <textarea aria-label="Your answer to question 1"></textarea>
  <button class="btn reveal" style="margin-top:8px">Show model answer</button>
  <div class="model" hidden>
    <p>Lumeria has an <strong>absolute advantage in both</strong> goods (20 &gt; 5 panels; 40 &gt; 25 bags).</p>
    <p>Opportunity cost of 1 panel: Lumeria = 40/20 = <strong>2 bags</strong>; Kestria = 25/5 = <strong>5 bags</strong>. Lumeria has the comparative advantage in <strong>solar panels</strong>.</p>
    <p>Opportunity cost of 1 bag: Lumeria = 0.5 panels; Kestria = 0.2 panels. Kestria has the comparative advantage in <strong>coffee</strong>. Lumeria should export panels and Kestria coffee, at a price between 2 and 5 bags per panel.</p>
  </div>
</div>

<div class="q">
  <div class="q-num">Question 2 · 4 marks</div>
  <div class="q-text">Calculate the change in imports, the tariff revenue, the producer surplus gain, the consumer surplus loss and the deadweight loss from the $20 tariff.</div>
  <textarea aria-label="Your answer to question 2"></textarea>
  <button class="btn reveal" style="margin-top:8px">Show model answer</button>
  <div class="model" hidden>
    <p>Imports fall from 5,000 − 1,000 = <strong>4,000</strong> to 4,600 − 1,400 = <strong>3,200</strong>.</p>
    <p>Tariff revenue (C) = $20 × 3,200 = <strong>$64,000</strong>.</p>
    <p>Producer surplus gain (A) = $20 × (1,000 + 1,400) ÷ 2 = <strong>$24,000</strong>.</p>
    <p>Consumer surplus loss = $20 × (5,000 + 4,600) ÷ 2 = <strong>$96,000</strong>.</p>
    <p>Deadweight loss (B + D) = 96,000 − 24,000 − 64,000 = <strong>$8,000</strong> (B = ½ × 20 × 400 = 4,000; D = ½ × 20 × 400 = 4,000).</p>
  </div>
</div>

<div class="q">
  <div class="q-num">Question 3 · 3 marks</div>
  <div class="q-text">What would a customs union with Lumeria involve, and what risk of trade diversion should Kestria consider?</div>
  <textarea aria-label="Your answer to question 3"></textarea>
  <button class="btn reveal" style="margin-top:8px">Show model answer</button>
  <div class="model" hidden>
    <p>A customs union removes tariffs between members <em>and</em> adopts a <strong>common external tariff</strong> on non-members. Kestria would give up an independent trade policy.</p>
    <p><strong>Trade diversion risk:</strong> if a non-member makes panels more cheaply than Lumeria, the common external tariff could shift Kestria's imports to higher-cost Lumerian panels. That would reduce welfare unless <strong>trade creation</strong> (replacing costly domestic output with cheaper Lumerian output) is larger.</p>
  </div>
</div>`;

window.MODULES.push({
  id: 'm6', lm: 6, lmTitle: 'International Trade',
  title: 'International Trade',
  subtitle: 'Comparative advantage, trade restrictions and their welfare effects, and trading blocs.',
  learn: [
    { id: 'overview', label: 'Overview', html: overview },
    { id: 'concepts', label: 'Key Concepts', html: concepts },
    { id: 'diagrams', label: 'Diagrams', html: diagrams },
    { id: 'lab', label: 'Trade Lab', html: lab, init: initLab },
    { id: 'examples', label: 'Real World', html: examples }
  ],
  mcq: [
    { q: 'A country has a comparative advantage in producing a good when it:', o: ['Can produce more of it than any other country', 'Has a lower opportunity cost of producing it than other countries', 'Uses fewer labour hours than other countries', 'Has higher wages in that industry'], a: 1, e: 'Comparative advantage is about opportunity cost. Using fewer resources is absolute advantage.' },
    { q: 'In one hour, Country A makes 4 cloth or 2 wine; Country B makes 1 cloth or 1 wine. Which statement is correct?', o: ['B has a comparative advantage in cloth', 'A has a comparative advantage in wine', 'B has a comparative advantage in wine', 'Neither has a comparative advantage'], a: 2, e: 'Opportunity cost of 1 wine: A = 2 cloth, B = 1 cloth. B gives up less, so B has the comparative advantage in wine (and A in cloth), even though A has an absolute advantage in both.' },
    { q: 'For a small country, imposing a tariff on imports will MOST likely:', o: ['Increase national welfare', 'Lower the domestic price', 'Increase domestic production and reduce national welfare', 'Increase imports'], a: 2, e: 'The higher domestic price raises production and cuts consumption. Consumers lose more than producers and government gain, which leaves a deadweight loss.' },
    { q: 'A key difference between an import quota and a tariff is that with a quota:', o: ['Domestic prices fall', 'The government automatically collects revenue', 'The rents may go to licence holders or foreign exporters rather than the government', 'Imports are unlimited'], a: 2, e: 'Unless licences are auctioned, quota rents go to whoever holds them, often foreign exporters.' },
    { q: 'Under a voluntary export restraint (VER), the scarcity rents accrue mainly to:', o: ['The importing country\'s government', 'Consumers in the importing country', 'Foreign producers in the exporting country', 'No one'], a: 2, e: 'Exporters charge higher prices on the limited volume, so a VER is costlier to the importing country than an equivalent tariff.' },
    { q: 'An export subsidy will typically:', o: ['Lower the domestic price of the exported good', 'Raise the domestic price of the exported good and cost taxpayers', 'Generate government revenue', 'Reduce exports'], a: 1, e: 'Producers prefer to export at the subsidised price, so domestic consumers pay more and taxpayers fund the subsidy.' },
    { q: 'What distinguishes a customs union from a free trade area?', o: ['Free movement of labour', 'A common external trade policy toward non-members', 'A common currency', 'Common economic institutions'], a: 1, e: 'Customs union = FTA + common external tariff.' },
    { q: 'A common market adds which feature to a customs union?', o: ['A single currency', 'Free movement of factors of production (labour and capital)', 'Removal of internal tariffs', 'A common central bank'], a: 1, e: 'Common market = customs union + free factor mobility.' },
    { q: 'Trade diversion occurs when a trading bloc causes imports to shift:', o: ['From a high-cost member to a low-cost non-member', 'From a low-cost non-member to a higher-cost member', 'From domestic producers to member producers', 'Away from all imports'], a: 1, e: 'The external tariff makes the efficient outside supplier look more expensive than a less efficient member.' },
    { q: 'According to the Heckscher–Ohlin model, a capital-abundant country will tend to export:', o: ['Labour-intensive goods', 'Capital-intensive goods', 'Agricultural goods only', 'No goods'], a: 1, e: 'Countries export goods that use their abundant factor intensively.' },
    { q: 'A tariff of $2 per unit results in imports of 30 units. Tariff revenue is:', o: ['$15', '$32', '$60', '$600'], a: 2, e: 'Revenue = tariff × imports = $2 × 30 = <strong>$60</strong>.' },
    { q: 'Gross national product (GNP) differs from GDP in that GNP:', o: ['Measures output within a country\'s borders', 'Measures output by a country\'s citizens and firms, wherever located', 'Excludes services', 'Excludes government spending'], a: 1, e: 'GNP is based on ownership/nationality; GDP is based on location.' }
  ],
  match: { pairs: [
    ['Absolute advantage', 'Producing a good using fewer resources than another country'],
    ['Comparative advantage', 'Producing a good at a lower opportunity cost'],
    ['Tariff', 'A tax on imported goods that raises government revenue'],
    ['Import quota', 'A limit on the quantity of a good that can be imported'],
    ['Voluntary export restraint', 'Exporting country limits its exports; rents go to foreign producers'],
    ['Export subsidy', 'Government payment to exporters, funded by taxpayers'],
    ['Customs union', 'Free trade among members plus a common external tariff'],
    ['Common market', 'Customs union plus free movement of labour and capital'],
    ['Trade diversion', 'Imports shift from a low-cost non-member to a higher-cost member']
  ] },
  tf: [
    { s: 'A country with an absolute advantage in all goods cannot gain from trade.', a: 'False', e: 'Gains come from comparative advantage, which every country has in something.' },
    { s: 'For a small country, a tariff creates a deadweight loss.', a: 'True', e: 'Triangles B (inefficient production) and D (lost consumption).' },
    { s: 'A large country may be able to improve its terms of trade by imposing a tariff.', a: 'True', e: 'It can push down the world price of its imports, though retaliation can erase the gain.' },
    { s: 'A free trade area requires members to adopt a common external tariff.', a: 'False', e: 'That is a customs union. FTA members keep their own external tariffs.' },
    { s: 'Members of a monetary union give up independent monetary policy.', a: 'True', e: 'They share one currency and one central bank.' },
    { s: 'Trade always benefits every individual and group within a country.', a: 'False', e: 'Import-competing workers and firms can lose, even if the nation gains overall.' },
    { s: 'An export subsidy lowers the price that domestic consumers pay for the subsidised good.', a: 'False', e: 'It raises the domestic price, because producers prefer to export.' },
    { s: 'Joining a trading bloc can increase foreign direct investment into member countries.', a: 'True', e: 'Firms invest inside the bloc to access the larger market.' }
  ],
  classify: {
    choices: ['Free trade area', 'Customs union', 'Common market', 'Economic union', 'Monetary union'],
    intro: 'Identify the level of economic integration described.',
    items: [
      { s: 'Members remove tariffs among themselves but each sets its own tariffs on outsiders (e.g., USMCA).', a: 'Free trade area', e: 'No common external tariff.' },
      { s: 'Members remove internal tariffs and adopt a common external tariff, but workers cannot move freely (e.g., the Southern African Customs Union).', a: 'Customs union', e: 'Common external tariff, no factor mobility.' },
      { s: 'Free trade, a common external tariff, and free movement of labour and capital, but no shared economic institutions.', a: 'Common market', e: 'Adds factor mobility.' },
      { s: 'A common market that also shares economic institutions and coordinates economic policy.', a: 'Economic union', e: 'Adds common institutions.' },
      { s: 'An economic union whose members share a single currency and central bank (e.g., the euro area).', a: 'Monetary union', e: 'Adds a common currency.' },
      { s: 'ASEAN members cut tariffs on trade among themselves while keeping their own tariffs on non-members.', a: 'Free trade area', e: 'Independent external tariffs.' },
      { s: 'The EU and Turkey apply the same external tariff to most industrial goods.', a: 'Customs union', e: 'A common external tariff on covered goods.' },
      { s: 'Countries agree to replace their national currencies with one shared currency.', a: 'Monetary union', e: 'The deepest level of integration.' }
    ]
  },
  caseStudy: { html: caseHtml }
});
})();
