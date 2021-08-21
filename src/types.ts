export interface Contact {
  id: number;
  name: string;
  age: number;
  description: string;
  phoneNumber: string;
  email: string;
}

export interface EditContact {
  id?: number;
  name?: string;
  age?: string;
  description?: string;
  phoneNumber?: string;
  email?: string;
}
