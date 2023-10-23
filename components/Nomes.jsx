export default ({ objs, deletar }) => {
    return (
        <div>
            {objs.map(obj => {
                return <div>
                    <div>{obj.nome}</div>
                    <button onClick={() => deletar(obj.id)}>X</button>
                </div>
            })}
        </div>
    )
}