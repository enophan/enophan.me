<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <div class="wrapper">
      <div class="greetings">
        <h1 class="green">Hia! Hello!</h1>
        <h2 class="green">My name is enophan.</h2>
        <h3>
          我是一位独立开发者、Vue.js 核心成员、音乐玩家、写作者、计算机科学与技术硕士在读生。这些是我的
          <RouterLink to="projects">开源作品</RouterLink>、
          <RouterLink to="musicworks">音乐作品</RouterLink>、
          <RouterLink to="animationworks">动画作品</RouterLink>。
        </h3>

        <h3>
          我的
          <a target="_blank" href="#">个人博客</a>
          记录了我关于技术的思考。

          我的
          <a target="_blank" href="https://www.zhihu.com/people/enophan">知乎账号</a>，
          分享了很多关于个人成长的内容。

          我的个人
          <a target="_blank" href="#">微信公众号</a>，
          这里的文章与知乎不太相同，这里记录着一些更加私人化的文章。

          我在
          <a target="_blank" href="https://space.bilibili.com/441476378">bilibili</a>
          上也有账号，这里主要是我的视频作品。

          我的音乐作品可以在
          <a target="_blank" href="#">网易云</a>
          收听。

          我会在
          <a target="_blank" href="https://weibo.com/u/7415506599">微博</a>
          与
          <a target="_blank" href="https://twitter.com/eno_phan">推特</a>
          分享一些日常事。
        </h3>
      </div>

    </div>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: rgba(85, 239, 196, 1.0);
  transition: 0.4s;
}

.wrapper
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

.wrapper
h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  margin-top: 10px;
}


@media (hover: hover) {
  a:hover {
    background-color: rgba(85, 239, 196, .2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }

}

</style>
