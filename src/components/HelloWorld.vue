<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h2 class="green">My name is enophan.</h2>
    <h3>
      我是一位独立开发者、音乐玩家、写作者、计算机科学与技术硕士在读生。这些是我的
      <a target="_blank" href="#">开源作品</a>、
      <a target="_blank" href="#">音乐作品</a>、
      <a target="_blank" href="#">动画作品</a>。
    </h3>
    
    <h3>
      我的
      <a target="_blank" href="#">个人博客</a>
      记录了我关于技术的思考。
      
      我的
      <a target="_blank" href="#">知乎账号</a>，
      分享了很多关于个人成长的内容。
      
      我的个人
      <a target="_blank" href="#">微信公众号</a>，
      这里的文章与知乎不太相同，这里记录着一些更加私人化的文章。
      
      我在
      <a target="_blank" href="#">bilibili</a>
      上也有账号，这里主要是我的视频作品。

      我的音乐作品可以在
      <a target="_blank" href="#">网易云</a>
      收听。

      我会在
      <a target="_blank" href="#">微博</a>
      与
      <a target="_blank" href="#">推特</a>
      分享一些日常事。
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  margin-top: 10px;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
