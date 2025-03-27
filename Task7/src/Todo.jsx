export default function Todo({tasks}){
    return(
        <>
            <ul>
            {tasks.map((task, index) => (
            <li key={index} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.text}
            </li>
            ))}
        </ul>
        </>
    )
}