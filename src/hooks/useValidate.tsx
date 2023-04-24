import { error } from "console";

const useValidate = (values: any, type: any) => {
    let errors: any = {};
    switch (type) {
        case 'quickreservation':
            if (!values.namesurname) {
                errors.namesurname = 'Name surname is required';
            }
            if (!values.phone) {
                errors.phone = 'Phone Number is required';
            }
            if (values.phone.length < 7) {
                errors.phone = 'Phone Number is invalid'
            }
            if (!values.quickreservation_email) {
                errors.quickreservation_email = 'Email address is required';
            } else if (!/\S+@\S+\.\S+/.test(values.quickreservation_email)) {
                errors.quickreservation_email = 'Email address is invalid';
            }
            break;
        case 'contactForm':
            if (!values.namesurname) {
                errors.namesurname = 'Name surname is required';
            }
            if (!values.phone) {
                errors.phone = 'Phone Number is required';
            }
            if (values.phone.length < 7) {
                errors.phone = 'Phone Number is invalid'
            }
            if (!values.quickreservation_email) {
                errors.quickreservation_email = 'Email address is required';
            } else if (!/\S+@\S+\.\S+/.test(values.quickreservation_email)) {
                errors.quickreservation_email = 'Email address is invalid';
            }
            break;

        case 'booking':
            if(!values.booking_name_surname) errors.booking_name_surname = 'Name Surname is required';
            if(!values.date) errors.date = 'Reservation date is required';
            console.log('values', values)
            if(!values.time) errors.time = 'Reservation time is required';
            if(values.guests.maleCount === 0 && values.guests.femaleCount === 0) errors.guests = 'Guests count is required';

            if (!values.phone) {
                errors.phone = 'Phone Number is required';
            }
            if (values.phone.length < 7) {
                errors.phone = 'Phone Number is invalid'
            }
            if(!values.email){
                errors.email = 'Email address is required';
            } else if(!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = 'Email address is invalid';
            }
            if(!values.email){
                errors.email = 'Email address is required';
            }

            // if(Object.keys(values.hammam).length == 0 || !values.hammam || !Object.keys(values?.hammam).find(key => values?.hammam[key] == true)) errors.hammam = 'Hammam is required';
            // if(Object.keys(values.massages).length == 0 || !values.massages || !Object.keys(values?.massages).find(key => values?.massages[key] == true)) errors.massages = 'Massages is required';

            break;
        default:
            break;
    };

    return errors;
};

export default useValidate;