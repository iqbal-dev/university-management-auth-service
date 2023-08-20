import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function bootstrap() {
  try {
    await mongoose.connect(`${config.DB_URL}/university-management`)
    app.listen(config.PORT, () => {
      console.log('Application listening on port ' + config.PORT)
    })
  } catch (err: unknown) {
    console.log(err.message)
  }
}

bootstrap()
