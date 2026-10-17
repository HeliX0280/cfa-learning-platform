/* LM3: Fiscal Policy */
(() => {
// multiplier rounds for Figure 1: ΔG = 100, c = 0.8, t = 0.25 → each round is 0.6 × previous
const rounds = [...Array(8)].map((_, i) => 100 * Math.pow(0.6, i));
const roundBars = rounds.map((v, i) => {
  const x = 80 + i * 56, h = v * 2.2;
  return `<rect x="${x}" y="${260 - h}" width="40" height="${h}" rx="3" style="fill:var(--curve)"/>
    <text x="${x + 20}" y="${254 - h}" text-anchor="middle" font-size="11">${v.toFixed(v < 10 ? 1 : 0)}</text>
    <text x="${x + 20}" y="278" text-anchor="middle" font-size="11" class="muted-text">${i === 0 ? 'ΔG' : 'R' + i}</text>`;
}).join('');

const overview = `
<h2>What is fiscal policy?</h2>
<div class="callout">
  <strong>Fiscal policy</strong> is the government's use of <strong>spending</strong> and <strong>taxation</strong> to influence the economy. It is set by the legislature and the finance ministry (treasury), not the central bank.
</div>
<div class="callout cfa"><strong>CFA exam focus.</strong> Compare monetary and fiscal policy; describe the roles, objectives and tools of fiscal policy; explain arguments about the size of national debt; describe the limitations of fiscal policy (lags, Ricardian equivalence, crowding out); and determine whether a fiscal stance is expansionary or contractionary.</div>

<h3>Three roles of fiscal policy</h3>
<div class="grid">
  <div class="card"><div class="icon" aria-hidden="true">📈</div><h4>Stabilise the economy</h4><p>Influence aggregate demand to reduce swings in output, employment and prices. Spend more or tax less in a downturn, and the reverse in a boom.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">⚖️</div><h4>Redistribute income &amp; wealth</h4><p>Progressive taxes and transfer payments shift resources from richer to poorer households.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🏗️</div><h4>Allocate resources</h4><p>Provide public goods (defence, roads), tax harmful activities (tobacco, carbon) and subsidise beneficial ones (education, R&amp;D).</p></div>
</div>

<h3>The budget balance</h3>
<p><span class="formula">Budget balance = Tax revenue − Government spending</span></p>
<p>A <strong>deficit</strong> must be financed by borrowing, which adds to <strong>national debt</strong>. Analysts often compare debt and deficits with GDP (e.g. debt-to-GDP ratio) because a larger economy can carry more debt.</p>

<h3>Fiscal vs monetary policy</h3>
<div class="card table-wrap">
  <table class="text">
    <thead><tr><th></th><th>Fiscal policy</th><th>Monetary policy</th></tr></thead>
    <tbody>
      <tr><td><strong>Who</strong></td><td>Government (legislature / treasury)</td><td>Central bank</td></tr>
      <tr><td><strong>Tools</strong></td><td>Spending, taxes</td><td>Policy rate, open market operations, reserve requirements</td></tr>
      <tr><td><strong>Speed</strong></td><td>Slow to enact (political process), can act directly once passed</td><td>Quick to change, slower to transmit</td></tr>
      <tr><td><strong>Can target</strong></td><td>Specific sectors, regions or income groups</td><td>Economy-wide only</td></tr>
    </tbody>
  </table>
</div>`;

const concepts = `
<h2>Key concepts</h2>

<h3>Fiscal policy tools</h3>
<div class="grid">
  <div class="card"><span class="tag">Spending</span><h4>Transfer payments</h4><p>Welfare, pensions, unemployment benefits. These redistribute income but do not buy output directly.</p></div>
  <div class="card"><span class="tag">Spending</span><h4>Current spending</h4><p>Recurring purchases of goods and services: public-sector wages, healthcare, education supplies.</p></div>
  <div class="card"><span class="tag">Spending</span><h4>Capital spending</h4><p>Infrastructure such as roads, bridges, hospitals and schools. Raises the economy's <em>future</em> productive capacity.</p></div>
  <div class="card"><span class="tag ext">Revenue</span><h4>Direct taxes</h4><p>Levied on income and wealth: personal income tax, corporate tax, capital gains, wealth/inheritance taxes.</p></div>
  <div class="card"><span class="tag ext">Revenue</span><h4>Indirect taxes</h4><p>Levied on spending: VAT/GST, sales taxes, excise duties (fuel, alcohol, tobacco). Quick to change and harder to avoid.</p></div>
</div>

<h4 style="margin-top:20px">Desirable attributes of a tax policy</h4>
<ul>
  <li><strong>Simplicity:</strong> easy to comply with and enforce</li>
  <li><strong>Efficiency:</strong> distorts economic choices as little as possible</li>
  <li><strong>Fairness:</strong> <em>horizontal equity</em> (people in similar situations pay the same) and <em>vertical equity</em> (people with higher incomes pay more)</li>
  <li><strong>Revenue sufficiency:</strong> raises enough to fund spending</li>
</ul>

<h3>The fiscal multiplier</h3>
<p>Extra government spending becomes someone's income, part of which is spent again, and so on. With marginal propensity to consume <em>c</em> and tax rate <em>t</em>:</p>
<p><span class="formula">Fiscal multiplier = 1 ÷ [1 − c(1 − t)]</span></p>
<p>Example: c = 0.8, t = 0.25 → 1 ÷ (1 − 0.6) = <strong>2.5</strong>. A $100bn rise in spending raises GDP by up to $250bn.</p>
<ul>
  <li>A <strong>tax cut</strong> has a smaller effect than the same increase in spending, because part of the tax cut is saved: ΔY = c × ΔT × multiplier.</li>
  <li><strong>Balanced-budget multiplier:</strong> raising spending and taxes by the same amount still raises output, because some of the tax would have been saved. In the simple model the multiplier is 1.</li>
</ul>

<h3>Automatic vs discretionary policy</h3>
<div class="grid">
  <div class="card"><h4>Automatic stabilisers</h4><p>Built-in features that work <strong>without new legislation</strong>. In a recession, progressive tax revenue falls and unemployment benefits rise, cushioning demand. In a boom the reverse happens.</p></div>
  <div class="card"><h4>Discretionary policy</h4><p>Deliberate changes passed by government, such as a stimulus package or a tax hike. It is subject to long <strong>lags</strong>.</p></div>
</div>

<h3>Judging the fiscal stance</h3>
<p>A change in the actual deficit can be misleading, because a recession raises the deficit automatically. Use the <strong>structural (cyclically adjusted) budget deficit</strong>, the deficit that would exist at full employment. A rising structural deficit signals an <strong>expansionary</strong> stance; a falling one signals a <strong>contractionary</strong> stance.</p>

<h3>Limitations of fiscal policy</h3>
<div class="grid">
  <div class="card"><h4>Lags</h4><ul style="margin:0;padding-left:18px"><li><strong>Recognition:</strong> time to realise there is a problem</li><li><strong>Action:</strong> time to design and pass the policy</li><li><strong>Impact:</strong> time for the policy to affect the economy</li></ul></div>
  <div class="card"><h4>Ricardian equivalence</h4><p>If people expect a debt-financed tax cut to mean higher taxes later, they <strong>save</strong> the tax cut, so consumption and demand do not change.</p></div>
  <div class="card"><h4>Crowding out</h4><p>Government borrowing competes for savings and pushes up interest rates, which reduces <strong>private investment</strong> and offsets the stimulus.</p></div>
  <div class="card"><h4>Other problems</h4><p>Uncertainty about the size of the output gap; inflation if the economy is near full employment; supply shortages that stimulus cannot fix; and limited room when debt is already high.</p></div>
</div>

<h3>Should we worry about national debt?</h3>
<div class="grid">
  <div class="card"><span class="tag dis">Reasons for concern</span><ul style="margin:0;padding-left:18px">
    <li>Higher future taxes can reduce incentives to work and invest</li>
    <li>Loss of market confidence, rising yields and default risk</li>
    <li>Crowding out of private investment</li>
    <li>Temptation to monetise debt, causing inflation</li></ul></div>
  <div class="card"><span class="tag ext">Reasons for less concern</span><ul style="margin:0;padding-left:18px">
    <li>If the debt is owed to a country's own citizens, it is partly money "owed to ourselves"</li>
    <li>Debt that funds productive capital investment raises future output</li>
    <li>Deficits can be paired with tax reform that improves incentives</li>
    <li>Ricardian equivalence: private saving may offset government dissaving</li></ul></div>
</div>`;

const diagrams = `
<h2>Diagrams</h2>

<h3>Figure 1: The multiplier at work</h3>
<figure>
  <div class="fig-wrap">
    <svg viewBox="0 0 560 300" role="img" aria-label="Bars showing successive rounds of spending from a 100 billion increase in government spending, each round 60% of the previous one: 100, 60, 36, 21.6, 13, 7.8 and so on, adding up to 250.">
      <path class="axis" d="M70 30 V260 H540"/>
      ${roundBars}
      <text x="400" y="70" font-size="13" font-weight="700">Total ΔGDP = 100 ÷ (1 − 0.6)</text>
      <text x="400" y="90" font-size="13" font-weight="700" style="fill:var(--accent)">= 250</text>
      <text x="400" y="112" font-size="11" class="muted-text">c = 0.8, t = 0.25 → c(1 − t) = 0.6</text>
      <text x="305" y="296" text-anchor="middle" font-size="12" class="muted-text">Spending rounds →</text>
    </svg>
  </div>
  <figcaption>Each round, households keep (1 − t) of new income and spend fraction c of that, so each round is 60% of the last. The geometric series sums to 2.5 × the initial injection.</figcaption>
</figure>

<h3>Figure 2: Fiscal policy lags</h3>
<figure>
  <div class="fig-wrap">
    <svg viewBox="0 0 600 170" role="img" aria-label="Timeline: a shock hits the economy, then the recognition lag, action lag and impact lag pass before the policy affects output.">
      <defs><marker id="arr3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" style="fill:var(--axis)"/></marker></defs>
      <path class="link" d="M30 90 H575" marker-end="url(#arr3)"/>
      <circle cx="40" cy="90" r="7" style="fill:var(--bad)"/>
      <text x="40" y="70" text-anchor="middle" font-size="12" font-weight="700" style="fill:var(--bad)">Shock</text>
      <rect x="60" y="76" width="160" height="28" rx="6" class="box-accent"/><text x="140" y="95" text-anchor="middle" font-size="12" font-weight="700">Recognition lag</text>
      <rect x="225" y="76" width="160" height="28" rx="6" class="box-accent"/><text x="305" y="95" text-anchor="middle" font-size="12" font-weight="700">Action lag</text>
      <rect x="390" y="76" width="160" height="28" rx="6" class="box-accent"/><text x="470" y="95" text-anchor="middle" font-size="12" font-weight="700">Impact lag</text>
      <text x="140" y="128" text-anchor="middle" font-size="11" class="muted-text">Data arrive late and</text>
      <text x="140" y="142" text-anchor="middle" font-size="11" class="muted-text">are revised</text>
      <text x="305" y="128" text-anchor="middle" font-size="11" class="muted-text">Political debate,</text>
      <text x="305" y="142" text-anchor="middle" font-size="11" class="muted-text">legislation</text>
      <text x="470" y="128" text-anchor="middle" font-size="11" class="muted-text">Projects start,</text>
      <text x="470" y="142" text-anchor="middle" font-size="11" class="muted-text">multiplier unfolds</text>
      <text x="300" y="40" text-anchor="middle" font-size="12" class="muted-text">Risk: stimulus arrives after recovery has begun → overheating</text>
    </svg>
  </div>
</figure>

<h3>Figure 3: Expansionary fiscal policy and crowding out</h3>
<figure>
  <div class="fig-wrap">
    <svg viewBox="0 0 560 320" role="img" aria-label="Aggregate demand and supply diagram. Fiscal expansion shifts AD from AD1 to AD2, raising output and prices. Crowding out pulls it back partly to AD2 prime.">
      <path class="axis" d="M60 20 V290 H540"/>
      <path class="curve3" d="M110 270 C260 240 360 170 470 50"/>
      <text x="474" y="48" font-size="13" font-weight="700" style="fill:var(--curve3)">SRAS</text>
      <path class="curve" d="M90 70 L380 280"/>
      <text x="384" y="284" font-size="13" font-weight="700" style="fill:var(--curve)">AD₁</text>
      <path class="curve2" d="M170 50 L470 270"/>
      <text x="474" y="272" font-size="13" font-weight="700" style="fill:var(--curve2)">AD₂</text>
      <path class="curve2" d="M130 60 L425 275" style="stroke-dasharray:6 5;opacity:.75"/>
      <text x="408" y="296" font-size="12" font-weight="700" style="fill:var(--curve2)">AD₂′ (after crowding out)</text>
      <path class="link" d="M200 150 L250 150" marker-end="url(#arr3)"/>
      <text x="150" y="38" font-size="12" class="muted-text">↑G or ↓T shifts AD right; higher rates claw some of it back</text>
      <text x="300" y="314" text-anchor="middle" font-size="12" class="muted-text">Real GDP →</text>
      <text x="26" y="160" text-anchor="middle" font-size="12" class="muted-text" transform="rotate(-90 26 160)">Price level →</text>
    </svg>
  </div>
  <figcaption>Fiscal expansion raises output and the price level. If the economy is close to capacity (the steep part of SRAS), more of the effect shows up as <strong>inflation</strong> than as output.</figcaption>
</figure>`;

const lab = `
<h2>Multiplier lab</h2>
<p class="muted">Adjust the marginal propensity to consume, the tax rate and the policy change to see the effect on GDP and the budget.</p>
<div class="card lab">
  <div>
    <div class="control"><label for="fC">MPC (c) <output id="fCo"></output></label><input type="range" id="fC" min="0.5" max="0.95" step="0.01" value="0.8"></div>
    <div class="control"><label for="fT">Income tax rate (t) <output id="fTo"></output></label><input type="range" id="fT" min="0" max="0.5" step="0.01" value="0.25"></div>
    <div class="control"><label for="fG">Change in government spending ΔG ($bn) <output id="fGo"></output></label><input type="range" id="fG" min="-200" max="200" step="10" value="100"></div>
    <div class="control"><label for="fX">Change in lump-sum taxes ΔT ($bn) <output id="fXo"></output></label><input type="range" id="fX" min="-200" max="200" step="10" value="0"></div>
    <div class="readout">
      <div><span>Spending multiplier</span><strong id="fM"></strong></div>
      <div><span>Tax multiplier</span><strong id="fTM"></strong></div>
      <div><span>ΔGDP from ΔG</span><strong id="fYG"></strong></div>
      <div><span>ΔGDP from ΔT</span><strong id="fYT"></strong></div>
      <div><span>Total ΔGDP</span><strong id="fY"></strong></div>
      <div><span>Δ Budget balance</span><strong id="fB"></strong></div>
    </div>
  </div>
  <div>
    <svg id="fChart" viewBox="0 0 560 300" style="width:100%;height:auto" role="img" aria-label="Spending rounds generated by the policy change"></svg>
    <div class="verdict" id="fNote"></div>
  </div>
</div>
<div class="callout"><strong>Try this:</strong> set t = 0, ΔG = +100 and ΔT = +100. The total ΔGDP equals 100: the balanced-budget multiplier is 1. Then raise the tax rate and see how automatic stabilisers shrink the multiplier.</div>`;

function initLab(el) {
  const ids = ['fC', 'fT', 'fG', 'fX'];
  const r = Object.fromEntries(ids.map(id => [id, el.querySelector('#' + id)]));
  const money = v => (v < 0 ? '−$' : '$') + Math.abs(v).toFixed(1) + 'bn';
  function calc() {
    const c = +r.fC.value, t = +r.fT.value, dG = +r.fG.value, dT = +r.fX.value;
    el.querySelector('#fCo').textContent = c.toFixed(2);
    el.querySelector('#fTo').textContent = (t * 100).toFixed(0) + '%';
    el.querySelector('#fGo').textContent = money(dG);
    el.querySelector('#fXo').textContent = money(dT);
    const k = 1 / (1 - c * (1 - t));
    const yG = dG * k, yT = -c * dT * k, y = yG + yT;
    const dB = dT + t * y - dG;
    el.querySelector('#fM').textContent = k.toFixed(2) + '×';
    el.querySelector('#fTM').textContent = (-c * k).toFixed(2) + '×';
    el.querySelector('#fYG').textContent = money(yG);
    el.querySelector('#fYT').textContent = money(yT);
    el.querySelector('#fY').textContent = money(y);
    el.querySelector('#fB').textContent = money(dB);

    // rounds chart: initial injection = ΔG − cΔT, then × c(1−t) each round
    const first = dG - c * dT, ratio = c * (1 - t);
    const vals = [...Array(10)].map((_, i) => first * Math.pow(ratio, i));
    const maxAbs = Math.max(...vals.map(Math.abs), 1);
    const H = 220, base = first >= 0 ? 250 : 40;
    let s = `<line class="axis" x1="50" x2="540" y1="${base}" y2="${base}"/>`;
    vals.forEach((v, i) => {
      const h = Math.abs(v) / maxAbs * (H - 20), x = 60 + i * 48;
      const y0 = v >= 0 ? base - h : base;
      s += `<rect x="${x}" y="${y0}" width="36" height="${Math.max(h, 0.5)}" rx="3" style="fill:${v >= 0 ? 'var(--curve)' : 'var(--bad)'}" data-tip="Round ${i}: ${money(v)}"/>`;
      s += `<text x="${x + 18}" y="${first >= 0 ? 268 : 26}" text-anchor="middle" font-size="11" class="muted-text">${i === 0 ? 'Start' : 'R' + i}</text>`;
    });
    s += `<text x="540" y="${first >= 0 ? 30 : 285}" text-anchor="end" font-size="12" font-weight="700">Sum of all rounds = ${money(y)}</text>`;
    el.querySelector('#fChart').innerHTML = s;

    const v = el.querySelector('#fNote');
    if (dG === dT && dG !== 0 && t === 0) { v.className = 'verdict good'; v.innerHTML = `<strong>Balanced budget:</strong> ΔG = ΔT, yet GDP rises by ${money(y)}. The balanced-budget multiplier is 1.`; }
    else if (y > 0) { v.className = 'verdict good'; v.innerHTML = `<strong>Expansionary.</strong> GDP rises by ${money(y)}. The budget balance changes by ${money(dB)}: automatic tax receipts recover ${money(t * y)} of the cost.`; }
    else if (y < 0) { v.className = 'verdict bad'; v.innerHTML = `<strong>Contractionary.</strong> GDP falls by ${money(-y)}. The budget balance changes by ${money(dB)}.`; }
    else { v.className = 'verdict'; v.textContent = 'No net fiscal impulse.'; }
  }
  ids.forEach(id => r[id].addEventListener('input', calc));
  calc();
}

const examples = `
<h2>Fiscal policy in the real world</h2>
<div class="grid">
  <div class="card"><div class="icon" aria-hidden="true">🇺🇸</div><span class="tag">Discretionary stimulus</span><h4>US CARES Act (March 2020)</h4><p>A roughly $2.2 trillion package (about 10% of GDP) of stimulus cheques, enhanced unemployment benefits and business loans. Passed within weeks, it shows how fast fiscal policy can move in a crisis.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🇬🇧</div><span class="tag dis">Market confidence</span><h4>UK "mini-budget" (September 2022)</h4><p>Large unfunded tax cuts caused gilt yields and the pound to swing sharply. The Bank of England had to intervene in the bond market. The policies were reversed and the Prime Minister resigned weeks later, a vivid example of the "bond vigilante" risk of high debt.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🇬🇷</div><span class="tag dis">Contractionary policy</span><h4>Greek austerity (2010s)</h4><p>Spending cuts and tax rises imposed as bailout conditions coincided with a fall of about a quarter in Greek GDP. That fuelled debate about fiscal multipliers being larger in deep recessions.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🇯🇵</div><span class="tag ext">Debt "owed to ourselves"</span><h4>Japan's high public debt</h4><p>Japan's gross government debt exceeds 200% of GDP, yet borrowing costs stayed very low for decades. Most of the debt is held domestically and by the Bank of Japan, which supports the "less concern" argument.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🇮🇳</div><span class="tag">Capital spending</span><h4>India's capex push</h4><p>Since 2020 India's central government has sharply increased capital spending on roads, railways and other infrastructure, while setting a path to bring the fiscal deficit down. The aim is to raise potential growth, not just demand.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🇩🇪</div><span class="tag">Fiscal rules</span><h4>Germany's debt brake</h4><p>A constitutional rule from 2009 limits the structural deficit to 0.35% of GDP. In 2025 it was loosened to exempt higher defence spending and to fund a large infrastructure programme, showing how fiscal rules adapt to new priorities.</p></div>
</div>

<h3>Quick recap</h3>
<div class="card table-wrap">
  <table class="text">
    <thead><tr><th>Concept</th><th>Key point</th></tr></thead>
    <tbody>
      <tr><td>Fiscal multiplier</td><td>1 ÷ [1 − c(1 − t)]</td></tr>
      <tr><td>Balanced-budget multiplier</td><td>= 1 in the simple model</td></tr>
      <tr><td>Fiscal stance</td><td>Judge by the structural (cyclically adjusted) deficit</td></tr>
      <tr><td>Ricardian equivalence</td><td>Debt-financed tax cuts are saved, so there is no effect on demand</td></tr>
      <tr><td>Lags</td><td>Recognition → action → impact</td></tr>
    </tbody>
  </table>
</div>`;

const caseHtml = `
<h2>Case study: Nordavia's recession dilemma</h2>
<div class="card">
  <p>The (fictional) economy of <strong>Nordavia</strong> is in recession. The finance ministry estimates:</p>
  <ul>
    <li>A negative output gap of <strong>$300bn</strong></li>
    <li>Marginal propensity to consume <strong>0.8</strong>; average tax rate <strong>25%</strong></li>
    <li>Government debt is <strong>110% of GDP</strong>; 10-year bond yields have risen 1 percentage point this year</li>
    <li>The opposition proposes a debt-financed income tax cut. The government prefers new infrastructure spending, which will take about 18 months to design and approve.</li>
  </ul>
</div>
<p class="muted">Write your answers (notes are saved in this browser), then compare with the model answers.</p>

<div class="q">
  <div class="q-num">Question 1 · 4 marks</div>
  <div class="q-text">Calculate the fiscal multiplier. How large an increase in government spending, or alternatively a tax cut, would close the output gap?</div>
  <textarea aria-label="Your answer to question 1"></textarea>
  <button class="btn reveal" style="margin-top:8px">Show model answer</button>
  <div class="model" hidden>
    <p>Multiplier = 1 ÷ [1 − 0.8 × (1 − 0.25)] = 1 ÷ 0.4 = <strong>2.5</strong>.</p>
    <p>Spending: ΔG = 300 ÷ 2.5 = <strong>$120bn</strong>. Tax cut: each $1 of tax cut raises spending by only $0.80 in the first round, so ΔT = 300 ÷ (0.8 × 2.5) = <strong>$150bn</strong>. The tax cut must be larger to have the same effect.</p>
  </div>
</div>

<div class="q">
  <div class="q-num">Question 2 · 4 marks</div>
  <div class="q-text">Evaluate the two proposals in light of policy lags, Ricardian equivalence and crowding out.</div>
  <textarea aria-label="Your answer to question 2"></textarea>
  <button class="btn reveal" style="margin-top:8px">Show model answer</button>
  <div class="model" hidden>
    <ul>
      <li><strong>Lags:</strong> the infrastructure plan has a long <em>action and impact lag</em> (18 months or more) and may arrive after recovery, which would add to inflation. A tax cut can be enacted faster.</li>
      <li><strong>Ricardian equivalence:</strong> with debt already at 110% of GDP, households may expect future tax rises and save a debt-financed tax cut, which weakens its effect.</li>
      <li><strong>Crowding out:</strong> yields are already rising. Extra borrowing for either plan could push rates higher and reduce private investment.</li>
      <li>Infrastructure has a supply-side benefit: it raises future potential output. That can justify the debt in a way a consumption-boosting tax cut cannot.</li>
    </ul>
  </div>
</div>

<div class="q">
  <div class="q-num">Question 3 · 3 marks</div>
  <div class="q-text">Next year the actual deficit rises from 4% to 6% of GDP, but the structural deficit is unchanged at 3%. Was fiscal policy expansionary? Explain.</div>
  <textarea aria-label="Your answer to question 3"></textarea>
  <button class="btn reveal" style="margin-top:8px">Show model answer</button>
  <div class="model" hidden>
    <p><strong>No: the discretionary stance was neutral.</strong> The whole increase in the actual deficit comes from the recession: lower tax revenue and higher benefits, i.e. <strong>automatic stabilisers</strong>. The unchanged structural (cyclically adjusted) deficit shows the government made no new discretionary expansion.</p>
  </div>
</div>`;

window.MODULES.push({
  id: 'm3', lm: 3, lmTitle: 'Fiscal Policy',
  title: 'Fiscal Policy',
  subtitle: 'Government spending, taxes, the multiplier, and the limits of fiscal stimulus.',
  learn: [
    { id: 'overview', label: 'Overview', html: overview },
    { id: 'concepts', label: 'Key Concepts', html: concepts },
    { id: 'diagrams', label: 'Diagrams', html: diagrams },
    { id: 'lab', label: 'Multiplier Lab', html: lab, init: initLab },
    { id: 'examples', label: 'Real World', html: examples }
  ],
  mcq: [
    { q: 'With an MPC of 0.9 and a tax rate of 20%, the fiscal multiplier is closest to:', o: ['1.39', '3.57', '5.00', '10.00'], a: 1, e: '1 ÷ [1 − 0.9 × (1 − 0.2)] = 1 ÷ (1 − 0.72) = 1 ÷ 0.28 = <strong>3.57</strong>.' },
    { q: 'Which of the following is an automatic stabiliser?', o: ['A new infrastructure bill', 'A one-off stimulus cheque', 'A progressive income tax system', 'A temporary cut in VAT approved by parliament'], a: 2, e: 'Progressive tax revenue falls automatically in a downturn and rises in a boom, with no new legislation.' },
    { q: 'According to Ricardian equivalence, a debt-financed tax cut will:', o: ['Strongly increase consumption', 'Be largely saved, because households anticipate higher future taxes', 'Cause immediate inflation', 'Reduce the budget deficit'], a: 1, e: 'Rational households save the tax cut to pay the expected future tax liability, so aggregate demand does not change.' },
    { q: '"Crowding out" refers to:', o: ['Imports displacing domestic production', 'Government borrowing raising interest rates and reducing private investment', 'Automatic stabilisers reducing the multiplier', 'Tax cuts reducing government revenue'], a: 1, e: 'Higher public borrowing competes for loanable funds, which raises rates and displaces private investment.' },
    { q: 'The best measure of a government\'s discretionary fiscal stance is the:', o: ['Actual budget deficit', 'Structural (cyclically adjusted) budget deficit', 'Debt-to-GDP ratio', 'Primary balance in nominal terms'], a: 1, e: 'The structural deficit removes the effect of the cycle (automatic stabilisers) and isolates discretionary policy.' },
    { q: 'Which of the following is an indirect tax?', o: ['Corporate income tax', 'Value-added tax (VAT)', 'Wealth tax', 'Capital gains tax'], a: 1, e: 'Indirect taxes are levied on spending; direct taxes are levied on income and wealth.' },
    { q: 'The time it takes policymakers to realise that the economy needs fiscal action is the:', o: ['Action lag', 'Impact lag', 'Recognition lag', 'Inside multiplier lag'], a: 2, e: 'The recognition lag reflects delayed and revised economic data.' },
    { q: 'In the simple model, if government spending and lump-sum taxes both rise by $50bn, GDP will rise by:', o: ['$0', '$50bn', '$100bn', '$250bn'], a: 1, e: 'The balanced-budget multiplier is 1, so ΔY = ΔG = <strong>$50bn</strong>.' },
    { q: 'Which is an argument for being LESS concerned about a high national debt?', o: ['Future taxes may reduce work incentives', 'The debt is largely owed to the country\'s own citizens', 'Creditors may demand higher yields', 'The government may be tempted to print money'], a: 1, e: 'Interest paid on domestically held debt is a transfer within the economy.' },
    { q: 'Building a new motorway is an example of:', o: ['A transfer payment', 'Current spending', 'Capital spending', 'An automatic stabiliser'], a: 2, e: 'Capital spending creates long-lived infrastructure that raises future productive capacity.' },
    { q: 'A tax system in which people with higher incomes pay a larger share of their income in tax reflects:', o: ['Horizontal equity', 'Vertical equity', 'Revenue sufficiency', 'Simplicity'], a: 1, e: 'Vertical equity means people with higher incomes pay more. Horizontal equity means people in similar situations pay the same.' },
    { q: 'Expansionary fiscal policy is LEAST effective at raising real output when:', o: ['The economy has a large negative output gap', 'The economy is near full employment', 'Interest rates are at the zero lower bound', 'The MPC is high'], a: 1, e: 'With little spare capacity, more demand mainly raises prices rather than output.' }
  ],
  match: { pairs: [
    ['Transfer payments', 'Welfare and pension payments that redistribute income'],
    ['Capital spending', 'Government investment in infrastructure such as roads and hospitals'],
    ['Direct tax', 'A tax on income or wealth, e.g. corporate income tax'],
    ['Indirect tax', 'A tax on spending, e.g. VAT or excise duty'],
    ['Automatic stabiliser', 'Cushions the cycle without new legislation, e.g. unemployment benefits'],
    ['Ricardian equivalence', 'Households save a debt-financed tax cut in anticipation of future taxes'],
    ['Crowding out', 'Public borrowing raises interest rates and displaces private investment'],
    ['Structural budget deficit', 'The deficit that would exist at full employment'],
    ['Action lag', 'Time taken to design and legislate a policy response']
  ] },
  tf: [
    { s: 'Fiscal policy is set by the central bank.', a: 'False', e: 'It is set by the government (legislature and treasury). The central bank sets monetary policy.' },
    { s: 'A tax cut has a smaller effect on GDP than an equal increase in government spending.', a: 'True', e: 'Part of a tax cut is saved, so the first-round increase in spending is c × ΔT rather than ΔG.' },
    { s: 'A higher tax rate increases the size of the fiscal multiplier.', a: 'False', e: 'Higher taxes cause more leakage each round, so the multiplier is smaller.' },
    { s: 'A rising actual budget deficit always indicates expansionary discretionary policy.', a: 'False', e: 'It may reflect automatic stabilisers in a recession. Check the structural deficit.' },
    { s: 'If Ricardian equivalence holds fully, a debt-financed tax cut has no effect on aggregate demand.', a: 'True', e: 'The tax cut is fully saved.' },
    { s: 'Unemployment benefits act as an automatic stabiliser.', a: 'True', e: 'Payments rise automatically as unemployment rises.' },
    { s: 'Capital spending can raise an economy\'s long-run potential output.', a: 'True', e: 'Infrastructure raises productivity and productive capacity.' },
    { s: 'Fiscal policy has no implementation lags because spending can change instantly.', a: 'False', e: 'Recognition, action and impact lags can be long, especially for discretionary programmes.' }
  ],
  classify: {
    choices: ['Automatic stabiliser', 'Discretionary expansion', 'Discretionary contraction'],
    intro: 'Classify each fiscal action.',
    items: [
      { s: 'Unemployment benefit payments rise as layoffs increase during a downturn.', a: 'Automatic stabiliser', e: 'No new law is needed; payments rise automatically.' },
      { s: 'Parliament passes a law cutting personal income tax rates to boost spending.', a: 'Discretionary expansion', e: 'A deliberate, legislated stimulus.' },
      { s: 'Income tax collections fall as wages decline in a recession under a progressive system.', a: 'Automatic stabiliser', e: 'Revenue adjusts automatically with income.' },
      { s: 'The government approves a new multi-year high-speed rail programme.', a: 'Discretionary expansion', e: 'New capital spending decided by government.' },
      { s: 'The VAT rate is raised from 18% to 20% to reduce the deficit.', a: 'Discretionary contraction', e: 'A deliberate tax increase reduces aggregate demand.' },
      { s: 'Ministries are ordered to cut spending by 5% to meet a fiscal rule.', a: 'Discretionary contraction', e: 'Deliberate austerity.' },
      { s: 'Means-tested welfare payments rise as more households qualify during a recession.', a: 'Automatic stabiliser', e: 'Eligibility rises automatically with hardship.' },
      { s: 'One-off stimulus cheques are mailed to every household.', a: 'Discretionary expansion', e: 'A deliberate transfer to boost demand.' }
    ]
  },
  caseStudy: { html: caseHtml }
});
})();
