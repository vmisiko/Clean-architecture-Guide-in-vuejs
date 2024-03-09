<template>
    <div class="flex">
        <Header class=""></Header>
        <div class="w-screen min-h-screen bg-main p-4 mt-5">
            <div class="w-full mt-20 overflow-y-auto" >
                <RouterView></RouterView>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import Sidebar from "@/presentation/components/core/SideBar.vue";
import Header from '@/presentation/components/core/Header.vue';

</script>