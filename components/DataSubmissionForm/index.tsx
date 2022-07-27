import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import Input from '../Input';
import { FormDataContainer } from './styles';

import cep from 'cep-promise'

const DataSubmissionForm = () => {
    const { register, handleSubmit, watch, setValue, setFocus,  } = useForm()

    const zipcode = watch('zipcode')
    const deviceCount = watch('deviceCount')

    async function getAddress(zipcode: string){

        const zipcodeFormatted = zipcode.replace(/\D/g, '')
        const test = await cep(zipcodeFormatted)
        console.log(test)
        setValue('city', test.city)
        setValue('state', test.state)
        setValue('neighborhood', test.neighborhood)
        setValue('streetAdress', test.street)

        if(test.city && test.state && test.neighborhood && test.street){
            setFocus('number')
        } else {
            setFocus('neighborhood')
        }

    }

    if(zipcode){
        console.log('test')
        if(zipcode.length >= 9){
           getAddress(zipcode)
        }
    }
    return(
        <FormDataContainer>
             {/* PERSONAL DATA INPUTS */}
            <Input inputType='text' label='Nome' placeholder='João' register={register('name')}/>
            <Input inputType='email' label='E-mail' placeholder='joaosilva@gmail.com' register={register('email')}/>
            <Input inputType='text' label='Telefone' placeholder='(44) 99999-9999' mask='phone' register={register('email')}/>

            {/* ADDRESS DATA INPUTS */}
            <Input inputType='text' label='CEP' placeholder='99999-999' mask='zipcode' register={register('zipcode')}/>
            <Input inputType='text' label='Cidade' placeholder='Toledo' mask='city' register={register('city')}/>
            <Input inputType='text' label='Estado' placeholder='PR' mask='state' register={register('state')}/>
            <Input inputType='text' label='Bairro' placeholder='Vila Becker' register={register('neighborhood')}/>
            <Input inputType='text' label='Endereço' placeholder='Av. São Paulo' register={register('streetAdress')}/>
            <Input inputType='text' label='Número' placeholder='Av. São Paulo' register={register('number')}/>

            {/* AMOUNT OF DEDVICES TO DONATE */}
            <Input inputType='number' label='Quantos equipamentos serão doados' placeholder='2' register={register('deviceCount')}/>

            <Input inputType='submit' placeholder='Enviar'/>

        </FormDataContainer>
    )
}

export default DataSubmissionForm;