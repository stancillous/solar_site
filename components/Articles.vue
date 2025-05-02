<template>
    <div>
         <div class="row g-4">
            <div v-for="(article, index) in articles" :key="index" class="col-md-6 col-lg-3">
              <div class="article-card">
                  <NuxtLink :to="`/blogs/${article.slug}`" class="text-dark text-decoration-none">
                <div class="article-content  p-2" 
                     :style="{ backgroundImage: `url(${article.featured_image})` }">
                    <div class="article-text d-flex align-items-end bg-white p-3 ">
                      <h5 class="card-title text-dark mb-0">{{ article.title }}</h5>
                      <i class="bi bi-arrow-right"></i>
                    </div>
                </div>
            </NuxtLink>
              </div>
            </div>
          </div>
    </div>
</template>

<script setup lang="ts">

// import axios from 'axios';
import { axiosInstance } from '@/utils';


onMounted(async() =>{
    await getArticles();
})
const articles = ref([]);


const getArticles = async() => {
    try {
        const response = await axiosInstance.get('/blogs');
        articles.value = response.data;
    } catch (error) {
        console.error('Error fetching articles:', error);
    }
}

</script>

<style scoped>

.article-card {
  height: 100%;
}

.article-content {
  height: 400px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
}


.article-text {
  width: calc(100% - 30px);
  margin-bottom: 15px;
}

</style>