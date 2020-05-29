<template>
  <div class="footer-bord">
    <div class="footer-content">
      <div class="high-content">
        <HighContent />
      </div>
        <LowContent />
    </div>
  </div>
</template>

<script>
import HighContent from './sub-footers/High-content'
import LowContent from './sub-footers/Low-content'
export default {
  name: 'Footer-container',
  components: {
    HighContent,
    LowContent
  }
}
</script>

<style lang="scss" scoped>
.footer-content {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.high-content {
  display: flex;
  border-bottom: 0.5px solid #ccc;
  padding-bottom: 20px;
}
.low-content {
  display: flex;
}
.footer-bord {
  width: 100%;
  background-color: black;
  padding: 20px 40px 15px 40px;
}
</style>
