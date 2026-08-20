export interface AreaData {
  slug: string;
  name: string;
  county: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  intro: string; // 40-55 word snippet target
  body: string; // 500+ unique words
  housingNote: string;
  localHook: string;
  nearbyAreas: string[];
}

export const AREA_CONTENT: AreaData[] = [
  {
    slug: "riverside",
    name: "Riverside",
    county: "Duval",
    metaTitle: "Air duct cleaning in Riverside Jacksonville, FL | AL Air Duct",
    metaDesc:
      "Professional air duct cleaning in Riverside, Jacksonville, FL. Specialists in historic Craftsman and bungalow homes with retrofit duct systems. Free estimates, 24/7 availability.",
    h1: "Air duct cleaning in Riverside, Jacksonville",
    intro:
      "AL Air Duct Cleaning provides air duct and HVAC cleaning in Riverside, Jacksonville — specializing in the neighborhood's early-twentieth-century housing stock where central air was retrofitted decades after original construction. We serve the full four-county Northeast Florida area with same-day availability.",
    body: `Riverside is one of Jacksonville's most architecturally significant neighborhoods, and that history creates specific challenges when it comes to air duct systems. The housing stock here — Craftsmans, bungalows, and Tudor revivals built primarily between 1910 and 1940 — was designed without mechanical cooling. Central air came decades later, retrofitted by contractors who worked with the space they had, which often meant undersized return runs, flex duct snaking through crawl spaces, and configurations that would raise eyebrows in a modern HVAC manual.

The result is a neighborhood full of duct systems that have unusual characteristics — narrow returns that can't move adequate volume, duct runs that pass through unconditioned crawl spaces where they accumulate moisture and off-gassing from the soil, and systems that were often installed in the 1970s and 1980s and have never been professionally cleaned in the decades since.

What does this mean practically? It means that a Riverside home's air duct system has probably been accumulating contamination for thirty to fifty years. Dust, pollen, pet dander, biological residue from whatever lived in the crawl space — it's all there, being recirculated by a system that runs for nine or ten months a year in this climate.

**The pollen factor in Riverside**

Riverside sits within the urban tree canopy that makes Jacksonville one of the greener cities in Florida. The neighborhood's oak canopy is beloved. It's also a pollen source. In late winter and early spring, fine pollen from the surrounding trees — including the pine populations farther north in Duval County — gets pulled into HVAC systems throughout the neighborhood. Riverside's older homes, many of which have air handler units with aging filter housings that don't seal properly, let more of that pollen past the filter and into the duct runs.

**Historic home, modern air quality**

Homeowners in Riverside who renovate need to pay particular attention to the duct system. Renovation disturbs decades of accumulated debris inside walls and floor cavities. That material enters the duct system during construction. We see this repeatedly in Riverside — a beautiful renovation that's two weeks from completion, and the homeowner realizes they need to have the ducts cleaned before anyone moves in.

**Move-in cleaning and documentation**

Riverside has a healthy resale market, with homes regularly changing hands between buyers who want to preserve the neighborhood's architectural character. If you're buying a Riverside home — particularly one that's been a rental, or one whose maintenance history is unclear — a move-in duct cleaning gives you a documented baseline for what you're working with. We photograph conditions before and after every job.

**What to expect from a Riverside duct cleaning job**

Our technicians are familiar with the particular challenges of Riverside's housing stock. Crawl-space access, older duct materials, non-standard register locations — we've seen them all in this neighborhood. We'll inspect the full accessible system before any work begins, document what we find, and discuss with you what we recommend before we start. Jobs in historic homes typically take three to five hours depending on home size and system complexity.`,
    housingNote: "1910s–1940s Craftsmans and bungalows with retrofit duct systems, crawl-space runs, and often-undersized return configurations.",
    localHook: "Riverside's oak and pine canopy contributes to Jacksonville's spring pollen load, and the neighborhood's older homes have air handler filter housings that age poorly and let more pollen through.",
    nearbyAreas: ["avondale", "murray-hill", "ortega", "san-marco"],
  },
  {
    slug: "avondale",
    name: "Avondale",
    county: "Duval",
    metaTitle: "Air duct cleaning in Avondale Jacksonville, FL | AL Air Duct",
    metaDesc:
      "Air duct cleaning in Avondale, Jacksonville, FL. Historic homes with retrofit HVAC systems. NADCA-standard methods. Free estimates.",
    h1: "Air duct cleaning in Avondale, Jacksonville",
    intro:
      "AL Air Duct Cleaning provides air duct and HVAC cleaning in Avondale, Jacksonville. Like its neighbor Riverside, Avondale's early twentieth-century housing stock features retrofit duct systems with specific characteristics that require experienced technicians. We serve all of Northeast Florida, available 24/7.",
    body: `Avondale shares much of its architectural heritage with Riverside — the homes are primarily from the 1910s through the 1940s, and central air arrived in most of them decades after the original construction. But Avondale has its own character. The streets feel a bit quieter, the lots run a bit larger, and the mix of housing types includes more two-story homes than Riverside, which creates a different set of duct cleaning challenges.

Two-story homes in Avondale often have their air handler units in second-floor closets or attic spaces — common configurations for retrofit installations that needed to keep equipment away from living areas. This means the main duct trunks may run through the first-floor ceiling, and the returns may be positioned in places that weren't originally designed for them. Non-standard configurations like this accumulate contamination in ways that standard homes don't.

**The crawl-space situation in Avondale**

Avondale homes with crawl-space foundations have duct runs that pass through unconditioned, damp spaces. In Jacksonville's climate, crawl spaces are humid environments where duct insulation degrades, moisture condenses on duct surfaces, and the conditions for biological growth are present much of the year. Ducts that run through crawl spaces in Avondale accumulate a different contamination profile than attic runs — more moisture-related debris, more potential for biological growth, more need for sanitization after cleaning.

**Renovation and duct cleaning timing**

Avondale has been a renovation hotspot for Jacksonville buyers who want character and proximity to the St. Johns River. The renovation activity creates an obvious need for post-construction duct cleaning — drywall dust, insulation particles, and construction debris settle into duct systems and get recirculated. We recommend scheduling duct cleaning immediately before move-in, not before construction is complete.

**Avondale's service scheduling**

We schedule in Avondale at the same pace as anywhere in the service area — typically within 24 to 72 hours for standard residential jobs. Same-day service is available for urgent situations. Early morning and evening appointments accommodate homeowners who can't take time from work for a mid-day cleaning.`,
    housingNote: "1910s–1940s homes similar to Riverside, with a higher proportion of two-story builds and air handlers in attic or second-floor closet locations.",
    localHook: "Two-story Avondale homes frequently have air handlers in non-standard locations from retrofit installations, creating duct configurations that require more careful inspection.",
    nearbyAreas: ["riverside", "murray-hill", "ortega", "springfield"],
  },
  {
    slug: "nocatee",
    name: "Nocatee",
    county: "St. Johns",
    metaTitle: "Air duct cleaning in Nocatee Jacksonville / St. Johns, FL | AL Air Duct",
    metaDesc:
      "Air duct cleaning in Nocatee, St. Johns County, FL. New build duct cleaning, post-construction dust removal. Free estimates, same-day available.",
    h1: "Air duct cleaning in Nocatee, FL",
    intro:
      "AL Air Duct Cleaning provides air duct cleaning in Nocatee, one of Florida's fastest-growing planned communities in St. Johns County. New builds in Nocatee need post-construction duct cleaning before move-in — construction dust that settles in new ductwork recirculates for months without it. We serve all of St. Johns County and the broader Northeast Florida area.",
    body: `Nocatee is a different kind of community to clean than Riverside or Avondale. The homes here are new — most built in the last decade — and the duct systems are factory-installed rather than retrofitted. But new builds have their own contamination issue: post-construction dust.

When a home is built, drywall is cut and sanded, insulation is blown in, wood is cut on site, and HVAC systems run during final construction phases to control humidity during finishing. All of this material enters the duct system. By the time a buyer walks in for the first time, the ductwork is lined with a fine layer of construction debris — gypsum dust, wood particles, insulation fibers, and whatever else was airborne during the build.

This debris doesn't go anywhere on its own. The day the homeowner turns on the AC for the first time, it starts recirculating that construction dust through the living space. Families who move into new Nocatee builds and immediately notice a dusty or slightly off smell in the air despite brand-new construction are experiencing exactly this.

**Why Nocatee buyers specifically need move-in cleaning**

Nocatee attracts buyers from outside Jacksonville — families relocating from other states, buyers leaving older Jacksonville neighborhoods, retirees who've sold elsewhere and bought new. Many of these buyers have never owned a newly constructed home and don't know that post-construction duct cleaning is a consideration. The builder's warranty doesn't cover duct contamination from construction, and the HVAC warranty requires the filter to be maintained — but neither addresses what's already inside the duct runs.

A Nocatee move-in duct cleaning takes two to three hours for a typical build and gives the homeowner a documented, clean starting point. It's the most practical thing a new Nocatee homeowner can do for indoor air quality before settling in.

**Military families moving to Nocatee**

Nocatee's location in St. Johns County puts it roughly thirty minutes from both NAS Jacksonville and Naval Station Mayport. Military families coming to the Jacksonville area for assignments have been a significant part of Nocatee's buyer pool. PCS buyers in Nocatee are often purchasing new builds remotely — they haven't seen the home before it's done, and they're moving in on a fixed date. A scheduled move-in cleaning fits naturally into this process.

**St. Johns County growth and service coverage**

St. Johns County is among Florida's fastest-growing counties, and Nocatee is its largest planned community. We serve the full St. Johns County portion of our service area — Nocatee, Fruit Cove, Julington Creek, Ponte Vedra Beach, and St. Augustine — without a travel surcharge. The drive time from core Jacksonville is real but it doesn't add to your estimate.`,
    housingNote: "Primarily new builds (2010–present) with factory-installed duct systems and post-construction dust contamination as the dominant issue.",
    localHook: "Nocatee's buyer pool includes a significant military PCS component from NAS Jax and Mayport — move-in cleaning on fixed timelines is a specific, high-demand service here.",
    nearbyAreas: ["ponte-vedra-beach", "julington-creek", "fruit-cove", "bartram-park"],
  },
  {
    slug: "mandarin",
    name: "Mandarin",
    county: "Duval",
    metaTitle: "Air duct cleaning in Mandarin Jacksonville, FL | AL Air Duct",
    metaDesc:
      "Air duct cleaning in Mandarin, Jacksonville, FL. Serving 1970s–1990s suburban homes, newer builds. Free estimates, 24/7 service.",
    h1: "Air duct cleaning in Mandarin, Jacksonville",
    intro:
      "AL Air Duct Cleaning provides air duct and HVAC cleaning in Mandarin, Jacksonville. Mandarin's mix of 1970s–1990s ranch-style homes and newer construction presents different duct cleaning needs by housing era. We cover all of Duval County from Mandarin to Fernandina Beach, available 24/7.",
    body: `Mandarin is one of Jacksonville's larger residential communities, and its housing stock spans several decades. The older homes — built in the 1970s and 1980s during Mandarin's initial suburban expansion — have original or early-replacement duct systems that are now forty or fifty years old in some cases. The newer builds from the 1990s through 2010s have systems that are more current but have been operating continuously in a demanding climate for fifteen to thirty years without necessarily having been professionally cleaned.

**The 1970s and 1980s Mandarin home**

Homes built in Mandarin in the 1970s and 1980s typically have fiberglass duct wrapped in foil-faced insulation — a technology that was standard at the time and has aged to varying degrees depending on how well the system has been maintained. In many of these homes, the insulation around duct runs has degraded over the decades, which affects both energy efficiency and the system's ability to prevent condensation inside the duct. Condensation inside duct runs creates conditions for biological growth that routine cleaning alone won't resolve long-term.

We see in Mandarin homes what we see throughout Jacksonville's suburban neighborhoods from this era: duct systems that have never been professionally cleaned, with filter maintenance histories that were inconsistent at best, and insulation conditions that need attention alongside any cleaning.

**Proximity to the St. Johns River**

Mandarin's western edge along the St. Johns River puts parts of the community in a flood-zone context. Homes near the river that have experienced flooding — and Northeast Florida has seen significant storm-related flooding events in recent years — may have had water near or in duct systems. Water intrusion in ductwork is a different situation from routine contamination, and it warrants both cleaning and an inspection of surrounding conditions.

**Scheduling in Mandarin**

Mandarin is one of the Jacksonville areas where some companies quote a travel surcharge or extended scheduling times. We don't apply a surcharge anywhere in our four-county service area, and Mandarin is fully within our standard scheduling window.`,
    housingNote: "Mix of 1970s–1980s fiberglass-duct homes and 1990s–2010s builds, with some flood-zone properties near the St. Johns River.",
    localHook: "Mandarin's western edge along the St. Johns River includes flood-zone properties where water intrusion into duct systems is a realistic concern after major storm events.",
    nearbyAreas: ["bartram-park", "baymeadows", "southside", "san-marco"],
  },
  {
    slug: "jacksonville-beach",
    name: "Jacksonville Beach",
    county: "Duval Beaches",
    metaTitle: "Air duct cleaning in Jacksonville Beach, FL | AL Air Duct",
    metaDesc:
      "Air duct cleaning in Jacksonville Beach, FL. Specialists in coastal homes with salt-air HVAC exposure. Free estimates, 24/7 availability.",
    h1: "Air duct cleaning in Jacksonville Beach, FL",
    intro:
      "AL Air Duct Cleaning provides air duct and HVAC cleaning in Jacksonville Beach. Coastal homes here face salt-air loading, accelerated corrosion on HVAC components, and higher-than-average humidity. These conditions affect how often ducts need cleaning and what the cleaning process finds. We serve all of the Jacksonville Beaches area and four Northeast Florida counties.",
    body: `Jacksonville Beach is three miles east of the Intracoastal Waterway and directly on the Atlantic, and that position has consequences for HVAC systems that inland homeowners simply don't deal with. Salt air — the combination of airborne sea spray, elevated chloride levels, and humidity — accelerates corrosion on HVAC components, particularly on the outdoor condenser coil, electrical connections, and any exposed metal in the air distribution system.

Inside the duct system, salt loading from the conditioned outdoor air drawn through the system creates a surface chemistry that differs from inland homes. Salt deposits on duct surfaces are more hygroscopic — they attract and hold moisture from the air — which creates microclimates inside the duct that are more favorable to biological growth than the same duct surfaces would be five miles inland.

**What this means practically for Jacksonville Beach homeowners**

Coastal homes should inspect and clean duct systems more frequently than the three-to-five-year inland standard suggests. The conditions here accelerate contamination. A home two blocks from the ocean where the windows are opened regularly has air flowing through the system that carries a different load than the same home in Mandarin or Baymeadows.

HVAC systems in Jacksonville Beach homes also tend to have shorter lifespans than comparable inland systems — not because of design differences, but because of the operating environment. Keeping the ductwork and air handler components clean reduces the load on the system and extends its useful life in a demanding environment.

**Summer rental properties and turnover cleaning**

Jacksonville Beach has a substantial vacation rental market. Homes that cycle through multiple occupancies during summer — often with different air quality habits, higher occupant loads, and windows open more frequently — accumulate contamination faster than owner-occupied homes. If you manage a rental property in Jacksonville Beach, scheduling cleaning at the end of the rental season rather than waiting for an owner complaint is a reasonable maintenance practice.

**Atlantic Beach and Neptune Beach**

The same conditions apply to Atlantic Beach and Neptune Beach, Jacksonville Beach's immediate neighbors. All three communities are within our standard service area and receive the same scheduling priority as any Duval County job.`,
    housingNote: "Coastal homes with salt-air HVAC exposure, above-average corrosion risk, and conditions that accelerate contamination buildup compared to inland markets.",
    localHook: "The salt-air environment in Jacksonville Beach accelerates HVAC corrosion and creates interior duct conditions more favorable to biological growth — shorter cleaning intervals are appropriate here.",
    nearbyAreas: ["atlantic-beach", "neptune-beach", "ponte-vedra-beach", "southside"],
  },
  {
    slug: "orange-park",
    name: "Orange Park",
    county: "Clay",
    metaTitle: "Air duct cleaning in Orange Park, FL | AL Air Duct",
    metaDesc:
      "Air duct cleaning in Orange Park, FL (Clay County). Serving 1970s–1990s homes, Fleming Island, Oakleaf. Free estimates, 24/7.",
    h1: "Air duct cleaning in Orange Park, FL",
    intro:
      "AL Air Duct Cleaning provides air duct and HVAC cleaning in Orange Park and throughout Clay County, including Fleming Island, Middleburg and Oakleaf Plantation. Orange Park's housing stock spans several decades, from 1970s ranch-style originals to newer suburban builds. We serve all of Clay County within our standard scheduling and pricing, no travel surcharge.",
    body: `Orange Park sits just west of Jacksonville across the Duval-Clay County line, and the neighborhood character reflects its suburban development history. The older sections — primarily along US-17 and Blanding Boulevard — have ranch-style homes from the 1960s and 1970s with original or early-replacement duct systems. The newer sections, particularly the communities closer to Fleming Island and extending toward Oakleaf Plantation, have builds from the 1990s through the 2010s with more current but still aging systems.

**The 1970s Orange Park home**

A 1970s home in Orange Park has a duct system that is, at minimum, fifty years old. Duct materials from that era — fiberglass duct board in some cases, flex duct in others — age in ways that affect both air quality and system performance. The insulation degrades, connections loosen, and the internal surfaces of older duct board can become friable over decades, meaning the duct material itself can become a source of airborne particles.

We see in Orange Park homes what we see throughout Jacksonville's comparable suburban markets from this era: systems that have been functional but never professionally cleaned, with filter changes done inconsistently, and conditions inside the duct system that reflect fifty years of continuous operation without maintenance.

**Fleming Island and Oakleaf Plantation**

The newer communities in the Clay County corridor — Fleming Island, Middleburg, and Oakleaf Plantation — have a different profile. These are predominantly 1990s–2010s builds with more current duct installations, but they've been operating for fifteen to thirty years in Florida's climate. Systems installed in 1995 are now thirty years old. Systems installed during the 2000s construction boom are in their middle age and due for their first professional cleaning in many cases.

**Scheduling in Clay County**

Clay County is fully within our standard service area. We quote the same pricing structure as Duval County jobs and schedule within the same 24-to-72-hour window. Some Jacksonville duct cleaning companies treat Clay County as out-of-area and add a travel surcharge or decline the job entirely. We don't do either.`,
    housingNote: "Wide range from 1960s–1970s originals near Blanding Blvd to 1990s–2010s builds in Fleming Island and Oakleaf — each requires different inspection approach.",
    localHook: "Clay County is often treated as 'out of area' by Jacksonville duct cleaning companies. We cover it within standard pricing and scheduling — no surcharges.",
    nearbyAreas: ["fleming-island", "oakleaf-plantation", "middleburg", "riverside"],
  },
  {
    slug: "san-marco",
    name: "San Marco",
    county: "Duval",
    metaTitle: "Air duct cleaning in San Marco Jacksonville, FL | AL Air Duct",
    metaDesc:
      "Air duct cleaning in San Marco, Jacksonville. Historic homes, 1920s–1950s housing, and mid-century builds. Specialists in retrofit duct systems. Free estimates.",
    h1: "Air duct cleaning in San Marco, Jacksonville",
    intro:
      "AL Air Duct Cleaning provides air duct and HVAC cleaning in San Marco, Jacksonville. San Marco's mix of 1920s–1950s homes near the St. Johns River and mid-century residential blocks on the neighborhood's edges presents varied duct configurations that require experienced inspection. We serve all of Duval County with 24/7 availability.",
    body: `San Marco sits between the St. Johns River and I-95, and its housing stock reflects its development as one of Jacksonville's first planned suburban neighborhoods in the 1920s. The historic core along San Marco Boulevard and in the surrounding residential streets has brick colonials, Spanish-revival homes, and Craftsmans from the 1920s through the 1940s — all built without central air, all with retrofit duct systems added decades later.

The farther you get from the historic core, the more the housing transitions to mid-century and later builds — 1950s and 1960s ranch homes that had central air installed closer to original construction, and some more recent infill development. San Marco's duct cleaning market is, in this sense, a neighborhood in two or three acts depending on where you are in it.

**The St. Johns River factor**

San Marco's riverside properties sit at or near sea level and have experienced flooding during significant storm events. The St. Johns River is tidal for most of its Jacksonville length, and storm surge from a tropical system can send water into low-lying residential areas on either bank. Homes that have experienced flooding near their HVAC air handlers — particularly homes with slab foundations where the air handler sits on the floor rather than on a raised platform — have almost certainly had water near or in their duct system at some point.

Post-flood duct cleaning and inspection is different from routine maintenance. It's not just about removing accumulated dust — it's about assessing what the water contacted, what dried in place, and whether conditions for biological growth developed in areas that can't be reached without specific equipment.

**San Marco as a rental and investment market**

San Marco has historically been a strong rental neighborhood for Jacksonville professionals working downtown or in Riverside. Rental properties cycle through tenants, and tenant turnover often means the duct system accumulates contamination from multiple occupants with different habits and different pets. Property managers handling San Marco rentals find move-out or turnover cleaning valuable for both air quality and for identifying maintenance issues before the next tenant moves in.`,
    housingNote: "Historic core with 1920s–1940s homes featuring retrofit ducts; mid-century ranch homes toward the edges; some riverside flood-zone properties.",
    localHook: "San Marco's riverside properties sit in a flood-zone context — post-storm duct inspection and cleaning is a recurring need here after major events.",
    nearbyAreas: ["riverside", "mandarin", "southside", "arlington"],
  },
  {
    slug: "fernandina-beach",
    name: "Fernandina Beach",
    county: "Nassau",
    metaTitle: "Air duct cleaning in Fernandina Beach / Amelia Island, FL | AL Air Duct",
    metaDesc:
      "Air duct cleaning in Fernandina Beach and Amelia Island, Nassau County, FL. Coastal homes with salt-air HVAC exposure. Free estimates, same-day available.",
    h1: "Air duct cleaning in Fernandina Beach, FL",
    intro:
      "AL Air Duct Cleaning provides air duct and HVAC cleaning in Fernandina Beach and Amelia Island. Fernandina's coastal position creates salt-air conditions that accelerate HVAC corrosion and affect interior duct surfaces differently than inland markets. We serve all of Nassau County with the same scheduling and pricing as Duval County jobs.",
    body: `Fernandina Beach is the northern anchor of the AL Air Duct Cleaning Jacksonville service area, approximately 35 miles north of downtown Jacksonville on Amelia Island. It's also one of the more demanding environments in our service area for HVAC systems — the combination of ocean proximity, high humidity, and the historic housing stock in the city's centre creates conditions that most duct cleaning companies in the Jacksonville market either don't encounter or aren't prepared for.

**Amelia Island's coastal conditions**

Amelia Island sits directly on the Atlantic Ocean. The air in Fernandina Beach carries measurable salt content year-round — more on days when the wind blows from the ocean, less on days when it comes from the interior. HVAC systems that draw outdoor air for ventilation, or that operate with unsealed duct connections that allow infiltration, deposit salt aerosols on interior duct surfaces over time. Salt loading on duct surfaces increases hygroscopicity and creates conditions for microbial growth that don't develop in the same way on inland systems.

The salt also accelerates corrosion on outdoor condenser coils and HVAC electrical components. Systems in Fernandina Beach homes near the beach have shorter operational lifespans than comparable inland systems, and that lifespan pressure extends to the ducts when duct insulation deteriorates prematurely in a salt-air environment.

**Historic downtown Fernandina**

The historic district in Fernandina Beach has Victorian-era homes — a rarity in Florida — that were built in the late 1800s and early 1900s. These homes, where central air was retrofitted in the late twentieth century, have duct configurations that bear some similarity to Jacksonville's Riverside and Avondale stock: unusual geometries, non-standard returns, and systems nobody has inspected in decades.

**Nassau County is not out of area**

We hear from Nassau County homeowners that they've called Jacksonville duct cleaning companies and been told the area is out of their service zone. Nassau County is fully within our service area. We don't apply a travel surcharge for Fernandina Beach, Yulee, or Amelia Island jobs. Schedule times are within the same 24-to-72-hour window as Duval County.`,
    housingNote: "Mix of Victorian-era historic downtown homes and coastal builds. Salt-air HVAC conditions throughout the island, with accelerated corrosion and contamination.",
    localHook: "Nassau County is regularly excluded by Jacksonville-based companies who consider it 'too far.' We cover it within standard pricing — Fernandina Beach to Yulee.",
    nearbyAreas: ["yulee", "amelia-island", "jacksonville-beach", "atlantic-beach"],
  },
];
