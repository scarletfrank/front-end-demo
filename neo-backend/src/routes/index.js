import express from 'express';
import { indexPage, messagesPage, addMessage, photoPage } from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', addMessage);
indexRouter.post('/photo', photoPage);

export default indexRouter;
