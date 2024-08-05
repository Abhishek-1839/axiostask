import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Axiostrial() {
    const data={id:'',name:'',username:'',email:'',address: { city: '' }}
    const [input,setInput]=useState(data)

    function HandleClick(e){
        const { name, value } = e.target;
        if (name === "city") {
            setInput({ ...input, address: { ...input.address, city: value } });
        } else {
            setInput({ ...input, [name]: value });
        }
    }
    function Submit(e){
        e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/users",input)
        .then((res)=>console.log(res))
    }
    // const [lis, setLis] = useState([]);

    // useEffect(()=>{
    //     const fetchUsers = async() => {
    //         const response = await  axios.get("https://jsonplaceholder.typicode.com/users");
    //         setLis(response.data);
    //         console.log(response.data);
    //     };
    //     fetchUsers();      
    // },[]);
  return (
    <>
    <div>axiostrial</div>
    <form action="" onSubmit={Submit} >
    ID:<input type="" name="id" id="" value={input.id} onChange={HandleClick} />
    Name:<input type="text" name="name" id="" value={input.name} onChange={HandleClick} />
    User Name:<input type="text" name="username" id="" value={input.username} onChange={HandleClick} />
    Email:<input type="text" name="email" id="" value={input.email} onChange={HandleClick} />
    City:<input type="text" name="city" id="" value={input.address.city} onChange={HandleClick} />
    <button type='submit'>Add</button>
    </form>
    {/* <p>{input}</p> */}
    {/* {lis.map((post)=>{
        // const {id, name} = post;
        
        return (
            <>
             <h3>ID:- {post.id}</h3>
            <div key={post.id} className='datas'>
            <h3>Name:- {post.name}</h3>
            <h3>Username:- {post.username}</h3>
            <h3>Email:- {post.email}</h3>
            <h3>City:- {post.address.city}</h3>
            </div>
            </>
        );
    })} */}
    </>)
}

export default Axiostrial