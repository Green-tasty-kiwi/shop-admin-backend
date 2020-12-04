module.exports = class UserResponseBuilder {
    build(user) {
        return {
            firstName: user.firstName,
            lastName: user.firstName,
            phone: user.phone,
            id: user.id,
        };
    }
};
