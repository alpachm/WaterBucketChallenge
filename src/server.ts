import "dotenv/config"
import app from "./app";

const port = process.env.PORT ? +process.env.PORT : 8001;

app.listen(port, () => {
    console.log(`App is running on port ${port}...`)
})