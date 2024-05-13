// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		apiSecret: '怎麼可以讓你知道呢 :P',
		public: {
			apiBase: '/api/google.com',
		},
	},
	devtools: {
		enabled: true,
	},
	modules: ['@unocss/nuxt'],
});
