<template>
  <nav
    class="navbar is-success"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <a
          class="navbar-item is-size-4 is-family-monospace"
          @click="$router.push('/')"
        >
          Noteballs
        </a>

        <a
          @click.prevent="showMobileNav = !showMobileNav"
          :class="{ 'is-active': showMobileNav }"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          ref="navbarBurgerRef"
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
        <div class="navbar-start">
          <RouterLink
            @click="showMobileNav = false"
            to="/"
            class="navbar-item"
            active-class="is-active"
          >
            Notes
          </RouterLink>

          <RouterLink
            @click="showMobileNav = false"
            to="/stats"
            class="navbar-item"
            active-class="is-active"
          >
            Stats
          </RouterLink>
        </div>

        <div class="navbar-end">
          <button
            @click="authStore.logoutUser()"
            class="button is-small is-info mt-3"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()
const showMobileNav = ref(false)
const navbarMenuRef = ref(null)
const navbarBurgerRef = ref(null)

onClickOutside(navbarMenuRef, () => {
  showMobileNav.value = false;
}, { ignore: [navbarBurgerRef] })
</script>

<style scoped>
.container {
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }

  .container {
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }
}
</style>