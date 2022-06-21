export default function updateRecipe(recipe){
    return dispatch =>{
        fetch(`http://localhost:3000/recipes/${recipe.id}`,{
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then(res=>{
            if(res.ok){
                return res.json();
            }
          })
          .then(res=>{
            dispatch({type:'DELETERECIPE_SUCCESS', data:res});
          })
          .catch(err=>{

          })
    }
}