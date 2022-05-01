import { Image } from './image';

export interface Article {
  id: string;
  title: string;

  email: string;
  firstName: string;
  surname: string;
  author: string;
  sex: string;
  personalCode: number;
  phone: string;

  date: number;
  image: Image;
  images: Image[];
  intro: string;
  body: string;
  tags: string[];

  boolean: false;
}
