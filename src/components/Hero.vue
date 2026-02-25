<template>
  <section id="home" class="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
    
    <div class="container mx-auto px-6 text-center z-10" data-aos="fade-up" data-aos-duration="1500">
      <img src="https://ui-avatars.com/api/?name=Ga+Ru&background=3b82f6&color=fff&size=150" alt="Profile" class="rounded-full mx-auto mb-8 border-4 border-primary shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 transition-transform duration-500">
      <h1 class="text-5xl md:text-7xl font-bold mb-4">Halo, Saya <span class="gradient-text">NAMA</span></h1>
      <p class="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">IT Professional | System Administrator | Home Lab Enthusiast</p>
      
      <div class="flex flex-wrap justify-center gap-4">
        <a href="#about" class="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:-translate-y-1">
          Mulai Scroll
        </a>
        <a href="mailto:emailkamu@example.com" class="border border-gray-600 hover:border-primary text-gray-300 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 bg-gray-900/50 backdrop-blur-sm flex items-center gap-2">
          <i class="fa-regular fa-envelope"></i> Kontak Saya
        </a>
      </div>

      <div class="flex justify-center gap-5 mt-8">
        <a href="mailto:emailkamu@example.com" target="_blank" class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 border border-gray-700 hover:bg-red-500 hover:border-red-500 text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(239,68,68,0.5)] text-xl" title="Kirim Email">
          <i class="fa-solid fa-envelope"></i>
        </a>
        
        <a href="https://github.com/username-github-kamu" target="_blank" class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 border border-gray-700 hover:bg-white hover:border-white text-gray-400 hover:text-gray-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] text-xl" title="GitHub Zli">
          <i class="fa-brands fa-github"></i>
        </a>
        
        <a href="https://discordapp.com/users/ID_DISCORD_KAMU" target="_blank" class="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 border border-gray-700 hover:bg-[#5865F2] hover:border-[#5865F2] text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(88,101,242,0.5)] text-xl" title="Discord">
          <i class="fa-brands fa-discord"></i>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
</script>