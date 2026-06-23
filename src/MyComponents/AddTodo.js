// // import React, { useState } from 'react'
// // import Button from 'react-bootstrap/Button';
// // import Form from 'react-bootstrap/Form';

// // export const AddTodo = (props) => {
// //   const [title, setTitle] = useState("");
// //   const [desc, setDesc]= useState("");

// //   const submit =(e)=>{
// //     e.preventDefault();
// //     if(!title || !desc){
// //       alert("Title or Description cannot be blank");
// //     }
// //     props.addTodo(title,desc);
// //     setTitle("");
// //     setDesc("");
// //   }

// //   return (
// //     <div className = "container my-3">
// //       <h3>Add a Todo </h3>
// //       <Form onSubmit={submit}>
// //       <Form.Group className="mb-3" controlId="formBasicEmail">
        
// //         <Form.Label>Todo Title</Form.Label>
// //         <Form.Control type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}placeholder="Enter Title" />
// //       </Form.Group>

// //       <Form.Group className="mb-3" controlId="desc">
// //         <Form.Label>Todo Description</Form.Label>
// //         <Form.Control type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}}placeholder="Enter Description" />
// //       </Form.Group>
  
// //       <Button className="btn btn-sm" variant="success" type="submit">
// //        Add Todo
// //       </Button>
// //     </Form>
// //     </div>
// //   )
// // }

// import React, { useState } from "react";
// import "../style/AddTodo.css";

// const AddTodo = (props) => {
//   const [title, setTitle] = useState("");
//   const [desc, setDesc] = useState("");

//   const submit = (e) => {
//     e.preventDefault();

//     if (!title || !desc) {
//       alert("Title or Description cannot be blank");
//       return;
//     }

//     props.addTodo(title, desc);

//     setTitle("");
//     setDesc("");
//   };

//   return (
//     <div className="addtodo-container">

//       <div className="todo-card">

//         <h2>Add New Todo</h2>

//         <p className="todo-subtitle">
//           Organize your tasks and stay productive.
//         </p>

//         <form onSubmit={submit}>

//           <div className="input-group">
//             <label>Todo Title</label>

//             <input
//               type="text"
//               placeholder="Enter task title"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </div>

//           <div className="input-group">
//             <label>Description</label>

//             <textarea
//               rows="3"
//               placeholder="Enter task description"
//               value={desc}
//               onChange={(e) => setDesc(e.target.value)}
//             />
//           </div>

//           <button type="submit" className="todo-btn">
//             + Add Todo
//           </button>

//         </form>

//       </div>

//     </div>
//   );
// };

// export default AddTodo;

import React, { useState } from "react";
import axios from "axios";
import "../style/AddTodo.css";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    if (!title || !desc) {
      alert("Title or Description cannot be blank");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/todos",
        {
          title,
          desc,
        }
      );

      console.log(response.data);

      alert("Todo Added Successfully");

      setTitle("");
      setDesc("");
    } catch (error) {
      console.error(error);
      alert("Failed to add todo");
    }
  };

  return (
    <div className="addtodo-container">
      <div className="todo-card">
        <h2>Add New Todo</h2>

        <p className="todo-subtitle">
          Organize your tasks and stay productive.
        </p>

        <form onSubmit={submit}>
          <div className="input-group">
            <label>Todo Title</label>

            <input
              type="text"
              placeholder="Enter task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Description</label>

            <textarea
              rows="3"
              placeholder="Enter task description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          <button type="submit" className="todo-btn">
            + Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;