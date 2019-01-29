<template>
  <header class="c-TheMenu_Wrapper">
    <div class="c-TheMenu_WrapperInner">
      <div class="c-TheMenu_WrapperInnerLogo">
        <nuxt-link to="/">
          <img src="images/brand/brand_color.svg">
        </nuxt-link>
      </div>
      <div
        class="c-TheMenu_WrapperInnerToggle"
        @click="toggleMenuOpen"
      >
        <transition name="slidex">
          <i
            v-show="!menuOpen"
            class="fas fa-bars"
          />
        </transition>
        <transition name="slidex">
          <i
            v-show="menuOpen"
            class="fas fa-times"
          />
        </transition>
      </div>
      <ul class="c-TheMenu_WrapperInnerLink">
        <li><nuxt-link to="/about">自己紹介</nuxt-link></li>
        <li><nuxt-link to="/ict">ICT課題</nuxt-link></li>
        <li><nuxt-link to="/earth">写真</nuxt-link></li>
        <li><nuxt-link to="/copyright">著作権</nuxt-link></li>
        <li>
          <a
            href="http://www.aoni.waseda.jp/akiokada/"
            target="_blank"
          >
            akiokada先生のページ
            <i class="fas fa-external-link-alt"/>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/noribento/skygate"
            target="_blank"
          >
            ソースコード
            <i class="fas fa-external-link-alt"/>
          </a>
        </li>
      </ul>
    </div>
    <transition name="scale">
      <div
        v-show="menuOpen"
        class="c-TheMenu_WrapperDropdown"
      >
        <ul>
          <li><nuxt-link to="/about">自己紹介</nuxt-link></li>
          <li><nuxt-link to="/ict">ICT課題</nuxt-link></li>
          <li><nuxt-link to="/earth">写真</nuxt-link></li>
          <li><nuxt-link to="/copyright">著作権</nuxt-link></li>
          <li>
            <a
              href="http://www.aoni.waseda.jp/akiokada/"
              target="_blank"
            >
              akiokada先生のページ
              <i class="fas fa-external-link-alt"/>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/noribento/skygate"
              target="_blank"
            >
              ソースコード
              <i class="fas fa-external-link-alt"/>
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>
<script>
export default {
  data: () => ({
    menuOpen: false
  }),
  methods: {
    toggleMenuOpen: function() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>
<style lang="scss" scoped>
a:link {
  color: #383c41;
}
a:visited {
  color: #383c41;
}
a:hover {
  color: #73767a;
}

.c-TheMenu {
  &_Wrapper {
    z-index: 3000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    box-shadow: 0 3px 6px rgba(3, 27, 78, 0.2);

    &Inner {
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      height: 100%;
      margin: 0 auto;

      &Logo {
        height: 70%;

        img {
          height: 100%;
        }
      }

      &Toggle {
        display: none;
      }

      &Link {
        display: flex;
        flex-flow: row nowrap;
        list-style-type: none;
        align-items: center;
        height: 70%;

        li {
          font-family: 'Noto Sans JP';
          font-weight: 700;
          color: #383c41;
          padding: 6px 14px;
        }
      }
    }

    &Dropdown {
      display: none;
    }
  }
}

@media screen and (max-width: 1024px) {
  .c-TheMenu {
    &_Wrapper {
      height: 50px;

      &Inner {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;

        &Toggle {
          display: block;
          position: relative;
          width: 20px;
          height: 18px;

          i {
            position: absolute;
            font-size: 18px;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            text-align: center;
            vertical-align: middle;
          }
        }

        &Link {
          display: none;

          li {
            color: #383c41;
            padding: 6px 20px;
          }
        }
      }

      &Dropdown {
        display: block;
        position: absolute;
        border-radius: 4px;
        top: 60px;
        left: 8px;
        right: 8px;
        margin: 0 auto;
        background-color: #ffffff;
        box-shadow: 0 3px 6px rgba(3, 27, 78, 0.2);
        z-index: 10;
        transform-origin: right top 0px;

        li {
          font-family: 'Noto Sans JP', sans-serif;
          font-weight: 700;
          margin: 20px auto;
          list-style: none;
        }
      }
    }
  }
}
</style>
