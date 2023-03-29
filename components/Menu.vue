<template>
    <q-scroll-area class="fit">
        <q-list>
            <template v-for="(menuItem, index) in menuList" :key="index">
                <q-item clickable exact :to="menuItem.link" v-ripple>
                <q-item-section avatar>
                    <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                    {{ menuItem.label }}
                </q-item-section>
                </q-item>
                <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>

        </q-list>
    </q-scroll-area>
</template>
<script lang="ts" setup>
  interface Item {
    icon: string
    label: string
    separator: boolean
    link: string
  }

  const menuList: Item[] = [
      {
          icon: 'dashboard',
          label: 'Card',
          separator: false,
          link: '/'
      },
      {
          icon: 'smart_button',
          label: 'Button',
          separator: true,
          link: '/btns'
      },
      {
          icon: 'notifications',
          label: 'Notify',
          separator: false,
          link: '/notify'
      },
  ]
</script>
<style>
</style>
