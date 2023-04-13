import { HTTPResponse } from "../types";
import { post } from "./request";


class Services {

    public quickReservation = (quick_reservation: any): Promise<any> => {

        // const formdata = new FormData();
        // formdata.append('quick_reservation', quick_reservation);

        // formdata.append('name_surname', quick_reservation.name_surname);
        // formdata.append('phone', quick_reservation.phone);
        // formdata.append('country', quick_reservation.country);
        // formdata.append('email', quick_reservation.email);

        // let name_surname = formdata.get('quick_reservation');
        // let name = name_surname.name_surname
        // console.log(name);

        return new Promise((resolve, reject) => {
            return post({
                url: `contactform/store`,
                body: quick_reservation,
                credentials: 'omit',
                // mode: 'no-cors'
            }).then((res: any) => {
                resolve(res);
            }).catch(this.handleError.bind(null, reject));
        });
    };

    // booking
    public booking = (booking_data: any): Promise<any> => {
        return new Promise((resolve, reject) => {
            return post({
                url: `bookingform/store`,
                body: booking_data,
                credentials: 'omit',
                // mode: 'no-cors'
            }).then((res: any) => {
                resolve(res);
            }).catch(this.handleError.bind(null, reject));
        });
    };
    // handle error
    private handleError = (reject: any, response: HTTPResponse): Promise<HTTPResponse> => {
        if (response.message === "Failed to fetch") {
            return reject({ message: "errors.server_is_down" });
        };

        const entity = response.entity;
        if (response.status && response.status === 401) {
            return Promise.resolve(response);
        };

        return reject({ message: entity });
    }
};

export default new Services();