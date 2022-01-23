import mongoose from 'mongoose'
const { Schema,model } = mongoose;

const productSchema = new Schema({
  productId: {type: String, auto: true},
  name:  {type:String, required: true}, // String is shorthand for {type: String}
  price: {type: Number, required: true},
  stock: {type: Number, required: true}
});

const PRODUCT = model('Product', productSchema);

const paymentMethodSchema = new Schema({
    methodId: {type: String, auto: true},
    methodData: {
        methodName: String,
        stock: Number
    }
})

const PAYMENT_METHOD = model('Payment',paymentMethodSchema);

const incomeSchema = new Schema({
    cash: Number,
    coin: Number
})

const INCOME = model('payment',incomeSchema);

export {
    PRODUCT,
    PAYMENT_METHOD,
    INCOME
};

