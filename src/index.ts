import { createServer } from 'node:http';
import { createApplication } from './app/index.js';

async function main(): Promise<void> {
    try {
        const app = createApplication();
        const server = createServer(app);
        const PORT = Number(process.env.PORT ?? 8080);

        server.on('error', (error: NodeJS.ErrnoException) => {
            console.error('Error starting http server:', error.message);
            process.exit(1);
        });

        server.listen(PORT, () => {
            console.log(`Http server is running on PORT ${PORT}`);
        });
    } catch (error) {
        console.error('Error starting http server');
        throw new Error('Something went wrong');
    }
}

main();