let json = JSON.parse($response.body)

if (json.data && json.data.total) {
	delete json.data.total
}
if (json.data && json.data.data) {
	delete json.data.data
}
$done({ body: JSON.stringify(json) })
