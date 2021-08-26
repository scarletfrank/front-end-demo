import express from 'express';
import { 
    indexPage, 
    messagesPage, 
    addMessage, 
    photoPage, 
    addEdges,
    edgesPage,
    syncEdge,
    nodesPage, 
    addNodes,
    syncNode 
} from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', addMessage);
indexRouter.post('/photo', photoPage);
indexRouter.post('/edges', addEdges);
indexRouter.get('/edges', edgesPage);
indexRouter.get('/nodes', nodesPage);
indexRouter.post('/nodes', addNodes);
indexRouter.get('/nodes/sync', syncNode);
indexRouter.get('/edges/sync', syncEdge);
export default indexRouter;
