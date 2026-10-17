/* LM4: Monetary Policy */
(() => {
const overview = `
<h2>Money and central banks</h2>
<div class="callout">
  <strong>Monetary policy</strong> is the central bank's management of interest rates and the money supply to achieve its objectives. The main objective is almost always <strong>price stability</strong> (low, stable inflation).
</div>
<div class="callout cfa"><strong>CFA exam focus.</strong> Describe the roles, objectives and tools of central banks; explain the transmission mechanism; describe the qualities of an effective central bank; explain the relationships between monetary policy, inflation and economic growth; contrast the costs of expected and unexpected inflation; determine whether a policy stance is expansionary or contractionary; and describe how monetary and fiscal policy interact.</div>

<h3>What is money?</h3>
<div class="grid">
  <div class="card"><h4>Medium of exchange</h4><p>Accepted in payment for goods and services, which removes the need for barter.</p></div>
  <div class="card"><h4>Store of value</h4><p>Holds purchasing power over time (unless inflation erodes it).</p></div>
  <div class="card"><h4>Unit of account</h4><p>A common measure for pricing and comparing goods.</p></div>
</div>
<p><strong>Narrow money</strong> (e.g. M1) is notes, coins and demand deposits. <strong>Broad money</strong> (e.g. M2) adds savings and time deposits.</p>

<h3>How banks create money</h3>
<p>Under <strong>fractional reserve banking</strong>, banks keep only part of each deposit as reserves and lend the rest. The loan is spent, redeposited and lent again.</p>
<p><span class="formula">Money multiplier = 1 ÷ reserve requirement</span></p>
<p>With a 10% reserve requirement, a new $1,000 deposit can support up to $10,000 of total deposits.</p>

<h3>Quantity theory and the Fisher effect</h3>
<p><span class="formula">M × V = P × Y</span> (money × velocity = price level × real output). If V and Y are stable, faster money growth leads to higher inflation: <strong>money neutrality</strong> in the long run.</p>
<p><span class="formula">Nominal rate ≈ real rate + expected inflation (+ risk premium)</span></p>
<p class="muted">The Fisher effect: when expected inflation rises, nominal rates rise to keep real returns unchanged.</p>

<h3>Roles of a central bank</h3>
<ul>
  <li>Monopoly supplier of the currency</li>
  <li>Banker to the government and bankers' bank</li>
  <li><strong>Lender of last resort</strong> to the banking system</li>
  <li>Regulator and supervisor of the payments system and (often) banks</li>
  <li>Conductor of monetary policy</li>
  <li>Manager of foreign currency and gold reserves</li>
</ul>
<p class="muted">Objectives: price stability is primary. Some central banks have a <strong>dual mandate</strong>; the US Federal Reserve targets maximum employment and stable prices.</p>`;

const concepts = `
<h2>Key concepts</h2>

<h3>Monetary policy tools</h3>
<div class="grid">
  <div class="card"><span class="tag">Main tool</span><h4>Policy rate</h4><p>The rate at which the central bank lends to banks, or the target for interbank lending (e.g. the federal funds rate, repo rate). Raising it is contractionary.</p></div>
  <div class="card"><span class="tag">Tool</span><h4>Open market operations</h4><p><strong>Buying</strong> government bonds adds reserves, increases money supply and lowers rates (expansionary). <strong>Selling</strong> does the reverse.</p></div>
  <div class="card"><span class="tag">Tool</span><h4>Reserve requirements</h4><p>A higher reserve requirement reduces the money multiplier and lending (contractionary). It is used more often in emerging markets.</p></div>
</div>

<h3>The transmission mechanism</h3>
<p>A change in the policy rate feeds through four channels:</p>
<ol>
  <li><strong>Market interest rates:</strong> loan, mortgage and bond yields</li>
  <li><strong>Asset prices:</strong> higher rates lower bond, equity and house prices, which reduces wealth</li>
  <li><strong>Expectations and confidence</strong> of households and firms</li>
  <li><strong>Exchange rate:</strong> higher rates attract capital, so the currency appreciates and net exports fall</li>
</ol>
<p>These change domestic demand and net external demand, which together change total demand and then <strong>inflation</strong>. Import prices also respond to the exchange rate directly.</p>

<h3>Qualities of an effective central bank</h3>
<div class="grid">
  <div class="card"><h4>Independence</h4><p><strong>Operational independence:</strong> the central bank sets rates itself. <strong>Target independence:</strong> it also sets the inflation target. Independence protects against political pressure to print money.</p></div>
  <div class="card"><h4>Credibility</h4><p>If markets believe the central bank will hit its target, inflation expectations stay anchored and the target becomes partly self-fulfilling.</p></div>
  <div class="card"><h4>Transparency</h4><p>Published reports, meeting minutes and forward guidance help markets understand and anticipate policy.</p></div>
</div>

<h3>Policy frameworks</h3>
<div class="grid">
  <div class="card"><h4>Inflation targeting</h4><p>An explicit target (often 2%, or 4% ± 2% for the RBI) with an independent, transparent central bank. This is the dominant framework today.</p></div>
  <div class="card"><h4>Exchange-rate targeting</h4><p>Peg the currency to an anchor such as the USD. The country effectively <strong>imports</strong> the anchor's monetary policy and gives up independent control of its interest rates.</p></div>
</div>

<h3>Is policy expansionary or contractionary?</h3>
<p><span class="formula">Neutral rate = trend real growth + inflation target</span></p>
<p>Policy rate <strong>above</strong> neutral → <strong>contractionary</strong>. Policy rate <strong>below</strong> neutral → <strong>expansionary</strong>. The neutral rate cannot be observed directly, so estimates vary.</p>

<h3>Costs of inflation</h3>
<div class="grid">
  <div class="card"><h4>Expected inflation</h4><p>Menu costs (repricing), shoe-leather costs (holding less cash), and tax distortions.</p></div>
  <div class="card"><h4>Unexpected inflation (worse)</h4><p>Redistributes wealth from <strong>lenders to borrowers</strong>, raises uncertainty and risk premiums, and confuses price signals. Firms cannot tell general inflation from a change in relative prices.</p></div>
</div>

<h3>Limitations of monetary policy</h3>
<ul>
  <li><strong>Liquidity trap:</strong> with rates near zero, people hoard money and rate cuts stop working. Deflation makes it worse.</li>
  <li><strong>Long-term rates</strong> are set by markets ("bond market vigilantes"), so the central bank controls them only indirectly.</li>
  <li>Banks may <strong>hoard reserves</strong> instead of lending ("pushing on a string"), which is one reason for <strong>quantitative easing</strong> (large-scale asset purchases).</li>
  <li>Developing economies may lack deep bond markets or central bank credibility.</li>
</ul>

<h3>Monetary–fiscal policy interaction</h3>
<div class="card table-wrap">
  <table class="text">
    <thead><tr><th></th><th>Easy monetary</th><th>Tight monetary</th></tr></thead>
    <tbody>
      <tr><td><strong>Easy fiscal</strong></td><td>Highly expansionary: aggregate demand rises; low rates; budget deficit grows</td><td>Higher output <em>and</em> higher interest rates; the public sector's share of GDP rises</td></tr>
      <tr><td><strong>Tight fiscal</strong></td><td>Lower interest rates; the private sector's share of GDP rises</td><td>Contractionary: aggregate demand falls; public and private sectors both shrink</td></tr>
    </tbody>
  </table>
</div>`;

const diagrams = `
<h2>Diagrams</h2>

<h3>Figure 1: The monetary transmission mechanism</h3>
<figure>
  <div class="fig-wrap">
    <svg viewBox="0 0 700 300" role="img" aria-label="Flow chart. The policy rate affects market rates, asset prices, expectations and the exchange rate. These affect domestic demand and net external demand, which form total demand, which with import prices determines inflation.">
      <defs><marker id="arr4" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" style="fill:var(--axis)"/></marker></defs>
      <rect x="10" y="125" width="120" height="44" rx="8" class="box-accent"/><text x="70" y="152" text-anchor="middle" font-size="13" font-weight="700">Policy rate</text>
      <g font-size="12">
        <rect x="175" y="20" width="140" height="36" rx="8" class="box"/><text x="245" y="43" text-anchor="middle">Market rates</text>
        <rect x="175" y="88" width="140" height="36" rx="8" class="box"/><text x="245" y="111" text-anchor="middle">Asset prices</text>
        <rect x="175" y="156" width="140" height="36" rx="8" class="box"/><text x="245" y="179" text-anchor="middle">Expectations</text>
        <rect x="175" y="224" width="140" height="36" rx="8" class="box"/><text x="245" y="247" text-anchor="middle">Exchange rate</text>
        <rect x="360" y="70" width="140" height="36" rx="8" class="box"/><text x="430" y="93" text-anchor="middle">Domestic demand</text>
        <rect x="360" y="190" width="140" height="36" rx="8" class="box"/><text x="430" y="213" text-anchor="middle">Net external demand</text>
        <rect x="360" y="254" width="140" height="36" rx="8" class="box"/><text x="430" y="277" text-anchor="middle">Import prices</text>
      </g>
      <rect x="540" y="130" width="140" height="36" rx="8" class="box"/><text x="610" y="153" text-anchor="middle" font-size="12">Total demand</text>
      <rect x="540" y="230" width="140" height="44" rx="8" class="box-good"/><text x="610" y="257" text-anchor="middle" font-size="13" font-weight="700">Inflation</text>
      <g class="link" marker-end="url(#arr4)">
        <path d="M130 140 L173 38" marker-end="url(#arr4)"/><path d="M130 145 L173 106" marker-end="url(#arr4)"/>
        <path d="M130 152 L173 174" marker-end="url(#arr4)"/><path d="M130 160 L173 242" marker-end="url(#arr4)"/>
        <path d="M315 38 L358 82" marker-end="url(#arr4)"/><path d="M315 106 L358 90" marker-end="url(#arr4)"/>
        <path d="M315 174 L358 96" marker-end="url(#arr4)"/><path d="M315 236 L358 210" marker-end="url(#arr4)"/>
        <path d="M315 248 L358 270" marker-end="url(#arr4)"/>
        <path d="M500 88 L538 142" marker-end="url(#arr4)"/><path d="M500 208 L538 154" marker-end="url(#arr4)"/>
        <path d="M610 166 V228" marker-end="url(#arr4)"/><path d="M500 272 L538 256" marker-end="url(#arr4)"/>
      </g>
    </svg>
  </div>
  <figcaption>A rate <strong>hike</strong> raises market rates, lowers asset prices, cools expectations and strengthens the currency. Domestic and external demand fall, and inflation eases. Lags are long and variable, often 1–2 years.</figcaption>
</figure>

<h3>Figure 2: Reading the policy stance</h3>
<figure>
  <div class="fig-wrap">
    <svg viewBox="0 0 600 150" role="img" aria-label="A scale of policy rates with the neutral rate in the middle. Rates below neutral are expansionary; rates above are contractionary.">
      <rect x="40" y="60" width="260" height="26" class="fill-good"/>
      <rect x="300" y="60" width="260" height="26" class="fill-bad"/>
      <path class="dash" d="M300 40 V110"/>
      <text x="300" y="32" text-anchor="middle" font-size="13" font-weight="700">Neutral rate = trend growth + inflation target</text>
      <text x="170" y="78" text-anchor="middle" font-size="13" font-weight="700" style="fill:var(--good)">Expansionary (accommodative)</text>
      <text x="430" y="78" text-anchor="middle" font-size="13" font-weight="700" style="fill:var(--bad)">Contractionary (restrictive)</text>
      <text x="40" y="108" font-size="12" class="muted-text">Lower policy rate</text>
      <text x="560" y="108" text-anchor="end" font-size="12" class="muted-text">Higher policy rate</text>
      <text x="300" y="135" text-anchor="middle" font-size="12" class="muted-text">e.g. 2% trend growth + 2% target → neutral ≈ 4%</text>
    </svg>
  </div>
</figure>

<h3>Figure 3: The policy mix</h3>
<figure>
  <div class="fig-wrap">
    <svg viewBox="0 0 560 300" role="img" aria-label="Two-by-two grid of fiscal and monetary policy combinations with the effect of each.">
      <text x="300" y="20" text-anchor="middle" font-size="13" font-weight="700">Monetary policy</text>
      <text x="200" y="44" text-anchor="middle" font-size="12" font-weight="700" style="fill:var(--good)">Easy</text>
      <text x="420" y="44" text-anchor="middle" font-size="12" font-weight="700" style="fill:var(--bad)">Tight</text>
      <text x="22" y="170" text-anchor="middle" font-size="13" font-weight="700" transform="rotate(-90 22 170)">Fiscal policy</text>
      <text x="62" y="112" text-anchor="middle" font-size="12" font-weight="700" style="fill:var(--good)">Easy</text>
      <text x="62" y="232" text-anchor="middle" font-size="12" font-weight="700" style="fill:var(--bad)">Tight</text>
      <rect x="95" y="55" width="210" height="110" rx="8" class="box-good"/>
      <text x="200" y="98" text-anchor="middle" font-size="13" font-weight="700">Highly expansionary</text>
      <text x="200" y="118" text-anchor="middle" font-size="11">AD ↑↑, rates low</text>
      <text x="200" y="134" text-anchor="middle" font-size="11">budget deficit ↑</text>
      <rect x="315" y="55" width="210" height="110" rx="8" class="box"/>
      <text x="420" y="98" text-anchor="middle" font-size="13" font-weight="700">Output ↑, rates ↑</text>
      <text x="420" y="118" text-anchor="middle" font-size="11">public sector share</text>
      <text x="420" y="134" text-anchor="middle" font-size="11">of GDP ↑</text>
      <rect x="95" y="175" width="210" height="110" rx="8" class="box"/>
      <text x="200" y="218" text-anchor="middle" font-size="13" font-weight="700">Rates ↓</text>
      <text x="200" y="238" text-anchor="middle" font-size="11">private sector share</text>
      <text x="200" y="254" text-anchor="middle" font-size="11">of GDP ↑</text>
      <rect x="315" y="175" width="210" height="110" rx="8" class="box-bad"/>
      <text x="420" y="218" text-anchor="middle" font-size="13" font-weight="700">Contractionary</text>
      <text x="420" y="238" text-anchor="middle" font-size="11">AD ↓, both public and</text>
      <text x="420" y="254" text-anchor="middle" font-size="11">private sectors shrink</text>
    </svg>
  </div>
</figure>`;

const lab = `
<h2>Monetary lab</h2>

<div class="card">
  <h3 style="margin-top:0">Tool 1: Money creation</h3>
  <div class="lab">
    <div>
      <div class="control"><label for="mD">Initial deposit ($) <output id="mDo"></output></label><input type="range" id="mD" min="100" max="10000" step="100" value="1000"></div>
      <div class="control"><label for="mR">Reserve requirement <output id="mRo"></output></label><input type="range" id="mR" min="0.02" max="0.5" step="0.01" value="0.1"></div>
      <div class="readout">
        <div><span>Money multiplier</span><strong id="mMult"></strong></div>
        <div><span>Total deposits created</span><strong id="mTot"></strong></div>
        <div><span>New loans created</span><strong id="mLoans"></strong></div>
        <div><span>Total reserves held</span><strong id="mRes"></strong></div>
      </div>
    </div>
    <div class="table-wrap">
      <table><thead><tr><th>Round</th><th>Deposit</th><th>Reserves kept</th><th>Loaned out</th></tr></thead><tbody id="mRounds"></tbody></table>
    </div>
  </div>
</div>

<div class="card">
  <h3 style="margin-top:0">Tool 2: Policy stance &amp; real rate</h3>
  <div class="lab">
    <div>
      <div class="control"><label for="sG">Trend real GDP growth <output id="sGo"></output></label><input type="range" id="sG" min="0" max="7" step="0.25" value="2"></div>
      <div class="control"><label for="sT">Inflation target <output id="sTo"></output></label><input type="range" id="sT" min="1" max="6" step="0.25" value="2"></div>
      <div class="control"><label for="sP">Policy rate <output id="sPo"></output></label><input type="range" id="sP" min="0" max="12" step="0.25" value="5.5"></div>
      <div class="control"><label for="sE">Expected inflation <output id="sEo"></output></label><input type="range" id="sE" min="-1" max="10" step="0.25" value="3"></div>
    </div>
    <div>
      <div class="readout">
        <div><span>Neutral rate</span><strong id="sN"></strong></div>
        <div><span>Policy rate − neutral</span><strong id="sGap"></strong></div>
        <div><span>Real policy rate (Fisher)</span><strong id="sReal"></strong></div>
        <div><span>Stance</span><strong id="sStance"></strong></div>
      </div>
      <div class="verdict" id="sNote"></div>
    </div>
  </div>
</div>`;

function initLab(el) {
  const f = window.Econ.fmt;
  const mD = el.querySelector('#mD'), mR = el.querySelector('#mR');
  function money() {
    const D = +mD.value, rr = +mR.value;
    el.querySelector('#mDo').textContent = '$' + f(D, 0);
    el.querySelector('#mRo').textContent = (rr * 100).toFixed(0) + '%';
    const mult = 1 / rr, total = D * mult;
    el.querySelector('#mMult').textContent = mult.toFixed(2) + '×';
    el.querySelector('#mTot').textContent = '$' + f(total, 0);
    el.querySelector('#mLoans').textContent = '$' + f(total - D, 0);
    el.querySelector('#mRes').textContent = '$' + f(D, 0);
    let rows = '', d = D;
    for (let i = 1; i <= 6; i++) {
      rows += `<tr><td>${i}</td><td>$${f(d, 0)}</td><td>$${f(d * rr, 0)}</td><td>$${f(d * (1 - rr), 0)}</td></tr>`;
      d *= (1 - rr);
    }
    rows += `<tr><td>…</td><td colspan="3" class="muted" style="text-align:left">continues until reserves = initial deposit</td></tr>`;
    el.querySelector('#mRounds').innerHTML = rows;
  }
  [mD, mR].forEach(x => x.addEventListener('input', money));
  money();

  const ids = ['sG', 'sT', 'sP', 'sE'];
  const r = Object.fromEntries(ids.map(id => [id, el.querySelector('#' + id)]));
  function stance() {
    ids.forEach(id => el.querySelector('#' + id + 'o').textContent = (+r[id].value).toFixed(2) + '%');
    const N = +r.sG.value + +r.sT.value, P = +r.sP.value, real = P - +r.sE.value, gap = P - N;
    el.querySelector('#sN').textContent = N.toFixed(2) + '%';
    el.querySelector('#sGap').textContent = (gap >= 0 ? '+' : '') + gap.toFixed(2) + ' pp';
    el.querySelector('#sReal').textContent = real.toFixed(2) + '%';
    const label = Math.abs(gap) < 0.25 ? 'Neutral' : gap > 0 ? 'Contractionary' : 'Expansionary';
    el.querySelector('#sStance').textContent = label;
    const v = el.querySelector('#sNote');
    v.className = 'verdict' + (label === 'Contractionary' ? ' bad' : label === 'Expansionary' ? ' good' : '');
    v.innerHTML = label === 'Neutral'
      ? 'The policy rate is close to neutral: neither stimulating nor restraining the economy.'
      : `The policy rate is ${Math.abs(gap).toFixed(2)} pp ${gap > 0 ? 'above' : 'below'} neutral, so policy is <strong>${label.toLowerCase()}</strong>.` +
        (real < 0 ? ' The real policy rate is <strong>negative</strong>, which is strongly stimulative.' : '');
  }
  ids.forEach(id => r[id].addEventListener('input', stance));
  stance();
}

const examples = `
<h2>Monetary policy in the real world</h2>
<div class="grid">
  <div class="card"><div class="icon" aria-hidden="true">🇺🇸</div><span class="tag dis">Contractionary</span><h4>The Fed's 2022–23 hiking cycle</h4><p>Facing the highest inflation in 40 years, the Fed raised the federal funds target from near zero (0–0.25%) in March 2022 to 5.25–5.50% by July 2023, its fastest tightening in decades. It began cutting in September 2024 as inflation eased.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🖨️</div><span class="tag">Unconventional policy</span><h4>Quantitative easing (2008 &amp; 2020)</h4><p>With rates at zero, the Fed, ECB, BoE and BoJ bought trillions in bonds to push down long-term yields, a response to the liquidity trap. Reversing this is called quantitative tightening (QT).</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🇯🇵</div><span class="tag">Liquidity trap</span><h4>Bank of Japan's negative rates</h4><p>The BoJ held its policy rate below zero from 2016 and ended negative rates in March 2024, the last major central bank to do so. It shows how hard it is to escape low inflation.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🇮🇳</div><span class="tag ext">Inflation targeting</span><h4>Reserve Bank of India</h4><p>Since 2016 the RBI has followed a flexible inflation target of 4% CPI with a ±2% band, set by a Monetary Policy Committee. This is a textbook example of a transparent framework.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🇭🇰</div><span class="tag">Exchange-rate target</span><h4>Hong Kong's currency board</h4><p>The HKD is kept between 7.75 and 7.85 per USD. As a result, Hong Kong's interest rates closely follow US rates: it has effectively imported Fed policy.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🇹🇷</div><span class="tag dis">Credibility lost</span><h4>Turkey (2021–23)</h4><p>Rate cuts in the face of rising inflation, under political pressure, saw the lira slump and inflation exceed 80% in 2022. The episode is a lesson in why independence and credibility matter. Policy was later sharply reversed.</p></div>
</div>

<h3>Quick recap</h3>
<div class="card table-wrap">
  <table class="text">
    <thead><tr><th>Concept</th><th>Key point</th></tr></thead>
    <tbody>
      <tr><td>Money multiplier</td><td>1 ÷ reserve requirement</td></tr>
      <tr><td>Quantity theory</td><td>MV = PY</td></tr>
      <tr><td>Fisher effect</td><td>Nominal ≈ real + expected inflation</td></tr>
      <tr><td>Neutral rate</td><td>Trend real growth + inflation target</td></tr>
      <tr><td>Unexpected inflation</td><td>Transfers wealth from lenders to borrowers</td></tr>
      <tr><td>Easy fiscal + tight monetary</td><td>Higher rates; public sector share of GDP rises</td></tr>
    </tbody>
  </table>
</div>`;

const caseHtml = `
<h2>Case study: The Central Bank of Aurelia</h2>
<div class="card">
  <p>The (fictional) Central Bank of <strong>Aurelia</strong> has an inflation target of <strong>2%</strong>. Current conditions:</p>
  <ul>
    <li>CPI inflation is <strong>6%</strong> and household inflation expectations have risen to <strong>5%</strong></li>
    <li>Trend real GDP growth is estimated at <strong>2.5%</strong></li>
    <li>The policy rate is <strong>3%</strong></li>
    <li>The government has just announced a large, debt-financed spending programme</li>
  </ul>
</div>
<p class="muted">Write your answers (notes are saved in this browser), then compare with the model answers.</p>

<div class="q">
  <div class="q-num">Question 1 · 3 marks</div>
  <div class="q-text">Estimate the neutral rate and the real policy rate. Is current monetary policy expansionary or contractionary?</div>
  <textarea aria-label="Your answer to question 1"></textarea>
  <button class="btn reveal" style="margin-top:8px">Show model answer</button>
  <div class="model" hidden>
    <p>Neutral rate = 2.5% + 2% = <strong>4.5%</strong>. The policy rate of 3% is 1.5 pp below neutral, so policy is <strong>expansionary</strong>. Real policy rate ≈ 3% − 5% = <strong>−2%</strong>, which is strongly stimulative despite 6% inflation. The central bank should tighten.</p>
  </div>
</div>

<div class="q">
  <div class="q-num">Question 2 · 4 marks</div>
  <div class="q-text">If the central bank raises its policy rate to 6%, explain through which channels this would reduce inflation.</div>
  <textarea aria-label="Your answer to question 2"></textarea>
  <button class="btn reveal" style="margin-top:8px">Show model answer</button>
  <div class="model" hidden>
    <ul>
      <li><strong>Market rates:</strong> borrowing costs for mortgages and business loans rise, so consumption and investment fall.</li>
      <li><strong>Asset prices:</strong> bond, equity and house prices fall, so the wealth effect lowers spending.</li>
      <li><strong>Expectations:</strong> a credible, decisive move re-anchors inflation expectations and slows wage and price setting.</li>
      <li><strong>Exchange rate:</strong> higher rates attract capital and the currency appreciates. Import prices fall and net exports decline.</li>
    </ul>
  </div>
</div>

<div class="q">
  <div class="q-num">Question 3 · 4 marks</div>
  <div class="q-text">Describe the likely effects of combining the government's expansionary fiscal programme with tighter monetary policy.</div>
  <textarea aria-label="Your answer to question 3"></textarea>
  <button class="btn reveal" style="margin-top:8px">Show model answer</button>
  <div class="model" hidden>
    <p><strong>Easy fiscal + tight monetary</strong>: aggregate demand is supported by government spending but interest rates rise more than they would otherwise. Expect <strong>higher interest rates</strong>, <strong>crowding out</strong> of private investment, a <strong>larger public sector share of GDP</strong>, and a stronger currency (rates up, capital inflows). The central bank may need to raise rates further to offset the fiscal stimulus, making inflation harder and more costly to control.</p>
  </div>
</div>`;

window.MODULES.push({
  id: 'm4', lm: 4, lmTitle: 'Monetary Policy',
  title: 'Monetary Policy',
  subtitle: 'Money creation, central bank tools, the transmission mechanism and policy stance.',
  learn: [
    { id: 'overview', label: 'Overview', html: overview },
    { id: 'concepts', label: 'Key Concepts', html: concepts },
    { id: 'diagrams', label: 'Diagrams', html: diagrams },
    { id: 'lab', label: 'Lab', html: lab, init: initLab },
    { id: 'examples', label: 'Real World', html: examples }
  ],
  mcq: [
    { q: 'With a reserve requirement of 10%, a new deposit of $1,000 can lead to total deposits in the banking system of up to:', o: ['$1,100', '$9,000', '$10,000', '$100,000'], a: 2, e: 'Money multiplier = 1 ÷ 0.10 = 10, so $1,000 × 10 = <strong>$10,000</strong>, of which $9,000 is new lending.' },
    { q: 'If the nominal interest rate is 6% and expected inflation is 2.5%, the real interest rate is approximately:', o: ['2.5%', '3.5%', '8.5%', '15.0%'], a: 1, e: 'Fisher effect: real ≈ nominal − expected inflation = 6% − 2.5% = <strong>3.5%</strong>.' },
    { q: 'According to the quantity theory of money, if velocity and real output are constant, a 5% increase in the money supply will lead to:', o: ['A 5% rise in real output', 'A 5% rise in the price level', 'A 5% fall in velocity', 'No change in prices'], a: 1, e: 'MV = PY: with V and Y fixed, P must rise in proportion to M.' },
    { q: 'When a central bank buys government bonds in the open market, it:', o: ['Reduces bank reserves and raises rates', 'Increases bank reserves and tends to lower interest rates', 'Has no effect on the money supply', 'Raises the reserve requirement'], a: 1, e: 'The central bank pays for the bonds by crediting bank reserves, which expands the money supply.' },
    { q: 'Trend real growth is 2%, the inflation target is 2% and the policy rate is 5.5%. Monetary policy is:', o: ['Expansionary', 'Neutral', 'Contractionary', 'Impossible to determine'], a: 2, e: 'Neutral ≈ 2% + 2% = 4%. A policy rate of 5.5% is above neutral, so policy is <strong>contractionary</strong>.' },
    { q: 'A central bank that sets its own policy rate to meet an inflation target chosen by the government has:', o: ['Target independence only', 'Operational independence', 'No independence', 'Full target and operational independence'], a: 1, e: 'Operational independence = choosing the tools. Target independence = choosing the goal.' },
    { q: 'A liquidity trap is a situation in which:', o: ['Banks cannot obtain reserves', 'Interest rates are near zero and further monetary easing fails to stimulate demand', 'Inflation is very high', 'The currency is pegged'], a: 1, e: 'People are content to hold extra money at very low rates, so cutting rates (or adding reserves) no longer boosts spending.' },
    { q: 'Unexpectedly high inflation tends to:', o: ['Benefit lenders at the expense of borrowers', 'Benefit borrowers at the expense of lenders', 'Have no distributional effects', 'Reduce menu costs'], a: 1, e: 'Debts are repaid in money worth less than expected, so wealth shifts from lenders to borrowers.' },
    { q: 'A country that pegs its currency to the US dollar must generally:', o: ['Set interest rates independently of the US', 'Allow its domestic interest rates to follow US rates', 'Abolish its central bank', 'Have a floating exchange rate'], a: 1, e: 'To maintain the peg, monetary policy is aimed at the exchange rate, so the country imports US monetary policy.' },
    { q: 'Expansionary fiscal policy combined with contractionary monetary policy is most likely to result in:', o: ['Lower interest rates and a smaller public sector', 'Higher interest rates and a larger public sector share of GDP', 'Falling aggregate demand', 'A larger private sector share of GDP'], a: 1, e: 'Government spending props up demand while tight money raises rates and crowds out private activity.' },
    { q: 'Other things equal, an increase in a country\'s policy rate tends to:', o: ['Weaken its currency and raise net exports', 'Strengthen its currency and reduce net exports', 'Have no effect on the exchange rate', 'Raise asset prices'], a: 1, e: 'Higher rates attract capital inflows, so the currency appreciates and exports become less competitive.' },
    { q: 'Lending to commercial banks in a financial crisis to prevent bank runs is the central bank\'s role as:', o: ['Manager of FX reserves', 'Lender of last resort', 'Monopoly supplier of currency', 'Banker to the government'], a: 1, e: 'As lender of last resort, the central bank provides liquidity to solvent banks facing temporary funding stress.' }
  ],
  match: { pairs: [
    ['Money multiplier', 'Equal to 1 ÷ the reserve requirement'],
    ['Quantity theory of money', 'MV = PY'],
    ['Fisher effect', 'Nominal rate ≈ real rate + expected inflation'],
    ['Open market purchase', 'Central bank buys bonds, adding reserves to banks'],
    ['Neutral rate', 'Trend real growth plus the inflation target'],
    ['Operational independence', 'The central bank chooses its own tools and policy rate'],
    ['Liquidity trap', 'Rate cuts become ineffective because rates are near zero'],
    ['Lender of last resort', 'Provides emergency liquidity to banks in a crisis'],
    ['Quantitative easing', 'Large-scale asset purchases to lower long-term yields']
  ] },
  tf: [
    { s: 'Price stability is the primary objective of most central banks.', a: 'True', e: 'Some, like the Fed, also have an employment mandate.' },
    { s: 'Raising the reserve requirement increases the money multiplier.', a: 'False', e: 'Multiplier = 1 ÷ RR, so a higher RR gives a smaller multiplier.' },
    { s: 'Expected inflation is generally more costly to the economy than unexpected inflation.', a: 'False', e: 'Unexpected inflation is costlier: it redistributes wealth and raises uncertainty.' },
    { s: 'A policy rate below the neutral rate indicates expansionary monetary policy.', a: 'True', e: 'Below neutral stimulates demand.' },
    { s: 'Central banks can directly set long-term bond yields at any level they choose.', a: 'False', e: 'They control short rates. Long-term yields are set in markets, though QE can influence them.' },
    { s: 'Credibility helps a central bank anchor inflation expectations.', a: 'True', e: 'If people believe the target, expectations, and therefore wage and price setting, stay close to it.' },
    { s: 'A country with a fixed exchange rate can run a fully independent monetary policy with free capital flows.', a: 'False', e: 'It must align rates with the anchor currency (the "impossible trinity").' },
    { s: 'Higher interest rates tend to reduce asset prices.', a: 'True', e: 'Future cash flows are discounted at a higher rate.' }
  ],
  classify: {
    choices: ['Expansionary', 'Contractionary'],
    intro: 'Is each central bank action expansionary or contractionary?',
    items: [
      { s: 'The central bank buys government bonds in the open market.', a: 'Expansionary', e: 'Adds reserves and lowers rates.' },
      { s: 'The reserve requirement is raised from 4% to 6%.', a: 'Contractionary', e: 'Banks must hold more reserves and can lend less.' },
      { s: 'The policy rate is cut by 50 basis points.', a: 'Expansionary', e: 'Cheaper borrowing stimulates demand.' },
      { s: 'The central bank lets its bond holdings run off without reinvesting (quantitative tightening).', a: 'Contractionary', e: 'Withdraws reserves and puts upward pressure on long-term yields.' },
      { s: 'A new round of quantitative easing is launched.', a: 'Expansionary', e: 'Asset purchases lower long-term yields.' },
      { s: 'The policy rate is raised to well above the estimated neutral rate.', a: 'Contractionary', e: 'Restrictive stance.' },
      { s: 'The central bank promises to keep rates low "for an extended period" (forward guidance).', a: 'Expansionary', e: 'Lowers expected future short rates and therefore long rates.' },
      { s: 'The rate charged on emergency loans to banks is increased.', a: 'Contractionary', e: 'Makes borrowing reserves more expensive.' }
    ]
  },
  caseStudy: { html: caseHtml }
});
})();
