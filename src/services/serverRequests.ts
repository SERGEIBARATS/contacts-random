import axios, { AxiosResponse } from 'axios';
import { RequestWrapperPayload } from '../types';

const instance: any = axios.create({
    baseURL: 'https://randomuser.me/api',
    headers: {
        'content-type': 'application/json'
    },
    timeout: 30000
});

export const requestWrapper = ({ method, url, params = {} }: RequestWrapperPayload) => {
    try {
            if (method === 'get') {
                return requestRetryWrapper(() => instance[method](url), url);
            }
            return requestRetryWrapper(() => instance[method](url, { ...params } ), url);
        }
    catch (error) {
        return Promise.reject(error);
    }
};


const requestRetryWrapper = (ajaxRequest: any, url: string) => new Promise<AxiosResponse>(async (resolve, reject) => {
    const secondRetry = async () => {
        try {
            const retry = await ajaxRequest();
            console.log(`${url} - second retry success`);
            return resolve(retry);
        } catch (error) {
            console.log(`${url} - second retry failed`);
            return reject(error);
        }
    };

    const firstRetry = async () => {
        try {
            const retry = await ajaxRequest();
            console.log(`${url} - first retry success`);
            return resolve(retry);
        } catch (error) {
            console.log(`${url} - first retry failed`);
            await secondRetry();
        }
    };

    try {
        const response = await ajaxRequest();
        console.log(`${url} - success`);
        return resolve(response);
    } catch (error) {
        console.log(`${url} - failed`);
        await firstRetry();
    }
});
