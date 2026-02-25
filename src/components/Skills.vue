<template>
  <section id="skills" class="py-24 bg-dark">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16" data-aos="zoom-in">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Keahlian <span class="gradient-text">Teknis</span></h2>
        <div class="w-20 h-1 bg-primary mx-auto rounded-full"></div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        <div v-for="(skill, index) in skills" :key="index" 
            class="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center group hover:bg-gray-800 transition-all duration-300"
            data-aos="flip-left" :data-aos-delay="index * 100">
          <i :class="[skill.icon, skill.color]" class="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300"></i>
          <h3 class="font-medium text-gray-300 group-hover:text-white">{{ skill.name }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const skills = ref([
  { name: 'Vue.js', icon: 'fa-brands fa-vuejs', color: 'text-emerald-500' },
  { name: 'Docker', icon: 'fa-brands fa-docker', color: 'text-blue-500' },
  { name: 'Proxmox', icon: 'fa-solid fa-server', color: 'text-orange-500' },
  { name: 'Laravel', icon: 'fa-brands fa-laravel', color: 'text-red-500' },
  { name: 'Hardware', icon: 'fa-solid fa-memory', color: 'text-gray-400' },
  { name: 'Networking', icon: 'fa-solid fa-network-wired', color: 'text-blue-400' }
])
</script>