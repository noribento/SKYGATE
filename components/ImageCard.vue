<template>
  <div :class="$style.container">
    <div :class="$style.inner">
      <div
        v-if="title"
        :class="$style.title"
      >
        {{ title }}
      </div>
      <div
        v-if="place"
        :class="$style.place"
      >
        <i class="fas fa-map-marker-alt"/>
        {{ place }}
      </div>
    </div>
    <nuxt-link :to="link">
      <img
        :src="src"
        :alt="alt"
        :width="width"
      >
    </nuxt-link>
    <div
      v-if="description"
      :class="$style.description"
    >
      {{ description }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
      default: 'images/image_404.svg'
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    description: {
      type: String,
      required: false,
      default: ''
    },
    place: {
      type: String,
      required: false,
      default: ''
    },
    alt: {
      type: String,
      required: false,
      default: ''
    },
    link: {
      type: String,
      required: false,
      default: '#'
    }
  }
}
</script>

<style lang="scss" module>
.container {
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ebebec;
  margin: 20px auto;
  transition: all 0.3s;

  .inner {
    margin: 20px 10px;

    .title {
      margin-bottom: 10px;
      font-size: 26px;
      font-family: 'Noto Sans JP', sans-serif;
      font-weight: 700;
    }

    .place {
      color: #73767a;
      font-family: 'Josefin Sans', 'Noto Sans JP', sans-serif;
      font-weight: 400;
    }
  }

  img {
    width: 100%;
    display: block;
    border-radius: 0px 0px 5px 5px;
  }

  &:hover {
    box-shadow: 0 10px 30px rgba(3, 27, 78, 0.3);
  }

  .description {
    line-height: 1.5;
    margin: 20px 10px;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 400;
  }
}

@media screen and (max-width: 1024px) {
  .container {
    margin-bottom: 30px;

    .inner {
      margin: 16px 6px;
      .title {
        margin-bottom: 10px;
        font-size: 20px;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 700;
      }

      .place {
        color: #73767a;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 14px;
        font-weight: 400;
      }
    }

    &:hover {
      box-shadow: 0 10px 30px rgba(3, 27, 78, 0.3);
    }

    .description {
      margin: 10px 6px;
      font-size: 14px;
    }
  }
}
</style>
