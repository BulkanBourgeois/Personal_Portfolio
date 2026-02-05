import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
	  vite: {
		ssr: {
		  noExternal: ['three']  // Prevent three.js from being externalised
		}
	  }
	}
  };

export default config;
