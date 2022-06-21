
export default function fetchRecipe(){
    return dispatch =>{
        fetch('http://localhost:3000/recipes',{
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          })
          
          .then(res=>{
            if(res.ok){
                return res.json();
            }
          })
          .then(res=>{
            dispatch({type:'FETCHRECIPE_SUCCESS', data:res});
          })
          .catch(err=>{

          })
    }
}