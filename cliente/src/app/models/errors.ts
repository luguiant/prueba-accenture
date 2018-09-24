import { HttpHeaders } from '@angular/common/http';

export class Errors {
    constructor(
        public error: any,
        public headers: HttpHeaders,
        public message: string,
        public name: string,
        public ok: boolean,
        public status: number,
        public statusText: string,
        public url: string,
    ) {}
}