<template>
    <div class="text-center px-64 ">
        <div class="bg-white p-6">
            <div class="flex justify-center mt-10">
                <span class="text-font-bold text-3xl"> 404 Page Not Found </span>
            </div>

            <div class="mt-10">
                <span> Sorry this page is not Available. <br> Click below to return to home page</span>
            </div>

            <div class="mt-5">
                <button @click="$router.push('/')" class="bg-gray-500 px-5 py-3 rounded-md text-white"> Home</button>
            </div>
        </div>
    </div>
</template>
