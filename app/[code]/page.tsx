import React from 'react';

export default async function QRLandingPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  // Yeni Next.js sürümlerinde params asenkron bir yapıdır, bu yüzden await ile çözümlüyoruz.
  const resolvedParams = await params;
  
  // URL'den gelen kodu temizleyip sahil adına çeviriyoruz (örn: erdemli-sahili -> ERDEMLI SAHILI)
  const sahilAdi = resolvedParams.code.replace(/-/g, ' ').toUpperCase();

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-900 to-blue-950 flex flex-col items-center justify-center p-6 font-sans">
      
      {/* 🌟 BAŞLIK KISMI */}
      <div className="text-center mb-8 animate-fade-in-down">
        <span className="text-6xl mb-4 block">🌊🍾</span>
        <h1 className="text-2xl font-bold text-white tracking-wide">
          <span className="text-cyan-400">{sahilAdi}</span> SULARINDAN
        </h1>
        <p className="text-gray-300 mt-2 text-sm">Dalgalar sana isimsiz bir mesaj getirdi...</p>
      </div>

      {/* 📜 GİZEMLİ MESAJ KARTI (BLUR EFEKTİ BURADA) */}
      <div className="bg-[#fdfbf7] w-full max-w-md rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        
        {/* Kağıt dokusu efekti için ufak bir süs */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 to-blue-500"></div>

        <p className="text-gray-500 italic text-sm mb-4">Birileri şöyle yazmış:</p>
        
        <div className="relative">
          {/* Okunabilen İlk Cümle */}
          <p className="text-xl font-medium text-gray-800 leading-relaxed">
            &quot;Belki de bu mesajı tam da okuman gereken zamanda buldun. Uzun zamandır sana söylemek istediğim...&quot;
          </p>
          
          {/* Sansürlü (Buzlu) Kısım */}
          <p className="text-xl font-medium text-gray-800 leading-relaxed blur-md opacity-70 mt-2 select-none">
            ama bir türlü cesaret edemediğim o hisleri şimdi bu şişeye saklıyorum. Umarım okyanus bu yükü benden alır ve sana...
          </p>
          
          {/* Gradyan Örtü (Buzlanmayı daha dramatik yapar) */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#fdfbf7] to-transparent"></div>
        </div>
      </div>

      {/* 🚀 İNDİRME BUTONLARI (CALL TO ACTION) */}
      <div className="mt-12 text-center w-full max-w-md">
        <p className="text-white font-medium mb-6">Mesajın devamını okumak ve kendi şişeni fırlatmak için şişeyi kır!</p>
        
        <div className="flex flex-col gap-4">
          <button className="bg-white text-blue-900 font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-gray-100 transition-all flex items-center justify-center gap-2 text-lg">
            <span>🍎</span> App Store&apos;dan İndir
          </button>
          
          <button className="bg-cyan-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:bg-cyan-500 transition-all flex items-center justify-center gap-2 text-lg">
            <span>🤖</span> Google Play&apos;den İndir
          </button>
        </div>
      </div>

    </div>
  );
}