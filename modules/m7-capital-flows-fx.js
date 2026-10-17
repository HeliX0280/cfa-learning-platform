/* LM7: Capital Flows and the FX Market */
(() => {
const overview = `
<h2>The foreign exchange market</h2>
<div class="callout">
  The <strong>foreign exchange (FX) market</strong> is where currencies are traded. It is the world's largest financial market: the BIS estimated turnover above <strong>$7 trillion per day</strong> in its 2022 survey. It lets money cross borders for trade, investment, hedging and speculation.
</div>
<div class="callout cfa"><strong>CFA exam focus.</strong> Describe the FX market's functions and participants; distinguish nominal and real exchange rates; describe exchange rate regimes; explain the effects of exchange rates on international trade and capital flows (Marshall–Lerner, absorption approach); and relate the balance of payments to saving and investment, including the objectives of capital restrictions.</div>

<h3>Functions of the FX market</h3>
<div class="grid">
  <div class="card"><h4>Facilitate trade &amp; investment</h4><p>Exporters, importers and investors convert currencies to pay for goods, services and assets abroad.</p></div>
  <div class="card"><h4>Hedging</h4><p>Firms and investors use forwards, swaps and options to lock in exchange rates and reduce currency risk.</p></div>
  <div class="card"><h4>Speculation</h4><p>Traders take positions to profit from expected currency moves, which adds liquidity.</p></div>
</div>

<h3>Market participants</h3>
<div class="grid">
  <div class="card"><span class="tag">Sell side</span><h4>Dealers</h4><p>Mostly large global banks that make markets, quoting bid and offer prices to clients.</p></div>
  <div class="card"><span class="tag ext">Buy side</span><h4>Clients of dealers</h4><ul style="margin:0;padding-left:18px">
    <li><strong>Corporations</strong> (trade and investment flows)</li>
    <li><strong>Real money accounts</strong>: mutual funds, pension funds, insurers, endowments (limited leverage)</li>
    <li><strong>Leveraged accounts</strong>: hedge funds, proprietary traders</li>
    <li><strong>Retail</strong> investors and travellers</li>
    <li><strong>Governments</strong>, <strong>central banks</strong> and <strong>sovereign wealth funds</strong></li></ul></div>
</div>

<h3>Nominal vs real exchange rates</h3>
<p>The <strong>nominal</strong> exchange rate is the quoted price of one currency in another. The <strong>real</strong> exchange rate adjusts for relative price levels, so it measures purchasing power and competitiveness.</p>
<p><span class="formula">Real exchange rate (d/f) = S<sub>d/f</sub> × (P<sub>f</sub> ÷ P<sub>d</sub>)</span></p>
<p class="muted">A rise in the real d/f rate means foreign goods have become relatively more expensive: a <strong>real depreciation</strong> of the domestic currency, which improves competitiveness. Calculations are covered in the next module.</p>`;

const concepts = `
<h2>Key concepts</h2>

<h3>The balance of payments (BoP)</h3>
<div class="grid">
  <div class="card"><h4>Current account</h4><p>Trade in <strong>goods and services</strong>, plus <strong>primary income</strong> (wages, interest, dividends) and <strong>secondary income</strong> (transfers such as remittances and aid).</p></div>
  <div class="card"><h4>Capital account</h4><p>Capital transfers (e.g. debt forgiveness) and the purchase or sale of non-produced, non-financial assets (e.g. patents, mineral rights). Usually small.</p></div>
  <div class="card"><h4>Financial account</h4><p>Flows of financial assets: <strong>foreign direct investment</strong>, <strong>portfolio investment</strong> (stocks, bonds), other investment (loans, deposits) and changes in <strong>official reserves</strong>.</p></div>
</div>
<p>The accounts must balance: a <strong>current account deficit</strong> is financed by a <strong>financial account surplus</strong>, i.e. net capital inflows.</p>

<h3>Saving, investment and the current account</h3>
<p><span class="formula">X − M = (S − I) + (T − G)</span></p>
<p>The trade balance equals <strong>private net saving</strong> (S − I) plus the <strong>government budget balance</strong> (T − G). A country that invests more than it saves, or runs large budget deficits, must run a current account deficit and borrow from abroad. A deficit that funds productive investment is less worrying than one that funds consumption.</p>

<h3>Capital restrictions</h3>
<p>Governments may restrict capital flows (taxes, limits on foreign ownership, outright bans). <strong>Objectives:</strong></p>
<ul>
  <li>Reduce volatility in domestic asset prices and the exchange rate (e.g. "hot money" outflows)</li>
  <li>Maintain a fixed exchange rate while keeping some monetary policy independence</li>
  <li>Keep domestic interest rates low</li>
  <li>Protect strategic industries from foreign ownership</li>
</ul>
<p class="muted">Costs: lower efficiency, higher cost of capital, and evasion. They are generally more justified as temporary measures during a crisis.</p>

<h3>Exchange rate regimes (hardest to most flexible)</h3>
<div class="card table-wrap">
  <table class="text">
    <thead><tr><th>Regime</th><th>How it works</th></tr></thead>
    <tbody>
      <tr><td><strong>No separate legal tender</strong></td><td><em>Dollarisation</em> (using another country's currency) or a <em>monetary union</em>. No independent monetary policy.</td></tr>
      <tr><td><strong>Currency board</strong></td><td>Legal commitment to exchange at a fixed rate; domestic money fully backed by foreign reserves. Limited lender-of-last-resort role.</td></tr>
      <tr><td><strong>Fixed parity (conventional peg)</strong></td><td>Peg to a currency or basket, typically within ±1%. The central bank intervenes but can change the parity.</td></tr>
      <tr><td><strong>Target zone</strong></td><td>Fixed parity with a wider band (e.g. ±2%), giving more discretion.</td></tr>
      <tr><td><strong>Crawling peg</strong></td><td>Parity adjusted periodically, e.g. for inflation differentials (passive) or pre-announced (active).</td></tr>
      <tr><td><strong>Crawling band</strong></td><td>Band around a crawling central rate, often widened over time as an exit from a peg.</td></tr>
      <tr><td><strong>Managed float</strong></td><td>Intervention without a specific target, to smooth volatility.</td></tr>
      <tr><td><strong>Independently floating</strong></td><td>Rate set by the market; intervention only to calm disorderly markets.</td></tr>
    </tbody>
  </table>
</div>
<div class="callout"><strong>The impossible trinity:</strong> a country cannot have all three of (1) a fixed exchange rate, (2) free capital flows and (3) an independent monetary policy. It must give up one.</div>

<h3>Exchange rates and the trade balance</h3>
<div class="grid">
  <div class="card"><h4>Elasticities approach: Marshall–Lerner</h4>
    <p>A depreciation improves the trade balance only if</p>
    <p><span class="formula">ω<sub>X</sub>ε<sub>X</sub> + ω<sub>M</sub>(ε<sub>M</sub> − 1) &gt; 0</span></p>
    <p>where ω are the shares of exports and imports in total trade and ε the price elasticities of demand. With balanced trade this reduces to <strong>ε<sub>X</sub> + ε<sub>M</sub> &gt; 1</strong>. Elasticities are higher when goods are close substitutes, highly traded and price-sensitive.</p></div>
  <div class="card"><h4>The J-curve</h4><p>In the short run, trade volumes respond slowly (existing contracts, habits), so a depreciation first <strong>worsens</strong> the trade balance because imports cost more. As volumes adjust, the balance improves.</p></div>
  <div class="card"><h4>Absorption approach</h4><p><span class="formula">Trade balance = Income (Y) − Absorption (domestic spending)</span></p><p>A depreciation improves the trade balance only if income rises relative to spending. At full employment, domestic spending must fall (more saving) for the trade balance to improve.</p></div>
</div>`;

const diagrams = `
<h2>Diagrams</h2>

<h3>Figure 1: The spectrum of exchange rate regimes</h3>
<figure>
  <div class="fig-wrap">
    <svg viewBox="0 0 700 200" role="img" aria-label="A spectrum from hard pegs on the left (no separate legal tender, currency board) through intermediate regimes (fixed parity, target zone, crawling peg, crawling band) to floating regimes on the right (managed float, independent float).">
      <defs>
        <linearGradient id="specGrad" x1="0" x2="1"><stop offset="0" style="stop-color:var(--bad);stop-opacity:.25"/><stop offset=".5" style="stop-color:var(--warn);stop-opacity:.18"/><stop offset="1" style="stop-color:var(--good);stop-opacity:.25"/></linearGradient>
      </defs>
      <rect x="20" y="70" width="660" height="34" rx="17" style="fill:url(#specGrad)"/>
      <g font-size="11" text-anchor="middle">
        <text x="75" y="91" font-weight="700">No legal tender</text>
        <text x="165" y="91" font-weight="700">Currency board</text>
        <text x="250" y="91" font-weight="700">Fixed parity</text>
        <text x="330" y="91" font-weight="700">Target zone</text>
        <text x="410" y="91" font-weight="700">Crawling peg</text>
        <text x="490" y="91" font-weight="700">Crawling band</text>
        <text x="570" y="91" font-weight="700">Managed float</text>
        <text x="645" y="91" font-weight="700">Free float</text>
        <text x="75" y="124" class="muted-text">Ecuador, euro area</text>
        <text x="165" y="124" class="muted-text">Hong Kong</text>
        <text x="250" y="124" class="muted-text">Saudi riyal</text>
        <text x="330" y="124" class="muted-text">Danish krone</text>
        <text x="570" y="124" class="muted-text">India</text>
        <text x="645" y="124" class="muted-text">USD, JPY</text>
      </g>
      <text x="20" y="50" font-size="13" font-weight="700" style="fill:var(--bad)">Hard pegs</text>
      <text x="350" y="50" text-anchor="middle" font-size="13" font-weight="700" style="fill:var(--warn)">Intermediate</text>
      <text x="680" y="50" text-anchor="end" font-size="13" font-weight="700" style="fill:var(--good)">Floating</text>
      <text x="20" y="160" font-size="12" class="muted-text">← Less monetary independence, more exchange-rate stability</text>
      <text x="680" y="180" text-anchor="end" font-size="12" class="muted-text">More monetary independence, more exchange-rate volatility →</text>
    </svg>
  </div>
</figure>

<h3>Figure 2: The J-curve</h3>
<figure>
  <div class="fig-wrap">
    <svg viewBox="0 0 560 300" role="img" aria-label="Trade balance over time after a depreciation: it first falls below its starting level, then rises above it, tracing a J shape.">
      <path class="axis" d="M60 20 V280"/>
      <path class="axis" d="M60 140 H540"/>
      <text x="64" y="132" font-size="11" class="muted-text">Starting balance</text>
      <path class="curve" d="M60 140 L140 140 C180 140 190 230 230 230 C290 230 330 160 380 110 C430 65 480 50 530 45"/>
      <path class="dash" d="M140 30 V270"/>
      <text x="140" y="290" text-anchor="middle" font-size="12" font-weight="700">Depreciation</text>
      <text x="230" y="254" text-anchor="middle" font-size="12" style="fill:var(--bad)" font-weight="700">Worsens first (prices adjust faster than volumes)</text>
      <text x="420" y="50" font-size="12" style="fill:var(--good)" font-weight="700">Improves as volumes adjust</text>
      <text x="300" y="296" text-anchor="middle" font-size="12" class="muted-text">Time →</text>
      <text x="26" y="150" text-anchor="middle" font-size="12" class="muted-text" transform="rotate(-90 26 150)">Trade balance →</text>
    </svg>
  </div>
  <figcaption>The Marshall–Lerner condition is more likely to hold in the long run, when elasticities are higher, than in the short run.</figcaption>
</figure>

<h3>Figure 3: The impossible trinity</h3>
<figure>
  <div class="fig-wrap">
    <svg viewBox="0 0 520 330" role="img" aria-label="A triangle with corners labelled fixed exchange rate, free capital flows, and independent monetary policy. Each side names the regime that combines its two corners.">
      <polygon points="260,40 60,290 460,290" class="fill-accent" style="stroke:var(--accent);stroke-width:2"/>
      <text x="260" y="30" text-anchor="middle" font-size="13" font-weight="700">Fixed exchange rate</text>
      <text x="50" y="312" text-anchor="start" font-size="13" font-weight="700">Free capital flows</text>
      <text x="470" y="312" text-anchor="end" font-size="13" font-weight="700">Independent monetary policy</text>
      <text x="130" y="160" text-anchor="middle" font-size="11" transform="rotate(-51 130 160)">Hong Kong (currency board)</text>
      <text x="392" y="160" text-anchor="middle" font-size="11" transform="rotate(51 392 160)">Capital controls (e.g. China)</text>
      <text x="260" y="280" text-anchor="middle" font-size="11">Free float (US, UK, Japan)</text>
      <text x="260" y="200" text-anchor="middle" font-size="12" class="muted-text">Pick any two sides</text>
    </svg>
  </div>
</figure>`;

const lab = `
<h2>Capital flows lab</h2>

<div class="card">
  <h3 style="margin-top:0">Tool 1: Will a depreciation improve the trade balance?</h3>
  <div class="lab">
    <div>
      <div class="control"><label for="mlX">Export share of total trade (ω<sub>X</sub>) <output id="mlXo"></output></label><input type="range" id="mlX" min="0.1" max="0.9" step="0.05" value="0.5"></div>
      <div class="control"><label for="mlEX">Price elasticity of export demand (ε<sub>X</sub>) <output id="mlEXo"></output></label><input type="range" id="mlEX" min="0" max="2" step="0.05" value="0.4"></div>
      <div class="control"><label for="mlEM">Price elasticity of import demand (ε<sub>M</sub>) <output id="mlEMo"></output></label><input type="range" id="mlEM" min="0" max="2" step="0.05" value="0.5"></div>
    </div>
    <div>
      <div class="readout">
        <div><span>Import share (ω<sub>M</sub>)</span><strong id="mlM"></strong></div>
        <div><span>ω<sub>X</sub>ε<sub>X</sub> + ω<sub>M</sub>(ε<sub>M</sub> − 1)</span><strong id="mlV"></strong></div>
      </div>
      <div class="verdict" id="mlNote"></div>
    </div>
  </div>
</div>

<div class="card">
  <h3 style="margin-top:0">Tool 2: Saving, investment and the current account</h3>
  <p class="muted">X − M = (S − I) + (T − G), in $bn.</p>
  <div class="lab">
    <div>
      <div class="control"><label for="bS">Private saving (S) <output id="bSo"></output></label><input type="range" id="bS" min="0" max="500" step="10" value="300"></div>
      <div class="control"><label for="bI">Private investment (I) <output id="bIo"></output></label><input type="range" id="bI" min="0" max="500" step="10" value="320"></div>
      <div class="control"><label for="bT">Tax revenue (T) <output id="bTo"></output></label><input type="range" id="bT" min="0" max="500" step="10" value="250"></div>
      <div class="control"><label for="bG">Government spending (G) <output id="bGo"></output></label><input type="range" id="bG" min="0" max="500" step="10" value="290"></div>
    </div>
    <div>
      <div class="readout">
        <div><span>Private net saving (S − I)</span><strong id="bPriv"></strong></div>
        <div><span>Budget balance (T − G)</span><strong id="bGov"></strong></div>
        <div><span>Trade / current account (X − M)</span><strong id="bCA"></strong></div>
        <div><span>Net capital flow needed</span><strong id="bFA"></strong></div>
      </div>
      <div class="verdict" id="bNote"></div>
    </div>
  </div>
</div>`;

function initLab(el) {
  const ml = ['mlX', 'mlEX', 'mlEM'].map(id => el.querySelector('#' + id));
  function marshall() {
    const wX = +ml[0].value, eX = +ml[1].value, eM = +ml[2].value, wM = 1 - wX;
    el.querySelector('#mlXo').textContent = wX.toFixed(2);
    el.querySelector('#mlEXo').textContent = eX.toFixed(2);
    el.querySelector('#mlEMo').textContent = eM.toFixed(2);
    el.querySelector('#mlM').textContent = wM.toFixed(2);
    const v = wX * eX + wM * (eM - 1);
    el.querySelector('#mlV').textContent = v.toFixed(3);
    const n = el.querySelector('#mlNote');
    n.className = 'verdict ' + (v > 0 ? 'good' : 'bad');
    n.innerHTML = v > 0
      ? '<strong>Marshall–Lerner holds.</strong> A depreciation will improve the trade balance (eventually; expect a J-curve first).'
      : '<strong>Marshall–Lerner fails.</strong> Demand is too inelastic, so a depreciation would <em>worsen</em> the trade balance. This is typical of the short run, before volumes adjust.' +
        (Math.abs(wX - 0.5) < 0.01 ? ` With balanced trade the test is ε<sub>X</sub> + ε<sub>M</sub> = ${(eX + eM).toFixed(2)} vs 1.` : '');
  }
  ml.forEach(x => x.addEventListener('input', marshall));
  marshall();

  const ids = ['bS', 'bI', 'bT', 'bG'];
  const r = Object.fromEntries(ids.map(id => [id, el.querySelector('#' + id)]));
  const m = v => (v < 0 ? '−$' : '$') + Math.abs(v) + 'bn';
  function bop() {
    ids.forEach(id => el.querySelector('#' + id + 'o').textContent = '$' + r[id].value + 'bn');
    const priv = r.bS.value - r.bI.value, gov = r.bT.value - r.bG.value, ca = priv + gov;
    el.querySelector('#bPriv').textContent = m(priv);
    el.querySelector('#bGov').textContent = m(gov);
    el.querySelector('#bCA').textContent = m(ca);
    el.querySelector('#bFA').textContent = ca < 0 ? m(-ca) + ' inflow' : ca > 0 ? m(ca) + ' outflow' : 'none';
    const n = el.querySelector('#bNote');
    if (ca < 0) {
      n.className = 'verdict bad';
      const cause = gov < 0 && priv < 0 ? 'both a budget deficit and investment exceeding private saving ("twin deficits")' : gov < 0 ? 'the government budget deficit' : 'private investment exceeding private saving';
      n.innerHTML = `<strong>Current account deficit of ${m(-ca)}</strong>, driven by ${cause}. It must be financed by net capital inflows (a financial account surplus). Sustainability depends on whether the borrowing funds productive investment.`;
    } else if (ca > 0) {
      n.className = 'verdict good';
      n.innerHTML = `<strong>Current account surplus of ${m(ca)}</strong>. The country saves more than it invests and lends the excess abroad (net capital outflows).`;
    } else { n.className = 'verdict'; n.textContent = 'Balanced current account: domestic saving exactly funds domestic investment.'; }
  }
  ids.forEach(id => r[id].addEventListener('input', bop));
  bop();
}

const examples = `
<h2>Capital flows and FX in the real world</h2>
<div class="grid">
  <div class="card"><div class="icon" aria-hidden="true">🇭🇰</div><span class="tag dis">Currency board</span><h4>Hong Kong dollar (since 1983)</h4><p>The HKD trades within 7.75–7.85 per USD, fully backed by USD reserves. With free capital flows, Hong Kong gave up monetary independence (impossible trinity), so its interest rates track US rates.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🇪🇨</div><span class="tag dis">No separate legal tender</span><h4>Ecuador's dollarisation (2000)</h4><p>After a banking crisis and hyperinflationary pressure, Ecuador adopted the US dollar. Inflation fell sharply, but Ecuador lost its own monetary policy and its lender of last resort.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🇨🇭</div><span class="tag">Peg exit</span><h4>Swiss franc floor removal (2015)</h4><p>The SNB capped the franc at 1.20 per euro from 2011. When it abandoned the floor without warning on 15 January 2015, the franc jumped by more than 20% within minutes. This is a lesson in the fragility of pegs against market pressure.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🇬🇧</div><span class="tag dis">Peg under attack</span><h4>Black Wednesday (1992)</h4><p>Sterling was forced out of the European Exchange Rate Mechanism after the Bank of England failed to defend its band despite emergency rate hikes. The episode shows the impossible trinity in action.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🇲🇾</div><span class="tag">Capital controls</span><h4>Malaysia (1998)</h4><p>During the Asian Financial Crisis, Malaysia imposed capital controls and pegged the ringgit at 3.80 per USD. That bought room to cut interest rates, a controversial but instructive use of capital restrictions.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🇨🇳</div><span class="tag">Managed regime</span><h4>China's renminbi</h4><p>The PBoC sets a daily central "fixing" and allows trading within ±2% of it, supported by capital controls. This is an intermediate regime that keeps exchange-rate influence <em>and</em> some monetary independence.</p></div>
</div>

<h3>Quick recap</h3>
<div class="card table-wrap">
  <table class="text">
    <thead><tr><th>Concept</th><th>Key point</th></tr></thead>
    <tbody>
      <tr><td>BoP</td><td>Current account deficit ⇔ financial account surplus</td></tr>
      <tr><td>Sector balances</td><td>X − M = (S − I) + (T − G)</td></tr>
      <tr><td>Impossible trinity</td><td>Fixed rate, free capital, independent monetary policy: pick two</td></tr>
      <tr><td>Marshall–Lerner</td><td>ω<sub>X</sub>ε<sub>X</sub> + ω<sub>M</sub>(ε<sub>M</sub> − 1) &gt; 0</td></tr>
      <tr><td>J-curve</td><td>Trade balance worsens before it improves</td></tr>
      <tr><td>Absorption</td><td>Spending must fall relative to income at full employment</td></tr>
    </tbody>
  </table>
</div>`;

const caseHtml = `
<h2>Case study: The Republic of Tamaris</h2>
<div class="card">
  <p>The (fictional) <strong>Republic of Tamaris</strong> pegs its currency to the US dollar and allows free capital flows.</p>
  <ul>
    <li>The current account deficit is <strong>6% of GDP</strong>, financed mostly by short-term portfolio inflows.</li>
    <li>The government runs a budget deficit of 4% of GDP; private investment exceeds private saving by 2% of GDP.</li>
    <li>FX reserves have fallen by a third in six months as investors pull money out.</li>
    <li>Estimated short-run elasticities with roughly balanced trade: ε<sub>X</sub> = 0.4, ε<sub>M</sub> = 0.5. Long-run: ε<sub>X</sub> = 0.8, ε<sub>M</sub> = 0.7.</li>
  </ul>
</div>
<p class="muted">Write your answers (notes are saved in this browser), then compare with the model answers.</p>

<div class="q">
  <div class="q-num">Question 1 · 3 marks</div>
  <div class="q-text">Use the sector balances identity to explain the source of the current account deficit. Why is the way it is financed a concern?</div>
  <textarea aria-label="Your answer to question 1"></textarea>
  <button class="btn reveal" style="margin-top:8px">Show model answer</button>
  <div class="model" hidden>
    <p>X − M = (S − I) + (T − G) = (−2%) + (−4%) = <strong>−6% of GDP</strong>: "twin deficits", with the budget deficit the larger driver. Short-term portfolio flows are "hot money" that can reverse quickly. A sudden stop forces a sharp adjustment, and the falling reserves show this is already happening.</p>
  </div>
</div>

<div class="q">
  <div class="q-num">Question 2 · 4 marks</div>
  <div class="q-text">If Tamaris devalues, will its trade balance improve in the short run and the long run? Explain using the Marshall–Lerner condition and the J-curve.</div>
  <textarea aria-label="Your answer to question 2"></textarea>
  <button class="btn reveal" style="margin-top:8px">Show model answer</button>
  <div class="model" hidden>
    <p>With balanced trade the condition is ε<sub>X</sub> + ε<sub>M</sub> &gt; 1.</p>
    <p><strong>Short run:</strong> 0.4 + 0.5 = 0.9 &lt; 1, so it <strong>fails</strong> and the trade balance initially <em>worsens</em>.</p>
    <p><strong>Long run:</strong> 0.8 + 0.7 = 1.5 &gt; 1, so it <strong>holds</strong> and the balance improves. This is the J-curve. Under the absorption approach, the improvement also needs domestic spending to fall, so fiscal tightening would help.</p>
  </div>
</div>

<div class="q">
  <div class="q-num">Question 3 · 4 marks</div>
  <div class="q-text">Using the impossible trinity, outline Tamaris's policy options and their trade-offs.</div>
  <textarea aria-label="Your answer to question 3"></textarea>
  <button class="btn reveal" style="margin-top:8px">Show model answer</button>
  <div class="model" hidden>
    <ul>
      <li><strong>Keep the peg and free capital flows:</strong> give up monetary independence. Raise interest rates sharply to defend the peg, which hurts growth.</li>
      <li><strong>Keep the peg and monetary independence:</strong> impose <strong>capital controls</strong> to stop outflows. This buys time but deters future investment.</li>
      <li><strong>Keep free capital and monetary independence:</strong> <strong>float or devalue</strong>. Reserves stop draining, but expect a J-curve, imported inflation and higher costs of foreign-currency debt.</li>
    </ul>
    <p>Whichever option it picks, cutting the budget deficit tackles the root cause.</p>
  </div>
</div>`;

window.MODULES.push({
  id: 'm7', lm: 7, lmTitle: 'Capital Flows and the FX Market',
  title: 'Capital Flows & the FX Market',
  subtitle: 'FX market participants, the balance of payments, exchange rate regimes and trade adjustment.',
  learn: [
    { id: 'overview', label: 'Overview', html: overview },
    { id: 'concepts', label: 'Key Concepts', html: concepts },
    { id: 'diagrams', label: 'Diagrams', html: diagrams },
    { id: 'lab', label: 'Lab', html: lab, init: initLab },
    { id: 'examples', label: 'Real World', html: examples }
  ],
  mcq: [
    { q: 'In the FX market, the "sell side" consists mainly of:', o: ['Pension funds', 'Large dealer banks that make markets', 'Hedge funds', 'Central banks'], a: 1, e: 'Dealers (large banks) quote prices to buy-side clients.' },
    { q: 'Which of the following is a "real money" account?', o: ['A hedge fund', 'A proprietary trading desk', 'A pension fund', 'A retail day trader'], a: 2, e: 'Real money accounts (mutual funds, pension funds, insurers, endowments) are restricted in their use of leverage.' },
    { q: 'Remittances sent home by workers abroad are recorded in the:', o: ['Capital account', 'Financial account', 'Current account (secondary income)', 'Official reserves'], a: 2, e: 'Current transfers such as remittances are secondary income in the current account.' },
    { q: 'A persistent current account deficit implies that a country:', o: ['Saves more than it invests', 'Invests more than it saves and relies on foreign capital inflows', 'Has a budget surplus', 'Has rising official reserves'], a: 1, e: 'X − M = (S − I) + (T − G): a deficit means domestic saving falls short of investment, so it is funded from abroad.' },
    { q: 'Private saving is $200bn, investment $250bn and the government budget balance −$30bn. The current account balance is:', o: ['−$20bn', '−$50bn', '−$80bn', '+$80bn'], a: 2, e: '(S − I) + (T − G) = (200 − 250) + (−30) = <strong>−$80bn</strong>.' },
    { q: 'Which is a common objective of capital restrictions?', o: ['Increasing exchange-rate volatility', 'Maintaining a fixed exchange rate while keeping some monetary policy independence', 'Raising domestic interest rates', 'Encouraging foreign ownership of strategic industries'], a: 1, e: 'Controls let a country escape the impossible trinity. Other objectives include reducing volatility and protecting strategic industries.' },
    { q: 'Under a currency board arrangement:', o: ['The central bank can freely expand the money supply', 'The domestic currency is fully backed by foreign reserves at a fixed rate', 'The exchange rate floats freely', 'The country uses another nation\'s currency'], a: 1, e: 'Monetary base changes only when reserves change, which limits the lender-of-last-resort role.' },
    { q: 'According to the "impossible trinity", a country with a fixed exchange rate and free capital mobility must give up:', o: ['Free trade', 'Independent monetary policy', 'Its central bank', 'Fiscal policy'], a: 1, e: 'Interest rates must follow the anchor currency to keep the peg.' },
    { q: 'When trade is initially balanced, the Marshall–Lerner condition requires that:', o: ['ε<sub>X</sub> = ε<sub>M</sub>', 'ε<sub>X</sub> + ε<sub>M</sub> &gt; 1', 'ε<sub>X</sub> + ε<sub>M</sub> &lt; 1', 'ε<sub>M</sub> &gt; 1 only'], a: 1, e: 'With ω<sub>X</sub> = ω<sub>M</sub> = 0.5, the condition simplifies to the sum of elasticities exceeding 1.' },
    { q: 'The J-curve describes a trade balance that, after a depreciation:', o: ['Improves immediately and permanently', 'Worsens at first and then improves', 'Improves at first and then worsens', 'Does not change'], a: 1, e: 'Import prices rise immediately, while trade volumes adjust only gradually.' },
    { q: 'Under the absorption approach, for a depreciation to improve the trade balance in an economy at full employment:', o: ['Domestic spending must fall relative to income', 'Government spending must rise', 'Imports must rise', 'The currency must appreciate later'], a: 0, e: 'Trade balance = Y − A. If Y cannot rise, absorption must fall.' },
    { q: 'Adopting another country\'s currency as legal tender (dollarisation) means the adopting country:', o: ['Keeps full monetary policy control', 'Gives up independent monetary policy and seigniorage', 'Has a floating exchange rate', 'Must impose capital controls'], a: 1, e: 'It imports the anchor\'s monetary policy and forgoes the profit from issuing its own currency.' }
  ],
  match: { pairs: [
    ['Sell side', 'Dealer banks that quote prices in the FX market'],
    ['Real money accounts', 'Pension funds, insurers and mutual funds with limited leverage'],
    ['Leveraged accounts', 'Hedge funds and proprietary traders'],
    ['Current account', 'Trade in goods and services plus primary and secondary income'],
    ['Financial account', 'Flows of FDI, portfolio investment, loans and reserves'],
    ['Currency board', 'Fixed rate with domestic money fully backed by foreign reserves'],
    ['Crawling peg', 'Fixed parity adjusted periodically, e.g. for inflation'],
    ['Marshall–Lerner condition', 'Elasticity test for whether depreciation improves the trade balance'],
    ['J-curve', 'Trade balance worsens before improving after a depreciation']
  ] },
  tf: [
    { s: 'A current account deficit must be matched by a financial account surplus.', a: 'True', e: 'The BoP balances: imports of goods are paid for with net capital inflows.' },
    { s: 'A government budget deficit, other things equal, tends to worsen the current account.', a: 'True', e: 'Lower (T − G) reduces X − M in the identity ("twin deficits").' },
    { s: 'A currency board gives the central bank full flexibility to act as lender of last resort.', a: 'False', e: 'The money base is tied to reserves, so its lender-of-last-resort role is limited.' },
    { s: 'A country can maintain a fixed exchange rate, free capital flows and an independent monetary policy at the same time.', a: 'False', e: 'The impossible trinity says only two of the three are possible.' },
    { s: 'Depreciation is more likely to improve the trade balance when export and import demand are highly price-elastic.', a: 'True', e: 'Volumes respond strongly to the price change.' },
    { s: 'The J-curve implies a depreciation improves the trade balance immediately.', a: 'False', e: 'It worsens first.' },
    { s: 'Hedge funds are classified as real money accounts.', a: 'False', e: 'They are leveraged accounts.' },
    { s: 'Capital controls can reduce economic efficiency and raise the cost of capital.', a: 'True', e: 'They distort the allocation of capital and deter foreign investors.' }
  ],
  classify: {
    choices: ['Hard peg', 'Intermediate regime', 'Floating'],
    intro: 'Classify each exchange rate arrangement.',
    items: [
      { s: 'Ecuador uses the US dollar as its legal tender.', a: 'Hard peg', e: 'No separate legal tender.' },
      { s: 'Hong Kong\'s dollar is fully backed by USD reserves at a legally fixed rate.', a: 'Hard peg', e: 'Currency board.' },
      { s: 'The Saudi riyal is pegged at 3.75 per US dollar, with the central bank intervening as needed.', a: 'Intermediate regime', e: 'A conventional fixed parity (not legally binding like a currency board).' },
      { s: 'A currency\'s parity is adjusted every month to offset the inflation gap with its trading partners.', a: 'Intermediate regime', e: 'Crawling peg.' },
      { s: 'The Danish krone is kept within a ±2.25% band around a central rate against the euro.', a: 'Intermediate regime', e: 'Target zone.' },
      { s: 'The central bank intervenes occasionally to smooth volatility but has no exchange-rate target.', a: 'Floating', e: 'Managed float.' },
      { s: 'The US dollar\'s value is determined by the market, with intervention only in extreme conditions.', a: 'Floating', e: 'Independently floating.' },
      { s: 'Euro area members share a single currency issued by the ECB.', a: 'Hard peg', e: 'No separate legal tender (monetary union).' }
    ]
  },
  caseStudy: { html: caseHtml }
});
})();
