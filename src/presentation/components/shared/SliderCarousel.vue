<template>
    <Carousel>
      <Slide v-for="(slide, index) in slides" :key="index" v-if="type==='Images'">
        <div class="carousel__item">
            <img class="aspect-square h-64 w-full object-contain" :src="(slide as string)" alt="">
        </div>
      </Slide>

      <Slide v-for="(slide, index) in slides" :key="index" v-if="type==='Video'">
        <div class="carousel__item">
            <video class="aspect-video h-64 w-full" :src="(slide as string)" controls></video>
        </div>
      </Slide>

      <Slide v-for="(slide, index) in slides" :key="index" v-if="type==='Audio'">
        <div class="carousel__item">
            <Audio class="aspect-video h-64 w-full" :src="(slide as string)" controls></Audio>
        </div>
      </Slide>
  
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </template>
  
  <script setup lang="ts">
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'

  const props = defineProps({
    type: {
        type: String,
        required: true,
    },
    slides: {
        type: Array<String>,
        required: true,
    },
  });
  
  </script>
  
  <style>
  .carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel__slide {
    padding: 10px;
  }
  
  .carousel__prev,
  .carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
  }
  </style>