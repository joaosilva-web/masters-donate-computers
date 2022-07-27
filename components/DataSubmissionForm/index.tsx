import { useForm } from 'react-hook-form'
import Input from '../Input';
import { FormDataContainer } from './styles';

const DataSubmissionForm = () => {
    const { register, handleSubmit, watch } = useForm()

    const name = watch('name')
    console.log(name)
    return(
        <FormDataContainer>
            <Input inputType='text' label='Nome' placeholder='João' register={register('name')}/>
            <Input inputType='email' label='E-mail' placeholder='joaosilva@gmail.com' register={register('email')}/>
            <Input inputType='text' label='Telefone' placeholder='(44) 99999-9999' mask='phone' register={register('email')}/>
        </FormDataContainer>
    )
}

export default DataSubmissionForm;