import express from 'express';

export async function startServer(port: number) {
    const app = express();
    app.get('/hello', (_req, res) => {
      res.send('Welcome to Kata bank');
    });
    await new Promise((resolve) => app.listen(port, () => resolve(app)));
}


