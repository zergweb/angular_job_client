import {environment as conf} from './environment.dev';
import { AppConfig } from './app-config';

export const environment: AppConfig = {
    production: conf.production,
    BASE_API_URL: conf.BASE_API_URL
};
