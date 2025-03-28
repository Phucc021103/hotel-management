import Transport from '../models/transport.model.js';
import { ErrorMessage } from '../error/message.error.js';

const getAll = async () => {
    try {
        const transports = Transport.find().populate("guest");
        return await transports;
    } catch (e) {
        return ErrorMessage(400, "Transport not found");
    }
}
const getTransportById = async (id) => {
    try {
        const transport = Transport.findById(id).populate("guest");
        return await transport;
    } catch (e) {
        return ErrorMessage(400, "Transport not found");
    }
}
export default { getAll, getTransportById }