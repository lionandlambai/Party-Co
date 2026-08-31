'use client';

import { useState } from 'react';
import { ArrowRight, Baby, Building2, CalendarCheck, Check, ChevronDown, Gift, GraduationCap, HeartHandshake, MapPin, MessageCircle, PartyPopper, School, ShieldCheck, ShoppingBag, Sparkles, Star, Users } from 'lucide-react';

const WA = '27661699244';
const wa = (message: string) => `https://wa.me/${WA}?text=${encodeURIComponent(message)}`;
const booking = (name: string, price: string, detail = '') => wa(`Hi Party Co! I'd like to book the ${name} (${price})${detail ? ` — ${detail}` : ''} for my event. I understand Party Co will bring, set up and operate the machines. Please send me availability and the delivery/setup cost for my venue.`);

const events = [
  [PartyPopper, 'Birthdays'], [School, 'School Events'], [Building2, 'Corporate Events'], [HeartHandshake, 'Fundraisers'],
  [Baby, 'Baby Showers'], [Users, 'Family Days'], [ShoppingBag, 'Shopping Centre Activations'], [Gift, 'And more!'],
] as const;

const packageData = [
  { tone:'pink', badge:'Sweet deal', title:'Popcorn & Cotton Candy', price:'R1200', subtitle:'Special Combo', items:['50 servings each','All consumables included','Professional machine operator'], emoji:'🍿 + 🍭' },
  { tone:'blue', badge:'Pick your favourite', title:'2 Machine Combo', price:'R1900', subtitle:'Choose your combo', items:['50 servings per machine','All consumables included','Professional machine operator'], emoji:'🥤 + 🎉' },
  { tone:'purple', badge:'Crowd favourite', title:'3 Machine Combo', price:'R2800', subtitle:'Slush + Popcorn + Cotton Candy', items:['50 servings per machine','All consumables included','Professional machine operator'], emoji:'🥤🍿🍭' },
  { tone:'orange', badge:'The whole party', title:'All 6 Machines', price:'R6500', subtitle:'One amazing package', items:['50 servings per machine','All consumables included','Staffed by professional operators'], emoji:'🎪' },
];

export default function Home() {
  const [combo, setCombo] = useState('Slush + Popcorn');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const general = wa("Hi Party Co! I'm planning an event in Johannesburg. Please send me your availability and package options. I understand your team brings, sets up and operates the machines.");

  return (
    <main>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Party Co home"><img src="/partyco-logo-v4.png" alt="Party Co — Fun starts here" /></a>
        <div className="nav-links"><a href="#about">About</a><a href="#packages">Packages</a><a href="#perfect-for">Events</a><a href="/gallery">Gallery</a><a href="#contact">Contact</a></div>
        <a className="button button-small button-whatsapp" href={general} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp us</a>
      </nav>

      <section className="hero" id="top">
        <div className="confetti" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={16} /> Johannesburg’s fun-food crew</div>
          <h1>Make every<br />celebration <span>a party!</span></h1>
          <p className="hero-kicker">Fun. Sweet. Colourful. Unforgettable.</p>
          <p className="hero-body">From icy slush and warm popcorn to cloud-soft cotton candy — we bring the treats, the machines and the smiles.</p>
          <div className="hero-actions"><a className="button button-primary" href="#packages">See packages <ArrowRight size={20} /></a><a className="button button-light" href={general} target="_blank" rel="noreferrer"><MessageCircle size={20} /> Chat on WhatsApp</a></div>
          <p className="location"><MapPin size={17} /> Kensington, Johannesburg · Events across Joburg</p>
        </div>
        <div className="hero-visual"><img src="/partyco-ad-combo.jpeg" alt="Party Co popcorn and cotton candy special combo" /><div className="mini-card"><span>Packages from</span><strong>R1200</strong><small>We bring, set up & operate</small></div></div>
      </section>

      <section className="quick-strip" aria-label="Party Co highlights"><span>🎉 50 servings per machine</span><span>🍿 Consumables included</span><span>🙌 Professional operators</span><span>📍 Joburg-wide fun</span></section>

      <section className="about section" id="about">
        <div className="about-art"><div className="photo-stack"><img src="/partyco-ad-all-machines.jpeg" alt="Party Co all six machines party package" /><div className="sticker">WE BRING<br />THE FUN!</div></div></div>
        <div className="about-copy"><p className="section-tag">Welcome to Party Co</p><h2>Where the fun <span>begins!</span></h2><p className="lead">Celebrations are about more than decorations and cake. They’re about the smiles, laughter, excitement and memories that last long after the party is over.</p><p>That’s why we create fun, colourful and affordable party experiences designed to make your celebration extra special. From birthdays and baby showers to school events, corporate activations and fundraisers — Party Co is ready to bring the fun.</p><div className="note"><Star fill="currentColor" /> You bring the smiles. We’ll handle the treats.</div></div>
      </section>

      <section className="packages section" id="packages">
        <div className="section-head"><div><p className="section-tag">Pick your party</p><h2>Big fun. <span>Zero fuss.</span></h2></div><p>Every package includes 50 servings per machine and a Party Co team member to bring, set up and operate it. No collection or self-service options.</p></div>
        <div className="package-grid">
          {packageData.map((pkg, i) => <article className={`package-card ${pkg.tone}`} key={pkg.title}>
            <div className="package-top"><span className="pill">{pkg.badge}</span><span className="package-emoji" aria-hidden="true">{pkg.emoji}</span></div>
            <p className="package-subtitle">{pkg.subtitle}</p><h3>{pkg.title}</h3><p className="price">{pkg.price}</p>
            {i===1 && <fieldset className="combo-picker"><legend>Choose your combo</legend>{['Slush + Popcorn','Slush + Cotton Candy'].map(opt=><label key={opt} className={combo===opt?'selected':''}><input type="radio" name="combo" value={opt} checked={combo===opt} onChange={()=>setCombo(opt)} />{opt}<span><Check size={15}/></span></label>)}</fieldset>}
            <ul>{pkg.items.map(item=><li key={item}><Check size={17}/>{item}</li>)}</ul>
            <a className="button package-button" href={booking(pkg.title,pkg.price,i===1?combo:pkg.subtitle)} target="_blank" rel="noreferrer"><MessageCircle size={20}/> Book on WhatsApp</a>
          </article>)}
        </div>
      </section>

      <section className="included section"><div className="included-head"><p className="section-tag light">Everything you need</p><h2>We handle the fun.<br/><span>You enjoy the party.</span></h2></div><div className="included-grid">{[[ShieldCheck,'All consumables','Everything needed to serve your guests.'],[Users,'Staffed machines','Every package includes a Party Co team member to run the machines.'],[Sparkles,'Delivery & setup','We bring the machines and set everything up at your venue.'],[MapPin,'Joburg service','Delivery and setup are quoted for your Johannesburg venue.']].map(([Icon,title,body])=><div className="included-item" key={title as string}><Icon size={28}/><div><h3>{title as string}</h3><p>{body as string}</p></div></div>)}</div></section>

      <section className="events section" id="perfect-for"><div className="center-head"><p className="section-tag">Perfect for</p><h2>Whatever the occasion,<br/><span>bring the wow.</span></h2></div><div className="event-grid">{events.map(([Icon,label],i)=><div className={`event-card e${i%4}`} key={label}><Icon size={31}/><strong>{label}</strong></div>)}</div></section>

      <section className="experience section"><div className="experience-copy"><p className="section-tag light">Trusted event experience</p><h2>From big brands to<br/><span>big-hearted days.</span></h2><p>Party Co has brought fun-food experiences to events at or with hotels, ABSA, Wits, FNB and WBHO Construction — as well as community fundraisers and sponsored children’s-home events.</p><small>Names indicate event experience or clients served and do not imply formal endorsement.</small></div><div className="name-cloud" aria-label="Organisations and events served"><span>Hotels</span><span>ABSA</span><span>Wits</span><span>FNB</span><span>WBHO<br/>Construction</span><span>Community<br/>fundraisers</span></div></section>

      <section className="steps section"><div className="center-head"><p className="section-tag">Easy as 1, 2, party!</p><h2>How booking <span>works</span></h2></div><div className="step-grid">{[[1,'Pick a package','Choose the treats that fit your crowd.'],[2,'Send your details','Tell us the date, venue and guest count on WhatsApp.'],[3,'Confirm your date','We’ll confirm availability and your delivery/setup cost.'],[4,'Enjoy the party','Our team brings, sets up and operates everything!']].map(([n,title,text])=><div className="step" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section className="extras section"><div><p className="section-tag">Need just one treat?</p><h2>Individual options</h2><p>Older individual pricing is shown as a guide. Please enquire to confirm current pricing and availability.</p></div><div className="extras-list">{[['Slush Machine','from R1400'],['Popcorn Machine','from R900'],['Cotton Candy Machine','from R900'],['Spiral Chips','from R35 / serving'],['Waffle on a Stick','from R45'],['Chocolate Fountain','from R500']].map(([a,b])=><div key={a}><span>{a}</span><strong>{b}</strong></div>)}</div></section>

      <section className="faq section"><div><p className="section-tag">Good to know</p><h2>Quick <span>answers</span></h2></div><div className="faq-list">{[['Do you deliver and set up?','Yes. Party Co brings the machines to your Johannesburg venue and sets everything up. Delivery and setup are quoted for your location.'],['How many servings are included?','Package offers include 50 servings per machine, with consumables included.'],['Do I run the machines?','No. Every package includes a Party Co team member who stays to operate the machines. There are no collection or self-service options.']].map(([q,a],i)=><button className="faq-item" key={q} onClick={()=>setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}><span>{q}<ChevronDown className={openFaq===i?'rotated':''}/></span>{openFaq===i&&<p>{a}</p>}</button>)}</div></section>

      <section className="contact section" id="contact"><div className="contact-burst" aria-hidden="true">🎉</div><p className="section-tag light">Your celebration starts here</p><h2>Ready to make it<br/><span>unforgettable?</span></h2><p>Tell us about your date, venue and guest list. We’ll help you choose the perfect package.</p><div className="contact-actions"><a className="button button-green" href={general} target="_blank" rel="noreferrer"><MessageCircle size={21}/> WhatsApp 066 169 9244</a><a className="alt-number" href="tel:+27725299170">Or call 072 529 9170</a></div></section>

      <footer><a className="footer-brand" href="#top"><img src="/partyco-logo-v4.png" alt="Party Co"/></a><p>Fun starts here — Johannesburg.</p><div><a href="#packages">Packages</a><a href="#about">About</a><a href="/gallery">Gallery</a><a href="#contact">Contact</a></div><p className="copyright">© {new Date().getFullYear()} Party Co. All rights reserved.</p></footer>
      <a className="float-whatsapp" href={general} aria-label="Chat to Party Co on WhatsApp" target="_blank" rel="noreferrer"><MessageCircle size={28}/></a>
    </main>
  );
}
