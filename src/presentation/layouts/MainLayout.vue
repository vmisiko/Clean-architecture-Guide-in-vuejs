<template>
    <div class="flex">
        <Header class=""></Header>
        <Sidebar class="hidden md:block"></Sidebar>
        <div class="w-screen min-h-screen sm:ml-64 bg-main p-4 mt-5">
            <div class="mt-16">
            </div>
            <div class="w-full min-h-[90%] mt-5 overflow-y-auto">
                <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
import Sidebar from "@/presentation/components/core/SideBar.vue";
import Header from '@/presentation/components/core/Header.vue';

</script>