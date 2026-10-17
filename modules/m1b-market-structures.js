/* LM1 (part B): Market Structures, Breakeven & Shutdown, Concentration */
(() => {
const overview = `
<h2>Four market structures</h2>
<div class="callout">
  A <strong>market structure</strong> describes how many firms compete, how similar their products are, and how easy it is to enter. Together these decide how much <strong>pricing power</strong> a firm has, and so how it chooses price and output.
</div>
<div class="callout cfa"><strong>CFA exam focus.</strong> Compare the characteristics of the four structures; explain price, MR, MC and profit maximisation in each; find <strong>breakeven and shutdown</strong> points; describe oligopoly pricing strategies; and calculate and interpret <strong>concentration ratios and the HHI</strong>.</div>

<div class="card table-wrap">
  <table class="text">
    <thead><tr><th>Feature</th><th>Perfect competition</th><th>Monopolistic competition</th><th>Oligopoly</th><th>Monopoly</th></tr></thead>
    <tbody>
      <tr><td><strong>Number of sellers</strong></td><td>Many</td><td>Many</td><td>Few</td><td>One</td></tr>
      <tr><td><strong>Product</strong></td><td>Homogeneous (identical)</td><td>Differentiated</td><td>Homogeneous or differentiated</td><td>Unique, no close substitutes</td></tr>
      <tr><td><strong>Barriers to entry</strong></td><td>Very low</td><td>Low</td><td>High</td><td>Very high</td></tr>
      <tr><td><strong>Pricing power</strong></td><td>None (price taker)</td><td>Some</td><td>Some to considerable</td><td>Considerable (price searcher)</td></tr>
      <tr><td><strong>Non-price competition</strong></td><td>None</td><td>Advertising, product differentiation</td><td>Advertising, product differentiation</td><td>Advertising</td></tr>
      <tr><td><strong>Long-run economic profit</strong></td><td>Zero</td><td>Zero</td><td>Possible</td><td>Possible (unless regulated)</td></tr>
    </tbody>
  </table>
</div>

<h3>The universal profit rule: MR = MC</h3>
<p>In <em>every</em> market structure a firm maximises profit by producing the quantity where <strong>marginal revenue (MR) = marginal cost (MC)</strong>. What differs is the relationship between price and MR:</p>
<ul>
  <li><strong>Perfect competition:</strong> the firm faces a horizontal (perfectly elastic) demand curve, so <strong>P = MR = AR</strong>. It produces where P = MC.</li>
  <li><strong>Every other structure:</strong> the firm faces a downward-sloping demand curve. To sell one more unit it must lower the price on <em>all</em> units, so <strong>MR &lt; P</strong>. It produces where MR = MC, then charges the highest price demand allows, so <strong>P &gt; MC</strong>.</li>
</ul>
<p><span class="formula">MR = P × (1 − 1/|E<sub>P</sub>|)</span></p>
<p class="muted">This is why a monopolist never produces on the inelastic part of the demand curve: when |E<sub>P</sub>| &lt; 1, MR is negative.</p>

<h3>Elasticity of demand in each structure</h3>
<div class="grid">
  <div class="card"><h4>Perfect competition</h4><p>Firm-level demand is perfectly elastic. Market demand is downward-sloping.</p></div>
  <div class="card"><h4>Monopolistic competition</h4><p>Demand is downward-sloping but fairly elastic, because there are many close substitutes.</p></div>
  <div class="card"><h4>Oligopoly</h4><p>Demand depends on how rivals react. The kinked demand model is elastic above the current price and inelastic below it.</p></div>
  <div class="card"><h4>Monopoly</h4><p>The firm's demand <em>is</em> the market demand: downward-sloping, and less elastic because there are no close substitutes.</p></div>
</div>`;

const concepts = `
<h2>Key concepts</h2>

<h3>Breakeven and shutdown</h3>
<p>Compare revenue with costs to decide whether to operate, and for how long.</p>
<div class="card table-wrap">
  <table class="text">
    <thead><tr><th>Revenue vs cost</th><th>Per-unit equivalent</th><th>Short-run decision</th><th>Long-run decision</th></tr></thead>
    <tbody>
      <tr><td>TR ≥ TC</td><td>P ≥ ATC</td><td>Operate</td><td>Operate (economic profit ≥ 0)</td></tr>
      <tr><td>TVC ≤ TR &lt; TC</td><td>AVC ≤ P &lt; ATC</td><td><strong>Operate</strong>: revenue covers variable cost and part of fixed cost</td><td><strong>Exit</strong> the market</td></tr>
      <tr><td>TR &lt; TVC</td><td>P &lt; AVC</td><td><strong>Shut down</strong>: the loss is smaller if you stop (you lose only fixed cost)</td><td>Exit</td></tr>
    </tbody>
  </table>
</div>
<ul>
  <li><strong>Breakeven point:</strong> where TR = TC. In perfect competition this is where <strong>P = minimum ATC</strong>, so economic profit is zero (the firm still earns a <em>normal</em> profit).</li>
  <li><strong>Shutdown point:</strong> where <strong>P = minimum AVC</strong>. Below this price, every unit produced adds to the loss.</li>
  <li>Fixed costs are <strong>sunk</strong> in the short run. They are paid whether or not the firm produces, so they do not affect the short-run shutdown decision.</li>
</ul>

<h3>Oligopoly pricing models</h3>
<div class="grid">
  <div class="card"><span class="tag">Model</span><h4>Kinked demand curve</h4><p>Rivals <strong>match price cuts</strong> (to protect market share) but <strong>ignore price increases</strong> (to steal share). Demand is elastic above the kink and inelastic below it. This creates a gap in MR, so prices are sticky even when MC changes. <em>Weakness:</em> it does not explain how the kink price is set in the first place.</p></div>
  <div class="card"><span class="tag">Model</span><h4>Cournot</h4><p>Two firms choose <strong>quantities</strong> at the same time, each taking the rival's output as given. The equilibrium price and output fall <em>between</em> monopoly and perfect competition. As the number of firms grows, the outcome approaches perfect competition.</p></div>
  <div class="card"><span class="tag">Model</span><h4>Stackelberg (dynamic)</h4><p>Firms move <strong>sequentially</strong>. The <strong>leader</strong> commits to its output first and the follower reacts. The leader gains a first-mover advantage: it produces more and earns more.</p></div>
  <div class="card"><span class="tag">Model</span><h4>Dominant firm</h4><p>One firm has a large market share and cost advantages. It <strong>sets the price</strong>, and smaller "fringe" firms act as price takers who sell what they can at that price.</p></div>
  <div class="card"><span class="tag">Game theory</span><h4>Nash equilibrium</h4><p>No firm can improve its outcome by changing its strategy, <em>given</em> what rivals are doing. In the <strong>prisoner's dilemma</strong>, both firms cheat on a collusive agreement even though they would jointly earn more by cooperating.</p></div>
  <div class="card"><span class="tag dis">Collusion</span><h4>Cartels</h4><p>Firms agree to restrict output and raise prices. Cartels are unstable because each member has an incentive to secretly produce more. Collusion is more likely with few firms, similar costs, homogeneous products and high barriers to entry.</p></div>
</div>

<h3>Measuring concentration</h3>
<div class="grid">
  <div class="card">
    <h4>N-firm concentration ratio</h4>
    <p><span class="formula">CR<sub>N</sub> = sum of market shares of the N largest firms</span></p>
    <p>Easy to calculate, but <strong>insensitive to mergers</strong> among the top firms and it ignores market power and barriers to entry.</p>
  </div>
  <div class="card">
    <h4>Herfindahl-Hirschman Index (HHI)</h4>
    <p><span class="formula">HHI = Σ (market share %)²</span></p>
    <p>Ranges from near 0 (fragmented) to <strong>10,000</strong> (pure monopoly). Squaring gives big firms more weight, so the HHI <strong>does</strong> rise when large firms merge.</p>
  </div>
</div>
<p class="muted">Both measures share some limitations. They ignore <strong>barriers to entry</strong>, the threat of <strong>potential entrants</strong>, and the <strong>elasticity of demand</strong>. A market with high concentration but very low entry barriers (a "contestable" market) may still behave competitively.</p>`;

const diagrams = `
<h2>Diagrams</h2>

<h3>Figure 1: Perfect competition: breakeven and shutdown points</h3>
<figure>
  <div class="fig-wrap">
    <svg viewBox="0 0 560 340" role="img" aria-label="Cost curves for a perfectly competitive firm. The MC curve passes through the minimum of the AVC curve, which is the shutdown point, and then through the minimum of the ATC curve, which is the breakeven point.">
      <path class="axis" d="M70 20 V300 H540"/>
      <path class="curve3" d="M150 90 C200 190 250 206 304 206 C360 206 400 170 440 90"/>
      <path class="curve2" d="M140 170 C180 235 220 250 260 250 C310 250 360 220 430 140"/>
      <path class="curve" d="M110 250 Q180 315 260 250 T380 60"/>
      <text x="386" y="58" font-size="13" font-weight="700" style="fill:var(--curve)">MC</text>
      <text x="446" y="88" font-size="13" font-weight="700" style="fill:var(--curve3)">ATC</text>
      <text x="436" y="138" font-size="13" font-weight="700" style="fill:var(--curve2)">AVC</text>

      <path class="dash" d="M70 206 H520"/>
      <path class="dash" d="M70 250 H520"/>
      <text x="62" y="210" text-anchor="end" font-size="12" font-weight="700">P₁</text>
      <text x="62" y="254" text-anchor="end" font-size="12" font-weight="700">P₂</text>
      <circle class="dot" cx="304" cy="206" r="5"/>
      <circle cx="260" cy="250" r="5" style="fill:var(--bad)"/>
      <text x="330" y="228" font-size="12" font-weight="700">Breakeven: P = min ATC</text>
      <text x="276" y="270" font-size="12" font-weight="700" style="fill:var(--bad)">Shutdown: P = min AVC</text>
      <text x="300" y="322" text-anchor="middle" font-size="12" class="muted-text">Quantity (Q) →</text>
      <text x="24" y="160" text-anchor="middle" font-size="12" class="muted-text" transform="rotate(-90 24 160)">Price / cost →</text>
    </svg>
  </div>
  <figcaption>Above P₁ the firm makes an economic profit. Between P₂ and P₁ it makes a loss but keeps operating in the short run. Below P₂ it shuts down. The MC curve above min AVC is the firm's short-run supply curve.</figcaption>
</figure>

<h3>Figure 2: Monopoly pricing</h3>
<figure>
  <div class="fig-wrap">
    <svg viewBox="0 0 560 340" role="img" aria-label="Monopoly diagram. Demand slopes down; marginal revenue slopes down twice as steeply. The firm produces Q star where MR equals MC, then charges price P star read off the demand curve, above MC.">
      <path class="axis" d="M60 30 V300 H540"/>
      <path class="curve" d="M80 60 L500 300"/>
      <path class="curve2" d="M80 60 L290 300"/>
      <path class="curve3" d="M80 260 L480 120"/>
      <text x="470" y="290" font-size="13" font-weight="700" style="fill:var(--curve)">Demand (AR)</text>
      <text x="296" y="292" font-size="13" font-weight="700" style="fill:var(--curve2)">MR</text>
      <text x="486" y="118" font-size="13" font-weight="700" style="fill:var(--curve3)">MC</text>
      <circle cx="214" cy="213" r="5" style="fill:var(--curve2)"/>
      <circle class="dot" cx="214" cy="137" r="5"/>
      <path class="dash" d="M214 137 V300"/>
      <path class="dash" d="M60 137 H214"/>
      <path class="dash" d="M60 213 H214"/>
      <text x="52" y="141" text-anchor="end" font-size="12" font-weight="700">P*</text>
      <text x="52" y="217" text-anchor="end" font-size="12" class="muted-text">MC</text>
      <text x="214" y="318" text-anchor="middle" font-size="12" font-weight="700">Q*</text>
      <text x="224" y="206" font-size="12" class="muted-text">MR = MC</text>
      <text x="300" y="336" text-anchor="middle" font-size="12" class="muted-text">Quantity →</text>
    </svg>
  </div>
  <figcaption>The monopolist picks <strong>Q*</strong> where MR = MC, then charges <strong>P*</strong>, the highest price the demand curve allows at that quantity. Because P* &gt; MC, output is lower and price higher than under perfect competition, which creates a deadweight loss.</figcaption>
</figure>

<h3>Figure 3: Oligopoly: the kinked demand curve</h3>
<figure>
  <div class="fig-wrap">
    <svg viewBox="0 0 560 330" role="img" aria-label="Kinked demand curve. Demand is flat (elastic) above the kink and steep (inelastic) below it. Marginal revenue has a vertical gap at the kink quantity, so marginal cost can shift within the gap without changing price.">
      <path class="axis" d="M60 30 V300 H540"/>
      <path class="curve" d="M70 120 L250 150 L480 290"/>
      <path class="curve2" d="M70 120 L250 180"/>
      <path class="curve2" d="M250 259.5 L283 300"/>
      <path class="curve2" d="M250 180 V259.5" style="stroke-dasharray:5 4"/>
      <path class="curve3" d="M140 262 L360 178"/>
      <path class="curve3" d="M140 237 L360 153" style="opacity:.55"/>
      <circle class="dot" cx="250" cy="150" r="5"/>
      <path class="dash" d="M60 150 H250 M250 150 V300"/>
      <text x="52" y="154" text-anchor="end" font-size="12" font-weight="700">P</text>
      <text x="250" y="318" text-anchor="middle" font-size="12" font-weight="700">Q</text>
      <text x="100" y="108" font-size="12" class="muted-text">Elastic: rivals ignore a price rise</text>
      <text x="340" y="232" font-size="12" class="muted-text">Inelastic: rivals match a cut</text>
      <text x="486" y="292" font-size="13" font-weight="700" style="fill:var(--curve)">D</text>
      <text x="290" y="296" font-size="13" font-weight="700" style="fill:var(--curve2)">MR</text>
      <text x="366" y="176" font-size="13" font-weight="700" style="fill:var(--curve3)">MC₁</text>
      <text x="366" y="151" font-size="13" font-weight="700" style="fill:var(--curve3);opacity:.7">MC₂</text>
      <text x="258" y="222" font-size="12" font-weight="700" style="fill:var(--curve2)">MR gap</text>
    </svg>
  </div>
  <figcaption>Because MR has a vertical gap at the kink, marginal cost can rise from MC₁ to MC₂ and the profit-maximising price and quantity <strong>do not change</strong>. This explains price rigidity in oligopolies.</figcaption>
</figure>`;

const lab = `
<h2>Concentration &amp; shutdown lab</h2>

<div class="card">
  <h3 style="margin-top:0">Tool 1: HHI and concentration ratio calculator</h3>
  <p class="muted">Enter market shares (%) for the largest five firms. The remainder is assumed to be split among many tiny firms, which add almost nothing to the HHI.</p>
  <div class="lab">
    <div>
      <div id="shares"></div>
      <label style="display:flex;gap:8px;align-items:center;font-size:.9rem;font-weight:600;margin-top:6px">
        <input type="checkbox" id="merge"> Simulate a merger of Firm 1 + Firm 2
      </label>
    </div>
    <div>
      <div class="readout">
        <div><span>4-firm concentration ratio</span><strong id="cr4"></strong></div>
        <div><span>HHI</span><strong id="hhi"></strong></div>
        <div><span>Remainder (fragmented)</span><strong id="rest"></strong></div>
        <div><span>Equivalent number of equal firms (10,000 ÷ HHI)</span><strong id="eqn"></strong></div>
      </div>
      <div id="shareBars" style="margin-top:12px"></div>
      <div class="verdict" id="hhiVerdict"></div>
    </div>
  </div>
</div>

<div class="card">
  <h3 style="margin-top:0">Tool 2: Operate, shut down or exit?</h3>
  <div class="lab">
    <div>
      <div class="control"><label for="pP">Market price (P) <output id="pPo"></output></label><input type="range" id="pP" min="1" max="30" step="0.5" value="12"></div>
      <div class="control"><label for="pAVC">Average variable cost (AVC) <output id="pAVCo"></output></label><input type="range" id="pAVC" min="1" max="30" step="0.5" value="10"></div>
      <div class="control"><label for="pAFC">Average fixed cost (AFC) <output id="pAFCo"></output></label><input type="range" id="pAFC" min="0" max="15" step="0.5" value="4"></div>
      <div class="control"><label for="pQ">Output (units) <output id="pQo"></output></label><input type="range" id="pQ" min="100" max="5000" step="100" value="1000"></div>
    </div>
    <div>
      <div class="readout">
        <div><span>Total revenue</span><strong id="oTR"></strong></div>
        <div><span>Total variable cost</span><strong id="oTVC"></strong></div>
        <div><span>Total cost (ATC × Q)</span><strong id="oTC"></strong></div>
        <div><span>Economic profit if operating</span><strong id="oPi"></strong></div>
        <div><span>Loss if shut down (= fixed cost)</span><strong id="oFC"></strong></div>
        <div><span>ATC</span><strong id="oATC"></strong></div>
      </div>
      <div class="verdict" id="opVerdict"></div>
    </div>
  </div>
</div>`;

function initLab(el) {
  const f = window.Econ.fmt;
  const defaults = [35, 25, 15, 10, 5];
  const wrap = el.querySelector('#shares');
  wrap.innerHTML = defaults.map((v, i) => `<div class="control"><label for="s${i}">Firm ${i + 1} share (%)</label><input class="num-input" type="number" id="s${i}" min="0" max="100" step="1" value="${v}"></div>`).join('');
  const inputs = defaults.map((_, i) => el.querySelector('#s' + i));
  const merge = el.querySelector('#merge');

  function calcHHI() {
    let s = inputs.map(x => Math.max(0, +x.value || 0));
    const sum = s.reduce((a, b) => a + b, 0);
    if (merge.checked) s = [s[0] + s[1], ...s.slice(2)];
    const sorted = [...s].sort((a, b) => b - a);
    const cr4 = sorted.slice(0, 4).reduce((a, b) => a + b, 0);
    const hhi = s.reduce((a, b) => a + b * b, 0);
    el.querySelector('#cr4').textContent = Math.min(cr4, 100).toFixed(0) + '%';
    el.querySelector('#hhi').textContent = Math.round(hhi).toLocaleString('en-US');
    el.querySelector('#rest').textContent = Math.max(0, 100 - sum).toFixed(0) + '%';
    el.querySelector('#eqn').textContent = hhi ? (10000 / hhi).toFixed(1) : '—';
    const labels = merge.checked ? ['Firm 1+2', 'Firm 3', 'Firm 4', 'Firm 5'] : ['Firm 1', 'Firm 2', 'Firm 3', 'Firm 4', 'Firm 5'];
    el.querySelector('#shareBars').innerHTML = s.map((v, i) =>
      `<div class="type-row" style="grid-template-columns:70px 1fr 60px;margin-bottom:4px"><span>${labels[i]}</span>
       <div class="mini-bar" style="height:10px"><span style="width:${Math.min(v, 100)}%"></span></div><span class="val">${v}%</span></div>`).join('');
    const v = el.querySelector('#hhiVerdict');
    if (sum > 100) { v.className = 'verdict bad'; v.textContent = 'Shares add up to more than 100%. Please adjust them.'; return; }
    let text, cls;
    if (hhi > 1800) { cls = 'bad'; text = '<strong>Highly concentrated</strong> (HHI above 1,800 under the 2023 US Merger Guidelines). Expect oligopoly-type behaviour and close regulatory scrutiny of mergers.'; }
    else if (hhi >= 1000) { cls = ''; text = '<strong>Moderately concentrated</strong> (HHI 1,000–1,800).'; }
    else { cls = 'good'; text = '<strong>Unconcentrated</strong> (HHI below 1,000): a competitive market structure.'; }
    if (merge.checked) {
      const s0 = inputs.map(x => Math.max(0, +x.value || 0));
      const before = s0.reduce((a, b) => a + b * b, 0);
      const cr4b = [...s0].sort((a, b) => b - a).slice(0, 4).reduce((a, b) => a + b, 0);
      text += `<br>The merger raises the HHI by <strong>${Math.round(hhi - before).toLocaleString('en-US')}</strong> (= 2 × ${s0[0]} × ${s0[1]}), while CR4 moves only from ${cr4b}% to ${Math.min(cr4, 100)}%. That is why the HHI is preferred for analysing mergers.`;
    }
    v.className = 'verdict ' + cls;
    v.innerHTML = text;
  }
  inputs.forEach(x => x.addEventListener('input', calcHHI));
  merge.addEventListener('change', calcHHI);
  calcHHI();

  const ids = ['pP', 'pAVC', 'pAFC', 'pQ'];
  const r = Object.fromEntries(ids.map(id => [id, el.querySelector('#' + id)]));
  function calcOp() {
    const P = +r.pP.value, AVC = +r.pAVC.value, AFC = +r.pAFC.value, Q = +r.pQ.value, ATC = AVC + AFC;
    el.querySelector('#pPo').textContent = '$' + f(P);
    el.querySelector('#pAVCo').textContent = '$' + f(AVC);
    el.querySelector('#pAFCo').textContent = '$' + f(AFC);
    el.querySelector('#pQo').textContent = Q.toLocaleString('en-US');
    const TR = P * Q, TVC = AVC * Q, TC = ATC * Q, FC = AFC * Q;
    el.querySelector('#oTR').textContent = '$' + f(TR, 0);
    el.querySelector('#oTVC').textContent = '$' + f(TVC, 0);
    el.querySelector('#oTC').textContent = '$' + f(TC, 0);
    el.querySelector('#oPi').textContent = (TR - TC < 0 ? '−$' : '$') + f(Math.abs(TR - TC), 0);
    el.querySelector('#oFC').textContent = '−$' + f(FC, 0);
    el.querySelector('#oATC').textContent = '$' + f(ATC);
    const v = el.querySelector('#opVerdict');
    if (P >= ATC) { v.className = 'verdict good'; v.innerHTML = `<strong>Operate.</strong> P ($${f(P)}) ≥ ATC ($${f(ATC)}), so the firm ${P === ATC ? 'breaks even (zero economic profit)' : 'earns an economic profit'}.`; }
    else if (P >= AVC) { v.className = 'verdict'; v.innerHTML = `<strong>Operate in the short run, exit in the long run.</strong> AVC ≤ P &lt; ATC. Each unit covers its variable cost plus $${f(P - AVC)} toward fixed costs, so operating loses $${f(TC - TR, 0)} versus $${f(FC, 0)} if shut down.`; }
    else { v.className = 'verdict bad'; v.innerHTML = `<strong>Shut down now.</strong> P &lt; AVC: every unit sold loses $${f(AVC - P)} on top of fixed costs. Shutting down limits the loss to fixed costs ($${f(FC, 0)}).`; }
  }
  ids.forEach(id => r[id].addEventListener('input', calcOp));
  calcOp();
}

const examples = `
<h2>Market structures in the real world</h2>
<div class="grid">
  <div class="card"><div class="icon" aria-hidden="true">🌾</div><span class="tag">Perfect competition</span><h4>Agricultural commodities</h4><p>Thousands of wheat or soybean farmers sell an identical product at the exchange price. No single farmer can influence it. This is the closest real-world case to perfect competition.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🍜</div><span class="tag">Monopolistic competition</span><h4>Restaurants, salons, apparel brands</h4><p>Many sellers and easy entry, but each offers something slightly different: location, menu, style. Firms compete with advertising and branding, and long-run profits are competed away.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">✈️</div><span class="tag">Oligopoly (duopoly)</span><h4>Commercial aircraft: Boeing &amp; Airbus</h4><p>Huge R&amp;D and production fixed costs give a very large MES, so only two firms dominate large jet manufacturing. Each closely watches the other's pricing, orders and product launches.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">📶</div><span class="tag">Oligopoly</span><h4>Indian mobile telecom</h4><p>After intense price competition following Jio's 2016 launch, the market consolidated to three main private operators (Jio, Airtel, Vodafone Idea) plus state-owned BSNL. Tariff hikes are often announced by rivals within days of each other.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🛢️</div><span class="tag dis">Cartel</span><h4>OPEC+</h4><p>Oil producers coordinate output quotas to support prices. Like all cartels it struggles with members producing above quota, which is the prisoner's dilemma in action.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🔍</div><span class="tag">Dominant firm</span><h4>Internet search</h4><p>Google handles roughly 90% of global search queries. In August 2024 a US federal court ruled that Google had illegally maintained a monopoly in general search, a landmark case for dominant-firm behaviour.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">🚰</div><span class="tag">Natural monopoly</span><h4>Water &amp; electricity grids</h4><p>Duplicating pipes or power lines would be wasteful, so one firm supplies the area. Regulators often set prices at average cost (or marginal cost with a subsidy) to protect consumers.</p></div>
  <div class="card"><div class="icon" aria-hidden="true">💊</div><span class="tag">Legal monopoly</span><h4>Patented drugs</h4><p>A patent gives the innovator a temporary monopoly, typically 20 years from filing. When it expires, generic entry often cuts prices sharply.</p></div>
</div>

<h3>Quick recap</h3>
<div class="card table-wrap">
  <table class="text">
    <thead><tr><th>Concept</th><th>Key point</th></tr></thead>
    <tbody>
      <tr><td>Profit maximisation</td><td>Produce where MR = MC in every structure</td></tr>
      <tr><td>Breakeven</td><td>TR = TC; in perfect competition, P = min ATC</td></tr>
      <tr><td>Shutdown (short run)</td><td>P &lt; min AVC (TR &lt; TVC)</td></tr>
      <tr><td>Exit (long run)</td><td>P &lt; ATC persistently</td></tr>
      <tr><td>Kinked demand</td><td>Explains price rigidity, not how the price is set</td></tr>
      <tr><td>HHI</td><td>Σ shares²; reacts to mergers; monopoly = 10,000</td></tr>
    </tbody>
  </table>
</div>`;

const caseHtml = `
<h2>Case study: SkyLink Airways</h2>
<div class="card">
  <p><strong>SkyLink Airways</strong> (fictional) flies a short domestic route against three rivals. Current market shares by passengers: <strong>SkyLink 20%</strong>, <strong>AeroOne 40%</strong>, <strong>BlueJet 25%</strong>, <strong>Vista Air 15%</strong>.</p>
  <ul>
    <li>A price war has pushed the average fare to <strong>$95</strong>. SkyLink's average variable cost (fuel, crew, landing fees) is <strong>$80</strong> per passenger, and its average total cost is <strong>$110</strong>.</li>
    <li>When SkyLink cut fares last year, all three rivals matched within 48 hours. When AeroOne raised fares, nobody followed and AeroOne lost passengers.</li>
    <li>SkyLink and BlueJet are now discussing a merger.</li>
  </ul>
</div>
<p class="muted">Write your answers (your notes are saved in this browser), then compare with the model answers.</p>

<div class="q">
  <div class="q-num">Question 1 · 3 marks</div>
  <div class="q-text">Should SkyLink keep flying the route in the short run? What about the long run? Justify with numbers.</div>
  <textarea aria-label="Your answer to question 1"></textarea>
  <button class="btn reveal" style="margin-top:8px">Show model answer</button>
  <div class="model" hidden>
    <p>P ($95) is <strong>above AVC ($80)</strong> but <strong>below ATC ($110)</strong>. In the short run SkyLink should <strong>keep operating</strong>: each passenger contributes $15 toward fixed costs, so the loss ($15 per passenger) is smaller than shutting down and losing all fixed costs ($30 per passenger: ATC − AVC). In the long run, if fares stay below ATC, it should <strong>exit</strong> the route (or cut costs).</p>
  </div>
</div>

<div class="q">
  <div class="q-num">Question 2 · 4 marks</div>
  <div class="q-text">Calculate the HHI and 4-firm concentration ratio before and after a SkyLink–BlueJet merger. Interpret the result.</div>
  <textarea aria-label="Your answer to question 2"></textarea>
  <button class="btn reveal" style="margin-top:8px">Show model answer</button>
  <div class="model" hidden>
    <p><strong>Before:</strong> HHI = 40² + 25² + 20² + 15² = 1,600 + 625 + 400 + 225 = <strong>2,850</strong>. CR4 = 100%.</p>
    <p><strong>After:</strong> shares 45%, 40%, 15% → HHI = 2,025 + 1,600 + 225 = <strong>3,850</strong>, an increase of 1,000 (= 2 × 25 × 20). CR4 is still <strong>100%</strong>.</p>
    <p>The market is already highly concentrated, and the merger raises the HHI a lot. CR4 does not change at all, which shows why the HHI is the better measure for merger analysis. Regulators would likely challenge the deal.</p>
  </div>
</div>

<div class="q">
  <div class="q-num">Question 3 · 4 marks</div>
  <div class="q-text">Which market structure and pricing model best describe this route? What does it predict about fares if fuel costs rise modestly?</div>
  <textarea aria-label="Your answer to question 3"></textarea>
  <button class="btn reveal" style="margin-top:8px">Show model answer</button>
  <div class="model" hidden>
    <p>An <strong>oligopoly</strong>: four interdependent firms and high entry barriers (aircraft, airport slots). Rivals matched the price cut but ignored the price rise, which is the <strong>kinked demand curve</strong> model.</p>
    <p>The MR curve has a vertical gap at the current fare. A modest rise in fuel cost shifts MC up but keeps it within the gap, so the profit-maximising fare and output <strong>stay unchanged</strong> (price rigidity). Only a large cost shock that pushes MC above the gap, or a cost rise that hits all carriers so they move together, would lead to a fare increase.</p>
  </div>
</div>`;

// Videos tab: all verified embeddable and under 20 minutes (checked October 2026)
const check = (q, a) => `<details><summary>Quick check: ${q}</summary><p>${a}</p></details>`;
const videos = [
  { id: '_GYlcWi_gHA', seconds: 265, channel: 'Kyle Purpura', topic: 'Breakeven & shutdown',
    title: 'Perfect Competition: Economic Profit, Loss, & Shut-Down',
    sections: [
      { title: 'Key ideas explained', html: `<ul>
        <li>A perfectly competitive firm is a <strong>price taker</strong>: its demand curve is horizontal at the market price, so <strong>P = MR = AR</strong>.</li>
        <li>It produces where <strong>P = MC</strong>, then compares price with average costs at that output.</li>
        <li><strong>P &gt; ATC</strong> → economic profit. <strong>P = min ATC</strong> → breakeven (normal profit only).</li>
        <li><strong>AVC ≤ P &lt; ATC</strong> → a loss, but keep producing: each unit covers its variable cost and contributes to fixed costs that must be paid anyway.</li>
        <li><strong>P &lt; min AVC</strong> → shut down. The loss is then limited to fixed costs.</li>
        <li>So the firm's short-run supply curve is its <strong>MC curve above minimum AVC</strong>.</li></ul>` },
      { title: 'How this maps to the CFA syllabus', html: `<ul>
        <li>The CFA curriculum often frames the same rules in <strong>totals</strong>: operate if TR ≥ TC; operate short-run but exit long-run if TVC ≤ TR &lt; TC; shut down if TR &lt; TVC.</li>
        <li>Expect numerical questions giving price, AVC and ATC, asking for both the <em>short-run</em> and the <em>long-run</em> decision.</li>
        <li>Remember "breakeven" means zero <em>economic</em> profit, not zero accounting profit.</li></ul>` },
      { title: 'Check your understanding', html: check('Price is $8, minimum AVC is $9 and ATC is $12. What should the firm do?',
        '<strong>Shut down.</strong> P &lt; min AVC, so every unit sold loses $1 on top of fixed costs. Shutting down limits the loss to fixed costs only.') }
    ] },
  { id: 'Sb_-wfmJnHA', seconds: 616, channel: 'CrashCourse', topic: 'Monopoly',
    title: 'Monopolies and Anti-Competitive Markets: Crash Course Economics #25',
    sections: [
      { title: 'Key ideas explained', html: `<ul>
        <li>A monopoly is the <strong>single seller</strong> of a product with no close substitutes. Its power comes from <strong>barriers to entry</strong>.</li>
        <li>Barrier types: <strong>legal</strong> (patents, licences), <strong>economies of scale</strong> (natural monopoly), <strong>control of key resources</strong>, and <strong>network effects</strong>.</li>
        <li>Compared with competition, a monopolist <strong>restricts output and charges a higher price</strong>, which creates a deadweight loss.</li>
        <li>Some industries (water, power grids) are <strong>natural monopolies</strong>, where one firm is the cheapest supplier, so governments regulate rather than break them up.</li></ul>` },
      { title: 'How this maps to the CFA syllabus', html: `<ul>
        <li>Profit maximisation: produce where <strong>MR = MC</strong>, then read the price off the demand curve (P &gt; MC).</li>
        <li>Regulating a natural monopoly: <strong>marginal-cost pricing</strong> is efficient but causes losses (needs a subsidy); <strong>average-cost pricing</strong> gives zero economic profit.</li>
        <li><strong>Price discrimination</strong> (charging different groups different prices) can increase output and capture consumer surplus.</li>
        <li>See Figure 2 on the Diagrams tab for the monopoly graph.</li></ul>` },
      { title: 'Check your understanding', html: check('Why might a regulator set a natural monopoly\'s price equal to ATC rather than MC?',
        'Because LRAC is still falling, MC lies <em>below</em> ATC. A price equal to MC would not cover average costs, so the firm would make losses and need a subsidy. Average-cost pricing lets it break even.') }
    ] },
  { id: 'Z-bz7yu2AOQ', seconds: 535, channel: 'Marginal Revolution University', topic: 'Pricing power',
    title: 'The Monopoly Markup',
    sections: [
      { title: 'Key ideas explained', html: `<ul>
        <li>How far a firm can price above marginal cost depends on the <strong>price elasticity of demand</strong>.</li>
        <li>The less elastic (more "must-have") the product, the <strong>bigger the markup</strong>. With many close substitutes, the markup shrinks.</li>
        <li>The relationship: <span class="formula">MR = P × (1 − 1/|E<sub>P</sub>|)</span>. Setting MR = MC gives the profit-maximising price.</li>
        <li>Equivalent form (the Lerner index): <span class="formula">(P − MC) ÷ P = 1 ÷ |E<sub>P</sub>|</span>.</li></ul>` },
      { title: 'How this maps to the CFA syllabus', html: `<ul>
        <li>A classic exam point: a profit-maximising monopolist <strong>never operates on the inelastic part of demand</strong>, because MR would be negative there.</li>
        <li>The same formula applies to any firm with a downward-sloping demand curve: monopolistic competition and oligopoly too.</li></ul>` },
      { title: 'Check your understanding', html: check('Price elasticity of demand is −2 and marginal cost is $50. What price maximises profit?',
        'MR = P(1 − 1/2) = 0.5P. Set MR = MC: 0.5P = 50, so <strong>P = $100</strong>, a 100% markup over MC.') }
    ] },
  { id: '8a3gXThQeK0', seconds: 123, channel: 'Jacob Clifford', topic: 'Monopolistic competition',
    title: 'Monopolistic Competition: Short Run and Long Run (Micro 4.4)',
    sections: [
      { title: 'Key ideas explained', html: `<ul>
        <li>Many firms sell <strong>differentiated</strong> products, so each faces its own downward-sloping demand curve.</li>
        <li><strong>Short run:</strong> a firm can earn an economic profit, just like a monopolist (MR = MC, P &gt; ATC).</li>
        <li>Because entry barriers are low, profits attract <strong>new entrants</strong>. Each firm's demand shifts left until it is <strong>tangent to ATC</strong>.</li>
        <li><strong>Long run:</strong> P = ATC, so economic profit is zero. But P &gt; MC, and output is below the minimum-ATC level (<strong>excess capacity</strong>).</li></ul>` },
      { title: 'How this maps to the CFA syllabus', html: `<ul>
        <li>Know the long-run outcome cold: <strong>zero economic profit, P &gt; MC, excess capacity</strong>.</li>
        <li>Firms compete on <strong>non-price</strong> factors: advertising, branding, quality and location.</li>
        <li>Examples: restaurants, salons, clothing brands.</li></ul>` },
      { title: 'Check your understanding', html: check('In long-run equilibrium, how do P, ATC and MC compare for a monopolistically competitive firm?',
        '<strong>P = ATC &gt; MC.</strong> Profits are competed away (P = ATC), but the firm still has some pricing power (P &gt; MC).') }
    ] },
  { id: 'PCcVODWm-oY', seconds: 596, channel: 'CrashCourse', topic: 'Oligopoly & game theory',
    title: 'Game Theory and Oligopoly: Crash Course Economics #26',
    sections: [
      { title: 'Key ideas explained', html: `<ul>
        <li>An oligopoly has <strong>a few interdependent firms</strong>: each firm's best move depends on what its rivals do.</li>
        <li><strong>Game theory</strong> models this with a payoff matrix. A <strong>dominant strategy</strong> is best no matter what the rival does.</li>
        <li>A <strong>Nash equilibrium</strong> is reached when no firm can do better by changing its strategy, given the others' choices.</li>
        <li>In the <strong>prisoner's dilemma</strong>, both firms would be better off cooperating (keeping prices high), but each has an incentive to cheat.</li>
        <li>This is why <strong>cartels</strong> (collusion) tend to be unstable, and why collusion is illegal in many countries.</li></ul>` },
      { title: 'How this maps to the CFA syllabus', html: `<ul>
        <li>The CFA curriculum also tests four oligopoly models: <strong>kinked demand</strong>, <strong>Cournot</strong> (simultaneous quantity choice), <strong>Stackelberg</strong> (leader–follower), and the <strong>dominant-firm</strong> model. See the Key Concepts tab.</li>
        <li>Collusion is more likely with few firms, similar costs, homogeneous products, and high entry barriers.</li></ul>` },
      { title: 'Check your understanding', html: check('Two firms each choose a High or Low price. Payoffs (A, B): High/High = (10, 10); Low/High = (15, 2); High/Low = (2, 15); Low/Low = (5, 5). What is the Nash equilibrium?',
        '<strong>Low/Low (5, 5).</strong> Whatever the rival does, pricing Low pays more (15 &gt; 10 and 5 &gt; 2), so Low is a dominant strategy for both. They end up worse off than at High/High: a prisoner\'s dilemma.') }
    ] },
  { id: '-fdeJsfRxCE', seconds: 513, channel: 'tutor2u', topic: 'Kinked demand',
    title: 'Oligopoly: The Kinked Demand Curve',
    sections: [
      { title: 'Key ideas explained', html: `<ul>
        <li>The model assumes rivals <strong>match price cuts</strong> (to protect their share) but <strong>ignore price rises</strong> (to win customers).</li>
        <li>Demand is therefore <strong>elastic above</strong> the current price and <strong>inelastic below</strong> it, which forms a kink.</li>
        <li>The kink creates a <strong>vertical gap in the MR curve</strong>. Marginal cost can move up or down within the gap without changing the profit-maximising price.</li>
        <li>Result: <strong>sticky prices</strong>, with competition shifting to non-price methods.</li></ul>` },
      { title: 'How this maps to the CFA syllabus', html: `<ul>
        <li>The model's main weakness, often tested: it explains why prices are <strong>rigid at the kink</strong>, but <strong>not how the kink price is set</strong> in the first place.</li>
        <li>UK-style videos say "supernormal profit" for <em>economic profit</em> and "normal profit" for <em>zero economic profit</em>. Same ideas, different words.</li>
        <li>See Figure 3 on the Diagrams tab.</li></ul>` },
      { title: 'Check your understanding', html: check('Marginal cost rises modestly but stays within the MR gap. What happens to price and output?',
        '<strong>Neither changes.</strong> MR = MC still occurs at the kink quantity, so the price stays put. That is price rigidity.') }
    ] },
  { id: 'A0awVwy4550', seconds: 202, channel: 'ECON MATHS', topic: 'Concentration (HHI)',
    title: 'Herfindahl-Hirschman Index (HHI) Calculation',
    sections: [
      { title: 'Key ideas explained', html: `<ul>
        <li><span class="formula">HHI = Σ (market share in %)²</span>. It runs from near 0 (fragmented) to <strong>10,000</strong> (monopoly).</li>
        <li>Some sources express shares as decimals, giving a 0–1 scale. 0.25 on that scale = 2,500 on the 0–10,000 scale.</li>
        <li>The <strong>N-firm concentration ratio</strong> (e.g. CR4) simply adds up the top N shares.</li>
        <li>Squaring gives large firms more weight, so a merger of firms with shares s₁ and s₂ raises the HHI by <strong>2 × s₁ × s₂</strong>, while CR4 may not move at all.</li></ul>` },
      { title: 'How this maps to the CFA syllabus', html: `<ul>
        <li>Expect to <strong>calculate</strong> both measures and explain why the HHI is better for analysing mergers.</li>
        <li>Shared limitation: neither measure accounts for <strong>barriers to entry</strong>, <strong>potential entrants</strong> or <strong>demand elasticity</strong>.</li>
        <li>Thresholds differ by source and year. The 2023 US Merger Guidelines treat HHI above 1,800 as highly concentrated; older guidelines used 2,500. Try the HHI calculator on the Lab tab.</li></ul>` },
      { title: 'Check your understanding', html: check('Four firms have shares of 30%, 30%, 20% and 20%. What are the HHI and CR4? What is the HHI if the two 20% firms merge?',
        'HHI = 900 + 900 + 400 + 400 = <strong>2,600</strong>; CR4 = <strong>100%</strong>. After the merger: 900 + 900 + 1,600 = <strong>3,400</strong> (+800 = 2 × 20 × 20). CR4 stays 100%.') }
    ] },
  { id: 'ZDE8xszjYOk', seconds: 1051, channel: 'ReviewEcon', topic: 'Full recap',
    title: 'Microeconomics Unit 4 Complete Summary: Imperfect Competition',
    sections: [
      { title: 'How to use this video', html: `<p>This is an AP Microeconomics review that covers monopoly, monopolistic competition and oligopoly in one pass. Watch it <strong>after</strong> the topic videos as a recap, or before the MCQ quiz.</p>` },
      { title: 'How this maps to the CFA syllabus', html: `<ul>
        <li>The <strong>graphs and core logic</strong> (MR = MC, deadweight loss, long-run zero profit, game theory) are the same as in the CFA curriculum.</li>
        <li>The CFA curriculum <strong>adds</strong> topics an AP course may not cover in depth: breakeven and shutdown in total-revenue terms, Cournot, Stackelberg and dominant-firm models, and concentration measures (HHI, CR<sub>N</sub>).</li></ul>` },
      { title: 'Check your understanding', html: check('Which market structures can earn economic profit in the long run?',
        '<strong>Oligopoly and monopoly</strong>, because high barriers to entry protect their profits. Perfect and monopolistic competition earn zero economic profit in the long run.') }
    ] }
];

// In-video checkpoints. Timings were placed from each video's captions, just after the idea being tested
// has been explained. t = seconds; review = where "Rewatch" jumps back to (defaults to the previous checkpoint).
const checkpoints = {
  '_GYlcWi_gHA': [
    { t: 129, review: 75, type: 'mcq', q: 'Market demand rises, so the price the firm must take rises above ATC at its profit-maximising output. What does the firm earn?',
      o: ['Zero economic profit', 'An economic (supernormal) profit', 'An economic loss', 'Nothing: it must shut down'], a: 1,
      e: 'At the output where P = MC, price is above ATC, so the firm earns an economic profit. In the long run, new entrants will compete it away.' },
    { t: 174, review: 127, type: 'mcq', q: 'The price falls below ATC but stays above AVC. What should the firm do in the short run?',
      o: ['Shut down immediately', 'Keep producing where MR = MC and accept a loss', 'Raise its price to cover ATC', 'Produce where P = ATC'], a: 1,
      e: 'Revenue still covers all variable costs and part of the fixed costs, so the loss is smaller than shutting down (which loses all fixed costs). If this persists, the firm exits in the long run.' },
    { t: 238, review: 174, type: 'mcq', q: 'The shutdown point is where the marginal cost curve crosses:',
      o: ['The minimum of the ATC curve', 'The minimum of the AVC curve', 'The marginal revenue curve', 'The market demand curve'], a: 1,
      e: 'Below minimum AVC the firm cannot even cover its variable costs, so it shuts down. (Where MC crosses minimum <em>ATC</em> is the breakeven point.)' }
  ],
  'Sb_-wfmJnHA': [
    { t: 207, review: 150, type: 'mcq', q: 'De Beers once held about 90% of the diamond market by owning most of the world\'s diamond mines. Which barrier to entry is this?',
      o: ['Government licensing', 'Control of a key resource', 'Network effects', 'A patent'], a: 1,
      e: 'Owning the essential input keeps rivals out. Other barriers in the video: government regulation (the food-truck licences) and high start-up costs.' },
    { t: 391, review: 350, type: 'tf', q: 'True or false: a patent gives a firm a permanent monopoly over its invention.', a: 'False',
      e: 'Patents usually last about 20 years. When they expire, barriers to entry fall, competitors enter and prices drop: a legal barrier that is deliberately temporary.' },
    { t: 443, review: 392, type: 'mcq', q: 'Why is it usually cheaper for a single company to supply a city\'s electricity?',
      o: ['Governments own all power companies', 'One large firm captures economies of scale; duplicate plants and power lines would raise costs', 'Electricity demand is perfectly elastic', 'Electricity has many close substitutes'], a: 1,
      e: 'This is a <strong>natural monopoly</strong>. Because it could still abuse its position, governments regulate its prices, often at average cost.' },
    { t: 578, review: 480, type: 'mcq', q: 'Which condition does a firm need in order to price-discriminate?',
      o: ['All customers must be identical', 'It must be able to separate customers by willingness to pay, and have some market power', 'Demand must be perfectly elastic', 'It must have no fixed costs'], a: 1,
      e: 'Airlines separate customers by booking time. With hundreds of competing airlines, customers charged more would simply switch, so market power is needed too.' }
  ],
  'Z-bz7yu2AOQ': [
    { t: 67, review: 30, type: 'mcq', q: 'The "monopoly markup" is the gap between:',
      o: ['Price and average total cost', 'Price and marginal cost', 'Marginal revenue and marginal cost', 'Demand and supply'], a: 1,
      e: 'In a competitive market P = MC, so the markup is zero. A monopolist sets P &gt; MC.' },
    { t: 204, review: 100, type: 'mcq', q: 'Patients with serious illnesses, often with an insurer paying, are insensitive to the price of a life-saving drug. What does this imply?',
      o: ['Demand is elastic, so the markup is small', 'Demand is inelastic, so the markup is large', 'The firm will price at marginal cost', 'The markup is unaffected by demand'], a: 1,
      e: 'The less sensitive quantity demanded is to price, the more a monopolist can raise price without losing many sales, so the markup is bigger.' },
    { t: 341, review: 205, type: 'num', unit: 'dollars', tol: 0.01, a: 40,
      q: 'Now apply the CFA formula MR = P × (1 − 1/|E|). Demand elasticity is −4 and marginal cost is $30. What price maximises profit?',
      e: 'Set MR = MC: P × (1 − 1/4) = 30, so 0.75P = 30 and <strong>P = $40</strong>, a 33% markup. With |E| = 2 the price would be $60. More elastic demand means a smaller markup.' },
    { t: 520, review: 357, type: 'mcq', q: 'Why was the Washington–Dallas fare higher than the Washington–San Francisco fare, even though the longer trip flew via Dallas?',
      o: ['Flying to Dallas uses more fuel', 'Dallas is American Airlines\' hub, so Dallas travellers have few alternatives: inelastic demand and a bigger markup', 'San Francisco flights are government-subsidised', 'Airlines charge by passenger age'], a: 1,
      e: 'Travellers to San Francisco can route through many hubs (elastic demand, low markup). Travellers to Dallas have few good options (inelastic demand, high markup).' }
  ],
  '8a3gXThQeK0': [
    { t: 42, review: 0, type: 'tf', q: 'True or false: because there are many firms, a monopolistically competitive firm faces a horizontal (perfectly elastic) demand curve.', a: 'False',
      e: 'Products are differentiated, so each firm is a price maker with a <strong>downward-sloping</strong> demand curve, and MR is below demand, like a monopoly.' },
    { t: 98, review: 43, type: 'mcq', q: 'A monopolistically competitive firm earns economic profit in the short run. What moves it to long-run equilibrium?',
      o: ['Its ATC curve shifts up', 'New firms enter, so each firm\'s demand falls (shifts left) until it is tangent to ATC', 'The government imposes a price ceiling', 'Firms exit and demand shifts right'], a: 1,
      e: 'Low barriers let rivals enter. More substitutes reduce each firm\'s demand until P = ATC: zero economic profit, with P &gt; MC and excess capacity.' }
  ],
  'PCcVODWm-oY': [
    { t: 96, review: 24, type: 'mcq', q: 'Fast-food burger chains (many sellers, similar but not identical products, low barriers to entry) are an example of:',
      o: ['Perfect competition', 'Monopolistic competition', 'Oligopoly', 'Monopoly'], a: 1,
      e: 'Differentiated products give a little pricing power, but low barriers mean a big price rise would bring in new competitors.' },
    { t: 241, review: 130, type: 'tf', q: 'True or false: firms in perfectly competitive markets spend heavily on advertising to win customers.', a: 'False',
      e: 'Their products are identical, so advertising would only raise costs. Non-price competition (branding, advertising, service) matters most in oligopoly and monopolistic competition.' },
    { t: 285, review: 242, type: 'mcq', q: 'In the prisoner\'s dilemma, why do both suspects confess, even though both staying silent would leave them better off?',
      o: ['They are irrational', 'Each does better by confessing whatever the other does, and they cannot coordinate', 'Confessing is legally required', 'Because the fines are equal'], a: 1,
      e: 'Following individual self-interest leads to an outcome that is worse for both. This is the logic behind price wars and unstable cartels.' },
    { t: 388, review: 350, type: 'mcq', q: 'One airline introduces a checked-bag fee and rivals soon charge the same, without any agreement. This is best described as:',
      o: ['A cartel', 'Price leadership', 'Perfect competition', 'Predatory pricing'], a: 1,
      e: 'Explicit agreements to fix prices (collusion) are illegal in the US. Following a leader without an agreement is technically legal, but the two can be hard to tell apart.' },
    { t: 518, review: 425, type: 'mcq', q: 'In the payoff matrix, both firms earn $200 if both price High and $80 each if both price Low, and Low is each firm\'s dominant strategy. What is the likely outcome?',
      o: ['Both price High and earn $200: a stable outcome', 'Both price Low and earn $80: the Nash equilibrium', 'One prices High and the other Low', 'There is no equilibrium'], a: 1,
      e: 'Each firm is tempted to undercut the other, so both end up at Low/Low. That incentive to cheat is why collusion and cartels are unstable without enforcement.' }
  ],
  '-fdeJsfRxCE': [
    { t: 143, review: 112, type: 'mcq', q: 'A firm raises its price and rivals keep theirs unchanged. Above the current price the firm\'s demand is ___, so its total revenue ___.',
      o: ['inelastic; rises', 'elastic; falls', 'unit elastic; stays the same', 'perfectly inelastic; rises'], a: 1,
      e: 'Customers switch to rivals, so quantity falls by proportionally more than price rises, and total revenue falls.' },
    { t: 174, review: 143, type: 'tf', q: 'True or false: if the firm cuts its price and rivals match the cut, its total revenue rises strongly.', a: 'False',
      e: 'Rivals matching the cut makes demand <strong>inelastic</strong> below the kink, so few extra sales are won and total revenue falls. Either way, changing price doesn\'t pay.' },
    { t: 341, review: 290, type: 'mcq', q: 'Marginal cost rises but still passes through the vertical gap in the MR curve. What happens?',
      o: ['Price rises and output falls', 'Price and output stay the same', 'Price falls', 'The firm shuts down'], a: 1,
      e: 'MR = MC still holds at the kink quantity, so price is sticky. A known weakness of the model is that it doesn\'t explain how the kink price was set in the first place.' },
    { t: 483, review: 405, type: 'mcq', q: 'VW offered buyers a three-month payment holiday and Ford quickly offered the same. This best illustrates:',
      o: ['Perfect competition', 'Interdependence and non-price competition in an oligopoly', 'A natural monopoly', 'Price discrimination'], a: 1,
      e: 'Oligopolists react to each other\'s moves. With prices sticky, they compete through offers, branding and advertising.' }
  ],
  'A0awVwy4550': [
    { t: 100, review: 0, type: 'num', tol: 0.5, a: 1950,
      q: 'Try it before the video does: six firms have market shares of 30%, 20%, 15%, 15%, 10% and 10%. What is the HHI (on the 0–10,000 scale)?',
      e: '30² + 20² + 15² + 15² + 10² + 10² = 900 + 400 + 225 + 225 + 100 + 100 = <strong>1,950</strong>. (The video uses decimal shares × 10,000, which gives the same result.)' },
    { t: 193, review: 101, type: 'num', tol: 0.5, a: 1200,
      q: 'Now suppose Firm 1 (30%) and Firm 2 (20%) merge. By how much does the HHI increase?',
      e: 'The increase is 2 × 30 × 20 = <strong>1,200</strong>, so the HHI rises from 1,950 to 3,150, which is highly concentrated under the 2023 US guidelines (above 1,800). The 4-firm concentration ratio only moves from 80% to 90%.' }
  ],
  'ZDE8xszjYOk': [
    { t: 97, review: 48, type: 'num', unit: 'dollars', tol: 0.01, a: 10,
      q: 'A firm can sell 1 unit at $12. To sell 2 units it must cut the price to $11 on both. What is the marginal revenue of the 2nd unit?',
      e: 'Total revenue rises from $12 to $22 (2 × $11), so MR = <strong>$10</strong>, less than the $11 price. That\'s why MR lies below demand for any firm that must cut its price to sell more.' },
    { t: 139, review: 98, type: 'mcq', q: 'On the part of the demand curve where marginal revenue is negative, demand is:',
      o: ['Elastic', 'Unit elastic', 'Inelastic', 'Perfectly elastic'], a: 2,
      e: 'MR = 0 at the unit-elastic point. Below it, MR &lt; 0 (inelastic). A profit-maximising monopolist never produces there, which is a classic CFA point.' },
    { t: 331, review: 230, type: 'tf', q: 'True or false: a monopoly producing on the downward-sloping part of its ATC curve is productively efficient.', a: 'False',
      e: 'It captures economies of scale but does not produce at <strong>minimum</strong> ATC, so it is not productively efficient. With P &gt; MC, it is not allocatively efficient either.' },
    { t: 576, review: 485, type: 'mcq', q: 'If a monopolist could perfectly price-discriminate, it would:',
      o: ['Produce less, increasing deadweight loss', 'Produce the allocatively efficient quantity, turning all consumer surplus into profit with no deadweight loss', 'Earn zero economic profit', 'Charge every customer marginal cost'], a: 1,
      e: 'MR merges with demand, so output rises to where P = MC for the last unit. There is no deadweight loss, but consumers keep no surplus.' },
    { t: 699, review: 650, type: 'mcq', q: 'Monopolistically competitive firms are making economic losses. What happens in the long run?',
      o: ['The losses persist indefinitely', 'Some firms exit, so the remaining firms\' demand shifts right until they break even', 'The government subsidises them', 'Prices fall further'], a: 1,
      e: 'Exit is the mirror image of entry: fewer substitutes raise each survivor\'s demand until P = ATC (zero economic profit).' },
    { t: 1016, review: 900, type: 'mcq', q: 'A Nash equilibrium is an outcome in which:',
      o: ['Combined profit is as high as possible', 'Neither player can do better by changing its strategy alone', 'Both players have dominant strategies', 'The players have agreed to collude'], a: 1,
      e: 'The highest combined profit is the <em>collusive</em> outcome, which is often not the Nash equilibrium. In the video\'s example only one firm has a dominant strategy, yet a Nash equilibrium still exists.' }
  ]
};

window.MODULES.push({
  id: 'm1b', lm: 1, lmTitle: 'The Firm and Market Structures',
  title: 'Market Structures & Breakeven',
  subtitle: 'Perfect competition to monopoly: how structure shapes pricing, profits, and when to shut down.',
  learn: [
    { id: 'overview', label: 'Overview', html: overview },
    { id: 'concepts', label: 'Key Concepts', html: concepts },
    { id: 'diagrams', label: 'Diagrams', html: diagrams },
    { id: 'lab', label: 'Lab', html: lab, init: initLab },
    { id: 'examples', label: 'Real World', html: examples },
    { id: 'videos', label: 'Videos', heading: 'Video lessons',
      intro: 'Short videos (all under 20 minutes) in syllabus order. <strong>The videos are interactive:</strong> each one pauses at checkpoints and asks a question about what was just covered. Answer it to continue. The dots under each video show your checkpoint progress. Below each video, open the companion notes for key ideas and CFA links.',
      footer: `<div class="callout" style="margin-top:24px"><strong>Playing videos inside this page.</strong> YouTube's player only works when the page is served from a web address, so the hub includes a small local server. Start it once per session by double-clicking <code>Start Study Hub.command</code> (Mac) or <code>Start Study Hub.bat</code> (Windows), or by running <code>npm start</code>. While it runs, opening <code>index.html</code> switches to it automatically. Without it, videos open on YouTube instead.</div>`,
      videos: videos.map(v => ({ ...v, checkpoints: checkpoints[v.id] || [] })) }
  ],
  mcq: [
    { q: 'The demand curve facing an individual firm in perfect competition is:', o: ['Downward-sloping and elastic', 'Perfectly inelastic (vertical)', 'Perfectly elastic (horizontal) at the market price', 'Kinked at the market price'], a: 2, e: 'A perfectly competitive firm is a price taker: it can sell any quantity at the market price, so its demand curve is horizontal and P = MR.' },
    { q: 'In all market structures, a firm maximises profit by producing the quantity at which:', o: ['Price equals average total cost', 'Marginal revenue equals marginal cost', 'Total revenue is maximised', 'Average variable cost is minimised'], a: 1, e: 'MR = MC is the universal profit-maximising rule. Only in perfect competition does this also mean P = MC.' },
    { q: 'A firm\'s price is $12, its AVC is $10 and its ATC is $14. In the short run the firm should:', o: ['Shut down immediately', 'Continue operating, but exit in the long run if conditions persist', 'Raise its price to $14', 'Expand output to lower ATC'], a: 1, e: 'P > AVC, so operating covers variable cost and part of fixed cost. P < ATC means an economic loss, so the firm should exit in the long run if this continues.' },
    { q: 'In long-run equilibrium, a firm in monopolistic competition:', o: ['Earns positive economic profit', 'Produces where P = MC', 'Earns zero economic profit and has excess capacity', 'Faces a perfectly elastic demand curve'], a: 2, e: 'Free entry competes away profits (P = ATC), but because demand slopes down, P > MC and the firm produces below the output that minimises ATC (excess capacity).' },
    { q: 'Four firms have market shares of 40%, 30%, 20% and 10%. The HHI is:', o: ['1,000', '3,000', '10,000', '100'], a: 1, e: '40² + 30² + 20² + 10² = 1,600 + 900 + 400 + 100 = <strong>3,000</strong>.' },
    { q: 'The kinked demand curve model assumes that rivals will:', o: ['Match both price increases and price cuts', 'Ignore both price increases and price cuts', 'Match price cuts but ignore price increases', 'Match price increases but ignore price cuts'], a: 2, e: 'Rivals match cuts to protect market share and ignore rises to win customers. This makes demand elastic above the kink and inelastic below it.' },
    { q: 'A profit-maximising monopolist will always operate on the portion of the demand curve that is:', o: ['Elastic', 'Inelastic', 'Unit elastic', 'Perfectly inelastic'], a: 0, e: 'MR = P(1 − 1/|E|) is negative when demand is inelastic. Since MC > 0, MR = MC can only happen where demand is elastic.' },
    { q: 'In the Cournot duopoly model, each firm:', o: ['Sets its price assuming the rival will match it', 'Chooses its output taking the rival\'s output as given', 'Moves after observing the rival\'s output', 'Colludes with its rival to maximise joint profit'], a: 1, e: 'Cournot firms choose quantities at the same time. The equilibrium lies between the monopoly and perfectly competitive outcomes.' },
    { q: 'In the Stackelberg model, compared with the follower, the leader typically:', o: ['Produces less and earns less', 'Produces more and earns higher profit', 'Produces the same quantity', 'Earns zero economic profit'], a: 1, e: 'Moving first lets the leader commit to a large output, so the follower must accommodate it. This is the first-mover advantage.' },
    { q: 'A key weakness of the N-firm concentration ratio compared with the HHI is that it:', o: ['Is difficult to calculate', 'Is relatively insensitive to mergers between the largest firms', 'Over-weights small firms', 'Can exceed 100%'], a: 1, e: 'If two top-four firms merge, CR4 may barely change while the HHI rises by 2 × s₁ × s₂.' },
    { q: 'Both firms in a duopoly would earn more if they kept prices high, but each cuts its price anyway. This outcome is best described as:', o: ['A Stackelberg equilibrium', 'A Nash equilibrium (prisoner\'s dilemma)', 'A dominant-firm equilibrium', 'Perfect competition'], a: 1, e: 'Given the other\'s strategy, neither can gain by changing its own, even though cooperating would make both better off.' },
    { q: 'Which statement about concentration measures is MOST accurate?', o: ['A high HHI always means firms have pricing power', 'Concentration measures ignore barriers to entry and potential competition', 'The HHI for a monopoly is 1,000', 'CR4 accounts for the elasticity of demand'], a: 1, e: 'Neither CR<sub>N</sub> nor the HHI captures entry barriers, contestability or demand elasticity, so high concentration does not guarantee market power.' }
  ],
  match: { pairs: [
    ['Perfect competition', 'Many firms, homogeneous product, no pricing power'],
    ['Monopolistic competition', 'Many firms, differentiated products, low barriers to entry'],
    ['Oligopoly', 'Few interdependent firms and high barriers to entry'],
    ['Monopoly', 'Single seller of a product with no close substitutes'],
    ['Breakeven point', 'Price equals minimum average total cost (TR = TC)'],
    ['Shutdown point', 'Price equals minimum average variable cost'],
    ['Herfindahl-Hirschman Index', 'Sum of the squared market shares of all firms'],
    ['Kinked demand curve', 'Rivals match price cuts but ignore price increases'],
    ['Nash equilibrium', 'No firm can gain by changing strategy, given rivals\' strategies']
  ] },
  tf: [
    { s: 'In perfect competition, price equals marginal revenue.', a: 'True', e: 'The firm sells every unit at the market price, so each extra unit adds exactly P to revenue.' },
    { s: 'A firm should shut down in the short run whenever it makes an economic loss.', a: 'False', e: 'It should keep operating if P ≥ AVC, because revenue then covers variable costs and part of fixed costs.' },
    { s: 'Firms in monopolistic competition earn economic profits in the long run.', a: 'False', e: 'Low entry barriers mean new firms enter until economic profit is zero.' },
    { s: 'A profit-maximising monopolist produces in the elastic portion of the demand curve.', a: 'True', e: 'MR is negative when demand is inelastic, so MR = MC > 0 requires elastic demand.' },
    { s: 'The HHI of a pure monopoly is 10,000.', a: 'True', e: '100² = 10,000.' },
    { s: 'In the Stackelberg model, the follower earns higher profits than the leader.', a: 'False', e: 'The leader has the first-mover advantage and earns more.' },
    { s: 'The kinked demand curve model explains how the prevailing market price is first determined.', a: 'False', e: 'This is the model\'s main weakness: it explains why prices are sticky at the kink but not how the kink price is set.' },
    { s: 'Concentration ratios and the HHI take barriers to entry into account.', a: 'False', e: 'Neither measure considers barriers to entry or potential entrants.' }
  ],
  classify: {
    choices: ['Perfect competition', 'Monopolistic competition', 'Oligopoly', 'Monopoly'],
    intro: 'Which market structure best describes each situation?',
    items: [
      { s: 'Thousands of farmers sell identical wheat at the price set on the commodity exchange.', a: 'Perfect competition', e: 'Many sellers, identical product, price takers.' },
      { s: 'A city has hundreds of cafés, each with its own menu, décor and loyal customers.', a: 'Monopolistic competition', e: 'Many sellers, differentiated products, easy entry.' },
      { s: 'Three mobile networks dominate a country and respond to each other\'s tariff changes within days.', a: 'Oligopoly', e: 'Few interdependent firms with high entry barriers (spectrum licences, network costs).' },
      { s: 'A single regulated company supplies piped water to a whole city.', a: 'Monopoly', e: 'A natural monopoly: duplicating the network would be wasteful.' },
      { s: 'Two firms build almost all of the world\'s large passenger jets.', a: 'Oligopoly', e: 'A duopoly: a special case of oligopoly with very high entry barriers.' },
      { s: 'A drug company sells the only approved treatment for a disease, protected by a patent.', a: 'Monopoly', e: 'A legal barrier (the patent) blocks competitors.' },
      { s: 'Many hair salons in a town compete on style, location and service quality.', a: 'Monopolistic competition', e: 'Differentiated services and low barriers to entry.' },
      { s: 'Fresh tomatoes are sold by many growers at a wholesale market, where each must accept the going price.', a: 'Perfect competition', e: 'Homogeneous product and no individual pricing power.' }
    ]
  },
  caseStudy: { html: caseHtml }
});
})();
