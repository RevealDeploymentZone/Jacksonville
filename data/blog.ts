export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  authorTitle: string;
  category: string;
  excerpt: string;
  content?: string; // Full content for the 3 complete posts
  outline?: string[]; // Outline for stubs
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "air-duct-cleaning-cost-jacksonville",
    title: "How much does air duct cleaning cost in Jacksonville? (2026 pricing guide)",
    metaTitle: "Air duct cleaning cost in Jacksonville, FL — 2026 pricing guide",
    metaDesc:
      "What does air duct cleaning cost in Jacksonville in 2026? Full pricing breakdown by home size, what drives cost up or down, and how to avoid low-price bait-and-switch.",
    datePublished: "2026-01-15",
    dateModified: "2026-08-01",
    authorName: "TODO: Add real author name",
    authorTitle: "TODO: Add author title/credentials",
    category: "Pricing",
    excerpt:
      "Jacksonville air duct cleaning typically costs $300–$700 for a standard home. Here's what determines where your job falls and what drives prices higher.",
    content: `## How much does air duct cleaning cost in Jacksonville? (2026 pricing guide)

If you've searched for Jacksonville air duct cleaning prices, you've probably seen numbers ranging from $79 to $800. That range exists because "air duct cleaning" describes anything from blowing compressed air through a register to a full NADCA-standard source removal cleaning with HEPA-filtered collection equipment. The difference in outcomes is roughly as large as the difference in price.

Here's what professional air duct cleaning actually costs in Jacksonville in 2026, what drives the price up or down, and how to tell the difference between legitimate quotes and loss-leader offers that turn into on-site upselling.

### The typical price range for Jacksonville homes

Professional residential air duct cleaning in Jacksonville falls in the range of **$300 to $700** for a standard home. Most standard jobs — homes between 1,500 and 2,500 square feet with a single-zone system, a reasonable number of vents, and accessible ductwork — fall somewhere in the middle of that range.

This reflects the actual cost of doing the job correctly: a trained technician, HEPA-filtered negative-pressure collection equipment, two to four hours of labor, and documentation before and after.

### What pushes the price higher

Several factors move a Jacksonville duct cleaning job above the base range:

**Home size.** More square footage means more duct runs, more registers, and more time. A 4,000-square-foot home takes roughly twice as long as a 2,000-square-foot home, and the pricing reflects that.

**Number of vents.** Vent count varies significantly between homes of similar square footage. Older Jacksonville homes — particularly the 1970s and 1980s suburban builds in Mandarin, Arlington, and the Northside — sometimes have duct layouts with more registers than newer, more efficiently designed systems.

**Multiple air handlers.** Homes with two HVAC systems — common in Jacksonville two-story homes where one system handles each floor — are effectively two jobs. Each system requires its own negative-pressure setup and cleaning sequence.

**Historic home duct configurations.** Riverside, Avondale and Ortega homes from the 1910s–1940s often have retrofit duct systems with crawl-space runs, undersized returns, and configurations that take more time to properly access and clean. The extra time is real and the pricing reflects it.

**Severely contaminated systems.** A system that's been running for twenty years without a filter change, or a home that had a flooding event near the ductwork, presents more contamination than a routine accumulation job. These take longer and sometimes require sanitization in addition to cleaning.

**Sanitization add-on.** Antimicrobial sanitization treatment applied after cleaning adds $100–$200 to most residential jobs, depending on duct surface area.

### What the low-priced offers actually are

You've seen them: $79 for a whole-house duct cleaning. Sometimes $49. These are almost universally loss-leader offers designed to get a technician in the door so they can upsell aggressively on-site.

The mechanism works like this: a technician arrives for the $79 "cleaning," does a minimal inspection, finds "extensive contamination" (genuine or fabricated), and presents options that bring the total to $400–$800. Sometimes the homeowner agrees because they're now in the middle of a job with equipment in their house. Sometimes they don't, and the technician does a minimal cleaning that amounts to blowing air through a few registers.

Neither outcome produces a legitimate NADCA-standard source removal cleaning.

The differentiator is whether the job places the entire duct system under negative pressure. Without that, the debris dislodged from duct surfaces has nowhere specific to go — it's as likely to be pushed further into the system or distributed into the air as it is to be collected.

### How to evaluate a quote

When you receive a quote for Jacksonville duct cleaning, ask:

- Does the job use negative pressure equipment connected to the main duct trunk?
- Is HEPA filtration used on the collection equipment?
- Is the price inclusive of all supply and return ducts, or are some priced separately?
- What does the quote include regarding the air handler and blower?
- Is there a written estimate before the job starts?

A legitimate company can answer all of these specifically. A company that gives vague answers or presents a low number with a caveat about "additional fees depending on what we find" is telling you something.

### Bundled services and typical package pricing

Many Jacksonville homeowners schedule dryer vent cleaning alongside air duct cleaning. A combined package is typically less expensive than the two services separately:

- Dryer vent cleaning standalone: $100–$200
- Air duct cleaning standalone: $300–$700
- Combined package: typically $350–$800 depending on home size

HVAC cleaning (blower wheel, evaporator coil area, air handler cabinet) adds $200–$400 to a duct cleaning job when done at the same time, with the combined price lower than the sum of separate visits.

### Jacksonville-specific pricing factors

A few conditions specific to this market affect where your job falls:

**Older historic homes** (Riverside, Avondale, Springfield, Ortega) with crawl-space duct runs and non-standard configurations run toward the higher end due to additional access time and complexity.

**Coastal homes** (Jacksonville Beach, Neptune Beach, Atlantic Beach) don't automatically cost more, but they may benefit from sanitization after cleaning due to salt-air contamination patterns, which adds to the total.

**Out-of-area surcharges** are worth asking about specifically if you're in Nocatee, Mandarin, Fernandina Beach, or anywhere in Nassau or Clay County. Some companies treat these as out-of-area and quote higher accordingly. AL Air Duct Cleaning Jacksonville covers all four counties within standard pricing — no travel surcharge.

### What's a fair price?

For a standard Jacksonville residential home (1,500–2,500 sq ft, single system), a fair price for a complete NADCA-standard source removal cleaning is $300–$500. Larger homes, historic homes with complex configurations, or jobs requiring additional services will run higher. A quote under $200 for the complete job should prompt questions about what the process actually includes.

The goal is to find a company that does the job correctly, documents conditions before and after, and charges what the work is actually worth — not one that wins the business with a low number and makes it up on-site.`,
  },
  {
    slug: "pine-pollen-jacksonville-hvac",
    title: "Pine pollen season in Jacksonville — what your HVAC does with all that yellow",
    metaTitle: "Pine pollen and your Jacksonville HVAC system — what actually happens",
    metaDesc:
      "Jacksonville's spring pine pollen season creates a specific indoor air quality problem. Here's what happens inside your HVAC and what to do about it.",
    datePublished: "2026-02-01",
    dateModified: "2026-08-01",
    authorName: "TODO: Add real author name",
    authorTitle: "TODO: Add author title/credentials",
    category: "Indoor Air Quality",
    excerpt:
      "Jacksonville's pine pollen season runs February through April. Your HVAC pulls that pollen into the duct system where it accumulates and recirculates long after the season ends.",
    content: `## Pine pollen season in Jacksonville — what your HVAC does with all that yellow

Every February, Jacksonville homeowners start noticing it: a fine yellow-green film on cars, porches, outdoor furniture, and every horizontal surface in the yard. By late February or March, it's coating everything. By April, it's finally easing.

This is Jacksonville's pine pollen season — primarily loblolly and longleaf pine, with contributions from slash pine and other conifers that dominate the tree canopy throughout Duval and Nassau counties. The season runs roughly from mid-February through mid-April, with peaks that vary year to year depending on temperature and rainfall patterns.

What most Jacksonville homeowners don't think about is what's happening to that pollen inside their homes.

### How pollen gets into your duct system

Your HVAC system does two things to outdoor air. First, it filters it — or tries to. The filter at your return register is designed to capture airborne particles, including pollen, before the air moves into the system. Second, it moves it. The blower draws air from the return register, passes it over the coil, and pushes it through the supply ducts and out the registers.

The filter does catch a lot of pollen. But pine pollen particles range from about 50 to 90 microns in diameter — large enough to be visible to the naked eye — and your HVAC filter is sized to your system's airflow requirements, not specifically to pollen season. Standard fiberglass filters and low-MERV pleated filters don't capture all pollen-sized particles, particularly under high-flow conditions or when the filter is already loaded.

What doesn't get captured by the filter deposits somewhere in the system. A significant portion of it deposits in the return duct run — the ductwork between the return register and the air handler. Over a pollen season, a meaningful layer of pollen can accumulate on return duct surfaces.

Here's the problem: it stays there after pollen season ends.

### The recirculation problem

April arrives. The pollen season ends. The yellow film disappears from your car within a few days of a rain.

But inside your return duct, the pollen that deposited there during February, March and April is still on the duct surfaces. Every time your HVAC system runs — which, in Jacksonville, is about nine to ten months a year — the airflow through the return duct dislodges a fraction of that accumulated pollen and recirculates it through your home.

This is why some Jacksonville residents with tree pollen allergies notice that their indoor symptoms persist well past the end of pollen season. The outdoors clears up in April. The indoor environment keeps getting a low-level pollen dose until something removes it from the duct surfaces.

According to the [Asthma and Allergy Foundation of America](https://aafa.org/allergy-capitals/), Jacksonville regularly ranks among higher-challenge cities for allergy sufferers. The spring pollen load from the city's tree canopy is a significant contributor. Indoor recirculation from contaminated ducts extends the effective exposure season.

### What a high-MERV filter does (and doesn't) do

The obvious response is to use a higher-MERV filter. MERV 11 or MERV 13 filters capture a higher percentage of pollen-sized and smaller particles than MERV 8 or basic fiberglass filters.

This is good advice, with a caveat: a high-MERV filter only works while it has remaining capacity. A MERV 13 filter loaded with two months of Jacksonville pollen is not performing at MERV 13. In pollen season, monthly filter changes rather than quarterly ones make a material difference to filtration effectiveness.

The filter also doesn't address the pollen that's already accumulated in the duct runs from previous seasons. Upgrading to a higher-MERV filter stops the accumulation going forward but doesn't remove what's already there.

### What duct cleaning does for pollen exposure

A professional duct cleaning — specifically a NADCA-standard source removal cleaning that places the system under negative pressure and uses agitation tools to dislodge debris from duct wall surfaces — removes accumulated pollen from the duct surfaces.

After cleaning, the deposits that have been building through multiple pollen seasons are gone. When the system runs, it's moving clean air through clean ducts rather than recirculating what's accumulated there.

The combination that makes the most difference: a duct cleaning followed by a new high-MERV filter gives you a clean starting point and better ongoing filtration. The duct cleaning removes the historical accumulation; the upgraded filter prevents the new season from adding to it as quickly.

### When to schedule relative to pollen season

There are reasonable arguments for both pre-season and post-season cleaning.

**Pre-season cleaning** (January or early February) starts the pollen season with clean ducts, which means the season's accumulation is starting from zero rather than adding to years of prior deposits. The downside is that you'll still accumulate the current season's pollen in the ducts.

**Post-season cleaning** (May or June) removes the current season's accumulation along with everything that built up in prior years. The ducts stay clean through the summer and fall before the next pollen season starts.

Either timing is more effective than not cleaning. For homeowners who haven't had a cleaning in several years, post-season cleaning removes the most accumulated material. For homeowners on a regular schedule who want to minimize peak-season exposure, pre-season cleaning is the better choice.

### The honest limit of duct cleaning for allergy sufferers

Duct cleaning reduces the volume of indoor allergens by removing the accumulated source material from duct surfaces. It doesn't eliminate pollen from the indoor environment — outdoor air infiltration through doors, windows, and building envelope gaps will always bring some pollen inside during season. It doesn't replace air filtration, which is an ongoing process.

The [American Lung Association's indoor air quality resources](https://www.lung.org/clean-air/indoor-air) and [EPA guidance on indoor air](https://www.epa.gov/report-environment/indoor-air-quality) both frame indoor allergen management as a multi-factor effort: source control, filtration, and ventilation management working together. Duct cleaning is a meaningful part of that — specifically for Jacksonville's pollen context — but it's one element in a larger picture.

### Practical steps for Jacksonville pollen season

1. **Know when your filters were last changed.** If you don't know, change them now. Use MERV 11 or higher if your system's airflow specifications support it.
2. **Check your filter mid-season.** During peak pollen weeks (typically late February through late March), a filter that should last 60–90 days may need replacement in 30.
3. **Consider a duct cleaning if it's been more than 3–4 years.** In Jacksonville's climate with annual pollen seasons, that interval produces meaningful accumulation.
4. **Keep windows closed during peak pollen hours.** Tree pollen counts are typically highest in the morning. The [National Weather Service Jacksonville office](https://www.weather.gov/jax/) provides local pollen data during season.
5. **If indoor symptoms are significantly worse than outdoor symptoms**, that differential is a signal worth investigating — duct accumulation is one possible cause, but so are other indoor allergen sources.`,
  },
  {
    slug: "duct-cleaning-vs-mold-remediation",
    title: "Duct cleaning vs. mold remediation — which one do you actually need?",
    metaTitle: "Duct cleaning vs. mold remediation in Jacksonville, FL — what's the difference",
    metaDesc:
      "Duct cleaning and mold remediation are different services with different licensing requirements in Florida. Here's how to tell which one you need.",
    datePublished: "2026-03-01",
    dateModified: "2026-08-01",
    authorName: "TODO: Add real author name",
    authorTitle: "TODO: Add author title/credentials",
    category: "Mold & Moisture",
    excerpt:
      "Musty smell, visible growth, or a recent flood — do you need duct cleaning or mold remediation? Florida has specific laws about this, and the answer matters.",
    content: `## Duct cleaning vs. mold remediation — which one do you actually need?

The call usually comes after one of three things: a persistent musty smell when the AC runs, visible dark discoloration around registers, or a flooding event near the HVAC system. The homeowner knows something needs to be done but isn't sure what, and the contractor market in Jacksonville is full of companies that are eager to sell the answer that benefits them most.

Here's a clear-eyed look at what duct cleaning is, what mold remediation is, how Florida law draws the line between them, and how to figure out which one you actually need.

### What duct cleaning does

Duct cleaning — specifically NADCA-standard source removal cleaning — removes accumulated debris from the interior surfaces of your duct system. That debris includes dust, pollen, pet dander, biological material (mold spores, bacteria, organic particles), and whatever else has been circulating through your system and depositing on duct walls over months and years.

The process places the duct system under negative pressure using HEPA-filtered collection equipment, then uses agitation tools to dislodge debris from duct surfaces and direct it toward the collection unit. At the end, the duct surfaces are clean.

What duct cleaning does NOT do:
- It doesn't fix a moisture problem that's causing biological growth
- It doesn't remove mold from structural materials (drywall, framing, insulation)
- It doesn't address mold growth in wall cavities or behind the air handler
- It doesn't replace a mold assessor's inspection and report

If biological growth is present on duct surfaces — which can happen in Jacksonville homes due to the sustained high humidity and long HVAC operating season — duct cleaning removes it from those surfaces. Combined with antimicrobial sanitization treatment, this addresses the contamination on the duct surfaces themselves.

### What mold remediation is (and isn't)

Mold remediation is a specific, licensed process in Florida. Under [Chapter 468, Part XVI, Florida Statutes](https://www.myfloridalicense.com), mold remediation involves the physical removal of mold contamination from building materials — drywall, framing, insulation, concrete block — in quantities above a certain threshold. It's a construction activity that involves containment, protective equipment, controlled demolition, and disposal of contaminated materials.

Mold remediation in Florida requires a licensed mold remediator (MRSR licence from the Florida Department of Business and Professional Regulation). It is not something a duct cleaning company can legally perform unless they also hold the appropriate DBPR mold licence.

Florida also has a specific rule that prevents the same company from performing both mold assessment and mold remediation on the same project. The intent of this separation is to prevent a conflict of interest where the assessing company inflates the scope to generate remediation work for themselves. If a company offers to both assess and remediate your mold problem, that's a violation of Florida law.

### The overlap: when you might need both

The confusing cases are the ones where mold growth is present both on duct surfaces and on structural materials near the HVAC system.

A home that's had water intrusion near the air handler — from a condensate overflow, a plumbing leak, or storm flooding — might have biological growth in the duct system AND on the drywall or framing behind the air handler. In that case:

1. A Florida-licensed mold assessor performs an inspection and produces a written report that defines the scope of contamination
2. The remediation company (licensed mold remediator) addresses the structural contamination per the assessor's specification
3. The duct cleaning company cleans the duct system after the structural remediation is complete, so contaminated material doesn't re-deposit in freshly cleaned ducts

The order matters. Cleaning ducts before structural remediation is complete means the remediation work will introduce additional contamination into the duct system. Doing it in the right sequence avoids that.

### What's driving that musty smell?

The musty smell that Jacksonville homeowners notice when the AC starts is one of the most common calls we get. Here's what actually causes it and what each cause requires:

**Accumulated organic debris in duct runs.** Over years of operation, organic material — pollen, pet dander, biological particles, and fine dust — deposits in return ducts and on duct wall surfaces. When the system starts and air moves through those deposits, it carries organic odors into the living space. This is addressed by duct cleaning.

**Standing water or algae in the condensate drain pan.** The drain pan under the evaporator coil is designed to collect condensate and drain it away. When the drain becomes partially blocked, standing water accumulates and algae or bacteria grow in it. The evaporator fan blows across this standing water and carries the odor into the supply airstream. This requires drain cleaning and possibly a drain treatment to inhibit future algae growth — not duct cleaning.

**Biological growth on the evaporator coil face.** The evaporator coil runs wet, and organic material in the airstream deposits on the wet coil surface. Over time, biological growth can colonize the coil face. This is in the airstream and contributes directly to odors in conditioned air. HVAC cleaning that includes the coil area addresses this.

**Active mold growth on structural materials near the HVAC.** If mold has colonized drywall, insulation, or framing near the air handler, odors from that growth are drawn into the system. Cleaning ducts doesn't address this source — licensed mold remediation does.

### The honest conversation about mold and health

Florida has been the site of some of the most egregious mold scare-selling in the country. After Hurricane Irma, after the 2004–2005 hurricane season, after every major flooding event, companies with no specific expertise (and sometimes no licensing) have used mold as a mechanism to sell unnecessary work to frightened homeowners.

The [EPA's mold guidance](https://www.epa.gov/mold) is worth reading directly. The key points: mold is everywhere in small quantities; it becomes a concern when it grows in quantity indoors; the primary intervention is moisture control; and the health impact varies significantly by individual, with the greatest concern for people with mold allergies, asthma, or compromised immune systems.

The [Florida Department of Health's indoor air resources](https://www.floridahealth.gov) are consistent with this: address the moisture source, then address the contamination.

What mold doesn't do, in most cases for most people, is cause the dramatic health effects that some contractors describe. A licensed mold assessor's report based on an actual inspection and air quality testing is the appropriate way to characterize the scope of a mold problem — not a contractor's description based on what they've seen from a flashlight.

### How to tell which service you need

If you're dealing with a musty smell, visible growth at registers, or a recent water event, here's a practical framework:

**Start with a visual inspection and duct cleaning assessment** if:
- You have musty odors when the AC runs but no visible growth at registers
- You know the ducts haven't been cleaned in several years
- The home is clean and dry with no known water history

**Request a mold assessor's inspection first** if:
- You have visible dark growth on walls or ceilings near the HVAC system
- You've had water intrusion near the air handler
- A previous duct cleaning didn't resolve persistent odors
- You or family members have unexplained respiratory symptoms that correlate with time at home

**Don't call the same company for both assessment and remediation** — that's what Florida law is specifically designed to prevent.

When AL Air Duct Cleaning Jacksonville performs an inspection that finds conditions suggesting remediation scope beyond duct cleaning, we tell you what we observed and refer you to licensed Florida mold professionals. That's the appropriate response. Any company that offers to both assess and remediate is describing a Florida law violation.`,
  },

  // STUBS — titles, slugs, meta, and outlines only
  {
    slug: "buying-riverside-avondale-home-ductwork",
    title: "Buying a Riverside or Avondale home? What to check in the ductwork first",
    metaTitle: "Buying a Riverside or Avondale home — ductwork inspection checklist",
    metaDesc:
      "Historic Jacksonville homes in Riverside and Avondale have retrofit duct systems with specific issues buyers should check before closing. A practical guide.",
    datePublished: "2026-04-01",
    dateModified: "2026-08-01",
    authorName: "TODO: Add real author name",
    authorTitle: "TODO: Add author title/credentials",
    category: "Home Buying",
    excerpt:
      "Riverside and Avondale's historic homes were built without central air. The retrofit duct systems added decades later have specific issues worth checking before you close.",
    outline: [
      "Why historic home ductwork is different from new construction",
      "The retrofit HVAC problem: what was done in the 1970s and 1980s",
      "Specific things to inspect: return sizing, crawl-space runs, flex duct connections",
      "What to ask the home inspector about the duct system",
      "Move-in cleaning vs. wait-and-see: making the call",
      "What duct conditions mean for your first-year budget",
    ],
  },
  {
    slug: "jacksonville-house-smells-musty-ac",
    title: "Why your Jacksonville house smells musty every time the AC kicks on",
    metaTitle: "Why your Jacksonville home smells musty when the AC runs",
    metaDesc:
      "Musty smell when the AC starts is one of the most common complaints in Jacksonville. Here are the four most likely causes and what each one requires.",
    datePublished: "2026-04-15",
    dateModified: "2026-08-01",
    authorName: "TODO: Add real author name",
    authorTitle: "TODO: Add author title/credentials",
    category: "Troubleshooting",
    excerpt:
      "The musty smell when your AC starts has specific causes — and only some of them require duct cleaning. Here's how to tell which one you're dealing with.",
    outline: [
      "Cause 1: Accumulated organic debris in return ducts (duct cleaning addresses this)",
      "Cause 2: Algae or standing water in the condensate drain pan (drain cleaning/treatment)",
      "Cause 3: Biological growth on the evaporator coil (HVAC cleaning)",
      "Cause 4: Mold on structural materials near the air handler (licensed remediation)",
      "How to diagnose which situation you have",
      "What Jacksonville's climate does to these problems",
    ],
  },
  {
    slug: "nas-jax-mayport-move-in-checklist",
    title: "Moving to NAS Jax or Mayport: the move-in checklist nobody gives you",
    metaTitle: "NAS Jacksonville and Mayport PCS move-in HVAC checklist",
    metaDesc:
      "Moving to NAS Jacksonville or Naval Station Mayport? This is the home maintenance checklist most relocation coordinators don't cover — including duct cleaning.",
    datePublished: "2026-05-01",
    dateModified: "2026-08-01",
    authorName: "TODO: Add real author name",
    authorTitle: "TODO: Add author title/credentials",
    category: "Military Moves",
    excerpt:
      "PCS to NAS Jacksonville or Mayport means moving into a home with unknown maintenance history. This is the HVAC and air quality checklist that relocation packets leave out.",
    outline: [
      "The unknown history problem: what's in the ducts of your new assignment home",
      "Why Jacksonville's climate makes this more important than most markets",
      "Scheduling a move-in cleaning around a PCS timeline",
      "What to document before and after for BAH and maintenance records",
      "Other HVAC items to check at move-in",
      "Resources: NAS Jax housing office, local HVAC contractors, scheduling tips",
    ],
  },
  {
    slug: "ductwork-water-intrusion-storm",
    title: "After the storm — checking your ductwork for water intrusion",
    metaTitle: "Post-storm ductwork inspection in Jacksonville — what to check",
    metaDesc:
      "Northeast Florida storms can put water into duct systems in ways homeowners don't always recognize. Here's what to check after a major weather event.",
    datePublished: "2026-06-01",
    dateModified: "2026-08-01",
    authorName: "TODO: Add real author name",
    authorTitle: "TODO: Add author title/credentials",
    category: "Storm Damage",
    excerpt:
      "Water in your duct system after a storm creates contamination that develops quickly in Jacksonville's climate. Here's what to check and when to call.",
    outline: [
      "How water gets into ductwork: crawl-space flooding, condensate overflow, storm damage",
      "What happens to ductwork that's had standing water: timeline of contamination",
      "Signs that your duct system has had water exposure",
      "Post-storm inspection: what to look for yourself vs. what requires a technician",
      "Cleaning vs. replacement: when water damage is too extensive to clean",
      "Insurance considerations for storm-related duct damage in Florida",
    ],
  },
  {
    slug: "how-often-clean-ducts-northeast-florida",
    title: "How often should Northeast Florida homeowners clean their air ducts?",
    metaTitle: "Air duct cleaning frequency for Jacksonville and Northeast Florida",
    metaDesc:
      "How often should you clean air ducts in Jacksonville, FL? The EPA's guidance, Northeast Florida's specific conditions, and a practical decision framework.",
    datePublished: "2026-06-15",
    dateModified: "2026-08-01",
    authorName: "TODO: Add real author name",
    authorTitle: "TODO: Add author title/credentials",
    category: "Maintenance",
    excerpt:
      "The EPA doesn't set a mandatory cleaning schedule — cleaning should be based on observable conditions. Here's how to apply that to Northeast Florida's specific climate.",
    outline: [
      "What the EPA actually says about cleaning frequency (not what contractors say)",
      "Why Northeast Florida's conditions accelerate accumulation",
      "The 3–5 year baseline and what shortens it",
      "Coastal homes: why Jacksonville Beach and Ponte Vedra homeowners clean more often",
      "Historic homes vs. new builds: different accumulation profiles",
      "The practical decision framework: condition-based vs. calendar-based cleaning",
    ],
  },
  {
    slug: "duct-cleaning-jea-bill",
    title: "Does duct cleaning lower your JEA bill? The honest answer",
    metaTitle: "Does air duct cleaning lower your energy bill in Jacksonville?",
    metaDesc:
      "Claims about duct cleaning reducing energy bills range from plausible to exaggerated. Here's what the evidence supports for Jacksonville homeowners on JEA.",
    datePublished: "2026-07-01",
    dateModified: "2026-08-01",
    authorName: "TODO: Add real author name",
    authorTitle: "TODO: Add author title/credentials",
    category: "Energy Efficiency",
    excerpt:
      "Some contractors claim duct cleaning can cut your energy bills by 20–40%. The honest answer is more specific — and depends on what was wrong with the system to begin with.",
    outline: [
      "What actually affects HVAC energy consumption",
      "Where contamination creates inefficiency: blower, coil, and duct surfaces",
      "What cleaning can restore vs. what it can't address",
      "The honest evidence: what studies show about cleaning and efficiency",
      "JEA rates and what a 10% efficiency improvement actually means in dollars",
      "When cleaning is worth it for efficiency reasons vs. air quality reasons",
    ],
  },
  {
    slug: "indoor-humidity-60-percent-jacksonville",
    title: "Indoor humidity above 60%: the number that matters more than dust",
    metaTitle: "Indoor humidity above 60% in Jacksonville — what it means and what to do",
    metaDesc:
      "Indoor humidity above 60% is the threshold where biological growth becomes a concern. In Jacksonville, this is a real and common problem — here's how to address it.",
    datePublished: "2026-07-15",
    dateModified: "2026-08-01",
    authorName: "TODO: Add real author name",
    authorTitle: "TODO: Add author title/credentials",
    category: "Indoor Air Quality",
    excerpt:
      "If your indoor humidity stays above 60% despite running the AC, that number matters more than dust or pollen for your long-term indoor air quality.",
    outline: [
      "Why 60% relative humidity is the threshold that matters",
      "Jacksonville's climate and why indoor humidity is a persistent problem",
      "What sustained high humidity does inside a duct system",
      "Why an AC that's cooling properly might not be dehumidifying properly",
      "Dehumidification solutions: variable-speed systems, standalone dehumidifiers, duct sealing",
      "When duct cleaning is the right next step vs. when dehumidification is more important",
    ],
  },
];
