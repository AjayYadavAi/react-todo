import React,{ useState,useContext } from 'react'

import { TodoContext } from '../TodoContext';

export default function Navbar(){
	const [todos,setTodos] = useContext(TodoContext)
	const [menu,setManu] = useState(false)
	const [value,setValue] = useState("")

	const addTodo = (e) =>{
		e.preventDefault()
		setTodos([...todos,{
			"id":Date.now(),
			"value":value,
			"done":false
		}])
		setValue("")
	}

	return (
		<div className="navbar has-shadow">
			<div className="navbar-brand">
				<div className="navbar-item">
					<p className="title">Easy Todo</p>
				</div>

				<p role="button" onClick={()=>setManu(!menu)} 
				className={`navbar-burger burger ${ menu ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</p>
			</div>					

			<div className={`navbar-menu ${ menu ? "is-active" : ""}`}>
				<div className="navbar-end">
					<div className="navbar-item">
						<form onSubmit={addTodo} className="field has-addons">
							<p className="control is-expanded">
								<input value={value}
								 onChange={(e) => setValue(e.target.value)}
								 type="text" className="input" />
							</p>
							<p className="control">
								<button className="button is-info has-text-weight-bold">
								Add Todo</button>
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}