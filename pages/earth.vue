<template>
  <section class="p-Earth_Container Blog">
    <div class="BlogTitle">
      <h1>写真</h1>
    </div>
    <article>
      <image-card
        v-for="media in medias"
        :key="media.id"
        :src="media.src"
        :place="media.place"
      />
    </article>
  </section>
</template>
<script>
import ImageCard from '~/components/ImageCard.vue'

export default {
  components: {
    ImageCard
  },
  data: () => ({
    medias: [
      {
        src: 'images/earth/01.jpg',
        place: 'JEEP Island, State of Chuuk'
      },
      {
        src: 'images/earth/02.jpg',
        place: 'JEEP Island, State of Chuuk'
      },
      {
        src: 'images/earth/03.jpg',
        place: 'JEEP Island, State of Chuuk'
      },
      {
        src: 'images/earth/04.jpg',
        place: 'JEEP Island, State of Chuuk'
      },
      {
        src: 'images/earth/05.jpg',
        place: 'Mt. Fuji, Yamanashi'
      },
      {
        src: 'images/earth/06.jpg',
        place: 'Nikko, Tochigi'
      },
      {
        src: 'images/earth/07.jpg',
        place: 'Mt. Fuji, Yamanashi'
      },
      {
        src: 'images/earth/08.jpg',
        place: 'Ishigaki Island, Okinawa'
      },
      {
        src: 'images/earth/09.jpg',
        place: 'Saipan, CNMI'
      },
      {
        src: 'images/earth/10.jpg',
        place: 'Miyako Island, Okinawa'
      },
      {
        src: 'images/earth/11.jpg',
        place: 'Miyako Island, Okinawa'
      },
      {
        src: 'images/earth/12.jpg',
        place: 'Miyako Island, Okinawa'
      },
      {
        src: 'images/earth/13.jpg',
        place: 'Takachiho, Miyazaki'
      }
    ]
  })
}
</script>
