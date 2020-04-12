import React, {useEffect} from 'react';
import { Form, Alert} from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form'

const EditPage = (props) =>{
    
    const{herosToEdit} = props
    
    useEffect(() => {
        
        const setItitData = () => {
            if(herosToEdit!==undefined){
                props.initialize({  id: herosToEdit.id, name: herosToEdit.name, about: herosToEdit.about, reasonofdie: herosToEdit.reasonofdie, whokilled: herosToEdit.whokilled, killedwepon: herosToEdit.killedwepon})
            }   
        };
        setItitData();
        // eslint-disable-next-line
    }, [herosToEdit]);
    
    if(herosToEdit!==undefined){
        return (
            <>
                <Form style={{width:'50%', margin:'20px auto'}} onSubmit={props.handleSubmit(props.editHeroOnSubmit)}>
                    <h1>Id героя - {herosToEdit.id}</h1>

                    <Field name={'id'} className='form-control' hidden component={'input'}/>
                    <Form.Group controlId="formGroupBody">
                        <Form.Label>Имя персонажа</Form.Label>
                        <Field name={'name'} className='form-control' component={'input'}/>
                    </Form.Group>
                    
                    <Form.Group controlId="formGroupBody">
                        <Form.Label>Описание персонажа</Form.Label>
                        <Field name={'about'} className='form-control' component={'input'}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupBody">
                        <Form.Label>Причина смерти</Form.Label>
                        <Field name={'reasonofdie'} className='form-control' component={'input'}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupBody">
                        <Form.Label>Кем убит</Form.Label>
                        <Field name={'whokilled'} className='form-control' component={'input'}/>
                    </Form.Group>
                    <Form.Group controlId="formGroupBody">
                        <Form.Label>Орудие убийства</Form.Label>
                        <Field name={'killedwepon'} className='form-control' component={'input'}/>
                    </Form.Group>
                    
                    
                    <button className='btn btn-primary'>Submit</button>
                    <div style={{marginTop:"10px"}}>
                        {
                        props.error ? 
                        <Alert  variant='danger'>
                                Error    {props.error}
                        </Alert>
                        : <span></span>
                        }
                    </div>
                </Form>
            </>
        );
    }
    return <span>Is LOADDING...</span>
    
}


const EditPageWhithFormRedux = reduxForm({
    form: 'editHeroForm'
  })(EditPage)



export default EditPageWhithFormRedux