<template lang="html">
  <div>
    <router-link
      v-for="tag in $page.frontmatter.tags"
      :key="tag"
      :to="{ path: `/tags.html#${tag}`}">
      #{{tag}}
    </router-link>
  </div>
</template>

<style scoped>
.tags {
  margin: 30px 0;
}
a {
  margin-right: 10px;
}
</style>