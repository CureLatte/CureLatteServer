import {config} from 'dotenv'
config()
import createApp from "./app";


const main = async (): Promise<void> => {
    const app = await createApp()

    app.listen(process.env.PORT, () => {
        console.log(`server RUN!! PORT: ${process.env.PORT} =====`)
    })


}

main()
    .then(() => {

})