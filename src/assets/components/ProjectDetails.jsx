const ProjectDetails = ({ project, remove_task }) => {
    const {
        name,
        description,
        task,
        date: string_date,
        id: p_id,
    } = project

    const date = new Date(string_date)
    const month = date.getMonth() + 1 // Adding 1 because getMonth() returns zero-based month
    const day = date.getDate()
    const year = date.getFullYear()

    // Create the formatted string
    const taskJsx = task.map((task) => {
        return (
            <div className='flex justify-between w-full'>
                {task.task}
                <button onClick={() => remove_task(p_id, task.id)}>
                    Clear
                </button>
            </div>
        )
    })
    const formattedDate = `${month}/${day}/${year}`
    return (
        <div className='flex flex-col flex-wrap text-slate-300 items-start gap-2 p-4'>
            <div className='flex justify-between w-full'>
                <h1 className='font-extrabold text-xl'>{name}</h1>
                <button>Delete</button>
            </div>
            <div>
                <h2>{formattedDate}</h2>
            </div>
            <div>{description}</div>
            <div className='border-4 w-full h-1'></div>
            <div className='w-full'>
                <h1 className='font-extrabold text-xl'>Tasks</h1>
                <div className='bg-slate-900 shadow-xl w-full p-3 rounded-md'>
                    {taskJsx}
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
