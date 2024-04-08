import React, { createContext, useReducer } from 'react'
import { IdProducts } from '../interfaces/Products'
import { produce } from 'immer';

export const ProductsContext = createContext({} as IdProducts)
const initialState = {
  value: [] as IdProducts[],
}
const reducer = (state: any, action: any) => {
       switch(action.type){
        case "SET_PRODUCTS":
          state.value = action.payload;
          break;
        case "SET_PRODUCTS_BYID":
        state.value = action.payload;
        break;
        default:
          return state;
       }
}
const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
 const [products, dispatch] = useReducer(produce(reducer),initialState);
 
  return (
    <div>
<ProductsContext.Provider value={{products , dispatch}}>
{children}
</ProductsContext.Provider>

    </div>
  )
}

export default ProductsProvider