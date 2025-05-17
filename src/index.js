import pizzas from '../data/pizzas.json';

export default {
	async fetch(request, env, ctx) {
		let urlObject = new URL(request.url);

		if (urlObject.pathname == '/admin') {
			return new Response('Hola admin');
		}

		if (urlObject.pathname == '/pizzas') {
			return new Response(JSON.stringify(pizzas), {
				headers: {
					'Content-Type': 'application/json',
				},
			});
		}

		return new Response('Not found', { status: 404 });
	},
};
