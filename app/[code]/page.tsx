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
            
            {/* Modern "Sansür" Efekti */}
            <div className="relative pt-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111111]/80 to-[#111111] z-10"></div>
              <p className="text-lg text-gray-600 font-light leading-relaxed blur-[3px] select-none">
                ama bir türlü cesaret edemediğim o hisleri şimdi bu şişeye saklıyorum. Umarım okyanus bu yükü benden alır ve sana...
              </p>
            </div>
          </div>
        </div>

        {/* 🚀 ORİJİNAL İKONLU KURUMSAL BUTONLAR */}
        <div className="w-full flex flex-col gap-4">
          
          {/* Apple App Store Butonu */}
          <button className="w-full bg-white text-black py-3.5 px-6 rounded-xl hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-4">
            {/* Orijinal Apple SVG */}
            <svg viewBox="0 0 384 512" className="w-8 h-8 fill-current">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
            </svg>
            <div className="flex flex-col items-start text-left">
              <span className="text-[11px] leading-none mb-1 font-medium text-gray-600">Download on the</span>
              <span className="text-xl leading-none font-bold tracking-tight">App Store</span>
            </div>
          </button>
          
          {/* Google Play Butonu */}
          <button className="w-full bg-[#1A1A1A] border border-[#333333] text-white py-3.5 px-6 rounded-xl hover:bg-[#222222] hover:border-gray-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-4">
            {/* Orijinal Google Play SVG */}
            <svg viewBox="0 0 512 512" className="w-7 h-7 fill-current">
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
            </svg>
            <div className="flex flex-col items-start text-left">
              <span className="text-[11px] leading-none mb-1 font-medium text-gray-400">GET IT ON</span>
              <span className="text-xl leading-none font-bold tracking-tight">Google Play</span>
            </div>
          </button>

        </div>
        
      </div>
    </div>
  );
}