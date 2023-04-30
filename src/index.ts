import app from './app'

// Start the server
const port = Number(process.env.NODE_DOCKER_PORT || 8080)

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at PORT ${port}`)
})