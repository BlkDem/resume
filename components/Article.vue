<template>
  <BaseBlock
    :section-name="'experience'"
    :color="'dark'"
    :icon="article['article'].icon"
    :card-caption="article['article'].name"
    :article="article"
  >
    <article :name="article['article'].name">
      <div class="article" v-for="user_article in article.user_article.list">
        <div v-if="user_article.header" class="p-gradient my-2">
          <time class="small-p">{{ user_article.header }}</time>
        </div>
        <h4 class="pt-4">{{ user_article.name }}</h4>

        <div class="print-hide" v-if="user_article.images">
          <ImagePreview
            v-for="user_article_image in user_article.images"
            :image="user_article_image?.image"
            :show="user_article_image?.id === currentId"
            @clearIndex="onClearIndex"
          />
          <img
            v-for="user_article_image in user_article.images"
            :id="user_article.id"
            @click="showImage(user_article_image?.id)"
            class="user_article_preview_image"
            :src="user_article_image?.image"
            :alt="user_article.name"
          />
        </div>
        <div
          :class="{ 'arch-tags-group': user_article.list_type === 'bricks' }"
          v-html="user_article.description"
        ></div>
        <p
          v-if="user_article.footer"
          class="bottom-p article_padding_bottom printable"
        >
          {{ user_article.footer }}
        </p>
        <p
          v-if="user_article.url"
          class="bottom-p article_padding_bottom printable"
        >
          <a :href="user_article.url" target="_blank">
            {{ user_article.url }}
          </a>
        </p>
      </div>
    </article>

    <div class="space-4"></div>
  </BaseBlock>
</template>

<script>
import BaseBlock from "./BaseBlock.vue";
import ImagePreview from "./ImagePreview.vue";

export default {
  data() {
    return {
      currentId: -1,
    };
  },

  components: {
    BaseBlock,
    ImagePreview,
  },
  props: {
    article: {},
    color: {
      type: String,
      default: "light",
    },
  },

  methods: {
    showImage(id) {
      this.currentId = id;
    },

    onClearIndex() {
      this.currentId = -1;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../scss/vars";

.article_padding_bottom {
  padding-bottom: 2.5rem;
}
::v-deep .arch-tags-group ul {
  margin: initial;
  list-style-type: none;
}
::v-deep .arch-tags-group ul > li {
  background-color: $gold-light;
  border-radius: 4px;
  color: var(--background-color-primary);
  display: inline-block;
  font-weight: 700;
  margin-right: 5px;
  padding: 4px 8px 4px 28px;
  margin-bottom: 4px;
  height: 30px;
}

::v-deep .arch-tags-group ul > li::before {
  content: "";
}

.arch-tags-group {
  display: flex;
  flex-direction: row;
  row-gap: 8px;
  justify-content: flex-start;
  /* margin-bottom: 64px; */
  flex-wrap: wrap;
  margin-top: 16px;
}

@media print {
  ::v-deep .arch-tags-group ul > li::before {
    content: " | ";
  }
  .printable {
    margin: 0 !important;
    padding: 0 !important;
  }
  .print-hide {
    display: none;
  }
  .pt-4 {
    padding-top: 0 !important;
  }
}
</style>
