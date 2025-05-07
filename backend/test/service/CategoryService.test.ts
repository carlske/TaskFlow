import { CategoryService } from '../../src/services/CategoryService';
import { AppDataSource } from "../../src/config/data-source";
import { Category } from '../../src/entity/Category';
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('../config/data-source', () => {
  return {
    AppDataSource: {
      getRepository: vi.fn(),
    },
  };
});

const mockFind = vi.fn();
const mockCreate = vi.fn();
const mockSave = vi.fn();

describe('CategoryService', () => {
  let service: CategoryService;

  beforeEach(() => {
    vi.clearAllMocks();

    (AppDataSource.getRepository as any).mockReturnValue({
      find: mockFind,
      create: mockCreate,
      save: mockSave,
    });

    service = new CategoryService();
  });

  it('should return all categories ordered by createdAt desc', async () => {
    const mockCategories = [{  name: 'Work', color : '#fff', createdAt: "20" }] as Category[];
    mockFind.mockResolvedValue(mockCategories);

    const result = await service.getAllCategories();
    debugger
    expect(AppDataSource.getRepository).toHaveBeenCalledWith(Category);
    expect(mockFind).toHaveBeenCalledWith({ order: { createdAt: 'DESC' } });
    expect(result).toEqual(mockCategories);
  });

});
