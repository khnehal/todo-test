export const getTodoListItems = () => async dispatch => {
    const data = await getData('/toDoItems')

	dispatch({
	  type: 'GET_TODOS',
	  payload: (data && data.todoList) ? data.todoList : []
	})
}


const getData = (url, params={})=> {
    return new Promise((resolve, reject)=> {
        fetch(`${url}`)
        .then((response)=> {
            if(response.status >= 400) {
                response.json().then((data)=>{
                    reject(data);
                })
                return;
            }
            console.log('response', response)
            response.json().then((data)=>{
                resolve(data);
            });
        }).catch((e)=> {
            console.log('ERROR', e);
            reject(e);
        });
    });
};