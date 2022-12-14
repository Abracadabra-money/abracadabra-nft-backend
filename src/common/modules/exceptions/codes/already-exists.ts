import { Errors } from './errors.enum';

export const ALREADY_EXIST_ERRORS = {
    ALREADY_EXIST: {
        code: Errors.ALREADY_EXIST,
        message: 'Resource already exists',
    },

    OFFER_EXIST: {
        code: Errors.OFFER_EXIST,
        message: 'Offer already exists',
    },
};
