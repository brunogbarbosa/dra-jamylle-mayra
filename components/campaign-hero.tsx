'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { appointmentUrl, site } from '@/data/site';
import { useCampaignMotion } from './use-campaign-motion';

export function CampaignHero() {
  const motionRef = useCampaignMotion();

  return <section ref={motionRef} id="inicio" className="campaign" aria-labelledby="campaign-title">
    <div className="campaign-organic campaign-organic-one" aria-hidden="true" />
    <div className="campaign-organic campaign-organic-two" aria-hidden="true" />
    <div className="campaign-contour" aria-hidden="true" />
    <figure className="campaign-portrait">
      <div className="campaign-silhouette">
        <Image className="campaign-original" src={site.images.hero} alt="Retrato da Dra. Jamylle Mayra" fill preload sizes="100vw" />
      </div>
    </figure>
    <div className="campaign-inner">
      <div className="campaign-topline"><span>ODONTOLOGIA COM IDENTIDADE</span><span>ESTÉTICA COM IDENTIDADE</span></div>
      <div className="campaign-copy">
        <p className="campaign-kicker">DRA. JAMYLLE MAYRA <span aria-hidden="true">/</span> ODONTOLOGIA ESTÉTICA</p>
        <h1 id="campaign-title" aria-label={site.headline}>
          <span className="campaign-title-line"><span>A beleza de</span></span>
          <span className="campaign-title-line"><span>continuar</span></span>
          <span className="campaign-title-line"><span>sendo você.</span></span>
        </h1>
        <p className="campaign-subtitle">Um olhar para o seu sorriso, os seus traços e tudo o que torna a sua beleza única.</p>
        <div className="campaign-action"><a className="campaign-cta" href={appointmentUrl} target="_blank" rel="noreferrer"><span>AGENDAR MINHA AVALIAÇÃO</span><ArrowUpRight size={22} strokeWidth={1.4} /></a></div>
      </div>
      <div className="campaign-seal" aria-hidden="true"><svg viewBox="0 0 146 146" fill="none"><circle cx="73" cy="73" r="66" stroke="currentColor" strokeWidth=".7"/><circle cx="73" cy="73" r="57" stroke="currentColor" strokeWidth=".7"/><path d="M24 73h98M73 24v98" stroke="currentColor" strokeWidth=".5"/><text x="73" y="83" fill="currentColor" textAnchor="middle">JM</text></svg></div>
      <p className="campaign-editorial">O extraordinário<br /><em>é ser você.</em></p>
      <div className="campaign-metrics" aria-label="Filosofia de atendimento"><span>01 / ESCUTA</span><span>02 / INTENÇÃO</span><span>03 / NATURALIDADE</span></div>
      <div className="campaign-signature"><span aria-hidden="true" /> <p>DESÇA PARA DESCOBRIR</p></div>
    </div>
  </section>;
}
