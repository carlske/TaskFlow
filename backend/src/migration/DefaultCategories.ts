import { MigrationInterface, QueryRunner } from 'typeorm';

export class DefaultCategories implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO category (id, name, createdAt) VALUES
      (lower(hex(randomblob(16))), 'Trabajo', datetime('now')),
      (lower(hex(randomblob(16))), 'Estudio', datetime('now')),
      (lower(hex(randomblob(16))), 'Casa', datetime('now')),
      (lower(hex(randomblob(16))), 'Familia', datetime('now')),
      (lower(hex(randomblob(16))), 'Diversión', datetime('now'))
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM category`);
  }
}