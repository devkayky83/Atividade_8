import express from "express";
import { create } from "express-handlebars";
import session from "express-session";
import css from "connect-session-sequelize";

import jogo_web_router from "./routers/web/jogo_router.js";
import jogador_web_router from "./routers/web/jogador_router.js";
import desenvolvedor_web_router from "./routers/web/desenvolvedor_router.js";

// import jogo_router from "./routers/api/jogo_router.js";
import jogador_router from "./routers/api/jogador_router.js";
import desenvolvedor_router from "./routers/api/desenvolvedor_router.js";
import { syncer } from "./database/syncer.js";
import user_web_router from "./routers/web/user_router.js";
import sequelize from "./database/mysql.js";
import { checkLogged } from "./controllers/web/user_controller.js";

const app = express();

if (!await syncer()){
  process.exit();
}

const hbs = create({
  extname: '.handlebars',
  defaultLayout: 'main',
  layoutsDir: 'views/layouts/',
  partialsDir: 'views/partials/'
});

hbs.handlebars.registerHelper('eq', function(arg1, arg2) {

    return (arg1 == arg2);

});


hbs.handlebars.registerHelper('inc', function(arg1, arg2) {

    if(typeof arg1 == 'undefined') {

        return false;

    }

    return (arg1.indexOf(arg2) !== -1);

});

const SequelizeStore = css(session.Store);

const sequelizeStore = new SequelizeStore({

    db: sequelize,

    tableName: 'sessions',

    checkExpirationInterval: 5 * 60 * 1000,

    expiration: 1 * 60 * 60 * 1000 

});

app.use(session({

    secret: '*&long+and+secure+secret=%445',
    name: 'sess_cookie_param',
    store: sequelizeStore,

    cookie: {
        maxAge: 1 * 60 * 60 * 1000,
        secure: false, // if using HTTPS
        httpOnly: true // somente browsers
    },

    saveUninitialized: false, 
    resave: false
}));

await sequelizeStore.sync();

app.use(express.json());
app.use(express.urlencoded());

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get("/", (req, res) => {
  res.render("Rodando");
});

app.use("/jogos", checkLogged, jogo_web_router);
app.use("/jogadores", checkLogged, jogador_web_router);
app.use("/desenvolvedores", checkLogged, desenvolvedor_web_router);
app.use("/users", user_web_router);

//app.use("/listarJogos", jogo_router);
app.use("/listarJogadores", jogador_router);
app.use("/listarDesenvolvedores", desenvolvedor_router);

async function start() {
  const ok = await syncer();
  if (!ok) {
    console.error("Erro ao sincronizar o banco.");
    process.exit(1);
  }

  app.listen(80, () => {
    console.log("Escutando...");
  });
}

start();