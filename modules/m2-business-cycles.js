/* LM2: Understanding Business Cycles */
(() => {
// Build the business-cycle wave paths once (trend + sine wave)
const trend = x => 250 - 0.22 * (x - 60);
function wave(shift = 0, amp = 48, period = 280, x0 = 160) {
  let d = '';
  for (let x = 70; x <= 550; x += 4) {
    const y = trend(x) - amp * Math.sin(2 * Math.PI * (x - x0 - shift) / period);
    d += (d ? ' L' : 'M') + x + ' ' + y.toFixed(1);
  }
  return d;
}
const yAt = x => (trend(x) - 48 * Math.sin(2 * Math.PI * (x - 160) / 280)).toFixed(1);

const overview = `
<h2>What is the business cycle?</h2>
<div class="callout">
  The <strong>business cycle</strong> is the recurring rise and fall of aggregate economic activity (output, employment, income, spending) around its long-run <strong>trend</strong> (potential GDP). Cycles are recurrent but <strong>not periodic</strong>: they vary in length and depth.
</div>
<div class="callout cfa"><strong>CFA exam focus.</strong> Describe the phases of the cycle; explain how resource use, consumer and business activity, housing and external trade change through it; use leading, coincident and lagging indicators; describe types of unemployment and inflation, including price index construction; and describe credit cycles.</div>

<h3>The four phases</h3>
<div class="grid">
  <div class="card"><span class="tag ext">Phase 1</span><h4>Recovery</h4><p>The economy passes the <strong>trough</strong>. Output is still <em>below</em> potential but starts to grow. Unemployment is high but stops rising; inflation is low or falling.</p></div>
  <div class="card"><span class="tag">Phase 2</span><h4>Expansion</h4><p>Output rises <em>above</em> trend. Hiring, investment and confidence pick up. Spare capacity is used up and <strong>inflation pressure builds</strong>.</p></div>
  <div class="card"><span class="tag" style="background:var(--bad-soft);color:var(--warn)">Phase 3</span><h4>Slowdown</h4><p>After the <strong>peak</strong>, growth slows while output is still above trend. Inflation is often at its highest; central banks may be tightening.</p></div>
  <div class="card"><span class="tag dis">Phase 4</span><h4>Contraction</h4><p>Output <strong>declines</strong> and falls below trend. A significant, broad-based contraction is a <strong>recession</strong>. Unemployment rises and inflation eases.</p></div>
</div>
<p class="muted">A common rule of thumb defines a recession as two consecutive quarters of negative real GDP growth. In the US the NBER dating committee looks more broadly at employment, income, sales and production.</p>

<h3>Credit cycles</h3>
<p><strong>Credit cycles</strong> are the expansion and contraction of credit availability. When asset prices and confidence rise, lenders loosen standards; when defaults rise, they tighten. Credit cycles tend to be <strong>longer and deeper</strong> than business cycles. When the two coincide, booms get stronger and busts get more severe, as in the 2007–09 Global Financial Crisis.</p>

<h3>Why investors care</h3>
<ul>
  <li><strong>Earnings:</strong> cyclical sectors (autos, materials, industrials) swing far more than defensives (utilities, staples, healthcare).</li>
  <li><strong>Interest rates:</strong> central banks lean against the cycle, which moves bond yields and the yield curve.</li>
  <li><strong>Credit spreads</strong> widen in contractions as default risk rises, and narrow in expansions.</li>
</ul>`;

const concepts = `
<h2>Key concepts</h2>

<h3>How activity changes through the cycle</h3>
<div class="card table-wrap">
  <table class="text">
    <thead><tr><th></th><th>Recovery</th><th>Expansion</th><th>Slowdown</th><th>Contraction</th></tr></thead>
    <tbody>
      <tr><td><strong>Business investment</strong></td><td>Starts with cheap, short-lived items (software, tech)</td><td>Broadens to plant &amp; heavy equipment</td><td>Still strong; orders start to slow</td><td>Cut sharply, especially large projects</td></tr>
      <tr><td><strong>Inventories / inventory-sales ratio</strong></td><td>Ratio falls as sales recover faster than production</td><td>Restocking boosts output</td><td>Ratio starts rising as sales slow</td><td>Ratio rises, then firms destock, deepening the downturn</td></tr>
      <tr><td><strong>Labour</strong></td><td>Overtime &amp; temporary hiring first; unemployment still high</td><td>Hiring broadens; unemployment falls</td><td>Hiring slows; unemployment at cycle low</td><td>Hours cut first, then layoffs</td></tr>
      <tr><td><strong>Consumers</strong></td><td>Durables (cars, appliances) rebound first</td><td>Spending broad-based</td><td>Durables slow</td><td>Durables &amp; discretionary cut; staples stable</td></tr>
      <tr><td><strong>Housing</strong></td><td>Revives as mortgage rates are low</td><td>Strong; prices rise</td><td>Slows as rates rise</td><td>Weak; sensitive to rates and income</td></tr>
      <tr><td><strong>External trade</strong></td><td colspan="4">Strong domestic growth → <strong>imports rise</strong>. Strong <em>foreign</em> growth → exports rise. A stronger domestic currency reduces exports and raises imports.</td></tr>
    </tbody>
  </table>
</div>

<h3>Economic indicators</h3>
<div class="grid">
  <div class="card"><span class="tag">Leading</span><h4>Turn <em>before</em> the economy</h4><p>Average weekly hours (manufacturing), initial jobless claims, new orders, building permits, stock prices, the interest-rate spread (10-year minus policy rate), consumer expectations, the leading credit index.</p></div>
  <div class="card"><span class="tag ext">Coincident</span><h4>Move <em>with</em> the economy</h4><p>Non-farm payrolls, personal income less transfer payments, industrial production, manufacturing &amp; trade sales.</p></div>
  <div class="card"><span class="tag dis">Lagging</span><h4>Turn <em>after</em> the economy</h4><p>Average duration of unemployment, inventory-to-sales ratio, change in unit labour costs, average prime rate, commercial &amp; industrial loans outstanding, consumer credit-to-income ratio, change in CPI for services.</p></div>
</div>
<p class="muted">Composite indexes, such as the Conference Board LEI, combine several indicators to reduce false signals. Nowcasting and diffusion indexes are also used.</p>

<h3>Unemployment</h3>
<div class="grid">
  <div class="card"><h4>Measures</h4>
    <p><span class="formula">Labour force = employed + unemployed</span></p>
    <p><span class="formula">Unemployment rate = unemployed ÷ labour force</span></p>
    <p><span class="formula">Participation rate = labour force ÷ working-age population</span></p></div>
  <div class="card"><h4>Types</h4><ul style="margin:0;padding-left:18px">
    <li><strong>Frictional:</strong> time taken to match workers with jobs</li>
    <li><strong>Structural:</strong> long-term changes such as technology, or skills/location mismatch</li>
    <li><strong>Cyclical:</strong> caused by weak aggregate demand; zero at full employment</li></ul></div>
  <div class="card"><h4>Measurement issues</h4><ul style="margin:0;padding-left:18px">
    <li><strong>Discouraged workers</strong> stop looking and leave the labour force, so the unemployment rate <em>understates</em> slack</li>
    <li><strong>Underemployed:</strong> working part-time or below their skill level, but counted as employed</li>
    <li>Unemployment is a <strong>lagging</strong> indicator: firms hesitate to hire early in a recovery</li></ul></div>
</div>

<h3>Inflation</h3>
<div class="grid">
  <div class="card"><h4>Definitions</h4><ul style="margin:0;padding-left:18px">
    <li><strong>Inflation:</strong> sustained rise in the general price level</li>
    <li><strong>Disinflation:</strong> inflation <em>slows</em> but stays positive (6% → 3%)</li>
    <li><strong>Deflation:</strong> the price level <em>falls</em> (negative inflation)</li>
    <li><strong>Hyperinflation:</strong> extremely high, accelerating inflation</li></ul></div>
  <div class="card"><h4>Measures</h4><ul style="margin:0;padding-left:18px">
    <li><strong>Headline</strong> vs <strong>core</strong> (excludes volatile food &amp; energy)</li>
    <li><strong>CPI</strong> (consumer basket), <strong>PPI</strong> (producer/wholesale), PCE deflator, GDP deflator</li></ul></div>
  <div class="card"><h4>Causes</h4><ul style="margin:0;padding-left:18px">
    <li><strong>Cost-push:</strong> rising input costs (wages, commodities)</li>
    <li><strong>Demand-pull:</strong> demand exceeds potential output</li>
    <li>Watch unit labour costs and the gap between unemployment and NAIRU</li></ul></div>
</div>

<h3>Price indexes</h3>
<p><span class="formula">Laspeyres = Σ(P<sub>1</sub>Q<sub>0</sub>) ÷ Σ(P<sub>0</sub>Q<sub>0</sub>) × 100</span> uses a fixed base-period basket (most CPIs). <span class="formula">Paasche = Σ(P<sub>1</sub>Q<sub>1</sub>) ÷ Σ(P<sub>0</sub>Q<sub>1</sub>) × 100</span> uses the current basket. <span class="formula">Fisher = √(Laspeyres × Paasche)</span></p>
<p>A Laspeyres index tends to <strong>overstate</strong> the cost of living because of:</p>
<ul>
  <li><strong>Substitution bias:</strong> consumers switch to goods whose prices rose less</li>
  <li><strong>Quality bias:</strong> part of the price rise pays for better quality</li>
  <li><strong>New-product bias:</strong> new goods enter the basket late</li>
</ul>
<p class="muted">Chained indexes and hedonic pricing are used to reduce these biases.</p>`;

const diagrams = `
<h2>Diagrams</h2>

<h3>Figure 1: Phases of the business cycle</h3>
<figure>
  <div class="fig-wrap">
    <svg viewBox="0 0 600 330" role="img" aria-label="A wave oscillating around a rising trend line. From the trough the economy enters recovery, crosses above trend into expansion, reaches a peak, enters slowdown, crosses below trend into contraction, and reaches the next trough.">
      <rect x="90" y="20" width="70" height="270" style="fill:var(--zone2)"/>
      <rect x="160" y="20" width="70" height="270" style="fill:var(--zone1)"/>
      <rect x="230" y="20" width="70" height="270" style="fill:rgba(161,92,0,.08)"/>
      <rect x="300" y="20" width="70" height="270" style="fill:var(--zone3)"/>
      <text x="125" y="38" text-anchor="middle" font-size="12" font-weight="700">Recovery</text>
      <text x="195" y="38" text-anchor="middle" font-size="12" font-weight="700" style="fill:var(--accent)">Expansion</text>
      <text x="265" y="38" text-anchor="middle" font-size="12" font-weight="700" style="fill:var(--warn)">Slowdown</text>
      <text x="335" y="38" text-anchor="middle" font-size="12" font-weight="700" style="fill:var(--bad)">Contraction</text>
      <path class="axis" d="M60 20 V290 H580"/>
      <path class="dash" d="M60 250 L580 135.6"/>
      <text x="470" y="185" font-size="12" class="muted-text">Trend (potential GDP)</text>
      <path class="curve" d="${wave()}"/>
      <circle class="dot" cx="230" cy="${yAt(230)}" r="5"/>
      <text x="230" y="${yAt(230) - 12}" text-anchor="middle" font-size="12" font-weight="700">Peak</text>
      <circle class="dot" cx="90" cy="${yAt(90)}" r="5"/>
      <text x="90" y="${+yAt(90) + 20}" text-anchor="middle" font-size="12" font-weight="700">Trough</text>
      <circle class="dot" cx="370" cy="${yAt(370)}" r="5"/>
      <text x="370" y="${+yAt(370) + 20}" text-anchor="middle" font-size="12" font-weight="700">Trough</text>
      <text x="320" y="315" text-anchor="middle" font-size="12" class="muted-text">Time →</text>
      <text x="26" y="155" text-anchor="middle" font-size="12" class="muted-text" transform="rotate(-90 26 155)">Real GDP →</text>
    </svg>
  </div>
  <figcaption>The phase depends on two things: whether output is <strong>above or below trend</strong> (the output gap) and whether it is <strong>rising or falling</strong>.</figcaption>
</figure>

<h3>Figure 2: Leading, coincident and lagging indicators</h3>
<figure>
  <div class="fig-wrap">
    <svg viewBox="0 0 600 300" role="img" aria-label="Three similar waves. The leading indicator peaks first, the coincident indicator peaks with the economy, and the lagging indicator peaks last.">
      <path class="axis" d="M60 20 V270 H580"/>
      <path class="curve2" d="${wave(-45, 40).replace(/(\d+\.?\d*) (\d+\.?\d*)/g, (m, x, y) => x + ' ' + (+y - 80).toFixed(1))}"/>
      <path class="curve" d="${wave(0, 40).replace(/(\d+\.?\d*) (\d+\.?\d*)/g, (m, x, y) => x + ' ' + (+y - 50).toFixed(1))}"/>
      <path class="curve3" d="${wave(45, 40).replace(/(\d+\.?\d*) (\d+\.?\d*)/g, (m, x, y) => x + ' ' + (+y - 20).toFixed(1))}"/>
      <path class="dash" d="M185 20 V270"/>
      <path class="dash" d="M230 20 V270"/>
      <path class="dash" d="M275 20 V270"/>
      <text x="185" y="286" text-anchor="middle" font-size="11" style="fill:var(--curve2)" font-weight="700">leads</text>
      <text x="230" y="286" text-anchor="middle" font-size="11" style="fill:var(--curve)" font-weight="700">economy peaks</text>
      <text x="282" y="286" text-anchor="start" font-size="11" style="fill:var(--curve3)" font-weight="700">lags</text>
      <g font-size="12" font-weight="700">
        <rect x="420" y="26" width="12" height="4" style="fill:var(--curve2)"/><text x="438" y="32">Leading</text>
        <rect x="420" y="44" width="12" height="4" style="fill:var(--curve)"/><text x="438" y="50">Coincident</text>
        <rect x="420" y="62" width="12" height="4" style="fill:var(--curve3)"/><text x="438" y="68">Lagging</text>
      </g>
    </svg>
  </div>
  <figcaption>Leading indicators help forecast turning points. Coincident indicators confirm where the economy is now. Lagging indicators confirm the turn after it has happened.</figcaption>
</figure>

<h3>Figure 3: Inflation vocabulary on one line</h3>
<figure>
  <div class="fig-wrap">
    <svg viewBox="0 0 600 150" role="img" aria-label="A number line of inflation rates showing deflation below zero, disinflation as a fall from higher to lower positive inflation, and hyperinflation at the extreme right.">
      <path class="axis" d="M40 80 H570"/>
      <path class="dash" d="M150 50 V110"/>
      <text x="150" y="128" text-anchor="middle" font-size="12" font-weight="700">0%</text>
      <rect x="40" y="70" width="110" height="20" class="fill-bad"/>
      <text x="95" y="60" text-anchor="middle" font-size="12" font-weight="700" style="fill:var(--bad)">Deflation</text>
      <path class="curve" d="M330 80 H220" marker-end="url(#arr2)"/>
      <circle class="dot" cx="330" cy="80" r="5"/>
      <text x="275" y="60" text-anchor="middle" font-size="12" font-weight="700" style="fill:var(--accent)">Disinflation (6% → 3%)</text>
      <rect x="470" y="70" width="100" height="20" class="fill-bad"/>
      <text x="520" y="60" text-anchor="middle" font-size="12" font-weight="700" style="fill:var(--bad)">Hyperinflation</text>
      <text x="300" y="128" text-anchor="middle" font-size="12" class="muted-text">Inflation rate →</text>
      <defs><marker id="arr2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" style="fill:var(--curve)"/></marker></defs>
    </svg>
  </div>
</figure>`;

const lab = `
<h2>Inflation &amp; unemployment lab</h2>

<div class="card">
  <h3 style="margin-top:0">Tool 1: Build a price index</h3>
  <p class="muted">Edit prices (P) and quantities (Q) for the base and current periods. Notice how Laspeyres exceeds Paasche when consumers substitute away from goods whose prices rose most.</p>
  <div class="table-wrap">
    <table id="pxTable">
      <thead><tr><th>Good</th><th>P₀ (base)</th><th>Q₀ (base)</th><th>P₁ (current)</th><th>Q₁ (current)</th><th>Price change</th></tr></thead>
      <tbody></tbody>
    </table>
  </div>
  <div class="readout" style="grid-template-columns:repeat(auto-fit,minmax(150px,1fr));margin-top:14px">
    <div><span>Laspeyres index</span><strong id="ixL"></strong></div>
    <div><span>Paasche index</span><strong id="ixP"></strong></div>
    <div><span>Fisher index</span><strong id="ixF"></strong></div>
    <div><span>Substitution bias (L − P)</span><strong id="ixB"></strong></div>
  </div>
</div>

<div class="card">
  <h3 style="margin-top:0">Tool 2: Labour market calculator</h3>
  <div class="lab">
    <div>
      <div class="control"><label for="uPop">Working-age population (m) <output id="uPopO"></output></label><input type="range" id="uPop" min="20" max="100" step="1" value="50"></div>
      <div class="control"><label for="uEmp">Employed (m) <output id="uEmpO"></output></label><input type="range" id="uEmp" min="5" max="80" step="0.5" value="30"></div>
      <div class="control"><label for="uUn">Unemployed, actively searching (m) <output id="uUnO"></output></label><input type="range" id="uUn" min="0" max="10" step="0.1" value="1.5"></div>
      <div class="control"><label for="uDis">Discouraged workers who stop searching (m) <output id="uDisO"></output></label><input type="range" id="uDis" min="0" max="2" step="0.1" value="0"></div>
    </div>
    <div>
      <div class="readout">
        <div><span>Labour force</span><strong id="uLF"></strong></div>
        <div><span>Unemployment rate</span><strong id="uRate"></strong></div>
        <div><span>Participation rate</span><strong id="uPart"></strong></div>
        <div><span>Not in labour force</span><strong id="uNILF"></strong></div>
      </div>
      <div class="verdict" id="uNote"></div>
    </div>
  </div>
</div>`;

function initLab(el) {
  const f = window.Econ.fmt;
  const goods = [
    ['Bread', 2.00, 100, 2.20, 95],
    ['Apples', 1.00, 200, 1.30, 160],
    ['Fuel', 3.00, 50, 3.30, 52]
  ];
  const tb = el.querySelector('#pxTable tbody');
  tb.innerHTML = goods.map((g, i) => `<tr><td>${g[0]}</td>${[1, 2, 3, 4].map(j =>
    `<td><input class="num-input" style="max-width:96px" type="number" step="any" min="0" data-r="${i}" data-c="${j}" value="${g[j]}"></td>`).join('')}<td id="chg${i}"></td></tr>`).join('');
  function calcIx() {
    tb.querySelectorAll('input').forEach(inp => { goods[inp.dataset.r][inp.dataset.c] = Math.max(0, +inp.value || 0); });
    let p1q0 = 0, p0q0 = 0, p1q1 = 0, p0q1 = 0;
    goods.forEach(([, p0, q0, p1, q1], i) => {
      p1q0 += p1 * q0; p0q0 += p0 * q0; p1q1 += p1 * q1; p0q1 += p0 * q1;
      el.querySelector('#chg' + i).textContent = p0 ? ((p1 / p0 - 1) * 100).toFixed(1) + '%' : '—';
    });
    const L = p0q0 ? p1q0 / p0q0 * 100 : 0, P = p0q1 ? p1q1 / p0q1 * 100 : 0, F = Math.sqrt(L * P);
    el.querySelector('#ixL').textContent = f(L) + `  (${f(L - 100, 1)}% inflation)`;
    el.querySelector('#ixP').textContent = f(P) + `  (${f(P - 100, 1)}%)`;
    el.querySelector('#ixF').textContent = f(F) + `  (${f(F - 100, 1)}%)`;
    el.querySelector('#ixB').textContent = f(L - P) + ' pts';
  }
  tb.addEventListener('input', calcIx);
  calcIx();

  const ids = ['uPop', 'uEmp', 'uUn', 'uDis'];
  const r = Object.fromEntries(ids.map(id => [id, el.querySelector('#' + id)]));
  function calcU() {
    const pop = +r.uPop.value, emp = +r.uEmp.value;
    const dis = Math.min(+r.uDis.value, +r.uUn.value);
    const un = +r.uUn.value - dis;
    ids.forEach(id => el.querySelector('#' + id + 'O').textContent = (+r[id].value).toFixed(1));
    const lf = emp + un;
    const v = el.querySelector('#uNote');
    if (lf > pop) { v.className = 'verdict bad'; v.textContent = 'Employed + unemployed exceeds the working-age population. Please adjust the sliders.'; return; }
    el.querySelector('#uLF').textContent = lf.toFixed(1) + 'm';
    el.querySelector('#uRate').textContent = (un / lf * 100).toFixed(2) + '%';
    el.querySelector('#uPart').textContent = (lf / pop * 100).toFixed(1) + '%';
    el.querySelector('#uNILF').textContent = (pop - lf).toFixed(1) + 'm';
    const base = (+r.uUn.value) / (emp + +r.uUn.value) * 100;
    v.className = 'verdict' + (dis > 0 ? ' bad' : '');
    v.innerHTML = dis > 0
      ? `<strong>${dis.toFixed(1)}m discouraged workers</strong> left the labour force. The unemployment rate <em>fell</em> from ${base.toFixed(2)}% to ${(un / lf * 100).toFixed(2)}%, yet nobody found a job. This is why participation rates and broader measures (such as U-6 in the US) matter.`
      : 'Move the "discouraged workers" slider to see how the headline unemployment rate can fall without anyone finding work.';
  }
  ids.forEach(id => r[id].addEventListener('input', calcU));
  calcU();
}

const examples = `
<h2>Business cycles in the real world</h2>
<div class="grid">
  <div class="card"><div class="icon" aria-hidden="true">🏦</div><span class="tag dis">Credit cycle</span><h4>Global Financial Crisis (2007–09)</h4><p>Loose lending fuelled a US housing boom. When it reversed, the credit bust turned a slowdown into the deepest recession since the 1930s. The NBER dates it from December 2007 to June 2009: 18 months.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🦠</div><span class="tag dis">Exogenous shock</span><h4>COVID-19 recession (2020)</h4><p>The NBER dated the US peak at February 2020 and the trough at April 2020. At two months it was the shortest US recession on record, but output and jobs collapsed at unprecedented speed.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🔥</div><span class="tag">Inflation</span><h4>The 2021–22 inflation surge</h4><p>Supply-chain bottlenecks and energy prices (<strong>cost-push</strong>) combined with stimulus-fuelled spending (<strong>demand-pull</strong>). US CPI inflation peaked at 9.1% year-on-year in June 2022, the highest in about 40 years.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">📉</div><span class="tag">Leading indicator</span><h4>The long yield-curve inversion</h4><p>The US 10-year minus 2-year spread inverted in mid-2022 and stayed inverted for about two years. It has preceded most past US recessions, but no recession followed in 2023–24. Even good leading indicators give false signals.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🗾</div><span class="tag">Deflation</span><h4>Japan's "lost decades"</h4><p>After its asset bubble burst in the early 1990s, Japan saw long stretches of flat or falling prices. Consumers delayed purchases and real debt burdens rose, which shows why central banks fear deflation.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">💸</div><span class="tag dis">Hyperinflation</span><h4>Zimbabwe (2008) &amp; Venezuela</h4><p>Money printing to fund government deficits caused prices to double in days. Zimbabwe abandoned its own currency in 2009. Hyperinflation destroys savings and the economy's ability to use money.</p></div>
</div>

<h3>Quick recap</h3>
<div class="card table-wrap">
  <table class="text">
    <thead><tr><th>Concept</th><th>Key point</th></tr></thead>
    <tbody>
      <tr><td>Phases</td><td>Recovery → Expansion → Slowdown → Contraction</td></tr>
      <tr><td>Inventory-sales ratio</td><td>Rises early in a contraction and is a lagging indicator</td></tr>
      <tr><td>Unemployment rate</td><td>Lagging; understated when discouraged workers leave the labour force</td></tr>
      <tr><td>Laspeyres CPI</td><td>Overstates inflation (substitution, quality, new-product biases)</td></tr>
      <tr><td>Disinflation vs deflation</td><td>Slower price rises vs falling prices</td></tr>
    </tbody>
  </table>
</div>`;

const caseHtml = `
<h2>Case study: Reading Veridia's cycle</h2>
<div class="card">
  <p>You are an analyst covering the (fictional) economy of <strong>Veridia</strong>. The latest data:</p>
  <ul>
    <li>Real GDP growth has slowed from 3.5% to 1.2% over four quarters. Output is still slightly above estimated potential.</li>
    <li>The unemployment rate is 3.8%, a 20-year low, but initial jobless claims have risen for three months.</li>
    <li>Building permits have fallen for three months; the inventory-to-sales ratio is rising.</li>
    <li>Headline CPI is 5.0% and core CPI is 4.5%. Unit labour costs are rising quickly.</li>
    <li>Labour statistics: working-age population 50m, employed 30m, unemployed 1.5m.</li>
  </ul>
</div>
<p class="muted">Write your answers (notes are saved in this browser), then compare with the model answers.</p>

<div class="q">
  <div class="q-num">Question 1 · 3 marks</div>
  <div class="q-text">Which phase of the business cycle is Veridia most likely in? Use the indicators to justify your answer.</div>
  <textarea aria-label="Your answer to question 1"></textarea>
  <button class="btn reveal" style="margin-top:8px">Show model answer</button>
  <div class="model" hidden>
    <p><strong>Slowdown</strong> (late cycle). Growth is slowing but output is still above potential. The <em>leading</em> indicators (jobless claims, building permits) are turning down, while the <em>lagging</em> ones are still at cycle extremes: unemployment at a low, the inventory-sales ratio just starting to rise, and high inflation. That pattern fits the period just after a peak.</p>
  </div>
</div>

<div class="q">
  <div class="q-num">Question 2 · 4 marks</div>
  <div class="q-text">Calculate the labour force, unemployment rate and participation rate. Then recalculate the unemployment rate if 0.5m of the unemployed become discouraged and stop searching. Comment.</div>
  <textarea aria-label="Your answer to question 2"></textarea>
  <button class="btn reveal" style="margin-top:8px">Show model answer</button>
  <div class="model" hidden>
    <p>Labour force = 30 + 1.5 = <strong>31.5m</strong>. Unemployment rate = 1.5 ÷ 31.5 = <strong>4.76%</strong>. Participation = 31.5 ÷ 50 = <strong>63%</strong>.</p>
    <p>With 0.5m discouraged: labour force = 31.0m, unemployed = 1.0m → rate = <strong>3.23%</strong>. The rate falls even though nobody found work, so the headline rate <em>understates</em> labour-market weakness. Analysts should also check the participation rate and broader measures.</p>
  </div>
</div>

<div class="q">
  <div class="q-num">Question 3 · 4 marks</div>
  <div class="q-text">Is Veridia's inflation more likely cost-push or demand-pull? What would you expect to happen to inflation and unemployment over the next year if the slowdown turns into a contraction?</div>
  <textarea aria-label="Your answer to question 3"></textarea>
  <button class="btn reveal" style="margin-top:8px">Show model answer</button>
  <div class="model" hidden>
    <p>Mostly <strong>demand-pull</strong> with a cost-push element. Output above potential and very low unemployment point to excess demand. Rising unit labour costs (wage pressure) add a cost-push channel. Core inflation (4.5%) close to headline (5.0%) suggests it is broad-based, not just food and energy.</p>
    <p>In a contraction, unemployment would rise, but with a <strong>lag</strong>. Inflation would probably slow (<strong>disinflation</strong>), and services inflation, itself a lagging indicator, would fall last.</p>
  </div>
</div>`;

window.MODULES.push({
  id: 'm2', lm: 2, lmTitle: 'Understanding Business Cycles',
  title: 'Business Cycles',
  subtitle: 'Phases, indicators, unemployment, inflation and credit cycles.',
  learn: [
    { id: 'overview', label: 'Overview', html: overview },
    { id: 'concepts', label: 'Key Concepts', html: concepts },
    { id: 'diagrams', label: 'Diagrams', html: diagrams },
    { id: 'lab', label: 'Lab', html: lab, init: initLab },
    { id: 'examples', label: 'Real World', html: examples }
  ],
  mcq: [
    { q: 'An economy is past its trough. Output is still below potential but has started to grow. This phase is best described as:', o: ['Expansion', 'Recovery', 'Slowdown', 'Contraction'], a: 1, e: 'Recovery begins at the trough: growth resumes while a negative output gap remains.' },
    { q: 'At the start of a contraction, the inventory-to-sales ratio typically:', o: ['Falls sharply', 'Rises, because sales fall faster than firms can cut production', 'Remains constant', 'Becomes negative'], a: 1, e: 'Unsold goods pile up as sales slow, so the ratio rises. Firms then cut production, which deepens the downturn. The ratio is a lagging indicator.' },
    { q: 'The unemployment rate is generally classified as a:', o: ['Leading indicator', 'Coincident indicator', 'Lagging indicator', 'Sentiment indicator'], a: 2, e: 'Firms first cut hours before laying off, and use overtime before hiring, so unemployment turns after the economy does. (Average duration of unemployment is the official lagging component.)' },
    { q: 'How do discouraged workers affect the measured unemployment rate?', o: ['They are counted as unemployed, overstating it', 'They leave the labour force, so the rate understates true slack', 'They are counted as employed', 'They have no effect on any labour measure'], a: 1, e: 'People who stop looking are not in the labour force, so the unemployment rate falls even though labour-market weakness has not improved.' },
    { q: 'Unemployment caused by a mismatch between workers\' skills and the jobs available is:', o: ['Frictional', 'Structural', 'Cyclical', 'Seasonal'], a: 1, e: 'Structural unemployment reflects long-term changes such as technology or industry shifts and needs retraining or relocation to fix.' },
    { q: 'A large rise in global oil prices that pushes up firms\' production costs is an example of:', o: ['Demand-pull inflation', 'Cost-push inflation', 'Deflation', 'Disinflation'], a: 1, e: 'Higher input costs shift aggregate supply left and push prices up from the cost side.' },
    { q: 'A Laspeyres price index tends to overstate increases in the cost of living mainly because of:', o: ['Substitution bias', 'Survivorship bias', 'Look-ahead bias', 'Sampling error'], a: 0, e: 'The fixed base-period basket ignores that consumers switch to goods whose prices rose less (plus quality and new-product biases).' },
    { q: 'Inflation falls from 6% to 2%. This is best described as:', o: ['Deflation', 'Disinflation', 'Hyperinflation', 'Stagflation'], a: 1, e: 'Prices are still rising, just more slowly. Deflation would require prices to fall (inflation below 0%).' },
    { q: 'Core inflation measures typically exclude:', o: ['Housing and medical care', 'Food and energy', 'Imported goods', 'Services'], a: 1, e: 'Food and energy prices are volatile, so excluding them gives a clearer view of the underlying trend.' },
    { q: 'Which type of consumer spending is typically MOST sensitive to the business cycle?', o: ['Basic groceries', 'Durable goods such as cars and appliances', 'Utilities', 'Healthcare'], a: 1, e: 'Durable purchases can be postponed, so they fall sharply in downturns and rebound strongly in recoveries.' },
    { q: 'A country\'s CPI rises from 250.0 to 260.0 over a year. The annual inflation rate is:', o: ['10.0%', '4.0%', '3.8%', '2.6%'], a: 1, e: '260 ÷ 250 − 1 = <strong>4.0%</strong>.' },
    { q: 'Compared with business cycles, credit cycles tend to be:', o: ['Shorter and milder', 'Longer and deeper, amplifying booms and busts when they coincide', 'Unrelated to asset prices', 'Driven only by fiscal policy'], a: 1, e: 'Credit expansions feed asset-price booms and contractions deepen recessions. Credit cycles last longer and swing more than business cycles.' }
  ],
  match: { pairs: [
    ['Recovery', 'Past the trough; output below potential but starting to grow'],
    ['Expansion', 'Output above trend and rising; inflation pressure building'],
    ['Slowdown', 'Growth slowing after the peak while output is still above trend'],
    ['Contraction', 'Output falling; called a recession if severe and broad-based'],
    ['Leading indicator', 'Turns before the economy, e.g. building permits'],
    ['Lagging indicator', 'Turns after the economy, e.g. average duration of unemployment'],
    ['Structural unemployment', 'Mismatch between workers\' skills or location and available jobs'],
    ['Disinflation', 'Inflation rate declines but stays positive'],
    ['Substitution bias', 'Fixed-basket index ignores consumers switching to cheaper goods']
  ] },
  tf: [
    { s: 'The unemployment rate often keeps rising for a while after the economy has started to recover.', a: 'True', e: 'Unemployment is a lagging indicator: firms use overtime and temporary staff before hiring.' },
    { s: 'A person who has given up looking for work is counted as unemployed.', a: 'False', e: 'Discouraged workers are outside the labour force.' },
    { s: 'Deflation means that the rate of inflation is falling.', a: 'False', e: 'That is disinflation. Deflation means the price level itself is falling.' },
    { s: 'A Laspeyres index tends to overstate inflation because of substitution, quality and new-product biases.', a: 'True', e: 'It holds the base-period basket fixed.' },
    { s: 'Strong domestic economic growth tends to increase imports.', a: 'True', e: 'Higher incomes raise demand for all goods, including imported ones.' },
    { s: 'Core inflation includes food and energy prices.', a: 'False', e: 'Core inflation excludes them because they are volatile.' },
    { s: 'Leading indicators reliably predict every recession with no false signals.', a: 'False', e: 'They help but do give false signals. The 2022–24 US yield-curve inversion is a recent example.' },
    { s: 'Housing activity is highly sensitive to interest rates and tends to lead the cycle.', a: 'True', e: 'Mortgage costs drive housing demand, so building permits are a leading indicator.' }
  ],
  classify: {
    choices: ['Leading', 'Coincident', 'Lagging'],
    intro: 'Classify each economic indicator by when it typically turns relative to the business cycle.',
    items: [
      { s: 'Building permits for new private housing units', a: 'Leading', e: 'Permits are issued before construction activity begins.' },
      { s: 'Average weekly initial claims for unemployment insurance', a: 'Leading', e: 'Layoff claims rise before the broader economy weakens.' },
      { s: 'Industrial production index', a: 'Coincident', e: 'Measures current output.' },
      { s: 'Average duration of unemployment', a: 'Lagging', e: 'Keeps rising after a recovery has begun.' },
      { s: 'Ratio of inventories to sales', a: 'Lagging', e: 'Rises after sales have already fallen.' },
      { s: 'Stock market index (e.g., S&P 500)', a: 'Leading', e: 'Prices reflect expected future earnings.' },
      { s: 'Non-farm payroll employment', a: 'Coincident', e: 'Moves with current economic activity.' },
      { s: 'Average prime lending rate charged by banks', a: 'Lagging', e: 'Banks adjust rates after policy and conditions have changed.' },
      { s: 'Change in the CPI for services', a: 'Lagging', e: 'Services inflation responds slowly to changes in demand.' },
      { s: 'Personal income less transfer payments', a: 'Coincident', e: 'Tracks current earnings from economic activity.' }
    ]
  },
  caseStudy: { html: caseHtml }
});
})();
