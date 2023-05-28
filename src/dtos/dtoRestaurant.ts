export interface dtoCreateRestaurantes {
  id: string;
  name: string;
  street: string;
  city: string;
  type: string;
  password: string;
  cellphone: string;
  socialMidea: string;
  link: string;
  number: number;
}

export interface dtoUpdateRestaurantes {
  id: string;
  name: string;
  street: string;
  city: string;
  type: string;
  password: string;
  cellphone: string;
  socialMidea: string;
  link: string;
  number: number;
}

export interface dtoDeleteRestaurantes {
  password: string;
}
