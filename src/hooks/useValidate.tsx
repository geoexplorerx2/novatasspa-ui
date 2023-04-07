const useValidate = (values: any, type: any) => {
    let errors: any = {};
    switch (type) {
        case 'quickreservation':
            if(!values.namesurname){
                errors.namesurname = 'Name surname is required';
            }
            // if(!values.phone) {
            //     errors.phone = 'Phone Number is required';
            // }
            if(!values.quickreservation_email){
                errors.quickreservation_email = 'Email address is required';
            } else if(!/\S+@\S+\.\S+/.test(values.quickreservation_email)) {
                errors.quickreservation_email = 'Email address is invalid';
            }
            break;
        case 'booking':

            break;
        default:
            break;
    };  

    return errors;
};

export default useValidate;