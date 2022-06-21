export default function updateRecipe(recipe){
    return dispatch =>{
        fetch(`http://localhost:3000/recipes/${recipe.id}`,{
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipe),
          })
          
          .then(res=>{
            if(res.ok){
                return res.json();
            }
          })
          .then(res=>{
            dispatch({type:'UPDATERECIPE_SUCCESS', data:res});
          })
          .catch(err=>{

          })
    }
}