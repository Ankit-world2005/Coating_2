import confetti from 'canvas-confetti';

/* ==========================================================================
   COATINGWALE CORE APPLICATION DATA
   ========================================================================== */

const SERVICES_DATA = [
  {
    id: 'glass',
    name: 'Glass Heat-Control & UV Protection Coating',
    tagline: 'Solar Thermal Control · Optical Clarity · 99% UV Block',
    shortDesc: 'Transparent nano-ceramic coating that rejects infrared heat and UV without darkening your views or peeling like conventional films.',
    indicativePrice: '₹85 – ₹120 / sq. ft.',
    unit: 'measured glass area',
    image: '/images/hero_glass.jpg',
    badge: 'Solar Rejection 88%',
    targetCustomers: 'Homes, luxury villas, offices, showrooms, retail stores with large double or single glazing.',
    problem: 'Excessive solar heat gain, unbearable afternoon glare, furniture fading, and soaring air conditioning bills.',
    solutionMechanism: 'Nano-ceramic oxide particles engineered to filter 99% UV radiation and 88% infrared heat while retaining high visible light transmission (VLT > 72%).',
    suitability: 'Compatible with standard float glass, toughened/tempered glass, double glazed DGU units, and skylights.',
    limitations: 'Cannot repair preexisting cracks, internal seal failures in DGUs, or deep scratches.',
    crossSell: 'Compatible Glass Hydrophobic Water-Repellent Treatment (for exterior grime and rain-spot immunity).',
    primaryCta: 'Book a Glass Assessment'
  },
  {
    id: 'roof',
    name: 'Roof & Terrace Cool-Roof Heat-Reflective Coating',
    tagline: 'Thermal Insulation · Solar Reflectance 88% · Substrate Seal',
    shortDesc: 'High-albedo elastomeric cool-roof formulation that prevents thermal heat transfer into top-floor rooms and buildings.',
    indicativePrice: '₹45 – ₹75 / sq. ft.',
    unit: 'measured roof area',
    image: '/images/roof.jpg',
    badge: 'Surface Temp -18°C',
    targetCustomers: 'Independent houses, penthouses, top-floor apartments, factories, warehouses and institutional buildings.',
    problem: 'Sizzling concrete roofs radiating continuous heat into living and work spaces throughout Delhi NCR summers.',
    solutionMechanism: 'Reflects 88% of solar radiation back into the atmosphere and dissipates retained heat rapidly through high thermal emittance.',
    suitability: 'Compatible with concrete slabs, mosaic tiles, china mosaic, metal sheets, and primed bituminous roofs.',
    limitations: 'Severe structural cracks or waterproofing failures must be repaired before final heat-reflective topcoat.',
    crossSell: 'Compatible Terrace Water-Repellent Deep Penetration Primer.',
    primaryCta: 'Book a Roof Inspection'
  },
  {
    id: 'sofa',
    name: 'Sofa & Upholstery Hydrophobic Fabric Armor',
    tagline: 'Oleophobic & Hydrophobic Shield · Breathable · Invisible',
    shortDesc: 'Invisible molecular liquid barrier that causes tea, coffee, wine, and water spills to bead up on compatible fabrics for easy wipe-off.',
    indicativePrice: 'Starting ₹1,499',
    unit: 'per 3-seater sofa',
    image: '/images/sofa.jpg',
    badge: 'Spill Immunity',
    targetCustomers: 'Families, pet owners, luxury furnished apartments, hospitality suites, executive offices.',
    problem: 'Accidental beverage spills, pet stains, food oils, and everyday grime permanently ruining expensive imported upholstery.',
    solutionMechanism: 'Fluoro-free nano-silica coat envelopes each individual fabric fiber without altering texture, breathability, or hand-feel.',
    suitability: 'Compatible with linen, cotton blends, velvet, chenille, polyester, microfibers, and treated suede (discreet patch check included).',
    limitations: 'Does not protect against boiling oil or deliberate caustic chemicals; requires prompt blot-cleaning for maximum efficacy.',
    crossSell: 'Matching Dining Chairs & Fabric Headboard Protection.',
    primaryCta: 'Protect My Sofa'
  },
  {
    id: 'tiles',
    name: 'Tile, Bathroom & Shower Glass Water-Repellent',
    tagline: 'Limescale Defense · Hydrophobic 115° · Easy Clean',
    shortDesc: 'Repels hard water minerals, soap scum, and limescale stains on shower cubicles, glazed ceramics, and washroom tiles.',
    indicativePrice: 'Starting ₹3,999',
    unit: 'per complete washroom',
    image: '/images/bathroom.jpg',
    badge: 'Hydrophobic 115°',
    targetCustomers: 'Luxury homeowners, high-end apartments, boutique hotels, spa washrooms.',
    problem: 'Chalky white hard water stains, etched shower glass, soap scum accumulation, and time-consuming harsh chemical scrubbing.',
    solutionMechanism: 'Creates an ultra-slick microscopic hydrophobic contact angle (115°) so water droplets roll off instantly, taking mineral deposits with them.',
    suitability: 'Shower glass partitions, ceramic wall tiles, vitreous china washbasins, glazed porcelain tiles.',
    limitations: 'Cannot reverse heavy existing glass corrosion/etching without prior micro-polishing restoration.',
    crossSell: 'Grout Line Anti-Mold Hydrophobic Sealing.',
    primaryCta: 'Book a Bathroom Surface Assessment'
  },
  {
    id: 'wood',
    name: 'Wood & Fine Furniture Surface Protection',
    tagline: 'Scratch Resistance · Moisture Barrier · Natural Luster',
    shortDesc: 'Clear protective treatment engineered for dining tables, veneers, and wooden furniture against moisture rings, stains, and mild scratches.',
    indicativePrice: 'Starting ₹2,499',
    unit: 'by furniture item/finish',
    image: '/images/wood.jpg',
    badge: 'Zero Moisture Ring',
    targetCustomers: 'Homeowners with solid teak, walnut, oak dining sets, executive office tables, luxury hotel interiors.',
    problem: 'Hot mug rings, spilled water staining natural grains, wine marks, and surface dullness on high-value wooden pieces.',
    solutionMechanism: 'Micro-thin ceramic-polymer matrix forms a sacrificial protective layer over polyurethane, lacquer, or oiled wood finishes.',
    suitability: 'Finished hardwoods, veneers, conference tables, designer credenzas, and wooden bar counters.',
    limitations: 'Does not fix deep gouges or structural wood rot; designed as an invisible protective guard over existing finish.',
    crossSell: 'Accompanying Upholstered Dining Chairs Protection.',
    primaryCta: 'Get a Furniture Protection Quote'
  }
];

const PERSONAS_DATA = [
  {
    id: 'villas',
    tabName: 'Luxury Villas & Estates',
    badge: 'RESIDENTIAL ESTATE PROTECTION',
    title: 'Your ₹10 Cr+ Residence Deserves Invisible Protection, Not Recurring Paint Scrapes.',
    image: '/images/hero_glass.jpg',
    pain: 'Expansive double-height glass turns living spaces into heat traps from March to July. Rare Italian linen sofas and imported veneer tables face constant spill hazards during weekend hosting.',
    fixes: [
      { tag: 'GLASS HEAT-CONTROL 88%', desc: 'Cuts solar infrared transfer into living areas by up to 12°C' },
      { tag: 'FABRIC OLEOPHOBIC ARMOR', desc: 'Liquid beading protection for sofas and dining chairs' },
      { tag: 'WATER-REPELLENT GLASS', desc: 'Maintains spotless, crystal-clear facade views through monsoon rain' }
    ],
    outcome: 'Transform indoor thermal comfort, protect multimillion-rupee interior finishes, and reduce summer air conditioning power draw.'
  },
  {
    id: 'penthouses',
    tabName: 'Top-Floor Penthouses',
    badge: 'COOL-ROOF & THERMAL COMFORT',
    title: 'Top-Floor Terraces Suffer Brutal Direct Sun. Stop Living Inside an Oven.',
    image: '/images/roof.jpg',
    pain: 'Slab temperatures hit 58°C on Delhi NCR terraces, continuously conducting heat through the ceiling into bedrooms long after sunset, forcing ACs to run 24/7 without cooling relief.',
    fixes: [
      { tag: 'SOLAR REFLECTIVE COAT', desc: 'Reflects 88% solar radiation directly back into the atmosphere' },
      { tag: 'ELASTOMERIC SEAL', desc: 'Bridges hairline surface fissures and prevents damp seepage' },
      { tag: 'ROOM TEMP CUT 4-7°C', desc: 'Directly lowers ceiling surface heat transfer' }
    ],
    outcome: 'Enjoy a measurably cooler top-floor apartment, cut summer electricity bills by up to 25%, and protect your terrace deck.'
  },
  {
    id: 'offices',
    tabName: 'Commercial Facades & Offices',
    badge: 'COMMERCIAL FACILITY OPTIMIZATION',
    title: 'Glazed Facades Drain Corporate Energy Budgets and Create Uncomfortable Glare.',
    image: '/images/hero_glass.jpg',
    pain: 'Workstations next to perimeter glass become uncomfortably hot. Blinds block daylight and waste artificial lighting. HVAC chillers run at maximum capacity trying to offset heat spikes.',
    fixes: [
      { tag: 'INFRARED REJECTION 88%', desc: 'Substantially reduces thermal loading on centralized chillers' },
      { tag: '99% UV SHIELD', desc: 'Protects office furnishings, monitors, and artwork from fading' },
      { tag: 'NATURAL DAYLIGHT PRESERVED', desc: 'No dark tints or reflective mirror look that violates lease agreements' }
    ],
    outcome: 'Lower corporate carbon footprint, lower operational HVAC costs, and optimize perimeter workstation productivity.'
  },
  {
    id: 'hospitality',
    tabName: 'Hotels & Hospitality',
    badge: 'GUEST EXPERIENCE & REDUCED OPEX',
    title: 'Hard Water Stains in Luxury Bathrooms Damage Guest Reviews and Burn Housekeeping Time.',
    image: '/images/bathroom.jpg',
    pain: 'Housekeeping teams waste hours daily scrubbing shower partitions with acidic cleaners that erode seals and dull glass over time, yet water spots return with the very next guest.',
    fixes: [
      { tag: 'HYDROPHOBIC CONTACT 115°', desc: 'Water and soap scum roll off without adhering to glass' },
      { tag: '60% FASTER TURNDOWN', desc: 'Quick microfiber wipe keeps partitions sparkling without harsh chemicals' },
      { tag: 'BANQUET FABRIC SHIELD', desc: 'Banqueting chairs and lounge seating protected against wine and curry spills' }
    ],
    outcome: 'Maintain pristine 5-star washroom aesthetics, extend shower enclosure lifespan, and slash chemical housekeeping expenses.'
  },
  {
    id: 'retail',
    tabName: 'Retail Stores & Showrooms',
    badge: 'MERCHANDISE & STOREFRONT PROTECTION',
    title: 'Display Windows Fade Expensive Merchandise Under Harsh Sun Glare.',
    image: '/images/hero_glass.jpg',
    pain: 'Apparel, leather accessories, and display items behind showroom windows fade within weeks due to intense UV penetration, destroying profit margins and forcing frequent window rotations.',
    fixes: [
      { tag: '99.9% UV INTERCEPTION', desc: 'Stops pigment breakdown on mannequins, luxury garments, and leather' },
      { tag: 'NON-DARKENING CLARITY', desc: 'Maintains vibrant street visibility and night-time display transparency' }
    ],
    outcome: 'Protect floor stock from sun damage, invite footfall with clear views, and keep store interiors cool.'
  },
  {
    id: 'designers',
    tabName: 'Architects & Interior Designers',
    badge: 'SPECIFICATION PARTNER',
    title: 'Preserve the Exact Aesthetic You Hand Over on Move-In Day.',
    image: '/images/wood.jpg',
    pain: 'Clients hold designers accountable when bespoke wood finishes stain or custom upholstery shows water rings within the first 6 months of occupancy.',
    fixes: [
      { tag: 'SPECIFICATION PARTNER', desc: 'Documented SOPs, certified technician crews, and written warranties' },
      { tag: 'INVISIBLE LAYER', desc: 'Leaves wood grain feel, sheen, and textile softness completely intact' }
    ],
    outcome: 'Protect your architectural reputation with an engineered finishing step that guarantees lasting client satisfaction.'
  }
];

const COMBOS_DATA = [
  {
    id: 'combo-home-comfort',
    name: 'Home Comfort Combo',
    target: 'For homeowners & premium apartments',
    tag: 'MOST POPULAR',
    savings: 'Save ~15% on bundled services',
    description: 'The definitive indoor living upgrade: transparent solar heat-control on your primary sun-facing glass windows combined with invisible hydrophobic spill protection on your living room sofa.',
    includes: [
      'Glass heat-control coating assessment & approved nano-ceramic treatment',
      'Sofa fabric protection (up to 5 seating units), subject to compatibility check',
      'Coordinated single-day appointment with certified service crew',
      'Itemized scope, combined warranty documentation, and aftercare cleaning kit'
    ],
    pricingRule: 'Custom measured glass area + sofa seat count minus transparent 15% bundle discount.',
    primaryCta: 'Book Home Comfort Combo'
  },
  {
    id: 'combo-roof-rain',
    name: 'Roof & Rain Ready Combo',
    target: 'For independent houses, villas & commercial roofs',
    tag: 'SUMMER & MONSOON READY',
    savings: 'Save ~12% on bundled services',
    description: 'Dual exterior defense: high-albedo heat-reflective elastomeric coating to slash indoor ceiling temperatures paired with terrace water-repellent sealing.',
    includes: [
      'Comprehensive roof substrate assessment & hairline crack inspection',
      'Solar reflective cool-roof treatment (reduces surface temp by up to 18°C)',
      'Terrace tile & parapet water-repellent hydrophobic sealer',
      'Documented substrate preparation, dual-coat application & 5-year warranty'
    ],
    pricingRule: 'Area-based measurement with preparation scope quoted transparently after on-site inspection.',
    primaryCta: 'Book Roof & Rain Combo'
  },
  {
    id: 'combo-complete-care',
    name: 'Complete Surface Care',
    target: 'For premium villas, penthouses & boutique offices',
    tag: 'COMPREHENSIVE RESIDENCE',
    savings: 'Save up to 20% on full property scope',
    description: 'Total architectural surface defense: comprehensive multi-surface protection covering heat-exposed glass, washrooms, luxury upholstery, and dining wood surfaces.',
    includes: [
      'Property-wide surface diagnostic & material compatibility profiling',
      'Sun-facing glass heat & UV rejection treatment',
      'Master bathroom shower cubicle & tile anti-scale hydrophobic coating',
      'Full living room sofa & dining chairs fabric spill armor',
      'Wood table moisture-ring & stain sacrificial shield',
      'Dedicated project supervisor & 5 to 10-year written service warranty'
    ],
    pricingRule: 'Consolidated itemized proposal with maximum package savings and scheduled visits.',
    primaryCta: 'Request Complete Site Survey'
  }
];

const COMPARISON_DATA = [
  { param: 'Initial Assessment', local: 'Quick visual eyeball estimate or phone guess', cw: 'Structured diagnostics, photo mapping, glass/fabric suitability test & site checklist' },
  { param: 'Recommendation', local: 'One generic chemical offered by default', cw: 'Engineered recommendation matching surface substrate, exposure direction & actual problem' },
  { param: 'Quotation', local: 'Lump-sum quote with vague exclusions', cw: 'Fully itemized scope, area measurements, chemistry specifications & explicit exclusions' },
  { param: 'Product Suitability', local: 'Never documented; trial-and-error', cw: 'Mandatory substrate compatibility check & discreet fabric/wood test patch' },
  { param: 'Application Team', local: 'Daily wage painters or subcontracted labor', cw: 'In-house trained, uniformed CoatingWale technicians with safety & application SOPs' },
  { param: 'Quality Assurance', local: 'Subjective visual check by technician', cw: 'Defined 12-point completion checklist with customer sign-off & cure validation' },
  { param: 'Warranty Standard', local: 'Verbal promises that vanish after payment', cw: 'Written 5 to 10-year warranty document with clear terms and swift claims process' },
  { param: 'Aftercare Support', local: 'Informal advice like "don\'t touch for a day"', cw: 'Documented cleaning instructions, approved microfiber care kit & maintenance schedule' },
  { param: 'Bundled Services', local: 'Quoted separately with repeated site fees', cw: 'Seamlessly coordinated single-appointment bundles with transparent discounts' },
  { param: 'Follow-Up Cadence', local: 'Entirely reactive or non-existent', cw: 'Scheduled 30-day feedback, 6-month inspection check & annual maintenance reminders' }
];

const FAQS_DATA = [
  {
    q: 'How does CoatingWale glass coating differ from standard window film tints?',
    a: 'Unlike dark window films, CoatingWale uses an optical nano-ceramic liquid formulation applied directly to the glass. It rejects up to 88% of solar infrared heat and 99% of UV rays without significantly darkening your room, bubbling, peeling at the corners, or turning purple over time. You retain crystal-clear views while enjoying a noticeably cooler room.'
  },
  {
    q: 'Is sofa fabric protection safe for children, pets, and delicate fabrics like linen or velvet?',
    a: 'Yes. Once fully cured, our fabric protection is completely non-toxic, odorless, and VOC-free. It does not create a plastic film; instead, it surrounds each individual fiber at the molecular level, allowing the fabric to remain 100% breathable with zero change to its softness, texture, or color. We always conduct a discreet patch test first.'
  },
  {
    q: 'Will the cool-roof coating solve active terrace water leakages?',
    a: 'Our cool-roof coating is engineered primarily for solar reflectance and thermal insulation (lowering roof temperatures by up to 18°C). While it has elastomeric water-resistant qualities, it is not a substitute for structural waterproofing repairs. During our site assessment, if we identify active cracks or waterproofing failure, our team will document them and provide an integrated solution before coating.'
  },
  {
    q: 'How long does the shower glass and tile water-repellent coating last?',
    a: 'Our bathroom hydrophobic coating bonds covalently with silica in glass and glazed ceramics. Under standard domestic cleaning routines (wiping with microfiber and pH-neutral cleaner), the treatment lasts 2 to 3 years before requiring a quick touch-up coat. Harsh abrasives and wire wool should be avoided.'
  },
  {
    q: 'What areas in Delhi NCR do you serve?',
    a: 'CoatingWale currently operates active service teams across South Delhi, Vasant Vihar, Chanakyapuri, Greater Kailash, Gurgaon (DLF Phase 1–5, Golf Course Road, Cyber City, Sohna Road), Noida (Sectors 15 to 150), Greater Noida, and Dwarka Expressway.'
  },
  {
    q: 'How does the booking and estimate process work?',
    a: 'Booking takes just 2 minutes online. You tell us what surfaces need protection, share your area in Delhi NCR, and optionally attach photos. Our service coordinator reviews your requirements, provides an indicative estimate, and schedules a certified technician for an exact on-site assessment.'
  }
];

/* ==========================================================================
   INITIALIZE DOM COMPONENTS & POPULATE DATA
   ========================================================================== */

function initializeApp() {
  // 1. Populate Persona Showcase
  const personaDisplay = document.getElementById('persona-display-pane');
  const personaTabButtons = document.querySelectorAll('.department_tab-link');

  function renderPersona(personaId) {
    const p = PERSONAS_DATA.find(item => item.id === personaId) || PERSONAS_DATA[0];
    if (!personaDisplay) return;

    personaDisplay.innerHTML = `
      <div class="department_showcase-grid">
        <div class="department_showcase-visual">
          <img src="${p.image}" alt="${p.tabName}" />
          <div style="position: absolute; bottom: 1.5rem; left: 1.5rem; background: rgba(6,17,11,0.85); border: 1px solid rgba(255,255,255,0.15); border-radius: 8px; padding: 0.75rem 1.15rem; font-family: var(--font-family--mono); font-size: 0.75rem;">
            <div style="color: var(--brand-amber-light); font-weight: 700;">SUBSTRATE VALIDATION PASSED</div>
            <div style="color: #94A3B8;">CoatingWale Engineering Protocol</div>
          </div>
        </div>

        <div class="department_showcase-details">
          <div class="margin-bottom-small">
            <div class="text-style-tagline text-color-brand">${p.badge}</div>
            <h3 class="heading-style-h3 text-style-balance" style="margin-top: 0.35rem; color: #fff;">${p.title}</h3>
          </div>

          <div style="margin-bottom: 1.5rem;">
            <div class="text-size-tiny text-style-allcaps text-weight-bold" style="color: #F87171; margin-bottom: 0.3rem;">THE PAIN</div>
            <p class="text-size-small text-style-muted">${p.pain}</p>
          </div>

          <div style="margin-bottom: 1.5rem;">
            <div class="text-size-tiny text-style-allcaps text-weight-bold text-color-brand" style="margin-bottom: 0.3rem;">WHAT FIXES IT</div>
            <div class="department_popup-tag-list">
              ${p.fixes.map(f => `
                <div class="department_popup-tag" title="${f.desc}">
                  <strong>${f.tag}:</strong> ${f.desc}
                </div>
              `).join('')}
            </div>
          </div>

          <div style="margin-bottom: 2rem;">
            <div class="text-size-tiny text-style-allcaps text-weight-bold" style="color: var(--brand-gold); margin-bottom: 0.3rem;">THE OUTCOME</div>
            <p class="text-size-small" style="color: #F8FAF9; font-weight: 500;">${p.outcome}</p>
          </div>

          <div class="button is-primary modal-open-trigger" style="align-self: flex-start;">
            <span class="button_inner">
              <span class="button_default">
                <span class="button_default-bg"></span>
                <span class="button_text button_default-text"><span>Book an Assessment for this Space →</span></span>
              </span>
              <span aria-hidden="true" class="button_hover">
                <span class="button_hover-bg"></span>
                <span class="button_text button_hover-text"><span>Book an Assessment for this Space →</span></span>
              </span>
            </span>
          </div>
        </div>
      </div>
    `;

    personaDisplay.querySelector('.modal-open-trigger')?.addEventListener('click', () => openBookingModal());
  }

  renderPersona(PERSONAS_DATA[0].id);

  personaTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      personaTabButtons.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      renderPersona(btn.dataset.persona);
    });
  });

  // 2. Populate Services Directory Grid (Multi-Row: Top 3 Cards + Remaining Below)
  const servicesTrack = document.getElementById('services-track');
  if (servicesTrack) {
    servicesTrack.innerHTML = SERVICES_DATA.map(s => `
      <div class="service_grid-item centered-slider-slide">
        <div class="service_card">
          <a href="/${s.id}.html" style="text-decoration: none; color: inherit; display: block;">
            <div class="service_card-image-wrap">
              <img src="${s.image}" alt="${s.name}" loading="lazy" />
              <div class="service_card-badge">${s.badge}</div>
            </div>

            <h3 class="heading-style-h5" style="margin-bottom: 0.5rem; text-transform: none; font-weight: 700; transition: color 0.2s ease;">${s.name}</h3>
          </a>
          <p class="text-size-small text-style-muted" style="margin-bottom: 1.25rem; flex-grow: 1;">${s.shortDesc}</p>

          <div style="padding-top: 0.85rem; border-top: 1px solid #E2E8F0; margin-bottom: 1.25rem; display: flex; align-items: baseline; justify-content: space-between;">
            <div>
              <div class="text-size-tiny text-style-muted text-style-allcaps font-mono">ESTIMATED RATE</div>
              <div style="font-family: var(--font-family--mono); font-size: 1.15rem; font-weight: 700; color: #047857;">${s.indicativePrice}</div>
            </div>
            <span class="text-size-tiny text-style-muted font-mono">${s.unit}</span>
          </div>

          <div class="service_card-actions">
            <a href="/${s.id}.html" class="service_card-btn is-details" aria-label="Details for ${s.name}">
              <span class="btn_text">DETAILS</span>
              <span class="btn_arrow">→</span>
            </a>

            <button type="button" class="service_card-btn is-book service-book-trigger" data-service-id="${s.id}" aria-label="Book assessment for ${s.name}">
              <span class="btn_text">BOOK</span>
              <span class="btn_arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // 4. Populate Combos
  const combosGrid = document.getElementById('combos-grid');
  if (combosGrid) {
    combosGrid.innerHTML = COMBOS_DATA.map((c, i) => `
      <div class="combo_card ${i === 0 ? 'is-popular' : ''}">
        <div class="combo_ribbon">${c.tag}</div>
        <h3 class="heading-style-h4" style="margin-bottom: 0.35rem; color: #fff;">${c.name}</h3>
        <div class="text-style-muted text-size-small" style="margin-bottom: 1rem;">${c.target}</div>
        
        <div style="background: rgba(255, 124, 30, 0.18); border: 1px solid rgba(255, 124, 30, 0.45); border-radius: 6px; padding: 0.35rem 0.75rem; color: var(--brand-amber-light); font-family: var(--font-family--mono); font-size: 0.78rem; font-weight: 700; display: inline-block; margin-bottom: 1.25rem;">
          ${c.savings}
        </div>

        <p class="text-style-muted text-size-small" style="line-height: 1.5; margin-bottom: 1.5rem;">${c.description}</p>

        <ul class="combo_features-list">
          ${c.includes.map(inc => `
            <li class="combo_feature-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>${inc}</span>
            </li>
          `).join('')}
        </ul>

        <div style="padding-top: 1rem; border-top: 1px solid rgba(255, 255, 255, 0.1); margin-bottom: 1.5rem; font-size: 0.8rem; color: #94A3B8;">
          <strong style="color: #fff;">Pricing:</strong> ${c.pricingRule}
        </div>

        <div class="button is-primary combo-book-trigger" data-combo-id="${c.id}" style="width: 100%;">
          <span class="button_inner" style="width: 100%; justify-content: center;">
            <span class="button_default">
              <span class="button_default-bg"></span>
              <span class="button_text button_default-text"><span>${c.primaryCta} →</span></span>
            </span>
            <span aria-hidden="true" class="button_hover">
              <span class="button_hover-bg"></span>
              <span class="button_text button_hover-text"><span>${c.primaryCta} →</span></span>
            </span>
          </span>
        </div>
      </div>
    `).join('');
  }

  // 5. Populate Comparison Table Rows
  const compTbody = document.getElementById('comparison-tbody');
  if (compTbody) {
    compTbody.innerHTML = COMPARISON_DATA.map(row => `
      <tr>
        <td style="font-weight: 700; color: #0A0F0D; background: #F8FAF9;">${row.param}</td>
        <td style="color: #64748B;">${row.local}</td>
        <td style="color: #0A0F0D; background: #F0FDF4; font-weight: 500;">
          <strong style="color: #047857;">${row.cw}</strong>
        </td>
      </tr>
    `).join('');
  }

  // 6. Populate FAQs
  const faqsList = document.getElementById('faqs-list');
  if (faqsList) {
    faqsList.innerHTML = FAQS_DATA.map((faq, index) => `
      <div class="faq_item ${index === 0 ? 'is-open' : ''}">
        <button class="faq_question-btn">
          <span>${faq.q}</span>
          <div class="faq_chevron">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
        </button>
        <div class="faq_answer">
          <p>${faq.a}</p>
        </div>
      </div>
    `).join('');

    faqsList.querySelectorAll('.faq_question-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq_item');
        const isOpen = item.classList.contains('is-open');
        faqsList.querySelectorAll('.faq_item').forEach(i => i.classList.remove('is-open'));
        if (!isOpen) item.classList.add('is-open');
      });
    });
  }

  // 7. Sticky Navbar Scroll Hide & Reveal
  const navbar = document.getElementById('navbar');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 80) {
      navbar?.classList.add('is-scrolled');
      if (currentScrollY > lastScrollY + 5 && currentScrollY > 200) {
        navbar?.classList.add('is-hidden');
      } else if (currentScrollY < lastScrollY - 5) {
        navbar?.classList.remove('is-hidden');
      }
    } else {
      navbar?.classList.remove('is-scrolled');
      navbar?.classList.remove('is-hidden');
    }
    lastScrollY = currentScrollY;
  }, { passive: true });

  // Mobile / Tablet Drawer Menu Controls
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  const mobileBackdrop = document.getElementById('mobile-drawer-backdrop');
  const mobileClose = document.getElementById('mobile-close');

  function openMobileMenu() {
    mobileDrawer?.classList.add('is-active');
    mobileToggle?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer?.classList.remove('is-active');
    mobileToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  mobileToggle?.addEventListener('click', () => {
    if (mobileDrawer?.classList.contains('is-active')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  mobileClose?.addEventListener('click', closeMobileMenu);
  mobileBackdrop?.addEventListener('click', closeMobileMenu);

  mobileDrawer?.querySelectorAll('.mobile_nav-item:not(.mobile_services-toggle)').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });



  // Desktop Navbar Dropdowns click/touch toggle (Services & Packages)
  document.querySelectorAll('.navbar_dropdown-wrapper').forEach(wrapper => {
    const trigger = wrapper.querySelector('.navbar_dropdown-trigger');
    trigger?.addEventListener('click', (e) => {
      e.preventDefault();
      const wasOpen = wrapper.classList.contains('is-open');
      document.querySelectorAll('.navbar_dropdown-wrapper').forEach(w => w.classList.remove('is-open'));
      if (!wasOpen) {
        wrapper.classList.add('is-open');
      }
    });

    wrapper.querySelectorAll('.dropdown_item, .dropdown_footer-link').forEach(link => {
      link.addEventListener('click', () => {
        wrapper.classList.remove('is-open');
      });
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar_dropdown-wrapper')) {
      document.querySelectorAll('.navbar_dropdown-wrapper').forEach(w => w.classList.remove('is-open'));
    }
  });

  // Technical Specification Accordions on Service Pages
  document.querySelectorAll('.service_accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.service_accordion-item');
      if (item) {
        item.classList.toggle('is-open');
      }
    });
  });

  // Dedicated Service Page Quick Area Cost Estimator
  const serviceCalcSlider = document.getElementById('service-calc-slider');
  const serviceCalcArea = document.getElementById('service-calc-area');
  const serviceCalcCost = document.getElementById('service-calc-cost');
  if (serviceCalcSlider && (serviceCalcArea || serviceCalcCost)) {
    const updateServiceCalc = () => {
      const val = parseFloat(serviceCalcSlider.value) || 0;
      const rate = parseFloat(serviceCalcSlider.dataset.rate) || 1;
      if (serviceCalcArea) serviceCalcArea.textContent = val.toLocaleString('en-IN');
      if (serviceCalcCost) serviceCalcCost.textContent = (val * rate).toLocaleString('en-IN');
    };
    serviceCalcSlider.addEventListener('input', updateServiceCalc);
    updateServiceCalc();
  }

  document.getElementById('mobile-drawer-book-btn')?.addEventListener('click', () => {
    closeMobileMenu();
    openBookingModal();
  });

  // 8. Interactive Before/After Split Comparison Slider
  const comparisonBox = document.getElementById('before-after-box');
  const beforeWrap = document.getElementById('before-wrap');
  const handle = document.getElementById('slider-handle');
  let isDragging = false;

  function syncOverlayWidth() {
    if (comparisonBox && beforeWrap) {
      const overlayImg = beforeWrap.querySelector('.comparison_overlay-image');
      if (overlayImg) {
        overlayImg.style.width = comparisonBox.offsetWidth + 'px';
      }
    }
  }
  syncOverlayWidth();
  window.addEventListener('resize', syncOverlayWidth);

  function updateBeforeAfter(clientX) {
    if (!comparisonBox || !beforeWrap || !handle) return;
    const rect = comparisonBox.getBoundingClientRect();
    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;
    const percentage = (x / rect.width) * 100;
    beforeWrap.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  }

  handle?.addEventListener('mousedown', () => { isDragging = true; });
  window.addEventListener('mouseup', () => { isDragging = false; });
  window.addEventListener('mousemove', (e) => {
    if (isDragging) updateBeforeAfter(e.clientX);
  });

  handle?.addEventListener('touchstart', () => { isDragging = true; }, { passive: true });
  window.addEventListener('touchend', () => { isDragging = false; });
  window.addEventListener('touchmove', (e) => {
    if (isDragging && e.touches[0]) updateBeforeAfter(e.touches[0].clientX);
  }, { passive: true });

  comparisonBox?.addEventListener('click', (e) => updateBeforeAfter(e.clientX));

  // 9. Interactive Estimator
  const areaSlider = document.getElementById('calc-area-slider');
  const billSlider = document.getElementById('calc-bill-slider');
  const furnSlider = document.getElementById('calc-furn-slider');

  const areaNum = document.getElementById('calc-area-num');
  const billNum = document.getElementById('calc-bill-num');
  const furnNum = document.getElementById('calc-furn-num');

  const savingTotal = document.getElementById('calc-saving-total');
  const energyNum = document.getElementById('calc-energy-num');
  const furnNumSaved = document.getElementById('calc-furn-num-saved');

  function updateCalculator() {
    if (!areaSlider || !billSlider || !furnSlider) return;

    const area = parseFloat(areaSlider.value);
    const monthlyBill = parseFloat(billSlider.value);
    const furnitureVal = parseFloat(furnSlider.value);

    if (areaNum) areaNum.textContent = area.toLocaleString('en-IN');
    if (billNum) billNum.textContent = monthlyBill.toLocaleString('en-IN');
    if (furnNum) furnNum.textContent = furnitureVal.toLocaleString('en-IN');

    // 24% annual summer cooling reduction across 6 summer months
    const annualEnergy = Math.round(monthlyBill * 6 * 0.24);
    // 10% annual furniture maintenance & reupholstering avoided
    const annualFurn = Math.round(furnitureVal * 0.10);
    const total = annualEnergy + annualFurn;

    if (energyNum) energyNum.textContent = annualEnergy.toLocaleString('en-IN');
    if (furnNumSaved) furnNumSaved.textContent = annualFurn.toLocaleString('en-IN');
    if (savingTotal) savingTotal.textContent = total.toLocaleString('en-IN');
  }

  areaSlider?.addEventListener('input', updateCalculator);
  billSlider?.addEventListener('input', updateCalculator);
  furnSlider?.addEventListener('input', updateCalculator);
  updateCalculator();

  const calcClaimBtn = document.getElementById('calc-claim-btn');
  if (calcClaimBtn && !calcClaimBtn.classList.contains('modal-open-trigger')) {
    calcClaimBtn.addEventListener('click', () => {
      const sid = calcClaimBtn.dataset.serviceId;
      openBookingModal(sid, sid);
    });
  }

  // 10. Booking Modal Logic
  const bookingModal = document.getElementById('booking-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  function openBookingModal(preselectedService = '', serviceId = '') {
    if (!bookingModal) return;
    bookingModal.classList.add('is-active');
    document.body.style.overflow = 'hidden';

    if (preselectedService || serviceId) {
      const sKey = (serviceId || preselectedService || '').toLowerCase();
      const serviceCheckboxes = bookingModal.querySelectorAll('input[name="services"], input[name="surface"]');

      // Clear all existing selections first
      serviceCheckboxes.forEach(cb => {
        cb.checked = false;
        cb.closest('.choice_card')?.classList.remove('is-selected');
      });

      let matched = false;
      serviceCheckboxes.forEach(cb => {
        const val = cb.value.toLowerCase();
        const parentText = (cb.closest('label')?.textContent || '').toLowerCase();

        let isMatch = false;
        if (sKey.includes('glass') && (val.includes('glass') || parentText.includes('glass'))) isMatch = true;
        else if (sKey.includes('roof') && (val.includes('roof') || parentText.includes('roof') || val.includes('terrace'))) isMatch = true;
        else if ((sKey.includes('sofa') || sKey.includes('fabric')) && (val.includes('sofa') || val.includes('fabric') || parentText.includes('sofa') || parentText.includes('fabric'))) isMatch = true;
        else if ((sKey.includes('tile') || sKey.includes('bath')) && (val.includes('tile') || val.includes('bath') || parentText.includes('tile') || parentText.includes('bath'))) isMatch = true;
        else if ((sKey.includes('wood') || sKey.includes('furn')) && (val.includes('wood') || val.includes('furn') || parentText.includes('wood') || parentText.includes('furn'))) isMatch = true;
        else if ((sKey.includes('combo') || sKey.includes('pack')) && (val.includes('combo') || parentText.includes('combo'))) isMatch = true;
        else if (val.includes(sKey) || sKey.includes(val)) isMatch = true;

        if (isMatch && !matched) {
          cb.checked = true;
          cb.closest('.choice_card')?.classList.add('is-selected');
          matched = true;
        }
      });

      // Fallback: if nothing matched, select the first checkbox
      if (!matched && serviceCheckboxes.length > 0) {
        serviceCheckboxes[0].checked = true;
        serviceCheckboxes[0].closest('.choice_card')?.classList.add('is-selected');
      }
    }

    // Scroll modal smoothly to top
    const modalContent = bookingModal.querySelector('.modal_content');
    if (modalContent) modalContent.scrollTop = 0;
  }

  function closeBookingModal() {
    if (!bookingModal) return;
    bookingModal.classList.remove('is-active');
    document.body.style.overflow = '';
  }

  window.openBookingModal = openBookingModal;
  window.closeBookingModal = closeBookingModal;

  modalCloseBtn?.addEventListener('click', closeBookingModal);
  bookingModal?.addEventListener('click', (e) => {
    if (e.target === bookingModal) closeBookingModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && bookingModal?.classList.contains('is-active')) {
      closeBookingModal();
    }
  });

  // Wire all modal-open-trigger buttons
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.modal-open-trigger');
    if (trigger) {
      const sid = trigger.dataset.serviceId;
      if (sid) openBookingModal(sid, sid);
      else openBookingModal();
    }
  });

  // Wire specific booking buttons
  document.getElementById('nav-book-btn')?.addEventListener('click', () => openBookingModal());
  document.getElementById('mobile-book-btn')?.addEventListener('click', () => openBookingModal());
  document.getElementById('final-cta-btn')?.addEventListener('click', () => openBookingModal());

  document.addEventListener('click', (e) => {
    const target = e.target;
    const serviceBookBtn = target.closest('.service-book-trigger');
    if (serviceBookBtn) {
      e.preventDefault();
      const sid = serviceBookBtn.dataset.serviceId;
      const service = SERVICES_DATA.find(s => s.id === sid);
      openBookingModal(service ? service.name : sid, sid);
      return;
    }

    const comboBookBtn = target.closest('.combo-book-trigger');
    if (comboBookBtn) {
      e.preventDefault();
      const cid = comboBookBtn.dataset.comboId;
      const combo = COMBOS_DATA.find(c => c.id === cid);
      openBookingModal(combo ? combo.name : 'combo', 'combo');
      return;
    }
  });

  // Hero Quick Locality Form
  document.getElementById('hero-quick-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const area = document.getElementById('hero-area-input')?.value;
    openBookingModal();
    const areaSelect = document.getElementById('book-area');
    if (areaSelect && area) {
      for (let opt of areaSelect.options) {
        if (opt.text.toLowerCase().includes(area.toLowerCase())) {
          opt.selected = true;
          break;
        }
      }
    }
  });

  // Choice Cards Selection
  document.querySelectorAll('.choice_card').forEach(card => {
    const input = card.querySelector('input');
    if (input) {
      if (input.checked) card.classList.add('is-selected');
      input.addEventListener('change', () => {
        if (input.type === 'radio') {
          const name = input.name;
          document.querySelectorAll(`input[name="${name}"]`).forEach(r => {
            r.closest('.choice_card')?.classList.remove('is-selected');
          });
          card.classList.add('is-selected');
        } else {
          card.classList.toggle('is-selected', input.checked);
        }
      });
    }
  });

  // Photo Upload Simulation
  const dropZone = document.getElementById('drop-zone');
  const photoInput = document.getElementById('photo-input');
  const filePreview = document.getElementById('file-preview-list');

  dropZone?.addEventListener('click', () => photoInput?.click());
  photoInput?.addEventListener('change', (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const names = Array.from(e.target.files).map(f => f.name).join(', ');
      if (filePreview) filePreview.innerHTML = `✓ ${e.target.files.length} Photo(s) Attached: <em>${names}</em>`;
    }
  });

  // Appointment Form Submission
  const appointmentForm = document.getElementById('appointment-form');
  appointmentForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    const selectedServices = Array.from(appointmentForm.querySelectorAll('input[name="services"]:checked, input[name="surface"]:checked')).map(cb => cb.value);
    const propertyType = appointmentForm.querySelector('input[name="property_type"]:checked')?.value || 'Residence';
    const locality = document.getElementById('book-area')?.value || 'Delhi NCR';
    const timing = appointmentForm.querySelector('input[name="timing"]:checked')?.value || 'Soon';
    const intent = appointmentForm.querySelector('input[name="booking_intent"]:checked')?.value || 'Site Assessment';
    const name = document.getElementById('book-name')?.value || 'Valued Client';
    const phone = document.getElementById('book-phone')?.value || '';

    try {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
    } catch (err) { }

    const waText = encodeURIComponent(
      `*New CoatingWale Appointment Request*\n` +
      `--------------------------------\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `📍 *Locality:* ${locality}\n` +
      `🏢 *Property:* ${propertyType}\n` +
      `🛡️ *Services:* ${selectedServices.join(', ')}\n` +
      `⏱️ *Timing:* ${timing}\n` +
      `📋 *Booking Type:* ${intent}\n` +
      `--------------------------------\n` +
      `Please confirm my site assessment slot.`
    );

    const modalContent = document.querySelector('.modal_content');
    if (modalContent) {
      modalContent.innerHTML = `
        <div style="text-align: center; padding: 2.5rem 1rem;">
          <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(255, 124, 30, 0.22); color: var(--brand-amber-light); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem auto;">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
          <div class="text-style-tagline text-color-brand">APPOINTMENT REQUEST RECEIVED</div>
          <h2 class="heading-style-h3" style="margin-top: 0.5rem; margin-bottom: 0.75rem; color: #fff;">THANK YOU, ${name}!</h2>
          <p class="text-style-muted" style="max-width: 520px; margin: 0 auto 2rem auto; font-size: 0.95rem;">
            Your request for <strong>${selectedServices.slice(0, 2).join(', ')}</strong> in <strong>${locality}</strong> has been logged. Our service coordinator will call you within 15 minutes to confirm the appointment.
          </p>
          <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <a href="https://wa.me/919810024890?text=${waText}" target="_blank" class="button is-primary">
              <span class="button_inner">
                <span class="button_default">
                  <span class="button_default-bg"></span>
                  <span class="button_text button_default-text"><span>Open WhatsApp Confirmation →</span></span>
                </span>
                <span aria-hidden="true" class="button_hover">
                  <span class="button_hover-bg"></span>
                  <span class="button_text button_hover-text"><span>Open WhatsApp Confirmation →</span></span>
                </span>
              </span>
            </a>
            <div class="button is-secondary" onclick="location.reload()">
              <span class="button_inner">
                <span class="button_default">
                  <span class="button_default-bg"></span>
                  <span class="button_text button_default-text"><span>Back to Website</span></span>
                </span>
                <span aria-hidden="true" class="button_hover">
                  <span class="button_hover-bg"></span>
                  <span class="button_text button_hover-text"><span>Back to Website</span></span>
                </span>
              </span>
            </div>
          </div>
        </div>
      `;
    }
  });

  // 11. Service Detail Modal Logic
  const serviceDetailModal = document.getElementById('service-detail-modal');
  const serviceDetailBody = document.getElementById('service-detail-body');

  function openServiceDetail(serviceId) {
    const s = SERVICES_DATA.find(item => item.id === serviceId);
    if (!s || !serviceDetailBody || !serviceDetailModal) return;

    serviceDetailBody.innerHTML = `
      <button class="modal_close-btn" id="service-modal-close" aria-label="Close modal">✕</button>
      <div class="text-style-tagline text-color-brand">${s.badge}</div>
      <h2 class="heading-style-h3" style="margin-top: 0.35rem; margin-bottom: 0.35rem; color: #fff;">${s.name}</h2>
      <div style="font-family: var(--font-family--mono); font-size: 0.85rem; color: var(--brand-gold); margin-bottom: 1.5rem;">
        ${s.tagline} · Indicative: <strong style="color: var(--brand-amber-light);">${s.indicativePrice}</strong> (${s.unit})
      </div>

      <div style="height: 240px; border-radius: 12px; overflow: hidden; margin-bottom: 1.75rem;">
        <img src="${s.image}" alt="${s.name}" style="width: 100%; height: 100%; object-fit: cover;" />
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-bottom: 1.75rem;">
        <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 1.25rem;">
          <div style="font-family: var(--font-family--mono); font-size: 0.72rem; color: #F87171; text-transform: uppercase; margin-bottom: 0.35rem;">THE PROBLEM IT SOLVES</div>
          <div style="font-size: 0.88rem; color: #CBD5E1;">${s.problem}</div>
        </div>

        <div style="background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 1.25rem;">
          <div style="font-family: var(--font-family--mono); font-size: 0.72rem; color: var(--brand-amber-light); text-transform: uppercase; margin-bottom: 0.35rem;">CHEMISTRY & MECHANISM</div>
          <div style="font-size: 0.88rem; color: #CBD5E1;">${s.solutionMechanism}</div>
        </div>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.1rem; margin-bottom: 0.35rem; color: #fff;">Substrate Suitability & Limitations</h4>
        <p style="font-size: 0.88rem; color: #CBD5E1; margin-bottom: 0.5rem;"><strong>Suitable for:</strong> ${s.suitability}</p>
        <p style="font-size: 0.88rem; color: #94A3B8;"><strong>Limitations (Radical Honesty):</strong> ${s.limitations}</p>
      </div>

      <div style="background: rgba(255, 124, 30, 0.14); border: 1px solid rgba(255, 124, 30, 0.35); border-radius: 10px; padding: 1rem; margin-bottom: 2rem;">
        <div style="font-family: var(--font-family--mono); font-size: 0.75rem; color: var(--brand-amber-light); text-transform: uppercase; margin-bottom: 0.2rem;">RECOMMENDED CROSS-SELL ADD-ON</div>
        <div style="font-size: 0.88rem; color: #fff;">${s.crossSell}</div>
      </div>

      <div class="button is-primary" id="service-modal-book" style="width: 100%;">
        <span class="button_inner" style="width: 100%; justify-content: center;">
          <span class="button_default">
            <span class="button_default-bg"></span>
            <span class="button_text button_default-text"><span>${s.primaryCta} →</span></span>
          </span>
          <span aria-hidden="true" class="button_hover">
            <span class="button_hover-bg"></span>
            <span class="button_text button_hover-text"><span>${s.primaryCta} →</span></span>
          </span>
        </span>
      </div>
    `;

    serviceDetailModal.classList.add('is-active');
    document.body.style.overflow = 'hidden';

    document.getElementById('service-modal-close')?.addEventListener('click', () => {
      serviceDetailModal.classList.remove('is-active');
      document.body.style.overflow = '';
    });

    document.getElementById('service-modal-book')?.addEventListener('click', () => {
      serviceDetailModal.classList.remove('is-active');
      openBookingModal(s.name);
    });
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.service-detail-trigger');
    if (trigger) {
      openServiceDetail(trigger.dataset.serviceId);
    }

    const navTrigger = e.target.closest('.service-nav-trigger');
    if (navTrigger) {
      e.preventDefault();
      openServiceDetail(navTrigger.dataset.target);
    }
  });

  serviceDetailModal?.addEventListener('click', (e) => {
    if (e.target === serviceDetailModal) {
      serviceDetailModal.classList.remove('is-active');
      document.body.style.overflow = '';
    }
  });

  // 12. Commercial Form Submit
  const commForm = document.getElementById('commercial-survey-form');
  commForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const company = document.getElementById('comm-company')?.value;
    try {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
    } catch (err) { }
    alert(`Thank you! Commercial survey inquiry for "${company}" has been sent to the CoatingWale B2B engineering team. We will contact you within 2 hours.`);
    commForm.reset();
  });
}

document.addEventListener('DOMContentLoaded', initializeApp);
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  initializeApp();
}
