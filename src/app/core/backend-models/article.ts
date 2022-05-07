import { Image } from './image';

export interface Article {
  id: string;
  title: string;

  email: string;
  firstname: string;
  surname: string;
  author: string;
  sex: string;

  personal_code: number;
  phone: string;

  date: number;
  image: Image;
  images: Image[];
  intro: string;
  body: string;
  tags: string[];

  boolean: false;
}
