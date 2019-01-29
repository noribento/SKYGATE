<template>
  <div
    ref="container"
    class="p-Index_Container"
  >
    <the-welcome v-if="!isWelcomeCompleted"/>
    <transition>
      <section class="p-Index_ContainerVideo">
        <video
          ref="video"
          autoplay
          playsinline
          muted
          loop
          preload="auto"
        >
          <source
            src="videos/index/bg.webm"
            type="video/webm"
          >
          <source
            src="videos/index/bg.mp4"
            type="video/mp4"
          >
        </video>
        <div class="p-Index_ContainerVideoCaption">
          <div class="p-Index_ContainerVideoCaptionLeft">
            <h1 class="p-Index_ContainerVideoCaptionLeftTitle">A<br>Beautiful<br>Planet<br>Earth.</h1>
          </div>
          <div class="p-Index_ContainerVideoCaptionRight">
            <p class="p-Index_ContainerVideoCaptionRightDescription">ようこそ、noribentoのWebサイト"SKYGATE"へ。</p>
            <p class="p-Index_ContainerVideoCaptionRightDescription">当サイトでは"A Beautiful Planet Earth."をテーマに、</p>
            <p class="p-Index_ContainerVideoCaptionRightDescription">私が各地で撮影した写真を紹介します。</p>
            <p class="p-Index_ContainerVideoCaptionRightDescription">ICT関連の課題は"Works"をご覧ください。</p>
          </div>
        </div>
      </section>
    </transition>
  </div>
</template>

<script>
import TheWelcome from '~/components/TheWelcome.vue'
import { mapGetters, mapState, mapMutations } from 'vuex'

export default {
  components: {
    TheWelcome
  },
  data: () => ({}),
  computed: {
    ...mapState(['visited', 'isWelcomeCompleted'])
  },
  watch: {
    isWelcomeCompleted: function() {
      this.$refs.video.play()
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.onload = function() {
        console.log('Done!')
      }
      if (this.visited === false) {
        this.$refs.video.pause()
        this.$refs.video.currentTime = 0
        this.welcome()
        this.setVisitedState()
      } else if (this.visited === true) {
        TweenMax.to(this.$refs.container, 0.5, {
          opacity: 1,
          ease: Power0.easenone
        })
      }
    })
  },
  methods: {
    welcome() {
      TweenMax.to(this.$refs.container, 0, {
        opacity: 1,
        ease: Power0.easenone
      })
    },
    ...mapMutations(['setVisitedState'])
  }
}
</script>

<style lang="scss" scoped>
.p-Index {
  &_Container {
    position: relative;
    opacity: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    &Video {
      height: 100%;

      video {
        z-index: -1;
        overflow: hidden;
        min-width: 100%;
        min-height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }

      &Caption {
        margin: 70px auto auto auto;
        width: 90%;
        height: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        z-index: 1000;
        &Left {
          &Title {
            font-family: 'Josefin Sans', sans-serif;
            font-weight: 700;
            font-size: 100px;
            text-align: left;
            color: #ffffff;
            text-shadow: 0 3px 6px rgba(3, 27, 78, 0.2);
          }
        }
        &Right {
          &Description {
            font-family: 'Noto Sans JP', sans-serif;
            font-size: 18px;
            font-weight: 700;
            line-height: 2;
            text-align: right;
            color: #ffffff;
            text-shadow: 0 3px 6px rgba(3, 27, 78, 0.2);
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .p-Index {
    &_Container {
      &Video {
        &Caption {
          margin-top: 50px;
          flex-flow: column nowrap;
          justify-content: flex-start;
          align-items: baseline;
          &Left {
            &Title {
              margin: 50px auto;
              font-size: calc(10vmin + 10px);
            }
          }
          &Right {
            &Description {
              font-size: 14px;
              line-height: 2;
              text-align: left;
            }
          }
        }
      }
    }
  }
}
</style>
