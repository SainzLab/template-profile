<template>
  <section id="about" class="py-24 bg-gray-900">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16" data-aos="fade-down">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Tentang <span class="gradient-text">Saya</span></h2>
        <div class="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </div>
      <div class="flex flex-col md:flex-row items-center gap-12">
        <div class="w-full md:w-1/2" data-aos="fade-right" data-aos-delay="200">
          <div class="bg-dark p-8 rounded-2xl border border-gray-800 shadow-xl relative overflow-hidden group">
            <div class="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <p class="text-gray-300 leading-relaxed text-lg mb-4">
              Lulusan SMA/SMK tahun 2023 dengan pengalaman profesional selama 2 tahun di bidang IT. Saya memiliki minat yang mendalam pada infrastruktur jaringan, administrasi sistem, dan pengembangan web.
            </p>
            <p class="text-gray-300 leading-relaxed text-lg">
              Di luar jam kerja, saya sangat antusias mengeksplorasi dan mengelola <i>Home Lab</i> menggunakan teknologi seperti Proxmox, Docker, dan OpenMediaVault.
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 grid grid-cols-2 gap-6" data-aos="fade-left" data-aos-delay="400">
          <div class="bg-dark p-6 rounded-xl border border-gray-800 text-center hover:border-primary transition-colors duration-300 hover:-translate-y-2">
            <i class="fas fa-network-wired text-4xl text-primary mb-4"></i>
            <h3 class="font-bold text-lg mb-2">Networking</h3>
            <p class="text-gray-400 text-sm">MikroTik, pfSense, VLAN, LAG</p>
          </div>
          <div class="bg-dark p-6 rounded-xl border border-gray-800 text-center hover:border-primary transition-colors duration-300 hover:-translate-y-2">
            <i class="fas fa-server text-4xl text-purple-500 mb-4"></i>
            <h3 class="font-bold text-lg mb-2">SysAdmin</h3>
            <p class="text-gray-400 text-sm">Proxmox, Linux, Docker</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>