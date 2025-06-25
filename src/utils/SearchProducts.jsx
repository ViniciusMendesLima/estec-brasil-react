import {Products} from '../data/Products'

export default function SearchProducts(category) {
    const product = Products.filter((product) => product.category === category)
    
  return product.length > 0 ? product : null;
}

