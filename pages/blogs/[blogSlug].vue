<template>
    <div>
        <div class="container">
            <div class="row article-wrp gap-5">
                <div class="col-md-4 py-5 other-articles-wrp bg-light p-3">
                    <h5>Other Articles</h5>
                    <!-- show the other blog titles here -->
                     <ul>
                        <li v-for="(article, index) in computedOtherArticles" :key="index" >
                            <NuxtLink class="text-dark" :to="`/blogs/${article.slug}`">{{ article.title }}</NuxtLink>
                        </li>
                     </ul>
                </div>

                <div class="col-lg-7 py-5 p-3">
                    <div class="text mb-5">
                        <h2 class="mb-2 text-center">{{ article.title }}</h2>
                        <p class="lead fs-6 mb-4" v-html="article.content"></p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
// import axios from 'axios';
import { axiosInstance } from '@/utils';

onMounted(async () => {
    await getArticle();
    await getOtherArticles();
})
const route = useRoute();
const slug = ref(route.params.blogSlug);
const otherArticles = ref([]);

const article = ref({});

const getArticle = async() => {
    try {
        const response = await axiosInstance.get(`http://localhost:8000/solar-ireland/api/blogs/${slug.value}`);
        article.value = response.data;
    } catch (error) {
        console.error('Error fetching article:', error);
    }
}

// get the other articles
const getOtherArticles = async() => {
    try {
        const response = await axiosInstance.get('http://localhost:8000/solar-ireland/api/blogs');
        otherArticles.value = response.data;
    } catch (error) {
        console.error('Error fetching other articles:', error);
    }
}


const computedOtherArticles = computed(() => {
    return otherArticles.value.filter(article => article.slug !== slug.value);
})

</script>

<style scoped>

.other-articles-wrp {
    position: sticky;
    top: 0;
    height: 100vh;
    overflow-y: auto;
}

@media (max-width: 991px) {
    .other-articles-wrp {
        position: static;
        height: auto;
        width: 100%;
    }

    .article-wrp{
        display: flex !important;
        flex-direction: column-reverse !important;
    }
}
</style>