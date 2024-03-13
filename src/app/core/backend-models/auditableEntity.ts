import { Guid } from 'guid-typescript';

export class AuditableEntity {
  readonly ownerId: Guid;
  readonly owner: string;
  readonly createdDate: Date;

  readonly lastModifiedById: Guid | null = null;
  readonly lastModifiedBy: string | null = null
  readonly lastModifiedDate: Date | null = null

  constructor(
    ownerId: Guid,
    owner: string,
    createdDate: Date,

    lastModifiedById: Guid | null = null,
    lastModifiedBy: string | null = null,
    lastModifiedDate: Date | null = null) {

    this.ownerId = ownerId;
    this.owner = owner;
    this.createdDate = createdDate;

    this.lastModifiedById = lastModifiedById;
    this.lastModifiedBy = lastModifiedBy;
    this.lastModifiedDate = lastModifiedDate;
  }

}
