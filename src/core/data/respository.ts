import type { AxiosError } from "axios";
import type { DataError } from "../domain/DataError";
import type CustomAxios from "../utility/customAxios";

export class BaseRepository {
    public axios;

    constructor({ axios }: { axios: CustomAxios }) {
        this.axios = axios;
    };

    handleErrors(error: AxiosError | any): DataError {
        if (error.response) {
            const axiosError = error as AxiosError;

            if (axiosError.response && axiosError.response.status >= 401 && axiosError.response.status <= 403) {
                return { kind: 'AuthenticationError', error: new Error('Token has Expired, kinldy Login Again') }
            }

            if (error?.response?.data?.errors) {
                return { kind: "ErrorFold", error: error?.response?.data?.errors }
            }
            if (error?.response?.data?.error) {
                return { kind: "ServerError", error: new Error(error?.response.data.error), errorCode: error.response.status }
            }
        }
        if (error.request) {
            return { kind: "UnexpectedError", error: new Error('Unexpected error occurred') }
        }
        else {
            return { kind: "UnexpectedError", error: new Error(error.message) }
        }
    }
}