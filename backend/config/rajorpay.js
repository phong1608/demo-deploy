import {VNPay,HashAlgorithm,VnpLocale} from 'vnpay'


exports.instance = new VNPay({
            tmnCode: process.env.VNPAY_TMN_CODE,
            hashAlgorithm:HashAlgorithm.SHA512 ,
            vnpayHost: process.env.VNPAY_HOST_URL,
            testMode: true,
            secureSecret: process.env.VNPAY_SECRET,
        })  