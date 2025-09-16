<template>
  <a class="web-card" :href="url" target="_blank" rel="noopener noreferrer" :title="`打开 ${name}`">
    <div class="web-card__img-box">
      <img :src="img" :alt="`${name} 主页截图`" loading="lazy" @error="onImgError" />
    </div>

    <div class="web-card__info">
      <p class="web-card__name">{{ name }}</p>
      <p class="web-card__url">{{ cleanUrl }}</p>
    </div>
  </a>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: { type: String, required: true },
  url: { type: String, required: true },
  img: { type: String, required: true },
});

const cleanUrl = computed(() => props.url.replace(/^https?:\/\//, "").replace(/\/$/, ""));

const onImgError = e => {
  e.target.src =
    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 90"%3E%3Crect width="160" height="90" fill="%23e5e7eb"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-size="14"%3E图片失效%3C/text%3E%3C/svg%3E';
};
</script>

<style scoped>
.web-card {
  display: block;
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--vp-c-bg-soft);
  box-shadow: 0 2px 8px 0 var(--vp-c-divider);
  transition: transform 0.25s, box-shadow 0.25s;
  text-decoration: none;
  color: inherit;
}
.web-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px 0 var(--vp-c-divider);
}
.web-card__img-box {
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}
.web-card__img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s;
}
.web-card:hover .web-card__img-box img {
  transform: scale(1.05);
}
.web-card__info {
  padding: 12px 16px 16px;
}
.web-card__name {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}
.web-card__url {
  margin: 4px 0 0;
  font-size: 13px;
  color: var(--vp-c-text-2);
  word-break: break-all;
}
@media (max-width: 640px) {
  .web-card__name {
    font-size: 15px;
  }
  .web-card__url {
    font-size: 12px;
  }
}
</style>
