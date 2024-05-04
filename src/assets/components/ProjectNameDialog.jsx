import React, {
    forwardRef,
    useRef,
    useImperativeHandle,
    useState,
} from 'react'
import { createPortal } from 'react-dom'

const ProjectNameDialog = forwardRef(({ add_project }, ref) => {
    const [project_name, set_project_name] = useState('')
    const modal_ref = useRef()
    const input_ref = useRef()
    const close_button_ref = useRef()

    useImperativeHandle(
        ref,
        () => ({
            open: () => modal_ref.current.showModal(),
            close: () => modal_ref.current.close(),
        }),
        []
    )

    const handle_key_press = (e) => {
        const value = input_ref?.current?.value
        if (e.key === 'Enter') {
            // add project
            add_project(value)
            set_project_name('')
            //close_button_ref.current.click()
        }
    }

    return (
        <dialog className='w-50' ref={modal_ref}>
            <div className='flex p-3 bg-slate-200 shadow-2xl'>
                <input
                    value={project_name}
                    formNoValidate
                    ref={input_ref}
                    onKeyDown={handle_key_press}
                    onChange={(event) =>
                        set_project_name(event.target.value)
                    }
                    type='text'
                    name='project_name'
                    id='add_proj_input'
                    className=''
                />
                <form method='dialog'>
                    <button ref={close_button_ref}>Close</button>
                </form>
            </div>
        </dialog>
    )
})

export default ProjectNameDialog
