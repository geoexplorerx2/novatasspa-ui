import { HTTPResponse } from "../types";
import { post } from "./request";


class Services {

    public quickReservation = (quick_reservation: any): Promise<any> => {
        // const formdata = new FormData(registry);
        return new Promise((resolve, reject) => {
            return post({
                url: `contactform/store`,
                body: quick_reservation,
                // cors: ''
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