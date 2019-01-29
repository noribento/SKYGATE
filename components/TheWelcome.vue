<template>
  <transition name="fade">
    <div
      ref="container"
      class="TheWelcome"
    >
      <img
        ref="bird"
        class="TheWelcome_bird"
        src="images/brand/brand_flybird.svg"
      >
      <img
        ref="skygate"
        class="TheWelcome_text"
        src="images/brand/brand_text.svg"
      >
    </div>
  </transition>
</template>
<script>
import { mapGetters, mapState, mapMutations } from 'vuex'

export default {
  data: () => ({
    showWelcome: true
  }),
  computed: mapState(['isWelcomeCompleted']),
  mounted() {
    this.$nextTick(() => {
      this.welcome()
    })
  },
  methods: {
    welcome() {
      const tl = new TimelineMax()
      tl.to(this.$refs.bird, 1, {
        opacity: 1,
        ease: Power0.easenone,
        delay: 0.5
      })
        .to(this.$refs.skygate, 0.8, {
          opacity: 1,
          y: 0,
          ease: Power3.easeOut,
          delay: 0.5
        })
        .to(this.$refs.container, 0.8, {
          transform: 'translate3d(0,-100vh,0)',
          percentY: 100,
          ease: Power1.easeInOut,
          delay: 0.5,
          onComplete: () => {
            this.setIsWelcomeCompleted()
          }
        })
    },
    ...mapMutations(['setIsWelcomeCompleted'])
  }
}
</script>

<style lang="scss" scoped>
.TheWelcome {
  z-index: 1000;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &_bird {
    fill: red;
    opacity: 0;
    width: 200px;
    margin-bottom: 50px;
  }

  &_text {
    opacity: 0;
    transform: translateY(-20px);
    width: 200px;
  }
}

@media screen and (max-width: 1024px) {
  .TheWelcome {
    &_bird {
      width: 100px;
      margin-bottom: 30px;
    }

    &_text {
      width: 120px;
    }
  }
}
</style>
