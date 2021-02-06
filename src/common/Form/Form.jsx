/* eslint-disable react/jsx-no-duplicate-props */
import { Field, reduxForm } from "redux-form"
import { requiredField } from "./Validators.s"
import {Mytextarea, Myinput} from './Myareas'


let NewAForm = (props) => {
    debugger
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name='title' component={Myinput} validate = {[requiredField]} placeholder={'title'}/>
        </div>
        <div>
            <Field name='body' component={Mytextarea} placeholder={'body'} validate={[requiredField]} />
        </div>
        <div>
            <Field name='description.senderName' component={Myinput} placeholder={'senderName'} validate={[requiredField]} />
        </div>
        <div>
            <Field name='description.senderEmail' component={Myinput} placeholder={'senderEmail'} validate={[requiredField]} />
        </div>
    <button>
        Submit
    </button>
    </form>
}
NewAForm = reduxForm({ form: 'newAForm' })(NewAForm)

export default NewAForm