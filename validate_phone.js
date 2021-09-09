function validate_phone(phone) {
    var t = phone.replace(/\D/gim, '');
    if (t.length >= 11) {
        return true;
    } else {
        return false;
    }
}
