import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: process.env.APP_TITLE,
            description: process.env.APP_DESCRIPTION,
            version: '1.0.0'
        },
        servers: [
            {
                url: process.env.LOCAL_SERVER_URL
            },
            {
                url: process.env.LIVE_SERVER_URL
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        tags: [
            {
                name: 'USERS',
                description: 'Operations related to users',
            }
        ]
    },
    apis: [path.resolve(__dirname, '../index.js'), path.resolve(__dirname, '../routes/*.js')]
};

export default options;

