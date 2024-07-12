import {  useParams } from "react-router-dom"
import { updateTodoforIdApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useEffect } from "react"
import { Formik , Form, Field, ErrorMessage } from "formik"


export  default function TodoComponent(){

    const {id} = useParams()

    const [description, setDescription] = useState("")
    const [targetDate, setTargetDate] = useState("")

    const authContext = useAuth()
    const username = useAuth.username

    useEffect(
        ()=>{
            retrieveTodos()
        },[id]
    )


    function retrieveTodos(){
        updateTodoforIdApi(username , id)
        .then(response => {setDescription(response)
            setTargetDate(response.data.targetDate)
        })
        .catch(err => console.log(err))
    }

    function onSubmit(){

    }

    function validate(values){
        let errors ={
            description : "Enter a description"
        }
        if(values.description.length < 5){
            errors.description = "Enter atleast 5 chracters"
        }
        return errors
    }

    return(
        <div className="container">
            <h1>Enter Todo Details</h1>
            <Formik initialValues = { {description , targetDate} }  enableReinialize = {true} onSubmit={onSubmit} validate={validate} validateOnChange = {false} validateOnBlur = {false} >
                {
                    (props)=>(
                        <Form >
                            <ErrorMessage
                                name="description" component= "div" className="alert-warning"
                            />
                            <fieldset className="form-group">
                                <label >Description</label>
                                <Field type = "text" className = "form-control" name = "description" ></Field>
                            </fieldset>

                            <fieldset className="form-group">
                                <label >Target Date</label>
                                <Field type = "date" className = "form-control"></Field>
                            </fieldset>

                            <div>
                                <button type="submit"></button>
                            </div>
                        </Form>
                    )
                        
                    
                }
            </Formik>
        </div>
    )
}