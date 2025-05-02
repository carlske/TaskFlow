export class BaseError extends Error {
    code: string
  
    constructor(message: string, code: string = 'UNKNOWN_ERROR') {
      super(message)
      this.name = new.target.name
      this.code = code
  
      Object.setPrototypeOf(this, new.target.prototype)
    }
  }
  