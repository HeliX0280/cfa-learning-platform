/* LM8: Exchange Rate Calculations */
(() => {
const overview = `
<h2>Reading exchange rate quotes</h2>
<div class="callout">
  The CFA curriculum writes exchange rates as <strong>price currency / base currency</strong>. <span class="formula">USD/EUR = 1.0850</span> means <strong>1 euro (base) costs 1.0850 US dollars (price)</strong>.
</div>
<div class="callout cfa"><strong>CFA exam focus.</strong> Calculate and interpret the percentage change in a currency relative to another; calculate and interpret currency <strong>cross rates</strong>; explain the arbitrage relationship between spot and forward rates and interest rates; calculate and interpret a <strong>forward rate</strong> and <strong>forward points</strong>; and calculate real exchange rates.</div>
<div class="callout"><strong>Watch out:</strong> market practitioners often write the same quote the other way round (e.g. "EUR/USD 1.0850" or "EURUSD"). Always ask: <em>which currency is the one unit?</em> That is the base currency.</div>

<h3>Direct and indirect quotes</h3>
<div class="grid">
  <div class="card"><h4>Direct quote</h4><p>Domestic currency per unit of foreign currency. For a US investor, USD/EUR = 1.0850 is direct: the price of a foreign "good" (the euro) in home currency.</p></div>
  <div class="card"><h4>Indirect quote</h4><p>Foreign currency per unit of domestic currency, i.e. the reciprocal. EUR/USD = 1 ÷ 1.0850 = 0.9217.</p></div>
</div>

<h3>Appreciation and depreciation</h3>
<p>If USD/EUR <strong>rises</strong> from 1.0850 to 1.1000, each euro buys more dollars: the <strong>euro (base) has appreciated</strong> and the <strong>dollar (price) has depreciated</strong>.</p>
<p><span class="formula">% change in base currency = S₁ ÷ S₀ − 1</span></p>
<p><span class="formula">% change in price currency = S₀ ÷ S₁ − 1</span></p>
<p class="muted">The two percentage changes are <strong>not</strong> equal and opposite: +10% for one currency is −9.09% for the other.</p>

<h3>Spot and forward</h3>
<ul>
  <li><strong>Spot rate:</strong> for immediate delivery (usually T+2).</li>
  <li><strong>Forward rate:</strong> agreed today for delivery on a future date. Firms use forwards to <strong>hedge</strong> known future currency flows.</li>
  <li><strong>Forward points</strong> = (F − S) × 10,000 for most four-decimal currency pairs.</li>
</ul>`;

const concepts = `
<h2>Key formulas</h2>

<h3>1. Cross rates</h3>
<p>Combine two quotes that share a currency so that the common currency cancels:</p>
<p><span class="formula">JPY/EUR = JPY/USD × USD/EUR</span></p>
<p>Example: JPY/USD = 150.00 and USD/EUR = 1.1000 → JPY/EUR = 150.00 × 1.1000 = <strong>165.00</strong>.</p>
<p>If the common currency doesn't cancel, invert one quote first:</p>
<p><span class="formula">EUR/GBP = USD/GBP ÷ USD/EUR</span> (equivalently USD/GBP × EUR/USD)</p>
<p>Example: USD/GBP = 1.3000, USD/EUR = 1.1000 → EUR/GBP = 1.3000 ÷ 1.1000 = <strong>1.1818</strong>.</p>

<h3>2. Forward rates: covered interest rate parity</h3>
<p>An investor must earn the same return whether they invest in the price currency or convert, invest in the base currency and hedge back with a forward. Otherwise arbitrage is possible.</p>
<p><span class="formula">F<sub>p/b</sub> = S<sub>p/b</sub> × [1 + i<sub>p</sub> × (days ÷ 360)] ÷ [1 + i<sub>b</sub> × (days ÷ 360)]</span></p>
<ul>
  <li>If i<sub>price</sub> &gt; i<sub>base</sub> → F &gt; S: the base currency trades at a <strong>forward premium</strong>.</li>
  <li>If i<sub>price</sub> &lt; i<sub>base</sub> → F &lt; S: the base currency trades at a <strong>forward discount</strong>.</li>
  <li>Rule of thumb: the <strong>higher-interest-rate currency trades at a forward discount</strong>. The forward premium or discount offsets the interest differential.</li>
</ul>
<p>Approximation: <span class="formula">(F − S) ÷ S ≈ (i<sub>p</sub> − i<sub>b</sub>) × (days ÷ 360)</span></p>

<h3>3. Forward points</h3>
<p><span class="formula">Forward points = (F − S) × 10,000</span> &nbsp; → &nbsp; <span class="formula">F = S + points ÷ 10,000</span></p>
<p>Example: spot USD/EUR 1.1000 with +25 points → F = 1.1025. For JPY quotes (two decimals) points are scaled by 100.</p>
<p class="muted">The forward premium or discount as an annualised percentage: (F/S − 1) × (360/days).</p>

<h3>4. Real exchange rate</h3>
<p><span class="formula">q<sub>d/f</sub> = S<sub>d/f</sub> × (P<sub>f</sub> ÷ P<sub>d</sub>)</span></p>
<p><span class="formula">%Δq ≈ %ΔS<sub>d/f</sub> + π<sub>f</sub> − π<sub>d</sub></span></p>
<p>If the nominal rate is unchanged but domestic inflation exceeds foreign inflation, q<sub>d/f</sub> falls. That is a <strong>real appreciation</strong> of the domestic currency, which hurts competitiveness.</p>

<h3>Worked example, step by step</h3>
<div class="card">
  <p style="margin-top:0"><strong>Spot USD/EUR = 1.1000; USD 1-year rate = 5%; EUR 1-year rate = 3%; 360 days.</strong></p>
  <ol>
    <li>Price currency = USD (i<sub>p</sub> = 5%); base = EUR (i<sub>b</sub> = 3%).</li>
    <li>F = 1.1000 × 1.05 ÷ 1.03 = <strong>1.1214</strong>.</li>
    <li>Forward points = (1.1214 − 1.1000) × 10,000 ≈ <strong>+214</strong>.</li>
    <li>The EUR (lower rate) trades at a forward <strong>premium</strong>; the USD (higher rate) at a forward discount.</li>
  </ol>
</div>`;

const diagrams = `
<h2>Diagrams</h2>

<h3>Figure 1: Anatomy of a quote</h3>
<figure>
  <div class="fig-wrap">
    <svg viewBox="0 0 600 190" role="img" aria-label="The quote USD slash EUR equals 1.0850. USD is the price currency, EUR is the base currency, and 1.0850 is the number of dollars per one euro.">
      <text x="300" y="90" text-anchor="middle" font-size="44" font-weight="700" font-family="Menlo, Consolas, monospace">USD/EUR = 1.0850</text>
      <path class="link" d="M140 100 V140"/><path class="link" d="M240 100 V140"/><path class="link" d="M410 100 V140"/>
      <rect x="80" y="140" width="120" height="40" rx="8" class="box-accent"/><text x="140" y="158" text-anchor="middle" font-size="12" font-weight="700">Price currency</text><text x="140" y="173" text-anchor="middle" font-size="11" class="muted-text">what you pay</text>
      <rect x="210" y="140" width="120" height="40" rx="8" class="box-good"/><text x="270" y="158" text-anchor="middle" font-size="12" font-weight="700">Base currency</text><text x="270" y="173" text-anchor="middle" font-size="11" class="muted-text">the "one unit"</text>
      <rect x="350" y="140" width="190" height="40" rx="8" class="box"/><text x="445" y="158" text-anchor="middle" font-size="12" font-weight="700">Price of 1 EUR in USD</text><text x="445" y="173" text-anchor="middle" font-size="11" class="muted-text">rises → EUR appreciates</text>
      <text x="300" y="30" text-anchor="middle" font-size="13" class="muted-text">Read it as "USD per EUR"</text>
    </svg>
  </div>
</figure>

<h3>Figure 2: Building a cross rate</h3>
<figure>
  <div class="fig-wrap">
    <svg viewBox="0 0 640 200" role="img" aria-label="JPY per USD times USD per EUR equals JPY per EUR, with the USD cancelling.">
      <g font-family="Menlo, Consolas, monospace" font-weight="700" text-anchor="middle">
        <rect x="20" y="50" width="150" height="70" rx="10" class="box-accent"/>
        <text x="95" y="82" font-size="18">JPY/USD</text><text x="95" y="106" font-size="15">150.00</text>
        <text x="200" y="94" font-size="26">×</text>
        <rect x="230" y="50" width="150" height="70" rx="10" class="box-accent"/>
        <text x="305" y="82" font-size="18">USD/EUR</text><text x="305" y="106" font-size="15">1.1000</text>
        <text x="410" y="94" font-size="26">=</text>
        <rect x="440" y="50" width="170" height="70" rx="10" class="box-good"/>
        <text x="525" y="82" font-size="18">JPY/EUR</text><text x="525" y="106" font-size="15">165.00</text>
      </g>
      <path d="M118 66 L148 90" style="stroke:var(--bad);stroke-width:2.5"/>
      <path d="M238 66 L268 90" style="stroke:var(--bad);stroke-width:2.5"/>
      <text x="320" y="160" text-anchor="middle" font-size="13" class="muted-text">USD appears on top in one quote and on the bottom in the other, so it cancels.</text>
      <text x="320" y="180" text-anchor="middle" font-size="13" class="muted-text">If it doesn't cancel, invert one quote first (1 ÷ S).</text>
    </svg>
  </div>
</figure>

<h3>Figure 3: Why forwards reflect interest differentials</h3>
<figure>
  <div class="fig-wrap">
    <svg viewBox="0 0 640 260" role="img" aria-label="Two routes from 1.10 USD today to USD in one year. Route one: invest USD at 5 percent to get 1.155 USD. Route two: convert to 1 EUR, invest at 3 percent to get 1.03 EUR, and sell forward at F. No arbitrage requires 1.03 times F to equal 1.155, so F equals 1.1214.">
      <defs><marker id="arr8" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" style="fill:var(--axis)"/></marker></defs>
      <rect x="20" y="100" width="120" height="50" rx="8" class="box-accent"/><text x="80" y="122" text-anchor="middle" font-size="12" font-weight="700">Today</text><text x="80" y="140" text-anchor="middle" font-size="12">USD 1.10</text>
      <rect x="500" y="100" width="120" height="50" rx="8" class="box-good"/><text x="560" y="122" text-anchor="middle" font-size="12" font-weight="700">In 1 year</text><text x="560" y="140" text-anchor="middle" font-size="12">USD 1.155</text>
      <path class="link" d="M140 110 C250 40 390 40 498 110" marker-end="url(#arr8)"/>
      <text x="320" y="44" text-anchor="middle" font-size="12">Route 1: invest USD at 5% → 1.10 × 1.05 = 1.155</text>
      <rect x="260" y="180" width="120" height="44" rx="8" class="box"/><text x="320" y="200" text-anchor="middle" font-size="12">EUR 1.00 → 1.03</text><text x="320" y="216" text-anchor="middle" font-size="11" class="muted-text">invest at 3%</text>
      <path class="link" d="M140 140 L258 196" marker-end="url(#arr8)"/>
      <path class="link" d="M380 196 L498 140" marker-end="url(#arr8)"/>
      <text x="170" y="196" font-size="11" class="muted-text">convert at spot</text>
      <text x="420" y="200" font-size="11" class="muted-text">sell forward at F</text>
      <text x="320" y="250" text-anchor="middle" font-size="12" font-weight="700">No arbitrage: 1.03 × F = 1.155 → F = 1.1214</text>
    </svg>
  </div>
  <figcaption>The euro earns less interest, so it must be worth more in the forward market (a forward premium) to equalise returns. This is covered interest rate parity.</figcaption>
</figure>`;

const lab = `
<h2>FX calculator lab</h2>

<div class="card">
  <h3 style="margin-top:0">Tool 1: Percentage change</h3>
  <div class="lab">
    <div>
      <div class="control"><label>Price currency</label><input class="num-input" id="pcP" value="USD" maxlength="3"></div>
      <div class="control"><label>Base currency</label><input class="num-input" id="pcB" value="EUR" maxlength="3"></div>
      <div class="control"><label>Old rate (S₀)</label><input class="num-input" id="pc0" type="number" step="0.0001" value="1.1000"></div>
      <div class="control"><label>New rate (S₁)</label><input class="num-input" id="pc1" type="number" step="0.0001" value="1.2100"></div>
    </div>
    <div>
      <div class="readout">
        <div><span id="pcBl">Base currency change</span><strong id="pcBc"></strong></div>
        <div><span id="pcPl">Price currency change</span><strong id="pcPc"></strong></div>
      </div>
      <div class="verdict" id="pcNote"></div>
    </div>
  </div>
</div>

<div class="card">
  <h3 style="margin-top:0">Tool 2: Cross rates</h3>
  <div class="lab">
    <div>
      <p class="muted" style="margin-top:0">Chain (common currency cancels):</p>
      <div class="control"><label>JPY/USD</label><input class="num-input" id="cr1" type="number" step="0.01" value="150.00"></div>
      <div class="control"><label>USD/EUR</label><input class="num-input" id="cr2" type="number" step="0.0001" value="1.1000"></div>
      <p class="muted">Divide (common currency in the same position):</p>
      <div class="control"><label>USD/GBP</label><input class="num-input" id="cr3" type="number" step="0.0001" value="1.3000"></div>
      <div class="control"><label>USD/EUR</label><input class="num-input" id="cr4" type="number" step="0.0001" value="1.1000"></div>
    </div>
    <div>
      <div class="readout">
        <div><span>JPY/EUR = JPY/USD × USD/EUR</span><strong id="crA"></strong></div>
        <div><span>EUR/JPY (inverse)</span><strong id="crAi"></strong></div>
        <div><span>EUR/GBP = USD/GBP ÷ USD/EUR</span><strong id="crB"></strong></div>
        <div><span>GBP/EUR (inverse)</span><strong id="crBi"></strong></div>
      </div>
    </div>
  </div>
</div>

<div class="card">
  <h3 style="margin-top:0">Tool 3: Forward rate (covered interest parity)</h3>
  <div class="lab">
    <div>
      <div class="control"><label>Spot rate (price/base)</label><input class="num-input" id="fwS" type="number" step="0.0001" value="1.0850"></div>
      <div class="control"><label for="fwIp">Price-currency interest rate <output id="fwIpo"></output></label><input type="range" id="fwIp" min="0" max="15" step="0.05" value="4.5"></div>
      <div class="control"><label for="fwIb">Base-currency interest rate <output id="fwIbo"></output></label><input type="range" id="fwIb" min="0" max="15" step="0.05" value="2.5"></div>
      <div class="control"><label for="fwD">Days to maturity <output id="fwDo"></output></label><input type="range" id="fwD" min="30" max="720" step="30" value="180"></div>
    </div>
    <div>
      <div class="readout">
        <div><span>Forward rate</span><strong id="fwF"></strong></div>
        <div><span>Forward points (× 10,000)</span><strong id="fwPts"></strong></div>
        <div><span>Premium / discount (period)</span><strong id="fwPrem"></strong></div>
        <div><span>Annualised</span><strong id="fwAnn"></strong></div>
      </div>
      <div class="verdict" id="fwNote"></div>
    </div>
  </div>
</div>`;

function initLab(el) {
  const f = window.Econ.fmt;
  const q = id => el.querySelector('#' + id);
  function pct() {
    const P = (q('pcP').value || 'P').toUpperCase(), B = (q('pcB').value || 'B').toUpperCase();
    const s0 = +q('pc0').value, s1 = +q('pc1').value;
    if (!(s0 > 0 && s1 > 0)) return;
    const b = s1 / s0 - 1, p = s0 / s1 - 1;
    q('pcBl').textContent = `${B} (base) vs ${P}`;
    q('pcPl').textContent = `${P} (price) vs ${B}`;
    q('pcBc').textContent = (b >= 0 ? '+' : '') + (b * 100).toFixed(2) + '%';
    q('pcPc').textContent = (p >= 0 ? '+' : '') + (p * 100).toFixed(2) + '%';
    const v = q('pcNote');
    v.className = 'verdict';
    v.innerHTML = b === 0 ? 'No change.' :
      `${P}/${B} ${b > 0 ? 'rose' : 'fell'}, so the <strong>${B} ${b > 0 ? 'appreciated' : 'depreciated'}</strong> by ${Math.abs(b * 100).toFixed(2)}% and the <strong>${P} ${b > 0 ? 'depreciated' : 'appreciated'}</strong> by ${Math.abs(p * 100).toFixed(2)}%. Note they are not equal and opposite.`;
  }
  ['pcP', 'pcB', 'pc0', 'pc1'].forEach(id => q(id).addEventListener('input', pct));
  pct();

  function cross() {
    const a = +q('cr1').value * +q('cr2').value;
    const b = +q('cr4').value ? +q('cr3').value / +q('cr4').value : 0;
    q('crA').textContent = f(a, 4);
    q('crAi').textContent = a ? f(1 / a, 6) : '—';
    q('crB').textContent = f(b, 4);
    q('crBi').textContent = b ? f(1 / b, 4) : '—';
  }
  ['cr1', 'cr2', 'cr3', 'cr4'].forEach(id => q(id).addEventListener('input', cross));
  cross();

  function fwd() {
    const S = +q('fwS').value, ip = +q('fwIp').value / 100, ib = +q('fwIb').value / 100, d = +q('fwD').value;
    q('fwIpo').textContent = (ip * 100).toFixed(2) + '%';
    q('fwIbo').textContent = (ib * 100).toFixed(2) + '%';
    q('fwDo').textContent = d;
    if (!(S > 0)) return;
    const F = S * (1 + ip * d / 360) / (1 + ib * d / 360);
    const prem = F / S - 1;
    q('fwF').textContent = f(F, 4);
    q('fwPts').textContent = ((F - S) * 10000 >= 0 ? '+' : '') + ((F - S) * 10000).toFixed(1);
    q('fwPrem').textContent = (prem * 100).toFixed(3) + '%';
    q('fwAnn').textContent = (prem * 360 / d * 100).toFixed(3) + '%';
    const v = q('fwNote');
    if (Math.abs(F - S) < 1e-9) { v.className = 'verdict'; v.textContent = 'Equal interest rates, so forward = spot.'; return; }
    v.className = 'verdict';
    v.innerHTML = F > S
      ? `The price-currency rate is higher, so the <strong>base currency trades at a forward premium</strong> (and the higher-yielding price currency at a discount).`
      : `The base-currency rate is higher, so the <strong>base currency trades at a forward discount</strong>.`;
  }
  ['fwS', 'fwIp', 'fwIb', 'fwD'].forEach(id => q(id).addEventListener('input', fwd));
  fwd();
}

const examples = `
<h2>Exchange rates in the real world</h2>
<div class="grid">
  <div class="card"><div class="icon" aria-hidden="true">💴</div><span class="tag">Interest differentials</span><h4>The weak yen and the carry trade (2024)</h4><p>With Japanese rates near zero and US rates above 5%, investors borrowed yen to buy higher-yielding assets. The yen weakened past 160 per dollar in mid-2024, its weakest since 1986. When the BoJ hiked in late July, the carry trade unwound sharply in early August.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">💶</div><span class="tag">Quotes &amp; % change</span><h4>Euro–dollar parity (2022)</h4><p>In July 2022 the euro fell below one dollar for the first time in about 20 years, as the Fed hiked faster than the ECB and Europe faced an energy shock. A fall from about 1.13 to 1.00 is roughly a 12% euro depreciation, but a 13% dollar appreciation.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🏢</div><span class="tag ext">Hedging with forwards</span><h4>Exporters locking in revenue</h4><p>Indian IT services firms earn most of their revenue in dollars and routinely sell dollars forward. Because INR interest rates are higher than USD rates, the dollar trades at a forward <strong>premium</strong> against the rupee, so exporters lock in <em>more</em> rupees than at spot.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🔁</div><span class="tag">Arbitrage</span><h4>Triangular arbitrage</h4><p>If a bank's JPY/EUR quote differs from JPY/USD × USD/EUR, a trader can buy cheap and sell dear across three currencies. Electronic trading closes such gaps within milliseconds, which is why cross rates hold so tightly in practice.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">✈️</div><span class="tag">Real exchange rate</span><h4>Tourism and competitiveness</h4><p>A country whose inflation consistently exceeds its trading partners' sees a <strong>real appreciation</strong> unless its currency depreciates enough to compensate. Its exports and tourism become more expensive even when the nominal rate is stable.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">📐</div><span class="tag">Convention check</span><h4>"USD/INR 83" in the newspaper</h4><p>Market convention "USD/INR 83" means 83 rupees per dollar. In CFA notation this is <strong>INR/USD = 83</strong> (USD is the base currency). Always identify the base currency before calculating.</p></div>
</div>

<h3>Quick recap</h3>
<div class="card table-wrap">
  <table class="text">
    <thead><tr><th>Calculation</th><th>Formula</th></tr></thead>
    <tbody>
      <tr><td>% change of base currency</td><td>S₁ ÷ S₀ − 1</td></tr>
      <tr><td>% change of price currency</td><td>S₀ ÷ S₁ − 1</td></tr>
      <tr><td>Cross rate</td><td>A/C = A/B × B/C</td></tr>
      <tr><td>Forward rate</td><td>F = S × (1 + i<sub>p</sub>τ) ÷ (1 + i<sub>b</sub>τ), τ = days/360</td></tr>
      <tr><td>Forward points</td><td>(F − S) × 10,000</td></tr>
      <tr><td>Real exchange rate</td><td>q<sub>d/f</sub> = S<sub>d/f</sub> × P<sub>f</sub> ÷ P<sub>d</sub></td></tr>
    </tbody>
  </table>
</div>`;

const caseHtml = `
<h2>Case study: Hedging an exporter's dollar receipts</h2>
<div class="card">
  <p><strong>Saffron Software</strong> (fictional), based in Pune, will receive <strong>USD 1,000,000</strong> from a US client in <strong>90 days</strong>.</p>
  <ul>
    <li>Spot rate: <strong>INR/USD = 83.50</strong> (rupees per dollar)</li>
    <li>90-day interest rates: INR <strong>6.50%</strong>, USD <strong>5.00%</strong> (annualised, actual/360)</li>
    <li>Saffron also bills a German client in euros. USD/EUR spot = <strong>1.0800</strong></li>
  </ul>
</div>
<p class="muted">Write your answers (notes are saved in this browser), then compare with the model answers.</p>

<div class="q">
  <div class="q-num">Question 1 · 4 marks</div>
  <div class="q-text">Calculate the 90-day forward rate and the forward points. Does the USD trade at a forward premium or discount? How many rupees can Saffron lock in?</div>
  <textarea aria-label="Your answer to question 1"></textarea>
  <button class="btn reveal" style="margin-top:8px">Show model answer</button>
  <div class="model" hidden>
    <p>Price currency = INR, base = USD. F = 83.50 × (1 + 0.065 × 90/360) ÷ (1 + 0.05 × 90/360) = 83.50 × 1.01625 ÷ 1.0125 = <strong>83.8093</strong>.</p>
    <p>Forward points ≈ 83.8093 − 83.50 = 0.3093 rupees (≈ 31 paise; for a two-decimal quote, points are often shown × 100 = <strong>30.9</strong>).</p>
    <p>The USD (lower interest rate) trades at a forward <strong>premium</strong>. Saffron locks in 1,000,000 × 83.8093 = <strong>₹83,809,300</strong>.</p>
  </div>
</div>

<div class="q">
  <div class="q-num">Question 2 · 3 marks</div>
  <div class="q-text">In 90 days the spot rate is 82.00. Compute the percentage change in the USD and INR, and the value of the hedge.</div>
  <textarea aria-label="Your answer to question 2"></textarea>
  <button class="btn reveal" style="margin-top:8px">Show model answer</button>
  <div class="model" hidden>
    <p>USD (base): 82.00 ÷ 83.50 − 1 = <strong>−1.80%</strong> (depreciated). INR (price): 83.50 ÷ 82.00 − 1 = <strong>+1.83%</strong> (appreciated).</p>
    <p>Unhedged, Saffron would receive ₹82,000,000. The hedge locks in ₹83,809,300, so it is worth <strong>₹1,809,300</strong>.</p>
  </div>
</div>

<div class="q">
  <div class="q-num">Question 3 · 2 marks</div>
  <div class="q-text">Calculate the INR/EUR cross rate at spot.</div>
  <textarea aria-label="Your answer to question 3"></textarea>
  <button class="btn reveal" style="margin-top:8px">Show model answer</button>
  <div class="model" hidden>
    <p>INR/EUR = INR/USD × USD/EUR = 83.50 × 1.0800 = <strong>90.18</strong> rupees per euro. USD cancels because it is the base in one quote and the price in the other.</p>
  </div>
</div>`;

window.MODULES.push({
  id: 'm8', lm: 8, lmTitle: 'Exchange Rate Calculations',
  title: 'Exchange Rate Calculations',
  subtitle: 'Quotes, percentage changes, cross rates, forward rates and real exchange rates.',
  learn: [
    { id: 'overview', label: 'Overview', html: overview },
    { id: 'concepts', label: 'Key Formulas', html: concepts },
    { id: 'diagrams', label: 'Diagrams', html: diagrams },
    { id: 'lab', label: 'FX Calculator', html: lab, init: initLab },
    { id: 'examples', label: 'Real World', html: examples }
  ],
  mcq: [
    { q: 'Using CFA notation, a quote of USD/EUR = 1.1000 means:', o: ['1 USD costs 1.10 EUR', '1 EUR costs 1.10 USD', 'USD is the base currency', 'EUR is the price currency'], a: 1, e: 'Price/base: EUR is the base (one unit) and USD is the price currency.' },
    { q: 'USD/EUR moves from 1.1000 to 1.2100. The euro has:', o: ['Depreciated by 10%', 'Appreciated by 10%', 'Appreciated by 9.09%', 'Depreciated by 9.09%'], a: 1, e: 'Base currency change = 1.21 ÷ 1.10 − 1 = <strong>+10%</strong>.' },
    { q: 'Using the same move (USD/EUR 1.1000 → 1.2100), the US dollar has changed against the euro by:', o: ['+10.00%', '−10.00%', '−9.09%', '+9.09%'], a: 2, e: 'Price currency change = 1.10 ÷ 1.21 − 1 = <strong>−9.09%</strong>.' },
    { q: 'Given USD/EUR = 1.1000 and JPY/USD = 150.00, the JPY/EUR cross rate is:', o: ['136.36', '151.10', '165.00', '0.0073'], a: 2, e: 'JPY/USD × USD/EUR = 150 × 1.10 = <strong>165.00</strong>.' },
    { q: 'Given USD/GBP = 1.3000 and USD/EUR = 1.1000, the EUR/GBP cross rate is closest to:', o: ['0.8462', '1.1818', '1.4300', '0.2000'], a: 1, e: 'EUR/GBP = USD/GBP ÷ USD/EUR = 1.30 ÷ 1.10 = <strong>1.1818</strong>.' },
    { q: 'Spot USD/EUR = 1.1000, the 1-year USD rate is 5% and the EUR rate is 3%. The 1-year forward rate (360-day year) is closest to:', o: ['1.0790', '1.1000', '1.1214', '1.1330'], a: 2, e: 'F = 1.10 × 1.05 ÷ 1.03 = <strong>1.1214</strong>.' },
    { q: 'If the base currency has a lower interest rate than the price currency, the base currency will trade at:', o: ['A forward discount', 'A forward premium', 'Par with spot', 'An indeterminate forward rate'], a: 1, e: 'F = S × (1 + i<sub>p</sub>τ)/(1 + i<sub>b</sub>τ) > S when i<sub>p</sub> > i<sub>b</sub>.' },
    { q: 'Spot USD/EUR is 1.1000 and the 3-month forward points are +25. The forward rate is:', o: ['1.0975', '1.1025', '1.1250', '1.3500'], a: 1, e: 'F = 1.1000 + 25/10,000 = <strong>1.1025</strong>.' },
    { q: 'The nominal rate S<sub>d/f</sub> = 1.50, the foreign price level is 110 and the domestic price level is 100. The real exchange rate q<sub>d/f</sub> is:', o: ['1.36', '1.50', '1.65', '0.61'], a: 2, e: 'q = 1.50 × 110 ÷ 100 = <strong>1.65</strong>.' },
    { q: 'The nominal exchange rate is unchanged, but domestic inflation is higher than foreign inflation. The domestic currency has experienced a:', o: ['Real depreciation', 'Real appreciation', 'Nominal appreciation', 'No real change'], a: 1, e: '%Δq ≈ %ΔS + π<sub>f</sub> − π<sub>d</sub> is negative, so q<sub>d/f</sub> falls: domestic goods become relatively more expensive (real appreciation).' },
    { q: 'Which currency in a pair typically trades at a forward discount?', o: ['The one with the lower interest rate', 'The one with the higher interest rate', 'Always the base currency', 'Always the US dollar'], a: 1, e: 'The forward discount offsets the higher interest earned, so there is no arbitrage.' },
    { q: 'If JPY/USD = 150.00, then USD/JPY is closest to:', o: ['0.006667', '0.0150', '1.5000', '150.00'], a: 0, e: '1 ÷ 150 = <strong>0.006667</strong> USD per yen.' }
  ],
  match: { pairs: [
    ['Base currency', 'The currency that is the "one unit" in a quote'],
    ['Price currency', 'The currency in which the price of one base unit is expressed'],
    ['Direct quote', 'Domestic currency per unit of foreign currency'],
    ['Cross rate', 'An exchange rate derived from two quotes that share a currency'],
    ['Forward premium', 'Forward rate above spot for the base currency'],
    ['Forward points', '(Forward − spot) × 10,000'],
    ['Covered interest parity', 'No-arbitrage link between forward, spot and interest rates'],
    ['Real exchange rate', 'Nominal rate adjusted for relative price levels'],
    ['Carry trade', 'Borrowing in a low-rate currency to invest in a high-rate one']
  ] },
  tf: [
    { s: 'In CFA notation, the currency in the denominator of a quote is the base currency.', a: 'True', e: 'Price/base: the denominator is the one unit.' },
    { s: 'If a currency appreciates by 10%, the other currency depreciates by exactly 10%.', a: 'False', e: 'S₀/S₁ − 1 ≠ −(S₁/S₀ − 1). +10% corresponds to −9.09%.' },
    { s: 'Under covered interest parity, the higher-interest-rate currency trades at a forward discount.', a: 'True', e: 'The discount offsets its interest-rate advantage.' },
    { s: 'Forward points of +40 on a spot rate of 1.2500 give a forward rate of 1.2540.', a: 'True', e: '1.2500 + 40/10,000 = 1.2540.' },
    { s: 'To compute EUR/GBP from USD/GBP and USD/EUR, you multiply the two quotes.', a: 'False', e: 'Divide: USD/GBP ÷ USD/EUR (equivalently, multiply by the inverse EUR/USD).' },
    { s: 'A real depreciation of the domestic currency improves its international competitiveness.', a: 'True', e: 'Domestic goods become relatively cheaper for foreigners.' },
    { s: 'The market quote "EUR/USD 1.08" means 1.08 euros per dollar.', a: 'False', e: 'Market convention puts the base first: 1.08 USD per EUR (USD/EUR in CFA notation).' },
    { s: 'The forward rate is the market\'s unbiased forecast of the future spot rate under covered interest parity.', a: 'False', e: 'CIP is a no-arbitrage pricing relationship, not a forecast.' }
  ],
  classify: {
    choices: ['Base currency appreciated', 'Base currency depreciated'],
    intro: 'Each quote is in CFA notation (price/base). Did the <strong>base</strong> currency appreciate or depreciate?',
    items: [
      { s: 'USD/EUR moves from 1.0800 to 1.1200.', a: 'Base currency appreciated', e: 'Each EUR buys more USD.' },
      { s: 'JPY/USD moves from 150.00 to 145.00.', a: 'Base currency depreciated', e: 'Each USD buys fewer yen.' },
      { s: 'USD/GBP moves from 1.3000 to 1.2500.', a: 'Base currency depreciated', e: 'GBP buys fewer dollars.' },
      { s: 'CHF/USD moves from 0.9000 to 0.8800.', a: 'Base currency depreciated', e: 'USD buys fewer francs.' },
      { s: 'INR/USD moves from 83.00 to 86.00.', a: 'Base currency appreciated', e: 'USD buys more rupees.' },
      { s: 'MXN/USD moves from 18.50 to 17.20.', a: 'Base currency depreciated', e: 'USD buys fewer pesos.' },
      { s: 'EUR/GBP moves from 1.1500 to 1.1800.', a: 'Base currency appreciated', e: 'GBP buys more euros.' },
      { s: 'USD/AUD moves from 0.6500 to 0.6700.', a: 'Base currency appreciated', e: 'AUD buys more dollars.' }
    ]
  },
  caseStudy: { html: caseHtml }
});
})();
