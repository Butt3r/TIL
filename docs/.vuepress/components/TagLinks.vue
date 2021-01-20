<template lang="html">
  <div class="tags">
  🔖 
    <router-link
      v-for="tag in $page.frontmatter.tags"
      :key="tag"
      :to="{ path: `/tags.html#${tag}`}">
      #{{ tag }}&nbsp;
    </router-link>
  </div>
</template>

<style scoped>
.tags{
  margin: 30px 0;
}

</style>

