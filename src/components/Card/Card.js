import { Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";

const Card = ({ aliments }) => {
  
  return (
    <div className="container">
    <Droppable droppableId="itemsList">
      {(provided) => (
        <div className="progress" ref={provided.innerRef} {...provided.droppableProps}> In progress
          <ul >
          {aliments.map((item,index) =>
            <Draggable draggableId={item.id.toString()} index={index}>
              {(provided) => (
                <div {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}>
                  <li
                    style={{height: '50px', width:"300px", background:'white', margin: '1rem'}}
                    id={item.id}
                    key={item.name}>
                      {item.name}
                  </li>
                </div>
              )}
            </Draggable>
          )}
          </ul>
          {provided.placeholder}
        </div>
        
      )}
    </Droppable>
    {/* <Droppable droppableId="itemsRemove">
      {(provided) => (
        <div className="complete" ref={provided.innerRef} {...provided.droppableProps}> Complete TASKS
          <ul >
          {completed.map((item,index) => 
            <Draggable draggableId={item.id.toString()} index={index}>
              {(provided) => (
                <div {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}>
                  <li
                    style={{height: '50px', width:"300px", background:'white', margin: '1rem'}}
                    key={item.id}>
                      {item.name}
                  </li>
                </div>
              )}
            </Draggable>
          )}
          </ul>
        </div>
      )}
    </Droppable> */}
    </div>
  )
}

// On veut modifier un state ,
// on envoi l'action au reducer via le dispatcher, l'action devra avoir une propriété type obligatoirement,
// en fonction du type de l'action le reducer va éffectuer une action sur le state

export default Card

// A COPIER DANS APP ====>


// <DragDropContext onDragEnd={onDragEnd}>
// <Card aliments={aliments}/>
// </DragDropContext>

 // const dispatch = useDispatch();
  // const onDragEnd = (result) => {
  //   const { destination, source } = result;
  //     const itemDrag = aliments[source.index];
  //     const itemToMove = aliments[destination.index];
  //     const copyAliments = [...aliments]
  //     console.group('log')
  //     console.log(copyAliments)
  //     console.groupEnd()
  //     console.log(copyAliments)

  //     copyAliments.splice(source.index,1);
  //     copyAliments.splice(destination.index,0,itemDrag);


  //   }
  //   console.log(aliments)
  //   dispatch(setAliments(aliments));