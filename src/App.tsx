import { useState } from "react"
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core"
import { SortableContext, verticalListSortingStrategy, arrayMove } from "@dnd-kit/sortable"
// Types
import { IUser } from "./types"
// Components
import User from "./components/User"

const App = () => {

  const [people, setPeople] = useState<IUser[]>(
    [
      { id: 1, name: 'John', age: 20 },
      { id: 2, name: 'Jane', age: 21 },
      { id: 3, name: 'Jack', age: 22 },
    ]
  )

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e

    // search for the index of the active user
    const oldIndex = people.findIndex((user) => user.id === active.id)
    const newIndex = people.findIndex((user) => user.id === over?.id)

    const newOrder = arrayMove(people, oldIndex, newIndex)
    setPeople(newOrder)
  }

  return (
    <div className="flex justify-center items-center">
      <div className="w-4/6 py-4">
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <h1 className="text-2xl font-bold">
            User list
          </h1>
          {/* sortable content */}
          <SortableContext items={people} strategy={verticalListSortingStrategy}>
            {people.map((user) => (<User user={user} key={user.id} />))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  )
}

export default App