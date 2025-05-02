// tests/utils/wrapAsync.test.ts
import { describe, it, vi, expect } from 'vitest';
import { wrapAsync } from '../../src/utils/wrapAsync';

describe('wrapAsync', () => {
    it('should call the wrapped async function', async () => {
        const req = {} as any;
        const res = {} as any;
        const next = vi.fn();
        const fn = vi.fn().mockResolvedValue(undefined);

        const middleware = wrapAsync(fn);
        await middleware(req, res, next);

        expect(fn).toHaveBeenCalledWith(req, res, next);
        expect(next).not.toHaveBeenCalledWith(expect.any(Error));
    });

    it('should call with an error when function throws', async () => {
        const req = {} as any;
        const res = {} as any;
        const next = vi.fn(); 
        const error = new Error('Error :p');
        
        const fn = vi.fn().mockRejectedValue(error); 
    
        const middleware = wrapAsync(fn);
    
        await middleware(req, res, next);
    
        expect(fn).toHaveBeenCalledWith(req, res, next);     
        expect(next).toHaveBeenCalledWith(error);            
      });
});
