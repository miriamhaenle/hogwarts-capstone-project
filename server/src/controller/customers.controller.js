import { Customer } from '../models/Customer.model.js';
import { findAll, findById, saveToDb } from '../lib/databaseHelpers.js';

async function getCustomers(_, res) {
  try {
    const customer = await findAll(Customer);
    res.json(customer);
  } catch (error) {
    res.json(error);
  }
}

async function getCustomer(req, res) {
  const customerId = req.params.customerId;
  try {
    const customer = await findById(Customer, customerId);
    res.json(customer);
  } catch (error) {
    res.json(error);
  }
}

async function postCustomer(req, res) {
  const newCustomer = new Customer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });
  try {
    const customer = await saveToDb(newCustomer);
    res.json(customer);
  } catch (error) {
    res.json(error);
  }
}

export { getCustomers, postCustomer, getCustomer };
