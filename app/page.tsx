"use client";

import React, { useState, useEffect } from 'react';

export default function BumaNetwork() {
  const [serverStatus, setServerStatus] = useState<any>(null);
  const [isCopied, setIsCopied] = useState(false);
  
  // BUMA NETWORK KURUMSAL BİLGİLERİ
  const SERVER_IP = "oyna.bumamc.com";
  const DISCORD_URL = "https://discord.gg/WNRg4GZh";

  // Canlı Sunucu İstatistiği (API)
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(`https://api.mcsrvstat.us/3/${SERVER_IP}`);
        const data = await response.json();
        setServerStatus(data);
      } catch (error) {
        console.error("Sunucu bağlantı hatası", error);
      }
    };
    fetchStatus();
  }, []);

  // IP Kopyalama Mekanizması
  const copyIP = () => {
    navigator.clipboard.writeText(SERVER_IP);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#020202] text-slate-300 font-sans selection:bg-amber-600 selection:text-white">
      
      {/* --- HEADER / NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-[#020202]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold tracking-widest text-white uppercase">BUMA<span className="text-amber-600">.NETWORK</span></h1>
            <span className="text-[10px] text-gray-500 tracking-[0.3em] uppercase">Claimsiz SMP</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-xs font-semibold tracking-widest uppercase text-gray-500">
            <a href="#manifesto" className="hover:text-white transition-colors duration-300">Manifesto</a>
            <a href="#altyapi" className="hover:text-white transition-colors duration-300">Altyapı</a>
            <a href="#baglan" className="hover:text-white transition-colors duration-300">Bağlan</a>
          </div>

          <a 
            href={DISCORD_URL} 
            target="_blank"
            className="px-6 py-2 border border-white/10 hover:bg-white hover:text-black text-white text-xs font-bold tracking-widest uppercase transition-all duration-300"
          >
            Topluluk
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION (AĞIR VE CİDDİ) --- */}
      <section id="baglan" className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        
        {/* Arka Plan Gradient (Çok Hafif) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020202] via-[#050505] to-[#0a0a0a] z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-900/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="relative z-10 space-y-8 max-w-4xl">
          <div className="inline-block px-4 py-2 border border-white/5 bg-white/[0.02] backdrop-blur text-amber-500 text-[10px] font-bold tracking-[0.4em] uppercase animate-fade-in">
            Güven • Diplomasi • İhanet
          </div>
          
          <h2 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-tight">
            SINIR YOK. CLAIM YOK.<br />
            <span className="text-gray-600">SADECE KALİTE VAR.</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Bizde arsa koruması yok, söz senettir. Bizde "VIP Satış" yok, itibar her şeydir.
            Minecraft'ın en saf ve en acımasız halini, nezih bir kitleyle deneyimleyin.
          </p>

          {/* IP ve Durum */}
          <div className="flex flex-col items-center gap-6 mt-12">
            <button 
              onClick={copyIP}
              className="group relative px-10 py-5 bg-white text-black hover:bg-amber-500 transition-colors duration-500"
            >
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold tracking-widest uppercase">
                  {isCopied ? "ADRES KOPYALANDI" : "SUNUCU ADRESİNİ KOPYALA"}
                </span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </button>
            
            <div className="flex items-center gap-3 text-xs font-medium text-gray-500 uppercase tracking-widest">
              <span className={`w-2 h-2 rounded-full ${serverStatus?.online ? 'bg-emerald-500 shadow-[0_0_10px_#10b981]' : 'bg-red-500'}`}></span>
              {serverStatus?.online 
                ? `${SERVER_IP} • ${serverStatus.players.online} OYUNCU AKTİF` 
                : "BAĞLANTI BEKLENİYOR..."}
            </div>
          </div>
        </div>
      </section>

      {/* --- MANİFESTO (HAKKIMIZDA) --- */}
      <section id="manifesto" className="py-32 bg-[#050505] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 text-center md:text-left">
          <h3 className="text-3xl font-medium text-white mb-12 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-amber-600"></span>
            VİZYON VE FELSEFE
          </h3>
          
          <div className="space-y-10 text-xl text-gray-400 font-light leading-loose">
            <p>
              <strong className="text-white font-normal">Ticari bir işletme değiliz.</strong> Buma Network, Minecraft sunucularının "pay-to-win" bataklığına dönüşmesine bir tepki olarak doğmuştur. Kasa anahtarı satmıyoruz, edit eşya dağıtmıyoruz.
            </p>
            <p>
              <strong className="text-white font-normal">Claimsiz yapı.</strong> Sunucumuzda yapılarınızı koruyan sihirli bloklar yoktur. Sizi koruyan tek şey kurduğunuz dostluklar ve itibarınızdır. Bu yapı, sadece olgun ve ne yaptığını bilen oyuncuları barındırır.
            </p>
            <p className="text-amber-600/80 italic">
              "Para kaygımız yok, kalite tutkumuz var."
            </p>
          </div>
        </div>
      </section>

      {/* --- ALTYAPI VE ÖZELLİKLER --- */}
      <section id="altyapi" className="py-32 bg-[#020202]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
            
            {/* Kutu 1 */}
            <div className="bg-[#020202] p-12 hover:bg-[#050505] transition-colors duration-500 group">
              <div className="text-gray-600 mb-6 group-hover:text-amber-600 transition-colors">01.</div>
              <h4 className="text-white text-lg font-bold uppercase tracking-widest mb-4">SAF PERFORMANS</h4>
              <p className="text-gray-500 leading-relaxed text-sm">
                Gereksiz eklentilerden arındırılmış, 100 GB map yükü olmayan, optimize edilmiş saf Survival deneyimi.
              </p>
            </div>

            {/* Kutu 2 */}
            <div className="bg-[#020202] p-12 hover:bg-[#050505] transition-colors duration-500 group">
              <div className="text-gray-600 mb-6 group-hover:text-amber-600 transition-colors">02.</div>
              <h4 className="text-white text-lg font-bold uppercase tracking-widest mb-4">ADİL OYUN</h4>
              <p className="text-gray-500 leading-relaxed text-sm">
                Hiçbir oyuncu para vererek diğerinin önüne geçemez. Sponsorluklar sadece sunucu giderleri içindir, oyun içi avantaj sağlamaz.
              </p>
            </div>

            {/* Kutu 3 */}
            <div className="bg-[#020202] p-12 hover:bg-[#050505] transition-colors duration-500 group">
              <div className="text-gray-600 mb-6 group-hover:text-amber-600 transition-colors">03.</div>
              <h4 className="text-white text-lg font-bold uppercase tracking-widest mb-4">SEÇKİN TOPLULUK</h4>
              <p className="text-gray-500 leading-relaxed text-sm">
                Toksik davranışlar, hile ve saygısızlık anında uzaklaştırma sebebidir. Burası herkes için değil, kalite arayanlar içindir.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/5 bg-[#020202] text-center md:text-left">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-gray-600 uppercase tracking-widest">
            © 2026 BUMA NETWORK. TÜM HAKLARI SAKLIDIR.
          </div>
          <div className="mt-4 md:mt-0 flex gap-8">
             <a href={DISCORD_URL} className="text-xs text-gray-500 hover:text-amber-600 transition-colors uppercase tracking-widest">Discord</a>
             <span className="text-xs text-gray-800">|</span>
             <span className="text-xs text-gray-500 uppercase tracking-widest cursor-default">Mangoohost Pırlanta Partner</span>
          </div>
        </div>
      </footer>

    </div>
  );
}