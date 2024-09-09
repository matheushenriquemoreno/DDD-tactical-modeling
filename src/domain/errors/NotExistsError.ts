export default class NotExistsError extends Error{
    constructor(msg: string) {
        super(msg);
    }
}