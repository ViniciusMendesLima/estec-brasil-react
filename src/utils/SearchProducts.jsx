import {Products} from '../data/Products'


export default function SearchProducts(category) {
  if (category) {
    const product = Products.filter((product) => product.category === category)
    
  return product.length > 0 ? product : null;
    
  } else {
    const product = Products

    return product.length > 0 ? product : null;
  }
}

