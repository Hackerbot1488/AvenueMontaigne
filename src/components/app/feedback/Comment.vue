<template>
  <div class="comment">
    <div class="wrap-header">
      <v-text-field
        label="Заголовок"
        v-model.trim="comment.header"
        outlined
        dense
        rounded
        readonly
        color="black"
      ></v-text-field>
      <v-rating
        v-model="comment.rating"
        readonly
        background-color="yellow lighten-2"
        color="yellow"
        large
        dense
      ></v-rating>
    </div>
    <div class="wrap-comment-body">
      <v-textarea
        auto-grow
        outlined
        rows="1"
        style="display:block;flex:0;"
        color="black"
        label="Комментарий"
        rounded
        dense
        v-model="comment.body"
        readonly
      ></v-textarea>
    </div>
    <div class="wrap-comment-info">
      <span>{{comment.name}}</span>
      <span>{{comment.date}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    comment: Object
  }
}
</script>

<style lang="scss" scoped>
.comment {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  // margin-bottom: 1rem;
}
.wrap-header {
  display: flex;
  flex-direction: row;
}
.wrap-comment-info {
  display: flex;
  justify-content: space-between;
}
</style>
