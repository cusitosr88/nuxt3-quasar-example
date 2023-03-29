// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxt-quasar-ui'
      ],
    quasar: {
        plugins: [
            'Notify'
          ],
        extras: {
            fontIcons: ['material-icons']
        }
    }
})
