<template>
  <transition name="fade">
    <div
      v-if="loading"
      class="TheLoading"
    >
      <img
        class="TheLoading_logo"
        src="images/brand/brand_white.svg"
      >
      <img
        class="TheLoading_spinner"
        src="images/spinner.svg"
      >
    </div>
  </transition>
</template>
<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.TheLoading {
  z-index: 10000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #383c41;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &_logo {
    width: 280px;
  }

  &_spinner {
    margin-top: 20px;
    width: 50px;
  }
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  animation: fadein 0.3s;
}
.fade-leave-active {
  animation: fadeout 0.3s;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeout {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@media screen and (max-width: 1024px) {
  .TheLoading {
    &_logo {
      width: 200px;
    }
  }

  &_spinner {
    margin-top: 14px;
    width: 40px;
  }
}
</style>
