const router = {
	init: (() => {
		const appRouter = new Navigo(null, true)
		appRouter
			.on({
				'/': () => {
					//view.main('main');
				},
				'*': () => {
					appRouter.navigate('/')
				}
			})
			.notFound(() => {
				alert('Error! Router not found!')
			})
			.resolve()
	})()
}