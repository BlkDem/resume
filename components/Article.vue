<template>

    <BaseBlock
      :section-name="'experience'"
      :color="'dark'"
      :icon="article['article'].icon"
      :card-caption="article['article'].name"
      :article="article"
    >

      <article :name="article['article'].name">
        <div v-for="user_article in article.user_article.list">
          <div v-if="user_article.header" class="p-gradient my-2">
            <time class="small-p">{{ user_article.header }}</time>
          </div>
          <h4 class="pt-4">{{ user_article.name }}</h4>
          <div :class="{ 'arch-tags-group': user_article.list_type==='bricks' }"
            v-html="user_article.description">
          </div>
          <p  v-if="user_article.footer" class="bottom-p">{{ user_article.footer }}</p>
        </div>
      </article>

      <div class="space-4"></div>

    </BaseBlock>

</template>

<script>
import BaseBlock from './BaseBlock.vue';

export default {
  components: { BaseBlock },
  props: {
    article: {},
    color: {
      type: String,
      default: 'light'
    }
  },
}

</script>

<style scoped >
  .arch-tags-group >>> ul {
    margin: initial; 
    list-style-type: none;
  }
  .arch-tags-group >>> ul > li {
    background-color: #eabe21;
    border-radius: 4px;
    color: #fff;
    display: inline-block;
    font-weight: 700;
    margin-right: 5px;
    padding: 4px 8px 4px 28px;
    margin-bottom: 4px;
    height: 30px;
  }

  .arch-tags-group >>> ul > li::before {
      content: '';
  }

  .arch-tags-group {
    display: flex;
    flex-direction: row;
    row-gap: 8px;
    justify-content: flex-start;
    margin-bottom: 64px;
    flex-wrap: wrap;
    margin-top: 16px;
  }

</style>
