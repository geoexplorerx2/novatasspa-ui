import { useEffect, useState } from "react";

const useForm = (callback: any, validate: any, formType: any) => {

    const [values, setValues] = useState<any>({});
    const [errors, setErrors] = useState<any>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // submit if no errors
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]);

    const handleSubmit = () => {
        // if(event) event.preventDefault();
        setErrors(validate(values, formType));
        setIsSubmitting(true);
        
        // alert('thank you');

        return <div>Thank you</div>
    };

    const handleChange = (event: any, type: any = '') => {

        if (type === 'telephone') {
            setValues((value: any) => ({ ...value, 'phone': event }))
            // console.log('telvalue', event)
        }
        else if (type && type !== 'telephone') {
            setValues((value:any) => ({...value, [type]: event}))
        }
        else {
            // console.log('event::', event)

            event.persist();
            setValues((value: any) => ({ ...value, [event.target.name]: event.target.value }));
            // console.log('othervalue', values)
        }
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    };
};

export default useForm;