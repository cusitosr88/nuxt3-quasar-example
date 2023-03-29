<template>
    <q-layout view="hHh lpR fFf">
        <q-header elevated class="bg-primary text-white">
        <q-toolbar>
            <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

            <q-toolbar-title>
            <q-avatar>
                <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
            </q-avatar>
            Title
            </q-toolbar-title>
        </q-toolbar>
        </q-header>

        <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
            <Menu/>
        </q-drawer>

        <q-page-container>
        <slot/>
        </q-page-container>
    </q-layout>
</template>
<script lang="ts" setup>
const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
    leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>