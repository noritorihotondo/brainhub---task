import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm';

import { EventEntity } from '../types';

import { User } from './User';

@Entity()
export class Event extends BaseEntity implements EventEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 30 })
  name: string;

  @Column({ length: 100 })
  date: string;

  @OneToMany(() => User, (user) => user.event)
  user: User[];
}
