import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import Input from '../Input';
import { FormDataContainer, FormGroupContainer } from './styles';

import cep from 'cep-promise'
import Select from '../Select';

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

    // OPTIONS FOR DEVICE SELECT
    const deviceTypesData = [
        {value: 'notebook', label: 'Notebook'},
        {value: 'desktop', label: 'Desktop'},
        {value: 'netbook', label: 'Netbook'},
        {value: 'printer', label: 'Impressora'},
        {value: 'scanner', label: 'Scanner'},
    ]

    // OPTIONS FOR STATES DEVICE SELECT
    const deviceStatesData = [
        {value: 'working', label: 'Tem todas as partes, liga e funciona normalmente'},
        {value: 'notWorking', label: 'Tem todas as partes, mas não liga mais'},
        {value: 'broken', label: 'Faltam peças, funciona só as vezes ou está quebrado'},
    ]
    return(
        <FormDataContainer>
             {/* PERSONAL DATA INPUTS */}
            <FormGroupContainer>
            <Input inputType='text' w={'100%'} label='Nome' placeholder='João' register={register('name')}/>
            <Input inputType='email' w={'50%'} label='E-mail' placeholder='joaosilva@gmail.com' register={register('email')}/>
            <Input inputType='text' w={'50%'} label='Telefone' placeholder='(44) 99999-9999' mask='phone' register={register('phone')}/>
            </FormGroupContainer>

            {/* ADDRESS DATA INPUTS */}
            <FormGroupContainer>
            <Input inputType='text' w={'50%'} label='CEP' placeholder='99999-999' mask='zipcode' register={register('zipcode')}/>
            <Input inputType='text' w={'50%'} label='Cidade' placeholder='Toledo' mask='city' register={register('city')}/>
            <Input inputType='text' w={'50%'} label='Estado' placeholder='PR' mask='state' register={register('state')}/>
            <Input inputType='text' w={'50%'} label='Bairro' placeholder='Vila Becker' register={register('neighborhood')}/>
            <Input inputType='text' w={'50%'} label='Endereço' placeholder='Av. São Paulo' register={register('streetAdress')}/>
            <Input inputType='text' w={'50%'} label='Número' placeholder='Av. São Paulo' register={register('number')}/>
            </FormGroupContainer>

            {/* AMOUNT OF DEDVICES TO DONATE */}
            <FormGroupContainer>
            <Input inputType='number' w={'50%'} label='Quantos equipamentos serão doados' placeholder='2' register={register('deviceCount')}/>
            </FormGroupContainer>

            {/* DEVICES INFORMATIONS */}
            <FormGroupContainer>
            <Select data={deviceTypesData} w={'50%'} placeholder='Tipo do dispositivo'/>
            <Select data={deviceStatesData} w={'50%'} placeholder='Estado do dispositivo'/>
            </FormGroupContainer>

            <Input inputType='submit' w={'50%'} placeholder='Enviar'/>

        </FormDataContainer>
    )
}

export default DataSubmissionForm;