import Form from '../../components/Form'

const EditPlate = () => {
    return (
        <>
        <h1 style={{textAlign: 'center'}}>Editar prato</h1>
        <Form operation={'patch'}></Form>
        </>
    )
}

export default EditPlate