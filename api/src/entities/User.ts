import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';

import { UserEntity } from '../types';

import { Event } from './Event';

@Entity()
export class User extends BaseEntity implements UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 30 })
  firstname: string;

  @Column({
    unique: true,
    length: 255,
  })
  email: string;

  @Column({ length: 30 })
  lastname: string;

  @ManyToOne(() => Event, (event) => event.user)
  event: Event;
}
