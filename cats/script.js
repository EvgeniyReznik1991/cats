const main = document.querySelector('.main__container');
const example = document.createElement('div');
example.className = 'examples';
main.append(example);
let names = [];


fetch(`https://sb-cats.herokuapp.com/api/show`)
	.then(response => response.json())
	.then(dataCats => {
		let content = '';
		content += '<div>';
		if (dataCats.message === 'ok') {
			for (let k in dataCats.data[0]) {
				if (k !== '__v' && k !== '_id') {
					names.push(k);
				}
			}
			content += '</div>';
			example.innerHTML = content;
		}
		dataCats.data.forEach(cat => {
			content += '<div>';
			names.forEach(name => {
				content += cat[name];
				content += '</div>';
			})
		});
		content += '</div>'
	})
