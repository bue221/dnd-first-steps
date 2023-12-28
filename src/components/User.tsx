import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
// Types
import { IUser } from "../types"

interface IProps {
    user: IUser
}

const User: React.FC<IProps> = ({ user }) => {

    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: user.id })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    }

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            style={style}
            className="bg-white p-4 ruded-md shadow-md text-black my-2">
            <h1>{user.name}</h1>
        </div>
    )
}

export default User