import {Hono} from "hono";
import {serveStatic} from 'hono/bun'
import {renderer} from "@/middleware/renderer";
import {Data, Home} from "@/views/home";

const app = new Hono();

app.use('/static/*', serveStatic({root: './'}))

app.get('*', renderer);
app.get('/data', (c) => {
    return c.render(Data());
});

app.get('/', (c) => {
    return c.render(Home())
})

export default app;
