export declare class Http {
    private request;
    constructor();
    post<T>(path: string, body: any, type: new () => T): Promise<T>;
    get<T>(path: string, query: any, type: new () => T): Promise<T>;
    put<T>(path: string, body: any, type: new () => T): Promise<T>;
    delete<T>(path: string, query: any, type: new () => T): Promise<T>;
}
