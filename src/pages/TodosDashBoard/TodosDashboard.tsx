
import SearchQuery from "@components/DashBoard/SearchQuery/SearchQuery"


import TodosList from "@components/DashBoard/Todolist/TodoList"
import TodolistFilter from "@components/DashBoard/TodolistFilter/TodoListFilter"
import AddTodoModal from "@components/modals/AddTodoModal"

import { TStatusType } from "@customtypes/index"
import { useState } from "react"
import {  Button, Col, Row  } from "react-bootstrap"




const TodosDashboard = () => {
  const [statusFilter,setStatuFilter]=useState<TStatusType>("all")
  const [searchQuery, setSearchQuery] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);

  // Functions to open and close the modal
  const handleShowAddModal = () => setShowAddModal(true);
  const handleCloseAddModal = () => setShowAddModal(false);


  return (
    <>

    <Row className="container">
        <Col md={9} >
        <TodosList statusFilter={statusFilter} searchQuery={searchQuery}/>
        </Col>
        <Col >
        <div className="d-grid gap-2 mb-4">
            <Button variant="primary" size="lg" onClick={handleShowAddModal}>
              + Add New Todo
            </Button>
        </div>
        <SearchQuery searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {searchQuery.length === 0 && (
          <TodolistFilter
            statusFilter={statusFilter} 
            setStatuFilter={setStatuFilter}
          />
        )}

        </Col>
    </Row>
    <AddTodoModal show={showAddModal} handleClose={handleCloseAddModal} />
    
    </>

  )
}

export default TodosDashboard