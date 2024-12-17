function delaySync(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

let cellInnerDivs = document.querySelectorAll('div[data-testid="cellInnerDiv"]')
for (var i = 0; i < cellInnerDivs.length; i++) {
	let item = cellInnerDivs[i]
    let list = item.querySelectorAll('button[aria-haspopup="menu"]')
    
	for (var j = 0; j < list.length; j++) {
		let el = list[j]
		el.click()
		await delaySync(300)
		let button = document.querySelectorAll('div[role="menuitem"]')[1]
		button.click()
		await delaySync(300)
	}
}
