<template>
  <div>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    
    <footer class="bg-gray-900 border-t border-gray-800 py-8 text-center relative z-10">
      <p class="text-gray-500">© 2026 NAMA.</p>
    </footer>
  </div>
</template>

<script setup>
  import Navbar from './components/Navbar.vue'
  import Hero from './components/Hero.vue'
  import About from './components/About.vue'
  import Skills from './components/Skills.vue'
</script>