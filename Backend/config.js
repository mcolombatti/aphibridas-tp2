import dotenv from 'dotenv'
dotenv.config({ path: process.env.ENVIRONMENT ? `.env.${process.env.ENVIRONMENT}` : '.env' });

export default {
    db: {
        host: process.env.NODE_MONGO_HOST || 'localhost',
        port: process.env.NODE_MONGO_PORT || 27017,
        dbName: 'aplicaciones-hibridas'
    },
    middleware: {
        access: process.env.MW_ACCESS || '123',
    },
    auth: {
        user: process.env.EMAIL_USERNAME || 'maximiliano.colombat@davinci.edu.ar',
        pass: process.env.PASSWORD || 'rivercapo92'
    }
}