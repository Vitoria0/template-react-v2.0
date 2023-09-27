const context = import.meta.globEager('/src/pages/**/*.jsx');

const pages = Object.keys(context).map(path => {
	const value = context[path].default;
	return { path, value };
});

export default pages.map(page => {
	return { 
			 path: page.path.split('/').pop().split('.')[0], 
			 component: page.value 
			};
});

console.log(pages);