import React from 'react';

export default async function QRLandingPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const resolvedParams = await params;
  const sahilAdi = resolvedParams.code.replace(/-/g, ' ').toUpperCase();

  return (
    // Derinlik hissi veren yeni radyal arka plan
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900 via-blue-950 to-gray-950 flex flex-col items-center justify-center p-6 font-sans overflow-hidden relative">
      
      {/* Arkadan vuran dekoratif ışık huzmesi */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none"></div>

      {/* 🌟 BAŞLIK KISMI */}
      <div className="text-center mb-10 z-10">
        <span className="text-5xl mb-6 block drop-shadow-2xl">🌊🍾</span>
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-100 tracking-wider">
          {sahilAdi} SULARINDAN
        </h1>
        <p className="text-cyan-100/60 mt-3 text-sm font-medium tracking-wider uppercase">Dalgalar isimsiz bir mesaj getirdi</p>
      </div>

      {/* 📜 GİZEMLİ MESAJ KARTI (PREMIUM GLASSMORPHISM) */}
      <div className="z-10 w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] relative overflow-hidden group">
        
        {/* Kart içi ince ışık yansıması */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none"></div>

        <div className="flex items-center gap-3 mb-6 relative">
           <div className="h-[1px] w-8 bg-cyan-400/50"></div>
           <p className="text-cyan-200/80 italic text-sm font-light">Birileri şöyle yazmış</p>
        </div>
        
        <div className="relative">
          {/* Okunabilen İlk Cümle */}
          <p className="text-xl font-medium text-white/95 leading-relaxed tracking-wide">
            &quot;Belki de bu mesajı tam da okuman gereken zamanda buldun. Uzun zamandır sana söylemek istediğim...&quot;
          </p>
          
          {/* Sansürlü (Buzlu) Kısım */}
          <div className="relative mt-2">
            <p className="text-xl font-medium text-white/40 leading-relaxed blur-[6px] select-none transition-all duration-700 group-hover:blur-[8px]">
              ama bir türlü cesaret edemediğim o hisleri şimdi bu şişeye saklıyorum. Umarım okyanus bu yükü benden alır ve sana ulaştırır.
            </p>
            {/* Okumayı engelleyen degrade katman */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#021227]/60 via-[#021227]/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* 🚀 İNDİRME BUTONLARI */}
      <div className="mt-12 text-center w-full max-w-md z-10">
        <p className="text-cyan-100/70 font-medium mb-6 text-sm">Mesajın devamını okumak için şişeyi kır!</p>
        
        <div className="flex flex-col gap-4">
          <button className="bg-white/95 text-blue-950 font-bold py-4 px-6 rounded-2xl shadow-xl hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 text-lg border border-white/40">
            <span className="text-2xl">🍎</span> 
            <span>App Store&apos;dan İndir</span>
          </button>
          
          <button className="bg-cyan-600/80 backdrop-blur-md text-white border border-cyan-400/30 font-bold py-4 px-6 rounded-2xl shadow-xl hover:bg-cyan-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 text-lg">
            <span className="text-2xl">🤖</span> 
            <span>Google Play&apos;den İndir</span>
          </button>
        </div>
      </div>

    </div>
  );
}