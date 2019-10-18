type keyType = string | number | symbol;
export const callableObject = <F extends Function, T extends object>(func: F, obj: T): F & T => <F & T>new Proxy(func, {
    get: (_, key: keyType) => obj[key],
    set: (_, key: keyType, value: any) => {
        obj[key] = value;
        return true;
    }
});