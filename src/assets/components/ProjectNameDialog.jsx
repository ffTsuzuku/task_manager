import {
    forwardRef,
    useImperativeHandle,
    useReducer,
    useRef,
    useState,
} from 'react'
import { createPortal } from 'react-dom'

const ProjectNameDialog = forwardRef(
    ({ input_value, update_input_value }, ref) => {
        const modal_ref = useRef()

        useImperativeHandle(ref, () => ({
            open: () => modal_ref.current.showModal(),
        }))

        const handleSave = (event) => {
            event.target.value
        }
        return createPortal(
            <dialog className='w-50' ref={modal_ref}>
                <input type='text' value={input_value} />
                <button>Save</button>
            </dialog>,
            document.getElementById('add_proj')
        )
    }
)

export default ProjectNameDialog
