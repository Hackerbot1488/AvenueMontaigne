<template>
  <div class="wrap-feedback-form" style="margin-top:1rem;">
    <v-form @submit.prevent="makeFeedback">
      <div class="wrap-header">
        <v-text-field
          label="Заголовок"
          v-model.trim="header"
          :rules="headerRules"
          counter
          maxlength="20"
          outlined
          dense
          rounded
          color="black"
        ></v-text-field>
        <v-rating
          v-model="rating"
          background-color="yellow lighten-2"
          color="yellow"
          large
          hover
          dense
        ></v-rating>
      </div>
      <div class="wrap-body">
        <v-textarea
          outlined
          rows="10"
          style="display:block;flex:0;"
          :rules="bodyRules"
          no-resize
          row-height="10px"
          color="black"
          label="Комментарий"
          rounded
          v-model="body"
        ></v-textarea>
      </div>
      <div class="wrap-action-buttons">
        <v-btn
          color="white"
          style="flex:1;"
          rounded
          dense
          type="reset"
          @click="resetForm"
        >Очистить</v-btn>
        <v-btn
          color="black"
          style="flex:1;"
          dark
          rounded
          dense
          type="submit"
        >Опубликовать</v-btn>
      </div>
      <div style="display:none;" class="wrap-comment-info">
        <span>{{name}}</span>
        <span>{{date}}</span>
      </div>
    </v-form>
  </div>
</template>
<script>
export default {
  name: 'FormComment',
  data () {
    return {
      header: '',
      rating: 1,
      body: '',
      date: new Date().toLocaleDateString(),
      name: 'Гость',
      headerRules: [
        value => !!value || 'Введите заголовок',
        v => v.length <= 20 || 'Максимальная длина 20 символов'
      ],
      bodyRules: [
        value => !!value || 'Введите комментарий'
      ],
      comment: {}
    }
  },
  computed: {
  },
  methods: {
    makeFeedback () {
      this.comment = {
        date: this.date,
        body: this.body,
        name: this.name,
        rating: this.rating,
        header: this.header
      }
      this.$emit('added', this.comment)
      this.resetForm()
    },
    resetForm () {
      this.header = ''
      this.rating = 1
      this.body = ''
    }
  }
}
</script>
<style lang="scss" scoped>
.wrap-feedback-form {
  display: flex;
  flex-direction: column;
}
.wrap-header {
  display: flex;
}
.wrap-comment-info {
  display: flex;
  justify-content: space-between;
}
.wrap-action-buttons {
  display: flex;
}
</style>
