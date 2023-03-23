export const reducer =(state, action) => {
    if (action.type === 'remove-item') {
      return {
        ...state,
        item: state.item.filter((currItem) => currItem.id !== action.payLoad)
      }
    }
    if (action.type==='CLEAR-CART'){
      return{...state,item:[]}
    }

    // if (action.type ==='INCREMENT'){
    //   let updatedCount = state.item.map((currItem)=>{
    //     if (currItem.id === action.payLoad){
    //       return {...state,quantity: currItem.quantity+1}
          
    //     }
    //     return currItem
    //   })
    //   return updatedCount
    // }

    if (action.type === 'INCREMENT') {
      let updatedCount = state.item.map((currItem) => {
        if (currItem.id === action.payLoad) {
          return {
            ...currItem,
            quantity: currItem.quantity + 1
          };
        }
        return currItem;
      })
      return { ...state, item: updatedCount };
    }

    if (action.type==="DECREMENT"){
      let updatedCount = state.item.map((currItem)=>{
        if (currItem.id===action.payLoad){
          return {...currItem,quantity:currItem.quantity-1}
        }
        return currItem
      }).filter((currItem)=>{
        return currItem.quantity!==0
      })
      return{...state,item:updatedCount}
    }

    if (action.type==="GET_TOTAL"){
      let {totalItem, totalAmount} = state.item.reduce((accum,curVal)=>{
        let {price,  quantity} =curVal
        let updatedAmont=price*quantity
        accum.totalAmount+=updatedAmont
        accum.totalItem+=quantity
        return accum; 
      },{ totalItem: 0, totalAmount:0})
      return {...state, totalItem ,totalAmount}

    }
    
    
    return state
  }
  