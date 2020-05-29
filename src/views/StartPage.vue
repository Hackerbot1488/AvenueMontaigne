<template>
  <div>
    <div class="wrap-loader" v-if="loading">
      <Loader  />
    </div>
    <div class="wrap-start-page" v-else>
      <div class="notifications">
        <span>Здесь могла быть ваша реклама</span>
      </div>
      <div class="start-page">
        <div class="wrap-figure-image">
          <FigureImage />
        </div>
        <div class="wrap-content-links">
          <StartPageLinks :links="actualLinks"  />
        </div>
        <div class="wrap-now-trands">
          <h2 class="content-header">Сейчас в тренде</h2>
          <NowTrands :trands="trands" />
        </div>
        <div class="wrap-recomend">
          <h2 class="сontent-header" style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif; font-size:24px;">Рекомендованное</h2>
          <Recomendations />
        </div>
        <div class="wrap-moreMyRoom">
          <h2 class="content-header">Еще больше стиля</h2>
          <MoreMyRoom />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FigureImage from '@/components/app/main/StartPage-components/FigureImage'
import StartPageLinks from '@/components/app/main/StartPage-components/StartPageLinks'
import NowTrands from '@/components/app/main/StartPage-components/NowTrands'
import Recomendations from '@/components/app/main/StartPage-components/Recomendations'
import MoreMyRoom from '@/components/app/main/StartPage-components/MoreMyRoom'
export default {
  name: 'startpage',
  metaInfo: {
    title: 'Avenue Montaigne'
  },
  data () {
    return {
      trands: [],
      actualLinks: [],
      trandData: [
        {
          category: 'shoes',
          type: 'snickers',
          brand: 'jordan',
          gender: 'female',
          id: 'jptm720'
        },
        {
          category: 'clothes',
          type: 'pants',
          brand: 'wrangler',
          gender: 'male',
          id: 'wrnglr0'
        },
        {
          category: 'shoes',
          type: 'snickers',
          brand: 'converse',
          gender: 'male',
          id: 'snkcnvs0'
        }
      ],
      actualData: [
        {
          category: 'shoes',
          type: 'snickers',
          brand: 'jordan',
          gender: 'male',
          id: 'jwnz03'
        },
        {
          category: 'shoes',
          type: 'snickers',
          brand: 'jordan',
          gender: 'female',
          id: 'jwnz03'
        },
        {
          category: 'shoes',
          type: 'snickers',
          brand: 'jordan',
          gender: 'boys',
          id: 'jwnz03'
        }
      ],
      loading: true
    }
  },
  components: {
    FigureImage,
    StartPageLinks,
    NowTrands,
    Recomendations,
    MoreMyRoom
  },
  async mounted () {
    window.scrollTo(0, 0)
    this.trands = await this.$store.dispatch('fetchProducts', this.trandData)
    this.actualLinks = await this.$store.dispatch('fetchProducts', this.actualData)
    this.loading = false
  },
  beforeDestroy () {
    window.scrollTo(0, 0)
  }
}
</script>
<style lang="scss" scoped>
.wrap-start-page {
  display: flex;
  flex-direction: column;
}
.start-page {
  display: flex;
  flex-direction: column;
  margin: 0 48px;
}
@media (max-width: 4096px) {
  .start-page {
    margin: 0 calc((100% - 1423.2px)/2);
  }
}
@media (max-width: 1536px) {
  .start-page {
    margin: 0px 48px;
  }
}
@media (max-width: 1262.73px) {
  .start-page {
    margin: 0 20px;
  }
}
.notifications {
  text-align: center;
  color: black;
  background-color: #f5f5f5;
  border-bottom: 0.5px solid #ccc;
  width: 100%;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 10px 0px;
}

.wrap-content-links {
  margin-top: 17.6px;
}
.content-header {
  font-size: 24px;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  margin-bottom: 24px;
}
.wrap-now-trands {
  margin: 40px 0px 0px;
}
.wrap-recomend {
  margin: 40px 0px 0px;
}
.wrap-moreMyRoom {
  margin: 40px 0px;
}
.wrap-loader {
  padding: 160.95px calc((100vw - 72px)/2);
}
</style>
