<template>
  <h1>
    {{ slug }}
  </h1>
</template>

<script>
export default {
  props: ['slug'],
  data() {
    return {
      slug: this.props.slug
    }
  }
}
</script>