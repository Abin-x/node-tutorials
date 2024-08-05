const express = require('express')
const app = express()

app.get('/', (req,res) => {
	res.send('MM haah!!')
})

const PORT = process.env.PORT || 4002
app.listen(PORT, () => {
	console.log(`Server running on http://locahost:${PORT}`);
})


