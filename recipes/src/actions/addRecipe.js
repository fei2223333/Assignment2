
export default function addRecipe(recipe){
    return dispatch =>{
        fetch('/recipes',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body:JSON.stringify(recipe),
          }).then(res=>{
            if(res.ok){
                return res.json();
            }
          })
          .then(res=>{
            dispatch({type:'ADDRECIPE_SUCCESS', data:res});
          })
          .catch(err=>{

          })
    }
}