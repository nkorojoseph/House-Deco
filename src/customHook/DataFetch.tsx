import React, {useEffect, useReducer} from 'react'


interface initialState {

    title: string;
    author: string;
    error: string;
    posts: []
}

const initialState:initialState = {
    title: '',
    author: '',
    error: '',

    posts: []
}

const reducer = (state:any, action:any)=>{
    switch (action.type) {
        case "FETCH_START": {
            return {
                ...state,
                loading: true,
            };
        }

        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                posts: action.payload,
                error: ''
            }
        case 'FETCH_FAIL':
            return {
                ...state,
                loading:false,
                error: "Error fetching value",
                posts: {}
            }
    
        default:
            return state;
    }
}

export const DataFetch = ():JSX.Element => {
    const [state, dispatch] = useReducer(reducer,initialState)
    const { posts, loading, error } = state;

    useEffect( () => {
        const FetchData = async () => {
            try {
                dispatch({ type: 'FETCH_START' });
                const data = await fetch('http://localhost:3000/comments')
                const posts = await data.json()
                dispatch({type:'FETCH_SUCCESS', payload: posts})  
            } catch (error) {
                dispatch({type:'FETCH_FAIL'})
            }
        }
        
        FetchData()
        
    },[])

    return (
        <div>
        {loading ? (
            <p>loading...</p>
        ) : error ? (
            <p>{error}</p>
        ) : (
            <ul>
                {
                    posts.map((user:any) => (
                    <li key={user.id}>
                        <h1>{user.body}</h1>
                       
                    </li>
                    ))
                }
            </ul>
        )}
    </div>
    )
}

export default DataFetch
