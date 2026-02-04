"use client";

import React, { useState, useEffect } from 'react';

export default function BumaNetwork() {
  const [serverStatus, setServerStatus] = useState<any>(null);
  const [isCopied, setIsCopied] = useState(false);
  
  // SENİN BİLGİLERİN (Pırlanta Ayarlar)
  const SERVER_IP = "oyna.bumamc.com";
  const DISCORD_URL = "https://discord.gg/WNRg4GZh";

  // Minecraft Sunucu Verisini Çek (API)
  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(`https://api.mcsrvstat.us/3/${SERVER_IP}`);
        const data = await response.json();
        setServerStatus(data);
      } catch (error) {
        console.error("Sunucu verisi alınamadı", error);
      }
    };
    fetchStatus();
    // 60 saniyede bir yenile
    const interval = setInterval(fetchStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  // IP Kopyalama İşlemi
  const copyIP = () => {
    navigator.clipboard.writeText(SERVER_IP);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-amber-500 selection:text-black scroll-smooth">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-[#050505]/90 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter text-white">
            BUMA<span className="text-amber-500">.NETWORK</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#giris" className="hover:text-amber-400 transition-colors">Ana Sayfa</a>
            <a href="#hakkimizda" className="hover:text-amber-400 transition-colors">Hakkımızda</a>
            <a href="#ozellikler" className="hover:text-amber-400 transition-colors">Özellikler</a>
            <a href="#kurallar" className="hover:text-amber-400 transition-colors">Kurallar</a>
          </div>
          <a 
            href={DISCORD_URL} 
            target="_blank" 
            className="px-5 py-2 bg-white/5 hover:bg-amber-500 hover:text-black border border-white/10 rounded-lg text-sm font-semibold transition-all duration-300"
          >
            Discord
          </a>
        </div>
      </nav>

      {/* --- HERO BÖLÜMÜ (GİRİŞ) --- */}
      <section id="giris" className="relative pt-40 pb-32 flex flex-col items-center text-center px-4 overflow-hidden">
        {/* Arka Plan Glow Efekti */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold tracking-widest uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            1.16.5 - 1.20+ SURVIVAL
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-none">
            KALİTEYİ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-600">HİSSET.</span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Para kaygısı olmayan, kaktüs farmı köleliğine karşı duran, sadece olgun oyuncular için tasarlanmış niş bir dünya.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button 
              onClick={copyIP}
              className="group relative flex items-center gap-4 bg-white/5 border border-white/10 hover:border-amber-500/50 px-8 py-4 rounded-xl transition-all w-full md:w-auto"
            >
              <div className="text-left">
                <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">Sunucu Adresi</div>
                <div className="text-xl text-white font-mono font-bold tracking-wide group-hover:text-amber-400 transition-colors">
                  {isCopied ? "KOPYALANDI!" : SERVER_IP}
                </div>
              </div>
              <svg className={`w-6 h-6 text-gray-500 group-hover:text-amber-400 transition-colors ${isCopied ? 'text-green-500' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
              </svg>
            </button>

            <a 
              href={DISCORD_URL}
              target="_blank"
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all flex items-center gap-2 shadow-lg shadow-indigo-900/20 w-full md:w-auto justify-center"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/></svg>
              Discord'a Katıl
            </a>
          </div>

          <div className="mt-8 text-sm font-medium text-gray-500 flex items-center justify-center gap-2">
            <span className={`w-2 h-2 rounded-full ${serverStatus?.online ? 'bg-green-500' : 'bg-red-500'}`}></span>
            {serverStatus?.online 
              ? `${serverStatus.players.online} Oyuncu Şu An Aktif` 
              : "Sunucu Verisi Yükleniyor..."}
          </div>
        </div>
      </section>

      {/* --- HAKKIMIZDA (Manifesto) --- */}
      <section id="hakkimizda" className="py-24 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Neden Buma Network?</h2>
          <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-light">
            <p>
              Minecraft sunucularının çoğu artık birer ticaret haneye dönüştü. <strong className="text-amber-500">Kaktüs farmları, edit eşyalar ve pay-to-win sistemleri</strong> oyunun ruhunu öldürdü. Biz buna bir dur demek için buradayız.
            </p>
            <p>
              Buma Network, <strong className="text-white">Dominion felsefesini</strong> benimseyen, paranın değil emeğin konuştuğu bir yapıdır. Burada 100 GB map kurup sunucuyu yoranlar barınamaz. Sadece oyun oynamak, sohbet etmek ve kaliteli bir toplulukta yer almak isteyen <strong className="text-white">"tatlı asosyaller"</strong> ve olgun bireyler kabul edilir.
            </p>
            <p>
              Amacımız en kalabalık sunucu olmak değil, <strong className="text-amber-500">en kaliteli</strong> kitleye sahip olmaktır.
            </p>
          </div>
        </div>
      </section>

      {/* --- ÖZELLİKLER GRID --- */}
      <section id="ozellikler" className="py-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Sunucu Standartlarımız</h2>
            <p className="text-gray-500 mt-2">Sıradan sunuculardan bizi ayıran pırlanta detaylar.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Kart 1 */}
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-all group">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Sıfır Lag, Yüksek TPS</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Matruşka sunucuların aksine, optimize edilmiş 10k dünya sınırı ve hafifletilmiş sistemler ile oyun akıcıdır.
              </p>
            </div>

            {/* Kart 2 */}
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-all group">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Adil Ekonomi</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Para ile satılan edit eşyalar yok. Ekonomi tamamen oyuncular arası ticarete ve emeğe dayalıdır.
              </p>
            </div>

            {/* Kart 3 */}
            <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-500/30 transition-all group">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Niş Topluluk</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Mental sağlık destek kanalına ihtiyaç duymayan, ne yaptığını bilen, saygılı ve olgun bir oyuncu kitlesi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- KURALLAR --- */}
      <section id="kurallar" className="py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold text-white sticky top-24">Sunucu<br />Kuralları</h2>
              <p className="text-gray-500 mt-4 text-sm">
                Buma Network'te huzuru sağlamak için katı ama adil kurallarımız vardır. İhlaller hoş görülmez.
              </p>
            </div>
            <div className="md:w-2/3 space-y-4">
              {[
                { title: "Hile ve Makro Yasak", desc: "X-Ray, KillAura, AutoClicker ve diğer tüm 3. parti yazılımlar sınırsız uzaklaştırma sebebidir." },
                { title: "Saygı Çerçevesi", desc: "Küfür, hakaret, ırkçılık veya siyasi tartışmalar kesinlikle yasaktır. Burası oyun alanıdır." },
                { title: "Grief ve Yapı İhlali", desc: "Claimli veya claimsiz, başkasının yapısına zarar vermek yasaktır. Emek hırsızlığına tahammülümüz yok." },
                { title: "Bug Kullanımı", desc: "Sunucu açıklarını kullanmak yerine yönetime bildirmek zorunludur. Bug abuse yapanlar cezalandırılır." }
              ].map((rule, index) => (
                <div key={index} className="bg-white/[0.02] border border-white/5 p-6 rounded-xl hover:bg-white/[0.04] transition-colors">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <span className="text-amber-500">#{index + 1}</span> {rule.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{rule.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 bg-[#020202] border-t border-white/5 text-center">
        <div className="mb-6">
          <span className="text-xl font-bold text-white tracking-tighter">BUMA.NETWORK</span>
        </div>
        <div className="text-gray-500 text-sm flex flex-col gap-2">
          <p>&copy; 2026 Buma Network. Tüm hakları saklıdır.</p>
          <p className="text-xs text-gray-600">Bu site Mangoohost'un pırlanta müşterisi için özel olarak tasarlanmıştır.</p>
        </div>
      </footer>

    </div>
  );
}
