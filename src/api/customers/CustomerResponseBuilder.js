module.exports = class CustomerResponseBuilder {
    build(customer) {
        return {
            firstName: customer.firstName,
            lastName: customer.firstName,
            phone: customer.phone,
            city: customer.city,
            address: customer.address,
            house: customer.house,
            appartment: customer.appartment,
            id: customer.id,
        };
    }
};
