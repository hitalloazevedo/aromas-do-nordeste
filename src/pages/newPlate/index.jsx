import Form from '../../components/Form'
const NewPlate = () => {
    return (
        <>  
            <h1 style={{textAlign: 'center'}}>Cadastrar novo prato</h1>
            <Form operation={'post'}></Form>
        </>
    )
}

export default NewPlate