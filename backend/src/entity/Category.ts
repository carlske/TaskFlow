import { Entity, PrimaryColumn, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Category {
  
  @PrimaryGeneratedColumn('uuid')   
  id: string;

  @Column()
  name: string;

  @Column('text', { nullable: false })
  color: string;

  @CreateDateColumn()
  createdAt: Date;

}
