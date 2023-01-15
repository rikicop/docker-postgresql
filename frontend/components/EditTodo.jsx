import React, { useState } from 'react'

function EditTodo({ todo }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            {/* RESPONSIVE MODAL */}
            {/* Button trigger modal */}
            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowModal(true)}>
                Edit
            </button>
            {/* Modal */}
            <div className={`fixed z-10 inset-0 overflow-y-auto ${showModal ? 'block' : 'hidden'}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    {/*
                        Background overlay, show/hide based on modal state.*/
                    }
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={() => setShowModal(false)}></div>
                    {/* 
                        This element is to trick the browser into centering the modal contents.
                    */}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    {/*

                        Modal panel, show/hide based on modal state.    
                    */}
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                        Edit Todo
                                    </h3>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            <input type="text" className="w-full p-2 border rounded" defaultValue={todo.title} />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Responsive Modal Footer , small screens one button under the other */}
                        <div className="bg-gray-50 px-4 py-3 sm:px-3 sm:flex sm:flex-row-reverse">
                            <button
                                type="button"
                                className="px-4 py-2 bg-green-600 text-white rounded mr-2 sm:w-auto sm:text-sm"
                                onClick={() => setShowModal(false)}
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                className="py-2 px-4 bg-red-600 text-white rounded mr-2 sm:w-auto sm:text-sm"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default EditTodo
