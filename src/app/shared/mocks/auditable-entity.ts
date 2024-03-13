import { Guid } from 'guid-typescript';

import { AuditableEntity } from '@backend-models/auditableEntity';

export const kittyTheCatUserId =
  Guid.parse('056e4e70-2420-4fa7-9055-52791f4b6ff0');
const kittyTheCatUserName = 'Kitty the cat';
const createdDate = new Date('01 Jan 2013 3:40:00 GMT');

const sharkyUserId = Guid.parse('59aa8074-7a31-4f75-af94-0400c6254f33');
const sharkyUserName = 'Sharky shark';
const lastModifiedDate = new Date('02 Dec 2013 3:40:00 GMT');

export const getAuditableEntityMock = (): AuditableEntity =>
  new AuditableEntity(
    kittyTheCatUserId,
    kittyTheCatUserName,
    createdDate,
    sharkyUserId,
    sharkyUserName,
    lastModifiedDate
  );
