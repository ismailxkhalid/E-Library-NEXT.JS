export interface Book {
  _id: string;
  title: string;
  description: string;
  coverImage: string;
  file: string;
  author: Auther;
}

export interface Auther {
  name: string;
}
