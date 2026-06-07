import React from 'react';

export default async function QRLandingPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const resolvedParams = await params;
  const sahilAdi = resolvedParams.code.replace(/-/g, ' ').toUpperCase();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center p-6 font-sans selection:bg-gray-800">
      
      <div className="w-full max-w-md flex flex-col items-center">
        
        {/* 🌟 MİNİMALİST BAŞLIK VE LOGO */}
        <div className="mb-12 text-center w-full">
          <img 
            src="/seanotelogo.png" 
            alt="SeaNote Logosu" 
            className="w-24 h-auto mx-auto mb-6 opacity-90" 
          />
          <h1 className="text-xs font-bold tracking-[0.3em] text-gray-400 mb-4 uppercase">
            {sahilAdi} KOORDİNATLARI
          </h1>
          <div className="w-12 h-[1px] bg-gray-800 mx-auto"></div>
        </div>

        {/* 📜 KESKİN VE TEMİZ MESAJ KARTI */}
        <div className="w-full bg-[#111111] border border-[#222222] rounded-xl p-8 mb-10 shadow-2xl relative">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-6 font-semibold">
            — İsimsiz Bir Mesaj
          </p>
          
          <div className="space-y-4">
            {/* Okunabilen Kısım */}
            <p className="text-lg text-gray-200 font-light leading-relaxed tracking-wide">
              &quot;Belki de bu mesajı tam da okuman gereken zamanda buldun. Uzun zamandır sana söylemek istediğim...&quot;
            </p>
            
            {/* Modern "Sansür" Efekti (Abartısız) */}
            <div className="relative pt-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/80 to-[#111111] z-10"></div>
              <p className="text-lg text-gray-600 font-light leading-relaxed blur-[3px] select-none">
                ama bir türlü cesaret edemediğim o hisleri şimdi bu şişeye saklıyorum. Umarım okyanus bu yükü benden alır ve sana...
              </p>
            </div>
          </div>
        </div>

        {/* 🚀 PROFESYONEL BUTONLAR */}
        <div className="w-full space-y-4">
          <button className="w-full bg-white text-black font-semibold tracking-wide py-4 rounded-lg hover:bg-gray-200 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-3 text-sm">
            <span className="text-xl"></span> App Store&apos;dan İndir
          </button>
          
          <button className="w-full bg-transparent border border-[#333333] text-gray-300 font-semibold tracking-wide py-4 rounded-lg hover:bg-[#1A1A1A] hover:text-white hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-3 text-sm">
            <span className="text-xl">▶</span> Google Play&apos;den İndir
          </button>
        </div>
        
      </div>
    </div>
  );
}