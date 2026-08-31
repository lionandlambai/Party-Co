'use client';

import { useState } from 'react';
import { ArrowLeft, MessageCircle, Play, X } from 'lucide-react';

const early = ['07.30.51','07.30.52','07.30.53 (1)','07.30.53 (2)','07.30.53','07.30.55 (1)','07.30.55','07.30.56','07.30.57 (1)','07.30.57 (2)','07.30.57','07.30.58 (1)','07.30.58 (2)','07.30.58'];
const recent = ['09.15.19','09.15.21','09.15.22','09.15.24','09.15.25','09.15.27','09.15.29','09.15.30','09.15.32','09.15.33','09.15.35','09.15.37','09.15.39','09.15.40','09.15.42','09.15.44','09.15.46','09.15.48','09.15.50','09.15.52','09.15.54','09.15.56','09.15.57','09.15.59','09.16.01','09.16.03','09.16.05','09.16.06','09.16.11','09.16.15','09.16.16','09.16.18','09.16.20','09.16.22','09.16.24','09.16.25','09.16.27','09.16.29','09.16.31','09.16.34','09.16.36','09.16.38','09.16.40','09.16.42'];
const photos = [
  ...early.map(t => `WhatsApp Image 2026-08-28 at ${t}.jpeg`),
  ...recent.map(t => `WhatsApp Image 2026-08-31 at ${t}.jpeg`),
];
const videos = ['WhatsApp Video 2026-08-31 at 09.16.08.mp4','WhatsApp Video 2026-08-31 at 09.16.13.mp4','WhatsApp Video 2026-08-31 at 09.16.33.mp4'];
const asset = (name:string) => `/gallery/${encodeURIComponent(name)}?v=2`;

export default function GalleryPage(){
  const [filter,setFilter]=useState<'all'|'photos'|'videos'>('all');
  const [active,setActive]=useState<string|null>(null);
  return <main className="gallery-page">
    <nav className="gallery-nav"><a className="gallery-logo" href="/"><img src="/partyco-logo-v4.png" alt="Party Co"/></a><a className="back-link" href="/"><ArrowLeft size={18}/> Back to home</a><a className="gallery-wa" href="https://wa.me/27661699244?text=Hi%20Party%20Co!%20I%20saw%20your%20gallery%20and%20would%20like%20to%20book%20an%20event." target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp us</a></nav>
    <header className="gallery-hero"><p>Real parties. Real smiles.</p><h1>See the fun<br/><span>in action!</span></h1><div className="gallery-tabs" role="group" aria-label="Filter gallery">{(['all','photos','videos'] as const).map(f=><button className={filter===f?'active':''} key={f} onClick={()=>setFilter(f)}>{f}</button>)}</div></header>
    <section className="gallery-wrap">
      {(filter==='all'||filter==='videos')&&<div className="video-grid">{videos.map((name,i)=><article className="video-card" key={name}><video controls preload="metadata" playsInline><source src={asset(name)} type="video/mp4"/></video><div><Play size={18} fill="currentColor"/><span>Party moment {i+1}</span></div></article>)}</div>}
      {(filter==='all'||filter==='photos')&&<div className="masonry">{photos.map((name,i)=><button className="gallery-photo" key={name} onClick={()=>setActive(name)} aria-label={`Open Party Co event photo ${i+1}`}><img src={asset(name)} alt={`Party Co event, treats and setup ${i+1}`} loading="lazy"/></button>)}</div>}
    </section>
    <section className="gallery-cta"><p>Ready for your own Party Co moment?</p><h2>Let’s make some<br/><span>sweet memories.</span></h2><a className="button button-green" href="https://wa.me/27661699244?text=Hi%20Party%20Co!%20I%20saw%20your%20gallery%20and%20would%20like%20to%20book%20an%20event." target="_blank" rel="noreferrer"><MessageCircle size={21}/> Book on WhatsApp</a></section>
    {active&&<div className="lightbox" role="dialog" aria-modal="true" aria-label="Event photo preview" onClick={()=>setActive(null)}><button aria-label="Close photo" onClick={()=>setActive(null)}><X/></button><img src={asset(active)} alt="Party Co event preview" onClick={e=>e.stopPropagation()}/></div>}
  </main>;
}
