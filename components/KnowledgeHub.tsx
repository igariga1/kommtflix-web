
import React, { useState, useEffect } from 'react';

type Category = 'All' | 'Regulation' | 'Finance' | 'Logistics' | 'Market Trends';

interface Article {
  id: number;
  category: Category;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  readTime: string;
  isPriority?: boolean;
}

const articles: Article[] = [
  {
    id: 1,
    category: 'Regulation',
    isPriority: true,
    title: "Understanding Incoterms 2020: Why CIF is the Golden Standard for Africa Imports",
    excerpt: "Navigating the complexities of international trade requires a precise language that defines responsibilities, costs, and risks.",
    content: `
      <p>Navigating the complexities of international trade requires a precise language that defines responsibilities, costs, and risks. This language is written in Incoterms® 2020 (International Commercial Terms), published by the International Chamber of Commerce (ICC). For businesses importing goods into the African continent, one term stands out as the predominant choice: CIF (Cost, Insurance, and Freight).</p>
      
      <p>While there are 11 different Incoterms, CIF has become the "golden standard" for African maritime trade. Understanding why this term is favored—and how it dictates your landed cost—is essential for any importer looking to maintain healthy margins and operational stability.</p>

      <h3>What is CIF?</h3>
      <p>CIF is used exclusively for sea and inland waterway transport. Under CIF terms, the seller is responsible for:</p>
      <ul>
        <li><strong>Cost:</strong> The price of the goods.</li>
        <li><strong>Insurance:</strong> Obtaining a minimum level of insurance cover for the goods during transit.</li>
        <li><strong>Freight:</strong> Arranging and paying for the transportation to the named port of destination.</li>
      </ul>
      <p>The seller’s delivery is complete when the goods are placed on board the vessel. However, the seller must pay the costs and freight necessary to bring the goods to the named port of destination in Africa (e.g., Port of Mombasa, Lagos-Apapa, or Durban).</p>

      <h3>Why CIF is the Preferred Choice for Africa</h3>
      <p>The preference for CIF in African imports isn't accidental; it is driven by banking requirements, infrastructure challenges, and the need for simplified logistics.</p>

      <h4>1. Banking and Letters of Credit (LCs)</h4>
      <p>Many African central banks and commercial lending institutions require imports to be handled via a Letter of Credit. To secure financing, banks often insist on CIF terms because it ensures that the goods are insured and that the freight costs are prepaid by the exporter. This provides the bank with a "clean" Bill of Lading and a documented insurance policy, reducing the financial risk to the lender.</p>

      <h4>2. Simplified Resource Management for Importers</h4>
      <p>Africa's logistics landscape can be challenging. By choosing CIF, the African importer shifts the burden of negotiating with international shipping lines and insurance providers to the seller. For many small-to-medium enterprises (SMEs) in Africa, this is a significant advantage, as the exporter—often located in major manufacturing hubs like China, Europe, or India—may have better bargaining power and established relationships with global carriers.</p>

      <h4>3. Risk Allocation</h4>
      <p>In CIF, the risk transfers from the seller to the buyer as soon as the goods are on board the vessel at the port of origin. However, because the seller is obligated to provide insurance, the importer is protected against maritime perils. If the cargo is damaged in the middle of the Atlantic, the importer has a ready-made insurance claim to pursue, which is often easier than trying to secure independent marine insurance for a single shipment.</p>

      <h3>How CIF Affects Your Landed cost</h3>
      <p>Landed cost is the total price of a product once it has arrived at your warehouse door. CIF plays a massive role in this calculation because it provides a "pre-calculated" bundle of three major expenses.</p>

      <div class="bg-gray-50 p-6 rounded-2xl my-8 border border-gray-100">
        <p class="font-black text-gray-900 mb-2 uppercase text-xs tracking-widest">The Formula</p>
        <code class="text-red-600 font-bold block">Landed Cost = CIF Value + Import Duties + Taxes (VAT) + Clearing Fees + Inland Haulage</code>
      </div>

      <h4>The Impact:</h4>
      <ul>
        <li><strong>Predictability:</strong> Because the "I" (Insurance) and "F" (Freight) are included in the invoice, the importer knows their primary costs upfront.</li>
        <li><strong>Customs Valuation:</strong> In most African nations, customs authorities calculate Import Duty and VAT based on the CIF value of the goods. If you buy under FOB (Free on Board) terms, customs will still add an estimated freight and insurance value to your purchase price to arrive at a "CIF value" for taxation.</li>
      </ul>

      <p class="mt-12 pt-8 border-t border-gray-100 font-bold text-gray-900">References</p>
      <ul class="text-xs text-gray-500 space-y-1">
        <li>International Chamber of Commerce (ICC). (2020). Incoterms® 2020.</li>
        <li>African Development Bank (AfDB). (2023). Logistics and Trade Facilitation in Africa.</li>
        <li>World Trade Organization (WTO). Technical Information on Customs Valuation.</li>
      </ul>
    `,
    date: "Dec 24, 2025",
    readTime: "8 min read"
  },
  {
    id: 2,
    category: 'Finance',
    title: "Mastering the 0% Export VAT Workflow: A Guide for European Businesses",
    excerpt: "The 0% VAT rate for exports is a significant financial advantage, but only if you satisfy the rigorous electronic evidence requirements.",
    content: `
      <p>In the world of international trade, the 0% VAT rate for exports is one of the most significant financial advantages for European companies. However, this is not a "set it and forget it" tax rule. In Germany and across the EU, the burden of proof lies entirely with the exporter.</p>
      
      <p>If you cannot provide the specific electronic evidence required by tax authorities, your "tax-free" export can instantly turn into a 19% (or local equivalent) liability out of your own pocket. This guide breaks down the essential workflow for the Export Accompanying Document (EAD) to ensure your compliance is bulletproof.</p>

      <h3>The Legal Context: Why Documentation Matters</h3>
      <p>Under Section 4 No. 1a of the German VAT Act (UStG) and the EU Union Customs Code (UCC), exports to "Third Countries" (non-EU) are exempt from VAT.</p>
      <p>To maintain this exemption during a tax audit, you must satisfy two strict requirements:</p>
      <ul>
        <li><strong>Belegnachweis (Documentary Evidence):</strong> Proof the goods actually left the EU.</li>
        <li><strong>Buchnachweis (Accounting Evidence):</strong> Proper recording of the transaction in your books.</li>
      </ul>
      <p>Without the electronic Exit Confirmation (Ausgangsvermerk), the tax office assumes the goods stayed in the EU, and you will be billed for the missing VAT.</p>

      <h3>The Step-by-Step EAD Workflow</h3>
      
      <h4>1. The Electronic Declaration (ATLAS System)</h4>
      <p>For any export exceeding €1,000 in value or 1,000 kg in weight, a manual invoice is not enough. You must use the ATLAS (Automated Tariff and Local Customs Clearance System).</p>
      <p><strong>The Process:</strong> You or your customs broker submits the data to the Customs Office of Export.</p>
      <p><strong>The Result:</strong> The system generates a Movement Reference Number (MRN). This 18-character alphanumeric code is the unique "tracking number" for your tax exemption.</p>

      <h4>2. Issuance of the EAD</h4>
      <p>Once the declaration is accepted, the Export Accompanying Document (EAD)—or Ausfuhrbegleitdokument (ABD) in German—is issued. This document must physically or digitally accompany the shipment to the EU border. It contains the MRN barcode which is vital for the next step.</p>

      <h4>3. The "Office of Exit" Scan</h4>
      <p>This is where most errors occur. When the goods reach the final EU border (e.g., the Port of Rotterdam, a German airport, or the Swiss border), the carrier must present the EAD to the Customs Office of Exit.</p>
      <p><strong>The Action:</strong> Customs scans the MRN barcode.</p>
      <p><strong>The Result:</strong> This scan triggers an electronic message back to the Office of Export, confirming the goods have left the EU.</p>

      <h4>4. Retrieving the Exit Confirmation (Ausgangsvermerk)</h4>
      <p>Once the exit is confirmed in ATLAS, the system generates the Exit Confirmation. This is your "Golden Ticket." You must download this document and archive it alongside your commercial invoice.</p>

      <h3>Summary of Workflow Statuses</h3>
      <div class="overflow-x-auto my-6 border border-gray-100 rounded-2xl">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-gray-50">
              <th class="p-4 text-[10px] font-black uppercase text-gray-500 border-b border-gray-100">Document Stage</th>
              <th class="p-4 text-[10px] font-black uppercase text-gray-500 border-b border-gray-100">Status in System</th>
              <th class="p-4 text-[10px] font-black uppercase text-gray-500 border-b border-gray-100">Significance</th>
            </tr>
          </thead>
          <tbody class="text-xs">
            <tr>
              <td class="p-4 border-b border-gray-50 font-bold">Declaration</td>
              <td class="p-4 border-b border-gray-50">Accepted</td>
              <td class="p-4 border-b border-gray-50">Data is received by customs hub.</td>
            </tr>
            <tr>
              <td class="p-4 border-b border-gray-50 font-bold">EAD Issued</td>
              <td class="p-4 border-b border-gray-50">Released</td>
              <td class="p-4 border-b border-gray-50">Goods are cleared to travel to the border.</td>
            </tr>
            <tr class="bg-red-50/50">
              <td class="p-4 border-b border-gray-50 font-bold">Border Scan</td>
              <td class="p-4 border-b border-gray-50 text-red-600 font-black italic">Exited</td>
              <td class="p-4 border-b border-gray-50 font-bold">The only status that legally secures 0% VAT.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Common Risks & How to Avoid Them</h3>
      <p><strong>The "Released" vs. "Exited" Trap:</strong> A common mistake is assuming that because you have an EAD that says "Released," you are safe. "Released" only means you are allowed to move the goods to the border. Only the status "Exited" counts for tax purposes. Always check your ATLAS logs 24–48 hours after the goods should have left the EU.</p>
      
      <p><strong>Alternative Evidence (Gelangensbestätigung):</strong> If the border scan is missed, you must pursue "Alternative Evidence." This requires import documents from the destination country and confirmation of receipt from the final customer. Tax offices view this with higher suspicion than standard ATLAS confirmations.</p>

      <h3>Checklist for Financial Compliance</h3>
      <ul>
        <li>Does the export value exceed €1,000? (If yes, ATLAS is mandatory).</li>
        <li>Has the freight forwarder been explicitly instructed to scan the EAD at the border?</li>
        <li>Have you linked the MRN to the specific sales invoice in your ERP system?</li>
        <li>Is the electronic Exit Confirmation archived and readable for the next 10 years?</li>
      </ul>

      <p class="mt-12 p-8 bg-gray-950 text-white rounded-[32px] font-bold italic border-l-8 border-red-600">
        Conclusion: The 0% VAT export workflow is a digital chain. If one link—specifically the border scan—is broken, the financial consequences can be devastating. Implementing a strict "No Exit Confirmation, No Closure" policy in your finance department ensures your exports remain truly tax-free.
      </p>
    `,
    date: "Jan 20, 2026",
    readTime: "5 min read"
  },
  {
    id: 3,
    category: 'Logistics',
    title: "Lagos Port Congestion: Strategic Workarounds",
    excerpt: "Alternative routing through Lekki Deep Sea Port and how it can reduce your inland transit time by up to 12 days.",
    content: `
      <p>As of 2026, the maritime landscape in Nigeria has shifted. While the traditional ports of <strong>Apapa</strong> and <strong>Tin Can Island</strong> remain the busiest, they are no longer the only—or even the best—options for many businesses. Continued congestion in the Lagos pilotage district means that importers often face "hidden costs" in the form of demurrage, truck extortion, and weeks of lost time.</p>

      <p>To stay competitive, logistics managers are now adopting a decentralized approach. By utilizing the <strong>Lekki Deep Sea Port</strong> and <strong>Onne Port (Port Harcourt)</strong>, businesses can bypass the Lagos bottleneck entirely.</p>

      <h3>1. The Lekki Advantage: Speed through Automation</h3>
      <p>Lekki Deep Sea Port has become the primary workaround for high-volume traders. In 2025, it processed over <strong>$9 billion</strong> in trade, securing its spot as Nigeria’s second-largest port by value.</p>
      <ul>
        <li><strong>Deep Draft:</strong> At 16.5 meters, it handles "Post-Panamax" vessels that carry twice as much cargo as those docking at Apapa.</li>
        <li><strong>Automation:</strong> The port uses a fully automated gating system and ship-to-shore cranes.</li>
        <li><strong>The Result:</strong> While clearing at legacy ports can take 14 to 20 days, Lekki aims for a 2-to-5 day window.</li>
      </ul>

      <h3>2. Onne Port: The Gateway to the South-South & South-East</h3>
      <p>If your warehouse is located in cities like <strong>Onitsha, Aba, Nnewi, or Port Harcourt</strong>, routing through Lagos is a logistical error. <strong>Onne Port</strong> (specifically the West Africa Container Terminal - WACT) is the most strategic alternative for these regions.</p>

      <h4>Why Onne is the Better Move for the East:</h4>
      <ul>
        <li><strong>Proximity:</strong> Onne to Aba is less than 70km. Onne to Onitsha is roughly 180km (about 3 hours). Compare this to the 450km+ journey from Lagos.</li>
        <li><strong>Recent Upgrades:</strong> In late 2024, a $115 million upgrade to the WACT terminal at Onne was completed.</li>
        <li><strong>Digital Clearing:</strong> The launch of the B’Odogwu customs system at Onne has significantly reduced manual paperwork.</li>
        <li><strong>E-Call Up System:</strong> Like Lagos, Onne launched its own Electronic Call-Up system in late 2025 to reduce truck queues.</li>
      </ul>

      <h3>3. The "12-Day Reduction": How it Breaks Down</h3>
      <p>The promise of reducing transit time by 12 days is a data-driven reality when comparing a congested Lagos route to an Onne or Lekki route for Eastern-bound cargo.</p>

      <div class="overflow-x-auto my-6 border border-gray-100 rounded-2xl">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-gray-50">
              <th class="p-4 text-[10px] font-black uppercase text-gray-500 border-b border-gray-100">Phase</th>
              <th class="p-4 text-[10px] font-black uppercase text-gray-500 border-b border-gray-100">Apapa to Onitsha</th>
              <th class="p-4 text-[10px] font-black uppercase text-gray-500 border-b border-gray-100">Onne to Onitsha</th>
              <th class="p-4 text-[10px] font-black uppercase text-gray-500 border-b border-gray-100">Time Saved</th>
            </tr>
          </thead>
          <tbody class="text-xs">
            <tr>
              <td class="p-4 border-b border-gray-50 font-bold">Vessel Waiting</td>
              <td class="p-4 border-b border-gray-50">7 – 14 Days</td>
              <td class="p-4 border-b border-gray-50">1 – 2 Days</td>
              <td class="p-4 border-b border-gray-50 text-red-600 font-bold italic">Up to 12 Days</td>
            </tr>
            <tr>
              <td class="p-4 border-b border-gray-50 font-bold">Clearing/Inspection</td>
              <td class="p-4 border-b border-gray-50">10 – 14 Days</td>
              <td class="p-4 border-b border-gray-50">3 – 5 Days</td>
              <td class="p-4 border-b border-gray-50 text-red-600 font-bold italic">Up to 9 Days</td>
            </tr>
            <tr>
              <td class="p-4 border-b border-gray-50 font-bold">Inland Haulage</td>
              <td class="p-4 border-b border-gray-50">2 – 4 Days (Road)</td>
              <td class="p-4 border-b border-gray-50">3 – 5 Hours</td>
              <td class="p-4 border-b border-gray-50 text-red-600 font-bold italic">~2 Days</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>4. Multimodal Workarounds: Barges and Short-Sea Shipping</h3>
      <p>For cargo that must enter through the Lagos zone, the best workaround is to get off the road as quickly as possible.</p>
      <ul>
        <li><strong>Barge Operations:</strong> Move your container via barge to Ikorodu or Kirikiri to bypass port gridlock.</li>
        <li><strong>Short-Sea Shipping:</strong> Larger vessels drop at Lekki, and "feeder" vessels move goods to smaller ports like Calabar.</li>
      </ul>

      <div class="bg-gray-50 p-8 rounded-[32px] mt-12 border border-gray-100">
        <h4 class="text-gray-900 font-black mb-4 uppercase text-xs tracking-widest">Summary for Decision Makers</h4>
        <ul class="mb-0">
          <li><strong>Destination Check:</strong> If your cargo is for the South-East or South-South, use <strong>Onne (NGRON)</strong>.</li>
          <li><strong>Volume Check:</strong> For massive shipments, use <strong>Lekki (NGLKK)</strong>.</li>
          <li><strong>Avoid the Road:</strong> Use rail or barges whenever possible to move containers to inland depots.</li>
        </ul>
      </div>
    `,
    date: "Oct 15, 2024",
    readTime: "6 min read"
  },
  {
    id: 4,
    category: 'Market Trends',
    title: "Solar Energy Demand in Africa: Opportunities for German Tech",
    excerpt: "Africa holds 60% of the world's solar potential. We analyze the shift toward high-performance German tech in 2026.",
    content: `
      <p>As we enter 2026, Africa’s solar market has moved from a "niche interest" to a foundational pillar of the continent's economy. While Africa holds 60% of the world’s best solar resources, it currently accounts for only a fraction of global solar generation. This gap represents the single largest growth opportunity for renewable energy providers today.</p>

      <p>For German companies, the demand isn't just for "cheap panels"—it is for <strong>reliable, high-performance systems</strong> that can withstand local conditions and replace expensive fossil-fuel alternatives.</p>

      <h3>1. Market Spotlight: Nigeria & Kenya</h3>
      
      <h4>Nigeria: The Industrial Pivot</h4>
      <p>In Nigeria, the driver for solar is <strong>diesel replacement</strong>. National grid instability and the 2026 implementation of the <em>National Integrated Electricity Policy</em> have pushed commercial and industrial (C&I) buyers to seek independence.</p>
      <ul>
        <li><strong>The Trend:</strong> Large-scale factories and "Malls" are moving to solar-hybrid systems.</li>
        <li><strong>The Opportunity:</strong> Germany’s expertise in <strong>inverter technology</strong> and <strong>energy management systems</strong> is in high demand to synchronize solar with existing diesel generators.</li>
      </ul>

      <h4>Kenya: The Agri-Solar Leader</h4>
      <p>Kenya is a front-runner, aiming for a 100% renewable grid by 2030. The market here is moving toward <strong>Productive Use of Energy (PUE)</strong>.</p>
      <ul>
        <li><strong>The Trend:</strong> Solar-powered irrigation, cold-chain storage for farmers, and mini-grids for rural communities.</li>
        <li><strong>The Opportunity:</strong> German providers of <strong>DC-powered agricultural equipment</strong> and <strong>lithium-iron-phosphate (LFP) storage</strong> are winning bids based on total cost of ownership (TCO) rather than just the initial price tag.</li>
      </ul>

      <h3>2. Why "Made in Germany" Wins in 2026</h3>
      <p>African buyers, particularly in the corporate sector, are becoming wary of low-quality imports that fail after 2–3 years. The <strong>"German Quality"</strong> brand is a major sourcing advantage because:</p>
      <ul>
        <li><strong>Durability:</strong> Buyers require modules and mounting structures that can handle high heat and dust (DIN/IEC standards).</li>
        <li><strong>Efficiency:</strong> With limited roof space in urban Lagos or Nairobi, high-efficiency German modules (22%+ efficiency) allow for more power in less space.</li>
        <li><strong>Technical Support:</strong> German firms that offer local training or remote monitoring services are preferred, as "after-sales service" is a major pain point for African EPCs.</li>
      </ul>

      <h3>3. Verified Buyer Requirements</h3>
      <p>If you are looking to source or export German tech to these regions, these are the three "Non-Negotiables" for 2026 buyers:</p>

      <div class="overflow-x-auto my-6 border border-gray-100 rounded-2xl">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-gray-50">
              <th class="p-4 text-[10px] font-black uppercase text-gray-500 border-b border-gray-100">Requirement</th>
              <th class="p-4 text-[10px] font-black uppercase text-gray-500 border-b border-gray-100">Specification</th>
              <th class="p-4 text-[10px] font-black uppercase text-gray-500 border-b border-gray-100">Why?</th>
            </tr>
          </thead>
          <tbody class="text-xs">
            <tr>
              <td class="p-4 border-b border-gray-50 font-bold">Tier 1 Status</td>
              <td class="p-4 border-b border-gray-50">Bloomberg Tier 1 Rated</td>
              <td class="p-4 border-b border-gray-50">Necessary for project bankability and insurance.</td>
            </tr>
            <tr>
              <td class="p-4 border-b border-gray-50 font-bold">Battery Storage</td>
              <td class="p-4 border-b border-gray-50">LFP (Lithium Iron Phosphate)</td>
              <td class="p-4 border-b border-gray-50">Lead-acid is being phased out due to short life cycles in hot climates.</td>
            </tr>
            <tr>
              <td class="p-4 border-b border-gray-50 font-bold">Smart Monitoring</td>
              <td class="p-4 border-b border-gray-50">IoT / GSM Integrated</td>
              <td class="p-4 border-b border-gray-50">Remote troubleshooting is essential for sites far from city centers.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>4. The Financing Gap</h3>
      <p>The biggest bottleneck in 2026 is no longer technology; it is <strong>capital</strong>. Buyers are increasingly looking for:</p>
      <ul>
        <li><strong>Leasing Models:</strong> Pay-as-you-go (PAYG) or Power Purchase Agreements (PPAs).</li>
        <li><strong>De-risking:</strong> Utilizing German/European tools like <strong>GET.invest</strong> or <strong>KfW</strong> financing to lower the cost of entry for African businesses.</li>
      </ul>

      <p class="mt-12 p-8 bg-gray-50 rounded-[32px] font-bold text-gray-900 border border-gray-100 text-center">
        The demand for solar in Sub-Saharan Africa is shifting from "basic lighting" to "powering industry." German companies that position themselves as <strong>quality partners</strong> rather than just hardware vendors will find a massive, unsaturated market in Nigeria and Kenya.
      </p>
    `,
    date: "Jan 04, 2026",
    readTime: "4 min read"
  },
  {
    id: 5,
    category: 'Regulation',
    title: "New EU Phytosanitary Standards for Agri-Imports: Germany & EU 2025–2026 Update",
    excerpt: "As we enter 2026, the EU has implemented critical regulatory upgrades affecting imports of raw agricultural commodities like cocoa and cashew nuts.",
    content: `
      <p>As we enter 2026, the European Union has fully implemented several critical regulatory upgrades that affect imports of raw agricultural commodities — especially cocoa and cashew nuts — into Germany and across the EU. While the much-discussed <strong>EU Deforestation Regulation (EUDR)</strong> enforcement timeline has been formally <em>postponed</em>, other core requirements related to plant health, organic conformity, and residue limits are now mandatory and actively enforced at EU Border Control Posts (BCPs).</p>

      <p>For importers, the central priority is to ensure that documentation and compliance processes meet these updated standards or risk <strong>shipment detention or rejection</strong> at the border.</p>

      <h3>1. Strengthened EU Plant Health Law (Regulation 2016/2031 Amendment)</h3>
      <p>A major revision to the EU’s Plant Health Law became fully applicable on <strong>5 January 2025</strong>. This framework governs the phytosanitary status of imported plants and plant products, aiming to prevent the introduction and spread of harmful pests and diseases.</p>

      <h4>Key Elements for Importers</h4>
      <ul>
        <li><strong>Detailed Phytosanitary Declarations:</strong> Exporters outside the EU must ensure that Phytosanitary Certificates include specific declarations covering measures taken against regulated pests and diseases.</li>
        <li><strong>Digital Reporting Systems:</strong> The EU increasingly relies on <strong>TRACES NT</strong> (Trade Control and Expert System – New Technology) for electronic phytosanitary certificates, reducing reliance on paper certificates.</li>
        <li><strong>Emergency Response Framework:</strong> An EU Plant Health Emergency Team supports rapid action on pest outbreaks, affecting inspection intensity and frequency at points of entry.</li>
      </ul>

      <p><strong>Practical tip:</strong> Work closely with your exporter and freight forwarder to ensure that TRACES NT filings and certificates fully reflect plant health compliance before goods depart the origin country.</p>

      <h3>2. Organic Imports: Full EU Compliance Required</h3>
      <p>Since <strong>1 January 2025</strong>, the EU has discontinued automatic acceptance of “equivalence” certifications from third countries for organic produce. Instead, all organic imports — whether cocoa, cashews, or other products — must demonstrate <strong>direct conformity with EU Organic Regulation 2018/848.</strong></p>

      <ul>
        <li><strong>Identical Standards:</strong> Third-country producers must meet <em>all EU organic criteria</em>, not just broadly similar systems.</li>
        <li><strong>Certification Scope:</strong> Entities such as cooperatives must ensure that certification covers the <em>correct scale and structure</em> of their operations.</li>
        <li><strong>Certified Evidence:</strong> Shipments must be accompanied by certified documentation showing EU-level standards were met before departure.</li>
      </ul>

      <h3>3. Updated Maximum Residue Levels (MRLs) and Contaminants</h3>
      <p><strong>Maximum Residue Levels (MRLs)</strong> for pesticides and contaminants in food and feed are set under <strong>Regulation (EC) No 396/2005</strong> and its subsequent amendments. Recent updates mean that residue testing and documentation must reflect current thresholds before goods are placed on the EU market.</p>

      <h4>For tree nuts such as cashews, updated contaminants include:</h4>
      <ul>
        <li><strong>Pesticides:</strong> Various active substances now have MRLs as low as <strong>0.01 mg/kg</strong> for certain residues on tree nuts.</li>
        <li><strong>Metals:</strong> Under <strong>Regulation (EU) 2023/915</strong>, cadmium limits continue to apply, and nickel levels have been introduced (e.g., up to 10 mg/kg for cashew nuts).</li>
      </ul>

      <h3>4. Clarification on the EU Deforestation Regulation (EUDR)</h3>
      <p>The <strong>EU Deforestation Regulation</strong>, which requires proof that commodities have not contributed to deforestation after <strong>31 December 2020</strong>, has been <strong>formally delayed</strong>. The Council adopted a targeted postponement extending the enforcement timeline.</p>

      <h4>Updated EUDR Timeline</h4>
      <ul>
        <li><strong>30 December 2025:</strong> New compliance application date for <em>large operators</em>.</li>
        <li><strong>30 June 2027:</strong> Extended deadline for <em>micro and small enterprises</em>.</li>
      </ul>

      <p><strong>Don’t pause preparation:</strong> Traders should continue collecting and organizing their traceability data now. Delay in enforcement does <em>not</em> mean requirements are waived — it simply pushes the date they become legally binding.</p>

      <h3>5. What Importers Must Do Now (Actionable Checklist)</h3>
      <div class="overflow-x-auto my-6 border border-gray-100 rounded-2xl">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-gray-50">
              <th class="p-4 text-[10px] font-black uppercase text-gray-500 border-b border-gray-100">Requirement</th>
              <th class="p-4 text-[10px] font-black uppercase text-gray-500 border-b border-gray-100">EU Status</th>
              <th class="p-4 text-[10px] font-black uppercase text-gray-500 border-b border-gray-100">What It Means</th>
            </tr>
          </thead>
          <tbody class="text-xs">
            <tr>
              <td class="p-4 border-b border-gray-50 font-bold">Phytosanitary Certificate</td>
              <td class="p-4 border-b border-gray-50">Fully enforced</td>
              <td class="p-4 border-b border-gray-50">Must be issued and submitted via <strong>TRACES NT</strong> for regulated plant products.</td>
            </tr>
            <tr>
              <td class="p-4 border-b border-gray-50 font-bold">Organic Compliance</td>
              <td class="p-4 border-b border-gray-50">Mandatory</td>
              <td class="p-4 border-b border-gray-50">Third-country organic goods must meet <strong>full EU Regulation 2018/848</strong> equivalent certification.</td>
            </tr>
            <tr>
              <td class="p-4 border-b border-gray-50 font-bold">MRL & Contaminant Testing</td>
              <td class="p-4 border-b border-gray-50">Ongoing</td>
              <td class="p-4 border-b border-gray-50">Lab reports must demonstrate compliance with up-to-date MRLs and contaminants thresholds.</td>
            </tr>
            <tr>
              <td class="p-4 border-b border-gray-50 font-bold">EUDR Traceability Data</td>
              <td class="p-4 border-b border-gray-50">Preparatory</td>
              <td class="p-4 border-b border-gray-50">Continue collecting detailed geolocation and supply chain evidence.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Conclusion</h3>
      <p>In 2025–2026, the EU has shifted from a phased implementation of phytosanitary and organic standards to <strong>full regulatory enforcement</strong>. Failure to comply with electronic plant health certificates, updated residue limits, and organic conformity can now lead to shipment holds or rejections at German and EU border inspections. Building documentation and digital traceability now will ensure German and EU importers are ready when enforcement begins.</p>

      <p class="mt-12 pt-8 border-t border-gray-100 font-bold text-gray-900">References</p>
      <ul class="text-xs text-gray-500 space-y-1">
        <li>Consilium of the European Union. (2024). EU Deforestation Law delay update.</li>
        <li>European Commission. (2025). Plant Health Rules - Food Safety Update.</li>
        <li>EU Organic Regulation 2018/848 Technical Guidelines.</li>
        <li>Regulation (EU) 2023/915 on contaminants in food and tree nuts.</li>
      </ul>
    `,
    date: "Jan 09, 2026",
    readTime: "7 min read"
  },
  {
    id: 6,
    category: 'Logistics',
    title: "Air Freight vs. Sea Freight 2026: Making the Right Call",
    excerpt: "In 2026, choosing between a plane and a ship is no longer just about 'fast vs. cheap.' We analyze why speed-to-market often beats ocean savings.",
    content: `
      <p>In 2026, choosing between a plane and a ship is no longer just about "fast vs. cheap." Shipping routes are changing, fuel costs are shifting, and new environmental rules are in place. For businesses moving <strong>mid-sized shipments</strong> (usually 100 kg to 5,000 kg), making the wrong choice can eat your profits.</p>

      <p>Here is how to decide which mode is right for your business this year.</p>

      <h3>1. Transit Time: The 2026 Reality</h3>
      <p>The biggest difference between air and speed. However, 2026 brings a new factor: the <strong>Red Sea return</strong>.</p>
      <ul>
        <li><strong>Air Freight (3–7 Days):</strong> This remains the fastest way to move goods. It is reliable and bypasses almost all ground-level traffic or port strikes.</li>
        <li><strong>Sea Freight (25–45 Days):</strong> Most ships are still sailing around Africa (the Cape of Good Hope) to avoid conflict areas. This adds about 10 days to the journey.</li>
        <li><strong>The Change:</strong> As more ships begin returning to the Suez Canal in early 2026, sea transit times may drop by 10 days, but expect "port bunching" to cause new delays at the docks.</li>
      </ul>

      <h3>2. Cost: Why "Cheaper" Can Be a Trap</h3>
      <p>While sea freight has a lower base price, mid-sized shipments often use <strong>LCL (Less-than-Container Load)</strong>. This means you "share" a container with others. This comes with hidden costs:</p>
      <ul>
        <li><strong>CFS Fees:</strong> Costs for packing and unpacking the shared container.</li>
        <li><strong>Drayage:</strong> Short-distance trucking fees that can be high for small loads.</li>
        <li><strong>Inventory Costs:</strong> If your goods are stuck at sea for 40 days, your money is "locked up" in that inventory.</li>
      </ul>
      <p><strong>The Air Advantage:</strong> Air freight has a higher "per kilo" price, but it has fewer hidden fees and gets your product to customers faster, which helps your cash flow.</p>

      <h3>3. When Speed-to-Market is the Priority</h3>
      <p>In 2026, air freight is the standard choice for three specific areas:</p>
      <ul>
        <li><strong>High-Tech & AI:</strong> Chips and electronics lose value quickly. Getting them to market in 5 days instead of 40 can save thousands in "price erosion."</li>
        <li><strong>E-commerce Replenishment:</strong> If a product goes viral, you cannot wait 6 weeks for a ship. Air freight keeps your "Buy" button active.</li>
        <li><strong>Seasonal Goods:</strong> High-fashion or holiday items have a short "selling window." If they arrive late by ship, you may have to sell them at a discount.</li>
      </ul>

      <h3>4. Sustainability & New Rules</h3>
      <p>Environmental rules are now a part of daily logistics.</p>
      <ul>
        <li><strong>Carbon Reporting:</strong> In the EU and North America, companies must now report the "carbon footprint" of their shipments.</li>
        <li><strong>SAF (Sustainable Aviation Fuel):</strong> Many air carriers now offer SAF options. While it costs more, it helps you meet green targets.</li>
        <li><strong>Sea Freight Efficiency:</strong> Ships are still much "greener" per kilo than planes. If your goal is the lowest possible carbon footprint, the sea is the winner.</li>
      </ul>

      <h3>5. The Decision Checklist</h3>
      <p>Ask yourself these four questions to pick your mode:</p>
      <ul>
        <li><strong>What is the value?</strong> If the goods are worth more than $20,000 but weigh less than 500kg, <strong>Air</strong> is often safer and faster.</li>
        <li><strong>Is it a "Shared" load?</strong> If you are using LCL, check the <strong>total landed cost</strong> (all fees included), not just the shipping rate.</li>
        <li><strong>How steady is the demand?</strong> If people buy this every day, send the bulk by <strong>Sea</strong> and use <strong>Air</strong> only for emergency refills.</li>
        <li><strong>What is the "Late Fee"?</strong> If being late costs you a contract or a "Demurrage" fee (late fee for containers), use <strong>Air</strong>.</li>
      </ul>

      <p class="mt-12 p-8 bg-gray-950 text-white rounded-[32px] font-bold italic border-l-8 border-red-600">
        Conclusion: In 2026, air freight is a strategic tool, not just a last resort. Use sea freight for your heavy, low-margin "baseline" stock. Use air freight for high-value items, quick refills, and keeping your cash moving.
      </p>
    `,
    date: "Jan 21, 2026",
    readTime: "5 min read"
  }
];

const KnowledgeHub: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedArticle]);

  const filteredArticles = articles.filter(art => 
    activeCategory === 'All' || art.category === activeCategory
  );

  return (
    <div className="bg-white py-24 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Trade <span className="text-red-600">Resource</span> Centre
            </h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {['All', 'Regulation', 'Finance', 'Logistics', 'Market Trends'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as Category)}
                className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all border ${
                  activeCategory === cat 
                  ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-100' 
                  : 'bg-white border-gray-100 text-gray-500 hover:border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((res) => (
            <div 
              key={res.id} 
              onClick={() => res.content && setSelectedArticle(res)}
              className={`bg-white p-8 rounded-[32px] shadow-sm hover:shadow-xl transition-all group cursor-pointer border flex flex-col h-full hover:-translate-y-1 ${
                res.isPriority ? 'border-red-100 bg-red-50/10' : 'border-gray-100'
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-2">
                  <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md ${
                    res.isPriority ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {res.category}
                  </span>
                </div>
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                  {res.readTime}
                </span>
              </div>
              
              <h4 className="text-xl font-black text-gray-900 mb-3 leading-tight group-hover:text-red-600 transition-colors">
                {res.title}
              </h4>
              
              <p className="text-gray-500 text-sm mb-8 leading-relaxed flex-1">
                {res.excerpt}
              </p>
              
              <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                  {res.date}
                </span>
                <span className="text-red-600 font-black text-[10px] uppercase tracking-widest flex items-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                  {res.content ? 'Read Now' : 'Locked Access'}
                  <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] hover:text-red-600 transition-colors flex items-center mx-auto space-x-2 group">
            <span>Access Knowledge Archive</span>
            <svg className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* ARTICLE READER MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-0 md:p-12">
          <div 
            className="absolute inset-0 bg-gray-950/95 backdrop-blur-xl animate-fadeIn" 
            onClick={() => setSelectedArticle(null)}
          ></div>
          
          <div className="relative w-full max-w-4xl h-full md:h-auto md:max-h-[90vh] bg-white md:rounded-[40px] shadow-2xl flex flex-col overflow-hidden animate-fadeInUp">
            {/* Header / Nav */}
            <div className="flex justify-between items-center px-8 py-6 border-b border-gray-100 bg-white sticky top-0 z-10">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-red-600 text-white text-[9px] font-black uppercase tracking-widest rounded-lg">
                  {selectedArticle.category}
                </span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {selectedArticle.readTime}
                </span>
              </div>
              <button 
                onClick={() => setSelectedArticle(null)}
                className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-900 transition-all hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar bg-white">
              <article className="max-w-3xl mx-auto px-8 py-12 md:py-20">
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-[1.1] tracking-tight">
                  {selectedArticle.title}
                </h1>
                
                <div 
                  className="prose prose-red max-w-none text-gray-600 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content || '' }}
                  style={{
                    fontSize: '1.125rem',
                  }}
                >
                </div>

                <div className="mt-20 pt-10 border-t border-gray-100">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-10 bg-gray-950 rounded-[32px] text-white">
                    <div className="text-center md:text-left">
                      <p className="text-red-600 font-black text-[10px] uppercase tracking-[0.2em] mb-2">Trade Intelligence</p>
                      <h4 className="text-xl font-black">Need custom route analysis?</h4>
                    </div>
                    <button 
                      onClick={() => {
                        setSelectedArticle(null);
                        const el = document.getElementById('contact');
                        if (el) {
                           const offset = 80;
                           const bodyRect = document.body.getBoundingClientRect().top;
                           const elementRect = el.getBoundingClientRect().top;
                           const elementPosition = elementRect - bodyRect;
                           const offsetPosition = elementPosition - offset;
                           window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                        }
                      }}
                      className="bg-red-600 px-8 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-700 transition-all"
                    >
                      Consult an Expert
                    </button>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      )}

      {/* Global CSS for article body styling */}
      <style>{`
        .prose h3 {
          font-size: 1.75rem;
          font-weight: 900;
          color: #111827;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          letter-spacing: -0.025em;
        }
        .prose h4 {
          font-size: 1.25rem;
          font-weight: 800;
          color: #111827;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .prose p {
          margin-bottom: 1.5rem;
        }
        .prose ul {
          list-style-type: none;
          padding-left: 0;
          margin-bottom: 2.5rem;
        }
        .prose li {
          position: relative;
          padding-left: 1.75rem;
          margin-bottom: 1rem;
        }
        .prose li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.6em;
          width: 0.5rem;
          height: 0.5rem;
          background-color: #dc2626;
          border-radius: 9999px;
        }
        .prose strong {
          color: #111827;
          font-weight: 800;
        }
        .prose table th {
          text-align: left;
        }
      `}</style>
    </div>
  );
};

export default KnowledgeHub;
