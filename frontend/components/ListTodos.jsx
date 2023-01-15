import React, { useEffect, useState } from 'react'

import EditTodo from './EditTodo'


function ListTodos() {
    const [todos, setTodos] = useState([])

    // Delete Todo Function
    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:3000/api/todos/${id}`, {
                method: "DELETE"
            })
            setTodos(todos.filter(todo => todo.todo_id !== id))
        } catch (err) {
            console.error(err.message)
        }
    }

    const getTodos = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/todos')
            const jsonData = await response.json()
            setTodos(jsonData)
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getTodos()
    }, [])

    //console.log(todos)

    return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center">
                                <thead className="bg-gray-800">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            #
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            First
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Last
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                            Handle
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {todos.map((todo, index) => (

                                        <tr key={todo.todo_id} className="bg-white">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {index + 1}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {todo.title}
                                            </td>
                                            {/* Delete Button */}
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <button
                                                    className="bg-red-500 text-white py-1 px-2 rounded"
                                                    onClick={() => deleteTodo(todo.todo_id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                            {/* Edit Button */}
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <EditTodo todo={todo} />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListTodos