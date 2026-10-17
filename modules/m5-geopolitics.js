/* LM5: Introduction to Geopolitics */
(() => {
const overview = `
<h2>What is geopolitics?</h2>
<div class="callout">
  <strong>Geopolitics</strong> is the study of how geography, politics and power shape relationships between countries, and how those relationships affect economies and investments.
</div>
<div class="callout cfa"><strong>CFA exam focus.</strong> Describe geopolitics from a cooperation-versus-competition perspective; describe geopolitics and its relationship with globalisation; describe the functions of international bodies (IMF, World Bank, WTO); describe the tools of geopolitics; and describe geopolitical risk and its impact on investments.</div>

<h3>Who are the actors?</h3>
<div class="grid">
  <div class="card"><span class="tag">State actors</span><h4>National governments</h4><p>Individuals or groups with authority over a country's resources, population and territory. They use political, economic and military power.</p></div>
  <div class="card"><span class="tag ext">Non-state actors</span><h4>Everyone else with influence</h4><p>Non-governmental organisations (NGOs), multinational companies, charities, and influential individuals. They take part in global politics but have no sovereign authority.</p></div>
</div>

<h3>Cooperation vs competition</h3>
<p>A <strong>cooperative</strong> country engages with others on shared rules: standardised regulations, trade agreements, and military and cultural ties. A <strong>non-cooperative</strong> country acts alone and may use force or economic pressure. Most countries sit somewhere between, and their stance can shift with:</p>
<ul>
  <li><strong>National security</strong> and the protection of sovereignty</li>
  <li><strong>Economic interests</strong>, especially access to essential resources (energy, food, minerals)</li>
  <li><strong>Geography and resource endowment</strong>: landlocked or resource-poor countries need more cooperation</li>
  <li><strong>Domestic politics:</strong> election cycles and the power of the ruling party</li>
  <li><strong>Culture and history</strong>, including <strong>soft power</strong>: influence through culture, values and media rather than force</li>
</ul>

<h3>Geopolitics and globalisation</h3>
<p><strong>Globalisation</strong> is the process of increasing interaction and integration among people, companies and governments: trade, capital, people and ideas crossing borders. Its opposite is <strong>nationalism</strong>, which promotes a country's own economic interests, often through trade barriers.</p>
<div class="grid">
  <div class="card"><span class="tag ext">Benefits</span><ul style="margin:0;padding-left:18px"><li>Higher productivity and economic growth</li><li>Access to new markets and lower-cost resources</li><li>Sharing of knowledge and intellectual capital</li></ul></div>
  <div class="card"><span class="tag dis">Costs</span><ul style="margin:0;padding-left:18px"><li>Uneven distribution of gains, so inequality within countries</li><li>Interdependence that creates supply-chain vulnerability</li><li>Labour and environmental concerns</li></ul></div>
</div>`;

const concepts = `
<h2>Key concepts</h2>

<h3>Four geopolitical archetypes</h3>
<p>Combining <strong>cooperation vs non-cooperation</strong> with <strong>globalisation vs nationalism</strong> gives four archetypes:</p>
<div class="grid">
  <div class="card"><span class="tag ext">Cooperative + globalised</span><h4>Multilateralism</h4><p>Many countries cooperate under common rules and institutions. Integration is deep and trade and capital flow freely.</p></div>
  <div class="card"><span class="tag">Cooperative + nationalist</span><h4>Bilateralism</h4><p>Cooperation happens one partner at a time through bilateral deals, with limited broader integration.</p></div>
  <div class="card"><span class="tag" style="background:var(--bad-soft);color:var(--warn)">Non-cooperative + globalised</span><h4>Hegemony</h4><p>A dominant power is globally engaged but sets the rules itself and uses its power rather than consensus.</p></div>
  <div class="card"><span class="tag dis">Non-cooperative + nationalist</span><h4>Autarky</h4><p>The country aims for self-sufficiency: little trade, state control of key industries, and few alliances.</p></div>
</div>

<h3>International institutions</h3>
<div class="grid">
  <div class="card"><div class="icon" aria-hidden="true">🌐</div><h4>International Monetary Fund (IMF)</h4><p>Promotes international monetary cooperation and financial stability. It monitors economies (surveillance) and lends to countries with <strong>balance-of-payments problems</strong>, usually with policy conditions.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🏗️</div><h4>World Bank</h4><p>Provides <strong>long-term financing and expertise for development</strong> to reduce poverty, funding infrastructure, health, education and environmental projects.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">⚖️</div><h4>World Trade Organization (WTO)</h4><p>Sets the global <strong>rules of trade</strong> between nations, negotiates trade agreements and <strong>settles trade disputes</strong>.</p></div>
</div>

<h3>Tools of geopolitics</h3>
<div class="card table-wrap">
  <table class="text">
    <thead><tr><th>Type</th><th>Cooperative examples</th><th>Non-cooperative examples</th></tr></thead>
    <tbody>
      <tr><td><strong>National security tools</strong></td><td>Defence alliances, bilateral or multilateral security agreements</td><td>Armed conflict, espionage, cyber attacks</td></tr>
      <tr><td><strong>Economic tools</strong></td><td>Free trade areas, common markets, economic unions</td><td>Tariffs, nationalisation of foreign assets, voluntary export restraints, domestic content rules</td></tr>
      <tr><td><strong>Financial tools</strong></td><td>Granting reserve-currency access, opening markets to foreign investment</td><td>Sanctions, freezing reserves, restricting foreign investment (e.g. national-security screening)</td></tr>
    </tbody>
  </table>
</div>

<h3>Geopolitical risk</h3>
<p>Geopolitical risk is the risk that tension or conflict between actors disrupts the normal course of international relations. The CFA curriculum identifies three types:</p>
<div class="grid">
  <div class="card"><span class="tag">Event risk</span><h4>Known timing</h4><p>Developments on a known date: elections, referendums, new legislation, treaty deadlines.</p></div>
  <div class="card"><span class="tag dis">Exogenous risk</span><h4>Sudden and unanticipated</h4><p>Unexpected shocks: invasions, coups, uprisings, terrorist attacks.</p></div>
  <div class="card"><span class="tag ext">Thematic risk</span><h4>Known and evolving</h4><p>Long-running themes that develop over time: climate change, migration, cyber threats, tech rivalry.</p></div>
</div>

<h4 style="margin-top:20px">Assessing a geopolitical risk</h4>
<ul>
  <li><strong>Likelihood</strong>: how probable is it? Countries that cooperate less and globalise less tend to carry higher risk.</li>
  <li><strong>Velocity</strong>: how quickly does it hit markets? <em>High velocity</em> (e.g. invasions) causes sharp, short-term volatility. <em>Low velocity</em> (e.g. climate) affects long-term valuations and strategic allocation.</li>
  <li><strong>Size and nature of impact</strong>: is it contained to one sector or region, or broad and systemic?</li>
</ul>
<p>Investors use <strong>scenario analysis</strong>, identify <strong>signposts</strong> (indicators that a scenario is unfolding), and adjust tactically (hedges) or strategically (asset allocation, diversification).</p>`;

const diagrams = `
<h2>Diagrams</h2>

<h3>Figure 1: The four archetypes</h3>
<figure>
  <div class="fig-wrap">
    <svg viewBox="0 0 560 360" role="img" aria-label="Two-by-two matrix. Horizontal axis from nationalism to globalisation; vertical axis from non-cooperation to cooperation. Top right multilateralism, top left bilateralism, bottom right hegemony, bottom left autarky.">
      <defs><marker id="arr5" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" style="fill:var(--axis)"/></marker></defs>
      <rect x="70" y="30" width="220" height="140" rx="8" class="box-accent"/>
      <rect x="300" y="30" width="220" height="140" rx="8" class="box-good"/>
      <rect x="70" y="180" width="220" height="140" rx="8" class="box-bad"/>
      <rect x="300" y="180" width="220" height="140" rx="8" class="box" style="stroke:var(--warn)"/>
      <text x="180" y="92" text-anchor="middle" font-size="17" font-weight="700">Bilateralism</text>
      <text x="180" y="114" text-anchor="middle" font-size="12" class="muted-text">Deals one partner at a time</text>
      <text x="410" y="92" text-anchor="middle" font-size="17" font-weight="700">Multilateralism</text>
      <text x="410" y="114" text-anchor="middle" font-size="12" class="muted-text">Shared rules, deep integration</text>
      <text x="180" y="242" text-anchor="middle" font-size="17" font-weight="700">Autarky</text>
      <text x="180" y="264" text-anchor="middle" font-size="12" class="muted-text">Self-sufficiency, state control</text>
      <text x="410" y="242" text-anchor="middle" font-size="17" font-weight="700">Hegemony</text>
      <text x="410" y="264" text-anchor="middle" font-size="12" class="muted-text">Dominant power sets the rules</text>
      <path class="link" d="M70 340 H520" marker-start="url(#arr5)" marker-end="url(#arr5)"/>
      <text x="70" y="356" font-size="12" class="muted-text">Nationalism</text>
      <text x="520" y="356" text-anchor="end" font-size="12" class="muted-text">Globalisation</text>
      <path class="link" d="M45 320 V30" marker-start="url(#arr5)" marker-end="url(#arr5)"/>
      <text x="30" y="100" text-anchor="middle" font-size="12" class="muted-text" transform="rotate(-90 30 100)">Cooperation</text>
      <text x="30" y="250" text-anchor="middle" font-size="12" class="muted-text" transform="rotate(-90 30 250)">Non-cooperation</text>
    </svg>
  </div>
</figure>

<h3>Figure 2: Assessing risk: likelihood, impact and velocity</h3>
<figure>
  <div class="fig-wrap">
    <svg viewBox="0 0 560 340" role="img" aria-label="Scatter of example risks by likelihood (horizontal) and impact (vertical). Bubble shading shows velocity: high-velocity risks such as invasion are fast-moving; low-velocity risks such as climate change develop slowly.">
      <path class="axis" d="M60 20 V300 H540"/>
      <path class="dash" d="M300 20 V300 M60 160 H540"/>
      <text x="300" y="326" text-anchor="middle" font-size="12" class="muted-text">Likelihood →</text>
      <text x="26" y="160" text-anchor="middle" font-size="12" class="muted-text" transform="rotate(-90 26 160)">Size of impact →</text>
      <circle cx="210" cy="60" r="20" style="fill:var(--bad);opacity:.85"/><text x="236" y="52" font-size="12" font-weight="700">Invasion / war</text><text x="236" y="67" font-size="11" class="muted-text">exogenous · high velocity</text>
      <circle cx="460" cy="90" r="14" style="fill:var(--curve3);opacity:.85"/><text x="400" y="128" font-size="12" font-weight="700">Climate change</text><text x="400" y="143" font-size="11" class="muted-text">thematic · low velocity</text>
      <circle cx="420" cy="210" r="14" style="fill:var(--curve);opacity:.85"/><text x="330" y="246" font-size="12" font-weight="700">Scheduled election</text><text x="330" y="261" font-size="11" class="muted-text">event · medium velocity</text>
      <circle cx="140" cy="230" r="20" style="fill:var(--bad);opacity:.85"/><text x="166" y="222" font-size="12" font-weight="700">Coup in small</text><text x="166" y="237" font-size="12" font-weight="700">economy</text><text x="166" y="252" font-size="11" class="muted-text">exogenous · contained</text>
      <circle cx="380" cy="40" r="14" style="fill:var(--curve3);opacity:.85"/><text x="398" y="36" font-size="12" font-weight="700">Tech rivalry</text><text x="398" y="50" font-size="11" class="muted-text">thematic</text>
    </svg>
  </div>
  <figcaption>Fast-moving (high-velocity) risks hit prices suddenly, so you prepare with scenario analysis and hedges. Slow-moving (low-velocity) risks reshape valuations gradually and belong in strategic asset allocation.</figcaption>
</figure>`;

const lab = `
<h2>Geopolitics lab</h2>

<div class="card">
  <h3 style="margin-top:0">Tool 1: Archetype finder</h3>
  <p class="muted">Position a country by how cooperative it is and how globalised its economy is.</p>
  <div class="lab">
    <div>
      <div class="control"><label for="gC">Cooperation <output id="gCo"></output></label><input type="range" id="gC" min="-100" max="100" step="5" value="40"></div>
      <div class="control"><label for="gG">Globalisation <output id="gGo"></output></label><input type="range" id="gG" min="-100" max="100" step="5" value="60"></div>
      <div class="verdict" id="gNote"></div>
    </div>
    <div><svg id="gChart" viewBox="0 0 400 300" style="width:100%;height:auto" role="img" aria-label="Archetype map with the selected country marked"></svg></div>
  </div>
</div>

<div class="card">
  <h3 style="margin-top:0">Tool 2: Risk scorecard</h3>
  <div class="lab">
    <div>
      <div class="control"><label for="rType">Risk type</label>
        <select id="rType"><option>Event</option><option>Exogenous</option><option>Thematic</option></select></div>
      <div class="control"><label for="rL">Likelihood (1–5) <output id="rLo"></output></label><input type="range" id="rL" min="1" max="5" step="1" value="3"></div>
      <div class="control"><label for="rI">Size of impact (1–5) <output id="rIo"></output></label><input type="range" id="rI" min="1" max="5" step="1" value="4"></div>
      <div class="control"><label for="rV">Velocity</label>
        <select id="rV"><option value="1">Low (slow-moving)</option><option value="2" selected>Medium</option><option value="3">High (sudden)</option></select></div>
    </div>
    <div>
      <div class="readout">
        <div><span>Risk score (likelihood × impact)</span><strong id="rS"></strong></div>
        <div><span>Priority</span><strong id="rP"></strong></div>
      </div>
      <div class="verdict" id="rNote"></div>
    </div>
  </div>
</div>`;

function initLab(el) {
  const c = el.querySelector('#gC'), g = el.querySelector('#gG');
  const info = {
    Multilateralism: 'Deep integration under shared rules. Lower geopolitical risk; investors benefit from open markets and diversified supply chains.',
    Bilateralism: 'Cooperation via one-to-one deals. Moderate risk; market access depends on specific relationships.',
    Hegemony: 'A dominant, globally engaged power that sets its own rules. Others face policy uncertainty and possible coercion (tariffs, sanctions).',
    Autarky: 'Self-sufficiency and state control. Highest risk for foreign investors: expropriation, capital controls, limited market access.'
  };
  function arch() {
    const C = +c.value, G = +g.value;
    el.querySelector('#gCo').textContent = C;
    el.querySelector('#gGo').textContent = G;
    const name = C >= 0 ? (G >= 0 ? 'Multilateralism' : 'Bilateralism') : (G >= 0 ? 'Hegemony' : 'Autarky');
    const x = 200 + G * 1.7, y = 140 - C * 1.15;
    el.querySelector('#gChart').innerHTML = `
      <rect x="30" y="20" width="170" height="120" class="fill-accent"/><rect x="200" y="20" width="170" height="120" class="fill-good"/>
      <rect x="30" y="140" width="170" height="120" class="fill-bad"/><rect x="200" y="140" width="170" height="120" style="fill:rgba(161,92,0,.12)"/>
      <text x="115" y="40" text-anchor="middle" font-size="12" font-weight="700">Bilateralism</text>
      <text x="285" y="40" text-anchor="middle" font-size="12" font-weight="700">Multilateralism</text>
      <text x="115" y="250" text-anchor="middle" font-size="12" font-weight="700">Autarky</text>
      <text x="285" y="250" text-anchor="middle" font-size="12" font-weight="700">Hegemony</text>
      <path class="axis" d="M30 140 H370 M200 20 V260"/>
      <text x="30" y="280" font-size="11" class="muted-text">← Nationalism</text><text x="370" y="280" text-anchor="end" font-size="11" class="muted-text">Globalisation →</text>
      <text x="206" y="16" font-size="11" class="muted-text">Cooperative ↑</text>
      <circle cx="${x}" cy="${y}" r="9" style="fill:var(--card);stroke:var(--curve);stroke-width:4"/>`;
    el.querySelector('#gNote').innerHTML = `<strong>${name}.</strong> ${info[name]}`;
  }
  [c, g].forEach(x => x.addEventListener('input', arch));
  arch();

  const ids = ['rType', 'rL', 'rI', 'rV'];
  const r = Object.fromEntries(ids.map(id => [id, el.querySelector('#' + id)]));
  function risk() {
    const L = +r.rL.value, I = +r.rI.value, V = +r.rV.value, type = r.rType.value;
    el.querySelector('#rLo').textContent = L;
    el.querySelector('#rIo').textContent = I;
    const s = L * I;
    const pr = s >= 15 ? 'High' : s >= 8 ? 'Medium' : 'Low';
    el.querySelector('#rS').textContent = s + ' / 25';
    el.querySelector('#rP').textContent = pr;
    const vText = V === 3 ? 'A <strong>high-velocity</strong> risk hits prices suddenly: prepare with scenario analysis, predefined hedges (options, safe-haven assets) and liquidity.'
      : V === 2 ? 'A <strong>medium-velocity</strong> risk unfolds over weeks to months: monitor signposts and adjust tactical positioning.'
      : 'A <strong>low-velocity</strong> risk reshapes the economy slowly: reflect it in strategic asset allocation and long-term valuation assumptions.';
    const tText = type === 'Event' ? 'Event risks have known dates, so you can plan scenarios ahead of the date.'
      : type === 'Exogenous' ? 'Exogenous risks cannot be timed, so build resilience (diversification, tail hedges) in advance.'
      : 'Thematic risks evolve over time, so track signposts and reassess regularly.';
    const v = el.querySelector('#rNote');
    v.className = 'verdict' + (pr === 'High' ? ' bad' : pr === 'Low' ? ' good' : '');
    v.innerHTML = `<strong>${pr} priority.</strong> ${tText} ${vText}`;
  }
  ids.forEach(id => r[id].addEventListener('input', risk));
  ids.forEach(id => r[id].addEventListener('change', risk));
  risk();
}

const examples = `
<h2>Geopolitics in the real world</h2>
<div class="grid">
  <div class="card"><div class="icon" aria-hidden="true">🛡️</div><span class="tag dis">Exogenous risk · financial tools</span><h4>Russia–Ukraine (2022)</h4><p>The invasion triggered sweeping Western sanctions. Several Russian banks were cut off from SWIFT and roughly $300bn of Russia's central bank reserves were frozen. European gas prices spiked: a high-velocity, high-impact shock.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">💾</div><span class="tag ext">Thematic risk · economic tools</span><h4>US–China tech rivalry</h4><p>Tariffs from 2018 and export controls on advanced chips and chip-making tools from October 2022 show the use of non-cooperative economic tools. Firms responded with "China + 1" strategies, shifting some production to India, Vietnam and Mexico.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🇬🇧</div><span class="tag">Event risk</span><h4>Brexit referendum (2016)</h4><p>The vote had a known date, which made it a classic event risk. Sterling fell sharply when the unexpected "Leave" result came in, showing why scenario analysis before known events matters.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🚢</div><span class="tag dis">Supply-chain risk</span><h4>Red Sea shipping attacks (2023–24)</h4><p>Attacks on merchant ships led many carriers to reroute around the Cape of Good Hope. That added days to Asia–Europe voyages and raised freight costs, showing how globalised supply chains transmit geopolitical shocks.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">📦</div><span class="tag" style="background:var(--bad-soft);color:var(--warn)">Shift toward nationalism</span><h4>US "reciprocal" tariffs (2025)</h4><p>In April 2025 the US announced broad tariffs on most trading partners, triggering a sharp global market sell-off and a wave of bilateral negotiations. This is a move away from multilateral trade rules.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🌐</div><span class="tag ext">Multilateralism</span><h4>IMF programmes</h4><p>Countries facing balance-of-payments crises, such as Sri Lanka in 2023, receive IMF loans conditioned on reforms. This is cooperation through international institutions.</p></div>
</div>

<h3>Quick recap</h3>
<div class="card table-wrap">
  <table class="text">
    <thead><tr><th>Concept</th><th>Key point</th></tr></thead>
    <tbody>
      <tr><td>Archetypes</td><td>Multilateralism, bilateralism, hegemony, autarky</td></tr>
      <tr><td>IMF / World Bank / WTO</td><td>Monetary stability &amp; BoP lending / development / trade rules &amp; disputes</td></tr>
      <tr><td>Risk types</td><td>Event (known date), exogenous (sudden), thematic (evolving)</td></tr>
      <tr><td>Assessment</td><td>Likelihood, velocity, size and nature of impact</td></tr>
      <tr><td>Tools</td><td>National security, economic, financial: cooperative or not</td></tr>
    </tbody>
  </table>
</div>`;

const caseHtml = `
<h2>Case study: Meridian Global Equity Fund</h2>
<div class="card">
  <p>You manage the (fictional) <strong>Meridian Global Equity Fund</strong>. 25% of the portfolio is invested in companies with significant operations in the (fictional) country of <strong>Zarkovia</strong>. Your team flags three issues:</p>
  <ol>
    <li>Zarkovia holds a presidential election in four months. The leading candidate promises to nationalise the energy sector.</li>
    <li>A long-running border dispute with a neighbour could, according to some analysts, escalate suddenly into armed conflict.</li>
    <li>Zarkovia's main export, coal, faces declining global demand as importers adopt carbon taxes.</li>
  </ol>
</div>
<p class="muted">Write your answers (notes are saved in this browser), then compare with the model answers.</p>

<div class="q">
  <div class="q-num">Question 1 · 3 marks</div>
  <div class="q-text">Classify each of the three issues as event, exogenous or thematic risk.</div>
  <textarea aria-label="Your answer to question 1"></textarea>
  <button class="btn reveal" style="margin-top:8px">Show model answer</button>
  <div class="model" hidden>
    <ol>
      <li><strong>Event risk:</strong> the election has a known date.</li>
      <li><strong>Exogenous risk:</strong> a sudden, unanticipated escalation.</li>
      <li><strong>Thematic risk:</strong> climate transition is a known, slowly evolving theme.</li>
    </ol>
  </div>
</div>

<div class="q">
  <div class="q-num">Question 2 · 4 marks</div>
  <div class="q-text">Assess each risk on likelihood, velocity and size of impact. Which tool of geopolitics does issue 1 involve?</div>
  <textarea aria-label="Your answer to question 2"></textarea>
  <button class="btn reveal" style="margin-top:8px">Show model answer</button>
  <div class="model" hidden>
    <ul>
      <li><strong>Election:</strong> moderate-to-high likelihood (leading candidate); medium velocity (known date, policy follows later); high impact for energy holdings. Nationalisation is a <strong>non-cooperative economic tool</strong>.</li>
      <li><strong>Border conflict:</strong> low likelihood, but <strong>high velocity</strong> and potentially very large, broad impact (currency, capital controls, sanctions).</li>
      <li><strong>Coal demand:</strong> high likelihood, <strong>low velocity</strong>; a large but gradual impact on export revenue, the currency and growth.</li>
    </ul>
  </div>
</div>

<div class="q">
  <div class="q-num">Question 3 · 4 marks</div>
  <div class="q-text">Recommend how the fund should respond to each risk.</div>
  <textarea aria-label="Your answer to question 3"></textarea>
  <button class="btn reveal" style="margin-top:8px">Show model answer</button>
  <div class="model" hidden>
    <ul>
      <li><strong>Election:</strong> run <strong>scenario analysis</strong> before the vote (win or lose), define signposts (polls, manifesto details), and consider trimming energy exposure or hedging ahead of the known date.</li>
      <li><strong>Border conflict:</strong> cannot be timed, so build resilience in advance: diversify away from concentrated Zarkovia exposure, hold liquid positions, and consider tail-risk hedges (currency puts, safe-haven assets).</li>
      <li><strong>Coal demand:</strong> reflect it <strong>strategically</strong>: lower long-term growth and valuation assumptions for coal-linked firms and reduce long-run allocation, rather than trading tactically.</li>
    </ul>
  </div>
</div>`;

window.MODULES.push({
  id: 'm5', lm: 5, lmTitle: 'Introduction to Geopolitics',
  title: 'Geopolitics',
  subtitle: 'Cooperation vs competition, globalisation, international institutions and geopolitical risk.',
  learn: [
    { id: 'overview', label: 'Overview', html: overview },
    { id: 'concepts', label: 'Key Concepts', html: concepts },
    { id: 'diagrams', label: 'Diagrams', html: diagrams },
    { id: 'lab', label: 'Lab', html: lab, init: initLab },
    { id: 'examples', label: 'Real World', html: examples }
  ],
  mcq: [
    { q: 'A country that is highly integrated into the global economy but acts unilaterally and imposes its own rules on others best fits which archetype?', o: ['Multilateralism', 'Bilateralism', 'Hegemony', 'Autarky'], a: 2, e: 'Hegemony = globalised but non-cooperative.' },
    { q: 'A country that seeks economic self-sufficiency, limits trade and keeps key industries under state control is pursuing:', o: ['Autarky', 'Hegemony', 'Multilateralism', 'Bilateralism'], a: 0, e: 'Autarky = non-cooperative and nationalist.' },
    { q: 'Which of the following is a non-state actor?', o: ['A national parliament', 'A finance ministry', 'A multinational corporation', 'A head of state'], a: 2, e: 'Non-state actors (NGOs, multinationals, charities, influential individuals) take part in global affairs without sovereign authority.' },
    { q: 'Providing loans to a country experiencing a balance-of-payments crisis is a primary function of the:', o: ['World Bank', 'International Monetary Fund', 'World Trade Organization', 'United Nations Security Council'], a: 1, e: 'The IMF promotes monetary stability and lends to countries with BoP problems.' },
    { q: 'Settling trade disputes between member countries is a primary function of the:', o: ['IMF', 'World Bank', 'WTO', 'Bank for International Settlements'], a: 2, e: 'The WTO administers trade rules and dispute settlement.' },
    { q: 'Financing long-term infrastructure and poverty-reduction projects in developing countries is the main role of the:', o: ['World Bank', 'IMF', 'WTO', 'OECD'], a: 0, e: 'The World Bank focuses on long-term development.' },
    { q: 'A sudden coup d\'état in an emerging market is best classified as:', o: ['Event risk', 'Exogenous risk', 'Thematic risk', 'Systematic risk'], a: 1, e: 'Exogenous risks are sudden and unanticipated.' },
    { q: 'The gradual effect of climate change on trade patterns and asset values is an example of:', o: ['Event risk', 'Exogenous risk', 'Thematic risk', 'Liquidity risk'], a: 2, e: 'Thematic risks are known and evolve over time.' },
    { q: 'Freezing a country\'s central bank reserves held abroad is an example of a:', o: ['Cooperative economic tool', 'Non-cooperative financial tool', 'National security alliance', 'Cooperative financial tool'], a: 1, e: 'Sanctions and asset freezes are non-cooperative financial tools.' },
    { q: 'A geopolitical risk with high velocity is one that:', o: ['Is very likely to occur', 'Affects markets quickly once it materialises', 'Has a small impact', 'Develops over decades'], a: 1, e: 'Velocity measures how fast the impact reaches markets. High-velocity risks cause sharp short-term volatility.' },
    { q: 'A country\'s ability to influence others through its culture, values and media is called:', o: ['Hard power', 'Soft power', 'Hegemony', 'Autarky'], a: 1, e: 'Soft power works through attraction, not coercion.' },
    { q: 'Which is a cost (drawback) of globalisation?', o: ['Access to larger markets', 'Higher productivity', 'Supply-chain vulnerability from interdependence', 'Sharing of intellectual capital'], a: 2, e: 'Interdependence means a disruption in one country can spread worldwide.' }
  ],
  match: { pairs: [
    ['Multilateralism', 'Many countries cooperating under shared rules with deep integration'],
    ['Bilateralism', 'Cooperation through one-to-one agreements between two countries'],
    ['Hegemony', 'A globally engaged power that sets rules unilaterally'],
    ['Autarky', 'Self-sufficiency, little trade and state control of key industries'],
    ['IMF', 'Lends to countries with balance-of-payments problems'],
    ['World Bank', 'Long-term development financing to reduce poverty'],
    ['WTO', 'Administers trade rules and settles trade disputes'],
    ['Soft power', 'Influence through culture, values and media'],
    ['Thematic risk', 'Known risks that evolve over time, e.g. climate change']
  ] },
  tf: [
    { s: 'Multinational companies are examples of state actors.', a: 'False', e: 'They are non-state actors.' },
    { s: 'Countries with fewer natural resources may have a greater incentive to cooperate with others.', a: 'True', e: 'They need trade to secure essential resources.' },
    { s: 'Hegemony combines non-cooperation with globalisation.', a: 'True', e: 'A dominant, globally engaged power acting on its own terms.' },
    { s: 'An election scheduled for a known date is an example of exogenous risk.', a: 'False', e: 'Known-date developments are event risks.' },
    { s: 'Low-velocity geopolitical risks are most relevant to long-term strategic asset allocation.', a: 'True', e: 'They reshape valuations gradually.' },
    { s: 'The World Bank\'s primary role is to settle trade disputes.', a: 'False', e: 'That is the WTO. The World Bank finances development.' },
    { s: 'Economic sanctions are a non-cooperative tool of geopolitics.', a: 'True', e: 'They are a financial/economic tool used to coerce.' },
    { s: 'Globalisation benefits all groups within a country equally.', a: 'False', e: 'Gains are often unevenly distributed, which can increase inequality.' }
  ],
  classify: {
    choices: ['Event risk', 'Exogenous risk', 'Thematic risk'],
    intro: 'Classify each geopolitical risk.',
    items: [
      { s: 'A national election scheduled for next spring', a: 'Event risk', e: 'Known date.' },
      { s: 'A sudden military invasion of a neighbouring country', a: 'Exogenous risk', e: 'Unanticipated shock.' },
      { s: 'Climate change and the transition to a low-carbon economy', a: 'Thematic risk', e: 'Known and evolving over time.' },
      { s: 'A scheduled legislative vote on ratifying a trade agreement', a: 'Event risk', e: 'Known timing.' },
      { s: 'An unexpected coup that overthrows a government', a: 'Exogenous risk', e: 'Sudden and unforeseen.' },
      { s: 'Ongoing state-sponsored cyber attacks on infrastructure', a: 'Thematic risk', e: 'A persistent, evolving threat.' },
      { s: 'A referendum on leaving an economic union', a: 'Event risk', e: 'Known date (e.g. Brexit, 2016).' },
      { s: 'A major terrorist attack in a financial centre', a: 'Exogenous risk', e: 'Sudden and unanticipated.' },
      { s: 'Long-running technological rivalry between two major powers', a: 'Thematic risk', e: 'Develops over years.' }
    ]
  },
  caseStudy: { html: caseHtml }
});
})();
