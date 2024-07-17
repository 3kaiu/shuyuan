let json = JSON.parse($response.body)
//绿色商城
if (json.item && json.item.length > 0) {
	json.item[0] = {}
	// delete json.item[0]
}
//分享应用
// if (json.items && json.items.length > 3) {
// 	delete json.items[3]
// }
$done({ body: JSON.stringify(json) })
