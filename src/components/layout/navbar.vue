<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">Notecubes</div>

        <a
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': showMobileNav }"
          ref="navbarBurgerRef"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click.prevent="showMobileNav = !showMobileNav"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': showMobileNav }"
        ref="navbarMenuRef"
      >
        <div class="navbar-end">
          <router-link
            class="navbar-item"
            active-class="is-active"
            to="/"
            @click="showMobileNav = false"
          >
            Notes
          </router-link>
          <router-link
            class="navbar-item"
            active-class="is-active"
            to="/stats"
            @click="showMobileNav = false"
          >
            Stats
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
// Imports
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

// Refs
const showMobileNav = ref(false)
const navbarMenuRef = ref(null)
const navbarBurgerRef = ref(null)

// Mobile nav
onClickOutside(navbarMenuRef, () => (showMobileNav.value = false), { ignore: [navbarBurgerRef] })
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    width: 100%;
    left: 0;
  }
}
</style>
