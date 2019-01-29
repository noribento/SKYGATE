<template>
  <section class="p-Copyright_Container Blog">
    <div class="BlogTitle">
      <div class="BlogTitleImage">
        <img
          src="images/copyright/top.png"
          srcset="images/copyright/top.png 1x, images/copyright/top@2x.png 2x"
          alt="About page top.png"
        >
      </div>
      <h1>著作権</h1>
    </div>
    <article>
      <p>当サイトで使用している写真や動画等の各種メディア，ホームページのビルドに利用したソフトウェア等のライセンスをまとめます。</p>
      <p>以下「コンテンツ」とは，写真と動画，及び文章を指します。</p>
      <p>以下「当サイト」とは，noribentoが管理するWebサイト"SKYGATE"(http://www.kisc.meiji.ac.jp/~ec180797/)を指します。</p>
      <p>以下「作者」とは，当サイトの作者noribentoを指します。</p>
      <h2>作者noribentoが権利を保有するコンテンツ</h2>
      <p>以下に記載するコンテンツは，作者noribentoが全ての権利を所有しています。</p>
      <p>複製，再頒布を禁止します。</p>
      <image-card
        v-for="amedia in amedias"
        :key="amedia.id"
        :src="amedia.src"
        :place="amedia.place"
        :link="amedia.link"
      />
      <h2>ライセンサーより許諾を受け掲載しているコンテンツ</h2>
      <p>以下に記載するコンテンツは，作者noribentoがライセンサー(実施許諾者)より個別に許諾を受け，ライセンス契約の範囲内で使用しています(Copyright)。</p>
      <image-card
        v-for="bmedia in bmedias"
        :key="bmedia.id"
        :src="bmedia.src"
        :place="bmedia.place"
        :link="bmedia.link"
      />
      <p>ライセンス: <a href="https://www.adobe.com/go/stockterms_jp">Adobe Stock Standard License</a></p>
      <h2>OSLによりコピーレフトな使用が可能なソフトウェア</h2>
      <p>以下に記載するソフトウェアは，OSL(Open Source License)によりライセンスの範囲内で自由に使用が認められています(Copyleft)。</p>
      <p>OSLには"MIT License"や"Apache License"等が含まれます。</p>
      <p>当サイトの構築に使用したソフトウェアのライセンス情報全文は以下を参照してください。</p>
      <a href="SKYGATE_LICENSES.txt">SKYGATE_LICENSE.txt (794KB)</a>
      <h2>権利が発生しないコンテンツ(パブリックドメイン)</h2>
      <p>当サイト上の文章は全てパブリックドメインで提供されます。</p>
      <h2>当サイトにリンクを設定される場合</h2>
      <p>当サイトはWebサイトの仕様上，どのページにリンクしてもトップページにリダイレクトされます。ご注意ください。</p>
      <p>当サイトはリンクフリーです。</p>
      <p>当サイトをiframe等で内包する形でリンクを設定することはおやめください。</p>
      <p>営利，非営利を問わず，公序良俗に反するホームページなど作者が適当でないと判断したホームページからのリンクはお断り又は解除のお願いをする場合があります。</p>
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
    amedias: [
      {
        src: 'images/ict/new02.jpg',
        place: '/ict',
        link: '/ict'
      },
      {
        src: 'images/ict/woman.jpg',
        place: '/ict',
        link: '/ict'
      },
      {
        src: 'images/ict/daytona02.jpg',
        place: '/ict',
        link: '/ict'
      },
      {
        src: 'images/ict/obispo.jpg',
        place: '/ict',
        link: '/ict'
      },
      {
        src: 'images/earth/01.jpg',
        place: '/earth',
        link: '/earth'
      },
      {
        src: 'images/earth/02.jpg',
        place: '/earth',
        link: '/earth'
      },
      {
        src: 'images/earth/03.jpg',
        place: '/earth',
        link: '/earth'
      },
      {
        src: 'images/earth/04.jpg',
        place: '/earth',
        link: '/earth'
      },
      {
        src: 'images/earth/05.jpg',
        place: '/earth',
        link: '/earth'
      },
      {
        src: 'images/earth/06.jpg',
        place: '/earth',
        link: '/earth'
      },
      {
        src: 'images/earth/07.jpg',
        place: '/earth',
        link: '/earth'
      },
      {
        src: 'images/earth/08.jpg',
        place: '/earth',
        link: '/earth'
      },
      {
        src: 'images/earth/09.jpg',
        place: '/earth',
        link: '/earth'
      },
      {
        src: 'images/earth/10.jpg',
        place: '/earth',
        link: '/earth'
      },
      {
        src: 'images/earth/11.jpg',
        place: '/earth',
        link: '/earth'
      },
      {
        src: 'images/earth/12.jpg',
        place: '/earth',
        link: '/earth'
      },
      {
        src: 'images/earth/13.jpg',
        place: '/earth',
        link: '/earth'
      }
    ],
    bmedias: [
      {
        src: 'images/about/top@2x.png',
        place: '/about',
        link: '/about'
      },
      {
        src: 'images/copyright/top@2x.png',
        place: '/copyright',
        link: '/copyright'
      },
      {
        src: 'images/ict/top@2x.png',
        place: '/ict',
        link: '/ict'
      },
      {
        src: 'images/brand/brand_flybird.svg',
        place: 'トップメニュー'
      }
    ]
  })
}
</script>
