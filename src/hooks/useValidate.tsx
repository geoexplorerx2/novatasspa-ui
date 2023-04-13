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
        case 'booking':
            if (!values.reservation_date) {
                errors.reservation_date = 'Reservation Date is required';
            }
            if (!values.reservation_time) {
                errors.reservation_time = 'Reservation Time is required'
            }
            if (!values.name_surname) {
                errors.name_surname = 'Name & Surname is required'
            }
            if (!values.phone) {
                errors.phone = 'Phone Number is required'
            }
            if (!values.country) {
                errors.country = 'Country is required'
            }
            if (!values.email) {
                errors.email = 'Email is required'
            }
            if (!values.massage_package) {
                errors.massage_package = 'Massage Package is required'
            }
            if (!values.hammam_package) {
                errors.hammam_package = 'Hamam Package is required'
            }
            if (!values.male_pax) {
                errors.male_pax = 'Male Pax is required'
            }
            if (!values.female_pax) {
                errors.female_pax = 'Female Pax is required'
            }
            if (!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = 'Email address is invalid';
            }

            break;
        default:
            break;
    };

    return errors;
};

export default useValidate;