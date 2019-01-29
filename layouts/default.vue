<template>
  <div class="container">
    <transition name="slidey">
      <the-menu v-if="isWelcomeCompleted"/>
    </transition>
    <transition name="slidey">
      <nuxt/>
    </transition>
  </div>
</template>
<script>
import TheMenu from '~/components/TheMenu.vue'
import { mapGetters, mapState, mapMutations } from 'vuex'

export default {
  components: {
    TheMenu
  },
  computed: mapState(['isWelcomeCompleted']),
  middleware: 'redirect'
}
</script>

<style lang="scss">
html {
  font-family: 'Noto Sans JP', sans-serif;
  color: #383c41;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  position: relative;
  width: 100vw;
  height: 100vh;
}

a {
  color: #0069ff;
  text-decoration: none;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

hr {
  height: 0;
  margin: 0;
  padding: 0;
  border: 0;
}

/* アニメーション */
.slidex-enter {
  opacity: 0;
  transform: translateX(-10px);
}

.slidex-enter-to,
.slidex-leave {
  opacity: 1;
  transform: translateX(0);
}

.slidex-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

.slidey-enter {
  opacity: 0;
  transform: translateY(-10px);
}

.slidey-enter-to,
.slidey-leave {
  opacity: 1;
  transform: translateY(0);
}

.slidey-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.slidex-enter-active,
.slidex-leave-active,
.slidey-enter-active,
.slidey-leave-active,
.scale-enter-active,
.scale-leave-active {
  transition: all 0.4s cubic-bezier(0.77, 0, 0.175, 1);
}

.scale-enter-to,
.scale-leave {
  transform: scale(1);
}

.scale-enter,
.scale-leave-to {
  opacity: 0;
  transform: scale(0);
}

.container {
  position: relative;
}

.Blog {
  max-width: 700px;
  margin: 0 auto;
  padding-top: 70px;

  &Title {
    &Image {
      width: 100%;
      height: 200px;
      margin: 50px auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    h1 {
      text-align: center;
      font-family: 'Noto Sans JP', sans-serif;
      font-size: 28px;
      font-weight: 700;
      color: #383c41;
      margin: 40px auto;
    }
  }
  article {
    h2,
    h3 {
      font-family: 'Noto Sans JP', sans-serif;
      font-weight: 700;
      color: #383c41;
    }

    h2 {
      font-size: 24px;
      margin: 60px auto 30px auto;
    }

    h3 {
      margin: 34px auto 8px auto;
    }

    p {
      margin-bottom: 20px;
      font-size: 16px;
      font-family: 'Noto Sans JP', sans-serif;
      font-weight: 400;
      line-height: 2;
      color: #383c41;
    }

    li {
      margin: 4px auto;
    }

    hr {
      margin: 40px 0;
      border-top: 1px solid #73767a;
    }

    .Image {
      width: 100%;
      border-radius: 5px;
      border: 1px solid #ebebec;
      transition: all 0.3s;

      &Inner {
        margin: 20px 10px;
        &Title {
          margin-bottom: 10px;
          font-size: 26px;
          font-family: 'Noto Sans bold', sans-serif;
        }

        &Place {
          color: #73767a;
          font-family: 'Josefin Sans regular', sans-serif;
        }
      }

      img,
      video {
        width: 100%;
        display: block;
        border-radius: 0px 0px 5px 5px;
      }

      &:hover {
        box-shadow: 0 10px 30px rgba(3, 27, 78, 0.3);
      }
      &Caption {
        margin: 20px 10px;
      }
    }
    .Image + .Image {
      margin: 40px auto;
    }
  }
}

@media screen and (max-width: 1024px) {
  .container {
    position: relative;
  }

  .Blog {
    padding: 0 10px;
    padding-top: 50px;

    &Title {
      &Image {
        width: 100%;
        height: 160px;
        margin: 30px auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      h1 {
        text-align: center;
        font-family: 'Noto Sans JP', sans-serif;
        font-size: 24px;
        font-weight: 700;
        color: #383c41;
        margin: 30px auto;
      }
    }
    article {
      h2,
      h3 {
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 700;
        color: #383c41;
      }

      h2 {
        font-size: 20px;
        margin: 60px auto 30px auto;
      }

      h3 {
        margin: 30px auto 8px auto;
      }

      p {
        margin-bottom: 20px;
        font-size: 14px;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 400;
        line-height: 1.5;
        color: #383c41;
      }

      hr {
        margin: 40px 0;
        border-top: 1px solid #73767a;
      }

      .Image {
        width: 100%;
        border-radius: 5px;
        border: 1px solid #ebebec;
        transition: all 0.3s;

        &Inner {
          margin: 20px 10px;
          &Title {
            margin-bottom: 10px;
            font-size: 26px;
            font-family: 'Noto Sans bold', sans-serif;
          }

          &Place {
            color: #73767a;
            font-family: 'Josefin Sans regular', sans-serif;
          }
        }

        img,
        video {
          width: 100%;
          display: block;
          border-radius: 0px 0px 5px 5px;
        }

        &:hover {
          box-shadow: 0 10px 30px rgba(3, 27, 78, 0.3);
        }
        &Caption {
          margin: 20px 10px;
        }
      }
      .Image + .Image {
        margin: 40px auto;
      }
    }
  }
}
</style>
