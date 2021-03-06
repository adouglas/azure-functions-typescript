interface Context {
    invocationId: string;
    bindingData: any;
    bindings: any;

    log(text: any, data?: any): void;

    done(err?: any, output?: { [s: string]: any }): void;
}

export {Context}
