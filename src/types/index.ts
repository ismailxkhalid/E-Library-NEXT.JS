export interface Book {
  _id: string;
  title: string;
  description: string;
  coverImage: string;
  file: string;
  genre: string;
  price: number;
  author: Auther;
}

export interface Auther {
  name: string;
}
