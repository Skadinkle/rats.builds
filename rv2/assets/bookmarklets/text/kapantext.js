javascript: (function () {
	window.g = function () {
		function G(element) {
			if (element.childNodes.length > 0)for (var i = 0; i < element.childNodes.length; i++) {
				if (element.childNodes[i].nodeName.toLowerCase() !== 'style' && element.childNodes[i].nodeName.toLowerCase() !== 'script') {
					G(element.childNodes[i]);
				}
			}
			if (element.nodeType === Node.TEXT_NODE && element.nodeValue !== '') {
				var thechars = ['%E5%8D%82', '%E4%B9%83', '%E5%8C%9A', '%E1%97%AA', '%E4%B9%87', '%E5%8D%83', '%E1%8E%B6', '%E5%8D%84', '%E4%B8%A8', '%EF%BE%8C', '%D2%9C', '%E3%84%A5', '%E7%88%AA', '%E5%87%A0', '%E3%84%96', '%E5%8D%A9', '%C9%8A', '%E5%B0%BA', '%E4%B8%82', '%E3%84%92', '%E3%84%A9', '%E1%90%AF', '%E5%B1%B1', '%E4%B9%82', '%E3%84%9A', '%E4%B9%99', '%E5%8D%82', '%E4%B9%83', '%E5%8C%9A', '%E1%97%AA', '%E4%B9%87', '%E5%8D%83', '%E1%8E%B6', '%E5%8D%84', '%E4%B8%A8%EF%BE%8C', '%D2%9C', '%E3%84%A5', '%E7%88%AA', '%E5%87%A0', '%E3%84%96', '%E5%8D%A9', '%C9%8A', '%E5%B0%BA', '%E4%B8%82', '%E3%84%92', '%E3%84%A9', '%E1%90%AF', '%E5%B1%B1', '%E4%B9%82', '%E3%84%9A','%E4%B9%99', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
				element.textContent = element.textContent.replace('a', thechars[0]).replace('b', thechars[1]).replace('c', thechars[2]).replace('d', thechars[3]).replace('e', thechars[4]).replace('f', thechars[5]).replace('g', thechars[6]).replace('h', thechars[7]).replace('i', thechars[8]).replace('j', thechars[9]).replace('k', thechars[10]).replace('l', thechars[11]).replace('m', thechars[12]).replace('n', thechars[13]).replace('o', thechars[14]).replace('p', thechars[15]).replace('q', thechars[16]).replace('r', thechars[17]).replace('s', thechars[18]).replace('t', thechars[19]).replace('u', thechars[20]).replace('v', thechars[21]).replace('w', thechars[22]).replace('x', thechars[23]).replace('y', thechars[24]).replace('z', thechars[25]).replace('A', thechars[26]).replace('B', thechars[27]).replace('C', thechars[28]).replace('D', thechars[29]).replace('E', thechars[30]).replace('F', thechars[31]).replace('G', thechars[32]).replace('H', thechars[33]).replace('I', thechars[34]).replace('J', thechars[35]).replace('K', thechars[36]).replace('L', thechars[37]).replace('M', thechars[38]).replace('N', thechars[39]).replace('O', thechars[40]).replace('P', thechars[41]).replace('Q', thechars[42]).replace('R', thechars[43]).replace('S', thechars[44]).replace('T', thechars[45]).replace('U', thechars[46]).replace('V', thechars[47]).replace('W', thechars[48]).replace('X', thechars[49]).replace('Y', thechars[50]).replace('Z', thechars[51]).replace('fax', '%E2%84%BB').replace('1', thechars[52]).replace('2', thechars[53]).replace('3', thechars[54]).replace('4', thechars[55]).replace('5', thechars[56]).replace('6', thechars[57]).replace('7', thechars[58]).replace('8', thechars[59]).replace('9', thechars[60]).replace('0', thechars[61]);
			}
		}
		var html = document.getElementsByTagName('html')[0];
		G(html);
	};
	setInterval(g, 1);
})();