import { MigrationInterface, QueryRunner } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export class DefaultCategories1714583010000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE category ADD COLUMN color TEXT`);

    const now = new Date().toISOString();

    const values = [
      ['Trabajo', uuidv4()],
      ['Estudio', uuidv4()],
      ['Casa', uuidv4()],
      ['Familia', uuidv4()],
      ['Diversión', uuidv4()],
    ];

    for (const [name, id] of values) {
      const color = this.generateRandomRGB();
      await queryRunner.query(
        `INSERT INTO category (id, name, color, createdAt) VALUES (?, ?, ?, ?)`,
        [id, name, color, now]
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM category`);
  }

  private generateRandomRGB(): string {
    const r = Math.floor(Math.random() * 200);
    const g = Math.floor(Math.random() * 200);
    const b = Math.floor(Math.random() * 200);
    return `rgb(${r},${g},${b})`;
  }
}
