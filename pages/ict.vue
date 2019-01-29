<template>
  <section class="p-Ict_Container Blog">
    <div class="BlogTitle">
      <div class="BlogTitleImage">
        <img
          src="images/ict/top.png"
          srcset="images/ict/top.png 1x, images/ict/top@2x.png 2x"
          alt="About page top.png"
        >
      </div>
      <h1>ICT課題</h1>
    </div>
    <article>
      <image-card
        v-for="media in medias"
        :key="media.id"
        :src="media.src"
        :title="media.title"
        :description="media.description"
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
        src: 'images/ict/new02.jpg',
        title: '心霊写真',
        description: 'この授業での記念すべき初作品。左上にご注目。'
      },
      {
        src: 'images/ict/woman.jpg',
        title: 'オバサン美人化プロジェクト',
        description:
          '後期ICTで初めてまともに触ったPhotoshopで美しく(?)加工したのがこちらの写真。肌はどうにかごまかせてるように思うんですが，髪の分け目がなんか怪しいです。これ以上はどうにもできませんでした。勘弁してください...'
      },
      {
        src: 'images/ict/daytona02.jpg',
        title: 'デイトナ・ビーチにて',
        description:
          '思ったより馴染んでる...？少々影の加工が雑なのはご愛嬌ということで。'
      },
      {
        src: 'images/ict/cuba_capitolio.jpg',
        title: 'パラレルワールド・キューバ',
        description: '雲に色がつかないよう，着色に配慮しました。'
      },
      {
        src: 'images/ict/obispo.jpg',
        title: 'パフォーマー with us',
        description: '集大成。先生を切り抜くのにかなり苦戦しました。'
      }
    ]
  })
}
</script>
<style lang="scss">
</style>
