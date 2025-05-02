<template>
    <div class="container py-5">
        <div class="row g-5 align-items-center">
            <!-- Form Column -->
            <div class="col-lg-6 order-lg-1">
                <div class="pe-lg-4">
                    <h2 class="mt-2 mb-4">Get your free solar quote</h2>
                    <p class="lead fs-6 mb-4">Fill out the form below and we'll get back to you with a customized solar solution for your home.</p>

                    <div class="bg-light p-4 rounded">
                        <GetQuoteForm/>
                    </div>
                </div>
            </div>

            <!-- Image Column -->
            <div class="col-lg-6  order-lg-2">
                <div class="position-relative">
                    <img 
                        src="https://cdn-assets-us.frontify.com/s3/frontify-enterprise-files-us/eyJwYXRoIjoic3VucnVuXC9maWxlXC9QZEZFVWs3Z25IR2JxbTg2b2RFeC5qcGcifQ:sunrun:xtSwgw13r1fM9u0gJPUdGRAhAvQySdebjXG1PoU022E?width=1680&format=webp" 
                        alt="Solar panels on a modern home" 
                        class="w-100 rounded-4" 
                        style="height: 600px; object-fit: cover;"
                    >
                    <div class="position-absolute bottom-0 start-0 w-100 p-4 text-white" 
                         style="background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);">
                        <div class="d-flex align-items-center gap-2">
                            <i class="bi bi-shield-check fs-4"></i>
                            <div>
                                <p class="mb-0"><strong>Trusted by Irish Homeowners</strong></p>
                                <p class="mb-0 small">Join thousands of satisfied customers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import GetQuoteForm from '@/components/GetQuoteForm.vue';

</script>

<style scoped>
.form-control:focus {
    box-shadow: none;
    border-color: var(--bs-primary);
}

.form-check-input:checked {
    background-color: var(--bs-primary);
    border-color: var(--bs-primary);
}

.form-check-input:focus {
    box-shadow: none;
    border-color: var(--bs-primary);
}
</style>