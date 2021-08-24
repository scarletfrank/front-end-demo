import logger from 'morgan';
import express from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import _ from 'lodash';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index';
const app = express();

// enable files upload
app.use(fileUpload({
    createParentPath: true
}));

//add other middleware
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/v1', indexRouter);

export default app;
