import { InvoiceService } from '../../services/index.js';
import paginate from '../../utils/paginate.js';

class ApiInvoiceController {
    getAll = async (req, res) => {
        try {
            const page = req.query.page || 1;
            const invoices = await InvoiceService.getAll();
            return paginate(invoices, page, 10);
        } catch (e) {
            return res.status(500).json(e.message);
        }
    }

    create = async (req, res) => {
        try {
            const { reservation_id, payment_status } = req.body;
            const invoice = await InvoiceService.create(reservation_id, payment_status);
            return res.status(200).json(invoice);
        } catch (e) {
            return res.status(500).json(e.message);
        }
    }
    search = async (req, res) => {
        try {
            const id = req.query.id;
            console.log(req.query.id)
            const invoices = await InvoiceService.search(id);
            return res.status(200).json(invoices);
        } catch (e) {
            return res.status(500).json(e.message);
        }
    }
}

export default new ApiInvoiceController();