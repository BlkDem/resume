<template>
  <div class="container-center">
    <div class="theme-switch-card">
      <input
        @change="toggleTheme"
        id="checkbox"
        type="checkbox"
        class="switch-checkbox"
      />
      <label for="checkbox" class="switch-label">
        <span v-show="userTheme !== 'dark-theme'">🌙</span>
        <span v-show="userTheme === 'dark-theme'">☀️</span>
        <div
          class="switch-toggle"
          :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
        ></div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPreference();
    this.setTheme(initUserTheme);
  },

  data() {
    return {
      userTheme: "light-theme",
    };
  },

  methods: {
    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },

    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },

    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (hasDarkPreference) {
        return "dark-theme";
      } else {
        return "light-theme";
      }
    },

    getTheme() {
      return localStorage.getItem("user-theme");
    },
  }
};
</script>

<style>

.switch-checkbox {
  display: none;
}

.switch-label {
  /* for width, use the standard element-size */
  /* width: 4rem;  */

  /* for other dimensions, calculate values based on it */
  border-radius: var(--element-size);
  border: calc(var(--element-size) * 0.025) solid var(--accent-color);
  padding: calc(var(--element-size) * 0.1);
  font-size: calc(var(--element-size) * 0.3);
  height: calc(var(--element-size) * 0.35);

  align-items: center;
  cursor: pointer;
  display: flex;
  margin-top: -240px;
  position: absolute;
  transition: background 0.5s ease;
  justify-content: space-between;
  z-index: 1;
} 

.switch-toggle-checked {
  transform: translateX(calc(var(--element-size) * 0.6)) !important;
}

</style>
