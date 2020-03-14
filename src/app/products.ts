export type Product = {
  /**
   * Nome do produto
   */
  name: string;
  /**
   * Preço do produto
   */
  price: number;
  /**
   * Descrição do produto
   */
  description: string
}

const products: Product[] = [
  {
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    name: 'Phone Standard',
    price: 299,
    description: ''
  }
];

export default products;

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/