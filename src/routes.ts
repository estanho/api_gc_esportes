import { Router } from 'express';

import { EsporteController } from './controllers/EsporteController';
import { CidadeController } from './controllers/CidadeController';
import { EquipeController } from './controllers/EquipeController';
import { CampeonatoController } from './controllers/CampeonatoController';
import { UsuarioController } from './controllers/UsuarioController';
import { ResultadoController } from './controllers/ResultadoController';

import { routesAuthentication } from './middlewares/authentication/routes_authentication';
import { validationBody, validationParams } from './middlewares/validation_middleware';
import { creationUsuarioSchema, findUsuarioSchema } from './validations/usuario_validation';
import { creationCampeonatoSchema, optionalCampeonatoSchema} from './validations/campeonato_validation';
import { optionalEquipeSchema, creationEquipeSchema } from './validations/equipe_validation';
import { optionalResultadoSchema, creationResultadoSchema, updateResultadoSchema } from './validations/resultado_validation';

// Controllers
const esporteController = new EsporteController();
const cidadeController = new CidadeController();
const equipeController = new EquipeController();
const campeonatoController = new CampeonatoController();
const usuarioController = new UsuarioController();
const resultadoController = new ResultadoController();
// Middleware de Autenticação
const auth = new routesAuthentication();

// Rotas de Esporte
const esporteRouter = Router();
esporteRouter.get('/esportes', auth.auth, esporteController.index);  // Mostrar todos os Esportes

// Rotas de Cidade
const cidadeRouter = Router();
cidadeRouter.get('/cidades', auth.auth, cidadeController.index);  // Mostrar todos as Cidades

// Rotas de Equipe
const equipeRouter = Router();
// Mostrar pelo ID de Equipe
equipeRouter.get('/equipe/:id', auth.auth, validationParams, equipeController.show);
// Mostrar pelo ID de Usuario
equipeRouter.get('/minhas-equipes', auth.auth, equipeController.showMy);
// Mostrar utilizando filtro (Por padrão retorna todos os registros)
equipeRouter.post('/equipes', auth.auth, validationBody(optionalEquipeSchema), equipeController.filter);
// Cadastrar Equipe
equipeRouter.post('/cadastrar-equipe', auth.auth, validationBody(creationEquipeSchema), equipeController.store);
// Cadastrar Membro da Equipe por Email
equipeRouter.put('/cadastrar-membro/:id', auth.auth, validationBody(findUsuarioSchema), equipeController.storeMembro);
// Remover Membro da Equipe pelo Email
equipeRouter.put('/remover-membro/:id', auth.auth, validationBody(findUsuarioSchema), equipeController.detroyMembro);
// Atualizar Equipe
equipeRouter.put('/equipe/:id', auth.auth, validationParams, validationBody(optionalEquipeSchema), equipeController.update);
// Deletar Equipe
equipeRouter.delete('/equipe/:id', auth.auth, validationParams, equipeController.destroy);

// Rotas de Campeonato
const campeonatoRouter = Router();
// Mostrar pelo ID de Campeonato
campeonatoRouter.get('/campeonato/:id', auth.auth, validationParams, campeonatoController.show);
// Mostrar pelo ID de Usuario
campeonatoRouter.get('/meus-campeonatos', auth.auth, campeonatoController.showMy);
// Mostrar utilizando filtro (Por padrão retorna todos os registros)
campeonatoRouter.post('/campeonatos', auth.auth, validationBody(optionalCampeonatoSchema), campeonatoController.filter);
// Cadastrar Campeonato
campeonatoRouter.post('/cadastrar-campeonato', auth.auth, validationBody(creationCampeonatoSchema), campeonatoController.store);
// Atualizar Campeonato
campeonatoRouter.put('/campeonato/:id', auth.auth, validationParams, validationBody(optionalCampeonatoSchema), campeonatoController.update);
// Deletar Campeonato
campeonatoRouter.delete('/campeonato/:id', auth.auth, validationParams, campeonatoController.destroy);

// Rotas de Resultado
const resultadoRouter = Router();
// Mostrar utilizando filtro (Por padrão retorna todos os registros)
resultadoRouter.post('/resultados', auth.auth, validationBody(optionalResultadoSchema), resultadoController.filter);
// Cadastrar Resultado
resultadoRouter.post('/cadastrar-resultado', auth.auth, validationBody(creationResultadoSchema), resultadoController.store);
// Atualizar Resultado
resultadoRouter.put('/resultado/:id', auth.auth, validationParams, validationBody(updateResultadoSchema), resultadoController.update);
// Deletar Resultado
resultadoRouter.delete('/resultado/:id', auth.auth, validationParams, resultadoController.destroy);

// Rotas do Usuario
const usuarioRouter = Router();
// Realizar Login
usuarioRouter.post('/login', validationBody(creationUsuarioSchema), usuarioController.login);
// Buscar por Email
usuarioRouter.post('/usuarios', auth.auth, validationBody(findUsuarioSchema), usuarioController.show);
// Teste de autenticação
usuarioRouter.get('/login/teste', auth.auth, usuarioController.test);

const router = Router();
router.use('/api/', usuarioRouter);
router.use('/api/', campeonatoRouter);
router.use('/api/', equipeRouter);
router.use('/api/', cidadeRouter);
router.use('/api/', esporteRouter);
router.use('/api/', resultadoRouter);

export { router };
