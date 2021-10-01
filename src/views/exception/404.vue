<template>
  <div>
  <exception-page home-route="/" :style="`min-height: ${minHeight}`" type="404" />
  </div>
</template>

<script>
import ExceptionPage from '@/components/exception/ExceptionPage.vue'
// import { mapState } from 'vuex'

export default {
  name: 'Exp404',
  components: { ExceptionPage },
  computed: {
    // ...mapState('setting', ['pageMinHeight']),
    minHeight() {
      return '100vh'
    },
  },
}
</script>

<style scoped lang="less">
</style>
