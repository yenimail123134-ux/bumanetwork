"use client";
import React, { useState, useEffect } from 'react';
import { Copy, Check, Shield, Users, Zap, MessageSquare } from 'lucide-react';

export default function BumaNetwork() {
  const [copied, setCopied] = useState(false);
  const [online, setOnline] = useState("...");
  const ip = "oyna.bumamc.com";

  // IP Kopyalama Fonksiyonu
  const handleCopy = () => {
    navigator.clipboard.writeText(ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Oyuncu Sayısı Çekme
  useEffect(() => {
    fetch('https://api.mcsrvstat.us/3/oyna.bumamc.com')
      .then(res => res.json())
      .then(data => setOnline(data.players?.online || 0))
      .catch(() => setOnline(0));
  }, []);

  return (
    <div className="bg-buma-black min-h-screen text-white font-sans selection:bg-buma-amber selection:text-black">
      
      {/* 1. HERO & IP */}
      <section className="flex flex-col items-center justify-center text-center pt-32 pb-20 px-6">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4">
          KALİTEYİ <span className="text-buma-amber">HİSSET.</span>
        </h1>
        <p className="text-gray-400 max-w-xl text-lg mb-10">
          Claimsiz, hilesiz ve saf Minecraft deneyimi. Para kaygısı yok, kalite çok.
        </p>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div 
            onClick={handleCopy}
            className="group cursor-pointer flex items-center bg-white/5 border border-white/10 hover:border-buma-amber/50 transition-all overflow-hidden"
          >
            <span className="px-6 py-3 font-mono text-sm tracking-widest">{ip}</span>
            <div className="bg-buma-amber p-4 text-black">
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 px-6 py-3 text-sm font-bold uppercase tracking-widest text-gray-300">
            {online} Aktif Oyuncu
          </div>
        </div>
      </section>

      {/* 2. MANİFESTO (ÖZET) */}
      <section className="max-w-4xl mx-auto py-20 px-6 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <h2 className="text-3xl font-black leading-tight uppercase">Buma Network <br/> Nedir?</h2>
          <p className="text-gray-500 font-light leading-relaxed">
            Biz bir ticarethane değiliz. Buma Network, güven üzerine kurulu "No-Claim" sistemli, 
            olgun oyuncular için tasarlanmış bir Hardcore Vanilla limanıdır. 
            Burada sadece bileğiniz ve itibarınız konuşur.
          </p>
        </div>
      </section>

      {/* 3. ÖZELLİKLER (BASİT GRID) */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 px-6 pb-32">
        <FeatureCard icon={<Zap className="text-buma-amber"/>} title="Saf Performans" desc="Ryzen 9 altyapı ile 20 TPS." />
        <FeatureCard icon={<Shield className="text-buma-amber"/>} title="Sıfır P2W" desc="Market yok, haksız kazanç yok." />
        <FeatureCard icon={<Users className="text-buma-amber"/>} title="Olgun Kitle" desc="+18 odaklı, nezih topluluk." />
      </section>

      {/* 4. DISCORD CALL TO ACTION */}
      <footer className="bg-white/5 py-16 text-center border-t border-white/5">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-[0.4em] mb-4">Sohbete Katıl</p>
        <a 
          href="https://discord.gg/WNRg4GZh" 
          className="inline-flex items-center gap-2 bg-buma-amber text-black px-10 py-4 font-black uppercase text-sm hover:scale-105 transition-transform"
        >
          <MessageSquare size={18} /> Discord Sunucusu
        </a>
      </footer>
    </div>
  );
}

// Küçük Bileşen (Aynı dosyada kalsın diye)
function FeatureCard({ icon, title, desc }) {
  return (
    <div className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-white font-bold mb-2 uppercase tracking-tight">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
