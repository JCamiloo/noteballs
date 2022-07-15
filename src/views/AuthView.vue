<template>
  <div class="auth">
    <div class="tabs is-centered">
      <ul>
        <li :class="{ 'is-active': !showRegisterTab }">
          <a @click.prevent="showRegisterTab = false">
            Login
          </a>
        </li>
        <li :class="{ 'is-active': showRegisterTab }">
          <a @click.prevent="showRegisterTab = true">
            Register
          </a>
        </li>
      </ul>
    </div>

    <div class="card auth-form">
      <div class="card-content">
        <div class="title has-text-centered">
          {{ formTitle }}
        </div>

        <form @submit.prevent="onSubmit">
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                v-model="credentials.email"
                class="input"
                type="email"
                placeholder="e.g. alexsmith15@gmail.com"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                v-model="credentials.password"
                class="input"
                type="password"
                placeholder="Enter a password"
              />
            </div>
          </div>

          <div class="field is-grouped is-grouped-right">
            <p class="control">
              <button class="button is-primary">
                {{ formTitle }}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, reactive } from 'vue';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore()
const showRegisterTab = ref(false)

const formTitle = computed(() => {
  return showRegisterTab.value ? 'Register' : 'Login'
})

const credentials = reactive({
  email: '',
  password: ''
})

const onSubmit = () => {
  if (!credentials.email || !credentials.password) {
    alert('Please enter an email and password')
    return
  }

  if (showRegisterTab.value) {
    authStore.registerUser(credentials);
    return;
  }

  authStore.loginUser(credentials)
}
</script>

<style>
.auth-form {
  max-width: 400px;
  margin: 0 auto;
}
</style>