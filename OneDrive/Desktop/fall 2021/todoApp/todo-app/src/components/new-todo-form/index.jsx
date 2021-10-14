import {useForm} from 'react-hook-form';
import {Input} from '../input-field';
import './styles.css'
export const NewTodoForm =()=>{
const {register, handleSubmit, formState: {errors}}=useForm();

const onSubmit = (data)=>{
    console.log(data)
}
return(
    <form onSubmit={handleSubmit(onSubmit)}>
        {}
        <Input
        type="text"
        name="title"
        label="Todo (e.g do laundry)" errors={errors}
        register={register}
        validationSchema={
            {
            required:"todo text is required",
            minLength:{
                value: 3,
                message: "please enter at least 3 characters"
            }
        }
        } 
        required/>
        <Input
        type="date"
        name="title"
        label="due date" errors={errors}
        register={register}
        validationSchema={
            {
            required:"is required",
        
        }
        } required/>
        <input type="submit"/>
    </form>
)
}