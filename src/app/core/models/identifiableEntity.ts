import { Guid } from 'guid-typescript';

export abstract class IdentifiableEntity {
  abstract getId(): Guid;
}
