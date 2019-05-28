declare module '@duosecurity/duo_api' {

    interface DataCallback {
        (data: any): void;
    }

    class Client {
        constructor(iKey: string, sKey: string, host: string, sig_version?: number)
      public jsonApiCall(method: string, endpoint: string, payload: any, callback: DataCallback): any;
    }
  
  
    export { Client };
  }
  